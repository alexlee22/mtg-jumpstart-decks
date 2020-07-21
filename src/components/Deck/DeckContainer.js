import React, { useState } from 'react';
//import { useStateStore } from "../store/store.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

const card_classes = [
  "creature", 
  "sorcery", 
  "instance", 
  "enchantment",
  "artifact",
  "planeswalker",
  "land",
  "other",
]

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
  const [isOpen, setIsOpen] = useState(false);
  //const [{  }, dispatch] = useStateStore();
  //data.deck
  console.log(data.name, isOpen)
  return (
    <Card className={classes.card}>
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
          {
            card_classes.map(key => {
              if (data.deck.hasOwnProperty(key)){
                return(
                  <>
                    <Typography variant="button" display="block">{key}</Typography>
                    
                  </>
                )
              }
            })
          }
          
        </div>
      </CardContent>
    </Card>
  );

}