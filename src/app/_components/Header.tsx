import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { GithubIcon } from "../../utils/svg/GithubIcon";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="py-4 xlg:sticky xlg:top-0">
      <Section isLargeScreen={true} className="flex items-baseline">
        <h1 className="text-xl font-bold text-primary">TOMA.com</h1>
        <div className="flex-1" />
        <ul className="items-center gap-2">
          <Link
            target="_blank"
            href="https://github.com/Thomas97417"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <GithubIcon size={20} className="text-primary" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
