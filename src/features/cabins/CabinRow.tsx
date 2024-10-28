import { HTMLAttributes, FC, ReactNode } from "react";
import { TCabin } from "../../types/cabin.type";
import classNames from "classnames";

interface ITableRowProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const TableRow: FC<ITableRowProps> = (props) => {
  const { children } = props;

  return (
    <div className={classNames("grid")}>{children}</div>
  );
};

interface ICabinRowProps
  extends HTMLAttributes<HTMLDivElement> {
  cabin: TCabin;
}

const CabinRow: FC<ICabinRowProps> = (props) => {
  const { cabin } = props;

  return <TableRow>a</TableRow>;
};
