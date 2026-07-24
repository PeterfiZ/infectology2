import { skinSoftTissueDe } from './skin_soft_tissue_de';

if (typeof window !== 'undefined') {
  if (!(window as any).diseases) {
    (window as any).diseases = {};
  }
  (window as any).diseases.skin_soft_tissue = skinSoftTissueDe;
}

export { skinSoftTissueDe };
