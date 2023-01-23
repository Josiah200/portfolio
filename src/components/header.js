import React from 'react';
// import headerSVG from './header.svg';
import { ReactComponent as HeaderSvg } from './header.svg';

class Header extends React.Component {
	render() {
		return (
			<>
				<div className="header">
					<HeaderSvg className="header-svg" viewBox="0 75 1920 500" width="100%" height="500" preserveAspectRatio="none"/>
					<div className="info-box">
						<h1>I'm Josiah.</h1>
						<p>A self-taught dev.</p> 
						<a href='https://github.com/Josiah200' className="github-link">
							<img src='/images/github-mark-white.svg' className="github-image"></img>
						</a>
						<a href="mailto:JosiahMatheson1@gmail.com" className="contact-btn contact">Email</a>
						<img src='/images/profilepicture.png' className="profile-picture"></img>
					</div>
				</div>
			</>
		);
	}
}

export default Header;