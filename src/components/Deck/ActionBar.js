import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateStore } from "../../store/store.js";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
  root: {
    margin: '1.5rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    flexGrow: 1,
  },
  button: {
    marginLeft: '1rem',
  }
}));

export default function ActionBar() {
  const classes = useStyles();
  const [{ popup, filter }, dispatch] = useStateStore();

  function setPopup(status, type) {
    dispatch({
      type: 'setPopup',
      payload: {
        popup: status,
        type: type
      }
    })
  }

  let isDisabled = popup || filter === 'library';

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="p" className={classes.label}>
        User Options
      </Typography>
      
      <Button 
        variant="contained" 
        color="primary"
        className={classes.button}
        startIcon={<SaveIcon />}
        disabled={isDisabled}
        onClick={() => setPopup(true, 'save')}
      >
        Save
      </Button>
      <Button 
        variant="contained" 
        color="primary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        disabled={isDisabled}
        onClick={() => setPopup(true, 'delete')}
      >
        Delete
      </Button>
    </div>
  );
}
