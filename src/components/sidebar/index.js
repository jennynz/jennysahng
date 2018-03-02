import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';

import Filters from '../filters';
import Pill from '../pill';
import SocialLinks from '../socialLinks';
import style from './style';

import profile_pic from '../../assets/profile_drawing.png';

export default class Sidebar extends Component {
	render() {
		return (
			<div class={style["sidebar-container"]}>
				<div class={style.sidebar}>
					<img
						src={profile_pic}
						class={style.profile_pic}
						alt="Hi, my name's Jenny, and I like making things."
					/>
					<header>
						<h1>Hi, I'm Jenny.</h1>
						<h3>I like front-end development, data, doodling &amp; dogs.</h3>
					</header>
					<nav>
						{/* <Link activeClassName={style.active} href="/">
							Home
						</Link>
						<Link activeClassName={style.active} href="/about">
							About
						</Link> */}
						<Pill text="Home" />
						<Pill text="i" className="pill-about" />
					</nav>
					<Filters />
				</div>
				<SocialLinks />
			</div>
		);
	}
}
