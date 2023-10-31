import React from 'react';
import './Intro.css';
import profilePicture from '../../assets/profilePicture.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, I am</span>
            <span className='introName'> Victor M. Rojas Hernandez</span>
            <p className='introParagraph'> I am a passionate new grad Computer Science Student with an interest <br/>in Full-Stack development and Machine Learning.</p>
        </div>
        <img src={profilePicture} alt='' className='profilePicture'></img>
    </section>
  );
}

export default Intro