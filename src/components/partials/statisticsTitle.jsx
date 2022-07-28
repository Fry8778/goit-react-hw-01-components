import styles from "../styles/statisticsTitle.module.css";
import propTypes from 'prop-types';

function Statistics (props) {
  const statList = props.data.map((oneItem) =>(
    <li className={styles.item} key={oneItem.id}>
    <span className={styles.label}>{oneItem.label}</span> 
    <span className={styles.percentage}>{oneItem.percentage.toString()} %</span>
    </li> 
  ));
  return (
    <section className={styles.statistics}>
      
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>{statList}</ul>
    </section>
  )
}

Statistics.propTypes = {
    id: propTypes.string,
    label: propTypes.string,
    percentage: propTypes.number,     
};

export default Statistics;