import React, { useEffect } from 'react';
import { useStateStore } from "../store/store.js";
import { useLocation } from "react-router-dom";
import DeckContainer from './Deck/DeckContainer.js';
import ActionBar from './Deck/ActionBar.js';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Content() {
  const [{ filter, rawDecks, favorite, userLibrary }, dispatch ] = useStateStore();
  const query = useQuery()

  useEffect(() => {
    let queryDecks = query.get("decks");
    if (queryDecks){
      queryDecks = queryDecks.split('|');
      let userKeyDecks = Object.keys(rawDecks).filter(c => queryDecks.includes(rawDecks[c].code));
      dispatch({
        type: "setUserLibrary",
        payload: userKeyDecks
      });
    } else {
      console.log('no decks found');
    }
  }, []);

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