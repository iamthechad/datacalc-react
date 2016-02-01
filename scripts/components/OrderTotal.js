import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import h from '../helpers';

class OrderTotal extends React.Component {
  render() {
    const items = this.props.items;
    const catalogItems = this.props.catalogItems;
    const catIds = Object.keys(items);
    const total = catIds.reduce((prevTotal, key) => {
      const itemIds = items[key];
      const categoryTotal = itemIds.reduce((itemPrevTotal, itemKey) => {
        const itemValue = catalogItems[itemKey] ? catalogItems[itemKey].value : 0;
        return itemPrevTotal + itemValue;
      }, 0);
      return prevTotal + categoryTotal;
    }, 0);

    return (
      <List>
        <ListItem primaryText="Total" secondaryText={h.formatPrice(total)}/>
      </List>
    )
  }
}

OrderTotal.propTypes = {
  items: React.PropTypes.object.isRequired,
  catalogItems: React.PropTypes.object.isRequired
};

export default OrderTotal;