import './contact.css';

export default function Contact() {
	const contact = document.createElement('div');
	contact.classList.add('contact');

	const phoneNumber = document.createElement('div');
	phoneNumber.classList.add('phone-number');
	phoneNumber.textContent = 'Fake phone number: (999)504-1240';
	contact.appendChild(phoneNumber);

	const address = document.createElement('div');
	address.classList.add('address');
	address.textContent = 'Fake street: 185-221 Boomer St, Newark, NJ 07103, USA';
	contact.appendChild(address);

	return contact;
}
