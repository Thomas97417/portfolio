import Heading from "@/utils/Heading";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

const ContactMe = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Heading tag="Contact Me" className="mb-8" />
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div className="flex gap-4 max-md:flex-row">
        <ContactCard
          name="TOMA"
          image="https://avatars.githubusercontent.com/u/124599?v=4"
          mediumImage="https://avatars.githubusercontent.com/u/124599?v=4"
          description="Github page"
        />
        <ContactCard
          name="TOMA"
          image="https://avatars.githubusercontent.com/u/124599?v=4"
          mediumImage="https://avatars.githubusercontent.com/u/124599?v=4"
          description="Github page"
          url="mailto:throuquette@hotmail.fr"
        />
      </div>
    </Section>
  );
};

export default ContactMe;
