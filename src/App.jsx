import { useState, useEffect } from 'react'
import './App.css'
import TableComponent from './TableComponent'
import AddTransaction from './assets/AddTransaction'

function App() {
  const [transactions, setTransactions]= useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/transactions")
    .then(res =>res.json())
    .then(transaction=>setTransactions(transaction))
     .catch((e) => console.log(e))
  
  } ,[])
 
//console.log(transactions)

  return (
    <>
    <h1>BANK OF FLATIRON</h1>
<TableComponent transactions={transactions} />
<AddTransaction/>










{/*    
      {transactions.map((transaction) =>(
        <div key = {transaction.id}>
        <p> {transaction.id}</p>
        <p> {transaction.date}</p>
        <p> {transaction.description}</p>
        <p> {transaction.category}</p>
        <p> {transaction.amount}</p>
        </div>
      ))}
      */}
    </>
  )
}

export default App
