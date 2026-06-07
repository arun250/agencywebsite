"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
    );
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav 
        ref={navRef}
        className="w-full max-w-5xl flex items-center justify-between px-8 py-4 
        bg-slate-50/70 backdrop-blur-xl border border-slate-200 
        rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
      >
        <Link href="/" className="text-xl font-bold tracking-tighter text-slate-950">
          Arca<span className="text-teal-600">Stack</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-950 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-slate-950 transition-colors">About</Link>
          <Link href="/#solutions" className="hover:text-slate-950 transition-colors">Services</Link>
          <Link href="/#portfolio" className="hover:text-slate-950 transition-colors">Portfolio</Link>
        </div>

        <Link href="/#contact" className="px-5 py-2 bg-slate-950 text-white rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors">
          Contact
        </Link>
      </nav>
    </div>
  );
}