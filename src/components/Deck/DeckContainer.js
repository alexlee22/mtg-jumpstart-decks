import React, { useState } from 'react';
import { useStateStore } from "../../store/store.js";
import DeckContents from './DeckContents.js'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

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
    margin: '1.5rem',
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
  },
  favoriteIcon: {
    padding: 0,
    width: '2rem',
    height: '2rem',
    transition: 'color 0.25s',
    '&span > svg': {
      backgroundColor: 'red',
      stroke: 'white',
    }
  }
}));

function StrokeHeartIcon() {
  return(
    <SvgIcon>
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="white"
        strokeWidth={2}
      />
    </SvgIcon>
  )
}

export default function DeckContainer(props) {
  const classes = useStyles();
  const { data } = props
  const [{ searchResults, favorite }, dispatch] = useStateStore();
  const [isOpen, setIsOpen] = useState(false);

  let isVisible = true;
  if (props.visible === false || searchResults.indexOf(props.id) < 0){
    isVisible = false;
  }
  
  function updateFavourates(deckid){
    dispatch({
      type: "setDeckFavorite",
      payload: deckid
    });
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
          <IconButton 
            aria-label="favorite" 
            className={classes.favoriteIcon}
            onClick={(e) => { e.stopPropagation(); updateFavourates(props.id)}}
            style={favorite.indexOf(props.id) > -1 ? { color: '#f50057'} : { color: 'rgba(97, 97, 97, 0.7)'}}
          >
            <StrokeHeartIcon />
          </IconButton>
        </div>
        <div className={classes.cardContent} style={isOpen ? {} : {display: 'none'}}>
          <DeckContents deck={data.deck} />
        </div>
      
    </Card>
  );

}