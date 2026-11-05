import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return { title: project?.title || "Projet introuvable", description: project?.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <article className="project-page container">
    <Link href="/#projects" className="text-link back-link">← Tous les projets</Link>
    <header className="detail-header"><p className="eyebrow">{project.context} / {project.date}</p><h1>{project.title}</h1><p>{project.summary}</p><ul className="tags">{project.tags.map(t => <li key={t}>{t}</li>)}</ul></header>
    <div className="detail-visual"><ProjectVisual kind={project.visual}/></div>
    <div className="detail-grid"><aside><p className="eyebrow">Domaine</p><p>{project.category}</p><p className="eyebrow">Période</p><p>{project.date}</p></aside><div className="detail-body">
      <section><p className="eyebrow">01 / Le besoin</p><h2>Objectif</h2><p>{project.objective}</p></section>
      <section><p className="eyebrow">02 / Le travail réalisé</p><h2>Ma contribution</h2><ul>{project.work.map(w => <li key={w}>{w}</li>)}</ul></section>
      <section><p className="eyebrow">03 / Lecture du projet</p><h2>Du besoin à la solution</h2><ol className="workflow">{project.steps.map((s,i) => <li key={s}><span>0{i+1}</span>{s}</li>)}</ol></section>
      <section className="scope-note"><h2>Périmètre du projet</h2><p>{project.scope}</p></section>
    </div></div>
    <div className="next-project"><span className="eyebrow">Poursuivre l’exploration</span><Link href={`/projects/${next.slug}/`}>{next.title}<span aria-hidden="true">↗</span></Link></div>
  </article>;
}
