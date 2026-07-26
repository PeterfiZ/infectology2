/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { diseasesHu } from './diseases_hu';
import { diseasesEn } from './diseases_en';
import { diseasesDe } from './diseases_de';
import { DiseaseDatabase } from '../types';

export const diseasesByLang: { [key: string]: DiseaseDatabase } = {
  hu: diseasesHu,
  en: diseasesEn,
  de: diseasesDe
};
