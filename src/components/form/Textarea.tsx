import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes } from 'react';

interface ITextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (props, ref) => {
    const { className } = props;

    return (
      <textarea
        ref={ref}
        className={classNames(
          'py-2 px-3',
          'border border-gray-300',
          'rounded-[5px]',
          'bg-white',
          'shadow-sm',
          'w-full h-8rem',
          className
        )}
      />
    );
  }
);

export default Textarea;
