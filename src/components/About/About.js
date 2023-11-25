import React from 'react';
import './About.css';
import aboutCardImgLanguages from '../../assets/aboutCardImgLanguages.png';
import aboutCardImgSkills from '../../assets/aboutCardImgSkills.png';

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'> About Me </span>
        <span className='aboutDescription'> 
            I am a passionate Computer Science student with an interest in Full-Stack development and Machine Learning.
            I am expected to graduate on December 2023 from Florida International University with a Bacherlor of Science in
            Computer Science. Below are the programming languages and technologies that I am familiar with:
        </span>
        <div className='aboutCards'>
            <div className='aboutCard'>
                <img src={aboutCardImgLanguages} alt = '' className='aboutCardImg'/>
                <div className='aboutCardText'>
                    <h2>Programming Languages</h2>
                    <p>Python, Java, JavaScript, C/C++, HTML/CSS, R, SQL</p>
                </div>
            </div>
            <div className='aboutCard'>
                <img src={aboutCardImgSkills} alt = '' className='aboutCardImg'/>
                <div className='aboutCardText'>
                    <h2>Technologies/Skills</h2>
                    <p>React.js, Node.js, MongoDB, Express.js, Django REST, Git, Firebase, Data Structures and Algorithms, Agile Methodologies, 
                        SCRUM, SDLC, VS Code, Visual Studio, IntelliJ, PyCharm</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default About