import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { deleteItem } from './ cartSlice';
import PropTypes from 'prop-types';



const DeleteItem = ({ pizzaId }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
      dispatch(deleteItem(pizzaId));
    };

  return (
    <Button type="small" onClick={handleDeleteClick}>Delete</Button>
  )
}

DeleteItem.propTypes = {
      pizzaId: PropTypes.number,
  };

export default DeleteItem