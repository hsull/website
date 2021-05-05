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
		Aos.init({duration: 2000, once:'false', easing:"ease-in-out", mirror:'true'});
	}, []);

  return (
    <div className="App">
      <header className="App-header">
      <HeroText/>
       	  <div className = "profile-photo-container">
    <img src = {ProfilePhoto} className = "profile-photo"/>
    </div>

    <div className="social">
    <div className="socialIcons">
    <SocialIcon className = "socialIcons" url = "https://linkedin.com/in/hamishsullivan"/>
    <SocialIcon className = "socialIcons" url = "https://github.com/hsull"/>
    <SocialIcon className = "socialIcons" url = "mailto:hgsull@outlook.com"/>

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
	  </div>

  );
}

export default App;
