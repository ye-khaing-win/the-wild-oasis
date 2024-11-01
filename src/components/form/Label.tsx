import classNames from 'classnames';
import { FC, LabelHTMLAttributes, ReactNode } from 'react';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

const Label: FC<ILabelProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <label className={classNames('font-medium', className)} {...rest}>
      {children}
    </label>
  );
};

export default Label;
