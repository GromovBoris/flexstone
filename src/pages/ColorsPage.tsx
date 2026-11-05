import { colors } from "../data/colors";

export default function ColorsPage() {
  return (
    <section>
      <h1>Цвета гибкого кирпича</h1>
      <p>Изготовим под ваш проект с выбором цвета и типоразмера.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "24px",
        }}
      >
        {colors.map((c) => (
          <div
            key={c.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "12px",
              padding: "16px",
            }}
          >
            <img
              src={c.image}
              alt={c.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
