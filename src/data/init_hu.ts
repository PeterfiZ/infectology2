import { abdomenHu } from './abdomen_hu';
import { gastrointestinalHu } from './gastrointestinal_hu';
import { boneJointHu } from './bone_joint_hu';
import { zoonosisHu } from './zoonozis_hu';
import { viralHepatitisHu } from './viral_hepatitis_hu';
import { urinaryTractHu } from './urinary_tract_hu';
import { DiseaseDatabase } from '../types';
import { ensureGlobals } from './metadata';

export const diseasesHu: DiseaseDatabase = {};

ensureGlobals(diseasesHu);

Object.assign(diseasesHu, abdomenHu, {
  gastrointestinal: gastrointestinalHu,
  bone_joint: boneJointHu,
  zoonotic: zoonosisHu,
  viral_hepatitis: viralHepatitisHu,
  urinary_tract: urinaryTractHu
});


