import { Category } from '../types';

export const intraabdominalDe: Category = {
  name: 'Intraabdominale Infektionen',
  icon: '🩺',
  color: '#16a34a',
  didactics: {
    overview: 'Intraabdominale Infektionen (IAI) umfassen ein breites Spektrum von unkomplizierten, lokalisierten Entzündungen (Appendizitis, Divertikulitis, Cholezystitis) bis hin zu lebensbedrohlichen komplizierten Peritonitiden, Leberabszessen und akuten aszendierenden Cholangitiden. Gemäß WSES (2020/2024), SIS (2024), EASL (2021/2023) und den Tokyo Guidelines (TG18/TG23) ruht das Therapiemanagement auf zwei zentralen Säulen: der rechtzeitigen, adäquaten Herdsanierung (Source Control: chirurgisch, interventionell oder endoskopisch) und einer gezielten antimikrobiellen Therapie.',
    primary: 'Spontane Bakterielle Peritonitis (SBP): Monobakterielle Infektion des Aszites bei Leberzirrhose ohne intraabdominellen chirurgischen Fokus. Diagnostik: Aszites-Punktion mit Nachweis von Polymorphkernigen (PMN) ≥ 250/mm³ (0,25 x 10⁹/L). Empirische Erstlinien-Antibiose: IV Cephalosporin der 3. Generation (Ceftriaxon 2g/Tag oder Cefotaxim 2g q8h). Zwingende supportive Begleittherapie: IV Albumin-Infusion (1,5 g/kg am Tag 1, 1,0 g/kg am Tag 3) zur Prävention des hepatorenalen Syndroms (HRS-AKI) und zur Reduktion der Mortalität (EASL-Leitlinie).',
    secondary: 'Sekundäre Peritonitis & Komplizierte IAI: Polymikrobielle Kontamination des Peritoneums nach Perforation oder Nekrose im Magen-Darm-Trakt. Dringliche Herdsanierung innerhalb von 6–12 Stunden ist essenziell. Antibiose-Dauer: Eine Kurzzeittherapie von 4 Tagen (96 Stunden) nach erfolgreicher Herdsanierung (STOP-IT-Studie / WSES 2024) ist ebenso effektiv wie längere Therapiekuren.',
    biliary: 'Akute aszendierende Cholangitis & Akute Cholezystitis (Tokyo Guidelines TG18/TG23): Die Cholangitis ist ein medizinischer Notfall, der eine umgehende biliäre Dekompression (ERCP mit Sphinkterotomie/Stent oder PTC) innerhalb von 12–24h + IV Breitband-Antibiose erfordert. Die Cholezystitis indiziert die frühe laparoskopische Cholezystektomie innerhalb von 72–96 Stunden ab Symptombeginn.',
    diagnostics: [
      '1) Kontrastmittel-CT Abdomen/Becken (Goldstandard zum Nachweis von Perforation, freien Gaseinschlüssen, Peritonitis und Abszessen)',
      '2) Diagnostische Aszitespunktion (PMN-Zählung und Aszites-Kultur in Blutkulturflaschen) bei allen Zirrhosepatienten mit Aszites bei Aufnahme oder klinischer Verschlechterung',
      '3) Abdomineller Ultraschall (Erstlinientool bei Gallenwegspathologien: akute Cholezystitis und dilatierte Gallenwege bei Cholangitis)',
      '4) Sepsis-Biomarker (Laktat, Procalcitonin, Blutbild) und Blutkulturen vor Beginn der antimikrobiellen Therapie',
      '5) Intraoperative oder CT-/US-gestützte Punktatgewinnung für Gram-Präparat sowie aerobe und anaerobe Kultur'
    ],
    red_flags: [
      'Septischer Schock (refraktäre Hypotonie, Serum-Laktat > 2 mmol/L, Bewusstseinsstörung)',
      'Brettharte Bauchdecke (Defense musculature / Pneumoperitoneum im CT)',
      'Reynolds-Pentade bei Cholangitis (Charcot-Trias + Hypotonie + Verwirrtheit = Grade III TG18 schwere Cholangitis)',
      'Akutes Nierenversagen / Hepatorenales Syndrom (HRS-AKI) bei SBP',
      'Fäkulente oder eitrige Peritonitis (Hinchey III/IV Divertikulitis / perforiertes Hohlorgan)'
    ],
    special_populations: 'Zirrhosepatienten: Diagnostische Parazentese ist bei jeder stationären Aufnahme mit Aszites oder klinischer Verschlechterung obligat; IV Albumin-Gabe bei SBP ist lebensrettend. Ältere & Immunsupprimierte: Klassische Peritonealiszeichen (Abwehrspannung, Fieber) fehlen oft; niedrige Schwelle für CT-Diagnostik.',
    teaching_tip: 'Bei komplizierten IAI ist die Herdsanierung (Source Control) der entscheidende Schlüssel! Antibiotika unterstützen die Herdsanierung, sie ersetzen sie nicht. Nach adäquater Herdsanierung reichen 4 Tage Antibiose vollkommen aus (STOP-IT-Studie / WSES 2024).'
  },
  tables: [
    {
      title: 'Differentialdiagnose & Leitlinien-Übersicht wesentlicher intraabdomineller Infektionen',
      headers: ['Erkrankung', 'Erregerprofil', 'Diagnostischer Goldstandard', 'Zentrale Leitlinien-Kriterien', 'Empirische Antibiose', 'Interventionelle / Chirurgische Herdsanierung'],
      rows: [
        ['Spontane Bakterielle Peritonitis (SBP)', 'Monobakteriell: E. coli, K. pneumoniae, S. pneumoniae', 'Diagnostische Parazentese: Aszites-PMN ≥ 250/mm³', 'EASL 2021/2023: PMN > 250/mm³ + IV Albumin 1,5g/kg (T1) & 1g/kg (T3)', 'Ceftriaxon 2g IV 1x/Tag (Pip/Tazo oder Meropenem bei nosokomial)', 'Nur Parazentese (Keine chirurgische Herdsanierung indiziert)'],
        ['Sekundäre Peritonitis', 'Polymikrobiell: E. coli, Klebsiella, B. fragilis, Enterococcus', 'Kontrastmittel-CT Abdomen (Freie Luft, Flüssigkeit, Perforation)', 'WSES 2024 / SIS: Dringende Herdsanierung <6-12h; 4 Tage ABx nach Herdsanierung', 'Ceftriaxon 2g IV + Metronidazol 500mg IV q8h (Pip/Tazo 4,5g q6h bei schwer/nosokomial)', 'Surgische Laparotomie / Laparoskopie (Übernähung, Resektion, Lavage)'],
        ['Pyogener Leberabszess', 'Kombiniert: E. coli, K. pneumoniae (ST23/K1), S. anginosus, Anaerobier', 'Abdomen-CT / US (Randschärfende hypodense Raumforderung)', 'EASL/WSES: Bildgestützte Drainage/Aspiration + 4–6 Wochen Gesamtantibiose', 'Ceftriaxon 2g IV + Metronidazol 500mg IV q8h (Pip/Tazo 4,5g q6h bei schwer)', 'US/CT-gestützte perkutane Katheterdrainage (1. Wahl)'],
        ['Akute aszendierende Cholangitis', 'Kombiniert: E. coli, Klebsiella, Enterococcus, Pseudomonas, Anaerobier', 'Tokyo Guidelines (TG18/TG23): Charcot-Trias / Reynolds-Pentade + US/MRCP', 'TG18: Sz. Entzündung + Cholestase + Gallenwegsdilatation im Bild', 'Ceftriaxon 2g IV + Metronidazol 500mg IV q8h (Pip/Tazo oder Meropenem bei Grade III)', 'Notfallmäßige / Dringliche biliäre Dekompression via ERCP (Stent/Papillotomie) oder PTC'],
        ['Akute Cholezystitis', 'Kombiniert: E. coli, Klebsiella, Enterococcus, Pseudomonas', 'Abdomen-US: Wand >3-4mm, Pericholezystische Flst., sonogr. Murphy-Zeichen', 'TG18 / WSES: Frühe laparoskopische Cholezystektomie <72–96h ab Beginn', 'Ceftriaxon 2g IV + Metronidazol 500mg IV q8h (Pip/Tazo bei Grade III / Acalculös)', 'Frühe laparoskopische Cholezystektomie (PTGBD-Drainage wenn inoperabel)'],
        ['Akute Divertikulitis', 'Kombiniert: E. coli, B. fragilis, Enterococcus, Peptostreptococcus', 'Kontrastmittel-CT Abdomen: Wand >4mm, perikolisches Imbibieren, Hinchey-Staging', 'WSES 2020/2024: Ambulante Nicht-ABx Beobachtung bei unkompliziert (Hinchey 0/Ia)', 'Unkompliziert: Nur symptomatisch. Kompliziert: Amoxi-Clav PO oder Ceftriaxon+Metronidazol IV', 'Perkutane Drainage bei Abszess ≥3-4cm; Chirurgie bei Hinchey III/IV Peritonitis']
      ]
    }
  ],
  diseases: [
    {
      id: 'primary_bacterial_peritonitis',
      name: 'Spontane Bakterielle Peritonitis (SBP)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Escherichia coli</i> (40–50%), <i>Klebsiella pneumoniae</i> (15–20%), <i>Streptococcus pneumoniae</i>, <i>Enterococcus spp.</i> (typischerweise monobakteriell)',
        gram: 'Variabel',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: 'Tritt bei 10–30% aller hospitalisierten Patienten mit Zirrhose und Aszites auf; 1-Jahres-Rezidivrate bis zu 70% ohne Prophylaxe',
        risk_groups: [
          'Dekompenzierte Leberzirrhose mit Aszites (insbesondere niedriges Aszitesprotein < 1,5 g/dL / 15 g/L)',
          'Gastrointestinale Blutung bei Leberzirrhose',
          'Frühere SBP-Episode',
          'Schwere Hyperbilirubinämie oder eingeschränkte Nierenfunktion (MELD-Score > 20)',
          'Nephrotisches Syndrom'
        ],
        seasonality: 'Keine',
        transmission: 'Translokation der endogenen Darmflora über die geschädigte Darmschleimhautbarriere'
      },
      pathomechanism: {
        steps: [
          'Bakterielle Translokation: Darm-Hyperpermeabilität und Dysbiose bei portaler Hypertonie ermöglichen das Übertreten von Darmbakterien in die mesenterialen Lymphknoten.',
          'Bakteriämie: Eingeschränkte retikuloendotheliale Phagozytosekapazität (Mangel an hepatischen Makrophagen) führt zu transienter oder persistierender Bakteriämie.',
          'Aszites-Besiedlung: Bakterien besiedeln die opsoninarme Aszitesflüssigkeit (Komplement-C3/C4-Mangel), was zu ungehemmter monobakterieller Vermehrung und Peritonealentzündung führt.'
        ],
        virulence_factors: ['Adhäsine', 'Endotoxin (LPS)', 'Kapselpolysaccharide', 'Translokationsfaktoren']
      },
      clinical: {
        incubation: 'Akuter Beginn',
        onset: 'Schleichender oder plötzlicher Beginn bei Zirrhosepatienten',
        symptoms: [
          { name: 'Abdominelle Schmerzen & Druckschmerz', description: 'Diffuse, leichte bis mäßige Bauchschmerzen oder Loslassschmerz (spontane Abwehrspannung).', severity: 'moderate' },
          { name: 'Fieber & Schüttelfrost', description: 'Körpertemperatur > 37,8°C oder Hypothermie bei fortgeschrittenem Leberversagen / Schock.', severity: 'moderate' },
          { name: 'Verschlechterung der Hepatischen Enzephalopathie', description: 'Plötzliches Auftreten oder rasche Progression von Bewusstseinsstörungen (Flapping Tremor, Lethargie, Verwirrtheit).', severity: 'severe' },
          { name: 'Unerklärtes Akutes Nierenversagen (AKI)', description: 'Progressive Oligurie oder Anstieg des Serumkreatinins ohne offensichtliche renale Ursache.', severity: 'severe' },
          { name: 'Asymptomatischer / Subtiler Verlauf', description: 'Bis zu 20% der Fälle zeigen keine Peritonealiszeichen; Diagnostik gelingt nur durch Routine-Parazentese.', severity: 'mild' }
        ],
        physical_exam: [
          'Diffuser Druckschmerz im Abdomen, Flankendämpfung (Aszites)',
          'Stigmata der chronischen Lebererkrankung (Spider naevi, Palmarerythem, Ikterus, Caput medusae)',
          'Asterixis / Flapping Tremor (Enzephalopathie Grad I-III)',
          'Tachykardie, Hypotonie oder Hypothermie im septischen Schock'
        ],
        complications: [
          'Hepatorenales Syndrom (HRS-AKI) infolge splanchnischer arterieller Vasodilation',
          'Akut-auf-Chronisches Leberversagen (ACLF)',
          'Septischer Schock und Multiorganversagen (MODS)',
          'Hohe 30-Tage-Mortalität (20–30%)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Diagnostische Aszitespunktion (Parazentese)', finding: 'Polymorphkernige Granulozyten (PMN) ≥ 250/mm³ (0,25 x 10⁹/L)', interpretation: 'BEWEISEND FÜR SBP! Empirische IV Antibiose muss unverzüglich gestartet werden.' },
          { test: 'Serum-Aszites-Albumin-Gradient (SAAG)', finding: '≥ 1,1 g/dL', interpretation: 'Beweist portale Hypertonie als Ursache' },
          { test: 'Gesamtprotein im Aszites', finding: '< 1,5 g/dL (< 15 g/L)', interpretation: 'Hohes Risiko für SBP-Rezidiv; Indikation zur primären Prophylaxe' },
          { test: 'Serumkreatinin & Harnstoff', finding: 'Erhöht (AKI)', interpretation: 'Überwachung auf Entwicklung eines Hepatorenalen Syndroms (HRS-AKI)' }
        ],
        imaging: [
          { modality: 'Abdomineller Ultraschall', finding: 'Aszitesnachweis, Beurteilung der Leberarchitektur, Führung der diagnostischen Parazentese', significance: 'Erstlinienbildgebung' }
        ],
        microbiology: [
          { test: 'Aszites-Kultur', finding: 'Inokulation von 10 mL Aszites direkt am Krankenbett in Blutkulturflaschen (aerob + anaerob)', significance: 'Monobakterieller Erregerisolat in 50–80% echter SBP-Fälle' },
          { test: 'Blutkulturen', finding: 'Positiv in 30–50% der SBP-Fälle', significance: 'Vor Beginn der Antibiose abnehmen' }
        ],
        differential: [
          { disease: 'Sekundäre Peritonitis bei Zirrhose', distinguishing: 'Polymikrobielle Kultur, Aszitesprotein > 1,0 g/dL, Glukose < 50 mg/dL, LDH erhöht, freie Luft im CT' },
          { disease: 'Kultur-Negativer Neutrozytischer Aszites (CNNA)', distinguishing: 'PMN ≥ 250/mm³, aber negative Kultur; Management identisch zur SBP' },
          { disease: 'Monobakterielle Nicht-neutrozytische Bakteraszites (MNBA)', distinguishing: 'PMN < 250/mm³ mit positiver Kultur; Therapie indiziert bei klinischen Symptomen' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxon', dose: '2g IV 1x/Tag', duration: '5–7 Tage', note: 'EASL First-Line bei ambulanter SBP' },
            { drug: 'Cefotaxim', dose: '2g IV q8h', duration: '5–7 Tage', note: 'Alternatives Cephalosporin der 3. Generation' },
            { drug: 'Piperacillin-Tazobactam', dose: '4,5g IV q6h-q8h', duration: '5–7 Tage', note: 'Bei nosokomialer / gesundheitsversorgungassoziierter SBP' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '5–7 Tage', note: 'Bei nosokomialer SBP, septischem Schock oder ESBL-Verdacht' }
          ]
        },
        targeted: 'Anpassung nach Aszites-Kultur und Antibiogramm.',
        supportive: [
          'IV ALBUMIN-INFUSION (EASL-Leitlinie): 1,5 g/kg Körpergewicht innerhalb von 6 Stunden nach Diagnose (Tag 1) UND 1,0 g/kg Körpergewicht an Tag 3. Senkt die Inzidenz des Hepatorenalen Syndroms (HRS-AKI) nachweislich von 30% auf 10% und reduziert die Mortalität signifikant!',
          'Paussieren von nicht-selektiven Betablockern (NSBB) bei schwerer Hypotonie oder AKI.',
          'Strikte Vermeidung nephrotoxischer Substanzen (NSAIDs, Aminoglykoside, Kontrastmittel).'
        ],
        prevention: [
          'Sekundärprophylaxe (nach 1. SBP-Episode): Dauerhafte orale Gabe von Norfloxacin 400mg/Tag ODER Ciprofloxacin 500mg/Tag ODER Cotrimoxazol 800/160mg/Tag bis zur Lebertransplantation.',
          'Primärprophylaxe bei akuter GI-Blutung: Ceftriaxon 1g IV 1x/Tag für 7 Tage.',
          'Primärprophylaxe bei niedrigem Aszitesprotein (<1,5 g/dL): Indiziert bei Child-Pugh ≥ 9 oder Serum-Bilirubin ≥ 3 mg/dL mit Nierenfunktionseinschränkung.'
        ]
      },
      guidelines: {
        diagnosis: [
          'Dringliche diagnostische Parazentese bei jedem stationär aufgenommenen Zirrhosepatienten mit Aszites oder bei Auftreten von Fieber, Bauchschmerzen, Enzephalopathie oder AKI.',
          'SBP-Diagnose: Aszites-PMN ≥ 250/mm³ (0,25 x 10⁹/L).'
        ],
        treatment_indications: [
          'Sofortiger Beginn einer empirischen IV Antibiose (Cephalosporin 3. Gen) bei PMN ≥ 250/mm³.',
          'Kombination mit IV Albumin (1,5 g/kg T1, 1,0 g/kg T3) zur Prävention des Hepatorenalen Syndroms (EASL-Leitlinie).'
        ],
        first_line: ['Ceftriaxon 2g IV 1x/Tag + IV Albumin-Infusion.'],
        supportive: ['Nephrotoxine absetzen, Nierenfunktion und Flüssigkeitsbilanz engmaschig überwachen.'],
        prevention: ['Dauerhafte orale Chinolon- oder Cotrimoxazol-Prophylaxe nach SBP-Überstehen.']
      },
      prognosis: {
        mortality: '10–30% Krankenhaussterblichkeit; 1-Jahres-Mortalität bis zu 50% ohne Lebertransplantation',
        prognostic_scores: ['MELD-Score', 'Child-Pugh-Score', 'CLIF-SOFA Score'],
        factors: 'Hepatorenales Syndrom (HRS-AKI), verzögerte Parazentese und unterlassene Albumin-Gabe verschlechtern die Überlebensrate drastisch.'
      }
    },
    {
      id: 'secondary_peritonitis',
      name: 'Sekundäre Peritonitis & Komplizierte Intraabdominale Infektionen',
      pathogen: {
        type: 'Kombiniert (Bakterien)',
        name: '<i>Escherichia coli, Klebsiella pneumoniae, Proteus spp., Enterococcus faecalis, Bacteroides fragilis, Peptostreptococcus spp.</i> (polymikrobielle aerobe + anaerobe Mischflora)',
        gram: 'Variabel',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: 'Häufiger chirurgischer Notfall infolge Perforation oder Gangrän des Magen-Darm-Trakts',
        risk_groups: [
          'Perforierte Ulkuskrankheit (Magen/Duodenum)',
          'Perforierte akute Appendizitis oder Divertikulitis',
          'Postoperative Anastomoseninsuffizienz',
          'Ischämische Darmnekrose',
          'Penetrierendes oder stumpfes Bauchtrauma'
        ],
        seasonality: 'Keine',
        transmission: 'Kontinuitätsunterbrechung der Magen-Darm-Wand mit Austritt endogener viszeraler Flora in die sterile Bauchhöhle'
      },
      pathomechanism: {
        steps: [
          'Viszerale Perforation: Defekt der GI-Trakt-Wand führt zum Austritt von Magen-, Gallen- oder Stuhlinhalt in das Peritoneum.',
          'Peritoneale Entzündung: Polymikrobielle Invasion löst eine heftige fibrinos-eitrige Entzündung, Vasodilation, Exsudation und Zytokinfreisetzung aus.',
          'Komplizierte Entzündung: Lokale Abkapselungsversuche führen zu Abszessen; unkontrollierte Ausbreitung führt zur diffusen Peritonitis, septischem Schock und Multiorganversagen.'
        ],
        virulence_factors: ['Lipopolysaccharid (LPS)', 'Anaerobierkapsel (B. fragilis)', 'Synergistische polymikrobielle Toxizität', 'Exotoxine']
      },
      clinical: {
        incubation: 'Akuter Beginn',
        onset: 'Plötzliches, heftiges Abdomen',
        symptoms: [
          { name: 'Sehr schwere Bauchschmerzen', description: 'Plötzliche, unerträgliche, scharfe Bauchschmerzen, die bei jeder Körperbewegung oder beim Husten extrem zunehmen.', severity: 'severe' },
          { name: 'Fieber & Schüttelfrost', description: 'Hohes Fieber (>38,5°C) oder Hypothermie (<36,0°C) bei schwerer Sepsis.', severity: 'moderate' },
          { name: 'Paralytischer Ileus', description: 'Übelkeit, fäkales oder galliges Erbrechen, absoluter Stuhl- und Windverhalt.', severity: 'severe' }
        ],
        physical_exam: [
          'Brettharte Bauchdecke (involuntäre Abwehrspannung / Defense musculature)',
          'Loslassschmerz (Blumberg-Zeichen)',
          'Fehlende Darmgeräusche ("Totenstille im Bauch")',
          'Systemische Zeichen: Tachykardie, Hypotonie, Tachypnoe, kaltschweißige Akren'
        ],
        complications: [
          'Septischer Schock und Multiorganversagen (MODS)',
          'Intraabdominelle Abszessbildung (subphrenisch, im Douglas-Raum, interenterisch)',
          'Postoperative Anastomoseninsuffizienz',
          'Abdominelles Kompartmentsyndrom'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Ausgeprägte Leukozytose (>15.000/µL) mit Linksverschiebung oder Leukozytopenie (<4.000/µL) bei schwerer Sepsis', interpretation: 'Schwere systemische Infektion' },
          { test: 'Serum-Laktat & Procalcitonin', finding: 'Laktat > 2,0 mmol/L, PCT deutlich erhöht', interpretation: 'Gewebshypoperfusion, Sepsis-Indikator' }
        ],
        imaging: [
          { modality: 'Kontrastmittel-CT Abdomen/Becken', finding: 'Pneumoperitoneum (freie Luft unter dem Zwerchfell / peritonitischer Raum), Flüssigkeitsverhalt, Phlegmone, Perforationsstelle', significance: 'GOLDSTANDARD zur Perforationslokalisation und Operationsplanung' },
          { modality: 'Röntgen-Thorax/Abdomen im Stehen', finding: 'Sichelförmige freie Luft unter den Zwerchfellkuppeln', significance: 'Schneller orientierender Nachweis einer Hohlorganperforation' }
        ],
        microbiology: [
          { test: 'Intraoperative Punktat-/Spülflüssigkeitskultur', finding: 'Polymikrobielles Wachstum (aerobe Gram-negative Stäbchen + Anaerobier)', significance: 'Steuerung der gezielten postoperativen Antibiose' },
          { test: 'Blutkulturen', finding: 'Positiv in 20–40% der Fälle', significance: 'Vor Operation und Antibiose abnehmen' }
        ],
        differential: [
          { disease: 'Spontane Bakterielle Peritonitis (SBP)', distinguishing: 'Aszites-Hintergrund, monobakteriell, keine freie Luft im CT, kein chirurgischer Perforationsfokus' },
          { disease: 'Akute Pankreatitis', distinguishing: 'Lipase >3x ULN erhöht, pankreatische Schwellung/Nekrose im CT ohne freie Luft' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxon + Metronidazol', dose: '2g IV 1x/Tag + 500mg IV q8h', duration: '4 Tage nach adäquater Herdsanierung (WSES 2024 / STOP-IT-Studie)', note: 'Leichte / Mittelschwere ambulante Peritonitis' },
            { drug: 'Piperacillin-Tazobactam', dose: '4,5g IV q6h-q8h', duration: '4 Tage nach adäquater Herdsanierung', note: 'Schwere ambulante / Nosokomiale Peritonitis' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '4 Tage nach adäquater Herdsanierung', note: 'Septischer Schock, hohes ESBL-Risiko oder nosokomial' }
          ]
        },
        targeted: 'Anpassung basierend auf der intraoperativen Mikrobiologie unter Aufrechterhaltung der Anaerobierabdeckung.',
        supportive: ['Sofortige zielgerichtete Volumenresuszitation (Kristalloide), Vasopressoren (Noradrenalin) bei septischem Schock, Intensivstation.'],
        prevention: ['Perioperative Antibiotikaprophylaxe, rechtzeitige Behandlung von Ulkuskrankheit, Appendizitis und Divertikulitis.']
      },
      guidelines: {
        diagnosis: [
          'Dringliches Kontrastmittel-CT des Abdomens/Beckens zur exakten Lokalisation von Perforation und Abszessen.',
          'Sofortige Blutkulturabnahme und Laktatbestimmung bei Sepsisverdacht.'
        ],
        treatment_indications: [
          'CHIRURGISCHE ODER INTERVENTIONELLE HERDSANIERUNG (SOURCE CONTROL) INNERHALB VON 6–12 STUNDEN IST ESSENZIELL (Naht, Resektion, Lavage, Drainage)!',
          'WSES 2024 / SIS LEITLINIEN (STOP-IT TRIAL): Nach erfolgreicher, adäquater Herdsanierung ist eine 4-tägige (96-stündige) postoperative Antibiotikagabe vollkommen ausreichend und längeren Kuren gleichwertig!'
        ],
        first_line: ['Dringliche chirurgische Herdsanierung + Breitspektrum-IV-Antibiose (Ceftriaxon+Metronidazol oder Pip/Tazo).'],
        supportive: ['Hemodynamische Stabilisierung, Sepsis-Resuszitationsprotokoll.'],
        prevention: ['Sorgfältige chirurgische Technik, frühe Erkennung von Anastomoseninsuffizienzen.']
      },
      prognosis: {
        mortality: '10–40% (über 50% im septischen Schock oder bei verzögerter Herdsanierung im Alter)',
        prognostic_scores: ['APACHE II Score', 'Mannheimer Peritonitis Index (MPI)', 'WSES Sepsis Score'],
        factors: 'Die Schnelligkeit und Vollständigkeit der chirurgischen Herdsanierung ist der wichtigste Überlebensfaktor.'
      }
    },
    {
      id: 'pyogenic_liver_abscess',
      name: 'Pyogener Leberabszess',
      pathogen: {
        type: 'Kombiniert (Bakterien)',
        name: '<i>Escherichia coli, Klebsiella pneumoniae</i> (hypermukoviszöse ST23/K1-Serotypen), <i>Streptococcus anginosus</i>-Gruppe, <i>Bacteroides fragilis</i>',
        gram: 'Variabel',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: 'Häufigster viszeraler Abszess; Inzidenz 2–4 pro 100.000 Einwohner pro Jahr',
        risk_groups: [
          'Gallenwegserkrankungen (Choledocholithiasis, Cholangitis, biliäre Strikturen/Stents)',
          'Diabetes mellitus (prädisponiert stark für hypervirulente K. pneumoniae Abszesse)',
          'Intraabdominelle Infektionen (Appendizitis, Divertikulitis, CED)',
          'Malignome (Kolorektales Karzinom, hepatobiliäre Tumoren)',
          'Immunsuppression'
        ],
        seasonality: 'Keine',
        transmission: 'Aszendierende Infektion über die Gallenwege (40–50%), pylephlebitische Verschleppung über die Pfortader, hämatogene Aussaat über die A. hepatica oder per continuitatem'
      },
      pathomechanism: {
        steps: [
          'Erregerbesiedlung: Erreger gelangen über infizierte Gallenwege, die Pfortader oder die Leberarterie in das Leberparenchym.',
          'Parenchymnekrose: Mikrovaskuläre Thrombosierung und Bakterienvermehrung führen zur umschriebenen Verflüssigungsnekrose des Lebergewebes mit Leukozyteninfiltration.',
          'Hypermukoviszitäts-Syndrom: Hypervirulente K. pneumoniae-Stämme (K1/K2) bilden Kapselpolysaccharide, die eine seltene septische metastatische Aussaat (Endophthalmitis, Hirnabszess, Meningitis) ermöglichen.'
        ],
        virulence_factors: ['Hypermukoviszität (rmpA, magA Gene)', 'Siderophore (Aerobactin)', 'B. fragilis Kapsel', 'Zytotoxine']
      },
      clinical: {
        incubation: 'Subakuter Verlauf (Tage bis Wochen)',
        onset: 'Schleichendes, B-symptomatisches Bild',
        symptoms: [
          { name: 'Fieber & Schüttelfrost', description: 'Hohes, remittierendes Fieber mit Schüttelfrost, Nachtschweiß und Krankheitsgefühl (Hauptsymptom bei >85%).', severity: 'moderate' },
          { name: 'Schmerzen im rechten Oberbauch (RUQ)', description: 'Dumpfer, dauerhafter Druckschmerz im rechten Oberbauch, teils pleuritisch in die rechte Schulter ausstrahlend.', severity: 'moderate' },
          { name: 'Anorexie & Gewichtsverlust', description: 'Proline Fatigue, ungewollter Gewichtsverlust, Übelkeit.', severity: 'mild' }
        ],
        physical_exam: [
          'Druckschmerz im rechten Oberbauch, Hepatomegalie',
          'Klopfschmerz über den unteren rechten Rippeninterkostalräumen',
          'Ikterus (in ~25% der Fälle, häufiger bei biliärer Obstruktion)',
          'Dämpfung über der rechten Lungenbasis / abgeschwächtes Atemgeräusch (begleitender Pleuraerguss)'
        ],
        complications: [
          'Abszessruptur in die Bauchhöhle (Peritonitis) oder den Pleuraraum (Empyem)',
          'Metastatische Endophthalmitis (K. pneumoniae Syndrom - Erblindungsgefahr!)',
          'Septischer Schock und Pfortaderthrombose (Pylephlebitis)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Leukozytose mit Linksverschiebung, normochrome Anämie', interpretation: 'Subakutes/chronisches Entzündungsgeschehen' },
          { test: 'Leberwerte', finding: 'Deutlich erhöhte Alkalische Phosphatase (AP) und GGT, variabel erhöhtes Bilirubin', interpretation: 'Cholestatisches Muster bei raumforderndem Prozess' }
        ],
        imaging: [
          { modality: 'Kontrastmittel-CT Abdomen/Becken', finding: 'Hypodense, randschärfende mehr- oder einkammerige Flüssigkeitsansammlung mit perifokalem Parenchym-Hyperämiesaum ("Double-Target Sign")', significance: 'GOLDSTANDARD zur Exakten Lokalisation, Größenbestimmung und Drainagenplanung' },
          { modality: 'Abdomineller Ultraschall', finding: 'Echoarme oder komplexe Raumforderung mit Binnenechos', significance: 'Schnelles Erstlinien-Diagnostik- und Punktionswerkzeug' }
        ],
        microbiology: [
          { test: 'Abszesspunktat-Grampräparat & Kultur', finding: 'Eitriges Punktat liefert bakteriellen Erreger', significance: 'ESSENZIELL für die gezielte antimikrobielle Therapie' },
          { test: 'Blutkulturen', finding: 'Positiv in ~50% der Fälle von pyogenem Leberabszess', significance: 'Vor Antibiose abnehmen' },
          { test: 'E. histolytica Serologie', finding: 'Negativ', significance: 'Ausschluss eines Amöbenabszesses' }
        ],
        differential: [
          { disease: 'Amöbenleberabszess (Entamoeba histolytica)', distinguishing: 'Reiseanamnese in Endemiegebiete, meist solitäre Läsion im rechten Leberlappen, E. histolytica Serologie positiv; PUNKTION NORMALTERWEISE NICHT ERFORDERLICH (Ansprechbarkeit auf Metronidazol)' },
          { disease: 'Echinokokken-Zyste (Echinococcus granulosus / multilocularis)', distinguishing: 'Echinococcus-Serologie, gekammerte Zyste mit Tochterzysten im US/CT; PERKUTANE NADELPUNKTION ROUTINEMÄSSIG KONTRAINDIZIERT (Anaphylaxiegefahr!)' },
          { disease: 'Hepatozelluläres Karzinom / Lebermetastasen', distinguishing: 'Tumormarker (AFP, CEA), hypervaskuläres karterielles Enhancement im CT' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxon + Metronidazol', dose: '2g IV 1x/Tag + 500mg IV q8h', duration: '2–4 Wochen IV, insgesamt 4–6 Wochen', note: 'Standard-First-Line-Regimen' },
            { drug: 'Piperacillin-Tazobactam', dose: '4,5g IV q6h-q8h', duration: '2–4 Wochen IV, insgesamt 4–6 Wochen', note: 'Bei schwerer Erkrankung oder biliärem Fokus' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '2–4 Wochen IV, insgesamt 4–6 Wochen', note: 'Bei septischem Schock oder ESBL-Verdacht' }
          ]
        },
        targeted: 'Oraler Switch (z.B. Ciprofloxacin/Amoxicillin-Clavulansäure + Metronidazol) nach Antibiogramm zur Komplettierung von 4–6 Wochen Gesamtdauer.',
        supportive: [
          'BILDGESTÜTZTE PERKUTANE KATHETERDRAINAGE (PCD) ODER ASPIRATION: Erstlinienintervention zur Herdsanierung! Indiziert bei Abszessen > 3–5 cm.',
          'Ophthalmologisches Konsil zur Funduskopie bei Nachweis von K. pneumoniae (Ausschluss einer septischen Endophthalmitis).'
        ],
        prevention: ['Konsequente Behandlung von Gallenwegserkrankungen und intraabdominellen Infektionen.']
      },
      guidelines: {
        diagnosis: [
          'Diagnostische US- oder CT-gestützte Aspiration zur Erregergewinnung.',
          'Ausschluss amöbener und echinokokkärer Ätiologie vor Intervention.'
        ],
        treatment_indications: [
          'Abszesse < 3–5 cm: Können primär konservativ mit Antibiose ± Aspiration behandelt werden.',
          'Abszesse > 3–5 cm, gekammert oder dicke Eiterstraße: Perkutane Katheterdrainage (PCD) + IV Antibiose.',
          'Chirurgische Drainage: Reserviert für Versagen der PCD, gekammerte Ruptur oder primäre chirurgische Begleitpathologie.'
        ],
        first_line: ['Perkutane Katheterdrainage + IV Ceftriaxon + Metronidazol.'],
        supportive: ['Augenärztliches Screening bei K. pneumoniae.'],
        prevention: ['Sanierung der Gallenwege bei Steinleiden.']
      },
      prognosis: {
        mortality: '5–10% unter perkutaner Drainage; bis zu 40% unbehandelt oder bei Ruptur',
        prognostic_scores: ['APACHE II Score'],
        factors: 'Multiple Abszesse, biliäre Malignome, verzögerte Drainage und metastatische Endophthalmitis verschlechtern die Prognose.'
      }
    },
    {
      id: 'cholangitis',
      name: 'Akute (Aszendierende) Cholangitis',
      pathogen: {
        type: 'Kombiniert (Bakterien)',
        name: '<i>Escherichia coli</i> (25–50%), <i>Klebsiella pneumoniae</i> (15–20%), <i>Enterococcus spp.</i>, <i>Enterobacter</i>, <i>Pseudomonas aeruginosa</i>, <i>Bacteroides fragilis</i>',
        gram: 'Variabel',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: 'Lebensbedrohliche Infektion der Gallenwege infolge einer Abflussbehinderung (Obstruktion)',
        risk_groups: [
          'Choledocholithiasis (Gallengangssteine - häufigste Ursache ~70%)',
          'Maligne biliäre Strikturen (Pankreaskarzinom, Cholangiokarzinom, Ampullenkarzinom)',
          'Verstopfte/okkludierte Gallenwegsstents',
          'Benigne Strikturen oder Zustand nach ERCP'
        ],
        seasonality: 'Keine',
        transmission: 'Aszendierende Besiedlung aus dem Duodenum in das aufgestaute Gallensystem bei erhöhtem Intraduktaldruck'
      },
      pathomechanism: {
        steps: [
          'Biliäre Obstruktion: Gallenwegsobstruktion (Stein, Tumor, verstopfter Stent) führt zum Anstieg des Intraduktaldrucks (>20 cmH₂O).',
          'Bakterienvermehrung: Aus dem Duodenum aufsteigende Bakterien vermehren sich rasch in der stauenden Galle.',
          'Cholangio-venöser Reflux: Der hohe Intraduktaldruck schädigt die Schleimhautbarriere, sodass Bakterien und Endotoxine direkt in die Lebervenen und die systemische Zirkulation gepresst werden (septischer Schock).'
        ],
        virulence_factors: ['Endotoxin (LPS)', 'Adhäsine', 'Biofilmbildung auf Stents']
      },
      clinical: {
        incubation: 'Akuter Beginn',
        onset: 'Rasch progressives, schweres Krankheitsbild',
        symptoms: [
          { name: 'Charcot-Trias', description: 'Fieber/Schüttelfrost + Schmerzen im rechten Oberbauch + Ikterus (klassische Trias in ~50–70% der Fälle voll ausgeprägt).', severity: 'severe' },
          { name: 'Reynolds-Pentade', description: 'Charcot-Trias + Hypotonie (Septischer Schock) + Bewusstseinsstörung (Zervikalität/Verwirrtheit). Beweist Grade III Schwere Cholangitis!', severity: 'severe' }
        ],
        physical_exam: [
          'Ikterus (Skleren- und Hautgelbsucht)',
          'Druckschmerz im rechten Oberbauch / Abwehrspannung',
          'Fieber (>38,5°C) oder Hypothermie',
          'Hypotonie, Tachykardie, Eintrübung in schweren Fällen (Reynolds-Pentade)'
        ],
        complications: [
          'Septischer Schock und Multiorganversagen',
          'Pyogene Leberabszesse',
          'Akutes Nierenversagen (AKI)',
          'Disseminierte intravasale Koagulopathie (DIC)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Leberwerte', finding: 'Massiv erhöhtes direktes/konjugiertes Bilirubin (≥2,0 mg/dL), AP, GGT, AST, ALT', interpretation: 'Cholestatisches Muster mit biliärer Obstruktion' },
          { test: 'Entzündungsparameter', finding: 'Leukozytose (>12.000/µL oder <4.000/µL), erhöhtes CRP und Procalcitonin', interpretation: 'Systemische Entzündungsreaktion / Sepsis' }
        ],
        imaging: [
          { modality: 'Abdomineller Ultraschall', finding: 'Dilatierte intra- und extrahepatische Gallenwege (Ductus choledochus >6–8mm), Gallensteine, Choledocholithiasis', significance: 'Erstlinienbildgebung' },
          { modality: 'MRCP / Kontrastmittel-CT Abdomen', finding: 'Exakte Darstellung von Gallengangssteinen, Tumoren oder Stentokklusionen', significance: 'Bei unklarem Ultraschall' }
        ],
        microbiology: [
          { test: 'Blutkulturen', finding: 'Positiv in 20–50% der Fälle (Gram-negative Stäbchen)', significance: 'Obligat vor Antibiose' },
          { test: 'Gallenkultur', finding: 'Polymikrobielle Kultur, gewonnen während der ERCP-Dekompression', significance: 'Gezielte Erregertherapie' }
        ],
        differential: [
          { disease: 'Akute Cholezystitis', distinguishing: 'Ikterus selten, Gallenwege NICHT erweitert (nur Gallenblasenwand verdickt)' },
          { disease: 'Pyogener Leberabszess', distinguishing: 'Flüssigkeitsansammlung im CT, Ikterus weniger dominierend' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxon + Metronidazol', dose: '2g IV 1x/Tag + 500mg IV q8h', duration: '4–7 Tage nach Dekompression', note: 'Tokyo Guidelines TG18 Grade I-II Ambulant' },
            { drug: 'Piperacillin-Tazobactam', dose: '4,5g IV q6h-q8h', duration: '4–7 Tage nach Dekompression', note: 'TG18 Grade III Schwer / Nosokomial / Okkludierter Stent' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '4–7 Tage nach Dekompression', note: 'Septischer Schock, ESBL-Verdacht' }
          ]
        },
        targeted: 'Anpassung nach Gallenkultur und Blutkultur.',
        supportive: ['Ausschließlich unverzügliche IV Volumenresuszitation, Vasopressoren (Noradrenalin) bei Schock, Intensivüberwachung.'],
        prevention: ['Elektive endoskopische Sanierung von Gangsteinen, rechtzeitiger Stentwechsel.']
      },
      guidelines: {
        diagnosis: [
          'TOKYO GUIDELINES (TG18/TG23) DIAGNOSTISCHE KRITERIEN:',
          'A. Systemische Entzündung: Fieber/Schüttelfrost oder WBC <4,0 oder >10,0 x10⁹/L, CRP ≥1 mg/dL.',
          'B. Cholestase: Ikterus (Bilirubin ≥2,0 mg/dL) oder AP/GGT/AST/ALT >1,5x ULN.',
          'C. Bildgebung: Biliäre Dilatation oder Nachweis der Ätiologie (Stein, Striktur, Stent).',
          'Verdacht: 1 Item A + 1 Item B oder C. Gesichert: 1 Item A + 1 Item B + 1 Item C.'
        ],
        treatment_indications: [
          'TOKYO GUIDELINES (TG18/TG23) SCHWERAGRAD-EINTEILUNG & BILIÄRE DEKOMPRESSIONSSTRATEGIE:',
          'Grade III (Schwer): Organdysfunktion (Schock, Verwirrtheit, PaO2/FiO2 <300, Kreatinin >2,0, INR >1,5) -> NOTFALLMÄSSIGE BILIÄRE DEKOMPRESSION (ERCP / PTC) + Intensivstation + IV Antibiose.',
          'Grade II (Mittelschwer): WBC >12.000, Fieber ≥39°C, Alter ≥75, Bilirubin ≥5 mg/dL -> DRINGLICHE BILIÄRE DEKOMPRESSION (innerhalb von 24–48h) + IV Antibiose.',
          'Grade I (Leicht): Antimikrobielle Therapie; bei fehlendem Ansprechen innerhalb von 24h frühe biliäre Dekompression.'
        ],
        first_line: ['ERCP mit Sphinkterotomie / Steinextraktion / Stenteinlage + Breitspektrum-IV-Antibiose.'],
        supportive: ['Intensivmedizinische Betreuung, Vasopressoren.'],
        prevention: ['Elektive Cholezystektomie nach Ausheilen der akuten Cholangitis.']
      },
      prognosis: {
        mortality: '5–10% bei rechtzeitiger biliärer Dekompression; nahe 100% ohne Dekompression bei schwerer Cholangitis',
        prognostic_scores: ['Tokyo Guidelines TG18/TG23 Severity Score'],
        factors: 'Die unverzügliche endoskopische biliäre Dekompression ist die lebensrettende Notfallintervention.'
      }
    },
    {
      id: 'acute_cholecystitis',
      name: 'Akute Cholezystitis',
      pathogen: {
        type: 'Kombiniert (Bakterien)',
        name: '<i>Escherichia coli, Klebsiella pneumoniae, Enterococcus spp., Enterobacter, Pseudomonas, Anaerobier</i>',
        gram: 'Variabel',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: 'Eines der häufigsten chirurgischen Krankheitsbilder',
        risk_groups: [
          'Gallensteinleiden (Frauen, >40 Jahre, Adipositas, Fertilität - "4 Fs")',
          'Acalculöse Cholezystitis: Schwerstkranke Intensivpatienten, Polytrauma, Verbrennungen, Sepsis, langzeitige TPN'
        ],
        seasonality: 'Keine',
        transmission: 'Einklemmung eines Gallensteins im Ductus cysticus führt zu Abflussbehinderung, Ischämie und sekundärer bakterieller Infektion'
      },
      pathomechanism: {
        steps: [
          'Ductus-cysticus-Okklusion: Eingealterter Gallenstein verlegt den Gallenblasenausfluss.',
          'Wanddistension & Ischämie: Intraluminaler Druck steigt, behindert den venösen/lymphatischen Abfluss und bewirkt Schleimhautischämie sowie chemische Entzündung (Lysolezithin).',
          'Sekundäre bakterielle Infektion: Stauende Galle infiziert sich in 50–80% der Fälle sekundär mit Darmbakterien.',
          'Acalculöse Cholezystitis: Galle-Stase und splanchnische Ischämie führen bei Intensivpatienten direkt zur Gallenblasenwandnekrose ohne Steine.'
        ],
        virulence_factors: ['Bakterielle Schleimhautinvasion', 'Ischämie-verstärkte Endotoxämie']
      },
      clinical: {
        incubation: 'Akuter Beginn',
        onset: 'Zunehmende, schließlich persistierende Bauchschmerzen',
        symptoms: [
          { name: 'Schmerzen im rechten Oberbauch / Epigastrium', description: 'Kontinuierlicher, heftiger Schmerz im rechten Oberbauch mit Ausstrahlung in die rechte Schulter/Lendenregion (>6h persistent).', severity: 'severe' },
          { name: 'Übelkeit & Erbrechen', description: 'Häufiges Begleitsymptom.', severity: 'moderate' },
          { name: 'Fieber & Schüttelfrost', description: 'Leichtes Fieber, das bei Gangrän oder Empyem in hohes Fieber übergeht.', severity: 'moderate' }
        ],
        physical_exam: [
          'Positives Murphy-Zeichen (lokaler Druckschmerz unter dem rechten Rippenbogen führt bei tiefer Inspiration zum abrupten Inspirationsstopp)',
          'Druckschmerz im rechten Oberbauch, lokale Abwehrspannung',
          'Tastbare, schmerzhafte Gallenblasenraumforderung (Hydrops oder Empyem)',
          'Ikterus FEHLT meistens (falls vorhanden, Verdacht auf Choledocholithiasis oder Mirizzi-Syndrom)'
        ],
        complications: [
          'Gangränöse Cholezystitis',
          'Gallenblasenempyem (eitrige Cholezystitis)',
          'Gallenblasenperforation und biliäre Peritonitis',
          'Pericholezystischer Abszess',
          'Gallensteinileus (cholezysto-enterische Fistel)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild & CRP', finding: 'Leukozytose (>12.000/µL) mit Linksverschiebung, deutlich erhöhtes CRP', interpretation: 'Akutes Entzündungsgeschehen' },
          { test: 'Leberwerte', finding: 'Meist normal oder leicht erhöht; ausgeprägte AP/Bilirubin-Erhöhung deutet auf Gallengangsstein hin', interpretation: 'Beurteilung einer Biliärobstruktion oder Cholestase' }
        ],
        imaging: [
          { modality: 'Abdomineller Ultraschall', finding: 'Verdickte Gallenblasenwand (>3–4 mm), pericholezystische Flüssigkeitsstraße, eingekeiltes Gallenstein, sonographisches Murphy-Zeichen', significance: 'GOLDSTANDARD (Sensitivität >90%)' },
          { modality: 'Kontrastmittel-CT / HIDA-Scan', finding: 'CT: Wand-Enhancement, Fettgewebsimbibierung, Perforation. HIDA: Fehlende Gallenblasendarstellung', significance: 'Bei unklarem Ultraschall oder Komplikationsverdacht' }
        ],
        microbiology: [
          { test: 'Blutkulturen', finding: 'Abnahme bei schwerem Verlauf oder Fieber', significance: 'Sepsis-Abklärung' },
          { test: 'Gallenkultur', finding: 'Intraoperative Gallenkultur', significance: 'Erregergerechte Therapie bei komplizierten Fällen' }
        ],
        differential: [
          { disease: 'Akute Cholangitis', distinguishing: 'Ikterus, erweiterte Gallenwege, Reynolds-Pentade' },
          { disease: 'Akute Pankreatitis', distinguishing: 'Lipase >3x ULN erhöht' },
          { disease: 'Ulkuskrankheit', distinguishing: 'Gastroskopiebefund' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxon + Metronidazol', dose: '2g IV 1x/Tag + 500mg IV q8h', duration: 'Bis zur OP / Konsolidierung', note: 'Tokyo Guidelines TG18 Grade I-II Leicht/Mittelschwer' },
            { drug: 'Amoxicillin-Clavulansäure', dose: '1,2g IV q8h', duration: 'Bis zur OP / Konsolidierung', note: 'Alternatives empirisches Regimen' },
            { drug: 'Piperacillin-Tazobactam', dose: '4,5g IV q6h-q8h', duration: 'Bis zur OP / Konsolidierung', note: 'TG18 Grade III Schwer / Acalculös / Nosokomial' }
          ]
        },
        targeted: 'Anpassung nach intraoperativer Gallenkultur.',
        supportive: ['IV Volumenersatz, Schmerztherapie (NSAIDs / Opioide).'],
        prevention: ['Elektive Cholezystektomie bei symptomatischem Gallensteinleiden.']
      },
      guidelines: {
        diagnosis: [
          'TOKYO GUIDELINES (TG18/TG23) DIAGNOSTISCHE KRITERIEN:',
          'A. Lokale Entzündung: Murphy-Zeichen, Schmerz/Druckschmerz/Raumforderung im rechten Oberbauch.',
          'B. Systemische Entzündung: Fieber, erhöhtes CRP, Leukozytose.',
          'C. Bildgebung: Charakteristische Ultraschallbefunde einer akuten Cholezystitis.',
          'Verdacht: 1 Item A + 1 Item B. Gesichert: 1 Item A + 1 Item B + 1 Item C.'
        ],
        treatment_indications: [
          'TOKYO GUIDELINES (TG18/TG23) & WSES-LEITLINIEN SEVERITY & CHIRURGISCHE STRATEGIE:',
          'Grade I (Leicht): FRÜHE LAPAROSKOPISCHE CHOLEZYSTEKTOMIE (Lap-C) innerhalb von 72–96 Stunden ab Symptombeginn ist die Methode der Wahl!',
          'Grade II (Mittelschwer): WBC >18.000, tastbare Raumforderung, Symptome >72h oder lokale Gangrän -> Frühe laparoskopische Cholezystektomie durch erfahrenen Chirurgen; bei hohem OP-Risiko -> Perkutane Transhepatische Gallenblasendrainage (PTGBD).',
          'Grade III (Schwer): Organdysfunktion -> PERKUTANE TRANSHEPATISCHE GALLENBLASENDRAINAGE (PTGBD) + IV Antibiose + Intensivmedizin.'
        ],
        first_line: ['Frühe laparoskopische Cholezystektomie + IV Antibiose (Ceftriaxon+Metronidazol).'],
        supportive: ['Analgesie, PTGBD-Drainage bei Inoperabilität.'],
        prevention: ['Elektive Cholezystektomie bei symptomatischen Gallensteinen.']
      },
      prognosis: {
        mortality: '1–3% insgesamt; höher (>10%) bei acalculöser Cholezystitis oder Gallenblasenperforation',
        prognostic_scores: ['Tokyo Guidelines TG18/TG23 Severity Score'],
        factors: 'Die frühe laparoskopische Cholezystektomie (<72h) senkt Komplikationsraten und Krankenhausverweildauer signifikant.'
      }
    },
    {
      id: 'acute_diverticulitis',
      name: 'Akute Divertikulitis',
      pathogen: {
        type: 'Kombiniert (Bakterien)',
        name: '<i>Escherichia coli, Bacteroides fragilis, Enterococcus spp., Klebsiella, Peptostreptococcus</i>',
        gram: 'Variabel',
        shape: 'Variabel'
      },
      epidemiology: {
        incidence: 'Sehr häufig in westlichen Ländern; bei ~50% der Bevölkerung >60 Jahre liegt eine Divertikulose vor, davon entwickeln 10–25% eine akute Divertikulitis',
        risk_groups: [
          'Alter >50–60 Jahre',
          'Ballaststoffarme, stark verarbeitete westliche Ernährung',
          'Adipositas und Bewegungsmangel',
          'Dauereinnahme von NSAIDs, Korikosteroiden oder Opioiden'
        ],
        seasonality: 'Keine',
        transmission: 'Verlegung und Mikroperforation von Dickdarmdivertikeln (am häufigsten im Colon sigmoideum ~90%)'
      },
      pathomechanism: {
        steps: [
          'Divertikelbildung: Unechte Divertikel (Schleimhautausstülpungen) entstehen an Schwachstellen der Dickdarmmuskulatur (Eintrittsstellen der Vasa recta).',
          'Kotreth-Verlegung & Mikroperforation: Ein Kotstein (Fäkolith) verlegt den Divertikelhals, verursacht fokale Ischämie, bakterielle Überwucherung und Mikroperforation.',
          'Komplizierte Progression: Unkontrollierte Mikroperforation führt zur perikolischen Phlegmone, Abszessbildung, Makroperforation mit eitriger/fäkulenter Peritonitis oder Fistelbildung.'
        ],
        virulence_factors: ['Synergistische polymikrobielle Gewebsnekrose', 'Invasivität der Darmflora']
      },
      clinical: {
        incubation: 'Akuter Beginn',
        onset: 'Zunehmende Unterbauchschmerzen',
        symptoms: [
          { name: 'Schmerzen im linken Unterbauch (LLQ)', description: 'Kontinuierlicher, dumpfer oder krampfartiger Schmerz im linken Unterbauch ("Linksseitige Appendizitis").', severity: 'moderate' },
          { name: 'Fieber & Schüttelfrost', description: 'Leichtes Fieber bei unkompliziertem Verlauf; hohes Fieber mit Schüttelfrost bei Abszess oder Peritonitis.', severity: 'moderate' },
          { name: 'Veränderter Stuhlhabbel', description: 'Obstipation (häufiger) oder Diarrhö, Meteorismus, Tenesmen.', severity: 'mild' }
        ],
        physical_exam: [
          'Druckschmerz im linken Unterbauch, lokale Abwehrspannung',
          'Tastbare schmerzhafte Raumforderung im linken Unterbauch (Phlegmone oder Abszess)',
          'Zeichen der diffusen Peritonitis (Abwehrspannung, Loslassschmerz) bei freier Perforation'
        ],
        complications: [
          'Perikolischer oder Beckenabszess (Hinchey Ib / II)',
          'Freie Perforation mit eitriger oder fäkulenter Peritonitis (Hinchey III / IV)',
          'Fistelbildung (Kolovesikale Fistel -> Pneumaturie, Fäkalurie; Kolovaginale Fistel)',
          'Darmstriktur und Dickdarmileus'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild & CRP', finding: 'Leukozytose mit Linksverschiebung, erhöhtes CRP (>50 mg/L)', interpretation: 'Entzündungsaktivitätsmarker' },
          { test: 'Urinuntersuchung', finding: 'Sterile Pyurie möglich', interpretation: 'Benachbarte Darmentzündung reizt die Harnblase' }
        ],
        imaging: [
          { modality: 'Kontrastmittel-CT Abdomen/Becken', finding: 'Verdickte Darmwand (>4 mm), perikolisches Fettgewebsimbibieren, Divertikel, Abszess, freie extraluminale Luft', significance: 'GOLDSTANDARD zur Diagnose und Hinchey- / WSES-Stadieneinteilung' },
          { modality: 'Koloskopie', finding: 'IM AKUTSTADIUM STRIKT KONTRAINDIZIERT', significance: 'Hohe Gefahr der Konvertierung einer Mikroperforation zur freien Makroperforation! Empfohlen 6 Wochen nach Ausheilung zum Tumorausschluss.' }
        ],
        microbiology: [
          { test: 'Abszesspunktatkultur', finding: 'Polymikrobielle Flora, gewonnen durch perkutane Drainage', significance: 'Gezielte Erregertherapie' }
        ],
        differential: [
          { disease: 'Kolorektales Karzinom', distinguishing: 'CT, gefolgt von elektiver Koloskopie 6 Wochen nach Ausheilung' },
          { disease: 'Chronisch entzündliche Darmerkrankung (Morbus Crohn)', distinguishing: 'Anamnese, Endoskopie' },
          { disease: 'Gynäkologische Erkrankungen (Ovarialzystenruptur, PID)', distinguishing: 'Beckenultraschall' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Rein Symptomatisch-Beobachtend (Keine Antibiotika)', dose: '-', duration: '-', note: 'WSES 2020/2024 & EAES Leitlinien: Bei unkomplizierter CT-gesicherter Divertikulitis (Hinchey 0/Ia) ohne Risikofaktoren völlig ausreichend!' },
            { drug: 'Amoxicillin-Clavulansäure', dose: '875/125mg PO 2x/Tag', duration: '5–7 Tage', note: 'Ambulante Antibiose bei Immunsupprimierten, hoher Komorbidität oder systemischen Zeichen' },
            { drug: 'Ciprofloxacin + Metronidazol', dose: '500mg PO 2x/Tag + 500mg PO 3x/Tag', duration: '5–7 Tage', note: 'Bei Penicillinallergie' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon + Metronidazol', dose: '2g IV 1x/Tag + 500mg IV q8h', duration: '4–7 Tage', note: 'Komplizierte Divertikulitis (Hinchey Ib-II)' },
            { drug: 'Piperacillin-Tazobactam', dose: '4,5g IV q6h-q8h', duration: '4–7 Tage', note: 'Schwere Peritonitis (Hinchey III-IV)' }
          ]
        },
        targeted: 'Anpassung nach Abszesskultur.',
        supportive: [
          'Perkutane CT-gestützte Drainage bei Abszessen ≥ 3–4 cm (Hinchey Ib/II).',
          'Flüssige Kost / Darmruhstellung in der Akutphase.'
        ],
        prevention: ['Ballaststoffreiche Ernährung, reichlich Flüssigkeit, Gewichtsreduktion, Bewegung.']
      },
      guidelines: {
        diagnosis: [
          'Dringliches Kontrastmittel-CT des Abdomens/Beckens zur exakten Festlegung des Hinchey-Stadiums.',
          'Keine Akutkoloskopie; Terminierung erst 6 Wochen nach Abklingen.'
        ],
        treatment_indications: [
          'Unkomplizierte Divertikulitis (Hinchey 0 / Ia): Ambulantes Beobachten OHNE Antibiotika ist bei immunkompetenten Patienten sicher und leitliniengerecht (AVOD- & DIABOLO-Studien / WSES 2024)!',
          'Komplizierte Divertikulitis mit Abszess ≥ 3–4 cm (Hinchey Ib / II): Perkutane Drainage + Antibiose.',
          'Eitrige oder fäkulente Peritonitis (Hinchey III / IV): Dringliche Operation (Hartmann-OP oder primäre Resektion mit Anastomose ± Protektionsileostoma).'
        ],
        first_line: ['Unkompliziert: Beobachtung. Kompliziert: Antibiose + Perkutane Drainage / OP.'],
        supportive: ['Flüssige Ernährung, perkutane Abszessdrainage.'],
        prevention: ['Ballaststoffreiche Kost, Koloskopie nach 6 Wochen zum Karzinomausschluss.']
      },
      prognosis: {
        mortality: '<1% bei unkomplizierter Divertikulitis; bis zu 20% bei fäkulenter Perforation',
        prognostic_scores: ['Hinchey-Klassifikation', 'WSES-Divertikulitis-Staging'],
        factors: 'Hinchey-Stadium und Immunstatus bestimmen das operative Vorgehen und das Überleben.'
      }
    }
  ]
};
