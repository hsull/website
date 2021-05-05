import react from 'react';
import profile_img from './ProfilePhoto.jpg';
import '../../App.css';

function ProfilePhoto() {
	return (
	<div className="profile-photo-container">
	<img src = {profile_img} className = "profile-photo-container"/>
	</div>
	);
}

export default ProfilePhoto;
