import React from 'react';

import Item from './Item';

var Items = React.createClass({
  renderItem: function (key) {
    var category = this.props.selectedCategory;
    var order = this.props.order;
    if (order[category] && order[category].includes(key)) {
      return ""
    } else {
      return <Item key={key} index={key} details={this.props.items[key]} onSelectItem={this.props.onSelectItem}/>
    }
  },
  render: function() {
    return (
      <ul className="item-list">
        {Object.keys(this.props.items).map(this.renderItem)}
      </ul>
    );
  }
});

export default Items;