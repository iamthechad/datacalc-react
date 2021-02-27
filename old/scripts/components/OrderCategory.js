import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import h from '../helpers';

const OrderCategory = props => (
    <List>
      <Subheader>{props.category.name}</Subheader>
        {props.selectedItems.sort().map(key =>
        <ListItem
          key={key}
          primaryText={props.items[key].name}
          secondaryText={h.formatPrice(props.items[key].value)}
          rightIcon={<ActionDelete onClick={e => props.removeItem(props.index, key)}/>}
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