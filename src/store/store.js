import React, { useReducer, createContext, useContext } from "react";
import JumpstartDecks from "../data/decks.json";
import JumpstartUser from "../data/user.json";

const searchDict = Object.keys(JumpstartDecks).reduce((recDict, key) => {
  recDict[key] = Object.keys(JumpstartDecks[key].deck).reduce((acc, category) => {
    acc.push(Object.keys(JumpstartDecks[key].deck[category]))
    return acc;
  }, [JumpstartDecks[key].name]).flat()
  return recDict;
}, {})
const defaultSearchResults = Object.keys(JumpstartDecks)

//const USER_LIB = JumpstartDecks

export const initialState = {
  popup: true,
  rawDecks: JumpstartDecks,
  userLibrary: Object.keys(JumpstartUser).filter((k) => JumpstartUser[k]),
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
      return { ...state, popup: action.payload }
    case "setSearchResults":
      return { ...state, searchResults: action.payload }
    case "setSearchDefault":
      return { ...state, searchResults: defaultSearchResults }
    case "setUserDeckFilter":
      return { ...state, userDeckFilter: !state.userDeckFilter }
    case "setDeckFavorite":
      console.log(state.favorite.indexOf(action.payload) > -1 )
      let newFavs = state.favorite.indexOf(action.payload) > -1 
        ? state.favorite.filter(deck => deck !== action.payload)
        : [...state.favorite, action.payload]
      console.log(newFavs)
      return { ...state, favorite: newFavs}
    default:
      return state;
  }
};