import React from 'react';

import { ListItem } from 'material-ui/List';

class ItemDetail extends React.Component {
  render() {
    return (this.props.details.description || this.props.details.note) ? <ListItem
      primaryText={this.props.details.description.join(', ')}
      secondaryText={this.props.details.note}
      disabled={true}/> : null;
  }
}

ItemDetail.propTypes = {
  details: React.PropTypes.shape({
    description: React.PropTypes.arrayOf(React.PropTypes.string),
    note: React.PropTypes.string
  })
};

export default ItemDetail;