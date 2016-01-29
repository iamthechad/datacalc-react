import React from 'react';

import CardText from 'material-ui/lib/card/card-text';

class ItemDetail extends React.Component {
  render() {
    var descValue;
    var noteValue;
    if (this.props.description) {
      descValue = 'Includes: ' + this.props.description.join(",");
    }
    if (this.props.note) {
      noteValue = <div>({this.props.note})</div>;
    }

    return (descValue || noteValue) ? <CardText>{descValue}{noteValue}</CardText> : null;
  }
}

ItemDetail.propTypes = {
  description: React.PropTypes.arrayOf(React.PropTypes.string),
  note: React.PropTypes.string
};

export default ItemDetail;