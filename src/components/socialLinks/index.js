import { h } from 'preact';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import style from './style';

const links = [
	{
		url: 'https://www.linkedin.com/in/jennysahng/',
		src: linkedin,
		alt: "Jenny Sahng's LinkedIn profile"
	},{
		url: 'https://github.com/jennynz/',
		src: github,
		alt: "Jenny Sahng's Github"
	},{
		url: 'https://twitter.com/JennySahng',
		src: twitter,
		alt: 'Twitter @JennySahng'
	}
];

const SocialLinks = () => (
	<div class={style['social-links']}>
		{links.map((l,i) => (
			<a href={l.url} alt={l.alt} target="_blank" rel="noopener noreferrer" >
				<img src={l.src} class={style['social-icon']} alt={l.alt} />
			</a>
		))}
	</div>
);

export default SocialLinks;
