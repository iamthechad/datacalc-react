import React from 'react';

import h from '../helpers';

var Item = React.createClass({
  renderDescription: function(description) {
    if (description) {
      return (
        <span className="item-desc">
          <ul>
            {description.map(function(obj, idx) { return <li key={idx}>{obj}</li>})}
          </ul>
        </span>
      );
    } else {
      return "";
    }
  },
  render: function () {
    var details = this.props.details;
    var note = "";
    if (details.note) {
      note = <span className="item-note">{details.note}</span>;
    }
    return (
      <li className="item">
        <span className="item-name">{details.name}</span>
        <span className="item-price">{h.formatPrice(details.value)}</span>
        {this.renderDescription(details.description)}
        {note}
        <span className="item-source-name">Commercial Source</span>
        <span className="item-source"><a href={details.commercialSource}>{details.commercialSource}</a></span>
        <span className="item-source-name">Probable Source</span>
        <span className="item-source">{details.probableSource}</span>
        <button onClick={this.props.onSelectItem.bind(null, this.props.index)}>Select</button>
      </li>
    )
  }
});

export default Item;