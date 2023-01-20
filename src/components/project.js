import React from 'react';
import './../styles/index.css';
import MarkdownViewer from '../components/markdownviewer'

class Project extends React.Component {
	render() {
		const { name, description, images, readMe } = this.props;
		return (
			<div className="project">
				<div>
					<h1 className="project-name">{name}</h1>
					<p className="project-description">{description}</p>
					<div><MarkdownViewer readMe = {readMe}/></div>
				</div>
				<div>
					{images.map((image, index) => (
						<img src={image} key={index} />
					))}
				</div>
			</div>
		);
	}
}

export default Project;
