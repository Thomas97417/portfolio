import { Card } from "@/components/ui/card";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SIDE_PROJECTS, SideProjects } from "./SideProjects";
import { WORKS, Work } from "./Work";

export const Status = () => {
  return (
    <Section className="flex items-start gap-4 max-lg:flex-col">
      <div className="h-full w-full flex-[3]">
        <Card className="flex w-full flex-col gap-2 p-4 lg:h-[484px]">
          <p className="text-lg font-thin text-muted-foreground">
            SIDE, FUN PROJECTS
          </p>
          <div className="flex h-full flex-col justify-center max-lg:gap-2 lg:gap-8">
            {SIDE_PROJECTS.map((project) => (
              <SideProjects key={project.title} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex w-full flex-[2] flex-col gap-4">
        <Card className="flex-1 p-4">
          <p className="text-lg font-thin text-muted-foreground">WORK</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work) => (
              <Work key={work.title} {...work} />
            ))}
          </div>
        </Card>
        <Card className="flex flex-[2] flex-col gap-2 p-4">
          <p className="text-lg font-thin text-muted-foreground">CONTACT ME</p>
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
          />
        </Card>
      </div>
    </Section>
  );
};

export default Status;
