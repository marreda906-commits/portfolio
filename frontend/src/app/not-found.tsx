import Link from "next/link";

export default function NotFound() {
  return <div className="container error-page"><p className="eyebrow">404 / Page introuvable</p><h1>Reprenons<br/>le bon chemin.</h1><p>Cette page n’existe pas ou a été déplacée.</p><Link className="button button-primary" href="/">Retour au portfolio ↗</Link></div>;
}
