import styles from "./ButtonGradient.module.css";

export function ButtonGradient({ value }) {
  return <button className={styles.btn}>{value.toUpperCase()}</button>;
}
