import React from 'react';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';

let SelectableList = SelectableContainerEnhance(List);

import Category from './Category';

const Catalog = props => (
  <SelectableList valueLink={{value: props.selectedCategory, requestChange: props.onCategorySelect}}>
    {Object.keys(props.catalog.categories).sort().map(key =>
      <ListItem key={key} value={key} primaryText={props.catalog.categories[key].name}/>)}
  </SelectableList>
);

Catalog.propTypes = {
  catalog: React.PropTypes.object.isRequired,
  selectedCategory: React.PropTypes.string.isRequired,
  onCategorySelect: React.PropTypes.func.isRequired
};

export default Catalog;