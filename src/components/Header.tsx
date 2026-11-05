import { Link, NavLink } from "react-router-dom";

const PHONE = "+7 (XXX) XXX-XX-XX"; // ← телефон заказчика

const links = [
  { to: "/", label: "Главная" },
  { to: "/colors", label: "Цвета" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        {/* логотип заказчика */}
        <span>FST КЛИНКЕР</span>
      </Link>
      <nav className="nav">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"}>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="phone">
        {PHONE}
      </a>
    </header>
  );
}
