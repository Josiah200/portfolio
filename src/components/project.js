import React from 'react';
import './../styles/index.css';
import MarkdownViewer from '../components/markdownviewer'
import Carousel from '../components/carousel';
import Techs from '../components/techs';
import 'swiper/css';
import 'swiper/css/navigation';

class Project extends React.Component {
	render() {
		const { name, githubLink, techs, description, links, images, readMe } = this.props;
		
		return (
			<div className="project container">
				<div className="project-column">
					<h1 className="project-name">{name}
						<a href={githubLink} className="github-link">
							<img src='/images/github-mark-white.svg' className="github-image"></img>
						</a>
					</h1>
					<Techs techs={techs} />
					<p className="project-description">{description}</p>
					{links}
					<article className="project-readme"><MarkdownViewer readMe = {readMe}/></article>
				</div>
				<div className="carousel-column">
					<Carousel images={images} name={name} />
				</div>
			</div>
		);
	}
}

export default Project;
