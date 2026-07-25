import { abdomenDe } from './abdomen_de';
import { gastrointestinalDe } from './gastrointestinal_de';
import { viralHepatitisDe } from './viral_hepatitis_de';
import { urinaryTractDe } from './urinary_tract_de';
import { intraabdominalDe } from './intraabdominal_de';
import { skinSoftTissueDe } from './skin_soft_tissue_de';
import { boneJointDe } from './bone_joint_de';
import { DiseaseDatabase } from '../types';
import { ensureGlobals } from './metadata';

export const diseasesDe: DiseaseDatabase = {};

ensureGlobals(diseasesDe);

Object.assign(diseasesDe, abdomenDe, {
  gastrointestinal: gastrointestinalDe,
  viral_hepatitis: viralHepatitisDe,
  urinary_tract: urinaryTractDe,
  intraabdominal: intraabdominalDe,
  skin_soft_tissue: skinSoftTissueDe,
  bone_joint: boneJointDe
});


