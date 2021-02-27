import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
  <RouterLink ref={ref} to="https://github.com/iamthechad/datacalc-react" {...props} />
));

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton title="Data Calculator Repository">
          <GitHubIcon component={LinkBehavior}/>
        </IconButton>
        <Typography variant="h6">
          Data Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
