import React, { useReducer, createContext, useContext } from "react";
import JumpstartDecks from "../data/decks.json";


const searchDict = Object.keys(JumpstartDecks).reduce((recDict, key) => {
  recDict[key] = Object.keys(JumpstartDecks[key].deck).reduce((acc, category) => {
    acc.push(Object.keys(JumpstartDecks[key].deck[category]))
    return acc;
  }, [JumpstartDecks[key].name]).flat()
  return recDict;
}, {})
const defaultSearchResults = Object.keys(JumpstartDecks)

export const initialState = {
  popup: true,
  rawDecks: JumpstartDecks,
  searchDictonary: searchDict,
  searchResults: defaultSearchResults
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
    case "setPopup":
      return { ...state, popup: action.payload }
    case "setSearchResults":
      return { ...state, searchResults: action.payload }
    case "setSearchDefault":
      return { ...state, searchResults: defaultSearchResults }
    default:
      return state;
  }
};