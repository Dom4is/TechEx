import styles from "./Form.module.css";
import { ButtonGradient } from "../ButtonGradient/ButtonGradient";
export function Form() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.gradientDiv}>
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
