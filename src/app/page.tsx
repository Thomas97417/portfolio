import { Spacing } from "../utils/Spacing";
import ContactMe from "./_components/ContactMe";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import NewStatus from "./_components/NewStatus";
import Skills from "./_components/Skills";
import Status from "./_components/Status";
import SubSkills from "./_components/SubSkills";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="xxl" />
      <Hero />
      <Spacing size="xxl" />
      <Status />

      <Spacing size="xl" />
      <NewStatus />

      <Spacing size="xl" />
      <Skills />
      <Spacing size="md" />
      <SubSkills />
      <Spacing size="xl" />
      <ContactMe />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
