import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <h1 className="text-xl font-bold">
          Manjil
        </h1>

        <div className="flex gap-6 text-sm  transition hover:text-blue-400">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/feedback">Feedback</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}