import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Название компании. Все права защищены.</p>
      <nav>
        <Link to="/colors">Цвета</Link>
        <Link to="/about">О компании</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
      <p>fst@example.ru · +7 (XXX) XXX-XX-XX</p>
    </footer>
  );
}
