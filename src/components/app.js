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

	render() {
		return (
			<div id="app">
				<Sidebar />
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
