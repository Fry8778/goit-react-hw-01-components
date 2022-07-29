import styles from "./transactionHistory.module.css";
import propTypes from 'prop-types';

export function TransactionHistory(props) {
  const historyName = props.history.map((itemHistory) => (
    <tr key={itemHistory.id}>
      <td>{itemHistory.type}</td>
      <td>{itemHistory.amount}</td>
      <td>{itemHistory.currency}</td>
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
          {historyName}
        </tbody>
      </table>
    </div>


  )
}

TransactionHistory.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,

};

export default TransactionHistory;