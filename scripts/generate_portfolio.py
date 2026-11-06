from pathlib import Path
import json,io,shutil,argparse
from xml.sax.saxutils import escape
from PIL import Image as PILImage
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from reportlab.lib.pagesizes import A4
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--assets',type=Path,default=ROOT.parent/'output/images-optimisees');parser.add_argument('--output',type=Path,default=ROOT/'frontend/public/home/Portfolio_Mohamed_Reda_MARZOUQ.pdf');args=parser.parse_args()
data=json.loads((ROOT/'scripts/contenu-pdf.json').read_text(encoding='utf-8'))
for name,file in [('Regular','segoeui.ttf'),('Bold','segoeuib.ttf')]:pdfmetrics.registerFont(TTFont(name,'C:/Windows/Fonts/'+file))
W,H=A4;left=44;wide=W-88;ink=HexColor('#142b30');muted=HexColor('#50636a');accent=HexColor('#147966');line=HexColor('#d7e3df');paper=HexColor('#f3f7f4')
args.output.parent.mkdir(parents=True,exist_ok=True);c=canvas.Canvas(str(args.output),pagesize=A4,pageCompression=1);c.setTitle('Portfolio - Mohamed Reda MARZOUQ');c.setAuthor('Mohamed Reda MARZOUQ');page=0
styles={key:ParagraphStyle(key,fontName=font,fontSize=size,leading=leading,textColor=color,spaceAfter=0) for key,font,size,leading,color in [('body','Regular',10,15,ink),('small','Regular',8,11,muted),('title','Bold',26,31,ink),('sub','Bold',12,17,accent),('hero','Bold',43,48,ink)]}
def para(text,x,y,width=wide,style='body'):
 p=Paragraph(escape(text).replace('\n','<br/>'),styles[style]);_,h=p.wrap(width,H);p.drawOn(c,x,y-h);return y-h

def start(label):
 global page
 page+=1;c.setFillColor(HexColor('#ffffff'));c.rect(0,0,W,H,fill=1,stroke=0);c.setStrokeColor(accent);c.setLineWidth(3);c.line(left,H-38,left+34,H-38);para(label.upper(),left+48,H-31,wide-48,'small');c.setStrokeColor(line);c.setLineWidth(.5);c.line(left,42,W-left,42);para('MOHAMED REDA MARZOUQ  /  PORTFOLIO',left,31,400,'small');para(f'{page:02d} / 13',W-85,31,50,'small')
def end(y=60):
 assert y>=50,(page,y);c.showPage()
manifest={a['id']:a for a in json.loads((args.assets/'selection-et-traitements.json').read_text(encoding='utf-8'))} if (args.assets/'selection-et-traitements.json').exists() else {}
def img(media,x,y,w,h):
 source=args.assets/manifest[media['sourceId']]['master'] if media['sourceId'] in manifest else ROOT/'frontend/public'/media['src'].lstrip('/')
 im=PILImage.open(source).convert('RGB');im.thumbnail((1800,1800),PILImage.Resampling.LANCZOS)
 if media['sourceId'] in [1,4,5,11,14,15,17,19,20,21,22]:
  b=io.BytesIO();im.save(b,format='JPEG',quality=90,subsampling=0);b.seek(0);reader=ImageReader(b)
 else:reader=ImageReader(im)
 scale=min(w/im.width,h/im.height);iw=im.width*scale;ih=im.height*scale;c.setFillColor(paper);c.rect(x,y-h,w,h,fill=1,stroke=0);c.drawImage(reader,x+(w-iw)/2,y-h+(h-ih)/2,iw,ih,mask='auto')
 return y-h
site='https://marreda906-commits.github.io/portfolio/'
start('Ingénierie / ENSAM Meknès');y=para('Mohamed Reda\nMARZOUQ',left,740,wide,'hero');y=para('Élève ingénieur en génie électromécanique',left,y-24,wide,'sub');y=para('Concevoir, automatiser et fiabiliser\nles systèmes industriels.',left,y-25,wide,'title');img({'sourceId':1,'src':'/home/01.webp'},left,480,210,260);para('MÉCANIQUE\nÉLECTROTECHNIQUE\nAUTOMATISATION\nVISION INDUSTRIELLE\nSYSTÈMES EMBARQUÉS',285,460,240,'sub');para('Commande et Maintenance Industrielles\nMeknès, Maroc\nÉdition novembre 2026',285,310,240);para(site,left,165,wide,'small');c.linkURL(site,(left,145,W-left,170),relative=0);para('Sélection de projets, méthodes et expériences. Les résultats présentés restent limités aux informations documentées.',left,115);end()
start('Parcours de lecture');y=para('Une vision d’ensemble.',left,755,wide,'title');y=para(data['about']['paragraphs'][0],left,y-24);y=para(data['about']['paragraphs'][1],left,y-16);y-=34
for n,p in enumerate(data['projects']):
 y=para(f'{n+3:02d}  /  '+p['title'],left,y,wide,'sub');y=para(p['category'],left+29,y-3,wide-29,'small');y-=17
