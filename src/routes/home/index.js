import { h } from 'preact';
import Tiles from '../../components/tiles';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<Tiles />
	</div>
);

export default Home;
