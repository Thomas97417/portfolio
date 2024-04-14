import { Code } from "./Code";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex items-start gap-4 max-lg:flex-col">
      <div className="flex flex-[3] flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold">Thomas Rouquette</h2>
        <h3 className="font-caption text-3xl">FullStack Web developer</h3>
        <p className="text-base leading-8">
          Hey, I&apos;m Thomas 👋 <br /> I&apos;m a <Code>fullstack</Code>
          developer. I love creating <Code>apps</Code> and <Code>websites</Code>{" "}
          that inspires and helps people. I am a <Code>French</Code> young
          software developer, eager to learn new tech and <Code>develop</Code>{" "}
          my skills. My main techs are <Code>React</Code>, <Code>NextJS</Code>{" "}
          and <Code>TypeScript</Code>
          <br />
          Check my <Code>Github</Code> page to see my projects and contributions
        </p>
      </div>
      <div className="ml-auto flex-[2] max-lg:m-auto max-md:m-auto">
        <img
          className="h-auto w-full max-w-sm rounded-[50%] max-lg:w-72 max-md:w-56"
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          alt="Profile Picture"
        />
      </div>
    </Section>
  );
};
