import margherita from './images/margherita.jpg';
import marinara from './images/marinara.jpg';
import mimosa from './images/mimosa.jpg';
import quattroFormaggi from './images/quattro-formaggi.jpg';
import diavola from './images/diavola.jpg';
import salsicciaFriarielli from './images/salsiccia-friarielli.jpg';
import quattroStagioni from './images/quattro-stagioni.jpg';
import wurstelPatatine from './images/wurstel-patatine.jpg';
import carbonara from './images/carbonara.jpg';
import amatriciana from './images/amatriciana.jpg';
import bolognese from './images/bolognese.jpg';
import parmigianaMelanzane from './images/parmigiana-melanzane.jpg';
import peperoniRipieni from './images/peperoni-ripieni.jpg';
import cotolettaPatatine from './images/cotoletta-patatine.jpg';

const images = [
	{ name: 'margherita', path: margherita },
	{ name: 'marinara', path: marinara },
	{ name: 'mimosa', path: mimosa },
	{ name: 'quattro formaggi', path: quattroFormaggi },
	{ name: 'diavola', path: diavola },
	{ name: 'salsiccia e friarielli', path: salsicciaFriarielli },
	{ name: 'quattro stagioni', path: quattroStagioni },
	{ name: 'würstel e patatine', path: wurstelPatatine },
	{ name: 'carbonara', path: carbonara },
	{ name: 'amatriciana', path: amatriciana },
	{ name: 'bolognese', path: bolognese },
	{ name: 'parmigiana di melanzane', path: parmigianaMelanzane },
	{ name: 'peperoni ripieni', path: peperoniRipieni },
	{ name: 'cotoletta e patatine', path: cotolettaPatatine },
];

export default function getImgPath(name) {
	const image = images.find(img => img.name === name.toLowerCase());
	return image ? image.path : '';
}
