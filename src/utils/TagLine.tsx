import brackets from "@/utils/svg/Brackets";

type TagLineProps = {
  className?: string;
  children: React.ReactNode;
};

const TagLine = ({ className, children }: TagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-secondary-foreground">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
