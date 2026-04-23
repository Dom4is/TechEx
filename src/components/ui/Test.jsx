import React, { useState } from "react";

export default function SimpleSlider() {
  // 1. Память: какой сейчас слайд (0, 1 или 2)
  const [page, setPage] = useState(0);

  // 2. Данные (просто текст для примера)
  const texts = ["Первый отзыв", "Второй отзыв", "Третий отзыв"];

  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      {/* 3. Показываем текст, который соответствует номеру страницы */}
      <h3>{texts[page]}</h3>

      {/* 4. Кнопки управления */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {/* Кнопка НАЗАД */}
        <button onClick={() => setPage(page - 1)} disabled={page === 0}>
          ←
        </button>

        {/* Кнопка ВПЕРЁД */}
        <button onClick={() => setPage(page + 1)} disabled={page === 2}>
          →
        </button>
      </div>

      <p style={{ fontSize: "12px", color: "#666" }}>
        Сейчас слайд: {page + 1}
      </p>
    </div>
  );
}
