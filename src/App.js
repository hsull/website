import logo from './logo.svg';
import './App.css';
import HeroText from './components/HeroText/HeroText';
import ProfilePhoto from './resources/ProfilePhoto.jpg';
import TitleText from './components/TitleText/TitleText';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HeroText/>
       	  <div className = "profile-photo-container">
	  <img src = {ProfilePhoto} className = "profile-photo"/>
	  </div> 
    <div className="title-text-container">
    <TitleText text = "Links"/>
    </div>
    <div className="socialIcons">
    <SocialIcon className = "socialIcons" url = "https://linkedin.com/in/hamishsullivan"/>
    <SocialIcon className = "socialIcons" url = "https://github.com/hsull"/>
  <p></p>

  </div>
      </header>
      <body>
        </body> 
	  </div>
  );
}

export default App;
