import React from 'react';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem, MakeSelectable } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

/*eslint babel/new-cap: ["error", { "capIsNew": false }]*/
let SelectableList = MakeSelectable(List);

const Catalog = props => (
  <Card>
    <CardTitle title="Categories" />
    <CardText>
      <SelectableList
        value={props.catalog.selectedCategory}
        onChange={(e, id) => props.selectCategory(id)}>
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
  catalog: React.PropTypes.object.isRequired
};

export default Catalog;