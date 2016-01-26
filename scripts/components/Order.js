import React from 'react';

import OrderCategory from './OrderCategory';
import OrderTotal from './OrderTotal';

import h from '../helpers';

const Order = props => (
  <div className="order-wrap">
    <h2 className="order-title">Your Data Value</h2>
    <ul className="order">
      {Object.keys(props.items).map(key => <OrderCategory
        key={key}
        index={key}
        category={props.catalog.categories[key]}
        selectedItems={props.items[key]}
        items={props.catalog.items[key]}
        removeFromOrder={props.removeFromOrder}
      />)}
      <OrderTotal items={props.items} catalogItems={props.catalog.items} />
    </ul>
  </div>
);

export default Order;