import { h } from 'preact';
import style from './style';
import projects from '../../constants/projects';
import tagColors from '../../constants/tagColors';

const Tiles = props => (
	<div class={style['tile-container']}>
		{
			projects.map((project, i) => {
				const projectImg = project.img ? { backgroundImage: `url(${project.img})` } : null;
				return (
					<div class={style.tile} key={i} style={projectImg}>
						<p>{project.title}</p>
						{
							project.tags.map((tag, j) => (
								<span class={[style['tag-dot'], style[tagColors[tag]]].join(' ')} key={j}>
									<span class={style['tag-dot-buffer']}>&nbsp;</span>{tag}
								</span>
							))
						}
					</div>
				);
			})
		}
	</div>
);

export default Tiles;
