import styles from "./Head.module.css";

export default function Head() {
  return (
    <div className={styles.head}>
      <div className={styles.balance}>
        <h1>My balance</h1>
        <h2>$921.48</h2>
      </div>
      <svg
        className={styles.logo}
        width="72"
        height="48"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  );
}
