import { HTMLAttributes, FC } from 'react';
import { TCabin } from '../../types/cabin.type';
import TableRow from './TableRow';
import classNames from 'classnames';
import { formatCurrency } from '../../utils/helpers';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

interface ICabinRowProps extends HTMLAttributes<HTMLDivElement> {
  cabin: TCabin;
}

const CabinRow: FC<ICabinRowProps> = (props) => {
  const { cabin } = props;
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
  } = cabin;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin deleted successfully!');

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err: { message: string }) => toast.error(err.message),
  });

  return (
    <TableRow>
      <img
        src={image}
        className={classNames(
          'block',
          'w-16 aspect-[3/2]',
          'object-cover object-center',
          'scale-150 -translate-x-[7px]'
        )}
      />
      <div
        className={classNames(
          'text-base font-semibold text-gray-600 font-sono'
        )}
      >
        {name}
      </div>
      <div>Fits up to {maxCapacity} guests</div>
      <div className={classNames('font-sono font-semibold')}>
        {formatCurrency(regularPrice)}
      </div>
      <div className={classNames('font-sono font-medium text-green-700')}>
        {formatCurrency(discount)}
      </div>
      <button disabled={isDeleting} onClick={() => mutate(cabinId)}>
        Delete
      </button>
    </TableRow>
  );
};

export default CabinRow;
