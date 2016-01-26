import React from 'react';

import h from '../helpers';

const OrderCategoryItem = props => (
    <li key={props.itemId}>
      {props.item.name} - {h.formatPrice(props.item.value)} <button onClick={e => props.removeFromOrder(props.categoryId, props.itemId)}>&times;</button>
    </li>
);

export default OrderCategoryItem;