import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { getCabins } from '../../services/apiCabins';
import Spinner from '../../components/ui/Spinner';
import CabinRow from './CabinRow';

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
  className?: string;
}

const Table: FC<TableProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      data-component-name="Table"
      className={classNames(
        'border border-gray-200',
        'text-sm',
        'bg-white',
        'rounded-md',
        'overflow-hidden',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

const TableHeader: FC<TableHeaderProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <thead
      data-component-name="TableHeader"
      className={classNames(
        'grid grid-cols-6 gap-6 items-center',
        'bg-gray-50 border-b border-gray-100',
        ' uppercase tracking-[0.4px] font-semibold text-gray-600',
        'py-4 px-6',
        className
      )}
      {...rest}
    >
      {children}
    </thead>
  );
};

const CabinTable = () => {
  const {
    data: cabins,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;

  console.log(cabins);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Image</div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </TableHeader>
      {cabins?.map((cabin) => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  );
};

export default CabinTable;
