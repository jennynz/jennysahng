import { h, Component } from 'preact';
import Pill from '../pill';
import style from './style';

const tags = [
	{ name: 'data', color: 'purple' },
	{ name: 'web dev', color: 'green' },
	{ name: 'drawing', color: 'pink' },
	{ name: 'writing', color: 'yellow' },
	{ name: 'video', color: 'light-blue' },
	{ name: 'linguistics', color: 'orange' },
	{ name: 'misc', color: 'grey' }
];

export default class Filters extends Component {
	render() {
		return (
			<div class={style.filters}>
				{tags.map((tag, i) => <Pill text={tag.name} action={tag.name} key={i} color={tag.color} />)}
			</div>
		);
	}
}
