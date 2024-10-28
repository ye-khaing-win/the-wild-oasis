import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface ISpinnerProps
  extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Spinner: FC<ISpinnerProps> = (props) => {
  const { className } = props;

  return (
    <div
      data-component-name="Spinner"
      className={classNames(
        "my-12 mx-auto",
        "w-16 aspect-[1] rounded-[50%]",
        "animate-spin",
        "bg-blue-300",
        "spinner",
        className
      )}
    />
  );
};

export default Spinner;
