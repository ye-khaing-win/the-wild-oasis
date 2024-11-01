import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IFormProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  type?: 'modal';
}

const Form: FC<IFormProps> = (props) => {
  const { children, className, type, ...rest } = props;

  return (
    <form
      className={classNames(
        'overflow-hidden text-sm',
        {
          'py-6 px-10 bg-white border border-gray-100 rounded-md':
            type !== 'modal',
          'w-[80rem]': type === 'modal',
        },
        className
      )}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
