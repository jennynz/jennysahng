import { h } from 'preact';
import style from './style';
import projects from '../../constants/projects';
import tagColors from '../../constants/tagColors';

const Tiles = props => (
	<div class={style['tile-container']}>

		{projects.map((project, i) => {

			const projectImg = project.img ? { backgroundImage: `url(${project.img})` } : null;
			const noFilterSelected = props.filters.length === 0;
			const projectTagSelected = props.filters.filter(f => project.tags.includes(f)).length > 0;
			const displayProject = noFilterSelected | projectTagSelected;

			if (displayProject) {
				return (
					<div class={style.tile} key={i} style={projectImg}>
						<p class={project.isDark ? style['tile-dark'] : style['tile-light']}>{project.title}</p>
						<div class={style['tag-dots']}>
							{project.tags.map((tag, j) => (
								<span
									class={[style['tag-dot'], style[tagColors[tag]]].join(' ')}
									key={j}
								>
									<span class={style['tag-dot-buffer']}>&nbsp;</span>
									{tag}
								</span>
							))}
						</div>
					</div>
				);
			}
		})}
	</div>
);

export default Tiles;
