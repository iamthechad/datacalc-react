import React from 'react';

import h from '../helpers';

var OrderCategory = React.createClass({
  renderCategoryItems: function(key) {
    var item = this.props.items[key];
    return <li key={key}>{item.name} - {h.formatPrice(item.value)}</li>
  },
  render: function() {
    return (
      <li key={this.props.key}>
        {this.props.category.name}
        <ul>
          {this.props.selectedItems.map(this.renderCategoryItems)}
        </ul>
      </li>
    );
  }
});

export default OrderCategory;