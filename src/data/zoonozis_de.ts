Object.assign(window.diseases, {
  zoonotic: {
    name: 'Zoonosen',
    icon: '🐾',
    color: '#059669',
    diseases: [
      {
        id: 'leptospirosis',
        name: 'Leptospirose',
        pathogen: {
          type: 'Spirochäte',
          name: '<i>Leptospira interrogans</i> (>250 Serovare, z. B. icterohaemorrhagiae, canicola, pomona)',
          gram: 'Gram-negativ (zart, Dunkelfeld/Silberimprägnierung)',
          shape: 'dünn, spiralig, mit hakenförmigen Enden'
        },
        epidemiology: {
          incidence: 'Tropen/Subtropen: 10-100/100.000; Gemäßigte Zonen: 0,1-1/100.000 pro Jahr. Weltweit am weitesten verbreitete Zoonose!',
          risk_groups: [
            'Landarbeiter, Reisfarmer',
            'Tierärzte, Tierpfleger, Schlachthofpersonal',
            'Kanalisationsarbeiter, Personal der Wasserwirtschaft',
            'Wassersportler, Camper, Extremsportler (Rafting, Triathlon)',
            'Personen mit Nagetierexposition, Militärpersonal'
          ],
          seasonality: 'Spätsommer bis Herbst in gemäßigten Zonen; Regenzeit / Überschwemmungen in den Tropen',
          transmission: 'Kontaminiertes Süßwasser, feuchter Boden oder Schlamm durch Urin infizierter Tiere (Nager, Hunde, Schweine), der über Hautläsionen oder Schleimhäute (Konjunktiven, Mund, Nase) eindringt.'
        },
        pathomechanism: {
          steps: [
            'Invasion: Bakterien dringen bei Süßwasserexposition über kleine Hautabrasionen oder intakte Schleimhäute ein.',
            'Hämatogene Ausbreitung & Endothelschaden: Erreger gelangt rasch in die Blutbahn (leptospirämische Phase), disseminiert in Organe und verursacht systemische Vaskulitis durch Schädigung kleiner Gefäßendothelien.',
            'Kapillarpermeabilität & Blutung: Endothelschädigung führt zu erhöhter Kapillarpermeabilität, Organödemen, diffusen Petechien und systemischer Hämorrhagie.',
            'Morbus Weil: Schwere Verlaufsform (~5-10%) mit hepatorenalem Syndrom (cholestatischer Ikterus ohne ausgeprägte Transaminasenerhöhung, akute Tubulusnekrose) und pulmonalem Hämorrhagiesyndrom (LPHS).',
            'Immunphase: Ab Woche 2 eliminieren IgM-Antikörper Bakterien aus dem Blut; Erreger persistieren in Nierentubuli und Kammerwasser (aseptische Meningitis, Uveitis).'
          ],
          virulence_factors: ['LipL32-Äußeres-Membranprotein', 'Endotheliale Adhäsine', 'Cholestase-induzierende Faktoren', 'Hämolysine', 'Geißel-Motilität']
        },
        clinical: {
          incubation: '2-30 Tage (Durchschnitt 7-12 Tage)',
          onset: 'Klassisch biphasischer Verlauf (septisch/leptospirämisch -> Immunphase)',
          symptoms: [
            {
              name: 'Anikterische Form (90%) - Akute / Septische Phase',
              description: 'Plötzliches hohes Fieber, Schüttelfrost, schwere retrobulbäre Kopfschmerzen, ausgeprägte Waden- und Lendenmyalgien. Pathognomonisch: Konjunktivale Suffusion (Rötung der Konjunktiven ohne eitriges Sekret).',
              severity: 'moderate'
            },
            {
              name: 'Anikterische Form - Immunphase',
              description: 'Erneuter Fieberanstieg nach briefem afebrilem Intervall, aseptische Meningitis (Kopfschmerzen, Nackensteifigkeit, CSF-Pleozytose), Uveitis, makulopapulöses Exanthem.',
              severity: 'moderate'
            },
            {
              name: 'Morbus Weil (Ikterische Form, 5-10%)',
              description: 'Schwere, lebensbedrohliche Form! Trias: 1. Orangegelber Ikterus mit Cholestase; 2. Akutes Nierenversagen (Oligurie/Anurie, Kreatininanstieg); 3. Hämorrhagische Diathese (Petechien, Ekchymosen, Epistaxis, GI-Blutung).',
              severity: 'severe'
            },
            {
              name: 'Pulmonales Hämorrhagiesyndrom (LPHS)',
              description: 'Massive alveoläre Lungenblutung mit plötzlicher Hämoptoe, Erstickungsgefahr und fulminantem ARDS. Letalität >50%!',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Konjunktivale Suffusion (Augenrötung ohne Eiter - hochcharakteristisch!)',
            'Ausgeprägte Druckschmerzhaftigkeit der Wadenmuskulatur (Myositis)',
            'Orangegelber Ikterus',
            'Hepatomegalie und Klopfschmerz im Milzbereich',
            'Meningismus (Nackensteifigkeit)',
            'Petechien, Purpura, Blutung an Einstichstellen',
            'Rasselgeräusche über den Lungen (Lungenblutung)'
          ],
          complications: [
            'Weil-Syndrom (akutes Nierenversagen + Ikterus)',
            'Massive Lungenblutung (LPHS) und ARDS',
            'Aseptische Meningitis und Enzephalitis',
            'Myokarditis, Arrhythmien, septischer Schock',
            'Späte Uveitis (Monate nach Genesung)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Ausgeprägte Leukozytose mit Linksverschiebung, schwere Thrombozytopenie (<100 G/L)', interpretation: 'Zeigt schweren Verlauf und Verbrauchskoagulopathie' },
            { test: 'Niere & Elektrolyte', finding: 'Kreatinin & Harnstoff akut↑, Hypokalämie (Frühstadium durch Tubulusschaden!), Proteinurie, Hämaturie', interpretation: 'Akute Tubulusnekrose' },
            { test: 'Leberwerte', finding: 'Bilirubin↑↑ (direkt >200-300 µmol/L) bei nur MÄSSIGER Transaminasenerhöhung (GOT/GPT <200 U/L), AP/GGT erhöht', interpretation: 'Klassisches "cholestatisch-dissoziiertes" Lebermuster!' },
            { test: 'CK & CRP', finding: 'Kreatinkinase (CK) deutlich erhöht (>1000 U/L), CRP/BSG stark erhöht', interpretation: 'Wadenmuskel-Rhabdomyolyse / Myositis' }
          ],
          imaging: [
            { modality: 'Röntgen/CT-Thorax', finding: 'Schneeflockenartige oder fleckige bilaterale Infiltrate, alveoläre Verdichtungen', significance: 'Früherkennung der Lungenblutung' },
            { modality: 'Abdomen-Sonographie', finding: 'Normale bis mäßige Hepatosplenomegalie, Gallenblasenwandödem, erhöhte Nierenparenchymechogenität', significance: 'Ausschluss anderer Ikterusursachen' }
          ],
          microbiology: [
            { test: 'RT-PCR (Blut, Liquores / Urin)', finding: 'Leptospiren-DNA-Nachweis', significance: 'EFFEKTIVSTE FRÜHDIAGNOSTIK! Tag 1-7 in Blut/Liquor, ab Woche 2 im Urin.' },
            { test: 'Mikroskopischer Agglutinationstest (MAT)', finding: 'Einzeltiter ≥1:400 oder 4-facher Titeranstieg im Paarserum', significance: 'SEROLOGISCHER GOLDSTANDARD, aber erst ab Tag 7-10 positiv!' },
            { test: 'ELISA IgM', finding: 'Leptospiren-spezifisches IgM positiv', significance: 'Raschscreening ab Ende Woche 1' }
          ]
        },
        differential: [
          { disease: 'Dengue-Fieber', distinguishing: 'Tropenanamnese, retroorbitaler Schmerz, positiver Rumpel-Leede-Test, keine Wadenmyositis' },
          { disease: 'Schwere Malaria falciparum', distinguishing: 'Plasmodium im dicken Tropfen/Blutausstrich/Schnelltest, Fieberperiodik' },
          { disease: 'Hantavirus-Infektion (HFRS)', distinguishing: 'Nagerurin-Inhalation, Gesichtserythem, schwere Proteinurie, kein ausgeprägter Ikterus' },
          { disease: 'Virale Hepatitis (HAV/HBV/HEV)', distinguishing: 'Exzessiv hohe Transaminasen (>1000 U/L), langsamerer Beginn, spezifische Serologie' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycyclin', dose: '100 mg p.o. 2x/Tag', duration: '7 Tage', note: 'Erste Wahl bei mäßigen anikterischen Fällen!' },
              { drug: 'Amoxicillin', dose: '500 mg p.o. 3x/Tag', duration: '7 Tage', note: 'Alternative für Schwangere und Kinder' },
              { drug: 'Azithromycin', dose: '500 mg p.o. 1x/Tag', duration: '3 Tage', note: 'Bei Penicillin-/Doxycyclin-Allergie' }
            ],
            inpatient: [
              { drug: 'Penicillin G', dose: '1,5-2 Mio. IE i.v. alle 4 Std. (6x/Tag)', duration: '7 Tage', note: 'Erste Wahl bei schwerer Erkrankung / Morbus Weil!' },
              { drug: 'Ceftriaxon', dose: '2 g i.v. 1x/Tag', duration: '7 Tage', note: 'Gleichwertige Alternative zu Penicillin G' },
              { drug: 'Cefotaxim', dose: '2 g i.v. alle 8 Std.', duration: '7 Tage', note: 'Alternative i.v. Cephalosporin-Therapie' }
            ],
            icu: [
              { drug: 'Ceftriaxon i.v. + Supportivtherapie auf Intensivstation', dose: 'Ceftriaxon 2 g i.v. 1x/Tag', duration: '7-10 Tage', note: 'Sofortige Hämodialyse / CRRT bei Nierenversagen; protektive Beatmung bei LPHS!' }
            ]
          },
          targeted: 'Mäßig: Doxycyclin 100 mg p.o. 2x/T (oder Amoxicillin). Schwer / Weil: Penicillin G 1,5-2 Mio. IE i.v. alle 4 Std. oder Ceftriaxon 2 g i.v. 1x/T für 7 Tage. Jarisch-Herxheimer-Reaktion nach Erstdosis möglich!',
          supportive: [
            'Frühzeitige Hämodialyse oder kontinuierliche Nierenersatztherapie (CRRT/CVVH) bei Akutem Nierenversagen.',
            'Protektive Beatmung mit niedrigem Atemzugvolumen (ARDS-Protokoll) und erhöhtem PEEP bei Lungenblutung.',
            'Thrombozyten- und Gefrierplasma-Transfusion (FFP) bei schwerer Thrombozytopenie und Blutungen.',
            'Strikte Flüssigkeits- und Elektrolytkontrolle.'
          ],
          prevention: [
            'Schutzkleidung (Gummistiefel, Handschuhe, Schutzbrille) bei Risikotätigkeiten und Hochwasser.',
            'Schädlingsbekämpfung (Ratten/Mäuse) und Vermeidung der Kontamination von Süßwasser.',
            'Doxycyclin-Chemoprophylaxe (200 mg 1x wöchentlich) bei hochexponierten Kurzzeitaufenthalten (z. B. Extremsport).'
          ]
        },
        guidelines: {
          diagnosis: [
            'In der frühen septischen Phase (<7 Tage) ist die RT-PCR aus Blut und Liquor das effektivste Diagnosemittel.',
            'Der serologische Goldstandard ist der MAT, wird aber erst ab Woche 2 positiv.',
            'Konjunktivale Suffusion + Wadenschmerz + Ikterus mit Cholestase-Muster = Verdacht auf Leptospirose!'
          ],
          treatment_indications: [
            'Alle Verdachtsfälle müssen umgehend ohne Warten auf Serologieergebnisse antibiotisch behandelt werden!'
          ],
          first_line: [
            'Mäßig: Doxycyclin 100 mg p.o. 2x/T für 7 Tage.',
            'Schwer / Morbus Weil: Penicillin G 1,5-2 Mio. IE i.v. alle 4 Std. oder Ceftriaxon 2 g i.v. 1x/T für 7 Tage.'
          ]
        },
        prognosis: {
          mortality: 'Anikterische Form: <1%; Morbus Weil: 10-15%; LPHS: >50%',
          prognostic_scores: ['SOFA-Score', 'APACHE II'],
          factors: 'Höheres Alter, Oligurie/Anurie, schwere Thrombozytopenie, Vorhandensein einer pulmonalen Hämorrhagie'
        }
      },
      {
        id: 'hantavirus',
        name: 'Hantavirus-Infektion (HFRS und HPS)',
        pathogen: {
          type: 'Virus',
          name: '<i>Hantaviridae</i>-Familie (Alte Welt: Puumala, Dobrava-Belgrad, Hantaan, Seoul -> HFRS; Neue Welt: Sin Nombre, <b style="color: #ef4444">Andes</b>, Bayou -> HPS)',
          gram: 'Behülltes, dreisegmentiges Einzelstrang-RNA-Virus (-)',
          shape: 'sphärisch'
        },
        epidemiology: {
          incidence: '>10.000 HFRS-Fälle/Jahr in Europa (hauptsächlich Puumala in Nord-/Mitteleuropa, Dobrava im Balkan). HPS sporadisch in Nord-/Südamerika.',
          risk_groups: ['Forst- und Landarbeiter', 'Soldaten, Camper, Wanderer', 'Reinigungskräfte von Schuppen, Dachböden, unbewohnten Hütten', 'Personen mit Nagetierexposition'],
          seasonality: 'Frühjahr bis Herbst (Mäusepopulationspeak und Outdoor-Aktivitäten)',
          transmission: 'Inhalation von Aerosolen aus getrocknetem Urin, Kot oder Speichel von Nagern. Ausnahme: <b style="color: #ef4444">Andes-Virus</b> kann von Mensch zu Mensch übertragen werden!'
        },
        pathomechanism: {
          steps: [
            'Inhalation von Aerosolen: Virus gelangt über Inhalation von nagerkontaminiertem Staub in die Atemwege.',
            'Endotheltropismus: Hantaviren infizieren selektiv Gefäßendothelzellen über Beta-3-Integrin-Rezeptoren ohne direkte lytische Zellzerstörung.',
            'T-Zell-vermittelte Immunpathogenese: Zytotoxische T-Zellen und Entzündungszytokine (TNF-alpha, IL-6, VEGF) lockern endotheliale Tight Junctions.',
            'Vaskuläres Lecksyndrom: Kapillarleckage führt zu Plasmaextravasation, Flüssigkeitsverlust und Hämokonzentration.',
            'Klinische Phänotypen: HFRS-Leckage dominiert in Nieren und Retroperitoneum (akute tubulointerstitielle Nephritis und Nierenversagen); HPS-Leckage dominiert in Lungenkapillaren (nicht-kardiogenes Lungenödem).'
          ],
          virulence_factors: ['Gn/Gc-Oberflächenglykoproteine (Beta-3-Integrin-Bindung)', 'Nukleokapsidprotein (Immunpathogenese)', 'VEGF-Induktion (Kapillarpermeabilität)']
        },
        clinical: {
          incubation: '1-8 Wochen (Durchschnitt 2-4 Wochen)',
          onset: 'Plötzlicher Beginn mit hohem Fieber und systemischem Prodrom'
        ,
          symptoms: [
            {
              name: 'HFRS (Hämorrhagisches Fieber mit renalem Syndrom) - Alte Welt',
              description: 'Klassische 5 Phasen: 1. Febrile Phase (hohes Fieber, Gesichtserythem, Konjunktivitis, starke Rückenschmerzen); 2. Hypotensive Phase (Schock, Petechien); 3. Oligurische Phase (akutes Nierenversagen, Proteinurie, Urämie, Blutung); 4. Diuretische Phase (Polyurie, Elektrolytentgleisung); 5. Rekonvaleszenzphase.',
              severity: 'severe'
            },
            {
              name: 'Nephropathia epidemica (Puumala-Virus)',
              description: 'Mildere europäische HFRS-Form. Plötzliches Fieber, schwere Rücken-/Flankenschmerzen (Klopfschmerz im Nierenlager), vorübergehende Myopie (Sehstörung durch Ziliarkörperödem), Proteinurie, Kreatininanstieg.',
              severity: 'moderate'
            },
            {
              name: 'HPS (Hantavirus-Pulmonales Syndrom) - Neue Welt',
              description: 'Prodromales Fieber und Myalgien, gefolgt von rasch (innerhalb von Stunden) fortschreitender schwerer Dyspnoe, nicht-kardiogenem Lungenödem, fulminanter Hypoxie, Hypotonie und kardiogenem Schock. Letalität 30-50%!',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Gesichts-, Hals- und Oberkörperrötung (Facial flush)',
            'Injektion der Konjunktiven und Petechien an Gaumen / Achselhöhlen',
            'Flankenschmerz / Nierenlagerklopfschmerz (Giordano-Zeichen positiv)',
            'Hypotonie / systemische Schockzeichen',
            'Feinblasige Rasselgeräusche der Lunge (HPS-Lungenödem)'
          ],
          complications: [
            'Akutes Nierenversagen (Dialysepflichtigkeit)',
            'Schweres nicht-kardiogenes Lungenödem und refraktäre Hypoxämie (HPS)',
            'Kardiogener / distributiver Schock',
            'Hypophysenapoplex / Pituitäre Hämorrhagie (später Panhypopituitarismus)',
            'DIC und Organblutungen'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Klassische Trias: 1. Ausgeprägte Thrombozytopenie (<50-100 G/L); 2. Leukozytose mit Linksverschiebung & atypischen Lymphozyten; 3. Hämokonzentration (Hämatokrit↑)', interpretation: 'Hochspezifisches hämatologisches Muster für Hantavirus!' },
            { test: 'Niere & Urin', finding: 'Kreatinin & Harnstoff stark erhöht; Massive Proteinurie (3-4+), Mikrohämaturie', interpretation: 'Zeichen der akuten tubulointerstitiellen Nephritis' },
            { test: 'Gerinnung', finding: 'APTT verlängert, D-Dimer erhöht, Fibrinogen erniedrigt', interpretation: 'Verbrauchskoagulopathie bei schweren Verläufen' }
          ],
          imaging: [
            { modality: 'Röntgen/CT-Thorax', finding: 'HPS: Beidseitige interstitielle, später alveoläre Infiltrate, rasche Pleuraergussbildung ohne Kardiomegalie', significance: 'Hantavirus-Pulmonales Syndrom Diagnose' },
            { modality: 'Abdomen-Sonographie', finding: 'Vergrößerte, ödematöse Nieren mit gesteigerter Parenchymechogenität', significance: 'HFRS-Bestätigung' }
          ],
          microbiology: [
            { test: 'Serologie (ELISA / Immunoblot)', finding: 'Hantavirus-spezifisches IgM bei Symptombeginn positiv', significance: 'DIAGNOSTISCHER GOLDSTANDARD! IgM in der febrilen Phase fast immer nachweisbar.' },
            { test: 'RT-PCR', finding: 'Virale RNA im Blut oder Gewebe', significance: 'In der Frühphase und zur Genotypisierung nützlich' }
          ]
        },
        differential: [
          { disease: 'Leptospirose', distinguishing: 'Cholestatischer Ikterus vorhanden, Wadenschmerz, Süßwasserexposition, spricht auf Penicillin an' },
          { disease: 'Akute Glomerulonephritis', distinguishing: 'Post-Streptokokken-Anamnese, Hypertonie, keine schwere Thrombozytopenie' },
          { disease: 'Legionellose / Schwere Influenza', distinguishing: 'Keine akute Niereninsuffizienz mit Proteinurie-Trias, spezifisches Urinantigen/PCR' },
          { disease: 'Septischer Schock', distinguishing: 'Hohe Procalcitonin-Werte, positive Blutkultur' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Strikte Überwachung / Vermittlung ins Krankenhaus', dose: '-', duration: '-', note: 'Jeder Hantavirus-Verdachtsfall erfordert eine stationäre/intensivmedizinische Einweisung!' }
            ],
            inpatient: [
              { drug: 'Supportivtherapie + Vorsichtige Flüssigkeitsgabe', dose: 'Hämodynamisches Monitoring', duration: '', note: 'Flüssigkeitsersatz während der hypotensiven Phase bei HFRS, aber strengste Vorsicht in der oligurischen Phase!' },
              { drug: 'IV Ribavirin (HFRS)', dose: '33 mg/kg i.v. Sättigung, dann 16 mg/kg alle 6 Std. für 4 Tage, dann 8 mg/kg alle 8 Std. für 3 Tage', duration: '7 Tage', note: 'Nur bei HFRS! Beginn innerhalb der ersten 5 Tage senkt Nierenversagen und Letalität. Bei HPS wirkungslos!' }
            ],
            icu: [
              { drug: 'Inotropie + Renal/Respiratorische Unterstützung', dose: 'Dobutamin / Noradrenalin', duration: '', note: 'STRENG RESTRIKTIVE Flüssigkeitstherapie bei HPS! Frühzeitige venoarterielle ECMO und mechanische Beatmung indiziert!' }
            ]
          },
          targeted: 'HFRS: Frühzeitiges i.v. Ribavirin (<5 Tage ab Beginn). HPS: Kein spezifisches Antivirusmittel verfügbar; Rein supportive Therapie.',
          supportive: [
            'HFRS: Frühzeitige Hämodialyse / CRRT bei akutem Nierenversagen zur Vermeidung urämischer Komplikationen und Hypervolämie.',
            'HPS: Aggressive Flüssigkeitszufuhr ist STRENG KONTRAINDIZIERT, da sie das Lungenödem verschlimmert! Frühzeitige inotrope Unterstützung (Dobutamin) und invasives Monitoring.'
          ],
          prevention: [
            'Schädlingsbekämpfung und Vermeidung des Kontakts mit Nagerexkrementen.',
            'Feuchtes Reinigen (mit Desinfektionsmittel) und Belüftung geschlossener staubiger Räume.',
            'FFP3/N95-Atemschutzmaske bei Reinigungsarbeiten in Risikobereichen.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Thrombozytopenie + Hämokonzentration + Plötzliche Proteinurie + Nagerexposition = Hantavirus-Verdacht!',
            'Serologischer Goldstandard: IgM ELISA bei Beginn positiv.',
            'Bei HPS entwickelt sich das Lungenödem innerhalb von Stunden ohne Herzinsuffizienz.'
          ],
          treatment_indications: [
            'HFRS: i.v. Ribavirin effektiv bei Beginn innerhalb der ersten 5 Tage.',
            'HPS: Flüssigkeitsgabe MUSS RESTRIKTIV erfolgen, um das Lungenödem nicht zu verschlimmern!'
          ],
          first_line: [
            'HFRS: i.v. Ribavirin + Nierenunterstützung.',
            'HPS: Intensivstation, Dobutamin, restriktive Flüssigkeitstherapie, ECMO.'
          ]
        },
        prognosis: {
          mortality: 'HFRS (Puumala): <0,5-1%; HFRS (Dobrava/Hantaan): 5-15%; HPS (Sin Nombre/Andes): 30-50%',
          prognostic_scores: ['SOFA-Score'],
          factors: 'Virustyp, frühzeitige Intensivaufnahme, Verfügbarkeit von ECMO/CRRT'
        }
      },
      {
        id: 'lyme',
        name: 'Lyme-Borreliose (Lyme-Krankheit)',
        pathogen: {
          type: 'Spirochäte',
          name: '<i>Borrelia burgdorferi sensu lato</i> (<i>B. afzelii</i> [Haut], <i>B. garinii</i> [Neuro], <i>B. burgdorferi ss.</i> [Gelenk])',
          gram: 'Gram-negativ',
          shape: 'spiralig, beweglich'
        },
        epidemiology: {
          incidence: 'USA: ~476.000 Fälle/Jahr; Europa: ~232.000 Fälle/Jahr. Hohe Inzidenz in Mitteleuropa.',
          risk_groups: ['Wanderer, Camper, Forstwirte, Jäger, Gärtner, draußen spielende Kinder'],
          seasonality: 'Frühjahr bis Herbst (Zeckenaktivitätsmaximum)',
          transmission: 'Stich infizierter Ixodes ricinus / Ixodes scapularis Zecken (Saugdauer >24-36 Stunden für Erregerübertragung erforderlich).'
        },
        pathomechanism: {
          steps: [
            'Inokulation: Borrelien werden über den Zeckenspeichel während längeren Saugakts (>24-36h) in die menschliche Haut übertragen.',
            'Zentrifugale Ausbreitung & EM: Bakterien vermehren sich in der Haut und breiten sich zentrifugal aus -> Erythema migrans (EM).',
            'Dissemination: Hämatogene und lymphatische Ausbreitung in Organe (Nervensystem, Herz, Gelenke, Haut).',
            'Immunevasion: VlsE-Antigenvariation und OspC-Expression ermöglichen Persistenz und Gewebeflucht.',
            'Chronische Entzündung: Zytokin- und immunkomplexvermittelte Entzündungsreaktion führt zu Arthritis und Neuroborreliose.'
          ],
          virulence_factors: ['VlsE-Antigenvariation', 'OspC-Oberflächenprotein', 'Komplement-Inhibitoren-Bindung', 'Motilität']
        },
        clinical: {
          incubation: 'EM: 1-30 Tage (Durchschnitt 7-14 Tage; setzt >24h Zeckensaugdauer voraus)',
          onset: 'Stadienabhängig',
          symptoms: [
            {
              name: 'Frühes lokalisiertes Stadium (Erythema migrans)',
              description: '<b>Erythema migrans (EM):</b> Schmerzloses, nicht juckendes, sich ausbreitendes Erythem. <u>Mit bekanntem Zeckenstich:</u> >=1 Tag Inkubation, sich zentrifugal ausbreitender Fleck/Ring >=5 cm, wächst >=3 Tage. <u>Ohne bekannten Zeckenstich:</u> >=8 cm ovaler Fleck seit >=5 Tagen kontinuierlich wachsend. Einzelne nicht wachsende rote Punkte sind KEIN EM!',
              severity: 'moderate'
            },
            {
              name: 'Frühes disseminiertes Stadium (Organmanifestationen)',
              description: 'Wochen bis Monate später. <b>Neuroborreliose:</b> Bannwarth-Syndrom (quälende nächtliche radikuläre Schmerzen, periphere Fazialisparese [oft BEIDSEITIG!], lymphozytäre Meningitis). <b>Lyme-Karditis:</b> Fluktuierende AV-Blockierungen (I-III. Grad). <b>Lymphadenosis cutis benigna (BL):</b> Schmerzloser bläulich-roter Knoten an Ohrläppchen, Brustwarze oder Skrotum.',
              severity: 'severe'
            },
            {
              name: 'Spätes Stadium (Chronische Manifestationen)',
              description: 'Monate bis Jahre später. <b>Lyme-Arthritis:</b> AFEBRILE, schmerzarme asymmetrische Oligo-/Monoarthritis großer Gelenke (Knie ~85%) mit massivem Erguss. Seronegative Lyme-Arthritis EXISTIERT NICHT! <b>ACA (Acrodermatitis chronica atrophicans):</b> Teigige livid-zyanotische Schwellung, später zigarettenpapierartige Hautatrophie.',
              severity: 'moderate'
            }
          ],
          physical_exam: [
            'Erythema migrans: >5 cm (mit Zeckenstich) oder >8 cm (ohne Zeckenstichanamnese) wachsende Rötung',
            'Fazialisparese (plötzlich auftretend, häufig beidseitig)',
            'Meningismus (milde Nackensteifigkeit mit lymphozytärer Pleozytose)',
            'Gelenkschwellung (asymmetrisch, vorwiegend Knie, AFEBRIL)',
            'Borrelien-Lymphozytom: fester livid-roter Knoten an Ohrläppchen/Brustwarze/Skrotum',
            'ACA: früh teigiges Ödem, spät zigarettenpapierartige Hautatrophie'
          ],
          complications: [
            'Post-Lyme-Syndrom (Müdigkeit, kognitive Beschwerden - SPRICHT NICHT AUF ANTIBIOTIKA AN; weitere Antibiotika KONTRAINDIZIERT!)',
            'Chronische refraktäre Arthritis (besonders nach intraartikulärer Steroidinjektion)',
            'Chronische Neuroborreliose (Enzephalomyelitis)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Zwei-Stufen-Serologie (ELISA + Western Blot)', finding: 'IgM (2-4 Wochen), IgG (4-6 Wochen)', interpretation: 'Zwei-Stufen-Diagnostik! Bei typischem EM ist SEROLOGIE STRENG KONTRAINDIZIERT (falsch-negativ/irrelevant). Obligat bei Arthritis, ACA und Neuroborreliose (hoher IgG-Blot).' },
            { test: 'Serologische Verlaufskontrolle nach Therapie', finding: 'NICHT EMPFOHLEN / KONTRAINDIZIERT', interpretation: 'IgG/IgM-Antikörper persistieren jahrelang nach Ausheilung und zeigen keine aktive Infektion an.' },
            { test: 'Liquoruntersuchung', finding: 'Lymphozytäre Pleozytose (50-800/µL), erhöhtes Protein', interpretation: 'Intrathekaler Borrelien-Antikörper-Index (AI >1,5) OBLIGAT für Neuroborreliose.' }
          ],
          imaging: [
            { modality: 'EKG', finding: 'AV-Blockierungen (I-III. Grad)', significance: 'Obligat bei Verdacht auf Lyme-Karditis' }
          ],
          microbiology: [
            { test: 'Untersuchung entferneter Zecken auf Borrelien', finding: 'STRENG KONTRAINDIZIERT', significance: 'Kein klinischer Wert; Prophylaktische Antibiotikagabe aufgrund positiver Zecke KONTRAINDIZIERT.' },
            { test: 'PCR (Gelenkpunktat / Hautbiopsie)', finding: 'Borrelien-DNA positiv', significance: 'Nützlich bei Lyme-Arthritis (Synovialflüssigkeit) und ACA (Hautbiopsie).' },
            { test: 'Nicht-validierte Tests (LTT, ELISPOT, CD57)', finding: 'NICHT EMPFOHLEN', significance: 'Unzuverlässig und wissenschaftlich nicht anerkannt.' }
          ]
        },
        differential: [
          { disease: 'Erysipel / Phlegmone', distinguishing: 'Hohes Fieber, starke Schmerzen, rasche Ausbreitung, deutliche Leukozytose' },
          { disease: 'Tinea corporis', distinguishing: 'Schuppender aktiver Randsaum, starker Juckreiz, positiver KOH-Nativbefund' },
          { disease: 'Septische Arthritis / Chronische Polyarthritis', distinguishing: 'Septisch hat hohes Fieber und eitrigen Erguss (Lyme-Arthritis ist AFEBRIL!). cP betrifft kleine Gelenke symmetrisch.' },
          { disease: 'Multiple Sklerose', distinguishing: 'MRT-Demyelinisierung, oligoklonale Bänder im Liquor' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycyclin p.o.', dose: '100 mg p.o. 2x/Tag (300 mg/T bei >90 kg, 400 mg/T bei >120 kg)', duration: '40 Tage (bei EM, BL, ACA, Lyme-Arthritis und isolierter peripherer Neuritis!)', note: 'Standard-Leitlinien-Antibiotikum. Bei Kindern <8 J. kurzzeitig möglich falls indiziert. Fotosensibilisierend!' },
              { drug: 'Amoxicillin p.o.', dose: '1000 mg p.o. 3x/Tag (1,5-fache Dosis bei >90 kg, 2-fache bei >120 kg)', duration: '20 Tage (bei EM, BL, ACA)', note: 'Erste Wahl in Schwangerschaft und Stillzeit. Kinder: 50 mg/kg/Tag in 3 Dosen.' },
              { drug: 'Cefuroximaxetil p.o.', dose: '500 mg p.o. 2x/Tag (1,5-fache Dosis bei >90 kg, 2-fache bei >120 kg)', duration: '20 Tage (bei EM, BL, ACA)', note: 'Zweite Wahl oral. Kinder: 30 mg/kg/Tag in 2 Dosen.' },
              { drug: 'Azithromycin p.o.', dose: '500 mg p.o. 1x/Tag', duration: '12 Tage (EXKLUSIV bei EM)', note: 'Nur bei EM im Falle schwerer Beta-Laktam- und Doxycyclin-Allergie.' }
            ],
            inpatient: [
              { drug: 'Ceftriaxon i.v.', dose: '2 g i.v. 1x/Tag', duration: '15 Tage', note: 'Erste Wahl bei Neuroborreliose, Lyme-Karditis, schwerer Arthritis, ACA.' }
            ]
          },
          targeted: 'Typisches EM: Sofortige Therapie ohne Serologie. Doxycyclin 40 Tage, Amoxicillin / Cefuroxim 20 Tage, oder Azithromycin 12 Tage. Neuroborreliose / Karditis: Ceftriaxon i.v. 2g 1x/T für 15 Tage. Verlängerte/wiederholte Antibiotikagaben bei Post-Lyme-Syndrom sind UNWIRKSAM UND KONTRAINDIZIERT!',
          supportive: [
            'Symptomatische Analgesie, Physiotherapie.',
            'Lokale Steroidsalben auf das EM sind STRENG KONTRAINDIZIERT (lokale Immunsuppression)!',
            'Intraartikuläre Steroidinjektionen bei Lyme-Arthritis sind STRENG KONTRAINDIZIERT (führt zu chronischer refraktärer Arthritis)!'
          ],
          prevention: [
            'Antibiotikaprophylaxe nach Zeckenstich ist STRENG KONTRAINDIZIERT!',
            'Zecke sofort mit einer feinen Pinzette hautnah entfernen, ohne den Körper zu quetschen.',
            'Routinemäßige Desinfektion der Stichstelle nicht erforderlich.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Typisches EM = Klinische Diagnose! Serologie ist bei EM STRENG KONTRAINDIZIERT.',
            'Zwei-Stufen-Testung (ELISA + Blot) obligat für Organmanifestationen.',
            'Zeckentestung und nicht-validierte Tests (LTT, CD57) sind wissenschaftlich wertlos.'
          ],
          treatment_indications: [
            'EM: Doxycyclin 40 Tage, Amoxicillin 20 Tage.',
            'Neuroborreliose / Karditis: Ceftriaxon i.v. 15 Tage.',
            'Post-Lyme-Syndrom: Antibiotika streng KONTRAINDIZIERT.'
          ],
          first_line: [
            'EM / Arthritis / ACA: Doxycyclin p.o. (100 mg 2x/T, gewichtsangepasst).',
            'Neuroborreliose: Ceftriaxon i.v. 2 g 1x/T für 15 Tage.'
          ]
        },
        prognosis: {
          mortality: 'Extrem niedrig (<0,1%)',
          prognostic_scores: ['Keine'],
          factors: 'Frühzeitige Diagnose und adäquate Behandlungsdauer'
        }
      },
      {
        id: 'tularemia',
        name: 'Tularämie (Hasenpest)',
        pathogen: {
          type: 'Bakterium',
          name: '<i>Francisella tularensis</i> (subsp. <i>tularensis</i> [Typ A - Nordamerika] / subsp. <i>holarctica</i> [Typ B - Europa])',
          gram: 'Gram-negativ',
          shape: 'kleines, pleomorphes Kokkobazillus, intrazellulär'
        },
        epidemiology: {
          incidence: 'Sporadisch in Europa und Nordamerika; endemisch in Skandinavien, Balkan, Mitteleuropa.',
          risk_groups: ['Jäger, Wildbretbearbeiter, Landwirte, Forstwirte, Tierärzte, Laborpersonal (hohes Laborinfektionsrisiko!)'],
          seasonality: 'Sommer (Zecken-/Bremse-Vektor), Winter (Jagdsaison)',
          transmission: 'Extrem niedrige Infektionsdosis (10-50 Keime!). Übertragung durch Zecken-/Bremsenstich, direkten Kontakt mit Feldhasen/Nagern, Inhalation von kontaminiertem Heustaub, Ingestion von verseuchtem Wasser/Fleisch. Keine Mensch-zu-Mensch-Übertragung.'
        },
        pathomechanism: {
          steps: [
            'Inokulation: Bakterien dringen über Hautläsionen, Zeckenstiche, Aerosolinhalation oder Ingestion ein.',
            'Phagosome Escape: Makrophagen phagozytieren Bakterien, F. tularensis entkommt jedoch über das IglA-D Typ-VI-Sekretionssystem aus dem Phagosom ins Zytoplasma.',
            'Lymphatische Dissemination: Vermehrung in Makrophagen, Transport in regionale Lymphknoten -> suppurativ-nekrotisierende Granulome (Buboes).',
            'Organausbreitung: Hämatogene Ausbreitung in Milz, Leber, Lunge und Knochenmark.',
            'Klinische Formen: Eintrittspforte bestimmt Manifestation (ulzeroglandulär, glandulär, okuloglandulär, oropharyngeal, typhös/pulmonal).'
          ],
          virulence_factors: ['Tularemia Pathogenicity Island (T6SS)', 'Phagosom-Escape-Mechanismus', 'Kapsel', 'Atypisches LPS (geringe Endotoxizität)', 'Kategorie-A-Bioterrorismus-Erreger']
        },
        clinical: {
          incubation: '3-5 Tage (Spanne 1-14 Tage)',
          onset: 'Plötzlicher Beginn mit Fieber, Schüttelfrost, Kopfschmerzen und Prostration',
          symptoms: [
            {
              name: 'Ulzeroglanduläre Form (75-85%)',
              description: 'Gestanztes Hautulkus mit schwarzem Schorf (Eschar) an der Eintrittsstelle + schmerzhaft vergrößerter, nekrotisierender regionaler Lymphknoten (Bubo).',
              severity: 'moderate'
            },
            {
              name: 'Glanduläre Form (5-10%)',
              description: 'Schmerzhafte regionale Lymphadenopathie (Bubo) ohne primäres Hautgeschwür.',
              severity: 'moderate'
            },
            {
              name: 'Okuloglanduläre Form',
              description: 'Schmerzhafte eitrige Konjunktivitis mit Lidknoten und präaurikulärer/submandibulärer Lymphadenopathie (Parinaud-Syndrom).',
              severity: 'moderate'
            },
            {
              name: 'Oropharyngeale & Typhöse / Pulmonale Form',
              description: 'Exsudative Pharyngitis/Tonsillitis (oropharyngeal). Pulmonal: Atypische Pneumonie mit hilärer Adenopathie. Typhös: Hohes Fieber, Sepsis, Hepatosplenomegalie ohne Lokalisation. Unbehandelte Letalität 30-60%!',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Gestanztes Geschwür mit schwarzem Schorf (Eschar)',
            'Schmerzhafte, fluktuierende regionale Lymphadenopathie (Bubo)',
            'Eitrige Konjunktivitis mit präaurikulärem Lymphknoten',
            'Exsudative Pharyngitis mit zervikalen Lymphknoten',
            'Hepatomegalie, Splenomegalie, Rasselgeräusche über den Lungen'
          ],
          complications: [
            'Suppurative Bubo-Fistelbildung',
            'Septischer Schock und ARDS',
            'Meningitis und Perikarditis',
            'Osteomyelitis'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Routinekultur', finding: 'BSL-3 GEFAHR! ROUTINEMÄSSIG KONTRAINDIZIERT', interpretation: 'Extrem hohes Laborinfektionsrisiko! Labor vorab informieren.' },
            { test: 'Serologie (Agglutination / ELISA)', finding: 'Titer ≥1:160 oder 4-facher Titeranstieg im Paarserum', interpretation: 'Diagnostisch, aber erst nach 2-3 Wochen positiv.' },
            { test: 'PCR (Exsudat / Aspirat)', finding: 'F. tularensis-DNA positiv', interpretation: 'Schnelles, sensitives und sicheres Diagnosewerkzeug.' }
          ],
          imaging: [
            { modality: 'Röntgen/CT-Thorax', finding: 'Hiläre Lymphadenopathie, fleckige Infiltrate, Pleuraerguss', significance: 'Pulmonale / typhöse Tularämie' }
          ],
          microbiology: [
            { test: 'DFA / Immunhistochemie', finding: 'Antigen-positiv in Gewebe/Ulkus', significance: 'Rasche Bestätigung' }
          ]
        },
        differential: [
          { disease: 'Katzenkratzkrankheit', distinguishing: 'Katzenkontakt, indolenter Verlauf, Bartonella-Serologie' },
          { disease: 'Pyogene Lymphadenitis', distinguishing: 'Rasches Ansprechen auf Beta-Laktame, Bakterienkultur' },
          { disease: 'Hautmilzbrand (Anthrax)', distinguishing: 'SCHMERZLOSER Schorf mit gallertartigem Ödem (Tularämie-Ulkus ist SCHMERZHAFT!)' },
          { disease: 'Pest (Yersinia pestis)', distinguishing: 'Bubo extrem schmerzhaft, endemische Geografie, Gram-negative bipolare Stäbchen' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycyclin', dose: '100 mg p.o. 2x/Tag', duration: '14-21 Tage', note: 'Orale Option bei mäßiger ulzeroglandulärer Form' },
              { drug: 'Ciprofloxacin', dose: '500 mg p.o. 2x/Tag', duration: '14-21 Tage', note: 'Alternative orale Option' }
            ],
            inpatient: [
              { drug: 'Streptomycin i.m.', dose: '7,5-10 mg/kg i.m. 2x/Tag (max. 2 g/T)', duration: '10 Tage', note: 'GOLDSTANDARD bacterizide Ausheilung!' },
              { drug: 'Gentamicin i.v.', dose: '5 mg/kg i.v. 1x/Tag', duration: '10 Tage', note: 'Erste Wahl i.v. Alternative falls Streptomycin nicht verfügbar' }
            ],
            icu: [
              { drug: 'Gentamicin i.v. + Doxycyclin i.v.', dose: 'Gentamicin 5 mg/kg i.v. 1x/T + Doxy 100 mg i.v. 2x/T', duration: '14-21 Tage', note: 'Kombinationstherapie bei schwerer pulmonaler/typhöser Tularämie' }
            ]
          },
          targeted: 'Aminoglykoside (Streptomycin / Gentamicin) sind die effektivsten bakteriziden Erregerkiller. Orale Optionen: Doxycyclin oder Ciprofloxacin für 14-21 Tage (kürzere Therapien führen zu Rezidiven). Beta-Laktame sind UNWIRKSAM!',
          supportive: [
            'Fluktuierender Bubo: Feinnadelaspiration empfohlen.',
            'Offene chirurgische Inzision und Drainage ist KONTRAINDIZIERT (führt zu chronischer Fistelbildung)!'
          ],
          prevention: [
            'Schutzhandschuhe beim Häuten/Zubereiten von Wildbret.',
            'Repellents gegen Zecken und Bremsen.',
            'Durchgaren von Wildfleisch.',
            'Postexpositionsprophylaxe: Doxycyclin 100 mg p.o. 2x/T für 14 Tage nach Hochexposition.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Schmerzhaftes Geschwür + Bubo + Wildbret-/Zeckenexposition = Tularämie!',
            'Routinemäßige Bakterienkultur wegen BSL-3 Laborinfektionsgefahr KONTRAINDIZIERT.',
            'PCR aus Ulkusexsudat ist die bevorzugte Schnelldiagnostik.'
          ],
          treatment_indications: [
            'Aminoglykoside (Gentamicin/Streptomycin) erste Wahl bei mäßigen bis schweren Fällen.',
            'Beta-Laktam-Antibiotika sind UNWIRKSAM.'
          ],
          first_line: [
            'Stationär / Schwer: Gentamicin 5 mg/kg i.v. 1x/T für 10 Tage.',
            'Ambulant / Mäßig: Doxycyclin 100 mg p.o. 2x/T für 14-21 Tage.'
          ]
        },
        prognosis: {
          mortality: 'Ulzeroglandulär: <1-2% (behandelt); Typhös/Pulmonal: 30-60% (unbehandelt), <5% (behandelt)',
          prognostic_scores: ['Keine'],
          factors: 'Klinische Form, frühzeitige Aminoglykosidtherapie'
        }
      },
      {
        id: 'cat_scratch',
        name: 'Katzenkratzkrankheit (CSD)',
        pathogen: {
          type: 'Bakterium',
          name: '<i>Bartonella henselae</i> (selten <i>B. clarridgeiae</i>)',
          gram: 'Gram-negativ',
          shape: 'kleines, anspruchsvolles Stäbchen, intrazellulär'
        },
        epidemiology: {
          incidence: 'Am häufigsten bei Kindern und jungen Erwachsenen (<21 Jahre). Weltweite Verbreitung.',
          risk_groups: ['Katzenbesitzer (besonders Katzenwelpen), Kinder, Tierärzte, Tierheimpersonal'],
          seasonality: 'Herbst- und Wintergipfel',
          transmission: 'Kratz- oder Bissverletzung durch infizierte (asymptomatische) Katzenwelpen, die Katzenflöhe (*Ctenocephalides felis*) tragen. Flohkot wird in die Haut eingerieben.'
        },
        pathomechanism: {
          steps: [
            'Inokulation: B. henselae wird durch mit Flohkot kontaminierte Katzenkratzer/-bisse inokuliert.',
            'Primäre Hautläsion: Erythematöse Papel/Pustel entsteht an der Kratzstelle innerhalb von 3-10 Tagen.',
            'Lymphatischer Transport: Bakterien wandern über Lymphgefäße in regionale Lymphknoten (axillär, epitrochlear, zervikal, inguinal).',
            'Sternförmiges Granulom: Mikroabszesse umgeben von Histiozyten und Mehrkernigen Riesenzellen bilden sich im Lymphknoten (suppurative granulomatöse Lymphadenitis).',
            'Angiogenese bei Immundefizienz: Bei HIV/Immunsuppression führt VEGF-Induktion zu vaskulärer Proliferation (Bacillary Angiomatosis und Peliosis hepatis).'
          ],
          virulence_factors: ['BadA-Adhäsin', 'Typ-IV-Sekretionssystem', 'Endothelproliferations-Induktion (VEGF)', 'Erythrozyteninvasion']
        },
        clinical: {
          incubation: 'Primärpapel: 3-10 Tage; Regionale Lymphadenopathie: 1-3 Wochen',
          onset: 'Subakut',
          symptoms: [
            {
              name: 'Typische CSD (90%)',
              description: 'Primäre Papel an der Kratzspur, gefolgt 1-3 Wochen später von schmerzhafter regionaler Lymphadenomegalie (axillär, epitrochlear, zervikal). Lymphknoten sind warm, rötlich und zu 10-20% einschmelzend/suppurativ.',
              severity: 'moderate'
            },
            {
              name: 'Parinaud Oculoglanduläres Syndrom (5%)',
              description: 'Direkte Inokulation in die Bindehaut -> granulomatöse Konjunktivitis + präaurikuläre/submandibuläre Lymphadenopathie.',
              severity: 'moderate'
            },
            {
              name: 'Atypische / Disseminierte Manifestationen (<5%)',
              description: '<b>Neuroretinitis:</b> Plötzlicher schmerzloser Sehverlust, Papillenödem, makuläres Sternfigur-Exsudat. <b>Enzephalopathie:</b> Verwirrtheit, Krampfanfälle. <b>Hepatosplenische CSD:</b> Mikroabszesse in Leber/Milz.',
              severity: 'severe'
            },
            {
              name: 'Bacillary Angiomatosis & Peliosis hepatis (HIV+ / Immunsupprimierte)',
              description: 'Rot-lividen Gefäßpapeln/Knoten der Haut ähnlich einem Kaposi-Sarkom, blutgefüllte Zysten in Leber/Milz.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Primäre Kratzspurläsion (Papel/borkige Effloreszenz)',
            'Einseitige regionale Lymphadenomegalie (druckschmerzhaft, derb, 1-5 cm)',
            'Parinaud-Konjunktivalknoten + präaurikulärer Lymphknoten',
            'Funduskopie: Papillenödem mit makulärem Stern (Neuroretinitis)',
            'Vaskuläre Hautveränderungen (Bacilläre Angiomatose)'
          ],
          complications: [
            'Lymphknoteneinschmelzung / Abszess',
            'Enzephalopathie und Neuroretinitis',
            'Hepatosplenische Mikroabszesse',
            'Kulturnegative Endokarditis'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Serologie IFT / ELISA (IgG / IgM)', finding: 'IgG ≥1:256 (akut) oder IgM positiv', interpretation: 'DIAGNOSTISCHER GOLDSTANDARD! Positiv 2-6 Wochen nach Exposition.' },
            { test: 'PCR (Lymphknotenaspirat / Gewebe)', finding: 'B. henselae-DNA positiv', interpretation: 'Hochspezifisch und sensitiv' },
            { test: 'Warthin-Starry-Silberimprägnierung', finding: 'Pleomorphe Stäbchen im nekrotisierenden Granulom', interpretation: 'Histopathologie' }
          ],
          imaging: [
            { modality: 'Lymphknoten-Sonographie', finding: 'Vergrößerte echoarme Lymphknoten mit zentraler Nekrose/Einschmelzung', significance: 'Beurteilung der Punktionsbedürftigkeit' },
            { modality: 'Abdomen-CT / Sonographie', finding: 'Multiple kleine echoarme/hypodense Herde in Leber und Milz', significance: 'Hepatosplenische CSD' }
          ],
          microbiology: [
            { test: 'Blutkultur', finding: 'Meist negativ (anspruchsvolles Wachstum 6-8 Wochen)', significance: 'Spezielle Anzucht bei Endokarditis erforderlich' }
          ]
        },
        differential: [
          { disease: 'Pyogene Lymphadenitis (Staph/Strep)', distinguishing: 'Rascher Beginn, akute Eiterung, schnelles Ansprechen auf Beta-Laktame' },
          { disease: 'Tularämie', distinguishing: 'Schmerzhaftes Primärgeschwür mit Eschar, Wildkontakt, BSL-3 Gefahr' },
          { disease: 'Atypische Mykobakteriose', distinguishing: 'Säurefeste Stäbchen positiv, indolente violette Hautverfärbung' },
          { disease: 'Lymphom', distinguishing: 'Schmerzlos, progressiv, B-Symptomatik, Biopsie erforderlich' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '500 mg Tag 1, dann 250 mg Tag 2-5 p.o.', duration: '5 Tage', note: 'Erste Wahl! Verkürzt die Lymphknotenschwellung und beschleunigt Abheilung.' },
              { drug: 'Doxycyclin', dose: '100 mg p.o. 2x/Tag', duration: '14-21 Tage', note: 'Alternative für Erwachsene' },
              { drug: 'Beobachtung', dose: 'Symptomatische Therapie', duration: '2-4 Monate', note: 'Milde typische CSD bei Immunkompetenten heilt spontan aus' }
            ],
            inpatient: [
              { drug: 'Doxycyclin + Rifampicin', dose: 'Doxy 100 mg 2x/T + Rifampicin 300 mg 2x/T p.o.', duration: '4-6 Wochen', note: 'Indiziert bei Neuroretinitis und ZNS-Beteiligung' }
            ],
            icu: [
              { drug: 'Gentamicin i.v. + Doxycyclin i.v.', dose: 'Gentamicin 3 mg/kg 1x/T i.v. + Doxy 100 mg 2x/T i.v.', duration: '2 Wochen Gentamicin + 6 Wochen Doxycyclin', note: 'Erste-Wahl-Regimen bei Bartonellen-kulturnegativer Endokarditis' }
            ]
          },
          targeted: 'Typische CSD: Azithromycin 5-Tage-Schema. Neuroretinitis / ZNS-CSD: Doxycyclin + Rifampicin für 4-6 Wochen. Bartonellen-Endokarditis: Doxycyclin + Gentamicin ± Klappenersatz-OP.',
          supportive: [
            'Einschmelzender Lymphknoten: FEINNADELASPIRATION zur Schmerzlinderung.',
            'OFFENE CHIRURGISCHE INZISION UND DRAINAGE IST STRENG KONTRAINDIZIERT (führt zu chronischer Fistelbildung und Narben)!'
          ],
          prevention: [
            'Flohbekämpfung bei Hauskatzen.',
            'Vermeidung von Katzenkratzern/-bissen; Wunden sofort mit Wasser und Seife waschen.',
            'Immungeschwächte Personen sollten junge Katzenwelpen meiden.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Katzenkratzer + Einseitiger schmerzhafter Lymphknoten = CSD!',
            'Serologie (IFT IgG ≥1:256) ist das primäre nicht-invasive Diagnosemittel.',
            'Keine offene Biopsie/Inzision an einschmelzenden Knoten durchführen.'
          ],
          treatment_indications: [
            'Azithromycin 5-Tage-Schema verkürzt die Rückbildungszeit der Lymphknoten.',
            'Neuroretinitis erfordert 4-6 Wochen Doxycyclin + Rifampicin.'
          ],
          first_line: [
            'Typische CSD: Azithromycin 500 mg Tag 1, 250 mg Tag 2-5 p.o.',
            'ZNS / Neuroretinitis: Doxycyclin 100 mg 2x/T + Rifampicin 300 mg 2x/T p.o.'
          ]
        },
        prognosis: {
          mortality: '<1% (insgesamt hervorragend; höher bei schwerer Endokarditis)',
          prognostic_scores: ['Keine'],
          factors: 'Immunstatus (HIV+ Risiko für Bacillary Angiomatosis), Vorhandensein einer Endokarditis'
        }
      },
      {
        id: 'q_fever_zoo',
        name: 'Q-Fieber',
        pathogen: {
          type: 'Bakterium',
          name: '<i>Coxiella burnetii</i>',
          gram: 'Gram-negativ',
          shape: 'kleines, obligat intrazelluläres Kokkobazillus, sporenabähnliche Form'
        },
        epidemiology: {
          incidence: 'Weltweite Zoonose; Berufskrankheit.',
          risk_groups: ['Viehzüchter, Landwirte, Tierärzte, Schlachthofpersonal, Schaf-/Ziegen-/Rinderhalter'],
          seasonality: 'Frühjahrsgipfel (Ablammsaison)',
          transmission: 'Inhalation von Staub mit sporenabähnlicher Small Cell Variant (SCV) aus Geburtsprodukten (Plazenta, Fruchtwasser, Milch, Urin). SCV überlebt Monate-Jahre im Boden. Einzelner Erreger kann infizieren!'
        },
        pathomechanism: {
          steps: [
            'Inhalation: SCV-Form wird in die Alveolen inhaliert, von Alveolarmakrophagen phagozytiert.',
            'Phagolysosomales Überleben: Coxiella überlebt und vermehrt sich in sauren Phagolysosomen (pH ~4,5).',
            'Hämatogene Dissemination: Ausbreitung über das Blut in Leber, Knochenmark und Gefäßendothel.',
            'Akute granulomatöse Entzündung: Bildung charakteristischer "Donut"-Granulome mit zentralem hellem Raum und Fibrinring in Leber/Knochenmark.',
            'Chronischer Shift: Phasenvariation-Shift von Phase II zu Phase I Antigen-Expression führt zu chronischer Persistenz (kulturnegative Endokarditis).'
          ],
          virulence_factors: ['Sporenähnliche Small Cell Variant (SCV)', 'Phasenvariation (Phase I: virulent, Phase II: avirulent)', 'Phagolysosomale Säureresistenz']
        },
        clinical: {
          incubation: '2-3 Wochen (Spanne 14-39 Tage)',
          onset: 'Plötzlicher Beginn mit hohem Fieber und systemischem Krankheitsgefühl',
          symptoms: [
            {
              name: 'Akutes Q-Fieber (60% Asymptomatisch oder MILD)',
              description: 'Trias: Hohes Fieber mit Schüttelfrost + unerträgliche RETROBULBÄRE KOPFSCHMERZEN + Myalgien/Arthralgien. Atypische Pneumonie (milder Husten) und granulomatöse Hepatitis (Transaminasenanstieg). Exanthem MEIST ABWESEND!',
              severity: 'moderate'
            },
            {
              name: 'Chronisches Q-Fieber (1-2%)',
              description: 'Entwickelt sich Monate bis Jahre später bei Patienten mit Herzklappenvorschaden oder Immunsuppression. Am häufigsten: Kulturnegative infektiöse Endokarditis (Aorten-/Mitralklappe). Zudem Gefäßprotheseninfektion, Aortenaneurysma, Osteomyelitis.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Hohes Fieber mit relativer Bradykardie',
            'Hepatomegalie und Splenomegalie',
            'Klappengeräusch / Herzinsuffizienzzeichen bei Endokarditis (chronisch)'
          ],
          complications: [
            'Chronische Q-Fieber-Endokarditis (Aorten-/Mitralklappenzerstörung)',
            'Aortenaneurysma-Infektion / Ruptur',
            'Granulomatöse Hepatitis und Osteomyelitis'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Leberwerte', finding: 'GOT/GPT & AP erhöht', interpretation: 'Granulomatöse Hepatitis' },
            { test: 'Blutbild', finding: 'Thrombozytopenie bei 25%, Leukozytose fehle/mild', interpretation: 'Akutes Q-Fieber' }
          ],
          imaging: [
            { modality: 'Röntgen/CT-Thorax', finding: 'Multiple rundliche Verdichtungen, Segment-/Lappenkonsolidierung', significance: 'Atypische Pneumonie' },
            { modality: 'Echokardiographie (TEE)', finding: 'Klappenvegetationen, Klappendestruktion', significance: 'Chronische Q-Fieber-Endokarditis' }
          ],
          microbiology: [
            { test: 'Serologie IFT (Phase I vs Phase II)', finding: 'Akutes Q-Fieber: Phase II IgG/IgM positiv (IgG ≥1:200). Chronisches Q-Fieber: Phase I IgG ≥1:800!', significance: 'DIAGNOSTISCHER GOLDSTANDARD! Phasen-Shift unterscheidet akutes von chronischem Q-Fieber.' },
            { test: 'RT-PCR (Blut / Gewebe)', finding: 'Coxiella-DNA positiv', significance: 'In der frühen akuten Phase vor Serokonversion nützlich' }
          ]
        },
        differential: [
          { disease: 'Brucellose', distinguishing: 'Undulierendes Fieber, Rohmilchkäse-Konsum, osteoartikuläre Beteiligung' },
          { disease: 'Influenza / COVID-19', distinguishing: 'Atemwegssymptome im Vordergrund, virale PCR' },
          { disease: 'Virale Hepatitis', distinguishing: 'Transaminasen >1000 U/L, spezifische Hepatitis-Serologie' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycyclin', dose: '100 mg p.o. 2x/Tag', duration: '14 Tage', note: 'Erste Wahl bei Akutem Q-Fieber!' },
              { drug: 'Ciprofloxacin', dose: '750 mg p.o. 2x/Tag', duration: '14 Tage', note: 'Alternative falls Doxycyclin kontraindiziert' }
            ],
            inpatient: [
              { drug: 'Doxycyclin p.o./i.v.', dose: '100 mg 2x/Tag', duration: '14 Tage', note: 'Akutes Q-Fieber mit Pneumonie/Hepatitis' }
            ],
            icu: [
              { drug: 'Doxycyclin + Hydroxychloroquin', dose: 'Doxy 100 mg 2x/T + Hydroxychloroquin 200 mg 3x/T p.o.', duration: 'MINDESTENS 18-24 MONATE!', note: 'OBLIGATES REGIMEN bei Chronischer Q-Fieber-Endokarditis! Hydroxychloroquin alkalisiert Phagolysosomen und macht Doxy bakterizid.' }
            ]
          },
          targeted: 'Akutes Q-Fieber: Doxycyclin 100 mg p.o. 2x/T für 14 Tage. Chronische Q-Fieber-Endokarditis: Doxycyclin 100 mg 2x/T + Hydroxychloroquin 200 mg 3x/T für mindestens 18-24 Monate!',
          supportive: [
            'Symptomatische Antipyretika und Analgetika.',
            'Klappenersatz-Operation bei schwerer chronischer Q-Fieber-Endokarditis.'
          ],
          prevention: [
            'Schutzkleidung bei Geburtshelfer-Tätigkeiten bei Vieh.',
            'Pasteurisierung von Milch.',
            'Q-Fieber-Impffstoff (Q-Vax, in Australien für Risikogruppen verfügbar).'
          ]
        },
        guidelines: {
          diagnosis: [
            'Retrobulbäre Kopfschmerzen + Hohes Fieber + Pneumonie/Hepatitis + Viehkontakt = Q-Fieber!',
            'Serologie IFT: Phase II IgG zeigt akutes Q-Fieber; Phase I IgG ≥1:800 zeigt chronisches Q-Fieber.',
            'Anzucht gefährlich und BSL-3-pflichtig.'
          ],
          treatment_indications: [
            'Akutes Q-Fieber: Sofortige Behandlung mit Doxycyclin 14 Tage.',
            'Chronisches Q-Fieber: Doxycyclin + Hydroxychloroquin für 18-24 Monate.'
          ],
          first_line: [
            'Akut: Doxycyclin 100 mg p.o. 2x/T für 14 Tage.',
            'Chronisch: Doxycyclin 100 mg 2x/T + Hydroxychloroquin 200 mg 3x/T für 18-24 Monate.'
          ]
        },
        prognosis: {
          mortality: 'Akutes Q-Fieber: <1-2%; Chronische Endokarditis: 5-25% (unbehandelt)',
          prognostic_scores: ['Keine'],
          factors: 'Bestehender Herzklappenschaden, Adhärenz bei der 18-24 monatigen Kombinationstherapie'
        }
      },
      {
        id: 'rabies',
        name: 'Tollwut (Rabies)',
        pathogen: {
          type: 'Virus',
          name: '<i>Rabies lyssavirus</i> (Rhabdoviridae-Familie)',
          gram: 'Behülltes, negativ-strängiges Einzelstrang-RNA-Virus',
          shape: 'patronenförmig (bullet-shaped)'
        },
        epidemiology: {
          incidence: '~59.000 menschliche Todesfälle/Jahr weltweit (überwiegend Asien und Afrika).',
          risk_groups: ['Kinder, Tierpfleger, Tierärzte, Höhlenforscher (Fledermäuse), Reisende in Endemiegebiete'],
          seasonality: 'Keine',
          transmission: 'Biss, Kratzer oder Speichelkontakt auf Schleimhäuten/verletzter Haut durch infiziertes Tier (Hunde ~99% weltweit; Fledermäuse, Füchse, Waschbären).'
        },
        pathomechanism: {
          steps: [
            'Inokulation: Virus wird durch Tierbiss/Speichel in Muskel-/Subkutangewebe inokuliert.',
            'Neuromuskulärer Eintritt: Bindung an nikotinische Acetylcholinrezeptoren (nAChR) an der neuromuskulären Endplatte.',
            'Retrograder axonaler Transport: Wandert retrograd entlang peripherer Nervenaxone mit 12-24 mm/Tag zum Rückenmark und Gehirn.',
            'ZNS-Enzephalitis: Massive Vermehrung im ZNS mit Bildung pathognomischer Negri-Körperchen (eosinophile zytoplasmatische Einschlusskörperchen in Purkinje-Zellen/Hippocampus).',
            'Zentrifugale Ausbreitung: Wandert zentrifugal über autonome Nerven in Speicheldrüsen, Hornhaut und Haut.'
          ],
          virulence_factors: ['Patronenförmiges G-Glykoprotein (Neurotropismus)', 'Retrograder axonaler Transport', 'Immunflucht']
        },
        clinical: {
          incubation: '1-3 Monate (Spanne: 1 Woche bis >1 Jahr, abhängig von der Bissentfernung zum ZNS)',
          onset: 'Akute neurologische Progression nach Prodrom',
          symptoms: [
            {
              name: 'Prodromalphase (2-10 Tage)',
              description: 'Unspezifisches Fieber, Kopfschmerzen, Krankheitsgefühl. PATHOGNOMONISCH: Schmerz, intensiver Juckreiz oder Parästhesie an der ABGEHEILTEN Bissstelle!',
              severity: 'moderate'
            },
            {
              name: 'Enzephalitische / Enzephalopathische Tollwut ("Enrazierte Tollwut", 80%)',
              description: 'Unruhe, Verwirrtheit, Halluzinationen. PATHOGNOMONISCH: Hydrophobie (krampfartige Kehlkopfspasmen beim Versuch zu trinken oder beim Anblick von Wasser), Aerophobie (Spasmen durch Luftzug), Hypersalivation, autonome Instabilität.',
              severity: 'severe'
            },
            {
              name: 'Stille / Paralytische Tollwut (20%)',
              description: 'Aufsteigende schlaffe Muskellähmung beginnend an der gebissenen Extremität, ähnlich einem Guillain-Barré-Syndrom, ohne Hydrophobie.',
              severity: 'severe'
            },
            {
              name: 'Koma und Tod',
              description: 'Beide Formen gehen in Koma, Hypoventilation, Herzstillstand und den Tod innerhalb von 7-10 Tagen nach Symptombeginn über.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Hypersalivation (Schaum vor dem Mund)',
            'Kehlkopfspasmen ausgelöst durch Wasser oder Luftzug (Hydrophobie / Aerophobie)',
            'Autonome Dysfunktion (fluktuierender Blutdruck, Tachykardie, Piloerektion)',
            'Parästhesie an der Bissnarbe',
            'Schlaffe aufsteigende Lähmung (paralytische Form)'
          ],
          complications: [
            'Tod (~100% Letalität nach Beginn klinischer Symptome)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Kein routinemäßiger Frühmarker', finding: '-', interpretation: 'Klinischer Verdacht obligat!' }
          ],
          imaging: [
            { modality: 'CCT / cMRT', finding: 'Unspezifische T2-Hyperintensität in Hirnstamm, Basalganglien, limbischem System', significance: 'Ausschluss anderer Enzephalitisursachen' }
          ],
          microbiology: [
            { test: 'RT-PCR (Speichel, Nacken-Hautbiopsie)', finding: 'Tollwut-RNA positiv', significance: 'Ante-mortem diagnostischer Goldstandard (Hautbiopsie enthält Haarfollikelnerven).' },
            { test: 'Direkte Immunfluoreszenz (DFA)', finding: 'Virales Antigen in Hautbiopsie oder Hornhautabstrich positiv', significance: 'Rascher Ante-mortem-Test' },
            { test: 'Post-mortem Gehirn-DFA', finding: 'Negri-Körperchen / Virales Antigen im Hirngewebe', significance: 'Definitive Post-mortem-Bestätigung' }
          ]
        },
        differential: [
          { disease: 'Tetanus', distinguishing: 'Trismus, schmerzhafte Muskelkrämpfe ohne Hydrophobie/Pleozytose' },
          { disease: 'Guillain-Barré-Syndrom', distinguishing: 'Symmetrische aufsteigende Lähmung ohne autonome Übererregbarkeit/Hydrophobie' },
          { disease: 'Virale Enzephalitis (HSV, Tollwut-ähnlich)', distinguishing: 'Keine Hydrophobie, spezifische virale PCR' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Postexpositionelle Prophylaxe (PEP)', dose: 'SOFORT NACH EXPOSITION!', duration: 'Tage 0, 3, 7, 14', note: '1. Wunde 15 Min. mit Wasser und Seife auswaschen! 2. Tollwut-Immunglobulin (HRIG 20 IE/kg) in die Wunde infiltrieren! 3. Tollwut-Impffstoff i.m. an den Tagen 0, 3, 7, 14.' }
            ],
            inpatient: [
              { drug: 'Palliative Sedierung & Analgesie', dose: 'Midazolam + Ketamin + Morphin', duration: 'Kontinuierlich', note: 'Palliative Linderung bei klinischer Tollwut.' }
            ],
            icu: [
              { drug: 'Milwaukee-Protokoll', dose: 'EXPERIMENTELL / VERWORFEN', duration: '-', note: 'Von WHO/CDC NICHT empfohlen (nicht reproduzierbar, hohe Versagerquote).' }
            ]
          },
          targeted: 'Nach Beginn klinischer Symptome existiert keine wirksame antivirale Behandlung (~100% tödlich). Die Postexpositionsprophylaxe (PEP) ist zu 100% wirksam, wenn sie vor Symptombeginn verabreicht wird!',
          supportive: [
            'Starke Sedierung, Analgesie, ruhiges dunkles Zimmer.',
            'Vermeidung von Flüssigkeitsbolussen, die Kehlkopfspasmen auslösen.'
          ],
          prevention: [
            'PEP: Sofortige 15-minütige Wundreinigung mit Seife + HRIG + 4-Dosen-Impfserie.',
            'Systemische flächendeckende Hundeimpfung.',
            'Präexpositionsprophylaxe (PrEP) für Tierärzte, Tierpfleger, Reisende.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Parästhesie an abgeheilter Bissstelle + Hydrophobie = Klinische Tollwut!',
            'Ante-mortem-Diagnose: RT-PCR / DFA aus Nackenhautbiopsie (Haarfollikelnerven) und Speichel.',
            'Beißenden Hund/Katze wenn möglich 14 Tage beobachten.'
          ],
          treatment_indications: [
            'PEP MUSS sofort nach Tierbiss-Exposition der Kategorie II/III begonnen werden!',
            'Klinische Tollwut erfordert palliative Versorgung.'
          ],
          first_line: [
            'PEP: HRIG 20 IE/kg in die Wunde infiltriert + Impfstoff i.m. an den Tagen 0, 3, 7, 14.'
          ]
        },
        prognosis: {
          mortality: '~100% nach Beginn klinischer Symptome',
          prognostic_scores: ['Keine'],
          factors: 'Rechtzeitige PEP-Verabreichung vor Symptombeginn'
        }
      },
      {
        id: 'anthrax',
        name: 'Milzbrand (Anthrax)',
        pathogen: {
          type: 'Bakterium',
          name: '<i>Bacillus anthracis</i>',
          gram: 'Gram-positiv',
          shape: 'großes Sporenbildner-Stäbchen in Ketten ("Bambusrohrform")'
        },
        epidemiology: {
          incidence: 'Selten; endemisch in landwirtschaftlichen Viehzuchtregionen (Asien, Afrika, Südeuropa). Bioterrorismus-Erreger.',
          risk_groups: ['Gerber, Wollverarbeiter, Viehzüchter, Tierärzte, Laborpersonal'],
          seasonality: 'Keine',
          transmission: 'Hautmilzbrand (95% - Sporeninokulation in Hautläsion), Lungenmilzbrand (Wollsortiererkrankheit - Sporeninhalation), Darmmilzbrand (Ingestion von infiziertem Fleisch).'
        },
        pathomechanism: {
          steps: [
            'Sporeninokulation: Sporen dringen über Hautläsionen, Inhalation oder Ingestion ein.',
            'Keimung & Kapsel: Sporen keimen in Makrophagen, bilden Poly-D-Glutaminsäure-Kapsel, die der Phagozytose widersteht.',
            'Exotoxinproduktion: Sekretion von drei Exotoxin-Komponenten: Protektives Antigen (PA), Ödemfaktor (EF) und Letalfaktor (LF).',
            'Toxin-Kaskade: PA bildet Heptamer-Poren -> EF (Adenylatzyklase) verursacht massives gallertartiges entzündungsfreies Ödem -> LF (Zink-Metalloprotease) spaltet MAPKs und führt zu Gewebenekrose und Zytokinsturm.',
            'Dissemination: Hämorrhagische Mediastinitis, septischer Schock und hämorrhagische Milzbrand-Meningitis.'
          ],
          virulence_factors: ['Poly-D-Glutaminsäure-Kapsel', 'Protektives Antigen (PA)', 'Ödemfaktor (EF)', 'Letalfaktor (LF)', 'Kategorie-A-Bioterrorismus-Erreger']
        },
        clinical: {
          incubation: 'Hautmilzbrand: 1-7 Tage; Lungenmilzbrand: 1-6 Tage (bis zu 60 Tage wegen Sporenpersistenz)',
          onset: 'Formabhängig',
          symptoms: [
            {
              name: 'Hautmilzbrand (Cutaneous Anthrax, 95%)',
              description: 'Juckende Papel -> Bläschen -> SCHMERZLOSER SCHWARZER SCHORF (Pustula maligna) umgeben von ausgedehntem gallertartigem Ödem. Schmerzlosigkeit ist Kardinalzeichen!',
              severity: 'moderate'
            },
            {
              name: 'Lungenmilzbrand (Inhalational Anthrax / Wollsortiererkrankheit)',
              description: 'Biphasisch: 1. Prodromale milde grippeähnliche Symptome; 2. Plötzliche fulminante Phase mit schwerer Dyspnoe, Zyanose, Schock, hämorrhagischer Mediastinitis. Unbehandelt Letalität >85%!',
              severity: 'severe'
            },
            {
              name: 'Darmmilzbrand (Gastrointestinal Anthrax)',
              description: 'Schwere Abdominalschmerzen, blutiges Erbrechen, Meläna, Aszites. Hohe Letalität.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Schmerzloser schwarzer Schorf mit umgebendem gallertartigem Ödem (Pustula maligna)',
            'Mediastinalverbreiterung, Dämpfung bei Perkussion (Lungenmilzbrand)',
            'Meningismus (Hämorrhagische Milzbrand-Meningitis)'
          ],
          complications: [
            'Septischer Schock und DIC',
            'Hämorrhagische Milzbrand-Meningitis (~100% tödlich)',
            'Hämorrhagische Mediastinitis und Erstickung'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Gram-Färbung', finding: 'Große, rechtwinklig begrenzte Gram-positive Stäbchen in Ketten ("Bambusrohrform")', interpretation: 'Bläschenflüssigkeit oder Blutausstrich' },
            { test: 'Blutkultur', finding: 'B. anthracis positiv', interpretation: 'Systemischer Milzbrand / Sepsis' }
          ],
          imaging: [
            { modality: 'Röntgen/CT-Thorax', finding: 'PATHOGNOMONISCH: DEUTLICHE MEDIASTINALVERBREITERUNG und beidseitiger Pleuraerguss ohne Parenchyminfiltrat!', significance: 'Lungenmilzbrand Leitsymptom' }
          ],
          microbiology: [
            { test: 'PCR', finding: 'B. anthracis-DNA positiv', significance: 'Rasche Bestätigung' },
            { test: 'DFA', finding: 'Kapsel- und Zellwandantigen positiv', significance: 'Referenzlabor-Bestätigung' }
          ]
        },
        differential: [
          { disease: 'Spinnenbiss (Loxosceles)', distinguishing: 'Sehr schmerzhafter Schorf, nekrotische Hautläsion ohne gallertartiges Ödem' },
          { disease: 'Tularämie', distinguishing: 'SCHMERZHAFTES Geschwür mit Schorf (Milzbrand-Schorf ist SCHMERZLOS!)' },
          { disease: 'Bakterielle Pneumonie', distinguishing: 'Fehlen der ausgeprägten Mediastinalverbreiterung im CT/Röntgen' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Ciprofloxacin', dose: '500 mg p.o. 2x/Tag', duration: '60 Tage', note: 'Hautmilzbrand (60 Tage falls Bioterrorismus/Sporenexposition vermutet!)' },
              { drug: 'Doxycyclin', dose: '100 mg p.o. 2x/Tag', duration: '60 Tage', note: 'Alternative bei Hautmilzbrand' }
            ],
            inpatient: [
              { drug: 'Ciprofloxacin i.v. + Meropenem i.v. + Linezolid i.v. (Dreifachkombination)', dose: 'Ciprofloxacin 400 mg i.v. 2x/T + Meropenem 1 g i.v. 3x/T + Linezolid 600 mg i.v. 2x/T', duration: '14 Tage i.v., insgesamt 60 TAGE p.o./i.v.', note: 'OBLIGATE DREIFACHKOMBINATION bei Systemischem/Lungenmilzbrand! Linezolid/Clindamycin hemmt Toxinsynthese.' }
            ],
            icu: [
              { drug: 'Dreifach-Antibiotika + Raxibacumab / Obiltoxaximab i.v.', dose: 'Raxibacumab 40 mg/kg i.v. Einzeldosis', duration: 'Einzeldosis', note: 'Monoklonaler Antikörper gegen Protektives Antigen (PA) zur Toxinneutralisation bei systemischem Milzbrand!' }
            ]
          },
          targeted: 'Hautmilzbrand: Ciprofloxacin p.o. für 60 Tage. Systemisch / Lungenmilzbrand: Dreifachkombination i.v. (Ciprofloxacin + Linezolid + Meropenem) + Raxibacumab-Antitoxin für INSGESAMT 60 TAGE wegen verzögerter Sporenkeimung!',
          supportive: [
            'Pleuraerguss-Drainage (Thoraxdrainage).',
            'CHIRURGISCHE EXZISION ODER DEBRIDEMENT DES HAUTSCHORFS IST STRENG KONTRAINDIZIERT (erhöht Toxin-Dissemination)!'
          ],
          prevention: [
            'PEP: Ciprofloxacin (500 mg p.o. 2x/T) oder Doxycyclin (100 mg p.o. 2x/T) für 60 TAGE + 3-Dosen Milzbrand-Impfstoff nach Sporenexposition.',
            'Infizierte Tierkadaver vor Ort verbrennen; KEINE Sektion durchführen (Sporenbildung bei Luftkontakt!).'
          ]
        },
        guidelines: {
          diagnosis: [
            'Schmerzloser schwarzer Schorf + Gallertartiges Ödem = Hautmilzbrand!',
            'Mediastinalverbreiterung im Thorax-Röntgen/CT = Lungenmilzbrand!',
            'Hautschorf NICHT exzidieren oder debridieren.'
          ],
          treatment_indications: [
            'Systemischer/Lungenmilzbrand erfordert Dreifach-Antibiotikakombination + Antitoxin für 60 Tage.'
          ],
          first_line: [
            'Systemisch: Ciprofloxacin i.v. + Linezolid i.v. + Meropenem i.v. + Raxibacumab i.v. für 60 Tage.',
            'Hautmilzbrand: Ciprofloxacin 500 mg p.o. 2x/T für 60 Tage.'
          ]
        },
        prognosis: {
          mortality: 'Hautmilzbrand: <1% (behandelt), 20% (unbehandelt); Lungenmilzbrand: 45% (behandelt), >85% (unbehandelt); GI: 40%',
          prognostic_scores: ['APACHE II'],
          factors: 'Klinische Form, frühzeitige Antitoxinverabreichung, Vorhandensein einer hämorrhagischen Meningitis'
        }
      },
      {
        id: 'brucellosis',
        name: 'Brucellose (Malta-Fieber / Undulierendes Fieber)',
        pathogen: {
          type: 'Bakterium',
          name: '<i>Brucella</i>-Spezies (<i>B. melitensis</i> [Schafe/Ziegen - am virulentesten!], <i>B. abortus</i> [Rinder], <i>B. suis</i> [Schweine], <i>B. canis</i> [Hunde])',
          gram: 'Gram-negativ',
          shape: 'kleines, obligat aerobes, intrazelluläres Kokkobazillus'
        },
        epidemiology: {
          incidence: 'Weitverbreitete Zoonose in Viehzuchtregionen (Mittelmeerraum, Naher Osten, Zentralasien, Südamerika).',
          risk_groups: ['Hirten, Viehzüchter, Tierärzte, Schlachthofpersonal, Laborpersonal (hohes Aerosol-Infektionsrisiko!)'],
          seasonality: 'Frühjahr und Sommer (Ablamm- und Melksaison)',
          transmission: '1. Ingestion von unpasteurisierter Milch, Ziegen-/Schafskäse, Sahne (am häufigsten!); 2. Direkter Kontakt mit infiziertem Tiergewebe/Plazenta über Hautläsionen; 3. Aerosolinhalation in Viehställen/Laboren.'
        },
        pathomechanism: {
          steps: [
            'Invasion: Erreger dringen über Magen-Darm-Trakt, Hautläsionen oder Atemwegsschleimhaut ein.',
            'Intrazelluläres Überleben: Phagozytose durch PMNs und Makrophagen; hemmt Phagolysosomenfusion und vermehrt sich im endoplasmatischen Retikulum.',
            'Hämatogene Ausbreitung: Infizierte Makrophagen wandern in regionale Lymphknoten und Blutbahn (Bakteriämie) zu retikuloendothelialen Organen (Leber, Milz, Knochenmark).',
            'Granulombildung: Wirt bildet nicht-verkäsende epitheloidzelligen Granulome in den betroffenen Organen.',
            'Organmanifestation: Ansiedlung in Wirbelsäule/Gelenken (Spondylodiscitis), Hoden (Epididymo-Orchitis) oder Herzklappen (Endokarditis).'
          ],
          virulence_factors: ['Glattes LPS (O-Antigenkette widersteht Komplementlyse)', 'Typ-IV-Sekretionssystem (VirB-Operon hemmt Phagolysosomenfusion)', 'Intrazelluläre Persistenz']
        },
        clinical: {
          incubation: '2-4 Wochen (Spanne: 1 Woche bis 2-3 Monate)',
          onset: 'Schleichender, gradueller oder subakuter undulierender Fieberverlauf',
          symptoms: [
            {
              name: 'Klassische Akute Brucellose (Undulierendes Fieber)',
              description: '<b>Undulierendes Fieber (Febris undulans):</b> Fieber steigt nachmittags/abends an und fällt morphologisch spontan bis morgens ab, begleitet von profusem kellerartig/säuerlich riechendem Schweiß. Ausgeprägte Fatigue, Kreuzschmerzen, Myalgien, Arthralgien, deutliche Gemütsschwankungen (Depression).',
              severity: 'moderate'
            },
            {
              name: 'Osteoartikuläre Manifestationen (30-50% - Häufigste Komplikation!)',
              description: '<b>Spondylodiscitis / Vertebrale Osteomyelitis:</b> Starke Lendenwirbelsäulenschmerzen, Klopfschmerz, Psoasabszess. Zudem Sakroiliitis und großgelenkige (Hüfte, Knie) Monoarthritis.',
              severity: 'severe'
            },
            {
              name: 'Urogenitale Manifestationen (10-20%)',
              description: '<b>Epididymo-Orchitis:</b> Schmerzhafte, plötzliche einseitige Hodenschwellung und Fieber.',
              severity: 'moderate'
            },
            {
              name: 'Brucellen-Endokarditis (<2% - Haupttodesursache!)',
              description: 'Kulturnegative Klappenzerstörung (vorwiegend Aortenklappe), rasch progressive Herzinsuffizienz, Klappenabszesse, Embolisationen.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Febris undulans (undulierendes Fieber) mit profusem Schwitzen',
            'Hepatosplenomegalie und zervikale/axilläre Lymphadenopathie',
            'Klopfschmerz der Wirbelsäule, Lasegue-Zeichen positiv (Spondylodiscitis)',
            'Einseitig schmerzhafter geschwollener Hoden (Orchitis)'
          ],
          complications: [
            'Spinale Spondylodiscitis, Wirbelkörperkollaps, Epiduralabszess',
            'Infektiöse Endokarditis und Klappenperforation',
            'Neurobrucellose (Meningitis, Radikulopathie, chronische Enzephalitis)',
            'Chronische Brucellose (Symptome persistieren >1 Jahr)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Blutbild', finding: 'Leukopenie mit relativer Lymphozytose, milde Anämie, Thrombozytopenie', interpretation: 'Retikuloendotheliale Knochenmarksdepression' },
            { test: 'Leberwerte', finding: 'Mäßige Transaminasenerhöhung', interpretation: 'Granulomatöse Hepatitis' }
          ],
          imaging: [
            { modality: 'MRT-Wirbelsäule (Kontrastmittel)', finding: 'Zwischenwirbelscheiben- und angrenzendes Wirbelkörperödem, Kontrastmittelanreicherung (Spondylodiscitis), paravertebraler/Psoas-Abszess', significance: 'Früherkennung von Spondylodiscitis und epiduraler Kompression' },
            { modality: 'Echokardiographie (TTE/TEE)', finding: 'Aorten-/Mitralklappenvegetation, Ulzeration', significance: 'Obligat bei Endokarditisverdacht' }
          ],
          microbiology: [
            { test: 'Blutkultur (Lysis-Zentrifugation / BACTEC)', finding: 'Brucella spp. Isolierung', significance: 'LANGSAMES WACHSTUM! Labor vorab über Brucellen-Verdacht informieren; Kulturen 21-28 Tage bebrüten!' },
            { test: 'Serologie (Standard-Röhrchen-Agglutination - SAT / Wright)', finding: 'Titer ≥1:160 (oder 4-facher Anstieg)', significance: 'DIAGNOSTISCHER ECKPFEILER! Coombs-Test bei chronischen Fällen wegen blockierender Antikörper erforderlich.' },
            { test: 'PCR', finding: 'Brucella-DNA positiv', significance: 'Rasche und spezifische Bestätigung' }
          ]
        },
        differential: [
          { disease: 'Typhus abdominalis (Salmonella Typhi)', distinguishing: 'Kontinuierliches Fieber, Roseolen, Bradykardie, Stuhlkultur' },
          { disease: 'Tuberkulose (Morbus Pott)', distinguishing: 'Zwischenwirbelraum bei Pott früh erhalten, langsamer Verlauf, PPD/IGRA positiv' },
          { disease: 'Q-Fieber', distinguishing: 'Atypische Pneumonie und retrobulbäre Kopfschmerzen dominieren, Phasenvariations-Serologie' },
          { disease: 'Infektiöse Endokarditis (Staph/Strep)', distinguishing: 'Rascher Verlauf, positive Blutkulturen innerhalb 24-48 Stunden' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycyclin + Rifampicin (Standard-Systemtherapie)', dose: 'Doxycyclin 100 mg p.o. 2x/T + Rifampicin 600-900 mg p.o. 1x/T', duration: 'MINDESTENS 6 WOCHEN!', note: 'STANDARD ERSTE-WAHL ORALE KOMBINATION! Monotherapie ist wegen hoher Rezidivrate KONTRAINDIZIERT!' }
            ],
            inpatient: [
              { drug: 'Doxycyclin p.o. + Streptomycin i.m. / Gentamicin i.v.', dose: 'Doxycyclin 100 mg p.o. 2x/T x 6 Wochen + Gentamicin 5 mg/kg i.v. 1x/T in den ersten 2 Wochen (oder Streptomycin 1 g i.m. x 14 Tage)', duration: 'Doxy 6 Wochen + Aminoglykosid 2 Wochen', note: 'ALTERNATIVE MIT NIEDRIGERER REZIDIVRATE! Bevorzugt bei Spondylodiscitis.' }
            ],
            icu: [
              { drug: 'Ceftriaxon i.v. + Doxycyclin p.o. + Rifampicin p.o.', dose: 'Ceftriaxon 2 g i.v. 2x/T + Doxy 100 mg p.o. 2x/T + Rifampicin 900 mg p.o. 1x/T', duration: 'MINDESTENS 3-6 MONATE!', note: 'OBLIGATES DREIFACHREGIMEN bei Neurobrucellose und Brucellen-Endokarditis! Chirurgischer Klappenersatz bei Endokarditis empfohlen.' }
            ]
          },
          targeted: 'Unkompliziert: Doxycyclin (100 mg p.o. 2x/T 6 Wochen) + Rifampicin (600-900 mg p.o. 1x/T 6 Wochen) ODER Doxycyclin (6 Wochen) + Gentamicin (2 Wochen). Spondylodiscitis: Doxycyclin + Rifampicin + Gentamicin für 8-12 Wochen. Neurobrucellose / Endokarditis: Ceftriaxon + Doxycyclin + Rifampicin für 3-6 Monate.',
          supportive: [
            'Rumpforthese bei Spondylodiscitis zur Vermeidung spinaler Instabilität.',
            'Frühzeitige herzchirurgische Konsultation zum Klappenersatz bei Endokarditis.',
            'Analgesie (NSAR), Bettruhe.'
          ],
          prevention: [
            'Pasteurisierung oder Abkochen von Milch und Milchprodukten.',
            'Vermeidung von Rohmilchkäse (Ziegen-/Schafskäse).',
            'Tragen von Schutzhandschuhen und Brille bei geburtshilflichen/tierärztlichen Eingriffen.',
            'Vieh-Impfung und Bestandskontrollen.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Undulierendes Fieber + Rückenschmerzen + Rohmilchkäse-Exposition = Brucellose!',
            'Blutkulturen wachsen langsam (mindestens 21-28 Tage bebrüten).',
            'Monotherapie ist wegen hohem Rezidivrisiko STRENG KONTRAINDIZIERT.'
          ],
          treatment_indications: [
            'Alle Brucellose-Fälle erfordern eine kombinierte Antibiotikatherapie für mindestens 6 Wochen.'
          ],
          first_line: [
            'Standard: Doxycyclin p.o. + Rifampicin p.o. für 6 Wochen (oder Doxycyclin 6 Wochen + Gentamicin 2 Wochen).',
            'Neurobrucellose / Endokarditis: Ceftriaxon i.v. + Doxycyclin p.o. + Rifampicin p.o. für 3-6 Monate.'
          ]
        },
        prognosis: {
          mortality: '<1-2% (hauptsächlich durch akute Endokarditis); Rezidivrate <5% bei korrekter Kombinationstherapie, >30% bei Monotherapie',
          prognostic_scores: ['Keine'],
          factors: 'Adhärenz bei der 6-wöchigen Kombinationstherapie, frühzeitige Klappenoperation bei Endokarditis'
        }
      }
    ]
  }
});

