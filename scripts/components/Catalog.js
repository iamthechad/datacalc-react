import React from 'react';

import autobind from 'autobind-decorator';

import Category from './Category';

class Catalog extends React.Component {
  @autobind
  renderCategory(key) {
    return <Category key={key} index={key} details={this.props.catalog.categories[key]} onCategorySelect={this.props.onCategorySelect}/>;
  }

  render() {
    return (
      <ul className="catalog">
        {Object.keys(this.props.catalog.categories).map(this.renderCategory)}
      </ul>
    );
  }
}

export default Catalog;