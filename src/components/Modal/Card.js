import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateStore } from "../../store/store.js";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 2002,
    margin: '1.5rem',
    padding: '1rem',
  },
  cardHeader: {
    marginBottom: '1rem'
  },
  titlebar: {
    display: 'flex',
    flexWrap: 'noWrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.3rem',
  },
  closeIcon: {
    height: '2rem',
    width: '2rem',
  },
  title: {
    fontWeight: 500,
  }
}));

export default function CardDetails({ title, subtitle, children }) {
  const classes = useStyles();
  const [{ popupType }, dispatch ] = useStateStore();

  function closePopup() {
    dispatch({
      type: 'setPopup',
      payload: {
        popup: false,
        type: popupType
      }
    })
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.cardHeader}>
        <span className={classes.titlebar}>
          <Typography variant="h5" component="h5" className={classes.title}>
            { title }
          </Typography>
          <CloseIcon
            className={classes.closeIcon}
            onClick={() => closePopup()}
          />
        </span>
        <div>
          { subtitle }
        </div>
      </div>
      
      {children}
    </Paper>
  );
}
