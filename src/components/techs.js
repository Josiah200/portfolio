import React from 'react';
// import headerSVG from './header.svg';
import { ReactComponent as HeaderSvg } from './header.svg';

class Techs extends React.Component {
	render() {
		return (
			<>
			{this.props.techs.map((tech, index) => (
					<span className={tech +" tech"}>{tech}</span>
			))}
			</>
		);
	}
}

export default Techs;