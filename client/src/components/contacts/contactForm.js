import React, { useContext, useState } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const {addContact} = contactContext;

	const [contact, setContact] = useState({ name: '', email: '', phone: '', type: 'personal' });       // INSTEAD OF SETTING EACH FIELD (SET NAME, SET EMAIL, SET PHONE) we took a single contact object
	const { name, email, phone, type } = contact;

	const onchange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value })    // This creates a new object with all of the properties of the contact object, plus an additional property with a name determined by e.target.name and a value of e.target.value.
		// setContact({ ...contact, name: 'John' });
		// setContact({ name: 'John', email: 'john@example.com', phone: '123-456-7890', type: 'personal' });
	}

	const onsubmit = (e) => {
		e.preventDefault();
		addContact(contact);      // After submitting all the data and update it to the STATE, we will make all the form values clear to its initial stage 
		setContact({ name: '', email: '', phone: '', type: 'personal' })
	}

	return (
		<form onSubmit={onsubmit}>
			<h2 className='text-primary'>Add Contact</h2>

			<input type="text" placeholder='Name' name='name' onChange={onchange} value={name}></input>
			<input type="email" placeholder='Email' name='email' onChange={onchange} value={email}></input>
			<input type="text" placeholder='Phone' name='phone' onChange={onchange} value={phone}></input>

			<h5> Contact Type</h5>
			<input type="radio" name="type" value="personal" checked={type === "personal"} onChange={onchange} /> Personal {' '}
			<input type="radio" name="type" value="professional" checked={type === "professional"} onChange={onchange} /> professional {' '}

			<div>
				<input type='submit' value="Add Contact" className='btn btn-primary btn-block'></input>
			</div>

		</form>
	)
}

export default ContactForm
