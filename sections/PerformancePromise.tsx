import { ShieldCheck, Server, Gauge } from "lucide-react";

export default function PerformancePromise() {
  return (
    <section id="performance" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: The Hook */}
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Our 24/7 Technical Optimization Promise
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We don't just hand over the keys and walk away. ArcaStack integrates continuous 
            performance monitoring into every project, ensuring your digital infrastructure 
            stays fast, secure, and available around the clock.
          </p>
          <div className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
            <span className="text-3xl font-bold text-blue-900">99.9%</span>
            <span className="text-blue-800 font-medium">Uptime Guarantee & Performance SLA</span>
          </div>
        </div>

        {/* Right Side: The Pillars */}
        <div className="space-y-6">
          {[
            { title: "Real-time Observability", desc: "Constant monitoring of your Core Web Vitals and server health.", icon: Gauge },
            { title: "Proactive Security", desc: "Automated patches and updates to keep your stack ironclad.", icon: ShieldCheck },
            { title: "Scalable Infrastructure", desc: "Optimized deployment pipelines that scale with your traffic.", icon: Server },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="mt-1 text-blue-600"><Icon size={24} /></div>
                <div>
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}