import { CinematicIntro } from "@/components/landing/CinematicIntro";
import { Principles } from "@/components/landing/Principles";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <CinematicIntro />
      <Principles />
      <Footer />
    </main>
  );
}
