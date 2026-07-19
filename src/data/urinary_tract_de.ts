import { Category } from '../types';

export const urinaryTractDe: Category = {
  name: 'Harnwegsinfektionen',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'Unterscheiden Sie untere (meist ohne systemische Zeichen) und obere (Pyelonephritis, mit systemischen Zeichen) Harnwegsinfektionen. Untere HWI sind meist ambulant behandelbar; obere HWI benotigen haufiger umfassendere Abklarung und ggf. Klinikaufnahme.',
    lower: 'Typische Symptome: Dysurie (brennend), Pollakisurie, Harndrang, suprapubische Beschwerden, gelegentlich Hamaturie. Vitalparameter meist unauffallig.',
    upper: 'Systemische Zeichen: Fieber (>38°C), Schuttelfrost, Abgeschlagenheit; lokal: Flankenschmerz/CVA-Druckschmerz, Ubelkeit/Erbrechen. Labor: Leukozytose, CRP-Anstieg, Pyurie; Urinkultur und bei Fieber Blutkulturen erwagen.',
    diagnostics: ['1) Anamnese und Vitalzeichen', '2) Urinstreifen und Mikroskopie', '3) Urinkultur bei komplizierten/rezidivierenden Fallen oder bei systemischen Zeichen', '4) Bluttests (BB, Kreatinin, CRP) und Blutkulturen bei systemischer Erkrankung', '5) Bildgebung (US/CT) bei Obstruktion, Persistenz oder Abszessverdacht'],
    red_flags: ['Sepsiszeichen (Hypotonie, Bewusstseinsstorung)', 'Rascher Kreatininanstieg oder Obstruktion', 'Schwangerschaft mit Fieber', 'Unfahigkeit, oral zuzufuhren (Erbrechen)', 'Immunsuppression'],
    special_populations: 'Altere: haufig atypisch (Verwirrung, Sturz, Gebrechlichkeit) — niedrige Schwelle fur Abklarung. Kinder: Fieber kann einziges Zeichen sein. Schwangerschaft: niedrige Schwelle fur Therapie und engmaschige Nachverfolgung.',
    teaching_tip: 'Urinbeschwerden ohne systemische Zeichen → Zystitis wahrscheinlich. Hinzukommen Fieber und Flankenschmerzen → Pyelonephritis vermuten, Evaluation und Behandlung eskalieren.'
  },
  diseases: [
    {
      id: 'cystitis',
      name: 'Lokalisierte Harnwegsinfektion: Zystitis (Blasenentzundung)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negativ', shape: 'Stabchen' },
      epidemiology: {
        incidence: '50% der Frauen mindestens einmal im Leben',
        risk_groups: ['Sexuell aktive Frauen', 'Postmenopause', 'Schwangerschaft', 'Diabetes', 'Kathetertrager'],
        seasonality: 'Keine',
        transmission: 'Aufsteigende Infektion (perineale Flora)'
      },
      pathomechanism: {
        steps: [
          'Kolonisation: Darmbakterien (hauptsachlich E. coli) besiedeln den periurethralen Bereich und den Vaginaleingang.',
          'Aufstieg: Bakterien steigen durch die Harnrohre in die Blase auf (kurzere Harnrohre bei Frauen pradiszoniert).',
          'Adharenz und Invasion: Bakterien haften mit P-Fimbrien am Blasenurothel, vermeiden das Auswaschen durch Urin und dringen dann in Zellen ein.',
          'Entzundung: Bakterienvermehrung und Toxine (z.B. Hamolysin) losen eine Entzundungsreaktion aus, die Schleimhauthyperamie, Odeme und Symptome verursacht.'
        ],
        virulence_factors: ['P-Fimbrien (Adharenz)', 'Hamolysin', 'Aerobactin (Eisenaufnahme)']
      },
      clinical: {
        incubation: 'Variabel',
        onset: 'Plotzlich',
        symptoms: [
          { name: 'Dysurie', description: 'Brennendes, stechendes Gefuhl beim Wasserlassen, verursacht durch Reizung der entzundeten Harnrohre und des Blasenhalses.', severity: 'moderate' },
          { name: 'Pollakisuria', description: 'Haufiges Entleeren kleiner Urinmengen aufgrund von Blasenwandreizung und reduzierter Kapazitat.', severity: 'moderate' },
          { name: 'Harndrang', description: 'Plotzlicher, zwingender Harndrang, der schwer zu unterdrucken ist (Risiko der Dranginkontinenz).', severity: 'moderate' },
          { name: 'Suprapubische Schmerzen', description: 'Druck oder Schmerz im Unterbauch, uber dem Schambein.', severity: 'mild' },
          { name: 'Hamaturie', description: 'Makroskopisch blutiger Urin (ca. 30%), oft am Ende des Wasserlassens (terminale Hamaturie), aufgrund von Blutungen der hyperamischen Schleimhaut.', severity: 'mild' },
          { name: 'Atypische Prasentation bei Alteren', description: 'Altere Patienten konnen weniger Harnwegssymptome haben und stattdessen mit Verwirrtheit, Sturzen oder verminderter Leistungsfahigkeit auffallen.', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubische Druckempfindlichkeit',
          'Fieber meist NICHT vorhanden (wenn ja, Verdacht auf Pyelonephritis!)',
          'Nierenlager nicht klopfschmerzhaft',
          'Fehlen von vaginalem Ausfluss (erhoht Wahrscheinlichkeit fur Zystitis)',
          'Bei Alteren oder Diabetikern kann die Untersuchung unspezifisch sein, Fieber fehlt haufig'
        ],
        complications: ['Aufsteigende Pyelonephritis', 'Rezidivierende Zystitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinstreifen', finding: 'Leukozytenesterase+, Nitrit+', interpretation: 'Hoher positiver Vorhersagewert' },
          { test: 'Urinsediment', finding: 'Pyurie (>10 Leukozyten/Gesichtsfeld)', interpretation: 'Haufig, aber nicht spezifisch' }
        ],
        imaging: [
          { test: 'Nicht erforderlich', finding: 'Nur bei atypischen Symptomen', interpretation: 'Nicht zur Standarddiagnose' }
        ],
        microbiology: [
          { test: 'Urinkultur', finding: '≥10^3 KBE/ml', significance: 'Nur bei komplizierten, rezidivierenden oder atypischen Fallen empfohlen (EAU 2025)' }
        ]
      },
      differential: [
        { disease: 'Vaginitis', distinguishing: 'Ausfluss, Juckreiz, externe Dysurie' },
        { disease: 'Urethritis (STD)', distinguishing: 'Neuer Partner, schleichender Beginn, Pyurie mit steriler Kultur' },
        { disease: 'Interstitielle Zystitis', distinguishing: 'Chronisch, Kultur negativ' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin-Trometamol', dose: '3g p.o.', duration: 'Einzeldosis', note: 'Erste Wahl (EAU 2025)' },
            { drug: 'Nitrofurantoin', dose: '2x100mg p.o.', duration: '5 Tage', note: 'Erste Wahl (EAU 2025)' },
            { drug: 'Pivmecillinam', dose: '3x400mg p.o.', duration: '3-5 Tage', note: 'Erste Wahl (EAU 2025)' }
          ],
          inpatient: [
            { drug: 'Erfordert keine Krankenhausbehandlung', dose: '-', duration: '-', note: 'Außer bei Komplikationen' }
          ]
        },
        targeted: 'Basierend auf Kultur. Fluorchinolone (Ciprofloxacin, Levofloxacin) werden empirisch fur unkomplizierte Zystitis NICHT empfohlen!',
        supportive: ['Reichlich Flussigkeitszufuhr', 'Haufiges Wasserlassen', 'NSAID zur Schmerzlinderung'],
        prevention: ['Verhalten: Reichlich Flussigkeitszufuhr, Miktion nach Geschlechtsverkehr', 'Nicht-antibiotisch (EAU 2025): Lokales Ostrogen (Postmenopause), OM-89 Immunstimulation, D-Mannose, Blaseninstillation', 'Antibiotikaprophylaxe (letzter Schritt): Nitrofurantoin 50-100mg abends oder Fosfomycin 3g alle 10 Tage']
      },
      prognosis: {
        mortality: 'Null',
        factors: 'Neigung zu Rezidiven'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Lokalisierte Harnwegsinfektion: Pyelonephritis (Nierenbeckenentzundung)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negativ', shape: 'Stabchen' },
      epidemiology: {
        incidence: 'Haufige Komplikation einer unbehandelten Zystitis',
        risk_groups: ['Frauen', 'Schwangerschaft', 'Obstruktion (Stein, Prostata)', 'Nierenfehlbildung', 'Diabetes'],
        seasonality: 'Keine',
        transmission: 'Aufsteigende Infektion (95%), selten hamatogen'
      },
      pathomechanism: {
        steps: [
          'Aufsteigende Infektion: Bakterien steigen von der Blase uber den Harnleiter ins Nierenbecken auf (oft begünstigt durch vesikoureteralen Reflux).',
          'Parenchyminvasion: Erreger dringen in das Nierenparenchym ein, primar in das Mark.',
          'Entzundungsreaktion: Eine heftige akute Entzundungsreaktion (Neutrophileninfiltration) wird gegen die Bakterien ausgelost, was zu Gewebeodemen, Mikroabszessen und Tubulusschaden fuhrt.',
          'Systemische Wirkung: Entzundungsmediatoren, die in den Kreislauf gelangen, verursachen Fieber und systemische Symptome.'
        ],
        virulence_factors: ['P-Fimbrien', 'Endotoxin', 'Kapsel']
      },
      clinical: {
        incubation: 'Tage nach Zystitis',
        onset: 'Plotzlich',
        symptoms: [
          { name: 'Fieber und Schuttelfrost', description: 'Hohes Fieber (>38°C) und Schuttelfrost sind typische Zeichen einer Nierenparenchyminfektion und zeigen eine systemische Entzundungsreaktion an.', severity: 'severe' },
          { name: 'Flankenschmerz', description: 'Dumpfer, anhaltender Schmerz in der Nierengegend durch Dehnung der Nierenkapsel; ein- oder beidseitig moglich.', severity: 'severe' },
          { name: 'Gastrointestinale Symptome', description: 'Ubelkeit, Erbrechen und Appetitlosigkeit sind haufig, da die Nierenentzundung viszerale Reflexe auslosen kann.', severity: 'moderate' },
          { name: 'Symptome der unteren Harnwege', description: 'Dysurie und Pollakisurie konnen vorhanden sein, fehlen jedoch in 30-50% der Falle; das Fehlen von Blasensymptomen schließt eine obere HWI nicht aus.', severity: 'moderate' },
          { name: 'Atypische Prasentation', description: 'Altere oder immungeschwachte Patienten konnen hauptsachlich mit Verwirrtheit, Schwache oder Funktionsabfall auffallen.', severity: 'moderate' }
        ],
        physical_exam: [
          'Klopfschmerz im costovertebralen Winkel (Nierenlager) (Giordano-Zeichen)',
          'Fieber, Tachykardie',
          'Abdominelle Druckempfindlichkeit kann vorhanden sein, ist jedoch weniger spezifisch',
          'Besonders bei Alteren oder Immungeschwachten kann die Untersuchung unauffallig sein'
        ],
        complications: ['Nierenabszess', 'Perinephritischer Abszess', 'Urosepsis', 'Papillennekrose', 'Chronische Niereninsuffizienz (rezidivierend)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Leukozytose mit Linksverschiebung', interpretation: 'Systemische Entzundung' },
          { test: 'CRP/PCT', finding: 'Deutlich erhoht', interpretation: 'Bakterielle Infektion' },
          { test: 'Urin', finding: 'Leukozyturie, Bakteriurie, Leukozytenzylinder', interpretation: 'Ursprung in den oberen Harnwegen' },
          { test: 'Nierenfunktion', finding: 'Kreatinin kann erhoht sein', interpretation: 'Akute Nierenschadigung' }
        ],
        imaging: [
          { modality: 'CT Abdomen/Becken', finding: 'Nierenvergroßerung, perinephritische Flussigkeit, keilformige Hypodensitat', significance: 'Goldstandard zum Ausschluss von Komplikationen (EAU 2025)' },
          { modality: 'Nieren-US', finding: 'Obstruktion, Abszess', significance: 'Strahlenfreie Alternative' }
        ],
        microbiology: [
          { test: 'Urinkultur', finding: '≥10^4 KBE/ml', significance: 'Immer abnehmen! (EAU 2025)' },
          { test: 'Blutkultur', finding: 'Positiv', significance: 'Bei Krankenhausaufnahme empfohlen' }
        ]
      },
      differential: [
        { disease: 'Nierenstein', distinguishing: 'Kolikartiger Schmerz, kein Fieber (wenn keine Infektion), Hamaturie dominiert' },
        { disease: 'Akutes Abdomen', distinguishing: 'Appendizitis, Cholezystitis (Abdominalstatus, US)' },
        { disease: 'Beckenentzundung (PID)', distinguishing: 'Gynakologische Untersuchung, Ausfluss' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '7 Tage', note: 'keine Wirksamkeit gegen Enterokokken' },
            { drug: 'Levofloxacin', dose: '1x750mg p.o.', duration: '5 Tage', note: 'Nur Alternative, wenn E. coli Resistenz <10% (EAU 2025)' },
            { drug: 'Ceftibuten/Cefixim', dose: 'p.o.', duration: '10 Tage', note: 'Wenn Chinolon nicht gegeben werden kann (weniger wirksam)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g i.v.', duration: '10-14 Tage', note: 'Erste Wahl' },
            { drug: 'Ciprofloxacin', dose: '2x400mg i.v.', duration: '10-14 Tage', note: 'Alternative, wenn E. coli Resistenz <10% (EAU 2025)' }
          ]
        },
        targeted: 'Basierend auf Antibiogramm. ESBL ist haufig!',
        supportive: ['Flussigkeitsersatz', 'Fiebersenkung', 'Beseitigung der Obstruktion (Katheter, Stent)'],
        prevention: ['Adaquate Behandlung der Zystitis', 'Korrektur anatomischer Anomalien']
      },
      prognosis: {
        mortality: 'Niedrig (<1%), aber 10-20% bei Urosepsis',
        factors: 'Hohes Alter, Obstruktion, resistenter Erreger'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Systemisch Harnwegsinfektion',
      pathogen: { type: 'Bakterium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: 'Haufig im Krankenhausumfeld und bei urologischen Patienten',
        risk_groups: ['Kathetertrager', 'Manner', 'Schwangere', 'Anatomische/funktionelle Anomalie', 'Niereninsuffizienz', 'Immunsuppression'],
        seasonality: 'Keine',
        transmission: 'Aufsteigend, Katheter-assoziiert, hamatogen'
      },
      pathomechanism: {
        steps: [
          'Pradisponierender Faktor: Anatomische (z.B. Striktur, Stein) oder funktionelle (z.B. neurogene Blase) Anomalie oder Vorhandensein eines Fremdkorpers (Katheter) behindert den Urinfluss und das Auswaschen von Bakterien.',
          'Biofilmbildung: Bakterien (z.B. Proteus, Pseudomonas) bilden eine Biofilmschicht auf dem Katheter oder Stein, die sie vor Antibiotika und dem Immunsystem schutzt.',
          'Persistenz: Infektion ist schwer zu eradizieren; Selektion resistenter Stamme und rezidivierende Infektionen sind haufig.'
        ],
        virulence_factors: ['Biofilm', 'Multiresistenz', 'Urease (Proteus)']
      },
      clinical: {
        incubation: 'Variabel',
        onset: 'Variabel (kann oligosymptomatisch sein)',
        symptoms: [
          { name: 'Symptome der unteren Harnwege', description: 'Dysurie, Pollakisurie und Harndrang konnen auftreten, sind aber nicht immer dominant; die Infektion kann mehrere Abschnitte des Harntrakts betreffen.', severity: 'moderate' },
          { name: 'Obere Harnwegs-/lokale Schmerzen', description: 'Suprapubische oder Flankenschmerzen konnen vorhanden sein, insbesondere wenn Obstruktion oder Nierenbeteiligung vorliegen.', severity: 'moderate' },
          { name: 'Systemische Entzundung', description: 'Fieber, Schuttelfrost und Tachykardie deuten auf eine großere Erregerlast und eine systemische Wirtsreaktion hin.', severity: 'severe' },
          { name: 'Sepsiszeichen', description: 'Hypotonie, Tachypnoe, veranderter Bewusstseinszustand oder Oligurie konnen bei Urosepsis auftreten und erfordern dringende Quellekontrolle.', severity: 'severe' },
          { name: 'Oligosymptomatisch', description: 'Katheterisierte, neurogene Blase oder immungeschwachte Patienten zeigen oft keine klassischen Symptome; Labor und Vitalparameter mussen aktiv uberwacht werden.', severity: 'mild' }
        ],
        physical_exam: [
          'Oft unauffallig, insbesondere bei katheterisierten Patienten',
          'Suprapubische oder Flankendruckempfindlichkeit',
          'Vorhandensein eines Katheters oder eines anderen Harnwegssystems',
          'Fieber oder Hypothermie'
        ],
        complications: ['Urosepsis', 'Nierenabszess', 'Nierenversagen', 'Rezidiv', 'Katheterverschluss']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinkultur', finding: 'Frauen: ≥10^5 KBE/ml, Manner: ≥10^4 KBE/ml', interpretation: 'Diagnostische Schwellenwerte (EAU 2025)' },
          { test: 'Katheterurin', finding: '≥10^4 KBE/ml', interpretation: 'Signifikante Bakteriurie' },
          { test: 'Nierenfunktion', finding: 'Kreatinin prufen', interpretation: 'Obstruktion/Schadigung' }
        ],
        imaging: [
          { modality: 'CT-Urographie', finding: 'Anatomische/funktionelle Anomalie', significance: 'OBLIGATORISCH zur Klarung des pradisponierenden Faktors' }
        ],
        microbiology: [
          { test: 'Kultur + Resistenz', finding: 'Essenziell', significance: 'Basis fur gezielte Therapie' }
        ]
      },
      differential: [
        { disease: 'Unkomplizierte HWI', distinguishing: 'Kein Risikofaktor/anatomischer Fehler' },
        { disease: 'Prostatitis', distinguishing: 'Rektale Untersuchung' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim-Axetil', dose: '2x500mg p.o.', duration: '7-14 Tage', note: 'keine Wirksamkeit gegen Enterokokken' },
            { drug: 'Ciprofloxacin', dose: '2x500-750mg p.o.', duration: '7-14 Tage', note: 'Nur wenn keine Fluorchinolon-Behandlung in den letzten 6 Monaten und E. coli Resistenz <10% (EAU 2025)' },
            { drug: 'Levofloxacin', dose: '1x750mg p.o.', duration: '7-14 Tage', note: 'Alternative, wenn E. coli Resistenz <10% (EAU 2025)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g i.v.', duration: '10-14 Tage', note: 'In schweren Fallen' },
            { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '10-14 Tage', note: 'Verdacht auf Pseudomonas/vorherige AB-Behandlung' },
            { drug: 'Carbapenem (Meropenem)', dose: '3x1g i.v.', duration: '10-14 Tage', note: 'ESBL-Risiko oder septischer Schock' }
          ]
        },
        targeted: 'Korrektur basierend auf Kultur. Beseitigung der Obstruktion (Katheterwechsel, Stent, Nephrostomie) ist unerlasslich!',
        supportive: ['Flussigkeitsersatz', 'Fiebersenkung'],
        prevention: ['Katheterpflege (geschlossenes System, sofortige Entfernung)', 'Beseitigung der Obstruktion', 'Vermeidung der Behandlung asymptomatischer Bakteriurie']
      },
      prognosis: {
        mortality: '10-30% bei Urosepsis',
        factors: 'Grunderkrankung, Resistenz, Sanierung des Herdes'
      }
    },
    {
      id: 'prostatitis',
      name: 'Bakterielle Prostatitis',
      pathogen: { type: 'Bakterium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: '50% der Manner erleben Symptome im Laufe ihres Lebens',
        risk_groups: ['Junge/mittelalte Manner', 'Katheterisierung', 'Urologischer Eingriff (Biopsie)', 'HIV', 'Diabetes'],
        seasonality: 'Keine',
        transmission: 'Aufsteigend (Reflux), hamatogen, lymphogen, direkt (Biopsie)'
      },
      pathomechanism: {
        steps: [
          'Infektionsweg: Am haufigsten gelangen Bakterien durch intraprostatischen Reflux von infiziertem Urin in die Prostatadrusen.',
          'Entzundung: In akuten Fallen entwickeln sich Odeme und Mikroabszesse in den Drusen, was zu Schwellung und Spannung der Prostata fuhrt.',
          'Chronifizierung: Bakterien konnen Biofilme auf Prostatasteinen oder in Drusengangen bilden, was rezidivierende Infektionen aufrechterhalt.'
        ],
        virulence_factors: ['Biofilm', 'Anatomische Lage (schlechte AB-Penetration)']
      },
      clinical: {
        incubation: 'Variabel',
        onset: 'Akut (ABP) oder Chronisch (CBP)',
        symptoms: [
          { name: 'Akut: Systemische Symptome', description: 'Plotzlich einsetzendes hohes Fieber, Schuttelfrost, Muskelschmerzen, Unwohlsein (grippeahnlicher Beginn).', severity: 'severe' },
          { name: 'Schmerzen', description: 'Charakteristische perineale, rektale, Unterbauchschmerzen, die in Hoden und Penis ausstrahlen.', severity: 'moderate' },
          { name: 'LUTS (Symptome der unteren Harnwege)', description: 'Ausgepragte Dysurie, Pollakisurie, dringender Harndrang.', severity: 'moderate' },
          { name: 'Obstruktion', description: 'Die geschwollene Prostata komprimiert die Harnrohre, was zu erschwertem Wasserlassen, schwachem Strahl oder vollständigem Harnverhalt fuhren kann.', severity: 'severe' },
          { name: 'Harnverhalt', description: 'Schwere Obstruktion kann zu Uberdehnung der Blase und akutem Harnverhalt fuhren.', severity: 'severe' },
          { name: 'Chronische Symptome', description: 'Mildere, wiederkehrende Beschwerden: Beckenbeschwerden, rezidivierende Harnwegsinfektionen, schmerzhafte Ejakulation.', severity: 'mild' }
        ],
        physical_exam: [
          'Digitale rektale Untersuchung (DRU):',
          'Akut: Geschwollene, warme, EXTREM druckempfindliche Prostata (Massage VERBOTEN - Bakteriämiegefahr!)',
          'Chronisch: Kann normal oder leicht druckempfindlich sein, nicht geschwollen',
          'Blase kann bei Harnverhalt palpabel sein'
        ],
        complications: ['Prostataabszess', 'Urosepsis', 'Chronifizierung', 'Epididymitis', 'Harnverhalt', 'Sexuelle Dysfunktion']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urin', finding: 'Pyurie, Bakteriurie', interpretation: 'Positiv' },
          { test: 'Blutbild/CRP', finding: 'Erhoht (Akut)', interpretation: 'Systemische Entzundung' },
          { test: 'PSA', finding: 'Erhoht', interpretation: 'Aufgrund von Entzundung (nicht zur Krebsdiagnose in der akuten Phase!)' }
        ],
        imaging: [
          { modality: 'Transrektaler US (TRUS)', finding: 'Abszess (hypoechogener Bereich)', significance: 'Nur wenn keine Besserung auf Behandlung oder Verdacht auf Abszess' }
        ],
        microbiology: [
          { test: 'Akut: Urinkultur', finding: 'Mittelstrahlurin', significance: 'Prostatamassage VERBOTEN!' },
          { test: 'Chronisch: Meares-Stamey-Test', finding: '4-Glaser-Probe oder 2-Glaser-Probe (vor/nach Massage)', significance: 'Goldstandard (EAU 2025)' }
        ]
      },
      differential: [
        { disease: 'Zystitis', distinguishing: 'Kein Fieber, keine Prostataempfindlichkeit' },
        { disease: 'BPH', distinguishing: 'Keine Infektionszeichen, langsame Progression' },
        { disease: 'Chronisches Beckenschmerzsyndrom (CPPS)', distinguishing: 'Negative Kultur, chronische Schmerzen' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Levofloxacin', dose: '1x500-750mg p.o.', duration: '2-4 Wochen (Akut), 4-6 Wochen (Chronisch)', note: 'EAU 2025: Erste Wahl (gute Penetration)' },
            { drug: 'Ciprofloxacin', dose: '2x500mg p.o.', duration: '2-4 Wochen (Akut), 4-6 Wochen (Chronisch)', note: 'EAU 2025: Erste Wahl' },
            { drug: 'Cotrimoxazol', dose: '2x960mg p.o.', duration: '4-6 Wochen', note: 'Alternative' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2g i.v.', duration: '14 Tage', note: 'Bei schweren akuten Fallen (dann p.o. Wechsel)' },
            { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g i.v.', duration: '', note: 'Urosepsis/Verdacht auf Pseudomonas' }
          ]
        },
        targeted: 'Fluorchinolone (erste Wahl bei chronisch). Makrolide (Verdacht auf Chlamydien). Fosfomycin (MDR - umstrittene Penetration).',
        supportive: ['NSAID zur Schmerzlinderung', 'Alpha-Blocker (Tamsulosin) zur Symptomlinderung', 'Suprapubischer Katheter (bei Retention, urethral sollte bei akuter Entzundung vermieden werden!)'],
        prevention: ['Frühzeitige Behandlung von HWI', 'Prostatabiopsie-Prophylaxe: Gezielt (basierend auf Rektalabstrich) oder Fosfomycin/Ceftriaxon (Fluorchinolone vermeiden!)']
      },
      prognosis: {
        mortality: 'Akut: niedrig (aber Sepsisrisiko); Chronisch: beeintrachtigt Lebensqualitat, schwer zu heilen (Rezidiv haufig)',
        factors: 'Biofilm, Resistenz, Anatomie, Ubergang zu CPPS'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Asymptomatische Bakteriurie',
      pathogen: { type: 'Bakterium', name: '<i>E. coli, Enterococcus, GBS</i>, etc.', gram: 'Variabel', shape: 'Variabel' },
      epidemiology: {
        incidence: 'Haufig (Frauen 3-5%, Altere 10-50%, Kathetertrager 100%)',
        risk_groups: ['Altere', 'Diabetes', 'Kathetertrager', 'Schwangerschaft'],
        seasonality: 'Keine',
        transmission: 'Endogene Kolonisation'
      },
      pathomechanism: {
        steps: [
          'Kolonisation: Bakterien besiedeln die Harnwege, aber es fehlen ihnen Virulenzfaktoren (z.B. spezifische Fimbrien), die Gewebeinvasion oder Entzundung auslosen wurden.',
          'Kommensalismus: Ein Gleichgewichtszustand entwickelt sich zwischen Bakterien und Wirt, ohne Symptome.',
          'Schutzwirkung: Kolonisierende Stamme konnen mit virulenteren Pathogenen konkurrieren und so moglicherweise eine schutzende Wirkung haben.'
        ],
        virulence_factors: ['Reduzierte Virulenz']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Asymptomatisch', description: 'Der Patient hat keine Harnwegsbeschwerden (keine Dysurie, kein Fieber, keine Schmerzen). Bakteriurie ist ein Zufallsbefund.', severity: 'mild' }
        ],
        physical_exam: [
          'Negativ',
          'Truber/ubelriechender Urin allein ist nicht diagnostisch und erfordert keine Behandlung!',
          'Keine suprapubische oder flankente Druckempfindlichkeit'
        ],
        complications: ['Unnotige Antibiotikabehandlung → Resistenz', 'Pyelonephritis (Risiko nur in Schwangerschaft/bei Eingriffen)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinkultur', finding: '≥10^5 KBE/ml (gleicher Stamm)', interpretation: 'Frauen: 2 aufeinanderfolgende Proben, Manner: 1 Probe (EAU 2025)' },
          { test: 'Katheterprobe', finding: '≥10^5 KBE/ml', interpretation: 'Eine Probe ist ausreichend' },
          { test: 'Urinsediment', finding: 'Pyurie ist oft vorhanden', interpretation: 'Indiziert KEINE Behandlung ohne Symptome!' }
        ],
        imaging: [
          { test: 'Nicht erforderlich', finding: 'Keine Indikation', interpretation: 'Ausgeschlossen bei asymptomatischen Befunden' }
        ],
        microbiology: [
          { test: 'Kultur', finding: 'Positiv', significance: 'Nur wenn Screening indiziert ist (z.B. Schwangerschaft, urologischer Eingriff)' }
        ]
      },
      differential: [
        { disease: 'Zystitis', distinguishing: 'Vorhandensein von Symptomen (Dysurie, Harndrang)' },
        { disease: 'Kontamination', distinguishing: 'Niedrige Keimzahl, Mischflora' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'KEINE Behandlung', dose: '-', duration: '-', note: 'Allgemeine Regel (auch nicht bei Alteren, Diabetikern, Katheterpatienten!)' }
          ],
          inpatient: [
            { drug: 'KEINE Behandlung', dose: '-', duration: '-', note: 'Außer bei Indikationen' }
          ]
        },
        targeted: 'Nur bei Indikation (Schwangerschaft, urologischer Eingriff mit Schleimhautverletzung). In der Schwangerschaft: Fosfomycin, Nitrofurantoin, Cephalosporin.',
        supportive: ['Aufklarung (Uringeruch/-farbe rechtfertigt kein AB)'],
        prevention: ['Vermeidung unnotigen Screenings und Behandlung', 'Katheterpflege']
      },
      prognosis: {
        mortality: 'Erhoht die Mortalitat auch unbehandelt nicht',
        factors: '-'
      }
    }
  ]
};
