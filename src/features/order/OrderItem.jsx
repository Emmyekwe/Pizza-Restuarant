import {
  formatCurrency,
} from "../../utils/helpers";
import PropTypes from 'prop-types';


function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  console.log(ingredients)
  console.log(isLoadingIngredients)

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  isLoadingIngredients: PropTypes.string,
  ingredients: PropTypes.string,
  item: PropTypes.string,
};

export default OrderItem;
 