import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-900 py-20 px-[10vw]">
      {/* Top Grid Section: Updated to slate borders and darker text */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 border-b border-slate-200 pb-16">
        <div className="space-y-4">
          <p className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">Let's work together</p>
          <a href="mailto:arun250393@gmail.com" className="text-sm font-light underline underline-offset-8 hover:text-teal-600 transition-colors">
            arun250393@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium">
          <Link href="/#services" className="hover:text-teal-600 transition-colors">SERVICES</Link>
          <Link href="/about" className="hover:text-teal-600 transition-colors">ABOUT</Link>
          <Link href="/#contact" className="hover:text-teal-600 transition-colors">CONTACT</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm font-medium">
          <p className="hover:text-teal-600 transition-colors">TWITTER</p>
          <p className="hover:text-teal-600 transition-colors">INSTAGRAM</p>
          <p className="hover:text-teal-600 transition-colors">LINKEDIN</p>
    
        </div>

        <div className="text-xl font-light text-slate-600">
          <p className="text-slate-950 font-bold mb-2">ARCASTACK</p>
          <p>Global IT Hub</p>
          <p>INDIA</p>
        </div>
      </div>

      {/* Giant Brand Name: Now slate-900/10 for a subtle watermark effect */}
      <h1 className="text-[18vw] font-serif leading-[0.8] tracking-tighter text-teal-600 mb-20 text-center pointer-events-none">
        ArcaStack
      </h1>

      {/* Bottom Legal Section: High contrast slate text */}
      <div className="flex flex-col md:flex-row justify-between text-[12px] tracking-[0.1em] text-slate-500 uppercase">
        <p className="mb-4 md:mb-0">© 2026 ArcaStack. All rights reserved.</p>
        {/* <div className="flex gap-8">
          <button className="hover:text-slate-950 transition-colors">Legals</button>
          <button className="hover:text-slate-950 transition-colors underline underline-offset-4">Subscribe to our newsletter</button>
        </div> */}
      </div>
    </footer>
  );
}