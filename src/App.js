import logo from './logo.svg';
import './App.css';
import HeroText from './components/HeroText/HeroText';
import ProfilePhoto from './resources/ProfilePhoto.jpg';
import TitleText from './components/TitleText/TitleText';
import { SocialIcon } from 'react-social-icons';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import useWindowDimensions from './useWindowDimensions';
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';

const styles = {
	fadeIn: {
	  animation: 'x 4s',
	  animationName: Radium.keyframes(fadeIn, 'fadeIn')
	}
  }

function App() {
  return (
    <StyleRoot>
    <div className="App">
      <header className="App-header">
      <HeroText/>
       	  <div className = "profile-photo-container">
    <img src = {ProfilePhoto} style = {styles.fadeIn} className = "profile-photo"/>
    </div> 
    <div className="title-text-container">
        <TitleText text = "Links"/>
    </div>
    <div className="socialIcons">
    <SocialIcon className = "socialIcons" url = "https://linkedin.com/in/hamishsullivan"/>
    <SocialIcon className = "socialIcons" url = "https://github.com/hsull"/>
    <p></p>

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
    </StyleRoot>

  );
}

export default App;
