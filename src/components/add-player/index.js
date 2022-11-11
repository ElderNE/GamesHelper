import React from 'react';
import './style.css';

function AddPlayer({ addPlayer, clearPlayers }) {

  return (
    <div className='addPlayer'>
        <form className='addPlayerForm' onSubmit={(e) => addPlayer(e)}>
            <label>Player:</label>
            <input id="label" type="text" placeholder='Name' maxLength={50}></input>
            <button type="submit" className='addPlayerButtonAdd'>Add</button>
        </form>
        <button className='addPlayerButtonClear' onClick={clearPlayers}>Clear all</button>
    </div>
  );
}

export default React.memo(AddPlayer);