import { useState } from "react";

const LINKS = [
  { to: "/", label: "Главная" },
  { to: "/products", label: "Продукция" },
  { to: "/colors", label: "Цвета" },
  { to: "/projects", label: "Объекты" },
  { to: "/cooperation", label: "Сотрудничество" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          Flexstone<span>76</span>
        </a>

        <nav className={`nav ${open ? "nav-open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.to} href={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="tel:+79619739919" className="header-phone">
          +7 (961) 973-99-19
        </a>

        <button
          className="burger"
          aria-label="Открыть меню"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
