import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Divider from 'material-ui/lib/divider';
import _ from 'lodash';

import OrderCategory from './OrderCategory';
import OrderTotal from './OrderTotal';

import h from '../helpers';

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