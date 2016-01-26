import React from 'react';
import Rebase from 're-base';
import { connect } from 'react-redux'

import classNames from 'classnames';

import { loadCatalog, catalogLoaded, selectCategory, addItem, removeItem, loadOrder } from '../actions/actions';

import Header from './Header';
import Catalog from './Catalog';
import Items from './Items';
import Order from './Order';

const base = Rebase.createClass('https://glaring-torch-2436.firebaseio.com/');

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    base.fetch('catalog', {
      context: this,
      then(data){
        dispatch(loadCatalog(data));

        const localStorageRef = localStorage.getItem('order');

        if (localStorageRef) {
          dispatch(loadOrder(JSON.parse(localStorageRef)));
        }

        dispatch(catalogLoaded(true));
        dispatch(selectCategory(Object.keys(data.categories)[0]));
      }
    });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.catalogLoaded) {
      localStorage.setItem('order', JSON.stringify(nextProps.order));
    }
  }

  render() {
    const { dispatch, catalog, catalogLoaded, selectedCategory, order } = this.props;
    const appClass = classNames({
      'data-calc': true,
      'disabled': !catalogLoaded
    });
    return (
      <div className="content">
        <Header />
        <div className={appClass}>
          <Catalog
            catalog={catalog}
            selectedCategory={selectedCategory}
            onCategorySelect={id => dispatch(selectCategory(id))}
          />
          <Items
            selectedCategory={selectedCategory}
            catalog={catalog}
            order={order}
            onSelectItem={id => dispatch(addItem(selectedCategory, id))}
          />
          <Order
            catalog={catalog}
            items={order}
            removeFromOrder={(categoryId, id) => dispatch(removeItem(categoryId, id))}
          />
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