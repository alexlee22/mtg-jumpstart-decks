import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateStore } from "../store/store.js";
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    margin: "5px"
  },
  paper: {
    padding: "25px"
  },
  card: {
    marginBottom: '15px',
    transition: 'background-color 250ms',
    backgroundColor: theme.palette.background.paper,
    "&:last-child": {
      marginBottom: '0'
    },
    "&:hover":{
      backgroundColor: '#ffc629'
    }
  },
  title: {
    marginBottom: '15px',
    textAlign: 'center'
  },
}));

export default function Popup() {
  const classes = useStyles();
  const [{ popup }, dispatch] = useStateStore();

  function handlePopup(value){
    dispatch({
      type: "setPopup",
      payload: value
    });
  }
  
  return (
    <Modal
      open={popup}
      onClose={() => handlePopup(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.title}>Select an option...</Typography>
        <Card className={classes.card} onClick={() => handlePopup(false)}>
          <CardContent>
            <Typography variant="h6">Search</Typography>
            <Typography variant="subtitle2" color="textSecondary">Search for decks</Typography>
          </CardContent>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Draft</Typography>
            <Typography variant="subtitle2" color="textSecondary">Configuration of Jumpstart decks</Typography>
          </CardContent>
        </Card>
      </Paper>
    </Modal>
  );

}

