import React, { useReducer } from "react";
import uuid from 'uuid';
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
    ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, SET_ALERT, REMOVE_ALERT
} from '../types'

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Abhinav",
                email: "a@gmail.com",
                phone: "222-555-8796",
                type: "personal"
            },
            {
                id: 2,
                name: "John Doe",
                email: "john.doe@example.com",
                phone: "555-123-4567",
                type: "professional"
            },
            {
                id: 3,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                phone: "555-987-6543",
                type: "personal"
            }
        ]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filters
    
    return <ContactContext.Provider value={{contacts: state.contacts}}>
        {props.children}
        </ContactContext.Provider>
}

export default ContactState;