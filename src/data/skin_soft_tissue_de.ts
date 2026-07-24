import { Category } from '../types';

export const skinSoftTissueDe: Category = {
  name: 'Haut- und Weichteilinfektionen',
  icon: '🩹',
  color: '#e11d48',
  didactics: {
    overview: 'Haut- und Weichteilinfektionen (SSTI) sowie tiefgreifende Knochen- und Gelenkinfektionen umfassen ein breites klinisches Spektrum – von oberflächlichen Läsionen (Impetigo, Follikulitis) über lebensbedrohliche nekrotisierende Weichteilinfektionen (NSTI), das diabetische Fußsyndrom (DFS) bis hin zu destruierenden Knochen- und Gelenkinfektionen (Osteomyelitis, Septische Arthritis, Spondylodiszitis). Das Management richtet sich nach den aktuellen AWMF-S2k-Leitlinien, WSES 2024, IWGDF 2023, NPIAP 2023 sowie den Prinzipien der OVIVA-Studie. Zwei Grundpfeiler sind entscheidend: adäquate chirurgische Quellkontrolle (Debridement, Drainage, Revascularisierung) und eine gezielte, evidenzbasierte Antibiose.',
    primary: 'Einteilung purulent vs. nicht-purulent (AWMF / IDSA): 1) Purulente SSTI (Hautabszess, Furunkel, Karbunkel): Die primäre Therapie ist die Inzision und Drainage (I&D). Indikationen für eine systemische Antibiose sind Fieber/SIRS, Immunsuppression oder Lokalisation im Gesicht/an der Hand. 2) Nicht-purulente SSTI (Erysipel, Phlegmone/Zellulitis, NSTI): Kalkulierte Antibiose gegen Streptokokken und MSSA/MRSA. Eine Kurzzeittherapie (5–7 Tage) ist bei unkomplizierter Phlegmone genauso effektiv wie 10–14 Tage.',
    secondary: 'Nekrotisierende Weichteilinfektionen (NSTI / Nekrotisierende Fasziitis): Hyperakuter chirurgischer Notfall! Leitsymptom: Starke Schmerzen außer Verhältnis zum Befund. Der LRINEC-Score kann den Verdacht stützen, darf aber eine NOTFALL-OP NIEMALS verzögern. Chirurgische Exploration ("Finger-Test") und radikales Debridement innerhalb von 6–12 Stunden sind lebensrettend. Kalkulierte Dreifach-Antibiose: (Pip/Tazo oder Meropenem) + Vancomycin + Clindamycin (zur Toxinhemmung) ± IVIG bei GAS-Schocksyndrom.',
    biliary: 'Diabetisches Fußsyndrom (DFS - IWGDF 2023) & Dekubitus (NPIAP 2023): DFS-Infektionen erfordern eine Stadieneinteilung (leicht, mittelschwer, schwer), den Sonde-auf-Knochen-Test (Probe-to-Bone), Druckentlastung und Perfusionsevaluierung (pAVK). Systemische Antibiotika sind bei uninfizierten chronischen Wunden oder Dekubitalulzerationen KONTRAINDIZIERT!',
    diagnostics: [
      '1) Klinische Untersuchung: Unterscheidung purulent vs. nicht-purulent, Erfassung von Tiefe, Krepitation, Blasenbildung, Anästhesie und Sonde-auf-Knochen-Status.',
      '2) Chirurgische Exploration ("Finger-Test"): Fehlende Blutung, "Spülwasser"-Sekret und Ausbleiben des Faszienwiderstands sichern die nekrotisierende Fasziitis.',
      '3) Diagnostische Arthrozentese: Obligat bei Verdacht auf septische Arthritis VOR Antibiotikagabe (Gelenkflüssigkeit: Leukozyten > 50.000/µL, >90% Granulozyten).',
      '4) Mikrobiologie: Tiefe Gewebebiopsie oder Kürettage bei DFS/Osteomyelitis (keine oberflächlichen Abstriche unbereinigter Wunden!); Blutkulturen (50% positiv bei Spondylodiszitis/Septischer Arthritis).',
      '5) Bildgebung: Kontrastmittel-CT bei Verdacht auf Weichteilgas/Abszess bei NSTI; MRT (Goldstandard) bei Spondylodiszitis, Osteomyelitis und tiefen Abszessen.'
    ],
    red_flags: [
      'Starke Schmerzen, die in keinem Verhältnis zum äußeren Hautbefund stehen (Frühwarnzeichen der NSTI)',
      'Subkutane Krepitation (Hautknistern), Hautnekrosen, Blasenbildung oder Gefühlsverlust (Anästhesie durch Nervennekrose)',
      'SIRS-Kriterien oder septischer Schock (Hypotonie, Serum-Laktat >2 mmol/L, Verwirrtheit)',
      'Positiver Sonde-auf-Knochen-Test (Probe-to-Bone) mit ertastbarem Knochen beim diabetischen Fußulkus',
      'Akute Monoarthritis mit Unfähigkeit zur aktiven oder passiven Gelenkbewegung (Notfall Septische Arthritis)',
      'Progressive neurologische Defizite (Paresen, Blasen-/Mastdarmstörung) bei Verdacht auf Spondylodiszitis (Epiduralabszess)'
    ],
    special_populations: 'Diabetiker: Polyneuropathie maskiert Schmerzen; pAVK beeinträchtigt die Wundheilung—niedrige Schwelle für Sonde-auf-Knochen-Test und MRT. Senioren & Immunsupprimierte: Häufig ohne Fieber oder klassische Leukozytose. i.v.-Drogenkonsumenten: Hohe Inzidenz von CA-MRSA, Septischer Arthritis, Spondylodiszitis und Endokarditis.',
    teaching_tip: 'Bei purulenten Infektionen ist die Inzision & Drainage primär! Bei NSTI rettet die chirurgische Quellkontrolle Leben! Bei Knochen- und Gelenkinfektionen (Osteomyelitis, Septische Arthritis, Spondylodiszitis) ist ein frühzeitiger oraler Antibiotika-Wechsel nach 7–10 Tagen i.v.-Therapie (OVIVA-Studie) einer 6-wöchigen i.v.-Gabe ebenbürtig.'
  },
  tables: [
    {
      title: 'Leitlinien-Zusammenfassung & Differentialdiagnose wichtiger Haut-, Weichteil-, Knochen- und Gelenkinfektionen',
      headers: ['Erkrankung', 'Erreger-Spektrum', 'Diagnostischer Goldstandard', 'Leitlinien-Kriterien', 'Kalkulierte Antibiose', 'Chirurgische / Interventionelle Quellkontrolle'],
      rows: [
        ['Nekrotisierende Fasziitis (NSTI)', 'Typ I: Polymikrobiell; Typ II: GAS, S. aureus; Typ III: Vibrio/Clostridium', 'Chirurgische Exploration ("Finger-Test") & Gewebebiopsie', 'WSES 2024 / AWMF: Notfall-Debridement <6-12h; LRINEC-Score >=6/8', 'Pip/Tazo 4,5g q6h + Vancomycin 15-20mg/kg + Clindamycin 900mg q8h i.v.', 'Sofortiges Notfall-Debridement + chirurgische Re-Evaluation <24h'],
        ['Erysipel', 'Streptococcus pyogenes (GAS) >> Gruppe B/C/G Streptokokken', 'Klinisch: Scharf begrenzte, erhabene, flammenförmige Rötung', 'AWMF S2k / IDSA: Nicht-purulente oberflächliche Infektion; 7-10d p.o.', 'Penicillin V 1,5–3 Mio. IE p.o. q8h oder Penicillin G 5 Mio. IE i.v. q6h', 'Keine Intervention nötig (Eintrittspforte sanieren, Extremität hochlagern)'],
        ['Phlegmone / Zellulitis', 'Streptococcus pyogenes, MSSA, MRSA', 'Klinisch: Unscharf begrenzte, diffuse Rötung, Überwärmung, Ödem', 'IDSA 2024 / AWMF: 5–7 Tage Therapiedauer bei Ansprechen ausreichend', 'Flucloxacillin 1g p.o. q6h / Cefazolin 2g i.v. q8h (+ Vanco/TMP-SMX bei MRSA)', 'Extremität hochlagern; Drainage nur bei sekundärer Abszedierung'],
        ['Impetigo contagiosa', 'S. aureus (bullös & nicht-bullös), S. pyogenes', 'Klinisch: Honiggelbe Krusten oder schlaffe Blasen', 'AWMF: Topische Therapie bei leichten Formen (<5 Läsionen); p.o. bei bullöser Form', 'Mupirocin 2% Salbe 2-3x/T x 5d ODER Cefaclor / Cephalexin p.o. x 7d', 'Lokale Wundhygiene und vorsichtiges Ablösen der Krusten'],
        ['Hautabszess / Furunkel', 'Staphylococcus aureus (MSSA & MRSA)', 'Klinisch & Bedside-Sonographie (Fluktuation)', 'AWMF / IDSA: Primäre Therapie ist Inzision & Drainage; Antibiose bei SIRS', 'Inzision & Drainage allein (TMP-SMX / Doxycyclin p.o. nur bei SIRS)', 'Primäre Inzision & Drainage (I&D) + ausgiebige Spülung'],
        ['Diabetisches Fußsyndrom (DFS)', 'Leicht: Monomikrobiell. Mittelschwer/Schwer: Polymikrobiell + Anaerobier', 'Klinische Infektionszeichen + Gewebebiopsie + Sonde-auf-Knochen-Test', 'IWGDF 2023 / AWMF: Stadieneinteilung; Probe-to-Bone-Test für Osteomyelitis', 'Amox/Clav p.o. (Leicht) oder Pip/Tazo 4,5g i.v. q6h + Vanco (Mittelschwer/Schwer)', 'Chirurgisches Debridement, Druckentlastung, Revascularisierung'],
        ['Dekubitus', 'Sekundäre Kolonisierung / Polymikrobielle Mischinfektion', 'Klinische Stadieneinteilung (NPIAP Grad 1-4 / DTPI)', 'NPIAP 2023: Systemische Antibiose NUR bei Zellulitis, Sepsis, Osteomyelitis', 'Keine systemischen Antibiotika bei uninfizierten Wunden! (Pip/Tazo nur bei Sepsis)', 'Debridement von Nekrosen + Repositionierung q2h'],
        ['Osteomyelitis', 'Staphylococcus aureus (MSSA/MRSA), S. epidermidis', 'Knochenbiopsie-Kultur & Histologie + MRT', 'AWMF / OVIVA-Studie: 4-6 Wochen Gesamttherapie; Orale Umstellung ebenbürtig', 'Vancomycin 15-20mg/kg i.v. + Ceftriaxon 2g i.v. q24h (Frühe orale Umstellung)', 'Chirurgisches Debridement von avaskulärem Knochen (Sequestrektomie)'],
        ['Septische Arthritis', 'Staphylococcus aureus, S. pyogenes, N. gonorrhoeae', 'Diagnostische Arthrozentese (Gelenk-Leukozyten >50.000/µL)', 'AWMF / BSH: Sofortige Notfall-Gelenkdrainage + i.v. Antibiose', 'Vancomycin 15-20mg/kg i.v. + Ceftriaxon 2g i.v. q24h x 3-4 Wochen', 'Notfall-Gelenkdrainage (Arthroskopische Spülung oder Nadelaspiration)'],
        ['Spondylodiszitis', 'Staphylococcus aureus, E. coli, Streptokokken', 'Kontrastmittel-MRT der Wirbelsäule + Blutkulturen / CT-Biopsie', 'AWMF / IDSA: 6 Wochen gezielte Antibiose + MRT-Verlaufskontrolle', 'Vancomycin + Ceftriaxon 2g i.v. q24h (6W Gesamt; frühe orale Umstellung)', 'OP bei neurologischem Defizit, Instabilität oder Epiduralabszess']
      ]
    }
  ],
  diseases: [
    {
      id: 'necrotizing_fasciitis',
      name: 'Nekrotisierende Fasziitis (Nekrotisierende Weichteilinfektion - NSTI)',
      pathogen: {
        type: 'Bakterium',
        name: 'Typ I: Polymikrobiell (Aerobier + Anaerobier); Typ II: Monomikrobiell (<i>Streptococcus pyogenes</i> / GAS, <i>Staphylococcus aureus</i>); Typ III: <i>Vibrio vulnificus</i>, <i>Clostridium perfringens</i>',
        gram: 'Gemischt',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: '0,4–1,0 / 100.000 jährlich; hohe Mortalität (20–40% trotz Therapie)',
        risk_groups: ['Typ I: Diabetes mellitus, Adipositas, pAVK, Leberzirrhose, Immunsuppression', 'Typ II: Junge Gesunde, stumpfes Trauma, Operationen, Windpocken, i.v.-Drogenkonsum', 'Typ III: Meerwasserexposition, rohe Meeresfrüchte, Lebererkrankungen'],
        seasonality: 'Keine (Vibrio vulnificus gehäuft im warmen Sommerspätjahr)',
        transmission: 'Direkte Inokulation durch minimale Hautläsion, OP-Wunden, Trauma oder hämatogene Streuung'
      },
      pathomechanism: {
        steps: [
          'Eintritt: Bakterien dringen in das subkutane Gewebe und die gefäßarmen Faszienstrukturen ein.',
          'Toxin- & Enzymfreisetzung: Exotoxine (GAS SpeA/B/C, Clostridien-Alpha-Toxin, PVL) verursachen direkte Gewebsdestruktion, Kapillarthrombosen und ausgeprägtes Ödem.',
          'Ischämische Nekrose: Mikrovaskuläre Thrombosen führen zur kolliquationsnekrotischen Zerstörung von Fettgewebe und Faszien. Durch Nervenzerstörung entsteht eine lokale Anästhesie (Spätzeichen).',
          'Systemische Toxizität & Schock: Exotoxin-Freisetzung führt zum Streptokokken-/Staphylokokken-Schocksyndrom (STSS) und Multiorganversagen.'
        ],
        virulence_factors: ['GAS M-Protein', 'Streptokokken-Pyrogene Exotoxine (SpeA/B/C)', 'Panton-Valentine-Leukozidin (PVL)', 'Clostridien-Alpha-Toxin', 'Hyaluronidase']
      },
      clinical: {
        incubation: 'Stunden bis 2–3 Tage nach Trauma oder OP',
        onset: 'Hyperakut, fulminant',
        symptoms: [
          { name: 'Frühwarnzeichen', description: 'Extremer, quälender Schmerz, der in keinem Verhältnis zum anfangs noch unauffälligen Hautbefund steht. Patient zeigt hohes Fieber und septisches Bild.', severity: 'severe' },
          { name: 'Fortgeschrittener Hautbefund', description: 'Hautverfärbung von hellrot zu livid/grau, Blasenbildung (Bullae), Hautnekrose, Gewebskrepitation (Gas im Gewebe) und lokale Anästhesie durch Nervenzerstörung.', severity: 'severe' },
          { name: 'Systemischer toxischer Schock', description: 'Refraktäre Hypotonie, Tachykardie, hohes Fieber, Verwirrtheit, Oligurie und Multiorganversagen.', severity: 'severe' }
        ],
        physical_exam: [
          'Schmerzen unverhältnismäßig stark zum äußeren Befund (Wichtigstes Frühzeichen!)',
          'Holzartige, pralle Gewebsinduration weit über die Rötung hinaus',
          'Hautentwicklung: Erythem -> Livide Diskoloration -> Blasenbildung -> Hautgangrän',
          'Gewebsanästhesie (Gefühlsverlust im betroffenen Bereich durch Nervennekrose)',
          'Krepitation (tastbares Hautknistern, besonders bei Typ I und Clostridien)',
          'Systemische Toxizität: Fieber, Tachykardie, Hypotonie, Verwirrtheit'
        ],
        complications: ['Septischer Schock & Toxisches Schocksyndrom (STSS)', 'Disseminierte intravasale Koagulopathie (DIC)', 'Multiorganversagen (MODS)', 'Amputation', 'Tod (20–40% behandelt, 100% unbehandelt)']
      },
      diagnostics: {
        laboratory: [
          { test: 'LRINEC-Score (Laboratory Risk Indicator for Necrotizing Fasciitis)', finding: 'Score >=6 deutet auf Verdacht, >=8 auf hohe Wahrscheinlichkeit hin (berechnet CRP, Leukozyten, Hb, Na, Kreatinin, Glukose)', interpretation: 'Achtung: Der LRINEC-Score hat eine mäßige Sensitivität (~60-70%); ein NIEDRIGER Score schließt eine NSTI NICHT aus!' },
          { test: 'Laktat & Blutgasanalyse', finding: 'Deutlich erhöhtes Laktat (>2-4 mmol/L), metabolische Azidose', interpretation: 'Schwere Gewebehypoperfusion und anärober Stoffwechsel' },
          { test: 'Blutbild & Nierenwerte', finding: 'Ausgeprägte Leukozytose (>20.000/µL) mit Linksverschiebung; erhöhtes Kreatinin', interpretation: 'Systemische Infektion und akutes Nierenversagen' }
        ],
        imaging: [
          { modality: 'Kontrastmittel-CT', finding: 'Faszienverdickung, Flüssigkeit entlang der Faszien, subkutanes Gas (hohe Spezifität)', significance: 'Beste Bildgebung, DARF DIE NOTFALL-OP BEI KLINISCHEM VERDACHT ABER NIEMALS VERZÖGERN!' },
          { modality: 'Röntgenaufnahme', finding: 'Weichteilgas-Schatten', significance: 'Geringe Sensitivität, Spätzeichen' }
        ],
        microbiology: [
          { test: 'Chirurgischer "Finger-Test" am Krankenbett', finding: 'Ausbleiben des Faszienwiderstands bei stumpfer Präparation, keine Blutung, grau-trübe "Spülwasser"-Flüssigkeit', significance: 'Bedside-Goldstandard zur Befundsicherung' },
          { test: 'Intraoperative Gewebebiopsie & Gram-Färbung', finding: 'Polymikrobielle Erreger oder Gram-positive Kokken, Fasziennekrose', significance: 'Goldstandard zur Erregerbestimmung' },
          { test: 'Blutkulturen (2 Paar)', finding: 'Positiv bei >60% der Typ-II-Fälle (GAS)', significance: 'Sichert bakterielle Streuung' }
        ],
        scores: ['LRINEC-Score', 'FGSI (Fournier Gangrene Severity Index)']
      },
      calculators: [
        {
          name: 'LRINEC-Score - Risiko für nekrotisierende Fasziitis',
          items: [
            { label: 'CRP >= 150 mg/L', points: 4 },
            { label: 'Leukozyten 15 - 25 x 10^9/L', points: 1 },
            { label: 'Leukozyten > 25 x 10^9/L', points: 2 },
            { label: 'Hämoglobin < 13,5 g/dL', points: 1 },
            { label: 'Hämoglobin < 11,0 g/dL', points: 2 },
            { label: 'Natrium < 135 mmol/L', points: 2 },
            { label: 'Serum-Kreatinin > 141 µmol/L (1,6 mg/dL)', points: 2 },
            { label: 'Glukose > 10 mmol/L (180 mg/dL)', points: 1 }
          ],
          interpretation: [
            { min: 0, max: 5, text: 'Niedriges Risiko (<50% Wahrscheinlichkeit). Bei hohem klinischen Verdacht trotzdem chirurgisches Konsil!' },
            { min: 6, max: 7, text: 'Mittleres Risiko (50-75% Wahrscheinlichkeit). Umgehende chirurgische Evaluation.' },
            { min: 8, max: 13, text: 'Hohes Risiko (>75% Wahrscheinlichkeit). SOFORTIGE chirurgische Notfall-Exploration und i.v.-Breitspektrum-Antibiose!' }
          ]
        }
      ],
      differential: [
        { disease: 'Schwere Phlegmone / Zellulitis', distinguishing: 'Keine extremen Schmerzen außer Verhältnis, kein Fasziengas, intakte Hautsensibilität, langsamerer Verlauf' },
        { disease: 'Pyomyositis', distinguishing: 'Infektion auf Muskelbäuche beschränkt; MRT unterscheidet' },
        { disease: 'Clostridien-Gasbrand', distinguishing: 'Dominierende Muskelnekrose (Myonekrose), süßlich-fauliger Geruch, massive Gasbildung' },
        { disease: 'Tiefe Venenthrombose (TVT)', distinguishing: 'Schwellung und Schmerz vorhanden, aber kein Fieber, keine Hautnekrose, Doppler positiv' }
      ],
      therapy: {
        guidelines: ['WSES 2024 / AWMF S2k Leitlinie: Sofortiges radikales chirurgisches Debridement (<6-12h) + kalkulierte i.v.-Dreifach-Antibiose + geplante Re-Operation ("Second Look") innerhalb von 24h.'],
        empirical: {
          outpatient: [
            { drug: 'KEINE AMBULANTE THERAPIE!', dose: 'SOFORTIGER NOTFALL-TRANSPORT IN OP/ITS', duration: '-', note: 'Chirurgischer Notfall! Jede Stunde Verzögerung erhöht die Mortalität.' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4,5 g i.v. q6h', duration: 'Bis zur chirurgischen Sanierung', note: 'Breitspektrum gegen Gram-positive, Gram-negative und Anaerobier' },
            { drug: '+ Vancomycin', dose: '15-20 mg/kg i.v. q8-12h', duration: '', note: 'MRSA-Abdeckung' },
            { drug: '+ Clindamycin', dose: '900 mg i.v. q8h', duration: '', note: 'ESSENTIELLER Antitoxineffekt: Hemmt die bakterielle Ribosomen-Proteinsynthese und Toxinbildung (GAS SpeA/B, PVL)' }
          ],
          icu: [
            { drug: 'Meropenem', dose: '1,0 g i.v. q8h', duration: '', note: 'Alternative zu Pip/Tazo bei schwerem Schock oder Penicillinallergie' },
            { drug: '+ Vancomycin + Clindamycin', dose: 'Standarddosierung i.v.', duration: '', note: 'Kalkulierte Dreifachkombination' },
            { drug: 'Intravenöses Immunglobulin (IVIG)', dose: '1 g/kg an Tag 1, dann 0,5 g/kg/Tag an Tag 2-3', duration: '3 Tage gesamt', note: 'Adjunkts bei Streptokokken-Schocksyndrom (STSS) zur Neutralisierung zirkulierender Superantigene' }
          ]
        },
        targeted: 'Nach intraoperativem Grambefall & Kultur. Typ II GAS: Penicillin G (5 Mio. IE i.v. q6h) + Clindamycin (900mg i.v. q8h). Typ III Vibrio: Ceftriaxon (2g i.v. q24h) + Doxycyclin (100mg p.o./i.v. q12h).',
        supportive: ['SOFORTIGES radikales chirurgisches Debridement (innerhalb von 6-12h obligat!)', 'Geplante chirurgische Re-Exploration (Second-Look-OP) innerhalb von 24 Stunden', 'Aggressive i.v.-Flüssigkeitsresuszitierung', 'Vasopressoren (Noradrenalin) bei septischem Schock', 'Hyperbare Sauerstofftherapie (HBOT) (nur adjuvant, darf OP niemals verzögern!)'],
        prevention: ['Metiakulöse Wundversorgung', 'Aseptische OP-Technik', 'Gute Blutzuckereinstellung bei Diabetikern']
      },
      guidelines: {
        diagnosis: [
          'Die klinische Diagnose (Schmerz außer Verhältnis) erfordert die sofortige chirurgische Exploration.',
          'Der chirurgische "Finger-Test" bringt am Krankenbett sofortige Klarheit.',
          'Niemals auf Bildgebung oder den LRINEC-Score warten!'
        ],
        treatment_indications: [
          'Sofortige Notfall-OP bei jedem begründeten Verdacht.',
          'Kalkulierte Dreifach-Antibiose vor und während der Operation.'
        ],
        first_line: [
          'Chirurgisches Debridement + (Piperacillin/Tazobactam oder Meropenem) + Vancomycin + Clindamycin i.v.'
        ]
      },
      prognosis: {
        mortality: '20–40% trotz optimaler OP und Intensivmedizin; 100% ohne Operation',
        prognostic_scores: ['LRINEC-Score', 'FGSI'],
        factors: 'Chirurgische Verzögerung >12 Stunden, hohes Alter, Stamm-/Kopf-Hals-Lokalisation, septischer Schock'
      }
    },
    {
      id: 'erysipelas',
      name: 'Erysipel (Wundrose)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Streptococcus pyogenes</i> (Gruppe-A-Streptokokken [GAS] >90%), seltener Gruppe B, C oder G Streptokokken',
        gram: 'Gram-positiv',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: 'Häufige oberflächliche Weichteilinfektion, 10–100 / 100.000 pro Jahr',
        risk_groups: ['Ältere Erwachsene', 'Säuglinge und Kleinkinder', 'Chronisches Lymphödem', 'Chronisch-venöse Insuffizienz', 'Adipositas', 'Tinea pedis / interdigitale Hauteinrisse'],
        seasonality: 'Leichter Gipfel im Winter und Frühjahr',
        transmission: 'Inokulation über minimale Hautverletzungen (Mazeration, Tinea pedis, Kratzer)'
      },
      pathomechanism: {
        steps: [
          'Eintritt: GAS dringen über Hautläsionen in die obere Dermis und oberflächlichen Lymphgefäße ein.',
          'Lymphatische Ausbreitung: Schnelle Erregervermehrung und lymphatische Ausbreitung erzeugen den scharf begrenzten, erhabenen, flammenförmigen Randsaum.',
          'Exotoxinwirkung: Pyrogene Exotoxine führen zu lokaler Gefäßerweiterung, Ödem und systemischem Fieber.'
        ],
        virulence_factors: ['GAS M-Protein', 'Streptolysin O und S', 'Hyaluronidase', 'Streptokinase']
      },
      clinical: {
        incubation: '1 bis 4 Tage',
        onset: 'Akut, plötzlicher Beginn',
        symptoms: [
          { name: 'Hautveränderung', description: 'Plötzliche flammenförmige, leuchtend rote, geschwollene, warme und schmerzhafte Hautläsion mit scharfem, erhabenem Rand. Am häufigsten an Unterschenkeln (80%) und Gesicht (15% - Milian-Ohrzeichen).', severity: 'severe' },
          { name: 'Systemsymptome', description: 'Hohes Fieber (38,5–40°C), Schüttelfrost, Kopfschmerzen und Krankheitsgefühl gehen der Hautrötung oft um Stunden voraus.', severity: 'moderate' }
        ],
        physical_exam: [
          'Leuchtend rote, glänzende, indurierte Plaque',
          'Scharfe, stufenförmig erhabene Begrenzung (Unterscheidung zur Phlegmone)',
          'Milian-Ohrzeichen (Ohrbeteiligung spricht für Erysipel wegen fehlenden tiefen Subkutangewebes)',
          'Regionale schmerzhafte Lymphknotenschwellung und Lymphangitis (rote Straßen)',
          'Zehenzwischenräume auf Tinea pedis untersuchen (Eintrittspforte!)'
        ],
        complications: ['Bullöses Erysipel', 'Übergang in tiefere Phlegmone oder Abszess', 'Rezidivierendes Erysipel mit chronischem Lymphödem (Elephantiasis nostras verrucosa)', 'Poststreptokokken-Glomerulonephritis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Leukozytose (12.000–18.000/µL) mit Neutrophilie', interpretation: 'Akute bakterielle Infektion' },
          { test: 'C-reaktives Protein (CRP) & BSG', finding: 'Deutlich erhöhtes CRP (>50-100 mg/L)', interpretation: 'Akut-Phase-Antwort' },
          { test: 'Blutkulturen', finding: 'In <5% der Fälle positiv', interpretation: 'Nur bei schwerer Toxizität oder Immunsuppression indiziert' }
        ],
        imaging: [
          { modality: 'Duplex-Sonographie', finding: 'Ausschluss einer tiefen Venenthrombose (TVT) bei starker Unterschenkelschwellung', significance: 'Klinische Diagnose; Bildgebung primär nicht nötig' }
        ],
        microbiology: [
          { test: 'Hautoberflächenabstrich', finding: 'Geringe Ausbeute außer bei punktierter Blasenflüssigkeit', significance: 'Bestätigung von Gruppe-A-Streptokokken' }
        ]
      },
      differential: [
        { disease: 'Phlegmone / Zellulitis', distinguishing: 'Tiefere Gewebebeteiligung, unscharfe Begrenzung, flacher nicht erhabener Rand' },
        { disease: 'Herpes zoster', distinguishing: 'Dermatombeschränkte schmerzhafte Bläschen auf erythematösem Grund' },
        { disease: 'Kontaktdermatitis', distinguishing: 'Starker Juckreiz, kein Fieber, Allergenkontakt in der Anamnese' },
        { disease: 'Erythema migrans (Lyme-Borreliose)', distinguishing: 'Zentrifugal fortschreitende Wanderröte mit zentraler Abblassung, Zeckenstich' }
      ],
      therapy: {
        guidelines: ['AWMF S2k Leitlinie: Erste Wahl ist eine gezielte Antibiose gegen Gruppe-A-Streptokokken. Eine Abdeckung von S. aureus oder MRSA ist beim klassischen Erysipel primär NICHT erforderlich.'],
        empirical: {
          outpatient: [
            { drug: 'Penicillin V (Phenoxymethylpenicillin)', dose: '1,5–3 Mio. IE p.o. q8h', duration: '7 bis 10 Tage', note: 'Erste Wahl bei leichtem Erysipel' },
            { drug: 'Amoxicillin', dose: '500 mg – 1000 mg p.o. q8h', duration: '7 bis 10 Tage', note: 'Alternative orale Erstlinientherapie' },
            { drug: 'Cefaclor / Cephalexin', dose: '500 mg p.o. q8h / q6h', duration: '7 bis 10 Tage', note: 'Erste Wahl bei nicht-allergischer Penicillin-Unverträglichkeit' },
            { drug: 'Clindamycin', dose: '300 mg – 450 mg p.o. q8h', duration: '7 bis 10 Tage', note: 'Bei echter Penicillinallergie (Typ I)' }
          ],
          inpatient: [
            { drug: 'Penicillin G (Benzylpenicillin)', dose: '5 Mio. IE i.v. q6h', duration: '7 bis 10 Tage (oralisieren bei Entfieberung)', note: 'Erste Wahl i.v. bei schwerem oder stationärem Erysipel' },
            { drug: 'Cefazolin', dose: '1 – 2 g i.v. q8h', duration: '7 bis 10 Tage', note: 'Bevorzugte i.v.-Alternative bei Penicillin-Allergie' },
            { drug: 'Ceftriaxon', dose: '1 – 2 g i.v. q24h', duration: '7 bis 10 Tage', note: 'Einmal tägliche i.v.-Gabe' }
          ]
        },
        targeted: 'Streptococcus pyogenes ist durchgehend Penicillin-sensibel.',
        supportive: ['Konsequente Hochlagerung der Extremität über Herzniveau (reduziert Ödem)', 'Kühlende feuchte Umschläge', 'Schmerztherapie und Antipyretika (Paracetamol/Ibuprofen)', 'Sanierung der Eintrittspforte (Tinea pedis mit Miconazol/Terbinafin topisch behandeln)'],
        prevention: ['Sanierung von Eintrittspforten (Tinea pedis, Hautrhagaden)', 'Kompressionstherapie bei chronisch-venösem Ödem (nach Abklingen der akuten Entzündung!)', 'Secondary Prophylaxe: Benzathin-Penicillin G 1,2 Mio. IE i.m. alle 3–4 Wochen bei >=3 Erysipelen/Jahr']
      },
      guidelines: {
        diagnosis: [
          'Klinische Diagnose anhand leuchtend roter, erhabener, scharf begrenzter Plaque mit hohem Fieber.',
          'Routineabstriche sind nicht erforderlich.'
        ],
        treatment_indications: [
          'Erfordert schmalspurige anti-streptokokkale Antibiose.',
          'Stationäre Aufnahme bei hoher Toxizität, Gesichtsbeteiligung oder Lymphödem.'
        ],
        first_line: [
          'Oral Penicillin V oder Amoxicillin; i.v. Penicillin G bei schweren Fällen.'
        ]
      },
      prognosis: {
        mortality: '<1% bei rechtzeitiger Antibiotikagabe',
        prognostic_scores: ['Keine'],
        factors: 'Hohe Rezidivrate (20–30%) bei unbehandeltem Lymphödem oder Tinea pedis'
      }
    },
    {
      id: 'cellulitis',
      name: 'Phlegmone (Cellulitis)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Streptococcus pyogenes</i> (GAS) und <i>Staphylococcus aureus</i> (MSSA & MRSA)',
        gram: 'Gram-positiv',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: 'Häufige tiefe Weichteilinfektion (~200 / 100.000 jährlich)',
        risk_groups: ['Diabetes mellitus', 'Adipositas', 'pAVK', 'Chronisches Lymphödem', 'Zustand nach früheren Phlegmonen', 'Hautbarrierestörung (Trauma, Ulzera, Ekzem, i.v.-Drogen)'],
        seasonality: 'Gehäuft in den Sommermonaten',
        transmission: 'Bakterielle Invasion in tiefe Dermis und Subkutis über Hautläsionen'
      },
      pathomechanism: {
        steps: [
          'Invasion: Erreger dringen über Hautläsionen in tiefe Dermis- und Subkutanschichten ein.',
          'Diffuse Ausbreitung: Bakterien bilden Hyaluronidase und Gewebsenzyme, was eine diffuse horizontale und vertikale Gewebsausbreitung erlaubt (im Gegensatz zum lymphatisch begrenzten Erysipel).',
          'Entzündungskaskade: Neutrophilen-Rekrutierung, Zytokin-Freisetzung, Kapillarleckage und Gewebsödem.'
        ],
        virulence_factors: ['Streptokokken-M-Protein & Toxine', 'Staphylokokken-Koagulase & Alpha-Toxin', 'PVL (bei CA-MRSA)']
      },
      clinical: {
        incubation: '1 bis 3 Tage',
        onset: 'Akut über 24–48 Stunden',
        symptoms: [
          { name: 'Progressives Erythem', description: 'Unscharf begrenzte, flache, sich ausbreitende Rötung, Überwärmung, Schwellung und Druckschmerzhaftigkeit (meist an den Unterschenkeln).', severity: 'moderate' },
          { name: 'Systemische Symptome', description: 'Mäßiges Fieber, Krankheitsgefühl, lymphatische Begleitreaktion (rote Streifen / Lymphangitis).', severity: 'moderate' }
        ],
        physical_exam: [
          'Sich ausbreitende Rötung mit unscharfen, diffusen Rändern',
          'Lokale Wärme, nicht-fluktuierendes Ödem, Druckschmerz',
          'Red Streaks (Lymphangitis) proximal der Läsion',
          'Dellenforderndes Ödem der Extremität',
          'Fehlen von Fluktuation (wenn fluktuierend, als Abszess/MRSA behandeln)'
        ],
        complications: ['Gewebsabszedierung', 'Übergang in nekrotisierende Fasziitis', 'Bakteriämie & Septischer Schock', 'Sekundäres Lymphödem bei Rezidiven', 'Thrombophlebitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Mäßige Leukozytose mit Linksverschiebung', interpretation: 'Entzündungsreaktion' },
          { test: 'CRP / BSG', finding: 'Erhöht', interpretation: 'Nützlich zur Verlaufskontrolle' },
          { test: 'Blutkulturen', finding: 'Positiv bei <5% unkomplizierter Fälle', interpretation: 'Indiziert bei SIRS, Sepsis, Immunsuppression' }
        ],
        imaging: [
          { modality: 'Bedside-Sonographie (POCUS)', finding: 'Subkutanes "Kopfsteinpflaster"-Muster (Ödem); schließt okkulten Abszess aus', significance: 'Wichtig zum Ausschluss eines drainagewürdigen Abszesses' },
          { modality: 'Duplex-Sonographie', finding: 'Ausschluss einer tiefen Venenthrombose (TVT)', significance: 'Bei einseitiger Unterschenkelschwellung indiziert' }
        ],
        microbiology: [
          { test: 'Abstrich', finding: 'Bei nicht-purulenter Phlegmone NICHT empfohlen', significance: 'Hohe Rate falsch-positiver Besiedlung' }
        ]
      },
      differential: [
        { disease: 'Erysipel', distinguishing: 'Oberflächlich, leuchtend rot, scharf stufenförmig erhaben, hohes Initialfieber' },
        { disease: 'Hautabszess', distinguishing: 'Fluktuierende schmerzhafte Raumforderung; Sonographie zeigt Flüssigkeitsverhalt' },
        { disease: 'Tiefe Venenthrombose (TVT)', distinguishing: 'Wadenschmerz/-schwellung ohne scharfe Erwärmung; Doppler positiv' },
        { disease: 'Stauungsdermatitis', distinguishing: 'Beidseitige chronische Unterschenkelrötung mit Hämosiderin, schmerzlos, kein Fieber' }
      ],
      therapy: {
        guidelines: ['AWMF S2k / IDSA Leitlinie: Kalkulierte Therapie der nicht-purulenten Phlegmone muss Streptokokken und MSSA abdecken. Eine 5–7-tägige Therapie ist bei unkompliziertem Verlauf genauso wirksam wie 10–14 Tage.'],
        empirical: {
          outpatient: [
            { drug: 'Flucloxacillin', dose: '500 mg – 1000 mg p.o. q6h', duration: '5 bis 7 Tage', note: 'Erste Wahl p.o. (deckt Streptokokken & MSSA ab)' },
            { drug: 'Cefaclor / Cephalexin', dose: '500 mg p.o. q8h / q6h', duration: '5 bis 7 Tage', note: 'Erstlinien-Cephalosporin p.o.' },
            { drug: 'Amoxicillin / Clavulansäure', dose: '875/125 mg p.o. q12h', duration: '5 bis 7 Tage', note: 'Breitspektrum-Alternative' },
            { drug: 'Trimethoprim / Sulfamethoxazole (TMP-SMX)', dose: '1-2 DS Tabletten p.o. q12h', duration: '5 bis 7 Tage', note: 'ZUSATZ bei MRSA-Risikofaktoren (penetriertes Trauma, i.v.-Drogen, eitrige Sekrete)' }
          ],
          inpatient: [
            { drug: 'Cefazolin', dose: '1 – 2 g i.v. q8h', duration: '5 bis 7 Tage gesamt', note: 'Erste Wahl i.v. bei stationärer Phlegmone' },
            { drug: 'Ampicillin / Sulbactam', dose: '1,5 – 3,0 g i.v. q8h', duration: '5 bis 7 Tage', note: 'Breitspektrum i.v.' },
            { drug: 'Vancomycin', dose: '15 – 20 mg/kg i.v. q8-12h', duration: '5 bis 7 Tage', note: 'Bei MRSA-Verdacht oder schwerer Penicillinallergie' }
          ]
        },
        targeted: 'Streptokokken -> Penicillin / Cefazolin; MSSA -> Cefazolin / Flucloxacillin; MRSA -> Vancomycin / Linezolid / TMP-SMX / Doxycyclin.',
        supportive: ['Konsequente Hochlagerung der Extremität (essentiell zur Ödemreduktion!)', 'Kühlende Umschläge', 'Sanierung der Eintrittspforte (Tinea pedis, venöses Ekzem)'],
        prevention: ['Hautpflege und Feuchtigkeit', 'Kompressionstherapie bei CVI nach Abklingen der akuten Infektion', 'Rezidivprophylaxe bei >=3 Episoden/Jahr']
      },
      guidelines: {
        diagnosis: [
          'Klinische Diagnose; Bedside-Sonographie zum Abszessausschluss.',
          'Dauer von 5–7 Tagen ist bei gutem Ansprechen ausreichend.'
        ],
        treatment_indications: [
          'Kalkulierte Antibiose gegen Streptokokken und MSSA.',
          'Kurzzeittherapie (5–7 Tage) bevorzugen.'
        ],
        first_line: [
          'Oral Flucloxacillin oder Cefaclor (ambulant); i.v. Cefazolin (stationär).'
        ]
      },
      prognosis: {
        mortality: '<1% bei unkomplizierter Phlegmone',
        prognostic_scores: ['Eron-Klassifikation'],
        factors: 'Verzögerter Therapiebeginn, unbereinigtes Lymphödem'
      }
    },
    {
      id: 'impetigo',
      name: 'Impetigo contagiosa (Borkenflechte)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (Hauptursache der bullösen & nicht-bullösen Form) und <i>Streptococcus pyogenes</i> (GAS)',
        gram: 'Gram-positiv',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: 'Häufigste bakterielle Hautinfektion bei Kindern (2–6 Jahre)',
        risk_groups: ['Kleinkinder in Kita/Schule', 'Warm-feuchtes Klima', 'Einengende Wohnverhältnisse', 'Mikrotraumen, Insektenstiche, Kopfläuse, Krätze', 'Kontaktsport'],
        seasonality: 'Gipfel im Spätsommer und Herbst',
        transmission: 'Direkter Kontakt oder Schmierinfektion über Hände/Gegenstände'
      },
      pathomechanism: {
        steps: [
          'Besiedlung: Erreger besiedeln kleine Hautverletzungen.',
          'Exotoxinwirkung (bullöse Form): S. aureus bildet Exfoliativtoxine A und B (ETA/ETB), die Desmoglein-1 im Stratum granulosum spalten und intraepidermale Blasen erzeugen.',
          'Nicht-bullöse Form: Lokale Bakterienvermehrung führt zu intraepidermalen Pusteln, die aufplatzen und eintrocknende honiggelbe Krusten bilden.'
        ],
        virulence_factors: ['Exfoliativtoxine A und B (ETA/ETB)', 'GAS M-Protein', 'Koagulase']
      },
      clinical: {
        incubation: '1 bis 3 Tage (GAS) bzw. 4 bis 10 Tage (S. aureus)',
        onset: 'Akut',
        symptoms: [
          { name: 'Nicht-bullöse Impetigo (70%)', description: 'Kleine rote Papeln/Bläschen (meist um Mund und Nase), die rasch platzen und charakteristische honiggelbe ("borkige") Krusten auf erythematösem Grund bilden.', severity: 'moderate' },
          { name: 'Bullöse Impetigo (30%)', description: 'Schlaffe, klar oder trüb gefüllte Blasen (1–2 cm), die leicht platzen und dünne braune Krusten hinterlassen. Nikolsky-Zeichen negativ.', severity: 'moderate' },
          { name: 'Juckreiz & Missempfindung', description: 'Mäßiger lokaler Juckreiz; Fieber oder Allgemeinsymptome sind selten.', severity: 'mild' }
        ],
        physical_exam: [
          'Prädilektion im Gesicht (perioral, perinasal) und an den Extremitäten',
          'Klassische honiggelbe, "aufgeklebt" wirkende Krusten',
          'Schlaffe Blasen mit trübem Inhalt (bullöse Form)',
          'Regionale schmerzlose oder mäßig druckschmerzhafte Lymphknoten'
        ],
        complications: ['Echthyma (tiefere ulzerierende Form)', 'Poststreptokokken-Glomerulonephritis (PSGN)', 'Staphylococcal Scalded Skin Syndrome (SSSS bei Neugeborenen)', 'Phlegmone']
      },
      diagnostics: {
        laboratory: [
          { test: 'Klinische Diagnose', finding: 'Honiggelbe Krusten oder schlaffe Blasen', interpretation: 'Ausreichend für Therapiebeginn' }
        ],
        microbiology: [
          { test: 'Abstrich & Kultur', finding: 'Erregernachweis (S. aureus / GAS) und Resistenzbestimmung', significance: 'Indiziert bei ausgedehntem Befall, Therapieversagen oder MRSA-Verdacht' }
        ]
      },
      differential: [
        { disease: 'Herpes simplex (HSV)', distinguishing: 'Gruppierte schmerzhafte Bläschen auf erythematösem Grund, perioral, rezidivierend' },
        { disease: 'Kontaktdermatitis', distinguishing: 'Juckende Papulovesikel, klares Sekret, Allergenexposition' },
        { disease: 'Tinea corporis', distinguishing: 'Anuläre schuppende Plaque mit zentraler Abblassung; KOH-Präparat positiv' }
      ],
      therapy: {
        guidelines: ['AWMF-Leitlinie: Topische Antibiose ist erste Wahl bei lokalisiertem Befall (<5 Läsionen). Systemische orale Antibiose ist ausgedehnten/bullösen Formen oder Kita-Ausbrüchen vorbehalten.'],
        empirical: {
          outpatient: [
            { drug: 'Mupirocin 2% Salbe', dose: '2-3x täglich lokal auftragen', duration: '5 Tage', note: 'Lokaltherapeutikum der 1. Wahl' },
            { drug: 'Retapamulin 1% Salbe', dose: '2x täglich lokal auftragen', duration: '5 Tage', note: 'Topische Alternative ab 9 Monaten' },
            { drug: 'Cefaclor / Cephalexin', dose: '50 mg/kg/Tag p.o. in 3 ED (Erwachsene 500mg p.o. q8h/q6h)', duration: '7 Tage', note: 'Systemische Oraltherapie 1. Wahl bei ausgedehntem/bullösem Befall' },
            { drug: 'Amoxicillin / Clavulansäure', dose: '40-50 mg/kg/Tag p.o. in 2 ED', duration: '7 Tage', note: 'Orale Alternative' }
          ],
          inpatient: [
            { drug: 'Cefazolin', dose: '50-100 mg/kg/Tag i.v.', duration: '7 Tage', note: 'Nur bei schweren Sonderformen/Neugeborenen' }
          ]
        },
        targeted: 'Gezielt nach Erregerbefund.',
        supportive: ['Vorsichtiges Aufweichen und Entfernen der Krusten mit warmer Seifenlösung vor Salbenauftrag', 'Händehygiene und kurze Fingernägel', 'Wiederzulassung zu Kita/Schule 24 Stunden nach Beginn effektiver Therapie', 'Handtücher getrennt benutzen'],
        prevention: ['Behandlung kleiner Hautwunden', 'Gute Händehygiene', 'Sanierung von S.-aureus-Trägern bei Rezidiven']
      },
      guidelines: {
        diagnosis: [
          'Klinische Diagnose anhand der honiggelben Krusten.',
          'Abstrich bei Therapieversagen oder ausgedehntem Befall.'
        ],
        treatment_indications: [
          'Topisch Mupirocin bei lokalisiertem Befall (<5 Läsionen).',
          'Systemisch Cefaclor / Cephalexin bei ausgedehntem oder bullösem Befall.'
        ],
        first_line: [
          'Mupirocin 2% Salbe x 5 Tage OR Cefaclor p.o. x 7 Tage.'
        ]
      },
      prognosis: {
        mortality: 'Sehr gut (<0,1%)',
        prognostic_scores: ['Keine'],
        factors: 'Gutes Ansprechen auf Therapie; Risiko für PSGN beachten'
      }
    },
    {
      id: 'folliculitis',
      name: 'Follikulitis, Furunkel, Karbunkel & Hautabszess',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA Hauptursache); <i>Pseudomonas aeruginosa</i> ("Whirlpool"-Follikulitis)',
        gram: 'Gram-positiv',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: 'Sehr häufige purulente Weichteilinfektionen',
        risk_groups: ['Diabetes mellitus', 'Adipositas', 'Enge Wohnverhältnisse, Kontaktsport (CA-MRSA)', 'Nasale S.-aureus-Besiedlung', 'Rasur, Reibung, enge Kleidung', 'Whirlpool-Nutzung (Pseudomonas)'],
        seasonality: 'Gehäuft bei feucht-warmem Wetter',
        transmission: 'Autoinokulation aus nasaler Besiedlung, direkter Kontakt, kontaminiertes Wasser'
      },
      pathomechanism: {
        steps: [
          'Follikulitis: Oberflächliche auf das Haarfollikelostium beschränkte Infektion mit kleinen perifollikulären Pusteln.',
          'Furunkel: Infektion greift tief auf das gesamte Haarfollikel und umgebende Subkutangewebe über, mit zentraler Gewebsnekrose.',
          'Karbunkel: Verschmelzung mehrerer benachbarter Furunkel mit subkutaner Abszedierung und mehreren Entleerungsgängen.',
          'Hautabszess: Eiteransammlung in Dermis/Subkutis mit Gewebsverflüssigung, Fluktuation und umgebendem Ödem.'
        ],
        virulence_factors: ['Panton-Valentine-Leukozidin (PVL-Toxin bei CA-MRSA)', 'Alpha-Hämolysin', 'Koagulase']
      },
      clinical: {
        incubation: '1 bis 3 Tage',
        onset: 'Akut',
        symptoms: [
          { name: 'Follikulitis', description: 'Multiple kleine (1–3 mm) juckende oder leicht schmerzhafte Pusteln mit rotem Hof, zentriert um Haarfollikel.', severity: 'mild' },
          { name: 'Furunkel & Karbunkel', description: 'Schmerzhafter, fester roter Knoten, der fluktuierend wird und puzig-nekrotischen Inhalt entleert. Karbunkel gehen mit starken Schmerzen und Fieber einher.', severity: 'moderate' },
          { name: 'Hautabszess', description: 'Schmerzhafte, fluktuierende, warme, erythematöse Raumforderung mit zentralem Einschmelzungspunkt.', severity: 'severe' }
        ],
        physical_exam: [
          'Perifollikuläre Pusteln (Follikulitis)',
          'Druckschmerzhafter fester Knoten mit zentraler Pustel (Furunkel)',
          'Große indurierte Plaque mit mehreren einschmelzenden Pusteln (Karbunkel)',
          'Fluktuierende, komprimierbare Raumforderung mit Überwärmung (Abszess)',
          'Regionale Lymphknotenschwellung & Fieber (Karbunkel / Abszess)'
        ],
        complications: ['Ausgedehnte Gewebsdestruktion', 'Bakteriämie und metastatische Streuung (Endokarditis, Septische Arthritis, Spondylodiszitis)', 'Sinus-cavernosus-Thrombose (bei Furunkeln im Gesichts-Dreieck)', 'Rezidivierende Furunkulose']
      },
      diagnostics: {
        laboratory: [
          { test: 'Klinische Diagnose', finding: 'Ausreichend bei einfacher Follikulitis oder kleinem Furunkel', interpretation: 'Keine Laborwerte nötig bei unkompliziertem Befund' },
          { test: 'Blutbild & CRP', finding: 'Leukozytose und CRP-Erhöhung bei Karbunkeln oder Abszessen mit SIRS', interpretation: 'Erfassung der systemischen Reaktion' }
        ],
        imaging: [
          { modality: 'Bedside-Sonographie (POCUS)', finding: 'Anechoischer/hypoechoischer Flüssigkeitsverhalt mit "Wirbel"-Zeichen bei Kompression', significance: 'Goldstandard zur Bestätigung eines drainagewürdigen Abszesses' }
        ],
        microbiology: [
          { test: 'Eiter-Gramfärbung & Kultur', finding: 'Gram-positive Kokken in Haufen (S. aureus); Resistenzbestimmung (MSSA vs. MRSA)', significance: 'OBLIGAT bei Karbunkeln, schweren Abszessen, Rezidiven oder Therapieversagen' }
        ]
      },
      differential: [
        { disease: 'Infizierte Epidermoidzisterne', distinguishing: 'Vorbesthende Zyste mit zentralem Punctum, übelriechender krümeliger Keratininhalt' },
        { disease: 'Hidradenitis suppurativa (Acne inversa)', distinguishing: 'Rezidivierende entzündliche Knoten, Sinustrakte und Narben in Achseln, Leisten oder Intimbereich' },
        { disease: 'Whirlpool-Follikulitis', distinguishing: 'Follikuläre Pusteln im Badeanzugbereich 8–48h nach Whirlpoolnutzung; Erreger Pseudomonas' }
      ],
      therapy: {
        guidelines: ['AWMF / IDSA Leitlinie: Die primäre und definitive Behandlung von Abszessen, Furunkeln und Karbunkeln ist die INZISION & DRAINAGE (I&D). Routinemäßige Antibiotika sind nach vollständiger I&D NICHT indiziert, außer bei definierten Risikokriterien.'],
        empirical: {
          outpatient: [
            { drug: 'Inzision & Drainage (I&D) allein', dose: 'Primärer chirurgischer Eingriff', duration: 'Definitiv', note: 'Haupttherapie unkomplizierter Abszesse!' },
            { drug: 'Trimethoprim / Sulfamethoxazol (TMP-SMX)', dose: '1-2 DS Tabletten p.o. q12h', duration: '5 bis 7 Tage', note: 'Orale Wahl WENN Antibiose indiziert ist (deckt CA-MRSA ab)' },
            { drug: 'Doxycyclin', dose: '100 mg p.o. q12h', duration: '5 bis 7 Tage', note: 'Orale Alternative' },
            { drug: 'Flucloxacillin / Cephalexin', dose: '500 mg p.o. q6h', duration: '5 bis 7 Tage', note: 'Orale Wahl bei nachgewiesenem MSSA' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg i.v. q8-12h', duration: '5 bis 7 Tage', note: 'i.v.-Wahl bei schweren Karbunkeln/Abszessen mit SIRS oder Gesichtslokalisation' },
            { drug: 'Cefazolin', dose: '1 - 2 g i.v. q8h', duration: '5 bis 7 Tage', note: 'i.v.-Wahl bei MSSA' }
          ]
        },
        targeted: 'Nach Kultur. Indikationen für zusätzliche Antibiotika nach I&D: 1) Schwere oder ausgedehnte Infektion (Karbunkel, multiple Stellen); 2) Rasche Progression oder umgebende Phlegmone (>2 cm); 3) Systemzeichen (Fieber, SIRS, Sepsis); 4) Immunsuppression; 5) Risikolokalisation (Gesicht, Hand, Genitale); 6) Extremes Alter.',
        supportive: ['Inzision & Drainage: Ausreichend lange Inzision, stumpfes Eröffnen von Faszien/Kammern, Spülung', 'Feucht-warme Umschläge bei Furunkeln zur Reifung'],
        prevention: ['Eradikationsprotokoll bei rezidivierender Furunkulose: Nasensalbe Mupirocin 2% 2x/T x 5 Tage + Chlorhexidin-Waschung täglich für 5–14 Tage', 'Hygienemaßnahmen']
      },
      guidelines: {
        diagnosis: [
          'Klinische Diagnose; Bedside-Sonographie sichert den Abszessverhalt.',
          'Kultur bei Karbunkeln oder schweren/rezidivierenden Abszessen.'
        ],
        treatment_indications: [
          'Inzision & Drainage ist primär und meist ausreichend.',
          'Systemische Antibiose nur bei SIRS, Begleitphlegmone oder Gesichtslokalisation.'
        ],
        first_line: [
          'Primäre Inzision & Drainage (+ TMP-SMX / Doxycyclin p.o. bei Antibiose-Indikation).'
        ]
      },
      prognosis: {
        mortality: '<0,1% bei unkomplizierten Abszessen',
        prognostic_scores: ['Keine'],
        factors: 'Vollständigkeit der chirurgischen Drainage ist der wichtigste Heilungsfaktor'
      }
    },
    {
      id: 'diabetic_foot',
      name: 'Diabetisches Fußsyndrom (DFS) mit Infektion',
      pathogen: {
        type: 'Polymikrobiell',
        name: 'Leicht: Monomikrobiell (<i>Staphylococcus aureus</i>, <i>Streptococcus agalactiae</i>/Gruppe B); Mittelschwer/Schwer: Polymikrobiell (<i>S. aureus</i>, <i>Enterobacteriaceae</i> [<i>E. coli</i>, <i>Klebsiella</i>, <i>Proteus</i>], <i>Pseudomonas aeruginosa</i>, <i>Bacteroides fragilis</i>, <i>Peptostreptococcus</i>)',
        gram: 'Gemischt',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: '15–25% aller Diabetiker entwickeln im Laufe des Lebens ein Fußulkus; DFS-Infektionen sind die Hauptursache für nicht-traumatische Major-Amputationen',
        risk_groups: ['Diabetische Polyneuropathie (Verlust der Schutzsensibilität)', 'pAVK (Ischämie)', 'Fußdeformitäten (Charcot-Fuß, Hammerzehen)', 'Frühere Ulzera oder Amputationen', 'Schlechte BZ-Einstellung (HbA1c >8%)'],
        seasonality: 'Keine',
        transmission: 'Hautdefekt durch unbemerkte Traumen oder Druckstellen am neuropathisch-ischämischen Fuß'
      },
      pathomechanism: {
        steps: [
          'Neuropathie & Trauma: Sensomotorische Polyneuropathie führt zum Verlust der Schmerzwahrnehmung; schmerzlose Traumen erzeugen Ulzera.',
          'Ischämie & Gestörte Wundheilung: pAVK und Mikrozirkulationsstörung erzeugen Gewebshypoxie und hemmen die Leukozytenfunktion.',
          'Polymikrobielle Infektion: Bakterien besiedeln das Ulkus und bilden Biofilme. Die Infektion breitet sich entlang der Faszien, Sehnen und Gelenke aus.',
          'Osteomyelitis-Entwicklung: Kontinuierlicher Übergreifen auf den Knochen führt zu lokaler Knochennekrose und Abszedierung.'
        ],
        virulence_factors: ['Biofilm-Matrixbildung', 'Polymikrobielle Synergie', 'Proteasen']
      },
      clinical: {
        incubation: 'Subakut oder akut',
        onset: 'Schleichend, bei Infektion rasch progredient',
        symptoms: [
          { name: 'Ulkus & Infektzeichen', description: 'Fußulkus mit eitrigem Sekret, üblem Geruch, umgebendem Erythem, Wärme und Schwellung. Schmerzen können wegen der Neuropathie VÖLLIG FEHLEN!', severity: 'severe' },
          { name: 'Systemische Infektzeichen', description: 'Fieber, Schüttelfrost, Entgleisung des Blutzuckers, Verwirrtheit oder Hypotonie bei schwerem limb- or life-threatening DFS.', severity: 'severe' }
        ],
        physical_exam: [
          'Ulkustiefe, -größe, Eiter, Nekrosen und Geruch beurteilen',
          'Sonde-auf-Knochen-Test (Probe-to-Bone): Einbringen einer sterilen Metallsonde am Ulkusgrund; ertastbarer Knochen weist mit hoher Spezifität (>85%) auf eine Osteomyelitis hin!',
          'Neurologie: Semmes-Weinstein 10g Monofilament-Test',
          'Vaskulär: Fußpulse tasten, Knöchel-Arm-Index (ABI) und Zehendruck (TBI) messen',
          'Prüfen auf tiefen Fußsohlenabszess, Gas oder aufsteigende Lymphangitis'
        ],
        complications: ['Kortikale Knochennekrose & Osteomyelitis (bei bis zu 50% tiefer Ulzera)', 'Tiefer Phlegmone/Abszess der Fußsohle', 'Feuchte Gangrän', 'Major-Amputation (Unter-/Oberschenkel)', 'Sepsis & Tod']
      },
      diagnostics: {
        laboratory: [
          { test: 'Entzündungsparameter (CRP, BSG, Leukozyten)', finding: 'Deutlich erhöhtes CRP und BSG (>70 mm/h korreliert stark mit Osteomyelitis)', interpretation: 'Dient der Schweregradeinschätzung und Verlaufskontrolle' },
          { test: 'HbA1c & Blutzucker', finding: 'Hyperglykämie', interpretation: 'Essentiell für die Stoffwechseleinstellung' }
        ],
        imaging: [
          { modality: 'Röntgen Fuß in 2 Ebenen', finding: 'Kortikalisusur, periostale Reaktion, Knochendestruktion, Weichteilgas', significance: 'Initialdiagnostik bei jedem DFS; Frühveränderungen am Knochen oft erst nach 2-4 Wochen sichtbar' },
          { modality: 'Kontrastmittel-MRT des Fußes', finding: 'Knochenmarködem, Kortikalisdurchbrechung, tiefe Abszesse', significance: 'Goldstandard bei Verdacht auf Osteomyelitis oder tiefen Abszess' }
        ],
        microbiology: [
          { test: 'Tiefe Gewebebiopsie oder Kürettage (nach Wunddebridement)', finding: 'Gram-Färbung, mehraerobe & anaerobe Kultur mit Resistenzgramm', significance: 'OBLIGATER GOLDSTANDARD! Niemals oberflächliche Abstriche unbereinigter Wunden verwenden (erfassen nur Besiedler)!' }
        ],
        scores: ['IWGDF / IDSA DFI-Schweregradeinteilung (Leicht, Mittelschwer, Schwer)', 'PEDIS-Klassifikation']
      },
      differential: [
        { disease: 'Uninfiziertes neuropathisches Ulkus', distinguishing: 'Kein Eiter, Erythem <0,5 cm, keine Erwärmung; reiner Schwielen- oder Druckdefekt' },
        { disease: 'Akute Charcot-Neuroarthropathie', distinguishing: 'Warmer, geschwollener, roter Fuß beim Diabetiker OHNE Hautdefekt oder Wunde; MRT unterscheidet' },
        { disease: 'Ischämischer Ruheschmerz / Trockene Gangrän', distinguishing: 'Schmerzhafte, kalte, schwarze Zehen ohne eitrige Infektion oder Sepsis' }
      ],
      therapy: {
        guidelines: ['IWGDF 2023 / AWMF Leitlinien: Multidisziplinärer Ansatz zwingend: 1) Infektionskontrolle (gezielte Antibiose); 2) Chirurgisches Debridement; 3) Druckentlastung (Off-Loading); 4) Revascularisierung; 5) Blutzuckereinstellung.'],
        empirical: {
          outpatient: [
            { drug: 'Amoxicillin / Clavulansäure', dose: '875/125 mg p.o. q12h (oder 1000mg p.o. TID)', duration: '1 bis 2 Wochen', note: 'Erste Wahl p.o. bei LEICHTEM DFS (oberflächlich, Erythem <2 cm)' },
            { drug: 'Cefaclor / Cephalexin', dose: '500 mg p.o. q8h / q6h', duration: '1 bis 2 Wochen', note: 'Orale Alternative' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4,5 g i.v. q6h', duration: '2 bis 4 Wochen (Weichteil) bzw. 6 Wochen (Osteomyelitis)', note: 'Erste Wahl i.v. bei MITTELSCHWEREM bis SCHWEREM DFS (deckt Pseudomonas & Anaerobier ab)' },
            { drug: 'Ampicillin / Sulbactam', dose: '3,0 g i.v. q6h', duration: '2 bis 4 Wochen', note: 'Erste Wahl i.v. bei mittelschwerem DFS ohne Pseudomonas-Risiko' },
            { drug: '+ Vancomycin', dose: '15 - 20 mg/kg i.v. q8-12h', duration: '', note: 'ZUSATZ bei hohem MRSA-Risiko oder schwerem Verlauf' }
          ],
          icu: [
            { drug: 'Meropenem + Vancomycin', dose: 'i.v. Standarddosierung', duration: '', note: 'Bei schwerem DFS mit septischem Schock' }
          ]
        },
        targeted: 'Nach Gewebebiopsie-Kultur. Dauer: Leichte Weichteilinfektion = 1-2 Wochen; Mittelschwer/Schwer = 2-4 Wochen; Osteomyelitis = 4-6 Wochen (oder 1-2 Wochen nach radikaler Knochenresektion).',
        supportive: ['Druckentlastung: Total Contact Cast (TCC) oder spezieller Entlastungsschuh (CRUCIAL!)', 'Chirurgisches Wunddebridement', 'Gefäßchirurgische Revascularisierung (Angioplastie/Bypass) bei pAVK', 'Insulin-Therapie zur BZ-Optimierung'],
        prevention: ['Tägliche Selbstkontrolle der Füße', 'Diabetikerschutzschuhe und Einlagen', 'Professionelle Podologie', 'Konsequente BZ-Einstellung (HbA1c <7,0%)']
      },
      guidelines: {
        diagnosis: [
          'Diagnose der DFS-Infektion erfolgt klinisch.',
          'Sonde-auf-Knochen-Test und Röntgen bei allen tiefen Ulzera.',
          'Gewebekultur nur aus der Tiefe nach Debridement gewinnen.'
        ],
        treatment_indications: [
          'Uninfizierte Ulzera erhalten KEINE Antibiotika.',
          'Leichtes DFS: Orale Antibiose (Amox/Clav) für 1–2 Wochen.',
          'Mittelschwer/Schwer: i.v. Breitspektrum-Antibiose + chirurgisches Debridement.'
        ],
        first_line: [
          'Oral Amox/Clav (Leicht); i.v. Pip/Tazo + Vancomycin (Mittelschwer/Schwer).'
        ]
      },
      prognosis: {
        mortality: 'Die 5-Jahres-Mortalität nach Major-Amputation beim DFS liegt bei 50–60%',
        prognostic_scores: ['IWGDF-Schweregrad', 'WIfI-Klassifikation'],
        factors: 'Begleitende pAVK, verzögertes chirurgisches Debridement, Osteomyelitis'
      }
    },
    {
      id: 'chronic_ulcer',
      name: 'Chronisches Ulcus cruris (venös, arteriell & gemischt)',
      pathogen: {
        type: 'Indirect',
        name: 'Sekundäre bakterielle Besiedlung & Infektion (<i>Staphylococcus aureus</i>, <i>Pseudomonas aeruginosa</i>, <i>Enterococcus spp.</i>, <i>Proteus mirabilis</i>, Anaerobier)',
        gram: 'Variabel',
        shape: '-'
      },
      epidemiology: {
        incidence: '1–2% der Bevölkerung betroffen; 70–80% Ulcus cruris venosum, 10–15% arteriell, 10–15% gemischt',
        risk_groups: ['Chronisch-venöse Insuffizienz / Z.n. TVT', 'pAVK / Atherosklerose', 'Hohes Alter', 'Adipositas und Bewegungsmangel', 'Herzinsuffizienz'],
        seasonality: 'Keine',
        transmission: 'Nicht-ansteckendes chronisches Gefäßversagen; sekundäre Keimbesiedlung'
      },
      pathomechanism: {
        steps: [
          'Venöses Ulkus: Chronisch-venöse Hypertonie führt zur Mikrozirkulationsstörung, Erythrozytenextravasation (Hämosiderin), Fibrinmanschetten und Gewebshypoxie.',
          'Arterielles Ulkus: Atherosklerotischer Gefäßverschluss verursacht kritische Extremitätenischämie und ischämische Gewebsnekrose.',
          'Biofilm & Chronische Entzündung: Bakterienbiofilme fixieren die Wunde in der Entzündungsphase und verhindern die Re-Epithelisierung.'
        ],
        virulence_factors: ['Biofilm-Matrix', 'Proinflammatorische Bakterien-Endotoxine', 'Erhöhte Matrix-Metalloproteinasen (MMP)']
      },
      clinical: {
        incubation: 'Entwickelt sich schleichend über Monate bis Jahre',
        onset: 'Schleichend, chronisch',
        symptoms: [
          { name: 'Venöses Ulkus', description: 'Flaches, unregelmäßig begrenztes Ulkus an der Gaiter-Zone (Gattungsbereich Innenknöchel), starke Exsudation, umgebende Lipodermatosklerose und Hämosiderose. Mäßiger Schmerz, Besserung bei Hochlagerung.', severity: 'moderate' },
          { name: 'Arterielles Ulkus', description: 'Tiefes, "gestanztes" Ulkus an Zehen, Außenknöchel oder Ferse mit blassem/nekrotischem Wundgrund. Starke ischämische Schmerzen, besonders nachts und bei Hochlagerung.', severity: 'severe' },
          { name: 'Zeichen der aktiven Infektion', description: 'Zunahme der Schmerzen, rasches Größenwachstum, übler Geruch, Eiter, umgebende Phlegmone (>1 cm) oder Fieber.', severity: 'severe' }
        ],
        physical_exam: [
          'Venös: Hyperpigmentation, Varikosis, Ödem, Medialknöchel-Lokalisation',
          'Arteriell: Fehlende Fußpulse, verzögerte Rekapillarisierungszeit (>3s), kühle blasse Haut, Ausfall der Beinhaare',
          'Knöchel-Arm-Index (ABI) zwingend VOR Kompression messen! (ABI 0,9-1,2 normal; ABI <0,8 spricht für pAVK; ABI <0,5 = schwere Ischämie - KOMPRESSION KONTRAINDIZIERT!)'
        ],
        complications: ['Erysipel & Phlegmone', 'Osteomyelitis des darunterliegenden Knochens', 'Marjolin-Ulkus (Maligne Transformation zum Plattenepithelkarzinom)', 'Amputation']
      },
      diagnostics: {
        laboratory: [
          { test: 'Entzündungsparameter (CRP, Leukozyten)', finding: 'Normal bei reiner Besiedlung; erhöht bei aktiver Infektion/Phlegmone', interpretation: 'Differenziert Kolonisierung von echter Infektion' }
        ],
        imaging: [
          { modality: 'Knöchel-Arm-Index (ABI) & Zehendruck (TBI)', finding: 'ABI <0,8 belegt arterielle Genese; ABI 0,9-1,2 mit venösem Reflux belegt venöses Ulkus', significance: 'OBLIGAT VOR Anlage einer Kompressionstherapie!' },
          { modality: 'Duplex-Sonographie (venös & arteriell)', finding: 'Identifiziert Klappeninsuffizienzen oder Gefäßstenosen', significance: 'Steuert Gefäßeingriffe' }
        ],
        microbiology: [
          { test: 'Wundabstrich', finding: 'Mischbesiedlung ist universell', significance: 'ROUTINE-ABSTRICHE UNINFIZIERTER ULCERA SIND KONTRAINDIZIERT! Abstrich nur bei klinischen Infektzeichen.' }
        ]
      },
      differential: [
        { disease: 'Diabetisches Fußulkus', distinguishing: 'Lokalisation an plantarer Druckstelle, neuropathischer Sensibilitätsverlust' },
        { disease: 'Dekubitus', distinguishing: 'Sitz- oder Liegestelle direkt über Knochenvorsprüngen (Kreuzbein, Sitzbein)' },
        { disease: 'Pyoderma gangraenosum', distinguishing: 'Livid-unterminierter Rand, rasch progredient, extrem schmerzhaft, assoziiert mit CED/pA' }
      ],
      therapy: {
        guidelines: ['AWMF / EWMA Leitlinien: 1) Keine Antibiotika bei reiner bakterieller Besiedlung chronischer Wunden! 2) Systemische Antibiotika nur bei aktiver Infektion (Phlegmone, Osteomyelitis, Sepsis); 3) Kausale Therapie steht an 1. Stelle (Kompression venös; Revascularisierung arteriell).'],
        empirical: {
          outpatient: [
            { drug: 'KEINE SYSTEMISCHEN ANTIBIOTIKA FÜR UNINFIZIERTE ULCERA!', dose: '-', duration: '-', note: 'Routine-Antibiotika fördern die Wundheilung NICHT und erzeugen Resistenzen!' },
            { drug: 'Amoxicillin / Clavulansäure', dose: '875/125 mg p.o. q12h', duration: '7 bis 10 Tage', note: 'Oral NUR bei sekundärer Phlegmone oder Wundinfektion' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4,5 g i.v. q6h', duration: '7 bis 14 Tage', note: 'Bei schwerer ulceröser Phlegmone oder Sepsis' }
          ]
        },
        targeted: 'Mikrobiologisch gezielt nur bei aktiver klinischer Infektion.',
        supportive: ['Venöses Ulkus: Mehrlagen-Kompressionstherapie (Kurzzugbinden) WENN ABI >0,8 (Goldstandard!)', 'Arterielles Ulkus: Gefäßchirurgische Revascularisierung (PTA/Bypass); KEINE KOMPRESSION BEI ABI <0,5!', 'Wunddebridement (scharf, enzymatisch) zur Biofilm-Reduktion', 'Hydroaktive Wundauflagen'],
        prevention: ['Konsequente Kompressionstherapie nach Abheilung des venösen Ulkus', 'Kardiovaskuläre Risikoreduktion', 'Regelmäßige Bewegung']
      },
      guidelines: {
        diagnosis: [
          'Venöse vs. arterielle Genese mittels ABI-Messung differenzieren.',
          'Keine Routine-Abstriche uninfizierter Wunden.'
        ],
        treatment_indications: [
          'Antibiotika NUR bei Phlegmone, Sepsis oder Osteomyelitis.',
          'Venöses Ulkus erfordert Kompression; Arterielles Ulkus Revascularisierung.'
        ],
        first_line: [
          'Kompressionstherapie (venös); Gefäßeingriff (arteriell).'
        ]
      },
      prognosis: {
        mortality: 'Hohe Rezidivrate (50–70% innerhalb 12 Monaten) bei fehlender Kompressionstherapie',
        prognostic_scores: ['ABI-Stadieneinteilung'],
        factors: 'Patienten-Compliance bei Kompression, ABI-Ausgangswert'
      }
    },
    {
      id: 'decubitus',
      name: 'Dekubitus (Druckgeschwür)',
      pathogen: {
        type: 'Secondary',
        name: 'Sekundäre bakterielle Besiedlung & polymikrobielle Infektion (<i>Staphylococcus aureus</i>, <i>Escherichia coli</i>, <i>Proteus mirabilis</i>, <i>Pseudomonas aeruginosa</i>, <i>Bacteroides fragilis</i>)',
        gram: 'Variabel',
        shape: '-'
      },
      epidemiology: {
        incidence: 'Betrifft 10–20% aller stationären geriatrischen Patienten und bis zu 30% auf Intensivstationen',
        risk_groups: ['Immobile / bettlägerige Patienten', 'Querschnittlähmung / neurologische Ausfälle', 'Intensivpatienten', 'Inkontinenz (feuchtigkeitsassoziierte Hautschädigung)', 'Mangelernährung & Hypoalbuminämie', 'Hohes Alter'],
        seasonality: 'Keine',
        transmission: 'Ischämischer Gewebsuntergang durch anhaltenden Druck, Scherkräfte und Reibung'
      },
      pathomechanism: {
        steps: [
          'Druck & Ischämie: Anhaltender Kapillardruck (>32 mmHg) über Knochenvorsprüngen komprimiert Mikrogewebsgefäße, was zu Ischämie und Zelltod führt.',
          'Scherkräfte: Scherkräfte verschieben tiefere Gewebsschichten gegen die Haut und scheren Mikrogewäße am Knochen-Muskel-Übergang ab.',
          'Gewebsnekrose: Reperfusionstrauma und Anhäufung toxischer Metaboliten erzeugen eine Vollhautnekrose, die von der Tiefe nach außen durchbricht.',
          'Sekundärinfektion: Besiedlung durch Haut-/Stuhlflora breitet sich in Muskeln und Knochen (Osteomyelitis) aus.'
        ],
        virulence_factors: ['Biofilm-Bildung', 'Polymikrobielle Proteasen']
      },
      clinical: {
        incubation: 'Kann sich bei ununterbrochenem Druck innerhalb von 2 bis 6 Stunden entwickeln!',
        onset: 'Schleichend oder rasch in die Tiefe brechend',
        symptoms: [
          { name: 'Kategorie 1 Dekubitus', description: 'Nicht wegdrückbare Umschriebene Rötung bei intakter Haut über einem Knochenvorsprung (Kreuzbein, Ferse, Sitzbein). Bereich kann schmerzhaft, fest, warm oder kalt sein.', severity: 'mild' },
          { name: 'Kategorie 2 Dekubitus', description: 'Teilverlust der Haut mit exponierter Dermis. Wundgrund rosa/rot, feucht; kann sich auch als intakte oder geplatzte Blase darstellen.', severity: 'moderate' },
          { name: 'Kategorie 3 Dekubitus', description: 'Vollständiger Hautverlust; Subkutanes Fettgewebe ist sichtbar, oft mit Belägen (Slough) und Unterminierungen.', severity: 'severe' },
          { name: 'Kategorie 4 Dekubitus', description: 'Vollständiger Gewebsverlust mit freiliegender Faszien, Muskeln, Sehnen, Knorpel oder Knochen. Hohes Risiko einer begleitenden Osteomyelitis.', severity: 'severe' },
          { name: 'Keiner Kategorie zuordenbar & DTPI', description: 'Unbestimmbar: Von Belägen/Schorf verdeckter Gewebsverlust. Tiefe Gewebeschädigung (DTPI): Dunkelrote oder purpurne Verfärbung bei intakter Haut.', severity: 'severe' }
        ],
        physical_exam: [
          'Prädilektionsstellen untersuchen: Sakrum (30%), Fersen (20%), Sitzbein (15%), Trochanter (10%), Hinterkopf',
          'Länge, Breite, Tiefe und Taschenbildung ausmessen',
          'Wundgrund beurteilen: Granulation, Nekrose, Beläge, Geruch',
          'Umgebende Haut auf Phlegmone (Erythem >1 cm, Überwärmung) prüfen'
        ],
        complications: ['Begleitende Osteomyelitis (bei 30–40% der Kategorie-4-Dekubitalulzera)', 'Bakteriämie und Septischer Schock', 'Subkutane Fistelsysteme', 'Marjolin-Ulkus']
      },
      diagnostics: {
        laboratory: [
          { test: 'Serum-Albumin & Präalbumin', finding: 'Hypoalbuminämie (<3,0 g/dL)', interpretation: 'Zeigt schwere Eiweiß-Mangelernährung an' },
          { test: 'Entzündungsparameter (CRP, Leukozyten)', finding: 'Erhöht bei Phlegmone, Sepsis oder Osteomyelitis', interpretation: 'Erfassung systemischer Komplikationen' }
        ],
        imaging: [
          { modality: 'Röntgenaufnahme', finding: 'Periostreaktion oder Usur unter Kategorie-4-Ulkus', significance: 'Orientierende Diagnostik' },
          { modality: 'Kontrastmittel-MRT', finding: 'Knochenmarködem unter dem Dekubitusgrund', significance: 'Goldstandard zum Nachweis einer begleitenden Osteomyelitis' }
        ],
        microbiology: [
          { test: 'Gewebebiopsie / Tiefenpunktat', finding: 'Polymikrobielle Kultur', significance: 'Indiziert NUR bei Zeichen der Phlegmone, Sepsis oder Osteomyelitis. Routine-Abstriche uninfizierter Dekubitalwunden sind KONTRAINDIZIERT!' },
          { test: 'Klassifikationssysteme', finding: 'NPIAP / EPUAP Stadieneinteilung (Kategorien 1-4, Unbestimmbar, DTPI)' }
        ],
        scores: ['Braden-Skala zur Risikoeinschätzung']
      },
      differential: [
        { disease: 'Feuchtigkeitsassoziierte Hautschädigung (MASD / Inkontinenzdermatitis)', distinguishing: 'Flächiges Erythem in Hautfalten/Perineum, oberflächlich, nicht an Knochenvorsprünge gebunden' },
        { disease: 'Ulcus cruris venosum', distinguishing: 'Gaiter-Zone Unterschenkel, Stauungsdermatitis, Hämosiderin' },
        { disease: 'Diabetic Foot Ulcer', distinguishing: 'Fußdruckstellen bei neuropathischem Diabetiker' }
      ],
      therapy: {
        guidelines: ['NPIAP / EPUAP 2023 Leitlinien: 1) Systemische Antibiotika sind bei uninfiziertem Dekubitus STRIKT KONTRAINDIZIERT! Systemische Antibiotika nur bei Phlegmone, Osteomyelitis oder Sepsis; 2) Haupttherapie ist Druckentlastung, Repositionierung, Debridement und Ernährung.'],
        empirical: {
          outpatient: [
            { drug: 'KEINE SYSTEMISCHEN ANTIBIOTIKA FÜR UNINFIZIERTE DEKUBITALLÄSIONEN!', dose: '-', duration: '-', note: 'Antibiotika heilen keine druckbedingten Gewebsschäden!' },
            { drug: 'Amoxicillin / Clavulansäure', dose: '875/125 mg p.o. q12h', duration: '7 bis 10 Tage', note: 'Oral NUR bei sekundärer Phlegmone' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4,5 g i.v. q6h', duration: '10 bis 14 Tage', note: 'Bei Dekubitus Kategorie 3/4 mit Phlegmone, tiefem Abszess oder Sepsis' }
          ]
        },
        targeted: 'Gezielt nach Knochenbiopsie/Tiefenkultur bei nachgewiesener Osteomyelitis/Sepsis.',
        supportive: ['Druckentlastung: Weichlagerungssysteme oder Wechseldruckmatratzen (OBLIGAT!)', 'Repositionierungsplan: Umlagern alle 2 Stunden; 30-Grad-Schräglagerung', 'Debridement: Chirurgisches scharfes, enzymatisches oder autolytisches Debridement von Nekrosen (AUSNAHME: Stabile, trockene Fersennekrosen NICHT debridieren!)', 'Ernährung: Eiweißreiche Ausgleichsnahrung (1,2-1,5 g/kg/Tag), Zink, Vitamin C'],
        prevention: ['Tägliche Risikoeinschätzung mit der Braden-Skala', 'Hautpflege und Hautschutz bei Inkontinenz', 'Vermeidung von Scherkräften beim Umlagern']
      },
      guidelines: {
        diagnosis: [
          'Einteilung nach NPIAP/EPUAP (Kategorien 1–4, Unbestimmbar, DTPI).',
          'Keine Abstriche uninfizierter Wunden.'
        ],
        treatment_indications: [
          'Antibiotika nur bei Phlegmone, Osteomyelitis oder Sepsis.',
          'Hauptsäulen: Druckentlastung, Umlagern q2h, Debridement, Eiweißzufuhr.'
        ],
        first_line: [
          'Weichlagerung/Wechseldruckmatratze + Umlagern q2h + Chirurgisches Debridement.'
        ]
      },
      prognosis: {
        mortality: 'Krankenhausmortalität bei geriatrischen Patienten mit Kategorie 3-4 Dekubitus liegt bei 20–30%',
        prognostic_scores: ['Braden-Skala', 'NPIAP-Kategorien'],
        factors: 'Mangelernährung, Immobilität, Begleit-Osteomyelitis'
      }
    },
    {
      id: 'osteomyelitis',
      name: 'Osteomyelitis (Knochenmarksentzündung)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA ~50-70% gesamt); <i>Staphylococcus epidermidis</i> (Fremdkörper/Implantate); <i>Pseudomonas aeruginosa</i> (Nagelstich, i.v.-Drogen); <i>Salmonella spp.</i> (Sichelzellkrankheit); Gram-negative Stäbchen',
        gram: 'Gram-positiv',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: '10–20 / 100.000 jährlich; hämatogen überwiegend bei Kindern; per continuitatem (DFS/Trauma) überwiegend bei Erwachsenen',
        risk_groups: ['Diabetes mellitus', 'pAVK', 'Orthopädische Traumata oder Endoprothesen-OPs', 'i.v.-Drogenkonsumenten', 'Hämodialyse-Patienten', 'Sichelzellkrankheit'],
        seasonality: 'Keine',
        transmission: 'Hämatogene Streuung über die Blutbahn, Ausbreitung per continuitatem von Weichteilulzera oder direkte Inokulation (Trauma/OP)'
      },
      pathomechanism: {
        steps: [
          'Invasion: Bakterien gelangen hämatogen, per continuitatem oder direkt in das Knochengewebe.',
          'Entzündung & Ischämie: Bakterien binden über Adhäsine (MSCRAMMs) an die Knochenmatrix. Die Entzündung im starren Knochenraum erhöht den Druck, komprimiert Gefäße und erzeugt eine Knochenischämie.',
          'Nekrose & Sequester: Avaskulärer Knochen stirbt ab und löst sich als dead-bone-Fragment, genannt SEQUESTER.',
          'Totencyste & Biofilm: Das Periost bildet eine Scheide aus neuem Knochengewebe um den Sequester (INVOLUCRUM / Totenlade). Bakterien bilden dichte Schleim-Biofilme auf dem Sequester, geschützt vor Immunzellen und Antibiotika.'
        ],
        virulence_factors: ['Knochen-Adhäsine (MSCRAMMs)', 'Biofilm-Matrixbildung', 'Intraosteozytäre Persistenz (S. aureus SCVs)']
      },
      clinical: {
        incubation: 'Akut (Tage) oder Chronisch (Wochen bis Monate/Jahre)',
        onset: 'Variabel (akut hämatogen vs. chronisch per continuitatem)',
        symptoms: [
          { name: 'Akute Osteomyelitis', description: 'Tiefer, bohrender, lokaler Knochenschmerz, Schwellung, Wärme und Rötung über dem Befund. Druckschmerzhaftigkeit, Schonhaltung/Belastungsverweigerung und hohes Fieber mit Schüttelfrost.', severity: 'severe' },
          { name: 'Chronische Osteomyelitis', description: 'Schleichender Verlauf mit dumpfem Knochenschmerz, lokaler Schwellung und einer chronisch eiternden Fistelöffnung zur Haut. Systemisches Fieber fehlt meist.', severity: 'moderate' }
        ],
        physical_exam: [
          'Umschriebener punktförmiger Knochendruckschmerz',
          'Lokale Schwellung, Rötung und Überwärmung über dem Knochensegment',
          'Belastungsverweigerung oder Schonhaltung der Extremität',
          'Vorhandensein einer chronisch sekretierenden Hautfistel mit Gang zum Knochen',
          'Positiver Sonde-auf-Knochen-Test (Probe-to-Bone) am Ulkusgrund'
        ],
        complications: ['Chronische rezidivierende Osteomyelitis', 'Pathologische Fraktur', 'Begleitende Septische Arthritis', 'Brodie-Abszess', 'Amyloidose (bei jahrzehntelangen Fisteln)', 'Marjolin-Ulkus (Plattenepithelkarzinom im Fistelgang)']
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP & BSG', finding: 'BSG (>50-70 mm/h) und CRP deutlich erhöht', interpretation: 'HOCHSENSITIVE Parameter für Ausgangsbefund und Verlaufskontrolle (CRP fällt bei effektiver Therapie rasch ab)' },
          { test: 'Blutkulturen (2 Paar)', finding: 'Positiv bei ~50% der akuten hämatogenen Fälle', interpretation: 'OBLIGAT VOR Antibiotikabeginn bei hämatogenem Verdacht' }
        ],
        imaging: [
          { modality: 'Röntgenbild in 2 Ebenen', finding: 'In den ersten 10-14 Tagen NORMAL! Später Periostabhebung, Kortikalisusuren, osteolytische Destruktion und Sequester', significance: 'Initialdiagnostik; schließt akute Osteomyelitis in den ersten 2 Wochen NICHT aus' },
          { modality: 'Kontrastmittel-MRT', finding: 'Knochenmarködem (T1 hypointens, T2 hyperintens), Kortikalisdurchbrechung, subperiostaler Abszess', significance: 'GOLDSTANDARD der Bildgebung (Sensitivität und Spezifität >90-95%)' },
          { modality: 'PET-CT / Knochenszintigraphie', finding: 'Erhöhte Traceranreicherung', significance: 'Alternative bei MRT-Kontraindikation (z. B. Herzschrittmacher)' }
        ],
        microbiology: [
          { test: 'Knochenbiopsie & Kultur (CT-gesteuert oder intraoperativ)', finding: 'Histopathologie mit Knochennekrose & Neutrophilen; Kultur & Resistenzbestimmung', significance: 'DEFINITIVER GOLDSTANDARD DER DIAGNOSTIK! MUSS VOR Antibiotikagabe durchgeführt werden (außer bei septischem Schock)' }
        ],
        scores: ['Cierny-Mader Stadieneinteilung der Erwachsenen-Osteomyelitis (Anatomische Typen 1-4; Host-Klassen A-C)']
      },
      differential: [
        { disease: 'Charcot-Neuroarthropathie', distinguishing: 'Diabetische Fußschwellung und Knochenfragmentierung ohne CRP/BSG-Erhöhung oder Fieber; MRT unterscheidet' },
        { disease: 'Schwere Phlegmone', distinguishing: 'Infektion auf Weichteile beschränkt; MRT bestätigt intaktes Knochenmark' },
        { disease: 'Ewing-Sarkom / Osteosarkom', distinguishing: 'Zwiebelschalen- oder Sunburst-Muster im Röntgenbild; Knochenbiopsie sichert Tumor' }
      ],
      therapy: {
        guidelines: ['AWMF Leitlinien & OVIVA-Studie (NEJM 2019): 1) Gezielte Antibiose für insgesamt 4 bis 6 Wochen; 2) Chirurgisches Debridement von avaskulärem Knochen (Sequestrektomie) essentiell; 3) Prinzip der OVIVA-Studie: Ein frühzeitiger Wechsel auf hoch bioverfügbare ORALE Antibiotika (nach 7-10 Tagen i.v.-Induktion) ist einer 6-wöchigen i.v.-Dauertherapie EBENBÜRTIG!'],
        empirical: {
          outpatient: [
            { drug: 'KEINE EMPIRISCHE AMBULANTE THERAPIE OHNE BIOPSIE!', dose: '-', duration: '-', note: 'Stationäre Aufnahme und Knochenbiopsie VOR Antibiotikabeginn erforderlich' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg i.v. q8-12h', duration: '1 bis 2 Wochen i.v., dann orale Umstellung (4-6 Wochen gesamt)', note: 'Erste Wahl i.v. bei MRSA-Verdacht' },
            { drug: '+ Ceftriaxon', dose: '2,0 g i.v. q24h', duration: '4 bis 6 Wochen gesamt', note: 'Kalkulierte Gram-negative Abdeckung' },
            { drug: '+ Cefepim / Pip-Tazo', dose: '2,0 g i.v. q8h / 4,5 g i.v. q6h', duration: '4 bis 6 Wochen gesamt', note: 'Ersatz für Ceftriaxon bei Pseudomonas-Risiko (Nagelstich, Drogen)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'i.v. Standarddosierung', duration: '4 bis 6 Wochen gesamt', note: 'Bei Osteomyelitis mit septischem Schock' }
          ]
        },
        targeted: 'Nach Knochenbiopsie-Kultur: MSSA -> Cefazolin 2g i.v. q8h ODER Flucloxacillin 2g i.v. q6h (oral Cefaclor/Chinolon); MRSA -> Vancomycin i.v. ODER oral Linezolid 600mg 2x/T / TMP-SMX + Rifampicin 300mg 2x/T (Rifampicin wegen Biofilm-Eradikation bei Implantaten). OVIVA-Protokoll: Umstellung auf orales Schema nach 7-10 Tagen i.v. bei klinischer Besserung und gutem p.o.-Substanzprofil (Chinolone, Clindamycin, Linezolid, TMP-SMX).',
        supportive: ['Chirurgische Quellkontrolle: Chirurgisches Debridement von avaskulärem nekrotischem Knochen (Sequestrektomie) und Entfernung lockerer Implantate', 'Immobilisation der Extremität in der Akutphase', 'Hyperbare Sauerstofftherapie (HBOT) (adjuvant bei refraktärer Cierny-Mader C-Host Osteomyelitis)'],
        prevention: ['Sofortiges gründliches chirurgisches Debridement und Spülung offener Frakturen (<6 Stunden)', 'Aseptische OP-Technik', 'Prävention von diabetischen Fußulzerationen']
      },
      guidelines: {
        diagnosis: [
          'MRT ist der Goldstandard der Bildgebung.',
          'Knochenbiopsie für Kultur und Histologie vor Antibiotikagabe obligat.'
        ],
        treatment_indications: [
          'Erfordert chirurgisches Debridement + 4 bis 6 Wochen gezielte Antibiose.',
          'OVIVA-Studie: Frühe orale Umstellung nach 1 Woche i.v. ist der 6-wöchigen i.v.-Gabe ebenbürtig.'
        ],
        first_line: [
          'Kalkuliert: Vancomycin + Ceftriaxon i.v.; Frühe orale Umstellung nach Biopsieergebnis.'
        ]
      },
      prognosis: {
        mortality: '<1-2% direkt, aber chronische Rezidivrate bei 20–30%',
        prognostic_scores: ['Cierny-Mader Stadieneinteilung'],
        factors: 'Vollständigkeit des chirurgischen Knochendebridements, Belassen lockerer Implantate'
      }
    },
    {
      id: 'septic_arthritis',
      name: 'Septische Arthritis (Akute eitrige Gelenkinfektion)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA ~50-60% gesamt); <i>Streptococcus spp.</i> (<i>S. pyogenes</i>, <i>S. pneumoniae</i>, Gruppe-B-Streptokokken ~20%); <i>Neisseria gonorrhoeae</i> (sexuell aktive junge Erwachsene); Gram-negative Stäbchen (Senioren/Immunsupprimierte)',
        gram: 'Gemischt',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: '2–10 / 100.000 jährlich; orthopädischer Notfall',
        risk_groups: ['Vorerbestehende Gelenkerkrankung (Rheumatoide Arthritis, Arthrose, Gicht)', 'Gelenkendoprothese', 'Hohes Alter (>80 Jahre)', 'Diabetes mellitus', 'i.v.-Drogenkonsumenten', 'Sexuell aktive junge Erwachsene (Disseminierte Gonokokken-Infektion)'],
        seasonality: 'Keine',
        transmission: 'Hämatogene Streuung über die gefäßreiche Synovialis (80%), direkte traumatische/chirurgische Inokulation oder per continuitatem bei Osteomyelitis'
      },
      pathomechanism: {
        steps: [
          'Synovialinvasion: Bakterien besiedeln die gut durchblutete Synovialmembran, der eine schützende Basalmembran fehlt.',
          'Massiver eitriger Erguss: Schnelle Erregervermehrung löst eine massive Neutrophilen-Rekrutierung in den Gelenkraum aus (eitriger Erguss).',
          'Irreversible Knorpelzerstörung: Lysosomale Enzyme sterbender Granulozyten, bakterielle Proteasen und erhöhter Druck zerstören die Knorpelmatrix innerhalb von 24 bis 48 Stunden irreversibel!',
          'Gelenkankulose: Unbehandelt folgt die subchondrale Knochendestruktion und fibröse/knöcherne Gelenkversteifung.'
        ],
        virulence_factors: ['Staphylokokken-MSCRAMM-Adhäsine', 'Chondrozyten-schädigende Toxine', 'Proteolytische Enzyme']
      },
      clinical: {
        incubation: 'Rascher Beginn innerhalb von 24 bis 48 Stunden',
        onset: 'Hyperakut, fulminant',
        symptoms: [
          { name: 'Akute Monoarthritis', description: 'Plötzlicher Einsetzender extremer, kontinuierlicher Gelenkschmerz, Schwellung, Überwärmung und Rötung eines einzelnen großen Gelenks (Knie ~50%, Hüfte ~20%, Schulter ~10%, Sprunggelenk).', severity: 'severe' },
          { name: 'Schonhaltung & Fieber', description: 'Patient hält das Gelenk in Entlastungsstellung und verweigert JEDE aktive oder passive Bewegung wegen extremer Schmerzen. Begleitet von hohem Fieber (38,5-40°C) und Schüttelfrost.', severity: 'severe' },
          { name: 'Gonokokken-Tenosynovitis', description: 'Bei Disseminierter Gonokokken-Infektion (DGI): Wandernde Polyarthralgien, Tenosynovitis (Hand-/Sprunggelenk) und spärliche pustulöse Hautläsionen an den Extremitäten.', severity: 'moderate' }
        ],
        physical_exam: [
          'Prall gefüllter, warmer, roter Gelenkerguss',
          'Extremer Schmerz bei passiver Gelenkbewegung (Leitsymptom zur Unterscheidung von Phlegmone/Bursitis!)',
          'Schonhaltung in maximaler Kapselkapazität (z. B. Knie 30° Flexion, Hüfte gebeugt/abduziert/außenrotiert)',
          'Haut auf Pusteln (Gonokokken) oder Injektions-/Einstichstellen untersuchen'
        ],
        complications: ['Irreversible Gelenkknorpelzerstörung & Sekundärarthrose (innerhalb von 48h)', 'Pathologische Gelenkluxation', 'Begleitende Osteomyelitis', 'Septischer Schock & Tod (10–15% Mortalität)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild & CRP/BSG', finding: 'Ausgeprägte Leukozytose (>15.000/µL) mit Linksverschiebung; CRP und BSG stark erhöht', interpretation: 'Schwere akute systemische Entzündung' },
          { test: 'Blutkulturen (2 Paar)', finding: 'Positiv bei 50% der nicht-gonoischen Fälle', interpretation: 'OBLIGAT VOR Antibiotikagabe' }
        ],
        imaging: [
          { modality: 'Gelenksonographie (POCUS)', finding: 'Sichert Gelenkerguss, Synovialisverdickung und leitet die Nadelaspiration', significance: 'Beste Erstdiagnostik zum Ergussnachweis (besonders Hüfte/Schulter)' },
          { modality: 'Röntgenaufnahme', finding: 'Weichteilschwellung, Gelenkspalterweiterung; später Gelenkspaltverschmälrung und Arrosionen', significance: 'Initialer Ausgangsbefund' }
        ],
        microbiology: [
          { test: 'NOTFALL-ARTHROZENTESE (Diagnostische Gelenkpunktat-Gewinnung)', finding: 'Gelenkflüssigkeit rahmig/eitrig; Leukozyten im Punktat > 50.000 /µL (oft >100.000/µL mit >90% Neutrophilen); Gelenk-Glukose <50% des Blutzuckers; Gelenk-Laktat erhöht (>10 mmol/L); Grampräparat positiv bei 50-75%', significance: 'OBLIGATER NOTFALL-GOLDSTANDARD! MUSS VOR ANTIBIOTIKAGABE ERFOLGEN!' },
          { test: 'Polarisationsmikroskopie des Punktats', finding: 'Ausschluss von Gicht-/Pseudogicht-Kristallen', significance: 'Differenziert Kristallarthropathie (Achtung: Infekt und Kristallanfall können koinzidieren!)' }
        ]
      },
      differential: [
        { disease: 'Akuter Gichtanfall / Pseudogicht (CPPD)', distinguishing: 'Negativ doppelbrechende Uratkristalle (Gicht) oder positiv doppelbrechende CPPD-Kristalle; Punktat-Leukozyten meist 20.000-50.000/µL' },
        { disease: 'Reaktive Arthritis', distinguishing: 'Sterile Synovitis nach GI/GU-Infekt, HLA-B27, extraartikuläre Symptome (Koniunktivitis, Urethritis)' },
        { disease: 'Bursitis praepatellaris / olecrani', distinguishing: 'Schmerz und Schwellung liegen VOR dem Gelenk; passive Gelenkbewegung im eigentlichen Gelenk schmerzfrei möglich' }
      ],
      therapy: {
        guidelines: ['AWMF / BSAC Leitlinien: Chirurgischer & medizinischer Notfall! 1) Sofortige Entlastung & Spülung des Gelenks (Nadelaspiration, Arthroskopie oder Arthrotomie); 2) Kalkulierte i.v.-Breitspektrum-Antibiose sofort nach Arthrozentese; 3) OVIVA-Protokoll: Frühe orale Umstellung nach Sanierung.'],
        empirical: {
          outpatient: [
            { drug: 'KEINE AMBULANTE THERAPIE!', dose: 'SOFORTIGE NOTFALL-EINWEISUNG ZUR ARTHROZENTESE & I.V.-ANTIBIOSE', duration: '-', note: 'Notfall! Gelenkknorpel wird ohne Entlastung innerhalb von 24-48h zerstört.' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg i.v. q8-12h', duration: '2 bis 4 Wochen gesamt', note: 'Erste Wahl i.v. zur Abdeckung von Gram-positiven Erregern / MRSA' },
            { drug: '+ Ceftriaxon', dose: '2,0 g i.v. q24h', duration: '2 bis 4 Wochen gesamt', note: 'Kalkulierte Gram-negative und Gonokokken-Abdeckung' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'i.v. Standarddosierung', duration: '3 bis 4 Wochen gesamt', note: 'Bei septischer Arthritis mit septischem Schock' }
          ]
        },
        targeted: 'MSSA -> Cefazolin 2g i.v. q8h oder Flucloxacillin 2g i.v. q6h; MRSA -> Vancomycin / Daptomycin; N. gonorrhoeae -> Ceftriaxon 1-2g i.v. q24h (7 Tage). Gesamtdauer: Nicht-gonoisch = 3-4 Wochen (nach 1 Woche i.v. orale Umstellung gemäß OVIVA-Protokoll bei saniertem Gelenk).',
        supportive: ['NOTFALL-GELENKDRAINAGE: Tägliche geschlossene Nadelaspiration ODER Arthroskopische Gelenkspülung ODER offene Arthrotomie (OBLIGAT!)', 'Analgesie und kurzzeitige Ruhigstellung zur Schmerzreduktion', 'Frühfunktionelle Physiotherapie sobald die akuten Schmerzen nachlassen'],
        prevention: ['Aseptische Arbeitsweise bei intraartikulären Injektionen', 'Sanierung lokaler Hautinfektionen', 'Behandlung von Gonorrhoe']
      },
      guidelines: {
        diagnosis: [
          'Sofortige Notfall-Arthrozentese VOR Antibiotikagabe obligat.',
          'Gelenk-Leukozyten >50.000/µL mit >90% Neutrophilen belegt septische Arthritis.'
        ],
        treatment_indications: [
          'Sofortige Notfall-Gelenkdrainage (Arthroskopie / Nadel) + i.v. Antibiose.',
          'Frühe orale Umstellung nach 7-10 Tagen i.v. nach OVIVA-Protokoll bei stabilem Befund.'
        ],
        first_line: [
          'Notfall-Gelenkspülung + (Vancomycin + Ceftriaxon i.v.).'
        ]
      },
      prognosis: {
        mortality: '10–15% Mortalität (bis zu 25% bei polyartikulärem Befall oder Senioren)',
        prognostic_scores: ['Gächter-Stadieneinteilung bei arthroskopischer Spülung (Stadien I-IV)'],
        factors: 'Verzögerung der Gelenkspülung >24-48 Stunden führt zu irreversibler Knorpeldestruktion'
      }
    },
    {
      id: 'spondylodiscitis',
      name: 'Infektiöse Spondylodiszitis (Spondylitis & Diszitis)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA 50–60% gesamt); <i>Escherichia coli</i> & Gram-negative Stäbchen (20–25% post-urologisch); <i>Streptococcus spp.</i> (10–15%); <i>Mycobacterium tuberculosis</i> (Pott-Krankheit in Endemiegebieten)',
        gram: 'Gemischt',
        shape: 'Stäbchen/Kokus'
      },
      epidemiology: {
        incidence: '2–7 / 100.000 jährlich; steigende Tendenz durch demographischen Wandel, Wirbelsäuleneingriffe und Gefäßkatheter',
        risk_groups: ['Ältere Erwachsene (>60 Jahre, Männer 2:1)', 'Diabetes mellitus', 'Hämodialyse-Patienten', 'i.v.-Drogenkonsumenten', 'Z.n. Wirbelsäulen-OP, Epiduralkatheter oder urologischen Eingriffen', 'Infektiöse Endokarditis'],
        seasonality: 'Keine',
        transmission: 'Hämatogene Streuung über das Batson-Venengeflecht oder Spinalarterien (80%), direkte chirurgische/epidurale Inokulation'
      },
      pathomechanism: {
        steps: [
          'Hämatogene Besiedlung: Erreger erreichen die gut durchblutete Metaphyse benachbarter Wirbelkörper über die Blutbahn (oft gestreut aus HWI, Hautinfekt oder Endokarditis).',
          'Bandscheibendestruktion: Die Infektion durchbricht die Deckplatte und greift auf die avaskuläre Bandscheibe (Diszitis) und den Nachbarwirbel (Spondylitis) über.',
          'Abszessbildung: Ausbreitung in die Paraspinalräume führt zu Psoas- oder Paravertebralabszessen oder expandiert nach dorsal in den Spinalkanal als EPIDURALABSZESS.',
          'Rückenmarkkompression: Epiduralabszess oder Gefügekollaps verursachen eine direkte Rückenmarkkompression mit ischämischer Querschnittlähmung.'
        ],
        virulence_factors: ['Staphylokokken-MSCRAMMs', 'Biofilm-Bildung', 'Knorpel- & Knochenmatrix-Degradation']
      },
      clinical: {
        incubation: 'Schleichender Verlauf über 2 bis 6 Wochen',
        onset: 'Subakut oder chronisch',
        symptoms: [
          { name: 'Lokalisierter Rückenschmerz (Kardinalsymptom >90%)', description: 'Ständiger, dumpfer, tiefer Rücken- oder Nackenschmerz, der stetig zunimmt, auch in Ruhe und nachts besteht und nicht auf Haltungsänderung oder einfache Analgetika anspricht.', severity: 'severe' },
          { name: 'Fieber & Systemsymptome', description: 'Fieber ist nur in 50% der Fälle vorhanden! Fehlen von Fieber darf eine Spondylodiszitis NICHT ausschließen.', severity: 'moderate' },
          { name: 'Neurologisches Defizit (Notfall-Warnzeichen!)', description: 'Radikuläre Schmerzen, Muskelparesen, Parästhesien/Taubheitsgefühl, Gangataxie, Blasen-/Mastdarmstörung oder Paraplegie weisen auf einen Epiduralabszess mit Rückenmarkkompression hin!', severity: 'severe' }
        ],
        physical_exam: [
          'Umschriebener klopfdermatomer Klopf- und Druckschmerz über dem betroffenen Dornfortsatz (Leitsymptom!)',
          'Schwere paravertebrale Muskelhartspann-Reaktion und schmerzhafte Bewegungseinschränkung der Wirbelsäule',
          'Vollständiger neurologischer Status: Kennmuskelkraft, Dermatomsensibilität, Eigenreflexe, Babinski-Zeichen, Analsphinktertonus',
          'Ausskultation des Herzens (Ausschluss einer Begleit-Endokarditis!)'
        ],
        complications: ['Spinaler Epiduralabszess mit Querschnittlähmung', 'Psoasabszess oder paravertebraler Abszess', 'Pathologischer Wirbelkörperkollaps mit kyphotischer Fehlstellung', 'Infektiöse Endokarditis (koinzidiert in 10–15% der Fälle)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Entzündungsparameter (BSG & CRP)', finding: 'BSG (>50 mm/h) und CRP bei >90% der Fälle erhöht', interpretation: 'Hervorragende diagnostische Sensitivität und Hauptparameter für die Therapieverlaufskontrolle' },
          { test: 'Blutkulturen (2-3 Paar)', finding: 'Positiv bei 50–70% der Fälle', interpretation: 'OBLIGATER ERSTER SCHRITT! Positivität bei klassischem MRT-Befund sichert Erreger OHNE CT-Biopsie!' }
        ],
        imaging: [
          { modality: 'MRT der Wirbelsäule mit Kontrastmittel', finding: 'Knochenmarködem (T1 hypointens, T2 hyperintens), Bandscheibenhöhenminderung, Usur der Deckplatten, Kontrastmittelaufnahme, Epidural-/Paravertebralabszess', significance: 'GOLDSTANDARD der Bildgebung (Sensitivität und Spezifität >95%)' },
          { modality: 'CT Wirbelsäule mit Kontrastmittel', finding: 'Kortikalisusuren und Weichteilabszess', significance: 'Indiziert wenn MRT streng kontraindiziert ist (z. B. Herzschrittmacher)' },
          { modality: 'Echokardiographie (TTE / TEE)', finding: 'Klappenvegetation', significance: 'OBLIGAT bei S. aureus oder Enterokokken-Spondylodiszitis zum Ausschluss einer Endokarditis!' }
        ],
        microbiology: [
          { test: 'CT-gesteuerte Nadelbiopsie oder intraoperative Biopsie', finding: 'Histopathologie & mikrobiologische Kultur', significance: 'OBLIGAT wenn Blutkulturen negativ sind VOR Beginn einer Antibiose!' }
        ]
      },
      differential: [
        { disease: 'Degenerative Bandscheibenerkrankung / Modic-Veränderungen', distinguishing: 'Normale CRP/BSG, fehlendes Kontrastmittel-Anreicherungsverhalten im Bandscheibenraum' },
        { disease: 'Wirbelsäulenmetastase / Multiples Myelom', distinguishing: 'Bandscheibenraum bleibt bei Malignomen charakteristisch AUSGESPART; CRP meist normal' },
        { disease: 'Tuberkulöse Spondylitis (Pott-Krankheit)', distinguishing: 'Schleichender Befall mehrerer Etagen, großer kalter Psoasabszess, B-Symptomatik' }
      ],
      therapy: {
        guidelines: ['IDSA / AWMF Leitlinien zur Spondylodiszitis: 1) Gezielte Antibiose für insgesamt 6 Wochen; 2) Bei stabilen Patienten ohne Antibiose warten, bis Blutkulturen oder CT-Biopsie den Erreger sichern; 3) Notfall-OP bei neurologischem Defizit, Instabilität oder Epiduralabszess.'],
        empirical: {
          outpatient: [
            { drug: 'KEINE EMPIRISCHE AMBULANTE THERAPIE!', dose: '-', duration: '-', note: 'Stationäre Aufnahme, MRT und Erregerdiagnostik obligat' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg i.v. q8-12h', duration: '6 Wochen gesamt (i.v. für 1-2W, dann orale Umstellung)', note: 'Erste Wahl i.v. für MRSA / Gram-positive Erreger' },
            { drug: '+ Ceftriaxon', dose: '2,0 g i.v. q24h', duration: '6 Wochen gesamt', note: 'Kalkulierte Gram-negative Abdeckung' },
            { drug: '+ Cefepim', dose: '2,0 g i.v. q8h', duration: '6 Wochen gesamt', note: 'Ersatz für Ceftriaxon bei Pseudomonas-Risiko (i.v.-Drogen, urologischer Eingriff)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'i.v. Standarddosierung', duration: '6 Wochen gesamt', note: 'Bei Spondylodiszitis mit septischem Schock' }
          ]
        },
        targeted: 'Nach Kultur: S. aureus -> Cefazolin 2g i.v. q8h / Flucloxacillin 2g i.v. q6h (oder oral Chinolon / Linezolid); E. coli -> Ceftriaxon 2g i.v. q24h oder oral Ciprofloxacin 750mg 2x/T. Gesamtdauer: 6 Wochen. Frühe Umstellung auf hoch bioverfügbares orales Regimen nach 1-2 Wochen i.v. bei CRP-Abfall und Schmerzbesserung.',
        supportive: ['Ruhigstellung mit Wirbelsäulen-Orthese (Korsett) bei Mobilisation für 6–12 Wochen', 'Bettruhe in der akuten Schmerzphase', 'Schmerztherapie', 'CHIRURGISCHE INDIKATIONEN: 1) Progressiver neurologischer Ausfall oder Rückenmarkkompression; 2) Spinaler Gefügekollaps / Kyphose; 3) Epidural- oder Psoasabszess ohne Punktierbarkeit; 4) Intraktabler Schmerz trotz Antibiose.'],
        prevention: ['Frühzeitige Sanierung von Bakteriämien (HWI, Haut, Venenverweilkatheter)', 'Aseptische Technik bei Epiduralinjektionen', 'Endokarditisprophylaxe']
      },
      guidelines: {
        diagnosis: [
          'MRT der Wirbelsäule mit Kontrastmittel ist der Goldstandard.',
          'Blutkulturen abnehmen. Wenn negativ, CT-Nadelbiopsie VOR Antibiose.'
        ],
        treatment_indications: [
          '6 Wochen Gesamtdauer der gezielten Antibiose.',
          'Notfall-OP bei neurologischem Defizit, Instabilität oder Epiduralabszess.'
        ],
        first_line: [
          'Kalkuliert i.v. Vancomycin + Ceftriaxon; frühe orale Umstellung nach 1-2 Wochen bei stabilem Verlauf.'
        ]
      },
      prognosis: {
        mortality: '2–10% Mortalität; neurologische Erholung hängt von der Geschwindigkeit der chirurgischen Dekompression ab (<24h)',
        prognostic_scores: ['Keine spezifischen'],
        factors: 'Neurologischer Ausfall bei Erstvorstellung, Diagnoseverzögerung >2 Monate'
      }
    }
  ]
};
