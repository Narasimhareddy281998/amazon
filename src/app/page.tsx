
import Falock from "../components/Falock";
import Navbar from "../components/Navbar";
import FeesPricingHero from "../components/FeesPricingHero";
import FeeFactors from "@/components/FeeFactors";
import SellingFeesSection from "@/components/SellingFeesSection";
import MoreOnSellingSection from "@/components/MoreOnSellingSection";
import SellerHeroSection from "@/components/SellerHeroSection";



export default function Home() {
  return (
    <div>
      <Falock />
      <Navbar />
      <FeesPricingHero />
      <FeeFactors />
      <SellingFeesSection />
      <MoreOnSellingSection />
      <SellerHeroSection />
     </div>
  )}