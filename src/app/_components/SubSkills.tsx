import { GithubIcon } from "../../utils/svg/GithubIcon";
import PrismaIcon from "../../utils/svg/PrismaIcon";
import TypeScriptIcon from "../../utils/svg/TypeScriptIcon";
import { Code } from "./Code";
import { Section } from "./Section";

const SubSkills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        I also use these technologies
      </h3>
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-2">
          <TypeScriptIcon size={32} />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            TypeScript
          </h3>
          <p className="text-sm text-muted-foreground">
            I use <Code>TypeScript</Code> to write <u>safer</u> and have full
            typesafe code.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <PrismaIcon size={32} stroke="#ffffff" />
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
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>NextJS</Code> as a backend and frontend framework.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default SubSkills;
