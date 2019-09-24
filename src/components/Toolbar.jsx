import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  appBar: {
    backgroundColor: "#3f51b5"
  },

  title: {
    flexGrow: 1
  },
  button: {
    color: "#fff"
  }
}));

function Navbar () {
  const classes = useStyles();

  const handleClickReload = () => {
    window.location.reload();
    console.log("refreshed!!")
  }

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <strong>Angular 6 MatTable CRUD Example</strong>
        </Typography>
        <Typography variant="h6">
          <strong>Reload data:
            <IconButton 
              className={classes.button}
              aria-label="refresh"
              onClick={handleClickReload}
            >
              <RefreshIcon />
            </IconButton>
            </strong>
        </Typography>
      </Toolbar>
  </AppBar>
  );
}

export default Navbar;
