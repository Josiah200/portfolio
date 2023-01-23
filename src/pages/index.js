import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './../styles/index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from '../reportWebVitals';
import Project from '../components/project'
import Header from '../components/header'
import "../fonts/Inter-Regular.ttf"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Header/>

    	<Project 
			name={'Fakebook'}
			githubLink={'https://github.com/Josiah200/Fakebook'}
			techs={[
				'C#',
				'ASP.NET Core',
				'SQLite',
				'JavaScript',
				'JQuery',
				'Bootstrap',
				'CSS',
				'HTML',
			]}
			description={'Fakebook is a fully functional Facebook clone built with ASP.NET Core. It allows users to post messages, send friend requests, and instantly message other users. All of this is persisted in a SQLite database, managed with Entity Framework Core. The site is hosted on a Ubuntu VM with Nginx using Kestrel.'}
			links = {
				<>
					<p> You can find the README below or on </p> <a href="https://github.com/Josiah200/Fakebook">Github</a><p>, and the live site at </p><a href="https://fakebook.josiahmatheson.com">https://fakebook.josiahmatheson.com</a><p>.</p>
				</>}
			images={[
				'images/profile.png',
				'images/messenger.png',
				'images/login.png',
			]}
			readMe={'FakebookReadme'}
 		/>
		
		<Project
			name = {'Portfolio'}
			githubLink = {'https://github.com/Josiah200/portfolio'}
			techs={[
				'React',
				'JavaScript',
				'Bootstrap',
				'CSS',
				'HTML'
			]}
			description = {'The personal site that you are viewing. It is a single page React application. It uses Bootstrap for styling and react-markdown to render the README.md files from my GitHub repositories. The site is hosted on a Ubuntu VM with Nginx.'}
			images = {[
				'images/portfolioheader.png',
			]}
			readMe={'PortfolioReadme'}
		/>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
