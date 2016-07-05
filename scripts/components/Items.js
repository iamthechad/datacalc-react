import React from 'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

import Item from './Item';

const Items = props => (
  <Paper>
    {Object.keys(_.pickBy(props.catalog.items, (value => value.category === props.catalog.selectedCategory))).sort().map(key =>
      <Item
        {...props}
        key={key}
        index={key}
        details={props.catalog.items[key]}
        selectedCategory={props.catalog.selectedCategory}
        inOrder={props.order[props.catalog.selectedCategory] && props.order[props.catalog.selectedCategory].includes(key)}
      />)}
  </Paper>
);

Items.propTypes = {
  catalog: React.PropTypes.object.isRequired,
  order: React.PropTypes.object.isRequired
};

export default Items;