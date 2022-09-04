import "./base.css";
import Header from "./header/header";
import Wrapper from "./wrapper/wrapper";
import Home from "./home/home";
import Menu from "./menu/menu";
import Contact from "./contact/contact";

function replaceFirstChild(parent, child) {
	if (child === parent.firstChild) return;
	parent.removeChild(parent.firstChild);
	parent.insertBefore(child, parent.firstChild);
}

document.querySelector(":root").setAttribute("lang", "en");

const content = document.createElement("div");
content.id = "content";

const header = Header();
content.appendChild(header);

const wrapper = Wrapper();
content.appendChild(wrapper);

const home = Home();
const menu = Menu();
const contact = Contact();

wrapper.appendChild(home);

document.body.appendChild(content);

document.getElementById("home-button").addEventListener("click", () => {
	replaceFirstChild(wrapper, home);
});
document.getElementById("menu-button").addEventListener("click", () => {
	replaceFirstChild(wrapper, menu);
});
document.getElementById("contact-button").addEventListener("click", () => {
	replaceFirstChild(wrapper, contact);
});
