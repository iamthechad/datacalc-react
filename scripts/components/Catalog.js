import React from 'react';

import Category from './Category';

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

export default Catalog;