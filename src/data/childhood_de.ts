Object.assign(window.diseases, {
  "childhood": {
    "name": "Kinderkrankheiten",
    "icon": "🧸",
    "color": "#f472b6",
    "diseases": [
      {
        "id": "measles",
        "name": "Masern (Morbilli)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Masernvirus (Measles morbillivirus)</i>",
          "gram": "ssRNA, Paramyxoviridae",
          "shape": "pleomorph"
        },
        "epidemiology": {
          "incidence": "Epidemisch bei ungeimpften Populationen",
          "risk_groups": [
            "Ungeimpfte",
            "Immungeschwächte"
          ],
          "seasonality": "Winter-Frühling",
          "transmission": "Tröpfcheninfektion (hoch ansteckend! R0=12-18)"
        },
        "pathomechanism": {
          "steps": [
            "Eintritt und Replikation: Das Virus dringt über das respiratorische Epithel und Immunzellen (CD150-Rezeptor) ein und vermehrt sich in regionalen Lymphknoten.",
            "Virämie: Nach einer primären Virämie vermehrt sich das Virus im retikuloendothelialen System (Leber, Milz, Knochenmark), was zu einer massiven sekundären Virämie führt, die Haut, Bindehaut und Atemwege erreicht.",
            "Gewebeschaden: Die Fusion infizierter Zellen führt zur Bildung von Warthin-Finkeldey-Riesenzellen. Der Ausschlag ist das Ergebnis einer T-Zell-Immunantwort gegen virusinfizierte Endothelzellen.",
            "Immunsuppression: Das Virus verursacht eine vorübergehende, aber schwere Immunsuppression (Anergie), die Wochen bis Monate andauern kann und für sekundäre bakterielle Infektionen (z.B. Pneumonie, Otitis) prädisponiert."
          ],
          "virulence_factors": [
            "Hämagglutinin",
            "Fusionsprotein"
          ]
        },
        "clinical": {
          "incubation": "10-14 Tage",
          "onset": "Prodromalstadium (Fieber, Katarrh)",
          "symptoms": [
            {
              "name": "Prodrom (3K: Katarrh, Konjunktivitis, Husten)",
              "description": "Hohes Fieber (>40 °C), Husten, Schnupfen und Konjunktivitis sind bei fast 100 % der Fälle vor dem Ausschlag vorhanden.",
              "severity": "moderate"
            },
            {
              "name": "Koplik-Flecken",
              "description": "Pathognomonische, salzkornartige weiße Flecken an der Wangenschleimhaut (60-70%), die vor dem Ausschlag erscheinen und innerhalb von 1-2 Tagen verblassen.",
              "severity": "mild"
            },
            {
              "name": "Ausschlag (Exanthem)",
              "description": "Makulopapulöser Ausschlag, der hinter den Ohren beginnt und sich auf Gesicht, Rumpf und Gliedmaßen ausbreitet (kraniokaudal). Die Läsionen konfluieren oft und verblassen in der Reihenfolge ihres Auftretens, wobei sie eine bräunliche Pigmentierung und feine Schuppung hinterlassen.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Koplik-Flecken",
            "Exanthem",
            "Fieber",
            "Konjunktivitis"
          ],
          "complications": [
            "Otitis media",
            "Riesenzellpneumonie",
            "Enzephalitis",
            "SSPE (Jahre später)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Leukopenie",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "IgM-Serologie",
              "finding": "Positiv (nach Ausschlag)",
              "significance": "Diagnostisch"
            },
            {
              "test": "PCR",
              "finding": "RNA (Rachen, Urin)",
              "significance": "Frühphase"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Fiebersenkung, Flüssigkeit"
              }
            ]
          },
          "targeted": "Vitamin-A-Gabe senkt Morbidität/Mortalität (WHO-Empfehlung).",
          "prevention": [
            "MMR-Impfung (15 Monate, 11 Jahre)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinischer Verdacht: Fieber + Husten/Schnupfen/Konjunktivitis + Koplik-Flecken.",
            "Bestätigung: Anti-Masern-IgM-Serologie."
          ],
          "treatment_indications": [
            "In allen Fällen supportive Therapie. Vitamin-A-Gabe zur Reduktion von Komplikationen empfohlen."
          ]
        },
        "prognosis": {
          "mortality": "Niedrig in Industrieländern, hoch in Entwicklungsländern (Pneumonie)",
          "prognostic_scores": [],
          "factors": "Alter, Impfstatus"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EMasern%20(Morbilli)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Masern (Morbilli) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "mumps",
        "name": "Mumps (Parotitis epidemica)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Mumpsvirus (Mumps orthorubulavirus)</i>",
          "gram": "ssRNA, Paramyxoviridae",
          "shape": "pleomorph"
        },
        "epidemiology": {
          "incidence": "In Ungeimpften",
          "risk_groups": [
            "Ungeimpfte"
          ],
          "seasonality": "Winter-Frühling",
          "transmission": "Tröpfcheninfektion, Speichel"
        },
        "pathomechanism": {
          "steps": [
            "Das Virus gelangt per Tröpfcheninfektion in die oberen Atemwege und vermehrt sich in den Epithelzellen.",
            "Eine Virämie verbreitet das Virus zu den Zielorganen: Speicheldrüsen (hauptsächlich Parotis), ZNS, Hoden, Pankreas und Ovarien.",
            "Es verursacht Schwellungen, interstitielle Ödeme und lymphozytäre Infiltration in den betroffenen Drüsen."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "16-18 Tage",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Parotitis",
              "description": "Schmerzhafte Schwellung der Ohrspeicheldrüse (95% der symptomatischen Fälle), anfangs einseitig, oft beidseitig werdend. Das Ohrläppchen wird angehoben, Kauen ist schmerzhaft.",
              "severity": "moderate"
            },
            {
              "name": "Fieber",
              "description": "Mäßiges Fieber, Kopfschmerzen und Myalgie während der Prodromalphase.",
              "severity": "mild"
            },
            {
              "name": "Orchitis",
              "description": "Hodenentzündung (20-30% der postpubertären Männer), gekennzeichnet durch schmerzhafte Schwellung, führt selten zu Sterilität.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Parotisschwellung (Ohrläppchen steht ab)",
            "Hodenschwellung/-schmerz"
          ],
          "complications": [
            "Meningitis (aseptisch)",
            "Orchitis (Sterilität selten)",
            "Pankreatitis",
            "Taubheit"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Amylase",
              "finding": "Erhöht (Speichel/Pankreas-Ursprung)",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "IgM-Serologie",
              "finding": "Positiv",
              "significance": "Diagnostisch"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Schmerzlinderung, Umschläge"
              }
            ]
          },
          "targeted": "Keine.",
          "prevention": [
            "MMR-Impfung"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinischer Verdacht: Akute, schmerzhafte Ohrspeicheldrüsenschwellung.",
            "Bestätigung: Anti-Mumps-IgM-Serologie."
          ],
          "treatment_indications": [
            "Supportive Therapie. Bei Orchitis Bettruhe, Hodenkühlung, NSAID."
          ]
        },
        "prognosis": {
          "mortality": "Sehr niedrig",
          "prognostic_scores": [],
          "factors": "Alter, Impfung"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EMumps%20(Parotitis%20epidemica)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Mumps (Parotitis epidemica) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "rubella",
        "name": "Röteln (Rubella)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Rötelnvirus (Rubella virus)</i>",
          "gram": "ssRNA, Matonaviridae",
          "shape": "kugelförmig"
        },
        "epidemiology": {
          "incidence": "Selten (wegen Impfung)",
          "risk_groups": [
            "Ungeimpfte",
            "Schwangere (Fötus!)"
          ],
          "seasonality": "Frühling",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Eintritt: Das Virus dringt durch die Nasopharynxschleimhaut ein, wandert zu den regionalen Lymphknoten und vermehrt sich dort.",
            "Virämie: Das Virus gelangt über den Blutkreislauf zu Haut und Gelenken. Der Ausschlag und die Gelenksymptome sind Immunkomplex-vermittelt.",
            "Teratogenität: Während der Schwangerschaft durchdringt das Virus die Plazenta, hemmt die Mitose in fötalen Zellen und induziert Apoptose, was zu schweren angeborenen Defekten führt (Kongenitales Röteln-Syndrom)."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "14-21 Tage",
          "onset": "Mild",
          "symptoms": [
            {
              "name": "Ausschlag (Exanthem)",
              "description": "Feinfleckiger, hellrosa makulopapulöser Ausschlag, der im Gesicht beginnt, sich schnell nach unten ausbreitet und innerhalb von 3 Tagen spurlos verschwindet.",
              "severity": "mild"
            },
            {
              "name": "Lymphadenopathie",
              "description": "Charakteristisch ist eine schmerzhafte Schwellung der okzipitalen und retroaurikulären Lymphknoten.",
              "severity": "moderate"
            },
            {
              "name": "Arthralgie/Arthritis",
              "description": "Gelenkschmerzen oder -entzündung, häufig bei erwachsenen Frauen (bis zu 70%).",
              "severity": "mild"
            },
            {
              "name": "Forchheimer-Flecken",
              "description": "Petechien am weichen Gaumen (unspezifisch, können aber vorkommen).",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Lymphknotenschwellung (Nacken)",
            "Ausschlag"
          ],
          "complications": [
            "Kongenitales Röteln-Syndrom (CRS): Herzfehler, Katarakt, Taubheit",
            "Arthritis",
            "Enzephalitis (selten)"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "IgM-Serologie",
              "finding": "Positiv",
              "significance": "Diagnostisch"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "-"
              }
            ]
          },
          "targeted": "Keine.",
          "prevention": [
            "MMR-Impfung",
            "Screening von Schwangeren"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinischer Verdacht: Leichter Ausschlag + charakteristische retroaurikuläre/okzipitale Lymphknotenschwellung.",
            "Bestätigung: Anti-Röteln-IgM-Serologie. In der Schwangerschaft ist die Diagnose kritisch!"
          ],
          "treatment_indications": [
            "Supportive Therapie. Hauptziel ist die Prävention des Kongenitalen Röteln-Syndroms."
          ]
        },
        "prognosis": {
          "mortality": "Gut, außer CRS"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3ER%C3%B6teln%20(Rubella)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Röteln (Rubella) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "scarlatina",
        "name": "Scharlach",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Streptococcus pyogenes</i> (GAS)",
          "gram": "Gram-positiv",
          "shape": "Ketten"
        },
        "epidemiology": {
          "incidence": "Häufig im Kindesalter",
          "risk_groups": [
            "5-15 Jährige"
          ],
          "seasonality": "Winter-Frühling",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Kolonisation: Streptococcus pyogenes (GAS) besiedelt den Rachen durch Tröpfcheninfektion und verursacht eine Pharyngitis.",
            "Toxinproduktion: Das Bakterium produziert erythrogenes Toxin (Superantigen), wenn es von einem Bakteriophagen infiziert ist.",
            "Systemische Wirkung: Das Toxin gelangt in den Blutkreislauf und verursacht eine generalisierte Kapillarerweiterung und eine entzündliche Hautreaktion bei Personen ohne Antitoxin-Immunität."
          ],
          "virulence_factors": [
            "Erythrogene Toxine (SpeA, B, C)"
          ]
        },
        "clinical": {
          "incubation": "2-5 Tage",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Halsschmerzen",
              "description": "Plötzlich einsetzende starke Halsschmerzen, Schluckbeschwerden, oft begleitet von Erbrechen.",
              "severity": "moderate"
            },
            {
              "name": "Fieber",
              "description": "Hohes Fieber und Schüttelfrost.",
              "severity": "moderate"
            },
            {
              "name": "Ausschlag (Exanthem)",
              "description": "Diffuser roter Ausschlag mit \"Sandpapier\"-Textur, der auf Druck verblasst. In den Hautfalten erscheinen dunklere Linien (Pastia-Linien). Charakteristisch ist eine Abschuppung (Desquamation) an Handflächen und Fußsohlen während der Genesung.",
              "severity": "moderate"
            },
            {
              "name": "Zunge",
              "description": "Anfangs weiß belegt (\"weiße Erdbeerzunge\"), nach Ablösen des Belags rot und papilliert (\"Himbeerzunge\").",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Pharynxhyperämie",
            "Himbeerzunge",
            "Periorale Blässe (Filatow-Dreieck)",
            "Pastia-Linien (in den Beugen)",
            "Schuppung (später)"
          ],
          "complications": [
            "Rheumatisches Fieber",
            "Glomerulonephritis",
            "Peritonsillarabszess"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Rachenabstrich-Kultur",
              "finding": "Strep. pyogenes",
              "significance": "Goldstandard"
            },
            {
              "test": "Schnelltest (Strep A)",
              "finding": "Positiv",
              "significance": "Schnell"
            }
          ]
        },
        "calculators": [
          {
            "name": "Centor-Score (McIsaac) - Strep A Wahrscheinlichkeit",
            "items": [
              {
                "label": "Fieber > 38°C",
                "points": 1
              },
              {
                "label": "Kein Husten",
                "points": 1
              },
              {
                "label": "Druckschmerzhafte vordere Halslymphknoten",
                "points": 1
              },
              {
                "label": "Tonsillenschwellung oder Exsudat",
                "points": 1
              },
              {
                "label": "Alter 3-14 Jahre",
                "points": 1
              },
              {
                "label": "Alter ≥ 45 Jahre",
                "points": -1
              }
            ],
            "interpretation": [
              {
                "min": -1,
                "max": 1,
                "text": "Niedriges Risiko (<10%). Kein Antibiotikum erforderlich."
              },
              {
                "min": 2,
                "max": 3,
                "text": "Mittleres Risiko (15-30%). Kultur oder Schnelltest empfohlen."
              },
              {
                "min": 4,
                "max": 5,
                "text": "Hohes Risiko (>50%). Empirische Antibiotika oder Testung."
              }
            ]
          }
        ],
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EScharlach%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Scharlach - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "mononucleosis",
        "name": "Infektiöse Mononukleose (Pfeiffer-Drüsenfieber)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Epstein-Barr-Virus</i> (EBV)",
          "gram": "dsDNA, Herpesviridae (HHV-4)",
          "shape": "kugelförmig"
        },
        "epidemiology": {
          "incidence": "Jugendliche/junge Erwachsene (90% bis zum Erwachsenenalter durchgemacht)",
          "risk_groups": [
            "Junge Leute"
          ],
          "seasonality": "Keine",
          "transmission": "Speichel (Kuss), Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Das EBV verbreitet sich über den Speichel und infiziert die Epithelzellen des Oropharynx.",
            "Anschließend infiziert es B-Lymphozyten, etabliert eine latente Infektion und immortalisiert sie.",
            "Der Körper entwickelt eine starke zelluläre Immunantwort (CD8+ T-Zellen), was zu atypischen Lymphozyten (\"Virozyten\") im Blut und einer Vergrößerung der lymphatischen Organe führt."
          ],
          "virulence_factors": [
            "LMP, EBNA Proteine"
          ]
        },
        "clinical": {
          "incubation": "4-6 Wochen",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "Halsschmerzen",
              "description": "Schwere Pharyngitis, oft mit pseudomembranösen Belägen auf den Mandeln.",
              "severity": "severe"
            },
            {
              "name": "Fieber",
              "description": "Anhaltendes Fieber, das bis zu 10-14 Tage dauern kann.",
              "severity": "moderate"
            },
            {
              "name": "Lymphadenopathie",
              "description": "Generalisierte, symmetrische Lymphknotenschwellung, die besonders die hintere zervikale Kette betrifft.",
              "severity": "moderate"
            },
            {
              "name": "Müdigkeit (Fatigue)",
              "description": "Ausgeprägte Schwäche und Müdigkeit, die Wochen bis Monate anhalten kann.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Generalisierte Lymphadenopathie (zervikale Dominanz)",
            "Hepatosplenomegalie",
            "Tonsillenbeläge",
            "Ampicillin-Exanthem (wenn AB gegeben wurde)"
          ],
          "complications": [
            "Milzruptur (selten, aber gefährlich)",
            "Atemwegsobstruktion (Tonsillen)",
            "Hepatitis",
            "Burkitt-Lymphom (spät, endemisch)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Lymphozytose, atypische mononukleäre Zellen (>10%)",
              "interpretation": "Charakteristisch"
            },
            {
              "test": "Leberenzyme",
              "finding": "Leichte Erhöhung",
              "interpretation": "Häufig"
            }
          ],
          "microbiology": [
            {
              "test": "Monospot-Test",
              "finding": "Heterophile Antikörper positiv",
              "significance": "Schnell (bei Kindern oft negativ!)"
            },
            {
              "test": "EBV-Serologie",
              "finding": "VCA IgM+, EBNA- (akut)",
              "significance": "Bestätigung"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Ruhe, Flüssigkeit"
              }
            ]
          },
          "targeted": "Keine. Steroide nur bei Atemwegsobstruktion.",
          "supportive": [
            "Körperliche Schonung (Sportverbot für 3-4 Wochen wegen Milzrupturgefahr!)"
          ],
          "prevention": [
            "Hygiene"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinische Trias (Fieber, Halsschmerzen, LK-Schwellung) + Blutbild (atypische Lymphozyten) + Serologie (Monospot oder EBV-spezifisches IgM/IgG)."
          ],
          "treatment_indications": [
            "Supportiv. Amoxicillin/Ampicillin vermeiden (Ausschlag).",
            "Körperliche Schonung zur Vermeidung einer Milzruptur."
          ]
        },
        "prognosis": {
          "mortality": "Sehr niedrig"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EInfekti%C3%B6se%20Mononukleose%20(Pfeiffer-Dr%C3%BCsenfieber)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Infektiöse Mononukleose (Pfeiffer-Drüsenfieber) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "mononucleosis_syndrome",
        "name": "Mononukleose-Syndrom (CMV, Toxoplasma, HIV)",
        "pathogen": {
          "type": "Gemischt",
          "name": "<i>Zytomegalievirus (CMV), Toxoplasma gondii, HIV</i>",
          "gram": "-",
          "shape": "-"
        },
        "epidemiology": {
          "incidence": "Häufig, heterophil-negative Mononukleose-Fälle",
          "risk_groups": [
            "Sexuell aktive junge Erwachsene (CMV, HIV)",
            "Katzenhalter/Rohfleischkonsumenten (Toxo)"
          ],
          "seasonality": "Keine",
          "transmission": "Körperflüssigkeiten (CMV, HIV), fäkal-oral/Fleisch (Toxo)"
        },
        "pathomechanism": {
          "steps": [
            "Die Erreger (CMV, Toxoplasma, HIV) verursachen eine systemische Infektion, die eine Immunantwort auslöst.",
            "Ähnlich wie EBV aktivieren sie T-Lymphozyten (atypische Lymphozyten), immortalisieren aber keine B-Zellen (im Gegensatz zu EBV).",
            "Die Symptome resultieren aus der Immunantwort des Wirts."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "Variabel (CMV 20-60 Tage, HIV 2-4 Wochen, Toxo 5-23 Tage)",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "Fieber",
              "description": "Anhaltendes Fieber (kann Wochen dauern), oft das Leitsymptom.",
              "severity": "moderate"
            },
            {
              "name": "Lymphadenopathie",
              "description": "Generalisierte Lymphknotenschwellung, aber weniger ausgeprägt als bei EBV.",
              "severity": "mild"
            },
            {
              "name": "Fehlende/Milde Pharyngitis",
              "description": "Im Gegensatz zu EBV fehlen Halsschmerzen und Tonsillitis oft oder sind sehr mild (außer bei akutem HIV, wo Ulzera auftreten können).",
              "severity": "moderate"
            },
            {
              "name": "Hepatomegalie/Splenomegalie",
              "description": "Kann vorkommen, aber seltener und milder als bei EBV.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Fieber",
            "Milde Lymphadenopathie",
            "Exanthem (häufig bei HIV)",
            "Fehlende Pharyngitis (CMV/Toxo)"
          ],
          "complications": [
            "Hepatitis",
            "Pneumonie",
            "Guillain-Barré-Syndrom",
            "Kongenitale Infektion (in der Schwangerschaft!)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Lymphozytose, atypische mononukleäre Zellen",
              "interpretation": "Ähnlich wie EBV"
            },
            {
              "test": "Leberenzyme",
              "finding": "Leichte Erhöhung",
              "interpretation": "Häufig"
            }
          ],
          "microbiology": [
            {
              "test": "Monospot-Test",
              "finding": "NEGATIV",
              "significance": "Hauptunterschied zu EBV!"
            },
            {
              "test": "CMV-Serologie",
              "finding": "IgM positiv",
              "significance": "CMV-Bestätigung"
            },
            {
              "test": "Toxoplasma-Serologie",
              "finding": "IgM positiv",
              "significance": "Toxoplasma-Bestätigung"
            },
            {
              "test": "HIV-Test",
              "finding": "Ag/Ak positiv / PCR",
              "significance": "Ausschluss einer akuten HIV-Infektion obligatorisch!"
            }
          ]
        },
        "differential": [
          {
            "disease": "EBV-Mononukleose",
            "distinguishing": "Schwere Pharyngitis, Monospot positiv"
          },
          {
            "disease": "Streptokokken-Pharyngitis",
            "distinguishing": "Eitrige Mandeln, Leukozytose (keine Lymphozytose)"
          },
          {
            "disease": "Lymphom",
            "distinguishing": "Fieber, Gewichtsverlust, Nachtschweiß, fixierte Lymphknoten"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Symptomatische Behandlung"
              }
            ]
          },
          "targeted": "CMV/Toxo: bei Immunkompetenten meist keine Behandlung. HIV: ART-Beginn. Spezielle Behandlung in der Schwangerschaft!",
          "prevention": [
            "Hygiene",
            "Safer Sex",
            "Fleisch durchbraten"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Mononukleose-Syndrom (Fieber, Lymphozytose) mit negativem Monospot-Test (\"Heterophil-negative Mononukleose\").",
            "Differenzierung: CMV (älter, Fieber dominiert), Toxoplasma (zervikale LK), Akutes HIV (Ausschlag, Risikoverhalten)."
          ],
          "treatment_indications": [
            "Supportiv. Spezifische Therapie (Ganciclovir, Pyrimethamin/Sulfadiazin) bei Immunsupprimierten oder schwerer Organbeteiligung."
          ]
        },
        "prognosis": {
          "mortality": "Ausgezeichnet bei Immunkompetenten"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EMononukleose-Syndrom%20(CMV%2C%20Toxoplasma%2C%20HIV)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Mononukleose-Syndrom (CMV, Toxoplasma, HIV) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "exanthema_subitum",
        "name": "Exanthema subitum (Drei-Tage-Fieber; Roseola infantum)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Humanes Herpesvirus 6</i> (HHV-6)",
          "gram": "dsDNA, Herpesviridae",
          "shape": "kugelförmig"
        },
        "epidemiology": {
          "incidence": "Säuglinge und Kleinkinder (6 Monate bis 2 Jahre); fast alle machen es durch",
          "risk_groups": [
            "Säuglinge"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Speichel (von asymptomatischen erwachsenen Trägern)"
        },
        "pathomechanism": {
          "steps": [
            "Das HHV-6-Virus verbreitet sich durch Tröpfchen und etabliert eine lebenslange latente Infektion.",
            "Während der Primärinfektion vermehrt sich das Virus in den Speicheldrüsen und Lymphozyten.",
            "Eine Virämie verursacht hohes Fieber, und der Ausschlag erscheint durch einen immunvermittelten Mechanismus, wenn das Fieber abrupt abklingt."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "5-15 Tage",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Hohes Fieber",
              "description": "Plötzlich einsetzendes, 3-5 Tage andauerndes hohes Fieber (39-40°C), während der Allgemeinzustand des Kindes überraschend gut ist.",
              "severity": "moderate"
            },
            {
              "name": "Ausschlag (Exanthem)",
              "description": "Gleichzeitig mit oder unmittelbar nach dem kritischen Fieberabfall erscheinen rosafarbene, makulopapulöse Ausschläge am Rumpf und dann am Hals.",
              "severity": "mild"
            },
            {
              "name": "Nagayama-Flecken",
              "description": "Ulzerationen oder Papeln am weichen Gaumen und am Zäpfchenansatz.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Fieber",
            "Nagayama-Flecken (am Zäpfchenansatz)",
            "Zervikale/okzipitale Lymphadenopathie",
            "Ausschlag (später)"
          ],
          "complications": [
            "Fieberkrampf (häufige Ursache!)",
            "Enzephalitis (selten)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Leukopenie",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "Klinisches Bild",
              "finding": "Ausschlag nach Fieber",
              "significance": "Diagnostisch"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Fiebersenkung"
              }
            ]
          },
          "targeted": "Keine.",
          "prevention": [
            "-"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Charakteristisches klinisches Bild: 3-5 Tage hohes Fieber, dann Ausschlag nach Entfieberung."
          ],
          "treatment_indications": [
            "Supportiv. Vorbereitung/Behandlung von Fieberkrämpfen wichtig."
          ]
        },
        "prognosis": {
          "mortality": "Ausgezeichnet"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EExanthema%20subitum%20(Drei-Tage-Fieber%3B%20Roseola%20infantum)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Exanthema subitum (Drei-Tage-Fieber; Roseola infantum) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "varicella",
        "name": "Windpocken (Varizellen)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Varizella-Zoster-Virus</i> (VZV)",
          "gram": "dsDNA, Herpesviridae (HHV-3)",
          "shape": "kugelförmig"
        },
        "epidemiology": {
          "incidence": "Sehr häufig im Kindesalter (Ungeimpfte)",
          "risk_groups": [
            "Ungeimpfte Kinder",
            "Immungeschwächte",
            "Schwangere",
            "Erwachsene (schwerer)"
          ],
          "seasonality": "Winter-Frühling",
          "transmission": "Tröpfcheninfektion, Bläscheninhalt (aerogen!)"
        },
        "pathomechanism": {
          "steps": [
            "Eintritt: Das VZV dringt über die Atemwege ein und vermehrt sich in den regionalen Lymphknoten.",
            "Virämie: Nach einer primären Virämie vermehrt sich das Virus in Leber und Milz, dann verbreitet eine sekundäre T-Zell-assoziierte Virämie es auf Haut und Schleimhäute.",
            "Hautläsionen: Das Virus infiziert Epithelzellen in der Haut und verursacht intraepidermale Bläschen und Nekrosen.",
            "Latenz: Nach der Infektion zieht sich das Virus entlang der sensorischen Nerven in die Spinalganglien zurück, wo es latent verbleibt."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "10-21 Tage",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Ausschlag (Exanthem)",
              "description": "Juckender, polymorpher Ausschlag (Makeln, Papeln, Vesikel, Krusten), der in Wellen auftritt, sodass alle Stadien gleichzeitig sichtbar sind („Sternenhimmel“). Frische Bläschen ähneln einem „Tautropfen auf einem Rosenblatt“.",
              "severity": "moderate"
            },
            {
              "name": "Fieber",
              "description": "Mäßiges Fieber, das mit dem Auftreten des Ausschlags einhergeht.",
              "severity": "mild"
            },
            {
              "name": "Enanthem",
              "description": "Schmerzhafte Bläschen auf der Mundschleimhaut.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Polymorphe Exantheme (auch auf der Kopfhaut!)",
            "Fieber",
            "Lymphadenopathie"
          ],
          "complications": [
            "Bakterielle Superinfektion (Impetiginisierung)",
            "Zerebellitis (Ataxie)",
            "Pneumonie (Erwachsene)",
            "Enzephalitis",
            "Reye-Syndrom (Aspirin!)"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Klinisches Bild",
              "finding": "Charakteristisch",
              "significance": "Diagnostisch"
            },
            {
              "test": "PCR",
              "finding": "VZV-DNA",
              "significance": "In unsicheren Fällen"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Kühlende Lotionen sind nicht empfohlen, da sie die Superinfektion begünstigen können; eher Puder oder keine zusätzliche Lokaltherapie. Juckreizstillung."
              }
            ]
          },
          "targeted": "Acyclovir (für Risikogruppen, Erwachsene, Immunsupprimierte).",
          "prevention": [
            "Varizellen-Impfung (empfohlen/Pflicht)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinisches Bild: Polymorphe, juckende Ausschläge, die gleichzeitig in mehreren Stadien vorhanden sind."
          ],
          "treatment_indications": [
            "Bei gesunden Kindern supportiv. Acyclovir empfohlen: >12 Jahre, chronische Haut-/Lungenkrankheit, Steroideinnahme, Erwachsene, Schwangere."
          ],
          "prevention": [
            "Impfung. Postexpositionsprophylaxe (Impfung oder VZIG)."
          ]
        },
        "prognosis": {
          "mortality": "Niedrig, aber Komplikationen kommen vor"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EWindpocken%20(Varizellen)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Windpocken (Varizellen) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "herpes_zoster",
        "name": "Gürtelrose (Herpes Zoster)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Varizella-Zoster-Virus</i> (VZV) Reaktivierung",
          "gram": "dsDNA",
          "shape": "-"
        },
        "epidemiology": {
          "incidence": "Hauptsächlich Ältere, aber auch immunsupprimierte Kinder",
          "risk_groups": [
            "Immungeschwächte",
            "Frühere Varizellen"
          ],
          "seasonality": "Keine",
          "transmission": "Bläscheninhalt infektiös (kann Varizellen bei Seronegativen verursachen)"
        },
        "pathomechanism": {
          "steps": [
            "Latentes VZV reaktiviert sich in den sensorischen Ganglien (z.B. aufgrund von Immunsuppression oder Alterung).",
            "Das Virus wandert entlang der Axone der sensorischen Nerven zur Haut.",
            "Es verursacht Entzündungen, Schmerzen und einen vesikulären Ausschlag im entsprechenden Dermatom."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "-",
          "onset": "Beginnt mit Schmerzen",
          "symptoms": [
            {
              "name": "Schmerz",
              "description": "Prodromaler brennender, stechender Schmerz im betroffenen Dermatom, der dem Ausschlag um Tage vorausgehen kann.",
              "severity": "severe"
            },
            {
              "name": "Ausschlag (Exanthem)",
              "description": "Gruppierte, schmerzhafte Bläschen auf erythematösem Grund, streng einseitig und die Mittellinie nicht überschreitend.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Dermatomale Verteilung der Bläschen (überschreitet nicht die Mittellinie)"
          ],
          "complications": [
            "Postherpetische Neuralgie (PHN)",
            "Zoster ophthalmicus (Auge)",
            "Ramsay-Hunt-Syndrom (Ohr/Gesichtsnerv)"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Klinisches Bild",
              "finding": "Charakteristisch",
              "significance": "Diagnostisch"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Acyclovir",
                "dose": "5x800mg p.o.",
                "duration": "7 Tage",
                "note": "Innerhalb von 72 Stunden beginnend"
              },
              {
                "drug": "Valacyclovir",
                "dose": "3x1000mg p.o.",
                "duration": "7 Tage",
                "note": "Bessere Bioverfügbarkeit"
              }
            ]
          },
          "targeted": "Virostatikum + Schmerztherapie.",
          "prevention": [
            "Zoster-Impfstoff (für Ältere)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinisches Bild: Einseitiger, dem Dermatom entsprechender vesikulärer Ausschlag, oft mit prodromalen Schmerzen."
          ],
          "treatment_indications": [
            "Antivirale Behandlung (Acyclovir, Valacyclovir) innerhalb von 72 Stunden reduziert die Schwere der Symptome und das Risiko einer postherpetischen Neuralgie (PHN).",
            "Bei Zoster ophthalmicus ist ein dringendes augenärztliches Konsil erforderlich."
          ]
        },
        "prognosis": {
          "mortality": "Niedrig, PHN beeinträchtigt Lebensqualität"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EG%C3%BCrtelrose%20(Herpes%20Zoster)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Gürtelrose (Herpes Zoster) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "hsv_infection",
        "name": "Herpes-Simplex-Infektionen (Gingivostomatitis)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Herpes-Simplex-Virus 1</i> (HSV-1)",
          "gram": "dsDNA, Herpesviridae",
          "shape": "kugelförmig"
        },
        "epidemiology": {
          "incidence": "Häufig im Kleinkindalter (1-3 Jahre)",
          "risk_groups": [
            "Kleinkinder"
          ],
          "seasonality": "Keine",
          "transmission": "Speichel, direkter Kontakt"
        },
        "pathomechanism": {
          "steps": [
            "HSV-1 infiziert Schleimhäute oder verletzte Haut durch direkten Kontakt.",
            "Die Replikation in Epithelzellen verursacht Zelltod, Bläschenbildung und Ulzera.",
            "Das Virus dringt in die Endigungen sensorischer Nerven ein und wandert retrograd zu den Ganglien, wo es latent wird."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "2-12 Tage",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Gingivostomatitis herpetica",
              "description": "Primärinfektion bei Kleinkindern. Hohes Fieber, schmerzhaftes, geschwollenes, blutendes Zahnfleisch und zahlreiche Ulzera in der Mundschleimhaut. Essen/Trinken ist schmerzhaft.",
              "severity": "severe"
            },
            {
              "name": "Herpes labialis",
              "description": "Rezidivierende Infektion (Lippenherpes), der ein prodromales Kribbeln vorausgeht.",
              "severity": "mild"
            },
            {
              "name": "Eczema herpeticum",
              "description": "Superinfektion einer atopischen Dermatitis, ein schwerwiegender Zustand mit ausgedehntem vesikulärem Ausschlag und Fieber.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Geschwollenes, blutendes Zahnfleisch",
            "Ulzera auf Zunge/Gaumen",
            "Zervikale Lymphadenopathie",
            "Fieber"
          ],
          "complications": [
            "Dehydratation (trinkt nicht wegen Schmerzen)",
            "Eczema herpeticum",
            "Herpes-Panaritium (Herpetic Whitlow)",
            "Enzephalitis"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Klinisches Bild",
              "finding": "Charakteristisch",
              "significance": "Diagnostisch"
            },
            {
              "test": "PCR",
              "finding": "HSV-DNA",
              "significance": "Bei schweren/atypischen Fällen"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Schmerzlinderung, Flüssigkeit, Lokaltherapie"
              },
              {
                "drug": "Acyclovir",
                "dose": "p.o./i.v.",
                "duration": "5-7 Tage",
                "note": "Bei schweren Fällen oder Immunsuppression"
              }
            ]
          },
          "targeted": "Acyclovir.",
          "prevention": [
            "Kontaktvermeidung mit aktiven Läsionen"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinisches Bild: Schmerzhaftes, geschwollenes, blutendes Zahnfleisch und Ulzera im Mund, begleitet von Fieber im Kleinkindalter."
          ],
          "treatment_indications": [
            "Primär supportiv (Schmerzlinderung, Flüssigkeitsersatz zur Vermeidung von Dehydratation).",
            "Acyclovir bei schweren Fällen, Immunkompromittierten oder Eczema herpeticum empfohlen."
          ]
        },
        "prognosis": {
          "mortality": "Niedrig, Gefahr der Dehydratation"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EHerpes-Simplex-Infektionen%20(Gingivostomatitis)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Herpes-Simplex-Infektionen (Gingivostomatitis) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "pertussis",
        "name": "Pertussis (Keuchhusten)",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Bordetella pertussis</i>",
          "gram": "Gram-negativ",
          "shape": "Stäbchen"
        },
        "epidemiology": {
          "incidence": "Epidemisch bei ungeimpften Kindern",
          "risk_groups": [
            "Säuglinge (<6 Monate)",
            "Ungeimpfte Kinder",
            "Erwachsene (milder)"
          ],
          "seasonality": "Winter-Frühling",
          "transmission": "Tröpfcheninfektion (sehr ansteckend! R0=12-17)"
        },
        "pathomechanism": {
          "steps": [
            "Adhäsion: Bordetella pertussis haftet an den zilientragenden Epithelzellen der Atemwege (filamentöses Hämagglutinin).",
            "Toxinwirkung: Es produziert Toxine (Pertussistoxin, Tracheal-Zytotoxin), die die Zilien lähmen, die mukoziliäre Clearance hemmen und lokale Entzündungen sowie Nekrosen verursachen.",
            "Systemische Wirkung: Pertussistoxin hemmt die Auswanderung von Lymphozyten in die Lymphknoten, was zu einer extremen Lymphozytose im Blut führt."
          ],
          "virulence_factors": [
            "Pertussistoxin (PT)",
            "Filamentöses Hämagglutinin (FHA)",
            "Adenylatzyklase-Toxin (ACT)"
          ]
        },
        "clinical": {
          "incubation": "7-10 Tage",
          "onset": "Katarrhalstadium (1–2 Wochen)",
          "symptoms": [
            {
              "name": "Stadium catarrhale",
              "description": "Leichtes Fieber, Schnupfen, Husten (1-2 Wochen). Dies ist die ansteckendste Phase, aber schwer von einer Erkältung zu unterscheiden.",
              "severity": "mild"
            },
            {
              "name": "Stadium convulsivum",
              "description": "Anfallsartige, krampfartige Hustenanfälle, gefolgt von einer tiefen, ziehenden Einatmung (\"Reprise\"). Erbrechen tritt oft nach dem Anfall auf. Bei Säuglingen kann Apnoe das Leitsymptom sein.",
              "severity": "severe"
            },
            {
              "name": "Abklingstadium",
              "description": "Der Husten klingt langsam ab, kann aber monatelang wiederkehren („100-Tage-Husten“).",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Hustenanfälle (Reprise typisch bei Kindern)",
            "Apnoe (Säuglinge)",
            "Lymphozytose (>20.000/µL)",
            "Petechien (durch Anstrengung)"
          ],
          "complications": [
            "Pneumonie (bakteriell/viral)",
            "Enzephalopathie",
            "Apnoe/Tod (Säuglinge)",
            "Atelektase",
            "Hernie (durch Husten)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Lymphozytose (>20.000/µL)",
              "interpretation": "Charakteristisch"
            },
            {
              "test": "CRP",
              "finding": "Normal oder leicht erhöht",
              "interpretation": "Nicht entzündlich"
            }
          ],
          "microbiology": [
            {
              "test": "Nasopharyngeal-Aspirat-Kultur",
              "finding": "Bordetella pertussis",
              "significance": "Goldstandard (in Frühphase)"
            },
            {
              "test": "PCR",
              "finding": "DNA-Nachweis",
              "significance": "Schnell, sensitiv"
            },
            {
              "test": "Serologie",
              "finding": "IgG/IgA-Anstieg",
              "significance": "Spätdiagnose"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Azithromycin",
                "dose": "10mg/kg/Tag p.o.",
                "duration": "5 Tage",
                "note": "Erste Wahl"
              },
              {
                "drug": "Clarithromycin",
                "dose": "15mg/kg/Tag p.o.",
                "duration": "7 Tage",
                "note": "Alternative"
              }
            ]
          },
          "targeted": "Makrolid-Antibiotikum (Erythromycin, Azithromycin).",
          "supportive": [
            "Supportiv (Sauerstoff, Rehydratation)",
            "Isolierung (5 Tage nach Antibiotikum)",
            "Hustenstiller NEIN (Schleimretention!)"
          ],
          "prevention": [
            "DTP-Impfung (Pflicht, 3+1 Dosen)",
            "Auffrischung im Erwachsenenalter",
            "Impfung von Schwangeren im 3. Trimester"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinischer Verdacht (langwieriger, anfallsartiger Husten) + Labor (ausgeprägte Lymphozytose).",
            "Bestätigung: Nasopharyngeale PCR (Goldstandard)."
          ],
          "treatment_indications": [
            "Jeder verdächtige/bestätigte Fall sollte behandelt werden, um die Ansteckungsfähigkeit zu verringern und Symptome zu lindern (wenn früh begonnen).",
            "Säuglinge benötigen Krankenhausbehandlung (Apnoegefahr).",
            "Prophylaxe für Kontaktpersonen erforderlich."
          ],
          "first_line": [
            "Makrolide (z.B. Azithromycin 5 Tage)."
          ]
        },
        "prognosis": {
          "mortality": "Niedrig in Industrieländern, aber bei Säuglingen hoch (1-2%)",
          "factors": "Frühe Behandlung, Impfung"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EPertussis%20(Keuchhusten)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Pertussis (Keuchhusten) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "hand_foot_mouth",
        "name": "Hand-Fuß-Mund-Krankheit (HFMK)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Coxsackie A16, Enterovirus 71</i>",
          "gram": "ssRNA, Picornaviridae",
          "shape": "ikosaedrisch"
        },
        "epidemiology": {
          "incidence": "Häufig im Kindesalter (<5–10 Jahre)",
          "risk_groups": [
            "Kleinkinder",
            "Gemeinschaftseinrichtungen"
          ],
          "seasonality": "Sommer-Herbst",
          "transmission": "Fäkal-oral, Tröpfcheninfektion, Bläscheninhalt"
        },
        "pathomechanism": {
          "steps": [
            "Das Virus gelangt in die Mundhöhle und vermehrt sich im lymphatischen Gewebe des Rachens und des Darms.",
            "Eine Virämie verbreitet das Virus auf Haut und Schleimhäute.",
            "Es verursacht Entzündungen und Bläschenbildung auf der Haut und der Mundschleimhaut."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "3-7 Tage",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Prodrom",
              "description": "Fieber, Halsschmerzen, Appetitlosigkeit, Unwohlsein.",
              "severity": "mild"
            },
            {
              "name": "Enanthem",
              "description": "Schmerzhafte Bläschen und Ulzera auf der Zunge, Wangenschleimhaut (Herpangina-ähnlich).",
              "severity": "moderate"
            },
            {
              "name": "Exanthem",
              "description": "Nicht juckende Bläschen oder Papeln mit rotem Hof an Handflächen, Fußsohlen und möglicherweise im Windelbereich.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Bläschen an Handflächen/Fußsohlen",
            "Ulzera im Mund",
            "Fieber"
          ],
          "complications": [
            "Dehydratation (schmerzhaftes Schlucken)",
            "Nagelablösung (Onychomadesis - Wochen später)",
            "Aseptische Meningitis (selten, EV71)",
            "Enzephalitis (EV71)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Normal",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "Klinisches Bild",
              "finding": "Charakteristisch",
              "significance": "Diagnostisch"
            },
            {
              "test": "PCR",
              "finding": "Enterovirus-RNA (Rachen, Stuhl)",
              "significance": "In schweren Fällen"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportiv",
                "dose": "-",
                "duration": "-",
                "note": "Schmerzlinderung, Flüssigkeit"
              }
            ]
          },
          "targeted": "Keine.",
          "prevention": [
            "Hygiene",
            "Händewaschen"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinisches Bild: Fieber, Mundulzera und Ausschlag an Handflächen/Fußsohlen."
          ],
          "treatment_indications": [
            "Supportiv. Prävention von Dehydratation."
          ]
        },
        "prognosis": {
          "mortality": "Ausgezeichnet, außer bei EV71-Enzephalitis",
          "prognostic_scores": [],
          "factors": "Erregertyp"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23dcfce7%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23bbf7d0%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%2322c55e%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%234ade80%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%2314532d%22%3EHand-Fu%C3%9F-Mund-Krankheit%20(HFMK)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23166534%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23052e16%22%3EKinderinfektion%20-%20didaktische%20Illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%2316a34a%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%2314532d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Hand-Fuß-Mund-Krankheit (HFMK) - didaktische Illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "erythema_infectiosum",
        "name": "Ringelröteln (Erythema infectiosum / Parvovirus B19)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Parvovirus B19</i>",
          "gram": "ssDNA, Parvoviridae",
          "shape": "ikosaedrisch, unbehüllt"
        },
        "epidemiology": {
          "incidence": "Häufig im Schulalter (5–15 Jahre), Frühjahrsausbrüche",
          "risk_groups": [
            "Kleinkinder und Schulkinder",
            "Schwangere (Risiko des Hydrops fetalis!)",
            "Patienten mit chronischer hämolytischer Anämie (z.B. Sichelzellkrankheit, Sphärozytose)",
            "Immungeschwächte Patienten"
          ],
          "seasonality": "Winter-Frühling",
          "transmission": "Respiratorische Tröpfcheninfektion, transplazentar, Blutprodukte"
        },
        "pathomechanism": {
          "steps": [
            "Invasion & Virämie: Bindung über das P-Antigen (Globosid) an erythroiden Vorläuferzellen im Knochenmark.",
            "Erythroide Apoptose: Infektion und Apoptose der Erythroblasten führt zum vorübergehenden Stillstand der Erythropoese und Retikulozytopenie.",
            "Immunkomplex-Exanthem: Ablagerung zirkulierender IgM/IgG-Immunkomplexe führt zum dreiphasigen Exanthem und Arthralgien.",
            "Transplazentare Ausbreitung: Befall fötaler erythroider Vorläuferzellen verursacht schwere fötale Anämie, Herzinsuffizienz und Hydrops fetalis."
          ],
          "virulence_factors": [
            "NS1 Nicht-Strukturprotein (Apoptose-Induktion)",
            "P-Antigen (Globosid) Rezeptorbindung"
          ]
        },
        "clinical": {
          "incubation": "4–14 Tage (bis zu 21 Tage)",
          "onset": "Milder Prodromalverlauf",
          "symptoms": [
            {
              "name": "Ohrfeigengesicht (\"Slapped cheek\")",
              "description": "Knallrote Wangenrötung mit perioraler Blässe.",
              "severity": "mild"
            },
            {
              "name": "Girlanden- / Netzartiges Exanthem",
              "description": "Retikuläres makulopapulöses Exanthem an Rumpf und Extremitäten. Rezidiviert bei Wärme, Sonnenlicht oder Stress.",
              "severity": "mild"
            },
            {
              "name": "Arthralgien / Arthritis",
              "description": "Symmetrische Gelenkschmerzen der kleinen Hand-/Fußgelenke, vor allem bei erwachsenen Frauen.",
              "severity": "moderate"
            },
            {
              "name": "Aplastische Krise",
              "description": "Schlagartiger Abfall des Hämoglobins mit Retikulozytopenie bei Patienten mit hämolytischen Anämien.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Knallrote Wangenrötung",
            "Netzförmiges (retikuläres) Exanthem an Arm- und Beinstreckseiten",
            "Symmetrische Gelenkschwellung (Hände/Handgelenke)"
          ],
          "complications": [
            "Aplastische Krise (bei hämolytischer Anämie)",
            "Hydrops fetalis / Fruchttod in der Schwangerschaft",
            "Glove-and-Socks-Syndrom (PPGSS)",
            "Chronische Pure Red Cell Aplasia (PRCA) bei Immungeschwächten"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Anti-Parvovirus B19 IgM Serologie",
              "finding": "Positiv bei Exanthemausbruch",
              "significance": "Bestätigung der akuten Infektion bei Immunkompetenten"
            },
            {
              "test": "Parvovirus B19 PCR (Blut / Fruchtwasser)",
              "finding": "Hohe Viruslast",
              "significance": "Indiziert bei Schwangeren, aplastischer Krise, Immungeschwächten"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Symptomatische Therapie",
                "dose": "-",
                "duration": "-",
                "note": "Analgetika / Antipyretika (Paracetamol / NSAID). Schonung."
              }
            ]
          },
          "targeted": "Erythrozytenkonzentrat-Transfusion bei aplastischer Krise. IVIG (Intravenöses Immunglobulin) bei PRCA / Immungeschwächten. Intrauterine Transfusion bei Hydrops fetalis.",
          "prevention": [
            "Händehygiene",
            "Schwangere vor bekannt infizierten Personen schützen",
            "Keine Impfung verfügbar"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinische Diagnose: Ohrfeigengesicht + netzartiges Exanthem.",
            "Umgehende IgM-Serologie und PCR bei Schwangeren und Patienten mit hämolytischen Anämien!"
          ],
          "treatment_indications": [
            "Symptomatische Therapie bei unkompliziertem Verlauf.",
            "Stationäre/Perinatologische Versorgung bei schwerer Anämie oder Hydrops fetalis."
          ]
        },
        "prognosis": {
          "mortality": "Bei Kindern ausgezeichnet. Fötales Verlustrisiko 2-10% bei Infektion vor der 20. SSW."
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3ERingelr%C3%B6teln%20(Parvovirus%20B19)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3EKategorie%3A%20Kinderkrankheiten%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EErythema%20infectiosum%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Ringelröteln (Erythema infectiosum) Illustration",
            "type": "Illustration"
          }
        ]
      }
    ],
    "tables": [
      {
        "title": "Vergleichstabelle exanthematöser Kinderkrankheiten",
        "headers": [
          "Krankheit (Erreger)",
          "Inkubation & Prodromi",
          "Exanthemcharakter & Ausbreitung",
          "Pathognomonisches Zeichen / Enanthem",
          "Ansteckungsfähigkeit & Übertragung",
          "Wichtige Komplikationen",
          "Therapie & Prävention (Impfung)"
        ],
        "rows": [
          [
            "<b>Masern</b> (Morbilli)<br/><small><i>Masernvirus</i> (ssRNA, Paramyxoviridae)</small>",
            "10–14 Tage.<br/><b>Schweres Prodromalstadium:</b> hohes Fieber, \"3 Ks\" (Husten/Katarrh, Konjunktivitis, Schnupfen/Coryza).",
            "Makulopapulöses, konfluierendes, dunkelrotes Exanthem. Ausbreitung von kranial nach kaudal (hinter den Ohren/Gesicht → Rumpf → Extremitäten). Abblassen mit bräunlicher Hyperpigmentierung und feiner Schuppung.",
            "<b>Koplik-Flecken</b> (kalkspritzerartige, weiße Stippchen auf geröteter Wangenschleimhaut gegenüber den Molaren).",
            "Extrem ansteckend (R0=12–18). Tröpfcheninfektion. Kontagiös 4 Tage vor bis 4 Tage nach Exanthemausbruch.",
            "Otitis media, bakterielle Superinfektion, Masernpneumonie, Postinfektiöse Enzephalitis, <b>SSPE</b> (Subakute sklerosierende Panenzephalitis - Jahre später, tödlich).",
            "Symptomatisch + Vitamin-A-Gabe.<br/><b>MMR-Impfung</b> (Lebendimpfstoff, obligatorisch)."
          ],
          [
            "<b>Scharlach</b> (Scarlatina)<br/><small><i>Streptococcus pyogenes</i> (GAS, pyrogene Exotoxine)</small>",
            "1–7 Tage.<br/>Plötzlicher Beginn: hohes Fieber, schwere Pharyngitis/Angina tonsillaris, Schüttelfrost, Erbrechen.",
            "Kleinfleckiges, punktförmiges, \"sandpapierartiges\" Erythem. Betonung in den Gelenkbeugen (<b>Pastia-Linien</b>). Gesicht gerötet mit perioraler Blässe (<b>Filatov-Dreieck</b>). Schuppung in Lamellen (Handflächen/Fußsohlen).",
            "<b>Himbeerzunge</b> (zunächst weiß belegt, nach Belagablösung leuchtend rot mit hyperplastischen Papillen), Pastia-Zeichen, periorale Blässe.",
            "Tröpfchen / Direktkontakt. Nach Beginn einer wirksamen Antibiotikatherapie nach 24 Stunden nicht mehr kontagiös.",
            "Peritonsillarabszess, Rheumatisches Fieber, Poststreptokokken-Glomerulonephritis (PSGN), PANDAS-Syndrom.",
            "<b>Penicillin V</b> (10 Tage) oder Amoxicillin (Bei Allergie: Makrolid / Cephalosporin). Keine Impfung."
          ],
          [
            "<b>Röteln</b> (Rubella)<br/><small><i>Rötelnvirus</i> (ssRNA, Matonaviridae)</small>",
            "14–21 Tage.<br/>Milder Prodromalverlauf: leichtes Fieber, milde Katarralien.",
            "Kleinfleckiges, hellrosa makulopapulöses Exanthem, <b>nicht konfluierend</b> (diskrete Flecken). Beginnt im Gesicht, breitet sich rasch nach unten aus, verschwindet nach 3 Tagen ohne Schuppung.",
            "<b>Schmerzhafte nuchale, okzipitale und retroaurikuläre Lymphknotenschwellung</b>. <b>Forchheimer-Flecken</b> (Petechien am weichen Gaumen).",
            "Tröpfcheninfektion. Kontagiös 7 Tage vor bis 7 Tage nach Exanthemausbruch.",
            "Arthralgien/Arthritis (besonders bei erwachsenen Frauen), Thrombozytopenie, Enzephalitis.<br/><b>Kongenitales Rötelnsyndrom (CRS)</b> in der Schwangerschaft (Katarakt, Innenohrschwerhörigkeit, Herzfehler).",
            "Symptomatisch.<br/><b>MMR-Impfung</b> (Lebendimpfstoff). Lebendimpfung in der Schwangerschaft kontraindiziert!"
          ],
          [
            "<b>Windpocken</b> (Varizellen)<br/><small><i>Varizella-Zoster-Virus</i> (VZV / HHV-3, dsDNA)</small>",
            "10–21 (Schnitt 14–16) Tage.<br/>Leichtes Fieber, Krankheitsgefühl, Appetitlosigkeit.",
            "Stark juckendes, polymorphes Exanthem in Schüben: Makula → Papula → Vesikula (\"Tautropfen auf einem Rosenblatt\") → Pustel → Kruste. <b>Alle Stadien gleichzeitig vorhanden</b> (\"Sternenhimmel\"-Bild). Ausbreitung vom Rumpf auf Kopfhaut und Schleimhäute.",
            "Polymorphes Exanthem + intensiver Juckreiz + Befall von Kopfhaut und Mundschleimhaut.",
            "Hochkontagiös (R0=10–12). Tröpfcheninfektion und Bläscheninhalt. Kontagiös 1–2 Tage vor Exanthem bis zur Verkrustung aller Bläschen (ca. 5–7 Tage).",
            "Bakterielle Superinfektion (S. aureus, GAS - Zellulitis, nekrotisierende Fasziitis), Zerebellitis (Ataxie), Varizellenpneumonie (schwer bei Erwachsenen), Reye-Syndrom (bei Aspirin-Gabe!).",
            "Symptomatisch, Juckreizstillung, Aciclovir bei Risikopatienten/Komplikationen.<br/><b>Varizellen-Impfung</b> (Lebendimpfstoff, empfohlen/obligatorisch)."
          ],
          [
            "<b>Drei-Tage-Fieber</b> (Exanthema subitum / Roseola infantum)<br/><small><i>Humanes Herpesvirus 6</i> (HHV-6B)</small>",
            "9–15 Tage.<br/><b>3–5 Tage anhaltendes hohes Fieber</b> (bis 40°C) bei meist gutem Allgemeinbefinden ohne fokal-lokale Befunde.",
            "Blassrosa makulopapulöses Exanthem erscheint <b>entfieberungskritisch (bei schlagartigem Entfiebern)</b>, vor allem an Rumpf und Nacken. Blasst innerhalb von 1–2 Tagen spurlos ab.",
            "Schlagartiges Entfiebern mit unmittelbarem Auftreten des Exanthems; <b>Nagayama-Flecken</b> (Erythematöse Papeln an weichem Gaumen/Uvula).",
            "Speichelsekret, enger Kontakt.",
            "<b>Fieberkrämpfe</b> (häufigste Ursache für Fieberkrämpfe im Säuglingsalter durch den steilen Temperaturanstieg!), Enzephalitis (selten).",
            "Symptomatisch, Fiebersenkung. Keine Impfung."
          ],
          [
            "<b>Hand-Fuß-Mund-Krankheit</b> (HFMK)<br/><small><i>Coxsackievirus A16</i>, <i>Enterovirus A71</i></small>",
            "3–6 Tage.<br/>Mäßiges Fieber, Appetitlosigkeit, Halsschmerzen, Krankheitsgefühl.",
            "Schmerzhafte Bläschen und aphthenartige Ulzera an der Mundschleimhaut (Zunge, Gaumen, Wangen), sowie ovale graue Vesikel mit rotem Hof an <b>Handflächen, Fußsohlen</b>, Gesäß und Genitalbereich.",
            "Schmerzhaftes orales Enanthem + ovale Vesikel an Handflächen und Fußsohlen.",
            "Fäkal-oral und respiratorische Sekrete. Stuhlphänomen über Wochen bis Monate.",
            "Dehydratation (durch schmerzhafte Odynophagie), Nagelverlust (Onychomadesis 1–2 Monate später), Aseptische Meningitis, Enzephalitis, Neurogenes Lungenödem (EV-A71).",
            "Symptomatisch, Analgesie, Rehydratation. Keine Impfung."
          ],
          [
            "<b>Ringelröteln</b> (Erythema infectiosum / 5. Krankheit)<br/><small><i>Parvovirus B19</i> (ssDNA)</small>",
            "4–14 Tage.<br/>Milder Prodromalverlauf: Subfebrile Temperaturen, Kopfschmerzen, Myalgien.",
            "Dreiphasiges Exanthem: 1. Knallrote Wangenrötung (\"Slapped cheek\" / Ohrfeigengesicht). 2. Netzartiges/girlandenförmiges makulopapulöses Exanthem an Rumpf und Extremitäten. 3. Rezidivierendes Exanthem durch Sonnenlicht, Wärme oder Stress.",
            "<b>\"Slapped cheek\"</b> (Ohrfeigengesicht) Erythem + girlandenartiges, netzförmiges Exanthem.",
            "Tröpfcheninfektion. Mit Auftreten des Exanthems ist der Patient <b>nicht mehr kontagiös</b>!",
            "Aplastische Krise (bei chronischer hämolytischer Anämie z.B. Sichelzellkrankheit), Polyarthralgien (Erwachsene), <b>Hydrops fetalis / Fruchttod</b> in der Schwangerschaft.",
            "Symptomatisch. IVIG / Bluttransfusion bei aplastischer Krise. Keine Impfung."
          ]
        ]
      }
    ]
  }
});
