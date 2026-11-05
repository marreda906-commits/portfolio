import { assetPath, siteConfig } from "@/config/site";
import { about } from "@/data/about";
import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return <>
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid"><div className="hero-copy">
        <p className="eyebrow hero-eyebrow"><span className="status-dot"/> Portfolio d’ingénierie / ENSAM Meknès</p>
        <h1 id="hero-title"><span>Mohamed Reda</span><strong>MARZOUQ<span className="name-dot">.</span></strong></h1>
        <p className="hero-role">{siteConfig.role}</p>
        <p className="hero-description">De la mécanique au numérique,<br className="desktop-break"/> concevoir, connecter et comprendre<br className="desktop-break"/> les systèmes industriels.</p>
        <div className="hero-actions"><a className="button button-primary" href="#projects">Explorer mes projets <span aria-hidden="true">↘</span></a><a className="button button-secondary" href={assetPath(siteConfig.cvUrl)} download>Mon CV <span aria-hidden="true">↓</span></a></div>
        <div className="hero-bottom"><span>{siteConfig.location}</span><span>Commande & maintenance industrielles</span></div>
      </div>
      <figure className="portrait"><div className="portrait-top"><span>01 / PROFIL</span><span aria-hidden="true">↗</span></div><img src={assetPath(siteConfig.portrait)} alt="Portrait de Mohamed Reda Marzouq" width="1254" height="1254" fetchPriority="high"/><figcaption><span>MOHAMED REDA MARZOUQ</span><span>Génie électromécanique</span></figcaption><div className="portrait-marker" aria-hidden="true">MR /<br/>ENSAM</div></figure>
      </div>
      <div className="discipline-strip"><div className="container"><span>Électromécanique</span><b aria-hidden="true">+</b><span>Automatisation</span><b aria-hidden="true">+</b><span>Vision industrielle</span><b aria-hidden="true">+</b><span>Systèmes embarqués</span></div></div>
    </section>
    <Projects/>
    <section id="about" className="about-section section" aria-labelledby="about-title"><div className="container about-grid"><div><p className="eyebrow">02 / À propos</p><h2 id="about-title">Une vision<br/><em>d’ensemble.</em></h2><p className="about-lead">{about.lead}</p></div><div className="about-copy">{about.paragraphs.map(p => <p key={p}>{p}</p>)}<div className="languages"><span className="eyebrow">Langues</span><ul>{about.languages.map(l => <li key={l}>{l}</li>)}</ul></div></div></div></section>
    <section id="experience" className="section container" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">03 / Parcours</p><h2 id="experience-title">Apprendre.<br/><em>Mettre en pratique.</em></h2></div><p className="section-intro">L’expérience du terrain,<br/>les fondations de l’ingénierie.</p></div>
      <div className="timeline-heading"><span>Expériences professionnelles</span><span>01 — 02</span></div>
      {experiences.map(e => <article className="timeline-item" key={e.organization}><p className="timeline-date">{e.date}</p><div><p className="eyebrow">{e.organization} <span className="muted">/ {e.location}</span></p><h3>{e.title}</h3><ul>{e.details.map(d => <li key={d}>{d}</li>)}</ul></div></article>)}
      <div className="timeline-heading education-heading"><span>Formation</span><span>2021 — 2027</span></div><div className="education-grid">{education.map((e,i) => <article className="education-item" key={e.title}><span className="education-index">0{i+1}</span><p className="eyebrow">{e.date}</p><h3>{e.title}</h3><p className="education-place">{e.place}</p><p>{e.detail}</p></article>)}</div>
    </section>
    <section id="skills" className="section skills-section" aria-labelledby="skills-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">04 / Compétences</p><h2 id="skills-title">Une boîte à outils<br/><em>pluridisciplinaire.</em></h2></div><p className="section-intro">Les méthodes et technologies<br/>de mon parcours.</p></div><div className="skills-grid">{skills.map((s,i) => <article className="skill-item" key={s.title}><p className="skill-number">{(i+1).toString().padStart(2,"0")}</p><div><h3>{s.title}</h3><ul className="tags">{s.items.map(t => <li key={t}>{t}</li>)}</ul></div></article>)}</div></div></section>
    <Contact/>
  </>;
}
