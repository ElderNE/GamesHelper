import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header({openModal}) {

  return (
    <header className='header'>
        <div className='navigation'>
          <Link to={'/'}><h1>GH</h1></Link>
          <nav className='header-games'>
            <Link to={'/'}><p>Home</p></Link>
            <Link to={'/munchkin'}><p>Munchkin</p></Link>
            <Link to={'/uno'}><p>Uno</p></Link>
          </nav>
        </div>
        <div className='headerDice' onClick={openModal}>
          <div className='headerDiceText'>roll the dice</div>
          <div className='dice'></div>
        </div>
    </header>
  );
}

export default React.memo(Header);