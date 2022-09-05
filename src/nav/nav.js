import './nav.css';
import button from './button/button';

export default function Nav() {
	const nav = document.createElement('nav');
	nav.classList.add('nav');

	nav.appendChild(button('Home', 'home'));
	nav.appendChild(button('Menu', 'menu'));
	nav.appendChild(button('Contact', 'contact'));

	return nav;
}
