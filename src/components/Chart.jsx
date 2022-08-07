import styles from "./Chart.module.css";
import Bar from "./Bar";

const AMOUNT = 478.33;
const AVERAGE = AMOUNT / 7;
const MARGIN = AVERAGE / 6;
let amounts = [];

for (let i = 0; i < 6; i++) {
  const max = AVERAGE + MARGIN;
  const min = AVERAGE - MARGIN;
  amounts.push(parseFloat((Math.random() * (max - min) + min).toFixed(2)));
}

amounts.push(
  parseFloat((AMOUNT - amounts.reduce((x, y) => x + y, 0)).toFixed(2))
);

const days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];

const max = Math.max(...amounts);

export default function Chart() {
  return (
    <div className={styles.chart}>
      {amounts.map((amount, i) => (
        <Bar
          amount={amount}
          day={days[i]}
          key={days[i]}
          max={max}
        />
      ))}
    </div>
  );
}
