import styles from "./Chart.module.css";

export default function Bar({ amount, day, max }) {
  const height = (amount / max) * 100 + "%";
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar}>
        <div
          className={
            styles.bar__inner +
            " " +
            (max === amount ? styles["bar__inner--max"] : "")
          }
          style={{
            height: height,
          }}
        ></div>
      </div>
      <div
        style={{
          bottom: height,
        }}
        className={styles.bar__amount}
      >
        {"$" + amount}
      </div>
      <span className={styles.day}>{day}</span>
    </div>
  );
}
