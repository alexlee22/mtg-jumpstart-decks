import React from 'react';
import Search from './Search.js';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
//import { useStateStore } from "../store/store.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  search: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  iconWrapper: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "7.5px"
  },
  inputRoot: {
    width: "100%"
  },
  inputInput: {
    marginRight: "7.5px"
  }
}));

export default function Header() {
  const classes = useStyles();
  //const [, dispatch] = useStateStore();

  function handleToggleMenu(){
    /*
    dispatch({
      type: "setMenu",
      payload: ''
    });
    */
    
  }

  return (
    <AppBar position="fixed" >
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { handleToggleMenu() }}>
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.iconWrapper}>
            <SearchIcon />
          </div>
          <Search />
        </div>
      </Toolbar>
      
    </AppBar>
  );
}