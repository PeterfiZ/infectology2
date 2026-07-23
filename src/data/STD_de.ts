Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Sexuell übertragbare Infektionen',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Syphilis',
            pathogen: { type: 'Spirochäte', name: '<i>Treponema pallidum</i>', gram: 'Gram-negativ (schlecht anfärbbar)', shape: 'spiralförmig' },
            epidemiology: {
              incidence: 'Zunehmende Inzidenz weltweit, hoch in der MSM-Population',
              risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'HIV-positive Personen', 'Sexarbeiter', 'Mehrere Sexualpartner', 'i.v.-Drogenkonsumenten'],
              seasonality: 'Keine',
              transmission: 'Direkter Kontakt mit Schleimhäuten/Haut, vertikal (kongenital)'
            },
            pathomechanism: {
              steps: [
                'Eintritt und Ausbreitung: T. pallidum dringt durch Mikroläsionen in Haut oder Schleimhaut ein. Es gelangt innerhalb von Minuten bis Stunden in Lymphbahnen und Blut und wird systemisch, noch bevor der Primäraffekt erscheint.',
                'Immunumgehung: "Stealth"-Strategie mit geringer Dichte an Außenmembranproteinen zur Vermeidung von Antikörperbindung und Komplementaktivierung.',
                'Gewebeschaden: Basiert auf obliterierender Endarteriitis (Entzündung und Verschluss kleiner Gefäße) mit perivaskulärer Plasmazellinfiltration.',
                'Folge: Ischämie durch Gefäßverschluss führt zur Ulzeration des Primäraffekts und zur Bildung von Gummen (nekrotisierende Granulome) im Tertiärstadium.'
              ],
              virulence_factors: ['Fibronektin-bindende Proteine', 'Hyaluronidase', 'Antigenvariation', 'Outer membrane proteins']
            },
            clinical: {
              incubation: 'Primär: 9-90 Tage (Durchschnitt 21 Tage)',
              onset: 'Phasenabhängig',
              symptoms: [
                { name: 'Primär: Ulcus durum', description: 'Schmerzloses, hartes Geschwür mit sauberem Grund (Lues-Schanker) an der Eintrittspforte. Begleitet von „indolenter“ (schmerzloser), knorpelharter Lymphknotenschwellung.', severity: 'moderate' },
                { name: 'Sekundär: Dissemination', description: '6–8 Wochen nach Schanker. Kupferfarbene Makeln (auch an Handflächen und Fußsohlen), nässende flache Papeln (Condylomata lata), porzellanweiße Schleimhautflecken (Plaque opalina) und „Mottenfraß“-Alopezie.', severity: 'moderate' },
                { name: 'Sekundär: Systemische Zeichen', description: 'Fieber, Halsschmerzen, generalisierte Lymphknotenschwellung ("Mikropolyadenopathie"); auch Hepatitis oder Periostitis möglich.', severity: 'mild' },
                { name: 'Tertiär: Destruktion', description: 'Jahre später: Gummen (zerstörende Granulome), Aortitis (Aneurysma) und Neurosyphilis (Tabes dorsalis - Ataxie, Blitzschmerzen; progressive Paralyse - Demenz).', severity: 'severe' }
              ],
              physical_exam: [
                'Primär: schmerzloses genitales/extragenitales Geschwür + inguinale Lymphadenopathie',
                'Sekundär: generalisiertes, nicht juckendes Exanthem (Handflächen/Fußsohlen!), Schleimhautflecken, Alopezie',
                'Latenz: asymptomatisch',
                'Tertiär: Gumma (Haut, Knochen), kardiovaskuläre oder neurologische Beteiligung'
              ],
              complications: ['Neurosyphilis', 'Kardiovaskuläre Syphilis (Aortitis)', 'Gumma', 'Kongenitale Syphilis', 'Erhöhtes Risiko für HIV-Koinfektion']
            },
            diagnostics: {
              laboratory: [
                { test: 'Nicht-treponemale Tests (RPR/VDRL)', finding: 'Reaktiv (Titer)', interpretation: 'Screening, Aktivitätsüberwachung, Behandlungseffizienz' },
                { test: 'Treponema-spezifische Tests (TPHA/FTA-ABS)', finding: 'Reaktiv', interpretation: 'Bestätigung, bleibt lebenslang positiv' },
                { test: 'Reverser Algorithmus', finding: 'EIA/CIA → RPR → TPHA', interpretation: 'Automatisiertes Screening' }
              ],
              imaging: [
                { modality: 'Gehirn-MRT', finding: 'Neurosyphilis: meningeales Enhancement, Infarkte', significance: 'Bei neurologischen Symptomen' },
                { modality: 'Echo/Thorax-CT', finding: 'Aortendilatation', significance: 'Kardiovaskuläre Syphilis' }
              ],
              microbiology: [
                { test: 'Dunkelfeldmikroskopie', finding: 'Lebende Spirochäten aus Primärläsionen', significance: 'Frühdiagnose, aber selten verfügbar' },
                { test: 'PCR', finding: 'T. pallidum DNA', significance: 'Sensitiv, aber nicht routinemäßig' },
                { test: 'Liquoranalyse', finding: 'VDRL positiv, Pleozytose, Protein↑', significance: 'Neurosyphilis-Diagnose' }
              ]
            },
            differential: [
              { disease: 'Herpes genitalis', distinguishing: 'Schmerzhafte, gruppierte Bläschen' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Schmerzhafte Geschwüre, eitrige Lymphknoten' },
              { disease: 'Lymphogranuloma venereum', distinguishing: 'Schmerzhafter Bubo, Chlamydia trachomatis L1-3' },
              { disease: 'Arzneimittelexanthem', distinguishing: 'Medikamentenanamnese, Beteiligung von Handflächen/Fußsohlen selten' },
              { disease: 'Pityriasis rosea', distinguishing: 'Primärmedaillon, Tannenbaummuster' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Benzylpenicillin G (Bicillin LA)', dose: '2.4 Mio. IE i.m.', duration: 'Einzeldosis', note: 'Frühsyphilis (primär, sekundär, frühe Latenz < 1 Jahr)' },
                  { drug: 'Penicillinallergie: Doxycyclin', dose: '2x100mg p.o.', duration: '14 Tage', note: 'Alternative (Compliance!)' }
                ],
                inpatient: [
                  { drug: 'Benzylpenicillin G', dose: '2.4 Mio. IE i.m.', duration: '1x wöchentlich für 3 Wochen', note: 'Späte Latenz (>1 Jahr) oder unbekannte Dauer' }
                ],
                icu: [
                  { drug: 'Wässriges Penicillin G', dose: '3-4 Mio. IE i.v. alle 4 Stunden', duration: '10-14 Tage', note: 'Neurosyphilis!' }
                ]
              },
              targeted: 'Penicillin ist immer die erste Wahl, keine Resistenz',
              supportive: ['Warnung vor Jarisch-Herxheimer-Reaktion', 'HIV-Testung', 'Partnerbenachrichtigung und -behandlung', 'Serologische Nachsorge (3, 6, 12, 24 Monate)'],
              prevention: ['Kondomgebrauch', 'Partnerbenachrichtigung', 'Regelmäßiges Screening in Risikogruppen', 'Screening von Schwangeren']
            },
            guidelines: {
              diagnosis: [
                'Screening: RPR/VDRL (nicht-treponemal) oder reverser Algorithmus (EIA/CIA)',
                'Bestätigung: TPHA/FTA-ABS (treponema-spezifische) Tests',
                'Neurosyphilis: Liquor-VDRL (spezifisch, aber nicht sensitiv), Pleozytose, Proteinerhöhung'
              ],
              treatment_indications: [
                'Alle bestätigten Syphilis-Fälle müssen stadienabhängig behandelt werden',
                'Sexualpartner müssen benachrichtigt und behandelt werden'
              ],
              first_line: [
                'Frühsyphilis (primär, sekundär, frühe Latenz): Benzathin-Penicillin G 2,4 Millionen IE i.m. als Einzeldosis',
                'Späte Latenz oder Tertiärsyphilis: Benzathin-Penicillin G 2,4 Millionen IE i.m. wöchentlich für 3 Wochen',
                'Neurosyphilis: Wässriges kristallines Penicillin G 18-24 Millionen IE/Tag i.v. (3-4 Millionen IE alle 4 Stunden) für 10-14 Tage'
              ],
              special_populations: [
                'Penicillinallergie: Doxycyclin 100mg p.o. zweimal täglich für 14 Tage (früh) oder 28 Tage (spät). In der Schwangerschaft sind Desensibilisierung und Penicillin-Behandlung obligatorisch!',
                'Schwangerschaft: Alle schwangeren Frauen sollten gescreent werden. Die Behandlung ist die gleiche wie bei nicht-schwangeren Erwachsenen.',
                'Jarisch-Herxheimer-Reaktion: Eine fieberhafte Reaktion innerhalb der ersten 24 Stunden nach Behandlungsbeginn, keine Allergie. Symptomatische Behandlung.',
                'Angeborene Syphilis: Wässriges kristallines Penicillin G 100.000-150.000 IE/kg/Tag i.v. (50.000 IE/kg/Dosis alle 12 Stunden für die ersten 7 Tage, dann alle 8 Stunden) für 10 Tage. ODER Procain-Penicillin G 50.000 IE/kg/Tag i.m. für 10 Tage.'
              ],
              monitoring: [
                'Der Behandlungserfolg wird durch einen Abfall der nicht-treponemalen Testtiter (RPR/VDRL) überwacht (mindestens vierfacher Abfall innerhalb von 12 Monaten).'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021',
                'IUSTI: 2020 European guideline on the management of syphilis'
              ]
            },
            prognosis: {
              mortality: 'Behandelte Syphilis: niedrig; Neurosyphilis: irreversible Schäden möglich',
              prognostic_scores: ['Keine'],
              factors: 'Stadium, HIV-Koinfektion, Zeitpunkt der Behandlung'
            }
          },
          {
            id: 'hiv_aids',
            name: 'HIV-Infektion und AIDS',
            pathogen: { type: 'Virus', name: '<i>Humanes Immundefizienz-Virus</i> (HIV-1, HIV-2)', gram: 'RNA-Retrovirus', shape: 'sphärisch' },
            epidemiology: {
              incidence: '~39 Millionen Menschen leben weltweit mit HIV (UNAIDS 2024)',
              risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'i.v.-Drogenkonsumenten (PWID)', 'Sexarbeiter', 'Empfänger von Blutprodukten (Entwicklungsländer)', 'Sexualpartner mit Risikoverhalten'],
              seasonality: 'Keine',
              transmission: 'Sexuell (vaginal, anal, oral), parenteral (Blut, Nadelstich), vertikal (Mutter-Kind: Schwangerschaft, Geburt, Stillen)'
            },
            pathomechanism: {
              steps: [
                'Eintritt und Bindung: Das virale gp120 bindet mit hoher Affinität an den CD4-Rezeptor von T-Helferzellen (CD4+), Makrophagen und Reservoiren sowie an die CCR5- oder CXCR4-Korezeptoren.',
                'Replikation und Integration: Im Zellinneren wird die virale RNA durch die Reverse Transkriptase in DNA umgeschrieben (fehlerträchtiger Prozess, der zu hohen Mutationsraten und Resistenzen führt). Die Integrase baut die provirale DNA in das Wirtsgenom ein, wo sie latent verbleiben kann (Reservoire).',
                'Zerstörung des Immunsystems: Infizierte CD4+-T-Zellen sterben durch virale Replikation (Pyroptose), zytotoxische T-Zell-Attacken und Synzytienbildung. Ein frühzeitiger Verlust des darmassoziierten lymphoiden Gewebes (GALT) führt zu chronischer systemischer Entzündung und mikrobieller Translokation.',
                'Konsequenz: Der kritische Abfall der CD4+-Zellzahl (<200/µL) führt zum Kollaps des Immunsystems und zum Auftreten opportunistischer Infektionen/Malignome (AIDS).'
              ],
              virulence_factors: ['gp120/gp41 (Eintritt und Fusion)', 'Reverse Transkriptase (hohe Mutationsrate)', 'Integrase (Genomintegration)', 'Nef, Tat, Rev, Vif (Regulatoren, Immunflucht)']
            },
            clinical: {
              incubation: '2-4 Wochen (akutes retrovirales Syndrom)',
              onset: 'Akut (ARS) oder latent',
              symptoms: [
                { name: 'Akutes retrovirales Syndrom (ARS)', description: 'Mononukleose-ähnliche Erkrankung 2–4 Wochen nach Infektion: Fieber, Halsschmerzen, Lymphknotenschwellung, Muskelschmerzen und makulopapulöser Ausschlag. Hohe Viruslast und vorübergehender CD4-Abfall.', severity: 'moderate' },
                { name: 'Klinische Latenz (Asymptomatisches Stadium)', description: 'Symptomfreie oder symptomarme Phase von durchschnittlich 8-10 Jahren ohne Behandlung. Aktive Replikation in Lymphknoten. Persistierende generalisierte Lymphadenopathie (PGL) möglich.', severity: 'mild' },
                { name: 'Fortgeschrittene HIV-Erkrankung (Advanced HIV Disease - AHD) / AIDS-Stadium', description: 'Wenn die CD4-Zahl unter 200/µL fällt (oder WHO-Stadium III/IV). Auftreten opportunistischer Infektionen (z. B. Pneumocystis jirovecii-Pneumonie, ösophageale Candidose, Toxoplasma-Enzephalitis, Kryptokokken-Meningitis, CMV-Retinitis, disseminierte Tuberkulose) und Malignome (Kaposi-Sarkom, Non-Hodgkin-Lymphom, invasives Zervixkarzinom).', severity: 'severe' }
              ],
              physical_exam: [
                'Generalisierte Lymphadenopathie (PGL)',
                'Orale Candidose (Soor) oder orale Haarleukoplakie',
                'Seborrhoisches Ekzem der Kopfhaut, makulopapulöse Exantheme',
                'Kaposi-Sarkom (violette/bräunliche Hautveränderungen, Knoten)',
                'Kachexie (HIV-Wasting-Syndrom)'
              ],
              complications: ['Pneumocystis jirovecii-Pneumonie (PCP)', 'Toxoplasma-Enzephalitis', 'Kryptokokken-Meningitis', 'CMV-Retinitis / Colitis', 'Disseminierte TB / MAC', 'Kaposi-Sarkom', 'Non-Hodgkin-Lymphom', 'HIV-Enzephalopathie / Demenz']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4-Zellzahl', finding: 'Abfallend (<200/µL = AHD / AIDS-Stadium)', interpretation: 'Immunstatus und Abschätzung des Risikos opportunistischer Infektionen' },
                { test: 'Blutbild & Organfunktionen', finding: 'Lymphopenie, Thrombozytopenie, Anämie, erhöhte Leber-/Nierenwerte', interpretation: 'Screening auf Komorbiditäten und Organschäden' }
              ],
              microbiology: [
                { test: 'Suchtest (4. Generation Ag/Ab-Kombi-ELISA/ECLIA)', finding: 'p24-Antigen und HIV-1/2-Antikörper positiv', significance: 'Kurzes Diagnostisches Fenster (2-3 Wochen). Bei Positivität Bestätigung erforderlich!' },
                { test: 'Bestätigungstest (HIV-1/HIV-2 Differenzierungs-Immunoassay / Western Blot)', finding: 'Positiv', significance: 'Endgültige Diagnosesicherung' },
                { test: 'HIV-RNA-PCR (Viruslast)', finding: 'Kopien/ml', significance: 'Ausgangswert vor ART, Bestätigung akuter Infektionen und Therapiemonitoring' },
                { test: 'Genotypische Resistenztestung (GRT)', finding: 'Pre-treatment Resistenzmutationen', significance: 'Vor Beginn der ART bei allen Neudiagnostizierten empfohlen' },
                { test: 'HLA-B*5701 Genetik', finding: 'Positiv oder Negativ', significance: 'Obligatorisch vor Abacavir (ABC)-Gabe (Verhinderung schwerer Überempfindlichkeitsreaktionen!)' },
                { test: 'AHD-Screening (bei CD4 <200/µL)', finding: 'Serum-CrAg LFA (Kryptokokken-Antigen) + Urin-TB-LAM', significance: 'Schneller Nachweis okkulter Kryptokokkose und Tuberkulose' }
              ]
            },
            differential: [
              { disease: 'Mononukleose (EBV / CMV)', distinguishing: 'Heterophile Antikörper positiv, atypische Lymphozyten, HIV-Ag/Ab negativ' },
              { disease: 'Influenza / COVID-19', distinguishing: 'Respiratorische Symptome dominieren, PCR-Testung' },
              { disease: 'Sekundäre Syphilis', distinguishing: 'Serologie (TPHA/RPR), papulöses Exanthem an Handflächen/Fußsohlen' }
            ],
            therapy: {
              guidelines: ['EACS Guidelines Version 12.1 (2024)', 'Deutsch-Österreichische Leitlinien (DÖAG 2024)', 'IAS-USA 2024'],
              empirical: {
                drug_classes: {
                  title: 'Antiretrovirale Medikamentenklassen (ART)',
                  drugs: [
                    { drug: 'INSTI (Integrase-Inhibitoren)', dose: '-', duration: '-', note: 'Höchste Resistenzbarriere, schnellster Abfall der Viruslast (Bictegravir, Dolutegravir, Cabotegravir, Raltegravir)' },
                    { drug: 'NRTI (Nukleoside/Nukleotid-RT-Inhibitoren)', dose: '-', duration: '-', note: 'Tenofoviralafenamid (TAF), Tenofovirdisoproxil (TDF), Emtricitabin (FTC), Lamivudin (3TC), Abacavir (ABC)' },
                    { drug: 'NNRTI (Nicht-nukleoside RT-Inhibitoren)', dose: '-', duration: '-', note: 'Doravirin (DOR), Rilpivirin (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Protease-Inhibitoren)', dose: '-', duration: '-', note: 'Darunavir (DRV), Atazanavir (ATV) - geboostert (Ritonavir/Cobicistat)' },
                    { drug: 'Kapsid-Inhibitor (Neue Klasse)', dose: '-', duration: '-', note: 'Lenacapavir (LEN) - 6-monatliche s.c.-Injektion bei MDR-HIV' }
                  ]
                },
                combinations: {
                  title: 'Erstlinien-Therapiestrategien',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI (3-Medikamente-Regime)', dose: '-', duration: '-', note: 'Standard Goldstandard (z. B. BIC/TAF/FTC oder DTG + TAF/FTC)' },
                    { drug: '1 NRTI + 1 INSTI (2-Medikamente-Regime)', dose: '-', duration: '-', note: 'Dolutegravir + Lamivudin (DTG/3TC) - auch in der Erstlinie bei bestimmten Kriterien!' },
                    { drug: 'Langwirksame injizierbare ART (Long-Acting Injectable)', dose: '-', duration: '-', note: 'Cabotegravir + Rilpivirin (CAB/RPV) alle 2 Monate i.m. (zur Umstellung bei supprimierten Patienten)' }
                  ]
                },
                regimens: {
                  title: 'Bevorzugte konkrete Regime (EACS 12.1)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofoviralafenamid (TAF) / Emtricitabin (FTC)', dose: '1 Tab (50/25/200mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugtes Single Tablet Regimen (STR). Benötigt keinen HLA-Test, hohe Resistenzbarriere.' },
                    { drug: 'Dolutegravir + Tenofovir (TDF oder TAF) + Emtricitabin (FTC) / Lamivudin (3TC)', dose: '50mg DTG + 1 Tab TAF/FTC p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugte Erstlinie.' },
                    { drug: 'Dolutegravir / Lamivudin (3TC)', dose: '1 Tab (50/300mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugtes 2-Medikamente-STR (BEDINGUNGEN: Viruslast <500.000 Kopien/ml, keine aktive HBV-Koinfektion, keine NRTI/INSTI-Resistenz).' },
                    { drug: 'Dolutegravir / Abacavir / Lamivudin (DTG/ABC/3TC)', dose: '1 Tab (50/600/300mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Nur für HLA-B*5701 NEGATIVE UND HBsAg NEGATIVE Patienten!' },
                    { drug: 'Cabotegravir + Rilpivirin (CAB/RPV i.m.-Injektion)', dose: 'i.m.-Injektion alle 2 Monate (oder monatlich)', duration: 'Lebenslang', note: 'Switcheinleitung für stabil supprimierte (<50 Kopien/ml) Patienten ohne bisheriges Therapieversagen/Resistenzen.' }
                  ]
                }
              },
              targeted: 'Schneller ART-Start (Rapid / Same-day Initiation): Die ART sollte am Tag der Diagnose oder so schnell wie möglich bei allen Menschen mit HIV begonnen werden! Ziel: Erreichen und Aufrechterhalten einer nicht nachweisbaren Viruslast (<50 Kopien/ml).',
              supportive: [
                'Prophylaxe opportunistischer Infektionen: PCP-Prophylaxe (TMP/SMX 960mg 1x/Tag oder 3x/Woche) bei CD4 <200/µL. Toxoplasmose-Prophylaxe (TMP/SMX 960mg 1x/Tag) bei CD4 <100/µL und Toxoplasma-IgG+.',
                'Primäre MAC (Mycobacterium avium)-Prophylaxe: In der Ära des schnellen ART-Starts ROUTINEMÄSSIG NICHT MEHR EMPFOHLEN (auch bei CD4 <50)!',
                'Impfungen: Pneumokokken (PCV20/PCV15 + PPSV23), Influenza (jährlich), HBV, HAV, HPV, Meningokokken, VZV/Zoster (Totimpfstoff RZV). Lebendimpfstoffe (z. B. MMR, VZV) KONTRAINDIZIERT bei CD4 <200/µL!'
              ],
              prevention: [
                'N=N / U=U (Nicht nachweisbar = Nicht übertragbar / Undetectable = Untransmittable): Menschen mit HIV unter wirksamer ART (<50 Kopien/ml seit mindestens 6 Monaten) können das Virus sexuell NICHT übertragen!',
                'PrEP (Prä-Expositionsprophylaxe): Täglich orales TDF/FTC oder TAF/FTC (oder anlassbezogene "2-1-1"-PrEP mit TDF/FTC bei MSM). Langwirksame injizierbare PrEP: Cabotegravir LA (alle 2 Monate i.m.) oder Lenacapavir (alle 6 Monate s.c.).',
                'PEP (Post-Expositionsprophylaxe): Beginn innerhalb von 72 Stunden (idealerweise <24h) für 28 Tage. Bevorzugt: TDF/FTC (oder TAF/FTC) + Dolutegravir (oder Bictegravir oder Raltegravir).',
                'PMTCT (Mutter-Kind-Übertragung): Universelles Schwangerschaftsscreening, sofortige DTG-basierte ART, Entbindungsweg nach Viruslast zur Geburt, postexpositionelle Prophylaxe beim Neugeborenen.'
              ]
            },
            guidelines: {
              diagnosis: [
                'Screening: 4. Generation Ag/Ab-Kombinationstest (p24-Antigen + Antikörper).',
                'Bestätigung: HIV-1/2-Differenzierungstest / Western Blot.',
                'Baseline vor ART: CD4-Zahl, HIV-RNA-Viruslast, Genotypische Resistenztestung (GRT), HLA-B*5701 (vor Abacavir), HBV/HCV-Serologie, Syphilis- und STD-Screening.',
                'AHD-Diagnostik-Paket (bei CD4 <200/µL): CrAg LFA (Kryptokokkose) und Urin-TB-LAM (Tuberkulose).'
              ],
              treatment_indications: [
                'Treat All / Same-Day ART: Empfehlung zum unverzüglichen Beginn der ART für alle Menschen mit HIV unabhängig von der CD4-Zahl.',
                'Ausnahme vom sofortigen Start: Bei ZNS-Tuberkulose-Meningitis oder Kryptokokken-Meningitis sollte der ART-Start um 2-6 Wochen verschoben werden, um ein lebensbedrohliches intrakranielles IRIS (Immunglobulines Reintegrations-Syndrom) zu verhindern!'
              ],
              first_line: [
                '1. Bictegravir / TAF / FTC (BIC/TAF/FTC - STR)',
                '2. Dolutegravir + TAF/FTC oder TDF/FTC',
                '3. Dolutegravir / Lamivudin (DTG/3TC - 2-Medikamente-STR, wenn VL <500k und HBV-negativ)',
                '4. Dolutegravir / ABC / 3TC (wenn HLA-B*5701 negative und HBV-negativ)'
              ],
              monitoring: [
                'Viruslast: Nach 1, 3 und 6 Monaten nach ART-Start/Wechsel, dann alle 6 Monate bei Stabilität. Ziel: <50 Kopien/ml.',
                'CD4-Zahl: Initial alle 3-6 Monate; wenn VL <50 und CD4 >350 seit ≥1-2 Jahren, kann das Routine-CD4-Monitoring eingestellt werden.'
              ],
              special_populations: [
                'Schwangerschaft: DTG-basierte Regime bevorzugt (früheres Signal für Neuralrohrdefekte klinisch nicht signifikant).',
                'TB-Koinfektion: Beginn der ART innerhalb von 2 Wochen nach TB-Therapiestart bei CD4 <50, sonst innerhalb von 2-8 Wochen. Unter Rifampicin Verdopplung der Dolutegravir-Dosis auf 2x50mg/Tag!'
              ]
            },
            prognosis: {
              mortality: 'Bei rechtzeitiger und adhärenter ART nahezu normale Lebenserwartung; Unbehandeltes AHD/AIDS: hohe Mortalität',
              prognostic_scores: ['CD4-Zahl', 'HIV-RNA-Viruslast', 'AHD / Vorhandensein opportunistischer Infektionen'],
              factors: 'Therapieadhärenz, Früherkennung, dauerhafte Virusunterdrückung'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhoe (Tripper)',
            pathogen: { type: 'Bakterium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negativ', shape: 'Diplokokken (intrazellulär)' },
            epidemiology: {
              incidence: 'Häufig, zunehmende Resistenz',
              risk_groups: ['Junge Erwachsene', 'MSM', 'Neuer Sexualpartner'],
              seasonality: 'Keine',
              transmission: 'Sexuell, perinatal'
            },
            pathomechanism: {
              steps: [
                'Adhäsion: Bakterien haften mit Pili an Schleimhautepithelzellen (Harnröhre, Zervix, Rektum, Pharynx).',
                'Invasion: Eindringen in Zellen und subepithelialen Raum.',
                'Entzündung: LOS (Lipooligosaccharid) und andere Virulenzfaktoren lösen eine starke Neutrophilenantwort aus (eitriger Ausfluss).'
              ],
              virulence_factors: ['Pili', 'Opa-Proteine', 'IgA-Protease', 'LOS']
            },
            clinical: {
              incubation: '2-7 Tage',
              onset: 'Akut',
              symptoms: [
                { name: 'Männer', description: 'Akute Urethritis: plötzlicher, reichlicher, gelb-grüner, rahmiger eitriger Ausfluss ("Bon-bon") und quälende Dysurie. Häufig Hodenspannungsschmerz.', severity: 'moderate' },
                { name: 'Frauen', description: 'Oft asymptomatische Zervizitis (50%). Eitriger Ausfluss, Dysurie, schmerzhafte Bartholinitis. Kann zu aufsteigender Beckenentzündung (PID) führen.', severity: 'moderate' },
                { name: 'Extragenital', description: 'Pharyngitis (oft asymptomatisch), Proktitis (Schmerzen, Ausfluss), Konjunktivitis (Neugeborene).', severity: 'moderate' }
              ],
              physical_exam: ['Eitriger urethraler/zervikaler Ausfluss', 'Bartholin-Abszess', 'Fieber (bei DGI)'],
              complications: ['Beckenentzündung (PID)', 'Unfruchtbarkeit', 'Epididymitis', 'Disseminierte Gonokokkeninfektion (DGI): Arthritis, Dermatitis']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Normal', interpretation: 'Bei lokaler Infektion' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Positiv', significance: 'Goldstandard (Urin, Abstrich)' },
                { test: 'Kultur', finding: 'N. gonorrhoeae', significance: 'OBLIGATORISCH für Resistenztestung bei Therapieversagen!' },
                { test: 'Mikroskopie', finding: 'Intrazelluläre Gram-negative Diplokokken', significance: 'Diagnostisch bei Männern, weniger sensitiv bei Frauen' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI 2020 / CDC 2021'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxon', dose: '1g i.m. Einzeldosis', duration: 'Stat', note: 'Erste Wahl. Dosis erhöht wegen Resistenz (früher 250-500mg).' },
                  { drug: 'Alternative (Resistenz/Allergie)', dose: '-', duration: '-', note: 'Gentamicin 240mg i.m. + Azithromycin 2g p.o. Cefixim 800mg p.o. (nur wenn keine andere Option, Resistenzrisiko!).' }
                ]
              },
              targeted: 'Nach Kultur. Zunehmende Ceftriaxon-Resistenz (v.a. Asien) ist besorgniserregend. Dualtherapie (z.B. +Azithromycin) wird nicht mehr immer routinemäßig empfohlen.',
              supportive: ['Partnerbehandlung', 'Sexuelle Abstinenz für 7 Tage'],
              prevention: ['Kondome', 'Screening']
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Komplikationen (PID, DGI)' }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydien-Infektion',
            pathogen: { type: 'Bakterium', name: '<i>Chlamydia trachomatis</i> (Serovare D-K)', gram: 'Gram-negativ (intrazellulär)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Häufigste bakterielle STI weltweit',
              risk_groups: ['Junge sexuell aktive Erwachsene (<25 Jahre)', 'Neue/mehrere Partner'],
              seasonality: 'Keine',
              transmission: 'Sexuell, perinatal'
            },
            pathomechanism: {
              steps: [
                'Infektiöse Elementarkörperchen (EB) dringen in Zylinderepithelzellen ein (Zervix, Urethra, Rektum).',
                'In der Zelle wandeln sie sich in Retikularkörperchen (RB) um und vermehren sich.',
                'Nach Zelllyse werden neue EBs freigesetzt, um weitere Zellen zu infizieren.',
                'Chronische Entzündung führt zu Vernarbung, was die Grundlage für Komplikationen (z.B. Unfruchtbarkeit) ist.'
              ],
              virulence_factors: ['Intrazelluläres Überleben', 'Hitzeschockproteine (HSP)']
            },
            clinical: {
              incubation: '1-3 Wochen',
              onset: 'Langsam/Asymptomatisch',
              symptoms: [
                { name: 'Asymptomatisch ("Still")', description: '70-80% der Frauen und 50% der Männer sind asymptomatisch, was die Ausbreitung und Spätkomplikationen begünstigt.', severity: 'mild' },
                { name: 'Frauen', description: 'Mukopurulente Zervizitis: schleimig-eitriger Ausfluss, Kontaktblutungen (z. B. nach Sex), Dysurie. Komplikation: PID, Fitz-Hugh-Curtis-Syndrom (Perihepatitis).', severity: 'moderate' },
                { name: 'Männer', description: 'Urethritis: leichtes Brennen, morgendlicher "Lusttropfen" (dünner, gläserner Ausfluss). Weniger dramatisch als Tripper, daher oft späte Diagnose.', severity: 'moderate' }
              ],
              physical_exam: ['Mukopurulente Zervizitis', 'Adnex-Druckschmerz (PID)', 'Urethraler Ausfluss'],
              complications: ['Beckenentzündung (PID)', 'Unfruchtbarkeit (tubar)', 'Eileiterschwangerschaft', 'Fitz-Hugh-Curtis-Syndrom (Perihepatitis)', 'Reaktive Arthritis (Reiter-Syndrom)', 'Neugeborenen-Konjunktivitis/Pneumonie']
            },
            diagnostics: {
              laboratory: [{ test: 'Blutbild', finding: 'Normal', interpretation: 'Lokale Infektion' }],
              microbiology: [
                { test: 'NAAT (PCR)', finding: 'Positiv', significance: 'Goldstandard (Urin, Vaginal-/Zervikal-/Urethralabstrich)' },
                { test: 'Kultur', finding: 'Schwierig', significance: 'Nur in Speziallabors (Zellkultur)' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '100mg 2x/Tag p.o.', duration: '7 Tage', note: 'Erste Wahl (besser auch bei rektaler Infektion).' },
                  { drug: 'Azithromycin', dose: '1g p.o.', duration: 'Einzeldosis', note: 'Alternative (z.B. in der Schwangerschaft oder bei Compliance-Problemen).' }
                ]
              },
              targeted: 'Doxycyclin bevorzugt. Azithromycin in der Schwangerschaft. Partnerbehandlung ist obligatorisch!',
              supportive: ['Sexuelle Abstinenz für 7 Tage', 'Partnerbenachrichtigung'],
              prevention: ['Kondome', 'Jährliches Screening für Frauen <25 Jahre']
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Unfruchtbarkeitsrisiko steigt mit wiederholten Infektionen' }
          },
          {
            id: 'genital_herpes',
            name: 'Herpes genitalis',
            pathogen: { type: 'Virus', name: '<i>Herpes-Simplex-Virus</i> (meist HSV-2, seltener HSV-1)', gram: 'dsDNA', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Häufig, lebenslange Infektion',
              risk_groups: ['Sexuell aktive Erwachsene', 'Mehrere Partner'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt (auch asymptomatische Ausscheidung!)'
            },
            pathomechanism: {
              steps: [
                'Das Virus dringt durch Mikroläsionen in Schleimhaut oder Haut ein.',
                'Vermehrung in Epithelzellen (lytische Infektion), dann Wanderung entlang sensorischer Nerven zu den Sakralganglien.',
                'Etabliert dort eine latente Infektion. Bei Reaktivierung (Stress, Immunsuppression) wandert das Virus zurück zur Haut und verursacht Symptome.'
              ],
              virulence_factors: ['Latenz', 'Immunumgehung']
            },
            clinical: {
              incubation: '2-12 Tage',
              onset: 'Plötzlich (primär) oder Prodrom (rezidivierend)',
              symptoms: [
                { name: 'Primärinfektion', description: 'Schwere Symptome: schmerzhafte gruppierte Bläschen auf erythematösem Grund, später Ulzera. Begleitet von Fieber, quälender Dysurie (Harnverhalt möglich) und schmerzhaften Leistenlymphknoten.', severity: 'severe' },
                { name: 'Rezidivierende Infektion', description: 'Milder Verlauf. Nach prodromalem Kribbeln oder Brennen erscheinen wenige Bläschen. Keine Systemstörungen. Heilung: 5-10 Tage.', severity: 'mild' }
              ],
              physical_exam: ['Gruppierte Vesikel/Ulzera', 'Inguinale Lymphadenopathie (primär)', 'Zervizitis/Proktitis'],
              complications: ['Aseptische Meningitis', 'Harnverhalt (autonome Dysfunktion)', 'Neonataler Herpes (in der Schwangerschaft!)', 'Erhöhtes Risiko für HIV-Übertragung']
            },
            diagnostics: {
              laboratory: [{ test: '-', finding: '-', interpretation: '-' }],
              microbiology: [
                { test: 'PCR', finding: 'HSV-DNA', significance: 'Goldstandard (am sensitivsten)' },
                { test: 'Kultur', finding: 'HSV', significance: 'Nur aus frischen Bläschen' },
                { test: 'Typspezifische Serologie', finding: 'IgG', significance: 'Unterscheidung HSV-1 vs HSV-2 (nicht für Akutdiagnose)' }
              ]
            },
            therapy: {
              guidelines: ['IUSTI / CDC'],
              empirical: {
                outpatient: [
                  { drug: 'Acyclovir', dose: '400mg 3x/Tag p.o.', duration: '7-10 Tage (primär), 5 Tage (rezidivierend)', note: 'Oder 200mg 5x/Tag.' },
                  { drug: 'Valacyclovir', dose: '500-1000mg 2x/Tag p.o.', duration: '7-10 Tage (primär), 3 Tage (rezidivierend)', note: 'Bessere Bioverfügbarkeit.' }
                ]
              },
              targeted: 'Suppressionstherapie (täglich Acyclovir/Valacyclovir) empfohlen bei häufigen Rezidiven (>6/Jahr).',
              supportive: ['Schmerzmittel', 'Sitzbäder'],
              prevention: ['Kondome (kein vollständiger Schutz)', 'Abstinenz bei Prodrom/Symptomen', 'Suppressionstherapie (reduziert Übertragung)']
            },
            prognosis: { mortality: 'Sehr niedrig', prognostic_scores: [], factors: 'Psychische Belastung durch Rezidive' }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoon', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'birnenförmig, begeißelt' },
            epidemiology: {
              incidence: 'Häufigste nicht-virale STI',
              risk_groups: ['Sexuell aktive Frauen', 'Mehrere Partner'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt'
            },
            pathomechanism: {
              steps: [
                'Das Protozoon haftet an Plattenepithelzellen der Vagina und Harnröhre.',
                'Schädigt das Epithel durch direkte Zytotoxizität und Entzündungsreaktion.',
                'Verändert die Vaginalflora (pH-Anstieg).'
              ],
              virulence_factors: ['Adhäsine', 'Cystein-Proteasen']
            },
            clinical: {
              incubation: '4-28 Tage',
              onset: 'Schleichend',
              symptoms: [
                { name: 'Frauen', description: 'Reichlicher, schaumiger, gelb-grüner, fischig riechender Ausfluss. Intensiver Juckreiz, Dysurie. Bei der Untersuchung „Erdbeer-Zervix“ (punktförmige Blutungen). pH > 4,5.', severity: 'moderate' },
                { name: 'Männer', description: 'Oft asymptomatische Träger. Kann leichte Urethritis (gläserner Ausfluss) oder chronische Prostatitis verursachen.', severity: 'mild' }
              ],
              physical_exam: ['Schaumiger Ausfluss', 'Erdbeer-Zervix (punktförmige Blutungen)', 'pH > 4.5'],
              complications: ['Frühgeburt', 'Niedriges Geburtsgewicht', 'Erhöhtes Risiko für HIV-Übertragung', 'PID']
            },
            diagnostics: {
              laboratory: [{ test: 'Vaginal-pH', finding: '> 4.5', interpretation: 'Bakterielle Vaginose oder Trichomonas' }],
              microbiology: [
                { test: 'Nativpräparat', finding: 'Bewegliche begeißelte Protozoen', significance: 'Schnell, aber geringe Sensitivität (60-70%)' },
                { test: 'NAAT (PCR)', finding: 'Positiv', significance: 'Goldstandard (am sensitivsten)' },
                { test: 'Kultur', finding: 'Positiv', significance: 'Wenn NAAT nicht verfügbar' }
              ]
            },
            therapy: {
              guidelines: ['CDC 2021 / IUSTI'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol', dose: '2g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Erste Wahl. Partner mitbehandeln!' },
                  { drug: 'Tinidazol', dose: '2g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Alternative' },
                  { drug: 'Metronidazol', dose: '500mg 2x/Tag p.o.', duration: '7 Tage', note: 'Alternative (z.B. bei HIV-Positiven)' }
                ]
              },
              targeted: 'Metronidazol oder Tinidazol. Alkoholkonsum während der Behandlung verboten (Disulfiram-Effekt)!',
              supportive: ['Sexuelle Abstinenz bis zum Abklingen der Symptome und Behandlung des Partners'],
              prevention: ['Kondome', 'Partnerbehandlung']
            },
            prognosis: { mortality: 'Null', prognostic_scores: [], factors: 'Reinfektion häufig, wenn Partner unbehandelt' }
          }
        ]
}, // End of sexually_transmitted
});