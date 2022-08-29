import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
const initialState ={
    actions: []
}
//Create context

export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    //actions
    function addAction(action){
        
        dispatch({
            type: 'ADD_ACTION',
            payload: action
        });
    }


    function removeAction(id) {
        dispatch({
            type: 'REMOVE_ACTION', 
            payload: id
        });
    }
    return (
    <GlobalContext.Provider value={{
        actions:state.actions,
        removeAction,
        addAction
        }}>
        {children}
    </GlobalContext.Provider>);
}