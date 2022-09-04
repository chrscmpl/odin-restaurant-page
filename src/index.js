import './base.css';
import Header from './header/header';
import Wrapper from './wrapper/wrapper';
import Home from './home/home';
import Menu from './menu/menu';
import Contact from './contact/contact';

document.querySelector(':root').setAttribute('lang', 'en');

const content = document.createElement('div');
content.id = 'content';

const header = Header();
content.appendChild(header);

const wrapper = Wrapper();
content.appendChild(wrapper);

const home = Home();
const menu = Menu();
const contact = Contact();

append(wrapper, home);

document.body.appendChild(content);

document.getElementById('home-button').addEventListener('click', () => {
	append(wrapper, home);
});
document.getElementById('menu-button').addEventListener('click', () => {
	append(wrapper, menu);
});
document.getElementById('contact-button').addEventListener('click', () => {
	append(wrapper, contact);
});

function append(parent, child) {
	for (const child of parent.children) child.remove();
	parent.appendChild(child);
}
