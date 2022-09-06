import margherita from '/src/resources/images/margherita.jpg';
import marinara from '/src/resources/images/marinara.jpg';
import mimosa from '/src/resources/images/mimosa.jpg';
import quattroFormaggi from '/src/resources/images/quattro-formaggi.jpg';
import diavola from '/src/resources/images/diavola.jpg';
import salsicciaFriarielli from '/src/resources/images/salsiccia-friarielli.jpg';
import quattroStagioni from '/src/resources/images/quattro-stagioni.jpg';
import wurstelPatatine from '/src/resources/images/wurstel-patatine.jpg';
import carbonara from '/src/resources/images/carbonara.jpg';
import amatriciana from '/src/resources/images/amatriciana.jpg';
import bolognese from '/src/resources/images/bolognese.jpg';
import parmigianaMelanzane from '/src/resources/images/parmigiana-melanzane.jpg';
import peperoniRipieni from '/src/resources/images/peperoni-ripieni.jpg';
import cotolettaPatatine from '/src/resources/images/cotoletta-patatine.jpg';

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
