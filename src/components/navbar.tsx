// "use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex gap-6 p-6 border-b">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/feedback">Feedback</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

// export default Navbar;