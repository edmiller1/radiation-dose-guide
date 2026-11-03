import { Disclaimer } from './components/Disclaimer'
import { CATEGORIES, PROCEDURES, formatDose } from './data/procedures'

function App() {
  return (
    <>
      <Disclaimer />
      <header className="page-header">
        <h1>Radiation Dose Guide</h1>
        <p>
          Approximate effective radiation dose for common imaging procedures, and how long it
          would take to receive the same dose from natural background radiation.
        </p>
      </header>

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
                </tr>
              </thead>
              <tbody>
                {PROCEDURES.filter((p) => p.category === category).map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.name}</th>
                    <td>{formatDose(p)}</td>
                    <td>{p.backgroundEquivalent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </main>

      <footer className="page-footer">
        <p>
          Actual radiation doses may vary depending on patient size, imaging equipment, and
          examination protocols.
        </p>
        <Disclaimer />
      </footer>
    </>
  )
}

export default App
