// import classNames from "classnames";
import { Button } from "./ui/Button/Button";
import { ButtonGradient } from "./ui/ButtonGradient/ButtonGradient";
import TestimonialsSlider from "./ui/Slider/TestimonialsSlider";
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
          <br />
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
      <h2 className={styles.centeredText}>500+ КЛИЕНТОВ УЖЕ С НАМИ</h2>
      <div className={styles.brands}>Latter</div>
      <h2 className={styles.centeredText}>ТЕХНОЛОГИЯ</h2>
      <main className={styles.main}>
        <img
          src="/router-levitating2.jpg"
          alt=""
          className={styles.routerImg2}
        />
        <div className={styles.wiredCard} style={{ paddingRight: "40px" }}>
          <p>
            Прокачайте свой интернет <br />с высокоскоростными технологиями
            mrnet. <br /> Наш мультироутер суммирует несколько <br /> каналов
            связи в один (технология бондинг), <br /> значительно повышая
            устойчивость <br /> и скорость соединения! <br />
          </p>
          <br />
          <Button style={{ marginTop: "20px" }} value={"Узнать больше"} />
        </div>
      </main>
      <main className={styles.main}>
        <div>
          <h2>НЕ БАЛАНСИРУЕМ</h2>
          <img src="/train.jpg" alt="" className={styles.trainImg} />
        </div>
        <div>
          <h2>А СУММИРУЕМ</h2>
          <img src="/modern-train.jpg" alt="" className={styles.trainImg} />
        </div>
      </main>
      <h2 className={styles.centeredText}>
        {"Настраивайте сеть и управляйте всеми".toUpperCase()} <br />
        {"устройствами через единый личный кабинет".toUpperCase()}
      </h2>
      <section className={styles.cards}>
        <div style={{ gap: "12px", display: "flex", flexDirection: "column" }}>
          <div className={styles.card} style={{ width: "570px" }}>
            <h3>МОНИТОРИНГ</h3> <br />
            <br />
            <span className={styles.infoText}>
              Графики потребления трафика <br /> <br />
              Просмотр подключенных к мультироутеру сетевых устройств
            </span>
          </div>
          <div className={styles.card} style={{ width: "570px" }}>
            <h3>ТОНКАЯ НАСТРОЙКА</h3> <br />
            <br />
            <br />
            <span className={styles.infoText}>
              Настройка тоннелей PPTP, L2TP, GRE, IPIP <br />
              <br /> Настройка пробросов портов
            </span>
          </div>
        </div>
        <img src="/macbook.jpg" alt="" className={styles.macbookImg} />
      </section>

      <div
        style={{ display: "grid", placeItems: "center", margin: "35px auto" }}
      >
        <Button value={"Испытать все возможности"} />
      </div>
      <h2 className={styles.centeredText}>
        {"Решение, созданное айтишниками".toUpperCase()}
        <br />
        {"для айтишников".toUpperCase()}
      </h2>

      <section className={styles.main} style={{ marginBottom: "12px" }}>
        <div className={styles.wiredCard}>
          <h3>{"Ценим ваше время".toUpperCase()}</h3>
          <br />
          <br />
          <span className={styles.wiredCardText}>
            Подключите мультироутер <br />с быстрым интернетом всего за 7 минут.
            Наши
            <br /> устройства работают по принципу <br />
            Plug'n'Play (подключи и пользуйся). <br /> <br /> Вы получаете
            надёжную связь и отсутствие <br /> головной боли в виде договоров с
            разными
            <br />
            провайдерами
          </span>
        </div>
        <div className={styles.wiredCard}>
          <h3>{"Безграничные".toUpperCase()}</h3>
          <h3>{"Возможности".toUpperCase()}</h3>
          <br />
          <br />
          <span className={styles.wiredCardText}>
            Подберём оборудование для новых точек <br /> и оперативно подключим
            к интернету <br /> по любому адресу. <br />
            <br />
            Всё это — без необходимости заключения <br /> дополнительных
            контрактов
          </span>
        </div>
        <div className={styles.wiredCard}>
          <h3>{"Индивидуальный".toUpperCase()}</h3>
          <h3>{"подход".toUpperCase()}</h3>
          <br />
          <br />
          <span className={styles.wiredCardText}>
            Мы всегда идем навстречу клиенту, <br />
            предлагая оптимальное по стоимости <br />
            решение. <br />
            <br />
            Заполните заявку, и в рабочее время мы <br />
            за 1 час сделаем расчёт
          </span>
        </div>
      </section>
      <section className={styles.main} style={{ marginTop: "0" }}>
        <div className={styles.gradientDiv}>
          <span
            className={styles.blackFont}
            style={{ fontSize: "45px", fontWeight: "500" }}
          >
            {"Попробуйте".toUpperCase()} <br />
            {"14 дней бесплатно".toUpperCase()}
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p className={styles.blackFont}>
            Развивайте свою инфру с mrnet. Без лишних <br />
            затрат и костылей. Высокоскоростной интернет — <br /> удобно,
            эффективно!
          </p>
        </div>

        <img src="/router3.jpg" alt="" className={styles.routerImg3} />
      </section>
      <div
        style={{ display: "grid", placeItems: "center", margin: "35px auto" }}
      >
        <h2></h2>
        <ButtonGradient value={"Начать!"} />
      </div>
      <h2 className={styles.centeredText}>
        {"95% клиентов выбирают mrnet".toUpperCase()} <br />
        {"после тест-драйва".toUpperCase()}
      </h2>
      <TestimonialsSlider />
      <h2 className={styles.centeredText}>
        {"Подключаем к стабильному интернету по всей России".toUpperCase()}
      </h2>
      <img src="/Map_Russia.png" alt="" className={styles.map} />

      <div className={styles.mapDescription}>
        <div className={styles.flex}>
          <div className={styles.squareOne}></div>
          <span>Наши клиенты</span>
        </div>
        <div className={styles.flex}>
          <div className={styles.squareTwo}></div>
          <span>Отделы продаж</span>
        </div>
      </div>
      <section className={styles.main}>
        <div
          className={styles.gradientDiv}
          style={{
            color: "black",
            paddingRight: "150px",
            paddingBottom: "90px",
            textTransform: "uppercase",
          }}
        >
          <h2 style={{ fontWeight: "500" }}>
            Хотите узнать <br />
            больше, <br /> рассчитать <br />
            стоимость <br />
            или забрать <br /> устройство <br />
            на бесплатный <br /> тест?
          </h2>
        </div>
        <form action="" method="post" className={styles.netForm}>
          <h4>{"Услуга доступна только для юридических лиц".toUpperCase()}</h4>
          <div>
            <input
              type="text"
              name="name"
              required
              autocomplete="name"
              placeholder="Ваше имя *"
              className={styles.inputs}
            />
          </div>
          <span style={{ fontSize: "18px" }}>Оставьте ваши контакты</span>
          <div>
            <input
              type="tel"
              name="tel"
              id=""
              placeholder="Ваш телефон +7 (___)___-__-__ *"
              className={styles.inputs}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="nick"
              placeholder="Ваш ник в tg"
              className={styles.inputs}
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              name="check"
              id="check"
              className={styles.check}
              required
            />
            <label htmlFor="check" style={{ fontSize: "12px" }}>
              Я даю согласие на обработку персональных данных в форме обращения
              на странице сайта. Ознакомиться с условиями <br /> Политики
              обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН» <br />*
              Поля, обязательные для заполнения
            </label>
          </div>
          <br />
          <ButtonGradient value={"Начать!"} />
        </form>
      </section>
    </>
  );
}
