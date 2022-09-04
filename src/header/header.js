import button from './button';
import './header.css';

export default function Header() {
	const header = document.createElement('header');
	header.classList.add('header');

	const restaurantName = document.createElement('h1');
	restaurantName.classList.add('restaurant-name');
	restaurantName.textContent = 'Pizzeria';

	header.appendChild(restaurantName);
	header.appendChild(button('Home', 'home'));
	header.appendChild(button('Menu', 'menu'));
	header.appendChild(button('Contact', 'contact'));
	return header;
}
