# Radiation Dose Guide

> **Disclaimer:** This application is part of a technical assessment exercise and is not intended for clinical use, diagnosis, treatment, or medical decision making.

A small patient-facing web app that helps a non-technical reader understand the approximate radiation dose of common imaging procedures, based on the supplied _Radiation Dose Reference Guide_.

## Project overview

- All 26 procedures across 9 categories from the reference guide, shown with their approximate effective dose (mSv) and comparable natural background radiation.
- **Dose levels.** Each procedure has a plain-English label (Very low / Low / Moderate / Higher) with a key explaining what each means. See [Dose levels](#dose-levels).
- _TODO: describe search / filtering / comparison features as they land._

## Dose levels

The levels are **this app's interpretation, not part of the source data**. They're there so readers can see where a procedure sits without having to interpret mSv. The thresholds are based on the guide's own comparison column, which implies about 3 mSv per year of natural background radiation:

| Level    | Dose (mSv) | Roughly equal to                 |
| -------- | ---------- | -------------------------------- |
| Very low | < 0.1      | less than ~2 weeks of background |
| Low      | 0.1 – < 3  | less than ~1 year of background  |
| Moderate | 3 – < 10   | ~1–3 years of background         |
| Higher   | ≥ 10       | more than ~3 years of background |

Design notes:

- Every colour is shown alongside a text label, so the levels don't rely on colour vision.
- The palette is deliberately calm (green, blue, amber, orange) with no red. This is a patient-facing page, and a "danger" signal could cause unnecessary worry about a recommended scan.
- The UI says the levels compare procedures with each other and are not a measure of risk.
- The thresholds are defined once in `DOSE_BANDS` / `getDoseBand()` in `src/data/procedures.ts`, so every view uses the same bands.

## Technology choices

| Choice                                                   | Why                                                                                                                                      |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Vite + React + TypeScript**                            | Fast setup, typed data model, component structure that's easy to discuss. Comrad itself uses React.                                      |
| **Static site, no backend**                              | The dataset is small and fixed, so a server or database would add complexity without benefit.                                            |
| **Data as a typed TS module** (`src/data/procedures.ts`) | The source table lives in one place. "Less than" values (e.g. `<0.001`) are kept as an explicit flag rather than lost to number parsing. |
| **Plain CSS with custom properties**                     | No styling dependency; light/dark themes via `prefers-color-scheme`.                                                                     |

## Installation

Requires Node.js 20+.

```bash
npm install
```

## Running locally

```bash
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check and production build to dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  data/procedures.ts       # dataset transcribed from the reference guide
  components/Disclaimer.tsx
  App.tsx
  index.css
```

## Assumptions and limitations

- Data is transcribed verbatim from the reference PDF, including the "comparable background radiation" column. That column implies roughly 3 mSv/year of background exposure, and a few rows don't quite match that rate (e.g. Non Cardiac CTA at 5.1 mSv → "<2 years"). The source figures are shown as published.
- DEXA appears under both Men's and Women's Imaging in the source and is kept in both.
- Doses are approximate. Actual doses vary with patient size, equipment and protocol.
- _TODO: add further limitations._
