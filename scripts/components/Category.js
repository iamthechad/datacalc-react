import React from 'react';

import classNames from 'classnames';

class Category extends React.Component {
  onCategoryClick(event) {
    event.preventDefault();
    this.props.onCategorySelect(this.props.index);
  }

  render() {
    const catClass = classNames({
      'category': true,
      'selected': this.props.index === this.props.selectedCategory
    });
    return (
      <div className={catClass} onClick={e => this.onCategoryClick(e)}>
        {this.props.details.name}
      </div>
    );
  }
}

Category.propTypes = {
  details: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  }),
  index: React.PropTypes.string.isRequired,
  selectedCategory: React.PropTypes.string.isRequired
};

export default Category;