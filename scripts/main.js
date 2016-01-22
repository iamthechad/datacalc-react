import React from 'react';
import ReactDOM from 'react-dom';

import Rebase from 're-base';

import h from './helpers';

var base = Rebase.createClass('https://glaring-torch-2436.firebaseio.com/');

var App = React.createClass({
  onCategorySelect: function(key) {
    var selectedItems = this.state.catalog.items[key];
    this.setState({ selectedItems: selectedItems });
  },
  getInitialState: function () {
    return {
      catalog: {
        categories: {},
        items: {}
      },
      selectedItems: {}
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
          <Catalog catalog={this.state.catalog} onCategorySelect={this.onCategorySelect}/>
          <Items items={this.state.selectedItems}/>
          <Order items={this.state.order}/>
        </div>
      </div>
    )
  }
});

var Catalog = React.createClass({
  renderCategory(key) {
    return <Category key={key} index={key} details={this.props.catalog.categories[key]} onCategorySelect={this.props.onCategorySelect}/>;
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
  onCategoryClick: function(event) {
    event.preventDefault();
    this.props.onCategorySelect(this.props.index);
  },
  render: function () {
    return (
      <li className="category">
        <a href="#" onClick={this.onCategoryClick}>{this.props.details.name}</a>
      </li>
    );
  }
});

var Items = React.createClass({
  renderItem: function (key) {
    return <Item key={key} index={key} details={this.props.items[key]}/>
  },
  render: function() {
    return (
      <ul className="item-list">
        {Object.keys(this.props.items).map(this.renderItem)}
      </ul>
    );
  }
});

var Item = React.createClass({
  renderDescription: function(description) {
    if (description) {
      return (
        <span className="item-desc">
          <ul>
            {description.map(function(obj, idx) { return <li key={idx}>{obj}</li>})}
          </ul>
        </span>
      );
    } else {
      return "";
    }
  },
  render: function () {
    var details = this.props.details;
    var note = "";
    if (details.note) {
      note = <span className="item-note">{details.note}</span>;
    }
    return (
      <li className="item">
        <span className="item-name">{details.name}</span>
        <span className="item-price">{h.formatPrice(details.value)}</span>
        {this.renderDescription(details.description)}
        {note}
        <span className="item-source-name">Commercial Source</span>
        <span className="item-source"><a href={details.commercialSource}>{details.commercialSource}</a></span>
        <span className="item-source-name">Probable Source</span>
        <span className="item-source">{details.probableSource}</span>
      </li>
    )
  }
});

var Order = React.createClass({
  render: function() {
    var total = 0;

    return (
      <div className="order-wrap">
        <h2 className="order-title">Your Data Value</h2>

        <ul className="order">
          <li className="total">
            <strong>Total:</strong>
            {h.formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>Data Calculator</h1>
      </header>
    )
  }
});

ReactDOM.render(React.createElement(App), document.querySelector('#main'));

