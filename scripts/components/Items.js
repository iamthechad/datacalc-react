import React from 'react';

import Item from './Item';

class Items extends React.Component {
  render() {
    let categoryItems = {};
    const selectedCategory = this.props.selectedCategory;
    const catalog = this.props.catalog;

    if (selectedCategory && catalog.items[selectedCategory]) {
      categoryItems = catalog.items[selectedCategory];
    }
    return (
      <ul className="item-list">
        {Object.keys(categoryItems).map(key =>
          <Item
            key={key}
            index={key}
            details={this.props.catalog.items[selectedCategory][key]}
            onSelectItem={this.props.onSelectItem}
            inOrder={this.props.order[selectedCategory] && this.props.order[selectedCategory].includes(key)}
          />)}
      </ul>
    );
  }
}

export default Items;