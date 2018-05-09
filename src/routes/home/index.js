import { h } from 'preact';
import Tiles from '../../components/tiles';
import style from './style';

const Home = props => (
	<div class={style.home}>
		<Tiles filters={props.filters} />
	</div>
);

export default Home;
