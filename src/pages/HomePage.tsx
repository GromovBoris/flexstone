import { Link } from "react-router-dom";
import { COMPANY } from "../data/company";
import { PRODUCTS } from "../data/products";

const stats = [
  { value: "30+", label: "лет службы фасада" },
  { value: "5 лет", label: "гарантии на материал" },
  { value: "до −10 °C", label: "монтаж в мороз" },
  { value: "−30%", label: "теплопотерь" },
];

const advantages = [
  {
    title: "Одна бригада вместо трёх этапов",
    text: "Утеплитель и декоративный слой в одном изделии: не нужны отдельные клей, армосетка и штукатурка.",
  },
  {
    title: "Лёгкие, как мебель",
    text: "Вес 7–10 кг/м² — в 8–10 раз меньше кирпичной кладки. Усиление фундамента не требуется.",
  },
  {
    title: "Зимний монтаж",
    text: "Работы идут до −10 °C — фасад не выпадает из графика строительства.",
  },
  {
    title: "Идеальные швы",
    text: "Заводская расшивка и шип-паз: ровный шов по всему фасаду, без зависимости от рук мастера.",
  },
  {
    title: "Вид как в год сдачи — и через 10 лет",
    text: "Не выгорают, морозостойкость 100+ циклов, без мокрых пятен на стыках.",
  },
  {
    title: "Дешевле настоящего кирпича",
    text: "Вид клинкерной кладки в 1,5–2,5 раза дешевле кирпича с утеплителем и работой.",
  },
];

const comparison = [
  {
    param: "Монтаж 100 м²",
    thermo: "1–3 дня",
    wet: "7–14 дней",
    brick: "10–20 дней",
  },
  { param: "Вес, кг/м²", thermo: "7–10", wet: "15–25", brick: "80–100" },
  {
    param: "Утеплитель",
    thermo: "встроен",
    wet: "отдельный слой",
    brick: "нужен доп. слой",
  },
  {
    param: "Монтаж в мороз",
    thermo: "до −10 °C",
    wet: "от +5 °C",
    brick: "возможен",
  },
  {
    param: "Подрядчики",
    thermo: "1 бригада",
    wet: "3–4 этапа",
    brick: "1–2 бригады",
  },
  {
    param: "Нагрузка на фундамент",
    thermo: "минимальная",
    wet: "средняя",
    brick: "высокая",
  },
];

const projects = [
  {
    title: "Малоэтажный ЖК",
    text: "600 м², монтаж цоколя, термопанели под клинкерный кирпич 50 мм.",
  },
  {
    title: "Коттеджные посёлки Ярославской области",
    text: "1000 м² за 30 дней бригадой из 3 человек, ИЖС, панели под кирпич 40 мм.",
  },
  {
    title: "Многоквартирный дом, 9 этажей",
    text: "500 погонных метров цоколя за 4 дня, бригада 3 человека, панели под короед 100 мм.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Фасадные термопанели Flexstone: утепление и отделка в один этап</h1>
        <p className="hero-sub">
          Фасад или цоколь 100 м² за 1–3 дня, монтаж до −10 °C, <br />
          срок службы более 30 лет, гарантия на материал 5 лет.
        </p>
        <div className="hero-actions">
          <a href={COMPANY.phoneHref} className="btn">
            Рассчитать стоимость
          </a>
          <Link to="/projects" className="btn btn-outline">
            Смотреть объекты
          </Link>
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="container">
          <h2>Почему термопанели</h2>
          <div className="cards">
            {advantages.map((a) => (
              <div className="card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Сравнение с другими решениями</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th className="highlight-col">Термопанели</th>
                <th>Мокрый фасад</th>
                <th>Клинкерный кирпич</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.param}>
                  <td>{row.param}</td>
                  <td className="highlight-col">{row.thermo}</td>
                  <td>{row.wet}</td>
                  <td>{row.brick}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="table-note">
            Стоимость ориентировочная и зависит от объёма, региона и типа
            декоративного слоя. Точный расчёт — в течение 2 дней.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Продукция</h2>
          <div className="cards">
            {PRODUCTS.map((p) => (
              <div className="card" key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="product-price">
                  {p.price} {p.unit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Реализованные объекты</h2>
          <div className="cards">
            {projects.map((pr) => (
              <div className="card" key={pr.title}>
                <h3>{pr.title}</h3>
                <p>{pr.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Привезём образцы панелей на ваш объект</h2>
        <p>Расчёт под ваш проект — в течение 2 дней.</p>
        <div className="hero-actions">
          <a href={COMPANY.phoneHref} className="btn">
            {COMPANY.phone}
          </a>
          <a
            href={COMPANY.vk}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Написать в VK
          </a>
        </div>
      </section>
    </>
  );
}
