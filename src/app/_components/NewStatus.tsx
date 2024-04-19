import { Badge } from "@/components/ui/badge";
import CustomButton from "@/utils/Button";
import { GradientLight } from "@/utils/GradientLight";
import Heading from "@/utils/Heading";
import {
  Clapperboard,
  Code,
  Coffee,
  Languages,
  LucideIcon,
} from "lucide-react";
import { Section } from "./Section";

// import backgroundProjects from "@/utils/svg/backgroundProject.svg";
type infoProjectsType = {
  title: string;
  description: string;
  link: string;
  technology?: { name: string }[];
  backgroundUrl: string;
  light?: boolean;
  logo: LucideIcon;
};

const infoProjects: infoProjectsType[] = [
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone, allowing users to watch trailers of upcoming movies and series. This project use NextAuth to handle authentification. Users can save their favorite movies and series kept in a database",
    link: "https://testflix-nextjs.vercel.app/login",
    technology: [
      { name: "React" },
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "Supabase" },
    ],
    backgroundUrl: "/cards-svg/card-1.svg",
    logo: Clapperboard,
  },
  {
    title: "TOMA Translate",
    description:
      "A website to translate text to multiple languages using Google Translate API. Keep an history of your latest translations, stored directly in the local storage of your browser",
    link: "https://toma-translate.vercel.app",
    technology: [
      { name: "React" },
      { name: "NextJS" },
      { name: "TailwindCSS" },
    ],
    backgroundUrl: "/cards-svg/card-2.svg",
    light: true,
    logo: Languages,
  },
  {
    title: "TOMA.com",
    description: "A simple coffee app to track your coffee consumption",
    link: "https://google.com",
    technology: [
      { name: "React" },
      { name: "NextJS" },
      { name: "TailwindCSS" },
    ],
    backgroundUrl: "/cards-svg/card-3.svg",
    light: true,
    logo: Coffee,
  },
  {
    title: "AIGenerator.com",
    description:
      "Generate a web page using the OpenAI API from a prompt you provide. After generation, you can improve the result by providing modifications. You can then retrieve the code and save this generation to your favorites.",
    link: "https://google.com",
    technology: [
      { name: "React" },
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "OpenAI API" },
      { name: "OpenAI API" },
      { name: "OpenAI API" },
    ],
    backgroundUrl: "/cards-svg/card-4.svg",
    logo: Code,
  },
];

const ProjectsCard = () => {
  return (
    <>
      <Heading tag="Side Projects" className="mb-12" />
      <div className="grid grid-cols-1 grid-rows-4 justify-center gap-x-6 gap-y-8 md:grid-cols-2 md:grid-rows-2">
        {infoProjects.map((infoProject) => {
          return (
            <>
              <div
                className="h-[24rem] max-w-[24rem] bg-[length:100%_100%] "
                style={{
                  backgroundImage: `url(${infoProject.backgroundUrl})`,
                }}
                key={infoProject.title}
              >
                <div className="flex h-full flex-col px-[2.4rem] pt-[2.4rem]">
                  <div className="flex flex-col">
                    <div>
                      <p className="mb-2 text-2xl font-medium text-primary">
                        {infoProject.title}
                      </p>
                      <div className="h-[15.5rem]">
                        <p className="text-md line-clamp-6 font-normal leading-7 text-primary/70">
                          {infoProject.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {infoProject.technology?.map((tech, index) => (
                            <Badge
                              variant="outline"
                              key={tech.name}
                              className={`px-2 py-1 ${index >= 4 ? "hidden sm:block" : ""}`}
                            >
                              {tech.name}
                            </Badge>
                          ))}
                          {infoProject.technology?.length! > 4 && (
                            <Badge
                              variant="outline"
                              className="px-2 py-1 sm:hidden"
                            >
                              ...
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <CustomButton href={infoProject.link}>
                        Go to website
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
              {/* A faire fonctionner */}
              {infoProject.light && <GradientLight />}
            </>
          );
        })}
      </div>
    </>
  );
};

const NewStatus = () => {
  return (
    <Section className="flex flex-col items-center justify-center">
      <ProjectsCard />
    </Section>
  );
};

export default NewStatus;
