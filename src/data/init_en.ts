import { abdomenEn } from './abdomen_en';
import { gastrointestinalEn } from './gastrointestinal_en';
import { viralHepatitisEn } from './viral_hepatitis_en';
import { urinaryTractEn } from './urinary_tract_en';
import { intraabdominalEn } from './intraabdominal_en';
import { skinSoftTissueEn } from './skin_soft_tissue_en';
import { boneJointEn } from './bone_joint_en';
import { DiseaseDatabase } from '../types';
import { ensureGlobals } from './metadata';

export const diseasesEn: DiseaseDatabase = {};

ensureGlobals(diseasesEn);

Object.assign(diseasesEn, abdomenEn, {
  gastrointestinal: gastrointestinalEn,
  viral_hepatitis: viralHepatitisEn,
  urinary_tract: urinaryTractEn,
  intraabdominal: intraabdominalEn,
  skin_soft_tissue: skinSoftTissueEn,
  bone_joint: boneJointEn
});


