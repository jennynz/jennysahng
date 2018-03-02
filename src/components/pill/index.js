import { h } from 'preact';
import style from './style';

const Pill = props => {
	const id = ['pill', props.text].join('-');
	const classNames = [style.pill, style[props.className]].join(' ');
	return (
		<span>
			<input
				id={id}
				class={style.checkbox}
				type="checkbox"
				name={props.text}
				value="coding"
			/>
			<label for={id} class={classNames}>
				{props.text}
			</label>
		</span>
	);
};

export default Pill;
