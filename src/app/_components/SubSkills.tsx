import { TailwindIcon } from "@/utils/svg/TailwindIcon";
import { Code } from "../../utils/Code";
import { GithubIcon } from "../../utils/svg/GithubIcon";
import PrismaIcon from "../../utils/svg/PrismaIcon";
import { Section } from "./Section";

const SubSkills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        I also use these technologies
      </h3>
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-2">
          <TailwindIcon size={32} />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Tailwind
          </h3>
          <p className="text-sm text-muted-foreground">
            I can create <u>beautiful</u> application <i>in seconds</i> using{" "}
            <Code>TailwindCSS</Code>.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <PrismaIcon size={32} className="" />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Prisma ORM
          </h3>
          <p className="text-sm text-muted-foreground">
            I use <Code>Prisma</Code> as my main ORM for my projects. It&apos;s
            simple and easy to use while insuring full typesafe code.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <GithubIcon size={32} />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            Github
          </h3>
          <p className="text-sm text-muted-foreground">
            I use <Code>Github</Code> to host my projects and collaborate with
            other developers.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SubSkills;
