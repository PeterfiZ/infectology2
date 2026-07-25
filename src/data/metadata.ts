const defaultMetadata: Record<string, { icon: string; color: string }> = {
  gastrointestinal: { icon: '🦠', color: '#dc2626' },
  viral_hepatitis: { icon: '🧬', color: '#eab308' },
  urinary_tract: { icon: '🚽', color: '#3b82f6' },
  intraabdominal: { icon: '🩺', color: '#16a34a' },
  cns_infections: { icon: '🧠', color: '#0891b2' },
  skin_soft_tissue: { icon: '🩹', color: '#e11d48' },
  bone_joint: { icon: '🦴', color: '#57534e' },
  zoonotic: { icon: '🐾', color: '#059669' },
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
  infection_control: { icon: '🛡️', color: '#0f766e' },
  scores: { icon: '📊', color: '#8b5cf6' }
};

const fallbackCategoryMeta = { icon: '🩺', color: '#065f46' };

export const safeMetadataProxy = new Proxy(defaultMetadata, {
  get(target: any, prop: string) {
    if (prop in target) return target[prop];
    return fallbackCategoryMeta;
  }
});

export function ensureGlobals(diseaseDb: any) {
  (globalThis as any).diseaseMetadata = safeMetadataProxy;
  (globalThis as any).diseases = diseaseDb;
  if (typeof window !== 'undefined') {
    (window as any).diseaseMetadata = safeMetadataProxy;
    (window as any).diseases = diseaseDb;
  }
}
