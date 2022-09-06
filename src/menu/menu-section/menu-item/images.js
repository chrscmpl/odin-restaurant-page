import margherita from './images/margherita.jpg';
import marinara from './images/marinara.jpg';
import mimosa from './images/mimosa.jpg';
import quattroFormaggi from './images/quattro-formaggi.jpg';

const Gallery = {
	getImgPath(name) {
		const image = this.images.find(img => img.name === name.toLowerCase());
		return image ? image.path : '';
	},
	images: [
		{ name: 'margherita', path: margherita },
		{ name: 'marinara', path: marinara },
		{ name: 'mimosa', path: mimosa },
		{ name: 'quattro formaggi', path: quattroFormaggi },
	],
};

export default Gallery;
