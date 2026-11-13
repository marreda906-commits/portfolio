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
from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser();parser.add_argument('--assets',type=Path,default=ROOT.parent/'output/images-optimisees');parser.add_argument('--output',type=Path);parser.add_argument('--quality',choices=['high','light'],default='high');args=parser.parse_args()
if args.output is None:
 args.output=ROOT.parent/'output/pdf'/('Portfolio_Mohamed_Reda_MARZOUQ_V2.pdf' if args.quality=='high' else 'Portfolio_Mohamed_Reda_MARZOUQ_V2_Legere.pdf')
data=json.loads((ROOT/'scripts/contenu-pdf.json').read_text(encoding='utf-8'))
for name,file in [('Regular','segoeui.ttf'),('Bold','segoeuib.ttf')]:pdfmetrics.registerFont(TTFont(name,'C:/Windows/Fonts/'+file))
W,H=A4;left=44;wide=W-88;ink=HexColor('#101a21');muted=HexColor('#56686b');accent=HexColor('#4f8173');sage=HexColor('#83b7a7');bronze=HexColor('#b78355');ivory=HexColor('#e9f0ec');line=HexColor('#d3ded9');paper=HexColor('#f2f5f1');TOTAL=14
args.output.parent.mkdir(parents=True,exist_ok=True);c=canvas.Canvas(str(args.output),pagesize=A4,pageCompression=1);c.setTitle('Portfolio V2 - Mohamed Reda MARZOUQ');c.setSubject('Neuf projets en génie électromécanique, automatisation, vision industrielle, énergie et maintenance');c.setAuthor('Mohamed Reda MARZOUQ');page=0
styles={key:ParagraphStyle(key,fontName=font,fontSize=size,leading=leading,textColor=color,spaceAfter=0) for key,font,size,leading,color in [('body','Regular',10,15,ink),('small','Regular',8,11,muted),('title','Bold',26,31,ink),('sub','Bold',12,17,accent),('hero','Bold',43,48,ink),('bodyLight','Regular',10,15,ivory),('smallLight','Regular',8,11,sage),('titleLight','Bold',26,31,ivory),('heroLight','Bold',43,48,ivory)]}
def para(text,x,y,width=wide,style='body'):
 p=Paragraph(escape(text).replace('\n','<br/>'),styles[style]);_,h=p.wrap(width,H);p.drawOn(c,x,y-h);return y-h

def start(label):
 global page
 page+=1;c.setFillColor(HexColor('#ffffff'));c.rect(0,0,W,H,fill=1,stroke=0);c.setStrokeColor(accent);c.setLineWidth(3);c.line(left,H-38,left+34,H-38);para(label.upper(),left+48,H-31,wide-48,'small');c.setStrokeColor(line);c.setLineWidth(.5);c.line(left,42,W-left,42);para('MOHAMED REDA MARZOUQ  /  PORTFOLIO V2',left,31,400,'small');para(f'{page:02d} / {TOTAL}',W-85,31,50,'small')
def end(y=60):
 assert y>=50,(page,y);c.showPage()
manifest={a['id']:a for a in json.loads((args.assets/'selection-et-traitements.json').read_text(encoding='utf-8'))} if (args.assets/'selection-et-traitements.json').exists() else {}
def img(media,x,y,w,h):
 source=args.assets/manifest[media['sourceId']]['master'] if media['sourceId'] in manifest else ROOT/'frontend/public'/media['src'].lstrip('/')
 im=PILImage.open(source).convert('RGB');limit=1800 if args.quality=='high' else 1200;im.thumbnail((limit,limit),PILImage.Resampling.LANCZOS)
 if media['sourceId'] in [1,4,5,11,14,15,17,19,20,21,22,27,28,29] or args.quality=='light':
  b=io.BytesIO();im.save(b,format='JPEG',quality=90 if args.quality=='high' else 82,subsampling=0,optimize=True);b.seek(0);reader=ImageReader(b)
 else:reader=ImageReader(im)
 scale=min(w/im.width,h/im.height);iw=im.width*scale;ih=im.height*scale;c.setFillColor(paper);c.rect(x,y-h,w,h,fill=1,stroke=0);c.drawImage(reader,x+(w-iw)/2,y-h+(h-ih)/2,iw,ih,mask='auto')
 return y-h
def draw_qr(url,x,y,size=42):
 widget=qr.QrCodeWidget(url);bounds=widget.getBounds();scale=size/(bounds[2]-bounds[0]);drawing=Drawing(size,size,transform=[scale,0,0,scale,0,0]);drawing.add(widget);renderPDF.draw(drawing,c,x,y);c.linkURL(url,(x,y,x+size,y+size),relative=0)
