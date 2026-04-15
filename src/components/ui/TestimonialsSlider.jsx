// App.jsx или любой компонент
import React, { useState } from "react";
import "./TestimonialsSlider.css";

const testimonials = [
  {
    company: "ШОКОЛАДНИЦА",
    author: "Чистяков Марк",
    role: "Начальник управления",
    text: "Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают... ",
  },
  {
    company: "ЕРМОЛИНО",
    author: "Тараканов Михаил",
    role: "Руководитель СИТ",
    text: "У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!",
  },
  {
    company: "АПТЕКИ 36.6",
    author: "Константин Старцев",
    role: "Руководитель",
    text: "Когда бизнес расширяется, особенно важна скорость партнёров и готовность помочь. Когда у провайдера в Великом Новгороде случилась авария, mrnet за несколько часов доставили мультироутер и удаленно настроили соединение в 8 из 12 наших аптек. Удобство подключения, возможность удаленного контроля всех точек из одного кабинета  и реактивная поддержка в telegram — важные преимущества mrnet!",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ transform: `translateX(${(index - current) * 100}%)` }}
          >
            <div className="card">
              <div className="card-header">
                <div className="company">{item.company}</div>
                <div className="author">{item.author}</div>
                <div className="role">{item.role}</div>
              </div>
              <p className="text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="controls">
        <button onClick={prev} className="arrow"></button>
        <div className="dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
        <button onClick={next} className="arrow"></button>
      </div>
    </div>
  );
}
