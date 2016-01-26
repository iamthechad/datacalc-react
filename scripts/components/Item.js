import React from 'react';

import classNames from 'classnames';

import h from '../helpers';

class Item extends React.Component {
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
      return null;
    }
  }

  render() {
    const details = this.props.details;
    const note = (details.note) ? <span className="item-note">{details.note}</span> : null;

    const disabled = this.props.inOrder;
    const selectButton = (!disabled) ? <button onClick={e => this.props.onSelectItem(this.props.index)}>Select</button> : null;
    const itemClass = classNames({
      'item': true,
      'disabled': disabled
    });
    return (
      <div className={itemClass}>
        <span className="item-name">{details.name}</span>
        <span className="item-price">{h.formatPrice(details.value)}</span>
        {this.renderDescription(details.description)}
        {note}
        <span className="item-source-name">Commercial Source</span>
        <span className="item-source"><a href={details.commercialSource}>{details.commercialSource}</a></span>
        <span className="item-source-name">Probable Source</span>
        <span className="item-source">{details.probableSource}</span>
        {selectButton}
      </div>
    )
  }
}

export default Item;