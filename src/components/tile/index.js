import { h, Component } from 'preact';
import style from './style';

export default class Tile extends Component {
	render() {
		return (
			<div class={style.tile}>
                <p>Title of thing</p>
				<span class={style['tag-dot']}>&nbsp;&nbsp;&nbsp;&nbsp;tag name</span>
				<span class={style['tag-dot']}>&nbsp;&nbsp;&nbsp;&nbsp;another tag</span>
				<span class={style['tag-dot']}>&nbsp;&nbsp;&nbsp;&nbsp;tag</span>
			</div>
		);
	}
}
