import React ,{useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses  from './components/Expenses/Expenses';
 let DUMMY_EXPENSE=[
   {
      id:'e1',
      title:'School fee',
      amount:300,
      date:new Date(2021,5,12)
   },
   {
      id:'e2',
      title:'Tution fee',
      amount:350,
      date:new Date(2001,6,12)
   },
   {
      id:'e3',
      title:'Section fee',
      amount:390,
      date:new Date(2005,5,12)
   },
   {
      id:'e4',
      title:'Class fee',
      amount:456,
      date:new Date(2021,5,3)
   }
];
const App =() => {
   const [expenses,setExpenses]= useState(DUMMY_EXPENSE);
   const addExpenseHandler = (expense) => {
   const updatedExpense =[expense, ...expenses];
   setExpenses( updatedExpense);
};   
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />            
        <Expenses item={expenses} />
      </div>
    );
}
export default App;