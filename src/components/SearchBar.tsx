interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="search">
      <label htmlFor="search-input">Search procedures</label>
      <input
        id="search-input"
        type="search"
        value={value}
        placeholder="e.g. chest, mammogram, CT"
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
