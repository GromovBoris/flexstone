export interface Color {
  id: string;
  name: string;
  image: string; // путь в public/, например /colors/red-brick.jpg
}

// Заглушки — заменить на реальные коллекции заказчика
export const colors: Color[] = [
  { id: "red", name: "Красный кирпич", image: "/colors/red.jpg" },
  { id: "grey", name: "Серый камень", image: "/colors/grey.jpg" },
  { id: "sand", name: "Песочный", image: "/colors/sand.jpg" },
  { id: "brown", name: "Коричневый", image: "/colors/brown.jpg" },
];
