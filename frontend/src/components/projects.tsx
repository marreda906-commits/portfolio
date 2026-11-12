"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { assetPath } from "@/config/site";

const categories = ["Tous", "Vision & embarqué", "Énergie & commande", "Mécanique & simulation", "Maintenance & fiabilité"];

export function Projects() {
  const [filter, setFilter] = useState("Tous");
  const visible = projects.filter(p => filter === "Tous" || p.category === filter);
  return <section id="projects" className="section container" aria-labelledby="projects-title">
    <div className="section-heading"><div><p className="eyebrow">01 / De la conception à l’application</p><h2 id="projects-title">Les idées prennent <em>forme.</em></h2></div><p className="section-intro">Vision, énergie, mécanique et fiabilité.<br/>Des projets pour explorer le système dans son ensemble.</p></div>
    <div className="filter-row"><div className="filters" role="group" aria-label="Filtrer les projets">{categories.map(c => <button key={c} aria-pressed={c === filter} onClick={() => setFilter(c)}>{c}</button>)}</div><p className="project-count" role="status" aria-live="polite">{visible.length.toString().padStart(2,"0")} projets</p></div>
    <div className="projects-grid">{visible.map(p => <article key={p.slug} className={`project-card ${p.featured && filter === "Tous" ? "featured" : ""}`}>
      <Link className="card-cover" href={`/projects/${p.slug}/`} aria-label={`Découvrir : ${p.title}`}><img src={assetPath(p.cover.src)} alt={p.cover.alt} width={p.cover.width} height={p.cover.height} loading="lazy"/>{(p.cover.badge || p.cover.illustration) && <span className="cover-label">{p.cover.badge || "Illustration · provenance à confirmer"}</span>}</Link>
      <div className="project-body"><div className="project-meta"><span>{p.context}</span><span>{p.date}</span></div>
        <h3><Link href={`/projects/${p.slug}/`}>{p.title}<span className="card-arrow" aria-hidden="true">↗</span></Link></h3>
        <p>{p.summary}</p><ul className="tags" aria-label="Technologies">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
        <Link className="text-link" href={`/projects/${p.slug}/`} aria-label={`Explorer le projet : ${p.title}`}>Explorer le projet <span aria-hidden="true">↗</span></Link>
      </div>
    </article>)}</div>
  </section>;
}
