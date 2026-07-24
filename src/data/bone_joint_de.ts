import { Category } from '../types';

export const boneJointDe: Category = {
  name: 'Knochen- und Gelenkinfektionen',
  icon: '🦴',
  color: '#57534e',
  didactics: {
    overview: 'Knochen- und Gelenkinfektionen umfassen tiefe Gewebs-/Gelenk-Osteomyelitis, Septische Arthritis, Spondylodiszitis sowie Periprothetische Infektionen (PJI). Das Management erfordert eine rasche diagnostische Abklärung (Blutkulturen, Arthrozentese, bildgestützte Biopsie, MRT), chirurgische Quellkontrolle (Gelenkdrainage, Sequestrektomie, Implantatmanagement) und gezielte antimikrobielle Therapie.',
    primary: 'Akute Osteomyelitis: Bei Kindern überwiegend hämatogen, bei Erwachsenen per continuitatem (diabetisches Fußsyndrom, offene Fraktur). Haupterreger ist S. aureus (MSSA/MRSA). Goldstandard der Diagnostik ist die Knochenbiopsie für Kultur und Histologie vor Beginn der Antibiose (außer bei Sepsis). Nach den Prinzipien der OVIVA-Studie ist ein fehlerfreier/früher Wechsel auf hoch bioverfügbare orale Antibiotika (nach 7–10 Tagen i.v.-Behandlung) einer 6-wöchigen i.v.-Gabe ebenbürtig.',
    secondary: 'Septische Arthritis: Internistischer und orthopädischer Notfall! Vor Antibiotikabeginn ist eine Notfall-Arthrozentese erforderlich (Punktat-Leukozyten >50.000/µL, >90% Neutrophile). Die Behandlung verlangt eine umgehende Gelenkentlastung/Drainage (wiederholte Nadelaspiration, Arthroskopie oder offenes Spülen) und eine 3–4-wöchige gezielte Antibiose.',
    biliary: 'Infektiöse Spondylodiszitis: Wirbelkörper- und Bandscheibeninfektion. Leitsymptom ist der lokalisierte tiefe Rückenschmerz (>90%), während Fieber nur in ca. 50% der Fälle vorliegt. Kontrastmittel-MRT der Wirbelsäule ist der Goldstandard der Bildgebung. Die Gesamtdauer der Antibiose beträgt 6 Wochen. Eine Notfall-OP ist bei progressivem neurologischem Defizit, spinaler Instabilität oder Epiduralabszess indiziert.',
    diagnostics: [
      '1) Diagnostische Arthrozentese (Gelenkpunktion): Obligat bei Verdacht auf Septische Arthritis VOR Antibiotikabeginn (Punktat-Leukozyten >50.000/µL, >90% Neutrophile).',
      '2) Knochenbiopsie & Kultur: Goldstandard der Osteomyelitis-Diagnostik (CT-gestützt oder intraoperativ) vor Antibiotikagabe.',
      '3) Kontrastmittel-MRT: Goldstandard der Bildgebung bei Spondylodiszitis, Osteomyelitis sowie epiduralen/paraspinalen Abszessen.',
      '4) Blutkulturen (2–3 Paar): Positiv bei 50–70% der Spondylodiszitiden und Septischen Arthritiden.',
      '5) Sepsis-Marker: BSG und CRP zur Erfassung der Ausgangsschwere und Verlaufsbeurteilung.'
    ],
    red_flags: [
      'Akute Monoarthritis mit Unfähigkeit zur aktiven oder passiven Gelenkbewegung (Notfall Septische Arthritis)',
      'Progressives neurologisches Defizit (Paresen, Sensibilitätsstörung, Sphinkterdysfunktion) bei Verdacht auf Spondylodiszitis (Epiduralabszess)',
      'Klopfschmerzhaftigkeit über den Dornfortsätzen bei ruhe- und nachtschmerzhaftem Rückenschmerz',
      'Positiver Sonde-auf-Knochen-Test (Probe-to-Bone, PTB) mit freiliegendem Knochen bei Fußulkus',
      'SIRS-Kriterien / septischer Schock bei Knochen- oder Gelenkinfektion'
    ],
    special_populations: 'Diabetiker: Hohes Risiko für kontiguitätsbedingte Osteomyelitis bei Fußulzerationen; PTB-Test und MRT erforderlich. i.v.-Drogenkonsumenten: Erhöhte CA-MRSA-Inzidenz, Septische Arthritis (Sternoklavikular-/Sakroiliakalgelenk) und Spondylodiszitis. Senioren: Atypischer Verlauf ohne Fieber; höhere Mortalität bei septischer Arthritis.',
    teaching_tip: 'Bei Septischer Arthritis ist die Gelenkdrainage ein Notfall! Bei Osteomyelitis und Spondylodiszitis ist eine frühe orale Umstellung nach 7–10 Tagen i.v.-Induktion (OVIVA-Studie) einer 6-wöchigen i.v.-Therapie ebenbürtig.'
  },
  tables: [
    {
      title: 'Leitlinien-Zusammenfassung & Differentialdiagnose wichtiger Knochen- und Gelenkinfektionen',
      headers: ['Erkrankung', 'Erreger-Spektrum', 'Diagnostischer Goldstandard', 'Wichtigste Leitlinien-Kriterien', 'Kalkulierte antimikrobielle Therapie', 'Interventionelle / Chirurgische Quellkontrolle'],
      rows: [
        ['Osteomyelitis', 'Staphylococcus aureus (MSSA/MRSA), S. epidermidis, Gram-negative Stäbchen', 'Knochenbiopsie mit Kultur und Histologie + MRT', 'IDSA / OVIVA-Studie: 4-6 Wochen Gesamttherapie; frühe orale Umstellung ebenbürtig', 'Vancomycin 15-20mg/kg i.v. + Cefepim / Pip-Tazo (frühe orale Umstellung)', 'Chirurgisches Debridement von nekrotischem Knochen (Sequestrektomie)'],
        ['Septische Arthritis', 'Staphylococcus aureus, S. pyogenes, N. gonorrhoeae, Gram-negative Stäbchen', 'Notfall-Arthrozentese (Gelenk-Leukozyten >50.000/µL, >90% PMN)', 'IDSA / BSH: Sofortige Notfall-Gelenkdrainage + i.v. Antibiose', 'Vancomycin 15-20mg/kg i.v. + Ceftriaxon 2g i.v. q24h, 2-4 Wochen', 'Notfall-Gelenkdrainage (Arthroskopische Spülung oder Nadelaspiration)'],
        ['Spondylodiszitis', 'Staphylococcus aureus, E. coli, Streptokokken, M. tuberculosis', 'Kontrastmittel-MRT + Blutkulturen / CT-gestützte Biopsie', 'IDSA-Leitlinien: 6-8 Wochen gezielte Therapie + MRT-Monitoring', 'Vancomycin + Cefepime / Ceftriaxon (frühe orale Umstellung)', 'OP bei neurologischem Defizit, Instabilität oder Epiduralabszess']
      ]
    }
  ],
  diseases: [
    {
      id: 'osteomyelitis',
      name: 'Osteomyelitis (Akute und chronische Knochenmarksentzündung)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (am häufigsten: 50-70%, inkl. MRSA), <i>Staphylococcus epidermidis</i> (KNS - nach Implantat/OP), <i>Streptococcus</i> spp., <i>Pseudomonas aeruginosa</i> (i.v.-Drogenkonsumenten, Stichverletzungen), <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i> - diabetischer Fuß), <i>Salmonella</i> spp. (Sichelzellanämie), <i>Mycobacterium tuberculosis</i>',
        gram: 'Gemischt (überwiegend Gram-positiv)',
        shape: 'Kokus/Stäbchen'
      },
      epidemiology: {
        incidence: 'Bei Kindern überwiegend hämatogen (Metaphyse), bei Erwachsenen posttraumatisch/postoperativ oder per continuitatem (aus diabetischem Fußulkus).',
        risk_groups: [
          'Diabetes mellitus',
          'Periphere arterielle Verschlusskrankheit (pAVK)',
          'OP/Trauma/Orthopädisches Implantat',
          'Intravenöse Drogenkonsumenten (i.v.DU)',
          'Chronische Hämodialyse',
          'Sichelzellanämie (Salmonellen-Risiko)'
        ],
        seasonality: 'Keine',
        transmission: 'Hämatogene Streuung, Ausbreitung per continuitatem (aus Ulkus/Weichteilen) oder direkte Inokulation (offene Fraktur, OP)'
      },
      pathomechanism: {
        steps: [
          'Invasion: Hämatogen (in der gut vaskularisierten Metaphyse von Kindern oder Wirbelkörpern Erwachsener), aus umgebender Weichteilinfektion/diabetischem Ulkus (per continuitatem) oder durch direkte Inokulation (Trauma/OP).',
          'Entzündung und Ischämie: Bakterielle Vermehrung verursacht intramedulläres Ödem und erhöhten Knochenmarkdruck. Mikrovaskulärer Verschluss führt zu Knochennekrose und abgestorbenen Knocheninseln (Sequester).',
          'Reaktive Knochenbildung & Fistel: Unter dem Periost bildet sich neuer Knochen (Involucrum/Totenlade), der den Sequester umgibt. Eitrige Fistelgänge (Sinus tract) können die Haut durchbrechen.',
          'Biofilmbildung: Staphylokokken binden über MSCRAMM-Proteine an Knochenmatrix und Metallimplantate und bilden eine schützende extrazelluläre Matrix (Biofilm), die sie vor Neutrophilen und Antibiotika schützt.'
        ],
        virulence_factors: ['Biofilmbildung', 'Adhäsine (MSCRAMM)', 'Alpha-/Panton-Valentine-Leukozidin-(PVL-)Toxine', 'Intrazelluläre Persistenz (in Osteoblasten)']
      },
      clinical: {
        incubation: 'Tage (akut) oder Wochen-Monate-Jahre (chronisch)',
        onset: 'Akut (hämatogen/traumatisch) oder schleichend progressiv, indolent (chronisch)',
        symptoms: [
          {
            name: 'Akute Osteomyelitis',
            description: 'Ausgeprägter, tiefer Knochenschmerz, lokale Schwellung, Überwärmung, Rötung, Fieber und Unfähigkeit, die betroffene Extremität zu belasten.',
            severity: 'severe'
          },
          {
            name: 'Chronische Osteomyelitis',
            description: 'Indolenter, dumpfer Schmerz, persistierende oder zyklisch eiternde Fistelöffnung (Sinus tract), Schorfbildung; Fieber fehlt meist.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Ausgeprägte lokale Druckschmerzhaftigkeit über dem Knochen',
          'Überwärmung, Schwellung, Erythem im überliegenden Weichteilgewebe',
          'Vorhandensein eines eiternden Fistelgangs (Sinus tract) in der chronischen Form',
          'Sonde-auf-Knochen-Test (Probe-to-Bone, PTB): Am Grund eines diabetischen Fußulkus ist mit einer sterilen Metallsonde eine harte, rauhe Knochenoberfläche tastbar (hohe Spezifität und Sensitivität!)'
        ],
        complications: [
          'Chronische Osteomyelitis und Knochendestruktion',
          'Pathologische Fraktur',
          'Septische Arthritis (wenn die Metaphyse innerhalb der Gelenkkapsel liegt, z. B. Hüfte, Schulter)',
          'Plattenepithelkarzinom (Marjolin-Ulkus) am Rand eines chronisch eiternden Fistelgangs',
          'Septischer Schock und systemische Sepsis'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP und BSG', finding: 'Deutlich erhöht (CRP > 50-100 mg/L)', interpretation: 'Essenziell für Therapiemonitoring und Erfassung des klinischen Ansprechens' },
          { test: 'Blutbild', finding: 'Leukozytose mit Linksverschiebung', interpretation: 'Bei akuter Form erhöht, bei chronischer Osteomyelitis häufig normal' },
          { test: 'Blutkultur (2 Paar)', finding: 'Positiv (in 50-60% der akuten hämatogenen Fälle)', interpretation: 'Obligat vor Antibiotikabeginn abzunehmen' }
        ],
        imaging: [
          { modality: 'Röntgen', finding: 'Initial (10-14 Tage) negativ! Später Periostreaktion, lytische Läsionen, Kortikalisusuren, Sequester/Involucrum', significance: 'Basisuntersuchung, schließt Frühdiagnose jedoch nicht aus' },
          { modality: 'MRT (kontrastmittelgestützt)', finding: 'Knochenmarködem (T1 hypointens, T2/STIR hyperintens), Abszessbildung, Weichteilausbreitung', significance: 'GOLDSTANDARD der Bildgebung (Sensitivität >90%, Spezifität >85%)' },
          { modality: 'CT', finding: 'Nachweis von Sequester, Kortikalisdestruktion, Gasbildung', significance: 'Hervorragend bei Metallimplantaten oder zur OP-Planung' },
          { modality: 'FDG-PET/CT', finding: 'Erhöhter Glukosemetabolismus im Knochen', significance: 'Nützlich bei chronischen Formen oder Metallartefakten' }
        ],
        microbiology: [
          { test: 'Knochenbiopsie (perkutan CT-gestützt oder offen-chirurgisch)', finding: 'Erregeridentifikation + Histopathologie (neutrophile Granulozyten, Knochennekrose)', significance: 'GOLDSTANDARD der Diagnostik! Zwei Proben entnehmen (Mikrobiologie + Histologie). Obligat vor Antibiose!' },
          { test: 'Fistelstrich-/Fistelabstrichtupfer', finding: 'Hautelemente und Kolonisation', significance: 'NICHT ZUVERLÄSSIG zur Bestimmung der tiefen Knocheninfektion (außer bei isoliertem S. aureus)!' }
        ],
        calculators: [
          {
            name: 'Cierny-Mader-Klassifikation',
            items: [
              { label: 'Anatomisch: I. Medullär (hauptsächlich hämatogen)', points: 1 },
              { label: 'Anatomisch: II. Oberflächlich (oberflächliche Knochenerosion)', points: 2 },
              { label: 'Anatomisch: III. Lokalisiert (umschriebener, stabiler Knochen)', points: 3 },
              { label: 'Anatomisch: IV. Diffus (durchgehender, instabiler Knochen)', points: 4 }
            ],
            interpretation: [
              { min: 1, max: 4, text: 'Bestimmt das Ausmaß des chirurgischen Debridements und der Rekonstruktion.' }
            ]
          }
        ]
      },
      differential: [
        { disease: 'Charcot-Osteoarthropathie', distinguishing: 'Diabetische Neuropathie, ausgeprägte Deformität ohne Fieber und CRP-Erhöhung; Unterscheidung durch MRT/Biopsie' },
        { disease: 'Ewing-Sarkom / Osteosarkom', distinguishing: 'Junger Patient, Zwiebelschalen-Periostreaktion im Röntgenbild, histopathologisch gesichert' },
        { disease: 'Phlegmone / Weichteilabszess', distinguishing: 'Prozess auf Weichteile beschränkt, Knochenmarksignal im MRT normal' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Keine ambulante empirische Therapie', dose: '-', duration: '-', note: 'Stationäre Abklärung und Biopsie vor Antibiose erforderlich!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg i.v. q8-12h (AUC/MIC-Ziel 400-600)', duration: 'Bis Befunde vorliegen', note: 'MRSA und Gram-positive Abdeckung' },
            { drug: '+ Cefepim', dose: '2g i.v. q8h', duration: '', note: 'Gram-negative Abdeckung (inkl. Pseudomonas)' },
            { drug: 'oder Piperacillin/Tazobactam', dose: '4,5g i.v. q6h', duration: '', note: 'Breitspektrum (Gram-negativ + Anaerobier)' }
          ],
          icu: [
            { drug: 'Meropenem + Vancomycin', dose: 'Meropenem 1g i.v. q8h + Vancomycin 15-20mg/kg i.v.', duration: '', note: 'Bei septischem Schock oder schwerer Immunsuppression' }
          ]
        },
        targeted: 'Basiert auf Knochenbiopsie-Kulturen! MSSA: Cefazolin 3x2g i.v. oder Flucloxacillin 4x2g i.v.; MRSA: Vancomycin / Daptomycin / Linezolid; Pseudomonas: Ciprofloxacin 2x750mg p.o. / Cefepim. Bei Biofilm / Staphylokokken kann ergänzend Rifampicin (2x300-450mg p.o.) gegeben werden, jedoch AUSSCHLIESSLICH nach Debridement und in oraler Kombination!',
        supportive: [
          'Radikales chirurgisches Debridement (Entfernung aller Sequester/nekrotischen Knochen) - ESSENZIELL!',
          'Totraumauffüllung (Antibiotikazement/-beads, Calciumsulfat-Schwamm)',
          'Immobilisation und Belastungsreduktion der Extremität',
          'Gefäßrekonstruktion / Revaskularisation bei bestehender Ischämie'
        ],
        prevention: [
          'Sofortiges Debridement und prophylaktische Antibiose bei offenen Frakturen',
          'Frühzeitige und fachgerechte Versorgung diabetischer Fußulzera',
          'Strikte Einhaltung der chirurgischen Asepsis'
        ]
      },
      guidelines: {
        diagnosis: [
          'Bildgebung: MRT ist die sensitivste und spezifischste Modalität. Native Röntgenbilder können in den ersten 10–14 Tagen unauffällig sein.',
          'Mikrobiologie: Knochenbiopsie (perkutan CT-gestützt oder offen) mit Histologie und Kultur ist vor Antibiotikabeginn obligat (außer bei hemodynamischer Instabilität oder Sepsis).',
          'Fistelstrichabstriche nicht zur Diagnostik verwenden, da sie nur die Hautkolonisation widerspiegeln.'
        ],
        treatment_indications: [
          'Jede gesicherte Osteomyelitis muss behandelt werden: Radikales chirurgisches Debridement + gezielte Antibiotikatherapie.'
        ],
        first_line: [
          'Kalkuliert: Vancomycin + Cefepim / Piperacillin-Tazobactam.',
          'Gezielt: Basiert auf Biopsie. Die OVIVA-Studie (NEJM 2019) belegte, dass nach 1–2 Wochen i.v.-Therapie ein früher Wechsel auf oral gut bioverfügbare Antibiotika (z. B. Fluorchinolone, Clindamycin, Linezolid, Amoxicillin/Clavulansäure) einer 6-wöchigen i.v.-Therapie NICHT UNTERLEGEN ist, sofern ein erfolgreiches chirurgisches Debridement erfolgte!'
        ]
      },
      prognosis: {
        mortality: 'Niedrig (<1-2%), jedoch hohe Morbidität und Chronifizierungsrate (10-30%)',
        prognostic_scores: ['Cierny-Mader-Stadieneinteilung'],
        factors: 'Adäquates chirurgisches Debridement, Extremitätenvaskularisation, frühe gezielte orale/i.v. Therapie, irresektabler Sequester'
      }
    },
    {
      id: 'septic_arthritis',
      name: 'Septische Arthritis (Akute eitrige Gelenkentzündung)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (>50%, inkl. MRSA), <i>Streptococcus</i> spp. (Gruppen A, B, C, G, <i>S. pneumoniae</i>), <i>Neisseria gonorrhoeae</i> (junge, sexuell aktive Erwachsene), Gram-negative Darmbakterien (<i>E. coli</i>, <i>Pseudomonas aeruginosa</i> - Senioren, i.v.DU, Immunsuppression), <i>Kingella kingae</i> (Kleinkinder <4 Jahre)',
        gram: 'Gemischt (überwiegend Gram-positiv)',
        shape: 'Kokus/Stäbchen'
      },
      epidemiology: {
        incidence: '2-10/100.000 Einwohner/Jahr. Rheumatologischer/orthopädischer Notfall!',
        risk_groups: [
          'Senioren (>80 Jahre)',
          'Rheumatoide Arthritis und andere entzündliche Gelenkerkrankungen',
          'Gelenkendoprothese (PJI) oder vorausgegangene Gelenk-OP/Injektion',
          'Diabetes mellitus',
          'Immunsuppressive / Biologika-Therapie',
          'Intravenöse Drogenkonsumenten (Sternoklavikular-, Sakroiliakalgelenke!)',
          'Sexuell aktive Jugendliche (Gonokokken)'
        ],
        seasonality: 'Keine',
        transmission: 'Hämatogene Streuung (am häufigsten), direkte Inokulation (Punktion, OP, Arthrozentese), per continuitatem (aus Weichteilabszess/Osteomyelitis)'
      },
      pathomechanism: {
        steps: [
          'Invasion: Bakterien gelangen über die Blutbahn in die Synovialmembran (der eine Basalmembran fehlt) oder treten durch direkte Inokulation/Nachbarinfektion in den Gelenkspalt ein.',
          'Entzündungskaskade: Sich vermehrende Bakterien lösen eine heftige neutrophil-granulozytäre Invasion aus, die zu einem dichten, eitrigen Gelenkerguss führt.',
          'Irreversible Knorpelschädigung: Proteolytische Enzyme, lysosomale Enzyme und entzündliche Zytokine (TNF-a, IL-1) aus PMN-Granulozyten zerstören Chondrozyten und bauen die Proteoglykan-/Kollagenmatrix innerhalb von 24–48 Stunden ab!',
          'Druckischämie: Der erhöhte intraartikuläre Druck vermindert die Durchblutung der Synovialis, was zu Knochen- und Knorpelnekrose gefolgt von einer Ankylose führt.'
        ],
        virulence_factors: ['Adhäsine (collagen-binding protein)', 'Proteasen und Hyaluronidase', 'Staphylokokken-Exotoxine', 'Chondrozyten-Apoptose-induzierende Faktoren']
      },
      clinical: {
        incubation: '1-3 Tage (akut bakteriell) oder Stunden-Tage',
        onset: 'Hyperakut oder akut',
        symptoms: [
          {
            name: 'Akute Monoarthritis',
            description: 'Plötzlicher Beginn extremer, klopfender Schmerzen, Schwellung, Überwärmung und Rötung in einem einzelnen großen Gelenk (Knie ~50%, Hüfte ~20%, Schulter, Sprunggelenk, Handgelenk).',
            severity: 'severe'
          },
          {
            name: 'Ausgeprägte Funktionseinschränkung',
            description: 'Der Patient kann das Gelenk wegen erträglicher Schmerzen weder AKTIV noch PASSIV bewegen (Entlastungshaltung). Begleitet von hohem Fieber und Schüttelfrost.',
            severity: 'severe'
          },
          {
            name: 'Disseminierte Gonokokken-Infektion (DGI)',
            description: 'Wandernde Polyarthralgien/Arthritis, Tenosynovitis (am Hand-/Sprunggelenksrücken) und kleine, schmerzhafte vesikulopustulöse Hautläsionen an den Extremitäten.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Deutlich geschwollenes, warmes, rotes Gelenk mit fluktuierendem Erguss',
          'Extremer Schmerz selbst bei geringstem PASSIVEN Bewegungsversuch',
          'Muskelhartspann, Extremität in Entlastungs-Flexionsstellung fixiert',
          'Systemische Zeichen: Hohes Fieber, Tachykardie, Hypotonie (Sepsis)'
        ],
        complications: [
          'Irreversible Knorpelzerstörung und Früharthrose',
          'Fibröse oder knöcherne Ankylose (Gelenkversteifung)',
          'Benachbarte Osteomyelitis und Weichteilabszesse',
          'Septischer Schock und Tod'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Gelenkpunktat-Analyse (Arthrozentese)', finding: 'Trüb/eitrig; Leukozyten > 50.000 /µL (oft > 100.000 /µL, >90% PMN); Grampräparat 50-75% positiv', interpretation: 'NOTFALL-BASISUNTERSUCHUNG! Muss unverzüglich vor Antibiose durchgeführt werden!' },
          { test: 'Punktat-Laktat und -Glukose', finding: 'Laktat > 10 mmol/L, Glukose <50% des Serumwerts', interpretation: 'Sichert bakterielle Infektion' },
          { test: 'Polarisationsmikroskopie', finding: 'Negativ auf Kristallnachweis (MSU/CPPD)', interpretation: 'Ausschluss von Gicht und Pseudogicht (Infekt und Kristalle können jedoch koinzidieren!)' },
          { test: 'Blutbild, CRP, BSG', finding: 'Ausgeprägte Leukozytose mit Linksverschiebung, CRP > 100 mg/L', interpretation: 'Deutliche systemische Entzündung' },
          { test: 'Blutkultur (2 Paar)', finding: 'Positiv (in 30-50%)', interpretation: 'Obligate Abnahme' }
        ],
        imaging: [
          { modality: 'Ultraschall', finding: 'Gelenkerguss, Synovialisverdickung', significance: 'Erstwahl-Bildgebung, obligat zur Führung der Gelenkaspiration!' },
          { modality: 'Röntgen', finding: 'Initial nur Weichteilschwellung; Später Gelenkspaltverschmälerung, subchondrale Usuren', significance: 'Basisuntersuchung zum Ausschluss einer Fraktur oder Vorerkrankung' },
          { modality: 'MRT', finding: 'Gelenkflüssigkeit, Synovialis-Kontrastmittelanreicherung, Knochenmarködem, Weichteilabszess', significance: 'Bei Verdacht auf Hüftinfektion oder assoziierte Osteomyelitis/Abszess' }
        ],
        microbiology: [
          { test: 'Gelenkpunktatkultur (aerob + anaerob + Beimpfung in Blutkulturflaschen)', finding: 'Erregeridentifikation + Resistenz', significance: 'Basis der gezielten Therapie. Sensitivität 80-90%.' },
          { test: '16S-rRNA-PCR', finding: 'Bakterielle DNA', significance: 'Wenn der Patient bereits Antibiotika erhalten hat und die Kultur negativ ist' }
        ]
      },
      differential: [
        { disease: 'Gichtanfall (Gicht)', distinguishing: 'Leukozyten im Punktat können sehr hoch sein, Polarisationsmikroskopie zeigt nadelcharmige, negativ doppelbrechende MSU-Kristalle' },
        { disease: 'Pseudogicht (CPPD)', distinguishing: 'Rhombische, positiv doppelbrechende Calciumpyrophosphat-Kristalle sichtbar' },
        { disease: 'Reaktive Arthritis', distinguishing: 'Sterile Arthritis nach GI- (Salmonella, Shigella) oder GU-Infektion (Chlamydia); Gelenkpunktat steril' },
        { disease: 'Lyme-Arthritis', distinguishing: 'Großer Gelenkerguss meist mit weniger Schmerzen verbunden; Borrelia-Serologie / PCR positiv' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'KEINE AMBULANTE BEHANDLUNG!', dose: '-', duration: '-', note: 'SOFORTIGE NOTFALL-EINWEISUNG UND GELENKASPIRATION/DRAINAGE!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg i.v. q8-12h', duration: '2-4 Wochen', note: 'MRSA und Gram-positive Abdeckung' },
            { drug: '+ Ceftriaxon', dose: '1-2g i.v. q24h', duration: '', note: 'Gram-negative und Gonokokken-Abdeckung' },
            { drug: 'oder Cefepim / Pip-Tazo', dose: '2g i.v. q8h / 4,5g i.v. q6h', duration: '', note: 'Bei Pseudomonas-Risiko (i.v.DU, Senioren)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg i.v. + Meropenem 1g i.v. q8h', duration: '', note: 'Bei septischem Schock oder schwerer Immunsuppression' }
          ]
        },
        targeted: 'S. aureus (MSSA): Cefazolin 3x2g i.v. oder Flucloxacillin 4x2g i.v.; MRSA: Vancomycin / Daptomycin 6-8mg/kg i.v.; N. gonorrhoeae: Ceftriaxon 1x1-2g i.v. (dann p.o. Cefixim/Azithromycin); Gram-negative Stäbchen: Ceftriaxon / Cefepim / Ciprofloxacin.',
        supportive: [
          'GELENKDEKOMPRESSION UND DRAINAGE (KRITISCH!): Wiederholte tägliche Nadelaspirationen, ARTHROSKOPIE und Spülung oder offene Arthrotomie (obligat beim Hüftgelenk!)',
          'Adäquate Analgesie (NSAR, Opioide)',
          'Vorübergehende Schienung in der akuten Schmerzphase, gefolgt von FRÜHER PASSIVER/AKTIVER PHYSIOTHERAPIE zur Vermeidung von Versteifungen!'
        ],
        prevention: [
          'Strikte Einhaltung der Asepsis bei Injektionen / Arthroskopien',
          'Prävention von Gonorrhoe und Partnerbehandlung',
          'Frühzeitige Behandlung von Haut- und Weichteilinfektionen'
        ]
      },
      guidelines: {
        diagnosis: [
          'Arthrozentese: Sofortige Gelenkaspiration und Punktatanalyse (Zellzahl, Gram-Färbung, Kristalle, Kultur) ist vor Antibiotikabeginn obligat!',
          'Blutkulturen (2 Paar) müssen in allen Fällen abgenommen werden.',
          'Ultraschalluntersuchung wird empfohlen, um den Erguss zu sichern und die Aspiration zu leiten.'
        ],
        treatment_indications: [
          'Jede septische Arthritis erfordert UNVERZÜGLICHE Gelenkdekompression (Aspiration/Arthroskopie/OP) und kalkulierte parenterale Antibiotika zur Vermeidung von Knorpelschäden!'
        ],
        first_line: [
          'Kalkuliert: Vancomycin + Ceftriaxon.',
          'Drainage: Arthroskopie und Spülung oder wiederholte Nadelaspirationen.',
          'Dauer: In der Regel 2–4 Wochen. Bei klinisch stabilen, beschwerdefreien Patienten mit sich normalisierendem CRP kann nach 1–2 Wochen i.v. ein oraler Wechsel (OVIVA-Konzept) vollzogen werden.'
        ]
      },
      prognosis: {
        mortality: '10-15% (bis zu 20-30% bei polyartikulären Formen oder älteren, komorbiden Patienten)',
        prognostic_scores: ['Keine spezifischen'],
        factors: 'Verzögerung der Dekompression/Drainage (>24-48 Stunden) führt zu irreversibler Knorpelschädigung und dauerhafter Behinderung!'
      }
    },
    {
      id: 'spondylodiscitis',
      name: 'Spondylodiszitis (Vertebrale Osteomyelitis und Diszitis)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (30-50%, inkl. MRSA), <i>Staphylococcus epidermidis</i> (KNS - nach Wirbelsäulen-OP/Instrumentierung), <i>Streptococcus</i> spp., <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i> - aus urogenitalem Fokus), <i>Pseudomonas aeruginosa</i> (i.v.DU), <i>Mycobacterium tuberculosis</i> (Pott-Krankheit), <i>Brucella</i> spp.',
        gram: 'Gemischt (überwiegend Gram-positiv)',
        shape: 'Kokus/Stäbchen'
      },
      epidemiology: {
        incidence: '2-7/100.000 Einwohner/Jahr. Häufiger bei Männern über 50 Jahre.',
        risk_groups: [
          'Höheres Alter (>50-60 Jahre)',
          'Diabetes mellitus',
          'Intravenöse Drogenkonsumenten (i.v.DU)',
          'Chronische Nierenerkrankung / Hämodialyse',
          'Infektiöse Endokarditis (in bis zu 30% assoziiert!)',
          'Wirbelsäulen-OP, Epiduralkatheter, oberflächliche spinale Inokulation',
          'Urogenitalinfektion oder Beavatkozás (über Batson-Plexus)'
        ],
        seasonality: 'Keine',
        transmission: 'Hämatogene Streuung (hauptsächlich über Arteria spinalis oder Batson-Venenplexus), direkte Inokulation (OP, epidural), per continuitatem'
      },
      pathomechanism: {
        steps: [
          'Hämatogene Streuung: Bakterien erreichen das subchondrale, reich vaskularisierte Knochenmark des Wirbelkörpers über die Blutbahn.',
          'Ausbreitung auf die Bandscheibe: Die Infektion durchbricht die hyaline Knorpeldeckplatte in die avaskuläre Bandscheibe. Da die adulte Bandscheibe keine eigenen Gefäße besitzt, zerstört die Entzündung die gesamte Bandscheibe und greift dann auf den benachbarten Wirbel über (Spondylodiszitis).',
          'Abszessbildung & Kompression: Der Entzündungsprozess kann in die umgebenden Weichteile durchbrechen und einen Epiduralabszess, Paravertebralabszess oder Psoasabszess bilden.',
          'Neurologische Komplikation: Epiduralabszess oder Wirbelkörperkollaps verursachen Rückenmark- oder Cauda-equina-Kompression.'
        ],
        virulence_factors: ['Biofilmbildung', 'Adhäsine', 'Knorpelzerstörende Enzyme']
      },
      clinical: {
        incubation: 'Wochen bis Monate (schleichender Verlauf)',
        onset: 'Subakut oder chronisch (seltener akut fulminant)',
        symptoms: [
          {
            name: 'Lokalisierter Rücken- und Lendenschmerz',
            description: 'DAS WICHTIGSTE LEITSYMPTOM (>90%): Allmählich zunehmender, in Ruhe und nachts bestehender, dumpfer, tiefer Rücken- oder Lendenschmerz, der durch Hinlegen nicht gelindert wird.',
            severity: 'severe'
          },
          {
            name: 'Fieber (unsicher)',
            description: 'Fieber liegt nur in etwa 50% der Fälle vor! Sein Fehlen schließt eine Spondylodiszitis nicht aus!',
            severity: 'moderate'
          },
          {
            name: 'Neurologisches Defizit (Notfall!)',
            description: 'Radikuläre ausstrahlende Schmerzen, Paresen/Parästhesien der unteren Extremität, Sensibilitätsniveau, Stuhl- oder Urininkontinenz/Harnverhalt (Epiduralabszess / Rückenmarkkompression!).',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Ausgeprägte lokale Druck- und Klopfschmerzhaftigkeit über dem Dornfortsatz des betroffenen Wirbels',
          'Deutlicher paravertebraler Muskelhartspann und eingeschränkte Wirbelsäulenbeweglichkeit',
          'Neurologischer Status: Muskelkraftminderung, Reflexabweichungen, Lasègue-Zeichen, Beurteilung der Sphinkterfunktionen'
        ],
        complications: [
          'Epiduralabszess (spinale Kompression)',
          'Psoasabszess und paravertebrale Phlegmone',
          'Spinale Instabilität, Wirbelkollaps und kyphotische Fehlstellung',
          'Dauerhafte Paraplegie / Cauda-equina-Syndrom'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP und BSG', finding: 'Fast immer deutlich erhöht (CRP > 50-100 mg/L, BSG > 50 mm/h)', interpretation: 'Empfindlichste Laborzeichen und Basis für das Therapiemonitoring' },
          { test: 'Blutbild', finding: 'Normal oder leichte Leukozytose', interpretation: 'Die Leukozytenzahl ist bei subakuten Fällen häufig normal' },
          { test: 'Blutkultur (2-3 Paar)', finding: 'Positiv in 50-70%!', interpretation: 'OBLIGAT ABZUNEHMEN! Bei Positivität kann eine invasive Wirbelsäulenbiopsie überflüssig werden!' },
          { test: 'Echokardiographie (TTE/TEE)', finding: 'Klappenvegetation', interpretation: 'OBLIGAT bei jeder S. aureus-, Enterococcus- oder Streptococcus-Spondylodiszitis zum Ausschluss einer infektiösen Endokarditis!' }
        ],
        imaging: [
          { modality: 'MRT (kontrastmittelgestützt)', finding: 'Wirbelkörper- und Bandscheibenödem (T1 hypointens, T2/STIR hyperintens), Kontrastmittelanreicherung, Epidural-/Psoasabszess', significance: 'GOLDSTANDARD der Bildgebung (Sensitivität und Spezifität >90%)!' },
          { modality: 'CT', finding: 'Knochendestruktion, Sequestrierung, Gasbildung', significance: 'Für CT-gestützte Biopsie oder bei MRT-Kontraindikation' },
          { modality: '18F-FDG PET/CT', finding: 'Erhöhte fokale FDG-Anreicherung', significance: 'In frühen Stadien oder bei Metallimplantat-Artefakten' }
        ],
        microbiology: [
          { test: 'CT-gestützte perkutane Nadelbiopsie', finding: 'Kultur (aerob, anaerob, Pilze, TB) + Histopathologie', significance: 'OBLIGAT, wenn Blutkulturen negativ sind und keine Indikation zur Notfall-OP besteht!' }
        ]
      },
      differential: [
        { disease: 'Degenerative Wirbelsäulenerkrankung (Modic-I-Signal)', distinguishing: 'Kein Fieber, CRP/BSG normal, im MRT Bandscheibenhöhe gemindert, nimmt aber kein Kontrastmittel wie eine Infektion auf' },
        { disease: 'Spinale Metastase / Multiples Myelom', distinguishing: 'Tumor spart die Bandscheibe aus (nur Wirbelkörper betroffen!), während die Spondylodiszitis die Bandscheibe zerstört!' },
        { disease: 'Tuberkulöse Spondylodiszitis (Pott-Krankheit)', distinguishing: 'Langsamer, monatelanger Verlauf, mehrere Wirbel betroffen, Fieber fehlt, kalter Abszess bildet sich' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Keine ambulante Therapie', dose: '-', duration: '-', note: 'Notfallmäßige stationäre Aufnahme und MRT-Abklärung!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg i.v. q8-12h', duration: '6-8 Wochen', note: 'MRSA und Gram-positive Abdeckung' },
            { drug: '+ Cefepim', dose: '2g i.v. q8h', duration: '', note: 'Gram-negative Abdeckung (Pseudomonas)' },
            { drug: 'oder Ceftriaxon', dose: '2g i.v. q24h', duration: '', note: 'Wenn Pseudomonas-Risiko gering' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg i.v. + Meropenem 1g i.v. q8h', duration: '', note: 'Bei septischem Schock oder schwerem neurologischem Defizit' }
          ]
        },
        targeted: 'Basiert auf Biopsie oder Blutkultur! S. aureus (MSSA): Cefazolin 3x2g i.v. oder Flucloxacillin 4x2g i.v.; MRSA: Vancomycin / Daptomycin; Gram-negativ: Ceftriaxon / Cefepim / Ciprofloxacin.',
        supportive: [
          'KRITISCHE REGEL: Bei klinisch stabilem, neurologisch unauffälligem Patienten MUSS DAS ANTIBIOTIKUM BIS ZUR MIKROBIOLOGISCHEN PROBENNAHME (Blutkultur / CT-Biopsie) ZURÜCKGEHALTEN WERDEN!',
          'Chirurgische Dekompression (Laminektomie) und Debridement UNVERZÜGLICHE Indikation: 1. Bei neurologischem Defizit / Rückenmarkkompression; 2. Bei progressiver spinaler Instabilität; 3. Bei perkutan nicht drainierbarem großen Epidural-/Psoasabszess.',
          'Tragen einer starren Wirbelsäulenorthese (Korsett) zur Schmerzlinderung und Vermeidung von Instabilität'
        ],
        prevention: [
          'Frühzeitige Erkennung von infektiöser Endokarditis und Urogenitalinfektionen',
          'Strikte chirurgische Asepsis bei spinalen Eingriffen'
        ]
      },
      guidelines: {
        diagnosis: [
          'Klinischer Verdacht: Persistierender Rücken-/Lendenschmerz + erhöhtes CRP/BSG.',
          'Kontrastmittel-MRT ist der Goldstandard der Diagnostik.',
          'Blutkulturen (2-3 Paar) obligat abnehmen.',
          'CT-gestützte Biopsie durchführen, wenn Blutkulturen negativ sind und der Patient stabil ist.'
        ],
        treatment_indications: [
          'Sofortige chirurgische Dekompression indiziert, wenn ein neurologisches Defizit oder eine Rückenmarkkompression vorliegt!'
        ],
        first_line: [
          'Initiale parenterale Antibiose (2-3 Wochen), bei klinisch stabilem Patienten mit abgefallenem CRP dann orale Umstellung auf gut bioverfügbare Substanzen.',
          'Gesamtdauer der Behandlung: 6-8 Wochen (IDSA Native Vertebral Osteomyelitis Guidelines).'
        ]
      },
      prognosis: {
        mortality: '2-10% (höher bei älteren, komorbiden Patienten)',
        prognostic_scores: ['Keine spezifischen'],
        factors: 'Späte Diagnose, Vorliegen eines initialen neurologischen Defizits, unbehandelte infektiöse Endokarditis'
      }
    },
    {
      id: 'prosthetic_joint_infection',
      name: 'Periprothetische Infektion (PJI / Periprosthetic Joint Infection)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus epidermidis</i> und andere KNS (30-40%), <i>Staphylococcus aureus</i> (20-30%, inkl. MRSA), <i>Cutibacterium acnes</i> (besonders bei Schulterprothesen), <i>Streptococcus</i> spp., <i>Enterococcus</i> spp., <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i>), <i>Pseudomonas aeruginosa</i>, Polymikrobiell (10-15%)',
        gram: 'Gemischt (überwiegend Gram-positive KNS und Staph)',
        shape: 'Kokus/Stäbchen'
      },
      epidemiology: {
        incidence: 'Tritt bei 1-2% der Knie- und Hüftendoprothesen-Implantationen auf. Eine der schwersten Komplikationen der orthopädischen Chirurgie!',
        risk_groups: [
          'Vorausgegangene Gelenk-OP oder PJI in der Anamnese',
          'Diabetes mellitus und Adipositas (BMI > 35)',
          'Rheumatoide Arthritis und Steroid-/Biologika-Therapie',
          'Wundheilungsstörung, Hämatom, verlängerter Wundsekretfluss (>72 Stunden)',
          'Rauchen'
        ],
        seasonality: 'Keine',
        transmission: 'Chirurgische Inokulation (am häufigsten intraoperativ), aus früher postoperativer Wunddehiszenz oder späte hämatogene Streuung aus distantem Fokus (z. B. dental, urogenital, Haut)'
      },
      pathomechanism: {
        steps: [
          'Adhäsion: Bakterien haften während der OP oder hämatogen an der Metall-, Keramik- oder Polyethylen-Oberfläche (Implantat).',
          'Biofilmbildung: Bakterien scheiden innerhalb von Minuten/Stunden eine extrazelluläre polymere Matrix (Biofilm) aus. Bakterien im Biofilm verändern sich phänotypisch zu langsam teilenden "Persister"-Zellen.',
          'Resistenz: Der Biofilm schützt vor Neutrophilen, Antikörpern und Standard-Antibiotikakonzentrationen des Wirts (bis zu 1000-fach höhere Antibiotikakonzentrationen wären zur Erradikation erforderlich!).',
          'Aseptische vs. Septische Lockerung: Chronische Entzündungen um den Biofilm führen zu Osteolyse, Zerstörung der Knochen-Implantat-Grenzfläche und Lockerung der Prothese.'
        ],
        virulence_factors: ['Biofilm-Exopolysaccharid-Matrix', 'MSCRAMM-Adhäsine', 'Persister-Cell-Phänotyp', 'Intrazelluläres Überleben']
      },
      clinical: {
        incubation: 'Postoperative Tage (früh) bis Jahre (chronisch)',
        onset: 'Akut (früh / hämatogen) oder indolent, chronisch progressiv',
        symptoms: [
          {
            name: 'Frühe PJI (<4 Wochen nach OP)',
            description: 'Akuter Gelenkschmerz, Erythem, Schwellung, Überwärmung, Wunddehiszenz, persistierende eitrige Wundsekretion, Fieber.',
            severity: 'severe'
          },
          {
            name: 'Späte chronische PJI (>3-4 Wochen/Monate nach OP)',
            description: 'Dumpfer, bei Belastung und in Ruhe bestehender Gelenkschmerz, frühe Prothesenlockerung, Funktionsverlust; Fieber fehlt meist.',
            severity: 'moderate'
          },
          {
            name: 'Sinus Tract (Fistel)',
            description: 'Vorhandensein einer sekretierenden Fistel von der Hautoberfläche direkt zum Implantat/Gelenkspalt - für sich genommen PATHOGNOMONISCH für PJI!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Erythem, Schwellung, vermehrte Überwärmung im Bereich der Operationsnarbe',
          'Wundsekretion oder offener, eiternder Fistelgang (Sinus tract)',
          'Einschränkung des Gelenkbewegungsumfangs, Belastungsschmerz',
          'Protheseninstabilität, Zeichen der Lockerung'
        ],
        complications: [
          'Prothesenlockerung und schwerer Knochenverlust (Osteolyse)',
          'Mehrfache Revisions-OPs, Extremitätenverkürzung',
          'Girdlestone-Zustand (Resektionsarthroplastik der Hüfte)',
          'Notwendigkeit einer Amputation'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP und BSG', finding: 'CRP > 10 mg/L (chronisch), > 100 mg/L (akut); BSG > 30 mm/h', interpretation: 'Basis-Screeningtest. Wenn beide negativ sind, ist PJI unwahrscheinlich.' },
          { test: 'Gelenkpunktion (Arthrozentese)', finding: 'Akute PJI: Leukozyten > 10.000 /µL (>90% PMN); Chronische PJI: Leukozyten > 2.000-3.000 /µL (>70% PMN)', interpretation: 'Schlüsseldiagnostik nach EBJIS 2021-Definition!' },
          { test: 'Alpha-Defensin / Leukozytenesterase-Teststreifen', finding: 'Positiv', interpretation: 'Gelenk-Biomarker mit hoher Spezifität' }
        ],
        imaging: [
          { modality: 'Röntgen', finding: 'Periprothetische Osteolyse, radioluzente Saumbildung (>2 mm), frühe Lockerung, Periostreaktion', significance: 'Basisbildgebung zum Nachweis einer Lockerung' },
          { modality: 'Ultraschall', finding: 'Gelenkerguss, subperiostaler Abszess', significance: 'Zur Führung der Arthrozentese' }
        ],
        microbiology: [
          { test: 'Intraoperative Gewebeproben (periprothetisches Gewebe)', finding: 'Erregeridentifikation', significance: 'Mindestens 3–5 SEPARATE Proben mit jeweils neuem Skalpell für die Mikrobiologie entnehmen!' },
          { test: 'SONIKATION der entfernten Prothese', finding: 'Kultur der aus dem Biofilm gelösten Bakterien (>50 CFU/ml)', significance: 'Herausragende mikrobiologische Sensitivität!' },
          { test: 'Histopathologie (Krenn-Synovialis-Klassifikation)', finding: '>5 neutrophile Granulozyten / HPF (High-Power Field)', significance: 'Sofortige intraoperative Gefrierschnitt-Diagnose' }
        ]
      },
      differential: [
        { disease: 'Aseptische Prothesenlockerung', distinguishing: 'CRP/BSG normal, Gelenk-Leukozyten < 1.500/µL, Kultur und Histologie negativ' },
        { disease: 'Arthrofibrose', distinguishing: 'Gelenksteife ohne Infektzeichen und ohne erhöhte Entzündungsmarker' },
        { disease: 'Kristallarthropathie bei Prothese', distinguishing: 'Polarisationsmikroskopie zeigt Kristalle' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Keine ambulante Therapie', dose: '-', duration: '-', note: 'Abklärung in einem orthopädischen / infektiologischen Zentrum erforderlich!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg i.v. q8-12h', duration: 'Nach OP-Probenentnahme', note: 'MRSA und KNS Abdeckung' },
            { drug: '+ Cefepim / Meropenem', dose: '2g i.v. q8h / 1g i.v. q8h', duration: '', note: 'Gegen Gram-negative Stäbchen' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'i.v.', duration: '', note: 'Bei septischem Schock' }
          ]
        },
        targeted: 'Basiert auf Kultur! Bei Staphylokokken-PJI ist die Gabe von Biofilm-aktivem RIFAMPICIN (2x300-450 mg p.o.) in oraler Kombination (z. B. mit Fluorchinolon, Cotrimoxazol oder Clindamycin) nach chirurgischem Debridement OBLIGAT! Behandlungsdauer: 12 Wochen (Hüfte und Knie).',
        supportive: [
          'CHIRURGISCHE STRATEGIEN (EBJIS 2021 Konsensus):',
          '1. DAIR (Debridement, Antibiotics, and Implant Retention): Nur bei FRÜHER (<3-4 Wochen) oder AKUTER HÄMATOGENER Infektion bei stabiler Prothese! Wechsel mobiler Teile (Inlay/Liner) obligat!',
          '2. Einzeitiger Wechsel (One-stage revision): Bei bekanntem, sensiblem Erreger und guten Weichteilverhältnissen Prothesenwechsel in einer OP mit Antibiotikazement.',
          '3. Zweizeitiger Wechsel (Two-stage revision): GOLDSTANDARD bei chronischen, schwer behandelbaren/resistenten Erregern. 1. OP: Prothesenausbau + Antibiotikazement-Spacer; 6 Wochen gezielte Antibiose; 2. OP: Einbau der neuen Prothese.',
          '4. Suppressive Antibiotikatherapie: Bei inoperablen Patienten lebenslange orale Antibiose.'
        ],
        prevention: [
          'Präoperatives MRSA/MSSA-Nasenscreening und Dekolonisierung (Mupirocin)',
          'Rechtzeitige perioperative Antibiotikaprophylaxe (Cefazolin / Vancomycin)',
          'Strikte OP-Hygiene mit Laminar-Air-Flow'
        ]
      },
      guidelines: {
        diagnosis: [
          'EBJIS 2021 Konsensus-Definition:',
          'Gesicherte PJI: Vorhandensein eines Sinus tract (Fistel), ODER eitriges Punktat, ODER identischer Erreger in ≥2 separaten OP-Proben/Sonikation, ODER Histologie >5 PMN/HPF.',
          'Punktion vor OP obligat (Leukozyten, Zelldifferenzierung, Kultur).'
        ],
        treatment_indications: [
          'Jede PJI erfordert eine abgestimmte chirurgische (DAIR, ein- oder zweizeitiger Wechsel) und Biofilm-aktive gezielte Antibiotikatherapie.'
        ],
        first_line: [
          'Bei Staphylokokken-PJI ist eine Rifampicin-basierte Kombinationstherapie obligat!',
          'Gesamtdauer der Antibiose: 12 Wochen.'
        ]
      },
      prognosis: {
        mortality: '1-3% innerhalb von 1 Jahr, bei älteren Patienten jedoch bis zu 10-15%',
        prognostic_scores: ['EBJIS / MSIS PJI Kriterien'],
        factors: 'Anwendung Biofilm-aktiver Therapie (Rifampicin), Wahl der adäquaten chirurgischen Strategie, Erregerresistenz'
      }
    },
    {
      id: 'septic_bursitis',
      name: 'Septische Bursitis (Infektiöse Schleimbeutelentzündung)',
      pathogen: {
        type: 'Bakterium',
        name: '<i>Staphylococcus aureus</i> (>80%, inkl. MRSA), <i>Streptococcus pyogenes</i> (GAS) und andere <i>Streptococcus</i> spp., Koagulase-negative Staphylokokken',
        gram: 'Gram-positiv',
        shape: 'Kokus'
      },
      epidemiology: {
        incidence: 'Häufiges Krankheitsbild in der stationären und ambulanten Orthopädie/Infektiologie.',
        risk_groups: [
          'Körperlich Arbeitende (kniende/aufgestützte Arbeit: Installateure, Fliesenleger)',
          'Sportler (Schürfwunden, Kontaktsportarten)',
          'Diabetes mellitus',
          'Gicht / Rheumatoide Arthritis',
          'Alkoholismus / Chronische Nierenerkrankung',
          'Immunsupprimierte Patienten'
        ],
        seasonality: 'Keine',
        transmission: 'Direkte Inokulation durch Mikrotrauma, Hautschürfung, Stichverletzung oder Ausbreitung per continuitatem aus überliegender Phlegmone/Cellulitis'
      },
      pathomechanism: {
        steps: [
          'Lokalisation: Oberflächlich gelegene Bursen (am häufigsten Bursa olecrani am Ellbogen ~50% und Bursa praepatellaris am Knie ~45%) sind Mikrotraumata und Reibung ausgesetzt.',
          'Invasion: Über die Hautmikroflora oder Schürfwunden gelangen Staphylokokken in den geschlossenen Schleimbeutelraum.',
          'Exsudation & Eiteransammlung: Die Synovialis-ähnliche Auskleidung der Bursa reagiert mit heftiger Entzündung, eitriges Exsudat sammelt sich im Schleimbeutel.',
          'Weichteilausbreitung: Unbehandelt kann die Bursa perforieren und eine ausgedehnte Phlegmone, Weichteilabszesse oder selten eine Osteomyelitis/septische Arthritis verursachen.'
        ],
        virulence_factors: ['Koagulase', 'Alpha-Toxin', 'PVL-Toxin', 'Adhäsine']
      },
      clinical: {
        incubation: '1-5 Tage (nach Mikrotrauma)',
        onset: 'Akut',
        symptoms: [
          {
            name: 'Fluktuierende Schleimbeutelschwellung',
            description: 'Ausgeprägte, umschriebene, fluktuierende, rote, warme und schmerzhafte Schwellung über dem Ellbogen (Olecranon) oder der Kniescheibe (Praepatellar).',
            severity: 'severe'
          },
          {
            name: 'Gelenkbewegung ERHALTEN!',
            description: 'Der PASSIVE BEWEGUNGUMFANG des benachbarten Gelenks ist ERHALTEN UND SCHMERZFREI (Haut kann bei Flexion spannen), was den GRUNDLEGENDEN Unterschied zur septischen Arthritis darstellt!',
            severity: 'moderate'
          },
          {
            name: 'Fieber und Cellulitis',
            description: 'Fieber ist in ~40-50% der Fälle vorhanden. Die Haut über der Bursa ist häufig erythematös, warm und hyperämisch.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Umschriebene, warme, rote, druckschmerzhafte fluktuierende Raumforderung über der Bursa',
          'Hautverletzung, Schürfwunde oder Schorf an der Kuppe der Bursa',
          'PASSIVE BEWEGUNG DES GELENKS IST NICHT SCHMERZHAFT (im Gegensatz zur septischen Arthritis!)',
          'Regionale Lymphangitis und Lymphadenopathie'
        ],
        complications: [
          'Spontane Bursaperforation und chronisch eiternder Fistelgang',
          'Ausgedehnte Weichteilphlegmone / Cellulitis',
          'Oberflächliche Knochenerosion / Osteomyelitis (Olecranon / Patellaspitze)',
          'Rezidivierende septische Bursitis'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Bursapunktion und Aspiratanalyse', finding: 'Eitrig/trüb; Leukozyten > 20.000-50.000 /µL (>80% PMN); Grampräparat 60-70% positiv', interpretation: 'NOTFALL-DIAGNOSTISCHER UND -THERAPEUTISCHER EINGRIFF!' },
          { test: 'Polarisationsmikroskopie', finding: 'Vorhandensein/Fehlen von Kristallnachweis', interpretation: 'Zum Ausschluss/Nachweis einer Gichtbursitis' },
          { test: 'Blutbild, CRP', finding: 'Leukozytose, erhöhtes CRP', interpretation: 'Zur Beurteilung der systemischen Entzündungsreaktion' }
        ],
        imaging: [
          { modality: 'Ultraschall', finding: 'Flüssigkeitsgefüllte, wandverdickte Bursa, hyperechogener Inhalt, überliegende Weichteil-Hyperechogenität', significance: 'Basisbildgebung zur Führung der Bursa-Aspiration und zum Ausschluss tiefer Gelenkbeteiligung!' },
          { modality: 'Röntgen', finding: 'Weichteilschwellung; Verkalkungen früherer Bursitiden; Fehlen von Knochenerosionen', significance: 'Ausschluss einer Olecranon-/Patellafraktur oder Osteomyelitis' }
        ],
        microbiology: [
          { test: 'Bursa-Aspiratkultur (aerob + anaerob)', finding: 'S. aureus oder Streptococcus Identifikation', significance: 'Basis der gezielten Antibiotikatherapie' }
        ]
      },
      differential: [
        { disease: 'Aseptische / Traumatische Bursitis', distinguishing: 'Kein Fieber, Rötung und Überwärmung minimal, Bursa-Aspirat strohgelb/hämorrhagisch, Leukozyten < 2.000/µL, Grampräparat und Kultur negativ' },
        { disease: 'Gichtbursitis (Gout)', distinguishing: 'Deutliche Entzündung möglich, im Aspirat sind jedoch MSU-Kristalle sichtbar' },
        { disease: 'Septische Arthritis', distinguishing: 'Bei septischer Arthritis ist wegen erträglicher Schmerzen auch die PASSIVE Bewegung des Gelenks unmöglich, während bei Bursitis die passive Gelenkbewegung erhalten ist!' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefalexin', dose: '500 mg - 1g p.o. q6h', duration: '7-14 Tage', note: 'Milder, systemisch beschwerdefreier Fall nach Bursapunktion' },
            { drug: 'oder Amoxicillin/Clavulansäure', dose: '875/125 mg p.o. q12h', duration: '7-14 Tage', note: 'Breiteres Spektrum' },
            { drug: 'oder Clindamycin', dose: '300-450 mg p.o. q8h', duration: '7-14 Tage', note: 'Bei Penicillinallergie oder MRSA-Verdacht' }
          ],
          inpatient: [
            { drug: 'Cefazolin', dose: '1-2g i.v. q8h', duration: '7-14 Tage', note: 'Bei systemischen Symptomen oder fortschreitender Cellulitis' },
            { drug: 'oder Vancomycin', dose: '15-20 mg/kg i.v. q8-12h', duration: '7-14 Tage', note: 'Schwerer Fall oder bei MRSA-Risiko' }
          ],
          icu: [
            { drug: 'Vancomycin + Piperacillin/Tazobactam', dose: 'i.v.', duration: '', note: 'Bei septischem Schock oder komplizierter Phlegmone' }
          ]
        },
        targeted: 'Basiert auf Kultur! MSSA: Cefalexin p.o. / Cefazolin i.v. / Flucloxacillin; MRSA: Trimethoprim/Sulfamethoxazol p.o. / Doxycyclin p.o. / Vancomycin i.v.; GAS: Penicillin V / Amoxicillin.',
        supportive: [
          'BURSA-ASPIRATION UND ENTLEERUNG: Nadelaspiration (wiederholt täglich bis zum Aufhören der Flüssigkeitsnachbildung)',
          'Bursektomie (chirurgische Schleimbeutelentfernung): Indiziert bei refraktärer, persistierender Infektion, Abszessbildung oder Versagen der oralen/i.v. Antibiose!',
          'Hochlagerung (Elevation) und Ruhigstellung der Extremität'
        ],
        prevention: [
          'Verwendung von Ellbogen- und Knieschonern bei körperlicher Arbeit und Sport',
          'Sofortige Desinfektion oberflächlicher Hautverletzungen und Schürfwunden'
        ]
      },
      guidelines: {
        diagnosis: [
          'Bursa-Aspiration (Bursapunktion) ist obligat zur Differenzierung zwischen infektiöser und aseptischer/Gicht-Ursache!',
          'Klinisches Schlüsselsignal: Die PASSIVE Gelenkbewegung ist erhalten (Abgrenzung zur septischen Arthritis).'
        ],
        treatment_indications: [
          'Jede septische Bursitis erfordert eine perkutane Bursa-Aspiration und eine systemische (orale oder i.v.) antistaphylokokkale Antibiose.'
        ],
        first_line: [
          'Milder Fall: Bursa-Aspiration + orales Cefalexin / Amoxicillin-Clavulansäure / Clindamycin für 7–14 Tage.',
          'Schwerer / fieberhafter Fall: i.v. Cefazolin oder Vancomycin. Bei Versagen chirurgische Bursektomie.'
        ]
      },
      prognosis: {
        mortality: 'Exzellent (<1%), jedoch kann die Heilungsdauer verlängert sein',
        prognostic_scores: ['Keine spezifischen'],
        factors: 'Adäquate Bursa-Entleerung, frühzeitiger Antibiotikabeginn, Komorbiditäten (Diabetes)'
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  if (!(window as any).diseases) {
    (window as any).diseases = {};
  }
  (window as any).diseases.bone_joint = boneJointDe;
}
