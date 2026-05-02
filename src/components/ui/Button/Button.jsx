import styles from "./Button.module.css";

export function Button({ value }) {
  return <button className={styles.btn}>{value.toUpperCase()}</button>;
}
