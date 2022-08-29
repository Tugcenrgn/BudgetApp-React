import React, {useContext} from 'react';
import { GlobalContext} from '../context/GlobalState'

export const Action = ({action}) => {
    const{removeAction} = useContext(GlobalContext);

    const sign = action.amount < 0 ? '-' : '+' && action.amount !== 0;
    return(
        <li className={action.amount < 0 ? 'minus' : 'plus'}>
                {action.text} <span>{sign}{Math.abs(action.amount)}₺</span>
                <button onClick ={() => removeAction(action.id)} className="delete-btn" >X</button>
        </li>
    )
}