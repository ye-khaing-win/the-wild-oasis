import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={classNames(
        'border border-gray-300',
        'bg-white',
        'rounded-sm',
        'py-2 px-3',
        'shadow-sm',
        className
      )}
      {...rest}
    />
  );
});

export default Input;
