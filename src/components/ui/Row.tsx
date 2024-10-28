import classNames from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

interface IRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  type?: "horizontal" | "vertical";
}

const Row: FC<IRowProps> = (props) => {
  const {
    children,
    className,
    type = "vertical",
    ...rest
  } = props;

  return (
    <div
      data-component-name="Row"
      className={classNames(
        "flex",
        {
          "justify-between items-center":
            type === "horizontal",
          "flex-col gap-4": type === "vertical",
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Row;
