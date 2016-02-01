import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import List from 'material-ui/lib/lists/list';

import OrderCategoryItem from './OrderCategoryItem';

import h from '../helpers';

const OrderCategory = props => (
    <List subheader={props.category.name} >
        {props.selectedItems.sort().map(key =>
            <OrderCategoryItem
                key={key}
                item={props.items[key]}
                itemId={key}
                categoryId={props.index}
                removeFromOrder={props.removeFromOrder}
            />)}
    </List>
);

/*const OrderCategory = props => (
  <li className="order-category">
    {props.category.name}
    <CSSTransitionGroup
      className="order-items"
      component="ul"
      transitionName="order-items"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}>
      {props.selectedItems.sort().map(key =>
        <OrderCategoryItem
          key={key}
          item={props.items[key]}
          itemId={key}
          categoryId={props.index}
          removeFromOrder={props.removeFromOrder}
        />)}
    </CSSTransitionGroup>
  </li>
);*/

OrderCategory.propTypes = {
  index: React.PropTypes.string.isRequired,
  selectedItems: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  category: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired
  })
};

export default OrderCategory;