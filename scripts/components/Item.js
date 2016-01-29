import React from 'react';

import classNames from 'classnames';
import RaisedButton from 'material-ui/lib/raised-button'
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import ItemDetail from './ItemDetail';

import h from '../helpers';

class Item extends React.Component {
  render() {
    const details = this.props.details;
    const disabled = this.props.inOrder;
    const selectButton = (!disabled) ? <FlatButton onClick={e => this.props.onSelectItem(this.props.index)}>Select</FlatButton> : null;
    return (
      <Card>
        <CardTitle title={details.name} subtitle={h.formatPrice(details.value)} />
        <ItemDetail description={details.description} note={details.note} />
        <CardActions>
          {selectButton}
        </CardActions>
      </Card>
    );
  }
}

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