import React from 'react';

class Category extends React.Component {
  onCategoryClick(event) {
    event.preventDefault();
    this.props.onCategorySelect(this.props.index);
  }

  render() {
    return (
      <div className="category">
        <a href="#" onClick={e => this.onCategoryClick(e)}>{this.props.details.name}</a>
      </div>
    );
  }
}

export default Category;