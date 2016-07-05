import React from 'react';
import { List, ListItem } from 'material-ui/List';

import h from '../helpers';

const OrderTotal = props => (
  <List>
    <ListItem primaryText="Total" secondaryText={h.formatPrice(h.calculateTotal(props.order, props.catalogItems))}/>
  </List>
);

OrderTotal.propTypes = {
  order: React.PropTypes.object.isRequired,
  catalogItems: React.PropTypes.object.isRequired
};

export default OrderTotal;