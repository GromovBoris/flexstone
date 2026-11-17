import { Link, NavLink } from "react-router-dom";
import { COMPANY } from "../data/company";

const links = [
  { to: "/", label: "Главная" },
  { to: "/products", label: "Продукция" },
  { to: "/colors", label: "Цвета" },
  { to: "/projects", label: "Объекты" },
  { to: "/cooperation", label: "Сотрудничество" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>Флекстоун76</span>
      </Link>
      <nav className="nav">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"}>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <a href={COMPANY.phoneHref} className="header-phone">
        {COMPANY.phone}
      </a>
    </header>
  );
}
