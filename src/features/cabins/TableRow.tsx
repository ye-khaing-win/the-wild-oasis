import classNames from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

interface ITableRowProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const TableRow: FC<ITableRowProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classNames(
        "grid grid-cols-6 gap-6 items-center",
        "py-[14px] px-6",
        "border-b border-gray-100 last:border-b-0",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TableRow;
