import React from 'react';
import './style.css';

function NewVersion({setMessageUpdate}) {

  const rebootSW = () => {
    setMessageUpdate(false);
    const broadcast = new BroadcastChannel('sw-update-channel');
    broadcast.postMessage({type: 'SKIP_WAITING'});
  }

  return (
    <div className='newVersion'>
        <p>The app have a new version.</p>
        <p> Click update.</p>
        <button onClick={rebootSW}>Update</button>
    </div>
  );
}

export default React.memo(NewVersion);