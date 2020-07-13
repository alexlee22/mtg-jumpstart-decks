import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateStore } from "../store/store.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import { useStateStore } from "../store/store.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const [, dispatch] = useStateStore();

  function handleToggleMenu(){
    /*
    dispatch({
      type: "setMenu",
      payload: ''
    });
    */
    
  }

  return (
    <AppBar position="absolute" >
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { handleToggleMenu() }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Jumpstart
        </Typography>
      </Toolbar>
      
    </AppBar>
  );
}

