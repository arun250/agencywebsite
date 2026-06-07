"use client";
import ModernBackground from "../components/ModernBackground";
import { CheckCircle2, Play } from "lucide-react";
export default function CreativeHero() {
  const tags = ["Real-Time Analytics", "24/7 Support", "Secure Integration", "Custom Solutions"];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center bg-slate-50">
      
      <div className="z-10 max-w-6xl flex flex-col items-center">
        <span className="text-teal-600 font-mono text-sm uppercase tracking-[0.3em] mb-8 block">
          Full-Stack Development & Optimization
        </span>
        
        {/* Increased Heading Sizes */}
        <h1 className="text-4xl md:text-8xl font-bold leading-[1] tracking-tighter text-slate-950 mb-8">
          Building Digital Experiences That Drive Growth <br />
          <span className="text-6xl text-teal-600">Your Vision, Our Code</span>
        </h1>
        
        {/* Increased Paragraph Size */}
        <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          We deliver Web Mobile Applications, AI tools and IoT solutions that transform businesses. Our tools make work easier, save money, and help the environment.
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-base font-medium text-slate-700 shadow-sm hover:border-teal-300 transition-colors">
              <CheckCircle2 size={20} className="text-teal-500" /> {tag}
            </span>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl text-lg font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-xl shadow-blue-600/20">
            Get Started Free →
          </button>
          <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl text-lg font-bold hover:bg-slate-100 transition border border-slate-200 flex items-center gap-2">
            <Play size={20} fill="black" /> Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}