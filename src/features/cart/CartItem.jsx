import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById } from './ cartSlice';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));




  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-center'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />

      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number,
    totalPrice: PropTypes.number,
    name: PropTypes.string,
    pizzaId: PropTypes.number,
  }).isRequired,
};

export default CartItem;
