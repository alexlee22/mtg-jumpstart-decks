import React from 'react';
import Typography from '@material-ui/core/Typography';

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

export default function DeckContents(props) {
  const { deck } = props
  return (
    <>
      {
        card_classes.filter(category => deck.hasOwnProperty(category)).map(category => 
          <div key={category}>
            <Typography variant="button" display="block">{category}</Typography>
            <ul>
              { Object.keys(deck[category]).map((card, idx) =>
                <li key={card}>{card} ({deck[category][card]})</li>
              )}
            </ul>
          </div>
        )
      }
    </>
  );
}



/*
<>
{
  card_classes.map(category => {
    if (deck.hasOwnProperty(category)){
      return(
        <>
          <Typography variant="button" display="block">{category}</Typography>
          <ul>
            { Object.keys(deck[category]).map((card, idx) =>
              <li key={card}>{card} ({deck[category][card]})</li>
            )}
          </ul>
        </>
      )
    }
  })
}
</>
*/


/*
    <>
      <Typography variant="button" display="block">{key}</Typography>
      <ul>
        { Object.keys(deck[key]).map((k, idx) =>
          <li>{k}</li>
        )}
      </ul>
    </>
*/
