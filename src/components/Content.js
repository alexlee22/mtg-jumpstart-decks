import React from 'react';
import { useStateStore } from "../store/store.js";
//import { makeStyles } from '@material-ui/core/styles';
import DeckContainer from './Deck/DeckContainer.js';
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
  const [{ rawDecks }, ] = useStateStore();
  /*
  function handlePopup(value){
    dispatch({
      type: "setPopup",
      payload: value
    });
  }
  */

  return (
    <div>
      <div className="MuiToolbar-regular"></div>
      <div>
        { Object.keys(rawDecks).map(deck =>
          <DeckContainer 
            key={deck} 
            id={deck} 
            data={rawDecks[deck]}
          />
        )}
      </div>
    </div>
  );

}