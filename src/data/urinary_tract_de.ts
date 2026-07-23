import { Category } from '../types';

export const urinaryTractDe: Category = {
  name: 'Harnwegsinfektionen',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'Gemäß den EAU-Leitlinien 2025/2026 werden Harnwegsinfektionen klassifiziert in: lokalisierte unkomplizierte untere HWI (Zystitis), lokalisierte unkomplizierte obere HWI (Pyelonephritis), systemische / komplizierte HWI (bei Risikofaktoren, anatomischen/funktionellen Veränderungen oder Kathetern), bakterielle Prostatitis (akut und chronisch) sowie asymptomatische Bakteriurie (ASB).',
    lower: 'Untere HWI (Zystitis): Akute Dysurie, Pollakisurie, Harndrang, suprapubische Beschwerden OHNE systemische Zeichen (Fieber, Flankenschmerz). Eine Urinkultur ist laut EAU 2025/2026 nicht routinemäßig erforderlich.',
    upper: 'Obere HWI (Pyelonephritis): Fieber (>38°C), Schüttelfrost, Flankenschmerz, Giordano-Zeichen, Übelkeit/Erbrechen. Urinkultur obligat; bei Symptompersistenz nach 48–72h Bildgebung (CT/Ultraschall).',
    diagnostics: [
      '1) Beurteilung von Anamnese und klinischen Symptomen (Vorhandensein/Fehlen von Fieber und Flankenschmerz)',
      '2) Urinstreifen und Urinsediment (Leukozytenesterase, Nitrit, Pyurie)',
      '3) Urinkultur (obligatorisch bei Pyelonephritis, komplizierten Fällen, Rezidiven oder Schwangerschaft)',
      '4) Entzündungslabor (Blutbild, CRP, Procalcitonin) und Nierenfunktion bei systemischen Symptomen',
      '5) Abdomineller/Becken-Ultraschall oder CT bei Verdacht auf Obstruktion, Abszess oder Therapieversagen'
    ],
    red_flags: [
      'Zeichen der Sepsis / septischer Schock (Hypotonie, Tachykardie, Tachypnoe, Verwirrtheit)',
      'Akute Obstruktion der Harnwege (Harnstein, Prostatahyperplasie) mit Stauung',
      'Fieberhafte Pyelonephritis in der Schwangerschaft',
      'Fehlende orale Toleranz (schweres Erbrechen)',
      'Immunsuppression oder persisierenden Fieber >72h unter adäquater Antibiose'
    ],
    special_populations: 'Ältere: häufig atypische Symptome (Delir, Verwirrtheit, Sturz) – niedrige Schwelle zur Diagnostik, aber KEINE Antibiose bei asymptomatischer Bakteriurie! Schwangere: ASB muss gescreened und behandelt werden. Männer: HWI gilt immer als kompliziert oder Prostatitis.',
    teaching_tip: 'Fluorchinolone (Ciprofloxacin, Levofloxacin) sollten empirisch bei unkomplizierter Zystitis gemäß EAU 2025/2026 STRENG VERMIEDEN werden (Gefahr schwerer Kollateralschäden und Resistenzentwicklung)!'
  },
  diseases: [
    {
      id: 'cystitis',
      name: 'Akute unkomplizierte Zystitis (Blasenentzündung)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: '50% aller Frauen mindestens einmal im Leben, 20-30% Rezidivrisiko',
        risk_groups: ['Sexuell aktive prämenopausale Frauen', 'Postmenopausale Frauen (Östrogenmangel)', 'Schwangerschaft', 'Neuer Sexualpartner oder Spermidine-Nutzung'],
        seasonality: 'Keine',
        transmission: 'Aufsteigende (aszendierende) Infektion aus der Perineal- und Periurethralflora'
      },
      pathomechanism: {
        steps: [
          'Kolonisation: Uropathogene Darmbakterien (UPEC) besiedeln den periurethralen Bereich und den Vaginaleingang.',
          'Aufstieg: Bakterien steigen über die kurze weibliche Urethra in die Harnblase auf.',
          'Adhärenz und Invasion: Bakterien haften mittels Typ-1- und P-Fimbrien an Uroplakin-Molekülen des Blasenurothels und bilden intrazelluläre bakterielle Gemeinschaften (IBC).',
          'Entzündungsreaktion: Die Bakterien und Toxine lösen eine heftige Schleimhautentzündung, Hyperämie, Ödematrisierung und Reizung der Blasennerven aus.'
        ],
        virulence_factors: ['Typ-1- und P-Fimbrien (Adhärenz)', 'Hämolysin (Urothel-Schädigung)', 'Aerobactin (Eisengewinnung)']
      },
      clinical: {
        incubation: '1-3 Tage',
        onset: 'Akut, plötzlicher Beginn',
        symptoms: [
          { name: 'Dysurie', description: 'Brennendes, stechendes Gefühl während und am Ende des Wasserlassens.', severity: 'moderate' },
          { name: 'Pollakisurie', description: 'Häufiges Entleeren kleiner Urinmengen aufgrund gesteigerter Reizbarkeit der Blasenwand.', severity: 'moderate' },
          { name: 'Harndrang (Urgencly)', description: 'Plötzlicher, zwingender Harndrang, der schwer zu unterdrücken ist.', severity: 'moderate' },
          { name: 'Suprapubischer Schmerz', description: 'Druck, dumpfer Schmerz oder krampfartige Beschwerden über dem Schambein.', severity: 'mild' },
          { name: 'Terminale Hämaturie', description: 'Makroskopisch blutiger Urin am Ende der Miktion (~30% der Fälle).', severity: 'mild' },
          { name: 'Fehlen von Fieber', description: 'Systemische Zeichen (Fieber, Schüttelfrost, Flankenschmerz) FEHLEN. Wenn Fieber auftritt, liegt eine Pyelonephritis nahe!', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubische Druckempfindlichkeit bei Unterbauchpalpation',
          'FEHLEN von Fieber und Flankenklopfschmerz (Giordano-Zeichen negativ)',
          'Fehlen von vaginalem Ausfluss (Differenzierung zur Vulvovaginitis)',
          'Unauffällige Vitalparameter'
        ],
        complications: ['Aszendierende akute Pyelonephritis', 'Rezidivierende Zystitis (rUTI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinstreifen', finding: 'Leukozytenesterase+, Nitrit+ (bei Gram-negativen Stäbchen)', interpretation: 'Bei typischen Symptomen hoher positiver Vorhersagewert (>90%)' },
          { test: 'Urinsediment', finding: 'Pyurie (>10 Leukozyten/Gesichtsfeld)', interpretation: 'Befürwortet untere Harnwegsentzündung' }
        ],
        imaging: [
          { test: 'Bildgebung nicht indiziert', finding: 'Routinemäßig nicht erforderlich', interpretation: 'Nur bei Komplikationen oder atypischem Verlauf' }
        ],
        microbiology: [
          { test: 'Urinkultur (EAU 2025/2026)', finding: '≥10^3 KBE/ml uropathogener Keim', significance: 'Routinemäßig bei unkomplizierter Zystitis NICHT erforderlich! Indikationen: Verdacht auf Pyelonephritis, Rezidiv innerhalb von 2-4 Wochen, atypische Symptome, Schwangerschaft.' }
        ]
      },
      differential: [
        { disease: 'Vaginitis / Vulvovaginitis', distinguishing: 'Vaginaler Ausfluss, Juckreiz, externe Dysurie' },
        { disease: 'Urethritis (STD)', distinguishing: 'Schleichender Beginn, neuer Sexualpartner, urethraler Ausfluss, sterile Pyurie' },
        { disease: 'Interstitielle Zystitis / Blasenschmerzsyndrom', distinguishing: 'Chronischer (>6 Wochen) Schmerz bei voller Blase, negative Urinkultur' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin-Trometamol', dose: '3g p.o.', duration: '1x Einzeldosis', note: 'EAU 2025/2026 Erste Wahl (First-line)' },
            { drug: 'Nitrofurantoin', dose: '2x100mg p.o. (Makrokristalle)', duration: '5 Tage', note: 'EAU 2025/2026 Erste Wahl (First-line)' },
            { drug: 'Pivmecillinam', dose: '3x400mg p.o.', duration: '3-5 Tage', note: 'EAU 2025/2026 Erste Wahl (First-line)' },
            { drug: 'Nitroxolin', dose: '3x250mg p.o.', duration: '5 Tage', note: 'EAU 2025/2026 Akzeptierte Alternative' }
          ],
          inpatient: [
            { drug: 'Keine stationäre Aufnahme erforderlich', dose: '-', duration: '-', note: 'Außer bei schweren Komplikationen' }
          ]
        },
        targeted: 'Gezielt nach Antibiogramm. EAU 2025/2026 Warnung: Fluorchinolone (Ciprofloxacin, Levofloxacin) und orale Cephalosporine der 3. Generation EMPIRISCH VERMEIDEN bei unkomplizierter Zystitis!',
        supportive: [
          'Nicht-pharmakologische Therapie: Reichliche Flüssigkeitszufuhr (mind. 2,0–2,5 Liter/Tag zum mechanischen Auswaschen von Bakterien).',
          'Regelmäßige Blasenentleerung, Unterdrückung des Harndrangs vermeiden.',
          'Symptomatische Schmerzlinderung: NSAR (z. B. Ibuprofen 3x400mg p.o. für 3–5 Tage) als Monotherapie bei milden Symptomen im Rahmen des Antibiotic Stewardship denkbar.',
          'Wärmeanwendung am Unterbauch (Wärmflasche) zur Krampflösung.',
          'Phytotherapie: Bärentraubenblätter-Extrakt (Uvae ursi folium) kurzfristig möglich.'
        ],
        prevention: [
          'Verhaltensmaßnahmen: Reichliche Flüssigkeitszufuhr (>2L/Tag), Miktion nach dem Geschlechtsverkehr (innerhalb von 15 Min.), Vermeidung von Diaphragmen/Spermidinen, Hygiene von vorne nach hinten.',
          'EAU 2025/2026 Nicht-antibiotische Prophylaxe (Dringend empfohlen bei rUTI):',
          '1) Lokale / Topische Östrogentherapie (Estriol-Creme/Zäpfchen): Bei Postmenopause stellt dies die laktobazilläre Vaginalflora wieder her (Starke EAU-Empfehlung!).',
          '2) Immunprophylaxe / Orale Immunstimulation (OM-89 / Uro-Vaxom®): 1 Kapsel/Tag p.o. für 3 Monate (Starke EAU-Empfehlung!).',
          '3) D-Mannose: 2g/Tag p.o.',
          '4) Blaseninstillation (GAG-Schicht-Ersatz): Hyaluronsäure + Chondroitinsulfat (HA/CS) bei refraktärer rUTI.',
          '5) Methenaminhippurat: 2x1g/Tag p.o. bei intakter Anatomie.',
          '6) Probiotika: Vaginales Lactobacillus crispatus.',
          'Antibiotikaprophylaxe (Nur als letzte Option): Postkoital (Nitrofurantoin 50mg oder Fosfomycin 3g) oder niedrig dosierte Langzeitprophylaxe für 3–6 Monate (Nitrofurantoin 50–100mg abends oder Fosfomycin 3g alle 10 Tage).'
        ]
      },
      prognosis: {
        mortality: 'Keine Mortalität',
        factors: 'Neigung zu Rezidiven (20–30% Rezidivrate)'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Akute unkomplizierte Pyelonephritis (Nierenbeckenentzündung)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (75-80%)', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: '10-12 Fälle per 10.000 Frauen pro Jahr; Komplikation einer unbehandelten Zystitis',
        risk_groups: ['Junge sexuell aktive Frauen', 'Schwangerschaft', 'Anatomische/funktionelle Harnwegsanomalien', 'Diabetes mellitus'],
        seasonality: 'Keine',
        transmission: 'Aszendierende Infektion aus der Blase über den Ureter (95%), selten hämatogen'
      },
      pathomechanism: {
        steps: [
          'Aufstieg: Erreger steigen aus der Blase über den Ureter ins Nierenbecken auf.',
          'Parenchyminvasion: Erreger dringen in das Nierenparenchym (vor allem das Mark) ein.',
          'Akute Entzündungsreaktion: Starke neutrophile Infiltration, interstitielles Ödem, Mikroabszessbildung und Tubulusnekrosen.',
          'Systemische Translokation: Entzündungsmediatoren (IL-1, IL-6, TNF-alpha) und Endotoxine gelangen in die Blutbahn und verursachen Fieber und Schüttelfrost.'
        ],
        virulence_factors: ['P-Fimbrien (Pyelonephritis-associated pili)', 'Endotoxin (LPS)', 'Kapsel-Antigen (K-Antigen)']
      },
      clinical: {
        incubation: '1-3 Tage nach Zystitis',
        onset: 'Akut, heftig',
        symptoms: [
          { name: 'Hohes Fieber und Schüttelfrost', description: 'Plötzliches hohes Fieber (>38,5°C), Schüttelfrost und profuses Schwitzen als Zeichen der Parenchym- und Blutbahnbeteiligung.', severity: 'severe' },
          { name: 'Flankenschmerz / CVA-Druckschmerz', description: 'Ein- oder beidseitiger dumpfer, anhaltender Flankenschmerz durch Kapseldehnung der Niere.', severity: 'severe' },
          { name: 'Gastrointestinale Symptome', description: 'Nausea, Vomitus, Anorexie durch reffektive peritoneale/zöliakale Reizung.', severity: 'moderate' },
          { name: 'Untere Harnwegssymptome', description: 'Dysurie, Pollakisurie und Harndrang können vorhanden sein, fehlen aber in 30-50% der Fälle!', severity: 'moderate' },
          { name: 'Atypische Präsentation bei Älteren', description: 'Fehlendes Fieber; stattdessen Delir, Verwirrtheit, Abgeschlagenheit und Hypotonie.', severity: 'severe' }
        ],
        physical_exam: [
          'Giordano-Zeichen positiv: Klopfschmerz im costovertebralen Winkel (CVA)',
          'Fieber (>38,5°C), Tachykardie, reduzierter Allgemeinzustand',
          'Abdominelle Druckempfindlichkeit im ipsilateralen Hypochondrium möglich',
          'Zeichen der Dehydratation'
        ],
        complications: ['Nierenabszess / Perinephritischer Abszess', 'Urosepsis und septischer Schock', 'Emphysematöse Pyelonephritis (Diabetiker)', 'Papillennekrose', 'Akutes Nierenversagen (AKI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Deutliche Leukozytose mit Linksverschiebung', interpretation: 'Systemische bakterielle Infektion' },
          { test: 'CRP und Procalcitonin (PCT)', finding: 'Deutlich erhöht (CRP >100 mg/L, PCT >0,5 ng/mL)', interpretation: 'Zeigt Parenchym- und Sepsisrisiko an' },
          { test: 'Nierenfunktion & Elektrolyte', finding: 'Erhöhung von Kreatinin, Harnstoff', interpretation: 'Nierenfunktionseinschränkung oder Dehydratation' },
          { test: 'Urinsediment', finding: 'Ausgeprägte Pyurie, Leukozytenzylinder (pathognomonisch für obere HWI!)', interpretation: 'Beweist Nierenparenchyminfektion' }
        ],
        imaging: [
          { modality: 'CT Abdomen/Becken (EAU 2025/2026)', finding: 'Keilförmige Hypodensitäten, Nierenvergrößerung, perinephritisches Ödem', significance: 'Goldstandard zum Ausschluss von Abszessen oder Obstruktion bei Fieberpersistenz nach 48–72h.' },
          { modality: 'Nieren-Ultraschall', finding: 'Harnstauung (Hydronephrose), Nierenstein, Abszess', significance: 'Erste strahlenfreie Bildgebung' }
        ],
        microbiology: [
          { test: 'Urinkultur (EAU 2025/2026)', finding: '≥10^4 KBE/ml uropathogener Keim', significance: 'IMMER OBLIGATORISCH vor Antibiotikagabe!' },
          { test: 'Blutkultur', finding: 'Bakteriämie (~15–20% positiv)', significance: 'Obligat bei stationärer Aufnahme oder septischem Bild' }
        ]
      },
      differential: [
        { disease: 'Urolithiasis (Nierenstein)', distinguishing: 'Kolikartiger Schmerz, kein Fieber (ohne Infektion), Hämaturie dominiert' },
        { disease: 'Akute Appendizitis / Cholezystitis', distinguishing: 'Abdominalbefund, Ultraschall, keine Pyurie' },
        { disease: 'Pelvic Inflammatory Disease (PID)', distinguishing: 'Gynäkologischer Befund, vaginaler Ausfluss' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '7 Tage', note: 'EAU 2025/2026 First-line orale Option' },
            { drug: 'Cefpodoxim-Proxetil', dose: '2x200mg p.o.', duration: '10 Tage', note: 'Oraler 3. Gen. Cephalosporin-Ersatz' },
            { drug: 'Ciprofloxacin', dose: '2x500mg p.o.', duration: '7 Tage', note: 'NUR wenn lokale E. coli Resistenz <10%! (EAU 2025/2026)' },
            { drug: 'Levofloxacin', dose: '1x750mg p.o.', duration: '5 Tage', note: 'NUR wenn lokale E. coli Resistenz <10%! (EAU 2025/2026)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g i.v.', duration: '10-14 Tage', note: 'EAU 2025/2026 Erste Wahl i.v.' },
            { drug: 'Cefotaxim', dose: '3x2g i.v.', duration: '10-14 Tage', note: 'Parenterale Alternative' },
            { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '10-14 Tage', note: 'Bei Pseudomonas oder vorheriger AB-Gabe' },
            { drug: 'Gentamicin / Amikacin', dose: 'Einzeldosis i.v.', duration: '3-5 Tage', note: 'Kombinationsoption bei schweren Fällen' }
          ]
        },
        targeted: 'Anpassung nach Antibiogramm. Bei oraler Betalaktam-Therapie wird eine initiale Einzeldosis Ceftriaxon (1g i.v.) oder Aminoglykosid in der Notaufnahme empfohlen!',
        supportive: [
          'Nicht-pharmakologische Therapie: Rehydratation (i.v. Kristalloid-Infusion oder p.o. reichlich Flüssigkeit) zur Nierenperfusion.',
          'Bettruhe während der fieberhaften Phase.',
          'Analgesie und Antipyrese: Paracetamol (3-4x500-1000mg p.o./i.v.) oder Metamizol (3-4x500-1000mg i.v./p.o.). NSAR mit Vorsicht unter Nierenfunktionskontrolle.',
          'Antiemetika (Metoclopramid 3x10mg i.v./p.o. oder Ondansetron) zur Sicherung der oralen Toleranz.',
          'Überwachung von Vitalparametern (BD, Puls, Diurese) und Nierenwerten.'
        ],
        prevention: [
          'Frühzeitige, adäquate Behandlung von Zystitiden.',
          'EAU 2025/2026 nicht-antibiotische Präventionsmaßnahmen.',
          'Korrektur anatomischer Urinstauungen.'
        ]
      },
      prognosis: {
        mortality: '<1% unter adäquater Therapie, jedoch 10-20% bei Urosepsis oder emphysematösem Verlauf',
        factors: 'Hohes Alter, Diabetes, Uretherobstruktion, MDR/ESBL-Erreger'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Systemische / Komplizierte Harnwegsinfektion',
      pathogen: { type: 'Bakterium', name: '<i>E. coli, Enterococcus faecalis, Pseudomonas aeruginosa, Klebsiella, Proteus, Enterobacter</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: 'Häufig im nosokomialen Umfeld, bei urologischen und katheterisierten Patienten',
        risk_groups: ['Katheterträger (CAUTI)', 'Männer', 'Schwangere', 'Neurogene Blase / Obstruktion', 'Niereninsuffizienz / Transplantat', 'Immunsuppression / Diabetes'],
        seasonality: 'Keine',
        transmission: 'Aszendierend, katheterassoziiert (Biofilm), nosokomial'
      },
      pathomechanism: {
        steps: [
          'Prädisponierende Faktoren: Anatomische (Striktur, Stein, BPH) oder funktionelle Abflussstörungen oder Fremdkörper (Katheter, Stent) behindern die Miktion.',
          'Biofilmbildung: Bakterien (insb. Proteus, Pseudomonas, Enterokokken) bilden einen resistenten Biofilm auf Fremdkörpern.',
          'Parenchym- und systemische Invasion: Bakterien gelangen in das Gewebe und die Blutbahn, was Urosepsis auslöst.'
        ],
        virulence_factors: ['Biofilmbildung', 'Multiresistenz (ESBL, AmpC, Carbapenemase)', 'Ureaseproduktion (Proteus - Infektsteine)']
      },
      clinical: {
        incubation: 'Variabel',
        onset: 'Variabel (oligosymptomatisch bis schwer septisch)',
        symptoms: [
          { name: 'Systemische Entzündungssymptome', description: 'Hohes Fieber, Schüttelfrost, Tachykardie, Tachypnoe.', severity: 'severe' },
          { name: 'Zeichen der Urosepsis / Septischer Schock', description: 'Hypotonie (RR <90 mmHg), Oligurie (<0,5 ml/kg/h), Verwirrtheit, Laktatanstieg – SOFORTIGER HANDLUNGSBEDARF!', severity: 'severe' },
          { name: 'Flanken- / Suprapubischer Schmerz', description: 'Kann vorhanden sein, fehlt aber oft bei Katheter- oder neurogenen Patienten.', severity: 'moderate' },
          { name: 'Untere Harnwegssymptome', description: 'Dysurie, Trüber/übelriechender Urin, Katheterblockade.', severity: 'moderate' },
          { name: 'Oligosymptomatisch bei Älteren', description: 'Delir oder RR-Abfall als einziges Zeichen.', severity: 'severe' }
        ],
        physical_exam: [
          'Fieber oder Hypothermie (<36°C), Tachykardie, Tachypnoe',
          'Flanken- oder suprapubischer Druckschmerz',
          'Verweilkatheter, Cystostoma oder Ureterstent vorhanden',
          'Schockzeichen (kühle, marmorierte Extremitäten, verlängerte Rekapillarisierungszeit)'
        ],
        complications: ['Urosepsis und septischer Schock (20–40% Mortalität)', 'Akutes Nierenversagen (AKI)', 'Nierenabszess', 'Pyonephrose']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinkultur (EAU 2025/2026)', finding: 'Frauen: ≥10^5 KBE/ml, Männer/Katheter: ≥10^4 KBE/ml', interpretation: 'IMMER OBLIGATORISCH vor Antibiose!' },
          { test: 'Blutkultur', finding: '2 Sets obligat bei septischem Bild', interpretation: 'Bakteriämienachweis' },
          { test: 'Entzündungs- & Nierenwerte', finding: 'Procalcitonin (PCT), CRP, Leukozyten, Kreatinin, Laktat, Blutgas', interpretation: 'Sepsis- und Organfunktionsmonitoring' }
        ],
        imaging: [
          { modality: 'CT-Urographie / Becken-CT (EAU 2025/2026)', finding: 'Obstruktion, Abszess, Infektstein, Emphysem', significance: 'OBLIGATORISCH zur Klärung der Herdsanierung!' },
          { modality: 'Notfall-Ultraschall', finding: 'Hydronephrose, Pyonephros', significance: 'Sofortiger Ausschluss einer Abflussstörung' }
        ],
        microbiology: [
          { test: 'Erregerdifferenzierung + Antibiogramm', finding: 'MDR-Verdacht', significance: 'Basis gezielter Therapie' }
        ]
      },
      differential: [
        { disease: 'Unkomplizierte Pyelonephritis', distinguishing: 'Keine Abflussstörung, keine Risikofaktoren' },
        { disease: 'Akute Prostatitis', distinguishing: 'Schmerzhafte, geschwollene Prostata bei DRU' },
        { disease: 'Andere Sepsisursachen', distinguishing: 'Anamnese, Herddiagnostik' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '7-14 Tage', note: 'Nur bei milden Verläufen ohne Septikämie' },
            { drug: 'Ciprofloxacin / Levofloxacin', dose: 'p.o.', duration: '7-14 Tage', note: 'Nur wenn keine Chinolone in den letzten 6 Monaten und Resistenz <10% (EAU 2025/2026)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x2g i.v.', duration: '7-14 Tage', note: 'First-line Option' },
            { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '7-14 Tage', note: 'Bei Pseudomonas-Verdacht' },
            { drug: 'Cefepim', dose: '2x2g i.v.', duration: '7-14 Tage', note: 'Pseudomonas- und Enterobacteriaceae-Abdeckung' },
            { drug: 'Meropenem', dose: '3x1g i.v.', duration: '7-14 Tage', note: 'Bei ESBL-Risiko oder septischem Schock' },
            { drug: 'Ceftazidim/Avibactam oder Cefiderocol', dose: 'i.v.', duration: '7-14 Tage', note: 'Bei multiresistenten (MDR) Gram-negativen Keimen (EAU 2025/2026)' }
          ]
        },
        targeted: 'HERDSANIERUNG (Source Control) SOFORT: Entlastung der gestauten Niere (perkutane Nephrostomie oder DJ-Stent), sofortiger Wechsel oder Entfernung des Katheters!',
        supportive: [
          'Nicht-pharmakologische Therapie / Herdsanierung: Aseptischer Katheterwechsel (Entfernung des Biofilms).',
          'Sepsis-Bundles: Agressive i.v. Flüssigkeitsgabe (Kristalloide 30 ml/kg in den ersten 3 Stunden).',
          'Vasopressoren (Noradrenalin) bei MAP <65 mmHg trotz Infusion.',
          'Urologisch-invasive Intervention (Abszessdrainage, Steinentfernung).',
          'Intensivmedizinische Überwachung (Diurese, Laktat, Blutgase).'
        ],
        prevention: [
          'Indikation für Katheterisierung streng prüfen (frühestmögliche Entfernung!).',
          'Geschlossene Kathetersysteme, aseptische Katheterpflege.',
          'Vermeidung der unnötigen Behandlung asymptomatischer Bakteriurien.',
          'Urologische Korrektur anatomischer Hindernisse.'
        ]
      },
      prognosis: {
        mortality: '20–40% bei Urosepsis und septischem Schock',
        factors: 'Hohes Alter, unzureichende Herdsanierung, MDR-Erreger, schwere Begleiterkrankungen'
      }
    },
    {
      id: 'prostatitis',
      name: 'Akute und chronische bakterielle Prostatitis',
      pathogen: { type: 'Bakterium', name: '<i>E. coli</i> (80%), <i>Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus faecalis</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: '10–15% aller Männer im Laufe ihres Lebens; 8% aller urologischen Konsile',
        risk_groups: ['Junge und mittelalte Männer', 'Nach Prostatabiopsie', 'Blasenkatheterträger', 'BPH / Beckenbutstörungen', 'HIV / Diabetes'],
        seasonality: 'Keine',
        transmission: 'Aszendierend durch intraprostatischen Reflux, direkte Inokulation nach transrektaler Biopsie'
      },
      pathomechanism: {
        steps: [
          'Intraprostatischer Reflux: Infizierter Urin gelangt unter hohem Miktionsdruck in die Prostatagänge.',
          'Akute Entzündung (NIH Type I - ABP): Stromaödem, leukozytäre Infiltration und Mikroabszesse führen zu Schwellung und Spannung der Prostata.',
          'Chronifizierung (NIH Type II - CBP): Bakterien bilden Biofilme auf Prostatasteinen oder in den Drüsengängen, was zu rezidivierenden Infektionen führt.'
        ],
        virulence_factors: ['Biofilmbildung', 'Gewebebarriere (Prostatakapsel und saurer pH behindern viele Antibiotika)']
      },
      clinical: {
        incubation: '1-7 Tage',
        onset: 'Akut (ABP) plötzliche Fieberschübe; Chronisch (CBP) schleichend, anhaltend (>3 Monate)',
        symptoms: [
          { name: 'Akut: Systemische Fiebersymptome', description: 'Hohes Fieber, Schüttelfrost, Myalgien, grippeähnliches Krankheitsgefühl.', severity: 'severe' },
          { name: 'Pelviner / Perinealer Schmerz', description: 'Schmerzen im Dammbereich (Perineum), Rektum, Suprapubisch, mit Ausstrahlung in Penis und Hoden.', severity: 'severe' },
          { name: 'LUTS und Miktionsbeschwerden', description: 'Ausgeprägte Dysurie, Pollakisurie, Harndrang, schwacher Harnstrahl.', severity: 'moderate' },
          { name: 'Akuter Harnverhalt', description: 'Geschwollene Prostata führt zu kompletter Obstruktion mit schmerzhafter Blasenüberdehnung.', severity: 'severe' },
          { name: 'Chronisch: Wiederkehrende Beschwerden', description: 'Becken- und Dammdruck, schmerzhafte Ejakulation, rezidivierende Zystitiden mit demselben Keim.', severity: 'moderate' }
        ],
        physical_exam: [
          'Digitale Rektale Untersuchung (DRU):',
          'BEI AKUTER PROSTATITIS: Prostata ist geschwollen, heiß, prall-elastisch und EXTREM DRUCKEMPFINDLICH. PROSTATAMASSAGE IST BEI AKUTER PROSTATITIS STRENG VERBOTEN (Gefahr der Bakteriämie und Urosepsis!)',
          'BEI CHRONISCHER PROSTATITIS: Prostata unauffällig, derber oder leicht druckschmerzhaft.',
          'Suprapubische Dämpfung bei Harnverhalt.'
        ],
        complications: ['Prostataabszess', 'Urosepsis', 'Akuter Harnverhalt', 'Epididymoorchitis', 'Übergang in chronisches Beckenschmerzsyndrom (CPPS)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinsediment & Teststreifen', finding: 'Pyurie, Bakteriurie', interpretation: 'Bestätigt HWI' },
          { test: 'Entzündungswerte', finding: 'Leukozytose, deutlich erhöhtes CRP', interpretation: 'Systemische Entzündung' },
          { test: 'Serum-PSA', finding: 'Stark erhöht (oft >20–50 ng/ml)', interpretation: 'Reaktiv durch Entzündung! Nicht zur Krebsdiagnostik in der Akutphase; Kontrolle 2–3 Monate nach Ausheilung.' }
        ],
        imaging: [
          { modality: 'Transrektaler Ultraschall (TRUS) / Becken-MRT', finding: 'Prostataabszess (hypoechogene/flüssigkeitsgefüllte Höhle)', significance: 'Indiziert bei Fieberpersistenz nach 48–72h Antibiose.' }
        ],
        microbiology: [
          { test: 'Akut: Mittelstrahl-Urinkultur (EAU 2025/2026)', finding: '≥10^4 KBE/ml uropathogen', significance: 'OHNE Prostatamassage gewinnen!' },
          { test: 'Chronisch: Meares-Stamey-4-Gläser-Test oder 2-Gläser-Test (EAU 2025/2026)', finding: '10-fach höhere Keimzahl im Urin nach Massage (VB3) oder Prostatasekret (EPS) im Vergleich zum Urin vor Massage (VB2)', significance: 'Goldstandard bei chronischer bakterieller Prostatitis!' }
        ]
      },
      differential: [
        { disease: 'BPH (Benigne Prostatahyperplasie)', distinguishing: 'Langsame Progression, keine Infektzeichen, kein Fieber' },
        { disease: 'Chronisches Beckenschmerzsyndrom (CPPS / NIH Type III)', distinguishing: 'Schmerzen vorhanden, aber Urin- und Sekretkulturen dauerhaft negativ' },
        { disease: 'Prostatakarzinom', distinguishing: 'Keine Akutsymptome, derber Knoten bei DRU, Kultur negativ' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fluorchinolone (Levofloxacin / Ciprofloxacin)', dose: 'Levofloxacin 1x500mg p.o. oder Ciprofloxacin 2x500mg p.o.', duration: 'Akut: 2-4 Wochen, Chronisch: 4-6 Wochen!', note: 'EAU 2025/2026 Erste Wahl aufgrund exzellenter Gewebepenetration' },
            { drug: 'Trimethoprim-Sulfamethoxazol (Cotrimoxazol)', dose: '2x960mg p.o.', duration: '4-6 Wochen', note: 'Alternative bei chronischer Prostatitis' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x2g i.v.', duration: 'Bis zur Entfieberung, dann p.o. Wechsel', note: 'Bei schwerer akuter Prostatitis' },
            { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: 'Bis zur Entfieberung', note: 'Bei septischen oder nosokomialen Fällen' }
          ]
        },
        targeted: 'Gezielt nach Antibiogramm. EAU 2025/2026: Substanzen mit hoher Lipophilie wählen (Fluorchinolone, Cotrimoxazol, Doxycyclin).',
        supportive: [
          'Nicht-pharmakologische Therapie / Harnableitung: Bei akutem Harnverhalt ist eine SUPRAPUBISCHE ZYSTOSTOMIE obligat! Transurethrale Katheterisierung bei akuter Prostatitis VERMEIDEN (Urosepsisrisiko).',
          'Alpha-1-Adrenorezeptorblocker (z.B. Tamsulosin 0,4mg p.o. 1x/Tag) zur Entspannung des Blasenhalses und Erleichterung der Miktion.',
          'Analgesie und Entzündungshemmung: NSAR (Ibuprofen 3x400mg p.o. oder Celecoxib) für 2–4 Wochen.',
          'Warme Sitzbäder (38–40°C), Entlastung des Damms (spezielle Sitzkissen).',
          'Stuhlregulierung, reichliche Flüssigkeitszufuhr.'
        ],
        prevention: [
          'Frühzeitige, vollständige Therapie von HWI.',
          'EAU 2025/2026 Empfehlung vor Prostatabiopsie: Gezielte Rektalabstrich-basierte Prophylaxe oder Ceftriaxon/Fosfomycin (Fluorchinolon-Monotherapie vermeiden!).'
        ]
      },
      prognosis: {
        mortality: 'Sehr gering unter Therapie, aber Sepsisrisiko akuten Verläufen; Chronisch beeinträchtigt Lebensqualität erheblich',
        factors: 'Abszessbildung, Biofilm, Übergang in CPPS'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Asymptomatische Bakteriurie (ASB)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli, Enterococcus faecalis, Klebsiella, Proteus, Streptococcus agalactiae (GBS)</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: 'Gesunde Frauen: 3-5%, Diabetikerinnen: 9-27%, Pflegeheimbewohner: 25-50%, Dauerkatheterträger: 100%',
        risk_groups: ['Ältere', 'Diabetiker', 'Katheterträger', 'Schwangere', 'Rückenmarksverletzte'],
        seasonality: 'Keine',
        transmission: 'Endogene Uropathogen-Kolonisation'
      },
      pathomechanism: {
        steps: [
          'Kommensale Kolonisation: Bakterienstämme niedriger Virulenz besiedeln die Blase ohne Gewebeinvasion oder Entzündungskaskade.',
          'Immun-Toleranz: Ein stabiler Gleichgewichtszustand zwischen Wirt und Bakterien entsteht.',
          'Schutzfunktion: Die Besiedlung mit avirulenten Stämmen kann das Festsetzen hochvirulenter Erreger verhindern!'
        ],
        virulence_factors: ['Fehlende oder reduzierte Virulenzfaktoren']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Vollständiges FEHLEN klinischer Symptome', description: 'Keine Untere oder Obere Harnwegsbeschwerden (keine Dysurie, keine Pollakisurie, kein Fieber). Reine Zufallsdiagnose.', severity: 'mild' }
        ],
        physical_exam: [
          'Völlig unauffälliger Befund',
          'Trüber oder übelriechender Urin ALLEIN ist KEIN Symptom und KEINE Behandlungsindikation! (EAU 2025/2026)',
          'Kein suprapubischer oder Flankendruckschmerz'
        ],
        complications: ['Unnötige Antibiotikagabe -> Multiresistenz und Clostridioides difficile Colitis!', 'Pyelonephritis- und Frühgeburtsrisiko in der SCHWANGERSCHAFT (daher hier behandlungsbedürftig!)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinkultur (EAU 2025/2026)', finding: 'Frauen: ≥10^5 KBE/ml desselben Keims in 2 AUFEINANDERFOLGENDEN Proben; Männer: ≥10^5 KBE/ml in 1 Probe', interpretation: 'Strenge diagnostische Kriterien' },
          { test: 'Katheterurin', finding: '≥10^5 KBE/ml in 1 Probe', interpretation: 'Nachweis von Bakteriurie' },
          { test: 'Urinsediment', finding: 'Pyurie häufig vorhanden', interpretation: 'Pyurie ALLEIN indiziert KEINE Antibiose bei asymptomatischen Patienten! (EAU 2025/2026)' }
        ],
        imaging: [
          { test: 'Bildgebung nicht indiziert', finding: 'Keine Indikation', interpretation: 'Nicht durchzuführen' }
        ],
        microbiology: [
          { test: 'Urinkultur-Screening', finding: 'Nur bei indizierten Gruppen durchführen', significance: 'NUR in der Schwangerschaft und vor urologischen Eingriffen mit Schleimhautverletzung!' }
        ]
      },
      differential: [
        { disease: 'Symptomatische Zystitis / Pyelonephritis', distinguishing: 'Vorhandensein subjektiver Beschwerden (Dysurie) oder Fieber' },
        { disease: 'Kontamination', distinguishing: 'Niedrige Keimzahl (<10^5 KBE/ml), Mischflora' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'KEINE ANTIBIOTIKABEHANDLUNG (DO NOT TREAT)', dose: '-', duration: '-', note: 'EAU 2025/2026 Strenge Empfehlung: NICHT BEHANDELN! (Ausnahmen: Schwangerschaft & urologische OP)' }
          ],
          inpatient: [
            { drug: 'KEINE ANTIBIOTIKABEHANDLUNG (DO NOT TREAT)', dose: '-', duration: '-', note: 'Keine Behandlungsindikation bei Älteren, Diabetikern, Katheterträgern oder Transplantierten' }
          ]
        },
        targeted: 'AUSSCHLIESSLICHE INDIKATIONEN (EAU 2025/2026):\n1) SCHWANGERE: Screening in der 12.-16. SSW. Gezielte Therapie nach Kultur (Fosfomycin 3g 1x, Nitrofurantoin 2x100mg 5 Tage, Cefalexin oder Amoxicillin-Clavulanat 5-7 Tage) zur Prävention von Pyelonephritis und Frühgeburt.\n2) VOR UROLOGISCHEN EINGRIFFEN MIT SCHLEIMHAUTVERLETZUNG (z.B. TURP, Ureteroskopie): Gezielte Antibiose vor dem Eingriff.\nNICHT BEHANDELN: Postmenopausale Frauen, Diabetiker, Dauerkatheterträger, Pflegeheimbewohner, Rückenmarksverletzte!',
        supportive: [
          'Nicht-pharmakologische Therapie / Schulung: Aufklärung von Patienten und Pflegepersonal, dass Uringeruch/-trübung kein Antibiotikum rechtfertigt.',
          'Reichliche Flüssigkeitszufuhr, regelmäßige Miktion.',
          'Einstellung unnötiger Urintests.'
        ],
        prevention: [
          'VERMEIDUNG unnötiger Urinuntersuchungen und Kulturen.',
          'Frühestmögliche Entfernung von Blasenkathetern.',
          'Gute Genitalhygiene und Hydratation.'
        ]
      },
      prognosis: {
        mortality: 'ASB erhöht die Mortalität nicht; eine Behandlung ist schädlich wegen Resistenz und Nebenwirkungen',
        factors: 'Unbehandelt in der Schwangerschaft hohes Pyelonephritisrisiko'
      }
    }
  ]
};
