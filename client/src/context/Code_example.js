import React, { createContext, useContext, useReducer } from 'react';

// Create a context for sharing data between components
const CountContext = createContext();

// Reducer function for updating the state
const countReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// Top-level component that provides the data to other components
const CountProvider = ({ children }) => {
    // Use the useReducer hook to create a state management system
    const [count, dispatch] = useReducer(countReducer, 0);

    // Provide the count data and dispatch function to other components
    return (
        <CountContext.Provider value={{ count, dispatch }}>
            {children}
        </CountContext.Provider>
    );
};

// Component that displays the current count
const CountDisplay = () => {
    // Use the useContext hook to subscribe to the CountContext
    const { count } = useContext(CountContext);

    // Render the current count
    return <div>Count: {count}</div>;
};

// Component that allows the user to increment and decrement the count
const CountControls = () => {
    // Use the useContext hook to subscribe to the CountContext
    const { dispatch } = useContext(CountContext);

    // Dispatch actions to the reducer function when the buttons are clicked
    const handleIncrement = () => dispatch({ type: 'INCREMENT' });
    const handleDecrement = () => dispatch({ type: 'DECREMENT' });

    // Render buttons for incrementing and decrementing the count
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

// Main App component that uses the CountProvider, CountDisplay, and CountControls components
const App = () => {
    return (
        <CountProvider>
            <CountDisplay />
            <CountControls />
        </CountProvider>
    );
};
