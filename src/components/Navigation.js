import React from 'react';
import { useStateStore } from "../store/store.js";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [{ filter }, dispatch] = useStateStore();
  
  function setFilter(value){
    dispatch({
      type: "setFilter",
      payload: value
    });
  }

  return (
      <BottomNavigation
        value={filter}
        onChange={(event, newFilter) => { setFilter(newFilter); }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Library" value="library" icon={<LibraryBooksIcon />} />
        <BottomNavigationAction label="Collection" value="collection" icon={<PersonIcon />} />
        <BottomNavigationAction label="Favorite" value="favorite" icon={<FavoriteIcon />} />
      </BottomNavigation>
  );
}