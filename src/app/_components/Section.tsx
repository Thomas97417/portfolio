import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export const Section = (
  props: PropsWithChildren<{
    className?: string;
    isLargeScreen?: boolean | undefined;
  }>,
) => {
  return (
    <section
      className={cn(
        "m-auto max-w-4xl px-4",
        props.className,
        props.isLargeScreen ? "max-w-7xl" : "max-w-4xl",
      )}
    >
      {props.children}
    </section>
  );
};
