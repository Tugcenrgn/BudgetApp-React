import React, {useState, useContext, useId} from 'react'
import { GlobalContext} from '../context/GlobalState';

export const AddAction = () => {
    const [text, setText]= useState('');
    const [amount, setAmount]= useState(0);
    const newId = useId(); //I can't use this hook
    const{addAction} = useContext(GlobalContext);

    const incomeSubmit = e => {
        e.preventDefault();

        const newAction = {
            id: Math.floor(Math.random() *100000),
            text,
            amount: +amount //turn into a number

        }
        addAction(newAction);
    }

    const expenseSubmit = e => {
        e.preventDefault();

        const newAction = {
            id: Math.floor(Math.random() *100000),
            text,
            amount: +(`-${amount}`)
        }
        addAction(newAction);

    }
    return(
        <>
        <h3>Add new action</h3>
        <form >
            <div className="form-control">
                <label for="text">Action Name</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                 placeholder="Expense Name"/>
            </div>

            <div className="form-control">
                <label for="amount">Amount</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                 placeholder="Amount"/>
            </div>
            <div className = "btn-div">
            <button onClick={incomeSubmit} id="income-btn" className="btn">Add Income</button>
            <button onClick={expenseSubmit} id="expense-btn" className="btn">Add Expense</button>
            </div>
        </form>
        </>
    )
}