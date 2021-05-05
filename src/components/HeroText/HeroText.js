import React, { useEffect } from 'react'
import './HeroText.css';
import Aos from 'aos';
import "aos/dist/aos.css"

  
function HeroText() {
	useEffect(() => {
		Aos.init({duration: 2000, once:'false', easing:"ease-in-out", mirror:'false'});
	}, []);
	return (
	<div class = "text">
	<div class = "main-text-left" data-aos="fade-left">Hamish</div>
	<div class = "main-text-right" data-aos="fade-right">Sullivan</div>
	<div class = "sub-text"> Physics and Economics Student </div>
	</div>
	);
}

export default HeroText;
