import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IFormRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const FormRow: FC<IFormRowProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={classNames(
        'grid grid-cols-[24rem_1fr_1.2fr] items-center gap-6',
        'py-3 px-0 ',
        'first:pt-0',
        'last:pb-0',
        'border-b border-gray-100 last:border-b-0',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormRow;
