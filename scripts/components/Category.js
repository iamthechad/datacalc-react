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

Category.propTypes = {
  details: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  }),
  index: React.PropTypes.string.isRequired
};

export default Category;