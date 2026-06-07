export function StatsBanner() {
  const stats = [
    { value: "76%", label: "SYSTEM UPTIME", growth: "+12.4% Increase" },
    { value: "37", label: "HOURS AVG SETUP", growth: "-24.1% Reduced" },
    { value: "69%", label: "EFFICIENCY BOOST", growth: "+45.2% Growth" },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-8xl mx-auto bg-white border border-slate-200 rounded-[2rem] p-12 shadow-sm">
        <p className="text-center text-xs tracking-[0.2em] uppercase mb-12 text-slate-400 font-medium">Proven Results & Performance</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className={`text-center ${i !== 2 ? 'md:border-r border-slate-100' : ''}`}>
              <h3 className="text-5xl font-bold text-slate-950 mb-2">{stat.value}</h3>
              <p className="text-sm font-semibold text-slate-600 mb-1">{stat.label}</p>
              <p className="text-teal-600 text-sm font-medium">{stat.growth}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20  bg-slate-50">
      <div className="max-w-8xl mx-auto bg-slate-950  p-16 text-center text-white shadow-2xl">
        <h2 className="text-5xl font-bold mb-6 tracking-tighter">
          Ready to Transform Your <span className="text-teal-400">Business?</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
          Join hundreds of companies already benefiting from our IoT solutions. Get started with a free consultation today.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <button className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition">
              Start Your Project →
            </button>
          </Link>
          <Link href="/industries">
            <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition">
              View Industries
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}