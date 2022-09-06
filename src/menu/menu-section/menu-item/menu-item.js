import './menu-item.css';
import getImgPath from './images';

export default function MenuItem(item) {
	const menuItem = document.createElement('div');

	const img = document.createElement('img');
	img.classList.add('menu-item-img');
	img.src = getImgPath(item.name);
	img.alt = item.name;
	menuItem.appendChild(img);

	const name = document.createElement('h4');
	name.classList.add('menu-item-name');
	name.textContent = item.name;
	menuItem.appendChild(name);

	const description = document.createElement('p');
	description.classList.add('menu-item-description');
	description.textContent = item.description;
	menuItem.appendChild(description);

	return menuItem;
}
