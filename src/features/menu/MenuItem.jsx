import PropTypes from 'prop-types';
import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button';
import { addItem } from '../cart/ cartSlice'
import { useDispatch } from 'react-redux';


function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const {  id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem =  {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
  }
  dispatch(addItem(newItem))
  }

  return (
    <li className='flex gap-4 py-2'>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className='flex flex-col grow pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex flw items-center justify-between '>
          {!soldOut ? <p className='text-sm font-medium uppercase text-stone-500'>{formatCurrency(unitPrice)}</p> : <p className='text-sm font-medium uppercase text-stone-500'>Sold out</p>}
          {!soldOut && <Button type="small" onClick={handleAddToCart} >Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    unitPrice: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    soldOut: PropTypes.bool.isRequired,
    imageUrl: PropTypes.string.isRequired, // Adding imageUrl to PropTypes
  }).isRequired,
};

export default MenuItem;