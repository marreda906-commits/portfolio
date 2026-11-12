"use client";

import { useRef, useState } from "react";
import type { ProjectMedia } from "@/data/projects";
import { assetPath } from "@/config/site";

export function ProjectGallery({ media, hero = false }: { media: ProjectMedia[]; hero?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState(0);
  function open(index: number, button: HTMLButtonElement) {
    trigger.current = button; setSelected(index); dialog.current?.showModal();
  }
  function close() { dialog.current?.close(); }
  const current = media[selected];
  return <>
    <div className={hero ? "case-cover" : "case-gallery"}>{media.map((item, index) => <figure key={item.src}>
      <button className="media-zoom" onClick={e => open(index, e.currentTarget)} aria-label={`Agrandir : ${item.alt}`}>
        <img src={assetPath(item.src)} alt={item.alt} width={item.width} height={item.height} loading={hero ? "eager" : "lazy"}/>
        <span className="zoom-hint" aria-hidden="true">Agrandir ↗</span>
      </button>
      <figcaption>{(item.badge || item.illustration) && <strong className="provenance">{item.badge || "Illustration · provenance à confirmer"}</strong>}{item.caption}</figcaption>
    </figure>)}</div>
    <dialog ref={dialog} className="lightbox" aria-label="Image du projet agrandie" onClose={() => trigger.current?.focus()} onClick={e => { if (e.target === e.currentTarget) close(); }} onKeyDown={e => { if (e.key === "ArrowRight") setSelected((selected + 1) % media.length); if (e.key === "ArrowLeft") setSelected((selected + media.length - 1) % media.length); }}>
      <div className="lightbox-inner"><div className="lightbox-tools"><span>{selected+1} / {media.length}</span><button onClick={close} autoFocus>Fermer ×</button></div>
        <img src={assetPath(current.src)} alt={current.alt}/><p>{current.caption}</p>
        <div className="lightbox-tools">{media.length > 1 && <><button onClick={() => setSelected((selected+media.length-1)%media.length)}>← Précédente</button><button onClick={() => setSelected((selected+1)%media.length)}>Suivante →</button></>}<a href={assetPath(current.src)} target="_blank" rel="noopener noreferrer">Ouvrir en pleine résolution ↗</a></div>
      </div>
    </dialog>
  </>;
}
