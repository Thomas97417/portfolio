import { Spacing } from "../utils/Spacing";
import ContactMe from "./_components/ContactMe";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
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
      <Spacing size="sm" />
      <Skills />
      <Spacing size="sm" />
      <SubSkills />
      <Spacing size="sm" />
      <ContactMe />
      <Spacing size="sm" />
      <Footer />
    </main>
  );
}
