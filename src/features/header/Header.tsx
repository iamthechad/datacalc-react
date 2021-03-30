import React from 'react';
import {AppBar, IconButton, Link, Toolbar, Typography} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton title="Data Calculator Repository">
          <Link href="https://github.com/iamthechad/datacalc-react">
            <GitHubIcon color="action"/>
          </Link>
        </IconButton>
        <Typography variant="h6">
          Data Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
