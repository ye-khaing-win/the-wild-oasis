import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

interface IFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const FileInput: FC<IFileInputProps> = (props) => {
  const { className } = props;

  return (
    <input
      className={classNames(
        'text-sm rounded-sm',
        'file:bg-red-400 file:py-2 px-3',
        className
      )}
    />
  );
};

export default FileInput;
