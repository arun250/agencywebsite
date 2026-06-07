"use client";

import { Mail, Clock, MessageSquare, ShieldCheck, Headphones, Users, Calendar } from "lucide-react";
import { useState } from "react";
export default function ContactSection() {
  const trustBadges = [
    { icon: Calendar, text: "Free Consultation" },
    { icon: ShieldCheck, text: "Secure & Private" },
    { icon: Headphones, text: "24/7 Support" },
    { icon: Users, text: "Expert Team" },
  ];

  const [isSubmitted, setIsSubmitted]= useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Send the form data to Web3Forms via fetch
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setIsSubmitted(true); // Toggle the state to show success message
    }
  }
  return (
    <section className="py-24 bg-slate-50 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-6 tracking-tighter text-slate-950">Let's Build Something <span className="text-teal-600">Amazing Together</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Ready to transform your business with custom digital solutions? We're here to help you every step of the way.</p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <badge.icon className="text-teal-600" size={20} />
              <span className="text-sm font-semibold text-slate-900">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Main Content: Split Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Ways to Connect */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-teal-600">Multiple Ways to Connect</h3>
            <div className="space-y-6">
              {[
                { label: "Business Inquiries", email: "arun250393@gmail.com", desc: "Place orders, partnerships, & scaling." },
                { label: "Support", email: "arun250393@gmail.com", desc: "Queries or product technical support." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <p className="text-sm font-bold text-slate-900 mb-3">{item.label}</p>
                  <div className="flex items-center gap-3 text-teal-600 mb-2">
                    <Mail size={18} />
                    <span className="font-semibold">{item.email}</span>
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-bold mb-2 text-teal-600 cursor-pointer">Send us a Message</h3>
            <p className="text-sm text-slate-500 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
            {isSubmitted ? (
        // SUCCESS MESSAGE UI
        <div className="py-16 text-center">
          <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-950 mb-2">Message Received!</h3>
          <p className="text-slate-600">Thank you for reaching out. Our team will contact you soon.</p>
        </div>
      ) : (
         <form className="space-y-4" action="https://api.web3forms.com/submit" onSubmit={handleSubmit} >
          <input type="hidden" name="access_key" value="eb6b3f98-4ea3-4c40-a859-a3fa262e9501"></input>
    {/* Full Name */}
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
      <input name="name" type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 outline-none" />
    </div>

    {/* Email & Phone */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
        <input name="email" type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone</label>
        <input name="phone" type="tel" placeholder="+1 (555) 123-4567" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 outline-none" />
      </div>
    </div>

    {/* Company Name */}
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
      <input name="company" type="text" placeholder="Your Company Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 outline-none" />
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
      <textarea placeholder="How can we help you?" rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-teal-500 outline-none" />
    </div>

    <button type="submit" className="w-full bg-slate-950 text-white p-4 rounded-xl font-bold hover:bg-teal-600 transition cursor-pointer">
      Send Message →
    </button>
  </form>
  )}
          </div>
        </div>
      </div>
    </section>
  );
}