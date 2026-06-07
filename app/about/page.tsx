"use client";
import { Cpu, Zap, BrainCircuit, Globe, Heart } from "lucide-react";


export default function AboutUs() {
  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle background element to match the site theme */}
      <div className="absolute inset-0 bg-slate-50 -z-10" />
      
      <div className="max-w-5xl mx-auto text-center mt-40">        
        <h1 className="text-6xl md:text-8xl font-bold text-slate-950 tracking-tighter mb-10">
          Meet the <span className="text-teal-600">Architects</span> of Digital Evolution
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We combine technical rigor with a 24/7 optimization mindset to build systems that don’t just function—they drive business growth.
        </p>
      </div>
    </section>
    
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Founder Section - Inspired by image_f2ba7e.jpg */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24 bg-white p-12 rounded-[2rem] border border-slate-100 shadow-sm">
          <div>
            <span className="text-teal-600 font-bold text-sm tracking-widest uppercase">About ArcaStack</span>
            <h2 className="text-5xl font-bold mt-4 mb-6 tracking-tighter text-slate-950">Engineering Excellence, Day and Night.</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At ArcaStack, we bridge the gap between complex architectural design and high-performance digital execution. 
              Founded by Arun, a full-stack engineer with a Master’s degree from TU Dresden, we specialize in building 
              scalable web and mobile applications that don’t just launch—they evolve.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-950 mb-2">24/7 Technical Optimization Guarantee</h4>
              <p className="text-sm text-slate-600">We provide continuous monitoring of Core Web Vitals, server health, and system security, because downtime costs more than development.</p>
            </div>
          </div>
          <div className="relative h-[500px] bg-slate-200 rounded-3xl overflow-hidden">
            {/* Replace with your professional headshot */}
            <img 
              src="https://res.cloudinary.com/diejm0elz/image/upload/v1780832305/profilepicture_psvqld.jpg" // Update this path to your actual image file
              alt="Arun - Founder of ArcaStack" 
              className="w-full h-fulls object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>

        {/* Expertise Grid - Inspired by image_f2ba24.jpg */}
        <h3 className="text-teal-600 text-4xl font-bold text-center mb-16 tracking-tighter">Our Core Expertise</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Technical Rigor", desc: "Expertise in Laravel, Vue.js, React, React Native, Node and Docker.", icon: Cpu },
            { title: "Automation-First", desc: "n8n and scraping workflows that turn raw data into intelligence.", icon: Zap },
            { title: "Performance-Obsessed", desc: "We measure success in milliseconds. Peak performance is our baseline.", icon: BrainCircuit },
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-teal-200 transition-all shadow-sm">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-950">{item.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}