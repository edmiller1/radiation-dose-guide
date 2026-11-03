// Wording is mandated by the assessment brief — do not edit.
export const DISCLAIMER_TEXT =
  'This application is part of a technical assessment exercise and is not intended for clinical use, diagnosis, treatment, or medical decision making.'

export function Disclaimer() {
  return (
    <aside className="disclaimer" role="note" aria-label="Disclaimer">
      <strong>Disclaimer:</strong> {DISCLAIMER_TEXT}
    </aside>
  )
}
