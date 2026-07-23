import { Category } from '../types';

export const viralHepatitisDe: Category = {
  name: 'Virale Hepatitiden',
  icon: '🧬',
  color: '#eab308',
  tables: [
    {
      title: 'Differenzialdiagnose der viralen Hepatitis',
      headers: ['Virus', 'Übertragung', 'Inkubation', 'Chronifizierung', 'Schlüsselsubserologie', 'Hauptmerkmale'],
      rows: [
        ['HAV', 'Fäkal-oral', '2-6 Wochen', 'Nein', 'Anti-HAV-IgM', 'Akut, epidemisch, reiseassoziiert'],
        ['HBV', 'Parenteral, sexuell', '2-6 Monate', 'Ja (besonders perinatal)', 'HBsAg, Anti-HBc-IgM', 'Chronische Lebererkrankung, HCC-Risiko'],
        ['HCV', 'Parenteral', '2-26 Wochen', 'Ja (>70%)', 'Anti-HCV, HCV-RNA', 'Chronisch, heilbar (DAA), extrahepatische Manifestationen'],
        ['HDV', 'Parenteral (mit HBV)', 'Variabel', 'Ja (Superinfektion)', 'Anti-HDV (bei HBsAg+ Patienten)', 'Verschlimmert HBV, rasche Zirrhoseprogression'],
        ['HEV', 'Fäkal-oral (G1,2), Zoonotisch (G3,4)', '2-10 Wochen', 'Ja (immunsuppr.)', 'Anti-HEV-IgM, HEV-RNA', 'Fulminant bei Schwangeren, Schweinefleisch-assoziiert']
      ]
    },
    {
      title: 'Interpretation der Hepatitis-B-Serologie',
      headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Gesamt)', 'Anti-HBc-IgM', 'Interpretation'],
      rows: [
        ['-', '-', '-', '-', 'Empfänglich (nicht infiziert, kein Schutz)'],
        ['-', '+', '-', '-', 'Geschützt (durch Impfung)'],
        ['-', '+', '+', '-', 'Ausgeheilte Infektion (natürliche Immunität)'],
        ['+', '-', '+', '+', 'Akute Infektion'],
        ['+', '-', '+', '-', 'Chronische Infektion'],
        ['-', '-', '+', '-', 'Möglich: 1. Ausgeheilt (niedriges Anti-HBs); 2. Falsch positiv; 3. Okkultes HBV; 4. Diagnostisches Fenster']
      ]
    }
  ],
  diseases: [
    {
      id: 'hav',
      name: 'Hepatitis A',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-A-Virus</i> (HAV)', gram: 'ssRNA, Picornaviridae', shape: 'ikosaedrisch' },
      epidemiology: {
        incidence: 'Hoch in endemischen Gebieten, sporadisch/epidemisch in Industrieländern',
        risk_groups: ['Reisende', 'MSM', 'i.v. Drogenkonsumenten', 'Obdachlose'],
        seasonality: 'Keine',
        transmission: 'Fäkal-oral (kontaminiertes Wasser/Lebensmittel), sexuell (oral-anal)'
      },
      pathomechanism: {
        steps: [
          'Oraler Eintritt: Das Virus wird aus dem Darmtrakt resorbiert und gelangt über den Pfortaderkreislauf in die Leber.',
          'Hepatozyteninfektion: Das Virus dringt über den HAVCR-1-Rezeptor in die Leberzellen ein und repliziert sich im Zytoplasma, ohne direkten Zelltod zu verursachen (nicht-zytopathisch).',
          'Immunantwort: Die Schädigung der Leber wird durch die zelluläre Immunantwort des Wirts (CD8+-zytotoxische T-Zellen und NK-Zellen) verursacht, die infizierte Leberzellen zerstören.',
          'Ausscheidung: Das Virus wird mit der Galle in den Stuhl ausgeschieden, bevor Symptome auftreten.'
        ],
        virulence_factors: ['Kapsidstabilität (säurestabil)', 'Hülle im Blut (eHAV) - Immunevasion']
      },
      clinical: {
        incubation: '15-50 Tage (Schnitt 28 Tage)',
        onset: 'Plötzlich',
        symptoms: [
          { name: 'Prodromalstadium', description: 'Grippeähnliche Symptome (Fieber, Kopfschmerzen, Myalgien), Appetitlosigkeit, Abneigung gegen Tabakrauch/fettige Speisen.', severity: 'moderate' },
          { name: 'Ikterische Phase', description: 'Dunkler Urin (Bilirubinurie), entfärbter Stuhl, dann Gelbsucht (Haut, Skleren). Fieber klingt meist in dieser Phase ab.', severity: 'moderate' },
          { name: 'Abdominelle Beschwerden', description: 'Dumpfer Schmerz im rechten Oberbauch, Hepatomegalie, Übelkeit.', severity: 'mild' }
        ],
        physical_exam: [
          'Ikterus (Skleren, Haut)',
          'Hepatomegalie, druckdolente Leber',
          'Splenomegalie (selten)',
          'Exanthem (selten)'
        ],
        complications: ['Fulminante Hepatitis (<1%, häufiger im Alter)', 'Cholestatische Hepatitis (prolongiert)', 'Rezidiv (3-20%)', 'KEIN chronischer Verlauf']
      },
      diagnostics: {
        laboratory: [
          { test: 'Leberenzyme', finding: 'ALT/AST >1000 U/L', interpretation: 'Akute hepatozelluläre Nekrose' },
          { test: 'Bilirubin', finding: 'Erhöht (direkt und indirekt)', interpretation: 'Ikterus' },
          { test: 'AP/GGT', finding: 'Mäßig erhöht', interpretation: 'Bei cholestatischer Verlaufsform höher' }
        ],
        imaging: [
          { modality: 'Abdomen-Sonographie', finding: 'Hepatomegalie, Gallenblasenwandverdickung', significance: 'Unspezifisch' }
        ],
        microbiology: [
          { test: 'Anti-HAV-IgM', finding: 'Positiv', significance: 'Diagnose der akuten Infektion (bleibt 3-6 Monate +)' },
          { test: 'Anti-HAV-IgG', finding: 'Positiv', significance: 'Immunität (Impfung oder durchgemachte Infektion)' },
          { test: 'HAV-RNA (PCR)', finding: 'Positiv', significance: 'Virämie (selten erforderlich)' }
        ]
      },
      differential: [
        { disease: 'Andere Virushepatitiden (HBV, HCV, HEV)', distinguishing: 'Serologie (HBsAg, Anti-HCV, Anti-HEV)' },
        { disease: 'Toxische/Medikamenten-induzierte Hepatitis', distinguishing: 'Anamnese (Paracetamol, Knollenblätterpilz), Toxikologie' },
        { disease: 'Gallengangsobstruktion (Choledocholithiasis)', distinguishing: 'Abdomen-Sonographie (dilatierte Gallenwege), AP/GGT-Dominanz, Kolik' },
        { disease: 'EBV/CMV-Mononukleose', distinguishing: 'Halsschmerzen, Lymphadenopathie, Serologie' },
        { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA), IgG-Erhöhung' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportiv', dose: '-', duration: '-', note: 'Schonung, ausreichende Kalorienzufuhr, Alkoholkarenz' }
          ],
          inpatient: [
            { drug: 'Supportiv', dose: '-', duration: '-', note: 'Bei schwerem Erbrechen, Dehydration oder Koagulopathie' }
          ],
          icu: [
            { drug: 'Lebertransplantation', dose: 'Listung', duration: '', note: 'Bei fulminantem Leberversagen' }
          ]
        },
        targeted: 'Keine spezifische antivirale Therapie verfügbar.',
        supportive: ['Flüssigkeitsersatz', 'Antiemetika', 'Meidung von Alkohol und hepatotoxischen Medikamenten'],
        prevention: ['Impfung (inaktiviert, 2 Dosen)', 'Hygiene (Händewaschen)', 'Postexpositionsprophylaxe (Impfung oder Immunglobulin innerhalb von 2 Wochen)']
      },
      prognosis: {
        mortality: 'Niedrig (<0,1%), über 50-Jährige 1,8%',
        factors: 'Alter, vorbestehende Lebererkrankung'
      }
    },
    {
      id: 'hbv',
      name: 'Hepatitis B',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-B-Virus</i> (HBV)', gram: 'dsDNA (RT), Hepadnaviridae', shape: 'sphärisch (Dane-Partikel)' },
      epidemiology: {
        incidence: '290 Millionen chronische Träger weltweit',
        risk_groups: ['i.v. Drogenkonsumenten', 'Sexualpartner', 'Medizinisches Personal', 'Dialysepatienten', 'Perinatale Übertragung (Mutter-Kind)'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Blut), sexuell, perinatal'
      },
      pathomechanism: {
        steps: [
          'Eintritt und Replikation: Das Virus dringt über den NTCP-Rezeptor in die Hepatozyten ein. Im Zellkern bildet es cccDNA (covalent closed circular DNA), die Grundlage der Persistenz.',
          'Immunpathogenese: Das Virus selbst ist nicht zytopathisch. Die Leberschädigung wird durch die zytotoxische T-Zell-Immunantwort gegen infizierte Leberzellen verursacht.',
          'Chronifizierung: Wenn die Immunantwort unzureichend ist (z. B. bei Neugeborenen), persistiert das Virus. Die virale DNA kann sich in das Wirtsgenom integrieren, was das HCC-Risiko erhöht.'
        ],
        virulence_factors: ['HBsAg (Decoy)', 'HBeAg (Immuntoleranz)', 'X-Protein (Transaktivator)']
      },
      clinical: {
        incubation: '45-160 Tage (Schnitt 90 Tage)',
        onset: 'Schleichend',
        symptoms: [
          { name: 'Akute Phase', description: 'Oft asymptomatisch. Wenn symptomatisch: Serumkrankheit-ähnliches Prodromalstadium (Ausschlag, Arthralgie), gefolgt von Ikterus, Müdigkeit, rechtsseitigem Oberbauchschmerz.', severity: 'moderate' },
          { name: 'Chronische Phase', description: 'Meist asymptomatisch ("stiller Killer"). Im Spätstadium dominieren die Zeichen der Leberzirrhose (Aszites, Varizenblutung, Enzephalopathie).', severity: 'mild' },
          { name: 'Extrahepatische Symptome', description: 'Polyarteriitis nodosa, Glomerulonephritis.', severity: 'moderate' }
        ],
        physical_exam: [
          'Hepatomegalie',
          'Splenomegalia',
          'Spider-Naevi, Palmarerythem (chronisch/Zirrhose)',
          'Aszites, Caput medusae (dekompensierte Zirrhose)'
        ],
        complications: ['Chronische Hepatitis (90% bei Säuglingen, <5% bei Erwachsenen)', 'Zirrhose', 'Hepatozelluläres Karzinom (HCC)', 'Polyarteriitis nodosa', 'Glomerulonephritis']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT/AST', finding: 'Erhöht', interpretation: 'Aktivität der Entzündung' }
        ],
        microbiology: [
          { test: 'HBsAg', finding: 'Positiv', significance: 'Nachweis der Infektion (akut oder chronisch)' },
          { test: 'Anti-HBs', finding: 'Positiv', significance: 'Immunität (Impfung oder ausgeheilt)' },
          { test: 'Anti-HBc-IgM', finding: 'Positiv', significance: 'Akute Infektion (wichtig im diagnostischen Fenster!)' },
          { test: 'Anti-HBc (Gesamt)', finding: 'Positiv', significance: 'Durchgemachte oder chronische Infektion' },
          { test: 'HBeAg', finding: 'Positiv', significance: 'Hohe Replikation und Infektiosität' },
          { test: 'HBV-DNA', finding: 'Positiv', significance: 'Nachweis der Virusreplikation (Therapiemonitoring)' }
        ]
      },
      differential: [
        { disease: 'Andere Virushepatitiden (HAV, HCV, HDV)', distinguishing: 'Serologie (Anti-HAV-IgM, Anti-HCV, Anti-HDV)' },
        { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA, LKM-1), Hypergammaglobulinämie' },
        { disease: 'Alkoholische Lebererkrankung', distinguishing: 'Anamnese, AST > ALT (Quotient >2), erhöhtes GGT' },
        { disease: 'Medikamentös-toxischer Leberschaden (DILI)', distinguishing: 'Medikamentenanamnese, Besserung nach Absetzen' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Entecavir', dose: '0,5 mg p.o. täglich', duration: 'Langzeit', note: 'Nukleosidanalogon. Bei Lamivudin-Resistenz 1 mg.' },
            { drug: 'Tenofovirdisoproxil (TDF)', dose: '300 mg p.o. täglich', duration: 'Langzeit', note: 'Nukleotidanalogon. Nierenfunktion und Knochendichte überwachen.' },
            { drug: 'Tenofoviralafenamid (TAF)', dose: '25 mg p.o. täglich', duration: 'Langzeit', note: 'Bevorzugt bei Risiko für Knochen- oder Nierenerkrankungen.' }
          ],
          inpatient: [
            { drug: 'Tenofovir (TDF/TAF) oder Entecavir', dose: 'Standard', duration: '', note: 'Bei schwerer akuter Hepatitis oder akutem Leberversagen sofort beginnen.' }
          ]
        },
        targeted: 'Chronische HBV: Lebenslang Nukleosid-/Nukleotidanaloga (Entecavir, TDF, TAF) zur Replikationssuppression. Zeitlich begrenzt: Peg-IFN-alfa (48 Wochen) bei ausgewählten Patienten.',
        supportive: ['HCC-Screening (Sonographie alle 6 Monate)', 'Impfung gegen HAV', 'Screening von Familienmitgliedern'],
        prevention: ['Impfung (rekombinantes HBsAg)', 'Schwangerschaftsscreening', 'HBIG + Impfung für Neugeborene HBsAg+ Mütter (innerhalb von 12h)']
      },
      prognosis: {
        mortality: 'Akut: <1%; Chronisch: signifikant durch Zirrhose/HCC',
        factors: 'HBeAg-Status, Viruslast, Genotyp, Koinfektionen'
      }
    },
    {
      id: 'hcv',
      name: 'Hepatitis C',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-C-Virus</i> (HCV)', gram: 'ssRNA, Flaviviridae', shape: 'sphärisch, umhüllt' },
      epidemiology: {
        incidence: '71 Millionen chronische Patienten weltweit',
        risk_groups: ['i.v. Drogenkonsumenten', 'Bluttransfusionen (vor 1992)', 'Tätowierungen/Piercings', 'Medizinisches Personal (Nadelstichverletzung)'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Blut), sexuell (selten, erhöht bei MSM), perinatal'
      },
      pathomechanism: {
        steps: [
          'Replikation: Das Virus repliziert sich im Zytoplasma von Hepatozyten (keine Kernphase, daher ist es heilbar).',
          'Immunevasion: Die virale RNA-Polymerase ist fehleranfällig, was zu einer kontinuierlichen Mutation führt (Quasispezies), wodurch das Immunsystem umgangen wird.',
          'Fibrose: Chronische Entzündungen aktivieren Sternzellen zur Kollagenproduktion, was zu Leberfibrose und schließlich zur Zirrhose führt.'
        ],
        virulence_factors: ['NS3/4A-Protease', 'NS5A/B-Polymerase', 'Modulation des Lipidstoffwechsels']
      },
      clinical: {
        incubation: '14-180 Tage',
        onset: 'Schleichend/Asymptomatisch',
        symptoms: [
          { name: 'Akute Phase', description: 'Selten diagnostiziert (80% asymptomatisch). Leichte Müdigkeit, Appetitlosigkeit können auftreten.', severity: 'mild' },
          { name: 'Chronische Phase', description: 'Kann jahrzehntelang asymptomatisch sein. Das Leitsymptom ist chronische Müdigkeit. Oft bringen erst Komplikationen der Zirrhose oder Laborbefunde die Infektion ans Licht.', severity: 'moderate' },
          { name: 'Extrahepatische Symptome', description: 'Kryoglobulinämie (Vaskulitis), Porphyria cutanea tarda, Lichen planus, Diabetes.', severity: 'moderate' }
        ],
        physical_exam: [
          'Oft unauffällig',
          'Zeichen der Zirrhose im Spätstadium'
        ],
        complications: ['Chronische Hepatitis (70-80%!)', 'Zirrhose (20-30% innerhalb von 20 Jahren)', 'HCC', 'Extrahepatisch: Kryoglobulinämie, Porphyria cutanea tarda, Lichen planus, Diabetes']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT', finding: 'Schwankende Erhöhung', interpretation: 'Chronische Entzündung' }
        ],
        microbiology: [
          { test: 'Anti-HCV', finding: 'Positiv', significance: 'Exposition (nicht zwingend aktive Infektion)' },
          { test: 'HCV-RNA', finding: 'Positiv', significance: 'Aktive Infektion (Bestätigung erforderlich!)' },
          { test: 'Genotypisierung', finding: '1-6', significance: 'Therapiewahl (obwohl pangenotypische Medikamente dominieren)' }
        ]
      },
      differential: [
        { disease: 'Hepatitis B', distinguishing: 'HBsAg-positiv' },
        { disease: 'Alkoholische Lebererkrankung', distinguishing: 'Anamnese, AST > ALT, Makrozytose' },
        { disease: 'NASH/NAFLD', distinguishing: 'Metabolisches Syndrom, Sonographie (Steatosis), Biopsie' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 Tab. p.o. täglich', duration: '8 Wochen', note: 'Pangenotypisch. 8 Wochen mit oder ohne kompensierte Zirrhose.' },
            { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 Tab. p.o. täglich', duration: '12 Wochen', note: 'Pangenotypisch. Sicher bei dekompensierter Zirrhose (mit RBV).' }
          ]
        },
        targeted: 'Pangenotypische DAA-Therapie für alle Patienten (vereinfachte Therapie). Genotypisierung für den Behandlungsbeginn nicht zwingend erforderlich (außer bei Zirrhose/Vortherapieversagen).',
        supportive: ['Wechselwirkungen prüfen (www.hep-druginteractions.org)', 'Alkoholkarenz'],
        prevention: ['Keine Impfung', 'Spenderscreening', 'Harm Reduction (Nadeltausch)', 'Safer Sex']
      },
      prognosis: {
        mortality: 'Hervorragend mit Therapie (SVR = Heilung), schlechter bei Zirrhose',
        factors: 'Fibrosestadium, Koinfektion (HIV/HBV), Alkohol'
      }
    },
    {
      id: 'hgv',
      name: 'Hepatitis-G-Virus / Humanes Pegivirus 1 (HPgV-1 / GBV-C)',
      pathogen: { type: 'Virus', name: '<i>Humanes Pegivirus 1</i> (HPgV-1, ehemals GBV-C / HGV)', gram: 'ssRNA (+), Flaviviridae (Gattung Pegivirus)', shape: 'sphärisch, umhüllt' },
      epidemiology: {
        incidence: 'Weltweit verbreitet; 1–5% gesunder Blutspender sind virämisch. 20–50% der Bevölkerung weisen Anti-E2-Antikörper auf.',
        risk_groups: ['i.v.-Drogenkonsumenten', 'Hämodialysepatienten', 'Mehrfach-Empfänger von Blutprodukten', 'HIV- und HCV-Koinfizierte', 'Personen mit risikoreichem Sexualverhalten'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Blut, Nadelstich, Blutprodukte), sexuell, vertikal (Mutter-Kind)'
      },
      pathomechanism: {
        steps: [
          'Lymphotropes Virus: Replikation primär in T- und B-Lymphozyten sowie mononukleären Zellen des peripheren Blutes (PBMC). Nicht hepatotrop!',
          'Schädigt Leberzellen nicht, kein zytopathischer Effekt oder histologische Entzündung in der Leber.',
          'Bei HIV-1-Koinfektion günstige immunmodulatorische Wirkung: Herabregulierung von HIV-Korezeptoren (CD4, CXCR4, CCR5), Erhöhung inhibitorischer Chemokine (SDF-1, RANTES, MIP-1α/β).',
          'Reduziert T-Zell-Hyperaktivierung und Apoptose, was den Abfall der CD4+-Zellzahl und die HIV/AIDS-Progression verlangsamt.'
        ],
        virulence_factors: ['E2-Hüllprotein (Zelleintritt, Immunmodulation)', 'NS5A-Nichtstrukturprotein']
      },
      clinical: {
        incubation: '14–60 Tage, klinisch irrelevant',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Asymptomatische Infektion', description: 'Verursacht eigenständig weder akute noch chronische Hepatitis, keine Leberzirrhose und kein Leberversagen. Die Bezeichnung „Hepatitis G“ ist ein historischer Irrtum.', severity: 'mild' }
        ],
        physical_exam: ['Körperlicher Befund völlig unauffällig (kein Ikterus, keine Hepatomegalie)'],
        complications: ['Keine hepatischen Komplikationen.', 'Bei HIV-1-Koinfektion verlangsamt die HPgV-1-Persistenz die AIDS-Progression und verbessert das Überleben (protektiver Effekt).']
      },
      diagnostics: {
        laboratory: [{ test: 'Leberenzyme (ALT, AST), Bilirubin, AP, GGT', finding: 'Völlig im Normbereich', interpretation: 'Kein hepatozellulärer Schaden' }],
        imaging: [{ modality: 'Abdomen-Sonographie', finding: 'Unauffällige Leber- und Gallenwegsstrukturen', significance: 'Ausschluss anderer Pathologien' }],
        microbiology: [
          { test: 'HPgV-1 RT-PCR', finding: 'RNA-Nachweis', significance: 'Spezial- und Forschungsdiagnostik; weist aktive Virämie nach' },
          { test: 'Anti-E2-Antikörper', finding: 'Positiv', significance: 'Zeigt Ausheilung der Virämie und durchgemachte Infektion an' }
        ]
      },
      differential: [
        { disease: 'Echte hepatotrope Viren (HBV, HCV, HAV, HEV, HDV)', distinguishing: 'Serologie und PCR (HBsAg, Anti-HCV, HCV-RNA etc.)' },
        { disease: 'Nicht-infektiöse Lebererkrankungen (DILI, NAFLD/NASH, Autoimmunhepatitis)', distinguishing: 'Ausschlussdiagnostik, Autoantikörper, Toxikologie' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Erfordert KEINE spezifische antivirale Therapie.',
        supportive: ['Keine klinische Intervention erforderlich.'],
        prevention: ['Routinemäßiges HPgV-1-Screening von Blutspenden nicht indiziert. Standard-Infektionskontrolle.'],
        references: [
          'Stapleton JT, et al. HPgV-1 (GBV-C) infection and pathogenesis. Nat Rev Microbiol.',
          'EASL & CDC Clinical Guidelines on Viral Hepatitis misnomers and Anelloviridae/Pegivirus.'
        ]
      },
      prognosis: {
        mortality: 'Nicht pathogen für die Leber (Null Mortalität).',
        prognostic_scores: [],
        factors: 'Bei HIV-Koinfektion ist die HPgV-1-Persistenz ein günstiger Prognosefaktor.'
      }
    },
    {
      id: 'ttv',
      name: 'Torque-Teno-Virus (TTV)',
      pathogen: { type: 'Virus', name: '<i>Torque-Teno-Virus</i> (TTV)', gram: 'ssDNA (-/+), Anelloviridae (Gattung Alphatorquevirus)', shape: 'klein (28-32 nm), unbehüllt, ikosaedrisch' },
      epidemiology: {
        incidence: 'Ubiquitär: in >70–90% der Bevölkerung als perzipitierende Virämie nachweisbar. Essenzieller Bestandteil des menschlichen Kommensalviroms.',
        risk_groups: ['Allgemeinbevölkerung', 'Organtransplantierte (Leber, Niere, Herz, Lunge)', 'Immunsupprimierte Patienten'],
        seasonality: 'Keine',
        transmission: 'Tröpfchen-, fäkal-orale, parenterale, sexuelle, vertikale Übertragung sowie Muttermilch'
      },
      pathomechanism: {
        steps: [
          'Systemische Replikation in Knochenmark, PBMCs, T- und B-Lymphozyten, Leber und Lunge.',
          'Nicht zytopathisch: Verursacht keine Hepatozytennekrose, Histologie ohne Entzündungszeichen.',
          'Immungleichgewicht: Die TTV-DNA-Kopienzahl korreliert invers mit der zellulären Immunkompetenz des Wirts.',
          'Biomarker bei Organtransplantation: Hohe TTV-Spiegel zeigen übermäßige Immunsuppression (Infektionsrisiko für CMV, BK-Virus, Pilze); niedrige TTV-Spiegel zeigen unzureichende Immunsuppression (Rejektionsrisiko) an.'
        ],
        virulence_factors: ['ORF1-Kapsidprotein (hohe genetische Variabilität, Immunevasion)']
      },
      clinical: {
        incubation: 'Nicht zutreffend (lebenslange Kommensalpersistenz)',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Kommensaler Zustand', description: 'Verursacht weder akute/chronische Hepatitis noch systemische Erkrankung.', severity: 'mild' }
        ],
        physical_exam: ['Unauffällig'],
        complications: ['Keine Leberschädigung. TTV-DNA im Plasma dient als quantitativer Biomarker zur Steuerung der Immunsuppression bei Transplantationspatienten.']
      },
      diagnostics: {
        laboratory: [{ test: 'Leberfunktionspanel (ALT, AST, Bilirubin)', finding: 'Normal', interpretation: 'Keine Hepatopathologie' }],
        imaging: [{ modality: 'Sonographie', finding: 'Normal', significance: 'Kein Befund' }],
        microbiology: [
          { test: 'Quantitative Real-Time PCR (TTV-DNA Kopienzahl)', finding: 'DNA-Nachweis (Kopien/mL)', significance: 'Surrogatmarker zur Feinabstimmung der Immunsuppression bei Transplantierten' }
        ]
      },
      differential: [
        { disease: 'Klinische Hepatitis-Syndrome (HAV-HEV, EBV, CMV)', distinguishing: 'Serologie, erweitertes PCR-Panel' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Erfordert KEINE antivirale Therapie.',
        supportive: ['Dosisanpassung der Immunsuppression bei Transplantierten basierend auf TTV-Kopienzahlen (nach Protokoll).'],
        prevention: ['Wegen ubiquitärer Prävalenz weder möglich noch erforderlich.']
      },
      prognosis: {
        mortality: 'Physiologische Viromkomponente (Null Mortalität).',
        prognostic_scores: [],
        factors: 'TTV-DNA-Kopienzahl korreliert bei Transplantierten mit Infektions- und Rejektionsrisiko.'
      }
    },
    {
      id: 'senv',
      name: 'SEN-Virus (SENV-D / SENV-H)',
      pathogen: { type: 'Virus', name: '<i>SEN-Virus</i> (SENV-D und SENV-H Genotypen)', gram: 'ssDNA (-/+), Familie Anelloviridae', shape: 'kleines, unbehülltes zirkuläres DNA-Virus' },
      epidemiology: {
        incidence: 'Bei 10–20% gesunder Blutspender, bis zu 40–60% bei Transfundierten, Dialysepatienten und i.v.-Drogenkonsumenten.',
        risk_groups: ['Transfusionsempfänger', 'Hämodialysepatienten', 'i.v.-Drogenkonsumenten', 'Allgemeinbevölkerung'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Transfusion, Blut, Nadelstich), non-parenteral (fäkal-oral, vertikal)'
      },
      pathomechanism: {
        steps: [
          'Übertragung über Blut mit perzipitierender Virämie.',
          'SENV-DNA in Hepatozyten und peripheren Zellen nachweisbar, führt jedoch NICHT zu Zytopathologie oder Nekroinflammation.',
          'Prospektive und retrospektive klinische Studien zeigten, dass SENV das Risiko für Posttransfusionshepatitis, kryptogene Hepatitis oder Leberzirrhose NICHT erhöht.',
          'Kommensales Element des menschlichen Anelloviroms.'
        ],
        virulence_factors: ['Keine bekannten Virulenzfaktoren.']
      },
      clinical: {
        incubation: 'Nicht zutreffend',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Asymptomatische Trägerschaft', description: 'Verursacht keine akute oder chronische Lebererkrankung. Frühere Vermutungen einer Kausalität bei Posttransfusionshepatitis wurden widerlegt.', severity: 'mild' }
        ],
        physical_exam: ['Körperlich unauffällig'],
        complications: ['Keine nachgewiesenen hepatischen oder systemischen Komplikationen.']
      },
      diagnostics: {
        laboratory: [{ test: 'ALT / AST', finding: 'Im Normbereich', interpretation: 'Keine relevante Hepatolytik' }],
        imaging: [{ modality: 'Sonographie', finding: 'Normal', significance: '-' }],
        microbiology: [
          { test: 'SENV-D / SENV-H PCR', finding: 'DNA-Nachweis', significance: 'Forschungsdiagnostik; routinemäßig nicht indiziert' }
        ]
      },
      differential: [
        { disease: 'Posttransfusionshepatitis (HCV, HBV, CMV, EBV)', distinguishing: 'Serologie und spezifische PCR-Tests' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Keine Behandlung erforderlich.',
        supportive: [],
        prevention: ['SENV-Screening von Blutspenden nicht indiziert.']
      },
      prognosis: {
        mortality: 'Ausgezeichnet (nicht-pathogenes Virus).',
        prognostic_scores: [],
        factors: '-'
      }
    }
  ]
};
