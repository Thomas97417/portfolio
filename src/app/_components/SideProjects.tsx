import {
  Clapperboard,
  Code,
  Coffee,
  Languages,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

export const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: Clapperboard,
    title: "Netflix Clone",
    description:
      "A Netflix clone using NextJS and TailwindCSS, allowing users to watch trailers of upcoming movies and series",

    url: "https://testflix-nextjs.vercel.app/login",
  },
  {
    Logo: Languages,
    title: "TOMA Translate",
    description:
      "A website to translate text to multiple languages using Google Translate API",
    url: "https://toma-translate.vercel.app",
  },
  {
    Logo: Coffee,
    title: "Coffee",
    description: "A simple coffee app to track your coffee consumption",
    url: "https://google.com",
  },
  {
    Logo: Code,
    title: "AIGenerator",
    description:
      "AI website generator, powered by ChatGPT. Using your OpenAI API key, you can generate a website using GPT, and refine it",
    url: "https://google.com",
  },
];

type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

export const SideProjects = (props: SideProjectsProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex items-center gap-4 rounded-sm p-1 transition-colors hover:bg-accent/50"
    >
      <div className="flex flex-row gap-4">
        <span className="flex h-full rounded-sm bg-accent p-3 align-middle text-foreground transition-colors hover:bg-accent/50 hover:text-accent-foreground ">
          <props.Logo size={22} />
        </span>
        <div className="flex flex-col">
          <p className="text-md font-semibold text-foreground">{props.title}</p>
          <p className="line-clamp-2 text-sm leading-5 text-muted-foreground lg:line-clamp-3">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
