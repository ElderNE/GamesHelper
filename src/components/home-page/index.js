import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function HomePage() {

  return (
    <div className='homePage'>
        <h1>Choose your Game</h1>
        <h3>You don't need a pen, a paper, a dice...</h3>
        <h3>Only click</h3>
        <div className='homePageImg'>
            <Link to={'/munchkin'}>
                <img src="./images/main/munchkin.png" alt="munchkin"></img>
            </Link>
            <Link to={'/uno'}>
                <img src="./images/main/uno.png" alt="uno"></img>
            </Link>
        </div>
    </div>
  );
}

export default React.memo(HomePage);