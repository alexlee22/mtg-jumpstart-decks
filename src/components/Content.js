import React from 'react';
import { useStateStore } from "../store/store.js";
//import { makeStyles } from '@material-ui/core/styles';
import DeckContainer from './Deck/DeckContainer.js';
import ActionBar from './Deck/ActionBar.js';
/*
const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: '15px',
    textAlign: 'center'
  },
}));
*/
export default function Content() {
  //const classes = useStyles();
  //const [{ rawDecks }, dispatch] = useStateStore();
  const [{ filter, rawDecks, favorite, userLibrary }, ] = useStateStore();
  
  function checkDeckVisiblity(deck) {
    if (filter === 'favorite' && favorite.indexOf(deck) < 0) {
      // favourate
      return false;
    } else if (filter === 'collection' && userLibrary.indexOf(deck) < 0) {
      // user
      return false;
    } else {
      return true;
    }
  }
  
  return (
    <div>
      <div className="MuiToolbar-regular"></div>
      <ActionBar />
      <div>
        { Object.keys(rawDecks).map(deck =>
          <DeckContainer 
            key={deck} 
            id={deck} 
            data={rawDecks[deck]}
            visible={checkDeckVisiblity(deck)}
          />
        )}
      </div>
      <div className="MuiBottomNavigation-root"></div>
    </div>
  );

}