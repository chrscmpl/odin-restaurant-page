import background from './home.jpg';
import './home.css';

export default function Homepage() {
	const home = document.createElement('div');
	home.classList.add('home');

	const heading = document.createElement('h2');
	heading.classList.add('home-heading');
	heading.innerHTML = 'We get you your pizza <br> You get us our fucking money';
	home.appendChild(heading);

	const img = document.createElement('img');
	img.classList.add('home-img');
	img.src = background;
	img.alt = 'Chef making a pizza';
	home.appendChild(img);

	return home;
}
