import React from 'react';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import ItemDetail from './ItemDetail';
import Link from './Link';
import ThemedFlatButton from './ThemedFlatButton';

import h from '../helpers';

const Item = props => (
  <Card>
    <CardTitle title={props.details.name} subtitle={h.formatPrice(props.details.value)} />
    <CardText>
      <List>
        <ItemDetail details={props.details} />
        {props.details.description || props.details.note ? <Divider/> : null}
        <ListItem
          primaryText="Commercial Source"
          secondaryText={<Link linkTarget={props.details.commercialSource} linkText={props.details.commercialSource}/>}
          disabled={true}
        />
        <ListItem primaryText="Probable Source" secondaryText={props.details.probableSource} disabled={true}/>
      </List>
    </CardText>
    <CardActions>
      {(!props.inOrder) ? <ThemedFlatButton onTouchTap={e => props.addItem(props.selectedCategory, props.index)}>Select</ThemedFlatButton> : null}
    </CardActions>
  </Card>
);

Item.propTypes = {
  details: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    description: React.PropTypes.arrayOf(React.PropTypes.string),
    note: React.PropTypes.string,
    commercialSource: React.PropTypes.string.isRequired,
    probableSource: React.PropTypes.string.isRequired
  }),
  selectedCategory: React.PropTypes.string.isRequired
};

export default Item;