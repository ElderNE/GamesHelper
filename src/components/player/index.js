import React from 'react';
import './style.css';

function Player( { i, game, players, chCount } ) {

  //munchkin without input,  
  //check the button type with target, 
  //get access to input with currentTarget
  //players: array with data about players (name and count)
  return (
    <div className='player'>
        <p>{players[i][0]+': '+players[i][1]}</p>
        <form className='counterPlayer' onClick={(e) => chCount(e, i)}>
            <button type="button" value="minus" className='counterPlayerButtonMinus'></button>
            {game === "uno" && <input type="text" id="inputText" placeholder="number" maxLength="3"></input>}
            <button type="button" value="plus" className='counterPlayerButtonPlus'></button>
        </form>
        <img className='playerBackground' src={`./images/${game}/player${i+1}.png`} alt="player"></img>
    </div>
  );
}

export default React.memo(Player);