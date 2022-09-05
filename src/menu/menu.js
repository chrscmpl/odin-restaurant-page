import * as items from './menu-items.json';
import './menu.css';
import MenuSection from './menu-section/menu-section';

export default function Menu() {
	const menu = document.createElement('div');
	menu.classList.add('menu');

	const sections = Object.keys(items).filter(key => key !== 'default');
	sections.forEach(section =>
		menu.appendChild(MenuSection(section, items[section]))
	);

	return menu;
}
