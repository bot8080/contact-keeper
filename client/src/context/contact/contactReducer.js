import {
    ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACTS, CLEAR_FILTER, SET_ALERT, REMOVE_ALERT
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
                // The first property ...state creates a shallow copy of the current state object. The second property updates the contacts property of the state object with a new array that contains all of the existing contacts and the new contact from the action payload.
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload )
            };
        case SET_CURRENT:
            return {
                ...state,
                current : action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current : null
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map( contact => contact.id === action.payload.id ? action.payload : contact)  // if id macthes then update action.payload i.e new data otherwise leave as it is
            };
        case FILTER_CONTACTS:
            return{
                ...state, 
                filtered: state.contacts.filter(contact => {
                    const text = action.payload.toLowerCase()
                    return contact.name.toLowerCase().includes(text) || contact.email.toLowerCase().includes(text)
                })
            };
        case CLEAR_FILTER:
            return {
                ...state, 
                filtered: null
            };
        case SET_ALERT:
            return {

            };
        case REMOVE_ALERT:
            return {

            };
        default: 
            return state
    }
}