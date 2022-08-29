import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Budget = () => {
    const {actions}= useContext(GlobalContext);
    const amounts = actions.map(action => action.amount);
    const total = amounts.reduce((a, item) => (a += item),0).toFixed(2);
    

    return(
        <>
        <h4>Budget</h4>
        <h1 id="budget">{total}₺</h1>
        </>
    )
}