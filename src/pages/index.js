import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './../styles/index.css';
import reportWebVitals from '../reportWebVitals';
import Layout from '../components/layout';
import Project from '../components/project'
import MarkdownViewer from '../components/markdownviewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
    	<Project 
			name={'Fakebook'}
			description={'A social media website'}
			images={[
				'/images/logo512.png',
				'/images/logo192.png'
			]}
			readMe={'FakebookReadme'}
 		>
		</Project>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
