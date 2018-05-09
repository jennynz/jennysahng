import { h, Component } from 'preact';
import style from './style';

export default class About extends Component {
	render() {
		return (
			<div class={style.about}>
				<p>
					I've had the words "online portfolio" on my overly ambitious "Side Projects" Trello board for a while now, so I guess if you're reading this, I did the thing and it's live.
				</p>
				<p>
					I immediately struck the dilemma where, you know, you want to have an online presence and such, so you make a nice portfolio website and it's mobile responsive and the commits are atomic, but then you realise they've never actually finished a side project to any presentable level of completeness and therefore have nothing to put on your shiny new website. So for the next three weeks, you set block out your Monday and Thursday evenings on your calendar as dedicated side project slots, and it's colour-coded and everything (navy, for "serious, non-optional obligation"), and when people ask if you're free this Thursday evening for a board game night, you say "Ah no sorry! I'm busy Thursday evenings, but how about next Tuesday? :)"
				</p>
				<p>
					And it goes really well for the first one and a half weeks, but then you start to realise that you're getting Seasonal Affected Disorder because this is usually the time that you spend going for a walk before it gets dark, or reading a good book (a meaningful one, like a Steven Pinker, or one of those incomplete epic fantasy series written by middle-upper-aged bearded men, or a self-help book on mindfulness; not Harry Potter fanfiction), but instead you're coming home from work to sit on a less ergonomic seat, while your eyes beg for something to look at that's not between 40 to 76 cm away.
				</p>
				<p>
					By the third week, you're giving yourself a break because you need to cook and go to the gym and video call your mum, and being an adult is still quite new to you and it is sometimes quite demanding. So you end up on the floor in an obscure pseudo-stretch position (it's not healthy to sit at a chair for too long), watching videos on YouTube while congratulating yourself for stretching and catching up on BTS content at the same time. It was about this time that I seriously considered putting my Neopet's petpage up here as one of my portfolio pieces, but then I realised I'd deleted (deactivated?) my Neopets account when I was 13 because I had used my real firstname_lastname as my username and I freaked out when I realised that whatever you put on the Internet is forever, and faceless hackers could one day find all the highly incriminating things I wrote on my pet Shoyru's homepage, and maybe I'd be running for Prime Minister or something when that happens.
				</p>
				<p>
					So I apologise if this portfolio is a little sparse, both to my ambitious 13-year-old self and to you, but I hope it's a pleasant user experience all the same. I really would love to expand on this portfolio as a compilation of all the various bits and pieces that I'm proud of over the years, as I explore different hobbies and projects outside of work. On that note, if you have any feedback on, say, my choice of fonts, or the quality of my data validation, please do let me know. I'm genuinely keen to hear your thoughts, I think that will make this entire experience a lot more engaging for us both. You can contact me at <a href='mailto:jennyesahng@gmail.com'>jenny.e.sahng@gmail.com</a>.
				</p>
				<p>
					You've made it this far, here's a proper blurb about me, in third person and everything:
				</p>
				<p class="italic">
					Jenny is a product data scientist living in Wellington, New Zealand. She loves coding because it's pretty great that you can create things of massive value with just a text editor and some imagination. She recently got into data science and loves being at the cross-section of user experience, design, product direction, and of course, statistics and machine learning. In her spare time, she enjoys drawing, dancing, going for walks, and patting dogs.
				</p>
			</div>
		);
	}
}


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
