Object.assign(window.diseases, {
  infection_control: {
    name: 'Infektionskontrolle',
    icon: window.diseaseMetadata.infection_control.icon,
    color: window.diseaseMetadata.infection_control.color,
    diseases: [
      {
        id: 'ic_basics',
        name: 'Grundlagen der Infektionskontrolle und Infektionskette',
        didactics: {
          overview: 'Das primäre Ziel der Krankenhaushygiene und Infektionsprävention ist die Verhinderung nosokomialer Infektionen (HAI) und der Übertragung multiresistenter Erreger (MRE / MDRO) durch die systematische Unterbrechung der Infektionskette (Infektionsquelle, Austrittspforte, Übertragungsweg, Eintrittspforte und empfänglicher Wirt).',
          sections: [
            {
              title: 'Glieder der Infektionskette und Interventionspunkte',
              icon: '🔗',
              badge: 'Krankenhausepidemiologie',
              content: 'Die wirksame Infektionsprävention basiert auf der gezielten und kontinuierlichen Blockade der schwächsten Glieder in der Übertragungskette:',
              items: [
                {
                  label: '1. Infektionsquelle (Erregerreservoir)',
                  text: 'Infizierte oder asymptomatisch kolonisierte Patienten, Erregerbesiedlung des medizinischen Personals sowie kontaminierte unbelebte Patientenumgebung (Bettgitter, Medizinprodukte, Wasserentnahmestellen).'
                },
                {
                  label: '2. Austrittspforte (Portal of Exit)',
                  text: 'Respiratorische Sekrete (Husten, Niesen), Stuhl, Urin, Wundexsudat, Blut und andere Körperflüssigkeiten.'
                },
                {
                  label: '3. Übertragungsweg (Mode of Transmission)',
                  text: 'Am häufigsten die Hände des Personals (Kontaktübertragung), Tröpfchenübertragung (Nahbereich <2 m), aerogene Tröpfchenkerne (Aerosole) oder kontaminierte Instrumente.'
                },
                {
                  label: '4. Eintrittspforte (Portal of Entry)',
                  text: 'Unterbrochene Haut- und Schleimhautbarriere, Operationswunden und invasive Zugänge (Zentralvenenkatheter, periphere Venenverweilkanülen, Blasenkatheter, Beatmungstubus).'
                },
                {
                  label: '5. Empfänglicher Wirt (Susceptible Host)',
                  text: 'Immunsupprimierte, geriatrische, polytraumatisierte, mangelernährte Patienten sowie Personen mit schweren Vorerkrankungen (Diabetes, Niereninsuffizienz) oder intensivmedizinischem Behandlungsbedarf.'
                }
              ]
            },
            {
              title: 'Die 4 häufigsten nosokomialen Infektionen (Device-Bundles)',
              icon: '🏥',
              badge: 'Präventionsbündel',
              content: 'Mehr als 80% aller Krankenhausinfektionen entfallen auf vier interventions- und katheterassoziierte Krankheitsbilder:',
              items: [
                {
                  label: 'CLABSI (Katheterassoziierte Sepsis)',
                  text: 'Präventionsbündel: Strikt aseptisches Insertionsbündel (Subclavia-Präferenz, Ganzkörper-Sterilabdeckung, 2% Chlorhexidin in 70% Alkohol Hautdesinfektion, tägliche Indikationsprüfung und frühzeitige Entfernung).'
                },
                {
                  label: 'CAUTI (Katheterassoziierte Harnwegsinfektion)',
                  text: 'Präventionsbündel: Geschlossenes Drainagesystem, Urinbeutel stets unter Blasenniveau und ohne Bodenkontakt halten, tägliche Notwendigkeitsprüfung des Verweilkatheters.'
                },
                {
                  label: 'VAP (Beatmungsassoziierte Pneumonie)',
                  text: 'Präventionsbündel: Oberkörperhochlagerung um 30–45°, subglottische Sekretabsaugung, tägliche Sedierungspause / Spontanatmungsversuche, orale Antiseptik mit Chlorhexidin.'
                },
                {
                  label: 'SSI (Postoperative Wundinfektion)',
                  text: 'Präventionsbündel: Perioperative Antibiotikaprophylaxe 30–60 min vor Hautschnitt, Haarentfernung ausschließlich mit elektrischem Clipper (Nassrasur kontraindiziert!), intraoperative Normothermie und Blutzuckerkontrolle.'
                }
              ]
            }
          ],
          diagnostics: [
            'Regelmäßige aktive Surveillance und Punktprävalenzerhebungen (Benchmarking der Infektionsraten)',
            'Automatisiertes Labor-Meldewesen bei Nachweis neuer MRE-Isolate (MRSA, VRE, MRGN, C. difficile)',
            'Mikrobiologische Umgebungsuntersuchungen bei Ausbruchsgeschehen (Outbreak Investigation)'
          ],
          red_flags: [
            'Unkritische, routinemäßige Weiterführung invasiver Katheter (Katheter sind die primäre Eintrittspforte für nosokomiale Sepsen)',
            'Bruch der Asepsis bei Anlage oder Verbandwechsel',
            'Fehlende Surveillance-Daten und mangelndes Hygiene-Feedback auf Station'
          ],
          teaching_tip: 'Die wirksamste Einzelmaßnahme gegen Fremdkörperinfektionen ist die tägliche Indikationsprüfung: Sobald ein Katheter klinisch nicht mehr zwingend erforderlich ist, muss er sofort entfernt werden!'
        }
      },
      {
        id: 'hand_hygiene',
        name: 'Händehygiene (Händedesinfektion und Händewaschen)',
        didactics: {
          overview: 'Die Händehygiene ist die unbestritten wichtigste, effektivste und kostengünstigste Maßnahme zur Verhütung nosokomialer Infektionen (HAI) und zur Unterbrechung von MRE-Übertragungsketten. Eine hohe Compliance senkt die Rate nosokomialer Infektionen um 30–50%.',
          sections: [
            {
              title: 'Indikationen: Die 5 Momente der Händehygiene (WHO)',
              icon: '🖐️',
              badge: 'Internationaler Goldstandard',
              content: 'Die Händedesinfektion muss an klar definierten Schnittstellen des Behandlungsablaufs durchgeführt werden:',
              items: [
                {
                  label: '1. VOR Patientenkontakt',
                  text: 'Schützt den Patienten vor Kolonisation mit Erregern, die sich auf den Händen des Personals befinden (z. B. vor Händedruck, Pulsmessung, Umlagerung).'
                },
                {
                  label: '2. VOR aseptischen Tätigkeiten',
                  text: 'Schützt den Patienten vor dem Eintrag von Krankheitserregern in sterile Körperbereiche (z. B. vor Injektion, Verbandwechsel, Katheterisierung, Augentropfengabe).'
                },
                {
                  label: '3. NACH Kontakt mit potenziell infektiösen Materialien',
                  text: 'Schützt das Personal und die Umgebung vor Erregerverbreitung (z. B. nach Blutabnahme, Entleeren von Urinbeuteln, Absaugen, sofort nach dem Ausziehen von Handschuhen).'
                },
                {
                  label: '4. NACH Patientenkontakt',
                  text: 'Schützt das Personal und nachfolgende Patienten vor Kolonisation mit der Patientenflora (z. B. beim Verlassen des Patientenbettes nach Untersuchung).'
                },
                {
                  label: '5. NACH Kontakt mit der direkten Patientenumgebung',
                  text: 'Schützt die Umgebung auch dann, wenn der Patient nicht direkt berührt wurde (z. B. nach Berühren von Bettgittern, Infusomaten, Nachttischen).'
                }
              ]
            },
            {
              title: 'Methodik: Alkoholische Händedesinfektion vs. Händewaschen',
              icon: '🧴',
              badge: 'Klinischer Entscheidungsbaum',
              content: 'Die Wahl des Händehygieneverfahrens richtet sich nach Verschmutzungsgrad und Erregereigenschaften:',
              items: [
                {
                  label: 'Alkoholische Händedesinfektion (Hand Rub) — GOLDSTANDARD',
                  text: 'Anwendung: Bei allen routinemäßigen Pflegetätigkeiten, wenn die Hände NICHT sichtbar verschmutzt sind. Wirkungsweise: Rasche bakterizide, viruzide und fungizide Wirkung durch Proteindenaturierung. Einwirkzeit: Mindestens 20–30 Sekunden (3–5 ml Händedesinfektionsmittel, Hände während der gesamten Zeit feucht halten). Vorteile: Deutlich wirksamer und schneller als Waschen, direkt am Point of Care verfügbar, rückfettende Substanzen schonen die Hautbarriere.'
                },
                {
                  label: 'Händewaschen mit Wasser und Seife — VERPFLICHTENDE INDIKATIONEN',
                  text: 'Anwendung: 1) Bei sichtbarer Verschmutzung mit Blut, Exkreten oder Körperflüssigkeiten; 2) Nach Kontakt mit sporenbildenden Erregern (Clostridioides difficile, Bacillus anthracis); 3) Bei Ausbrüchen unbehüllter Viren (Norovirus, Rotavirus); 4) Nach dem Toilettengang. Dauer: 40–60 Sekunden mit fließendem Wasser und Waschlotion, gründliches Trocknen mit Einmal-Papiertüchern, Schließen der Armatur mit dem Papiertuch.'
                }
              ]
            },
            {
              title: 'Die 6-Schritte-Technik nach EN 1500',
              icon: '🔄',
              badge: 'Standardisierte Reibetechnik',
              content: 'Um Benetzungslücken zu vermeiden, muss das Desinfektionsmittel systematisch auf allen Hautarealen verrieben werden:',
              items: [
                '1. Handfläche auf Handfläche reiben.',
                '2. Rechte Handfläche über linkem Handrücken mit verschränkten Fingern und umgekehrt.',
                '3. Handfläche auf Handfläche mit verschränkten Fingern für die Fingerzwischenräume.',
                '4. Außenseite der Finger auf die gegenüberliegende Handfläche mit verschränkten Fingern.',
                '5. Kreisförmiges Reiben des Daumens in der geschlossenen Handfläche (beidseits).',
                '6. Kreisförmiges Reiben der Fingerkuppen und Nägel in der Handfläche (beidseits).'
              ]
            },
            {
              title: 'Chirurgische Händedesinfektion',
              icon: '🧤',
              badge: 'OP-Asepsis',
              content: 'Verpflichtend vor allen operativen und invasiven Eingriffen im Operationssaal zur Beseitigung der transienten und Reduktion der residenten Hautflora:',
              items: [
                'Initialphase: Zu Dienstbeginn Hände und Unterarme mit Flüssigseife waschen, Fingernägel unter fließendem Wasser mit Nagelreiniger säubern (Bürsten wegen Mikroläsionen obsolet!).',
                'Desinfektionsphase: Alkoholisches Händedesinfektionsmittel auf Hände und Unterarme auftragen (Einwirkzeit 1,5–3 Minuten), Haut kontinuierlich feucht halten.',
                'Das Anlegen von sterilem OP-Kittel und Handschuhen darf erst nach vollständiger Abtrocknung erfolgen.'
              ]
            },
            {
              title: 'Rahmenbedingungen: „Bare Below the Elbows“',
              icon: '👔',
              badge: 'Dienstkleidungsvorschriften',
              items: [
                'Absolutes Verbot von Ringen (auch Eheringe!), Armbanduhren und Armbändern bei der Patientenversorgung.',
                'Verbot von künstlichen Fingernägeln, Gelnägeln und Nagellack (signifikante Erregerreservoire für gramnegative Stäbchen und Pilze).',
                'Fingernägel müssen kurz geschnitten (<0,5 cm) und gepflegt gehalten werden.',
                'Kurzärmelige Arbeitskleidung im Patientenkontakt zur uneingeschränkten Unterarmdesinfektion.'
              ]
            },
            {
              title: 'Qualitätssicherung und Compliance-Monitoring',
              icon: '📊',
              badge: 'Audit & Feedback',
              items: [
                'Direkte Beobachtung (Direct Observation): Erfassung der Händedesinfektions-Compliance durch geschulte Auditoren nach WHO-Kriterien.',
                'Verbrauchsmessung: Kontinuierliche Erfassung des Desinfektionsmittelverbrauchs in Millilitern pro Patiententag (HAND-KISS).',
                'Fluoreszenz-Tests unter UV-Licht: Schulungsmaßnahme zur sofortigen Visualisierung von Benetzungslücken.'
              ]
            }
          ],
          diagnostics: [
            'Mikrobiologische Abklatschkulturen (Fingerspitzen-Agar) bei epidemiologischen Ausbruchsanalysen',
            'Regelmäßige UV-Fluoreszenz-Audits zur Schulung und Überprüfung der korrekten Einreibetechnik',
            'Hautzustands-Screening zur Früherkennung von berufsbedingten Kontaktekzemen'
          ],
          red_flags: [
            'Handschuhe ersetzen KEINE Händedesinfektion! Vor dem Anziehen und unmittelbar nach dem Ausziehen ist eine Händedesinfektion zwingend erforderlich.',
            'Bei Clostridioides difficile tötet Alkohol die bakteriellen Sporen NICHT ab — mechanisches Händewaschen mit Wasser und Seife ist zwingend vorgeschrieben!',
            'Handschuhe niemals auf feuchte Hände anziehen (führt zu Hautmazeration und schweren Ekzemen).',
            'Schmuck an Händen und Handgelenken erhöht die bakterielle Besiedlungsdichte um ein Vielfaches.'
          ],
          teaching_tip: '„Saubere Hände retten Leben”: Die am häufigsten vergessenen Areale bei der Händedesinfektion sind Daumen, Fingerkuppen und Fingerzwischenräume. Achten Sie stets auf die vollständige Einwirk- und Trocknungszeit!'
        }
      },
      {
        id: 'isolation_measures',
        name: 'Isolierungsmaßnahmen (Typen, Richtlinien und Aufhebung)',
        didactics: {
          overview: 'Isolierungsmaßnahmen dienen der räumlichen und verfahrenstechnischen Abgrenzung von Infektionsquellen, um Übertragungswege zu unterbrechen und andere Patienten, das Klinikpersonal sowie Besucher vor nosokomialen Erregern zu schützen.',
          sections: [
            {
              title: '1. Basishygiene (Standard Precautions)',
              icon: '🛡️',
              badge: 'Standard für jeden Patienten',
              content: 'Muss bei jedem Patienten in allen Versorgungsbereichen unabhängig vom Infektionsstatus angewendet werden:',
              items: [
                'Konsequente Händehygiene nach den 5 Momenten der WHO.',
                'Situationsgerechte persönliche Schutzausrüstung (PSA: Handschuhe, Schutzkittel, Mund-Nasen-Schutz, Schutzbrille) bei Risiko von Körperflüssigkeitskontakt.',
                'Sicherer Umgang mit spitzen/scharfen Instrumenten (kein Recapping, sofortige Entsorgung in stichfeste Kanülenabwurfboxen).',
                'Regelmäßige Wischdesinfektion patientennaher Kontaktflächen.',
                'Sachgerechte Aufbereitung von Wäsche, Abfallentsorgung und Einhaltung der Hustenetikette.'
              ]
            },
            {
              title: '2. Kontaktisolierung (Contact Precautions)',
              icon: '🤝',
              badge: 'Direkte und indirekte Kontaktübertragung',
              content: 'Indikationen: Multiresistente Erreger (MRSA, VRE, 3MRGN / 4MRGN, Carbapenemase-Bildner), Clostridioides difficile, Norovirus, Rotavirus, Krätze (Scabies) und stark sezernierende Wunden.',
              items: [
                {
                  label: 'Unterbringung',
                  text: 'Einzelzimmer (mit eigener Nasszelle) oder Kohortenisolierung von Patienten mit identischem Erreger und Resistenzprofil.'
                },
                {
                  label: 'Persönliche Schutzausrüstung (PSA)',
                  text: 'Unsteriler Schutzkittel und Einmalhandschuhe müssen vor Betreten des Zimmers für jede pflegerische oder diagnostische Tätigkeit angelegt werden.'
                },
                {
                  label: 'Patientenbezogene Medizinprodukte',
                  text: 'Eigene Geräte (Stethoskop, Blutdruckmanschette, Thermometer), die bis zur Schlussdesinfektion im Zimmer verbleiben.'
                },
                {
                  label: 'Patiententransport',
                  text: 'Nur bei zwingender medizinischer Indikation mit frischer Wäsche, verbundenen Wunden und Information der Zieleinheit.'
                }
              ]
            },
            {
              title: '3. Tröpfchenisolierung (Droplet Precautions)',
              icon: '🗣️',
              badge: 'Große Tröpfchen (>5 µm)',
              content: 'Indikationen: Influenza, SARS-CoV-2 (Basisversorgung), Neisseria meningitidis (invasive Meningokokken-Erkrankung), Bordetella pertussis, Mycoplasma pneumoniae, Mumps, Röteln, Parvovirus B19.',
              items: [
                {
                  label: 'Unterbringung',
                  text: 'Einzelzimmer oder räumlicher Bettenabstand von mindestens 1,5–2 Metern bei Kohortierung.'
                },
                {
                  label: 'PSA-Anforderungen',
                  text: 'Medizinischer Mund-Nasen-Schutz (chirurgische Maske) bei Annäherung an den Patienten unter 2 Meter (Schutzbrille/Visier bei hustenden Patienten).'
                },
                {
                  label: 'Patiententransport',
                  text: 'Patient muss bei Verlassen des Zimmers durchgehend einen medizinischen Mund-Nasen-Schutz tragen.'
                }
              ]
            },
            {
              title: '4. Aerogene Isolierung (Airborne Precautions)',
              icon: '💨',
              badge: 'Feine Tröpfchenkerne (≤5 µm / Aerosole)',
              content: 'Indikationen: Offene pulmonale Tuberkulose (M. tuberculosis), Masern (Morbilli), Varizellen (Windpocken und disseminierter Herpes zoster) sowie bei aerosolgenerierenden Prozeduren (AGPs: Intubation, Bronchoskopie, Absaugen).',
              items: [
                {
                  label: 'Unterbringung',
                  text: 'Unterdruck-Isolierzimmer (AIIR) mit Schleuse, mindestens 6–12-fachem Luftwechsel pro Stunde und HEPA-Filtration. Die Zimmertür muss durchgehend GESCHLOSSEN bleiben.'
                },
                {
                  label: 'PSA-Anforderungen',
                  text: 'Partikelfiltrierende Halbmaske (FFP2 oder FFP3) vor Betreten des Zimmers in der Schleuse anlegen, Dichtsitzprüfung (Fit-Check) durchführen.'
                },
                {
                  label: 'Zutrittsbeschränkung',
                  text: 'Nicht-immunes Personal darf Zimmer von Patienten mit Masern oder Windpocken nicht betreten.'
                }
              ]
            },
            {
              title: '5. Protektive / Umkehr-Isolierung',
              icon: '🧬',
              badge: 'Schutz hochgradig immunsupprimierter Patienten',
              content: 'Indikationen: Schwere Neutropenie (Absolute Neutrophilenzahl ANC < 500/µL), allogene Stammzelltransplantation, schwere großflächige Verbrennungen.',
              items: [
                'Überdruck-Isolierzimmer mit HEPA-gefilterter Zuluft zur Verhinderung des Eindringens von Umweltpilzsporen (Aspergillus) und Bakterien.',
                'Strikter Verbot von Topfpflanzen, Schnittblumen, rohem Obst/Gemüse und Rohmilchkäse im Zimmer.',
                'Strenge Besuchereinschränkung, Tragen von Mund-Nasen-Schutz und Schutzkittel beim Betreten.'
              ]
            },
            {
              title: 'Kriterien für die Aufhebung der Isolierung (De-Isolierung)',
              icon: '🔓',
              badge: 'Entisolierungs-Protokoll',
              items: [
                {
                  label: 'MRSA-Aufhebung',
                  text: 'Mindestens 3 negative Kontrollabstriche (Nase, Rachen, Wunden) an 3 aufeinanderfolgenden Tagen, frühestens 48–72 Stunden nach Abschluss der Dekolonisation.'
                },
                {
                  label: 'VRE und 4MRGN-Aufhebung',
                  text: 'In der Regel 3 negative Rektalabstriche im Abstand von mindestens 1 Woche ohne antibiotische Therapie; nach Hausrichtlinien oft Weiterführung der Kontaktisolierung bis zur Entlassung.'
                },
                {
                  label: 'Clostridioides difficile-Aufhebung',
                  text: 'Frühestens 48 Stunden nach vollständigem Sistieren des Durchfalls (geformter Stuhl). Ein Kontroll-Toxinnachweis ist zur Aufhebung NICHT indiziert!'
                },
                {
                  label: 'Tuberkulose-Aufhebung',
                  text: 'Nach mindestens 2-wöchiger wirksamer 4er-Kombinationstherapie + klinischer Besserung + 3 mikroskopisch säurefest-negativen Sputumproben.'
                }
              ]
            }
          ],
          diagnostics: [
            'Mikrobiologische Kontrollabstriche zur Dokumentation der Erregerfreiheit vor Entisolierung',
            'Tägliche Überprüfung der Druckdifferenzanzeige bei Unterdruckzimmern (AIIR)',
            'Kontinuierliche Audits zur Einhaltung der PSA-Anlege- und Ablegereihenfolge'
          ],
          red_flags: [
            'Offene Zimmertür bei aerogener Isolierung (führt zum sofortigen Zusammenbruch des Unterdruckgradienten).',
            'Tragen kontaminierter PSA auf Stationsfluren (schwere Hygienesicherheitsverletzung).',
            'Falsche Reihenfolge beim Ablegen der PSA: Handschuhe und Kittelaußenseite sind massiv kontaminiert — nach dem Ablegen SOFORT Händedesinfektion vor Berühren des Gesichts/der Maske durchführen!'
          ],
          teaching_tip: 'PSA-Reihenfolge: Anlegen = Kittel ➔ Maske ➔ Schutzbrille ➔ Handschuhe. Ablegen = Handschuhe ➔ Schutzbrille ➔ Kittel ➔ HÄNDEDESINFEKTION ➔ Maske (in Schleuse) ➔ HÄNDEDESINFEKTION!'
        }
      },
      {
        id: 'mdro_screening',
        name: 'Screening-Untersuchungen (Aktive Surveillance)',
        didactics: {
          overview: 'Das aktive mikrobiologische Screening (Surveillance) dient der frühzeitigen Identifikation asymptomatischer Träger multiresistenter Erreger (MRE / MDRO) bei Aufnahme oder im Verlauf, um sofortige Isolierungsmaßnahmen einzuleiten und unbemerkte Übertragungsketten im Krankenhaus zu unterbrechen.',
          sections: [
            {
              title: 'Screening-Indikationen und Risikogruppen',
              icon: '🎯',
              badge: 'Wer muss gescreent werden?',
              content: 'Das Aufnahmescreening ist für folgende Hochrisikopatienten verpflichtend (KRINKO-Empfehlungen):',
              items: [
                'Bekannte MRE-Besiedlung oder -Infektion in der Anamnese.',
                'Verlegung aus anderen Krankenhäusern, Intensivstationen oder Kliniken im Ausland.',
                'Alle Neuaufnahmen auf Intensiv- und Überwachungsstationen (ITS / IMC).',
                'Patienten mit chronischer Hämodialyse oder aus stationären Pflegeeinrichtungen.',
                'Vor großen elektiven Operationen (Gelenkendoprothetik, Herzchirurgie, Neurochirurgie - MRSA-Screening).',
                'Patienten mit chronischen Wunden, Dekubitalulzera, Ulzera cruris oder großflächigen Verbrennungen.'
              ]
            },
            {
              title: 'Abstrichlokalisationen nach Erregern',
              icon: '🧪',
              badge: 'Wo und wie abstreichen?',
              content: 'Die Lokalisation richtet sich nach dem typischen Kolonisationshabitat des jeweiligen Erregers:',
              items: [
                {
                  label: 'MRSA (Methicillin-resistenter S. aureus)',
                  text: 'Abstrichorte: Beide vorderen Nasenlöcher (Nares anteriores – Tupfer unter rotierendem Druck über die Schleimhaut führen), Rachenabstrich, Leiste/Perineum sowie alle offenen Wunden, Drainagenaustritte und Kathetereintrittsstellen.'
                },
                {
                  label: 'VRE (Vancomycin-resistente Enterokokken)',
                  text: 'Abstrichort: Rektalabstrich (Tupfer muss sichtbar mit Stuhl benetzt sein, 1–2 cm tief über den Sphinkter einführen) oder Nativstuhlprobe.'
                },
                {
                  label: 'ESBL-Bildner / MRGN (3MRGN / 4MRGN Enterobacterales)',
                  text: 'Abstrichorte: Rektalabstrich oder Nativstuhl; im Ausbruchsfall zusätzlich Rachenabstrich, Urin (bei Dauerkatheter) und Wundabstriche.'
                },
                {
                  label: 'Multiresistente Pseudomonas (MRPA) und Acinetobacter (MRAB)',
                  text: 'Abstrichorte: Rachenabstrich, Perineum, Trachealsekret / Bronchialabsaugung bei beatmeten Patienten sowie offene Wunden.'
                }
              ]
            },
            {
              title: 'Diagnostische Methoden und Befundlaufzeiten',
              icon: '⏱️',
              badge: 'Labormodalitäten',
              items: [
                {
                  label: 'Selektiv- / Chromogene Kulturmedien',
                  text: 'Dauer: 18–48 Stunden. Kostengünstig, charakteristische Farbkolonien für resistente Isolate (z. B. chromID MRSA, chromID VRE, chromID CARBA), ermöglicht vollständiges phänotypisches Antibiogramm.'
                },
                {
                  label: 'Molekularbiologische Schnelltests (PCR / NAAT)',
                  text: 'Dauer: 1–2 Stunden. Direkter Nachweis von Resistenzgenen (mecA/mecC bei MRSA; vanA/vanB bei VRE; blaKPC, blaNDM, blaOXA-48, blaVIM bei Carbapenemasen). Unverzichtbar vor Notfall-OPs und zur sofortigen Ausbruchseindämmung.'
                }
              ]
            },
            {
              title: 'Präemptive Isolierung und Logistik',
              icon: '🚦',
              badge: 'Ablaufkette',
              content: 'Bei Aufnahme von Hochrisikopatienten muss ZEITGLEICH mit der Abnahme der Screeningabstriche eine präemptive Kontaktisolierung eingeleitet werden. Die Isolierung darf erst nach Erhalt eines negativen Screeningbefundes aufgehoben werden!',
              items: [
                'Sofortiger Transport der Abstriche ins Labor in geeignetem Transportmedium.',
                'Elektronische Kennzeichnung im Krankenhausinformationssystem (KIS) mit automatischem Alarm bei Wiederaufnahme bekannter MRE-Träger.',
                'Etablierte Labor-Sofortmeldekette an das klinische Hygieneteam bei Nachweis hochrelevanter Resistenzen.'
              ]
            }
          ],
          diagnostics: [
            'Aufnahmescreening (Admission Screening) bei Risikopatienten innerhalb der ersten 24 Stunden',
            'Wöchentliches Surveillance-Screening auf Intensivstationen zur Erfassung nosokomialer Transmissionen',
            'Umgebungs- und Kontaktuntersuchungen bei Nachweis eines unerwarteten MRE-Indexfalls'
          ],
          red_flags: [
            'Abnahme von Screeningabstrichen UNTER laufender lokaler Antiseptik oder systemischer Antibiotikatherapie (führt zu falsch-negativen Ergebnissen).',
            'Einsenden von unbefleckten Rektaltupfern ohne Stuhlkontakt (nicht verwertbare Probe).',
            'Unterlassen der präemptiven Isolierung bis zum Eintreffen der Kulturbefunde (führt zu tagelanger unbemerkter Erregerverbreitung auf Station).'
          ],
          teaching_tip: 'Screening ist eine Handlungsanweisung: Ein negativer Befund gibt wertvolle Isolierzimmer frei, ein positiver Befund aktiviert sofortige Kontaktisolierung und bei MRSA die gezielte Dekolonisation!'
        }
      },
      {
        id: 'decolonization_protocols',
        name: 'Dekolonisierungsprotokolle (Indikationen, Schemata und Durchführung)',
        didactics: {
          overview: 'Die Dekolonisation bezeichnet die zeitweilige oder dauerhafte Eradikation von Krankheitserregern (vor allem Methicillin-resistenter Staphylococcus aureus – MRSA) von Haut und Schleimhäuten mittels lokaler Antiseptika und Antibiotika, um endogene systemische Infektionen und postoperative Wundinfektionen zu verhindern.',
          sections: [
            {
              title: 'Indikationen und Anwendungsbereich',
              icon: '🎯',
              badge: 'Evidenzbasierte Kriterien',
              content: 'Die Dekolonisation ist an strenge klinische Kriterien gebunden:',
              items: [
                'Nachgewiesene MRSA-Besiedlung vor großen elektiven Operationen (Herzchirurgie, Gelenkersatz, Gefäßprothesen, Neurochirurgie).',
                'Gezielte oder universelle Dekolonisation auf Intensivstationen zur Reduktion von beatmungsassoziierten Pneumonien (VAP) und Katheter-Sepsen.',
                'Rezidivierende Staphylokokken-Haut- und Weichteilinfektionen (Furunkulose, Abszesse) beim Patienten oder engen Haushaltskontaktpersonen.',
                'WICHTIGER GRUNDSATZ: Ein evidenzbasiertes, wirksames Dekolonisationsregime existiert derzeit NUR für MRSA! Bei VRE, ESBL und Carbapenem-resistenten gramnegativen Stäbchen (3MRGN/4MRGN) ist eine routinemäßige Dekolonisation mangels Wirksamkeit und wegen rapider Resistenzentwicklung NICHT empfohlen!'
              ]
            },
            {
              title: 'Das standardisierte 5-Tage-MRSA-Dekolonisationsschema',
              icon: '📋',
              badge: 'Schritt-für-Schritt-Protokoll',
              content: 'Beinhaltet die simultane lokale Behandlung aller primären anatomischen Reservoire über 5 aufeinanderfolgende Tage:',
              items: [
                {
                  label: '1. Nasale Eradikation (Nasensalbe)',
                  text: 'Präparat: 2% Mupirocin-Nasensalbe (oder Octenidin-basiertes Nasengel). Anwendung: 2–3-mal täglich eine streichholzkopfgroße Menge mit Wattestäbchen in beide Nasenvorhöfe einbringen, anschließend Nasenflügel 1 Minute lang zusammendrücken und massieren.'
                },
                {
                  label: '2. Ganzkörper-Waschung (Hautantiseptik)',
                  text: 'Präparat: 4% Chlorhexidinglukonat (CHG) Waschlotion oder Octenidin-haltige Waschemulsion. Anwendung: Einmal täglich vollständige Ganzkörperwaschung / Dusche. Die Waschlotion vor dem Abspülen 1–2 Minuten einwirken lassen (besondere Beachtung von Achseln, Leisten und Perineum). Haare am Tag 1 und Tag 5 mitwaschen.'
                },
                {
                  label: '3. Mundhöhlen-Antiseptik',
                  text: 'Präparat: 0,12%–0,2% Chlorhexidin- oder Octenidin-Mundspüllösung. Anwendung: Zweimal täglich 1 Minute lang gründlich spülen und gurgeln (bei beatmeten Patienten Zähne und Schleimhäute mit getränkten Tupfern reinigen).'
                }
              ]
            },
            {
              title: 'Begleitende Hygiene- und Umgebungsmaßnahmen',
              icon: '🛏️',
              badge: 'Re-Kolonisationsprophylaxe',
              items: [
                'Täglicher Wechsel von Bettwäsche, Nachtkleidung und Handtüchern direkt nach der Ganzkörperwaschung.',
                'Desinfektion persönlicher Gebrauchsgegenstände (Brille, Mobiltelefon, Kämme, Zahnprothesen) während der Behandlungsphase.',
                'Hautpflege: Pflegende Hautlotionen erst frühestens 2 Stunden nach der CHG-Waschung auftragen, da kosmetische Inhaltsstoffe (anionische Tenside) die antimikrobielle Depotwirkung von Chlorhexidin inaktivieren können.'
              ]
            },
            {
              title: 'Erfolgskontrolle (Post-Dekolonisations-Screening)',
              icon: '🔍',
              badge: 'Eradikationsnachweis',
              content: 'Der Sanierungserfolg muss mikrobiologisch verifiziert werden:',
              items: [
                'Zeitpunkt: Frühestens 48–72 Stunden (optimal 5–7 Tage) nach Abschluss der letzten Dosis, um falsch-negative Befunde durch antiseptische Residuums-Effekte auszuschließen.',
                'Abstriche: Beide Nasenlöcher, Rachen und frühere Wundareale an 3 aufeinanderfolgenden Tagen.',
                'Ergebnis: Bei 3 negativen Abstrichsets gilt die Dekolonisation als erfolgreich und die Isolierung kann beendet werden.'
              ]
            }
          ],
          diagnostics: [
            'Präoperatives MRSA-Screening 2–4 Wochen vor elektiver Operation zur rechtzeitigen Durchführung der Dekolonisation',
            'Kontrollabstriche 48–72 Stunden nach Behandlungsende zur Dokumentation der Clearance',
            'Mupirocin-Resistenztestung (MHK-Bestimmung) bei Therapieversagen nach wiederholter Sanierung'
          ],
          red_flags: [
            'Mupirocin-Nasensalbe darf NICHT länger als 5–7 Tage oder prophylaktisch als Dauertherapie angewendet werden (schnelle Selektion hochgradiger Mupirocin-Resistenz!).',
            'Auf stark exkoriierter, verbrannter oder ekzematischer Haut kann 4% CHG schwere Hautreizungen verursachen — in diesem Fall auf Octenidin ausweichen.',
            'Weglassen der Mundhöhlen- oder Nasenbehandlung führt durch persistierende Reservoire zum raschen Rezidiv.'
          ],
          teaching_tip: 'Die präoperative MRSA-Dekolonisation halbiert die Rate postoperativer Wundinfektionen bei elektiven Gelenkersatz- und Herzoperationen, wenn sie konsequent in den Tagen vor dem Eingriff abgeschlossen wird!'
        }
      },
      {
        id: 'sterilization_disinfection',
        name: 'Sterilisation und Desinfektion',
        didactics: {
          overview: 'Die sachgerechte Aufbereitung von Medizinprodukten und die Desinfektion von Oberflächen sind Grundpfeiler der Patientensicherheit. Desinfektion bezeichnet die Reduktion pathogener Keime auf ein unschädliches Maß (nicht sporizid), während Sterilisation die vollständige Abtötung aller vermehrungsfähigen Mikroorganismen einschließlich bakterieller Sporen garantiert.',
          sections: [
            {
              title: 'Die Spaulding-Klassifikation von Medizinprodukten',
              icon: '⚖️',
              badge: 'Risikobewertungssystem',
              content: 'Earle H. Spaulding unterteilte Medizinprodukte nach der Invasivität und dem Infektionsrisiko in drei Risikogruppen:',
              items: [
                {
                  label: '1. Kritische Medizinprodukte ➔ STERILISATION VERPFLICHTEND',
                  text: 'Alle Instrumente, die sterile Gewebe, Körperhöhlen oder das Gefäßsystem durchdringen (z. B. chirurgisches OP-Besteck, Implantate, Arthroskope, Laparoskope, Biopsiezangen, Gefäßkatheter). Anforderung: Absolute Sterilität (Sterility Assurance Level SAL 10⁻⁶).'
                },
                {
                  label: '2. Semikritische Medizinprodukte ➔ HIGH-LEVEL-DESINFEKTION (HLD) ODER STERILISATION',
                  text: 'Produkte, die mit intakter Schleimhaut oder nicht-intakter Haut in Kontakt kommen, ohne sterile Räume zu penetrieren (z. B. flexible Endoskope, Laryngoskopspatel, Beatmungsschläuche, TEE-Sonden). Anforderung: High-Level-Desinfektion mit Abtötung von vegetativen Bakterien, Mykobakterien, Pilzen und Viren.'
                },
                {
                  label: '3. Unkritische Medizinprodukte ➔ NIEDRIGE / MITTLERE DESINFEKTION',
                  text: 'Produkte und Flächen, die ausschließlich mit intakter Haut in Berührung kommen (z. B. Stethoskope, Blutdruckmanschetten, Bettgitter, Nachttische, Infusomaten). Anforderung: Reinigung und Flächendesinfektion.'
                }
              ]
            },
            {
              title: 'Sterilisationsverfahren und Parameter',
              icon: '🌡️',
              badge: 'Physikalische & chemische Prozesse',
              items: [
                {
                  label: 'Dampfsterilisation im Autoklaven (Gespannter gesättigter Dampf) — GOLDSTANDARD',
                  text: 'Zuverlässigstes, schnellstes und wirtschaftlichstes Verfahren für thermostabile Güter. Standardprogramme: 121 °C (15–20 min bei 1,1 bar Überdruck) oder 134 °C (3,5–5 min bei 2,1 bar Überdruck). Prionenprogramm (Verdacht auf Creutzfeldt-Jakob): 134 °C für mindestens 18 Minuten.'
                },
                {
                  label: 'Heißluftsterilisation (Trockene Hitze)',
                  text: 'Ausschließlich für wasserfreie, hitzestabile Glas- und Metallgüter. Parameter: 160 °C (120 min), 170 °C (60 min) oder 180 °C (30 min).'
                },
                {
                  label: 'Niedertemperatur-H₂O₂-Gasplasma-Sterilisation (Sterrad)',
                  text: 'Für thermolabile und feuchtigkeitsempfindliche Instrumente (Optiken, Kameras, mikroelektronische Sonden). Parameter: 45–55 °C, 45–75 min Zyklus. Vorteile: Schnell, ungiftig (zerfällt in Wasser und Sauerstoff), Instrumente sofort einsatzbereit.'
                },
                {
                  label: 'Ethylenoxid-Gassterilisation (EtO)',
                  text: 'Exzellente Tiefenpenetration bei komplexen Kunststoffen und engen Lumen bei niedriger Temperatur (37–55 °C). Nachteile: Hochgiftiges, krebserregendes Gas mit langen Auslüftungszeiten (12–24 Stunden).'
                }
              ]
            },
            {
              title: 'Chemische Desinfektionsmittel und Wirkspektrum',
              icon: '🧪',
              badge: 'Wirkstoffauswahl',
              items: [
                {
                  label: 'Alkohole (70% Ethanol, Isopropanol)',
                  text: 'Mittleres Desinfektionsniveau. Rasch bakterizid, tuberkulozid, fungizid und begrenzt viruzid (behüllte Viren). Unwirksam gegen bakterielle Sporen und unbehüllte Viren. Einsatz: Haut- und Händedesinfektion, kleine Oberflächen, Stethoskope.'
                },
                {
                  label: 'Chlorabspalter (Natriumhypochlorit / Bleiche)',
                  text: 'Hohes Desinfektionsniveau / sporizid. Breites Wirkungsspektrum gegen C. difficile-Sporen und alle Viren. Zwingend vorgeschrieben bei Norovirus- und C. difficile-Ausbrüchen. Korrosiv gegenüber Metallen.'
                },
                {
                  label: 'Quartäre Ammoniumverbindungen (QAV / QUATs)',
                  text: 'Niedriges Desinfektionsniveau mit guter Reinigungswirkung. Nicht korrosiv, geruchsarm. Nicht tuberkulozid und nicht sporizid. Einsatz: Böden, Wände, unkritisches Mobiliar.'
                },
                {
                  label: 'Peressigsäure, Glutaraldehyd, Ortho-Phthalaldehyd (OPA)',
                  text: 'High-Level-Desinfektionsmittel in Reinigungs- und Desinfektionsgeräten für Endoskope (RDG-E) unter strenger Prozessvalidierung.'
                }
              ]
            },
            {
              title: 'Qualitätssicherung und Prozessvalidierung',
              icon: '📋',
              badge: 'AEMP-Qualitätsmanagement',
              items: [
                {
                  label: 'Bowie-Dick-Test',
                  text: 'Täglicher Pfllichttest vor dem ersten Autoklavenzyklus zur Überprüfung der vollständigen Entlüftung (Vakuumtest) und Dampfpenetration.'
                },
                {
                  label: 'Chemische Indikatoren (Klasse 1–6)',
                  text: 'Farbumschlagstreifen außen auf der Sterilgutverpackung und innen im Paket zur Bestätigung der erreichten Prozessparameter (Temperatur, Dampf, Zeit).'
                },
                {
                  label: 'Bioindikatoren (Sporenprüfkörper)',
                  text: 'Goldstandard-Prüfung mit thermoresistenten Sporen: Geobacillus stearothermophilus (Dampf/Plasma) oder Bacillus atrophaeus (Heißluft/EtO) in regelmäßigen Intervallen und bei jeder Implantatcharge.'
                }
              ]
            }
          ],
          diagnostics: [
            'Täglicher Bowie-Dick-Test zur Validierung der Dampfdurchdringung des Autoklaven',
            'Regelmäßige Bioindikator-Sporentests zur Funktionsprüfung der Sterilisatoren',
            'Adenosintriphosphat (ATP) Biolumineszenz-Wischtests zur objektiven Qualitätskontrolle der Flächenreinigung'
          ],
          red_flags: [
            '„Was nicht sauber ist, kann nicht steril werden!” — Ungenügende manuelle oder maschinelle Vorreinigung hinterlässt Biofilme und Eiweißreste, die Mikroorganismen vor Sterilisationsmitteln abschirmen.',
            'Feuchte Verpackungen (Wet Packs) nach dem Autoklavieren müssen als unsteril verworfen werden (Gefahr der Keimrückwanderung durch Kapillareffekte).',
            'Verwendung beschädigter, gerissener oder verfallener Sterilverpackungen ist strikt untersagt.'
          ],
          teaching_tip: 'Die unmittelbare Vorreinigung gebrauchter Instrumente direkt nach der OP ist der kritischste Schritt im gesamten Aufbereitungskreislauf, um das Antrocknen von Blut und die Ausbildung von Biofilmen in Hohlräumen zu verhindern!'
        }
      },
      {
        id: 'antibiotic_stewardship',
        name: 'Antibiotic Stewardship (Rationaler Einsatz von Antibiotika)',
        didactics: {
          overview: 'Ein Antibiotic Stewardship (ABS) Programm ist eine multidisziplinäre, institutionsweite Strategie zur Optimierung von Auswahl, Dosierung, Applikationsweg und Therapiedauer von Antibiotika. Ziel ist die Maximierung der klinischen Heilungsraten bei gleichzeitiger Minimierung von Resistenzselektion, Toxizität und Behandlungskosten.',
          sections: [
            {
              title: 'Die 5 Grundpfeiler: The 5 "D"s of Stewardship',
              icon: '🏛️',
              badge: 'Leitprinzipien',
              content: 'Bei jeder Antibiotikaverordnung müssen die 5 Kernfragen systematisch beantwortet werden:',
              items: [
                {
                  label: '1. Diagnosis (Exakte Indikationsstellung)',
                  text: 'Liegt tatsächlich eine behandlungsbedürftige bakterielle Infektion vor oder handelt es sich um Kolonisation, einen viralen Infekt oder eine nicht-infektiöse Entzündung (z. B. asymptomatische Bakteriurie oder virale Bronchitis nicht mit Antibiotika behandeln!).'
                },
                {
                  label: '2. Drug (Gezielte Substanzwahl)',
                  text: 'Wahl des schmalstwirksamen Antibiotikums abgestimmt auf den vermuteten/nachgewiesenen Erreger, die lokale Resistenzstatistik (Hauseigenes Antibiogramm) und die Gewebepenetration.'
                },
                {
                  label: '3. Dose (PK/PD-Optimierung)',
                  text: 'Anwendung pharmakokinetischer und pharmakodynamischer Prinzipien unter Berücksichtigung von Nieren-/Leberfunktion, Infektionsort und Körpergewicht (z. B. verlängerte Betalaktam-Infusionen zur Maximierung der %T>MHK-Zeit).'
                },
                {
                  label: '4. Duration (Kürzestmögliche Behandlungsdauer)',
                  text: 'Konsequente Umsetzung evidenzbasierter kurzer Therapiedauern („Kürzer ist genauso gut”: ambulante Pneumonie 5 Tage, HAP/VAP 7 Tage, Pyelonephritis 7 Tage, intraabdominelle Infektion nach Sanierung 4 Tage).'
                },
                {
                  label: '5. De-escalation (Gezielte Therapiefokussierung)',
                  text: 'Unverzügliche Einengung der initialen Breitbandtherapie auf ein gezieltes Schmalbandantibiotikum, sobald mikrobiologische Kulturbefunde und Antibiogramme vorliegen (nach 48–72 Stunden).'
                }
              ]
            },
            {
              title: 'Zentrale Stewardship-Interventionen',
              icon: '🛠️',
              badge: 'Klinische Werkzeuge',
              items: [
                {
                  label: '48–72 Stunden „Antibiotic Time-Out”',
                  text: 'Strukturierte Reevaluation jeder empirischen Antibiotikatherapie am Tag 2–3 anhand des klinischen Verlaufs, der mikrobiologischen Befunde und der Entzündungsparameter (Beenden, Deeskalieren oder Oralisieren).'
                },
                {
                  label: 'Frühzeitige Sequenztherapie (IV-to-PO Switch)',
                  text: 'Umstellung auf enterale/orale Medikation, sobald der Patient ≥24 Stunden entfiebert ist, hämodynamisch stabil ist und eine funktionierende Magen-Darm-Resorption vorliegt (insbesondere bei hoher oraler Bioverfügbarkeit: Fluorchinolone, Cotrimoxazol, Linezolid, Metronidazol, Doxycyclin).'
                },
                {
                  label: 'Strikte perioperative Prophylaxeregeln',
                  text: 'Einmalige Gabe der Prophylaxe 30–60 Minuten vor Hautschnitt (z. B. Cefazolin). Die Prophylaxe muss nach Operationsende (spätestens nach 24 Stunden) beendet werden!'
                }
              ]
            },
            {
              title: 'Das WHO AWaRe-Klassifikationssystem',
              icon: '🌍',
              badge: 'Globale Verordnungsstrategie',
              items: [
                {
                  label: 'ACCESS-Gruppe (Breit verfügbar / First-Line)',
                  text: 'Schmalbandige First-Line-Antibiotika mit günstigem Sicherheitsprofil und geringem Resistenzpotenzial für häufige Infektionen (z. B. Amoxicillin, Ampicillin, Cefazolin, Doxycyclin, Nitrofurantoin, Metronidazol).'
                },
                {
                  label: 'WATCH-Gruppe (Streng überwacht / Indikationsgebunden)',
                  text: 'Breitbandsubstanzen mit höherem Selektionsdruck für Resistenzen (z. B. Fluorchinolone, Cephalosporine der 3. Generation, Makrolide, Carbapeneme, Piperacillin-Tazobactam).'
                },
                {
                  label: 'RESERVE-Gruppe (Letzte Reserve / Streng geschützt)',
                  text: '„Ultima Ratio”-Antibiotika für lebensbedrohliche Infektionen durch multiresistente Erreger (MRE), freigabepflichtig durch Infektiologen/ABS-Experten (z. B. Ceftazidim-Avibactam, Ceftolozan-Tazobactam, Cefiderocol, Colistin, Linezolid, Meropenem-Vaborbactam).'
                }
              ]
            },
            {
              title: 'Biomarker und Therapeutisches Drug Monitoring (TDM)',
              icon: '📈',
              badge: 'Präzisionsdosierung',
              items: [
                {
                  label: 'Procalcitonin (PCT)-gesteuerte Algorithmen',
                  text: 'PCT zeigt eine rasche Kinetik bei bakteriellen Infektionen. Ein Abfall auf <0,25 µg/L oder um >80% vom Spitzenwert unterstützt das sichere vorzeitige Absetzen der Antibiotikatherapie.'
                },
                {
                  label: 'Therapeutisches Drug Monitoring (TDM)',
                  text: 'Verpflichtende Serumspiegelbestimmung bei Substanzen mit geringer therapeutischer Breite (Vancomycin, Aminoglykoside: Gentamicin, Amikacin) zur Vermeidung von Nephro- und Ototoxizität und Erreichen der Zielspiegel (AUC/MHK).'
                }
              ]
            }
          ],
          diagnostics: [
            'Blutkulturen (mindestens 2 Paare) und gezielte Erregerdiagnostik VOR Beginn der ersten Antibiotikadosis abnehmen',
            'Molekularbiologische PCR-Schnelltests aus positiven Blutkulturflaschen für taggleiche Deeskalation und Resistenzgennachweis',
            'Jährliche hausinterne Erreger- und Resistenzstatistiken zur Aktualisierung der empirischen Behandlungsleitfäden'
          ],
          red_flags: [
            'Antibiotische Behandlung einer asymptomatischen Bakteriurie (ASB) ist obsolet (Ausnahme: Schwangerschaft und schleimhauttraumatisierende urologische Eingriffe!).',
            'Fortführung der perioperativen Antibiotikaprophylaxe über mehrere postoperativen Tage.',
            'Unkritischer Einsatz von Fluorchinolonen bei leichten Infekten (Rote-Hand-Briefe wegen Sehnenrupturen, Aortenaneurysmen, QT-Verlängerung und C. difficile).',
            'Beginn einer Breitbandtherapie ohne vorherige mikrobiologische Probengewinnung.'
          ],
          teaching_tip: '„Erst denken, dann verordnen!”: Jede Antibiotikaverordnung muss eine dokumentierte Indikation und eine geplante Stopp-/Reevaluationszeit haben. Führen Sie am Tag 3 immer einen Antibiotic Time-Out durch!'
        }
      }
    ]
  }
});
