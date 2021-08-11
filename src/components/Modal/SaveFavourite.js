import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import { useStateStore } from "../../store/store.js";
import Card from './Card.js';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1.5rem',
    padding: '1rem',
  },
  text: {
    color: 'black'
  }
}));

export default function SaveFavourite() {
  const classes = useStyles();

  return (
    
    <Card
      title={'Save Decks'} 
      subtitle={"Let's save the decks you have selcted!"}
    >
      <p className={classes.text}>asd</p>
    </Card>
  );
}
