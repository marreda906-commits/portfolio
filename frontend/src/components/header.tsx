"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/config/site";

export function Header() {
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("reda-theme") === "light";
      setLight(saved);
      document.documentElement.dataset.theme = saved ? "light" : "dark";
    } catch { /* A blocked storage API must not break navigation. */ }
  }, []);
  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { localStorage.setItem("reda-theme", next ? "light" : "dark"); } catch {}
  }
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/#home" className="brand" onClick={() => setOpen(false)} aria-label="Mohamed Reda Marzouq, accueil">
        <span className="brand-symbol">MR<span>.</span></span><span className="brand-name">MOHAMED REDA<br/><strong>MARZOUQ</strong></span>
      </Link>
      <nav id="main-navigation" className={open ? "navigation is-open" : "navigation"} aria-label="Navigation principale">
        {navItems.map((item, i) => <Link key={item.id} href={`/#${item.id}`} onClick={() => setOpen(false)}><span className="nav-number">0{i+1}</span>{item.label}</Link>)}
      </nav>
      <div className="header-tools">
        <button className="icon-button" onClick={toggleTheme} aria-label={`Activer le thème ${light ? "sombre" : "clair"}`} title={`Thème ${light ? "sombre" : "clair"}`}><span aria-hidden="true">{light ? "☾" : "☼"}</span></button>
        <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Fermer" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
      </div>
    </div>
  </header>;
}
