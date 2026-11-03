import { useState } from "react";
import { Chips } from "./components/Chips";
import { Disclaimer } from "./components/Disclaimer";
import { DoseBadge, DoseBandKey } from "./components/DoseBadge";
import { DoseExplainer } from "./components/DoseExplainer";
import { SearchBar } from "./components/SearchBar";
import {
  CATEGORIES,
  PROCEDURES,
  formatDose,
  getDoseBand,
  type Category,
} from "./data/procedures";
import { matchesSearch } from "./data/search";

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | null>(null);

  const results = PROCEDURES.filter(
    (p) =>
      (category === null || p.category === category) &&
      (query.trim() === "" || matchesSearch(p, query)),
  );
  const visibleCategories = CATEGORIES.filter((c) =>
    results.some((p) => p.category === c),
  );
  const isFiltered = query.trim() !== "" || category !== null;

  const clearFilters = () => {
    setQuery("");
    setCategory(null);
  };

  return (
    <>
      <header className="page-header">
        <h1>Radiation Dose Guide</h1>
        <p>
          Effective dose is measured in millisieverts (mSv) and is used to
          estimate the overall impact of radiation exposure on the body.
        </p>
      </header>

      <DoseExplainer />

      <DoseBandKey />

      <div className="filters">
        <SearchBar value={query} onChange={setQuery} />
        <Chips selected={category} onSelect={setCategory} />
        <div className="result-summary">
          <p aria-live="polite">
            Showing {results.length} of {PROCEDURES.length} procedures
          </p>
          {isFiltered && (
            <button type="button" className="link-button" onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      <main>
        {results.length === 0 && (
          <div className="empty-state">
            <p>
              No procedures match
              {query.trim() && <> “{query.trim()}”</>}
              {category && <> in {category}</>}.
            </p>
            <button type="button" className="link-button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}

        {visibleCategories.map((c) => (
          <section key={c} aria-labelledby={`h-${c}`}>
            <h2 id={`h-${c}`}>{c}</h2>
            <table>
              <thead>
                <tr>
                  <th scope="col">Procedure</th>
                  <th scope="col">Approx. dose</th>
                  <th scope="col">Same as natural background</th>
                  <th scope="col">Level</th>
                </tr>
              </thead>
              <tbody>
                {results
                  .filter((p) => p.category === c)
                  .map((p) => (
                    <tr key={p.id}>
                      <th scope="row">{p.name}</th>
                      <td data-label="Approx. dose">{formatDose(p)}</td>
                      <td data-label="Same as background">
                        {p.backgroundEquivalent}
                      </td>
                      <td data-label="Level">
                        <DoseBadge band={getDoseBand(p.doseMsv)} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </section>
        ))}
      </main>

      <footer className="page-footer">
        <p>
          Actual radiation doses may vary depending on patient size, imaging
          equipment, and examination protocols.
        </p>
        <Disclaimer />
      </footer>
    </>
  );
}

export default App;
