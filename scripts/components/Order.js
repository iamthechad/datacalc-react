import React from 'react';
import Paper from 'material-ui/Paper';
import { Card, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import _ from 'lodash';

import OrderCategory from './OrderCategory';
import OrderTotal from './OrderTotal';

const Order = props => (
  <Paper>
    <Card>
      <CardTitle title="Your Data Value" />
    </Card>
    {Object.keys(props.items).sort().map(key => <OrderCategory
      key={key}
      index={key}
      category={props.catalog.categories[key]}
      selectedItems={props.items[key]}
      items={_.pickBy(props.catalog.items, (value => value.category === key))}
      removeFromOrder={props.removeFromOrder}
    />)}
    <Divider />
    <OrderTotal items={props.items} catalogItems={props.catalog.items} />
  </Paper>
);

Order.propTypes = {
  items: React.PropTypes.object.isRequired,
  catalog: React.PropTypes.object.isRequired,
  removeFromOrder: React.PropTypes.func.isRequired
};

export default Order;