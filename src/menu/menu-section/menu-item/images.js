import margherita from './images/margherita.jpg';
import mimosa from './images/mimosa.jpg';

const Gallery = {
	getImgPath(name) {
		const image = this.images.find(img => img.name === name.toLowerCase());
		return image ? image.path : '';
	},
	images: [
		{ name: 'margherita', path: margherita },
		{ name: 'mimosa', path: mimosa },
	],
};

export default Gallery;
