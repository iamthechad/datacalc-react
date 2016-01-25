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
      <div className="category">
        <a href="#" onClick={this.onCategoryClick}>{this.props.details.name}</a>
      </div>
    );
  }
}

export default Category;