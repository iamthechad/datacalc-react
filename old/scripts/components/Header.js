import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const Header = props => (
  <AppBar
    iconElementLeft={<IconButton iconClassName="icon-github" href="https://github.com/iamthechad/datacalc-react" />}
    title="Data Calculator"
  />
);

export default Header;