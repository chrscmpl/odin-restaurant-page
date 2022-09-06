import background from './home.jpg';
import './home.css';

export default function Homepage() {
	const home = document.createElement('div');
	home.classList.add('home');

	const heading = document.createElement('h2');
	heading.classList.add('home-heading');
	heading.innerHTML =
		'This restaurant might be fake,<br>but at least the website is pretty.<br>I hope.';
	home.appendChild(heading);

	const img = document.createElement('img');
	img.classList.add('home-img');
	img.src = background;
	img.alt = 'Chef making a pizza';
	home.appendChild(img);

	return home;
}
