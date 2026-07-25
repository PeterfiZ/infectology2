/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { diseasesHu } from './diseases_hu';
import { diseasesEn } from './diseases_en';
import { diseasesDe } from './diseases_de';
import { DiseaseDatabase } from '../types';

// Guarantee that every category present in Hungarian is present in English and German as a fallback
const allCategoryKeys = Object.keys(diseasesHu);

allCategoryKeys.forEach((key) => {
  if (!diseasesEn[key] && diseasesHu[key]) {
    diseasesEn[key] = diseasesHu[key];
  }
  if (!diseasesDe[key] && diseasesHu[key]) {
    diseasesDe[key] = diseasesHu[key];
  }
});

export const diseasesByLang: { [key: string]: DiseaseDatabase } = {
  hu: diseasesHu,
  en: diseasesEn,
  de: diseasesDe
};