para('11 / Compétences   ·   12 / Expériences   ·   13 / Formation & contact',left,140,wide,'small');para('Les visuels à provenance non confirmée sont signalés comme illustrations. Les valeurs visibles dans les captures ne sont pas extrapolées en performances industrielles.',left,108,wide,'small');end()
for n,p in enumerate(data['projects']):
 start(f'Projet {n+1:02d} / {p["context"]}');y=para(p['title'].replace(' — ',' - '),left,760,wide,'title');y=para(p['date']+'  |  '+p['status'],left,y-12,wide,'small');y=para(' / '.join(p['tags']),left,y-8,wide,'small');top=y-18
 # Cover at a generous width; no cropping of technical information.
 img(p['cover'],left,top,wide,210);y=para(p['cover']['caption'],left,top-218,wide,'small');y-=16
 y=para('LE BESOIN',left,y,wide,'sub');y=para(p['objective'],left,y-5);y-=12
 y=para('MA CONTRIBUTION',left,y,wide,'sub')
 for w in p['work']:y=para('• '+w,left,y-5)
 y-=12;y=para('MÉTHODE',left,y,wide,'sub');y=para(' → '.join(p['steps']),left,y-5,wide,'body');y-=12
 y=para('RÉSULTATS & PÉRIMÈTRE',left,y,wide,'sub');y=para(p['outcomes'],left,y-5)
 url=site+'projects/'+p['slug']+'/';para('Galerie complète et détails sur le site →',left,65,wide,'small');c.linkURL(url,(left,50,W-left,68),relative=0);end(y)
start('Domaines & technologies');y=para('Une pratique pluridisciplinaire.',left,755,wide,'title');y-=30
for skill in data['skills']:
 y=para(skill['title'],left,y,wide,'sub');y=para(' · '.join(skill['items']),left,y-7);y-=21
end(y)
start('Expériences professionnelles');y=para('L’ingénierie sur le terrain.',left,755,wide,'title');y-=28
for e in data['experiences']:
 y=para(e['organization'],left,y,wide,'sub');y=para(e['date']+' / '+e['location'],left,y-5,wide,'small');y=para(e['title'],left,y-10)
 for d in e['details']:y=para('• '+d,left,y-7)
 y-=30
img({'sourceId':19,'src':'/home/19.webp'},left,y,wide/2-8,180);img({'sourceId':20,'src':'/home/20.webp'},left+wide/2+8,y,wide/2-8,180);y=para('Stage LafargeHolcim : équipement HAVER et photographie de terrain.',left,y-190,wide,'small');end(y)
start('Formation & contact');y=para('Construire la suite.',left,755,wide,'title');y-=35
for e in data['education']:
 y=para(e['date']+' / '+e['place'],left,y,wide,'small');y=para(e['title'],left,y-8,wide,'sub');y=para(e['detail'],left,y-6);y-=25
y=para('LANGUES',left,y,wide,'sub');y=para(' · '.join(data['about']['languages']),left,y-8);y-=38;y=para('ÉCHANGEONS',left,y,wide,'sub')
for label,url in [('m.reda.marzouq@gmail.com','mailto:m.reda.marzouq@gmail.com'),('+212 6 21 67 05 52','tel:+212621670552'),('LinkedIn / mohamed-reda-marzouq','https://www.linkedin.com/in/mohamed-reda-marzouq'),('GitHub / marreda906-commits/portfolio','https://github.com/marreda906-commits/portfolio'),(site,site)]:
 top=y-12;y=para(label,left,top);c.linkURL(url,(left,y,W-left,top),relative=0)
para('Meknès, Maroc · ENSAM Meknès\nDiplôme d’ingénieur préparé, échéance 2027.',left,130,wide,'small');end(y);assert page==13;c.save();print(str(args.output),args.output.stat().st_size)
