import { DOSE_BANDS, type DoseBand } from "../data/procedures";

export function DoseBadge({ band }: { band: DoseBand }) {
  return (
    <span className={`dose-badge dose-badge--${band.id}`} title={band.description}>
      <span className="dose-badge__dot" aria-hidden="true" />
      {band.label}
    </span>
  );
}

export function DoseBandKey() {
  return (
    <section className="dose-key" aria-labelledby="dose-key-heading">
      <h2 id="dose-key-heading">What the levels mean</h2>
      <ul>
        {DOSE_BANDS.map((band) => (
          <li key={band.id}>
            <DoseBadge band={band} />
            <span>{band.description}</span>
          </li>
        ))}
      </ul>
      <p className="dose-key__note">
        Levels compare procedures in this guide with each other. They are not
        a measure of risk.
      </p>
    </section>
  );
}
