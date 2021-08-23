import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateStore } from "../../store/store.js";
import Card from './Card.js';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1.5rem',
    padding: '1rem',
  },
  text: {
    color: 'black'
  },
  item: {
    textTransform: 'capitalize'
  },
  favStyle: {
    color: 'red'
  },
  buttonBar: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'auto auto'
  }
}));

export default function SaveFavourite() {
  const classes = useStyles();
  const [{ rawDecks, userLibrary, favorite }, dispatch] = useStateStore();
  const [addUser, setAddUser] = useState(true); 
  
  function setLocal(saveDecks) {
    localStorage.setItem('mtg-user-deck', JSON.stringify(saveDecks));
    closePopup();
  }
  function closePopup(){
    dispatch({
      type: 'setPopup',
      payload: {
        popup: false,
      }
    })
  }

  let uniques = addUser ? [...new Set([...userLibrary, ...favorite])] : favorite;
  uniques = uniques.sort((a,b) => a.localeCompare(b));

  return (  
    <Card
      title={'Save Decks'} 
      subtitle={"Let's save the decks you have selcted!"}
    >
      <FormControlLabel
        control={
          <Switch
            checked={addUser}
            onChange={() => setAddUser(!addUser)}
            name="userToggle"
            color="primary"
          />
        }
        label="Add User Collection"
      />

      <ul> 
        { uniques.map(deck =>
          <li
            key={deck} 
            className={`${classes.item} ${favorite.includes(deck) && classes.favStyle}`}
          >
            {rawDecks[deck].name}
          </li>
        )}
      </ul>

      <div className={classes.buttonBar}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => setLocal(uniques)}
        >
          Save to Local
        </Button>
        <Button variant="outlined" color="primary" onClick={() => closePopup()}>
          Cancel
        </Button>
      </div>
    </Card>
  );
}
