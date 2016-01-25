import React from 'react';

import autobind from 'autobind-decorator';

import h from '../helpers';

class OrderCategory extends React.Component {
  @autobind
  renderCategoryItems(key) {
    var item = this.props.items[key];
    var removeButton = <button onClick={this.props.removeFromOrder.bind(null, key, this.props.index)}>&times;</button>;
    return <li key={key}>{item.name} - {h.formatPrice(item.value)} {removeButton}</li>
  }

  render() {
    return (
      <li key={this.props.key} className="order-category">
        {this.props.category.name}
        <ul className="order-items">
          {this.props.selectedItems.map(this.renderCategoryItems)}
        </ul>
      </li>
    );
  }
}

export default OrderCategory;