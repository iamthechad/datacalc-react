import React from 'react';

import autobind from 'autobind-decorator';

import OrderCategory from './OrderCategory';

import h from '../helpers';

class Order extends React.Component {
  @autobind
  renderOrderCategory(key) {
    return <OrderCategory
      key={key}
      index={key}
      category={this.props.catalog.categories[key]}
      selectedItems={this.props.items[key]}
      items={this.props.catalog.items[key]}
      removeFromOrder={this.props.removeFromOrder}
    />;
  }

  render() {
    var catIds = Object.keys(this.props.items);
    var total = catIds.reduce((prevTotal, key) => {
      var itemIds = this.props.items[key];
      var categoryTotal = itemIds.reduce((itemPrevTotal, itemKey) => {
        return itemPrevTotal + this.props.catalog.items[key][itemKey].value;
      }, 0);
      return prevTotal + categoryTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Data Value</h2>
        <ul className="order">
          {Object.keys(this.props.items).map(this.renderOrderCategory)}
          <li className="total">
            <strong>Total:</strong>
            {h.formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;