import React, { useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './contactItem';


const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h3> Please Add a contact</h3>
    }

    return (
        <>
            {filtered !== null 
            ? filtered.map((contact)=> <ContactItem key={contact.id} contact={contact} ></ContactItem>)
            : contacts.map((contact) =>  <ContactItem key={contact.id} contact={contact}></ContactItem> )}
            
        </>
    )
}

export default Contacts