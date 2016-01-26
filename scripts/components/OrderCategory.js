import React from 'react';

import OrderCategoryItem from './OrderCategoryItem';

import h from '../helpers';

const OrderCategory = props => (
  <li className="order-category">
    {props.category.name}
    <ul className="order-items">
      {props.selectedItems.sort().map(key =>
        <OrderCategoryItem
          key={key}
          item={props.items[key]}
          itemId={key}
          categoryId={props.index}
          removeFromOrder={props.removeFromOrder}
        />)}
    </ul>
  </li>
);

OrderCategory.propTypes = {
  index: React.PropTypes.string.isRequired,
  selectedItems: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  category: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  })
};

export default OrderCategory;