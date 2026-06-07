"use client";
import { motion } from "framer-motion";
import { Cpu, BarChart3, BrainCircuit, Zap, ArrowRight } from "lucide-react";

const bentoItems = [
  { id: 1, title: "End-to-End Web and Mobile App Development", desc: "Complete lifecycle management.", icon: Cpu, col: "md:col-span-2", bg: "bg-white" },
  { id: 2, title: "Real-Time Dashboards", desc: "Live data visualization.", icon: BarChart3, col: "md:col-span-1", bg: "bg-white" },  
  { id: 3, title: "Website Development", desc: "Developing lead generating websites", icon: Zap, col: "md:col-span-1", bg: "bg-white" },
  { id: 4, title: "Smart Automation", desc: "Operational workflow scaling.", icon: Zap, col: "md:col-span-2", bg: "bg-white" },
  
];

export default function BentoSolutions() {
  return (
    <section className="py-32 bg-slate-100 text-slate-900 px-6" id="solutions">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-24 text-center tracking-tighter">
          Apps <span className="text-teal-600">Engineered</span> for Scale
        </h2>

        {/* Increased auto-rows to 320px for a "bigger" feel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {bentoItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className={`${item.col} ${item.bg} p-10 rounded-[2rem] border border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between group overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-8 text-teal-600">
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-lg max-w-sm">{item.desc}</p>
              </div>

              {/* Image Placeholder - This is where your visual asset goes */}
             
              
              <button className="relative z-10 flex items-center gap-2 text-lg font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}