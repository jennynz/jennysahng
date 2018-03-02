import { h } from 'preact';
import style from './style';

const Pill = props => {
	const { text, className, color, handleClick } = props;
	const id = ['pill', text].join('-');
	const classNames = [style.pill, style[className], style[color]].join(' ');

	return (
		<span>
			<input
				id={id}
				class={style.checkbox}
				type="checkbox"
				name={text}
				value="coding"
			/>
			<label for={id} class={classNames} onClick={() => handleClick}>
				{text}
			</label>
		</span>
	);
};

export default Pill;
