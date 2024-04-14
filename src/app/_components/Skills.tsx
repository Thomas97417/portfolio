import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Skills</Badge>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on
      </h2>
      <div className="flex gap-4 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-2">
          <ReactIcon
            size={32}
            className="animate-spin"
            style={{
              animationDuration: "10s",
            }}
          />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            React
          </h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>NextJS</Code> as a backend and frontend framework.
          </p>
        </div>
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

export default Skills;
