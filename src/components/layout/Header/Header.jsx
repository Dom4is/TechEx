import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <header>
        <div className={styles.header}>
          <div className={styles.info}>
            <img className="logo" src="/Logo.png" alt="" />
            <div className={styles.number}>+ 7 (800) 600-35-38 </div>
          </div>
          <nav>
            <div className={styles.pages}>
              <div className={styles.element}>{"Технология".toUpperCase()}</div>
              <div className={styles.element}>
                {"Платформа управения".toUpperCase()}
              </div>
              <div className={styles.element}>{"Тест-драйв".toUpperCase()}</div>
              <div className={styles.element}>{"Наша сеть".toUpperCase()}</div>
              <div className={styles.element}>
                {"Оставить заявку".toUpperCase()}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
