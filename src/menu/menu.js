import menuData from './menu.json';
import './menu.css';
import MenuSection from './menu-section/menu-section';

export default function Menu() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	menuData.sections.forEach(section => menu.appendChild(MenuSection(section)));

	return menu;
}
