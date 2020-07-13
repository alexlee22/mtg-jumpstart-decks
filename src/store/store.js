import React, { useReducer, createContext, useContext } from "react";
import JumpstartDecks from "../data/decks.json";

export const initialState = {
  popup: true,
  rawDecks: JumpstartDecks
};

console.log(JumpstartDecks)

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
    default:
      return state;
  }
};