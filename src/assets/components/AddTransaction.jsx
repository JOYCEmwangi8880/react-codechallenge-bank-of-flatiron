import { useState } from "react";
import { PropTypes } from "prop-types";

function AddTransaction({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");



  function handleDateChange(e) {
    setDate(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleSubmitTransaction(e) {
    e.preventDefault();

    // Create a new transaction object with the next "id" value
    const newTransaction = {
    
      date,
      description,
      category,
      amount,
    };

  

    // Post the new transaction to the backend API
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then(async (response) => {
        // Check if the response was successful
        if (response.status === 201) {
          // Add the new transaction to the transactions table
          onAddTransaction(newTransaction);

         
        }
      });
  }

  return (
    <div>
      <form className="btn" onSubmit={handleSubmitTransaction}>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input type="text" id="date" value={date} onChange={handleDateChange} />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
        </div>

        <div className="input-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" value={category} onChange={handleCategoryChange} />
        </div>

        <div className="input-group">
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" value={amount} onChange={handleAmountChange} />
        </div>

        <button type="submit" className="btnn">Add Transaction</button>
      </form>
    </div>
  );
}

AddTransaction.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

export default AddTransaction;
