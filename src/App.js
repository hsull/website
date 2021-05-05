import logo from './logo.svg';
import './App.css';
import HeroText from './components/HeroText/HeroText';
import ProfilePhoto from './resources/ProfilePhoto.jpg';
import TitleText from './components/TitleText/TitleText';
import { SocialIcon } from 'react-social-icons';
import Aos from 'aos';
import React, { useEffect } from 'react'
import chevronDown from './resources/chevron-down.svg'

function App() {
  useEffect(() => {
		Aos.init({duration: 2000, once:'false', easing:"ease-in-out", mirror:'false'});
	}, []);

  return (
    <div className="App">
      <header className="App-header">
      <HeroText/>
       	  <div className = "profile-photo-container">
    <img src = {ProfilePhoto} className = "profile-photo"/>
    </div> 
    <div className = "chevron">
      <img src = {chevronDown} className="chevron-down"></img>
    </div>
    <div className="social" data-aos="fade-left">
    <div className="title-text-container">
        <TitleText text = "Links"/>
    </div>
    <div className="socialIcons">
    <SocialIcon className = "socialIcons" url = "https://linkedin.com/in/hamishsullivan"/>
    <SocialIcon className = "socialIcons" url = "https://github.com/hsull"/>
    <p></p>
    </div>

  </div>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>

      </header>
      <body>
        </body> 
	  </div>

  );
}

export default App;
