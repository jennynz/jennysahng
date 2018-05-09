import { h } from 'preact';
import Pill from '../pill';
import style from './style';
import tags from '../../constants/tags';

const Filters = props => (
	<div class={style.filters}>
		{tags.map((tag, i) => <Pill text={tag.name} action={tag.name} key={i} color={tag.color} onFilter={props.onFilter} />)}
	</div>
);

export default Filters;
