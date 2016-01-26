import React from 'react';

import Category from './Category';

const Catalog = props => (
  <div className="catalog">
    {Object.keys(props.catalog.categories).sort().map(key => <Category
      key={key}
      index={key}
      selectedCategory={props.selectedCategory}
      details={props.catalog.categories[key]}
      onCategorySelect={props.onCategorySelect}/>)}
  </div>
);

Catalog.propTypes = {
  catalog: React.PropTypes.object.isRequired,
  selectedCategory: React.PropTypes.string.isRequired,
  onCategorySelect: React.PropTypes.func.isRequired
};

export default Catalog;