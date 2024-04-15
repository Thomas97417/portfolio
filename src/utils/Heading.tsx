import TagLine from "./TagLine";

type HeadingProps = {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
};

const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div className={`${className} mx-auto max-w-[50rem] md:text-center`}>
      {tag && (
        <TagLine className="mb-4 text-2xl md:justify-center">{tag}</TagLine>
      )}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 text-n-4 mt-4">{text}</p>}
    </div>
  );
};

export default Heading;
