import React from 'react';
import Rebase from 're-base';

import autobind from 'autobind-decorator';
import classNames from 'classnames';

import Header from './Header';
import Catalog from './Catalog';
import Items from './Items';
import Order from './Order';

var base = Rebase.createClass('https://glaring-torch-2436.firebaseio.com/');

@autobind
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      catalog: {
        categories: {},
        items: {}
      },
      selectedCategory: "",
      selectedItems: {},
      order: {},
      catalogLoaded: false
    };
  }

  onCategorySelect(key) {
    var selectedItems = this.state.catalog.items[key];
    this.setState({
      selectedItems: selectedItems,
      selectedCategory: key
    });
  }

  onSelectItem(key) {
    var category = this.state.selectedCategory;

    var order = this.state.order;

    if (!order[category]) {
      order[category] = [];
    }

    order[category].push(key);

    this.setState({ order: order });
  }

  removeFromOrder(key, categoryKey) {
    var order = this.state.order;

    if (!order[categoryKey]) {
      return;
    }

    var idx = order[categoryKey].indexOf(key);

    if (idx !== -1) {
      order[categoryKey].splice(idx, 1);
      if (order[categoryKey].length === 0) {
        delete order[categoryKey];
      }
      this.setState({order: order});
    }
  }

  componentDidMount() {
    base.fetch('catalog', {
      context: this,
      then(data){
        this.setState({
          catalog: data,
          catalogLoaded: true
        });
        this.onCategorySelect(Object.keys(this.state.catalog.categories)[0]);
      }
    });

    var localStorageRef = localStorage.getItem('order');

    if (localStorageRef) {
      this.setState({
        order : JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('order', JSON.stringify(nextState.order));
  }

  render() {
    var appClass = classNames({
      'data-calc': true,
      'disabled': !this.state.catalogLoaded
    });
    return (
      <div className="content">
        <Header />
        <div className={appClass}>
          <Catalog catalog={this.state.catalog} onCategorySelect={this.onCategorySelect} />
          <Items
            selectedCategory={this.state.selectedCategory}
            items={this.state.selectedItems}
            order={this.state.order}
            onSelectItem={this.onSelectItem}
          />
          <Order catalog={this.state.catalog} items={this.state.order} removeFromOrder={this.removeFromOrder} />
        </div>
      </div>
    )
  }
}

export default App;