import React from 'react';

import h from '../helpers';

class OrderTotal extends React.Component {
  render() {
    const items = this.props.items;
    const catalogItems = this.props.catalogItems;
    const catIds = Object.keys(items);
    const total = catIds.reduce((prevTotal, key) => {
      const itemIds = items[key];
      const categoryTotal = itemIds.reduce((itemPrevTotal, itemKey) => {
        const itemValue = (catalogItems[key] && catalogItems[key][itemKey]) ? catalogItems[key][itemKey].value : 0;
        return itemPrevTotal + itemValue;
      }, 0);
      return prevTotal + categoryTotal;
    }, 0);

    return (
      <li className="total">
        <strong>Total:</strong>
        {h.formatPrice(total)}
      </li>
    )
  }
}

OrderTotal.propTypes = {
  items: React.PropTypes.object.isRequired,
  catalogItems: React.PropTypes.object.isRequired
};

export default OrderTotal;