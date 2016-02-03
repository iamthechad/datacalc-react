import React from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';

import ItemDetail from './ItemDetail';

import h from '../helpers';

const Item = props => (
  <Card>
    <CardTitle title={props.details.name} subtitle={h.formatPrice(props.details.value)} />
    <ItemDetail details={props.details} />
    <CardActions>
      {(!props.inOrder) ? <FlatButton onClick={e => props.onSelectItem(props.index)}>Select</FlatButton> : null}
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