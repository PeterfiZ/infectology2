/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ScoreCalculator } from '../types';

export const getCalculators = (lang: string): { [key: string]: ScoreCalculator } => {
  if (typeof window !== 'undefined' && (window as any).scoreCalculators && (window as any).scoreCalculators[lang]) {
    return (window as any).scoreCalculators[lang];
  }

  const isHu = lang === 'hu';
  const isDe = lang === 'de';

  return {
    'curb65': {
      title: isHu ? 'CURB-65 Tüdőgyulladás Score' : isDe ? 'CURB-65 Pneumonie-Score' : 'CURB-65 Pneumonia Score',
      description: isHu
        ? 'Közösségben szerzett tüdőgyulladás (CAP) súlyosságának és a betegfelvétel szükségességének megítélésére.'
        : isDe
        ? 'Zur Beurteilung des Schweregrads einer ambulant erworbenen Pneumonie (CAP).'
        : 'Assesses the severity of community-acquired pneumonia (CAP) and the appropriate care setting.',
      items: [
        { id: 'c', label: isHu ? 'Confusion (Zavartság - új keletű tájékozatlanság)' : isDe ? 'Verwirrtheit (akutes Delir / Desorientiertheit)' : 'Confusion (new-onset disorientation)', points: 1 },
        { id: 'u', label: isHu ? 'Urea > 7 mmol/L (Karbamid)' : isDe ? 'Harnstoff-Stickstoff > 7 mmol/L' : 'Urea > 7 mmol/L (BUN > 19 mg/dL)', points: 1 },
        { id: 'r', label: isHu ? 'Légzésszám ≥ 30/perc' : isDe ? 'Atemfrequenz ≥ 30/min' : 'Respiratory rate ≥ 30/min', points: 1 },
        { id: 'b', label: isHu ? 'Vérnyomás (Szisztolés < 90 vagy Diasztolés ≤ 60 Hgmm)' : isDe ? 'Blutdruck (Systolisch < 90 oder Diastolisch ≤ 60 mmHg)' : 'Blood pressure (Systolic < 90 or Diastolic ≤ 60 mmHg)', points: 1 },
        { id: '65', label: isHu ? 'Életkor ≥ 65 év' : isDe ? 'Alter ≥ 65 Jahre' : 'Age ≥ 65 years', points: 1 }
      ],
      interpret: (score: number) => {
        if (score <= 1) {
          return {
            risk: isHu ? `Alacsony rizikó (${score} pont)` : isDe ? `Niedriges Risiko (${score} Punkte)` : `Low Risk (${score} points)`,
            action: isHu ? 'Ambuláns kezelés javasolt / otthon biztonságosan gyógyítható.' : isDe ? 'Ambulante Behandlung geeignet.' : 'Suitable for outpatient management.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else if (score === 2) {
          return {
            risk: isHu ? `Közepes rizikó (${score} pont)` : isDe ? `Mittleres Risiko (${score} Punkte)` : `Moderate Risk (${score} points)`,
            action: isHu ? 'Rövid kórházi megfigyelés vagy szorosabb követés javasolt.' : isDe ? 'Stationäre Aufnahme oder engmaschige Überwachung empfohlen.' : 'Hospital admission or close outpatient follow-up recommended.',
            color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200'
          };
        } else {
          return {
            risk: isHu ? `Magas rizikó (${score} pont)` : isDe ? `Hohes Risiko (${score} Punkte)` : `High Risk (${score} points)`,
            action: isHu ? 'Azonnali kórházi felvétel, intenzív osztályos (ITO) elhelyezés mérlegelendő.' : isDe ? 'Dringende Krankenhausaufnahme; Intensivstation (ITS) erwägen.' : 'Urgent hospital admission; consider intensive care unit (ICU) management.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    },
    'qsofa': {
      title: isHu ? 'qSOFA Sepsis Szűrés' : isDe ? 'qSOFA-Sepsis-Score' : 'qSOFA Sepsis Screen',
      description: isHu
        ? 'Gyors ágy melletti szűrőeszköz a szepszis gyanújának és a kedvezőtlen kimenetel felmérésére.'
        : isDe
        ? 'Schnelles Bedside-Tool zur Risikoabschätzung bei Sepsis-Verdacht.'
        : 'Quick bedside tool to screen for suspected sepsis and high risk of mortality.',
      items: [
        { id: 'rr', label: isHu ? 'Légzésszám ≥ 22/perc' : isDe ? 'Atemfrequenz ≥ 22/min' : 'Respiratory rate ≥ 22/min', points: 1 },
        { id: 'ams', label: isHu ? 'Megváltozott mentális állapot (GCS < 15)' : isDe ? 'Verändertes Bewusstsein (GCS < 15)' : 'Altered mental status (GCS < 15)', points: 1 },
        { id: 'sbp', label: isHu ? 'Szisztolés vérnyomás ≤ 100 Hgmm' : isDe ? 'Systolischer Blutdruck ≤ 100 mmHg' : 'Systolic blood pressure ≤ 100 mmHg', points: 1 }
      ],
      interpret: (score: number) => {
        if (score < 2) {
          return {
            risk: isHu ? `Alacsony kockázat (${score} pont)` : isDe ? `Niedriges Risiko (${score} Punkte)` : `Low Risk (${score} points)`,
            action: isHu ? 'Szepszis kockázata alacsony. Monitorozás szükséges.' : isDe ? 'Geringe Wahrscheinlichkeit für Sepsis. Weiter beobachten.' : 'Low probability of sepsis. Continue monitoring.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else {
          return {
            risk: isHu ? `Magas kockázat (≥ 2 pont)` : isDe ? `Hohes Risiko (≥ 2 Punkte)` : `High Risk (≥ 2 points)`,
            action: isHu ? 'Klinikai romlás vagy szepszis gyanúja. Teljes SOFA pontszám elvégzése és intenzív terápia javasolt!' : isDe ? 'Verdacht auf Sepsis. Umgehende diagnostische Abklärung, Intensivüberwachung erwägen.' : 'Suspected sepsis or poor outcome. Initiate diagnostic workup, check full SOFA, and escalate care.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    },
    'atlas': {
      title: isHu ? 'ATLAS C. difficile Pontrendszer' : isDe ? 'ATLAS-C.-difficile-Score' : 'ATLAS C. difficile Score',
      description: isHu
        ? 'A Clostridioides difficile fertőzés (CDI) kimenetelének és 30 napos mortalitásának előrejelzésére.'
        : isDe
        ? 'Vorhersage der Mortalität und des Therapieansprechens bei einer C.-difficile-Infektion.'
        : 'Predicts response to therapy and 30-day mortality in Clostridioides difficile infection (CDI).',
      items: [
        { type: 'header', label: isHu ? 'Életkor' : isDe ? 'Alter' : 'Age' },
        { type: 'radio', name: 'atlas_age', label: isHu ? '< 60 év' : isDe ? '< 60 Jahre' : '< 60 years', points: 0, checked: true },
        { type: 'radio', name: 'atlas_age', label: isHu ? '60 - 79 év' : isDe ? '60 - 79 Jahre' : '60 - 79 years', points: 1 },
        { type: 'radio', name: 'atlas_age', label: isHu ? '≥ 80 év' : isDe ? '≥ 80 Jahre' : '≥ 80 years', points: 2 },
        { type: 'header', label: isHu ? 'Kísérő kezelés' : isDe ? 'Begleittherapie' : 'Concomitant Therapy' },
        { type: 'checkbox', label: isHu ? 'Szisztémás antibiotikum a CDI kezelés alatt' : isDe ? 'Systemische Antibiotikatherapie während der CDI-Behandlung' : 'Systemic antibiotics continued during CDI therapy', points: 2 },
        { type: 'header', label: isHu ? 'Fehérvérsejtszám (G/L)' : isDe ? 'Leukozytenzahl (G/L)' : 'White Blood Cells (G/L)' },
        { type: 'radio', name: 'atlas_wbc', label: '< 16', points: 0, checked: true },
        { type: 'radio', name: 'atlas_wbc', label: '16 - 25', points: 1 },
        { type: 'radio', name: 'atlas_wbc', label: '> 25', points: 2 },
        { type: 'header', label: isHu ? 'Albumin (g/L)' : isDe ? 'Albumin (g/L)' : 'Albumin (g/L)' },
        { type: 'radio', name: 'atlas_alb', label: '> 35', points: 0, checked: true },
        { type: 'radio', name: 'atlas_alb', label: '26 - 35', points: 1 },
        { type: 'radio', name: 'atlas_alb', label: '≤ 25', points: 2 },
        { type: 'header', label: isHu ? 'Kreatinin (µmol/L)' : isDe ? 'Kreatinin (µmol/L)' : 'Creatinine (µmol/L)' },
        { type: 'radio', name: 'atlas_crea', label: '≤ 120', points: 0, checked: true },
        { type: 'radio', name: 'atlas_crea', label: '121 - 179', points: 1 },
        { type: 'radio', name: 'atlas_crea', label: '≥ 180', points: 2 }
      ],
      interpret: (score: number) => {
        if (score <= 3) {
          return {
            risk: isHu ? `Enyhe lefolyás (${score} pont)` : isDe ? `Milder Verlauf (${score} Punkte)` : `Mild course (${score} points)`,
            action: isHu ? '30 napos halálozás < 2%. Kedvező prognózis standard terápiával.' : isDe ? '30-Tage-Mortalität < 2%. Sehr gutes Ansprechen auf Standardtherapie.' : '30-day mortality < 2%. Highly favorable prognosis with standard therapy.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else if (score <= 6) {
          return {
            risk: isHu ? `Közepesen súlyos (${score} pont)` : isDe ? `Mittelschwerer Verlauf (${score} Punkte)` : `Moderate severity (${score} points)`,
            action: isHu ? '30 napos halálozás ~10-15%. Szoros klinikai követés, fidaxomicin javasolt.' : isDe ? '30-Tage-Mortalität ~10-15%. Fidaxomicin bevorzugen.' : '30-day mortality ~10-15%. Close monitoring, prefer fidaxomicin.',
            color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200'
          };
        } else {
          return {
            risk: isHu ? `Súlyos / Fulmináns (${score} pont)` : isDe ? `Schwerer / Fulminanter Verlauf (${score} Punkte)` : `Severe / Fulminant course (${score} points)`,
            action: isHu ? 'Halálozás > 30%. Sürgős intenzív osztályos elhelyezés, sebészi konzílium!' : isDe ? 'Mortalität > 30%. Dringende chirurgische und intensivmedizinische Abklärung!' : 'Mortality > 30%. Urgent surgical and ICU consultation required.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    },
    'lrinec': {
      title: 'LRINEC Nekrotizáló Fasciitis Rizikó',
      description: isHu
        ? 'Laboratóriumi paramétereken alapuló pontrendszer a nekrotizáló lágyrészfertőzések gyanújának megerősítésére.'
        : isDe
        ? 'Laborbasiertes Scoring-System zur Diagnoseunterstützung bei nekrotisierender Fasziitis.'
        : 'Laboratory risk indicator for necrotizing fasciitis based on basic serum markers.',
      items: [
        { type: 'header', label: 'CRP (mg/L)' },
        { type: 'radio', name: 'lr_crp', label: '< 150', points: 0, checked: true },
        { type: 'radio', name: 'lr_crp', label: '≥ 150', points: 4 },
        { type: 'header', label: isHu ? 'Fehérvérsejt (G/L)' : isDe ? 'Leukozyten (G/L)' : 'WBC (G/L)' },
        { type: 'radio', name: 'lr_wbc', label: '< 15', points: 0, checked: true },
        { type: 'radio', name: 'lr_wbc', label: '15 - 25', points: 1 },
        { type: 'radio', name: 'lr_wbc', label: '> 25', points: 2 },
        { type: 'header', label: isHu ? 'Hemoglobin (g/dL)' : isDe ? 'Hämoglobin (g/dL)' : 'Hemoglobin (g/dL)' },
        { type: 'radio', name: 'lr_hb', label: '> 13.5', points: 0, checked: true },
        { type: 'radio', name: 'lr_hb', label: '11.0 - 13.5', points: 1 },
        { type: 'radio', name: 'lr_hb', label: '< 11.0', points: 2 },
        { type: 'header', label: isHu ? 'Szérum Nátrium (mmol/L)' : isDe ? 'Serum-Natrium (mmol/L)' : 'Serum Sodium (mmol/L)' },
        { type: 'radio', name: 'lr_na', label: '≥ 135', points: 0, checked: true },
        { type: 'radio', name: 'lr_na', label: '< 135', points: 2 },
        { type: 'header', label: isHu ? 'Kreatinin (µmol/L)' : isDe ? 'Kreatinin (µmol/L)' : 'Creatinine (µmol/L)' },
        { type: 'radio', name: 'lr_cre', label: '≤ 141', points: 0, checked: true },
        { type: 'radio', name: 'lr_cre', label: '> 141', points: 2 },
        { type: 'header', label: isHu ? 'Glükóz (mmol/L)' : isDe ? 'Glukose (mmol/L)' : 'Glucose (mmol/L)' },
        { type: 'radio', name: 'lr_glu', label: '≤ 10', points: 0, checked: true },
        { type: 'radio', name: 'lr_glu', label: '> 10', points: 1 }
      ],
      interpret: (score: number) => {
        if (score <= 5) {
          return {
            risk: isHu ? `Alacsony rizikó (${score} pont)` : isDe ? `Niedriges Risiko (${score} Punkte)` : `Low Risk (${score} points)`,
            action: isHu ? 'Nekrotizáló fasciitis valószínűsége < 50%. Szoros monitorozás szükséges.' : isDe ? 'Wahrscheinlichkeit < 50%. Verlaufskontrolle.' : 'Probability < 50%. Keep monitoring carefully.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else if (score <= 7) {
          return {
            risk: isHu ? `Közepes rizikó (${score} pont)` : isDe ? `Mittleres Risiko (${score} Punkte)` : `Intermediate Risk (${score} points)`,
            action: isHu ? 'Valószínűség 50-75%. Azonnali sebészi konzílium, szoros obszerváció.' : isDe ? 'Wahrscheinlichkeit 50-75%. Chirurgische Konsultation empfohlen.' : 'Probability 50-75%. Arrange immediate surgical consultation.',
            color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200'
          };
        } else {
          return {
            risk: isHu ? `Magas rizikó (≥ 8 pont)` : isDe ? `Hohes Risiko (≥ 8 Punkte)` : `High Risk (≥ 8 points)`,
            action: isHu ? 'Valószínűség > 75%. Azonnali sebészi exploráció és debridement szükséges, a vizsgálat nem késleltetheti a műtétet!' : isDe ? 'Wahrscheinlichkeit > 75%. Notfallmäßige chirurgische Exploration und Sanierung indiziert!' : 'Probability > 75%. Immediate surgical exploration and debridement is mandatory. Do not delay surgery for diagnostics.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    },
    'centor': {
      title: isHu ? 'Centor (McIsaac) Tonsillitis Kritériumok' : isDe ? 'Centor-Score (McIsaac) für Strep-A' : 'Centor (McIsaac) Score for Strep A',
      description: isHu
        ? 'A Streptococcus pyogenes (GAS) okozta tonsillitis valószínűségének megítélésére.'
        : isDe
        ? 'Wahrscheinlichkeit einer Streptokokken-Pharyngitis bei Halsschmerzen.'
        : 'Estimates the probability of Group A Beta-Hemolytic Streptococcus (GAS) tonsillopharyngitis.',
      items: [
        { type: 'checkbox', label: isHu ? 'Láz > 38°C az anamnézisben' : isDe ? 'Fieber > 38°C im Verlauf' : 'Fever > 38°C in history', points: 1 },
        { type: 'checkbox', label: isHu ? 'Köhögés hiánya' : isDe ? 'Kein Husten' : 'Absence of cough', points: 1 },
        { type: 'checkbox', label: isHu ? 'Fájdalmas, duzzadt elülső nyaki nyirokcsomók' : isDe ? 'Schmerzhafte vordere Halslymphknoten' : 'Tender or swollen anterior cervical lymph nodes', points: 1 },
        { type: 'checkbox', label: isHu ? 'Tonsilláris duzzanat vagy exsudatum' : isDe ? 'Tonsillenschwellung oder Beläge' : 'Tonsillar exudate or swelling', points: 1 },
        { type: 'header', label: isHu ? 'Életkor' : isDe ? 'Alter' : 'Age' },
        { type: 'radio', name: 'ct_age', label: '3 - 14 év', points: 1, checked: true },
        { type: 'radio', name: 'ct_age', label: '15 - 44 év', points: 0 },
        { type: 'radio', name: 'ct_age', label: '≥ 45 év', points: -1 }
      ],
      interpret: (score: number) => {
        if (score <= 1) {
          return {
            risk: isHu ? `Alacsony valószínűség (${score} pont)` : isDe ? `Niedrige Wahrscheinlichkeit (${score} Punkte)` : `Low probability (${score} points)`,
            action: isHu ? 'GAS arány < 10%. Antibiotikum kezelés nem javasolt, csak tüneti terápia.' : isDe ? 'Strep-A-Wahrscheinlichkeit < 10%. Keine Antibiotika indiziert.' : 'Probability < 10%. Antibiotics not recommended; symptomatic treatment only.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else if (score <= 3) {
          return {
            risk: isHu ? `Közepes valószínűség (${score} pont)` : isDe ? `Mittlere Wahrscheinlichkeit (${score} Punkte)` : `Moderate probability (${score} points)`,
            action: isHu ? 'GAS arány ~15-30%. Gyorsteszt (Strep A) vagy torokváladék tenyésztés javasolt. Csak pozitív esetben adjunk AB-t.' : isDe ? 'Wahrscheinlichkeit ~15-30%. Schnelltest oder Kultur empfohlen.' : 'Probability ~15-30%. Perform Strep A rapid antigen test or throat culture; treat only if positive.',
            color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200'
          };
        } else {
          return {
            risk: isHu ? `Magas valószínűség (≥ 4 pont)` : isDe ? `Hohe Wahrscheinlichkeit (≥ 4 Punkte)` : `High probability (≥ 4 points)`,
            action: isHu ? 'GAS arány > 50%. Empirikus antibiotikum (Penicillin V) indítása mérlegelhető, vagy gyorsteszt után kezelendő.' : isDe ? 'Wahrscheinlichkeit > 50%. Empirische Therapie mit Penicillin V oder nach Schnelltest indiziert.' : 'Probability > 50%. Empiric Penicillin V therapy is acceptable, or perform rapid test and treat.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    },
    'gcs': {
      title: 'Glasgow Coma Scale (GCS)',
      description: isHu
        ? 'Tudatállapot és neurológiai károsodás mértékének gyors megítélésére.'
        : isDe
        ? 'Schnelle Einschätzung des Bewusstseinszustands und neurologischer Defizite.'
        : 'Standard scale used to evaluate consciousness and neurological status.',
      items: [
        { type: 'header', label: isHu ? 'Szemnyitás (E)' : isDe ? 'Augenöffnen (E)' : 'Eye Opening (E)' },
        { type: 'radio', name: 'gcs_e', label: isHu ? 'Spontán (4)' : isDe ? 'Spontan (4)' : 'Spontaneous (4)', points: 4, checked: true },
        { type: 'radio', name: 'gcs_e', label: isHu ? 'Felszólításra (3)' : isDe ? 'Auf Ansprache (3)' : 'To speech (3)', points: 3 },
        { type: 'radio', name: 'gcs_e', label: isHu ? 'Fájdalmas ingerre (2)' : isDe ? 'Auf Schmerzreiz (2)' : 'To pain (2)', points: 2 },
        { type: 'radio', name: 'gcs_e', label: isHu ? 'Nem reagál (1)' : isDe ? 'Keine Reaktion (1)' : 'No response (1)', points: 1 },
        { type: 'header', label: isHu ? 'Verbális válasz (V)' : isDe ? 'Verbale Antwort (V)' : 'Verbal Response (V)' },
        { type: 'radio', name: 'gcs_v', label: isHu ? 'Orientált, tiszta (5)' : isDe ? 'Orientiert (5)' : 'Oriented (5)', points: 5, checked: true },
        { type: 'radio', name: 'gcs_v', label: isHu ? 'Inkoherens, zavart (4)' : isDe ? 'Verwirrt (4)' : 'Confused (4)', points: 4 },
        { type: 'radio', name: 'gcs_v', label: isHu ? 'Inadekvát szavak (3)' : isDe ? 'Inadäquate Worte (3)' : 'Inappropriate words (3)', points: 3 },
        { type: 'radio', name: 'gcs_v', label: isHu ? 'Érthetetlen hangok (2)' : isDe ? 'Unverständliche Laute (2)' : 'Incomprehensible sounds (2)', points: 2 },
        { type: 'radio', name: 'gcs_v', label: isHu ? 'Nem ad hangot (1)' : isDe ? 'Keine Antwort (1)' : 'No response (1)', points: 1 },
        { type: 'header', label: isHu ? 'Motoros válasz (M)' : isDe ? 'Motorische Antwort (M)' : 'Motor Response (M)' },
        { type: 'radio', name: 'gcs_m', label: isHu ? 'Utasítást követ (6)' : isDe ? 'Befolgt Aufforderungen (6)' : 'Obeys commands (6)', points: 6, checked: true },
        { type: 'radio', name: 'gcs_m', label: isHu ? 'Fájdalmat lokalizál (5)' : isDe ? 'Gezielte Schmerzabwehr (5)' : 'Localizes pain (5)', points: 5 },
        { type: 'radio', name: 'gcs_m', label: isHu ? 'Fájdalomra elhúzódik (4)' : isDe ? 'Ungezielte Schmerzabwehr (4)' : 'Withdrawal from pain (4)', points: 4 },
        { type: 'radio', name: 'gcs_m', label: isHu ? 'Kóros flexiós tartás (decorticatiós) (3)' : isDe ? 'Abnorme Beugung (3)' : 'Abnormal flexion (decorticate posture) (3)', points: 3 },
        { type: 'radio', name: 'gcs_m', label: isHu ? 'Kóros extenziós tartás (decerebratiós) (2)' : isDe ? 'Abnorme Streckung (2)' : 'Abnormal extension (decerebrate posture) (2)', points: 2 },
        { type: 'radio', name: 'gcs_m', label: isHu ? 'Nincs mozgásválasz (1)' : isDe ? 'Keine Reaktion (1)' : 'No response (1)', points: 1 }
      ],
      interpret: (score: number) => {
        if (score >= 13) {
          return {
            risk: isHu ? `Enyhe sérülés (${score} pont)` : isDe ? `Leichtes Defizit (${score} Punkte)` : `Mild impairment (${score} points)`,
            action: isHu ? 'Normál vagy enyhén csökkent éberség. Megfigyelés.' : isDe ? 'Normale Vigilanz. Verlaufskontrolle.' : 'Normal or mild consciousness alteration. Keep observing.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else if (score >= 9) {
          return {
            risk: isHu ? `Közepes sérülés (${score} pont)` : isDe ? `Mittelschweres Defizit (${score} Punkte)` : `Moderate impairment (${score} points)`,
            action: isHu ? 'Középsúlyos tudatzavar. Sürgős CT és neurológiai kivizsgálás!' : isDe ? 'Mittelschwere Bewusstseinsstörung. CT und Abklärung indiziert.' : 'Moderate coma. Immediate CT and neurological workup required.',
            color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200'
          };
        } else {
          return {
            risk: isHu ? `Súlyos coma (≤ 8 pont)` : isDe ? `Schweres Koma (≤ 8 Punkte)` : `Severe coma (≤ 8 points)`,
            action: isHu ? 'Légútbiztosítás (Intubáció!) és azonnali intenzív osztályos kezelés kötelező!' : isDe ? 'Koma. Atemwegssicherung (Intubation!) und ITS-Therapie zwingend erforderlich!' : 'Coma. Safe the airway (Intubate!) and transfer to ICU immediately.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    },
    'candida': {
      title: 'Candida Score',
      description: isHu
        ? 'Az invazív candidiasis valószínűségének megítélésére intenzív osztályos betegeknél.'
        : isDe
        ? 'Einschätzung des Risikos einer invasiven Candidose bei Intensivpatienten.'
        : 'Predicts the likelihood of invasive candidiasis in critically ill patients.',
      items: [
        { type: 'checkbox', label: isHu ? 'Teljes parenterális táplálás (TPN)' : isDe ? 'Vollständige parenterale Ernährung (TPN)' : 'Total parenteral nutrition (TPN) active', points: 1 },
        { type: 'checkbox', label: isHu ? 'Nemrégiben végzett hasi/kismedencei műtét' : isDe ? 'Kürzliche abdominelle Operation' : 'Recent major surgery', points: 1 },
        { type: 'checkbox', label: isHu ? 'Multifokális Candida kolonizáció (több mint 2 helyről)' : isDe ? 'Multifokale Candida-Besiedlung' : 'Multifocal Candida colonization', points: 1 },
        { type: 'checkbox', label: isHu ? 'Súlyos szepszis jelenléte' : isDe ? 'Schwere Sepsis' : 'Severe sepsis at presentation', points: 2 }
      ],
      interpret: (score: number) => {
        if (score < 3) {
          return {
            risk: isHu ? `Alacsony kockázat (${score} pont)` : isDe ? `Niedriges Risiko (${score} Punkte)` : `Low Risk (${score} points)`,
            action: isHu ? 'Invazív candidiasis valószínűsége < 10%. Antifungális profilaxis nem indokolt.' : isDe ? 'Wahrscheinlichkeit < 10%. Keine Prophylaxe.' : 'Probability < 10%. Antifungal prophylaxis is not recommended.',
            color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200'
          };
        } else {
          return {
            risk: isHu ? `Magas kockázat (≥ 3 pont)` : isDe ? `Hohes Risiko (≥ 3 Punkte)` : `High Risk (≥ 3 points)`,
            action: isHu ? 'Invazív candidiasis valószínűsége > 30-40%. Empirikus antifungális terápia (Echinocandin) indítása javasolt!' : isDe ? 'Wahrscheinlichkeit > 30-40%. Empirische antimykotische Therapie (Echinocandin) indiziert.' : 'Probability > 30-40%. Empirical antifungal therapy (Echinocandin) should be initiated.',
            color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200'
          };
        }
      }
    }
  };
};
