import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';
import _ from 'lodash';

import Item from './Item';

const Items = props => (
  <Paper>
    {Object.keys(_.pickBy(props.catalog.items, (value => value.category === props.selectedCategory))).sort().map(key =>
      <Item
        key={key}
        index={key}
        details={props.catalog.items[key]}
        onSelectItem={props.onSelectItem}
        inOrder={props.order[props.selectedCategory] && props.order[props.selectedCategory].includes(key)}
      />)}
  </Paper>
);

Items.propTypes = {
  catalog: React.PropTypes.object.isRequired,
  selectedCategory: React.PropTypes.string.isRequired,
  order: React.PropTypes.object.isRequired
};

export default Items;