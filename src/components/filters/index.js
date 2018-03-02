import { h, Component } from 'preact';
import Pill from '../pill';
import style from './style';

const tags = [
	'data',
	'web dev',
	'drawing',
	'writing',
	'video',
	'linguistics',
	'misc'
];

export default class Filters extends Component {
	render() {
		return (
			<div class={style.filters}>
				{tags.map((tag, i) => <Pill text={tag} key={i} />)}
			</div>
		);
	}
}
