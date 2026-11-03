import { PROCEDURES, formatDose } from "../data/procedures";

// Example doses are read from the dataset so the copy can't drift from it.
const doseOf = (name: string) => {
  const p = PROCEDURES.find((p) => p.name === name);
  return p ? formatDose(p) : "";
};

export function DoseExplainer() {
  return (
    <details className="explainer">
      <summary>What is a millisievert (mSv)?</summary>

      <div className="explainer__body">
        <p>
          A <strong>millisievert (mSv)</strong> is a unit for measuring
          radiation dose. The figures in this guide are an{" "}
          <strong>approximate effective dose</strong>: one number that
          estimates the radiation's overall effect on the whole body, even
          when only part of the body is scanned. This lets different scans be
          compared on the same scale.
        </p>

        <h3>We're all exposed to radiation every day</h3>
        <p>
          Natural <strong>background radiation</strong> comes from the ground,
          the air, space and even the food we eat. The comparisons in this
          guide are based on roughly <strong>3 mSv a year</strong> of
          background radiation. So "6 months" means the scan gives about the
          same dose as six months of everyday life.
        </p>

        <h3>Doses vary a lot between scans</h3>
        <p>
          A chest X-ray is about {doseOf("Chest X-ray")} (around 10 days of
          background radiation). A CT scan of the chest is about{" "}
          {doseOf("CT Chest")} (around 2 years). CT scans take many images
          from different angles, which is why they usually give higher doses
          than a single X-ray.
        </p>

        <h3>Why your dose may differ</h3>
        <p>
          These are typical values. Your actual dose depends on your body
          size, the equipment used and how the scan is done. If you have
          questions about a scan you've been offered, ask your doctor or the
          imaging team.
        </p>
      </div>
    </details>
  );
}
