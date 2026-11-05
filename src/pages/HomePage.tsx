import { Link } from "react-router-dom";
import { colors } from "../data/colors";

const advantages = [
  {
    title: "Завод-производитель",
    text: "Контролируем качество на каждом этапе производства.",
  },
  {
    title: "Собственная технология",
    text: "Продукция выпускается по авторской технологии.",
  },
  {
    title: "Гарантия от 30 лет",
    text: "Материал устойчив к влаге и перепадам температур.",
  },
  {
    title: "Доставка по всей России",
    text: "Комплектуем и отправляем материал напрямую с производства.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Главный экран */}
      <section className="hero">
        <h1>Гибкий кирпич для фасадов частных домов</h1>
        <p>Цена от 1 080 ₽/м². Изготовим под ваш проект.</p>
        <Link to="/contacts" className="btn">
          Оставить заявку
        </Link>
      </section>

      {/* Преимущества */}
      <section className="advantages">
        <h2>Почему выбирают нас</h2>
        <div className="cards">
          {advantages.map((a) => (
            <div key={a.title} className="card">
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Тизер каталога */}
      <section className="colors-preview">
        <h2>Цвета и фактуры</h2>
        <div className="cards">
          {colors.slice(0, 4).map((c) => (
            <div key={c.id} className="card">
              <img src={c.image} alt={c.name} />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
        <Link to="/colors" className="btn">
          Смотреть все цвета
        </Link>
      </section>

      {/* Блок заявки */}
      <section className="cta">
        <h2>Рассчитаем стоимость под ваш объект</h2>
        <p>Оставьте заявку — перезвоним и подберём материал.</p>
        <Link to="/contacts" className="btn">
          Получить расчёт
        </Link>
      </section>
    </>
  );
}
