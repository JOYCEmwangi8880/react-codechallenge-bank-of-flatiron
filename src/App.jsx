import  { useState, useEffect } from "react";
import "./App.css";
import TableComponent from "./components/TableComponent";
import AddTransaction from "./components/AddTransaction";


function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transaction) => setTransactions(transaction))
      .catch((e) => console.log(e));
  }, []);

  // Function to add a new transaction
  function addTransaction(newTransaction) {
    // Make a POST request to your server to add the transaction.
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then(async (response) => {
        if (response.status === 201) {
          // If the request was successful, update the client state.
          setTransactions([...transactions, newTransaction]);

          // Prevent double transactions after refreshing
          const newTransactionId = response.headers.get("Location");
          window.history.replaceState(null, null, `/transactions/${newTransactionId}`);
        } else {
          console.error("Error posting transaction");
        }
      });
  }

  // Function to delete a transaction by ID
  function deleteTransaction(transactionId) {
    // Make a DELETE request to your server to delete the transaction.
    fetch(`http://localhost:3000/transactions/${transactionId}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        if (response.status === 201) {
          // If the request was successful, update the client state.
          const updatedTransactions = transactions.filter(
            (transaction) => transaction.id !== transactionId
          );
          setTransactions(updatedTransactions);
        } else {
          console.error("Error deleting transaction");
        }
      });
  }

  return (
    <>
      <h1>BANK OF FLATIRON</h1>
      <TableComponent
        transactions={transactions}
        onDeleteTransaction={deleteTransaction}
      />
      <AddTransaction onAddTransaction={addTransaction} />
    </>
  );
}

export default App;
