Object.assign(window.diseases, {
  sepsis_systemic: {
    name: 'Sepsis und systemische Infektionen',
    icon: window.diseaseMetadata.sepsis_systemic.icon,
    color: window.diseaseMetadata.sepsis_systemic.color,
    diseases: [
      {
        id: "sepsis",
    name: "Sepsis und septischer Schock",
    pathogen: {
        "type": "Syndrom",
        "name": "Dysregulierte Wirtsreaktion, ausgelöst durch bakterielle (Gram-positive/negative), fungale, virale oder parasitäre Erreger",
        "gram": "Variabel",
        "shape": "Variabel"
    },
    epidemiology: {
        "incidence": "Weltweit etwa 49 Millionen Fälle und 11 Millionen Todesfälle pro Jahr (ca. 20 % aller Todesfälle).",
        "risk_groups": [
            "Personen über 65 Jahre",
            "Säuglinge unter 1 Jahr",
            "Immunsupprimierte Patienten (z. B. durch Chemotherapie, HIV)",
            "Patienten mit chronischen Erkrankungen (Diabetes, Niereninsuffizienz, COPD, Leberzirrhose)",
            "Asplenische Patienten",
            "Patienten mit invasiven Geräten (Katheter, maschinelle Beatmung)"
        ],
        "seasonality": "Keine direkte Saisonalität, jedoch häufiger im Winter als Komplikation von Atemwegsinfektionen (Influenza, COVID-19).",
        "transmission": "Das Sepsis-Syndrom selbst ist nicht ansteckend, die auslösende Infektion (z. B. Meningokokken, Pneumokokken) kann jedoch übertragbar sein."
    },
    pathomechanism: {
        "steps": [
            "Erreger oder deren Bestandteile (PAMPs - z. B. Endotoxine, Peptidoglykane) binden an Muster-erkennende Rezeptoren (PRRs, z. B. TLRs) der Immunzellen des Wirts.",
            "Der Wirt löst eine dysregulierte Entzündungsreaktion aus: massive Freisetzung proinflammatorischer (TNF-alpha, IL-1, IL-6) und antiinflammatorischer Zytokine (Zytokinsturm).",
            "Es kommt zu systemischer Endothelaktivierung und -schädigung, was zu erhöhter Kapillarpermeabilität (Flüssigkeitsaustritt in das Interstitium) und Hypovolämie führt.",
            "Das Gerinnungssystem wird aktiviert (durch Gewebefaktor-Expression), während natürliche Antikoagulanzien-Wege (Protein C, Antithrombin) gehemmt und die Fibrinolyse beeinträchtigt werden, was zur Bildung von Mikrothromben (DIC) führt.",
            "Mikrozirkulationsstörungen, Vasodilatation, Gewebehypoperfusion und mitochondriale Dysfunktion (zelluläre Dysoxie) verursachen eine progressive Organschädigung (MODS)."
        ],
        "virulence_factors": [
            "Lipopolysaccharid (LPS / Endotoxin) - bei Gram-negativen Erregern",
            "Lipoteichonsäure und Peptidoglykan - bei Gram-positiven Erregern",
            "Superantigene (z. B. TSST-1 bei Staphylococcus aureus)",
            "Bakterienkapsel (hemmt die Phagozytose)",
            "Exotoxine (z. B. Alpha-Toxin, Pneumolysin)",
            "Siderophore (fördern die Eisenaufnahme)"
        ]
    },
    clinical: {
        "incubation": "Abhängig von der zugrunde liegenden Infektion (Stunden bis Tage).",
        "onset": "Plötzlich, äußerst rasche Progression (septischer Schock kann sich innerhalb von Stunden entwickeln).",
        "symptoms": [
            {
                "name": "Fieber oder Hypothermie",
                "description": ">38,3 °C oder <36,0 °C (bei älteren oder immunsupprimierten Patienten oft nur Hypothermie oder Normothermie feststellbar)",
                "severity": "severe"
            },
            {
                "name": "Akute Bewusstseinsveränderung / Enzephalopathie",
                "description": "GCS < 15, neu aufgetretene Verwirrtheit, Delirium, Unruhe oder Lethargie",
                "severity": "severe"
            },
            {
                "name": "Hypotonie",
                "description": "Systolischer Blutdruck < 100 mmHg oder mittlerer arterieller Druck (MAP) < 65 mmHg",
                "severity": "severe"
            },
            {
                "name": "Tachypnoe",
                "description": "Atemfrequenz > 22/min (frühes Zeichen der kompensatorischen respiratorischen Alkalose und Gewebehypoxie)",
                "severity": "moderate"
            },
            {
                "name": "Oligurie",
                "description": "Urinausscheidung < 0,5 ml/kg/Stunde über mindestens 2 Stunden trotz adäquater Flüssigkeitssubstitution",
                "severity": "severe"
            },
            {
                "name": "Periphere Perfusionsstörung",
                "description": "Marmorierte Haut (vor allem an den Knien), kalte, feuchte Extremitäten aufgrund der Umverteilung der Zirkulation",
                "severity": "severe"
            }
        ],
        "physical_exam": [
            "Fieber (>38,3 °C) oder Hypothermie (<36,0 °C)",
            "Tachykardie (>90/min)",
            "Tachypnoe (>20/min oder PaCO2 <32 mmHg)",
            "Verlängerte kapilläre Füllungszeit (>3 Sekunden)",
            "Marmorierte Haut (Mottling-Score)",
            "Akute Verwirrtheit, Desorientierung"
        ],
        "complications": [
            "Septischer Schock (persistierende Hypotonie mit Vasopressorbedarf zur Aufrechterhaltung eines MAP >= 65 mmHg und Laktat > 2 mmol/L trotz adäquater Flüssigkeitssubstitution)",
            "ARDS (akutes Atemnotsyndrom)",
            "Akute Nierenschädigung (AKI) mit Bedarf an Nierenersatztherapie",
            "DIC (disseminierte intravasale Gerinnung)",
            "Sepsis-induzierte myokardiale Dysfunktion",
            "Multiorgandysfunktionssyndrom (MODS)",
            "Tod"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Röntgen-Thorax / CT",
                "finding": "Infiltrate, lobäre Pneumonie, beidseitige diffuse Trübungen, die auf ein ARDS hinweisen.",
                "significance": "Bestätigung eines pulmonalen Fokus und Diagnose eines ARDS."
            },
            {
                "modality": "Abdomensonografie / CT",
                "finding": "Freie abdominale Flüssigkeit, Gallenblasenwanddistension, Abszesse, entzündliche Darmwandverdickung.",
                "significance": "Identifikation eines intraabdominalen Fokus und Planung der Fokussanierung (z. B. Drainage, Operation)."
            }
        ],
        "laboratory": [
            {
                "test": "Serumlaktat",
                "finding": "> 2 mmol/L",
                "interpretation": "Marker für Gewebehypoperfusion und anaeroben Stoffwechsel; wiederholte Messung ist entscheidend zur Verfolgung der Laktat-Clearance."
            },
            {
                "test": "Procalcitonin (PCT) / CRP",
                "finding": "Deutlich erhöhte Werte",
                "interpretation": "Unterstützt den Verdacht auf eine systemische bakterielle Infektion; die PCT-Kinetik hilft, das sichere Absetzen der Antibiotikatherapie zu steuern."
            },
            {
                "test": "Blutbild und Gerinnungsstatus",
                "finding": "Leukozytose (>12 G/L) oder Leukopenie (<4 G/L), Thrombozytopenie (<100 G/L), verlängerte INR/aPTT",
                "interpretation": "Zeichen einer systemischen Entzündungsreaktion sowie einer beginnenden DIC oder Organschädigung."
            }
        ],
        "microbiology": [
            {
                "test": "Blutkultur (mindestens 2 Sets: aus getrennten peripheren Zugängen, aerobe und anaerobe Flaschen)",
                "finding": "Identifikation des Erregers und Resistenzprofilbestimmung",
                "significance": "Muss unmittelbar vor Beginn der empirischen Antibiotikatherapie abgenommen werden! Erleichtert die spätere Deeskalation."
            },
            {
                "test": "Fokusspezifische Kulturen (Urin, Sputum, Liquor, Wundsekret)",
                "finding": "Bakterielles oder fungales Wachstum",
                "significance": "Grundlage für die gezielte Behandlung des primären Infektionsfokus."
            }
        ]
    },
    therapy: {
        "targeted": "Empirische Breitspektrum-Antibiotika sollten innerhalb der ersten Stunde verabreicht werden, gefolgt von einer gezielten Deeskalation, sobald mikrobiologische Ergebnisse vorliegen. Die rasche Identifikation und chirurgische/interventionelle Beseitigung des Infektionsherdes (Fokussanierung, z. B. Abszessdrainage, Entfernung von nekrotischem Gewebe, Kathederwechsel) ist unerlässlich, idealerweise innerhalb von 6-12 Stunden nach Diagnosestellung.",
        "supportive": [
            "Überwachung der dynamischen Volumenreagibilität (z. B. Passive-Leg-Raising-Test, Schlagvolumenvariation) zur Vermeidung einer Flüssigkeitsüberladung",
            "Lungenprotektive maschinelle Beatmung bei ARDS (niedriges Tidalvolumen: 6 ml/kg, angemessener PEEP)",
            "Strenge Blutzuckerkontrolle (Ziel: 140-180 mg/dl bzw. 7,8-10,0 mmol/l)",
            "Frühzeitige enterale Ernährung",
            "Prophylaktisches niedermolekulares Heparin (NMH) gegen tiefe Venenthrombose",
            "Stressulkusprophylaxe mit einem Protonenpumpenhemmer (PPI) bei Hochrisikopatienten",
            "Nierenersatztherapie (CRRT) bei hämodynamisch instabiler akuter Niereninsuffizienz"
        ],
        "prevention": [
            "Strikte Einhaltung von Krankenhausinfektionskontroll- und Hygieneprotokollen (Händehygiene, Isolation)",
            "Impfung (Streptococcus pneumoniae, Influenza, SARS-CoV-2, Neisseria meningitidis)",
            "Vermeidung des unnötigen Einsatzes invasiver Geräte (Harnwegskatheter, zentralvenöse Katheter) und deren frühzeitige Entfernung",
            "Frühzeitiges chirurgisches Debridement bei Wunden"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Flüssigkeitssubstitution (ausgeglichene Kristalloide, z. B. Ringer-Laktat)",
                    "dose": "30 ml/kg",
                    "duration": "Innerhalb der ersten 3 Stunden",
                    "note": "Bei Hypotonie oder Laktat >= 4 mmol/L verpflichtend. Synthetische Kolloide (HES, Gelatine) sollten wegen des Risikos einer Niereninsuffizienz vermieden werden. Bei hohem Bedarf an Kristalloid-Volumen kann die Gabe von Albumin erwogen werden."
                },
                {
                    "drug": "Empirische intravenöse Antibiotikatherapie (z. B. Piperacillin/Tazobactam, Meropenem, Ceftazidim, bei MRSA-Verdacht in Kombination mit Vancomycin)",
                    "dose": "Maximal zulässige Dosis (angepasst an die Nierenfunktion)",
                    "duration": "Beginn innerhalb der ersten Stunde, in der Regel für 7-10 Tage",
                    "note": "Die Wahl sollte fokus- und lokal resistenzspezifisch erfolgen. Bei Pseudomonas- oder MRSA-Risiko ist eine gezielte Abdeckung erforderlich."
                },
                {
                    "drug": "Noradrenalin (Norepinephrin)",
                    "dose": "Titriert bis zum Erreichen eines MAP >= 65 mmHg",
                    "duration": "Kontinuierlich während der Schockphase",
                    "note": "Vasopressor erster Wahl. Kann bei Verzögerung des zentralvenösen Zugangs früh über einen peripheren Zugang begonnen werden."
                },
                {
                    "drug": "Vasopressin",
                    "dose": "Fixe Dosis von 0,03 E/min",
                    "duration": "Als kontinuierliche Infusion",
                    "note": "Kann Noradrenalin ergänzend hinzugefügt werden, um das MAP-Ziel zu erreichen oder die Noradrenalindosis zu reduzieren."
                },
                {
                    "drug": "Hydrocortison",
                    "dose": "200 mg/Tag (z. B. 4x50 mg i.v. oder als kontinuierliche Infusion)",
                    "duration": "Bei refraktärem Schock",
                    "note": "Nur empfohlen, wenn Flüssigkeits- und Vasopressortherapie die hämodynamische Stabilität nicht wiederherstellen."
                }
            ],
            "outpatient": []
        }
    },
    prognosis: {
        "mortality": "Bei Sepsis etwa 15-25 %; die Krankenhausmortalität kann bei Entwicklung eines septischen Schocks 40-50 % erreichen.",
        "factors": "Alter, bestehende Komorbiditäten, Geschwindigkeit der Diagnose und therapeutischen Interventionen (Antibiotika, Fokussanierung), initialer Laktatspiegel und Laktat-Clearance, Anzahl der betroffenen Organe.",
        "prognostic_scores": [
            "SOFA-Score (Sequential Organ Failure Assessment): ein Anstieg um >=2 Punkte weist auf eine akute Organdysfunktion und Sepsis hin",
            "NEWS (National Early Warning Score) / SIRS-Kriterien / MEWS: bessere Sensitivität zum Screening als qSOFA",
            "APACHE-II-Score (zur Abschätzung des Intensivbehandlungsergebnisses)"
        ]
    },
    language: "de",
    group: "systemic_de"
  },
  {
    id: "fever-of-unknown-origin",
    name: "Fieber unklarer Genese (FUO)",
    pathogen: {
        "type": "Syndrom",
        "name": "Multifaktoriell (infektiöse, systemisch-autoimmune/entzündliche, maligne und andere Ursachen)",
        "gram": "Nicht relevant",
        "shape": "Nicht relevant"
    },
    epidemiology: {
        "incidence": "Ca. 2-5 % der Fieberfälle im Krankenhaus; den nicht diagnostizierten fieberhaften Zuständen liegen am häufigsten Infektionen (25-35 %), Malignome (15-20 %) und nicht-infektiöse entzündliche Erkrankungen (Riesenzellarteriitis, Morbus Still usw., 15-20 %) zugrunde.",
        "risk_groups": [
            "Ältere Menschen (Riesenzellarteriitis und Malignome häufiger)",
            "Neutropenische oder anderweitig immunsupprimierte Patienten",
            "Nosokomial (im Krankenhaus) behandelte Patienten",
            "HIV-infizierte Personen"
        ],
        "seasonality": "Keine Saisonalität",
        "transmission": "Kein übertragbares Syndrom (einzelne zugrunde liegende Erreger können jedoch selbst ansteckend sein)"
    },
    pathomechanism: {
        "steps": [
            "Periphere Entzündungszellen (Monozyten, Makrophagen) produzieren als Reaktion auf exogene Pyrogene (Erreger, Toxine) oder Immunstimulation endogene Pyrogene (IL-1, IL-6, TNF-alpha, IFN).",
            "Die endogenen Pyrogene erreichen über den Blutkreislauf das präoptische Areal des Hypothalamus (Organum vasculosum laminae terminalis - OVLT).",
            "In den OVLT-Zellen wird die Cyclooxygenase-2 (COX-2) aktiviert, was zur Synthese von Prostaglandin E2 (PGE2) führt.",
            "Der erhöhte PGE2-Spiegel verschiebt den hypothalamischen Temperatur-Sollwert nach oben.",
            "Der Körper aktiviert wärmeerhaltende und wärmeerzeugende Mechanismen (Vasokonstriktion, Schüttelfrost), was zu Fieber führt.",
            "Bei FUO bleibt dieser Kreislauf aufgrund eines fortbestehenden okkulten Entzündungsherdes, Malignoms oder Autoimmunprozesses kontinuierlich bestehen."
        ],
        "virulence_factors": [
            "Nicht relevant (abhängig vom jeweiligen Erreger)"
        ]
    },
    clinical: {
        "incubation": "Nicht relevant",
        "onset": "Allmählich oder schwankend, seit mindestens 3 Wochen bestehender fieberhafter Zustand",
        "symptoms": [
            {
                "name": "Fieber",
                "description": "Mehrfach gemessene Körpertemperatur >38,3 °C, die seit mindestens 3 Wochen besteht und trotz initialer Untersuchungen undiagnostiziert bleibt.",
                "severity": "severe"
            },
            {
                "name": "Systemische Symptome",
                "description": "Nachtschweiß, unbeabsichtigter Gewichtsverlust, Abgeschlagenheit, Appetitlosigkeit.",
                "severity": "moderate"
            },
            {
                "name": "Organspezifische Begleitsymptome",
                "description": "Gelenkschmerzen, Kopfschmerzen (Verdacht auf Riesenzellarteriitis), Hautausschläge, Lymphadenopathie oder Bauchschmerzen, abhängig von der zugrunde liegenden Ursache.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Detaillierte und täglich wiederholte körperliche Untersuchung (neue Hautausschläge, Herzgeräusche, Lymphknoten, Druckempfindlichkeit der Temporalarterien)",
            "Analyse der Fieberkurve",
            "Augenhintergrunduntersuchung (Zeichen von Endokarditis, Tuberkulose oder granulomatösen Erkrankungen)"
        ],
        "complications": [
            "Progression der zugrunde liegenden malignen oder systemisch-entzündlichen Erkrankung aufgrund verzögerter Diagnose",
            "Sepsis oder Organversagen bei unbehandelten Infektionen",
            "Iatrogene Schäden durch unnötige empirische Therapien (z. B. Arzneimittelfieber, Resistenzentwicklung)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "CT von Thorax und Abdomen/Becken",
                "finding": "Identifikation von Herden, Abszessen, Lymphadenopathie, Organomegalie (Hepatosplenomegalie) oder okkulten Tumoren.",
                "significance": "Bildgebung erster Wahl zur anatomischen Abklärung."
            },
            {
                "modality": "18F-FDG-PET/CT",
                "finding": "Bereiche mit gesteigertem Glukosestoffwechsel (Vaskulitis, Malignom, Osteomyelitis oder okkulter Abszess).",
                "significance": "Die wichtigste frühzeitige funktionelle Bildgebung zweiter Wahl mit hohem negativem Vorhersagewert."
            }
        ],
        "laboratory": [
            {
                "test": "Kleines Blutbild, CRP, BSG, Ferritin",
                "finding": "Leukozytose/Leukopenie, erhöhte Entzündungsmarker, extrem hoher Ferritinwert (Verdacht auf Morbus Still oder HLH).",
                "interpretation": "Bestätigung der systemischen Entzündung und Bestimmung der Richtung der weiteren Abklärung."
            },
            {
                "test": "Serum- und Urin-Immunfixation / Proteinelektrophorese",
                "finding": "Monoklonale Gammopathie oder erhöhte polyklonale Immunglobuline.",
                "interpretation": "Verdacht auf multiples Myelom oder systemische Autoimmunerkrankungen."
            },
            {
                "test": "Autoantikörper (ANA, ANCA, RF, Anti-CCP)",
                "finding": "Positivität für spezifische Antikörper.",
                "interpretation": "Zur Diagnostik von Bindegewebserkrankungen (Autoimmunerkrankungen) und Vaskulitiden."
            }
        ],
        "microbiology": [
            {
                "test": "Wiederholte Blutkulturen (mindestens 3 Paare, aus verschiedenen venösen Zugängen, vor Antibiotikagabe)",
                "finding": "Bestätigung von Bakteriämie oder Fungämie (z. B. langsam wachsende HACEK-Erreger, Mykobakterien).",
                "significance": "Goldstandard zur Diagnose einer infektiösen Endokarditis und anderer intravaskulärer Infektionen."
            },
            {
                "test": "Virale und andere spezifische PCR-Tests / Serologie",
                "finding": "Positivität für CMV, EBV, HIV, Bartonella, Coxiella burnetii, Brucella.",
                "significance": "Zum Ausschluss atypischer und chronischer Infektionen."
            },
            {
                "test": "IGRA (Quantiferon-TB) oder Mantoux-Test",
                "finding": "Positives Ergebnis bei latenter oder aktiver Tuberkulose.",
                "significance": "Zum Ausschluss extrapulmonaler/miliarer Tuberkulose."
            }
        ]
    },
    therapy: {
        "targeted": "Gezielte Behandlung entsprechend der diagnostizierten Grunderkrankung (Antimikrobiotika bei Infektionen, Immunsuppression/Kortikosteroide bei Autoimmunerkrankungen, onkologische Behandlung bei Malignomen).",
        "supportive": [
            "Aufrechterhaltung des Flüssigkeits- und Elektrolythaushalts",
            "Physikalische Kühlung sowie bei Bedarf NSAR oder Paracetamol (nur wenn dies die diagnostischen Untersuchungen nicht beeinträchtigt und der klinische Zustand des Patienten dies erfordert)",
            "Ernährungsunterstützung"
        ],
        "prevention": [
            "Prävention nosokomialer Infektionen (bei nosokomialem FUO)",
            "Korrekte aseptische Technik bei der Anwendung invasiver Geräte"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Empirisches Breitspektrum-Antibiotikum (z. B. Piperacillin/Tazobactam oder Meropenem)",
                    "dose": "Individuell angepasst an klinischen Zustand und Nierenfunktion",
                    "duration": "Bis zum Vorliegen der Kulturergebnisse oder zur Klärung des klinischen Bildes",
                    "note": "Nur indiziert bei instabilen Patienten mit Sepsiszeichen oder bei Patienten mit schwerer Neutropenie (ANC < 500/µl)."
                },
                {
                    "drug": "Kortikosteroid (z. B. Prednisolon)",
                    "dose": "Nicht routinemäßig empfohlen",
                    "duration": "Individuelle Entscheidung",
                    "note": "Kann nur bei starkem Verdacht auf Riesenzellarteriitis (GCA) mit drohendem Sehverlust empirisch vor der Biopsie begonnen werden."
                }
            ],
            "outpatient": [
                {
                    "drug": "Empirische antimikrobielle oder Steroidtherapie sollte vermieden werden",
                    "dose": "Nicht anwendbar",
                    "duration": "Nicht anwendbar",
                    "note": "Bei stabilen ambulanten Patienten verschlechtert eine empirische Behandlung die diagnostische Genauigkeit und kann Symptome verschleiern."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Bei jüngeren Patienten mit infektiöser oder entzündlicher Ursache niedrig (<5-10 %), kann jedoch bei älteren Patienten oder maligner Grunderkrankung 30-50 % erreichen.",
        "factors": "Art der zugrunde liegenden Erkrankung, Alter des Patienten, Ausmaß der Immunsuppression und Geschwindigkeit der Diagnosestellung.",
        "prognostic_scores": [
            "Kein spezifisches FUO-Prognosesystem vorhanden; zur Abschätzung des Sepsisrisikos können qSOFA/SOFA verwendet werden, bei Malignomen gelten spezifische onkologische Stadieneinteilungen."
        ]
    },
    language: "de",
    group: "systemic_de"
  },
  {
    id: "pyomyositis",
    name: "Pyomyositis (eitrige Muskelentzündung)",
    pathogen: {
        "type": "Bakterium",
        "name": "Staphylococcus aureus (einschließlich MRSA), Streptococcus pyogenes (Gruppe-A-Streptokokken), gramnegative Stäbchen (z. B. Escherichia coli, Klebsiella pneumoniae)",
        "gram": "Grampositiv und gramnegativ",
        "shape": "Kokken und Stäbchen"
    },
    epidemiology: {
        "incidence": "Häufig in tropischen Regionen (primäre Form), in gemäßigten Klimazonen seltener und meist sekundär, im Zusammenhang mit Immunsuppression oder Trauma auftretend.",
        "risk_groups": [
            "Menschen mit HIV/AIDS",
            "Patienten mit Diabetes mellitus",
            "Neutropenie oder immunsuppressive Therapie",
            "Intravenöse Drogenkonsumenten",
            "Kürzlich erlittenes stumpfes Trauma oder extreme körperliche Belastung",
            "Leberzirrhose, Niereninsuffizienz"
        ],
        "seasonality": "Keine",
        "transmission": "Nicht von Mensch zu Mensch übertragbar; entsteht meist durch hämatogene Kolonisierung geschädigten oder verletzten Muskelgewebes während einer transienten Bakteriämie."
    },
    pathomechanism: {
        "steps": [
            "Gesundes Skelettmuskelgewebe ist widerstandsfähig gegenüber bakteriellen Infektionen.",
            "Stumpfes Trauma, Mikroverletzungen, Ischämie oder intensive körperliche Belastung verursachen eine lokale Muskelschädigung (Hämatom, Ödem).",
            "Während einer transienten Bakteriämie haften zirkulierende Bakterien an dem geschädigten, anfälligen Muskelgewebe an.",
            "Invasive Phase: Die Bakterien vermehren sich und verursachen lokale Entzündung und Ödembildung ohne echte Eiterbildung.",
            "Suppurative Phase: Mikroabszesse bilden sich und verschmelzen zu einem gespannten, umschriebenen intramuskulären Abszess.",
            "Späte Phase: Ohne adäquate Behandlung durchbricht der Abszess die Faszie und verursacht septische Embolisation, Bakteriämie und septischen Schock."
        ],
        "virulence_factors": [
            "Fibronektin-bindende Proteine von S. aureus (FnBPA, FnBPB) zur Adhäsion an geschädigtes Muskelgewebe",
            "Panton-Valentine-Leukozidin (PVL)-Toxin (häufig bei nekrotisierenden Formen)",
            "Alpha-Hämolysin und andere zytolytische Toxine",
            "Superantigene (TSST-1, Enterotoxine), die eine massive Entzündungsreaktion auslösen"
        ]
    },
    clinical: {
        "incubation": "Variabel, in der Regel Tage bis Wochen nach dem prädisponierenden Trauma oder der Bakteriämie.",
        "onset": "Allmählich einsetzend, jedoch progredienter Verlauf (drei klinische Phasen: invasiv, suppurativ, spät-septisch).",
        "symptoms": [
            {
                "name": "Tiefer Muskelschmerz",
                "description": "Lokalisierter, krampfartiger, zunächst dumpfer, später unerträglicher Muskelschmerz.",
                "severity": "severe"
            },
            {
                "name": "Fieber und Schüttelfrost",
                "description": "Oft hohes, septisches Fiebermuster, insbesondere ab der suppurativen Phase.",
                "severity": "severe"
            },
            {
                "name": "Gespannte Schwellung",
                "description": "Der betroffene Muskel ist starr, brettartig tastbar, geschwollen und äußerst druckempfindlich.",
                "severity": "moderate"
            },
            {
                "name": "Funktionsausfall",
                "description": "Schwere Bewegungseinschränkung der betroffenen Muskelgruppe durch die Schmerzen.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Schwellung des betroffenen Muskels, ausgeprägte Druckschmerzhaftigkeit und brettartige, gespannte Konsistenz.",
            "Fluktuation ist meist aufgrund der tiefen Lage und gespannten Faszie nicht tastbar.",
            "Zeichen einer systemischen Entzündungsreaktion (Fieber, Tachykardie, Tachypnoe).",
            "Die darüberliegende Haut kann zunächst unauffällig sein; ein Erythem tritt erst spät auf."
        ],
        "complications": [
            "Intramuskuläre Abszessbildung",
            "Kompartmentsyndrom",
            "Sepsis und septischer Schock",
            "Metastatische Abszesse (z. B. Lunge, Gehirn, Niere)",
            "Infektion benachbarter Knochen und Gelenke (Osteomyelitis, septische Arthritis)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "MRT",
                "finding": "Muskelödem in T2-gewichteten Aufnahmen, Kontrastmittelanreicherung der Abszesswand.",
                "significance": "Die sensitivste und spezifischste bildgebende Methode, besonders zur Erkennung der frühen, invasiven Phase."
            },
            {
                "modality": "Ultraschall",
                "finding": "Auflösung der Muskelfaserstruktur, echoarme Flüssigkeitsansammlung (Abszess).",
                "significance": "Eine schnelle, kostengünstige Methode zum Nachweis von Abszessen und zur Steuerung von Aspiration/Drainage."
            },
            {
                "modality": "CT",
                "finding": "Muskelschwellung, minderdichte Areale (Abszesse) mit oder ohne Gaseinschlüsse.",
                "significance": "Nützliche Alternative, insbesondere zur Beurteilung retroperitonealer oder Beckenmuskeln (Psoas)."
            }
        ],
        "laboratory": [
            {
                "test": "Blutbild, CRP, Procalcitonin",
                "finding": "Ausgeprägte Leukozytose mit Linksverschiebung, deutlich erhöhtes CRP und Procalcitonin.",
                "interpretation": "Zeichen einer akuten systemischen bakteriellen Infektion."
            },
            {
                "test": "Kreatinkinase (CK)",
                "finding": "Normal oder nur minimal erhöht.",
                "interpretation": "Wichtiger diagnostischer Hinweis: Im Gegensatz zu Myositis und Rhabdomyolyse sind die CK-Werte bei Pyomyositis meist normal, da die Zellschädigung lokalisiert ist."
            },
            {
                "test": "Blutkultur",
                "finding": "In 10-30 % der Fälle positiv (am häufigsten S. aureus).",
                "interpretation": "Bestätigt hämatogenen Ursprung und leitet die gezielte Therapie."
            }
        ],
        "microbiology": [
            {
                "test": "Kultur des Abszessaspirats und Gram-Färbung",
                "finding": "Identifikation grampositiver Kokken oder gramnegativer Stäbchen und Bestimmung des Resistenzprofils.",
                "significance": "Goldstandard für Diagnose und gezielte Therapie."
            },
            {
                "test": "PCR-Test",
                "finding": "Nachweis bakterieller DNA in kulturnegativen Fällen.",
                "significance": "Ergänzender diagnostischer Test bei vorheriger Antibiotikabehandlung."
            }
        ]
    },
    therapy: {
        "targeted": "In der Abszessphase sind Inzision und Drainage oder eine ultraschall-/CT-gesteuerte perkutane Aspiration obligat, ergänzt durch eine gezielte Antibiotikatherapie basierend auf den Kulturergebnissen.",
        "supportive": [
            "Chirurgisches Debridement zur Entfernung von nekrotischem Gewebe",
            "Wirksame Schmerztherapie (NSAR, bei Bedarf Opioide)",
            "Aggressive intravenöse Flüssigkeitstherapie bei Sepsis",
            "Vorübergehende Ruhigstellung der betroffenen Extremität"
        ],
        "prevention": [
            "Straffe Kontrolle von Diabetes mellitus und anderen Begleiterkrankungen",
            "Sofortige Desinfektion und angemessene Versorgung von Hautverletzungen",
            "Strikte aseptische Technik bei invasiven Eingriffen"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin i.v. PLUS Piperacillin/Tazobactam i.v. (oder Ceftriaxon + Metronidazol)",
                    "dose": "Vancomycin: 15-20 mg/kg alle 8-12 h; Piperacillin/Tazobactam: 4,5 g alle 6 h",
                    "duration": "3-4 Wochen (davon mindestens 1-2 Wochen i.v.-Therapie, danach orale Umstellung)",
                    "note": "Eine breite empirische Abdeckung ist erforderlich, insbesondere bei immunsupprimierten Patienten oder bei Befall des Beckens (Psoas). Vancomycin deckt MRSA ab, während Piperacillin/Tazobactam Schutz gegen gramnegative Erreger und Anaerobier bietet."
                }
            ],
            "outpatient": [
                {
                    "drug": "Orales Clindamycin oder orales TMP-SMX oder orales Amoxicillin-Clavulansäure",
                    "dose": "Clindamycin: 300-450 mg alle 6-8 h; TMP-SMX: 160/800 mg alle 12 h; Amoxicillin-Clavulansäure: 875/125 mg alle 12 h",
                    "duration": "Bis zum Abschluss der vollständigen 3-4-wöchigen Kur",
                    "note": "Ein Wechsel auf orale Therapie wird erst nach erfolgreicher Drainage, klinischer Besserung, mindestens 48-72 Stunden Fieberfreiheit und auf Basis der Kulturergebnisse empfohlen."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "<1-2 % bei rechtzeitiger chirurgischer Drainage und wirksamer Antibiotikatherapie, kann jedoch bei verzögerter Diagnose oder Sepsis 10-15 % erreichen.",
        "factors": "Verzögerte Diagnose, unzureichende oder verzögerte chirurgische Drainage, immunsupprimierter Zustand, Vorliegen von MRSA oder gramnegativen Erregern.",
        "prognostic_scores": [
            "SOFA-/qSOFA-Score (zur Beurteilung des Schweregrads einer systemischen Sepsis)"
        ]
    },
    language: "de",
    group: "systemic_de"
  },
  {
    id: "toxic-shock-syndrome",
    name: "Toxisches Schocksyndrom (TSS)",
    pathogen: {
        "type": "Bakterium",
        "name": "Staphylococcus aureus, Streptococcus pyogenes (Gruppe-A-Streptokokken - GAS)",
        "gram": "Grampositiv",
        "shape": "Kokken (in Haufen oder Ketten)"
    },
    epidemiology: {
        "incidence": "Selten (Staphylokokken-TSS: ~0,5-1/100.000; Streptokokken-TSS: ~2-4/100.000 Einwohner/Jahr)",
        "risk_groups": [
            "Menstruierende Frauen, die superabsorbierende Tampons verwenden",
            "Patienten mit chirurgischen oder postoperativen Wunden",
            "Verbrennungsopfer und Personen mit ausgedehnten Hautverletzungen",
            "Kinder mit Windpocken (erhöhtes Risiko für Streptokokken-TSS)",
            "Frauen kurz nach der Entbindung (postpartale Endometritis)"
        ],
        "seasonality": "Keine",
        "transmission": "Nicht direkt von Mensch zu Mensch übertragbar; wird durch Toxine verursacht, die an einem infizierten Herd gebildet werden und in den systemischen Kreislauf gelangen."
    },
    pathomechanism: {
        "steps": [
            "Staphylococcus aureus oder Streptococcus pyogenes kolonisiert oder infiziert eine Schleimhaut oder Weichteile, wo Exotoxine produziert werden (Staph: TSST-1, Enterotoxine; Strep: SpeA, SpeC, SpeF).",
            "Diese Toxine wirken als Superantigene: Unter Umgehung der normalen Antigenpräsentation verbinden sie direkt die MHC-II-Moleküle antigenpräsentierender Zellen mit der Beta-Kette des T-Zell-Rezeptors (TCR).",
            "Diese unspezifische Bindung aktiviert gleichzeitig bis zu 20-30 % der T-Zellen des Körpers (im Vergleich zu 0,01 % bei normalen Antigenen).",
            "Die massive T-Zell-Aktivierung löst einen unkontrollierten Zytokinsturm aus (enorme Freisetzung von TNF-alpha, IL-1, IL-2, IL-6 und IFN-gamma).",
            "Die Zytokine verursachen eine generalisierte Vasodilatation, einen drastischen Anstieg der Kapillarpermeabilität (Kapillarlecksyndrom) und schwere Hypotonie, was zu Multiorganversagen und refraktärem Schock führt."
        ],
        "virulence_factors": [
            "TSST-1 (Toxic-Shock-Syndrom-Toxin-1 - S. aureus)",
            "Staphylokokken-Enterotoxine (SEA, SEB, SEC)",
            "Streptokokken-pyrogene Exotoxine (SpeA, SpeB, SpeC, SpeF)",
            "M-Protein (hemmt die Phagozytose, fördert die Adhäsion - S. pyogenes)"
        ]
    },
    clinical: {
        "incubation": "Extrem schnell (bereits 12-48 Stunden nach der Infektion/Verletzung)",
        "onset": "Plötzlich",
        "symptoms": [
            {
                "name": "Hohes Fieber",
                "description": "Plötzlich einsetzendes Fieber >38,9 °C, oft begleitet von Schüttelfrost.",
                "severity": "severe"
            },
            {
                "name": "Hypotonie und Schock",
                "description": "Systolischer Blutdruck <90 mmHg bei Erwachsenen, kaum oder gar nicht auf Flüssigkeitssubstitution ansprechend.",
                "severity": "severe"
            },
            {
                "name": "Diffuse Erythrodermie",
                "description": "Sonnenbrandartiger, diffuser, flacher roter Ausschlag, der auch Handflächen und Fußsohlen betrifft.",
                "severity": "moderate"
            },
            {
                "name": "Multisystemischer Organbefall",
                "description": "Beteiligung von mindestens drei Organsystemen (GI: Erbrechen/Durchfall; muskuloskelettal: schwere Myalgie und erhöhte CK-Werte; Nieren-/Leberversagen; Thrombozytopenie).",
                "severity": "severe"
            },
            {
                "name": "Desquamation (Hautschuppung)",
                "description": "Flächige Hautschuppung, die 1-2 Wochen nach Krankheitsbeginn auftritt, besonders an Handflächen und Fußsohlen.",
                "severity": "mild"
            }
        ],
        "physical_exam": [
            "Diffuser makulopapulöser Ausschlag (Erythrodermie)",
            "Schwere Hypotonie, Tachykardie, periphere Perfusionsstörung",
            "Schleimhauthyperämie (Konjunktiva, Mundhöhle, vaginale Rötung)",
            "Erdbeerzunge (besonders bei Streptokokkeninfektion)",
            "Bewusstseinsveränderung, Verwirrtheit oder Somnolenz aufgrund der Hypoperfusion",
            "Zeichen einer lokalen Weichteilinfektion (bei Strep-TSS: Erythem, Schwellung, Krepitation, auf nekrotisierende Fasziitis hinweisende Blasen)"
        ],
        "complications": [
            "Refraktärer septischer Schock",
            "ARDS (akutes Atemnotsyndrom)",
            "DIC (disseminierte intravasale Gerinnung)",
            "Akute Niereninsuffizienz (kann Nierenersatztherapie erfordern)",
            "Extremitätennekrose mit Amputationsbedarf",
            "Multiorganversagen und Tod"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "CT / MRT (mit Kontrastmittel)",
                "finding": "Weichteilgaseinschlüsse, Verdickung der tiefen Faszie, fehlende Kontrastmittelanreicherung in nekrotischen Bereichen.",
                "significance": "Rascher Ausschluss oder Bestätigung einer nekrotisierenden Fasziitis (besonders bei Strep-TSS), die eine sofortige chirurgische Intervention erfordert."
            },
            {
                "modality": "Ultraschall (patientennah - POCUS)",
                "finding": "Freie Flüssigkeit entlang der Weichteile und der Faszie ('Pflastersteinmuster', 'Fluid-Wave'-Zeichen).",
                "significance": "Rasche Orientierung auf der Intensivstation vor chirurgischer Exploration."
            }
        ],
        "laboratory": [
            {
                "test": "Kleines Blutbild",
                "finding": "Ausgeprägte Leukozytose mit Linksverschiebung, schwere Thrombozytopenie (<100.000/µl).",
                "interpretation": "Systemische Entzündungsreaktion und Verbrauchskoagulopathie."
            },
            {
                "test": "Nieren- und Leberfunktion",
                "finding": "Kreatinin >177 µmol/l (oder Verdopplung des Ausgangswerts), erhöhtes Gesamtbilirubin.",
                "interpretation": "Diagnosekriterium für Multiorganversagen."
            },
            {
                "test": "Kreatinkinase (CK)",
                "finding": "Deutlich erhöht (>2-fach der oberen Normgrenze).",
                "interpretation": "Bestätigt schwere Myositis, Rhabdomyolyse."
            },
            {
                "test": "Gerinnungsstatus (INR, aPTT, Fibrinogen)",
                "finding": "Verlängerte Gerinnungszeiten, verminderter Fibrinogenspiegel, erhöhtes D-Dimer.",
                "interpretation": "Bestätigt eine sich entwickelnde systemische DIC."
            }
        ],
        "microbiology": [
            {
                "test": "Blutkultur",
                "finding": "Bei Staph-TSS oft negativ (<5-15 % positiv); bei Strep-TSS oft positiv (>50-60 % bakteriämisch).",
                "significance": "Entscheidend zur Bestätigung der Ätiologie; eine positive Blutkultur bestätigt die Diagnose bei Strep-TSS."
            },
            {
                "test": "Wund-, Vaginal- und Rachenabstrichkulturen",
                "finding": "Wachstum von S. aureus oder S. pyogenes.",
                "significance": "Identifikation des primären Infektions- oder Kolonisationsherdes."
            },
            {
                "test": "Molekular- und Toxintests (PCR, ELISA)",
                "finding": "Nachweis von Superantigen-Toxingenen (z. B. tst, speA, speC).",
                "significance": "Bestätigende Untersuchung, durchgeführt von Referenzlaboren."
            }
        ]
    },
    therapy: {
        "targeted": "Bei Staph-TSS: bei MSSA Cefazolin (oder Flucloxacillin) + Clindamycin; bei MRSA Vancomycin + Clindamycin. Bei Strep-TSS: hochdosiertes Penicillin G + Clindamycin (Hemmung der Toxinsynthese). Bei Clindamycin-Resistenz oder -Unverträglichkeit kann Linezolid als Toxinsynthese-Hemmer eingesetzt werden. Bei schwerem, therapierefraktärem Strep-TSS und nekrotisierender Fasziitis wird IVIG (intravenöses Immunglobulin, 1-2 g/kg) zur Neutralisierung der Toxine empfohlen. Sofortiges chirurgisches Debridement und Fokussanierung (Entfernung von Tampons, Fremdkörpern) sind zwingend erforderlich!",
        "supportive": [
            "Aggressive intravenöse Flüssigkeitstherapie (Kristalloide) zur Korrektur des hypovolämischen und distributiven Schocks.",
            "Frühzeitiger Einsatz von Vasopressoren (erste Wahl: Noradrenalin) zur Aufrechterhaltung eines MAP >65 mmHg.",
            "Atemunterstützung (lungenprotektive maschinelle Beatmung bei ARDS).",
            "Kontinuierliche Nierenersatztherapie (CRRT) bei akuter Niereninsuffizienz und Anurie.",
            "Transfusionsunterstützung (Erythrozyten, Thrombozyten, gefrorenes Frischplasma) bei schwerer Koagulopathie und Blutung."
        ],
        "prevention": [
            "Vermeidung der Verwendung superabsorbierender Tampons, häufiger Wechsel (alle 4-6 Stunden).",
            "Sterile und fachgerechte Versorgung postoperativer Wunden.",
            "Sofortige Desinfektion von Hautabschürfungen und Verletzungen."
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg i.v. alle 12 Stunden (mit Serumspiegelkontrolle oder AUC-basierter Dosierung)",
                    "duration": "10-14 Tage (basierend auf klinischem Bild und Fokussanierung)",
                    "note": "Zur empirischen Abdeckung von MRSA und resistenten grampositiven Stämmen."
                },
                {
                    "drug": "Clindamycin",
                    "dose": "900 mg i.v. alle 8 Stunden",
                    "duration": "Bis zur klinischen Stabilität und Rückbildung der toxischen Symptome (in der Regel 3-5 Tage, danach gezielte Therapie)",
                    "note": "Stoppt die bakterielle Superantigen-Toxinproduktion durch Hemmung der Proteinsynthese (Gegensteuerung des Eagle-Effekts)."
                },
                {
                    "drug": "Piperacillin/Tazobactam",
                    "dose": "4,5 g i.v. alle 6 Stunden (verlängerte Infusion empfohlen)",
                    "duration": "Bis zum Vorliegen der mikrobiologischen Ergebnisse",
                    "note": "Breite gramnegative und anaerobe Abdeckung bei Verdacht auf eine gemischte Wundinfektion."
                }
            ],
            "outpatient": [
                {
                    "drug": "Keine",
                    "dose": "Nicht anwendbar",
                    "duration": "Nicht anwendbar",
                    "note": "Bei Verdacht auf ein toxisches Schocksyndrom ist eine sofortige Aufnahme auf die Intensivstation mit Überwachung erforderlich!"
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Menstruelles Staph-TSS: <1-3 %; nicht-menstruelles Staph-TSS: 5-15 %; Streptokokken-TSS (Strep-TSS): 30-45 % (auch bei adäquater Intensivtherapie).",
        "factors": "Alter des Patienten, Zeit vom Schockbeginn bis zur Einleitung adäquater Antibiotika- und Fokussanierungsmaßnahmen, Art des primären Infektionsherdes (z. B. nekrotisierende Fasziitis), Erregertyp und Vorliegen einer Bakteriämie.",
        "prognostic_scores": [
            "SOFA-Score (Sequential Organ Failure Assessment)",
            "APACHE-II-Score"
        ]
    },
    language: "de",
    group: "systemic_de"
  },
  {
    id: "invasive-candidiasis",
    name: "Invasive Candidiasis",
    pathogen: {
        "type": "Pilz",
        "name": "Candida albicans, Candida glabrata, Candida parapsilosis, Candida tropicalis, Candida krusei und Candida auris",
        "gram": "Sprosspilz",
        "shape": "Ovale sprossende Zellen, Bildung von Pseudohyphen und echten Hyphen (außer bei C. glabrata)"
    },
    epidemiology: {
        "incidence": "4. häufigste Ursache nosokomialer Blutstrominfektionen auf Intensivstationen.",
        "risk_groups": [
            "Behandlung auf der Intensivstation (ICU)",
            "Zentralvenöser Katheter (ZVK)",
            "Breitspektrum-Antibiotikatherapie",
            "Totale parenterale Ernährung (TPN)",
            "Große Bauchoperationen, Gastrointestinalperforation",
            "Neutropenie, Immunsuppression"
        ],
        "seasonality": "Keine",
        "transmission": "Endogene Translokation aus dem Gastrointestinaltrakt oder exogene Übertragung (Hände des medizinischen Personals, kontaminierte Geräte - besonders bei Candida auris)"
    },
    pathomechanism: {
        "steps": [
            "Störung der Schleimhaut- oder Hautbarriere (Dysbiose durch Breitspektrum-Antibiotika, Chemotherapie, Operation)",
            "Translokation in den Blutkreislauf über den Gastrointestinaltrakt oder direkter Eintritt über intravaskuläre Geräte",
            "Adhäsion und Biofilmbildung auf Fremdkörpern (z. B. ZVK)",
            "Hämatogene Streuung und Besiedlung tiefer Organe, Bildung von Mikroabszessen (Auge, Herz, Leber, Milz, Knochen)"
        ],
        "virulence_factors": [
            "Fähigkeit zur Biofilmbildung (besonders C. albicans, C. auris)",
            "Adhäsine (ALS-Genfamilie)",
            "Morphologischer Übergang (Wechsel zwischen Hefe- und Hyphenform)",
            "Extrazelluläre hydrolytische Enzyme (sezernierte Aspartylproteasen, Phospholipasen)"
        ]
    },
    clinical: {
        "incubation": "Variabel",
        "onset": "Akute oder allmählich fortschreitende Sepsis",
        "symptoms": [
            {
                "name": "Anhaltendes Fieber",
                "description": "Fieber, das nicht auf eine Breitspektrum-Antibiotikatherapie anspricht.",
                "severity": "severe"
            },
            {
                "name": "Sepsis / septischer Schock",
                "description": "Hypotonie, Tachykardie, Tachypnoe, Organdysfunktion.",
                "severity": "severe"
            },
            {
                "name": "Endophthalmitis",
                "description": "Verschwommenes Sehen, Skotome, Augenschmerzen. Führt unbehandelt zur Erblindung.",
                "severity": "severe"
            },
            {
                "name": "Hautmanifestationen",
                "description": "Schmerzlose, erythematöse, noduläre oder papulopustulöse Hautläsionen.",
                "severity": "moderate"
            },
            {
                "name": "Hepatolienale Candidiasis",
                "description": "Schmerzen im rechten Oberbauch, Fieber und erhöhte alkalische Phosphatase nach Erholung von der Neutropenie.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Fieber, Tachykardie, Hypotonie (Zeichen einer Sepsis/eines septischen Schocks)",
            "Erweiterte Fundoskopie (Chorioretinitis, Vitritis, weiße, wattebauschartige Herde)",
            "Makulopapulöse oder noduläre Hautläsionen",
            "Neu aufgetretenes Herzgeräusch (Verdacht auf Endokarditis)",
            "Abdominale Druckempfindlichkeit oder Hepatomegalie"
        ],
        "complications": [
            "Septischer Schock und Multiorganversagen",
            "Endophthalmitis (dauerhafter Sehverlust)",
            "Infektiöse Endokarditis",
            "Osteomyelitis und Diszitis",
            "Leber- und Milzabszesse"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Echokardiografie (TTE/TEE)",
                "finding": "Vegetationen an den Herzklappen bei Candidämie zum Ausschluss einer Endokarditis.",
                "significance": "Bei allen Patienten mit Candidämie zum Ausschluss einer Endokarditis empfohlen."
            },
            {
                "modality": "Abdomen-CT / MRT",
                "finding": "Kleine, runde, minderdichte, zielscheibenartige Läsionen in Leber und/oder Milz.",
                "significance": "Diagnose der chronisch disseminierten (hepatolienalen) Candidiasis."
            },
            {
                "modality": "Fundoskopische Untersuchung",
                "finding": "Chorioretinale weiße Herde, Glaskörpertrübungen.",
                "significance": "Bestätigung einer Candida-Endophthalmitis (innerhalb von 72 Stunden nach Diagnose empfohlen)."
            }
        ],
        "laboratory": [
            {
                "test": "Blutkultur",
                "finding": "Positiv (Sensitivität nur 50-60 %)",
                "interpretation": "Goldstandard, jedoch schließt ein negatives Ergebnis eine invasive Candidiasis nicht aus."
            },
            {
                "test": "1,3-Beta-D-Glucan (BDG)",
                "finding": "Positiv (>80 pg/mL)",
                "interpretation": "Ein Zellwandbestandteil von Pilzen. Hoher negativer Vorhersagewert bei Verdacht auf systemische Infektion."
            }
        ],
        "microbiology": [
            {
                "test": "Kultur und MALDI-TOF",
                "finding": "Genaue Bestimmung der Candida-Spezies",
                "significance": "Identifiziert die Spezies, was für die Anpassung der empirischen Therapie und die gezielte Behandlung entscheidend ist."
            },
            {
                "test": "Antimykotische Empfindlichkeitstestung (MIC)",
                "finding": "Bestimmung des Empfindlichkeitsprofils (Azole, Echinocandine, Amphotericin B)",
                "significance": "Leitet die orale Deeskalation und die Behandlung resistenter Stämme (z. B. C. auris)."
            },
            {
                "test": "T2Candida-Panel",
                "finding": "Direkter DNA-Nachweis aus Vollblut mittels Magnetresonanz",
                "significance": "Eine schnelle (3-5 Stunden), hochsensitive Methode zum Nachweis der häufigsten Candida-Spezies, auch bei blutkulturnegativen Fällen."
            }
        ]
    },
    therapy: {
        "targeted": "Bei Echinocandin-empfindlichen Spezies sollte bei klinisch stabilem Patienten mit negativer Kontrollblutkultur und nachgewiesener Fluconazol-Empfindlichkeit von der Erstlinien-Echinocandin-Therapie auf orales Fluconazol deeskaliert werden. Bei C. auris ist eine hochdosierte Echinocandin-Therapie oder liposomales Amphotericin B erforderlich.",
        "supportive": [
            "Rasche Entfernung aller zentralvenösen Katheter (ZVK) wird dringend empfohlen",
            "Augenärztliches Konsil mit erweiterter Fundoskopie (innerhalb von 72 Stunden nach Diagnose bei nicht-neutropenischen Patienten)",
            "Wiederholte Blutkulturen alle 24-48 Stunden zur Bestätigung der Candidämie-Clearance"
        ],
        "prevention": [
            "Strikte Infektionskontrolle und Kontaktisolierung (besonders bei Candida auris)",
            "Prävention katheterassoziierter Infektionen (Anwendung von Katheterpflege-Bundles)",
            "Gezielte antimykotische Prophylaxe bei Hochrisikopatienten (z. B. Lebertransplantierte, rezidivierende Gastrointestinalperforation)"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Caspofungin",
                    "dose": "70 mg Ladedosis an Tag 1, danach täglich 50 mg i.v.",
                    "duration": "Mindestens 14 Tage nach Abklingen der Candidämie (erste negative Blutkultur) und Besserung der Symptome.",
                    "note": "Erstlinien-Empirietherapie. Als Alternative können Anidulafungin (200 mg Ladedosis, danach 100 mg/Tag i.v.) oder Micafungin (100 mg/Tag i.v.) gegeben werden."
                },
                {
                    "drug": "Fluconazol",
                    "dose": "800 mg (12 mg/kg) Ladedosis, danach 400 mg (6 mg/kg) i.v. oder oral täglich",
                    "duration": "Mindestens 14 Tage nach Abklingen der Candidämie.",
                    "note": "Sollte empirisch nur gewählt werden, wenn der Patient klinisch stabil ist, keine vorherige Azolexposition bestand und die Station eine geringe Prävalenz resistenter Stämme (C. glabrata, C. krusei) aufweist."
                }
            ],
            "outpatient": [
                {
                    "drug": "Fluconazol",
                    "dose": "400 mg oral täglich",
                    "duration": "Bis zum Abschluss des vollständigen 14-tägigen Zyklus (gerechnet ab der negativen Blutkultur).",
                    "note": "Nur als Step-down-/Deeskalationstherapie bei stabilen Patienten mit negativer Kontrollblutkultur und bestätigter Infektion mit einem Fluconazol-empfindlichen Stamm."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Etwa 30-40 % (kann bei septischem Schock 60 % überschreiten)",
        "factors": "Rechtzeitige Entfernung des ZVK (Fokussanierung), Geschwindigkeit der Einleitung einer adäquaten empirischen Therapie, Alter und Begleiterkrankungen des Patienten.",
        "prognostic_scores": [
            "Candida-Score (zur Steuerung der Entscheidung über den Beginn einer empirischen Behandlung)",
            "SOFA-/APACHE-II-Score (zur Beurteilung des Sepsisschweregrads)"
        ]
    },
    language: "de",
    group: "systemic_de"
  },
  {
    id: "invasive-aspergillosis",
    name: "Invasive Aspergillose",
    pathogen: {
        "type": "Pilz",
        "name": "Aspergillus fumigatus",
        "gram": "Schimmelpilz",
        "shape": "Hyphen (45°-Verzweigung, septiert)"
    },
    epidemiology: {
        "incidence": "Besonders ausgeprägt bei 5-10 % der neutropenischen Patienten sowie bei Patienten mit hämatologischen Malignomen, Transplantatempfängern und kritisch kranken Intensivpatienten",
        "risk_groups": [
            "Verlängerte Neutropenie (<500/µl für >10 Tage)",
            "Allogene Stammzelltransplantation (HSCT)",
            "Solide Organtransplantation (SOT, besonders Lunge)",
            "Langanhaltende, hochdosierte Kortikosteroidtherapie",
            "Schwere virale Pneumonie (influenzaassoziierte IAPA, COVID-19-assoziierte CAPA)"
        ],
        "seasonality": "Keine (Baustaub, Renovierungsarbeiten stellen ein erhöhtes Risiko dar)",
        "transmission": "Inhalation von Konidien aus der Umgebungsluft"
    },
    pathomechanism: {
        "steps": [
            "Inhalierte Aspergillus-Konidien erreichen die Lungenalveolen",
            "Reduzierte Immunantwort (bei neutropenischen oder steroidbehandelten Patienten können alveoläre Makrophagen die Konidien nicht eliminieren)",
            "Die Konidien keimen aus und wandeln sich in gewebeschädigende Hyphen um",
            "Angioinvasion: Die Hyphen durchbrechen die Wände der Lungengefäße",
            "Folge: Thrombose, Infarkt, lokale Gewebenekrose und hämatogene Streuung",
            "Metastatische Herde entstehen in anderen Organen (zentrales Nervensystem, Haut, Niere)"
        ],
        "virulence_factors": [
            "Fähigkeit zur Angioinvasion",
            "Gliotoxin und andere Mykotoxine (hemmen die Phagozytose)",
            "Konidienmelanin (Schutz vor oxidativem Stress)",
            "Elastasen, Proteasen und Metalloproteinasen (Gewebedestruktion)"
        ]
    },
    clinical: {
        "incubation": "Tage bis Wochen (stark abhängig vom Ausmaß der Immunsuppression)",
        "onset": "Akute oder subakute Progression",
        "symptoms": [
            {
                "name": "Fieber",
                "description": "Fieber bei einem neutropenischen Patienten, das nicht auf eine Breitspektrum-Antibiotikatherapie anspricht",
                "severity": "severe"
            },
            {
                "name": "Husten",
                "description": "Trockener oder gering produktiver Husten",
                "severity": "moderate"
            },
            {
                "name": "Pleuritischer Brustschmerz",
                "description": "Scharfer, atemabhängiger Schmerz, ein Zeichen für angioinvasives Wachstum und Infarkt",
                "severity": "moderate"
            },
            {
                "name": "Hämoptyse",
                "description": "Bluthusten infolge einer Gefäßarrosion (kann lebensbedrohlich sein)",
                "severity": "severe"
            },
            {
                "name": "Sinusitis-Symptome",
                "description": "Gesichtsschmerzen, verstopfte Nase, blutiger oder schwarzer Nasenausfluss bei Beteiligung der Nasennebenhöhlen",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Fieber, Tachypnoe, Hypoxie",
            "Abgeschwächtes Atemgeräusch oder Pleurareiben über der Lunge",
            "Schwarze, nekrotische Krusten bei der Nasenuntersuchung sichtbar (rhinozerebrale Form)",
            "Hautläsionen: schmerzlose Papeln oder Knoten mit nekrotischem Zentrum bei disseminierter Erkrankung",
            "Fokales neurologisches Defizit oder Bewusstseinsveränderung (bei zerebraler Streuung und Abszess)"
        ],
        "complications": [
            "Massive, tödliche Lungenblutung",
            "Hämatogene Streuung (Gehirn, Haut, Herzklappen)",
            "Hirnabszess und schlaganfallartige neurologische Symptome",
            "Multiorganversagen und Tod"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "HRCT des Thorax (hochauflösendes CT)",
                "finding": "Halo-Zeichen (Milchglastrübung um einen Knoten aufgrund von Ödem/Blutung), Air-Crescent-Zeichen (in der Heilungs-/Sequestrierungsphase), Kavitation, Konsolidierung.",
                "significance": "Die wichtigste frühe diagnostische Methode bei neutropenischen Patienten, Grundlage der EORTC/MSGERC-Kriterien."
            }
        ],
        "laboratory": [
            {
                "test": "Galactomannan (GM)-Antigentest",
                "finding": "Serumindex >0,5 oder bronchoalveolärer Lavage (BAL)-Flüssigkeitsindex >1,0",
                "interpretation": "Nachweis eines spezifischen Aspergillus-Zellwandantigens. Piperacillin/Tazobactam konnte früher falsch positive Ergebnisse verursachen, was bei modernen Präparaten mittlerweile selten ist."
            },
            {
                "test": "Beta-D-Glucan (BDG)-Test",
                "finding": "Positiv (>80 pg/mL)",
                "interpretation": "Ein pan-fungaler Marker, nicht spezifisch für Aspergillus, hilft aber, den Verdacht auf eine Pilzinfektion zu untermauern."
            }
        ],
        "microbiology": [
            {
                "test": "Aspergillus-PCR (Serum oder BAL)",
                "finding": "Nachweisbare Aspergillus-DNA",
                "significance": "Hohe Sensitivität und Spezifität; offiziell als diagnostisches Element gemäß den EORTC/MSGERC-Konsenskriterien anerkannt."
            },
            {
                "test": "Kultur aus BAL- oder Biopsieprobe",
                "finding": "Wachstum von Aspergillus-Spezies (z. B. A. fumigatus, A. flavus)",
                "significance": "Bestätigt die Diagnose und ermöglicht die Testung auf Azol-Resistenz (Empfindlichkeitstestung)."
            },
            {
                "test": "Direkte Mikroskopie (Calcofluor-Weiß-Färbung)",
                "finding": "Regelmäßig septierte Hyphen mit Verzweigung im 45-Grad-Winkel",
                "significance": "Bietet raschen, unmittelbaren diagnostischen Wert aus Gewebe- oder BAL-Proben."
            }
        ]
    },
    therapy: {
        "targeted": "Erstlinientherapie: Voriconazol oder Isavuconazol. Alternativ-/Salvage-Therapie: liposomales Amphotericin B (L-AmB). Eine Kombinationstherapie (z. B. Voriconazol + Anidulafungin) kann bei therapierefraktären Fällen erwogen werden.",
        "supportive": [
            "Reduktion oder vorübergehende Aussetzung der Immunsuppression (falls klinisch möglich)",
            "Gabe von G-CSF zur Verkürzung der Neutropeniedauer",
            "Dringliche chirurgische Resektion bei massiver Hämoptyse oder gefäßnahen Läsionen"
        ],
        "prevention": [
            "Posaconazol-Prophylaxe (bei Hochrisikopatienten mit akuter Leukämie oder GVHD)",
            "Verwendung von HEPA-gefilterten Räumen mit Überdruckisolierung in der Nähe von Baustellen",
            "Tragen von Masken (FFP2/FFP3) für Hochrisikopatienten in gefährdeten Umgebungen"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Voriconazol",
                    "dose": "Ladedosis: 6 mg/kg i.v. alle 12 Stunden (erste 2 Dosen), danach Erhaltungsdosis: 4 mg/kg i.v. alle 12 Stunden",
                    "duration": "6-12 Wochen (abhängig vom klinischen und radiologischen Ansprechen)",
                    "note": "Therapeutisches Drug-Monitoring (TDM) ist erforderlich (Ziel-Talspiegel: 1-5,5 µg/mL). Starker CYP3A4-Hemmer."
                },
                {
                    "drug": "Isavuconazol",
                    "dose": "Ladedosis: 200 mg i.v. alle 8 Stunden (in den ersten 48 Stunden, insgesamt 6 Dosen), danach Erhaltungsdosis: 200 mg i.v. einmal täglich",
                    "duration": "6-12 Wochen",
                    "note": "Ähnliche Wirksamkeit wie Voriconazol, jedoch mit günstigerem Nebenwirkungsprofil (weniger Hepatotoxizität und Sehstörungen)."
                }
            ],
            "outpatient": [
                {
                    "drug": "Voriconazol (oral)",
                    "dose": "2 x 200 mg täglich oral (mindestens 1 Stunde vor den Mahlzeiten)",
                    "duration": "Bis zum Abschluss der vollständigen 6-12-wöchigen Kur (ambulant fortgesetzt)",
                    "note": "Regelmäßige Überwachung der Leberfunktion und visueller/neurologischer Nebenwirkungen sowie ambulantes TDM erforderlich."
                },
                {
                    "drug": "Isavuconazol (oral)",
                    "dose": "1 x 200 mg täglich oral (nach der Ladephase)",
                    "duration": "Bis zum Abschluss der vollständigen 6-12-wöchigen Kur",
                    "note": "Ausgezeichnete Bioverfügbarkeit, unabhängig von Mahlzeiten einnehmbar, stabilere Pharmakokinetik, sodass routinemäßiges TDM nicht zwingend erforderlich ist."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "30-50 % bei früher adäquater Behandlung; unbehandelt oder bei verzögerter Diagnose >80 % (besonders bei zerebraler Streuung)",
        "factors": "Rückbildung/Dauer der Neutropenie, Zeit zwischen Diagnose und Beginn einer adäquaten antimykotischen Behandlung, Vorliegen einer Graft-versus-Host-Erkrankung (GVHD)",
        "prognostic_scores": []
    },
  },
        ]
      },
});