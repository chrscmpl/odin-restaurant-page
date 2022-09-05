import './header.css';

export default function Header() {
	const header = document.createElement('header');
	header.classList.add('header');

	const restaurantName = document.createElement('h1');
	restaurantName.classList.add('restaurant-name');
	restaurantName.textContent = 'Pizzeria';

	header.appendChild(restaurantName);
	return header;
}
