import React from 'react';

import autobind from 'autobind-decorator';

import Item from './Item';

class Items extends React.Component {
  @autobind
  renderItem(key) {
    var category = this.props.selectedCategory;
    var order = this.props.order;
    var inOrder = order[category] && order[category].includes(key);
    return <Item
      key={key}
      index={key}
      details={this.props.items[key]}
      onSelectItem={this.props.onSelectItem}
      inOrder={inOrder}
    />
  }

  render() {
    return (
      <ul className="item-list">
        {Object.keys(this.props.items).map(this.renderItem)}
      </ul>
    );
  }
}

export default Items;