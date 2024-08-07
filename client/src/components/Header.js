import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='grid max-w-full '>
    <header className='header min-h-[200px] max-w-full grid'>
      <Link to="/" className='flex-shrink-0'>
        <Logo width="100%" height="40vh" />
      </Link>
    </header>

      
      <nav className='nav flex space-x-4 items-center justify-center align-middle'>
        <Link to="/responsive">Responsive Apps</Link>
        <Link to="/htmlcss">HTML/CSS Apps</Link>
        <Link to={"/"}>{<IoHomeOutline />}</Link>
      </nav>
    
    
    </div>
  );
};

export default Header;
