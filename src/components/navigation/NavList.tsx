import classNames from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";

interface INavListProps
  extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  className?: string;
}

const NavList: FC<INavListProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <ul
      data-component-name="Nav/NavList"
      className={classNames(
        "flex flex-col gap-2",
        className
      )}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default NavList;
