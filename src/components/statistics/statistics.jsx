import propTypes from 'prop-types';
import styles from "./statistics.module.css";

function Statistics ({stats, title}) {
  const statArray = stats.map((oneItem) =>(
    <li className={styles.item} key={oneItem.id}>
    <span className={styles.label}>{oneItem.label}</span> 
    <span className={styles.percentage}>{oneItem.percentage.toString()} %</span>
    </li> 
  ));
  return (
    <section className={styles.statistics}>      
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statArray}>{statArray}</ul>
    </section>
  )
}

Statistics.propTypes = {
    stats: propTypes.array,
    title: propTypes.string,   
};

export default Statistics;