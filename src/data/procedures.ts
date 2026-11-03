// Source: "Radiation Dose Reference Guide" (supplied with the assessment).
// Values are transcribed as published. Where the source gives an upper bound
// (e.g. "<0.001"), `doseIsUpperBound` / the "<" in `backgroundEquivalent` preserves it.

export type Category =
  | 'Abdominal Region'
  | 'Bone'
  | 'Central Nervous System'
  | 'Chest'
  | 'Dental'
  | 'Heart'
  | "Men's Imaging"
  | 'Nuclear Medicine'
  | "Women's Imaging"

export interface Procedure {
  id: string
  name: string
  category: Category
  /** Approximate Effective Dose in millisieverts (mSv). */
  doseMsv: number
  /** True when the source states the dose as "less than" this value. */
  doseIsUpperBound: boolean
  /** Comparable natural background radiation, verbatim from the source. */
  backgroundEquivalent: string
}

export const CATEGORIES: Category[] = [
  'Abdominal Region',
  'Bone',
  'Central Nervous System',
  'Chest',
  'Dental',
  'Heart',
  "Men's Imaging",
  'Nuclear Medicine',
  "Women's Imaging",
]

type Row = [name: string, dose: string, background: string]

const SOURCE: Record<Category, Row[]> = {
  'Abdominal Region': [
    ['CT Abdomen and Pelvis', '7.7', '2.6 years'],
    ['CT Abdomen and Pelvis with and without contrast', '15.4', '5.1 years'],
    ['CT Colonography', '6', '2 years'],
    ['IVU', '3', '1 year'],
    ['Barium Enema', '6', '2 years'],
    ['Upper GI Study with Barium', '6', '2 years'],
  ],
  Bone: [
    ['Lumbar Spine', '1.4', '6 months'],
    ['Extremity X-ray', '<0.001', '<3 hours'],
  ],
  'Central Nervous System': [
    ['CT Brain', '1.6', '7 months'],
    ['CT Brain with and without contrast', '3.2', '13 months'],
    ['CT Head and Neck', '1.2', '5 months'],
    ['CT Spine', '8.8', '3 years'],
  ],
  Chest: [
    ['CT Chest', '6.1', '2 years'],
    ['CT Lung Cancer Screening', '1.5', '6 months'],
    ['Chest X-ray', '0.1', '10 days'],
  ],
  Dental: [
    ['Dental X-ray', '0.005', '1 day'],
    ['Panoramic X-ray', '0.025', '3 days'],
    ['Cone Beam CT', '0.18', '22 days'],
  ],
  Heart: [
    ['Coronary CTA', '8.7', '3 years'],
    ['Cardiac CT Calcium Scoring', '1.7', '6 months'],
    ['Non Cardiac CTA', '5.1', '<2 years'],
  ],
  "Men's Imaging": [['DEXA', '0.001', '3 hours']],
  'Nuclear Medicine': [['PET/CT Whole Body', '22.7', '7.6 years']],
  "Women's Imaging": [
    ['DEXA Screening', '0.001', '3 hours'],
    ['Digital Mammography', '0.28', '34 days'],
    ['3D Mammogram', '0.34', '42 days'],
  ],
}

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const PROCEDURES: Procedure[] = CATEGORIES.flatMap((category) =>
  SOURCE[category].map(([name, dose, background]) => ({
    id: `${slug(category)}--${slug(name)}`,
    name,
    category,
    doseMsv: parseFloat(dose.replace('<', '')),
    doseIsUpperBound: dose.startsWith('<'),
    backgroundEquivalent: background,
  })),
)

export const formatDose = (p: Procedure) =>
  `${p.doseIsUpperBound ? '<' : ''}${p.doseMsv} mSv`
