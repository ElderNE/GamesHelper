import React from 'react';
import Player from '../../components/player';
import './style.css';

function PlayersCounter( {game, players, chCount} ) {

  let list = [];
  for(let i = 0; i < players.length ; i++) {
    list.push(<Player key={i} 
                      i={i} 
                      game={game} 
                      players={players} 
                      chCount={chCount}/>);}

  return (
    <div className='playersCounter'>
      {list}
    </div>
  );
}

export default React.memo(PlayersCounter);