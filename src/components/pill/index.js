import { h, Component } from 'preact';
import style from './style';

class Pill extends Component {

	handleFilter = () => {
		this.props.onFilter(this.props.action);
	};

	render() {
		const { text, className, color, onFilter } = this.props;
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
				<label for={id} class={classNames} onClick={onFilter ? this.handleFilter : null}>
					{text}
				</label>
			</span>
		);
	}
}

export default Pill;
