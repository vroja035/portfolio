import React from 'react';
import './Footer.css';
import githubImg from '../../assets/github-mark-white.png';
import linkedinImg from '../../assets/LI-Logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
       <h2 className='footerTitle'> Contact Me </h2>
      <div className='links'>
        <a href='https://www.linkedin.com/in/victor-rojas-hernandez-5b028b23a/' target='_blank' rel='noreferrer'><img src={linkedinImg} alt='' className='link'/></a>
        <a href='https://github.com/vroja035' target='_blank' rel='noreferrer'><img src={githubImg} alt='' className='link'/></a>
      </div>  
    </footer>
  );
}

export default Footer