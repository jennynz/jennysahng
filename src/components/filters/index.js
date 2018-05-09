import { h } from 'preact';
import Pill from '../pill';
import style from './style';

const tags = [
	{ name: 'data', color: 'purple' },
	{ name: 'web dev', color: 'green' },
	{ name: 'drawing & design', color: 'pink' },
	{ name: 'writing', color: 'yellow' },
	{ name: 'videography', color: 'light-blue' },
	{ name: 'linguistics', color: 'orange' },
	{ name: 'misc', color: 'grey' }
];

const Filters = props => (
	<div class={style.filters}>
		{tags.map((tag, i) => <Pill text={tag.name} action={tag.name} key={i} color={tag.color} onFilter={props.onFilter} />)}
	</div>
);

export default Filters;
