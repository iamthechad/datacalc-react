import React from 'react';
import Rebase from 're-base';
import { connect } from 'react-redux'

import autobind from 'autobind-decorator';
import classNames from 'classnames';

import { loadCatalog, catalogLoaded, selectCategory, addItem, removeItem } from '../actions/actions';

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
        const { dispatch } = this.props;
        dispatch(loadCatalog(data));
        dispatch(catalogLoaded(true));
        dispatch(selectCategory(Object.keys(data.categories)[0]));
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
    const { dispatch, catalog, catalogLoaded, selectedCategory, order } = this.props;
    var appClass = classNames({
      'data-calc': true,
      'disabled': !catalogLoaded
    });
    return (
      <div className="content">
        <Header />
        <div className={appClass}>
          <Catalog catalog={catalog} onCategorySelect={id => dispatch(selectCategory(id))} />
          <Items
            selectedCategory={selectedCategory}
            catalog={catalog}
            order={order}
            onSelectItem={id => dispatch(addItem(selectedCategory, id))}
          />
          <Order catalog={catalog} items={order} removeFromOrder={(id, categoryId) => dispatch(removeItem(categoryId, id))} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    catalog: state.catalog,
    catalogLoaded: state.catalogLoaded,
    selectedCategory: state.selectedCategory,
    order: state.order
  }
}

export default connect(mapStateToProps)(App);