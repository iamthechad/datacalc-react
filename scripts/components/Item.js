import React from 'react';

import autobind from 'autobind-decorator';
import classNames from 'classnames';

import h from '../helpers';

class Item extends React.Component {
  @autobind
  renderDescription(description) {
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
  }

  render() {
    var details = this.props.details;
    var note = "";
    if (details.note) {
      note = <span className="item-note">{details.note}</span>;
    }
    var disabled = this.props.inOrder;
    var selectButton = "";
    if (!disabled) {
      selectButton = <button onClick={this.props.onSelectItem.bind(null, this.props.index)}>Select</button>;
    }
    var itemClass = classNames({
      'item': true,
      'disabled': disabled
    });
    return (
      <li className={itemClass}>
        <span className="item-name">{details.name}</span>
        <span className="item-price">{h.formatPrice(details.value)}</span>
        {this.renderDescription(details.description)}
        {note}
        <span className="item-source-name">Commercial Source</span>
        <span className="item-source"><a href={details.commercialSource}>{details.commercialSource}</a></span>
        <span className="item-source-name">Probable Source</span>
        <span className="item-source">{details.probableSource}</span>
        {selectButton}
      </li>
    )
  }
}

export default Item;