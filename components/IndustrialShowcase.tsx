"use client";
import { motion } from "framer-motion";
import { Truck, Factory, Building2, Zap, ArrowRight } from "lucide-react";

const industries = [
  { title: "Logistics", icon: Truck, bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-900" },
  { title: "Manufacturing", icon: Factory, bg: "bg-green-50", border: "border-green-100", text: "text-green-900" },
  { title: "Hospitality", icon: Building2, bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-900" },
  { title: "Energy Management", icon: Zap, bg: "bg-pink-50", border: "border-pink-100", text: "text-pink-900" },
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-8xl mx-auto px-10 text-center">
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-slate-500 bg-slate-200/50 px-6 py-2 rounded-full">
          Industries We Serve
        </span>
        <h2 className="text-5xl md:text-7xl font-bold mt-8 mb-20 text-slate-950 tracking-tighter">
          Transforming <span className=" text-5xl md:text-7xl text-teal-600">Industries</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              // Added scale-up effect
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`p-12 rounded-[3rem] border ${ind.bg} ${ind.border} shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300`}
            >
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm">
                <ind.icon size={40} className={ind.text} />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 mb-5">{ind.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Optimized solutions for complex {ind.title.toLowerCase()} challenges.
              </p>
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}