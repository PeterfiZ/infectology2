import { Category } from '../types';

export const gastrointestinalDe: Category = {
  name: 'Gastrointestinale Infektionen',
  icon: '🦠',
  color: '#dc2626',
  tables: [
    {
      title: 'Differenzialdiagnose von Durchfallerkrankungen',
      headers: ['Erreger', 'Klinisches Bild', 'Übertragung / Risiko', 'Diagnostik', 'Therapie'],
      rows: [
        ['Campylobacter jejuni', 'Fieber, krampfartige Bauchschmerzen (kann Appendizitis imitieren), wässriger/blutiger Stuhl', 'Geflügel, Rohmilch', 'Stuhlkultur, PCR', 'Supportiv; Schwer/Risiko: Azithromycin 500mg tgl. für 3 Tage'],
        ['Salmonella enteritidis', 'Fieber, Übelkeit, Erbrechen, wässriger Durchfall, selten blutig', 'Eier, Geflügel, Reptilien', 'Stuhlkultur', 'Supportiv; Schwer/Risiko (>65 J., Immunsuppr.): Ciprofloxacin oder Ceftriaxon'],
        ['Shigella spp.', 'Hohes Fieber, Tenesmen, kleinvolumige blutige/schleimige Stühle (Dysenterie)', 'Fäkal-oral, von Mensch zu Mensch (sehr geringe Infektionsdosis)', 'Stuhlkultur, PCR', 'Ciprofloxacin oder Azithromycin empfohlen (reduziert Übertragung, verkürzt Dauer)']
      ]
    }
  ],
  diseases: [
    {
      id: 'campylobacter',
      name: 'Campylobacter-Enteritis',
      pathogen: { type: 'Bakterium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negativ', shape: 'gebogenes Stäbchen (möwenflügelartig)' },
      epidemiology: {
        incidence: 'Häufigste bakterielle Gastroenteritis in Industrieländern',
        risk_groups: ['Kleinkinder', 'Junge Erwachsene', 'Immunsupprimierte'],
        seasonality: 'Sommer und Frühherbst',
        transmission: 'Zoonose (unzureichend gegartes Geflügel, Rohmilch, kontaminiertes Wasser)'
      },
      pathomechanism: {
        steps: [
          'Adhäsion und Invasion: Das Bakterium haftet an den Epithelzellen und dringt in das Ileum und Kolon ein.',
          'Zytotoxinbildung: Cytolethal distending toxin (CDT) wird gebildet, das die Zellteilung hemmt und den Zelltod verursacht.',
          'Entzündungsreaktion: Eine intensive Entzündung entwickelt sich in der Lamina propria, was zu Schleimhautulzera und blutigem Durchfall führt.',
          'Autoimmunität: Das Lipooligosaccharid (LOS) des Bakteriums zeigt molekulare Mimikry mit Gangliosiden (GM1) menschlicher peripherer Nerven, was nach der Infektion ein Guillain-Barré-Syndrom auslösen kann.'
        ],
        virulence_factors: ['Geißel (Motilität)', 'Cytolethal distending toxin (CDT)', 'LOS (molekulare Mimikry)']
      },
      clinical: {
        incubation: '1-7 Tage (Schnitt 2-5 Tage)',
        onset: 'Plötzlich, oft mit grippeähnlichem Prodromalstadium',
        symptoms: [
          { name: 'Prodromi', description: 'Fieber, Kopfschmerzen, Myalgien gehen den Bauchbeschwerden voraus (um bis zu 12-24 Stunden).', severity: 'moderate' },
          { name: 'Bauchschmerz', description: 'Schwere, krampfartige Bauchschmerzen, oft im rechten Unterbauch lokalisiert (Pseudoappendizitis).', severity: 'severe' },
          { name: 'Diarrhö', description: 'Anfangs wässrig, dann breiig, schleimig und deutlich blutig (bis zu 10+ Mal am Tag).', severity: 'severe' }
        ],
        physical_exam: [
          'Diffuser Bauchdruckschmerz, teils mit RUF-Dominanz',
          'Fieber (oft >38,5°C)',
          'Dehydrationzeichen (trockene Schleimhäute, stehende Hautfalten)'
        ],
        complications: ['Guillain-Barré-Syndrom (GBS - 1/1000 Fälle)', 'Reaktive Arthritis (Reiter-Syndrom)', 'Reizdarmsyndrom (post-infektiös)', 'Erythema nodosum']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Leukozytose, Linksverschiebung', interpretation: 'Infiltrative Entzündung' },
          { test: 'Kreatinin', finding: 'Kann erhöht sein', interpretation: 'Prärenales Nierenversagen bei Dehydratation' }
        ],
        imaging: [
          { modality: 'Abdomen-CT/Sonographie', finding: 'Terminalitis, Kolitis, Lymphadenopathie', significance: 'Hilft beim Ausschluss einer Appendizitis' }
        ],
        microbiology: [
          { test: 'Stuhlkultur', finding: 'Spezialmedien (Campy-Agar), mikroaerophile Atmosphäre, bei 42°C', significance: 'Traditionelle Diagnostik (langsam)' },
          { test: 'Stuhl-PCR', finding: 'Positiv', significance: 'Schnell und hochsensitiv (Teil von Multiplex-Panels)' }
        ]
      },
      differential: [
        { disease: 'Akute Appendizitis', distinguishing: 'Fieber+Schmerz ohne Durchfall, lokaler Bauchstatus, US/CT' },
        { disease: 'Andere bakterielle Gastroenteritiden (Salmonellen, Shigellen)', distinguishing: 'Stuhlkultur oder PCR' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportiv', dose: '-', duration: '-', note: 'Flüssigkeits- und Elektrolytersatz (ORALE REHYDRATIONSLÖSUNG - ORL)' }
          ],
          inpatient: [
            { drug: 'Kristalloide Infusion', dose: 'i.v. nach Bedarf', duration: '-', note: 'Bei schwerer Dehydration oder peroraler Intoleranz' }
          ]
        },
        targeted: 'Therapie indiziert bei: hohem Fieber, blutigen Stühlen, >8 Stühlen/Tag, Schwangerschaft, Immunsuppression. Erste Wahl: Azithromycin 500 mg p.o. tgl. für 3 Tage. Alternative: Ciprofloxacin 2x500 mg p.o. für 3 Tage (hohe Resistenz!).',
        supportive: ['Flüssigkeitsersatz', 'Antipyretika (Paracetamol)', 'Loperamid ist bei invasiver/blutiger Diarrhö KONTRAINDIZIERT!'],
        prevention: ['Gründliches Händewaschen', 'Geflügelfleisch durchgaren', 'Vermeidung von Kreuzkontaminationen in der Küche', 'Keine Rohmilch trinken']
      },
      prognosis: {
        mortality: 'Sehr niedrig (<0,1%)',
        factors: 'Hohes Alter, schwere Begleiterkrankungen, Immunsuppression'
      }
    },
    {
      id: 'c_difficile',
      name: 'Clostridioides-difficile-Infektion (CDI)',
      pathogen: { type: 'Bakterium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-positiv', shape: 'Stäbchen (Sporenbildner, anaerob)' },
      epidemiology: {
        incidence: 'Häufigste nosokomiale Durchfallerkrankung',
        risk_groups: ['Ältere (>65 Jahre)', 'Antibiotika-Anwender (Clindamycin, Fluorchinolone, Cephalosporine)', 'Längerer Krankenhausaufenthalt', 'Protonenpumpeninhibitor-Therapie (PPI)'],
        seasonality: 'Keine',
        transmission: 'Fäkal-oral (über Sporen - resistent gegen alkoholische Händedesinfektion!)'
      },
      pathomechanism: {
        steps: [
          'Dysbiose der Flora: Eine Antibiotikatherapie zerstört die normale Darmflora, sodass sich C. difficile ansiedeln und vermehren kann.',
          'Sporenkeimung: Aufgenommene Sporen keimen im Dünndarm als Reaktion auf Gallensäuren aus.',
          'Toxinbildung: Vegetative Zellen besiedeln das Kolon und bilden Toxin A (Enterotoxin) und Toxin B (Zytotoxin). Bestimmte Stämme (z. B. BI/NAP1/027) bilden auch ein binäres Toxin (CDT).',
          'Epithelschaden: Toxine inaktivieren Rho-GTPasen, zerstören das Zytoskelett und verursachen Zelltod und Entzündungen.',
          'Pseudomembranenbildung: Abgestorbene Epithelzellen, Fibrin und Entzündungszellen bilden gelblich-weiße Beläge (Pseudomembranen) auf der Kolonschleimhaut.'
        ],
        virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB - 10-mal potenter)', 'Sporenbildung', 'Binäres Toxin (CDT)']
      },
      clinical: {
        incubation: 'Während oder nach Antibiotika-Therapie (bis zu 8 Wochen danach)',
        onset: 'Akut oder subakut',
        symptoms: [
          { name: 'Diarrhö', description: 'Wässriger, reichlicher, charakteristisch übelriechender Durchfall (3-15+ Mal am Tag).', severity: 'moderate' },
          { name: 'Bauchschmerz', description: 'Krampfartige Unterbauchschmerzen, diffuser Druckschmerz.', severity: 'moderate' },
          { name: 'Systemische Zeichen', description: 'Fieber, ausgeprägte Leukozytose, Dehydration, Appetitlosigkeit.', severity: 'severe' },
          { name: 'Komplizierter Verlauf', description: 'Beim toxischen Megakolon kann der Durchfall sistieren (wegen paralytischem Ileus), was zu Perforation und Sepsis führt.', severity: 'severe' }
        ],
        physical_exam: [
          'Diffuser Bauchdruckschmerz',
          'Fieber',
          'Bei toxischem Megakolon: ausgeprägte Blahtung, Abwehrspannung (Defense), Hypotonie, Tachykardie'
        ],
        complications: ['Toxisches Megakolon', 'Darmperforation', 'Sepsis', 'Dehydration, Nierenversagen', 'Elektrolytstörungen (Hypokaliämie)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Ausgeprägte Leukozytose (Leukozyten >15 G/l deuten auf schwere Infektion hin)', interpretation: 'Systemische Entzündung' },
          { test: 'Albumin', finding: '<30 g/l (deutet auf schwere Infektion hin)', interpretation: 'Exsudative Enteropathie' },
          { test: 'Kreatinin', finding: '>1,5-facher Anstieg vom Ausgangswert (deutet auf schwere Infektion hin)', interpretation: 'Nierenbeteiligung' }
        ],
        imaging: [
          { modality: 'Abdomen-CT', finding: 'Kolonwandverdickung ("Harmonika-Zeichen"), Aszites', significance: 'Hilft bei der Schweregradbeurteilung' },
          { modality: 'Abdomen-Röntgen', finding: 'Erweitertes Kolon (>6 cm)', significance: 'Obligatorisch bei Verdacht auf toxisches Megakolon' }
        ],
        microbiology: [
          { test: 'Zweistufige Stuhldiagnostik', finding: 'Schritt 1: GDH-Antigen + Toxin-A/B-ELISA. Schritt 2: wenn GDH+ aber Toxin-, dann PCR auf Toxin-Gene', significance: 'Algorithmus nach ESCmid-/IDSA-Leitlinien' }
        ]
      },
      differential: [
        { disease: 'Andere Antibiotika-assoziierte Diarrhö (AAD)', distinguishing: 'Stuhl-CDI-Test negativ, milderer Verlauf' },
        { disease: 'Schub einer chronisch-entzündlichen Darmerkrankung (CED)', distinguishing: 'CDI-Test negativ, Biopsie' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Absetzen des auslösenden Antibiotikums', dose: '-', duration: '-', note: 'In allen Fällen, sofern klinisch vertretbar' }
          ],
          inpatient: [
            { drug: 'Flüssigkeits- und Elektrolytersatz', dose: 'i.v. nach Bedarf', duration: '-', note: 'Essentieller Schritt' }
          ]
        },
        targeted: 'Therapie (ESCmid 2021/IDSA): 1. Nicht-schwere/schwere CDI Erstepisode: Fidaxomicin 2x200 mg p.o. für 10 Tage (erste Wahl) ODER Vancomycin 4x125 mg p.o. für 10 Tage. (Metronidazol ist nur noch eine Alternative bei Unverfügbarkeit in milden Fällen!). 2. Sepsis/Ileus/Schock: Vancomycin 4x500 mg p.o./über Sonde + Metronidazol 3x500 mg i.v. + rektale Vancomycin-Instillation. 3. Erstes Rezidiv: Fidaxomicin (falls zuvor Vanco) oder ausschleichendes Vancomycin-Schema. 4. Multiplen Rezidive: Mikrobieller Stuhltransfer (FMT).',
        supportive: ['Probiotika (schwache Evidenz, Saccharomyces boulardii erwägen)', 'Strikte Kontaktisolierung, Händewaschen mit Wasser und Seife (Alkohol ist unwirksam gegen Sporen!)'],
        prevention: ['Rationaler Antibiotikaeinsatz (Antibiotic Stewardship)', 'Kontaktisolierung im Krankenhaus', 'Desinfektion mit sporiziden Mitteln (z. B. auf Chlorbasis)']
      },
      prognosis: {
        mortality: 'Unkompliziert: <5%; Fulminant/Toxisches Megakolon: >30%',
        factors: 'Alter, Nierenversagen, Leukozytenzahl, Anzahl der Rezidive'
      }
    }
  ]
};
