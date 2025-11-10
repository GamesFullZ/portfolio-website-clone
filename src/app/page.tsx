import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import CurrentProject from "@/components/sections/current-project";
import Services from "@/components/sections/services";
import Footer from "@/components/sections/footer";
import WelcomeScreen from "@/components/welcome-screen";

export default function Home() {
  return (
    <>
      <WelcomeScreen />
      <main className="min-h-screen bg-black">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <CurrentProject />
        <Services />
        <Footer />
      </main>
    </>
  );
}