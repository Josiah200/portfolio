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
						<p>Here you'll find some of my work, and my contact info.</p>
					</div>
				</div>
			</>
		);
	}
}

export default Header;