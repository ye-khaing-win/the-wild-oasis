import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import {
  NavLink as RouterLink,
  useLocation,
} from "react-router-dom";
import { TIcon } from "../../types/icon.type";
import NavIcon from "./NavIcon";

const styles = {
  default: classNames(
    "group",
    "flex items-center gap-3",
    "text-gray-600 text-base",
    "font-medium",
    "py-3 px-6",
    "transition-all duration-300",
    "hover:text-gray-800 hover:bg-gray-50  hover:rounded-sm"
  ),
  active: classNames("text-gray-800 bg-gray-50 rounded-sm"),
};

interface INavItemProps
  extends HTMLAttributes<HTMLLIElement> {
  icon: TIcon;
  to: string;
  text: string;
  className?: string;
}
const NavItem: FC<INavItemProps> = (props) => {
  const { icon, to, text, className, ...rest } = props;

  const location = useLocation();
  const isActive = location.pathname.includes(to);

  const CONTENT = (
    <>
      {icon && <NavIcon isActive={isActive} icon={icon} />}
      <span>{text}</span>
    </>
  );

  return (
    <li
      data-component-name="Nav/NavItem"
      className={classNames("", className)}
      {...rest}
    >
      <RouterLink
        data-component-name="NavLink"
        to={to}
        className={
          isActive
            ? classNames(styles.default, styles.active)
            : classNames(styles.default)
        }
      >
        {CONTENT}
      </RouterLink>
    </li>
  );
};

export default NavItem;
