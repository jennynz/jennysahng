import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Sidebar extends Component {
	render() {
		return (
			<div class={style['sidebar-container']}>
				<div class={style.sidebar}>
					<h1>Jenny Sahng</h1>
					<h3>data scientist, doodler, nerd &amp; dog lover</h3>
					<nav>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/about">About</Link>
					</nav>
				</div>
			</div>
		);
	}
}
