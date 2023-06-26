import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
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
        ], 
        current: null
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // Add Contact
    const addContact = (contact) =>{
        contact.id = uuidv4();  // generate random id
        dispatch({ type: ADD_CONTACT, payload: contact })  // dispatch is a function used to dispatch actions to the reducer function 
    }

    // Delete Contact
    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id })
    } 

    // Set Current Contact
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    }

    // Clear Current Contact
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }

    // Update Contact
    const updateContact = (contact) => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    }

    // Filter Contacts

    // Clear Filters
    
    return <ContactContext.Provider value={{contacts: state.contacts,current: state.current, addContact, deleteContact, setCurrent, clearCurrent, updateContact}}>
        {props.children}
        </ContactContext.Provider>
}

export default ContactState;