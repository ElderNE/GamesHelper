import React from 'react';
import './style.css';

function AddPlayerAction() {

  return (
    <div className='addPlayerAction'>
      <h3>Add Player</h3>
      <div>&#8679;</div>
    </div>
  );
}

export default React.memo(AddPlayerAction);