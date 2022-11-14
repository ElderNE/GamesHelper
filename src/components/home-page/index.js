import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useIsApple } from '../../hooks/detect-appledevices';

function HomePage() {

  const isApple = useIsApple();

  return (
    <div className='homePage'>
        <h1>Choose your Game</h1>
        <h3>just click</h3>
        <div className='homePageImg'>
            <Link to={'/munchkin'}>
              <h5>Munchkin</h5>
              <img src="./images/main/munchkin.png" alt="munchkin"></img>
            </Link>
            <Link to={'/uno'}>
              <h5>Uno</h5>
              <img src="./images/main/uno.png" alt="uno"></img>
            </Link>
        </div>
        {isApple && <p className='message'>You can install this app. Open the site in "Safari", click "share" and choose "add at home".</p>}
    </div>
  );
}

export default React.memo(HomePage);