import React from 'react';

import Rebase from 're-base';

import Header from './Header';
import Catalog from './Catalog';
import Items from './Items';
import Order from './Order';

var base = Rebase.createClass('https://glaring-torch-2436.firebaseio.com/');

var App = React.createClass({
  onCategorySelect: function(key) {
    var selectedItems = this.state.catalog.items[key];
    this.setState({
      selectedItems: selectedItems,
      selectedCategory: key
    });
  },
  onSelectItem: function(key) {
    var category = this.state.selectedCategory;

    var order = this.state.order;

    if (!order[category]) {
      order[category] = [];
    }

    order[category].push(key);

    this.setState({ order: order });
  },
  getInitialState: function () {
    return {
      catalog: {
        categories: {},
        items: {}
      },
      selectedCategory: "",
      selectedItems: {},
      order: {}
    }
  },
  componentDidMount: function () {
    base.bindToState('catalog', {
      context: this,
      state: 'catalog'
    });
  },
  render: function () {
    return (
      <div className="content">
        <Header />
        <div className="data-calc">
          <Catalog catalog={this.state.catalog} onCategorySelect={this.onCategorySelect} />
          <Items
            selectedCategory={this.state.selectedCategory}
            items={this.state.selectedItems}
            order={this.state.order}
            onSelectItem={this.onSelectItem}
          />
          <Order catalog={this.state.catalog} items={this.state.order} />
        </div>
      </div>
    )
  }
});

export default App;