import React from 'react';
import { useStateStore } from "../store/store.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: '15px',
    textAlign: 'center'
  },
}));

export default function Content() {
  const classes = useStyles();
  const [{ popup }, dispatch] = useStateStore();

  function handlePopup(value){
    dispatch({
      type: "setPopup",
      payload: value
    });
  }
  
  return (
    <div></div>
  );

}