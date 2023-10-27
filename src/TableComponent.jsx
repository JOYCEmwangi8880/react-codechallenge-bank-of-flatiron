import React from 'react'

function TableComponent({transactions}) {
  return (
    <div>
        <table>
            <thead>
                <th>transaction no</th>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </thead>
           <tbody>
           {transactions.map((transaction)=>(
            <tr key={transaction.id}>
            
                <td>{transaction.id}</td>
                     <td>{transaction.date}</td>
                  <td> {transaction.description}</td>
                 <td>{transaction.category}</td>
                 <td>{transaction.amount} </td>
            </tr>
           ) )}

           

           
           </tbody>
        </table>


    </div>
  )
}

export default TableComponent
