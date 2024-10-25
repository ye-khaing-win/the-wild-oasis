import { FC, HTMLAttributes } from "react";
import { TIcon } from "../../types/icon.type";
import Hero2Icon from "../icons/Hero2Icon";
import classNames from "classnames";

interface INavIconProps
  extends HTMLAttributes<HTMLOrSVGElement> {
  isActive: boolean;
  icon: TIcon;
  className?: string;
}

const NavIcon: FC<INavIconProps> = (props) => {
  const { isActive, icon, className, ...rest } = props;

  return (
    <Hero2Icon
      data-component-name="Nav/NavIcon"
      icon={icon}
      className={classNames(
        "w-6 h-6",
        "text-gray-400",
        "transition-all duration-300",
        "group-hover:text-indigo-600",
        {
          "text-indigo-600": isActive,
        },
        className
      )}
      {...rest}
    />
  );
};

export default NavIcon;
