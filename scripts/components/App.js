import React from 'react';
import Rebase from 're-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions';
import injectTapEventPlugin from 'react-tap-event-plugin';

import classNames from 'classnames';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MegatomeTheme from '../themes/default';

import Header from './Header';
import Catalog from './Catalog';
import Items from './Items';
import Order from './Order';

require('../../css/style.styl');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const base = Rebase.createClass('https://glaring-torch-2436.firebaseio.com/');

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme(MegatomeTheme)};
  }

  componentDidMount() {
    base.fetch('catalog', {
      context: this,
      then(data){
        this.props.loadCatalog(data);

        const localStorageRef = localStorage.getItem('order');

        if (localStorageRef) {
          this.props.loadOrder(JSON.parse(localStorageRef));
        }

        this.props.catalogLoaded(true);
        this.props.selectCategory(Object.keys(data.categories)[0]);
      }
    });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.catalogLoaded) {
      localStorage.setItem('order', JSON.stringify(nextProps.order));
    }
  }

  render() {
    const appClass = classNames({
      'data-calc': true,
      'disabled': !this.props.catalog.catalogLoaded
    });
    return (
      <div className="content">
        <Header />
        <div className={appClass}>
          <Catalog {...this.props} />
          <Items {...this.props} />
          <Order {...this.props} />
        </div>
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    catalog: state.catalog,
    order: state.order
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);