import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import h from '../helpers';

const OrderTotal = props => (
  <List>
    <ListItem primaryText="Total" secondaryText={h.formatPrice(h.calculateTotal(props.items, props.catalogItems))}/>
  </List>
);

OrderTotal.propTypes = {
  items: React.PropTypes.object.isRequired,
  catalogItems: React.PropTypes.object.isRequired
};

export default OrderTotal;