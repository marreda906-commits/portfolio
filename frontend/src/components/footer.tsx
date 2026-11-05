import Link from "next/link";

export function Footer() {
  return <footer className="site-footer container"><p>© {new Date().getFullYear()} Mohamed Reda MARZOUQ</p><p>Électromécanique · ENSAM Meknès</p><Link href="/#home">Retour en haut ↑</Link></footer>;
}
