
import Hero from "../sections/Hero";
import ServicesGrid from "../sections/ServicesGrid";
import PerformancePromise from "../sections/PerformancePromise";
import Portfolio from "../sections/Portfolio";
import Solutions from "@/sections/Solutions";
import { CTABanner } from "@/components/Banner";
import Industries from "@/components/IndustrialShowcase";
import { CoreValues } from "@/components/CoreValues";
import ContactSection from "./contact/page";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Solutions/>
      <Industries/>
      <Portfolio/>
  <ContactSection/>
    
    </div>
  );
}