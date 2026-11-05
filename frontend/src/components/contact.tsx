"use client";

import { useState } from "react";
import { assetPath, siteConfig } from "@/config/site";

export function Contact() {
  const [message, setMessage] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(siteConfig.email); setMessage("Adresse copiée."); }
    catch { setMessage("Copie indisponible : sélectionnez l’adresse ci-dessus."); }
  }
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="container">
    <p className="eyebrow">05 / Contact</p>
    <div className="contact-grid"><div><h2 id="contact-title">Un sujet technique.<br/><em>Une conversation.</em></h2><p>Un projet, une opportunité ou une question sur mon parcours ? Échangeons.</p><p className="location"><span aria-hidden="true">↗</span> {siteConfig.location}</p></div>
      <div className="contact-links"><a className="email-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<span aria-hidden="true">↗</span></a>
        <a className="phone-link" href={siteConfig.phone.href}>{siteConfig.phone.label}</a>
        <button className="copy-button" onClick={copyEmail}>Copier l’adresse e-mail <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{message}</p>
        <div className="social-links"><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>{siteConfig.github && <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}<a href={assetPath(siteConfig.cvUrl)} download>Mon CV ↓</a></div>
      </div>
    </div>
  </div></section>;
}
