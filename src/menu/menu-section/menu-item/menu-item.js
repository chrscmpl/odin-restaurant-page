import './menu-item.css';

export default function MenuItem(item) {
	const menuItem = document.createElement('div');
	menuItem.textContent = `${item.name} ${item.description}`;
	return menuItem;
}
