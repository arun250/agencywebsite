import { Target, Users, Award, Heart } from "lucide-react";

const values = [
  { title: "Innovation First", desc: "We push the boundaries of what's possible with IoT & AI technology", icon: Target, bg: "bg-blue-50", border: "border-blue-200" },
  { title: "Client Success", desc: "Your success is our success. We're committed to delivering results that matter", icon: Users, bg: "bg-green-50", border: "border-green-200" },
  { title: "Excellence", desc: "We maintain the highest standards in every project we undertake", icon: Award, bg: "bg-purple-50", border: "border-purple-200" },
  { title: "Sustainability", desc: "Building solutions that create a better, more sustainable future", icon: Heart, bg: "bg-pink-50", border: "border-pink-200" },
];

export function CoreValues() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
        <p className="text-slate-500 mb-16">The principles that guide everything we do</p>
        
        <div className="grid md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className={`p-8 rounded-3xl border ${v.bg} ${v.border}`}>
              <div className="w-12 h-12 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <v.icon className="text-slate-700" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-4">{v.title}</h3>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}