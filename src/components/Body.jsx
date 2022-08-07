import styles from "./Body.module.css";
import Chart from "./Chart";

export default function Body() {
  return (
    <div className={styles.body}>
      <h2 className={styles.body__title}>Spending - Last 7 days</h2>
      <Chart/>
      <div className={styles.body__line} />
      <h3 className={styles.body__total}>Total this month</h3>
      <div className={styles.summary}>
        <h4 className={styles.summary__amount}>$478.33</h4>
        <div className={styles.summary__stats}>
          <h5 className={styles.summary__percent}>+2.4%</h5>
          <span>from last month</span>
        </div>
      </div>
    </div>
  );
}
