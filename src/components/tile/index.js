import { h } from 'preact';
import style from './style';

const Tile = props => (
	<div class={style.tile}>
		<p>Title of thing</p>
		<span class={style['tag-dot']}>&nbsp;&nbsp;&nbsp;&nbsp;tag name</span>
		<span class={style['tag-dot']}>&nbsp;&nbsp;&nbsp;&nbsp;another tag</span>
		<span class={style['tag-dot']}>&nbsp;&nbsp;&nbsp;&nbsp;tag</span>
	</div>
);

export default Tile;
