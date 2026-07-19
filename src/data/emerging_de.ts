Object.assign(window.diseases, {
  emerging: {
    name: 'Neu auftretende Krankheitserreger',
    icon: '🚨',
    color: '#be185d',
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Affenpocken)',
        pathogen: { type: 'Virus', name: '<i>Mpox-Virus</i> (MPXV)', gram: 'dsDNA, Poxviridae', shape: 'ziegelförmig' },
        epidemiology: {
          incidence: 'Globale Epidemie seit 2022; endemisch in Afrika',
          risk_groups: ['MSM (Männer, die Sex mit Männern haben)', 'Gesundheitspersonal', 'Haushaltskontakte'],
          seasonality: 'Keine',
          transmission: 'Enger Haut-zu-Haut-Kontakt, Tröpfcheninfektion, Fomiten, Zoonose (Nagetiere)'
        },
        pathomechanism: {
          steps: [
            'Eintritt: Virus dringt durch verletzte Haut, Schleimhäute oder Atemwege ein.',
            'Replikation: Vermehrung an der Eintrittspforte und in regionalen Lymphknoten (Inkubationszeit).',
            'Virämie: Ausbreitung über das Blut in Haut und innere Organe.',
            'Läsionsbildung: Die Virusreplikation in der Haut führt zu Entzündung, Nekrose und charakteristischen pockenartigen Läsionen (Makula → Papel → Vesikel → Pustel → Kruste).'
          ],
          virulence_factors: ['Immunmodulatorische Proteine']
        },
        clinical: {
          incubation: '5-21 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Prodrom', description: 'Fieber, starke Kopfschmerzen, Lymphadenopathie, Rückenschmerzen, Myalgie und ausgeprägte Asthenie.', severity: 'mild' },
            { name: 'Lymphadenopathie', description: 'Charakteristisches Merkmal (zervikal, inguinal), das Mpox von Pocken und Windpocken unterscheidet.', severity: 'moderate' },
            { name: 'Ausschlag', description: 'Erscheint 1-3 Tage nach Fieber. Beginnt im Gesicht, breitet sich zentrifugal aus (Handflächen/Fußsohlen betroffen). Stadien: Makula → Papel → Vesikel → Pustel (genabelt) → Kruste. Läsionen sind oft schmerzhaft, später juckend.', severity: 'moderate' },
            { name: 'Schleimhautsymptome', description: 'Orale, genitale und perianale Läsionen. Proktitis (Rektalschmerzen) ist bei sexueller Übertragung häufig.', severity: 'severe' }
          ],
          physical_exam: [
            'Zentrifugal verteilter Ausschlag (auch Handflächen/Fußsohlen)',
            'Geschwollene, schmerzhafte Lymphknoten',
            'Genitale/perianale Läsionen',
            'Fieber'
          ],
          complications: ['Bakterielle Superinfektion', 'Pneumonie', 'Sepsis', 'Enzephalitis', 'Hornhautvernarbung (Erblindung)']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Unspezifisch', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'MPXV-DNA', significance: 'Goldstandard (Probe vom Grund/Dach der Läsion)' },
            { test: 'Elektronenmikroskopie', finding: 'Poxvirus-Morphologie', significance: 'Selten verfügbar' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportiv', dose: '-', duration: '-', note: 'Schmerzlinderung, Wundversorgung, Isolierung' }]
          },
          targeted: 'In schweren Fällen: Tecovirimat (antiviral).',
          supportive: ['Schmerzlinderung', 'Flüssigkeitsersatz'],
          prevention: ['Impfung (JYNNEOS - Pockenimpfstoff der 3. Generation)', 'Isolierung', 'Kontaktverfolgung']
        },
        prognosis: { mortality: 'Klade II (global): <0.1%; Klade I (Afrika): bis zu 10%', prognostic_scores: [], factors: 'Kladentyp, Behandlungszeitpunkt' }
      },
      {
        id: 'nipah',
        name: 'Nipah-Virus-Infektion',
        pathogen: { type: 'Virus', name: '<i>Nipah-Virus</i> (NiV)', gram: 'RNA, Paramyxoviridae (Henipavirus)', shape: 'pleomorph' },
        epidemiology: {
          incidence: 'Sporadische Ausbrüche (Südasien, Südostasien)',
          risk_groups: ['Schweinehalter', 'Dattelpalmsaftsammler/-konsumenten'],
          seasonality: 'Winter-Frühling (Bangladesch)',
          transmission: 'Flughunde (Pteropus) Urin/Speichel (Palmsaft), Schwein, Mensch zu Mensch'
        },
        pathomechanism: {
          steps: [
            'Eintritt: Verzehr kontaminierter Nahrung (z.B. Dattelpalmsaft) oder direkter Kontakt mit infizierten Tieren (Schweine, Fledermäuse).',
            'Disseminierung: Das Virus gelangt in den Blutkreislauf (Virämie).',
            'Vaskulitis: Infizierte Endothelzellen (über Ephrin-B2-Rezeptor) verursachen eine systemische Vaskulitis, Thrombose und Gewebeischämie.',
            'Tropismus: Eine hohe Affinität zum ZNS (mit Durchbruch durch die Blut-Hirn-Schranke) und zur Lunge führt zu schweren Entzündungen und Nekrosen.'
          ],
          virulence_factors: ['Fusionsproteine', 'Immunantagonisten']
        },
        clinical: {
          incubation: '4-14 Tage',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Prodrom', description: 'Fieber, Kopfschmerzen, Muskelschmerzen, Halsschmerzen und Erbrechen.', severity: 'moderate' },
            { name: 'Atemwegssymptome', description: 'Husten, Atemnot, fortschreitend zu atypischer Pneumonie und akutem Atemnotsyndrom (ARDS).', severity: 'severe' },
            { name: 'Enzephalitis', description: 'Schwindel, Bewusstseinsstörung, schnelles Fortschreiten zum Koma (innerhalb von 24-48 Stunden). Hirnstammzeichen (Areflexie, Hypotonie) sind häufig.', severity: 'severe' }
          ],
          physical_exam: ['Fieber', 'Nackensteifigkeit', 'Bewusstseinsstörung', 'Myoklonus', 'Areflexie/Hyporeflexie'],
          complications: ['Schwere Enzephalitis', 'ARDS', 'Rezidiv (Monate/Jahre später)', 'Tod']
        },
        diagnostics: {
          laboratory: [{ test: 'Blutbild', finding: 'Thrombozytopenie, Leukopenie', interpretation: '-' }],
          imaging: [{ modality: 'MRT Gehirn', finding: 'Multiple kleine Infarkte, Hyperintensität', significance: 'Enzephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'RNA (Rachen, Urin, Liquor)', significance: 'Akutphase' },
            { test: 'ELISA (IgM/IgG)', finding: 'Positiv', significance: 'Später' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Keine', dose: '-', duration: '-', note: 'Sofortige Krankenhaus-/Intensivstationseinweisung' }]
          },
          targeted: 'Kein bewährtes Virostatikum. Monoklonaler Antikörper (m102.4) in der experimentellen Phase.',
          supportive: ['Intensivmedizin', 'Beatmung', 'Behandlung von Krampfanfällen'],
          prevention: ['Vermeidung von Kontakt mit Flughunden', 'Vermeidung von rohem Palmsaft', 'Isolierung/Keulung kranker Schweine', 'Strikte Krankenhaushygiene']
        },
        prognosis: { mortality: 'Hoch (40-75%)', prognostic_scores: [], factors: 'Entwicklung einer Enzephalitis, Verfügbarkeit der Behandlung' }
      },
      {
        id: 'oropouche',
        name: 'Oropouche-Virus-Infektion (Oropouche-Fieber)',
        pathogen: { type: 'Virus', name: '<i>Oropouche-Virus</i> (OROV)', gram: 'segmentierte ssRNA (-), Peribunyaviridae', shape: 'sphärisch, umhüllt' },
        epidemiology: {
          incidence: 'Endemisch in Mittel- und Südamerika (insb. Amazonasbecken; neuere urbane Ausbrüche).',
          risk_groups: ['Einwohner oder Reisende in tropischen/bewaldeten Regionen, Schwangere (aufgrund des Risikos einer vertikalen Übertragung).'],
          seasonality: 'Häufiger während der Regenzeit (Vermehrung der Vektoren).',
          transmission: 'Vektorbasiert: primär durch den Biss der Gnitze <i>Culicoides paraensis</i>, sekundär durch die Stechmücke <i>Culex quinquefasciatus</i>. Keine direkte Mensch-zu-Mensch-Übertragung (außer vertikal).'
        },
        pathomechanism: {
          steps: [
            'Inokulation: Das Virus wird durch den Biss einer infizierten Gnitze oder Stechmücke in die Haut und Kapillaren eingebracht.',
            'Disseminierung: Nach lokaler Replikation gelangt das Virus in die Blutbahn (Virämie) und verursacht plötzliche systemische, grippeähnliche Symptome.',
            'Tropismus und Rezidiv: Das Virus infiziert die Skelettmuskulatur und das Nervensystem. Bei ca. 60 % der Patienten kehren die Symptome Tage oder Wochen nach der ersten Besserung zurück (erneute virämische Wellen).',
            'Neurotropismus und kongenitales Risiko: Das Virus kann die Blut-Hirn-Schranke überwinden und eine aseptische Meningitis oder Enzephalitis verursachen. Bei Schwangeren kann die vertikale Übertragung zu fetalem Tod oder angeborener Mikrozephalie führen.'
          ],
          virulence_factors: ['Nicht-Strukturproteine NSs und NSm (Interferon-Antagonisten, Immunumgehung)']
        },
        clinical: {
          incubation: '3–12 Tage (meist 4–8 Tage)',
          onset: 'Plötzlich',
          symptoms: [
            { name: 'Fieberhafte Phase', description: 'Plötzlicher Beginn mit hohem Fieber, Schüttelfrost, starken Kopfschmerzen, retroorbitalen Schmerzen, Photophobie, ausgeprägter Myalgie und Arthralgie.', severity: 'moderate' },
            { name: 'Haut- und GI-Symptome', description: 'Makulopapulöser Ausschlag am Rumpf und an den Gliedmaßen, Übelkeit, Erbrechen, gelegentlich leichte hämorrhagische Manifestationen (Epistaxis, Petechien).', severity: 'moderate' },
            { name: 'Rezidiv (Wiederkehrende Phase)', description: 'Bei ca. 60 % der Fälle treten die Symptome 2 bis 10 Tage nach der ersten Besserung in gleicher oder milderer Form wieder auf. Mehrfache Rezidive sind möglich.', severity: 'moderate' },
            { name: 'Neurologische & kongenitale Komplikationen', description: 'Aseptic Meningitis (Nackensteifigkeit, meningeale Reizzeichen) oder Enzephalitis. Eine vertikale Übertragung bei Schwangeren kann zu Fehlgeburten, Totgeburten oder Mikrozephalie führen.', severity: 'severe' }
          ],
          physical_exam: [
            'Hohes Fieber und konjunktivale Injektion (gerötete Augen)',
            'Makulopapulöser Ausschlag',
            'Meningeale Reizzeichen (Nackensteifigkeit bei aseptischer Meningitis)',
            'Myalgia und Druckschmerzhaftigkeit der Gelenke'
          ],
          complications: ['Aseptische Meningitis', 'Enzephalitis', 'Schwangerschaftskomplikationen: Spontanabort, fetaler Tod, angeborene Fehlbildungen (z. B. Mikrozephalie)', 'Länger anhaltende Asthenie']
        },
        diagnostics: {
          laboratory: [{ test: 'Laborbefunde', finding: 'Leukopenie, Lymphopenie, leichte Thrombozytopenie, leicht erhöhtes CRP und Transaminasen', interpretation: 'Typisches unspezifisches virales Profil' }],
          imaging: [{ modality: 'MRT/CT des Gehirns', finding: 'Meningeales Enhancement bei aseptischer Meningitis', significance: 'Indiziert bei Verdacht auf neurologische Komplikationen' }],
          microbiology: [
            { test: 'RT-PCR (Blut, Serum, Liquor)', finding: 'OROV-RNA positiv', significance: 'In den ersten 5–7 Tagen ab Symptombeginn (Akutphase)' },
            { test: 'Serology (ELISA - Serum, Liquor)', finding: 'Spezifische IgM- und IgG-Antikörper', significance: 'Nachweisbar ab Tag 5–6 der Erkrankung. Liquor-IgM bestätigt aseptische Meningitis.' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive Therapie', dose: '-', duration: '-', note: 'Bettruhe, orale Rehydration und symptomatische Linderung' }]
          },
          targeted: 'Keine zugelassene spezifische antivirale Therapie.',
          supportive: ['Analgetika und Antipyretika (Paracetamol bevorzugt)', 'Vermeidung von Aspirin und anderen NSAR (z. B. Ibuprofen) bis zum Ausschluss von Dengue-Fieber wegen des Blutungsrisikos', 'Flüssigkeits- und Elektrolytersatz'],
          prevention: ['Vektorkontrolle (Verwendung feinmaschiger Moskitonetze, Repellentien mit DEET oder Picaridin, schützende Kleidung)', 'Hinweis: Standard-Fliegengitter halten die winzigen Culicoides-Gnitzen oft nicht auf (Spezial-Mikromesh erforderlich)', 'Reisehinweise für Schwangere', 'Kein Impfstoff verfügbar']
        },
        prognosis: { mortality: 'Sehr niedrig (<0.1 %), jedoch wurden kürzlich seltene Todesfälle gemeldet. Hohe fetale Mortalität bei vertikaler Übertragung.', prognostic_scores: [], factors: 'Alter, Schwangerschaft, Immunstatus, neurologische Beteiligung' }
      }
    ]
  }
});
