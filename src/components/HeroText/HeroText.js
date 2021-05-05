import React from 'react';
import './HeroText.css';
import { Parallax } from 'react-scroll-parallax';
import useWindowDimensions from '../../useWindowDimensions';
import { slideInLeft } from 'react-animations';
import { slideInRight } from 'react-animations';

import Radium, {StyleRoot} from 'radium';


const styles = {
	slideInLeft: {
	  animation: 'x 2s',
	  animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
	},
	slideInRight: {
		animation: 'x 2s',
		animationName: Radium.keyframes(slideInRight, 'slideInRight')
	  }
  
  }
  
function HeroText() {
	return (
	<StyleRoot>
	<div class = "text">
	<div class = "main-text-left" style = {styles.slideInLeft}>Hamish</div>
	<div class = "main-text-right" style = {styles.slideInRight}>Sullivan</div>
	<div class = "sub-text"> Physics and Economics Student </div>
	</div>
	</StyleRoot>
	);
}

export default HeroText;
