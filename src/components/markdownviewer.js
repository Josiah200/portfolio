
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PortfolioReadme from '../README2.md';
import FakebookReadme from '../README.md';

class MarkdownViewer extends React.Component {
	constructor() {
		super();
		this.state = { markdown: '' };
	}

	componentDidMount() {
		// Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
		var readme = null;
		if (this.props.readMe === 'FakebookReadme')
		{
			readme = FakebookReadme;
		}
		if (this.props.readMe === 'PortfolioReadme')
		{
			readme = 'https://raw.githubusercontent.com/Josiah200/portfolio/main/README.md?token=GHSAT0AAAAAAB5KOKMSV66LM5P6DONX427KY6KZK3Q';
		}
		fetch(readme).then(res => res.text()).then(text => this.setState({ markdown: text }));
	}

	render() {
		return <ReactMarkdown children={this.state.markdown} />;
	}
}
export default MarkdownViewer;
