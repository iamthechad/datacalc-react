import React from 'react';

var Category = React.createClass({
  onCategoryClick: function(event) {
    event.preventDefault();
    this.props.onCategorySelect(this.props.index);
  },
  render: function () {
    return (
      <li className="category">
        <a href="#" onClick={this.onCategoryClick}>{this.props.details.name}</a>
      </li>
    );
  }
});

export default Category;