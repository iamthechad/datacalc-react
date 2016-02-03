import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';

const Header = props => (
  <AppBar
    iconElementLeft={<IconButton iconClassName="icon-github" href="https://github.com/iamthechad/datacalc-react" linkButton={true}/>}
    title="Data Calculator"
  />
);

export default Header;