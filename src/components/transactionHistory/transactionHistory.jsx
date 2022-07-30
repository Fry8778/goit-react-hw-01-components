import styles from "./transactionHistory.module.css";
import propTypes from 'prop-types';

function TransactionHistory ({item}) {
  const historyList = item.map((itemArray) => (
    <tr key={itemArray.id}>
      <td>{itemArray.type}</td>
      <td>{itemArray.amount}</td>
      <td>{itemArray.currency}</td>
    </tr>
  ));
  return (
    <div className={styles.transactionWrap}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {historyList}
        </tbody>
      </table>
    </div>


  )
}

TransactionHistory.propTypes = {
  item: propTypes.array,
};

export default TransactionHistory;