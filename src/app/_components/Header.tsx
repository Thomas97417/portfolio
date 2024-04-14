import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";

export const Header = () => {
  return (
    <header className="xlg:sticky xlg:top-0 py-4">
      <Section isLargeScreen={true} className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">TOMA.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            target="_blank"
            href="https://github.com/Thomas97417"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={20} className="text-primary" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
