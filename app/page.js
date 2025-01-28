import HeroSection from "./components/hero-section";
import VisualsA from "./components/visuals-a";
import EventsContainer from "./components/events-container/events-container";
import ImageBanner from "./components/ImageBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ImageBanner />
      <VisualsA />
      <EventsContainer />
      <ImageBanner />
    </main>
  );
}
