import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './contactItem';

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;

    return (
        <>
            {contacts.map((contact) =>  <ContactItem key={contact.id} contact={contact}></ContactItem> )}
        </>
    )
}

export default Contacts