site='https://marreda906-commits.github.io/portfolio/'
page+=1;c.setFillColor(ink);c.rect(0,0,W,H,fill=1,stroke=0);c.setStrokeColor(sage);c.setLineWidth(3);c.line(left,H-38,left+44,H-38);para('PORTFOLIO D’INGÉNIERIE / ENSAM MEKNÈS',left+58,H-31,wide-58,'smallLight');y=para('Mohamed Reda\nMARZOUQ',left,740,wide,'heroLight');para('Élève ingénieur en génie électromécanique',left,y-22,wide,'smallLight');para('Concevoir, automatiser et fiabiliser\nles systèmes industriels.',left,y-50,wide,'titleLight');img({'sourceId':1,'src':'/home/01.webp'},left,470,210,260);para('MÉCANIQUE\nÉLECTROTECHNIQUE\nAUTOMATISATION\nVISION INDUSTRIELLE\nMAINTENANCE & FIABILITÉ',285,450,240,'smallLight');para('Commande et Maintenance Industrielles\nMeknès, Maroc\nÉdition V2 · novembre 2026',285,310,240,'bodyLight');para(site,left,152,wide,'smallLight');c.linkURL(site,(left,138,W-left,158),relative=0);para('Neuf projets documentés. Les valeurs illustratives, simulations et études de conception sont distinguées des résultats expérimentaux.',left,105,wide,'smallLight');c.setStrokeColor(bronze);c.line(left,42,W-left,42);para(f'{page:02d} / {TOTAL}',W-85,31,50,'smallLight');end()
start('Parcours de lecture');y=para('Une vision d’ensemble.',left,755,wide,'title');y=para(data['about']['paragraphs'][0],left,y-24);y=para(data['about']['paragraphs'][1],left,y-16);y-=34
for n,p in enumerate(data['projects']):
 y=para(f'{n+3:02d}  /  '+p['title'],left,y,wide,'sub');y=para(p['category'],left+29,y-3,wide-29,'small');y-=17
para('12 / Compétences   ·   13 / Expériences   ·   14 / Formation & contact',left,140,wide,'small');para('Les visuels à provenance non confirmée sont signalés comme illustrations. Les valeurs visibles dans les captures ne sont pas extrapolées en performances industrielles.',left,108,wide,'small');end()
for n,p in enumerate(data['projects']):
 start(f'Projet {n+1:02d} / {p["context"]}');y=para(p['title'].replace(' — ',' - '),left,760,wide,'title');date_status=p['date'] if p['status'].lower() in p['date'].lower() else p['date']+'  |  '+p['status'];y=para(date_status,left,y-12,wide,'small');y=para(' / '.join(p['tags']),left,y-8,wide,'small');top=y-18
 # Cover at a generous width; no cropping of technical information.
 display=p['cover']
 if p['slug']=='suivi-de-voie':display={'sourceId':27,'src':p['video']['poster'],'caption':'Capture de la démonstration réelle : prototype sur la piste balisée en laboratoire.'}
 img(display,left,top,wide,210);y=para(display['caption'],left,top-218,wide,'small');y-=16
 y=para('LE BESOIN',left,y,wide,'sub');y=para(p['objective'],left,y-5);y-=12
 y=para('MA CONTRIBUTION',left,y,wide,'sub')
 for w in p['work']:y=para('• '+w,left,y-5)
 y-=12;y=para('MÉTHODE',left,y,wide,'sub');y=para(' → '.join(p['steps']),left,y-5,wide,'body');y-=12
 y=para('RÉSULTATS & PÉRIMÈTRE',left,y,wide,'sub');y=para(p['outcomes'],left,y-5)
 url=site+'projects/'+p['slug']+'/';para('Galerie complète et détails sur le site →',left,65,wide,'small');c.linkURL(url,(left,50,W-left-55,68),relative=0)
 if p['slug']=='suivi-de-voie':
  video=site+'projects/suivi-de-voie/demonstration-suivi-voie.mp4';draw_qr(video,W-left-44,49,42);para('Vidéo',W-left-44,47,42,'small')
 end(y)
start('Domaines & technologies');y=para('Une pratique pluridisciplinaire.',left,755,wide,'title');y-=30
for skill in data['skills']:
 y=para(skill['title'],left,y,wide,'sub');y=para(' · '.join(skill['items']),left,y-7);y-=21
end(y)
start('Expériences professionnelles');y=para('L’ingénierie sur le terrain.',left,755,wide,'title');y-=28
for e in data['experiences']:
 y=para(e['organization'],left,y,wide,'sub');y=para(e['date']+' / '+e['location'],left,y-5,wide,'small');y=para(e['title'],left,y-10)
 for d in e['details']:y=para('• '+d,left,y-7)
 y-=30
img({'sourceId':29,'src':'/projects/maintenance-preventive-lafarge/29.webp'},left,y,wide/2-8,180);img({'sourceId':19,'src':'/home/19.webp'},left+wide/2+8,y,wide/2-8,180);y=para('Stage LafargeHolcim : photographie devant le four industriel et équipement HAVER.',left,y-190,wide,'small');end(y)
start('Formation & contact');y=para('Construire la suite.',left,755,wide,'title');y-=35
for e in data['education']:
 y=para(e['date']+' / '+e['place'],left,y,wide,'small');y=para(e['title'],left,y-8,wide,'sub');y=para(e['detail'],left,y-6);y-=25
y=para('LANGUES',left,y,wide,'sub');y=para(' · '.join(data['about']['languages']),left,y-8);y-=38;y=para('ÉCHANGEONS',left,y,wide,'sub')
for label,url in [('m.reda.marzouq@gmail.com','mailto:m.reda.marzouq@gmail.com'),('+212 6 21 67 05 52','tel:+212621670552'),('LinkedIn / mohamed-reda-marzouq','https://www.linkedin.com/in/mohamed-reda-marzouq'),('GitHub / marreda906-commits/portfolio','https://github.com/marreda906-commits/portfolio'),(site,site)]:
 top=y-12;y=para(label,left,top);c.linkURL(url,(left,y,W-left,top),relative=0)
para('Meknès, Maroc · ENSAM Meknès\nDiplôme d’ingénieur préparé, échéance 2027.',left,130,wide,'small');end(y);assert page==TOTAL;c.save();print(str(args.output),args.output.stat().st_size)
