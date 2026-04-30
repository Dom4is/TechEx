// TestimonialsSlider.jsx
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
  // 🔹 Добавим 4-й отзыв для демонстрации прокрутки
  {
    company: "ПЯТЁРОЧКА",
    author: "Анна Волкова",
    role: "Региональный IT-менеджер",
    text: "Стабильность связи — критически важна для ритейла. После перехода на оборудование mrnet мы сократили простои оборудования на 70%. Особенно ценим централизованное управление: можем мониторить трафик, перезагружать устройства и обновлять настройки без выезда в магазин. Интеграция с нашими внутренними системами прошла гладко, а техподдержка всегда на связи — даже ночью. Рекомендуем mrnet сетевым компаниям, где каждая минута простоя стоит денег.",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="testimonials-slider">
      {/* Контейнер с фиксированной высотой как на изображении */}
      <div className="slider-container">
        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * 320}px)`,
              width: `${testimonials.length * 320}px`,
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="card-header">
                  <div className="company">{item.company}</div>
                  <div className="author">{item.author}</div>
                  <div className="role">{item.role}</div>
                </div>
                <p className="text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Управление */}
      <div className="slider-controls">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="nav-btn prev"
        ></button>

        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`dot ${i === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === testimonials.length - 1}
          className="nav-btn next"
        ></button>
      </div>
    </div>
  );
}
