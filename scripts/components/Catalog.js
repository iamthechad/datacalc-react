import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
import FontIcon from 'material-ui/lib/font-icon';

let SelectableList = SelectableContainerEnhance(List);

const Catalog = props => (
  <Card>
    <CardTitle title="Categories" />
    <CardText>
      <SelectableList valueLink={{value: props.selectedCategory, requestChange: props.onCategorySelect}}>
        {Object.keys(props.catalog.categories).sort().map(key =>
          <ListItem
            key={key}
            value={key}
            primaryText={props.catalog.categories[key].name}
            leftIcon={<FontIcon
              className={props.catalog.categories[key].icon}
            />}
          />)}
      </SelectableList>
    </CardText>
  </Card>
);

Catalog.propTypes = {
  catalog: React.PropTypes.object.isRequired,
  selectedCategory: React.PropTypes.string.isRequired,
  onCategorySelect: React.PropTypes.func.isRequired
};

export default Catalog;