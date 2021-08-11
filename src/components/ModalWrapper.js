
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateStore } from "../store/store.js";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2000,
    width: '100%',
    height: '100%',
  },
  modal: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
  },
  clickableBack: {
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
}));

export default function ModalWrapper(props) {
  const classes = useStyles();
  const [{ popup }, dispatch ] = useStateStore();

  function setPopup(status, type) {
    dispatch({
      type: 'setPopup',
      payload: {
        popup: status,
        type: type
      }
    })
  }

  return (
    <div 
      className={`${classes.root} ${classes.modal}`}
      style={popup ? {display: 'flex'} : {display: 'none'} }
    >
      <div 
        className={`${classes.root} ${classes.clickableBack}`}
        onClick={() => setPopup(false)}
      />
      {props.children}
    </div>
  );
}
