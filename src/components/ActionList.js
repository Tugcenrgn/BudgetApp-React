import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Action} from './Action'
export const ActionList = ()=> {

    const {actions} = useContext(GlobalContext)

    return (
        <>
        <h3>Actions</h3>
        <ul id="list" className="list">
            {actions.map(action =>(<Action key={action.id} action={action}/>))}
            
        </ul>
        </>
    )
}