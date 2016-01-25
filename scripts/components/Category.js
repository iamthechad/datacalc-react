import React from 'react';

import autobind from 'autobind-decorator';

class Category extends React.Component {
  @autobind
  onCategoryClick(event) {
    event.preventDefault();
    this.props.onCategorySelect(this.props.index);
  }

  render() {
    return (
      <li className="category">
        <a href="#" onClick={this.onCategoryClick}>{this.props.details.name}</a>
      </li>
    );
  }
}

export default Category;