"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Scafin Finance App",
    desc: "A professional financial management platform designed for real-time monitoring of customer and agent loan portfolios.",
    tags: ["Finance", "Laravel", "Vue 3", "MySQL", "Docker", "TailwindCSS", "Stripe"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780817178/Financve_rryp6x.png",
  },
  {
    title: "Blockplanx Web App",
    desc: "An AI-powered platform for creating EV and fire evacuation plans with a real-time interactive dashboard.",
    tags: ["Building Plan", "Laravel", "APIs", "Vue 3", "AI Integration", "Stripe"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780818602/Blockplanx_ubzfn5.png",
  },
  {
    title: "Alagendran E-Commerce",
    desc: "A comprehensive e-commerce marketplace for two-wheeler and four-wheeler spare parts with secure payment gateway integration.",
    tags: ["Vue 3", "Laravel", "OTP Auth", "E-commerce", "Razorpay"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780818658/alag_hcyga7.png",
  },
  {
    title: "Blockplanx Website",
    desc: "Official marketing website for the Blockplanx platform featuring interactive sliders and WhatsApp lead integration.",
    tags: ["Building Plan", "WordPress", "Elementor", "WhatsApp API"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780818761/website_fwen04.png",
  },
  {
    title: "Swanson Website",
    desc: "Corporate website for a premium hydraulic cylinder and pump manufacturer, showcasing industrial engineering solutions.",
    tags: ["Manufacturing", "Hydraulics", "Laravel", "Vue 3", "SEO"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780819230/swanson_ecmuzo.png",
  },
  {
    title: "MTP Website",
    desc: "Industrial web presence for high-performance hydraulic pump and precision equipment manufacturing.",
    tags: ["Manufacturing", "Hydraulics", "Laravel", "Vue 3", "Responsive"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780819230/mtp_t6bxaj.png",
  },
  {
    title: "Nordon Website",
    desc: "B2B portal and automated quoting tool for a leading Australian hydraulic cylinder manufacturer.",
    tags: ["Manufacturing", "Hydraulics", "Drupal", "Node.js", "React"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780818954/nordon_k2whto.png",
  },
  {
    title: "Ezyfit Website",
    desc: "Custom industrial website for pumps and hydraulic systems, emphasizing product reliability and manufacturer expertise.",
    tags: ["Manufacturing", "Hydraulics", "Laravel", "Vue 3", "Performance"],
    image: "https://res.cloudinary.com/diejm0elz/image/upload/v1780819827/ezyfit_kpxris.png",
  },
];

export default function PortfolioShowcase() {
  return (
    <section className="py-24 bg-slate-100 px-6" id="portfolio">
      <div className="max-w-7xl mx-auto border">
        <h2 className="text-5xl md:text-7xl text-black font-bold mb-16 tracking-tighter text-center">Featured <span className="text-teal-600">Projects</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="h-56 w-full overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-950 mb-4">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.desc}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}