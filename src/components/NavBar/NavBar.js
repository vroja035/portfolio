import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='' className='logo'/>
      <div className='desktopMenu'>
        <Link activeClass= 'active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass= 'active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass= 'active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass= 'active' to='footer' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact Me</Link>
      </div>
    </nav>
  );
}

export default NavBar
