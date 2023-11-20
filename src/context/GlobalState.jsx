import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import Transaction from '../components/Transaction';

// Initial state
const initialState ={
    transactions: [
        { id: 1, text: 'Hat', amount: -150},
        { id: 2, text: 'Wages', amount: 1200 },
        { id: 3, text: 'Charger', amount: -180 },
        { id: 4, text: 'Book', amount: 200 },
        { id: 5, text: 'Manicure', amount: 250 },
        
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction (id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (<GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}