import React from 'react';
import './style.css';

function Player( { i, game, players, chCount } ) {

  let placeholderName = "count";
  return (
    <div className='player'>
        <p>{players[i][0]+': '+players[i][1]}</p>
        <form className='counterPlayer' onSubmit={(e) => chCount(e, i)}>
            <input id="number" type="text" placeholder={placeholderName} maxLength="3"></input>
            <button type="submit" className='counterPlayerButtonPlus'></button>
        </form>
        <img className='playerBackground' src={`./images/${game}/player${i+1}.png`} alt="player"></img>
    </div>
  );
}

export default React.memo(Player);