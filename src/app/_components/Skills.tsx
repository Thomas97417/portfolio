import NextIcon from "@/utils/svg/NextIcon";
import TypeScriptIcon from "@/utils/svg/TypeScriptIcon";
import { Code } from "../../utils/Code";
import Heading from "../../utils/Heading";
import { ReactIcon } from "../../utils/svg/ReactIcon";
import { Section } from "./Section";

const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Heading tag="Skills" className="mb-8" />
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
          <NextIcon size={32} />
          <h3 className="mb-2 scroll-m-20 text-2xl font-semibold tracking-tight">
            NextJS
          </h3>
          <p className="text-sm text-muted-foreground">
            <Code>NextJS</Code> is my favorite framework for building{" "}
            <u>fast</u> and <i>scalable</i> applications. It is linking my
            backend and frontend together.
          </p>
        </div>
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
      </div>
    </Section>
  );
};

export default Skills;
