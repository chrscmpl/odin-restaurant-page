import './button.css';

export default function Button(text, id) {
	const btn = document.createElement('button');
	btn.setAttribute('type', 'button');
	btn.textContent = text;
	btn.classList.add('tab-button');
	btn.id = `${id}-button`;
	return btn;
}
