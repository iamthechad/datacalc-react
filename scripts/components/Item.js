import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';

import ItemDetail from './ItemDetail';
import Link from './Link';

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
      {(!props.inOrder) ? <FlatButton onTouchTap={e => props.onSelectItem(props.index)}>Select</FlatButton> : null}
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
  onSelectItem: React.PropTypes.func.isRequired
};

export default Item;