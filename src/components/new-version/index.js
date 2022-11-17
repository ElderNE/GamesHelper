import React from 'react';
import './style.css';

function NewVersion({rebootSW}) {
  console.log("newVersion")
  return (
    <div className='newVersion'>
        <p>The app have a new version.</p>
        <p> Click to update.</p>
        <button onClick={rebootSW}>Update</button>
    </div>
  );
}

export default React.memo(NewVersion);