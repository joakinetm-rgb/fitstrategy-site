
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-zinc-800">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold">FITSTRATEGY</Link>
        <nav className="space-x-6 text-sm">
          <Link href="/services">Services</Link>
          <Link href="/about">À propos</Link>
          <Link href="/results">Résultats</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
