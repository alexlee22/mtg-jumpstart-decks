import React from 'react';
import { useStateStore } from "../../store/store.js";
import SaveFavourite from './SaveFavourite.js';

export default function Modal() {
  const [{ popupType }, ] = useStateStore();

  switch(popupType){
    case 'save':
      return (<SaveFavourite />);
    case 'delete':
      return (<SaveFavourite />);
    default:
      return (<></>);
  }
}
