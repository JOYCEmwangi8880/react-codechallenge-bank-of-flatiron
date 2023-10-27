
import PropTypes from 'prop-types'; // Import PropTypes

function TableComponent({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <table className='table'>
        <thead className='th'>
          <tr>
            <th>Transaction no</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button
                  className="button-delete"
                  onClick={() => onDeleteTransaction(transaction.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableComponent.propTypes = {
  transactions: PropTypes.array.isRequired, 
  onDeleteTransaction: PropTypes.func.isRequired,
};

export default TableComponent;
