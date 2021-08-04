import React, { useState } from 'react';
import { useStateStore } from "../../store/store.js";
import DeckContents from './DeckContents.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const mana_colors = {
  'w': 'linear-gradient(62deg, #e65c00 20%, #F9D423 125%)',
  'u': 'linear-gradient(135deg, #1A2980 20%, #26D0CE 125%)',
  'b': 'linear-gradient(135deg, #3c1053 20%, #ad5389 125%)',
  'r': 'linear-gradient(135deg, #BD3F32 20%, #CB356B 125%)',
  'g': 'linear-gradient(132deg, #16A085 20%, #F4D03F 125%)',
  'm': 'linear-gradient(135deg, #654ea3 20%, #C850C0 66%, #FFCC70 125%)'
}

const useStyles = makeStyles(theme => ({
  title: {
    marginBottom: '15px',
    textAlign: 'center',
    color: 'white'
  },
  headingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    
  },
  card: {
    margin: '20px',
    border: '0px solid black',
    borderRadus: '5px'
  },
  heading: {
    textTransform: 'capitalize',
    color: 'hsla(0, 20%, 125%, 0.92)'
  },
  cardContent: {
    borderTop: "0px solid black",
    padding: '20px'
  }
}));

export default function DeckContainer(props) {
  const classes = useStyles();
  const { data } = props
  const [{ searchResults }, ] = useStateStore();
  const [isOpen, setIsOpen] = useState(false);

  let isVisible = true;
  if (props.visible === false || searchResults.indexOf(props.id) < 0){
    isVisible = false;
  }
  
  return (
    <Card className={classes.card} style={isVisible ? {} : {display: 'none'}}>
      
        <div 
          className={classes.headingContainer} 
          style={ data.color.length > 1 ? { backgroundImage:mana_colors['m'] } : { backgroundImage: mana_colors[data.color[0]]}} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <Typography variant="h6" component="h6" className={classes.heading}>
            {data.name}
          </Typography>
          
        </div>
        <div className={classes.cardContent} style={isOpen ? {} : {display: 'none'}}>
          <DeckContents deck={data.deck} />
        </div>
      
    </Card>
  );

}