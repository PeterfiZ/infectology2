/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Pathogen {
  type: string;
  name: string;
  gram?: string;
  shape?: string;
  genome?: string;
}

export interface Symptom {
  name: string;
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
}

export interface Clinical {
  incubation?: string;
  onset?: string;
  symptoms?: Symptom[];
  physical_exam?: string[];
  complications?: string[];
  description?: string;
}

export interface LabTest {
  test: string;
  finding: string | string[];
  interpretation: string;
}

export interface Imaging {
  modality?: string;
  test?: string;
  finding: string | string[];
  significance?: string;
  interpretation?: string;
}

export interface MicroTest {
  test: string;
  finding?: string | string[];
  significance?: string;
}

export interface DiagnosticCriteria {
  name: string;
  items: string[];
}

export interface Diagnostics {
  criteria?: DiagnosticCriteria[];
  laboratory?: LabTest[];
  imaging?: Imaging[];
  microbiology?: MicroTest[];
  differential?: { disease: string; distinguishing: string }[];
  scores?: string[];
  calculators?: any[];
}

export interface Drug {
  drug: string;
  dose: string;
  duration?: string;
  note?: string;
}

export interface Therapy {
  empirical?: {
    [key: string]: Drug[] | { title: string; drugs: Drug[] };
  };
  targeted?: string;
  supportive?: string[];
  prevention?: string[];
  guidelines?: string[];
  references?: string[];
}

export interface Prognosis {
  mortality: string;
  prognostic_scores?: string[];
  factors: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  type?: string;
}

export interface Didactics {
  overview: string | string[];
  lower?: string | string[];
  upper?: string | string[];
  diagnostics?: string[];
  red_flags?: string[];
  special_populations?: string;
  teaching_tip?: string | string[];
}

export interface DiseaseTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface Disease {
  id: string;
  name: string;
  isHeader?: boolean;
  title?: string;
  color?: string;
  didactics?: Didactics;
  table?: DiseaseTable;
  pathogen?: Pathogen | null;
  epidemiology?: {
    incidence?: string;
    risk_groups?: string[];
    seasonality?: string;
    transmission?: string;
  };
  pathomechanism?: {
    steps?: string[];
    virulence_factors?: string[];
  };
  clinical?: Clinical;
  diagnostics?: Diagnostics;
  differential?: { disease: string; distinguishing: string }[];
  therapy?: Therapy;
  prognosis?: Prognosis;
  gallery?: GalleryItem[];
}

export interface Category {
  name: string;
  icon: string;
  color: string;
  diseases: Disease[];
  tables?: DiseaseTable[];
  didactics?: Didactics;
}

export interface DiseaseDatabase {
  [key: string]: Category;
}

export interface ScoreItem {
  id?: string;
  label: string;
  points?: number;
  type?: 'header' | 'checkbox' | 'radio' | 'number';
  name?: string;
  min?: number;
  max?: number;
  value?: number;
  checked?: boolean;
}

export interface ScoreCalculator {
  title: string;
  description: string;
  items: ScoreItem[];
  interpret: (score: number) => {
    risk: string;
    action: string;
    color: string;
    bg: string;
    border: string;
  };
}

export interface Note {
  diseaseId: string;
  content: string;
  updatedAt: string;
}

declare global {
  interface Window {
    diseases: any;
    diseaseMetadata: any;
    scoreCalculators: any;
  }
}

