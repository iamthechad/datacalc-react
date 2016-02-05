import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';

import MegatomeTheme from '../themes/default';

const ThemedFlatButton = props => (
  <FlatButton
    {...props}
    hoverColor={MegatomeTheme.flatButton.hoverColor}
    rippleColor={MegatomeTheme.flatButton.rippleColor}
  />
);

export default ThemedFlatButton;