import { Link } from "react-router-dom";
import { COMPANY } from "../data/company";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <p className="footer-logo">{COMPANY.name}</p>
          <p className="footer-note">
            Фасадные термопанели — утепление и отделка в один этап
          </p>
          <p className="footer-warranty">
            Гарантия на материал — 5 лет, срок службы — 30+ лет
          </p>
        </div>

        <div className="footer-col">
          <p>
            <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
          </p>
          <p>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
          <p>
            <a href={COMPANY.vk} target="_blank" rel="noreferrer">
              Мы во ВКонтакте
            </a>
          </p>
          <p>{COMPANY.address}</p>
        </div>

        <div className="footer-col">
          <nav className="footer-nav">
            <Link to="/">Главная</Link>
            <Link to="/products">Продукция</Link>
            <Link to="/colors">Цвета</Link>
            <Link to="/contacts">Контакты</Link>
          </nav>
        </div>
      </div>

      <p className="footer-disclaimer">
        © {new Date().getFullYear()} {COMPANY.name}. Информация на сайте не
        является публичной офертой (ст. 437 ГК РФ).
      </p>
    </footer>
  );
}
