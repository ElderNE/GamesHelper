import React from 'react';
import './style.css';

function Footer() {
  return (
    <footer className='footer'>
        <p>&copy; Stud|o 2022</p>
        <p>&middot; all rights reserved by the copyright holders</p>
        <p>&middot; joke site, not commercial</p>
    </footer>
  );
}

export default React.memo(Footer);