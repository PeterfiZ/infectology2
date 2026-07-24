import { Category } from '../types';

export const gastrointestinalDe: Category = {
  name: 'Gastrointestinale Infektionen',
  icon: '🦠',
  color: '#dc2626',
  tables: [
    {
      title: 'Differenzialdiagnostik gastrointestinaler Infektionen',
      headers: ['Erkrankung', 'Erreger', 'Beteiligter Abschnitt', 'Mechanismus', 'Stuhlmenge', 'Stuhlcharakteristik', 'Fieber', 'Hauptmerkmale / Komplikationen'],
      rows: [
        ['C. difficile', 'C. difficile', 'Dickdarm', 'Toxin A/B (Entzündung)', 'Mittel/Groß', 'Wässrig, grünlich, übelriechend', '+', 'AB-assoziiert, Pseudomembranen, toxisches Megakolon'],
        ['Salmonella', 'Salmonella enterica', 'Dünn- und Dickdarm', 'Invasion + Enterotoxin', 'Mittel', 'Wässrig (selten blutig)', '++', 'Lebensmittelvergiftung, Reptilienkontakt, extraintestinale Komplikationen'],
        ['Shigella', 'Shigella spp.', 'Dickdarm', 'Invasion + Shiga-Toxin', 'Klein', 'Blutig-schleimig (Dysenterie)', '++', 'Tenesmen, niedrige Infektionsdosis, HUS'],
        ['Campylobacter', 'Campylobacter jejuni', 'Dünn- und Dickdarm', 'Invasion + Toxin', 'Mittel', 'Wässrig/Blutig', '+', 'Pseudoappendizitis, GBS, Geflügel'],
        ['E. coli (EHEC)', 'E. coli (STEC)', 'Dickdarm', 'Shiga-Toxin', 'Mittel', 'Blutig', '-', 'Fieberfrei, HUS-Risiko, Antibiotika streng verboten!'],
        ['E. coli (ETEC)', 'E. coli (ETEC)', 'Dünndarm', 'Enterotoxin (sekretorisch)', 'Groß', 'Wässrig', '-', 'Reisedurchfall'],
        ['E. coli (EPEC)', 'E. coli (EPEC)', 'Dünndarm', 'Malabsorption', 'Groß', 'Wässrig/Schleimig', '+/-', 'Säuglingsdiarrhoe'],
        ['E. coli (EIEC)', 'E. coli (EIEC)', 'Dickdarm', 'Invasion', 'Klein', 'Blutig-schleimig', '++', 'Dysenterie-artig, Fieber'],
        ['Yersinia', 'Yersinia enterocolitica', 'Dünn- und Dickdarm', 'Invasion', 'Mittel', 'Wässrig/Blutig', '+', 'Pseudoappendizitis, reaktive Arthritis, Eisenüberladungs-Sepsis'],
        ['Giardia', 'Giardia duodenalis', 'Dünndarm', 'Malabsorption', 'Groß/Mittel', 'Fettig, übelriechend', '-', 'Schwefeliges Aufstoßen, Malabsorption, Laktoseintoleranz'],
        ['Amoeba', 'E. histolytica', 'Dickdarm', 'Invasion/Zytotoxin', 'Klein', 'Blutig-schleimig', '+/-', 'Leberabszess (Sardellenpaste), zweistufige Therapie obligat'],
        ['Cryptosporidium', 'Cryptosporidium spp.', 'Dünndarm', 'Sekretorisch/Malabsorption', 'Groß', 'Wässrig', '-', 'Chlorresistent, schwer bei HIV/AIDS (CD4 <100)'],
        ['Virale GE', 'Norovirus / Rotavirus', 'Dünndarm', 'Malabsorption/Osmotisch', 'Groß', 'Wässrig', '-/+', 'Erbrechen dominiert (Norovirus), Händewaschen mit Wasser & Seife'],
        ['Cholera', 'Vibrio cholerae', 'Dünndarm', 'Enterotoxin (sekretorisch)', 'Sehr groß', 'Reiswasserartig', '-', 'Massiver Flüssigkeitsverlust, Dehydratation, Rehydration zentral']
      ]
    }
  ],
  diseases: [
    {
      id: 'cdiff',
      name: 'Clostridioides-difficile-Infektion (CDI)',
      pathogen: { type: 'Bakterium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-positiv', shape: 'sporenbildendes anaerobes Stäbchen' },
      epidemiology: {
        incidence: 'Häufigste Ursache für nosokomiale infektiöse Diarrhoe; ambulant erworbene CDI nimmt ebenfalls zu. Rezidive nach ~20-30% der Erstepisoden.',
        risk_groups: ['Alter >65 Jahre', 'Hospitalisierung oder Pflegeheimaufenthalt', 'Kürzliche Antibiotika-Exposition (besonders Clindamycin, Fluorchinolone, Cephalosporine der 3./4. Gen., Carbapeneme)', 'Frühere CDI-Episoden', 'Indikationslose PPI/H2-Blocker-Einnahme', 'Chronisch-entzündliche Darmerkrankungen (CED)', 'Immunsuppression, Chemotherapie, Organtransplantation', 'Chronische Niereninsuffizienz, Hypoalbuminämie'],
        seasonality: 'Keine',
        transmission: 'Fäkal-oral durch hitzeresistente Sporen (nosokomiale Übertragung; strikte Händehygiene mit Wasser und Seife erforderlich!).'
      },
      pathomechanism: {
        steps: [
          'Eine Antibiotikabehandlung stört die normale Darmflora, wodurch aufgenommene oder persistierende C. difficile-Sporen auskeimen.',
          'Vegetative Bakterien vermehren sich und sezernieren Toxin A (Enterotoxin, führt zu Flüssigkeitssekretion und Neutrophilenrekrutierung) sowie Toxin B (Zytotoxin, zerstört das Zytoskelett der Epithelzellen).',
          'Schwere Schleimhautentzündung, Epithelnekrosen und Fibrin-Neutrophilen-Exsudate bilden charakteristische gelb-weiße Pseudomembranen.',
          'Hypervirulente Stämme (z.B. NAP1/BI/027) produzieren zusätzlich binäres Toxin (CDT) und durch tcdC-Gendeletionen vermehrt Toxin A und B.'
        ],
        virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binäres Toxin (CDT)', 'Sporenbildung', 'Oberflächenproteine (SLPs)']
      },
      clinical: {
        incubation: '2-10 Tage nach Antibiotikabeginn, bis zu 8 Wochen nach Beendigung',
        onset: 'Akut',
        symptoms: [
          { name: 'Wässrige Diarrhoe', description: 'Neu aufgetretene ungeklärte Diarrhoe (≥3 ungeformte Stühle in 24h), charakteristisch wässrig, übelriechend ("Pferdestall"-Geruch), gelegentlich grünlich.', severity: 'severe' },
          { name: 'Bauchschmerzen', description: 'Diffuse, krampfartige Unterbauchschmerzen und Druckempfindlichkeit.', severity: 'moderate' },
          { name: 'Fieber und Leukozytose', description: 'Fieber, ausgeprägte Leukozytose (WBC >15 G/L) und Serumkreatinin-Anstieg zeigen einen schweren Verlauf an.', severity: 'severe' },
          { name: 'Fulminante Kolitis', description: 'Schwere Bauchschmerzen, Distension, Ileus (Stuhlfrequenz kann paradox abnehmen), toxisches Megakolon, hemodynamische Instabilität, Schock.', severity: 'severe' }
        ],
        physical_exam: ['Diffuse Unterbauchdruckempfindlichkeit', 'Abdominelle Distension', 'Fieber, Tachykardie, Dehydratationszeichen', 'Peritoneale Reizung oder fehlende Darmgeräusche bei fulminanter CDI/Ileus'],
        complications: ['Fulminante Kolitis', 'Toxisches Megakolon (>6 cm Kolondilatation)', 'Darmperforation und Peritonitis', 'Septischer Schock', 'Akutes Nierenversagen', 'CDI-Rezidiv (20-30%)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Leukozytose (oft >15-25 G/L, leukämoide Reaktion möglich)', interpretation: 'Indikator für schwere CDI' },
          { test: 'Serum-Kreatinin', finding: 'Erhöht (>1.5x Baseline oder >1.5 mg/dL)', interpretation: 'Kriterium für schwere CDI' },
          { test: 'Serum-Albumin', finding: 'Erniedrigt (<30 g/L)', interpretation: 'Proteinverlust-Enteropathie, schwere Entzündung' },
          { test: 'Serum-Laktat', finding: 'Erhöht (>2.2 mmol/L)', interpretation: 'Fulminante CDI, Darmischämie/Minderperfusion' }
        ],
        imaging: [
          { modality: 'Abdomenübersicht', finding: 'Kolondilatation (>6 cm), Haustrenverlust, Pneumoperitoneum bei Perforation', significance: 'Ausschluss toxisches Megakolon/Perforation' },
          { modality: 'Abdomen-CT', finding: 'Diffuse Kolonwandverdickung, "Akkordeon-Zeichen", perikolisches Imbibieren, Aszites', significance: 'Beurteilung von Ausmaß und Komplikationen' }
        ],
        microbiology: [
          { test: 'Zweistufiger Stuhl-Algorithmus (GDH + Toxin-EIA)', finding: 'GDH positiv + Toxin-EIA positiv', significance: 'Bestätigt aktive Toxin-produzierende CDI (hoher PPV)' },
          { test: 'Stuhl-NAAT / PCR', finding: 'tcdB-Gen nachgewiesen', significance: 'Schiedsrichter-Test bei GDH+/Toxin- oder Primärtest; sehr sensitiv' },
          { test: 'Rektosigmoidoskopie', finding: 'Gelblich-weiße Pseudomembranen auf der Kolonschleimhaut', significance: 'Diagnostisch bei unklaren Notfällen (kontraindiziert bei schwerem toxischem Megakolon)' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fidaxomicin', dose: '200 mg p.o. 2x täglich', duration: '10 Tage', note: 'Bevorzugte Erstlinienoption (IDSA/ESCMID Leitlinien) - niedrigere Rezidivrate' },
            { drug: 'Vancomycin', dose: '125 mg p.o. 4x täglich', duration: '10 Tage', note: 'Standard-Erstlinienalternative, wenn Fidaxomicin nicht verfügbar ist' }
          ],
          inpatient: [
            { drug: 'Fulminante CDI: Vancomycin (oral/Sonde)', dose: '500 mg p.o./Sonde 4x täglich', duration: '10-14 Tage', note: 'Höhere orale Dosis bei fulminanter/schwer komplizierter CDI' },
            { drug: 'Fulminante CDI: Metronidazol i.v.', dose: '500 mg i.v. 3x täglich', duration: '10-14 Tage', note: 'Zusätzlich Metronidazol i.v. bei fulminantem Verlauf oder Ileus' },
            { drug: 'Fulminante CDI: Vancomycin-Einlauf', dose: '500 mg in 100 mL Kochsalzlösung rektal 4x täglich', duration: 'Nach Bedarf', note: 'Bei ausgeprägtem Ileus mit beeinträchtigter oraler Passage' }
          ]
        },
        targeted: 'ERSTEPISODE (Nicht-schwer & Schwer): Fidaxomicin 200 mg p.o. 2x/Tag für 10 Tage (bevorzugt) ODER Vancomycin 125 mg p.o. 4x/Tag für 10 Tage. FULMINANTE CDI: Vancomycin 500 mg 4x/Tag p.o./Sonde + Metronidazol 500 mg 3x/Tag i.v. + Vancomycin-Rektaleinläufe bei Ileus. ERSTES REZIDIV: Fidaxomicin 200 mg 2x/Tag für 10 Tage (oder ausschleichendes Vancomycin-Schema). ZWEITES/WEITERE REZIDIVE: Ausschleichendes Vancomycin, Fidaxomicin oder Fäkalem Mikrobiomtransfer (FMT / Rebyota / Vowst). Rezidivprophylaxe: Bezlotoxumab 10 mg/kg i.v. Einzeldosis bei Hochrisikopatienten.',
        supportive: ['Absetzen auslösender Antibiotika sobald klinisch vertretbar', 'Isotone i.v. Flüssigkeits- und Elektrolytsubstitution', 'ANTIMOTILITÄTSMITTEL (Loperamid, Diphenoxylat, Opiate) SIND STRENG KONTRAINDIZIERT!'],
        prevention: ['Antibiotic Stewardship', 'Kontaktisolierung (Kittel und Handschuhe)', 'Händehygiene MIT WASSER UND SEIFE (alkoholische Händedesinfektionsmittel töten Sporen NICHT ab!)', 'Flächendesinfektion mit sporiziden Mitteln (Hypochlorit/Bleichmittel)']
      },
      guidelines: {
        diagnosis: ['Testung NUR bei symptomatischen Patienten (≥3 ungeformte Stühle/24h). 2-stufiges GDH + Toxin-EIA Schema. Kein "Test of Cure".'],
        treatment_indications: ['Sofortige gezielte Therapie bei allen bestätigten oder dringend suspekten symptomatischen CDI-Fällen.'],
        first_line: ['Fidaxomicin 200 mg p.o. 2x/Tag für 10 Tage ODER Vancomycin 125 mg p.o. 4x/Tag für 10 Tage.'],
        supportive: ['Flüssigkeits- und Elektrolytersatz. Auslösende Antibiotika stoppen. Motilitätshemmer streng verboten.'],
        prevention: ['Händewaschen mit Wasser und Seife, sporizide Flächendesinfektion, Bezlotoxumab / FMT bei Rezidiven.'],
        dosing: {
          adult: {
            fidaxomicin: '200 mg p.o. 2x/Tag für 10 Tage',
            vancomycin: '125 mg p.o. 4x/Tag für 10 Tage (500 mg 4x/Tag p.o. + rektal bei fulminanter CDI)',
            metronidazole_iv: '500 mg i.v. 3x/Tag (Ergänzung bei fulminanter CDI/Ileus)',
            bezlotoxumab: '10 mg/kg i.v. Einzeldosis (Rezidivprophylaxe bei Risikopatienten)'
          },
          pediatric: 'Vancomycin 40 mg/kg/Tag p.o. in 4 Einzeldosen (max. 500 mg/Tag) oder alters-/gewichtsbasiert Fidaxomicin (>6 Monate).'
        },
        references: [
          'IDSA/SHEA 2021 Focused Update on C. difficile Guidelines in Adults: https://www.idsociety.org/',
          'ESCMID 2021 update of the treatment guidance document for Clostridioides difficile infection in adults'
        ]
      },
      prognosis: {
        mortality: 'Unkomplizierte CDI: <5%; Fulminante CDI / Toxisches Megakolon: 30-50%',
        prognostic_scores: ['ATLAS Score', 'Zar Score'],
        factors: 'Alter >80 Jahre, Leukozyten >25 G/L, Serumalbumin <25 g/L, akutes Nierenversagen, hypervirulenter Stamm (NAP1/027)'
      },
      differential: [
        { disease: 'Nicht-CDI Antibiotika-assoziierte Diarrhoe (AAD)', distinguishing: 'C. diff GDH/Toxin-Tests negativ, milder Verlauf, Besserung nach AB-Stopp' },
        { disease: 'Schub einer chronisch-entzündlichen Darmerkrankung (CED)', distinguishing: 'Negatives C. diff Testing, chronische Anamnese, endoskopische und histologische Befunde' },
        { disease: 'Ischämische Kolitis', distinguishing: 'Plötzlicher Schmerz im linken Unterbauch, Hämatochezie, CT-Angiographie-Befunde, kardiovaskuläre Risikofaktoren' }
      ]
    },
    {
      id: 'salmonellosis',
      name: 'Salmonellose (Nicht-typhöse Salmonella)',
      pathogen: { type: 'Bakterium', name: '<i>Salmonella enterica</i> (z.B. Serovare <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: 'Häufige Ursache lebensmittelbedingter Gastroenteritiden weltweit; Sommergipfel.',
        risk_groups: ['Säuglinge (<3 Monate)', 'Senioren (>65 Jahre)', 'Immunsupprimierte (HIV, Biologika, Chemotherapie, Asplenie)', 'Patienten mit Sichelzellanämie', 'Träger von Gefäßprothesen oder Herzklappenersatz'],
        seasonality: 'Sommer und Frühherbst',
        transmission: 'Fäkal-oral: kontaminierte Lebensmittel (Geflügel, Eier, Rohmilch, Sprossen), Kontakt zu Reptilien (Schildkröten, Leguane) oder Amphibien.'
      },
      pathomechanism: {
        steps: [
          'Aufgenommene Bakterien überstehen die Magenpassage und kolonisieren das distale Ileum und Kolon.',
          'Über Typ-III-Sekretionssysteme (T3SS-1) invadieren Bakterien M-Zellen und Enterozyten.',
          'Rekrutierung von Neutrophilen in die Lamina propria führt zu aktiver Flüssigkeits- und Elektrolytsekretion.',
          'Bei Risikopatienten translozieren Bakterien in die Blutbahn (Bakteriämie) mit fokal endovaskulären, osteoartikulären oder metastatischen Infektionen.'
        ],
        virulence_factors: ['T3SS-1 und T3SS-2', 'Endotoxin (LPS)', 'Enterotoxin', 'Geißeln (Flagellen)']
      },
      clinical: {
        incubation: '6-72 Stunden (im Mittel 12-36 Stunden)',
        onset: 'Akut',
        symptoms: [
          { name: 'Diarrhoe', description: 'Plötzliches Einsetzen reichlicher wässriger, schleimiger oder selten blutiger Stühle, begleitet von Übelkeit und Erbrechen.', severity: 'moderate' },
          { name: 'Fieber und Schüttelfrost', description: 'Mäßiges bis hohes Fieber (38-39°C), Schüttelfrost, Myalgien und Kopfschmerzen.', severity: 'moderate' },
          { name: 'Bauchkrämpfe', description: 'Diffuse krampfartige Bauchschmerzen, häufig periumbilikal.', severity: 'moderate' }
        ],
        physical_exam: ['Fieber', 'Diffuse Druckempfindlichkeit des Abdomens', 'Dehydratationszeichen'],
        complications: ['Bakteriämie und Sepsis (5-10%, höher bei Senioren/Immunsupprimierten)', 'Mykotisches Aortenaneurysma / Endovaskuläre Infektion', 'Osteomyelitis (klassisch bei Sichelzellanämie)', 'Septische Arthritis', 'Reaktive Arthritis (Reiter-Syndrom)']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / CRP', finding: 'Leukozytose mit Linksverschiebung, erhöhtes CRP', interpretation: 'Bakterielle Entzündungsreaktion' }],
        microbiology: [
          { test: 'Stuhlkultur', finding: 'Salmonella-Isolierung auf Selektivmedien (z.B. SS-Agar, XLD-Agar)', significance: 'Diagnostischer Goldstandard' },
          { test: 'Blutkulturen', finding: 'Positiv auf Salmonella enterica', significance: 'Obligat bei fieberhaften, septischen oder Risikopatienten' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Symptomatische Therapie', dose: '-', duration: '-', note: 'ANTIBIOTIKA SIND BEI GESUNDEN ERWACHSENEN KONTRAINDIZIERT (verlängern die Erregerausscheidung!)' }],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2 g i.v. 1x täglich', duration: '7-14 Tage', note: 'Bei schwerem Verlauf, Bakteriämie oder Risikopatienten' },
            { drug: 'Azithromycin', dose: '500 mg p.o. 1x täglich', duration: '5-7 Tage', note: 'Orale Alternative für Risiko-Patienten' }
          ]
        },
        targeted: 'LEITLINIE: Bei gesunden Personen mit unkomplizierter Gastroenteritis SIND ANTIBIOTIKA KONTRAINDIZIERT, da sie die Symptomdauer nicht verkürzen, aber die Stuhlausscheidung verlängern und Resistenzen selektieren! Eine gezielte antibiotische Therapie ist NUR bei Risikogruppen indiziert (Säuglinge <3 Monate, Erwachsene >65 Jahre, Immunsupprimierte, Sichelzellanämie, Prothesenträger, schwere Sepsis): Ceftriaxon 1-2 g i.v. 1x/Tag, Azithromycin 500 mg p.o. 1x/Tag oder Ciprofloxacin 500 mg p.o. 2x/Tag (nur bei nachgewiesener Sensibilität).',
        supportive: ['Orale Rehydratationslösung (Oral Rehydration Salts - ORS)', 'i.v. Flüssigkeits- und Elektrolytsubstitution bei schwerer Dehydratation'],
        prevention: ['Lebensmittelhygiene (durchreichendes Erhitzen von Eiern und Geflügel)', 'Händehygiene nach Kontakt mit Reptilien/Amphibien']
      },
      guidelines: {
        diagnosis: ['Stuhlkultur bei akuter fieberhafter Gastroenteritis. Blutkulturen obligat bei Fieber, Schüttelfrost oder Sepsiszeichen.'],
        treatment_indications: ['Antibiotika indiziert NUR bei Risikogruppen oder invasiver/bakteriämischer Erkrankung!'],
        first_line: ['Ceftriaxon 1-2 g i.v. täglich ODER Azithromycin 500 mg p.o. täglich für 5-7 Tage (7-14 Tage bei Bakteriämie).'],
        supportive: ['Orale Rehydratationslösung (ORS).'],
        prevention: ['Küchenhygiene, gründliches Erhitzen von Geflügel/Eiern.'],
        dosing: {
          adult: {
            ceftriaxone: '1-2 g i.v. 1x/Tag für 7-14 Tage',
            azithromycin: '500 mg p.o. 1x/Tag für 5-7 Tage',
            ciprofloxacin: '500 mg p.o. 2x/Tag für 7-10 Tage (nur bei nachgewiesener Empfindlichkeit)'
          },
          pediatric: 'Ceftriaxon 50-80 mg/kg/Tag i.v.; Azithromycin 10 mg/kg/Tag p.o.'
        },
        references: ['CDC Salmonella Guidance: https://www.cdc.gov/salmonella/']
      },
      prognosis: { mortality: 'Niedrig (<0.5%) bei unkomplizierter Enteritis; hoch bei Bakteriämie oder mykotischem Aneurysma', prognostic_scores: [], factors: 'Alter, Immunsuppression, endovaskuläre Manifestation' },
      differential: [
        { disease: 'Campylobacteriose', distinguishing: 'Stuhlkultur, häufig stärkere krampfartige Unterbauchschmerzen im rechten Unterbauch' },
        { disease: 'Shigellose', distinguishing: 'Ausgeprägt blutig-schleimige Dysenteriestühle, Tenesmen' }
      ]
    },
    {
      id: 'shigellosis',
      name: 'Shigellose (Bakterielle Ruhr)',
      pathogen: { type: 'Bakterium', name: '<i>Shigella (dysenteriae, flexneri, sonnei, boydii)</i>', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: 'Weltweite Verbreitung; extrem hoch kontagiös aufgrund einer sehr niedrigen Infektionsdosis (10-100 Keime).',
        risk_groups: ['Kleinkinder in Kita/Kindergarten', 'Männer, die Sex mit Männern haben (MSM)', 'Reisende in Endemiegebiete', 'Wohnungslose Menschen'],
        seasonality: 'Sommer und Herbst',
        transmission: 'Fäkal-oral (direkter Mensch-zu-Mensch-Kontakt, kontaminierte Lebensmittel/Wasser, Fomiten).'
      },
      pathomechanism: {
        steps: [
          'Bakterien dringen über M-Zellen in das Kolonepithel ein und invadieren basolaterale Schichten.',
          'Mithilfe von Aktinschweif-Polymerisation (Ipa-Proteine) breiten sich Shigellen intrazellulär von Zelle zu Zelle aus, ohne den Extrazellulärraum zu betreten.',
          'Massive Zelllyse, Schleimhautulzerationen, Mikroabszesse und eine heftige neutrophile Entzündung entstehen.',
          'S. dysenteriae Typ 1 produziert Shiga-Toxin (Stx), das kapilläre Endothelzellen der Niere schädigt und ein Hämolytisch-Urämisches Syndrom (HUS) auslöst.'
        ],
        virulence_factors: ['Shiga-Toxin (Stx)', 'Ipa (Invasive Plasmid Antigen)-Proteine', 'Typ-III-Sekretionssystem']
      },
      clinical: {
        incubation: '1-4 Tage',
        onset: 'Akut',
        symptoms: [
          { name: 'Dysenterie', description: 'Anfangs wässriger Durchfall, der rasch in häufige, kleinvolumige, hochgradig blutig-schleimige Stühle übergeht.', severity: 'severe' },
          { name: 'Tenesmen', description: 'Schmerzhafter, krampfartiger und vergeblicher Stuhldrang.', severity: 'severe' },
          { name: 'Hohes Fieber', description: 'Hohes steiles Fieber, Schüttelfrost, toxisches Zustandsbild; Fieberkrämpfe bei Kleinkindern.', severity: 'severe' }
        ],
        physical_exam: ['Hohes Fieber', 'Ausgeprägte Unterbauchdruckempfindlichkeit', 'Dehydratation und toxische Zeichen'],
        complications: ['Hämolytisch-Urämisches Syndrom (HUS - S. dysenteriae 1)', 'Toxisches Megakolon', 'Rektumprolaps (besonders bei Kleinkindern)', 'Reaktive Arthritis']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild', finding: 'Leukozytose mit deutlicher Linksverschiebung', interpretation: 'Schwere invasive Entzündung' }],
        microbiology: [
          { test: 'Stuhlkultur', finding: 'Shigella-Isolierung auf Selektivmedien (XLD / MacConkey)', significance: 'Diagnostischer Goldstandard + Resistenzprüfung' },
          { test: 'Stuhl-PCR-Panel', finding: 'ipaH-Gen nachgewiesen', significance: 'Hochsensitive schnelle molekulare Identifizierung' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin', dose: '500 mg p.o. 1x täglich (oder 1 g Einzeldosis)', duration: '3 Tage', note: 'Empirisches Mittel der Wahl aufgrund breiter Fluorchinolon-Resistenz' },
            { drug: 'Ciprofloxacin', dose: '500 mg p.o. 2x täglich', duration: '3 Tage', note: 'NUR bei nachgewiesener lokaler Sensibilität einsetzen' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2 g i.v. 1x täglich', duration: '3-5 Tage', note: 'Bei schweren, stationären oder septischen Verläufen' }
          ]
        },
        targeted: 'LEITLINIE: Eine antibiotische Therapie WIRD FÜR ALLE BESTÄTIGTEN/VERDACHTSEINZEL FÄLLE EMPFOHLEN (verkürzt die Krankheitsdauer und stoppt die Erregerausscheidung zur Verhinderung von Ausbrüchen!). Bevorzugte Erstlinie: Azithromycin 500 mg p.o. täglich für 3 Tage ODER Ceftriaxon 1-2 g i.v. täglich. (Fluorchinolone NUR bei nachgewiesener Erregerempfindlichkeit verwenden, da XDR-Shigellen verbreitet sind!). Motilitätshemmer (Loperamid) SIND STRENG KONTRAINDIZIERT!',
        supportive: ['Orale Rehydratationslösung (ORS)', 'Antipyretika (Paracetamol)'],
        prevention: ['Strikte Händehygiene mit Wasser und Seife', 'Kontaktisolierung erkrankter Personen']
      },
      guidelines: {
        diagnosis: ['Stuhlkultur oder Multiplex-PCR bei blutig-schleimiger Diarrhoe und Tenesmen.'],
        treatment_indications: ['Antibiotische Therapie ist bei ALLEN symptomatischen Fällen indiziert!'],
        first_line: ['Azithromycin 500 mg p.o. täglich für 3 Tage ODER Ceftriaxon 1-2 g i.v. täglich für 3-5 Tage.'],
        supportive: ['Rehydratation. Motilitätshemmer streng verboten!'],
        prevention: ['Kontaktisolierung, konsequente Händehygiene.'],
        dosing: {
          adult: { azithromycin: '500 mg p.o. 1x/Tag für 3 Tage (oder 1 g p.o. Einzeldosis)', ceftriaxone: '1-2 g i.v. 1x/Tag für 3-5 Tage', ciprofloxacin: '500 mg p.o. 2x/Tag für 3 Tage (nur bei Nachweis der Empfindlichkeit!)' },
          pediatric: 'Azithromycin 10-12 mg/kg/Tag p.o. für 3 Tage.'
        },
        references: ['CDC Shigella Guidance: https://www.cdc.gov/shigella/']
      },
      prognosis: { mortality: '<1% unter adäquater Therapie; bis 10-20% in unbehandelten S. dysenteriae 1-Epidemien', prognostic_scores: [], factors: 'Kleinkindalter, Mangelernährung, HUS-Entwicklung' },
      differential: [
        { disease: 'EIEC (Enteroinvasive E. coli)', distinguishing: 'Klinisch ununterscheidbar; Differenzierung via Kultur/PCR' },
        { disease: 'STEC/EHEC', distinguishing: 'Fieber meist fehlend; Shiga-Toxin positiv; Antibiotika bei STEC verboten' }
      ]
    },
    {
      id: 'campylobacter',
      name: 'Campylobacteriose',
      pathogen: { type: 'Bakterium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negativ', shape: 'gebogenes/spiralförmiges Stäbchen ("Möwenflügel"-Form)' },
      epidemiology: {
        incidence: 'Häufigste Ursache bakterieller Gastroenteritiden in den Industrieländern.',
        risk_groups: ['Säuglinge und Kleinkinder', 'Junge Erwachsene', 'Immunsupprimierte Personen'],
        seasonality: 'Sommer und Frühherbst',
        transmission: 'Zoonose: Handhabung/Verzehr von unzureichend gegartem Geflügelfleisch, Rohmilch, kontaminiertem Trinkwasser.'
      },
      pathomechanism: {
        steps: [
          'Bakterien adhärieren an Darmepithelzellen und invadieren Ileum und Kolon.',
          'Cytolethal Distending Toxin (CDT) induziert Zellzyklusarrest und Apoptose der Wirtszellen.',
          'Mesenteriale Lymphknotenschwellung führt zu ausgeprägten Unterbauchschmerzen im rechten Unterbauch (Pseudoappendizitis).',
          'Lipooligosaccharid (LOS)-Strukturen zeigen molekulare Mimikry mit GM1-Ganglioside peripherer Nerven und können postinfektiös ein Guillain-Barré-Syndrom (GBS) auslösen.'
        ],
        virulence_factors: ['Geißel (Motilität)', 'Cytolethal Distending Toxin (CDT)', 'LOS molekulare Mimikry']
      },
      clinical: {
        incubation: '1-7 Tage (im Mittel 2-5 Tage)',
        onset: 'Akut, häufig eingeleitet von einem grippeartigen Prodrom',
        symptoms: [
          { name: 'Prodrom', description: 'Fieber, schwere Kopfschmerzen und Myalgien gehen den Bauchschmerzen um 12-24 Stunden voraus.', severity: 'moderate' },
          { name: 'Pseudoappendizitis', description: 'Heftige, krampfartige Schmerzen im rechten Unterbauch, die eine akute Appendizitis vortäuschen.', severity: 'severe' },
          { name: 'Diarrhoe', description: 'Anfangs wässrig, dann rasch übergehend in häufige, schleimige und deutlich blutige Stühle (10+ pro Tag).', severity: 'severe' }
        ],
        physical_exam: ['Diffuse oder rechtsseitige Unterbauchdruckempfindlichkeit', 'Fieber (>38.5°C)', 'Dehydratationszeichen'],
        complications: ['Guillain-Barré-Syndrom (GBS - 1 pro 1.000 Fälle)', 'Reaktive Arthritis (Reiter-Syndrom)', 'Erythema nodosum', 'Postinfektiöses Reizdarmsyndrom']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / CRP', finding: 'Leukozytose, erhöhtes CRP', interpretation: 'Infiltrativ-entzündliche Darmerkrankung' }],
        imaging: [{ modality: 'Abdomen-Sonographie/CT', finding: 'Terminale Ileitis, Kolonwandverdickung, mesenteriale Lymphadenopathie', significance: 'Schließt akute Appendizitis aus' }],
        microbiology: [
          { test: 'Stuhlkultur', finding: 'Selektivmedien (Campy-Agar) mikroaerophil bei 42°C', significance: 'Diagnostischer Goldstandard' },
          { test: 'Stuhl-PCR-Panel', finding: 'Campylobacter-DNA nachgewiesen', significance: 'Schneller, hochsensitiver Test' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Symptomatische Therapie', dose: '-', duration: '-', note: 'Flüssigkeitsersatz (ORS) bei milden Verläufen ausreichend' }],
          inpatient: [{ drug: 'Azithromycin', dose: '500 mg p.o. 1x täglich', duration: '3 Tage', note: 'Erstlinienantibiotikum der Wahl' }]
        },
        targeted: 'INDIKATION FÜR ANTIBIOTIKA: Hohes Fieber, blutige Diarrhoe, >8 Stühle/Tag, persistierende Beschwerden (>1 Woche), Schwangerschaft oder Immunsuppression. Mittel der Wahl: Azithromycin 500 mg p.o. täglich für 3 Tage (oder 1 g p.o. Einzeldosis). (Fluorchinolone SOLLTEN empirisch MEIDEN werden aufgrund von >60-80% Ciprofloxacin-Resistenz!). Motilitätshemmer (Loperamid) SIND KONTRAINDIZIERT!',
        supportive: ['Orale Rehydratationslösung (ORS)', 'Antipyretika'],
        prevention: ['Gründliches Durchgaren von Geflügelfleisch', 'Vermeidung von Kreuzkontamination in der Küche', 'Nur pasteurisierte Milchprodukte konsumieren']
      },
      guidelines: {
        diagnosis: ['Stuhlkultur (bei 42°C) oder PCR-Panel bei akuter blutiger Diarrhoe oder Pseudoappendizitis-Symptomatik.'],
        treatment_indications: ['Gezielte Antibiotika indiziert NUR bei schweren, blutigen, hochfieberhaften oder immunsupprimierten Fällen!'],
        first_line: ['Azithromycin 500 mg p.o. täglich für 3 Tage.'],
        supportive: ['ORS, Rehydratation. Loperamid kontraindiziert.'],
        prevention: ['Küchenhygiene, Geflügelsicherheit.'],
        dosing: { adult: { azithromycin: '500 mg p.o. 1x/Tag für 3 Tage (oder 1 g p.o. Einzeldosis)' }, pediatric: 'Azithromycin 10 mg/kg/Tag p.o. für 3 Tage.' },
        references: ['CDC Campylobacter Guidance: https://www.cdc.gov/campylobacter/']
      },
      prognosis: { mortality: 'Sehr niedrig (<0.1%)', prognostic_scores: [], factors: 'Schweregrad des Guillain-Barré-Syndroms' },
      differential: [
        { disease: 'Akute Appendizitis', distinguishing: 'Fehlen von Diarrhoe, chirurgische Peritonitiszeichen, Sonographie/CT-Befund' },
        { disease: 'Salmonellose / Shigellose', distinguishing: 'Differenzierung mittels Stuhlkultur / PCR' }
      ]
    },
    {
      id: 'ecoli_enteritis',
      name: 'Pathogene E. coli-Enteritiden (STEC/EHEC, ETEC, EPEC, EIEC)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (diarrhögene Pathotypen)', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: 'ETEC: häufigste Ursache von Reisedurchfall; STEC/EHEC: Ursache schwerer Ausbrüche durch Lebensmittel.',
        risk_groups: ['Kinder und Senioren (STEC/EHEC - hohes HUS-Risiko!)', 'Fernreisende (ETEC)', 'Säuglinge (EPEC)'],
        seasonality: 'Sommermonate',
        transmission: 'Fäkal-oral: unzureichend gegartes Rindfleisch, Rohmilch, Unpasteurisierter Fruchtsaft, kontaminiertes Blattgemüse, Wasser, Streichelzoos.'
      },
      pathomechanism: {
        steps: [
          'STEC/EHEC (z.B. O157:H7, O104:H4): Produziert Shiga-Toxine (Stx1, Stx2). Stx schädigt die Kolonmikrozirkulation (hämorrhagische Kolitis) und transloziert systemisch an glomeruläre Endothelzellen der Niere (Gb3-Rezeptor), was zu Mikroangiopathischer Hämolytischer Anämie, Thrombozytopenie und Akutem Nierenversagen führt -> HUS!',
          'ETEC: Produziert Hitzelabiles (LT) und Hitzestabiles (ST) Enterotoxin -> Hypersekretion (cAMP/cGMP-Anstieg) -> profuser wässriger Durchfall.',
          'EPEC: Attaching and Effacing (A/E)-Läsionen via Intimin -> Mikrovillizerstörung -> malabsorptive Diarrhoe.',
          'EIEC: Epithelzellinvasion -> Shigellen-artige Dysenterie.'
        ],
        virulence_factors: ['Shiga-Toxine (Stx1, Stx2)', 'LT und ST Enterotoxine', 'Intimin (eae)', 'Invasine']
      },
      clinical: {
        incubation: 'STEC: 3-4 Tage; ETEC: 1-3 Tage',
        onset: 'Akut',
        symptoms: [
          { name: 'STEC/EHEC: Hämorrhagische Kolitis', description: 'Plötzlicher Beginn mit wässriger Diarrhoe, die rasch in STARK BLUTIGEN DURCHFALL übergeht, begleitet von heftigen Bauchkrämpfen, OHNE FIEBER oder mit nur geringer Temperaturerhöhung.', severity: 'severe' },
          { name: 'ETEC: Reisedurchfall', description: 'Reichlicher wässriger Stuhl, abdominelle Blähungen, kein Fieber.', severity: 'moderate' },
          { name: 'EIEC: Dysenterie', description: 'Fieber, blutig-schleimige Stühle, Tenesmen.', severity: 'severe' }
        ],
        physical_exam: ['STEC: Ausgeprägte Unterbauchdruckempfindlichkeit, FEHLENDES FIEBER', 'Dehydratationszeichen'],
        complications: ['Hämolytisch-Urämisches Syndrom (HUS) - entwickelt sich bei 5-15% der STEC-Fälle (Trias: mikroangiopathische hämolytische Anämie, Thrombozytopenie, akutes Nierenversagen)', 'TTP bei Erwachsenen']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / Kreatinin', finding: 'Thrombozytopenie, Fragmentozyten im Blutausstrich, erhöhtes Kreatinin', interpretation: 'FRÜHZEICHEN EINES HUS!' }],
        microbiology: [
          { test: 'Stuhl-Shiga-Toxin-Nachweis', finding: 'Positiv für Stx1/Stx2 mittels ELISA oder PCR', significance: 'Goldstandard für STEC/EHEC-Diagnostik' },
          { test: 'Sorbitol-MacConkey-Agar', finding: 'Sorbitol-negative Kolonien (O157:H7)', significance: 'Kulturscreening' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'STEC/EHEC: ANTIBIOTIKA SIND STRENG VERBOTEN!', dose: '-', duration: '-', note: 'Antibiotika ERHÖHEN DAS HUS-RISIKO um das 4-20-Fache (triggern massive Toxin-Freisetzung durch Bakterienlyse)!' },
            { drug: 'ETEC: Rifaximin', dose: '200 mg p.o. 3x täglich', duration: '3 Tage', note: 'Bei nicht-invasivem Reisedurchfall' },
            { drug: 'EIEC: Azithromycin', dose: '500 mg p.o. 1x täglich', duration: '3 Tage', note: 'Bei invasivem Pathotyp' }
          ]
        },
        targeted: 'KRITISCHE KLINISCHE LEITLINIE: BEI STEC/EHEC-INFEKTIONEN SIND ANTIBIOTIKA STRENG KONTRAINDIZIERT, DA SIE DAS RISIKO FÜR EIN HÄMOLYTISCH-URÄMISCHES SYNDROM (HUS) DRASTISCH ERHÖHEN! Loperamid ist ebenfalls streng verboten! Therapie: Aggressive isotone i.v. Rehydratation, engmaschige Laborkontrollen sowie Hämodialyse / Eculizumab bei HUS-Eintritt. ETEC/EIEC: Rifaximin oder Azithromycin.',
        supportive: ['Aggressive i.v. Volumensubstitution', 'Tägliche Kontrolle von Nierenwerten, Thrombozyten und Hgb/Hk'],
        prevention: ['Kerntemperatur von Rindfleisch beim Garen auf ≥71°C bringen', 'Vermeidung von Rohmilch und unpasteurisierten Säften']
      },
      guidelines: {
        diagnosis: ['Blutige Diarrhoe ohne Fieber → STEC/EHEC vermuten! Stuhl-Shiga-Toxin-Test/PCR anfordern.'],
        treatment_indications: ['STEC/EHEC: ANTIBIOTIKA STRENG VERBOTEN! ETEC/EIEC: Antibiotika bei schwerem Verlauf.'],
        first_line: ['STEC: Nur aggressive i.v. Rehydratation! ETEC: Rifaximin 3x200 mg oder Azithromycin 1g Einzeldosis.'],
        supportive: ['Aggressive Rehydratation. Loperamid verboten!'],
        prevention: ['Durchgaren von Fleisch, Lebensmittelhygiene.'],
        dosing: { adult: { rifaximin: '200 mg p.o. 3x/Tag für 3 Tage', azithromycin: '500 mg p.o. täglich für 3 Tage (oder 1 g Einzeldosis)' }, pediatric: 'STEC: Antibiotika streng vermeiden!' },
        references: ['CDC STEC Guidance: https://www.cdc.gov/ecoli/']
      },
      prognosis: { mortality: 'ETEC: minimal; STEC/EHEC: 3-5% Letalität bei HUS-Eintritt', prognostic_scores: [], factors: 'Altersextreme, HUS-Entwicklung, frühe Antibiotika-Gabe (verschlechtert die Prognose!)' },
      differential: [
        { disease: 'Shigellose', distinguishing: 'Hohes Fieber vorhanden; bei STEC fehlt Fieber' },
        { disease: 'Ischämische Kolitis', distinguishing: 'Höheres Alter, kardiovaskuläre Risikofaktoren' }
      ]
    },
    {
      id: 'yersiniosis',
      name: 'Yersiniose',
      pathogen: { type: 'Bakterium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negativ', shape: 'Coccobacillus (psychrophil)' },
      epidemiology: {
        incidence: 'Häufiger in gemäßigten Klimazonen in den Wintermonaten.',
        risk_groups: ['Kinder', 'Patienten mit Eisenüberladung (Hämochromatose, Thalassämie, Deferoxamin-Therapie)'],
        seasonality: 'Winter',
        transmission: 'Kontaminiertes rohes/unzureichend gegartes Schweinefleisch, Rohmilch, kontaminiertes Wasser (psychrophil: vermehrt sich bei 4°C im Kühlschrank!).'
      },
      pathomechanism: {
        steps: [
          'Bakterien translozieren über M-Zellen im terminalen Ileum in die Peyer-Plaques.',
          'Lymphatische Drainage in mesenteriale Lymphknoten verursacht mesenteriale Lymphadenitis und terminale Ileitis (Pseudoappendizitis).',
          'Bei Eisenüberladung oder Deferoxamin-Therapie ermöglicht die siderophile Eigenschaft rasches Bakterienwachstum mit fulminanter Sepsis.',
          'Postinfektiöse Immunkomplexablagerungen führen zu HLA-B27-reaktiver Arthritis und Erythema nodosum.'
        ],
        virulence_factors: ['Yops (Yersinia outer proteins)', 'Typ-III-Sekretionssystem', 'Yersiniabactin']
      },
      clinical: {
        incubation: '4-7 Tage',
        onset: 'Schleichend bis akut',
        symptoms: [
          { name: 'Enterokolitis', description: 'Fieber, wässrige oder blutige Diarrhoe, Erbrechen.', severity: 'moderate' },
          { name: 'Pseudoappendizitis', description: 'Starke Schmerzen und Druckempfindlichkeit im rechten Unterbauch, die eine akute Appendizitis simulieren.', severity: 'severe' },
          { name: 'Erythema nodosum / Arthritis', description: 'Schmerzhafte erythematöse Knoten an den Schienbeinen, Gelenkschmerzen Wochen nach Abklingen.', severity: 'moderate' }
        ],
        physical_exam: ['Druckempfindlichkeit im rechten Unterbauch', 'Fieber', 'Erythema nodosum-Läsionen an den Unterschenkeln'],
        complications: ['Reaktive Arthritis (HLA-B27-assoziiert)', 'Erythema nodosum', 'Schwere Bakteriämie/Sepsis (bei Eisenüberladung)']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / CRP', finding: 'Leukozytose, erhöhtes CRP', interpretation: 'Bakterielle Entzündung' }],
        imaging: [{ modality: 'Abdomen-Sonographie', finding: 'Wandverdickung des terminalen Ileums, vergrößerte mesenteriale Lymphknoten, unauffällige Appendix', significance: 'Schließt Appendizitis aus' }],
        microbiology: [{ test: 'Stuhlkultur', finding: 'CIN-Selektivagar (Labor zur Kälteanreicherung bei 25°C informieren!)', significance: 'Diagnostischer Goldstandard' }]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Symptomatische Therapie', dose: '-', duration: '-', note: 'Selbstlimitierend bei milder unkomplizierter Enterokolitis' }],
          inpatient: [
            { drug: 'Ciprofloxacin', dose: '500 mg p.o. 2x täglich', duration: '7-10 Tage', note: 'Bei schweren, invasiven oder Pseudoappendizitis-Verläufen' },
            { drug: 'Doxycyclin', dose: '100 mg p.o. 2x täglich', duration: '7-10 Tage', note: 'Alternative' }
          ]
        },
        targeted: 'Milde Enterokolitis erfordert nur symptomatische Rehydratation. Schwere, invasive, pseudoappendizitische oder eisenüberladene Patienten benötigen Antibiotika: Ciprofloxacin 500 mg p.o. 2x/Tag, Doxycyclin 100 mg p.o. 2x/Tag oder Ceftriaxon 1-2 g i.v. 1x/Tag.',
        supportive: ['Flüssigkeitsersatz', 'Analgesie'],
        prevention: ['Vermeidung von rohem Schweinefleisch', 'Konsum pasteurisierter Milch']
      },
      guidelines: {
        diagnosis: ['Schmerzen im rechten Unterbauch + Fieber + Diarrhoe → Abdomen-Sono + Stuhlkultur auf CIN-Agar.'],
        treatment_indications: ['Antibiotika indiziert NUR bei schweren, invasiven, pseudoappendizitischen oder eisenüberladenen Fällen.'],
        first_line: ['Ciprofloxacin 500 mg p.o. 2x/Tag oder Doxycyclin 100 mg p.o. 2x/Tag für 7-10 Tage.'],
        supportive: ['Flüssigkeitsersatz.'],
        prevention: ['Gründliches Durchgaren von Schweinefleisch.'],
        dosing: { adult: { ciprofloxacin: '500 mg p.o. 2x/Tag für 7-10 Tage', doxycycline: '100 mg p.o. 2x/Tag für 7-10 Tage' }, pediatric: 'TMP-SMX oder Ceftriaxon bei schweren Verläufen.' },
        references: ['CDC Yersinia Guidance: https://www.cdc.gov/yersinia/']
      },
      prognosis: { mortality: 'Niedrig (<0.1%); hoch (30-50%) bei Bakteriämie unter Eisenüberladung', prognostic_scores: [], factors: 'Eisenüberladung, Immunsuppression' },
      differential: [
        { disease: 'Akute Appendizitis', distinguishing: 'Sonographie/CT-Befund, chirurgische Peritonitiszeichen' },
        { disease: 'Morbus Crohn', distinguishing: 'Chronische Anamnese, endoskopische/histologische Befunde' }
      ]
    },
    {
      id: 'giardiasis',
      name: 'Giardiase',
      pathogen: { type: 'Protozoon', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'birnenförmig (Trophozoit) / oval (Zyste)' },
      epidemiology: {
        incidence: 'Häufigste parasitäre Darminfektion weltweit.',
        risk_groups: ['Kleinkinder in Kitas', 'Outdoor-Sportler/Wanderer bei Konsum von unbehandeltem Oberflächenwasser', 'Patienten mit selektivem IgA-Mangel'],
        seasonality: 'Spätsommer und Frühherbst',
        transmission: 'Fäkal-oral (Aufnahme chlorresistenter Zysten in kontaminiertem Oberflächenwasser, Lebensmitteln oder Händen).'
      },
      pathomechanism: {
        steps: [
          'Aufgenommene Zysten exzystieren im Duodenum und setzen geflagellierte Trophozoiten frei.',
          'Trophozoiten heften sich mit ventralen Haftscheiben an die Enterozyten des oberen Dünndarms an (nicht-invasiv).',
          'Zottenatrophie und Bürstensaum-Disaccharidase (Laktase)-Mangel entwickeln sich.',
          'Malabsorption von Fett und Kohlenhydraten führt zu fettigen, übelriechenden osmotischen Durchfällen.'
        ],
        virulence_factors: ['Ventrale Haftscheibe', 'VSP (Variable Surface Proteins)']
      },
      clinical: {
        incubation: '1-3 Wochen',
        onset: 'Schleichend',
        symptoms: [
          { name: 'Fettstühle', description: 'Persistierende, chronische, übelriechende, hellgelbe, fettige Stühle (Steatorrhoe) ohne Blut.', severity: 'moderate' },
          { name: 'Blähungen und schwefeliges Aufstoßen', description: 'Ausgeprägte Meteorismus, Flatulenz und charakteristisches Aufstoßen mit dem Geruch fauler Eier.', severity: 'moderate' },
          { name: 'Gewichtsverlust', description: 'Deutlicher Gewichtsverlust aufgrund von Nährstoff- und Vitaminmalabsorption.', severity: 'moderate' }
        ],
        physical_exam: ['Abdominelle Distension, Tympanie', 'Diffuse leichte Druckempfindlichkeit', 'FEHLEN VON FIEBER'],
        complications: ['Chronisches Malabsorptionssyndrom', 'Sekundäre Laktoseintoleranz', 'Gedeihstörung bei Kindern']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild', finding: 'Normale Leukozyten, KEINE EOSINOPHILIE (nicht-gewebeinvasives Protozoon!)', interpretation: 'Schließt gewebeinvasive Helminthen aus' }],
        microbiology: [
          { test: 'Stuhl-Parasitenuntersuchung', finding: 'Zysten oder Trophozoiten im Mikroskop', significance: '3 getrennte Stuhlproben wegen intermittierender Ausscheidung erforderlich' },
          { test: 'Stuhl-Antigen-ELISA / PCR', finding: 'Giardia-spezifisches Antigen nachgewiesen', significance: 'Hochsensitiver Schnelltest (>95%)' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Metronidazol', dose: '250-500 mg p.o. 3x täglich', duration: '5-7 Tage', note: 'Standard-Erstlinientherapie' },
            { drug: 'Tinidazol', dose: '2 g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Hohe Wirksamkeit, komfortable Einmalgabe' }
          ]
        },
        targeted: 'Nitroimidazole: Metronidazol 250-500 mg p.o. 3x/Tag für 5-7 Tage ODER Tinidazol 2 g p.o. Einzeldosis. IN DER SCHWANGERSCHAFT (besonders 1. Trimenon): Paromomycin 500 mg p.o. 3x/Tag für 7 Tage (nicht-resorbierbares luminal wirksames Mittel, völlig gefahrlos für den Fetus!).',
        supportive: ['Laktosefreie Diät bei sekundärem Laktasemangel', 'Flüssigkeitsersatz'],
        prevention: ['Abkochen von Oberflächenwasser (mind. 1 Min.)', 'Mikrofiltration (<1 Mikrometer Filter)']
      },
      guidelines: {
        diagnosis: ['Persistierende Fettstühle + Blähungen → 3 Stuhlproben für Mikroskopie oder Stuhl-Antigen-ELISA.'],
        treatment_indications: ['Alle symptomatischen bestätigten Fälle müssen behandelt werden.'],
        first_line: ['Metronidazol 250-500 mg p.o. 3x/Tag für 5-7 Tage ODER Tinidazol 2 g p.o. Einzeldosis.'],
        supportive: ['Laktosefreie Diät.'],
        prevention: ['Wasserfiltration / Abkochen.'],
        dosing: {
          adult: { metronidazole: '250-500 mg p.o. 3x/Tag für 5-7 Tage', tinidazole: '2 g p.o. Einzeldosis' },
          pregnancy: 'Paromomycin 500 mg p.o. 3x/Tag für 7 Tage (nicht-resorbierbar).',
          pediatric: 'Metronidazol 15-30 mg/kg/Tag p.o. in 3 Einzeldosen für 5-7 Tage.'
        },
        references: ['CDC Giardia Guidance: https://www.cdc.gov/parasites/giardia/']
      },
      prognosis: { mortality: 'Exzellent (>99% Heilungsrate)', prognostic_scores: [], factors: 'Bestehender IgA-Mangel' },
      differential: [
        { disease: 'Laktoseintoleranz', distinguishing: 'H2-Atemtest, Ansprechen auf Diät' },
        { disease: 'Kryptosporidiose', distinguishing: 'Säurefeste Färbung, wässrigerer Stuhl' }
      ]
    },
    {
      id: 'amoebiasis',
      name: 'Amöbiase (Amöbenruhr und Amöbenleberabszess)',
      pathogen: { type: 'Protozoon', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'amöboid (Trophozoit mit phagozytierten Erythrozyten) / 4-kernige Zyste' },
      epidemiology: {
        incidence: 'Endemisch in Tropen und Subtropen mit geringen Hygienestandards.',
        risk_groups: ['Reisende/Migranten aus Tropengebieten', 'Männer, die Sex mit Männern haben (MSM)', 'Insassen von Gemeinschaftseinrichtungen'],
        seasonality: 'Keine',
        transmission: 'Fäkal-oral: Aufnahme von Zysten in kontaminiertem Wasser oder rohen Lebensmitteln.'
      },
      pathomechanism: {
        steps: [
          'Aufgenommene 4-kernige Zysten exzystieren im Kolonlumen zu motilen Trophozoiten.',
          'Trophozoiten heften sich über Gal/GalNAc-Lektine an das Kolonepithel und sezernieren Cysteinproteinasen, wodurch klassische "flask-shaped" (amphorenförmige) Schleimhautulzerationen entstehen.',
          'Trophozoiten invadieren die Pfortaderzirkulation und wandern in die Leber, wo sie Hepatozyten lysieren und einen schokoladenbraunen ("Sardellenpaste") Amöbenleberabszess bilden.'
        ],
        virulence_factors: ['Gal/GalNAc-Lektin', 'Cysteinproteinasen', 'Amöbapore']
      },
      clinical: {
        incubation: '2-4 Wochen (Leberabszess kann erst Monate bis Jahre später manifest werden)',
        onset: 'Schleichend',
        symptoms: [
          { name: 'Amöbenruhr', description: 'Zunehmend schwerere blutig-schleimige Diarrhoe, krampfartige Bauchschmerzen, mäßiges Fieber.', severity: 'severe' },
          { name: 'Amöbenleberabszess', description: 'Schmerzen im rechten Oberbauch, hohes Fieber, Nachtschweiß, Hepatomegalie, Gewichtsverlust (kann ohne aktive Darmsymptome auftreten!).', severity: 'severe' }
        ],
        physical_exam: ['Druckschmerz im rechten Oberbauch, positiver LeberKlopfschmerz (Abszess)', 'Druckschmerz entlang des Kolonrahmens'],
        complications: ['Amöbenleberabszess-Ruptur (in Pleura, Perikard oder Peritoneum)', 'Darmperforation', 'Amöbom (granulomatöser Tumor, der ein Kolonkarzinom imitiert)', 'Hirnabszess']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / Leberenzyme', finding: 'Leukozytose, erhöhtes AP und GGT', interpretation: 'Leberbeteiligung' }],
        imaging: [{ modality: 'Abdomen-Sonographie / CT', finding: 'Solitäre, runde, echoarme Leberläsion (am häufigsten im rechten Leberlappen)', significance: 'Weist Amöbenleberabszess nach' }],
        microbiology: [
          { test: 'Stuhl-PCR / Antigen-ELISA', finding: 'E. histolytica-spezifische DNA/Antigen', significance: 'Goldstandard (unterscheidet E. histolytica von apathogener E. dispar)' },
          { test: 'Serum-Serologie (IgG)', finding: 'Positiv', significance: '>90% sensitiv bei invasiver Amöbiase und Leberabszess' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Schritt 1: Metronidazol', dose: '750 mg p.o. 3x täglich', duration: '7-10 Tage', note: 'Gewebe-Amöbizid (tötet invasive Trophozoiten ab)' },
            { drug: 'Schritt 2: Paromomycin', dose: '500 mg p.o. 3x täglich', duration: '7 Tage', note: 'Luminales Amöbizid (OBLIGAT ZUR ELIMINIERUNG DER ZYSTEN UND REZIDIVPROPHYLAXE!)' }
          ]
        },
        targeted: 'OBLIGATORISCHE ZWEISTUFIGE SEQUENTIELLE THERAPIE: 1. Gewebe-Amöbizid: Metronidazol 750 mg p.o. 3x/Tag für 7-10 Tage (oder Tinidazol 2 g p.o. 1x/Tag für 3 Tage) zur Eliminierung invasiver Trophozoiten. 2. ZWINGEND GEFOLGT VON Luminalem Amöbizid: Paromomycin 500 mg p.o. 3x/Tag für 7 Tage zur Erradikation intraluminaler Zysten und Verhinderung von Rezidiven! Leberabszess: Orales Metronidazol ist ebenso wirksam; Drainage nur bei drohender Ruptur oder diagnostischer Unklarheit.',
        supportive: ['Flüssigkeitsrehydratation', 'Schmerztherapie'],
        prevention: ['Trinkwasser abkochen oder filtrieren in Tropenregionen']
      },
      guidelines: {
        diagnosis: ['Blutiger Stuhl oder Leberabszess → Stuhl-PCR/ELISA + Serum-Serologie + Leber-Sono.'],
        treatment_indications: ['ALLE E. histolytica-Infektionen MÜSSEN mit der zweistufigen Therapie behandelt werden!'],
        first_line: ['Metronidazol 750 mg p.o. 3x/Tag für 7-10 Tage, DANACH Paromomycin 500 mg p.o. 3x/Tag für 7 Tage.'],
        supportive: ['Rehydratation.'],
        prevention: ['Wasser- und Lebensmittelhygiene.'],
        dosing: {
          adult: { metronidazole: '750 mg p.o. 3x/Tag für 7-10 Tage', tinidazole: '2 g p.o. 1x/Tag für 3 Tage', paromomycin: '500 mg p.o. 3x/Tag für 7 Tage (luminale Erradikation!)' },
          pediatric: 'Metronidazol 35-50 mg/kg/Tag p.o. in 3 Einzeldosen für 7-10 Tage.'
        },
        references: ['CDC Amebiasis Guidance: https://www.cdc.gov/parasites/amebiasis/']
      },
      prognosis: { mortality: '<1% unter adäquater Therapie; 10-20% bei Abszessruptur', prognostic_scores: [], factors: 'Abszessgröße, rechtzeitige luminale Paromomycin-Gabe' },
      differential: [
        { disease: 'Pyogener bakterieller Leberabszess', distinguishing: 'Septischer, positive bakteriologische Blut-/Punktat-Kulturen, polymikrobiell' },
        { disease: 'Shigellose / EIEC', distinguishing: 'Stuhl-PCR / Kultur' }
      ]
    },
    {
      id: 'cryptosporidiosis',
      name: 'Kryptosporidiose',
      pathogen: { type: 'Protozoon', name: '<i>Cryptosporidium hominis / parvum</i>', gram: 'Modifizierte Ziehl-Neelsen-Färbung säurefest', shape: '4-8 µm kugelcharakteristische Oozyste' },
      epidemiology: {
        incidence: 'Häufigste Ursache von Ausbrüchen durch Bäder- und Freizeitwasser.',
        risk_groups: ['HIV/AIDS-Patienten (CD4 <100/µL - lebensbedrohlicher opportunistischer Erreger!)', 'Kleinkinder', 'Veterinäre und Tierpfleger'],
        seasonality: 'Sommer und Herbst',
        transmission: 'Fäkal-oral: Schwimmbadwasser, Trinkwasser (OOZYSTEN SIND VOLLSTÄNDIG RESISTENT GEGEN CHLOR-DESINFEKTION!), Tierkontakt.'
      },
      pathomechanism: {
        steps: [
          'Aufgenommene Oozysten exzystieren im Dünndarm und setzen Sporozoiten frei.',
          'Sporozoiten heften sich an die apikale Membran der Enterozyten an (intrazelluläre, aber extragewebliche Position).',
          'Zottenatrophie und Kryptenhyperplasie verursachen schwere sekretorische und osmotische Diarrhoen.',
          'Bei schwerer Immunsuppression (CD4 <100) breitet sich die Infektion in die Gallenwege und den Pankreasgang aus (sklerosierende Cholangitis).'
        ],
        virulence_factors: ['Chlorresistente Oozystenwand', 'Sekretorische Proteasen']
      },
      clinical: {
        incubation: '7-10 Tage',
        onset: 'Akut',
        symptoms: [
          { name: 'Wässrige Diarrhoe', description: 'Profuse, reichliche wässrige Stühle, begleitet von krampfartigen Bauchschmerzen und Fieber.', severity: 'moderate' },
          { name: 'AIDS-assoziierte chronische Diarrhoe', description: 'Bei CD4 <100/µL unstillbare, mehrerer Liter tägliche wässrige Durchfälle, extreme Dehydratation, Kachexie und Auszehrung.', severity: 'severe' }
        ],
        physical_exam: ['Ausgeprägte Dehydratationszeichen', 'Auszehrung, Kachexie bei HIV-Patienten'],
        complications: ['Schwere Dehydratation und Elektrolytentgleisung', 'Akalakulöse Cholezystitis / Sklerosierende Cholangitis (bei AIDS)', 'Tödlicher Verlauf bei unbehandelter HIV-Infektion']
      },
      diagnostics: {
        laboratory: [{ test: 'CD4-Zellzahl', finding: '<100/µL', interpretation: 'Hohes Risiko für schweren/unstillbaren Verlauf bei HIV' }],
        microbiology: [
          { test: 'Stuhl-Färbung', finding: 'Säurefeste Oozysten in modifizierter Ziehl-Neelsen- oder Kinyoun-Färbung', significance: 'Klassische Diagnostik' },
          { test: 'Stuhl-Antigen-ELISA / PCR', finding: 'Positiv für Cryptosporidium', significance: 'Empfindlichste Nachweismethode' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nitazoxanid', dose: '500 mg p.o. 2x täglich', duration: '3 Tage', note: 'Für immunkompetente Patienten' },
            { drug: 'ART (Antiretrovirale Therapie)', dose: '-', duration: '-', note: 'BEI HIV-PATIENTEN IST DIE IMMUNREKONSTRUKTION DER SCHLÜSSEL ZUR HEILUNG!' }
          ]
        },
        targeted: 'Immunkompetente Patienten: Symptomatische Rehydratation; Nitazoxanid 500 mg p.o. 2x/Tag für 3 Tage bei Bedarf. HIV/AIDS-Patienten: DER ECKPFEILER DER THERAPIE IST DER BEGINN ODER DIE OPTIMIERUNG DER ANTIRETROVIRALEN THERAPIE (ART) zur Anhebung der CD4-Zahl >200/µL (nur die Immunrekonstruktion heilt die Infektion!). Nitazoxanid kann adjuvant gegeben werden.',
        supportive: ['Aggressive orale/i.v. Flüssigkeits- und Elektrolytsubstitution', 'Enterale oder parenterale Ernährungstherapie'],
        prevention: ['Abkochen von Trinkwasser / Ultrafiltration (<1 Mikrometer)', 'Meiden öffentlicher Bäder für 2 Wochen nach Abklingen der Diarrhoe']
      },
      guidelines: {
        diagnosis: ['Persistierende wässrige Diarrhoe → Modifizierte Ziehl-Neelsen-Färbung oder Stuhl-PCR.'],
        treatment_indications: ['Sofortiger ART-Start bei HIV! Nitazoxanid bei Immunkompetenten bei Beschwerden.'],
        first_line: ['HIV: ART-Optimierung. Immunkompetent: Nitazoxanid 500 mg p.o. 2x/Tag für 3 Tage.'],
        supportive: ['Elektrolytsubstitution, Ernährungstherapie.'],
        prevention: ['Wasser-Ultrafiltration.'],
        dosing: { adult: { nitazoxanide: '500 mg p.o. 2x/Tag für 3 Tage (immunkompetent)' }, pediatric: '1-3 J.: 100 mg 2x/Tag; 4-11 J.: 200 mg 2x/Tag für 3 Tage.' },
        references: ['CDC Cryptosporidium Guidance: https://www.cdc.gov/parasites/crypto/']
      },
      prognosis: { mortality: 'Gut bei Immunkompetenten; hohe Letalität bei AIDS (CD4 <50) ohne ART', prognostic_scores: [], factors: 'Anstieg der CD4+ T-Zellzahl unter ART' },
      differential: [
        { disease: 'Giardiase', distinguishing: 'Fettiger Stuhl, schwefeliges Aufstoßen' },
        { disease: 'Zystoisosporiose / Mikrosporidiose', distinguishing: 'Andere Sporengrößen und Spezialfärbungen' }
      ]
    },
    {
      id: 'viral_gastroenteritis',
      name: 'Virale Gastroenteritis (Norovirus, Rotavirus, Adenovirus)',
      pathogen: { type: 'Virus', name: '<i>Norovirus, Rotavirus, Enterales Adenovirus (40/41), Astrovirus</i>', gram: 'RNA / DNA', shape: 'Ikosaedrische unbehüllte Viren' },
      epidemiology: {
        incidence: 'Norovirus: häufigste Ursache epidemischer Gastroenteritiden in allen Altersgruppen. Rotavirus: führende Ursache schwerer Säuglingsdehydratation.',
        risk_groups: ['Säuglinge und Kleinkinder (Rotavirus)', 'Senioren, Pflegeheimbewohner, hospitalisierte Patienten (Norovirus)', 'Kreuzfahrtschiff-Passagiere und geschlossene Einrichtungen'],
        seasonality: 'Winter und Frühjahr ("Winter Vomiting Disease")',
        transmission: 'Fäkal-oral, Aerosole (beim Erbrechen!), Fomiten. Norovirus ist EXTREM RESISTENT gegen alkoholische Händedesinfektionsmittel!'
      },
      pathomechanism: {
        steps: [
          'Viren infizieren reife Enterozyten an den Zottenspitzen des Dünndarms.',
          'Zottenverstreichung führt zum Verlust von Bürstensaum-Laktase und osmotischer/sekretorischer Flüssigkeitsansammlung.',
          'Rotavirus NSP4-Enterotoxin induziert direkte intestinale Flüssigkeitssekretion.',
          'Verzögerte Magenentleerung löst schwallartiges Erbrechen aus.'
        ],
        virulence_factors: ['Umweltstabiles Kapsid', 'NSP4-Enterotoxin (Rotavirus)', 'Aerosolbildung beim Erbrechen']
      },
      clinical: {
        incubation: '12-48 Stunden (Norovirus); 1-3 Tage (Rotavirus)',
        onset: 'Hyperakut, schlagartig',
        symptoms: [
          { name: 'Schwallartiges Erbrechen', description: 'Plötzliches, heftiges, wiederholtes Erbrechen (besonders dominant bei Norovirus).', severity: 'severe' },
          { name: 'Wässrige Diarrhoe', description: 'Reichliche wässrige Stühle, Bauchkrämpfe und leichtes Fieber.', severity: 'moderate' },
          { name: 'Dehydratation', description: 'Rasch fortschreitende hypovolämische Dehydratation bei Säuglingen und geschwächten Senioren.', severity: 'severe' }
        ],
        physical_exam: ['Dehydratationszeichen (trockene Schleimhäute, eingesunkene Fontanelle bei Säuglingen, stehende Hautfalten)', 'Diffuse Druckempfindlichkeit des Abdomens'],
        complications: ['Schwere hypovolämische Dehydratation', 'Elektrolytstörungen (Hypokaliämie, Hyponatriämie)', 'Prärenale Azotämie']
      },
      diagnostics: {
        laboratory: [{ test: 'Serumelektrolyte / Harnstoff', finding: 'Hypokaliämie, erhöhtes Harnstoff/Kreatinin-Verhältnis', interpretation: 'Schweregrad der Dehydratation' }],
        microbiology: [
          { test: 'Stuhl-Antigen-Schnelltest', finding: 'Positiv für Rotavirus oder Adenovirus', significance: 'Schnelle pädiatrische Diagnostik' },
          { test: 'Stuhl-RT-PCR', finding: 'Norovirus Genogruppe I/II nachgewiesen', significance: 'Ausbruchsabklärung' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Symptomatische Rehydratation', dose: '-', duration: '-', note: 'ANTIBIOTIKA SIND VOLLKOMMEN WIRKUNGSLOS UND VERBOTEN!' }]
        },
        targeted: 'Es existieren keine spezifischen Antivirotika. DIE THERAPIE IST REIN SYMPTOMATISCH: Orale Rehydratationslösung (ORS) in kleinen schluckweisen Gaben. Bei unstillbarem Erbrechen kann eine Einzeldosis Ondansetron (0.15 mg/kg p.o./i.v.) gegeben werden, um das Erbrechen zu stoppen und i.v. Rehydratation/Krankenhausaufnahme zu vermeiden.',
        supportive: ['ORS-Gabe', 'Antipyretika (Paracetamol)', 'Loperamid bei Kleinkindern meiden!'],
        prevention: ['Orale Rotavirus-Schutzimpfung für Säuglinge (Rotarix, RotaTeq)', 'HÄNDEHYGIENE MIT WASSER UND SEIFE (alkoholische Desinfektionsmittel inaktivieren Noroviren NICHT zuverlässig!)', 'Flächendesinfektion mit chlorhaltigen Mitteln']
      },
      guidelines: {
        diagnosis: ['Klinische Diagnose bei akutem Erbrechen + wässriger Diarrhoe; Rotavirus-Antigentest bei Säuglingen.'],
        treatment_indications: ['Rehydratation und supportive Pflege allein!'],
        first_line: ['ORS oral; Ondansetron bei unstillbarem Erbrechen.'],
        supportive: ['Flüssigkeits- und Elektrolytsubstitution.'],
        prevention: ['Rotavirus-Impfung; Händewaschen mit Wasser und Seife bei Norovirus.'],
        dosing: { adult: { ondansetron: '4-8 mg p.o./i.v. bei Erbrechen nach Bedarf' }, pediatric: 'Ondansetron 0.15 mg/kg p.o./i.v. Einzeldosis.' },
        references: ['CDC Norovirus Guidance: https://www.cdc.gov/norovirus/']
      },
      prognosis: { mortality: 'Sehr niedrig (<0.01%) in Industrieländern bei adäquatem Flüssigkeitsmanagement', prognostic_scores: [], factors: 'Altersextreme, zügige Rehydratation' },
      differential: [
        { disease: 'Bakterielle Enteritis', distinguishing: 'Hohes Fieber, blutiger Stuhl, positive Stuhlkultur' },
        { disease: 'Lebensmittelvergiftung (S. aureus, B. cereus praeformiertes Toxin)', distinguishing: 'Plötzliches Erbrechen 1-6 Stunden nach Mahlzeit' }
      ]
    },
    {
      id: 'cholera',
      name: 'Cholera',
      pathogen: { type: 'Bakterium', name: '<i>Vibrio cholerae</i> (Serogruppen O1, O139)', gram: 'Gram-negativ', shape: 'gebogenes Stäbchen (Vibrio)' },
      epidemiology: {
        incidence: 'Endemisch in Teilen Asiens, Afrikas und Hispaniolas; verursacht explosive Epidemien in Katastrophengebieten.',
        risk_groups: ['Menschen in extremer Armut', 'Flüchtlinge, Katastrophenopfer', 'Personen mit Blutgruppe 0 (schwerere Verläufe)'],
        seasonality: 'Regenzeit',
        transmission: 'Fäkal-oral: Trinken von kontaminiertem Wasser, Verzehr von kontaminierten Meeresfrüchten.'
      },
      pathomechanism: {
        steps: [
          'Bakterien heften sich über Toxin-Coregulated Pili (TCP) an Enterozyten des Dünndarms an und sezernieren Choleratoxin (CT - AB5-Toxin).',
          'Toxinuntereinheit A ADP-ribosyliert irreversibel Gs-Alpha, was die Adenylatzyklase dauerhaft aktiviert.',
          'Sterbender intrazellulärer cAMP-Anstieg bewirkt massive Chloridsekretion über CFTR-Kanäle und hemmt die Natriumabsorption.',
          'Profuser isotoner Flüssigkeitsverlust in das DarmLumen (bis zu 1 Liter/Stunde) führt zu raschem hypovolämischen Schock.'
        ],
        virulence_factors: ['Choleratoxin (CT)', 'Toxin-Coregulated Pilus (TCP)']
      },
      clinical: {
        incubation: 'Wenige Stunden bis 5 Tage',
        onset: 'Hyperakut, dramatisch',
        symptoms: [
          { name: 'Reiswasserstühle', description: 'Schmerzloser, extrem voluminöser, geruchloser, blass-milchiger wässriger Stuhl mit Schleimflocken ("Reiswasserstuhl").', severity: 'severe' },
          { name: 'Rasche Dehydratation', description: 'Massiver Volumenkollaps innerhalb von Stunden, schwere Muskelkrämpfe (durch K+- und HCO3--Verlust), Anurie, hypovolämischer Schock.', severity: 'severe' }
        ],
        physical_exam: [
          'Ausgeprägter hypovolämischer Schock (Hypotonie, fadenförmiger Puls)',
          'Waschfrauenhände (runzlige Haut, extrem verminderter Turgor)',
          'Eingesunkene Augen, trockene Schleimhäute',
          'FIEBER FEHLT IN DER REGEL'
        ],
        complications: ['Hypovolämischer Schock und Tod (unbehandelt innerhalb von Stunden!)', 'Akute Tubulusnekrose / ANV', 'Schwere Hypokaliämie und metabolische Azidose']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / Elektrolyte', finding: 'Hämokonzentration, schwere Hypokaliämie, metabolische Azidose', interpretation: 'Massiver isotoner Volumenverlust' }],
        microbiology: [
          { test: 'Stuhlkultur', finding: 'Gelbe Kolonien auf TCBS (Thiosulfat-Citrat-Galle-Saccharose)-Agar', significance: 'Diagnostischer Goldstandard' },
          { test: 'Schnelltest / Dunkelfeldmikroskopie', finding: 'Schiessende ("Mückenstich"-artige) Beweglichkeit der Vibrionen', significance: 'Rasche Feldidentifikation' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'WHO Oral Rehydration Salts (ORS)', dose: 'Hohes Volumen', duration: '-', note: 'Sofortige Gabe bei milden/moderaten Fällen' }],
          inpatient: [
            { drug: 'i.v. Ringer-Laktat', dose: '100 mL/kg i.v. in 3 Stunden', duration: '-', note: 'LEBENSERHALTEND bei schwerem Schock!' },
            { drug: 'Doxycyclin', dose: '300 mg p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Adjuvantes Antibiotikum für Erwachsene' },
            { drug: 'Azithromycin', dose: '1 g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Bevorzugt für Schwangere und Kinder' }
          ]
        },
        targeted: 'SOFORTIGE AGGRESSIVE REHYDRATATION IST LEBENSERHALTEND (WHO ORS oral oder i.v. Ringer-Laktat). Antibiotika sind sekundär, verkürzen aber den Flüssigkeitsverlust und die Ausscheidung: Doxycyclin 300 mg p.o. Einzeldosis (Erwachsene) ODER Azithromycin 1 g p.o. Einzeldosis (Schwangere und Kinder).',
        supportive: ['Kontinuierlicher Flüssigkeitsersatz entsprechend Stuhlverlust', 'Kalium- und Bikarbonat-Korrektur'],
        prevention: ['Sicheres Trinkwasser', 'Orale Cholera-Impfstoffe (Dukoral, Shanchol, Euvichol)']
      },
      guidelines: {
        diagnosis: ['Reiswasserstuhl + Schock → Sofortiger Cholera-Verdacht! Stuhlkultur auf TCBS-Agar.'],
        treatment_indications: ['SOFORTIGE aggressive Infusionstherapie! Antibiotika als sekundäre Ergänzung.'],
        first_line: ['Ringer-Laktat i.v. + ORS. Doxycyclin 300 mg p.o. Einzeldosis.'],
        supportive: ['Kontinuierliche Volumenbilanzierung.'],
        prevention: ['Trinkwasserhygiene, orale Cholera-Impfung.'],
        dosing: { adult: { doxycycline: '300 mg p.o. Einzeldosis', azithromycin: '1 g p.o. Einzeldosis' }, pediatric: 'Azithromycin 20 mg/kg p.o. Einzeldosis.' },
        references: ['WHO Cholera Guidance: https://www.who.int/news-room/fact-sheets/detail/cholera']
      },
      prognosis: { mortality: '<1% bei sofortiger Rehydratation; >50% unbehandelt!', prognostic_scores: [], factors: 'Rechtzeitigkeit der Volumentherapie' },
      differential: [
        { disease: 'ETEC (Enterotoxische E. coli)', distinguishing: 'Weniger extremer Volumenverlust, Reiseanamnese' },
        { disease: 'Virale Gastroenteritis', distinguishing: 'Erbrechen dominiert, geringere Stuhlmenge' }
      ]
    },
    {
      id: 'travelers_diarrhea',
      name: 'Reisedurchfall (Traveler\'s Diarrhea)',
      pathogen: { type: 'Syndrom', name: '<i>ETEC (am häufigsten), Campylobacter, Salmonella, Shigella, Norovirus, Giardia</i>', gram: 'Variabel', shape: '-' },
      epidemiology: {
        incidence: 'Betrifft 20-50% der Fernreisenden in Entwicklungsregionen.',
        risk_groups: ['Junge erwachsene Reisende', 'Immunsupprimierte', 'Patienten unter Protonenpumpenhemmer (PPI)-Einnahme'],
        seasonality: 'Keine',
        transmission: 'Fäkal-oral: kontaminiertes Wasser, Eiswürfel, ungeschältes Obst, rohes Gemüse, Straßenverkauf.'
      },
      pathomechanism: {
        steps: [
          'Reisende kommen mit ungewohnten Bakterienstämmen (vorwiegend ETEC) in Kontakt, gegen die keine lokale Immunität besteht.',
          'Enterotoxinproduktion oder Schleimhautinvasion führt zu akuter sekretorischer oder entzündlicher Diarrhoe.'
        ]
      },
      clinical: {
        incubation: 'Während der Reise oder innerhalb von 1-2 Wochen nach Rückkehr',
        onset: 'Akut',
        symptoms: [
          { name: 'Wässrige Diarrhoe', description: '3 bis 8 ungeformte/wässrige Stühle pro Tag, begleitet von krampfartigen Bauchschmerzen und Blähungen.', severity: 'moderate' },
          { name: 'Fieber und Dysenterie (invasiv)', description: 'Weist auf invasiven Erreger hin (Campylobacter, Shigella, Salmonella).', severity: 'severe' }
        ],
        physical_exam: ['Leichte diffuse Unterbauchdruckempfindlichkeit', 'Dehydratationszeichen'],
        complications: ['Dehydratation', 'Postinfektiöses Reizdarmsyndrom (tritt bei 5-10% der Reisenden auf)', 'Reaktive Arthritis']
      },
      diagnostics: {
        laboratory: [{ test: 'Routinelabor', finding: 'Unauffällig', interpretation: 'Bei milden nicht-invasiven Fällen nicht erforderlich' }],
        microbiology: [{ test: 'Stuhl-Multiplex-PCR / Kultur', finding: 'Erregeridentifizierung', significance: 'Indiziert NUR bei schweren, fieberhaften, dysenterischen oder chronischen (>14 Tage) Verläufen' }]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Rifaximin', dose: '200 mg p.o. 3x täglich', duration: '3 Tage', note: 'Bei nicht-invasivem (fieberfreiem, nicht-blutigem) Reisedurchfall' },
            { drug: 'Azithromycin', dose: '1 g p.o. Einzeldosis (oder 500 mg täglich für 3 Tage)', duration: '1-3 Tage', note: 'Bei schweren, fieberhaften, dysenterischen Fällen oder Reisen nach Südostasien (hohe Campylobacter Fluorchinolon-Resistenz!)' }
          ]
        },
        targeted: 'KLINISCHE LEITLINIE: 1. Milde Fälle: Rehydratation (ORS) + optional Loperamid. 2. Moderate nicht-invasive Fälle: Rifaximin 200 mg p.o. 3x/Tag für 3 Tage. 3. Schwere, fieberhafte oder dysenterische Fälle ODER Reisen nach Süd-/Südostasien: Azithromycin 1000 mg p.o. Einzeldosis ODER 500 mg p.o. täglich für 3 Tage.',
        supportive: ['ORS-Rehydratation', 'Loperamid (NUR bei fieberfreiem und nicht-blutigem Stuhl!)'],
        prevention: ['"Cook it, boil it, peel it, or forget it!"', 'Konsum von abgefülltem Wasser', 'Prophylaktisches Rifaximin nur für extrem gefährdete immunsupprimierte Reisende reserviert']
      },
      guidelines: {
        diagnosis: ['Stuhl-PCR-Panel bei schwerem/fieberhaftem Reisedurchfall oder anhaltender Diarrhoe.'],
        treatment_indications: ['Antibiotika indiziert bei schwerem, fieberhaftem oder beeinträchtigendem Reisedurchfall.'],
        first_line: ['Südostasien / Dysenterie: Azithromycin 1 g Einzeldosis. Nicht-invasiv: Rifaximin 3x200 mg für 3 Tage.'],
        supportive: ['ORS. Loperamid nur ohne Fieber/Blut.'],
        prevention: ['Lebensmittel- und Wasserhygiene.'],
        dosing: { adult: { azithromycin: '1 g p.o. Einzeldosis (oder 500 mg p.o. täglich für 3 Tage)', rifaximin: '200 mg p.o. 3x/Tag für 3 Tage' }, pediatric: 'Azithromycin 10 mg/kg p.o.' },
        references: ['CDC Traveler\'s Diarrhea Yellow Book: https://wwwnc.cdc.gov/travel/']
      },
      prognosis: { mortality: 'Sehr niedrig (<0.01%)', prognostic_scores: [], factors: 'Postinfektiöse Reizdarm-Entwicklung' },
      differential: [
        { disease: 'Giardiase', distinguishing: 'Anhaltend (>2 Wochen), fettiger Stuhl, schwefeliges Aufstoßen' },
        { disease: 'Amöbiase', distinguishing: 'Blutiger Stuhl, Tropenreise' }
      ]
    },
    {
      id: 'dysentery_syndrome',
      name: 'Dysenterie-Syndrom (Ruhr-Syndrom)',
      pathogen: { type: 'Syndrom', name: '<i>Shigella, EIEC, STEC/EHEC, Campylobacter, Entamoeba histolytica, Salmonella</i>', gram: 'Variabel', shape: '-' },
      epidemiology: {
        incidence: 'Infektiologischer Notfall weltweit.',
        risk_groups: ['Kinder', 'Senioren', 'Immunsupprimierte', 'Tropenreisende'],
        seasonality: 'Sommer und Herbst',
        transmission: 'Fäkal-oraler Weg (kontaminierte Lebensmittel, Wasser, direkter Kontakt).'
      },
      pathomechanism: {
        steps: [
          'Invasive Erreger invadieren die Kolonschleimhaut.',
          'Ausgeprägte ulzerative Entzündung, Schleimhautnekrosen und mikrovaskuläre Blutungen entstehen.',
          'Bei Shiga-Toxin-bildenden Stämmen kann eine Endothelschädigung ein HUS auslösen.'
        ]
      },
      clinical: {
        incubation: '1-7 Tage je nach Ätiologie',
        onset: 'Akut',
        symptoms: [
          { name: 'Blutig-schleimige Diarrhoe', description: 'Häufige, kleinvolumige Stühle mit sichtbarem Blut und Schleim.', severity: 'severe' },
          { name: 'Tenesmen', description: 'Schmerzhafter, krampfartiger, vergeblicher Stuhldrang.', severity: 'severe' },
          { name: 'Hohes Fieber', description: 'Fieber mit Schüttelfrost und Toxizität (AUSSER bei STEC!).', severity: 'severe' }
        ],
        physical_exam: ['Unterbauchdruckempfindlichkeit', 'Fieber', 'Toxizitäts- und Dehydratationszeichen'],
        complications: ['Hämolytisch-Urämisches Syndrom (HUS - STEC/Shigella)', 'Toxisches Megakolon', 'Darmperforation', 'Septischer Schock']
      },
      diagnostics: {
        laboratory: [{ test: 'Blutbild / Kreatinin', finding: 'Leukozytose, Thrombozytopenie/Anämie (HUS-Screening!)', interpretation: 'Beurteilung von Schweregrad und HUS' }],
        microbiology: [
          { test: 'Stuhlkultur', finding: 'Bakterielle Erreger', significance: 'Obligat' },
          { test: 'Stuhl-Shiga-Toxin-Test / PCR', finding: 'Stx1/Stx2, ipaH nachgewiesen', significance: 'ZWINGEND ZUR UNTERSCHEIDUNG VON STEC UND SHIGELLEN!' },
          { test: 'Stuhl-Parasitenuntersuchung', finding: 'E. histolytica Trophozoiten/Zysten', significance: 'Bei Verdacht auf Amöbenruhr' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin', dose: '500 mg p.o. täglich (oder 1 g Einzeldosis)', duration: '3 Tage', note: 'Bevorzugtes empirisches Mittel (deckt Shigella/Campylobacter ab)' },
            { drug: 'Ceftriaxon', dose: '1-2 g i.v. 1x täglich', duration: '3-5 Tage', note: 'Für hospitalisierte oder schwer kranke Patienten' }
          ]
        },
        targeted: 'KLINISCHE VORGABE: 1. Wenn Shiga-Toxin positiv (STEC/EHEC), SIND ANTIBIOTIKA STRENG KONTRAINDIZIERT! 2. Wenn Shigella/Campylobacter/EIEC bestätigt: Azithromycin 500 mg p.o. täglich für 3 Tage oder Ceftriaxon 1-2 g i.v. täglich. 3. Wenn Entamoeba histolytica bestätigt: Metronidazol 750 mg p.o. 3x/Tag für 7-10 Tage, ZWINGEND GEFOLGT VON Paromomycin 500 mg p.o. 3x/Tag für 7 Tage. Motilitätshemmer (Loperamid) SIND STRENG KONTRAINDIZIERT!',
        supportive: ['ORS und i.v. Ringer-Laktat Rehydratation', 'Engmaschige Überwachung bezüglich HUS-Entwicklung'],
        prevention: ['Kontaktisolierung', 'Konsequente Händehygiene']
      },
      guidelines: {
        diagnosis: ['Blutig-schleimiger Stuhl + Tenesmen → OBLIGAT: Stuhlkultur + Shiga-Toxin-Test/PCR + Parasitologie.'],
        treatment_indications: ['Empirisches Azithromycin ERST NACH Ausschluss von STEC beginnen!'],
        first_line: ['Azithromycin 500 mg p.o. täglich für 3 Tage oder Ceftriaxon 1-2 g i.v.'],
        supportive: ['Aggressive Rehydratation. Loperamid verboten!'],
        prevention: ['Kontaktisolierung.'],
        dosing: { adult: { azithromycin: '500 mg p.o. täglich für 3 Tage', ceftriaxone: '1-2 g i.v. 1x/Tag für 3-5 Tage' }, pediatric: 'Azithromycin 10 mg/kg/Tag p.o. für 3 Tage.' },
        references: ['IDSA Infectious Diarrhea Guidelines: https://www.idsociety.org/']
      },
      prognosis: { mortality: '1-15% je nach Erreger und HUS-Eintritt', prognostic_scores: [], factors: 'STEC-Ätiologie, HUS-Entwicklung, verzögerte Paromomycin-Therapie bei Amöbiase' },
      differential: [
        { disease: 'STEC/EHEC', distinguishing: 'Kein Fieber, Antibiotika verschlechtern den Verlauf!' },
        { disease: 'CED-Akutschub', distinguishing: 'Negativer Infektionsnachweis, Koloskopie' }
      ]
    }
  ]
};
