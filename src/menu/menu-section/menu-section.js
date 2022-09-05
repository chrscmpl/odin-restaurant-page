import menuItem from './menu-item/menu-item';
import './menu-section.css';

export default function MenuSection(section) {
	const menuSection = document.createElement('section');
	menuSection.classList.add('menu-section');

	const sectionHeading = document.createElement('h2');
	sectionHeading.textContent = section.name;
	sectionHeading.classList.add('section-heading');
	menuSection.appendChild(sectionHeading);

	section.items.forEach(item => menuSection.appendChild(menuItem(item)));

	return menuSection;
}
