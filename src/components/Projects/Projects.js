import React from 'react';
import './Projects.css';
import studentManagementImg from '../../assets/studentManagement.png';
import bumblebeeImg from '../../assets/bumblebee.png';
import weatherAppImg from '../../assets/weatherApp.png';
import notesAppImg from '../../assets/noteApp.png';
import auditoriumAppImg from '../../assets/auditoriumApp.png';
import nuMomImg from '../../assets/nuMom.png';
import loginsignup from '../../assets/loginsignup.png';

const Projects = () => {
  return (
    <section id='projects'>

        <h2 className='projectsTitle'> Projects </h2>
        
        <span className='projectsDescription'> 
          Here are the projects I have worked on. They can also be found on my <a href='https://github.com/vroja035' target='_blank' rel='noreferrer'>GitHub</a>.
        </span>

        <div className='projectsCards'>

            <div className='projectsCard'>
                <img src={studentManagementImg} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                    <h2> <a href='https://github.com/vroja035/Student-Management-System' target='_blank' rel='noreferrer'>Student Management System</a></h2>
                    <p>Simple Student Management System which allows users to create accounts, create different classes, and
                      allows students to join a specific class. <br/> <br/>
                      <i> Languages/Frameworks: Java, mySQL, Java Swing, Netbeans IDE. </i>
                      </p>
                </div>
            </div>

            <div className='projectsCard'>
                <img src={bumblebeeImg} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                <h2><a href='https://github.com/vroja035/Bumble-Bee-Education-Discord-Bot' target='_blank' rel='noreferrer'>Bumblebee Discord Bot</a></h2>
                    <p>Simple educational Discord Bot utilizing the Discord API. Made in collaboration with team members for ShellHacks 2022. <br/> <br/>
                      <i> Languages/Frameworks: Python, Discord API, Wikipedia API, ZenQuotes API. </i>
                      </p>
                </div>
            </div>

            <div className='projectsCard'>
                <img src={weatherAppImg} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                <h2><a href='https://github.com/vroja035/Weather-App' target='_blank' rel='noreferrer'>Weather App</a></h2>
                    <p>Simple Weather App which allows the user to obtain the current weather and a 5-day weather
                      forecast. <br/> <br/>
                      <i> Languages/Frameworks: Python, Django, HTML/CSS, OpenWeatherAPI. </i>
                      </p>
                </div>
            </div>

            <div className='projectsCard'>
                <img src={notesAppImg} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                <h2><a href='https://github.com/vroja035/Notes-App' target='_blank' rel='noreferrer'>Notes App</a></h2>
                    <p>Simple Notes App which allows the user to add notes, delete notes, search notes, and toggle dark mode. <br/> <br/>
                      <i> Languages/Frameworks: JavaScript, React.js, Node.js, HTML/CSS. </i>
                      </p>
                </div>
            </div>

            <div className='projectsCard'>
                <img src={auditoriumAppImg} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                <h2><a href='https://github.com/vroja035/colab_music' target='_blank' rel='noreferrer'>Auditorium (Music Collaboration App)</a></h2>
                    <p>Full-stack project which utilizes the SpotifyAPI and allows users to create and join rooms to control
                      the spotify player on the account of the host (requires the host to have a spotify premium account). Utilized Django
                      for the backend and React for the frontend.<br/> <br/>
                      <i> Languages/Frameworks: Python, Django REST Framework, JavaScript, React.js, Node.js, SpotifyAPI, MUI/Materials. </i>
                      </p>
                </div>
            </div>

            <div className='projectsCard'>
                <img src={nuMomImg} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                <h2><a href='https://github.com/edumorlom/nuMom' target='_blank' rel='noreferrer'>nuMom</a></h2>
                    <p>Collaborated with fellow group members on the development of nuMom for the Fall 2023 term. NuMom is a smartphone-based maternal/infant 
                      healthcare application designed for low-income minority mothers that provides support in 3 different languages (English, Spanish & Haitian Creole). 
                      The main purpose of the application in its current state is to provide early and continued access to health care for prenatal and postnatal mothers <br/> <br/>
                      <i> Languages/Frameworks: JavaScript, React.js, Node.js, FireBase. </i>
                      </p>
                </div>
            </div>

            <div className='projectsCard'>
                <img src={loginsignup} alt = '' className='projectsCardImg'/>
                <div className='projectsCardText'>
                <h2><a href='https://github.com/vroja035/login_signup' target='_blank' rel='noreferrer'>Login/Signup (MERN) </a></h2>
                    <p>Simple Log In/Sign Up app made using MERN. Made with the purpose to get more familiar with JWT, Cookies, and React Redux Toolkit. 
                      Allows users to login/signup. Stores JWT Access Token in a secure HTTPS Cookie. Persists state by sending refresh token to backend on every request.
                      This way it avoids storing access tokens on local storage. <br/> <br/>
                      <i> Languages/Frameworks: MongoDB, Express.js, Node.js, React.js, JWT, React Redux Toolkit </i>
                      </p>
                </div>
            </div>

        </div>


    </section>
  );
}

export default Projects