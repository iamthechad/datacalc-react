import React from 'react';
import _ from 'lodash';

import Item from './Item';

const Items = props => (
  <div className="item-list">
    {Object.keys(_.pickBy(props.catalog.items, (value => value.category === props.selectedCategory))).sort().map(key =>
      <Item
        key={key}
        index={key}
        details={props.catalog.items[key]}
        onSelectItem={props.onSelectItem}
        inOrder={props.order[props.selectedCategory] && props.order[props.selectedCategory].includes(key)}
      />)}
  </div>
);

export default Items;