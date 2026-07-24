import { abdomenEn } from './abdomen_en';
import { gastrointestinalEn } from './gastrointestinal_en';
import { viralHepatitisEn } from './viral_hepatitis_en';
import { urinaryTractEn } from './urinary_tract_en';
import { intraabdominalEn } from './intraabdominal_en';
import { skinSoftTissueEn } from './skin_soft_tissue_en';

if (typeof window !== 'undefined') {
  (window as any).diseaseMetadata = {
    gastrointestinal: { icon: '🦠', color: '#dc2626' },
    viral_hepatitis: { icon: '🧬', color: '#eab308' },
    urinary_tract: { icon: '🚽', color: '#3b82f6' },
    intraabdominal: { icon: '🩺', color: '#16a34a' },
    cns_infections: { icon: '🧠', color: '#0891b2' },
    skin_soft_tissue: { icon: '🩹', color: '#e11d48' },
    childhood: { icon: '👶', color: '#6366f1' },
    emerging: { icon: '🚨', color: '#be185d' },
    parasitic: { icon: '🪱', color: '#84cc16' },
    sexually_transmitted: { icon: '🩸', color: '#db2777' },
    fungal: { icon: '🍄', color: '#d97706' },
    sepsis_systemic: { icon: '☣️', color: '#ef4444' },
    bacterial_respiratory: { icon: '🫁', color: '#06b6d4' },
    cardiovascular: { icon: '🫀', color: '#b91c1c' },
    upper_respiratory: { icon: '🗣️', color: '#14b8a6' },
    tropical: { icon: '🌴', color: '#10b981' },
    infection_control: { icon: '🛡️', color: '#0f766e' }
  };
  (window as any).diseases = {};
  
  // Seed window.diseases with the existing abdomen categories and override gastrointestinal, viral_hepatitis, urinary_tract, intraabdominal, and skin_soft_tissue
  Object.assign((window as any).diseases, abdomenEn, {
    gastrointestinal: gastrointestinalEn,
    viral_hepatitis: viralHepatitisEn,
    urinary_tract: urinaryTractEn,
    intraabdominal: intraabdominalEn,
    skin_soft_tissue: skinSoftTissueEn
  });
}
