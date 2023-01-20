
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PortfolioReadme from '../README.md';
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
			readme = PortfolioReadme;
		}
		fetch(readme).then(res => res.text()).then(text => this.setState({ markdown: text }));
	}

	render() {
		return <ReactMarkdown children={this.state.markdown} />;
	}
}
export default MarkdownViewer;
