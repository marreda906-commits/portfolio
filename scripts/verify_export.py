from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin, urlsplit, unquote
from urllib.request import urlopen
import sys, hashlib, json

root = Path(sys.argv[1]).resolve()
base = sys.argv[2].rstrip('/') + '/'
prefix = urlsplit(base).path.rstrip('/')

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.refs=[]; self.ids=set(); self.h1=0; self.feed(text)
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if a.get('id'): self.ids.add(a['id'])
        if tag=='h1': self.h1 += 1
        if tag in ('a','link') and a.get('href'): self.refs.append(a['href'])
        if tag in ('img','script') and a.get('src'): self.refs.append(a['src'])

pages={p:Page(p.read_text(encoding='utf-8')) for p in root.rglob('*.html')}
errors=[]; urls=set(); fragments=0
for file,page in pages.items():
    if page.h1 != 1: errors.append(f'{file}: expected one h1, got {page.h1}')
    relative=file.relative_to(root).as_posix()
    page_url=base+relative.removesuffix('index.html')
    for ref in page.refs:
        url=urlsplit(urljoin(page_url,ref))
        if url.scheme not in ('http','https') or url.netloc!=urlsplit(base).netloc: continue
        if prefix and not (url.path==prefix or url.path.startswith(prefix+'/')):
            errors.append(f'Prefix missing: {ref}'); continue
        path=unquote(url.path[len(prefix):]).lstrip('/')
        target=root/path
        if target.is_dir(): target=target/'index.html'
        if not target.is_file(): errors.append(f'Missing resource: {ref} from {relative}'); continue
        urls.add(url._replace(fragment='',query='').geturl())
        if url.fragment:
            fragments+=1
            if target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f'Missing anchor: {ref}')
for url in sorted(urls):
    try:
        with urlopen(url) as response:
            if response.status != 200: errors.append(f'HTTP {response.status}: {url}')
    except Exception as e: errors.append(f'HTTP error {url}: {e}')
print(json.dumps({'pages':len(pages),'local_urls_checked':len(urls),'anchors_checked':fragments,'errors':errors},ensure_ascii=False,indent=2))
if errors: sys.exit(1)
