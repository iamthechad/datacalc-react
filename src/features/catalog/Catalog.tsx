import React from 'react';
import {Card, CardContent, Icon, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";

// let SelectableList = makeSelectable(List);

const Catalog = (props: any) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">Categories</Typography>
      <List>
        {Object.keys(props.catalog.categories).sort().map(key =>
          <ListItem key={key}>
            <ListItemIcon>
              <Icon>{props.catalog.categories[key].icon}</Icon>
            </ListItemIcon>
            <ListItemText>{props.catalog.categories[key].name}</ListItemText>
          </ListItem>
          )}
      </List>
    </CardContent>
  </Card>
);

/*Catalog.propTypes = {
  catalog: React.PropTypes.object.isRequired
};*/

export default Catalog;
