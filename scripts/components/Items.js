import React from 'react';

import Item from './Item';

class Items extends React.Component {
  renderItem(key) {
    var category = this.props.selectedCategory;
    var order = this.props.order;
    var inOrder = order[category] && order[category].includes(key);
    return <Item
      key={key}
      index={key}
      details={this.props.catalog.items[category][key]}
      onSelectItem={this.props.onSelectItem}
      inOrder={inOrder}
    />
  }

  render() {
    var categoryItems = {};
    const selectedCategory = this.props.selectedCategory;
    const catalog = this.props.catalog;

    if (selectedCategory && catalog.items[selectedCategory]) {
      categoryItems = catalog.items[selectedCategory];
    }
    return (
      <ul className="item-list">
        {Object.keys(categoryItems).map(key => this.renderItem(key))}
      </ul>
    );
  }
}

export default Items;