(function ensureZoonoticDeDiseaseGalleries() {
  const category = (window as any).diseases ? (window as any).diseases.zoonotic : null;
  if (!category || !Array.isArray(category.diseases)) return;

  function createInlineGalleryImage(diseaseName: string, categoryName: string) {
    const safeDiseaseName = String(diseaseName || 'Krankheit');
    const safeCategoryName = String(categoryName || 'Zoonosen');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#dcfce7"/>
          <stop offset="100%" stop-color="#bbf7d0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1030" cy="150" r="130" fill="#16a34a" opacity="0.14"/>
      <circle cx="180" cy="520" r="180" fill="#22c55e" opacity="0.12"/>
      <text x="80" y="150" font-size="62" font-family="Arial, sans-serif" font-weight="700" fill="#14532d">${safeDiseaseName}</text>
      <text x="80" y="230" font-size="36" font-family="Arial, sans-serif" fill="#166534">Kategorie: ${safeCategoryName}</text>
      <text x="80" y="340" font-size="30" font-family="Arial, sans-serif" fill="#052e16">Zoonotische Infektion - Didaktische Illustration</text>
      <rect x="80" y="390" width="1040" height="8" fill="#16a34a" opacity="0.45"/>
      <text x="80" y="470" font-size="28" font-family="Arial, sans-serif" fill="#14532d">Infektiologie</text>
    </svg>`;

    return {
      url: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      caption: `${safeDiseaseName} - didaktische Illustration`,
      type: 'Illustration'
    };
  }

  category.diseases.forEach((disease: any) => {
    if (!disease || (Array.isArray(disease.gallery) && disease.gallery.length > 0)) return;
    disease.gallery = [createInlineGalleryImage(disease.name, category.name)];
  });
})();
