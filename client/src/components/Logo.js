import React from 'react';
import logohead from '../assets/tittlelogo.png';

const Logo = ({ w, h }) => {
  return (
    <div>
      <img src={logohead} alt="logo" height={h} width={w} />
    </div>
  );
}

export default Logo;
