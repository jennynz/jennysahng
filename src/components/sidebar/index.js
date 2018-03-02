import { h, Component } from 'preact';
// import { Link } from 'preact-router/match';

import Filters from '../filters';
import Pill from '../pill';
import style from './style';

import profile_pic from '../../assets/profile_drawing.png';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';

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
					<a
						href="https://www.linkedin.com/in/jennysahng/"
						alt="Jenny Sahng's LinkedIn profile"
						target="_blank"
					>
						<img
							src={linkedin}
							class={style["social-icon"]}
							alt="Jenny Sahng's LinkedIn profil"
						/>
					</a>
					<a
						href="https://github.com/jennynz/"
						alt="Jenny Sahng's Github"
						target="_blank"
					>
						<img
							src={github}
							class={style["social-icon"]}
							alt="Jenny Sahng's Github"
						/>
					</a>
					<a
						href="https://twitter.com/JennySahng"
						alt="Twitter @JennySahng"
						target="_blank"
					>
						<img
							src={twitter}
							class={style["social-icon"]}
							alt="Twitter @JennySahng"
						/>
					</a>
				</div>
			</div>
		);
	}
}
