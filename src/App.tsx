import { Chips } from "./components/Chips";
import { Disclaimer } from "./components/Disclaimer";
import { DoseBadge, DoseBandKey } from "./components/DoseBadge";
import {
  CATEGORIES,
  PROCEDURES,
  formatDose,
  getDoseBand,
} from "./data/procedures";

function App() {
  return (
    <>
      <header className="page-header">
        <h1>Radiation Dose Guide</h1>
        <p>
          Effective dose is measured in millisieverts (mSv) and is used to
          estimate the overall impact of radiation exposure on the body.
        </p>
      </header>

      <Chips />

      <DoseBandKey />

      <main>
        {CATEGORIES.map((category) => (
          <section key={category} aria-labelledby={`h-${category}`}>
            <h2 id={`h-${category}`}>{category}</h2>
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
                {PROCEDURES.filter((p) => p.category === category).map((p) => (
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
