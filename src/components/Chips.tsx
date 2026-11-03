import { CATEGORIES } from "../data/procedures";

export const Chips = () => {
  return (
    <div className="chip-container">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className="chip"
          onClick={() => {
            const section = document.getElementById(`h-${category}`);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
