import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './ cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
   const dispatch = useDispatch();


  return (
    <div className='flex items-center gap-2 md:gap-3'>
        <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <span className='text-sm font-medium'> {currentQuantity} </span>
        <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  )
}

UpdateItemQuantity.propTypes = {
      pizzaId: PropTypes.number,
      currentQuantity: PropTypes.number
  };

export default UpdateItemQuantity