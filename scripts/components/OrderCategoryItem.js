import React from 'react';

import h from '../helpers';

const OrderCategoryItem = props => (
    <li>
      {props.item.name} - {h.formatPrice(props.item.value)} <button onClick={e => props.removeFromOrder(props.categoryId, props.itemId)}>&times;</button>
    </li>
);

OrderCategoryItem.propTypes = {
  itemId: React.PropTypes.string.isRequired,
  categoryId: React.PropTypes.string.isRequired,
  item: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired
  })
};

export default OrderCategoryItem;