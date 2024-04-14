import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

export const WORKS: WorkProps[] = [
  {
    image: "https://avatars.githubusercontent.com/u/124599?v=4",
    title: "Github",
    role: "Software Developer",
    date: "2019 - Present",
    url: "/",
  },
  {
    image: "https://avatars.githubusercontent.com/u/124599?v=4",
    title: "Github",
    role: "Software Developer",
    date: "2019 - Present",
    url: "/",
    freelance: true,
  },
  {
    image: "https://avatars.githubusercontent.com/u/124599?v=4",
    title: "Github",
    role: "Software Developer",
    date: "2019 - Present",
    url: "/",
  },
];

export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex items-center gap-4 rounded-sm p-1 transition-colors hover:bg-accent/50"
    >
      <img
        src={props.image}
        alt={props.title}
        className="h-10 w-10 rounded-sm object-contain"
      />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-md font-semibold text-foreground">{props.title}</p>
          {props.freelance && <Badge variant="outline">Freelance</Badge>}
        </div>
        <p className="line-clamp-2 text-xs leading-5 text-muted-foreground lg:line-clamp-3">
          {props.role}
        </p>
      </div>
      <div className="ml-auto">
        <p className="line-clamp-2 text-xs leading-5 text-muted-foreground lg:line-clamp-3">
          {props.date}
        </p>
      </div>
    </Link>
  );
};
