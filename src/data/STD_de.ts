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
            pathogen: { type: 'Virus', name: '<i>Humanes Immundefizienz-Virus</i> (HIV-1, HIV-2)', gram: 'Benumhülltes ssRNA-Retrovirus', shape: 'sphärisch (Lentivirus)' },
            epidemiology: {
              incidence: '~39,9 Millionen Menschen leben weltweit mit HIV; ~1,3 Millionen Neuinfektionen jährlich (UNAIDS 2024)',
              risk_groups: ['Männer, die Sex mit Männern haben (MSM)', 'i.v.-Drogenkonsumenten (PWID)', 'Sexarbeitende', 'Transgender-Personen', 'Inhaftierte Personen', 'Heterosexuelle Partner von HIV-Positiven ohne nachweisbare Viruslast'],
              seasonality: 'Keine',
              transmission: 'Sexuell (anal, vaginal, oral - null Risiko bei Viruslast <50 Kopien/ml [N=N / U=U]), parenteral (Blut, gemeinsame Spritzen, Nadelstichverletzung), vertikal (Mutter-Kind: Schwangerschaft, Geburt, Stillen)'
            },
            pathomechanism: {
              steps: [
                'Eintritt und Bindung: Das virale Hüllglykoprotein gp120 bindet mit hoher Affinität an den CD4-Rezeptor von T-Helferzellen, Makrophagen und dendritischen Zellen, gefolgt von der Bindung an die Chemokin-Korezeptoren CCR5 (R5-trop, Frühstadium/Übertragung) oder CXCR4 (X4-trop, Spätstadium/rasche Progression). gp41 vermittelt die Fusion der Virushülle mit der Wirtszellmembran.',
                'Reverse Transkription und Integration: Virale ssRNA wird durch die fehlerträchtige HIV-Reverse Transkriptase in cDNA umgeschrieben (hohe Mutationsrate und Quasispezies-Bildung). Virale Integrase transportiert provirale cDNA in den Zellkern und integriert sie dauerhaft in das Wirtsgenom, wodurch persistierende latente Reservoire entstehen (Gedächtnis-CD4+-T-Zellen).',
                'Erschöpfung des Immunsystems und GALT-Depletion: Frühzeitiger massiver Verlust des darmassoziierten lymphoiden Gewebes (GALT) führt zum Kollaps der Darmbarriere, mikrobieller Translokation und chronischer systemischer Entzündung. Persistierende Virusreplikation führt zur Pyroptose infizierter CD4+-T-Zellen und Apoptose nicht-infizierter Bystander-Zellen.',
                'Fortgeschrittener Immundefekt (AIDS): Der fortschreitende Abfall der CD4+-T-Zellzahl (<200/µL) führt zum schweren kollapsbedingten Ausfall der zellulären Immunität und prädisponiert für opportunistische Infektionen (OI), Reaktivierung latenter Erreger und AIDS-definierende Malignome.'
              ],
              virulence_factors: ['gp120 / gp41 (Rezeptorbindung & Membranfusion)', 'Reverse Transkriptase (Fehlerträchtigkeit, Mutationsgenerator)', 'Integrase (Genomintegration & Reservoiretablierung)', 'Kapsid p24 (Viruskern & Kerneintritt)', 'Nef (CD4- & MHC-I-Downregulation, Immunflucht)', 'Tat, Rev, Vif, Vpr, Vpu (Transkriptionsregulation, Infektiösität & Immunmodulation)']
            },
            clinical: {
              incubation: '2-4 Wochen für das Akute Retrovirale Syndrom (ARS); median 8-10 Jahre für die klinische Progression zu AIDS ohne ART',
              onset: 'Akut (ARS) oder chronisch/latent',
              symptoms: [
                { name: 'Akutes retrovirales Syndrom (ARS / Akutes HIV)', description: 'Mononukleose-ähnliche fieberhafte Erkrankung 2-4 Wochen nach Exposition bei 50-80% der Infizierten: hohes Fieber, schmerzhafte Pharyngitis mit flachen Schleimhaut-/Mundulzera, generalisierte Lymphadenopathie, erythematöses makulopapulöses Exanthem (Rumpf/Gesicht), Myalgien/Arthralgien, Kopfschmerzen/aseptische Meningitis und Diarrhö. Begleitet von exzessiver Viruslast (>1.000.000 Kopien/ml) und vorübergehendem CD4-Abfall.', severity: 'moderate' },
                { name: 'Klinische Latenz (Asymptomatisches chronisches Stadium)', description: 'Symptomfreie oder symptomarme Phase von durchschnittlich 8-10 Jahren ohne Behandlung. Kontinuierliche aktive Virusreplikation in lymphoiden Geweben. Persistierende Generalisierte Lymphadenopathie (PGL, vergrößerte LK ≥1 cm an ≥2 extrainguinalen Lokalisationen für >3 Monate) möglich.', severity: 'mild' },
                { name: 'Symptomatisches Nicht-AIDS-Stadium (CDC-Kategorie B)', description: 'Auftreten von Zeichen der Immunschwäche: persistierendes unklares Fieber, Nachtschweiß, Diarrhö >1 Monat, orale Candidose (Soor), orale Haarleukoplakie (EBV), rezidivierender/multidermatomalet Herpes zoster, vulvovaginale Candidose, zervikale Dysplasie und periphere Neuropathie.', severity: 'moderate' },
                { name: 'Fortgeschrittene HIV-Erkrankung (Advanced HIV Disease - AHD) / AIDS-Stadium (CDC-Kategorie C / WHO-Stadium 4)', description: 'Definiert durch CD4-Zahl <200/µL oder Vorhandensein AIDS-definierender Erkrankungen: Opportunistische Infektionen (Pneumocystis jirovecii-Pneumonie, Kryptokokken-Meningitis, Toxoplasma-Enzephalitis, CMV-Retinitis/Colitis, disseminierte TB oder MAC, ösophageale Candidose, PML) und Malignome (Kaposi-Sarkom, Non-Hodgkin-Lymphom, primäres ZNS-Lymphom, invasives Zervixkarzinom).', severity: 'severe' }
              ],
              physical_exam: [
                'Persistierende Generalisierte Lymphadenopathie (PGL)',
                'Mundhöhle: Pseudomembranöse orale Candidose (abstreifbare weiße Beläge), orale Haarleukoplakie (geriffelte, nicht abstreifbare Beläge am seitlichen Zungenrand), Aphthen, Kaposi-Sarkom-Läsionen am Gaumen',
                'Haut: Seborrhoisches Ekzem, Kaposi-Sarkom (violette Maculae, Papeln oder Knoten), Molluscum contagiosum, multidermatomalet Herpes zoster, schwere Follikulitis',
                'Neurologisch: Fokale Ausfälle (Toxoplasma, primäres ZNS-Lymphom, PML), Meningismus/Verwirrtheit (Kryptokokken-Meningitis), distale symmetrische Polyneuropathie',
                'Allgemeinsymptome: Kachexie (HIV-Wasting-Syndrom), Fieber, Nachtschweiß'
              ],
              complications: ['Pneumocystis jirovecii-Pneumonie (PCP)', 'Kryptokokken-Meningitis', 'Toxoplasma-Enzephalitis', 'CMV-Retinitis / Colitis / Ösophagitis', 'Disseminierte TB / MAC', 'Kaposi-Sarkom', 'Non-Hodgkin-Lymphom / Primäres ZNS-Lymphom', 'Progressive Multifokale Leukenzephalopathie (PML)', 'HIV-assoziierte neurokognitive Störung (HAND)', 'HIV-assoziierte Nephropathie (HIVAN)', 'Immunrekonstitutionssyndrom (IRIS)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4+-T-Zellzahl & Prozentwert', finding: 'Abfallend (<200/µL = AHD / AIDS-Stadium; <14%)', interpretation: 'Stadieneinteilung des Immundefekts, Bestimmung des OI-Risikos und Indikation zur primären OI-Prophylaxe' },
                { test: 'Blutbild & Organfunktionen', finding: 'Anämie, Leukopenie/Lymphopenie, Thrombozytopenie, erhöhtes Kreatinin/Harnstoff, Transaminasen', interpretation: 'Screening auf Zytopenien, Organdysfunktionen und Baseline-Leber-/Nierenwerte vor ART-Start' },
                { test: 'Metabolisches & Kardiovaskuläres Panel', finding: 'Nüchternlipide, Blutzucker, HbA1c', interpretation: 'Baseline-Erfassung vor ART-Start zur Steuerung des langfristigen kardiometabolischen Risikos' }
              ],
              microbiology: [
                { test: 'Suchtest (4. Generation Ag/Ab-Kombi-ELISA/ECLIA)', finding: 'p24-Antigen und HIV-1/2-Antikörper positiv', significance: 'Erstlinien-Suchtest mit kurzem diagnostischen Fenster (2-3 Wochen). Bei Positivität Bestätigungstestung zwingend erforderlich!' },
                { test: 'Bestätigungstest (HIV-1/HIV-2-Differenzierungs-Immunoassay / NAT)', finding: 'Positiv (differenziert HIV-1 vs. HIV-2)', significance: 'Endgültige Diagnosesicherung und Virustypisierung' },
                { test: 'HIV-RNA-PCR quantitativ (Viruslast)', finding: 'Kopien/ml', significance: 'Unerlässlich zur Diagnose akuter Infektionen (p24+/Ak-), Ausgangswerterfassung und Therapiemonitoring (Ziel: <50 Kopien/ml)' },
                { test: 'Genotypische Resistenztestung (GRT)', finding: 'Pre-treatment Resistenzmutationen', significance: 'Vor ART-Start bei allen Neudiagnostizierten obligatorisch (Testung von RT, Protease und Integrase)' },
                { test: 'HLA-B*5701 Genetik', finding: 'Positiv oder Negativ', significance: 'ZWINGEND OBLIGATORISCH vor Abacavir (ABC)-Gabe (Verhinderung einer schweren, potenziell tödlichen Abacavir-Überempfindlichkeitsreaktion!)' },
                { test: 'Koinfektions-Screening-Paket', finding: 'HBV (HBsAg, Anti-HBs, Anti-HBc), HCV (Anti-HCV, HCV-RNA), Syphilis (TPHA/RPR), STD-NAAT, IGRA/Tubertest für TB', significance: 'Umfassendes Baseline-Screening vor Beginn der ART' },
                { test: 'AHD-Diagnostik-Paket (bei CD4 <200/µL oder schwerer Erkrankung)', finding: 'Serum-CrAg LFA (Kryptokokken-Antigen) + Urin-TB-LAM', significance: 'Schnelles Point-of-Care-Screening auf okkulte Kryptokokkose und aktive Tuberkulose' }
              ]
            },
            differential: [
              { disease: 'Mononukleose (EBV / CMV)', distinguishing: 'Heterophile Antikörper positiv (EBV), atypische Lymphozyten, negativer 4.-Gen-HIV-Test' },
              { disease: 'Akute virale Exantheme (HHV-6, Parvovirus B19, Enterovirus)', distinguishing: 'Negativer HIV-Ag/Ak-Test und Viruslast, fehlen schmerzhafter Mundulzera' },
              { disease: 'Sekundäre Syphilis', distinguishing: 'Treponemale/Nicht-treponemale Serologie positiv (TPHA/RPR), Beteiligung von Handflächen/Fußsohlen' },
              { disease: 'Influenza / COVID-19 / Akute respiratorische Infekte', distinguishing: 'Respiratorische Symptomatik dominiert, PCR positiv, HIV-RNA negativ' }
            ],
            therapy: {
              guidelines: ['EACS Guidelines Version 12.1 (2024)', 'Deutsch-Österreichische Leitlinien (DÖAG 2024)', 'DHHS Guidelines (2024)', 'IAS-USA Panel Recommendations (2024)', 'WHO Guidelines (2023/2024)'],
              empirical: {
                drug_classes: {
                  title: 'Antiretrovirale Medikamentenklassen (ART)',
                  drugs: [
                    { drug: 'INSTI (Integrase-Inhibitoren)', dose: '-', duration: '-', note: 'Bevorzugte Kernklasse (höchste Resistenzbarriere, schnellster Viruslastabfall): Bictegravir, Dolutegravir, Cabotegravir, Raltegravir' },
                    { drug: 'NRTI (Nukleoside/Nukleotid-RT-Inhibitoren)', dose: '-', duration: '-', note: 'Rückgrat-Klasse: Tenofoviralafenamid (TAF), Tenofovirdisoproxil (TDF), Emtricitabin (FTC), Lamivudin (3TC), Abacavir (ABC)' },
                    { drug: 'NNRTI (Nicht-nukleoside RT-Inhibitoren)', dose: '-', duration: '-', note: 'Alternative Klasse: Doravirin (DOR), Rilpivirin (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Protease-Inhibitoren)', dose: '-', duration: '-', note: 'Alternative/Reserve-Klasse: Darunavir (DRV), Atazanavir (ATV) geboostert mit Ritonavir (RTV) oder Cobicistat (COBI)' },
                    { drug: 'Kapsid-Inhibitor (Neue Klasse)', dose: '-', duration: '-', note: 'Lenacapavir (LEN) - langwirksame s.c.-Injektion alle 6 Monate bei multidrug-resistenter (MDR) HIV-Infektion' },
                    { drug: 'Eintritts- & Anheftungs-Inhibitoren', dose: '-', duration: '-', note: 'Fostemsavir (Anheftungs-Inhibitor), Ibalizumab (monoklonaler Antikörper), Maraviroc (CCR5-Antagonist)' }
                  ]
                },
                combinations: {
                  title: 'Erstlinien-Therapiestrategien (Leitlinien 2024)',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI (3-Medikamente-Regime)', dose: '-', duration: '-', note: 'Standard Goldstandard (z. B. BIC/TAF/FTC oder DTG + TAF/FTC)' },
                    { drug: '1 NRTI + 1 INSTI (2-Medikamente-Regime)', dose: '-', duration: '-', note: 'Dolutegravir / Lamivudin (DTG/3TC) - bevorzugtes initiales 2-Medikamente-Regime unter spezifischen Baseline-Kriterien' },
                    { drug: 'Langwirksame injizierbare ART (Long-Acting Injectable)', dose: '-', duration: '-', note: 'Cabotegravir + Rilpivirin (CAB/RPV) i.m.-Injektion alle 2 Monate zur Umstellung bei stabil supprimierten Patienten (<50 Kopien/ml)' }
                  ]
                },
                regimens: {
                  title: 'Bevorzugte konkrete Erstlinien-Regime (EACS 12.1 & DÖAG 2024)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofoviralafenamid (TAF) / Emtricitabin (FTC)', dose: '1 Tab (50/25/200mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugtes Single Tablet Regimen (STR, Biktarvy). Höchste Resistenzbarriere, kein HLA-Test nötig, wirksam unabhängig von Ausgangsviruslast/CD4.' },
                    { drug: 'Dolutegravir + Tenofovir (TAF oder TDF) + Emtricitabin (FTC) / Lamivudin (3TC)', dose: '50mg DTG + 1 Tab TAF/FTC p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugte Erstlinie mit hoher Resistenzbarriere.' },
                    { drug: 'Dolutegravir / Lamivudin (DTG/3TC)', dose: '1 Tab (50/300mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugtes 2-Medikamente-STR (Dovato). BEDINGUNGEN: Ausgangsviruslast <500.000 Kopien/ml, keine aktive HBV-Koinfektion, keine NRTI/INSTI-Resistenz.' },
                    { drug: 'Dolutegravir / Abacavir / Lamivudin (DTG/ABC/3TC)', dose: '1 Tab (50/600/300mg) p.o. 1x/Tag', duration: 'Lebenslang', note: 'Bevorzugtes STR (Triumeq) NUR bei HLA-B*5701 NEGATIVE und HBsAg NEGATIVE Patienten!' },
                    { drug: 'Cabotegravir + Rilpivirin (CAB/RPV i.m.-Injektion)', dose: 'i.m.-Injektion alle 2 Monate (nach oraler Einleitung oder direkt i.m.)', duration: 'Lebenslang', note: 'Switcheinleitung für virologisch stabil supprimierte (<50 Kopien/ml seit ≥6 Monaten) Patienten ohne bisheriges Therapieversagen/Resistenzen.' }
                  ]
                }
              },
              targeted: 'Schneller ART-Start (Rapid / Same-day Initiation): Die ART sollte unmittelbar am Tag der Diagnose oder so schnell wie möglich bei ALLEN Menschen mit HIV begonnen werden ("Treat All"). Ziel: Erreichen und Aufrechterhalten einer nicht nachweisbaren Viruslast (<50 Kopien/ml) innerhalb von 1-3 Monaten, Erhalt der Immunfunktion, Verhinderung der Übertragung (N=N) und Reduktion von Nicht-AIDS-Morbidität.',
              supportive: [
                'PCP-Primärprophylaxe: Indiziert bei CD4 <200/µL oder CD4% <14%. Erstlinie: Trimethoprim-Sulfamethoxazol (TMP-SMX) 960mg p.o. 1x/Tag (oder 3x/Woche). Absetzen, wenn CD4 >200/µL für ≥3 Monate unter ART.',
                'Toxoplasmose-Primärprophylaxe: Indiziert bei CD4 <100/µL UND Toxoplasma-IgG positiv. Erstlinie: TMP-SMX 960mg p.o. 1x/Tag (deckt PCP und Toxo ab). Absetzen, wenn CD4 >200/µL für ≥3 Monate unter ART.',
                'Primäre MAC-Prophylaxe: Eine routinemäßige MAC-Prophylaxe wird in der Ära des sofortigen ART-Starts NICHT MEHR EMPFOHLEN.',
                'Kryptokokken-Screening & Präemptive Therapie: Routinemäßiges CrAg-LFA-Screening bei CD4 <200/µL. Bei CrAg+ Ausschluss Meningitis; falls asymptomatisch, Behandlung mit Fluconazol 800mg/Tag für 2 Wochen, dann 400mg/Tag.',
                'Impfungen: Pneumokokken (PCV15/20 + PPSV23), Influenza (jährlich), HBV (40µg Doppeldosis bei Non-Respondern), HAV, HPV (bis Alter 26-45), Meningokokken, Totimpfstoff gegen Herpes Zoster (RZV - Shingrix). Lebendimpfstoffe (MMR, Varizellen, Gelbfieber) KONTRAINDIZIERT bei CD4 <200/µL!'
              ],
              prevention: [
                'N=N / U=U (Nicht nachweisbar = Nicht übertragbar / Undetectable = Untransmittable): Menschen mit HIV unter wirksamer ART (<50 Kopien/ml seit ≥6 Monaten) können das Virus sexuell NICHT übertragen!',
                'PrEP (Prä-Expositionsprophylaxe): Täglich orales TDF/FTC oder TAF/FTC; anlassbezogene "2-1-1"-PrEP mit TDF/FTC bei MSM. Langwirksame injizierbare PrEP: Cabotegravir LA (alle 2 Monate i.m.) oder Lenacapavir (alle 6 Monate s.c.).',
                'PEP (Post-Expositionsprophylaxe): Beginn innerhalb von 72 Stunden (idealerweise <24h) nach Exposition für 28 Tage. Bevorzugtes 3-Medikamente-Regime: TDF/FTC (oder TAF/FTC) + Dolutegravir (oder Bictegravir oder Raltegravir).',
                'PMTCT (Mutter-Kind-Übertragung): Universelles Schwangerschaftsscreening, sofortige DTG-basierte ART, vaginaler Entbindungsweg bei Viruslast <50 Kopien/ml in SSW 34-36 (reine Resectio bei VL >50), postexpositionelle Prophylaxe beim Neugeborenen (Zidovudin oder Mehrfach-ART).'
              ]
            },
            guidelines: {
              diagnosis: [
                'Screening: 4.-Gen-Ag/Ak-Kombinationstest (p24-Antigen + Antikörper).',
                'Bestätigung: HIV-1/2-Differenzierungs-Immunoassay oder NAT.',
                'Pre-ART-Baseline: CD4-Zahl & %, HIV-RNA-Viruslast, Genotypische Resistenztestung (GRT), HLA-B*5701 (vor Abacavir), HBV/HCV-Serologie, Syphilis- und STD-Screening, Stoffwechsel/Niere/Leber-Baseline.',
                'AHD-Paket (bei CD4 <200/µL oder schwerer Erkrankung): Serum-CrAg LFA (Kryptokokkose) und Urin-TB-LAM (Tuberkulose).'
              ],
              treatment_indications: [
                'Universelle Empfehlung zum unverzüglichen Beginn der ART ("Treat All / Same-Day ART").',
                'Ausnahmen: Bei Kryptokokken-Meningitis Aufschub der ART um 2-6 Wochen, bei TB-Meningitis Aufschub um 2-8 Wochen (oder 2-4 Wochen bei CD4 <50) zur Verhinderung eines lebensbedrohlichen ZNS-IRIS.'
              ],
              first_line: [
                '1. Bictegravir / TAF / FTC (BIC/TAF/FTC - bevorzugtes 3-Medikamente-STR)',
                '2. Dolutegravir + TAF/FTC oder TDF/FTC (bevorzugtes 3-Medikamente-Regime)',
                '3. Dolutegravir / Lamivudin (DTG/3TC - bevorzugtes 2-Medikamente-STR bei VL <500k & HBV-negativ)',
                '4. Dolutegravir / ABC / 3TC (bei HLA-B*5701-negativ & HBV-negativ)',
                '5. Cabotegravir + Rilpivirin (CAB/RPV i.m.-Injektion - Erhaltungsswitch bei supprimierten Patienten)'
              ],
              monitoring: [
                'Plasma-Viruslast: Nach 1, 3 und 6 Monaten nach ART-Start/Wechsel, dann alle 6 Monate bei Stabilität (<50 Kopien/ml).',
                'CD4-Zahl: Initial alle 3-6 Monate; wenn Viruslast dauerhaft supprimiert (<50 Kopien/ml) und CD4 >350/µL seit ≥1-2 Jahren, kann das Routine-CD4-Monitoring eingestellt werden.'
              ],
              special_populations: [
                'Schwangerschaft: DTG-basierte ART bevorzugt.',
                'TB-Koinfektion: ART-Start innerhalb von 2 Wochen bei CD4 <50, sonst 2-8 Wochen; Verdopplung der Dolutegravir-Dosis auf 2x50mg/Tag unter Rifampicin!',
                'HBV-Koinfektion: Regime MUSS TAF/FTC, TDF/FTC oder TDF/3TC enthalten (niemals 3TC alleine).',
                'Niereninsuffizienz: TAF gegenüber TDF bevorzugt bei eGFR <60 ml/min oder Osteopenie/Osteoporose.'
              ]
            },
            prognosis: {
              mortality: 'Bei rechtzeitiger Diagnose und adhärenter ART nahezu normale Lebenserwartung; unbehandelte fortgeschrittene HIV-Erkrankung (AHD) / AIDS ist mit hoher Mortalität durch OIs und Malignome verbunden.',
              prognostic_scores: ['CD4+-T-Zellzahl und Prozentwert', 'Plasma-HIV-RNA-Viruslast', 'AHD-Status / Vorhandensein aktiver opportunistischer Infektionen', 'VACS-Index (Veterans Aging Cohort Study Index)'],
              factors: 'Therapieadhärenz (wichtigster Faktor), frühzeitige Diagnose vor schwerer Immunerschöpfung, unverzüglicher ART-Start, dauerhafte Virusunterdrückung, konsequentes Management von Nicht-AIDS-Komorbiditäten (kardiovaskulär, renal, hepatisch, metabolisch).'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhoe (Tripper)',
            pathogen: { type: 'Bakterium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negativ', shape: 'Diplokokken (intrazellulär)' },
            epidemiology: {
              incidence: 'Hohe globale Prävalenz; rasche Zunahme multiresistenter Stämme (MDR/XDR-Stämme)',
              risk_groups: ['Sexuell aktive junge Erwachsene (<25 Jahre)', 'MSM (Männer, die Sex mit Männern haben)', 'Personen mit neuen oder mehreren Sexualpartnern', 'Inkonsequenter Kondomgebrauch'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt (vaginal, anal, oral), vertikal (perinatal als Ophthalmia neonatorum)'
            },
            pathomechanism: {
              steps: [
                'Adhäsion & Kolonisierung: Pili (Fimbrien) und Opa-Proteine der Außenmembran vermitteln die Bindung an nicht-geflimmerte Zylinderepithelzellen von Urethra, Zervix, Rektum oder Pharynx.',
                'Invasion & Transzytose: Die Bakterien induzieren eine rezeptorvermittelte Endozytose, überleben intrazellulär und gelangen durch Transzytose in das subepitheliale Gewebe.',
                'Immunumgehung & Entzündung: Lipooligosaccharid (LOS)-Endotoxin löst eine starke pyogene Wirtsimmunantwort aus. Phasenvariation der Oberflächenantigene und IgA1-Protease-Spaltung unterducken die mukosale Immunität.',
                'Gewebeschädigung: Die massive Rekrutierung von Neutrophilen führt zu Gewebedestruktion, Mikroabszessbildung und profusem eitrigem Ausfluss.'
              ],
              virulence_factors: ['Pili (Adhäsion, Antigenvariation)', 'Opa- & OmpA-Proteine (Wirtszellbindung)', 'LOS (Endotoxin, pyogene Antwort)', 'IgA1-Protease (Spaltung mukosaler Antikörper)', 'PorB-Porine (Inhibition der Phagolysosomenfusion)']
            },
            clinical: {
              incubation: '2-7 Tage (Spannweite 1-14 Tage)',
              onset: 'Akut',
              symptoms: [
                { name: 'Männer: Akute vordere Urethritis', description: 'Plötzlicher Beginn mit profusem, rahmig-eitrigem, gelb-grünlichem Urethralausfluss ("Bonjour-Tropfen") und schwerer Dysurie (>90% symptomatisch). Epididymitis oder Hoden-Druckschmerz möglich.', severity: 'moderate' },
                { name: 'Frauen: Zervizitis', description: '50% der Frauen sind asymptomatisch. Symptomatische Fälle zeigen eitrigen Zervikalausfluss, Zwischenblutungen und Dysurie. Kann zu entzündlicher Beckenerkrankung (PID) aufsteigen.', severity: 'moderate' },
                { name: 'Anorektale & Pharyngeale Infektion', description: 'Anorektal: eitriger Ausfluss, Tenesmen, Stuhldrang oder Rektalblutung (50% asymptomatisch). Pharyngeal: meist asymptomatisch (90%) oder milde Pharyngitis mit zervikaler Lymphadenopathie.', severity: 'moderate' },
                { name: 'Disseminierte Gonokokkeninfektion (DGI)', description: 'Bakteriämische Streuung mit klassischer Trias: Tenosynovitis, Polyarthralgien und akralen purpurischen/pustulösen Hautläsionen. Oder eitrige septische Arthritis.', severity: 'severe' }
              ],
              physical_exam: [
                'Männer: Reichlicher eitriger Urethralausfluss, Urethralmeatus-Erythem/Ödem',
                'Frauen: Mukopurulenter Zervikalausfluss, Portioschiebeschmerz (bei PID), leicht verletzliche Zervix',
                'DGI: Purpurische oder pustulöse Hautveränderungen an Extremitäten, geschwollene erythematöse Gelenke (Handgelenk, Knie, Sprunggelenk)'
              ],
              complications: ['Beckenentzündung (PID)', 'Tubare Infertilität', 'Eileiterschwangerschaft', 'Epididymoorchitis', 'Disseminierte Gonokokkeninfektion (DGI)', 'Ophthalmia neonatorum']
            },
            diagnostics: {
              laboratory: [
                { test: 'Routine-Blutbild & CRP', finding: 'Leukozytose und erhöhtes CRP bei DGI oder schwerer PID', interpretation: 'Systemisches Entzündungsmonitoring' }
              ],
              microbiology: [
                { test: 'NAAT (Nukleinsäure-Amplifikationstest)', finding: 'Positiv für N. gonorrhoeae DNA/RNA', significance: 'Goldstandard der Diagnostik (Erststrahlurin bei Männern, Selbstabstrich/Zervixabstrich bei Frauen; Pharynx-/Rektalabstrich bei MSM)' },
                { test: 'Gram-Färbung / Mikroskopie', finding: 'Intrazelluläre Gram-negative Diplokokken in polymorphkernigen Leukozyten (PMNs)', significance: 'Diagnostisch bei symptomatischen Männern (Sensitivität >95%); geringere Sensitivität bei Frauen (50-60%) oder Pharyngealabstrichen' },
                { test: 'Kultur & Resistenzprüfung (Resistogramm)', finding: 'Wachstum auf Thayer-Martin-Nährmedium mit MHK-Resistenzprofil', significance: 'OBLIGATORISCH bei Verdacht auf Therapieversagen, Resistenzsurveillance oder forensischen Fragestellungen' }
              ]
            },
            differential: [
              { disease: 'Chlamydia trachomatis Urethritis/Zervizitis', distinguishing: 'Längere Inkubationszeit (1-3 Wochen), glasig-schleimiger Ausfluss, mildere Symptome' },
              { disease: 'Mycoplasma genitalium', distinguishing: 'Persistierende Urethritis trotz Ceftriaxon, erfordert spezifische M. genitalium NAAT' },
              { disease: 'Trichomoniasis', distinguishing: 'Schaumiger gelb-grüner Ausfluss, Vaginal-pH >4,5, Nativpräparat/NAAT positiv' },
              { disease: 'Septische Arthritis (Staphylokokken/Streptokokken)', distinguishing: 'Monoartikulär, keine Hautpusteln, negative genitale STI-NAAT' }
            ],
            therapy: {
              guidelines: ['AWMF S2k-Leitlinie Gonorrhoe (2023)', 'IUSTI European Gonorrhea Guideline (2020/2024)', 'CDC STI Guidelines (2021/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxon', dose: '1 g i.m. (oder i.v.) Einzeldosis', duration: 'Einzeldosis', note: 'Erstlinien-Monotherapie gemäß AWMF 2023 und IUSTI (CDC empfiehlt 500mg, bei ≥150kg 1g).' },
                  { drug: 'Mitbehandlung Chlamydien (falls nicht ausgeschlossen)', dose: 'Doxycyclin 100 mg p.o. 2x/Tag', duration: '7 Tage', note: 'Zusätzlich Doxycyclin, falls eine Chlamydien-Koinfektion nicht ausgeschlossen ist!' },
                  { drug: 'Alternative bei Cephalosporin-Allergie', dose: 'Gentamicin 240 mg i.m. + Azithromycin 2g p.o.', duration: 'Einzeldosis', note: 'Empfohlene Alternative bei schwerer Penicillin-/Cephalosporin-Allergie.' },
                  { drug: 'Orale Cephalosporin-Alternative: Cefixim', dose: '800 mg p.o.', duration: 'Einzeldosis', note: 'Zweitlinien-Option, falls i.m.-Gabe nicht möglich (+ Doxycyclin 100mg 2x/Tag x 7T).' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon (Stationär bei DGI)', dose: '1 g i.v./i.m. alle 24 Stunden', duration: '7 Tage', note: 'Erstlinien-Behandlung der Disseminierten Gonokokkeninfektion (DGI).' }
                ]
              },
              targeted: 'Die Therapie muss an das Resistenzprofil (Resistogramm) angepasst werden. Hohe Wachsamkeit gegenüber Cephalosporin-resistenten Stämmen.',
              supportive: ['Sexuelle Abstinenz für 7 Tage nach Therapieende und bis alle Partner behandelt sind', 'Obligatorische Benachrichtigung und Mitbehandlung aller Sexualpartner der letzten 60 Tage', 'Test of Cure (TOC) nach 7-14 Tagen bei pharyngealer Gonorrhoe oder Alternativtherapie'],
              prevention: ['Kondomgebrauch', 'Screening in Risikogruppen', 'Partnerbenachrichtigung']
            },
            guidelines: {
              diagnosis: [
                'Erstlinien-Diagnostik: NAAT (Erststrahlurin beim Mann, Vaginal-/Zervikalabstrich bei der Frau, plus Rektal- und Pharyngealabstriche je nach Anamnese).',
                'Mikroskopie (Gram-Färbung): Hohe Sensitivität und Spezifität bei symptomatischer männlicher Urethritis.',
                'Kultur und Resistenztestung: Indiziert bei persistierenden Symptomen, Verdacht auf Therapieversagen oder hoher lokaler Resistenzlage.'
              ],
              treatment_indications: [
                'Alle Personen mit positivem NAAT-, Kultur- oder Mikroskopiebefund für N. gonorrhoeae.',
                'Empirische Mitbehandlung von Sexualpartnern der letzten 60 Tage.'
              ],
              first_line: [
                'Unkomplizierte Gonorrhoe (Zervix, Urethra, Rektum, Pharynx): Ceftriaxon 1 g i.m./i.v. Einzeldosis (gemäß AWMF 2023 / IUSTI; CDC empfiehlt 500mg i.m.).',
                'Zusätzlich Doxycyclin 100 mg p.o. BID für 7 Tage, falls eine Chlamydien-Koinfektion nicht ausgeschlossen wurde.',
                'Disseminierte Gonokokkeninfektion (DGI): Ceftriaxon 1 g i.v./i.m. täglich für mindestens 7 Tage.'
              ],
              special_populations: [
                'Cephalosporin-Allergie: Gentamicin 240 mg i.m. Einzeldosis + Azithromycin 2g p.o. Einzeldosis.',
                'Schwangerschaft: Ceftriaxon 1g i.m. Einzeldosis + Azithromycin 1g p.o. Einzeldosis (falls Chlamydien-Koinfektion vorliegt; Doxycyclin kontraindiziert!).',
                'Ophthalmia neonatorum: Ceftriaxon 25-50 mg/kg i.v./i.m. Einzeldosis (max. 125 mg).'
              ],
              monitoring: [
                'Test of Cure (TOC): Dringend empfohlen bei pharyngealer Infektion (NAAT nach 14 Tagen oder Kultur nach 3-7 Tagen) und bei Anwendung von Alternativregimen.',
                'Kontroll-Screening: Nachkontrolle aller Patienten nach 3 Monaten zur Erfassung von Reinfektionen.'
              ],
              references: [
                'AWMF S2k-Leitlinie: Diagnostik und Therapie der Gonorrhoe (2023)',
                'IUSTI: European guideline on the diagnosis and management of gonorrhea in adults (2020/2024)',
                'CDC STI Treatment Guidelines, 2021/2024'
              ]
            },
            prognosis: {
              mortality: 'Sehr geringe Mortalität; Morbidität resultiert aus unbehandelter aufsteigender Infektion (PID, Infertilität) oder DGI.',
              prognostic_scores: ['Erreger-Resistenzprofil (MHK)'],
              factors: 'Frühzeitige adäquate Antibiotikatherapie, Partner-Mitbehandlung, Einhaltung von Kontrolluntersuchungen'
            }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydien-Infektion',
            pathogen: { type: 'Bakterium', name: '<i>Chlamydia trachomatis</i> (Serovare D-K, L1-L3)', gram: 'Gram-negativ (obligat intrazellulär)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Häufigste bakterielle STI weltweit (~128 Millionen Fälle jährlich)',
              risk_groups: ['Sexuell aktive Frauen <25 Jahre', 'Personen mit neuen oder mehreren Sexualpartnern', 'MSM', 'Frühere STI-Anamnese'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt (vaginal, anal, oral), vertikal (perinatal unter der Geburt)'
            },
            pathomechanism: {
              steps: [
                'Infektiöser biphasischer Lebenszyklus: Extrazelluläre infektiöse Elementarkörperchen (EB) haften an mukosalen Zylinderepithelzellen und treten ein.',
                'Intrazelluläre Replikation: In zellulären Inklusionen differenzieren sich EBs zu stoffwechselaktiven, nicht-infektiösen Retikularkörperchen (RB), die sich durch Zweiteilung vermehren.',
                'Rückdifferenzierung & Lyse: RBs differenzieren sich zurück zu EBs; die Lyse der Wirtszelle setzt EBs frei, die Nachbarzellen infizieren.',
                'Fibrotische Gewebedestruktion: Chronische persisitierende Schleimhautentzündung führt zu immunvermittelter Gewebezerstörung, Vernarbung und Tubenverschluss.'
              ],
              virulence_factors: ['Obligate intrazelluläre Persistenz', 'Hitzeschockprotein 60 (Hsp60, induziert chronische fibrotische Entzündung)', 'Typ-III-Sekretionssystem (T3SS)', 'Typspezifische MOMP-Antigene']
            },
            clinical: {
              incubation: '1-3 Wochen (Spannweite 5-21 Tage)',
              onset: 'Schleichend oder vollständig asymptomatisch',
              symptoms: [
                { name: 'Asymptomatische Infektion ("Stille Epidemie")', description: '70-80% der infizierten Frauen und 50% der Männer sind symptomlos und dienen als unbemerkte Erregerreservoire.', severity: 'mild' },
                { name: 'Frauen: Zervizitis & Urethritis', description: 'Schleimig-eitriger Zervikalausfluss, Zervixvulnerabilität (Kontaktblutung bei Abstrich), Zwischen- oder Kontaktblutungen, Dysurie und Unterbauchschmerzen.', severity: 'moderate' },
                { name: 'Männer: Nicht-gonorrhoische Urethritis (NGU)', description: 'Sparsamer glasiger oder wässrig-schleimiger Urethralausfluss ("Lusttropfen"), milde Dysurie, urethraler Pruritus. Epididymitis (einseitiger Hoden-Druckschmerz/Schwellung).', severity: 'moderate' },
                { name: 'Lymphogranuloma venereum (LGV - Serovare L1-L3)', description: 'Flüchtiges schmerzloses genitales Ulkus, gefolgt von schmerzhafter einseitiger inguinaler Lymphadenopathie ("Buboes") mit "Groove-Sign" oder schwerer hämorrhagischer Proktokolitis bei MSM.', severity: 'severe' }
              ],
              physical_exam: [
                'Frauen: Mukopurulenter Zervikalausfluss, Zervixerythem/-vulnerabilität, Portioschiebeschmerz (bei PID)',
                'Männer: Glasiger/schleimiger Ausfluss, Epididymis-Druckschmerz',
                'LGV: Schmerzhafte verbackene inguinale Lymphknotenpakete (Buboen) oder ulzerative Proktitis'
              ],
              complications: ['Beckenentzündung (PID)', 'Tubare Infertilität', 'Eileiterschwangerschaft', 'Fitz-Hugh-Curtis-Syndrom (Perihepatitis)', 'Reaktive Arthritis (Trias: Urethritis, Konjunktivitis, Arthritis)', 'Neugeborenen-Konjunktivitis & interstitielle Pneumonie']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urin-Stix / Leukozyten', finding: 'Sterile Pyurie (Leukozyten im Urin ohne bakterielles Wachstum im Standardurinstatus)', interpretation: 'Klassischer Hinweis auf C. trachomatis oder Ureaplasma' }
              ],
              microbiology: [
                { test: 'NAAT (Nukleinsäure-Amplifikationstest)', finding: 'Positiv für C. trachomatis DNA/RNA', significance: 'Goldstandard der Diagnostik (Erststrahlurin bei Männern; Selbstabstrich aus Vagina oder Zervixabstrich bei Frauen; Rektalabstrich bei MSM)' },
                { test: 'LGV-Genotypisierung (PCR)', finding: 'Nachweis von L1-, L2- oder L3-Serovaren', significance: 'Indiziert bei ulzerativer Proktitis oder suppurativer Lymphadenopathie (erfordert 21-tägige Therapie)' }
              ]
            },
            differential: [
              { disease: 'Neisseria gonorrhoeae', distinguishing: 'Kürzere Inkubationszeit (2-7 Tage), reichlich eitriger Ausfluss, Gram-negative Diplokokken' },
              { disease: 'Mycoplasma genitalium', distinguishing: 'Persistierende NGU nach Doxycyclin, erfordert spezifische M. genitalium NAAT' },
              { disease: 'Trichomoniasis', distinguishing: 'Schaumiger gelb-grüner Ausfluss, Vaginal-pH >4,5, bewegliche Protozoen' },
              { disease: 'Herpes simplex Virus', distinguishing: 'Schmerzhafte gruppierte Bläschen/Ulzera statt Urethralausfluss' }
            ],
            therapy: {
              guidelines: ['AWMF / IUSTI European Chlamydia Guideline (2020/2024)', 'CDC STI Guidelines (2021/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '100 mg p.o. 2x/Tag', duration: '7 Tage', note: 'Erstlinien-Standardtherapie für unkomplizierte anogenitale Chlamydien (Aktualisiert im CDC 2021 & IUSTI aufgrund überlegener Wirksamkeit gegenüber Azithromycin, insb. rektal).' },
                  { drug: 'Azithromycin (Zweitlinie / Schwangerschaft)', dose: '1 g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Alternative; Erstlinien-Wahl in der Schwangerschaft oder bei unzuverlässiger Compliance.' },
                  { drug: 'LGV-Therapie (Serovare L1-L3)', dose: 'Doxycyclin 100 mg p.o. 2x/Tag', duration: '21 Tage', note: 'Verlängerte 21-tägige Therapie bei Lymphogranuloma venereum erforderlich.' },
                  { drug: 'Schwangerschaft Erstlinien-Alternative', dose: 'Amoxicillin 500 mg p.o. 3x/Tag', duration: '7 Tage', note: 'Erstlinien-Alternative in der Schwangerschaft bei Azithromycin-Unverträglichkeit.' }
                ]
              },
              targeted: 'Doxycyclin 100mg 2x täglich für 7 Tage ist bevorzugt für alle nicht-schwangeren Erwachsenen.',
              supportive: ['Sexuelle Abstinenz für 7 Tage nach Behandlungsbeginn und bis alle Partner behandelt sind', 'Obligatorische Benachrichtigung und Mitbehandlung aller Sexualpartner der letzten 60 Tage', 'Screening auf koexistierende STIs (HIV, Syphilis, Gonorrhoe)'],
              prevention: ['Kondomgebrauch', 'Jährliches Screening für alle sexuell aktiven Frauen <25 Jahre und Risikogruppen', 'Partnerbenachrichtigung']
            },
            guidelines: {
              diagnosis: [
                'NAAT ist der obligatorische diagnostische Goldstandard (Erststrahlurin bei Männern, Vaginal-Selbstabstrich bei Frauen).',
                'Rektales NAAT-Screening wird für Personen mit rezeptivem Analverkehr dringend empfohlen.',
                'Serologie wird zur Diagnostik einer akuten urogenitalen Chlamydieninfektion NICHT empfohlen.'
              ],
              treatment_indications: [
                'Alle Personen mit positivem C. trachomatis NAAT-Befund.',
                'Empirische Mitbehandlung aller Sexualpartner der letzten 60 Tage.',
                'Empirische Mitbehandlung bei klinischen Syndromen (mukopurulente Zervizitis, NGU, PID).'
              ],
              first_line: [
                'Nicht-schwangere Erwachsene (Urethra, Zervix, Rektum, Pharynx): Doxycyclin 100 mg p.o. 2x/Tag für 7 Tage.',
                'Lymphogranuloma venereum (LGV): Doxycyclin 100 mg p.o. 2x/Tag für 21 Tage.'
              ],
              special_populations: [
                'Schwangerschaft: Azithromycin 1 g p.o. Einzeldosis ODER Amoxicillin 500 mg p.o. 3x/Tag für 7 Tage (Doxycyclin ist in der Schwangerschaft KONTRAINDIZIERT!).',
                'Neugeborenen-Konjunktivitis/Pneumonie: Erythromycin 50 mg/kg/Tag p.o. aufgeteilt in 4 Einzeldosen für 14 Tage ODER Azithromycin 20 mg/kg/Tag p.o. für 3 Tage.'
              ],
              monitoring: [
                'Test of Cure (TOC): Bei nicht-schwangeren Patienten unter Doxycyclin NICHT erforderlich. In der Schwangerschaft OBLIGATORISCH (3-4 Wochen nach Therapieende).',
                'Kontroll-Screening: Nachkontrolle aller Patienten 3 Monate nach Therapie aufgrund hoher Reinfektionsraten.'
              ],
              references: [
                'IUSTI: European guideline on the management of Chlamydia trachomatis infections (2020/2024)',
                'CDC STI Treatment Guidelines, 2021/2024'
              ]
            },
            prognosis: {
              mortality: 'Extrem gering; Morbidität beruht auf chronischen Unterbauchschmerzen, Eileiterschwangerschaften und tubarer Infertilität.',
              prognostic_scores: ['NAAT-Re-Testing nach 3 Monaten'],
              factors: 'Frühdiagnose, Adhärenz bei der 7-tägigen Doxycyclin-Einnahme, Partner-Mitbehandlung'
            }
          },
          {
            id: 'genital_herpes',
            name: 'Herpes genitalis',
            pathogen: { type: 'Virus', name: '<i>Herpes-Simplex-Virus</i> (überwiegend HSV-2, zunehmend HSV-1)', gram: 'Befoltes dsDNA-Virus', shape: 'kugelförmig' },
            epidemiology: {
              incidence: 'Hohe globale Prävalenz (~500 Millionen Menschen leben mit HSV-2; HSV-1 verursacht zunehmend primäre genitale Infektionen bei jungen Erwachsenen)',
              risk_groups: ['Sexuell aktive Erwachsene', 'Mehrere Sexualpartner', 'Personen mit Immunsuppression', 'Weibliches Geschlecht (höhere Empfänglichkeit)'],
              seasonality: 'Keine',
              transmission: 'Direkter Schleimhaut- oder Hautkontakt mit aktiven Läsionen oder über asymptomatische virale Ausscheidung (Shedding)'
            },
            pathomechanism: {
              steps: [
                'Primäre Schleimhautinfektion: HSV dringt durch Mikroläsionen in Epithelzellen ein, repliziert lokal und verursacht lytische Zellzerstörung (Ballonierung, multinukleäre Riesenzellen, Ulzeration).',
                'Neuroinvasion & Latenz: Virale Kapside gelangen über sensory Nervenendigungen retrograd in die sakralen Dorsalwurzelganglien (S2-S4) und etablieren eine lebenslange latente Infektion.',
                'Reaktivierung & Rezidiv: Bei Stress, Immunsuppression, Fieber oder Gewebereizung reaktiviert das Virus und wandert anterograd zurück zur Haut/Schleimhaut.',
                'Asymptomatische Ausscheidung: Virusreplikation und -freisetzung an Schleimhäuten erfolgt häufig ohne sichtbare Hautveränderungen (Hauptquelle für Übertragungen).'
              ],
              virulence_factors: ['Lebenslange Neurotropie und neuronal Latenz', 'Glykoprotein gD / gB (Wirtszelleintritt)', 'ICP47 (blockiert TAP-Transporter, hemmt MHC-I-Präsentation)', 'MicroRNA-Muster zur Latenzsteuerung']
            },
            clinical: {
              incubation: '2-12 Tage (Durchschnitt 4 Tage)',
              onset: 'Plötzlich bei Erstepisode; prodromal bei Rezidiven',
              symptoms: [
                { name: 'Erste klinische Erstepisode (Primärinfektion)', description: 'Schweres lokales und systemisches Krankheitsbild: schmerzhafte, gruppierte Bläschen auf erythematösem Grund, die rasch zu flachen, schmerzhaften Ulzera rupturieren. Begleitet von Fieber, Kopfschmerzen, Myalgien, schmerzhafter inguinaler Lymphadenopathie und schwerer Dysurie (Gefahr des Harnverhalts). Dauer: 2-3 Wochen.', severity: 'severe' },
                { name: 'Rezidivierende Infektion (Rezidiv)', description: 'Milder und kürzer (5-10 Tage). Angekündigt durch Prodromi (Kribbeln, Jucken, brennender Schmerz im Sakral-/Genitalbereich). Unilaterale Bläschen/Ulzera ohne Systemzeichen.', severity: 'mild' },
                { name: 'Asymptomatische / Subklinische Infektion', description: 'Über 80% der HSV-2-Infizierten haben nicht erkannte subklinische Verläufe, scheiden aber periodisch infektiöses Virus ab.', severity: 'mild' }
              ],
              physical_exam: [
                'Gruppierte Bläschen auf erythematösem Grund oder gestanzte flache schmerzhafte Ulzera',
                'Schmerzhafte bilaterale inguinale Lymphadenopathie (Erstepisode)',
                'Aseptische Meningismuszeichen oder Harnverhalt (sakrale Radikulopathie)'
              ],
              complications: ['Harnverhalt (sakrale autonome Neuropathie / Elsberg-Syndrom)', 'Aseptische Meningitis', 'Neonataler Herpes (hohes Risiko bei Erstinfektion im 3. Trimenon)', 'Erhöhtes Risiko für HIV-Übertragung (2-3-fach)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Blutbild & Urinstatus', finding: 'Normal oder milde Lymphozytose; Ausschluss von akutem Harnverhalt', interpretation: 'Symptomatische Abklärung' }
              ],
              microbiology: [
                { test: 'HSV Typspezifische PCR', finding: 'Positiv für HSV-1 oder HSV-2 DNA', significance: 'Goldstandard der Diagnostik (höchste Sensitivität/Spezifität; Differenzierung HSV-1 vs HSV-2)' },
                { test: 'Viruskultur', finding: 'Isolierung von HSV', significance: 'Geringe Sensitivität, fällt bei abheilenden/verkrusteten Läsionen rasch ab' },
                { test: 'Typspezifische Serologie (gG1 / gG2 Glykoprotein IgG)', finding: 'Positiv für HSV-1 oder HSV-2 IgG', significance: 'Indiziert zur Abklärung bei negativer PCR, Partner-Evaluation oder Risikobeurteilung in der Schwangerschaft (NICHT zum generellen Screening Asymptomatischer)' }
              ]
            },
            differential: [
              { disease: 'Primäre Syphilis (Lues-Schanker)', distinguishing: 'Schmerzloses, einzelnes induriertes Geschwür mit indolenter Lymphadenopathie' },
              { disease: 'Ulcus molle (H. ducreyi)', distinguishing: 'Schmerzhaftes tiefes Ulkus mit unterminierten Rändern und eitrigem Bubo' },
              { disease: 'Nicht-infektiöse Genitalulzera (M. Behçet, Aphten)', distinguishing: 'Rezidivierende orale/genitale Aphten, negative HSV-PCR, Autoimmunzeichen' }
            ],
            therapy: {
              guidelines: ['AWMF S1-Leitlinie / IUSTI European Genital Herpes Guideline (2020/2024)', 'CDC STI Guidelines (2021/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Valacyclovir (Erstepisode)', dose: '1000 mg p.o. 2x/Tag', duration: '7-10 Tage', note: 'Bevorzugt wegen hoher oraler Bioverfügbarkeit und zweimal täglicher Dosierung.' },
                  { drug: 'Acyclovir (Erstepisode)', dose: '400 mg p.o. 3x/Tag (oder 200 mg 5x/Tag)', duration: '7-10 Tage', note: 'Erstlinien-Alternative.' },
                  { drug: 'Famciclovir (Erstepisode)', dose: '250 mg p.o. 3x/Tag', duration: '7-10 Tage', note: 'Erstlinien-Alternative.' },
                  { drug: 'Valacyclovir (Episodische Rezidivtherapie)', dose: '500 mg p.o. 2x/Tag für 3 Tage ODER 1000 mg 1x/Tag für 5 Tage', duration: '3-5 Tage', note: 'Beginn bei den ersten Prodromalzeichen oder Bläschen.' },
                  { drug: 'Suppressive Antivirale Dauertherapie', dose: 'Valacyclovir 500 mg p.o. 1x/Tag (oder 1000mg 1x/T) ODER Acyclovir 400 mg 2x/Tag', duration: 'Kontinuierlich', note: 'Indiziert bei häufigen Rezidiven (≥6 Episoden/Jahr) oder zur Transmissionsprophylaxe.' }
                ],
                inpatient: [
                  { drug: 'Acyclovir (Schwerer / Komplizierter Verlauf)', dose: '5-10 mg/kg i.v. alle 8 Stunden', duration: '2-7 Tage bzw. bis zur klinischen Besserung', note: 'Indiziert bei disseminierter Infektion, HSV-Enzephalitis, Meningitis oder schwerem Harnverhalt.' }
                ]
              },
              targeted: 'Antivirale Therapie (Acyclovir, Valacyclovir, Famciclovir) hemmt die virale DNA-Polymerase. Keine Eradikation des latenten Virus aus den Ganglien möglich.',
              supportive: ['Schmerztherapie (NSAR, lokales Lidocain-2%-Gel)', 'Warme Sitzbäder bei schwerer Dysurie', 'Einmalkatheterisierung bei Harnverhalt'],
              prevention: ['Kondomgebrauch (reduziert Übertragung, kein 100% Schutz)', 'Sexuelle Abstinenz bei Prodromi und aktiven Läsionen', 'Tägliche suppressive Antivirentherapie (reduziert Ausscheidung um 70-80%)']
            },
            guidelines: {
              diagnosis: [
                'Typspezifische HSV-PCR aus dem Läsionsabstrich ist der Goldstandard.',
                'Typspezifische Serologie (gG-basiert) zur Differenzierung von HSV-1 und HSV-2 bei negativer PCR.'
              ],
              treatment_indications: [
                'Alle Patienten mit einer ersten klinischen Erstepisode von Herpes genitalis sollen antiviral behandelt werden.',
                'Rezidive: Selbstinitiierte Kurzzeittherapie bei Prodromi ODER kontinuierliche Dauertherapie.'
              ],
              first_line: [
                'Erstepisode: Valacyclovir 1000 mg p.o. 2x/Tag für 7-10 Tage.',
                'Rezidivtherapie: Valacyclovir 500 mg p.o. 2x/Tag für 3 Tage.',
                'Suppressionstherapie: Valacyclovir 500 mg p.o. 1x/Tag (1000 mg bei sehr hohen Rezidivraten).'
              ],
              special_populations: [
                'Schwangerschaft: Suppressive Antivirentypisierung (Acyclovir 400 mg 3x/Tag oder Valacyclovir 500 mg 2x/Tag) ab der 36. Schwangerschaftswoche zur Vermeidung von Ausbrüchen unter der Geburt. Indikation zur elektiven Sectio bei aktiven Läsionen zum Geburtszeitpunkt.',
                'HIV-Koinfektion: Höhere Dosierung oder längere Behandlungsdauer bei Rezidiven erforderlich (z.B. Valacyclovir 1000 mg 2x/Tag für 5-10 Tage).'
              ],
              monitoring: [
                'Jährliche Überprüfung der Indikation zur Dauertherapie mit eventuellem Auslassversuch.'
              ],
              references: [
                'IUSTI: European guideline for the management of genital herpes (2020/2024)',
                'CDC STI Treatment Guidelines, 2021/2024'
              ]
            },
            prognosis: {
              mortality: 'Extrem gering bei Immungesunden; hohe Mortalität bei unbehandeltem neonatalen Herpes.',
              prognostic_scores: ['Erfassung der jährlichen Rezidivfrequenz'],
              factors: 'HSV-Typ (HSV-2 hat deutlich höhere Rezidivrate als HSV-1), Immunkompetenz, frühzeitiger Therapriebeginn'
            }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoon', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'birnenförmiges begeißeltes Protozoon' },
            epidemiology: {
              incidence: 'Häufigste nicht-virale STI weltweit (~156 Millionen Neuinfektionen jährlich)',
              risk_groups: ['Sexuell aktive Frauen', 'Personen mit mehreren Sexualpartnern', 'Personen mit anderen STIs in der Anamnese', 'Inhaftierte Personen'],
              seasonality: 'Keine',
              transmission: 'Sexueller Kontakt (vaginal-penil, vaginal-vaginal); nicht-sexuelle Übertragung extrem selten'
            },
            pathomechanism: {
              steps: [
                'Adhäsion & Mechanische Schädigung: Motile begeißelte Trophozoiten haften an Plattenepithelzellen des unteren Urogenitaltrakts (Vagina, Urethra, Skene-Drüsen).',
                'Zytotoxizität & Mikroulzeration: Sekretion von Cysteinproteinase, Zellablösungsfaktoren und porenbildenden Proteinen führt zu Epithelzelllyse und punktförmigen Mikroblutungen.',
                'Störung des Vaginalmikrobioms: Der Parasit verbraucht Glykogen und Laktofazillen, was zu einer pH-Erhöhung (>4,5) führt und eine entzündliche Leukorrhoe begünstigt.'
              ],
              virulence_factors: ['Oberflächenadhäsine (AP65, AP51)', 'Cysteinproteinasen (CP30)', 'Trichomonas vaginalis Virus (TVV, verstärkt mukosale Entzündung)', 'Lipophosphoglykan (LPG)']
            },
            clinical: {
              incubation: '4-28 Tage (Spannweite 3-30 Tage)',
              onset: 'Schleichend oder akut',
              symptoms: [
                { name: 'Frauen: Vulvovaginitis', description: 'Reichlicher, schaumiger, gelb-grünlicher, übelriechender ("fischiger") Vaginalausfluss, intensiver vulvovaginaler Juckreiz, Dyspareunie und Dysurie. Vaginal-pH >4,5.', severity: 'moderate' },
                { name: 'Männer: Urethritis', description: '70-80% der infizierten Männer sind asymptomatische transiente Träger. Symptomatische Männer zeigen milden wässrig-gläsernen Urethralausfluss, Dysurie oder urethralen Pruritus.', severity: 'mild' },
                { name: 'Erdbeer-Zervix (Colpitis macularis)', description: 'Klassische punktförmige Petechien/Gefäßektasien auf der Portiozervix in ~2-5% der Fälle bei der Spekulumuntersuchung (pathognomonisch).', severity: 'moderate' }
              ],
              physical_exam: [
                'Schaumiger, gelb-grüner Ausfluss im hinteren Scheidengewölbe',
                'Erythematöse vulvovaginale Schleimhaut',
                'Erdbeer-Zervix (punktförmige zervikale Petechien)',
                'Vaginal-pH-Test >4,5'
              ],
              complications: ['Frühgeburt, vorzeitiger Blasensprung und niedriges Geburtsgewicht', 'Erhöhte Empfänglichkeit für HIV-Übertragung (2-fach erhöht)', 'Beckenentzündung (PID)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vaginal-pH-Messung', finding: 'pH > 4,5', interpretation: 'Vereinbar mit Trichomoniasis oder Bakterieller Vaginose' },
                { test: 'Amin-Test ("Whiff-Test" mit 10% KOH)', finding: 'Positiv (fischiger Geruch)', interpretation: 'Unspezifisch, positiv bei Trichomoniasis und BV' }
              ],
              microbiology: [
                { test: 'NAAT (Nukleinsäure-Amplifikationstest)', finding: 'Positiv für T. vaginalis RNA/DNA', significance: 'Goldstandard der Diagnostik (höchste Sensitivität 95-100%; Vaginalabstrich, Erststrahlurin)' },
                { test: 'Nativpräparat (Wet Mount)', finding: 'Mittelgroße, begeißelte, rotierend/ruckartig bewegliche Protozoen und Leukozyten', significance: 'Schneller PoCT-Test, aber geringe Sensitivität (50-60%); muss innerhalb von 10-15 Minuten nach Entnahme abgelesen werden!' },
                { test: 'Kultur (InPouch TV / Diamond-Medium)', finding: 'Wachstum von T. vaginalis', significance: 'Hochspezifische Alternative, falls NAAT nicht verfügbar' }
              ]
            },
            differential: [
              { disease: 'Bakterielle Vaginose (BV)', distinguishing: 'Dünnflüssiger homogener grauer Ausfluss, Clue Cells im Nativpräparat, keine beweglichen Protozoen, fehlende Entzündungszeichen' },
              { disease: 'Vulvovaginale Kandidose', distinguishing: 'Bröckeliger weißer "Quark-Ausfluss", normaler pH (<4,5), Pseudohyphen im KOH-Präparat, starker Juckreiz' },
              { disease: 'Chlamydien- oder Gonokokken-Zervizitis', distinguishing: 'Endozervikaler eitriger Ausfluss, negative Nativmikroskopie für Protozoen, positive erregerspezifische NAAT' }
            ],
            therapy: {
              guidelines: ['AWMF / IUSTI European Trichomoniasis Guideline (2020/2024)', 'CDC STI Guidelines (2021/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol (Erstlinie für Frauen)', dose: '500 mg p.o. 2x/Tag', duration: '7 Tage', note: 'AKTUALISIERT im CDC 2021 / IUSTI: 7-Tage-Mehrfachdosierung von Metronidazol ist der 2g-Einzeldosis bei Frauen deutlich überlegen (halbiert Therapieversager!).' },
                  { drug: 'Metronidazol (Erstlinie für Männer)', dose: '2 g p.o. Einzeldosis ODER 500 mg p.o. 2x/Tag für 7 Tage', duration: 'Einzeldosis oder 7 Tage', note: 'Einzeldosis 2g bleibt bei Männern weiterhin akzeptabel.' },
                  { drug: 'Tinidazol (Alternative)', dose: '2 g p.o. Einzeldosis', duration: 'Einzeldosis', note: 'Gleichwertige Erstlinien-Alternative mit besserer Magen-Darm-Verträglichkeit.' }
                ]
              },
              targeted: 'Systemische Therapie mit 5-Nitroimidazolen (Metronidazol oder Tinidazol) ist obligatorisch. Topische intravaginale Nitroimidazole sind UNWIRKSAM und kontraindiziert!',
              supportive: ['Strikte Alkoholkarenz während der Einnahme und für 24h nach Metronidazol (48h nach Tinidazol) zur Vermeidung einer Disulfiram-artigen Reaktion', 'Obligatorische synchrone Mitbehandlung aller Sexualpartner', 'Sexuelle Abstinenz bis zum Behandlungsabschluss beider Partner und Abklingen der Symptome'],
              prevention: ['Kondomgebrauch', 'Koadministrierte Partnerbehandlung', 'Screening bei Frauen mit erhöhtem Risiko (HIV-Infizierte)']
            },
            guidelines: {
              diagnosis: [
                'NAAT ist der diagnostische Goldstandard.',
                'Nativmikroskopie sollte bei Verfügbarkeit sofort durchgeführt werden, negatives Ergebnis erfordert aber Bestätigung durch NAAT oder Kultur.'
              ],
              treatment_indications: [
                'Alle Personen (symptomatisch oder asymptomatisch) mit Nachweis von T. vaginalis.',
                'Alle Sexualpartner müssen synchron behandelt werden, um Reinfektionen zu vermeiden.'
              ],
              first_line: [
                'Frauen: Metronidazol 500 mg p.o. 2x/Tag für 7 Tage.',
                'Männer: Metronidazol 2 g p.o. Einzeldosis OR 500 mg p.o. 2x/Tag für 7 Tage.',
                'Alternative: Tinidazol 2 g p.o. Einzeldosis.'
              ],
              special_populations: [
                'Schwangerschaft: Metronidazol 500 mg p.o. 2x/Tag für 7 Tage ist in allen Trimenons der Schwangerschaft sicher (symptomatische Frauen sollten behandelt werden).',
                'HIV-infizierte Frauen: Metronidazol 500 mg p.o. 2x/Tag für 7 Tage ist obligatorisch.',
                'Metronidazol-Allergie / Therapieversagen: Hochdosis Tinidazol (2g p.o. 1x/Tag für 7 Tage) nach Ausschluss einer Reinfektion durch den Partner.'
              ],
              monitoring: [
                'Re-Testing: Alle behandelten Frauen sollten 3 Monate nach Therapie mittels NAAT nachuntersucht werden (hohe Reinfektionsquote).'
              ],
              references: [
                'IUSTI: European guideline on the management of Trichomonas vaginalis infection (2020/2024)',
                'CDC STI Treatment Guidelines, 2021/2024'
              ]
            },
            prognosis: {
              mortality: 'Keine direkte Mortalität; Morbidität betrifft Frühgeburten und verstärkte HIV-Übertragung.',
              prognostic_scores: ['NAAT-Re-Testing nach 3 Monaten'],
              factors: 'Synchronisierte Behandlung aller Sexualpartner, Einhaltung der 7-Tages-Therapie bei Frauen'
            }
          }
        ]
}, // End of sexually_transmitted
});