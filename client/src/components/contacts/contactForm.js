import React, { useContext, useEffect, useState } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);
	const { addContact, current, clearCurrent, updateContact } = contactContext;

	const [contact, setContact] = useState({ name: '', email: '', phone: '', type: 'personal' });       // INSTEAD OF SETTING EACH FIELD (SET NAME, SET EMAIL, SET PHONE) we took a single contact object
	const { name, email, phone, type } = contact;

	useEffect(() => {
		if (current) {
			setContact({ id: current.id, name: current.name, email: current.email, phone: current.phone, type: current.type })
		}
		else
			setContact({ name: '', email: '', phone: '', type: 'personal' })

	}, [contactContext, current]);        // when contactContext/current values changed then useEffect will be called

	const onchange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value })    // This creates a new object with all of the properties of the contact object, plus an additional property with a name determined by e.target.name and a value of e.target.value.
		// setContact({ ...contact, name: 'John' });
		// setContact({ name: 'John', email: 'john@example.com', phone: '123-456-7890', type: 'personal' });
	}

	const onsubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		}     
		else {
			updateContact(contact);
		}
		
		clearAll();    // After submitting all the data and update it to the STATE, we will make all the form values clear
	}

	const clearAll = (e) => {
		clearCurrent();
	}
	return (
		<form onSubmit={onsubmit}>
			<h2 className='text-primary'>{current ? 'Edit Contact' : 'Add Contact'}</h2>

			<input type="text" placeholder='Name' name='name' onChange={onchange} value={name}></input>
			<input type="email" placeholder='Email' name='email' onChange={onchange} value={email}></input>
			<input type="text" placeholder='Phone' name='phone' onChange={onchange} value={phone}></input>

			<h5> Contact Type</h5>
			<input type="radio" name="type" value="personal" checked={type === "personal"} onChange={onchange} /> Personal {' '}
			<input type="radio" name="type" value="professional" checked={type === "professional"} onChange={onchange} /> professional {' '}

			<div>
				<input type='submit' value={current ? 'Update Contact' : 'Add Contact'} className='btn btn-primary btn-block'></input>
			</div>

			{current && <div> <button className="btn light btn-block" onClick={clearAll}> Clear All </button> </div>}

		</form>
	)
}

export default ContactForm
