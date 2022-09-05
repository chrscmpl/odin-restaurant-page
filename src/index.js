import './base.css';
import Header from './header/header';
import Nav from './nav/nav';
import Wrapper from './wrapper/wrapper';
import Home from './home/home';
import Menu from './menu/menu';
import Contact from './contact/contact';

function replaceFirstChild(parent, child) {
	if (child === parent.firstChild) return;
	if (parent.firstChild) parent.removeChild(parent.firstChild);
	parent.insertBefore(child, parent.firstChild);
}

function setClicked(btn) {
	const oldClicked = document.querySelector('.clicked');
	if (oldClicked) oldClicked.classList.remove('clicked');
	btn.classList.add('clicked');
}

function tabSwitch(wrapper, tab, btn) {
	replaceFirstChild(wrapper, tab);
	setClicked(btn);
}

document.querySelector(':root').setAttribute('lang', 'en');

const content = document.createElement('div');
content.id = 'content';

const wrapper = Wrapper();
content.appendChild(Header());
content.appendChild(Nav());
content.appendChild(wrapper);

const home = Home();
const menu = Menu();
const contact = Contact();

document.body.appendChild(content);

tabSwitch(wrapper, home, document.getElementById('home-button'));

document.getElementById('home-button').addEventListener('click', e => {
	tabSwitch(wrapper, home, e.target);
});
document.getElementById('menu-button').addEventListener('click', e => {
	tabSwitch(wrapper, menu, e.target);
});
document.getElementById('contact-button').addEventListener('click', e => {
	tabSwitch(wrapper, contact, e.target);
});
