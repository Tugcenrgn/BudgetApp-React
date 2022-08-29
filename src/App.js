import './App.css';
import React from 'react';
import {Header} from './components/Header'
import {Budget} from './components/Budget'
import {ExpensesIncomes} from './components/ExpensesIncomes'
import {ActionList} from './components/ActionList'
import {AddAction} from './components/AddAction'
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
       <Header/>
       <div className="container">
         <Budget/>
         <ExpensesIncomes/>
         <ActionList/>
         <AddAction/>
       </div>
    </GlobalProvider>
  );
}

export default App;
