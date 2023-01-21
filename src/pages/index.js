import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './../styles/index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from '../reportWebVitals';
import Layout from '../components/layout';
import Project from '../components/project'
import MarkdownViewer from '../components/markdownviewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
    	<Project 
			name={'Fakebook'}
			githubLink={'https://github.com'}
			description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
			images={[
				'images/logo512.png',
				'images/logo512.png',
			]}
			readMe={'FakebookReadme'}
 		/>
		
		<Project
			name = {'Portfolio'}
			githubLink = {'https://github.com'}
			description = {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
			images = {[
				'images/logo512.png',
				'images/logo512.png',
			]}
			readMe={'FakebookReadme'}
		/>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
