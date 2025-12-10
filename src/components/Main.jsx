import { Button } from "./ui/Button";
import styles from "../styles/Main.module.css";
export function Main() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.wiredCard}>
          <h1>
            {"Беспроводной".toUpperCase()} <br />
            {"интернет для бизнеса".toUpperCase()}
          </h1>
          <h3>
            {"от 2 990 рублей* в месяц!".toUpperCase()} <br />
            {"Установка по любому адресу в РФ!".toUpperCase()}
          </h3>

          <div className={styles.btn}>
            <Button value={"Попробовать"} />
          </div>
          <ul className={styles.list}>
            <li>
              Мультироутер c технологией суммирования нескольких каналов связи в
              один
            </li>
            <li>Высокая скорость и отказоустойчивость интернет-соединения</li>
            <li>Единый договор на ПО, оборудование и связь</li>
            <li>Простое подключение за 7 минут</li>
            <li>Моментальная техподдержка 24/7 в Telegram</li>
          </ul>
          <span className={styles.info}>
            * Без учета стоимости оборудования, возможен выкуп оборудования или
            аренда, стоимость <br /> будет зависеть от модели мультироутера
          </span>
        </div>
        <div>
          <img
            src="/router-levitating1.jpg"
            alt=""
            className={styles.routerImg}
          />
        </div>
      </main>
      <section className={styles.cards}>
        <div className={styles.card}>
          <img src="/wi-fi.png" alt="" className={styles.cardImg} />
          <h4>
            {"Надежный и быстрый".toUpperCase()} <br />
            {"интернет, который не падает".toUpperCase()}
          </h4>
        </div>
        <div className={styles.card}>
          <img src="/edits.png" alt="" className={styles.cardImg2} />
          <h4>
            {"КОНТРОЛЬ ВСЕЙ СЕТИ ЧЕРЕЗ".toUpperCase()} <br />
            {"ГИБКУЮ НАСТРОЙКУ".toUpperCase()}
          </h4>
        </div>
        <div className={styles.card}>
          <img src="/arrows.png" alt="" className={styles.cardImg3} />
          <h4>
            {"Единый инструмент".toUpperCase()} <br />
            {"для масштабирования".toUpperCase()} <br />
            {"по всей стране".toUpperCase()}
          </h4>
        </div>
      </section>
    </>
  );
}
