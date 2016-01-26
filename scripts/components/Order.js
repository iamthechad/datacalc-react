import React from 'react';
import _ from 'lodash';

import OrderCategory from './OrderCategory';
import OrderTotal from './OrderTotal';

import h from '../helpers';

const Order = props => (
  <div className="order-wrap">
    <h2 className="order-title">Your Data Value</h2>
    <ul className="order">
      {Object.keys(props.items).sort().map(key => <OrderCategory
        key={key}
        index={key}
        category={props.catalog.categories[key]}
        selectedItems={props.items[key]}
        items={_.pickBy(props.catalog.items, (value => value.category === key))}
        removeFromOrder={props.removeFromOrder}
      />)}
      <OrderTotal items={props.items} catalogItems={props.catalog.items} />
    </ul>
  </div>
);

Order.propTypes = {
  items: React.PropTypes.object.isRequired,
  catalog: React.PropTypes.object.isRequired,
  removeFromOrder: React.PropTypes.func.isRequired
};

export default Order;