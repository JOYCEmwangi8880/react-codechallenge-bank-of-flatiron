import { useState, useEffect } from 'react'
import './App.css'
import TableComponent from './TableComponent'

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
<TableComponent transactions={transactions} />









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
