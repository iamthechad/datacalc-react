import React from 'react';

import h from '../helpers';

class OrderCategory extends React.Component {
  renderCategoryItems(key) {
    var item = this.props.items[key];
    var removeButton = <button onClick={e => this.props.removeFromOrder(key, this.props.index)}>&times;</button>;
    return <li key={key}>{item.name} - {h.formatPrice(item.value)} {removeButton}</li>
  }

  render() {
    return (
      <li key={this.props.key} className="order-category">
        {this.props.category.name}
        <ul className="order-items">
          {this.props.selectedItems.map(key => this.renderCategoryItems(key))}
        </ul>
      </li>
    );
  }
}

export default OrderCategory;