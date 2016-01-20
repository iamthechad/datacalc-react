import React from 'react';
import ReactDOM from 'react-dom';

import Rebase from 're-base';

var base = Rebase.createClass('https://glaring-torch-2436.firebaseio.com/');

var App = React.createClass({
  getInitialState: function () {
    return {
      catalog: {
        categories: {},
        items: {}
      }
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
      <div>
        <h1>Data Calculator</h1>
        <Catalog catalog={this.state.catalog}/>
      </div>
    )
  }
});

var Catalog = React.createClass({
  renderCategory(key) {
    return <Category key={key} index={key} details={this.props.catalog.categories[key]}
                     items={this.props.catalog.items[key]}/>;
  },
  render: function () {
    return (
      <ul className="catalog">
        {Object.keys(this.props.catalog.categories).map(this.renderCategory)}
      </ul>
    );
  }
});

var Category = React.createClass({
  renderItem: function (key) {
    return <Item key={key} index={key} details={this.props.items[key]}/>
  },
  render: function () {
    return (
      <li className="category">
        {this.props.details.name}
        <ul className="item-list">
          {Object.keys(this.props.items).map(this.renderItem)}
        </ul>
      </li>
    );
  }
});

var Item = React.createClass({
  render: function () {
    return <li className="item">{this.props.details.name}</li>
  }
});

ReactDOM.render(React.createElement(App), document.querySelector('#main'));
