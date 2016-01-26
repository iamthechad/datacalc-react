import React from 'react';

import OrderCategoryItem from './OrderCategoryItem';

import h from '../helpers';

const OrderCategory = props => (
  <li key={props.key} className="order-category">
    {props.category.name}
    <ul className="order-items">
      {props.selectedItems.map(key =>
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

export default OrderCategory;