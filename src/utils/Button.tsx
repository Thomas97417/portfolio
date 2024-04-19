import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  href: string;
};

const CustomButton = (props: CustomButtonProps) => {
  return (
    <Link href={props.href} target="_blank">
      <Button variant="ghost" className="flex gap-2">
        {props.children}
        <ArrowRight size={24} />
      </Button>
    </Link>
  );
};

export default CustomButton;
