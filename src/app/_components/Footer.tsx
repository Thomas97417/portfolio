import { Section } from "./Section";

const Footer = () => {
  return (
    <footer className="bg-card">
      <Section className="py-8">
        <p className="text-sm text-muted-foreground">
          @Copywrite 2024 - Thomas Rouquette
        </p>
      </Section>
    </footer>
  );
};

export default Footer;
