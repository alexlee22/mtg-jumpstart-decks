import React, { useState } from 'react';
import { useStateStore } from "../../store/store.js";
import DeckContents from './DeckContents.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const mana_colors = {
  'w': '#ffeb3b',
  'u': '#3f51b5',
  'b': '#673ab7',
  'r': '#f44336',
  'g': '#4caf50',
  'm': '#e91e63'
}

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: '15px',
    textAlign: 'center',
    color: 'white'
  },
  card: {
    margin: '20px'
  },
  heading: {
    textTransform: 'capitalize'
  }
}));

export default function DeckContainer(props) {
  const classes = useStyles();
  const { data } = props
  const [{ searchResults }, ] = useStateStore();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className={classes.card} style={searchResults.indexOf(props.id) > -1 ? {} : {display: 'none'}}>
      <CardContent>
        <div style={{display: 'flex', justifyContent: 'space-between'}} onClick={() => setIsOpen(!isOpen)}>
          <Typography variant="h6" component="h6" className={classes.heading}>
            {data.name}
          </Typography>
          <FiberManualRecordIcon 
            fontSize="large" 
            style={ data.color.length > 1 ? {color:mana_colors['m']} : {color:mana_colors[data.color[0]]} } 
          />
        </div>
        <div style={isOpen ? {} : {display: 'none'}}>
          <DeckContents deck={data.deck} />
        </div>
      </CardContent>
    </Card>
  );

}