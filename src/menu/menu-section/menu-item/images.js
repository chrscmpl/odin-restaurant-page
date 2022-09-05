import margherita from './images/margherita.jpg';

const Gallery = {
	getImgPath(name) {
		const image = this.images.find(img => img.name === name.toLowerCase());
		return image ? image.path : '';
	},
	images: [{ name: 'margherita', path: margherita }],
};

export default Gallery;
