import { useState } from "react";

export default function ContactsPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: отправка на почту / в CRM заказчика
    setSent(true);
  }

  return (
    <section>
      <h1>Контакты</h1>
      <p>Телефон: +7 (XXX) XXX-XX-XX · Email: info@example.ru</p>
      {sent ? (
        <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Ваше имя" required />
          <input name="phone" type="tel" placeholder="Телефон" required />
          <button type="submit" className="btn">
            Оставить заявку
          </button>
        </form>
      )}
    </section>
  );
}
