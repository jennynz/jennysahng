import { h, Component } from 'preact';
import Tile from '../../components/tile';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<div class={style['tile-container']}>
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
					<Tile />
				</div>
			</div>
		);
	}
}
