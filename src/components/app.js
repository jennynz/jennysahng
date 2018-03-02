import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Sidebar from './sidebar';
import Home from 'async!../routes/home';
import About from 'async!../routes/about';

if (module.hot) {
	require('preact/debug');
}

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	handleNavigation = e => {
		console.log('Clicked to navigate');
		console.log(e);
		// if (type === 'tag') {
		// 	console.log(`Clicked tag ${action}.`);
		// }
		// else if (type === 'about') {
		// 	route('/about');
		// }
		// else {
		// 	console.log('Unknown pill type.');
		// }
	};

	handleFilter = e => {
		console.log('Clicked a tag to filter');
		console.log(e);

		const index = this.state.tags.indexOf(e.tag);
		if (index > -1) {
			// If the tag was not already active, add to list of filters.
			this.setState({ filters: this.state.filters.concat(e.tag) });
		}
		else {
			// If tag was already active, remove from list of filters.
			const f = this.state.filters;
			this.setState({ filters: f.slice(0,index).concat(f.slice(index+1)) });
		}
	}

	// Some event cycle thing that renders the app again to show only filtered ones.
	// if this.state.filters.length === 0, all content is shown.
	// If any of the filters are on, only filtered content is shown.

	constructor(props) {
		super(props);
		this.state = {
		  filters: []
		};
		this.handleNavigation = this.handleNavigation.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	  }

	render() {
		return (
			<div id="app">
				<Sidebar
					onNavigation={this.handleNavigation}
					onFilter={this.handleFilter}
				/>
				<div id="main">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<About path="/about/" user="me" />
						<About path="/about/:user" />
					</Router>
				</div>
			</div>
		);
	}
}
