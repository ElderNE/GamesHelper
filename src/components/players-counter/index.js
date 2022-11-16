import React from 'react';
import Player from '../../components/player';
import AddPlayerAction from '../add-player-action';
import './style.css';

function PlayersCounter( {game, players, chCount} ) {

  let list = [];
  for(let i = 0; i < players.length ; i++) {
    list.push(<Player key={i} 
                      i={i} 
                      game={game} 
                      playerName={players[i][0]}
                      playerCount={players[i][1]}
                      chCount={chCount}/>);}

  return (
    <div className='playersCounter'>
      {list}
      {!players.length && <AddPlayerAction/>} 
    </div>
  );
}

export default React.memo(PlayersCounter);