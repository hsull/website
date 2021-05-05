import React from 'react';
import './TitleText.css';
function TitleText(props) {
	return (
	<div className = "text">
		<div class = "title-text">{props.text}</div>
	</div>
	);
}

export default TitleText;
