import { Category } from '../types';

export const viralHepatitisDe: Category = {
  name: 'Virale Hepatitiden',
  icon: '🧬',
  color: '#eab308',
  tables: [
    {
      title: 'Differenzialdiagnose der viralen Hepatitis',
      headers: ['Virus', 'Übertragung', 'Inkubation', 'Chronifizierung', 'Schlüsselserologie', 'Hauptmerkmale'],
      rows: [
        ['HAV', 'Fäkal-oral', '2-6 Wochen', 'Nein', 'Anti-HAV-IgM', 'Akut, epidemisch, reiseassoziiert'],
        ['HBV', 'Parenteral, sexuell', '2-6 Monate', 'Ja (besonders perinatal)', 'HBsAg, Anti-HBc-IgM', 'Chronische Lebererkrankung, HCC-Risiko'],
        ['HCV', 'Parenteral', '2-26 Wochen', 'Ja (>70%)', 'Anti-HCV, HCV-RNA', 'Chronisch, heilbar (DAA), extrahepatische Manif.'],
        ['HDV', 'Parenteral (mit HBV)', 'Variabel', 'Ja (Superinfektion)', 'Anti-HDV (bei HBsAg+ Pat.)', 'Verschlimmert HBV, rasche Zirrhoseprogression'],
        ['HEV', 'Fäkal-oral (G1,2), Zoonose (G3,4)', '2-10 Wochen', 'Ja (Immunsuppr.)', 'Anti-HEV-IgM, HEV-RNA', 'Fulminant bei Schwangeren, schweinefleischassoziiert']
      ]
    },
    {
      title: 'Interpretation der Hepatitis-B-Serologie',
      headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Gesamt)', 'Anti-HBc-IgM', 'Interpretation'],
      rows: [
        ['-', '-', '-', '-', 'Empfänglich (nicht infiziert, nicht geschützt)'],
        ['-', '+', '-', '-', 'Geschützt (durch Impfung)'],
        ['-', '+', '+', '-', 'Ausgeheilte Infektion (natürliche Immunität)'],
        ['+', '-', '+', '+', 'Akute Infektion'],
        ['+', '-', '+', '-', 'Chronische Infektion'],
        ['-', '-', '+', '-', 'Möglich: 1. Ausgeheilt (niedriges Anti-HBs); 2. Falsch positiv; 3. Okkultes HBV; 4. Fensterphase']
      ]
    },
    {
      title: 'Bedeutung der serologischen Hepatitis-Marker',
      headers: ['Marker', 'Virus', 'Bedeutung'],
      rows: [
        ['Anti-HAV-IgM', 'HAV', 'Akute Infektion'],
        ['Anti-HAV-IgG', 'HAV', 'Immunität (Impfung oder durchgemachte Infektion)'],
        ['HBsAg', 'HBV', 'Vorliegen einer Infektion (akut oder chronisch)'],
        ['Anti-HBs', 'HBV', 'Immunität (Impfung oder Ausheilung)'],
        ['Anti-HBc-IgM', 'HBV', 'Akute Infektion (auch in der Fensterphase)'],
        ['Anti-HBc (Gesamt)', 'HBV', 'Frühere oder bestehende Infektion'],
        ['HBeAg', 'HBV', 'Hohe Replikation, Infektiosität'],
        ['Anti-HBe', 'HBV', 'Niedrigere Replikation (Serokonversion)'],
        ['HBV-DNA', 'HBV', 'Maß der viralen Replikation'],
        ['Anti-HCV', 'HCV', 'Exposition (nicht zwingend aktiv)'],
        ['HCV-RNA', 'HCV', 'Aktive Infektion'],
        ['Anti-HDV', 'HDV', 'HDV-Infektion (nur zusammen mit HBV)'],
        ['Anti-HEV-IgM', 'HEV', 'Akute Infektion']
      ]
    }
  ],
  diseases: [
    {
      id: 'hav',
      name: 'Hepatitis A',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-A-Virus</i> (HAV)', gram: 'ssRNA (+), Picornaviridae (Gattung Hepatovirus)', shape: 'ikosaedrisch, unbehüllt (Stuhl) / mit Quasihülle (eHAV, Blut)' },
      epidemiology: {
        incidence: 'Hohe Endemizität in Ländern mit niedrigem Einkommen (Kinderinfektion); niedrig in Industrieländern mit sporadischen Ausbrüchen (MSM, Lebensmittel, Reisende).',
        risk_groups: ['Reisende in endemische Gebiete', 'Männer, die Sex mit Männern haben (MSM)', 'Personen mit i.v.-Drogenkonsum (PWID)', 'Obdachlose / Wohnungslose', 'Patienten mit chronischer Lebererkrankung (HBV, HCV, MASLD, Zirrhose)', 'Abwasser- und Laborpersonal'],
        seasonality: 'Keine',
        transmission: 'Fäkal-oral (kontaminiertes Wasser, Nahrungsmittel, Meeresfrüchte), sexuell (oral-anal), selten parenteral (virämisches Blut/Nadeltausch).'
      },
      pathomechanism: {
        steps: [
          'Oraler Eintritt: Verschlucktes HAV überwindet das Darmepithel und gelangt über den Pfortaderkreislauf in die Leber.',
          'Hepatozyteninfektion: Dringt über den HAVCR-1 (TIM-1)-Rezeptor in Hepatozyten ein und repliziert im Zytoplasma; nicht-zytopathisch.',
          'Immunvermittelte Zellzerstörung: Die Leberschädigung wird durch CD8+-zytotoxische T-Lymphozyten und NK-Zellen vermittelt, die infizierte Hepatozyten zerstören.',
          'Ausscheidung und Quasihülle (eHAV): Virionen werden mit Galle und Stuhl ausgeschieden (höchste Virustiter 1–2 Wochen vor Symptombeginn). Im Blut zirkulieren Virionen von Wirtslipiden umhüllt als Quasihüllen-Virionen (eHAV), die vor neutralisierenden Antikörpern schützen.'
        ],
        virulence_factors: ['Säurestabiles Kapsid (übersteht Magensäure)', 'eHAV-Quasihülle (Immunevasion im Blut)', 'Hohe Umweltstabilität']
      },
      clinical: {
        incubation: '15–50 Tage (Durchschnitt 28 Tage)',
        onset: 'Plötzlich',
        symptoms: [
          { name: 'Prodromalphase', description: 'Grippeähnliche Symptome (Fieber, Abgeschlagenheit, Kopfschmerzen), Übelkeit, Schmerzen im rechten Oberbauch, Anorexie, Abneigung gegen Tabakrauch/fettige Speisen (dauert 1–2 Wochen).', severity: 'moderate' },
          { name: 'Ikterische Phase', description: 'Dunkler Urin (Bilirubinurie), entfärbter Stuhl, Gelbsucht (Sklera, Haut). Entfieberung meist mit Einsetzen des Ikterus.', severity: 'moderate' },
          { name: 'Atypische Formen (cholestatisch / rezidivierend)', description: 'Prolongierte Cholestase (Juckreiz, erhöhte AP/GGT >12 Wochen) oder Rezidiv (in 4–20%, 4–15 Wochen nach primärer Besserung).', severity: 'moderate' }
        ],
        physical_exam: [
          'Ikterus (Skleren, Haut)',
          'Hepatomegalie, druckschmerzhafter Leberrand',
          'Splenomegalie (in 10–20%)',
          'Selten Gefäßspinnen (Spider naevi) oder flüchtiges Exanthem'
        ],
        complications: [
          'Fulminante Hepatitis / Akutes Leberversagen (ALF): <0,5–1%, aber deutlich höher bei Älteren (>50 Jahre) oder vorbestehender chronischer Lebererkrankung (HBV, HCV, Zirrhose) (Koagulopathie, Enzephalopathie).',
          'Cholestatische Hepatitis (prolongierte Cholestase, schwerer Juckreiz, heilt ohne Folgeschäden aus).',
          'Rezidivierende HAV (zweiter Anstieg von Leberenzymen und Symptomen Wochen nach scheinbarer Ausheilung, ohne Chronifizierung).',
          'Extrahepatische Manifestationen: Akute interstitielle Nephritis, aplastische Anämie, leukozytoklastische Vaskulitis, Guillain-Barré-Syndrom.',
          'KEIN chronischer Trägerstatus oder chronische Hepatitis!'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Leberenzyme (ALT, AST)', finding: 'Stark erhöht (>1000 U/L, oft >2000–5000 U/L; ALT > AST)', interpretation: 'Akute schwere hepatozelluläre Nekrose' },
          { test: 'Bilirubin (direkt und Gesamt)', finding: 'Signifikant erhöht (>50–200 µmol/L)', interpretation: 'Gemischter/hepatozellulärer und cholestatischer Ikterus' },
          { test: 'AP / GGT', finding: 'Mäßig erhöht (deutlich hoch bei cholestatischer Variante)', interpretation: 'Cholestase' },
          { test: 'Prothrombinzeit / INR', finding: 'INR-Monitoring ist obligatorisch!', interpretation: 'INR >1,5 begründet Verdacht auf akutes Leberversagen (ALF) und fulminanten Verlauf' }
        ],
        imaging: [
          { modality: 'Abdominelle Sonographie', finding: 'Hepatomegalie, reaktive Gallenblasenwandverdickung, minimale perihepatische Flüssigkeit', significance: 'Schließt Cholestase durch Gallengangsobstruktion aus' }
        ],
        microbiology: [
          { test: 'Anti-HAV-IgM (ELISA)', finding: 'Positiv', significance: 'Goldstandard zur Diagnose der akuten Hepatitis A (persistiert 3–6 Monate)' },
          { test: 'Anti-HAV-IgG / Gesamt-Anti-HAV', finding: 'Positiv', significance: 'Bestätigt durchgemachte Infektion oder Impfimmunität (persistiert lebenslang)' },
          { test: 'HAV-RNA (RT-PCR)', finding: 'Positiv', significance: 'Indiziert bei atypischer serologischer Lücke, Rezidiven oder molekularer Epidemiologie' }
        ],
        differential: [
          { disease: 'Andere akute Virushepatitiden (HBV, HCV, HEV, EBV, CMV)', distinguishing: 'Identisches klinisches Bild; Differenzierung über Serologiepanel (HBsAg, Anti-HBc, Anti-HCV, Anti-HEV-IgM)' },
          { disease: 'Arzneimittelinduzierte Leberschädigung (DILI)', distinguishing: 'Anamnese (Paracetamol, Knollenblätterpilz, Antibiotika), Toxikologie' },
          { disease: 'Choledocholithiasis / Akute Cholangitis', distinguishing: 'Sonographie/MRCP (erweiterte Gallengänge, Konkremente), Charcot-Trias, AP/GGT-Dominanz' },
          { disease: 'Autoimmunhepatitis (akuter Beginn)', distinguishing: 'Autoantikörper (ANA, ASMA), erhöhtes Serum-IgG, Leberbiopsie' },
          { disease: 'Ischämische Hepatitis / Schockleber', distinguishing: 'Anamnese von Kreislaufkollaps, extrem rascher LDH-Anstieg' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive Therapie', dose: '-', duration: '-', note: 'Bettruhe, symptomatische Behandlung, ausgewogene Ernährung, strenges Verbot von Alkohol und hepatotoxischen Stoffen' }
          ],
          inpatient: [
            { drug: 'I.v. Rehydratation & Antiemetika', dose: 'Individuell', duration: 'Akutphase', note: 'Indiziert bei schwerer Dehydratation, Schwangerschaft, Älteren oder Koagulopathie' }
          ],
          icu: [
            { drug: 'Notfall-Lebertransplantation', dose: 'Transplantationsliste', duration: 'Sofort', note: 'Bei fulminantem Leberversagen nach Erfüllung der King\'s College Kriterien' }
          ]
        },
        targeted: 'Keine spezifische antivirale Therapie zugelassen.',
        supportive: ['Ausreichende Flüssigkeitszufuhr', 'Kohlenhydratreiche Ernährung', 'Cholestyramin oder Ursode interior/Ursodeocholsäure (UDCA) bei Cholestase', 'Strenges Alkoholverbot für mindestens 6 Monate'],
        prevention: [
          'Präexpositionsprophylaxe (toten HAV-Impfstoff in 2 Dosen: 0 und 6–12 Monate)',
          'Postexpositionsprophylaxe (PEP): innerhalb von 14 Tagen nach Exposition. Gesunde Personen im Alter von 1–40 Jahren erhalten 1 Dosis HAV-Impfstoff; Personen >40 Jahre, Immunsupprimierte oder Patienten mit chronischer Lebererkrankung erhalten HAV-Impfstoff + Immunglobulin (HNIG).'
        ],
        guidelines: [
          'Diagnose: Anti-HAV-IgM im Serum ist essenziell. Enge INR-Überwachung ist obligatorisch zur Früherkennung eines akuten Leberversagens (ALF).',
          'Behandlung: Rein supportiv. Krankenhausaufnahme empfohlen bei INR >1,5, Enzephalopathie, schwerer Dehydratation oder Risikopatienten (Senioren, chronisch Leberkranke).',
          'Lebertransplantation: Bei akutem Leberversagen sofortige Verlegung in ein Transplantationszentrum und Evaluation nach King\'s College Kriterien.',
          'Postexpositionsprophylaxe (PEP): Innerhalb von 14 Tagen nach Exposition 1 Dosis HAV-Impfstoff (1–40 J.) oder Impfstoff + HNIG (>40 J., Immunsupprimierte, Zirrhose).',
          'Präexpositionsschutz: Totimpfstoff in 2 Dosen (0 und 6–12 Monate). Dringend empfohlen für Reisende in Endemiegebiete, MSM, chronisch Leberkranke, PWID.'
        ],
        references: [
          'EASL Clinical Practice Guidelines & Public Health Recommendations on Hepatitis A.',
          'RKI-Ratgeber Hepatitis A & WHO Factsheet.'
        ]
      },
      prognosis: {
        mortality: 'Niedrig bei Jüngeren (<0,1%), jedoch 1,8–5% bei Personen über 50 Jahren oder mit chronischer Lebererkrankung',
        prognostic_scores: ['King\'s College Kriterien (akutes Leberversagen)'],
        factors: 'Alter, vorbestehende chronische Lebererkrankung (HBV, HCV, Zirrhose), Koagulopathie (INR)'
      },
      gallery: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>1 Mon.</text><text x='350' y='370' class='txt'>3 Mon.</text><text x='500' y='370' class='txt'>6 Mon.</text><text x='650' y='370' class='txt'>1 Jahr</text><text x='350' y='390' class='txt' text-anchor='middle'>Zeit nach Infektion</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q150,50 250,50 Q350,50 450,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='40' class='txt' fill='purple'>Anti-HAV-IgM</text><path d='M150,350 Q250,100 350,100 L750,100' fill='none' stroke='green' stroke-width='3' /><text x='600' y='90' class='txt' fill='green'>Anti-HAV-IgG</text><path d='M50,350 Q100,200 150,200 Q200,200 220,350' fill='none' stroke='red' stroke-width='3' stroke-dasharray='5,5' /><text x='80' y='190' class='txt' fill='red'>Virus (Stuhl)</text><path d='M100,350 Q180,150 220,150 Q260,150 300,350' fill='none' stroke='orange' stroke-width='2' /><text x='180' y='140' class='txt' fill='orange'>ALT (Symptome)</text></svg>",
          caption: 'Serologischer Verlauf der Hepatitis A',
          type: 'Diagram'
        }
      ]
    },
    {
      id: 'hbv',
      name: 'Hepatitis B',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-B-Virus</i> (HBV)', gram: 'dsDNA (mit Reverser Transkriptase), Hepadnaviridae', shape: 'sphärisch (42 nm Dane-Partikel, umhüllt)' },
      epidemiology: {
        incidence: '250–290 Millionen chronische HBsAg-Träger weltweit; ~820.000 Todesfälle jährlich durch Zirrhose und HCC.',
        risk_groups: ['Personen mit i.v.-Drogenkonsum (PWID)', 'Wechselnde Sexualpartner, MSM', 'Medizinisches Personal (Nadelstichverletzung)', 'Hemodialyse- und Bluttransfusionsempfänger', 'Personen aus endemischen Regionen und deren Neugeborene (perinatal)'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Blut, Körperflüssigkeiten), sexuell, vertikal (perinatal/Mutter-Kind), perkutan.'
      },
      pathomechanism: {
        steps: [
          'Hepatozyteneintritt & Rezeptor: HBV bindet an den Sodium-Taurocholate Cotransporting Polypeptide (NTCP)-Rezeptor auf Hepatozyten.',
          'cccDNA-Bildung: Im Zellkern wird partiell doppelsträngige DNA in kovalent geschlossene zirkuläre DNA (cccDNA) umgewandelt. cccDNA bildet ein extrem stabiles episomales Reservoir, das die virale Persistenz bedingt und durch nukleos(t)idische Analoga nicht eliminiert werden kann.',
          'DNA-Integration & Karzinogenese: Ein Teil der HBV-DNA integriert in das Wirtsgenom. Dies führt zu cccDNA-unabhängiger HBsAg- und HBx-Produktion, genomischer Instabilität und hepatozellulärem Karzinom (HCC) — auch ohne vorherige Zirrhose!',
          'Immunpathogenese: HBV ist nicht-zytopathisch. Leberentzündung und Gewebeschädigung werden durch CD8+-zytotoxische T-Zellen vermittelt.',
          'EASL Natürlicher Verlauf: 1. HBeAg+ chronische Infektion ("immuntolerant": hohe HBV-DNA, normale ALT); 2. HBeAg+ chronische Hepatitis (hohe DNA, erhöhte ALT, Fibrose); 3. HBeAg- chronische Infektion ("inaktiver Träger": niedrige DNA <2000 IU/mL, normale ALT); 4. HBeAg- chronische Hepatitis (fluktuierende DNA >2000 IU/mL, erhöhte ALT, progrediente Fibrose); 5. HBsAg-negative Phase (Okkultes HBV / ausgeheilt: HBsAg-, cccDNA persistiert in der Leber, Reaktivierungsrisiko bei Immunsuppression).'
        ],
        virulence_factors: ['cccDNA (persistentes episomales Reservoir)', 'HBx-Protein (Transaktivator, onkogen)', 'HBsAg-Überproduktion (Immunsurrogat/Decoy)', 'HBeAg (Induktion von Immuntoleranz)']
      },
      clinical: {
        incubation: '45–160 Tage (Durchschnitt 90 Tage)',
        onset: 'Schleichend / Langsam',
        symptoms: [
          { name: 'Akutphase', description: '70% anikterisch/subklinisch. Symptomatische Fälle zeigen ein serumkrankheitsähnliches Prodrom (Arthralgie, Urtikaria, Fieber — Gianotti-Crosti-Syndrom bei Kindern), gefolgt von Gelbsucht, dunklem Urin und dumpfem Oberbauchschmerz.', severity: 'moderate' },
          { name: 'Chronische Phase', description: 'Jahrzehntelang asymptomatisch ("stiller Killer"). Im Spätstadium dominieren Zeichen der dekompensierten Leberzirrhose (Aszites, Varizenblutung, hepatische Enzephalopathie, Ikterus, Splenomegalie).', severity: 'severe' },
          { name: 'Extrahepatische Manifestationen (EASL hervorgehoben)', description: 'Polyarteriitis nodosa (PAN), Membranöse / Membranoproliferative Glomerulonephritis, Kryoglobulinämie, Gianotti-Crosti-Syndrom.', severity: 'severe' }
        ],
        physical_exam: [
          'Hepatomegalie (druckschmerzhafter Leberrand)',
          'Ikterus (Skleren, Haut)',
          'Splenomegalie, Spider naevi, Palmarerythem (chronisch/Zirrhose)',
          'Aszites, Caput medusae, Asterixis / Flapping Tremor (dekompensierte Zirrhose)'
        ],
        complications: [
          'Chronische Hepatitis B (90% bei perinataler Infektion, <5% bei Infektion im Erwachsenenalter)',
          'Leberzirrhose und Dekompensation',
          'Hepatozelluläres Karzinom (HCC — kann auch ohne vorherige Zirrhose auftreten!)',
          'Polyarteriitis nodosa (PAN) und Glomerulonephritis',
          'HBV-Reaktivierung unter Immunsuppression / Biologikatherapie / Rituximab'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Leberenzyme (ALT, AST)', finding: 'Akut: >1000 U/L; Chronisch: fluktuierende Anstiege', interpretation: 'Hepatozellulärer Schaden und entzündliche Aktivität' },
          { test: 'Bilirubin & Albumin & INR', finding: 'Erhöhtes direktes Bilirubin, Hypoalbuminämie, INR-Verlängerung', interpretation: 'Eingeschränkte Synthesefunktion der Leber, Dekompensation' },
          { test: 'Thrombozytenzahl', finding: 'Thrombozytopenie (<150 G/L)', interpretation: 'Zeichen von portalem Hochdruck und Hypersplenismus' }
        ],
        microbiology: [
          { test: 'HBsAg', finding: 'Positiv', significance: 'Nachweis einer bestehenden Infektion (>6 Monate Dauer = chronisches HBV)' },
          { test: 'Anti-HBs', finding: 'Positiv (≥10 IU/L)', significance: 'Immunität und Schutz (erfolgreiche Impfung oder ausgeheilte Infektion)' },
          { test: 'Anti-HBc-IgM', finding: 'Positiv', significance: 'Beweist akute HBV-Infektion (auch in der Fensterphase positiv!) oder akuten Schub' },
          { test: 'Anti-HBc Gesamt (IgG+IgM)', finding: 'Positiv', significance: 'Durchgemachte oder bestehende HBV-Infektion (bei allen HBsAg+ Personen positiv)' },
          { test: 'HBeAg / Anti-HBe', finding: 'HBeAg+ oder Anti-HBe+', significance: 'HBeAg+ = hohe virale Replikation; HBeAg- = Serokonversion oder Precore-Mutante' },
          { test: 'HBV-DNA (Quantitative RT-PCR)', finding: 'Positiv (IU/mL)', significance: 'Präzise Messung der Virusreplikation; Basis für Therapieindikation und Verlaufskontrolle' }
        ],
        differential: [
          { disease: 'Andere Virushepatitiden (HAV, HCV, HDV, HEV)', distinguishing: 'Serologische und PCR-Tests (Anti-HAV-IgM, Anti-HCV, Anti-HDV, Anti-HEV-IgM)' },
          { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA, LKM-1), erhöhtes Serum-IgG, Leberbiopsie' },
          { disease: 'Alkoholische oder Metabolische Lebererkrankung (MASLD/MASH)', distinguishing: 'Anamnese, AST/ALT >2, metabolisches Syndrom, sonographische Steatose' },
          { disease: 'Arzneimittelinduzierte Leberschädigung (DILI)', distinguishing: 'Anamnese hepatotoxischer Substanzen, enger zeitlicher Zusammenhang' },
          { disease: 'Morbus Wilson', distinguishing: 'Jüngere Patienten, niedriges Zöruroplasmin, hohes 24h-Urin-Kupfer, Kayser-Fleischer-Ring' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Entecavir (ETV)', dose: '0,5 mg p.o. 1x täglich (1,0 mg bei Lamivudin-Resistenz oder Dekompensation)', duration: 'Langzeit / Lebenslang', note: 'Erstlinien-Nukleosidanalogon mit hoher Resistenzbarriere.' },
            { drug: 'Tenofovirdisoproxilfumarat (TDF)', dose: '300 mg p.o. 1x täglich', duration: 'Langzeit / Lebenslang', note: 'Erstlinien-Nukleotidanalogon mit null Resistenz. Nierenfunktion und Knochendichte überwachen.' },
            { drug: 'Tenofoviralafenamid (TAF)', dose: '25 mg p.o. 1x täglich', duration: 'Langzeit / Lebenslang', note: 'Bevorzugte Erstlinie bei Patienten >60 Jahre, vorbestehender Knochenerkrankung/Osteoporose oder Niereninsuffizienz (eGFR <60).' }
          ],
          inpatient: [
            { drug: 'Tenofovir (TDF/TAF) oder Entecavir', dose: 'Standarddosierung', duration: 'Sofortiger Beginn', note: 'Bei schwerer akuter Hepatitis B, fulminantem Leberversagen oder akuter Dekompensation unverzüglich einleiten!' }
          ]
        },
        targeted: 'EASL-Leitlinie: Langfristige / lebenslange Nukleos(t)idanaloga-Therapie (NA: Entecavir, TDF, TAF) zur dauerhaften Suppression der HBV-DNA. Zeitlich begrenzte (48 Wochen) Peg-IFN-alfa-2a-Therapie kann bei ausgewählten kompensierten Patienten erwogen werden.',
        supportive: ['Regelmäßige HCC-Früherkennung (Sonographie alle 6 Monate)', 'HAV-Impfung verabreichen', 'Angehörige und Sexualpartner testen und impfen', 'Strenges Alkoholverbot'],
        prevention: ['Rekombinante HBV-Impfung (Schema 0-1-6 Monate)', 'Universelles HBsAg-Screening bei Schwangeren im 1. Trimester', 'Postexpositionsprophylaxe (HBIG + 1. Impfdosis innerhalb von 12 Stunden) für Neugeborene HBsAg+ Mütter und nach Nadelstichverletzung'],
        guidelines: [
          'Behandlungsindikationen (EASL 2017): 1. ALLE Patienten mit Leberzirrhose (kompensiert oder dekompensiert) müssen bei nachweisbarer HBV-DNA behandelt werden! 2. Chronische Hepatitis B: HBV-DNA >2000 IU/mL UND ALT > ULN UND mindestens mäßige Fibrose (≥F2). 3. HBV-DNA >20.000 IU/mL UND ALT >2x ULN unabhängig vom Fibrosestadium. 4. Familiäre HCC-Anamnese oder extrahepatische Manifestationen.',
          'Schwangerschaft & Mutter-Kind-Übertragung (MTCT): TDF (Tenofovirdisoproxil) ab SSW 24–28 bis 4–12 Wochen postpartum verabreichen, wenn mütterliche HBV-DNA >200.000 IU/mL (>10^5 IU/mL). Neugeborenes erhält HBIG + Impfung innerhalb von 12 Stunden.',
          'Immunsuppressive / Biologika-Prophylaxe: Alle HBsAg+ und Anti-HBc+ Patienten vor Beginn einer immunsuppressiven Therapie (z. B. Rituximab, Steroide, Chemotherapie) müssen eine NA-Prophylaxe zur Verhinderung einer HBV-Reaktivierung erhalten.',
          'Monitoring: Unter NA-Therapie ALT, HBV-DNA und Nierenparameter alle 3–6 Monate kontrollieren. HCC-Früherkennung (Sonographie ± AFP alle 6 Monate) ist bei allen Zirrhosepatienten und Risikopatienten (PAGE-B-Score) obligatorisch!'
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398.',
          'WHO Guidelines for the prevention, care and treatment of persons with chronic hepatitis B infection (2024 update).'
        ]
      },
      prognosis: {
        mortality: 'Akut: <1% (außer fulminanter Verlauf); Chronisch: unbehandelt 5-Jahres-Zirrhoserisiko 8–20%, jährliches HCC-Risiko 2–5%',
        prognostic_scores: ['PAGE-B-Score (HCC-Risikoabschätzung unter NA-Therapie)', 'MELD / Child-Pugh-Score (bei Zirrhose)'],
        factors: 'Viruslast (HBV-DNA), HBeAg-Serokonversion, Fibrosestadium, HDV/HCV/HIV-Koinfektion, Alkoholkonsum'
      },
      gallery: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>4 W.</text><text x='350' y='370' class='txt'>8 W.</text><text x='500' y='370' class='txt'>6 Mon.</text><text x='650' y='370' class='txt'>12 Mon.</text><text x='350' y='390' class='txt' text-anchor='middle'>Zeit nach Infektion</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q100,50 150,50 Q200,50 250,350' fill='none' stroke='red' stroke-width='3' /><text x='120' y='40' class='txt' fill='red'>HBsAg</text><path d='M60,350 Q100,100 140,100 Q180,100 220,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='140' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q150,80 200,80 Q300,80 350,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='70' class='txt' fill='purple'>Anti-HBc-IgM</text><path d='M80,350 Q150,120 200,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Gesamt</text><path d='M280,350 Q350,150 400,150 L750,150' fill='none' stroke='green' stroke-width='3' /><text x='600' y='140' class='txt' fill='green'>Anti-HBs</text><path d='M240,350 Q300,200 350,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe</text><text x='265' y='300' class='txt' font-size='12' fill='gray'>Fensterphase</text></svg>",
          caption: 'Serologischer Verlauf der akuten HBV-Infektion (Ausheilung)',
          type: 'Diagram'
        }
      ]
    },
    {
      id: 'hcv',
      name: 'Hepatitis C',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-C-Virus</i> (HCV)', gram: 'ssRNA (+), Flaviviridae (Gattung Hepacivirus)', shape: 'sphärisch, umhülltes Virus (50 nm)' },
      epidemiology: {
        incidence: 'Weltweit ~58–71 Millionen Chroniker; ~290.000 Todesfälle jährlich durch Zirrhose und HCC.',
        risk_groups: ['Personen mit i.v.-Drogenkonsum (Nadeltausch)', 'Empfänger von Bluttransfusionen (vor 1992)', 'Medizinisches Personal (Nadelstichverletzung)', 'Unsterile Tätowierungen, Piercings oder medizinische Eingriffe', 'Männer, die Sex mit Männern haben (MSM, bes. mit HIV-Koinfektion)'],
        seasonality: 'Keine',
        transmission: 'Parenteral (blutübertragbar — dominant), sexuell (seltener, höher bei MSM/HIV), vertikal (Mutter-Kind ~5%).'
      },
      pathomechanism: {
        steps: [
          'Zytoplasmatische Replikation: HCV repliziert ausschließlich im Zytoplasma der Hepatozyten. Es bildet keine Zellkern-dDNA oder cccDNA — daher ist die Infektion direkt angreifbar und mit DAAs biologisch VOLLSTÄNDIG ERADIKIERBAR (heilbar!).',
          'Quasispezies & Immunevasion: Die virale NS5B-RNA-Polymerase besitzt keine Korrekturlesefunktion (Proofreading), was zu kontinuierlichen Mutationen (Quasispezies) und Immunevasion führt.',
          'Hohe Chronifizierung & Fibrogenese: 75–85% der Infizierten entwickeln eine chronische Hepatitis. Anhaltende Entzündung aktiviert hepatische Sternzellen, was zu konfluierender Fibrose, Zirrhose (bei 20–30% in 20–30 Jahren) und HCC führt.'
        ],
        virulence_factors: ['NS3/4A-Protease', 'NS5A-Komplexprotein', 'NS5B-RNA-Polymerase', 'Extrem hohe Quasispezies-Variabilität']
      },
      clinical: {
        incubation: '14–180 Tage (Durchschnitt 6–8 Wochen)',
        onset: 'Schleichend / Symptomarm',
        symptoms: [
          { name: 'Akutphase', description: '80% asymptomatisch ("stiller Killer"). Milde Müdigkeit, Anorexie, anikterischer Verlauf. Spontane Ausheilung tritt nur in 15–25% ein.', severity: 'mild' },
          { name: 'Chronische Phase', description: 'Jahrzehntelang symptomatisch unauffällig. Leitsymptom ist chronische Müdigkeit, kognitive Beeinträchtigung ("Brain Fog"). Im Spätstadium treten Zirrhosekomplikationen auf.', severity: 'moderate' },
          { name: 'Extrahepatische Manifestationen (EASL hervorgehoben)', description: 'Gemischte Typ II/III kryoglobulinämische Vaskulitis (Purpura, Arthralgie, Glomerulonephritis), B-Zell-Non-Hodgkin-Lymphom, Porphyria cutanea tarda (PCT), Lichen planus, Insulinresistenz und Typ-2-Diabetes.', severity: 'severe' }
        ],
        physical_exam: [
          'Völlig unauffälliger Befund im Früh-/Zwischenstadium',
          'Zeichen der Zirrhose (Palmarerythem, Spider naevi, Splenomegalie, Aszites, Ikterus) im Spätstadium',
          'Unterschenkelpurpura oder Ulzera bei Kryoglobulinämie'
        ],
        complications: [
          'Chronische Hepatitis C (entwickelt sich bei 75–85%!)',
          'Leberzirrhose (20–30% in 20–30 Jahren)',
          'Hepatozelluläres Karzinom (HCC — 1–4% jährliches Risiko bei Zirrhose)',
          'Extrahepatische Komplikationen: Kryoglobulinämische Vaskulitis, B-Zell-Lymphom, Glomerulonephritis, T2DM'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT / AST', finding: 'Schwankend erhöht oder völlig normal', interpretation: 'Vorliegen einer Leberentzündung; normale ALT schließt fortgeschrittene Fibrose NICHT aus!' },
          { test: 'Thrombozyten & APRI / FIB-4-Index', finding: 'Thrombozytopenie, hoher FIB-4 (>3,25)', interpretation: 'Verdacht auf fortgeschrittene Fibrose / Zirrhose' }
        ],
        microbiology: [
          { test: 'Anti-HCV (ELISA)', finding: 'Positiv', significance: 'Nachweis der Exposition (unterscheidet nicht zwischen aktiver und ausgeheilter Infektion)' },
          { test: 'HCV-RNA (Quantitative RT-PCR)', finding: 'Positiv (IU/mL)', significance: 'Beweist AKTIVE Infektion (obligatorischer Folgetest bei allen Anti-HCV+ Patienten!)' },
          { test: 'Genotypisierung (1–6)', finding: 'Genotypbestimmung', significance: 'Historische Bedeutung; vor vereinfachter pangenotypischer DAA-Therapie nicht mehr zwingend erforderlich' },
          { test: 'Fibrosestadieneinteilung (EASL)', finding: 'FibroScan (Transient Elastography) / FIB-4', significance: 'Essenziell zur Erkennung einer Zirrhose (F4) wegen lebenslanger Post-SVR-HCC-Früherkennungspflicht' }
        ],
        differential: [
          { disease: 'Hepatitis B und D Koinfektion', distinguishing: 'Serologie (HBsAg, Anti-HBc, Anti-HDV, HBV-DNA)' },
          { disease: 'Alkoholische Lebererkrankung', distinguishing: 'Anamnese, AST/ALT >2, deutlicher Anstieg von GGT und MCV' },
          { disease: 'Metabolische steatotische Lebererkrankung (MASLD / MASH)', distinguishing: 'Metabolisches Syndrom, sonographische Steatose, Histologie' },
          { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA), erhöhtes Serum-IgG' },
          { disease: 'Hämochromatose', distinguishing: 'Hohes Serumeisen, Ferritin und Transferrinsättigung (>45%), HFE-Genmutation' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 Tabletten (300 mg / 120 mg) p.o. 1x täglich mit einer Mahlzeit', duration: '8 Wochen', note: 'Pangenotypische DAA. Therapienaive Patienten ohne Zirrhose UND mit kompensierter Zirrhose (Child-Pugh A) benötigen NUR 8 WOCHEN!' },
            { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 Tablette (400 mg / 100 mg) p.o. 1x täglich', duration: '12 Wochen', note: 'Pangenotypische DAA. Sowohl für Nicht-Zirrhotiker als auch für kompensierte Zirrhotiker geeignet.' }
          ]
        },
        targeted: 'EASL-Leitlinie: Pangenotypische DAA (Direct-Acting Antiviral)-Therapie für ALLE virämischen (HCV-RNA+) Patienten. Ziel ist das dauerhafte virologische Ansprechen (SVR12 = nicht nachweisbare HCV-RNA 12 Wochen nach Therapieende), was die endgültige biologische HEILUNG darstellt (>95–99% Erfolgsrate!).',
        supportive: ['Wechselwirkungen vor Beginn prüfen (www.hep-druginteractions.org)', 'Strenges Alkoholverbot', 'Leberschonende Lebensweise'],
        prevention: ['Kein Impfstoff verfügbar (hohe virale Variabilität)', 'Obligatorisches PCR-Screening von Blutprodukten und Organspendern', 'Schadensminimierung (Nadeltausch für PWID)', 'Safer Sex'],
        guidelines: [
          'Behandlungsindikation (EASL 2020/2023): ALLE Patienten mit chronischer HCV-Infektion müssen behandelt werden, unabhängig vom Fibrosestadium. Ausnahmen: Schwangerschaft (DAA in der Schwangerschaft nicht zugelassen) oder sehr kurze non-hepatische Lebenserwartung.',
          'Pangenotypische Regimes (Vereinfachte Behandlung): Glecaprevir/Pibrentasvir (8 Wochen) oder Sofosbuvir/Velpatasvir (12 Wochen).',
          'Strenge Kontraindikation bei dekompensierter Zirrhose (Child-Pugh B/C): Proteaseinhibitor-haltige Regimes (Glecaprevir, Grazoprevir, Voxilaprevir) sind wegen schwerer Hepatotoxizität ABSOLUT KONTRAINDIZIERT! Bei dekompensierter Zirrhose: Sofosbuvir/Velpatasvir + Ribavirin (RBV) für 12 Wochen.',
          'Post-SVR-HCC-Früherkennungspflicht: Lag vor der Behandlung eine F3 (fortgeschrittene Fibrose) oder F4 (Zirrhose) vor, bleibt auch nach Erreichen der SVR (Heilung) eine LEBENSLANGE HCC-Früherkennung (Sonographie alle 6 Monate) obligatorisch!'
        ],
        references: [
          'EASL Recommendations on Treatment of Hepatitis C 2020 update. J Hepatol. 2020;73(5):1170-1218.',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ]
      },
      prognosis: {
        mortality: 'Hervorragend (>95–99% SVR12 = Heilung durch DAA); schlechter bei dekompensierter Zirrhose oder fortgeschrittenem HCC',
        prognostic_scores: ['FIB-4 / APRI-Index', 'Child-Pugh- und MELD-Score (bei Zirrhose)'],
        factors: 'Fibrosestadium vor Behandlung, Vorliegen einer Dekompensation, HIV/HBV-Koinfektion, Alkoholkonsum'
      },
      gallery: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='150' y='370' class='txt'>2 Mon.</text><text x='250' y='370' class='txt'>6 Mon.</text><text x='450' y='370' class='txt'>1 Jahr</text><text x='650' y='370' class='txt'>Jahre...</text><text x='350' y='390' class='txt' text-anchor='middle'>Zeit nach Infektion</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HCV-RNA</text><path d='M100,350 Q200,100 300,100 L750,100' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='90' class='txt' fill='blue'>Anti-HCV</text><path d='M100,350 Q150,150 200,250 T300,200 T400,250 T500,200 T600,250 T700,200' fill='none' stroke='orange' stroke-width='2' /><text x='600' y='190' class='txt' fill='orange'>ALT (Schwankend)</text></svg>",
          caption: 'Serologischer Verlauf der chronischen Hepatitis C',
          type: 'Diagram'
        }
      ]
    },
    {
      id: 'hdv',
      name: 'Hepatitis D',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-D-Virus</i> (HDV / Gattung Deltavirus)', gram: 'ssRNA (-), defektes Satellitenvirus', shape: 'sphärisch (36 nm), zirkuläre RNA in HBsAg-Hülle' },
      epidemiology: {
        incidence: 'Weltweit sind ~5% der HBsAg-positiven Patienten (12–20 Millionen Menschen) mit HDV koinfiziert.',
        risk_groups: ['Chronisch HBV-infizierte Patienten (HBsAg-Träger)', 'Personen mit i.v.-Drogenkonsum (PWID)', 'Risikoreiches Sexualverhalten / MSM', 'Personen aus endemischen Gebieten (Mittelmeerraum, Osteuropa, Amazonasbecken)'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Blut), sexuell, perkutan. Infiziert und vermehrt sich AUSSCHLIESSLICH bei gleichzeitigem Vorhandensein von Hepatitis-B-Virus (HBsAg)!'
      },
      pathomechanism: {
        steps: [
          'Defektes Satellitenvirus: HDV kann keine eigene Hüllprotein-Synthese durchführen. Es nutzt das von Hepatitis B produzierte HBsAg (über den NTCP-Rezeptor) zum Eintritt, Zusammenbau und zur Virionenfreisetzung.',
          'Koinfektion (gleichzeitige akute HBV + HDV-Infektion): Verursacht typischerweise eine schwere akute Hepatitis mit hohem Risiko für fulminanten Verlauf, führt jedoch selten zur Chronifizierung (<5%).',
          'Superinfektion (HDV infiziert chronischen HBV-Träger): Wird in >80–90% chronisch. Dies ist die AGGRESSIVSTE und AM SCHNELLSTEN PROGREDIENTE Form menschlicher Virushepatitiden! 70–80% entwickeln innerhalb von 5–10 Jahren eine Zirrhose mit extrem hohen Raten von HCC und Dekompensation.'
        ],
        virulence_factors: ['HDAg (Small und Large Hepatitis Delta Antigen)', 'Nutzung der HBsAg-Hülle', 'Direkte zytopathische und immunvermittelte Hepatozytotoxizität']
      },
      clinical: {
        incubation: '30–60 Tage (kürzer bei Superinfektion)',
        onset: 'Plötzlich / Akuter Schub',
        symptoms: [
          { name: 'Superinfektion / Akuter Schub', description: 'Plötzliche, dramatische Verschlechterung bei bekanntem chronischem HBV-Träger: ausgeprägter Ikterus, schwere Abgeschlagenheit, Übelkeit, Schmerzen im rechten Oberbauch.', severity: 'severe' },
          { name: 'Rasch progrediente Zirrhose', description: 'Zeichen der portalen Hypertonie (Aszites, Varizenblutung, Splenomegalie) treten auffällig früh im jungen Erwachsenenalter auf.', severity: 'severe' }
        ],
        physical_exam: [
          'Ikterus (ausgeprägte Skleren- und Hautgelbsucht)',
          'Druckschmerzhafte Hepatomegalie',
          'Splenomegalie, Spider naevi, Aszites, Asterixis (Frühzeichen von Zirrhose und Dekompensation)'
        ],
        complications: [
          'Fulminantes Leberversagen (ALF) bei akuter Superinfektion',
          'Extrem rasche Progression zur Leberzirrhose (innerhalb von 5–10 Jahren)',
          'Hepatozelluläres Karzinom (HCC — 3-fach höheres Risiko als bei HBV-Monoinfektion)',
          'Frühe hepatische Dekompensation und Letalität'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT / AST', finding: 'Stark erhöht oder fluktuierende Anstiege', interpretation: 'Schwere nekroinflammatorische Aktivität' },
          { test: 'Bilirubin & INR', finding: 'Progressiv steigendes Bilirubin, INR >1,5', interpretation: 'Rasche Verschlechterung der Leberfunktion, Drohen eines akuten Leberversagens' }
        ],
        microbiology: [
          { test: 'Anti-HDV Gesamt (IgG/IgM ELISA)', finding: 'Positiv', significance: 'EASL-Anforderung: ALLE HBsAg-positiven Patienten müssen MINDESTENS EINMAL auf Anti-HDV getestet werden!' },
          { test: 'HDV-RNA (Quantitative RT-PCR)', finding: 'Positiv (IU/mL)', significance: 'Nachweis aktiver HDV-Replikation; Eckpfeiler für Diagnose und Therapiekontrolle' },
          { test: 'HBsAg & Anti-HBc-IgM', finding: 'HBsAg+; Anti-HBc-IgM+ (Koinfektion) oder Anti-HBc-IgM- (Superinfektion)', significance: 'Unterscheidet Koinfektion von Superinfektion' }
        ],
        differential: [
          { disease: 'Akute HBV-Reaktivierung / Schub (ohne HDV)', distinguishing: 'HDV-RNA negativ, Anti-HDV negativ; plötzlicher HBV-DNA-Anstieg' },
          { disease: 'Andere akute Superinfektionen (HAV, HEV, HCV)', distinguishing: 'Anti-HAV-IgM, Anti-HEV-IgM, HCV-RNA-Testung' },
          { disease: 'Arzneimittelinduzierte Leberschädigung (DILI) bei HBV-Träger', distinguishing: 'Anamnese hepatotoxischer Substanzen, HDV-RNA negativ' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Bulevirtid (Hepcludex)', dose: '2 mg s.c. 1x täglich (Selbstinjektion)', duration: 'Langzeit-Erhaltungstherapie (Jahre)', note: 'EASL-Erstliniensubstanz: Eintrittsinhibitor-Lipopeptid (NTCP-Rezeptorblocker). Indiziert bei kompensierter Lebererkrankung mit HDV-RNA-Positivität.' },
            { drug: 'Peg-IFN-alfa-2a', dose: '180 mcg s.c. wöchentlich', duration: '48 Wochen', note: 'Off-Label-Alternative (falls Bulevirtid nicht verfügbar); niedrige dauerhafte Ansprechrate (~20-30%).' }
          ]
        },
        targeted: 'EASL-Leitlinie 2023: Bulevirtid 2 mg s.c. täglich als Monotherapie oder kombiniert mit einem Nukleos(t)idanalogon (NA). Da Bulevirtid nicht direkt auf die HBV-cccDNA wirkt, MUSS die zugrundeliegende HBV-NA-Behandlung (Tenofovir/Entecavir) fortgeführt werden!',
        supportive: ['Strenges Alkoholverbot', 'Regelmäßige HCC-Früherkennung (Sonographie + AFP alle 6 Monate)', 'Frühzeitiges Konsil zur Lebertransplantation'],
        prevention: ['Hepatitis-B-Impfung (da HDV-Vermehrung HBsAg erfordert)', 'Sichere Nadelhygiene und Blut-Screening'],
        guidelines: [
          'Universelles Screening (EASL 2023): Jeder HBsAg-positive Patient muss mindestens einmal auf Anti-HDV-Antikörper getestet werden!',
          'Behandlungsindikation (Bulevirtid): Chronisch HDV-RNA-positive erwachsene Patienten mit kompensierter Lebererkrankung (einschließlich Zirrhose).',
          'Dosierung und Dauer: Bulevirtid 2 mg s.c. täglich. Die Therapie sollte fortgeführt werden, solange ein klinischer und virologischer Nutzen besteht (über Jahre).',
          'Monitoring: HDV-RNA, ALT, HBsAg, Gallensäurespiegel (Bulevirtid erhöht die Gallensäuren im Serum durch NTCP-Inhibition; dies ist eine bekannte und physiologische Wirkung).'
        ],
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis Delta Virus. J Hepatol. 2023;79(2):433-460.',
          'European Medicines Agency (EMA). Hepcludex (bulevirtide) Fachinformation.'
        ]
      },
      prognosis: {
        mortality: 'Höchste Mortalität unter den Virushepatitiden; unbehandeltes 10-Jahres-Zirrhoserisiko >70%, hohe leberbedingte Letalität',
        prognostic_scores: ['BEHIND-Score', 'Child-Pugh- und MELD-Score'],
        factors: 'Superinfektion vs. Koinfektion, HDV-RNA-Persistenz, Fibrosestadium, Bulevirtid-Therapieansprechen'
      }
    },
    {
      id: 'hev',
      name: 'Hepatitis E',
      pathogen: { type: 'Virus', name: '<i>Hepatitis-E-Virus</i> (HEV / Orthohepevirus A)', gram: 'ssRNA (+), Hepeviridae (Orthohepevirus A)', shape: 'ikosaedrisch, unbehüllt (Stuhl) / mit Quasihülle (eHEV, Blut)' },
      epidemiology: {
        incidence: 'Häufigste Ursache akuter Virushepatitiden weltweit. Wasserübertragene Epidemien in Entwicklungsländern (Genotypen 1, 2); Zoonose in Europa und Nordamerika (Genotypen 3, 4).',
        risk_groups: ['Konsumenten von rohem/unzureichend gegartem Schweine- oder Wildfleisch (Mettwurst, Leber)', 'Empfänger solider Organtransplantate (SOT)', 'HIV-infizierte Patienten (CD4 <200/µL)', 'Patienten unter Chemotherapie oder Biologikatherapie (Anti-TNF, Rituximab)', 'Schwangere (fulminantes Risiko bei Genotypen 1/2)', 'Patienten mit chronischer Lebererkrankung / Zirrhose'],
        seasonality: 'Regenzeit in den Tropen (Wasserkontamination); keine Saisonalität in gemäßigten Breiten',
        transmission: 'Zoonotisch (unzureichend gegartes Schweine-, Wildschwein- und Hirschfleisch — G3, G4), fäkal-oral (kontaminiertes Trinkwasser — G1, G2), Bluttransfusion, Organtransplantation, vertikal (Mutter-Kind).'
      },
      pathomechanism: {
        steps: [
          'Übertragung & Systemischer Eintritt: Fäkal-oral (kontaminiertes Wasser — Genotypen 1, 2) oder zoonotisch (unzureichend gegartes Fleisch — Genotypen 3, 4).',
          'Hepatozytenschädigung: Nach der Hepatozyteninfektion verursacht eine immunvermittelte T-Zell-Antwort Nekrosen und lobuläre Entzündungen.',
          'Schwangerschaft fulminanter Verlauf (Genotypen 1, 2): Im 3. Trimester führen hohe Progesteron-/Östrogenspiegel, veränderte Th2-Immunantwort und Plazenta-Leber-Achsen-Schädigung zu fulminantem Leberversagen (20–25% Letalität).',
          'Chronifizierung (EASL-Definition): Bei immunsupprimierten Patienten (SOT-Empfänger, HIV, Chemotherapie, Anti-TNF/Rituximab) wird eine Genotyp-3-Infektion nicht eliminiert. Eine HEV-RNA-Persistenz >3 Monate definiert eine CHRONISCHE HEV-Infektion, die innerhalb von 2–5 Jahren zur Zirrhose führt.'
        ],
        virulence_factors: ['ORF3-Protein (Virusfreisetzung und Immunevasion)', 'ORF2-Kapsidprotein', 'eHEV-Quasihülle im Serum']
      },
      clinical: {
        incubation: '15–60 Tage (Durchschnitt 40 Tage)',
        onset: 'Plötzlich oder Schleichend',
        symptoms: [
          { name: 'Akute ikterische Hepatitis', description: 'Fieber, Anorexie, Übelkeit, Schmerzen im rechten Oberbauch, Gelbsucht, dunkler Urin.', severity: 'moderate' },
          { name: 'Neurologische extrahepatische Symptome (EASL hervorgehoben)', description: 'Guillain-Barré-Syndrom, Neuralgische Schulteramyotrophie (Parsonage-Turner-Syndrom), Enzephalitis, Myelitis.', severity: 'severe' },
          { name: 'Schwangerschaftskomplikationen (G1, G2)', description: 'Fulminantes Leberversagen, Frühgeburt, fötaler Tod.', severity: 'severe' },
          { name: 'Chronische HEV-Infektion (G3 bei Immunsupprimierten)', description: 'Oft asymptomatisch oder milde Müdigkeit, persistierender Leberenzymanstieg, rasch progrediente Zirrhose.', severity: 'severe' }
        ],
        physical_exam: [
          'Ikterus (Skleren, Haut)',
          'Hepatomegalie (druckschmerzhafter Leberrand)',
          'Periphere Paresen, Muskelschwäche, Reflexausfälle bei neurologischen Manifestationen'
        ],
        complications: [
          'Fulminantes Leberversagen (ALF): Bis zu 20–25% Letalität bei Schwangeren mit G1/G2-Infektion.',
          'Acute-on-chronic Leberversagen (ACLF): Schwere Dekompensation bei Patienten mit vorbestehender Zirrhose.',
          'Chronische Hepatitis E (EASL: HEV-RNA-Persistenz >3 Monate): Führt bei Transplantatempfängern, HIV-Patienten und Chemotherapiepatienten zur raschen Zirrhose.',
          'Neurologische Manifestationen: Guillain-Barré-Syndrom, Neuralgische Schulteramyotrophie (Parsonage-Turner).',
          'Renale Komplikationen: Membranoproliferative Glomerulonephritis (MPGN), membranöse Nephropathie.'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Leberenzyme (ALT, AST)', finding: 'In der Akutphase stark erhöht; bei chronischen Fällen milde fluktuierende Erhöhung', interpretation: 'Hepatozelluläre Schädigung' },
          { test: 'Bilirubin & AP/GGT', finding: 'In der ikterischen Phase erhöht', interpretation: 'Cholestase' }
        ],
        imaging: [
          { modality: 'Abdominelle Sonographie', finding: 'Hepatomegalie; bei chronischen Fällen Zeichen der Zirrhose (Oberflächennodularität, Splenomegalie, Aszites)', significance: 'Beurteilt strukturelle und vaskuläre Veränderungen' }
        ],
        microbiology: [
          { test: 'Anti-HEV-IgM & IgG (ELISA)', finding: 'Anti-HEV-IgM positiv bei Immunkompetenten', significance: 'Serologischer Nachweis einer akuten HEV-Infektion' },
          { test: 'HEV-RNA (RT-PCR in Blut/Stuhl)', finding: 'Quantitative PCR positiv', significance: 'OBLIGATORISCH bei Immunsupprimierten (wo die Serologie falsch-negativ sein kann!) und zur Diagnose der chronischen HEV (>3 Monate)' }
        ],
        differential: [
          { disease: 'Andere akute Virushepatitiden (HAV, HBV, HCV, CMV, EBV)', distinguishing: 'Identisches Beschwerdebild; Differenzierung durch spezifische Serologie und PCR-Assays' },
          { disease: 'Arzneimittelinduzierte Leberschädigung (DILI)', distinguishing: 'Häufiger Mimetiker; EASL-Leitlinien empfehlen HEV-Testung (Anti-HEV-IgM & HEV-RNA) bei ALLEN DILI-Verdachtsfällen!' },
          { disease: 'Autoimmunhepatitis', distinguishing: 'Autoantikörper (ANA, ASMA), erhöhtes Serum-IgG, Leberbiopsie' },
          { disease: 'Ischämische / Toxische Hepatitis', distinguishing: 'Anamnese von Kreislaufkollaps, Knollenblätterpilz- oder Paracetamol-Toxizität' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive Betreuung', dose: '-', duration: '-', note: 'Bei Immunkompetenten in der Regel selbstlimitierend; spezifisches Virostatikum meist nicht erforderlich' }
          ],
          inpatient: [
            { drug: 'Ribavirin (Off-Label)', dose: '600–1000 mg/Tag p.o.', duration: '21–30 Tage', note: 'Zur Vermeidung eines Acute-on-chronic Leberversagens (ACLF) oder bei schwerer akuter HEV' }
          ],
          icu: [
            { drug: 'Ribavirin-Monotherapie', dose: '600–1000 mg/Tag (eGFR-adaptiert)', duration: '12 Wochen (3 Monate)', note: 'Erstlinienbehandlung der chronischen HEV-Infektion bei Immunsupprimierten (EASL CPG)' }
          ]
        },
        targeted: 'EASL-Algorithmus bei chronischer HEV: 1. Immunsuppression reduzieren (falls möglich, ~30% Ausheilung). 2. Ribavirin-Monotherapie (600–1000 mg/Tag) für 12 Wochen. 3. Falls HEV-RNA in Woche 12 positiv, Ribavirin auf insgesamt 24 Wochen (6 Monate) verlängern. 4. Peg-Interferon-alfa NUR bei Lebertransplantatempfängern erwägen (kontraindiziert bei Nieren-/Herztransplantation!).',
        supportive: ['Flüssigkeits- und Elektrolythaushalt ausgleichen', 'Enge Überwachung von Schwangeren und Zirrhosepatienten', 'Spezifisches Management neurologischer Komplikationen'],
        prevention: ['Gründliches Durchgaren von Schweine- und Wildfleisch sowie Leber (>70°C)', 'HEV-RNA-Screening von Blutprodukten für Hochrisikopopulationen', 'HEV 239-Impfstoff (Hecolin) derzeit nur in China zugelassen'],
        guidelines: [
          'Diagnostik bei Immunsuppression: Serologie ist unzuverlässig (falsch-negativ); HEV-RNA-Testung (RT-PCR) ist obligatorisch.',
          'Ausschluss von DILI: Testung auf HEV (Anti-HEV-IgM und HEV-RNA) ist bei allen Fällen einer vermuteten arzneimittelinduzierten Leberschädigung (DILI) obligatorisch.',
          'Definition der chronischen HEV (EASL): Persistenz von HEV-RNA über >3 Monate bei Transplantatempfängern oder Immunsupprimierten.',
          'Therapie der chronischen HEV: 1. Immunsuppression reduzieren. 2. Ribavirin-Monotherapie für 12 Wochen (falls nötig auf 24 Wochen verlängern).',
          'Schwere akute HEV / ACLF: Erwägung von Ribavirin (600–1000 mg/Tag) für 21–30 Tage zur Vermeidung eines Leberversagens.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis E Virus Infection (Journal of Hepatology).',
          'RKI & WHO. Hepatitis E Factsheet.'
        ]
      },
      prognosis: {
        mortality: 'Allgemein niedrig (<1%); bis zu 20–25% bei Schwangeren (G1/G2); Zirrhoseprogression bei chronischer HEV',
        factors: 'Schwangerschaft (G1/G2), Ausmaß der Immunsuppression, vorbestehende chronische Lebererkrankung/Zirrhose'
      }
    },
    {
      id: 'hgv',
      name: 'Hepatitis-G-Virus / Human Pegivirus 1 (HPgV-1 / GBV-C)',
      pathogen: { type: 'Virus', name: '<i>Human Pegivirus 1</i> (HPgV-1, früher GBV-C / HGV)', gram: 'ssRNA (+), Flaviviridae (Gattung Pegivirus)', shape: 'sphärisch, umhüllt' },
      epidemiology: {
        incidence: 'Weltweit verbreitet; 1–5% der gesunden Blutspender sind persistent virämisch. 20–50% der Bevölkerung besitzen Anti-E2-Antikörper nach durchgemachter Infektion.',
        risk_groups: ['Personen mit i.v.-Drogenkonsum (PWID)', 'Hämodialysepatienten', 'Empfänger mehrfacher Blutprodukte', 'HIV- und HCV-infizierte Personen', 'Personen mit risikoreichem Sexualverhalten'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Blut, Nadelstich, Blutprodukte), sexuell, vertikal (Mutter-Kind)'
      },
      pathomechanism: {
        steps: [
          'Lymphotropes Virus: Repliziert in T- und B-Lymphozyten sowie in peripheren mononukleären Blutzellen (PBMC). KEIN hepatotropes Virus!',
          'Schädigt Hepatozyten nicht; verursacht keinen zytopathischen Effekt oder histologische Leberentzündung.',
          'Übt bei HIV-1-Koinfektion günstige immunmodulatorische Effekte aus: herunterreguliert HIV-Korezeptoren (CD4, CXCR4, CCR5) und hochreguliert inhibierende Chemokine (SDF-1, RANTES, MIP-1α/β).',
          'Minder T-Zell-Hyperaktivierung und Apoptose, verzögert dadurch den CD4+-Zellabfall und die HIV/AIDS-Progression.'
        ],
        virulence_factors: ['E2-Hüllglykoprotein (Zelleintritt, Immunmodulation)', 'NS5A-Nichtstrukturprotein']
      },
      clinical: {
        incubation: '14–60 Tage, klinisch irrelevant',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Asymptomatische Trägerschaft', description: 'Verursacht eigenständig weder akute noch chronische Hepatitis, Leberzirrhose oder Leberversagen. "Hepatitis G" ist eine historische Fehlbezeichnung.', severity: 'mild' }
        ],
        physical_exam: ['Körperliche Untersuchung völlig unauffällig (kein Ikterus, keine Hepatomegalie)'],
        complications: ['KEINE leberbezogenen Komplikationen.', 'Bei HIV-1-Koinfektion verzögert eine persistierende HPgV-1-Virämie die AIDS-Progression und verbessert das Überleben (protektiver Effekt).']
      },
      diagnostics: {
        laboratory: [{ test: 'Leberenzyme (ALT, AST), Bilirubin, AP, GGT', finding: 'Völlig im Normbereich', interpretation: 'Keine hepatozelluläre Schädigung' }],
        imaging: [{ modality: 'Abdominelle Sonographie', finding: 'Normales Leberparenchym und Gallengangssystem', significance: 'Schließt andere Pathologien aus' }],
        microbiology: [
          { test: 'HPgV-1 RT-PCR', finding: 'RNA-Nachweis', significance: 'Forschungs-/Spezialkontext; bestätigt aktive Virämie' },
          { test: 'Anti-E2-Antikörper', finding: 'Positiv', significance: 'Zeigt Klärung der Virämie und durchgemachte Infektion an' }
        ]
      },
      differential: [
        { disease: 'Echte hepatotrope Viren (HBV, HCV, HAV, HEV, HDV)', distinguishing: 'Serologie und PCR-Assays (HBsAg, Anti-HCV, HCV-RNA etc.)' },
        { disease: 'Nicht-infektiöse Lebererkrankungen (DILI, NAFLD/NASH, Autoimmunhepatitis)', distinguishing: 'Ausschlussdiagnose, Autoantikörper, Toxikologie' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Benötigt KEINE spezifische antivirale Therapie. Keine hepatologische Behandlungsindikation.',
        supportive: ['Keine klinische Intervention erforderlich.'],
        prevention: ['Routinescreening von Blutspendern auf HPgV-1 nicht indiziert. Standard-Infektionskontrolle.'],
        references: [
          'Stapleton JT, et al. HPgV-1 (GBV-C) infection and pathogenesis. Nat Rev Microbiol.',
          'EASL & CDC Clinical Guidelines on Viral Hepatitis misnomers and Anelloviridae/Pegivirus.'
        ]
      },
      prognosis: {
        mortality: 'Nicht-pathogen für die Leber (null Lebermortalität).',
        prognostic_scores: [],
        factors: 'Bei HIV-Koinfektion ist die HPgV-1-Persistenz ein günstiger Prognosefaktor.'
      }
    },
    {
      id: 'ttv',
      name: 'Torque-Teno-Virus (TTV)',
      pathogen: { type: 'Virus', name: '<i>Torque teno virus</i> (TTV)', gram: 'ssDNA (-/+), Anelloviridae (Gattung Alphatorquevirus)', shape: 'klein (28-32 nm), unbehüllt, ikosaedrisch' },
      epidemiology: {
        incidence: 'Ubiquitär: bei >70–90% der Bevölkerung als persistierende Virämie vorhanden. Grundlegender Bestandteil des menschlichen kommensalen Viroms.',
        risk_groups: ['Allgemeinbevölkerung', 'Empfänger solider Organtransplantate (Leber, Niere, Herz, Lunge)', 'Immunsupprimierte Patienten'],
        seasonality: 'Keine',
        transmission: 'Tröpfcheninfektion, fäkal-oral, parenteral (Blut), sexuell, vertikal und über Muttermilch'
      },
      pathomechanism: {
        steps: [
          'Systemische Replikation: Im Knochenmark, in PBMCs, T- und B-Lymphozyten, Leber- und Lungengewebe nachweisbar.',
          'Nicht-zytopathisch: Verursacht keine Hepatozytennekrose, histologische Entzündung oder Leberfunktionsstörung.',
          'Immungleichgewicht: Die TTV-DNA-Plasmalast korreliert invers mit der zellulären Immunkompetenz des Wirtes (T-Zell-Funktion).',
          'Biomarker bei Organtransplantation: Hohe TTV-Last zeigt Über-Immunsuppression an (Risiko opportunistischer Infektionen wie CMV, BKV, Pilze); niedrige TTV-Last zeigt Unter-Immunsuppression an (Risiko einer Abstoßungsreaktion/Rejection).'
        ],
        virulence_factors: ['ORF1-Kapsidprotein (hohe genetische Variabilität, Immunevasion)']
      },
      clinical: {
        incubation: 'Klinisch nicht anwendbar (lebenslange kommensale Persistenz)',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Kommensaler Zustand', description: 'Verursacht weder akute noch chronische Hepatitis oder systemische Erkrankung.', severity: 'mild' }
        ],
        physical_exam: ['Körperliche Untersuchung völlig unauffällig.'],
        complications: ['Nicht leberpathogen. Die quantitative TTV-DNA-Plasmalast dient als verlässlicher Biomarker zur Steuerung der individuellen immunsuppressiven Therapie bei Transplantatempfängern.']
      },
      diagnostics: {
        laboratory: [{ test: 'Leberfunktionswerte (ALT, AST, Bilirubin)', finding: 'Normal', interpretation: 'Keine Leberschädigung' }],
        imaging: [{ modality: 'Sonographie', finding: 'Normal', significance: 'Keine Pathologie' }],
        microbiology: [
          { test: 'Quantitative Real-Time PCR (TTV-DNA-Kopienzahl)', finding: 'DNA-Nachweis (Kopien/mL)', significance: 'Surrogatbiomarker zur Überwachung der immunsuppressiven Last bei Transplantatempfängern' }
        ]
      },
      differential: [
        { disease: 'Klinische Hepatitis-Syndrome (HAV-HEV, EBV, CMV)', distinguishing: 'Serologie, erweitertes PCR-Panel' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Benötigt KEINE antivirale Therapie.',
        supportive: ['Feineinstellung der Immunsuppressiva-Dosen bei Transplantatempfängern basierend auf TTV-DNA-Spiegeln (protokollgestützt).'],
        prevention: ['Aufgrund ubiquitärer Verbreitung weder möglich noch erforderlich.']
      },
      prognosis: {
        mortality: 'Physiologische Viromkomponente (null Mortalität).',
        prognostic_scores: [],
        factors: 'TTV-DNA-Kopienzahl bei Transplantatempfängern korreliert mit Infektions- und Abstoßungsrisiko.'
      }
    },
    {
      id: 'senv',
      name: 'SEN-Virus (SENV-D / SENV-H)',
      pathogen: { type: 'Virus', name: '<i>SEN virus</i> (Stämme SENV-D und SENV-H)', gram: 'ssDNA (-/+), Familie Anelloviridae', shape: 'kleines, unbehülltes zirkuläres DNA-Virus' },
      epidemiology: {
        incidence: 'Bei 10–20% gesunder Blutspender und bei 40–60% von Transfusionspatienten, Hämodialysepatienten und PWID nachweisbar.',
        risk_groups: ['Transfusionsempfänger', 'Hämodialysepatienten', 'Personen mit i.v.-Drogenkonsum (PWID)', 'Allgemeinbevölkerung'],
        seasonality: 'Keine',
        transmission: 'Parenteral (Transfusion, Blut, Nadelstich), nicht-parenteral (fäkal-oral, vertikal)'
      },
      pathomechanism: {
        steps: [
          'Übertragung über Blut, etabliert persistierende Virämie.',
          'DNA in Hepatozyten und peripheren Zellen nachweisbar, verursacht aber KEINE Zytopathologie oder Nekroinflammation.',
          'Sorgfältige prospektive und retrospektive klinische Studien zeigten, dass SENV das Risiko für Posttransfusionshepatitis, kryptogene Hepatitis, Zirrhose oder Leberfunktionsstörung NICHT erhöht.',
          'Kommensales Element des menschlichen Anelloviroms.'
        ],
        virulence_factors: ['Keine nachgewiesenen Virulenzfaktoren.']
      },
      clinical: {
        incubation: 'Nicht anwendbar',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Asymptomatische Trägerschaft', description: 'Verursacht weder akute noch chronische Lebererkrankungen. Historische Zuordnungen zur Posttransfusionshepatitis wurden wissenschaftlich wiederlegt.', severity: 'mild' }
        ],
        physical_exam: ['Körperliche Untersuchung völlig unauffällig.'],
        complications: ['Keine nachgewiesenen hepatischen oder systemischen Komplikationen.']
      },
      diagnostics: {
        laboratory: [{ test: 'ALT / AST', finding: 'Im Normbereich', interpretation: 'Keine signifikante Hepatozytolyse' }],
        imaging: [{ modality: 'Sonographie', finding: 'Normal', significance: '-' }],
        microbiology: [
          { test: 'SENV-D / SENV-H PCR', finding: 'DNA-Nachweis', significance: 'Forschungslabor-Methode; routinemäßig nicht indiziert' }
        ]
      },
      differential: [
        { disease: 'Posttransfusionshepatitis (HCV, HBV, CMV, EBV)', distinguishing: 'Serologie und spezifische PCR-Assays' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Keine Behandlung erforderlich.',
        supportive: [],
        prevention: ['SENV-Screening von Blutprodukten ist nicht indiziert und nicht empfohlen.']
      },
      prognosis: {
        mortality: 'Hervorragend (nicht-pathogenes Virus).',
        prognostic_scores: [],
        factors: '-'
      }
    }
  ]
};
