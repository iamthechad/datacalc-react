import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';

import h from '../helpers';

const OrderCategoryItem = props => (
    <ListItem
        primaryText={props.item.name}
        secondaryText={h.formatPrice(props.item.value)}
        rightIcon={<ActionDelete onClick={e => props.removeFromOrder(props.categoryId, props.itemId)}/>}
    />
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