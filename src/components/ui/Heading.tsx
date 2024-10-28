import classNames from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IHeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

const Heading: FC<IHeadingProps> = (props) => {
  const {
    children,
    as: Component = "h1",
    className,
    ...rest
  } = props;

  return (
    <Component
      data-component-name="Heading"
      className={classNames(
        "leading-normal",
        {
          "text-[3rem] font-semibold": Component === "h1",
          "text-[2rem] font-semibold": Component === "h2",
          "text-[2rem] font-medium": Component === "h3",
          "text-[3rem] font-semibold text-center":
            Component === "h4",
        },
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Heading;
