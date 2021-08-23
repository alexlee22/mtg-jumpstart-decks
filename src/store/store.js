import React, { useReducer, createContext, useContext } from "react";
import JumpstartDecks from "../data/decks.json";
import JumpstartUser from "../data/user.json";
console.log(JumpstartDecks)
let defaultSearchResults = Object.keys(JumpstartDecks)

//Get pre-determined list, then check for LOCAL decks
let localDecks = localStorage.getItem('mtg-user-deck');
if (localDecks){
  localDecks = JSON.parse(localDecks);
} else {
  localDecks = Object.keys(JumpstartUser).filter((k) => JumpstartUser[k])
}

const searchDict = Object.keys(JumpstartDecks).reduce((recDict, key) => {
  recDict[key] = Object.keys(JumpstartDecks[key].deck).reduce((acc, category) => {
    acc.push(Object.keys(JumpstartDecks[key].deck[category]))
    return acc;
  }, [JumpstartDecks[key].name]).flat()
  return recDict;
}, {});

export const initialState = {
  popup: false,
  popupType: '',
  rawDecks: JumpstartDecks,
  userLibrary: localDecks,
  searchDictonary: searchDict,
  searchResults: defaultSearchResults,
  userDeckFilter: false,
  favorite: [],
  filter: 'library',
};

export const StateContext = createContext();
export const useStateStore = () => useContext(StateContext);
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const reducer = (state, action) => {
  switch (action.type) {
    case "setFilter":
      return { ...state, filter: action.payload }
    case "setPopup":
      return { ...state, popup: action.payload.popup, popupType: action.payload.type ? action.payload.type : state.type }
    case "setSearchResults":
      return { ...state, searchResults: action.payload }
    case "setSearchDefault":
      return { ...state, searchResults: defaultSearchResults }
    case "setUserDeckFilter":
      return { ...state, userDeckFilter: !state.userDeckFilter }
    case "setDeckFavorite":
      let newFavs = state.favorite.indexOf(action.payload) > -1 
        ? state.favorite.filter(deck => deck !== action.payload)
        : [...state.favorite, action.payload]
      return { ...state, favorite: newFavs}
    case "setUserLibrary":
      return { ...state, userLibrary: action.payload }
    default:
      return state;
  }
};