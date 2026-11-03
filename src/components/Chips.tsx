import { CATEGORIES, type Category } from "../data/procedures";

interface ChipsProps {
  /** Selected category, or null for "All". */
  selected: Category | null;
  onSelect: (category: Category | null) => void;
}

export const Chips = ({ selected, onSelect }: ChipsProps) => {
  const options: (Category | null)[] = [null, ...CATEGORIES];

  return (
    <div className="chip-container" role="group" aria-label="Filter by category">
      {options.map((category) => (
        <button
          key={category ?? "all"}
          type="button"
          className="chip"
          aria-pressed={selected === category}
          onClick={() => onSelect(category)}
        >
          {category ?? "All"}
        </button>
      ))}
    </div>
  );
};
