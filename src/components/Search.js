import React, { useState } from 'react';
import { useStateStore } from "../store/store.js";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const timeoutDuration = 500;

const useStyles = makeStyles(theme => ({
  inputRoot: {
    width: "100%"
  },
  inputInput: {
    marginRight: "7.5px"
  }
}));

export default function Search() {
  const classes = useStyles();
  const [{searchDictonary}, dispatch] = useStateStore();
  const [typingTimeout, setTypingTimeout] = useState(0);

  async function requestFamilies(search){
    if (search.length === 0){
      dispatch({
        type: "setSearchDefault",
        payload: ''
      })
    } else{
      let filteredSearch = Object.keys(searchDictonary).filter(key => { 
        let matches = searchDictonary[key].filter(card => card.toLowerCase().includes(search.toLowerCase()));
        if (matches.length > 0){
          return true;
        } else {
          return false;
        }
      })
      dispatch({
        type: "setSearchResults",
        payload: filteredSearch
      });
    }
  }

  function handleSearchChange(e){
    if (typingTimeout) {
     clearTimeout(typingTimeout);
    }
    setTypingTimeout(
      setTimeout(requestFamilies.bind(null, e.target.value), timeoutDuration)
    );
  }

  return (
    <InputBase
      placeholder="Deck or Card..."
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
        }}
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => { handleSearchChange(e)}}
    />
  );
}