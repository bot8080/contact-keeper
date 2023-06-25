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
                //  updates the contacts property with a new contacts array that contains all of the existing contacts, the new contact from the payload
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

            };
        case FILTER_CONTACTS:
            return{

            };
        case CLEAR_FILTER:
            return {

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