import { skinSoftTissueEn } from './skin_soft_tissue_en';

if (typeof window !== 'undefined') {
  if (!(window as any).diseases) {
    (window as any).diseases = {};
  }
  (window as any).diseases.skin_soft_tissue = skinSoftTissueEn;
}

export { skinSoftTissueEn };
