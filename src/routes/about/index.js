import { h } from 'preact';
import style from './style';

const About = () => (
	<div class={style.about}>
		<p>
			I've had the words "online portfolio" on my overly ambitious "Side
			Projects" Trello board for a while now, so I guess if you're reading this,
			I did the thing and it's live.
		</p>
		<p>
			Soon after finishing off the basic UI, I was immediately struck the
			dilemma where, you know, you want to have an online presence and such, so
			you make a nice portfolio website and it's mobile responsive and the
			commits are atomic, but then you realise they've never actually finished a
			side project to any presentable level of completeness and therefore have
			nothing to put on your shiny new website. So for the next three weeks, you
			set block out your Monday and Thursday evenings on your calendar as
			dedicated side project slots, and it's colour-coded and everything (navy,
			for "serious, non-optional obligation"), and when people ask if you're
			free this Thursday evening for a board game night, you say "Ah no sorry!
			I'm busy Thursday evenings, but how about next Tuesday?"
		</p>
		<p>
			It goes really well for the first one and a half weeks. The sessions are
			incredibly productive. You're in the zone, in the flow. Code is streaming
			from fingers, drawings are coming together before your eyes, thoughts are
			crystallising into essays! Time becomes an irrelevance. Who cares, when
			you're creating fun things with nothing but your BRAIN (and long-suffering
			laptop)? Who cares, when you're privileged enough that your career is
			absolutely your jam? When you're lucky enough to experience this feeling
			of getting drunk on the juice of creativity, perfectionism, and logic?
			What are sleep and hobbies and people and-
		</p>
		<p>
			But around about the end of week two, you start to realise that you're
			getting Seasonal Affected Disorder because this is usually the time that
			you spend walking along the waterfront before it gets dark, or going to a
			salsa class, or reading a good book (a meaningful one, like a Steven
			Pinker, or one of those incomplete epic fantasy series written by
			middle-upper-aged bearded men, or a self-help book on mindfulness; not
			Harry Potter fanfiction). Instead, you're coming home from work to sit on
			a less ergonomic seat, while your eyes beg for something to look at that's
			not illuminated and between 40 to 76 cm away. By week three, you're giving
			yourself a break because you need to cook and go to the gym and video call
			your mum. Sure, you had Tuesday, Wednesday, Friday, and the weekend to do
			those too, but being a responsible adult still feels quite new and it is
			sometimes a bit demanding. So you end up on the floor in an obscure
			pseudo-stretch position (since it's not healthy to sit in a chair for too
			long), watching videos on YouTube while congratulating yourself for
			stretching and catching up on BTS content at the same time.
		</p>
		<p>
			It was about this time that I seriously considered putting my Neopet's
			petpage up here as one of my portfolio pieces, but then I realised I'd
			deleted (deactivated?) my Neopets account when I was 13 because I had used
			my real firstname_lastname as my username and I freaked out when I
			realised that whatever you put on the Internet is forever, and faceless
			hackers could one day find all the highly incriminating things I wrote on
			my pet Shoyru's homepage, and maybe I'd be running for Prime Minister or
			something when that happens.
		</p>
		<p>
			So I apologise if this portfolio is a little sparse, both to you and to my
			ambitious 13-year-old self. As I hopefully develop a more sustainable pace
			of side-projecting, I would really love to expand on this portfolio as a
			compilation of the various bits and pieces that I'm proud of, and as a
			platform to hold me accountable to my personal growth. I hope there's
			something of interest for you here! On that note, if you have any feedback
			on, say, my choice of fonts, or the quality of my data validation, please
			do let me know because I'm genuinely keen to hear your thoughts. You can
			contact me at{" "}
			<a href="mailto:jennyesahng@gmail.com">jenny.e.sahng@gmail.com</a>.
		</p>
		<p>
			You've made it this far, here's a proper blurb about me, in third person
			and everything:
		</p>
		<p class="italic">
			Jenny is a product data scientist living in Wellington, New Zealand. She
			loves coding because it's pretty great that you can create things of
			massive value with just a text editor and some imagination. She recently
			got into data science and loves working at the cross-section of user
			experience, design, and of course, statistics and machine learning. In her
			spare time, she enjoys drawing, dancing, going for walks, and patting
			dogs.
		</p>
	</div>
);
export default About;

// export default class About extends Component {
// 	state = {
// 		time: Date.now(),
// 		count: 10
// 	};

// 	// gets called when this route is navigated to
// 	componentDidMount() {
// 		// start a timer for the clock:
// 		this.timer = setInterval(this.updateTime, 1000);
// 	}

// 	// gets called just before navigating away from the route
// 	componentWillUnmount() {
// 		clearInterval(this.timer);
// 	}

// 	// update the current time
// 	updateTime = () => {
// 		this.setState({ time: Date.now() });
// 	};

// 	increment = () => {
// 		this.setState({ count: this.state.count+1 });
// 	};

// 	// Note: `user` comes from the URL, courtesy of our router
// 	render({ user }, { time, count }) {
// 		return (
// 			<div class={style.about}>
// 				<h1>Profile: {user}</h1>
// 				<p>This is the user profile for a user named { user }.</p>

// 				<div>Current time: {new Date(time).toLocaleString()}</div>

// 				<p>
// 					<button onClick={this.increment}>Click Me</button>
// 					{' '}
// 					Clicked {count} times.
// 				</p>
// 			</div>
// 		);
// 	}
// }
