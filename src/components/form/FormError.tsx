import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IFormErrorProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

const FormError: FC<IFormErrorProps> = (props) => {
  const { children, className } = props;

  return (
    <span className={classNames('text-sm text-red-700', className)}>
      {children}
    </span>
  );
};

export default FormError;
