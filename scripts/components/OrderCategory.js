import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';

import h from '../helpers';

const OrderCategory = props => (
    <List subheader={props.category.name} >
        {props.selectedItems.sort().map(key =>
        <ListItem
          key={key}
          primaryText={props.items[key].name}
          secondaryText={h.formatPrice(props.items[key].value)}
          rightIcon={<ActionDelete onClick={e => props.removeFromOrder(props.index, key)}/>}
        />)}
    </List>
);

OrderCategory.propTypes = {
  index: React.PropTypes.string.isRequired,
  items: React.PropTypes.object.isRequired,
  selectedItems: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  category: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  })
};

export default OrderCategory;