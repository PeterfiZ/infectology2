Object.assign(window.diseases, {
  infection_control: {
    name: 'Infektionskontrolle',
    icon: window.diseaseMetadata.infection_control.icon,
    color: window.diseaseMetadata.infection_control.color,
    diseases: [
      {
        id: 'ic_basics',
        name: 'Grundlagen der Infektionskontrolle und Vorsichtsmaßnahmen',
        pathogen: { type: 'Syndrom', name: 'Nosokomiale und multiresistente Erreger (MDRO)', gram: 'Variabel', shape: '-' },
        epidemiology: {
          incidence: 'Etwa 5-10% aller hospitalisierten Patienten erwerben eine nosokomiale Infektion (HAI)',
          risk_groups: ['Intensivpatienten (ITS)', 'Patienten mit invasiven Medizinprodukten', 'Ältere und immungeschwächte Patienten'],
          seasonality: 'Ganzjähriges Vorkommen',
          transmission: 'Kontakt (direkt/indirekt), Tröpfchen, aerogen (Aerosol), Blut und Körperflüssigkeiten'
        },
        pathomechanism: {
          steps: [
            'Quelle: Infizierter Patient, kolonisierter Träger oder kontaminierte Oberflächen/Medizinprodukte.',
            'Übertragung: Weitergabe des Erregers von der Quelle auf einen empfänglichen Wirt (meist über die Hände des Personals).',
            'Eintrittspforte: Zugangsweg in den Wirt (z. B. Operationswunden, Gefäßkatheter, Harnwegskatheter, Beatmungsschläuche).',
            'Kolonisierung oder Infektion: Anheftung und Vermehrung des Erregers, gefolgt von Gewebeinvasion und systemischen Symptomen.'
          ],
          virulence_factors: ['Biofilmbildung auf Kathetern', 'Multiresistenz (z. B. MRSA, VRE, ESBL, CRE)', 'Toxinbildung']
        },
        clinical: {
          incubation: 'Variabel (Stunden bis Monate)',
          onset: 'Schleichend oder akut',
          symptoms: [
            { name: 'Standardhygiene (Basishygiene)', description: 'Gilt für alle Patienten in allen Pflegebereichen: Händehygiene, persönliche Schutzausrüstung (PSA - Handschuhe, Schutzkittel, Maske, Schutzbrille bei Bedarf), sichere Injektionen, Desinfektion von Oberflächen, Abfallentsorgung und Hustenetikette.', severity: 'mild' },
            { name: 'Kontaktisolierung', description: 'Bei Erregern, die durch direkten oder indirekten Kontakt übertragen werden (z. B. MRSA, Clostridioides difficile, Norovirus). Anforderungen: Einzelzimmer oder Kohortenisolierung, eigenes Pflegegeschirr, Kittel und Handschuhe beim Betreten des Zimmers.', severity: 'moderate' },
            { name: 'Tröpfchenisolierung', description: 'Bei Erregern, die durch grobe Tröpfchen (>5 µm) übertragen werden (z. B. Influenza, Neisseria meningitidis). Anforderungen: chirurgische Maske im Umkreis von 1-2 Metern um den Patienten, Patient trägt bei Transport eine Maske.', severity: 'moderate' },
            { name: 'Aerogene Isolierung (Aerosol)', description: 'Bei Erregern, die über feine Tröpfchenkerne (≤5 µm) über weite Strecken infektiös bleiben (z. B. Tuberkulose, Masern, Varizellen). Anforderungen: Unterdruckzimmer (AIIR), FFP2/FFP3-Atemschutzmaske beim Betreten verpflichtend.', severity: 'severe' }
          ],
          physical_exam: [
            'Anzeichen von katheterassoziierten Infektionen (z. B. Rötung, Eiterfluss an der Eintrittsstelle des ZVK)',
            'Fieber, Hypotonie, Tachykardie (Verdacht auf Sepsis)',
            'Wundinfektion (Rötung, Fluktuation, Überwärmung, Schmerz)',
            'Druckschmerz im Bereich des Blasenkatheters'
          ],
          complications: ['Sepsis und septischer Schock', 'Geräteassoziierte systemische Infektionen (z. B. Katheter-Sepsis)', 'Verlängerte Krankenhausverweildauer', 'Erhöhte Mortalität und Behandlungskosten']
        },
        diagnostics: {
          laboratory: [
            { test: 'Klinisches Screening', finding: 'Nachweis von MDRO-Besiedlung mittels Nasen-, Rachen- oder Perianalabstrichen', interpretation: 'Identifiziert symptomlose Träger zur rechtzeitigen Isolierung' },
            { test: 'Labor und Entzündungsmarker', finding: 'Leukozytose, Erhöhung von CRP und Procalcitonin (PCT)', interpretation: 'Unterscheidet aktive Infektion von bloßer Kolonisation' }
          ],
          microbiology: [
            { test: 'Kultur & Resistenzprüfung', finding: 'Erregerisolierung und Erstellung eines Antibiogramms', significance: 'Grundlage für gezielte Antibiotikatherapie und krankenhaushygienisches Tracking' },
            { test: 'PCR (Molekulare Tests)', finding: 'Schneller Nachweis von Resistenzgenen (z. B. mecA, vanA, blaKPC)', significance: 'Ermöglicht Isolierungsentscheidung innerhalb weniger Stunden' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Isolierung & Kohortierung', dose: 'Sofort', duration: 'Bis zum Nachweis der Erregerfreiheit', note: 'Einzelzimmer oder Zusammenlegung von Patienten mit demselben Erreger' },
              { drug: 'Barrierepflege (PSA)', dose: 'Beim Betreten', duration: 'Immer', note: 'Korrektes An- und Ablegen der PSA in der richtigen Reihenfolge' }
            ]
          },
          targeted: 'Immer die schmalstmögliche Antibiotikatherapie basierend auf dem Antibiogramm wählen, um Selektionsdruck zu minimieren.',
          supportive: [
            'Flächendesinfektion mit viruziden und sporiziden Mitteln',
            'Verwendung von Einweg- oder patientenbezogenen Medizinprodukten',
            'Zuweisung von festem Kohortenpflegepersonal bei Ausbrüchen'
          ],
          prevention: [
            'Antibiotic Stewardship (zielgerichteter Einsatz von Antibiotika zur Reduzierung von Resistenzen)',
            'Tägliche Überprüfung invasiver Zugänge (frühestmögliche Entfernung nicht zwingend nötiger Katheter)',
            'Regelmäßige Schulungen und Hygiene-Audits'
          ]
        },
        prognosis: { mortality: 'Variabel; z. B. bei CRE-Sepsis kann die Mortalität >40% betragen', prognostic_scores: ['APACHE II', 'SOFA'], factors: 'Resistenzmuster des Erregers, Alter und Begleiterkrankungen des Patienten' }
      },
      {
        id: 'hand_hygiene',
        name: 'Händehygiene (Händedesinfektion und Händewaschen)',
        pathogen: { type: 'Übertragungsvektor', name: 'Hände des medizinischen Personals (transiente Flora)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Die Händehygiene-Compliance liegt weltweit ohne aktive Audits oft unter 50%',
          risk_groups: ['Alle stationären und ambulanten Patienten, insbesondere Intensiv- und immungeschwächte Patienten'],
          seasonality: 'Ganzjährig von kritischer Bedeutung',
          transmission: 'Direkter Kontakt (Erreger werden über die Hände des Personals von Patient zu Patient oder von der Umgebung auf den Patienten übertragen)'
        },
        pathomechanism: {
          steps: [
            'Besiedlung mit transienter Flora: Hände des Personals nehmen bei Kontakt mit Patienten oder Flächen transiente Keime auf.',
            'Überleben der Erreger: Transiente Erreger können ohne Händehygiene stundenlang auf der Haut überleben.',
            'Übertragung auf den Patienten: Bei nachfolgenden Kontakten gelangen die Keime an Eintrittspforten (z. B. Wunden, Katheter).',
            'Residente Flora: Die residente Hautflora (z. B. S. epidermidis) lebt in tieferen Schichten und verursacht selten HAI, außer bei invasiven Eingriffen ohne Antisepsis.'
          ],
          virulence_factors: ['Relative Alkoholresistenz (z. B. C. difficile-Sporen, unbehüllte Viren)', 'Hauttrockenheit/Läsionen (begünstigen Keimbesiedlung)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Die 5 Momente der Händedesinfektion', description: '1. VOR Patientenkontakt, 2. VOR aseptischen Tätigkeiten, 3. NACH Kontakt mit potenziell infektiösem Material, 4. NACH Patientenkontakt, 5. NACH Kontakt mit Oberflächen in unmittelbarer Patientenumgebung.', severity: 'severe' },
            { name: 'Händedesinfektion (Hand Rub)', description: 'Der GOLDSTANDARD der Händehygiene. Schneller, wirksamer gegen Bakterien und hautschonender. Dauer: 20-30 Sekunden. Nicht anwenden bei sichtbarer Verschmutzung oder sporenbildenden Erregern!', severity: 'mild' },
            { name: 'Händewaschen (Hand Wash)', description: 'Verpflichtend bei sichtbarer Verschmutzung (Blut, Sekrete) sowie nach Pflege von Patienten mit sporenbildenden Erregern (z. B. C. difficile) oder unbehüllten Viren (z. B. Noroviren), da Alkohol Sporen nicht abtötet (mechanische Entfernung nötig). Dauer: 40-60 Sekunden.', severity: 'moderate' },
            { name: 'Die 6 Schritte der Händedesinfektion', description: 'Sicherstellen, dass alle Bereiche benetzt werden: 1. Handfläche auf Handfläche, 2. Rechte Handfläche über linkem Handrücken und umgekehrt, 3. Handfläche auf Handfläche mit verschränkten Fingern, 4. Außenseite der Finger auf gegenüberliegende Handfläche mit verschränkten Fingern, 5. Kreisen des Daumens in der geschlossenen Handfläche, 6. Kreisen der Fingerkuppen in der Handfläche.', severity: 'moderate' }
          ],
          physical_exam: [
            'Überprüfung der Hautintegrität (Hautrisse, Dermatitis erhöhen das Kolonisationsrisiko)',
            'Nagelstatus (künstliche Fingernägel, Gelnägel und Schmuck an Händen/Unterarmen sind strengstens untersagt, da sie Keimreservoirs bilden und die Desinfektion behindern)'
          ],
          complications: ['Kreuzinfektionen und nosokomiale Ausbrüche im Krankenhaus', 'Berufsdermatitis bei Pflegekräften durch mangelnde Hautpflege oder unvollständiges Abtrocknen']
        },
        diagnostics: {
          laboratory: [
            { test: 'Hände-Abklatschpräparat', finding: 'Wachstum von Erregern auf Nährböden nach Fingeraufdruck', interpretation: 'Überprüft die Effektivität und Technik der Händedesinfektion' },
            { test: 'Fluoreszenz-Test (UV-Audit)', finding: 'Nicht benetzte Stellen erscheinen im UV-Licht als dunkle Flecken', interpretation: 'Sofortiges visuelles Feedback über Benetzungsdefizite' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Händedesinfektionsmittel (alkoholisch)', dose: '3-5 ml', duration: '20-30 Sek. einreiben', note: 'Hände müssen während der gesamten Einreibezone feucht bleiben' },
              { drug: 'Hygienisches Händewaschen', dose: 'Wasser + Seife', duration: '40-60 Sek. waschen', note: 'Gründlich mit Einmal-Papiertuch trocknen, Wasserhahn mit dem Tuch schließen' }
            ]
          },
          targeted: 'Vor aseptischen chirurgischen Eingriffen ist eine chirurgische Händedesinfektion erforderlich (Einreiben mit Alkohol für 1,5 - 3 Minuten unter Einschluss der Unterarme).',
          supportive: [
            'Regelmäßige Anwendung rückfettender Handcremes zur Erhaltung der Hautbarriere',
            'Platzierung von Händedesinfektionsmittelspendern direkt am Point of Care (Patientenbett)'
          ],
          prevention: [
            'Aktion Saubere Hände Richtlinien (schmucklos an Händen und Unterarmen)',
            'Regelmäßige Audits durch direkte Beobachtung (WHO-Beobachtungsbögen)',
            'Gut sichtbare Plakate zur Händehygiene'
          ]
        },
        prognosis: { mortality: 'Indirekt: Eine hohe Händehygiene-Compliance senkt die nosokomiale Mortalität um bis zu 50%', prognostic_scores: [], factors: 'Compliance des Personals, Verfügbarkeit von Hygieneartikeln' }
      },
      {
        id: 'isolation_measures',
        name: 'Isolierung (Typen, Methoden und Bedeutung)',
        pathogen: { type: 'Präventives Verfahren', name: 'Unterbrechung von Übertragungswegen', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Isolierungsmaßnahmen können die Übertragungsrate von MDROs im Krankenhaus um über 60-70% senken',
          risk_groups: ['Mit MDROs infizierte oder kolonisierte Patienten', 'Patienten mit respiratorischen oder enteralen Infektionen', 'Schwer neutropenische/immungeschwächte Patienten (Schutzisolierung)'],
          seasonality: 'Ganzjährig von höchster Priorität',
          transmission: 'Kontakt (direkt/indirekt), Tröpfchen und aerogene (Aerosol) Übertragungswege'
        },
        pathomechanism: {
          steps: [
            'Quellenisolierung (Quellenkontrolle): Physische Trennung des infektiösen Patienten von anderen Patienten.',
            'Barrierepflege: Verwendung persönlicher Schutzausrüstung (PSA wie Handschuhe, Schutzkittel, Masken) und physischer Barrieren, um das Entweichen von Erregern zu verhindern.',
            'Unterdruck (aerogene Isolierung): Verhindert das Entweichen von Luft aus dem Patientenzimmer auf den Flur (Abluft wird über HEPA-Filter gereinigt).',
            'Überdruck (Schutz-/Umkehrisolierung): Verhindert das Eindringen von keimbelasteter Krankenhausluft (z. B. Pilzsporen) in das Zimmer eines hochgradig immungeschwächten Patienten.'
          ],
          virulence_factors: ['Aerosolbildung und Luftüberleben (z. B. M. tuberculosis)', 'Umweltresistenz (z. B. VRE- und C. difficile-Sporen, die tagelang auf Oberflächen überleben)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Kontaktisolierung', description: 'Bedeutung: Verhindert die direkte/indirekte Kontaktübertragung (MRSA, VRE, CRE, C. difficile). Methode: Einzelzimmer oder Kohortenisolierung. Kittel und Handschuhe beim Betreten verpflichtend. Patientengebundenes Pflegegeschirr (z. B. Stethoskop, Fieberthermometer).', severity: 'moderate' },
            { name: 'Tröpfchenisolierung', description: 'Bedeutung: Bei Erregern, die durch grobe Atemtröpfchen (>5 µm) übertragen werden (Influenza, Meningokokken, Keuchhusten). Methode: Einzelzimmer oder >1,5-2m Bettabstand. Chirurgische Maske im Umkreis von 2 Metern verpflichtend.', severity: 'moderate' },
            { name: 'Aerogene Isolierung (Aerosol)', description: 'Bedeutung: Bei über feine Tröpfchenkerne (≤5 µm) übertragbaren Erregern (Tuberkulose, Masern, Varizellen). Methode: Unterdruckzimmer (6-12 Luftwechsel/Stunde), FFP2/FFP3-Maske beim Betreten zwingend vorgeschrieben.', severity: 'severe' },
            { name: 'Schutzisolierung (Umkehrisolierung)', description: 'Bedeutung: Schutz schwer immungeschwächter Patienten (z. B. nach allogener Knochenmarktransplantation) vor Erregern der Umgebung. Methode: Überdruckzimmer mit HEPA-Filtration, sterile Kost, Besuchsverbot, streng aseptische Pflege.', severity: 'severe' }
          ],
          physical_exam: [
            'Gut sichtbare Isolierungshinweise (Piktogramme) an der Zimmertür anbringen',
            'Vollständigen Vorrat an PSA in der Schleuse oder im Isolierwagen überprüfen',
            'Psychologischen Zustand des Patienten aufgrund der Isolation überwachen (Gefahr von Depression, Einsamkeit)'
          ],
          complications: ['Isolationsstress und verringerte direkte Pflegezeit (Risiko für unerwünschte Ereignisse kann steigen)', 'Gefahr von Kreuzinfektionen mit anderen Stämmen bei fehlerhafter Kohortierung']
        },
        diagnostics: {
          laboratory: [
            { test: 'Klinischer Nachweis der Erregerfreiheit (Clearance)', finding: 'Mehrfach negative mikrobiologische Abstriche (in der Regel 2-3 aufeinanderfolgende negative Proben im Abstand von 24 Stunden)', interpretation: 'Zwingende Voraussetzung zur Aufhebung der Isolierung' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Quellenkontrolle und räumliche Trennung', dose: 'Sofort', duration: 'Bis zur bestätigten Clearance', note: 'Türen geschlossen halten, Patient verlässt das Zimmer nur für unaufschiebbare Diagnostik (mit Maske)' },
              { drug: 'Schulung des PSA-Protokolls', dose: 'Für alle Eintretenden', duration: 'Fortlaufend', note: 'Händedesinfektion VOR dem Anlegen und NACH dem Ablegen der Schutzkleidung verpflichtend!' }
            ]
          },
          supportive: [
            'Strenge Schlussdesinfektion des Zimmers nach Entlassung des Patienten (mit sporiziden/viruziden Mitteln)',
            'Eigenes Reinigungsequipment und fest zugeteiltes Personal für Isolierzimmer'
          ],
          prevention: [
            'Regelmäßige Audits und Rückmeldungen zur Einhaltung der Isolierungsmaßnahmen an das Personal',
            'Personalkohortierung (Pflegekräfte für isolierte Patienten sollten keine hochgradig gefährdeten, sterilen Patienten betreuen)'
          ]
        },
        prognosis: { mortality: 'Rettet indirekt Leben durch Unterbrechung von Infektionsketten; verhindert folgenschwere MDRO-Ausbrüche', prognostic_scores: [], factors: 'Disziplin des Personals, bauliche Infrastruktur' }
      },
      {
        id: 'mdro_screening',
        name: 'Screening-Untersuchungen (Muster, wann, woher?)',
        pathogen: { type: 'Diagnostisches Protokoll', name: 'Aktives Surveillance-Screening auf multiresistente Erreger (MDRO)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Die Nachweisrate von MDRO-Trägern in Risikogruppen kann bei aktiver Suche 15-25% erreichen',
          risk_groups: ['Patienten mit bekannter MDRO-Anamnese', 'Patienten bei Aufnahme auf die Intensivstation (ITS)', 'Patienten, die aus anderen Krankenhäusern oder dem Ausland verlegt werden', 'Dialysepatienten, Bewohner von Pflegeheimen'],
          seasonality: 'Ganzjährig verpflichtend in Hochrisikobereichen',
          transmission: 'Asymptomatische Träger kontaminieren unbemerkt ihre Umgebung und Mitpatienten'
        },
        pathomechanism: {
          steps: [
            'Asymptomatische Kolonisation: Die Erreger (MRSA, VRE, CPE) besiedeln Haut oder Schleimhäute (Nasenvorhof, Darmtrakt), ohne eine Entzündungsreaktion hervorzurufen.',
            'Umgebungskontamination: Durch Hautschuppen, Sekrete und Stuhl des Trägers wird die Patientenumgebung (Bettgitter, Nachtisch) stark kontaminiert.',
            'Übertragung per Hand: Das Personal überträgt die Keime über die Hände auf andere Patienten.',
            'Selektionsdruck: Unter Antibiotikatherapie stirbt die schützende Normalflora ab, der resistente Keim vermehrt sich und führt zur aktiven Infektion.'
          ],
          virulence_factors: ['Hervorragende Kolonisationsfähigkeit', 'Horizontaler Gentransfer von Resistenzgenen (z. B. über Plasmide)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'MRSA-Screening', description: 'Wann: Bei Aufnahme bei Risiko, oder wöchentlich auf ITS. Woher: Beidseitiger Nasenvorhof (Nares-Abstrich - am wichtigsten!), Rachenabstrich, Leiste/Perineum sowie chronische Wunden, Drainagen oder Katheter-Eintrittsstellen.', severity: 'moderate' },
            { name: 'VRE (Vancomycin-resistente Enterokokken) Screening', description: 'Wann: Bei Aufnahme und wöchentlich auf ITS. Woher: Stuhlprobe oder Rektalabstricht (der Tupfer muss sichtlich mit Stuhl benetzt sein).', severity: 'moderate' },
            { name: 'ESBL und CRE/CPE (Carbapenem-resistente Enterobacterales) Screening', description: 'Wann: Auf Risikostationen oder bei Ausbruchsgeschehen. Woher: Rektalabstrich oder Stuhlprobe. Entscheidend für schnelle Isolierungsentscheidungen.', severity: 'severe' },
            { name: 'Multiresistente Pseudomonas (MRPA) und Acinetobacter (MRAB) Screening', description: 'Wann: Auf ITS oder bei Kontaktuntersuchungen. Woher: Rachenabstrich, Perinealabstrich, bei beatmeten Patienten Tracheal-/Bronchialsekret.', severity: 'moderate' }
          ],
          physical_exam: [
            'Sorgfältige Inspektion von Hautläsionen, chronischen Ulzera, Dekubiti und Operationswunden (bei Risiko immer Screening-Abstriche entnehmen)',
            'Kontrolle der Eintrittsstellen invasiver Zugänge (ZVK, Kanülen, Blasenkatheter)'
          ],
          complications: ['Unerkannte MDRO-Träger führen zu nosokomialen Ausbrüchen', 'Übergang von symptomloser Besiedlung in invasive Infektion (endogene Infektion)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Chromogene Selektivnährböden', finding: 'Wachstum charakteristisch gefärbter Kolonien innerhalb von 18-24 Stunden', interpretation: 'Schnelle und kostengünstige Screeningmethode für MRSA, VRE und ESBL' },
            { test: 'Molekulares PCR-Screening', finding: 'Direkter Nachweis von Resistenzgenen (z. B. mecA, vanA/vanB, blaOXA-48, blaKPC, blaNDM) aus Abstrichen', interpretation: 'Liefert Ergebnisse in 1-2 Stunden, ermöglicht sofortige präemptive Isolierung bei Aufnahme' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Präemptive Isolierung', dose: 'Bis zum Vorliegen des Screening-Ergebnisses', duration: '1-2 Tage', note: 'Bei Risikoverlegungen sofortige Isolierung bei Aufnahme bis zum Ausschluss eines MDRO' }
            ]
          },
          targeted: 'Ein positives Screening zieht eine Isolierung nach sich. Bei MRSA ist eine Dekolonisierung zu prüfen.',
          supportive: [
            'Sofortige elektronische oder telefonische Meldung positiver Befunde an das Hygieneteam (Schnellwarnung)',
            'Eindeutige Kennzeichnung des MDRO-Status in der Patientenkurve und am Bett'
          ],
          prevention: [
            'Strikte Händedesinfektionsdisziplin (ein Screening ist ohne nachfolgende Händehygiene wirkungslos)',
            'Regelmäßige Hygieneaudits auf den Stationen'
          ]
        },
        prognosis: { mortality: 'Senkt indirekt die nosokomiale Mortalität durch rechtzeitige Isolierung und Infektionsvermeidung', prognostic_scores: [], factors: 'Screening-Compliance, Labor-Durchlaufzeit (TAT)' }
      },
      {
        id: 'decolonization_protocols',
        name: 'Dekolonisierung (Wann, womit und wie?)',
        pathogen: { type: 'Präventive Behandlung', name: 'Sanierung von Haut und Schleimhäuten (vor allem bei MRSA)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Eine erfolgreiche MRSA-Sanierung senkt das Risiko postoperativer Wundinfektionen um bis to 50-60%',
          risk_groups: ['Nachgewiesene MRSA-Träger vor großen elektiven Eingriffen (z. B. Herzchirurgie, Gelenkendoprothetik)', 'ITS-Patienten (gezielte oder universelle Dekolonisierung)'],
          seasonality: 'Ganzjährig nach klinischen Standards angewandt',
          transmission: 'Der körpereigene (endogene) MRSA-Besatz des Patienten ist die Hauptquelle für Wundinfektionen und Katheter-Sepsis'
        },
        pathomechanism: {
          steps: [
            'Trägernachweis: Ein positives Screening aus Nase oder Haut bestätigt die MRSA-Kolonisierung.',
            'Lokale antiseptische Behandlung: Anwendung gezielter Antiseptika an den besiedelten Stellen (Nase, Haut, Mundraum).',
            'Keimzahlreduktion: Die Wirkstoffe zerstören transiente und oberflächliche residente Keime.',
            'Klimatische Umgebungssanierung: Täglicher Wechsel von Bettwäsche und Kleidung während der Sanierung verhindert Re-Kolonisierung.'
          ],
          virulence_factors: ['Mupirocin-Resistenz (insb. bei unkontrollierter Langzeitanwendung)', 'Chlorhexidin-Toleranz (Vorhandensein von qacA/B-Genen)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Nasale Sanierung', description: 'Womit: 2% Mupirocin-Nasensalbe (oder Oktenidin-Nasengel). Wie: Eine erbsengroße Menge Salbe mit Wattestäbchen in beide Nasenlöcher einbringen, dann Nasenflügel zusammendrücken und massieren. Wann: 3-mal täglich über 5 aufeinanderfolgende Tage.', severity: 'mild' },
            { name: 'Hautsanierung (Ganzkörperwaschung)', description: 'Womit: 2% oder 4% Chlorhexidinglukonat (CHG) flüssige antiseptische Seife (oder Oktenidin-/Polihexanid-Präparate). Wie: Tägliche Ganzkörperdusche (inkl. Haarwäsche an Tag 1 und 5). Antiseptikum 1-2 Minuten einwirken lassen vor dem Abspülen. Fokus auf Achseln, Leisten, Genitalbereich.', severity: 'moderate' },
            { name: 'Orale Sanierung', description: 'Womit: 0,12% - 0,2% Chlorhexidin-Mundspüllösung. Wie: Zweimal täglich 1 Minute lang mit 15 ml spülen und gurgeln. Wann: Bei starkem Rachenbefall oder beatmeten ITS-Patienten (VAP-Prophylaxe).', severity: 'mild' },
            { name: 'Körpersanierung begleitende Maßnahmen', description: 'Wie: Täglicher Wechsel von Handtüchern, Unterwäsche und Bettwäsche während der 5 Sanierungstage. Desinfektion persönlicher Gegenstände (Kamm, Brille, Handy).', severity: 'mild' }
          ],
          physical_exam: [
            'Hautzustand kontrollieren: Intakte Haut ist Voraussetzung für CHG-Waschung (bei schwerem Ekzem, Psoriasis oder großen Wunden wegen Irritationsgefahr aussetzen/anpassen)',
            'Einhaltung der Sanierungsschritte und die korrekte Durchführung durch das Pflegepersonal überwachen'
          ],
          complications: ['Kontaktdermatitis oder trockene Haut durch antiseptische Seifen', 'Selektion von Mupirocin-Resistenzen (daher strikte Begrenzung auf 5-7 Tage Sanierungsdauer)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Sanierungskontrolle (Kontroll-Abstriche)', finding: 'Negative Nasen- und Hautabstriche frühestens 48-72 Stunden nach Beendigung der Sanierung', interpretation: 'Zu früh entnommene Abstriche können durch antiseptische Rückstände falsch-negativ ausfallen' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Mupirocin 2% Nasensalbe', dose: '3x täglich in beide Nasenlöcher', duration: '5 Tage', note: 'Mit Wattestäbchen einbringen, Nasenflügel massieren' },
              { drug: 'Chlorhexidin 4% Waschlösung', dose: 'Tägliche Ganzkörperwaschung', duration: '5 Tage', note: 'Haarwäsche an Tag 1 und Tag 5 zwingend durchführen' }
            ]
          },
          targeted: 'WICHTIG: Derzeit existiert ein klar definiertes und klinisch etabliertes Dekolonisierungsprotokoll ausschließlich für MRSA. Für VRE (Vancomycin-resistente Enterokokken) sowie Gram-negative MDROs (multiresistente Erreger wie ESBL, CRE, Pseudomonas, Acinetobacter) gibt es keine nachgewiesene, routinemäßig empfohlene Dekolonisierungsstrategie!',
          supportive: [
            'Hautpflegelotionen frühestens 2 Stunden nach CHG-Waschung auftragen (um den anhaltenden CHG-Schutzeffekt nicht zu beeinträchtigen)',
            'Einweg-Waschlappen zur Körperwaschung verwenden'
          ],
          prevention: [
            'Strenges Verbot unkontrollierter, prophylaktischer oder verlängerter Mupirocin-Anwendung',
            'In Erwägung ziehen einer universellen Dekolonisierung (tägliche CHG-Waschung aller Patienten) auf Intensivstationen mit hohem MDRO-Druck'
          ]
        },
        prognosis: { mortality: 'Erfolgreiche Sanierung senkt das Risiko schwerer bakterieller Sepsis und assoziierter Mortalität drastisch', prognostic_scores: [], factors: 'Compliance, Mupirocin-Empfindlichkeit, Hautintegrität' }
      },
      {
        id: 'sterilization_disinfection',
        name: 'Sterilisation und Desinfektion',
        pathogen: { type: 'Hygienemaßnahme', name: 'Aufbereitung von Medizinprodukten und Flächendesinfektion', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Ungenügend aufbereitete Medizinprodukte (z. B. Endoskope) können schwerwiegende oder tödliche nosokomiale Ausbrüche verursachen',
          risk_groups: ['Patienten, die sich invasiven Eingriffen unterziehen', 'Operative Patienten', 'Patienten, bei denen eine Endoskopie durchgeführt wird'],
          seasonality: 'Ganzjährig von kritischer Relevanz',
          transmission: 'Indirekter Kontakt über kontaminierte Instrumente, Geräte oder patientennahe Oberflächen'
        },
        pathomechanism: {
          steps: [
            'Kontamination: Medizinprodukte werden bei der Anwendung mit Blut, Sekreten und Erregern verunreinigt.',
            'Biofilmbildung: Ohne sofortige Reinigung bilden Mikroorganismen schützende Biofilme, die Desinfektionsmittel blockieren.',
            'Reinigung und Desinfektion: Erster und wichtigster Schritt der Aufbereitung. Physische Entfernung von Verschmutzungen und Biofilmen.',
            'Schlussdesinfektion oder Sterilisation: Je nach Risikobewertung des Instruments Keimzahlreduktion (Desinfektion) oder Abtötung aller lebensfähigen Keime einschließlich Bakteriensporen (Sterilisation).'
          ],
          virulence_factors: ['Extreme Widerstandsfähigkeit von Bakteriensporen (z. B. C. difficile, B. anthracis)', 'Wachsartige Mykobakterien-Zellwand (benötigt High-Level-Desinfektion)', 'Extreme Resistenz von Prionen (erfordert spezielle Autoklavierparameter, z. B. 134 °C für 18 Minuten)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Klassifizierung von Medizinprodukten nach Spaulding', description: 'Bestimmt die Aufbereitungsstufe: 1. Kritische Medizinprodukte (durchdringen Haut/Schleimhaut, kommen mit Blut in Kontakt - z. B. chirurgisches Besteck, Implantate) -> STERILISATION zwingend. 2. Semikritische Medizinprodukte (kommen mit Schleimhaut/kranker Haut in Berührung - z. B. Endoskope, Beatmungsschläuche) -> HIGH-LEVEL-DESINFEKTION (HLD) zwingend. 3. Unkritische Medizinprodukte (kommen nur mit intakter Haut in Berührung - z. B. Stethoskope, Blutdruckmanschetten) -> DESINFEKTION ausreichend.', severity: 'severe' },
            { name: 'Thermische Sterilisationsverfahren', description: '1. Autoklav (Feuchte Hitze / Dampfsterilisation): Goldstandard für hitzeresistente Güter. Parameter: 121 °C (15-20 Min, 1 bar Überdruck) oder 134 °C (3-5 Min, 2 bar Überdruck). 2. Heißluftsterilisator (Trockene Hitze): Nur für Glas/Metall. Parameter: 160 °C (120 Min) oder 180 °C (30 Min).', severity: 'mild' },
            { name: 'Niedertemperatur-Sterilisation (chemisch)', description: 'Für thermolabile (z. B. Kunststoff-, Optik-) Instrumente: 1. Ethylenoxid (EO) Gassterilisation: Sehr materialschonend, aber Gas ist toxisch, krebserregend und explosiv; lange Ausgasezeiten (12-24 h) nötig. 2. Wasserstoffperoxid-Plasma (H2O2-Plasma): Schnell (45-60 Min), ungiftig, umweltschonend, aber teuer und lumenbegrenzt.', severity: 'moderate' },
            { name: 'Chemische Desinfektionsmittel für Oberflächen', description: '1. Alkohole (Ethanol, Isopropanol): Schnell wirksam, mittlere Desinfektionsstufe. Nicht sporenwirksam! 2. Chlorverbindungen (Natriumhypochlorit): Breit wirksam, günstig, sporizid. Verpflichtend bei C. difficile Ausbrüchen! Korrosiv. 3. Quartäre Ammoniumverbindungen (QAV): Niedrige Desinfektionsstufe, gute Reinigungseigenschaften, materialschonend. 4. Glutaraldehyd / Peressigsäure: Für High-Level-Desinfektion und chemische Sterilisation (z. B. in Endoskop-Waschmaschinen).', severity: 'moderate' }
          ],
          physical_exam: [
            'Verpackung der Sterilgüter vor Gebrauch auf Unversehrtheit, Trockenheit und Verfallsdatum prüfen',
            'Umschlag des chemischen Indikatorstreifens auf der Sterilgutverpackung zwingend kontrollieren (beweist Sterilmittelexposition)'
          ],
          complications: ['Wundinfektion durch postoperative Keimübertragung infolge beschädigter oder feuchter Sterilgutverpackungen', 'Gewebereizungen oder Verätzungen beim Patienten durch unzureichende Ausgasung nach EO-Gassterilisation']
        },
        diagnostics: {
          laboratory: [
            { test: 'Bioindikator-Test (Sporentest)', finding: 'Prüfung der Überlebensfähigkeit von Geobacillus stearothermophilus oder Bacillus atrophaeus Sporen nach Bebrütung', interpretation: 'Biologischer Goldstandard zur Wirksamkeitsprüfung von Sterilisatoren (regelmäßig vorgeschrieben)' },
            { test: 'Bowie-Dick-Test', finding: 'Gleichmäßiger Farbumschlag des Testbogens in der Autoklavenkammer', interpretation: 'Prüft die Luftentfernung und Dampfdurchdringung (täglich vor der ersten Sterilisationscharge)' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Sofortige Vorreinigung nach Gebrauch', dose: 'Mechanische + enzymatische Reinigung', duration: 'Sofort nach Benutzung', note: 'Verhindert das Antrocknen organischer Rückstände und die Entstehung von Biofilmen' },
              { drug: 'Geschlossener Transport', dose: 'Strikte Trennung von Sterilgut und Schmutzgut', duration: 'Während des Transports', note: 'Trennung von reinen und unreinen Transportwegen im Haus' }
            ]
          },
          supportive: [
            'Lückenlose Dokumentation und Chargenrückverfolgbarkeit aller Aufbereitungsschritte (Barcodesystem)',
            'Regelmäßige technische Validierung und Wartung der Autoklaven und RDGs (Reinigungs- und Desinfektionsgeräte)'
          ],
          prevention: [
            'Zentralisierung der Instrumentenaufbereitung in der ZSVA (Zentrale Sterilgutversorgungsabteilung)',
            'Kontinuierliche Schulung des Aufbereitungs- und Reinigungspersonals; regelmäßige Wirkstoffgehaltskontrollen (z. B. per Teststreifen)'
          ]
        },
        prognosis: { mortality: 'Indirekt: Eine lückenlos sterile OP-Technik und Aufbereitung senkt das Risiko postoperativer Infektionen auf ein Minimum', prognostic_scores: [], factors: 'Standardtreue, Gerätevalidierung, kontinuierliche Qualitätssicherung' }
      }
    ]
  }
});

