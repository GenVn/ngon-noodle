import AboutSection from "@/components/about";
import BannerSection from "@/components/banner";
import DiscountSection from "@/components/discount";
import DiscoverSection from "@/components/discover";
import FooterSection from "@/components/footer";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen">
      {/* Banner */}
      <BannerSection></BannerSection>
      <AboutSection></AboutSection>
      <DiscountSection></DiscountSection>
      <DiscoverSection></DiscoverSection>
      <FooterSection></FooterSection>
    </section>
  );
}
