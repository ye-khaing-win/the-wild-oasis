import { FC } from "react";
import * as Hi2Icon from "react-icons/hi2";
import { THero2Icon } from "../../types/hero2icon.type";
import classNames from "classnames";

interface IHero2IconProps {
  icon: THero2Icon;
  className?: string;
}

const Hero2Icon: FC<IHero2IconProps> = (props) => {
  const { icon, className } = props;

  const Hero2IconWrapper = Hi2Icon[icon];

  if (typeof Hero2IconWrapper === "function") {
    return (
      <Hero2IconWrapper
        data-component-name="Hero2Icon"
        className={classNames(className)}
      />
    );
  }

  return null;
};

export default Hero2Icon;
