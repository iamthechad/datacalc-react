import React from 'react';

import CardText from 'material-ui/lib/card/card-text';

class ItemDetail extends React.Component {
  render() {
    var descValue;
    var noteValue;
    if (this.props.details.description) {
      descValue = 'Includes: ' + this.props.details.description.join(",");
    }
    if (this.props.details.note) {
      noteValue = <div>({this.props.details.note})</div>;
    }

    return (descValue || noteValue) ? <CardText>{descValue}{noteValue}</CardText> : null;
  }
}

ItemDetail.propTypes = {
  details: React.PropTypes.shape({
    description: React.PropTypes.arrayOf(React.PropTypes.string),
    note: React.PropTypes.string
  })
};

export default ItemDetail;