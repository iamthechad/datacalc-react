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
    {Object.keys(props.order).sort().map(key => <OrderCategory
      {...props}
      key={key}
      index={key}
      category={props.catalog.categories[key]}
      selectedItems={props.order[key]}
      items={_.pickBy(props.catalog.items, (value => value.category === key))}
    />)}
    <Divider />
    <OrderTotal order={props.order} catalogItems={props.catalog.items} />
  </Paper>
);

Order.propTypes = {
  order: React.PropTypes.object.isRequired,
  catalog: React.PropTypes.object.isRequired
};

export default Order;