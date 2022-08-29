import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

export const ExpensesIncomes = () => {
    const {actions}= useContext(GlobalContext);
    const amounts = actions.map(action =>action.amount);
    const income = amounts.filter(item => item > 0).reduce((a,item)=>(a+=item),0).toFixed(2);
    const expense = (amounts.filter(item=> item<0).reduce((a,item)=>(a += item),0)*-1).toFixed(2);

    return (
        <div className="ex-in-container">
            <div>
                <h4>Incomes</h4>
                <p id="income-money" className="income money">{income}₺</p>
            </div>

            <div>
                <h4>Expenses</h4>
                <p id="expense-money" className ="expense money">{expense}₺</p>
            </div> 
        </div>
    )
}