Object.assign(window.diseases, {
      bacterial_respiratory: {
        name: 'Bakteriális légúti fertőzések',
        icon: window.diseaseMetadata.bacterial_respiratory.icon,
        color: window.diseaseMetadata.bacterial_respiratory.color,
              tables: [
               {
                   title: 'Típusos vs. Atípusos Pneumonia Differenciáldiagnosztika',
                   headers: ['Jellemző', 'Típusos Pneumonia', 'Atípusos Pneumonia'],
                   rows: [
                     ['Kezdet', 'Hirtelen, drámai (hidegrázás)', 'Lassú, fokozatos (prodroma)'],
                     ['Láz', 'Magas (>39°C)', 'Hőemelkedés vagy mérsékelt láz'],
                     ['Mellkasi fájdalom', 'Pleurális, szúró (gyakori)', 'Retrosternális, égő (ritkább)'],
                     ['Köhögés', 'Produktív', 'Száraz, improduktív, kínzó'],
                     ['Köpet', 'Gennyes, rozsdabarna', 'Kevés, nyákos vagy hiányzik'],
                     ['Mellkasi folyadék', 'Gyakori (parapneumoniás)', 'Ritka'],
                     ['Radiológia', 'Lobaris/szegmentális konszolidáció, légtölcsér', 'Interstitialis, tejüvegszerű, diffúz, foltos'],
                     ['Extrapulmonális tünetek', 'Ritkák (kivéve szeptikus szóródás)', 'Gyakoriak (fejfájás, myalgia, fül/torok, GI, kiütés)'],
                     ['Labor (Fvs)', 'Leukocytosis, balra tolt', 'Normál vagy enyhe leukocytosis'],
                     ['Labor (CRP/PCT)', 'Jelentősen emelkedett (PCT >0.5)', 'Mérsékelten emelkedett (PCT <0.25)'],
                     ['Labor (Májenzimek)', 'Általában normál', 'Gyakran emelkedett (GOT, GPT)'],
                     ['Kórokozók', '<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>', '<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, Vírusok']
                   ]
                 }
               ],
        diseases: [
          {
            id: 'bacterial_pneumonia',
            name: 'Bakteriális pneumonia',
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-pozitív', shape: 'diplococcus' },
            epidemiology: {
              incidence: 'Leggyakoribb közösségben szerzett pneumonia (CAP) kórokozó (30-40%)',
              risk_groups: ['65 év felettiek', 'Krónikus betegek (COPD, szívelégtelenség, diabetes)', 'Immunszupprimáltak', 'Splenectomizáltak', 'Alkoholisták', 'Dohányosok'],
              seasonality: 'Téli-tavaszi csúcs, gyakran influenza szuperinfekció',
              transmission: 'Cseppfertőzés, endogén aktiváció'
            },
            pathomechanism: {
              steps: [
                'A fertőzés általában a felső légutakban kolonizáló baktériumok mikroaspirációjával kezdődik. A kórokozó virulenciafaktorai (pl. tok) segítenek elkerülni a gazdaszervezet védekező mechanizmusait (pl. fagocitózis).',
                'A baktériumok az alveolusokban elszaporodnak, ami heves gyulladásos választ vált ki. A felszabaduló toxinok (pl. pneumolysin) károsítják a hámsejteket.',
                'A gyulladásos sejtek (neutrophilek), vörösvértestek és fibrin kitöltik az alveolusokat, ami a tüdőszövet tömörödéséhez (konszolidáció) vezet. Ez a folyamat felelős a jellegzetes lobaris pneumonia képéért.'
              ],
              virulence_factors: ['Kapszula poliszacharid (93 szerotípus)', 'Pneumolysin', 'Autolysin (LytA)', 'Neuraminidáz', 'IgA1 proteáz']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Hirtelen, drámai kezdet',
              symptoms: [
                { name: 'Hirtelen kezdet', description: 'Magas láz, hidegrázás, elesettség jellemzi.', severity: 'severe' },
                { name: 'Légúti tünetek', description: 'Kezdetben száraz, majd produktív köhögés, klasszikusan rozsdabarna köpettel. Gyakori a pleurális, szúró mellkasi fájdalom és a nehézlégzés.', severity: 'moderate' },
                { name: 'Atípusos prezentáció', description: 'Időseknél a láz hiányozhat, és a tudatzavar lehet a vezető tünet.', severity: 'severe' }
              ],
              physical_exam: [
                'Tachypnoe, tachycardia',
                'Rekesz feletti tompa kopogtatási hang',
                'Bronchialis légzés, crepitatio',
                'Fokozott bronchophonia és pectoralfremitus',
                'Cyanosis súlyos esetben'
              ],
              complications: ['Empyema', 'Tüdőtályog', 'Meningitis', 'Szepszis/septicus shock', 'ARDS', 'Pericarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (15-30 G/L), balra tolt', interpretation: 'Bakteriális fertőzésre jellemző' },
                { test: 'CRP', finding: 'Jelentősen emelkedett (>100 mg/L)', interpretation: 'Aktív gyulladás markere' },
                { test: 'PCT', finding: '>0.5 ng/mL', interpretation: 'Bakteriális szepszis gyanúja' },
                { test: 'Artériás vérgáz', finding: 'Hypoxaemia, esetleg hypocapnia', interpretation: 'Légzési elégtelenség' },
                { test: 'Hemokultúra', finding: '20-30%-ban pozitív', interpretation: 'Kórokozó azonosítás' }
              ],
              imaging: [
                { modality: 'Mellkas rtg PA+oldalfelvétel', finding: 'Lobaris/szegmentális konszolidáció, légtölcsér (air bronchogram)', significance: 'Típusos megjelenés' },
                { modality: 'CT mellkas', finding: 'Részletes parenchyma értékelés', significance: 'Komplikációk kizárása' }
              ],
              microbiology: [
                { test: 'Köpet Gram-festés', finding: 'Gram+ lándzsa alakú diplococcusok, >25 neutrofil/látótér', significance: 'Gyors orientáló vizsgálat' },
                { test: 'Köpet tenyésztés', finding: 'S. pneumoniae izolálás', significance: 'Antibiotikum érzékenység' },
                { test: 'Vizelet antigén teszt', finding: 'Pneumococcus poliszacharid kimutatás', significance: 'Gyors, specifikus (>90%)' },
                { test: 'PCR', finding: 'lytA gén kimutatás', significance: 'Legérzékenyebb módszer' }
              ]
            },
            calculators: [
              {
                name: 'CURB-65 Score - Pneumonia súlyosság',
                items: [
                  { label: 'Zavartság (Confusion)', points: 1 },
                  { label: 'Urea > 7 mmol/L', points: 1 },
                  { label: 'Légzésszám ≥ 30/perc', points: 1 },
                  { label: 'Vérnyomás (Szisztolés < 90 vagy Diasztolés ≤ 60 Hgmm)', points: 1 },
                  { label: 'Életkor ≥ 65 év', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 1, text: 'Alacsony rizikó (halálozás <3%). Otthoni kezelés megfontolható.' },
                  { min: 2, max: 2, text: 'Közepes rizikó (halálozás 9%). Kórházi felvétel javasolt.' },
                  { min: 3, max: 5, text: 'Magas rizikó (halálozás 15-40%). Sürgős kórházi/intenzív osztályos kezelés.' }
                ]
              }
            ],
            differential: [
              { disease: 'Legionella pneumonia', distinguishing: 'Hiponatrémia, GI tünetek, atípusos rtg kép' },
              { disease: 'Klebsiella pneumonia', distinguishing: 'Alkoholisták, currant jelly köpet, felső lebeny' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Fiatalok, lassú kezdet, atípusos tünetek' },
              { disease: 'Tüdőembólia', distinguishing: 'Rizikófaktorok, D-dimer, CTPA' },
              { disease: 'Szívelégtelenség', distinguishing: 'Kardiális anamnézis, BNP, kétoldali infiltrátum' }
            ],
            therapy: {
              guidelines: ['NICE NG138 (Pneumonia in adults) 2024/2025', 'ATS/IDSA 2019 CAP Guidelines', 'Magyar Infektológiai Társaság'],
              empirical: {
                cap_outpatient: {
                    title: 'CAP - Otthon kezelhető (Enyhe - CURB-65 0-1)',
                    drugs: [
                        { drug: 'Amoxicillin', dose: '3x500mg-1g PO', duration: '5 nap', note: 'Első választás (NICE). 5 napos kúra általában elegendő.' },
                        { drug: 'Doxycyclin', dose: '200mg stat, majd 1x100mg PO', duration: '5 nap', note: 'Penicillin allergia esetén.' },
                        { drug: 'Clarithromycin', dose: '2x500mg PO', duration: '5 nap', note: 'Alternatíva.' }
                    ]
                },
                cap_inpatient: {
                    title: 'CAP - Kórházi kezelés (Középsúlyos - CURB-65 2)',
                    drugs: [
                        { drug: 'Amoxicillin + Clarithromycin', dose: '3x500mg-1g PO/IV + 2x500mg PO/IV', duration: '5 nap', note: 'Atípusos fedezet szükséges lehet. (NICE)' },
                        { drug: 'Doxycyclin', dose: '200mg stat, majd 1x100mg PO', duration: '5 nap', note: 'Monoterápia penicillin allergia esetén.' },
                        { drug: 'Levofloxacin', dose: '1x500mg PO/IV', duration: '5 nap', note: 'Alternatíva (NICE: légúti fluorokinolon).' }
                    ]
                },
                cap_icu: {
                    title: 'CAP - Súlyos (CURB-65 3-5) / ITO',
                    drugs: [
                        { drug: 'Co-amoxiclav + Clarithromycin', dose: '1.2g IV 8ó + 500mg IV 12ó', duration: '7-10 nap', note: 'NICE ajánlás súlyos CAP-ra.' },
                        { drug: 'Ceftriaxon + Clarithromycin', dose: '1x2g IV + 2x500mg IV', duration: '7-10 nap', note: 'Gyakori alternatíva (nem NICE első vonal, de elterjedt).' },
                        { drug: 'Levofloxacin', dose: '1x500mg IV', duration: '7-10 nap', note: 'Béta-laktám allergia esetén.' }
                    ]
                },
                hap_early: {
                    title: 'HAP - Nem súlyos / Korai',
                    drugs: [
                        { drug: 'Co-amoxiclav', dose: '625mg PO 3x1 vagy 1.2g IV 3x1', duration: '5 nap', note: 'Első választás (NICE NG191).' },
                        { drug: 'Doxycyclin', dose: '100mg PO', duration: '5 nap', note: 'Alternatíva.' }
                    ]
                },
                hap_late_vap: {
                    title: 'HAP - Súlyos / VAP / Magas rizikó',
                    drugs: [
                        { drug: 'Antipseudomonas béta-laktám', dose: 'pl. Piperacillin/tazobactam, Cefepim, Meropenem', duration: '7 nap', note: '1. komponens (Gram-negatív fedezet).' },
                        { drug: '+ Antipseudomonas fluorokinolon vagy aminoglikozid', dose: 'pl. Ciprofloxacin, Amikacin', duration: '7 nap', note: '2. komponens (dupla G- fedezet, ha szükséges).' },
                        { drug: '+ MRSA fedezet', dose: 'Vancomycin vagy Linezolid', duration: '7 nap', note: '3. komponens (ha MRSA rizikó >10-20%).' }
                    ]
                },
                vap_stenotrophomonas: {
                    title: 'VAP - Stenotrophomonas maltophilia (Célzott)',
                    drugs: [
                        { drug: 'Trimethoprim/Sulfamethoxazol (TMP-SMX)', dose: '15-20 mg/kg/nap (TMP) IV 3-4 részben', duration: '14 nap', note: 'Első választás. Magas dózis szükséges!' },
                        { drug: 'Levofloxacin', dose: '750 mg IV 1x', duration: '14 nap', note: 'Alternatíva.' },
                        { drug: 'Cefiderocol', dose: '2g IV 8 óránként', duration: '14 nap', note: 'Rezerv antibiotikum.' }
                    ]
                 }  
              },
              targeted: 'Penicillin érzékeny: Penicillin G 4x4 millió NE IV; Rezisztens: Ceftriaxon vagy Vancomycin',
              supportive: ['O2 terápia (SpO2 >92%)', 'Folyadékpótlás', 'Lázcsillapítás', 'Mellkasdrainage empyema esetén'],
              prevention: ['PPSV23 (23-valens poliszacharid)', 'PCV13/15/20 (konjugált)', 'Influenza oltás']
            },  
            prognosis: {
              mortality: 'CAP: 5-15%, ICU: 20-50%',
              prognostic_scores: ['CURB-65', 'PSI/PORT score'],
              factors: 'Életkor, komorbiditás, bakteremia, multilobaris érintettség'
            },
              references: [
              { text: 'NICE NG138: Pneumonia (community-acquired): antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng138' },
              { text: 'ATS/IDSA 2019 Clinical Practice Guideline for Community-Acquired Pneumonia', url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.201908-1581ST' }
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lobar_pneumonia.jpg',
                caption: 'Jobb alsó lebeny konszolidációja mellkas röntgenen.',
                type: 'Röntgen'
              },
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Streptococcus_pneumoniae.jpg',
                caption: 'Gram-pozitív, lándzsa alakú diplococcusok köpetkenetben.',
                type: 'Mikroszkópia'
              }
            ]
          },
          {
            id: 'mediastinitis',
            name: 'Mediastinitis',
            pathogen: { type: 'Baktérium', name: 'Polimikrobiális, gyakran <i>Staphylococcus aureus</i>, streptococcusok, gram-negatívok, anaerobok', gram: 'Vegyes', shape: 'Változó' },
            epidemiology: {
              incidence: 'Ritka, de súlyos szövődmény',
              risk_groups: ['Postoperatív betegek', 'Endoszkópos beavatkozások után', 'Oropharyngealis fertőzések', 'Trauma', 'Odontogén fertőzések', 'Immunszuppresszió'],
              seasonality: 'Nincs',
              transmission: 'Nem közvetlenül fertőző, hanem a közeli szövetekből, sebészeti vagy endoszkópos beavatkozásból terjed'
            },
            pathomechanism: {
              steps: [
                'A mediastinumot fertőzés érheti a közeli szövetekből (pl. garat, nyelőcső, fog, mellkasfal), endoszkópos beavatkozás, műtét vagy trauma után.',
                'A bakteriális terjedés gyulladást, szöveti nekrózist és tályogképződést okoz a mediastinumban.',
                'A folyamat plasztikus gyulladás, sejtelhalás és szisztémás gyulladásos válaszhoz vezethet, amely súlyos sepsishez, shockhoz és több szervi elégtelenséghez vezet.'
              ],
              virulence_factors: ['Biofilm', 'Toxinok', 'Polimikrobiális közösség', 'Szöveti nekrózis']
            },
            clinical: {
              incubation: 'Változó, gyakran néhány nap-több hét',
              onset: 'Akut vagy szubakut',
              symptoms: [
                { name: 'Mellkasi fájdalom', description: 'Fő tünet, gyakran súlyos, erős, előrehozott, néha nyelési nehézség kíséretében', severity: 'severe' },
                { name: 'Láz és általános rossz közérzet', description: 'Gyulladásos állapot, tachycardia és láz jellemző', severity: 'severe' },
                { name: 'Nyelési nehézség / rekedtség', description: 'A mediastinalis gyulladás vagy tályog a nyelőcső, gége, rekesz körüli teret érintheti', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz, tachycardia, leukocytosis',
                'Nyaki vagy supraclavicularis duzzanat',
                'Mellkasi fájdalom, nyelési nehézség',
                'Súlyos esetben hypotonia, sepsis jelei'
              ],
              complications: ['Szeptikus shock', 'Mediastinalis tályog', 'Nyelőcső perforáció', 'Aorta- vagy nagyér érintettség', 'Tüdő- vagy pleurális komplikációk', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép, CRP, PCT', finding: 'Gyulladás, gyakran magas PCT', interpretation: 'Súlyos gyulladás/infekció' },
                { test: 'Hemokultúra', finding: 'Pozitív lehet', interpretation: 'Szepszis vagy hematogén terjedés gyanúja' }
              ],
              imaging: [
                { modality: 'CT mellkas/nyak', finding: 'Mediastinalis szövetduzzanat, tályog, gáz, fluidum', significance: 'Legfontosabb képalkotó módszer' },
                { modality: 'Mellkas röntgen', finding: 'Mediastinalis tágulat, esetleg pleuraeffusio', significance: 'Első lépés, de kevésbé specifikus' }
              ],
              microbiology: [
                { test: 'Sebészi/bronchoszkópos mintavétel', finding: 'Tenyésztés és PCR', significance: 'Célzott terápia és rezisztencia' }
              ]
            },
            differential: [
              { disease: 'Pneumonia', distinguishing: 'Tüdőparenchyma góc, kevésbé mediastinalis' },
              { disease: 'Aortadisszekció / mediastinalis vérzés', distinguishing: 'Megfelelő képalkotóval elkülöníthető' },
              { disease: 'Pleuritis / empyema', distinguishing: 'Pleura- és folyadék góc, nem primér mediastinalis fertőzés' }
            ],
            therapy: {
              empirical: {
                inpatient: [
                  { drug: 'Piperacillin/tazobactam', dose: '4.5g IV 3x/nap', duration: 'Kórházi/IV', note: 'Széles spektrum, gyakori első választás' },
                  { drug: '+ Vancomycin', dose: '15-20 mg/kg IV 2x/nap', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Clindamycin vagy Metronidazol', dose: '600mg IV 3x/nap', duration: '', note: 'Anaerob fedezet' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '1g IV 3x/nap', duration: '', note: 'Súlyos, kritikus állapot' },
                  { drug: '+ Vancomycin', dose: '15-20 mg/kg IV 2x/nap', duration: '', note: 'MRSA/G+ fedezet' }
                ]
              },
              targeted: 'Tenyésztés és érzékenységi eredmény alapján módosítva; a forráskontroll és a sebészi/drainage döntő.',
              supportive: ['Sürgős sebészi konzultáció', 'IV folyadékpótlás', 'Súlyos sepsisben vazopresszorok', 'Nutríció', 'Légúti támogatás'],
              prevention: ['Antibiotikum-profilaxis beavatkozások előtt', 'Higiénés sebészi technika', 'Fogászati és garatfertőzések kezelése']
            },
            guidelines: {
              diagnosis: [
                'CT mellkas/nyak a legfontosabb vizsgálat; a klinikai gyanú és a képalkotó lelet együtt döntő.'
              ],
              treatment_indications: [
                'Minden gyanús mediastinitis sürgősségi kórházi ellátást igényel; sebészi debridement/drainage gyakran szükséges.'
              ],
              first_line: [
                'Tág spektrumú IV antibiotikum + sebészi forráskontroll.'
              ]
            },
            prognosis: {
              mortality: 'Magas, különösen ha későn diagnosztizálják vagy a sepsishez társul',
              prognostic_scores: ['Nincs egységes score'],
              factors: 'Késői diagnózis, immunoszuppresszió, az alapbetegség súlyossága, nagyér érintettség'
            }
          },
          {
            id: 'tuberculosis',
            name: 'Tüdő tuberkulózis',
            pathogen: { type: 'Mycobacterium', name: '<i>Mycobacterium tuberculosis</i>', gram: 'Saválló (Ziehl-Neelsen+)', shape: 'pálca' },
            epidemiology: {
              incidence: 'Világszerte ~10 millió új eset/év, Magyarországon ~500 eset/év',
              risk_groups: ['HIV pozitívak (20-30x rizikó)', 'Diabeteszes betegek', 'Immunszupprimáltak', 'Szociálisan hátrányos helyzetűek', 'Egészségügyi dolgozók', 'Bevándorlók endémiás területekről'],
              seasonality: 'Nincs szezonalitás',
              transmission: 'Cseppfertőzés (< 5 μm aeroszol), zárt térben 8+ óra expozíció'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a kórokozót tartalmazó aeroszol cseppek belélegzésével történik. A baktériumokat az alveoláris makrofágok fagocitálják, de azok túlélik és szaporodnak bennük.',
                'A fertőzés helyén kialakul a primer góc (Ghon-góc), és a baktériumok a regionális nyirokcsomókba jutnak, létrehozva a primer komplexust.',
                'A celluláris immunválasz (T-sejtek) aktiválódik, ami granulómaképződéshez vezet. Ezek a granulómák betokolják a baktériumokat, latens fertőzést (LTBI) hozva létre (az esetek 90%-a).',
                'Immunszuppresszió esetén a baktériumok reaktiválódhatnak. A granulóma közepe elsajtosodik (kazifikáló nekrózis), beolvadhat és üreget (caverna) képezhet, ami a fertőzés nyílt, fertőző formájához vezet.'
              ],
              virulence_factors: ['Cord factor (trehalóz-dimikolát)', 'Mycolic acid (sejtfal)', 'Lipoarabinomannan', 'ESAT-6 és CFP-10 szekretált antigének']
            },
            clinical: {
              incubation: 'Primer: 2-12 hét; Reaktiváció: évek-évtizedek',
              onset: 'Lassú, alattomos',
              symptoms: [
                { name: 'Légúti tünetek', description: 'Krónikus, 3 hétnél tovább tartó köhögés, amely kezdetben száraz, majd produktívvá válhat. Később véres köpet (haemoptysis) is megjelenhet.', severity: 'severe' },
                { name: 'Általános (B) tünetek', description: 'Alattomosan kezdődő, elhúzódó tünetek: hőemelkedés vagy láz (főleg délután), profúz éjszakai izzadás, és jelentős, nem szándékos fogyás.', severity: 'moderate' },
                { name: 'Egyéb', description: 'Fáradékonyság, étvágytalanság, mellkasi fájdalom.', severity: 'mild' }
              ],
              physical_exam: [
                'Cachexia',
                'Felső lebenyek felett crepitatio/bronchialis légzés',
                'Csökkent légzési hang caverna felett',
                'Pleuralis dörzszörej',
                'Lymphadenopathia (miliaris/extrapulmonalis)'
              ],
              complications: ['Miliaris TB', 'TB meningitis', 'Pleuritis', 'Pericarditis', 'Spontán pneumothorax', 'Haemoptoe', 'Amyloidosis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normocytás anémia, lymphopenia', interpretation: 'Krónikus betegség jelei' },
                { test: 'CRP/We', finding: 'Mérsékelten emelkedett', interpretation: 'Nem specifikus' },
                { test: 'Máj/vesefunkció', finding: 'Baseline kezelés előtt', interpretation: 'Gyógyszertoxicitás monitorozás' },
                { test: 'HIV szerológia', finding: 'Kötelező', interpretation: 'Koinfekció kizárása' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Felső lebeny infiltrátum, caverna, fibrotikus hegesedés, meszesedés', significance: 'Screening és követés' },
                { modality: 'CT mellkas', finding: 'Tree-in-bud jel, cavernák, miliaris pattern', significance: 'Érzékenyebb, extrapulmonalis' }
              ],
              microbiology: [
                { test: 'Köpet Ziehl-Neelsen festés', finding: 'Saválló pálcák (AFB)', significance: 'Gyors, de csak >10^4/mL felett pozitív' },
                { test: 'Köpet/BAL tenyésztés', finding: 'Löwenstein-Jensen/MGIT', significance: 'Gold standard, 2-8 hét' },
                { test: 'GeneXpert MTB/RIF', finding: 'MTB DNS + rifampicin rezisztencia', significance: 'Gyors (<2 óra), érzékeny' },
                { test: 'Tuberculin bőrpróba (Mantoux)', finding: '>10mm induratio', significance: 'Expozíció, nem aktív betegség' },
                { test: 'IGRA (QuantiFERON/T-SPOT)', finding: 'IFN-γ termelés ESAT-6/CFP-10-re', significance: 'BCG nem befolyásolja' }
              ]
            },
            differential: [
              { disease: 'Tüdőcarcinoma', distinguishing: 'Dohányzás, rtg/CT, bronchoscopia, biopszia' },
              { disease: 'Nem-tuberkulotikus mycobacteriosis (NTM)', distinguishing: 'Bronchiectasia, tenyésztés, MAC leggyakoribb' },
              { disease: 'Sarcoidosis', distinguishing: 'Bilateralis hilusi lymphadenopathia, biopszia (nem kazifikáló)' },
              { disease: 'Gombás pneumonia', distinguishing: 'Immunszuppresszió, tenyésztés/antigén' },
              { disease: 'Aktinomikózis', distinguishing: 'Kén granulumok, mellkasfal penetráció' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Izoniazid (INH)', dose: '5 mg/kg (max 300mg) PO', duration: '6 hónap', note: 'Hepatotoxicitás, perifériás neuropathia (B6!)' },
                  { drug: 'Rifampicin (RIF)', dose: '10 mg/kg (max 600mg) PO', duration: '6 hónap', note: 'Gyógyszer interakciók (CYP450)' },
                  { drug: 'Pyrazinamid (PZA)', dose: '25 mg/kg PO', duration: '2 hónap', note: 'Hyperuricaemia, hepatotoxicitás' },
                  { drug: 'Ethambutol (EMB)', dose: '15 mg/kg PO', duration: '2 hónap', note: 'Opticus neuritis' }
                ],
                inpatient: [
                  { drug: 'Ugyanaz + izolálás', dose: 'Légúti izoláció', duration: '2 hét vagy 3 negatív köpet', note: 'Negatív nyomású szoba' }
                ],
                icu: [
                  { drug: 'IV formulációk', dose: 'Ha per os nem tolerálja', duration: 'Egyéni', note: 'MDR-TB: individualizált' }
                ]
              },
              targeted: 'MDR-TB: Bedaquilin, Linezolid, Fluorokinolonok, Aminoglikozidok - szakértői centrum',
              supportive: ['B6-vitamin (neuropathia megelőzés)', 'Táplálás', 'Kontaktkutatás'],
              prevention: ['BCG oltás (újszülöttek)', 'LTBI kezelés (INH 9 hó vagy RIF 4 hó)', 'Kontakt szűrés']
            },
            prognosis: {
              mortality: 'Kezelt: <5%; Kezeletlen: 50%; MDR/XDR: 30-50%',
              prognostic_scores: ['Nincsenek standard score-ok'],
              factors: 'HIV státusz, MDR, adherencia, késői diagnózis'
            },
            references: [
              { text: 'WHO Global Tuberculosis Report 2023', url: 'https://www.who.int/teams/global-tuberculosis-programme/tb-reports/global-tuberculosis-report-2023' },
              { text: 'CDC Tuberculosis (TB) Guidelines', url: 'https://www.cdc.gov/tb/topic/treatment/index.htm' }
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tuberculosis-x-ray-1.jpg',
                caption: 'Jobb felső lebenyi caverna poszt-primer tuberkulózisban.',
                type: 'Röntgen'
              },
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tuberculosis-x-ray-1.jpg',
                caption: 'Mellkas CT "tree-in-bud" mintázattal, ami aktív endobronchialis terjedésre utal.',
                type: 'CT'
              }
            ]
          },
          {
            id: 'legionella',
            name: 'Legionella pneumonia (Legionáriusbetegség)',
            pathogen: { type: 'Baktérium', name: '<i>Legionella pneumophila</i>', gram: 'Gram-negatív (rosszul festődik)', shape: 'pálca, intracelluláris' },
            epidemiology: {
              incidence: 'CAP 2-9%-a, nozokomiális pneumonia akár 30%',
              risk_groups: ['50 év felettiek', 'Dohányosok', 'COPD betegek', 'Immunszupprimáltak', 'Krónikus veseelégtelenség', 'Diabetes'],
              seasonality: 'Nyár-ősz (légkondicionálás)',
              transmission: 'Inhaláció (aeroszol kontaminált vízből: hűtőtornyok, zuhanyok, buborékoztató medencék). NEM terjed emberről emberre!'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a baktériumot tartalmazó aeroszol (pl. zuhany, hűtőtorony, légkondicionáló) belélegzésével történik.',
                'A tüdőbe jutva a Legionellák az alveoláris makrofágokba kerülnek, ahol egy speciális szekréciós rendszer (Dot/Icm) segítségével megakadályozzák a fagoszóma-lizoszóma fúziót.',
                'A baktériumok a makrofágokon belül, egy védett vakuólumban szaporodnak, majd a sejtet elpusztítva újabb sejteket fertőznek meg.',
                'Ez a folyamat súlyos, nekrotizáló tüdőgyulladást és heves gyulladásos választ vált ki.'
              ],
              virulence_factors: ['Dot/Icm szekréciós rendszer', 'Mip (macrophage infectivity potentiator)', 'Flagellum', 'Több mint 300 effektor fehérje']
            },
            clinical: {
              incubation: '2-10 nap (átlag 5-6 nap)',
              onset: 'Prodroma 1-2 nap, majd rapid progresszió',
              symptoms: [
                { name: 'Atípusos pneumonia', description: 'Magas láz, hidegrázás, kezdetben száraz, improduktív köhögés.', severity: 'severe' },
                { name: 'Extrapulmonalis tünetek', description: 'Jellegzetes a multisystemás érintettség: gastrointestinalis (hasmenés, hányinger), neurológiai (fejfájás, zavartság, delírium).', severity: 'moderate' },
                { name: 'Jellegzetes jelek', description: 'Gyakori a relatív bradycardia (magas lázhoz képest alacsony pulzus) és a laborban a hyponatraemia.', severity: 'moderate' }
              ],
              physical_exam: [
                'Magas láz relatív bradycardiával (Faget-jel)',
                'Konszolidációs jelek auscultatiónál',
                'Enyhe hepatomegalia',
                'Cerebelláris jelek lehetségesek'
              ],
              complications: ['Légzési elégtelenség/ARDS', 'Akut veseelégtelenség', 'Rhabdomyolysis', 'Szepszis', 'Endocarditis', 'Encephalopathia']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis (balra tolt)', interpretation: 'Nem specifikus' },
                { test: 'Nátrium', finding: 'Hyponatraemia (<130 mmol/L)', interpretation: 'SIADH - jellegzetes!' },
                { test: 'Máj enzimek', finding: 'Emelkedett AST, ALT, LDH', interpretation: 'Gyakori társulás' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Myositis/rhabdomyolysis' },
                { test: 'CRP/PCT', finding: 'Jelentősen emelkedett', interpretation: 'Súlyos bakteriális fertőzés' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Gyorsan progrediáló infiltrátum, gyakran egyoldali, lobaris', significance: 'Rosszabb mint a klinikai kép' },
                { modality: 'CT mellkas', finding: 'Ground-glass és konszolidáció, pleura folyadék', significance: 'Érzékenyebb' }
              ],
              microbiology: [
                { test: 'Vizelet Legionella antigén', finding: 'L. pneumophila serogroup 1 (70%)', significance: 'Gyors (<15 perc), specifikus >95%' },
                { test: 'Tenyésztés (BCYE agar)', finding: 'Legionella izolálás', significance: 'Gold standard, 3-5 nap' },
                { test: 'PCR', finding: 'Legionella DNS', significance: 'Gyors, minden szerotípust kimutat' },
                { test: 'Szerológia', finding: '4x titeremelkedés', significance: 'Retrospektív diagnózis' }
              ]
            },
            calculators: [
              {
                name: 'CURB-65 Score - Pneumonia súlyosság',
                items: [
                  { label: 'Zavartság (Confusion)', points: 1 },
                  { label: 'Urea > 7 mmol/L', points: 1 },
                  { label: 'Légzésszám ≥ 30/perc', points: 1 },
                  { label: 'Vérnyomás (Szisztolés < 90 vagy Diasztolés ≤ 60 Hgmm)', points: 1 },
                  { label: 'Életkor ≥ 65 év', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 1, text: 'Alacsony rizikó (halálozás <3%). Otthoni kezelés megfontolható.' },
                  { min: 2, max: 2, text: 'Közepes rizikó (halálozás 9%). Kórházi felvétel javasolt.' },
                  { min: 3, max: 5, text: 'Magas rizikó (halálozás 15-40%). Sürgős kórházi/intenzív osztályos kezelés.' }
                ]
              }
            ],
            differential: [
              { disease: 'Pneumococcus pneumonia', distinguishing: 'Produktív köpet, nincs GI/neurológiai tünet, normál Na' },
              { disease: 'Mycoplasma pneumonia', distinguishing: 'Fiatalabbak, lassabb progresszió, hideg agglutinin' },
              { disease: 'Q-láz', distinguishing: 'Állat expozíció, hepatitis dominál' },
              { disease: 'Psittacosis', distinguishing: 'Madár kontaktus, hepatosplenomegalia' },
              { disease: 'Influenza pneumonia', distinguishing: 'Szezonalitás, gyorsteszt, epidemológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '1x500mg PO', duration: '5-7 nap', note: 'Első választás' },
                  { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg IV', duration: '10-14 nap', note: 'Jobb penetráció' },
                  { drug: 'Azithromycin', dose: '1x500mg IV', duration: '10-14 nap', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Levofloxacin + Azithromycin', dose: 'Kombinációban', duration: '14-21 nap', note: 'Súlyos esetben' },
                  { drug: 'Rifampicin hozzáadható', dose: '2x300mg IV/PO', duration: '', note: 'Immunszupprimáltakban' }
                ]
              },
              targeted: 'Fluorokinolonok vagy makrolidok (béta-laktámok hatástalanok!)',
              supportive: ['Folyadékpótlás', 'Elektrolit korrekció', 'Lélegeztetés ARDS esetén'],
              prevention: ['Vízrendszerek karbantartása (>60°C)', 'Hűtőtornyok fertőtlenítése', 'Nozokomiális surveillance']
            },
            prognosis: {
              mortality: 'Összességében 10-15%, immunszupprimáltak 40%',
              prognostic_scores: ['CURB-65', 'PSI'],
              factors: 'Késői diagnózis, nem megfelelő antibiotikum, immunszuppresszió'
            },
            references: [
              { text: 'CDC Legionella (Legionnaires\' Disease and Pontiac Fever)', url: 'https://www.cdc.gov/legionella/clinicians/index.html' }
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Legionella_pneumophila_01.jpg',
                caption: 'Legionella pneumophila elektronmikroszkópos képe.',
                type: 'Mikroszkópia'
              }
            ]
          },
          {
            id: 'mycoplasma',
            name: 'Mycoplasma pneumonia',
            pathogen: { type: 'Baktérium', name: '<i>Mycoplasma pneumoniae</i>', gram: 'Nincs sejtfal', shape: 'pleomorf' },
            epidemiology: {
              incidence: 'CAP 15-20%-a, járványokban 50%',
              risk_groups: ['Iskoláskorú gyermekek', 'Fiatal felnőttek', 'Zárt közösségek (kollégium, laktanya)'],
              seasonality: 'Ősz-tél, de egész évben előfordul',
              transmission: 'Cseppfertőzés (szoros kontaktus)'
            },
            pathomechanism: {
              steps: [
                'A kórokozó a P1 adhezin segítségével szorosan a légúti hámsejtek csillóihoz tapad.',
                'A baktérium által termelt hidrogén-peroxid és a CARDS toxin károsítja a csillókat (ciliostasis), ami a mukociliáris clearance zavarához vezet.',
                'A gyulladásos válasz és a sejtkárosodás okozza az elhúzódó köhögést és a tüdőgyulladást.'
              ],
              virulence_factors: ['P1 adhezin', 'CARDS toxin', 'Hidrogén-peroxid']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Lassú, fokozatos',
              symptoms: [
                { name: 'Atípusos pneumonia', description: 'Fokozatos kezdet, hőemelkedés, fejfájás, rossz közérzet. A vezető tünet a hetekig tartó, száraz, rohamszerű, kínzó köhögés.', severity: 'moderate' },
                { name: '"Walking pneumonia"', description: 'A fizikális lelet (szegényes hallgatózási lelet) gyakran sokkal enyhébb, mint a mellkasröntgenen látható kiterjedt gyulladás.', severity: 'mild' },
                { name: 'Extrapulmonalis tünetek', description: 'Előfordulhatnak kiütések (pl. erythema multiforme), hemolitikus anémia (hideg agglutinin betegség), vagy neurológiai szövődmények.', severity: 'moderate' }
              ],
              physical_exam: [
                'Gyakran szegényes hallgatózási lelet',
                'Esetleg szörtyzörejek, sípolás',
                'Bullosus myringitis (dobhártya hólyagok - ritka de specifikus)',
                'Cervicalis lymphadenopathia'
              ],
              complications: ['Stevens-Johnson szindróma', 'Hemolitikus anémia (hideg agglutinin)', 'Encephalitis', 'Myocarditis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál fvs, esetleg enyhe leukocytosis (<15 000)', interpretation: 'Nem specifikus' },
                { test: 'CRP', finding: 'Mérsékelten emelkedett', interpretation: 'Atípusos jelleg' },
                { test: 'Hideg agglutinin', finding: 'Pozitív (50%)', interpretation: 'Nem specifikus, de jellemző' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Interstitialis rajzolat fokozódás, foltos infiltrátumok', significance: 'Rosszabb mint a klinikum ("Walking pneumonia")' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNS kimutatás (torok/köpet)', significance: 'Gold standard, gyors' },
                { test: 'Szerológia (IgM/IgG)', finding: 'Titeremelkedés', significance: 'Retrospektív, akut fázisban gyakran negatív' }
              ]
            },
            differential: [
              { disease: 'Chlamydia pneumoniae', distinguishing: 'Klinikailag nehéz elkülöníteni, PCR' },
              { disease: 'Vírusos pneumonia', distinguishing: 'Járványtan, PCR' },
              { disease: 'Legionella', distinguishing: 'Súlyosabb, idősebbek, hyponatraemia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Azithromycin', dose: '500mg D1, majd 250mg D2-5', duration: '5 nap', note: 'Első választás' },
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '7-10 nap', note: 'Alternatíva (>8 év)' },
                  { drug: 'Clarithromycin', dose: '2x500mg', duration: '7 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x500-750mg IV/PO', duration: '10-14 nap', note: 'Súlyos esetben' },
                  { drug: 'Moxifloxacin', dose: '1x400mg IV/PO', duration: '10-14 nap', note: 'Alternatíva' }
                ],
                icu: [
                  { drug: 'Makrolid + Béta-laktám', dose: 'Kombináció', duration: '', note: 'Kevert infekció fedezésére' }
                ]
              },
              targeted: 'Makrolidok (rezisztencia növekszik!), Tetraciklinek, Fluorokinolonok',
              supportive: ['Köhögéscsillapítás', 'Lázcsillapítás'],
              prevention: ['Cseppfertőzés elleni védekezés', 'Nincs vakcina']
            },
            prognosis: {
              mortality: 'Nagyon alacsony, általában magától gyógyul',
              prognostic_scores: ['PSI (ritkán szükséges)'],
              factors: 'Extrapulmonalis szövődmények'
            },
            references: [
              { text: 'CDC Mycoplasma pneumoniae Infections', url: 'https://www.cdc.gov/pneumonia/atypical/mycoplasma/hcp/index.html' }
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mycoplasma_pneumoniae.webp',
                caption: 'Mycoplasma pneumoniae-hez társuló radiológiai kép.',
                type: 'Röntgen'
              }
            ]
          },
          {
            id: 'chlamydia_pneumoniae',
            name: 'Chlamydia pneumoniae',
            pathogen: { type: 'Baktérium', name: '<i>Chlamydophila pneumoniae</i>', gram: 'Gram-negatív (intracelluláris)', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'CAP 5-10%-a',
              risk_groups: ['Idősek', 'Krónikus betegek', 'Zárt közösségek'],
              seasonality: 'Egész évben',
              transmission: 'Cseppfertőzés'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a fertőző elemi testek (EB) belélegzésével kezdődik. A sejten belül az EB-k retikuláris testekké (RB) alakulnak, amelyek a szaporodó formák.',
                'A szaporodás után az RB-k visszaalakulnak EB-ké, a sejt szétesik, és az új elemi testek további sejteket fertőznek meg.',
                'Ez a ciklus a légúti hámsejtek károsodásához és gyulladáshoz vezet.'
              ],
              virulence_factors: ['Intracelluláris életmód', 'Endotoxin-szerű anyagok']
            },
            clinical: {
              incubation: '3-4 hét',
              onset: 'Fokozatos',
              symptoms: [
                { name: 'Bifázisos lefolyás', description: 'Gyakran két fázisban zajlik: kezdetben pharyngitis és laryngitis (a rekedtség jellegzetes), majd 1-3 hét múlva alakul ki az atípusos pneumonia.', severity: 'moderate' },
                { name: 'Elhúzódó köhögés', description: 'A tüdőgyulladásra a hetekig, akár hónapokig tartó, száraz, irritatív köhögés a legjellemzőbb.', severity: 'moderate' }
              ],
              physical_exam: [
                'Pharyngitis',
                'Szörtyzörejek',
                'Sinusitis jelei'
              ],
              complications: ['Reaktív arthritis', 'Myocarditis', 'Atherosclerosis (asszociáció)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál', interpretation: 'Nem specifikus' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Kisméretű infiltrátumok', significance: 'Nem specifikus' }
              ],
              microbiology: [
                { test: 'PCR', finding: 'DNS kimutatás', significance: 'Legérzékenyebb' },
                { test: 'Szerológia', finding: 'MIF (microimmunofluorescence)', significance: 'Gold standard szerológia' }
              ]
            },
            differential: [
              { disease: 'Mycoplasma', distinguishing: 'Gyakorlatilag azonos klinikum' },
              { disease: 'Vírusok', distinguishing: 'PCR' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '10-14 nap', note: 'Első választás' },
                  { drug: 'Azithromycin', dose: '500mg D1, 250mg D2-5', duration: '5 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Levofloxacin', dose: '1x750mg', duration: '10-14 nap', note: 'Súlyosabb esetben' }
                ],
                icu: [
                  { drug: 'Levofloxacin', dose: 'IV', duration: '14 nap', note: '' }
                ]
              },
              targeted: 'Tetraciklinek, Makrolidok, Kinolonok',
              supportive: ['Tüneti kezelés'],
              prevention: ['Nincs vakcina']
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['PSI'],
              factors: 'Idős kor, komorbiditás'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chlamydophila_psittaci_FA_stain.jpg',
                caption: 'Chlamydophila/Chlamydia psittaci fluoreszcens festés.',
                type: 'Mikroszkópia'
              }
            ]
          },
          {
            id: 'psittacosis',
            name: 'Ornithosis (Psittacosis)',
            pathogen: { type: 'Baktérium', name: '<i>Chlamydia psittaci</i>', gram: 'Intracelluláris', shape: 'kokkoid' },
            epidemiology: {
              incidence: 'Ritka, foglalkozási betegség',
              risk_groups: ['Madártartók (papagáj, galamb)', 'Állatorvosok', 'Baromfifeldolgozók'],
              seasonality: 'Nincs',
              transmission: 'Madár ürülék porának belégzése'
            },
            pathomechanism: {
              steps: [
                'A fertőzés a madár (főleg papagáj, galamb) kiszáradt ürülékével szennyezett por belélegzésével történik.',
                'A kórokozó a tüdőből a retikuloendoteliális rendszerbe (máj, lép) jut, ahol szaporodik.',
                'A másodlagos virémia során a baktériumok visszajutnak a tüdőbe, ahol atípusos, interstitialis pneumoniát okoznak.'
              ],
              virulence_factors: ['Intracelluláris túlélés']
            },
            clinical: {
              incubation: '5-14 nap',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Tífusz-szerű tünetek', description: 'Hirtelen kezdődő magas láz, hidegrázás, és kínzó, súlyos fejfájás.', severity: 'severe' },
                { name: 'Légúti tünetek', description: 'Száraz, improduktív köhögés. A fizikális lelet gyakran szegényes a röntgenképhez képest.', severity: 'moderate' },
                { name: 'Szisztémás jelek', description: 'Gyakori a hepatosplenomegalia és a relatív bradycardia (Faget-jel).', severity: 'moderate' }
              ],
              physical_exam: [
                'Relatív bradycardia (Faget-jel)',
                'Splenomegalia (10-70%)',
                'Horder-foltok (rózsaszín kiütés - ritka)',
                'Szegényes tüdőlelet'
              ],
              complications: ['Endocarditis', 'Hepatitis', 'Neurológiai tünetek', 'ARDS']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Normál vagy leukopenia', interpretation: 'Nem bakteriális jellegű' },
                { test: 'Májenzimek', finding: 'Emelkedett', interpretation: 'Gyakori' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Atípusos pneumonia, legyezőszerű hilusi infiltrátum', significance: 'Jellegzetes' }
              ],
              microbiology: [
                { test: 'Szerológia', finding: 'MIF, komplementkötés', significance: '4x titeremelkedés' },
                { test: 'PCR', finding: 'Légúti minta', significance: 'Specifikus' }
              ]
            },
            differential: [
              { disease: 'Q-láz', distinguishing: 'Hasonló, de nincs madárkontaktus' },
              { disease: 'Legionella', distinguishing: 'Vízexpozíció' },
              { disease: 'Typhus', distinguishing: 'Utazás, kiütés' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14-21 nap', note: 'Első választás' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg IV', duration: '14-21 nap', note: 'Súlyos esetben' }
                ],
                icu: [
                  { drug: 'Doxycyclin', dose: 'IV', duration: '', note: '' }
                ]
              },
              targeted: 'Tetraciklinek (Doxycyclin), Makrolidok (kevésbé hatékonyak)',
              supportive: ['Lázcsillapítás'],
              prevention: ['Madarak karanténozása', 'Védőfelszerelés', 'Nedves takarítás']
            },
            prognosis: {
              mortality: 'Kezelt <1%, kezeletlen 10-20%',
              prognostic_scores: ['Nincs'],
              factors: 'Késői diagnózis'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chlamydophila_psittaci_FA_stain.jpg',
                caption: 'Psittacosis kórokozója (C. psittaci) fluoreszcens mikroszkópos képen.',
                type: 'Mikroszkópia'
              }
            ]
          },
          {
            id: 'q_fever_resp',
            name: 'Q-láz',
            pathogen: { type: 'Baktérium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negatív (intracelluláris)', shape: 'coccobacillus' },
            epidemiology: {
              incidence: 'Zoonózis, foglalkozási betegség',
              risk_groups: ['Állattenyésztők', 'Vágóhídi dolgozók', 'Állatorvosok'],
              seasonality: 'Tavasz (ellési szezon)',
              transmission: 'Aeroszol (placenta, magzatvíz, tej, ürülék pora)'
            },
            pathomechanism: {
              steps: [
                'A fertőzés rendkívül fertőző állati termékek (placenta, magzatvíz) aeroszoljának belélegzésével történik.',
                'A kórokozó az alveoláris makrofágokba jut, ahol a savas fagoszómákban nemcsak túléli, hanem ott is szaporodik.',
                'A vérárammal szóródva eljut a májba és a csontvelőbe.',
                'A szervezet jellegzetes, "fánk" alakú (doughnut) granulómák képzésével próbálja megfékezni a fertőzést.',
                'A betegség lehet akut vagy krónikus (főleg endocarditis formájában).'
              ],
              virulence_factors: ['Spóraszerű forma (ellenálló)', 'LPS fázis I vagy fázis II variációk']
            },
            clinical: {
              incubation: '2-3 hét',
              onset: 'Hirtelen',
              symptoms: [
                { name: 'Akut Q-láz', description: 'Hirtelen kezdődő, magas lázzal, súlyos, retrobulbáris fejfájással és influenzaszerű tünetekkel jár. Gyakori az atípusos tüdőgyulladás (enyhe köhögés) és a granulomás hepatitis (emelkedett májenzimek).', severity: 'moderate' },
                { name: 'Krónikus Q-láz', description: 'Hónapokkal-évekkel később alakul ki, főleg szívbillentyűhibával vagy immunszuppresszióval rendelkező betegeknél. Leggyakoribb manifesztációja a tenyésztés-negatív endocarditis.', severity: 'severe' }
              ],
              physical_exam: [
                'Hepatomegalia',
                'Splenomegalia',
                'Relatív bradycardia'
              ],
              complications: ['Krónikus Q-láz (Endocarditis)', 'Osteomyelitis', 'Krónikus hepatitis']
            },
            diagnostics: {
              laboratory: [
                { test: 'Májenzimek', finding: 'Emelkedett', interpretation: 'Hepatitis' },
                { test: 'Thrombocytopenia', finding: 'Enyhe', interpretation: 'Gyakori' }
              ],
              imaging: [
                { modality: 'Mellkas rtg', finding: 'Kerekded opacitások, többszörös', significance: 'Pneumonia' },
                { modality: 'Echo', finding: 'Vegetáció', significance: 'Endocarditis (krónikus)' }
              ],
              microbiology: [
                { test: 'Szerológia (IF)', finding: 'Fázis II (akut), Fázis I (krónikus)', significance: 'Diagnosztikus' },
                { test: 'PCR', finding: 'Vérből', significance: 'Korai fázisban' }
              ]
            },
            differential: [
              { disease: 'Brucellosis', distinguishing: 'Hullámzó láz, tejtermék' },
              { disease: 'Influenza', distinguishing: 'Szezonalitás, légúti tünetek dominálnak' },
              { disease: 'Vírusos hepatitis', distinguishing: 'Szerológia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 nap', note: 'Akut Q-láz' }
                ],
                inpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg', duration: '14 nap', note: '' }
                ],
                icu: [
                  { drug: 'Doxycyclin + Hydroxychloroquin', dose: 'Hosszú távú', duration: '18-24 hónap', note: 'Krónikus Q-láz (endocarditis)' }
                ]
              },
              targeted: 'Doxycyclin',
              supportive: ['Lázcsillapítás'],
              prevention: ['Védőfelszerelés ellésnél', 'Tej pasztőrözése', 'Vakcina (Ausztrália)']
            },
            prognosis: {
              mortality: 'Akut <2%, Krónikus (endocarditis) magas kezeletlenül',
              prognostic_scores: ['Nincs'],
              factors: 'Billentyűhiba, immunszuppresszió'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coxiella_burnetii%2C_the_bacteria_that_causes_Q_Fever.jpg',
                caption: 'Coxiella burnetii, a Q-láz kórokozója.',
                type: 'Mikroszkópia'
              }
            ]
          }
        ]
      },
                cardiovascular: {
        name: 'Szív- és érrendszeri fertőzések',
        icon: window.diseaseMetadata.cardiovascular.icon,
        color: window.diseaseMetadata.cardiovascular.color,
        diseases: [
          {
            id: 'endocarditis',
            name: 'Infectiv endocarditis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus, Streptococcus viridans, Enterococcus faecalis, Streptococcus gallolyticus, HACEK csoport, Coxiella burnetti</i>', gram: 'Gram-pozitív / Gram-negatív', shape: 'coccus / pálca' },
            epidemiology: {
              incidence: '3-10/100 000 fő/év (fejlett országokban növekvő tendenciát mutat az idősödő populáció és az invazív kardiológiai beavatkozások miatt)',
              risk_groups: ['Műbillentyűvel rendelkező betegek (TAVI is)', 'Billentyűplasztikán/javításon átesettek', 'Korábbi infectiv endocarditis az anamnézisben', 'Cyanoticus congenitalis szívbetegség vagy javított vitium maradvány sönttel', 'Balkamrai segédeszközzel (LVAD) élők', 'Intravénás droghasználók (IVDU)', 'Krónikus hemodializált és tartós vénás katétert viselő betegek'],
              seasonality: 'Nincs',
              transmission: 'Bakterémia (fogászati beavatkozások, invazív intravasculáris katéterek, bőr- és lágyrészfertőzések, urogenitális/gastrointestinalis beavatkozások)'
            },
            pathomechanism: {
              steps: [
                'Endothelsérülés & Steril trombus: A billentyű endotheljének mechanikai vagy gyulladásos sérülése következtében fibrin és vérlemezke rakódik le, ami nem-bakteriális trombotikus endocarditist (NBTE) hoz létre.',
                'Bakterémia & Adhézió: Egy átmeneti vagy tartós bakterémia során a keringő kórokozók a felszíni adhezinek (MSCRAMM) segítségével hozzátapadnak a steril trombushoz.',
                'Biofilm & Vegetációképződés: A kórokozók elszaporodnak, biofilmet és fibrinből, vérlemezkékből, baktériumokból álló avasculáris vegetációt hoznak létre, amely védve van a host immunválaszától.',
                'Billentyűdestrukció & Szeptikus embólizáció: A vegetáció károsítja a billentyűszövetet (perforáció, chorda-szakadás, tályog-, fistula- vagy pseudoaneurysma-képződés), darabjai pedig szeptikus embóliát okoznak az agyban, lépben, vesében, tüdőben vagy a koronáriákban.'
              ],
              virulence_factors: ['Adhezinek (MSCRAMM - Microbial Surface Components Recognizing Adhesive Matrix Molecules)', 'Biofilm képzés', 'Toxinok és proteolitikus enzimek']
            },
            clinical: {
              incubation: 'Napok (akut S. aureus endocarditis) vagy hetek-hónapok (szubakut streptococcalis/enterococcalis endocarditis)',
              onset: 'Változó (akut fulmináns sepsis és kardiogén shock vagy szubakut ismeretlen eredetű láz [FUO])',
              symptoms: [
                { name: 'Általános szisztémás tünetek', description: 'Hullámzó vagy tartós láz (>90%), hidegrázás, éjszakai izzadás, étvágytalanság, fogyás, krónikus fáradtság.', severity: 'moderate' },
                { name: 'Kardiális tünetek', description: 'Új regurgitációs szívzörej (vagy a meglévő zörej karakterének megváltozása), progrediáló szívelégtelenség tünetei (terhelési/nyugalmi dyspnoe, orthopnoe, tüdőpangás, perifériás ödéma).', severity: 'severe' },
                { name: 'Embóliás szövődmények', description: 'Szeptikus embóliák: ischaemiás stroke vagy intracranialis vérzés (mycoticus aneurysma ruptura), lép- vagy veseinfarktus (bal oldali IE), tüdőembólia és szeptikus tüdőtályogok (jobb oldali IE IV droghasználóknál).', severity: 'severe' },
                { name: 'Immunológiai & Perifériás jelek', description: 'Osler-csomók (fájdalmas, vörös csomók az ujjbegyeken), Janeway-léziók (fájdalmatlan maculák a tenyéren/talpon), Roth-foltok (retina hemorrhagia), köröm alatti szálkavérzések (splinter haemorrhagia), glomerulonephritis (haematuria).', severity: 'moderate' }
              ],
              physical_exam: [
                'Láz, tachycardia, tachypnoe',
                'Új vagy megváltozott holosystolés (mitralis/tricuspidalis) vagy diastolés (aortalis) szívzörej',
                'Szívelégtelenség jelei (S3 galoppritmus, tüdő feletti szörcenterjedés, tágult nyaki vénák)',
                'Splenomegalia',
                'Perifériás stigmák: Janeway-léziók, Osler-csomók, splinter haemorrhagiák, conjunctivalis petechiák'
              ],
              complications: [
                'Súlyos akut szívelégtelenség (akut billentyűelégtelenség vagy obstructio miatt)',
                'Paravalvularis szövődmények (gyűrűtályog, pseudoaneurysma, intracardiális fistula, AV-blokk a ingerületvezetési rendszer érintettsége miatt)',
                'Szeptikus szisztémás embólizáció (akut stroke, léptályog, sponylodiscitis, mycoticus aneurysma)',
                'Akut glomerulonephritis és veseelégtelenség'
              ]
            },
            diagnostics: {
              criteria: [
                { name: 'Major kritériumok (ESC 2023 Módosított Duke Kritériumok)', items: ['1. Pozitív hemokultúra: Típusos kórokozó (S. aureus, E. faecalis, Viridans strep, S. gallolyticus, HACEK) 2 külön vérvételből VAGY Coxiella burnetii I-es fázisú IgG titer >1:800', '2. Pozitív Képalkotó vizsgálat (ESC 2023): Echocardiographia (TTE/TEE) által igazolt vegetáció, tályog, pseudoaneurysma, intracardiális fistula, billentyűperforáció vagy új paravalvularis dehiszcencia VAGY Szív CT-vel igazolt paravalvularis lézió VAGY 18F-FDG PET/CT vagy SPECT/CT által igazolt abnormális patológiás aktivitás műbillentyű körül (>3 hónappal az implantáció után)', '3. Intracardiális lézió közvetlen szövettani/mikrobiológiai igazolása műtéti/autopsziás mintából'] },
                { name: 'Minor kritériumok (ESC 2023)', items: ['Haemodynamikai prediszpozíció (műbillentyű, TAVI, billentyűplasztika, korábbi IE, cyanoticus CHD, LVAD) vagy IV droghasználat', 'Láz >38,0 °C', 'Vaszkuláris jelenségek: arterialis embólia, szeptikus tüdőinfarktus, mycoticus aneurysma, intracranialis vérzés, Janeway-léziók vagy képalkotóval igazolt vaszkuláris léziók', 'Immunológiai jelenségek: Glomerulonephritis, Osler-csomó, Roth-folt, Pozitív Rheumatoid Faktor (RF)', 'Mikrobiológiai bizonyíték: Pozitív hemokultúra, ami nem teljesíti a major kritériumot, vagy aktív fertőzés szerológiai igazolása'] },
                { name: 'Diagnosztikus Besorolás (ESC 2023)', items: ['Definitív IE: 2 Major VAGY 1 Major + 3 Minor VAGY 5 Minor', 'Lefetséges (Possible) IE: 1 Major + 1 Minor VAGY 3 Minor', 'Kizárt IE: Alternatív diagnózis igazolt, vagy tünetek megszűnnek <4 nap AB kezelésre'] }
              ],
              laboratory: [
                { test: 'Hemokultúra (HK)', finding: 'Folyamatos bakterémia igazolása', interpretation: 'KÖTELEZŐ: Minimum 3 szett HK (aerob + anaerob) vétel 30 perces különbséggel az antibiotikum megkezdése előtt!' },
                { test: 'Gyulladásos markerek (CRP, We, PCT)', finding: 'Kifejezetten emelkedett', interpretation: 'Aktivitás és terápiás válasz követése' },
                { test: 'Vérkép & Vese/Májfunkció', finding: 'Normocytás anémia, leukocytosis, emelkedett kreatinin/urea', interpretation: 'Krónikus gyulladás, renalis embolisatio vagy immune-complex glomerulonephritis' }
              ],
              imaging: [
                { modality: 'Echocardiographia (TTE + TEE)', finding: 'Vegetáció, tályog, pseudoaneurysma, billentyűperforáció, műbillentyű dehiszcencia', significance: 'ESC 2023: TTE minden feltételezett esetben kötelező. TEE kötelező műbillentyű, CIED, negatív TTE melletti magas klinikai gyanú vagy szövődmény esetén!' },
                { modality: 'EKG-kapuzott Szív CT / CT Angiographia', finding: 'Paravalvularis terjedés, tályog, pseudoaneurysma, koronária érintettség, embolicus góckutatás', significance: 'ESC 2023 Major Kritérium! Különösen aortabillentyű-endocarditis és paravalvularis szövődmények gyanújában superior a TEE-nél.' },
                { modality: '18F-FDG PET/CT vagy WBC SPECT/CT', finding: 'Fokozott FDG-felvétel a műbillentyű vagy a graft körül, szisztémás embolicus gócok azonosítása', significance: 'ESC 2023 Major Kritérium műbillentyű-endocarditisben (>3 hónappal műtét után). Transzplantált/műanyag graftok gyanújánál elengedhetetlen.' }
              ],
              microbiology: [
                { test: 'Klasszikus Hemokultúra', finding: 'Kórokozó azonosítás és rezisztenciavizsgálat', significance: 'Irányítja a célzott célzott antimikrobiális terápiát' },
                { test: 'HK-negatív IE szerológia & PCR', finding: 'Coxiella burnetii, Bartonella henselae/quintana, Brucella, Tropheryma whipplei, Mycoplasma, Legionella', significance: 'Kultúra-negatív endocarditis esetén kötelező specifikus panel' }
              ]
            },
            differential: [
              { disease: 'Sisztémás Lupus Erythematosus (Libman-Sacks endocarditis)', distinguishing: 'Autoantitestek (ANA, anti-dsDNA, APL), steril nem-bakteriális vegetációk' },
              { disease: 'Maranticus endocarditis (Non-Bacterial Thrombotic Endocarditis - NBTE)', distinguishing: 'Malignus daganathoz vagy hypercoagulabilitáshoz társuló steril trombusok, hemokultúra negatív' },
              { disease: 'Antifoszfolipid szindróma (APS)', distinguishing: 'Artériás/vénás trombózisok, lupus anticoagulans, anti-kardiolipin pozitivitás' },
              { disease: 'Akut Reumás Láz', distinguishing: 'Jones-kritériumok, A-csoportú Streptococcus anamnézis, polyarthritis' }
            ],
            therapy: {
              guidelines: ['ESC 2023 Guidelines for the management of endocarditis (Eur Heart J 2023)'],
              empirical: {
                native_community: {
                  title: 'Empirikus terápia: Natív billentyű vagy Késői műbillentyű (>12 hónap postop)',
                  drugs: [
                    { drug: 'Ampicillin + (Flu)cloxacillin + Gentamicin', dose: '12 g/nap IV (4-6 részre) + 12 g/nap IV (4-6 részre) + 3 mg/kg/nap IV 1x', duration: '4-6 hét (Gentamicin csak 3-5 napig!)', note: 'ESC 2023 IB ajánlás. Gentamicin kizárólag a kezdeti napokban adható a nephrotoxicitás csökkentése érdekében.' },
                    { drug: 'Vancomycin + Ceftriaxon', dose: '30-60 mg/kg/nap IV (2 részre) + 2 g/nap IV 1x', duration: '4-6 hét', note: 'ESC 2023 IB ajánlás. Súlyos penicillin allergia vagy MRSA gyanú esetén.' }
                  ]
                },
                prosthetic_early: {
                  title: 'Empirikus terápia: Korai műbillentyű (<12 hónap postop) vagy Nozokomiális IE',
                  drugs: [
                    { drug: 'Vancomycin + Gentamicin + Rifampicin', dose: '30-60 mg/kg/nap IV + 3 mg/kg/nap IV + 900-1200 mg/nap IV/PO (2-3 részre)', duration: '6 hét (Gentamicin 2 hét, Rifampicin 6 hét)', note: 'ESC 2023 IB ajánlás. A Rifampicint csak 3-5 nappal a Vancomycin/Gentamicin megkezdése után szabad hozzáadni, miután a bakterémia megszűnt (rezisztencia elkerülése!).' }
                  ]
                },
                targeted_staph: {
                  title: 'Célzott terápia: Staphylococcus spp.',
                  drugs: [
                    { drug: 'MSSA (Natív): (Flu)cloxacillin vagy Cefazolin', dose: '12 g/nap IV (4-6 részre) / Cefazolin 6 g/nap IV (3 részre)', duration: '4-6 hét', note: 'ESC 2023 IB ajánlás. Non-anaphylaxiás penicillin allergia esetén Cefazolin választandó.' },
                    { drug: 'MRSA (Natív): Vancomycin vagy Daptomycin', dose: 'Vancomycin 30-60 mg/kg/nap IV / Daptomycin 10 mg/kg/nap IV 1x', duration: '4-6 hét', note: 'ESC 2023 IB ajánlás. Daptomycin magas dózisban (10 mg/kg) kiváló alternatíva.' },
                    { drug: 'Műbillentyű (PVE Staph): (Flu)cloxacillin/Vancomycin + Rifampicin + Gentamicin', dose: 'Kombinált terápia', duration: 'Rifampicin 6 hét, Gentamicin 2 hét', note: 'ESC 2023 IB ajánlás.' }
                  ]
                },
                targeted_strep: {
                  title: 'Célzott terápia: Oralis / Enteralis Streptococcusok',
                  drugs: [
                    { drug: 'Penicillin G / Amoxicillin / Ceftriaxon', dose: 'Penicillin 12-24 MNE/nap IV / Amoxicillin 100-200 mg/kg/nap IV / Ceftriaxon 2 g/nap IV 1x', duration: '4 hét (Natív) / 6 hét (PVE)', note: 'ESC 2023 IB ajánlás. Penicillin-érzékeny törzsekre (MIC ≤0.125 mg/L).' },
                    { drug: 'Rövidített 2 hetes kombináció (Natív, nem komplikált)', dose: 'Ceftriaxon 2g/nap IV + Gentamicin 3mg/kg/nap IV 1x', duration: '2 hét', note: 'ESC 2023 IB ajánlás. Csak normál vesefunkciójú, nem-komplikált natív aortalis/mitralis IE-ben.' }
                  ]
                },
                targeted_entero: {
                  title: 'Célzott terápia: Enterococcus faecalis',
                  drugs: [
                    { drug: 'Amoxicillin + Ceftriaxon (Kettős Béta-laktám)', dose: '200 mg/kg/nap IV (4-6 részre) + 4 g/nap IV (2 részre bölünve: 2x2g!)', duration: '6 hét', note: 'ESC 2023 IB PREFERÁLT terápia! Szinergista hatás aminoglikozid nélkül, szignifikánsan kisebb nephrotoxicitással.' },
                    { drug: 'Ampicillin + Gentamicin', dose: '12 g/nap IV + 3 mg/kg/nap IV', duration: '4-6 hét', note: 'Klasszikus alternatíva (vesefunkció szoros monitorozása mellett).' }
                  ]
                },
                culture_neg: {
                  title: 'Kultúra-negatív endocarditis targeted terápia',
                  drugs: [
                    { drug: 'Coxiella burnetii (Q-láz)', dose: 'Doxycyclin 200mg/nap PO + Hydroxychloroquin 600mg/nap PO', duration: '≥18 hónap', note: 'ESC 2023 IB ajánlás. I-es fázisú IgG titer rendszeres követése.' },
                    { drug: 'Bartonella spp.', dose: 'Doxycyclin 200mg/nap PO (6 hét) + Gentamicin 3mg/kg/nap IV (2 hét)', duration: '6 hét', note: 'ESC 2023 IB ajánlás.' }
                  ]
                }
              },
              targeted: 'ESC 2023 MÉRRFÖLDKŐ (POET trial): Stabil állapotú, bal oldali IE-ben szenvedő betegeknél legalább 10-14 napos sikeres IV antibiotikum terápia után biztonságos az ORÁLIS KETTŐS ANTIBIOTIKUM VÁLTÁS (POET protokoll - IB ajánlás), amennyiben a TEE kizárta a paravalvularis szövődményeket és a beteg kooperatív!',
              supportive: [
                'Multidiszciplináris "Endocarditis Team" (Kardiológus, Szívsebész, Infektológus, Mikrobiológus, Képalkotó specialisták) általi kötelező gondozás (ESC 2023 Class I)',
                'Acut Szívelégtelenség terápia (diuretikumok, vasodilatátorok, inotrop szerek)',
                'Sebészi Indikációk (ESC 2023): 1. Sürgős/Emergency (<24h): Refrakter kardiogén shock vagy tüdőödéma akut severe regurgitáció miatt. 2. Urgens (néhány napon belül): Nem kontrollált infekció (tályog, fistula, perzisztáló bakterémia >5-7 nap AB mellett), nagy vegetáció (>10mm) embolicus eseménnyel OR izolált nagy vegetáció (>15mm).',
                'Antikoagulálás: Újonnan indított antikoaguláció KONTRAINDIKÁLT ischaemiás stroke vagy mycoticus aneurysma esetén a haemorrhagias transzformáció magas kockázata miatt!'
              ],
              prevention: [
                'Antibiotikum profilaxis (Amoxicillin 2g PO/IV vagy Cefalexin 2g / Azithromycin 500mg / Doxycyclin 100mg PO 30-60 perccel beavatkozás előtt - Clindamycin MÁR NEM JAVALLOTT!) KIZÁRÓLAG MAGAS RIZIKÓJÚ BETEGEKNÉL (Műbillentyű/TAVI, Billentyűplasztika, Korábbi IE, Cyanoticus CHD, LVAD) MAGAS RIZIKÓJÚ FOGÁSZATI BEAVATKOZÁSOK (gingiva/periapicalis szövetek manipulációja) ELŐTT (ESC 2023 Class IIa)!',
                'Szigorú szájhigiéné és rendszeres fogászati ellenőrzés (ESC 2023 Class IB)'
              ]
            },
            prognosis: {
              mortality: 'Kórházi mortalitás 15-20%, 1 éves mortalitás 30-40% (különösen magas S. aureus és műbillentyű-endocarditis esetén)',
              prognostic_scores: ['ESC IE Risk Score', 'MELD / APACHE II szepszisben'],
              factors: 'S. aureus kórokozó, idős kor, műbillentyű (PVE), szívelégtelenség jelenléte, stroke, paravalvularis tályog'
            },
            references: [
              '2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023;44(39):3948-4042.',
              'Partial Oral versus Intravenous Antibiotic Treatment of Endocarditis (POET trial). N Engl J Med. 2019;380(5):415-424.'
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Endocarditis_ultrasound.JPG',
                caption: 'Endocarditis vegetáció echokardiográfiás képe a mitralis billentyűn.',
                type: 'Echokardiográfia'
              }
            ]
          },
          {
            id: 'cied',
            name: 'CIED fertőzés (Pacemaker / ICD / CRT fertőzés)',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus, Coagulase-negatív Staphylococcusok (S. epidermidis, S. hominis), Cutibacterium acnes, Gram-negatív pálcák</i>', gram: 'Gram-pozitív / Gram-negatív', shape: 'coccus / pálca' },
            epidemiology: {
              incidence: '1-2% az első implantációt követően, 2-4% ggenerátorcsere vagy revízió után (a CIED beültetések számának növekedésével emelkedik)',
              risk_groups: ['Implantált pacemakerrel, ICD-vel vagy CRT-vel élő betegek', 'Generátorcserén vagy vezeték-revízión átesettek', 'Diabetes mellitus, krónikus veseelégtelenség, immunszuppresszió', 'Szeptikus állapot vagy szisztémás bakterémia jelenléte', 'Antikoaguláns/antiaggregáns terápia melletti pocket haematoma'],
              seasonality: 'Nincs',
              transmission: 'Inokuláció az beültetési/revíziós műtét során, vagy másodlagos hematogén szóródás távoli fertőzési gócból'
            },
            pathomechanism: {
              steps: [
                'Kórokozó megtapadás & Biofilm: A baktériumok a műanyag szubkután pocketben és a transvenosus vezetékek (leads) felszínén adherednak, majd egy védő extracelluláris polimer mátrixot (biofilmet) hoznak létre.',
                'Pocket fertőzés: A szubkután generátortok gyulladása, elhalása, tályogképződése vagy erosiója/eróziós áttörése a bőrön keresztül.',
                'Intravasculáris & Endocardiális terjedés: A fertőzés a vezeték mentén a vena subclavia/cava superior irányába, a jobb pitvarba/kamrába és a tricuspidalis billentyűre terjedhet (intracardiális vezeték-vegetációk és szisztémás bakterémia).',
                'Szeptikus Embólizáció: A jobb szívfélben lévő vezeték-vegetációkból származó szeptikus embólusok tüdőinfarktust, pulmonalis tályogokat és empyemát okoznak.'
              ],
              virulence_factors: ['Biofilm képző képesség (bakteriális adhezinek)', 'Antibiotikum rezisztencia a biofilmen belül']
            },
            clinical: {
              incubation: 'Korai (<1 év postop, főleg S. aureus) vagy Késői (>1 év postop, indolens S. epidermidis / C. acnes)',
              onset: 'Lokális gyulladásos tünetektől a súlyos szisztémás sepsisig',
              symptoms: [
                { name: 'Izolált Pocket fertőzés', description: 'Bőrpír (erythema), melegség, duzzanat, lokalizált fájdalom, ingadozó tályog, serosus vagy gennyes váladékozás, bőr-erosio és a generátor szabaddá válása.', severity: 'moderate' },
                { name: 'Szisztémás CIED fertőzés (Lead / Endocarditis)', description: 'Ismeretlen eredetű láz, hidegrázás, éjszakai izzadás, szepszis, szeptikus tüdőembólia tünetei (mellkasi fájdalom, köhögés, haemoptoe).', severity: 'severe' }
              ],
              physical_exam: [
                'Lokális gyulladás jelei a beültetési pocket felett (erythema, fluctuatio, fistula, exulceratio)',
                'Láz, szisztémás sepsis jelei',
                'Új tricuspidalis regurgitációs szívzörej (ha a billentyű is érintett)',
                'Tüdő feletti szörcenterjedés, pulmonalis embolicus jelek'
              ],
              complications: [
                'Szeptikus pulmonalis embolisatio és pulmonalis tályogok',
                'Infectiv endocarditis (tricuspidalis vagy bal szívféli érintettség)',
                'Sepsis és szeptikus shock',
                'Vena cava superior szindróma / vénás trombózis'
              ]
            },
            diagnostics: {
              criteria: [
                { name: 'EHRA 2024 / ESC 2023 Konszenzus Diagnosztika', items: ['Lokális pocket infekció klinikai jelei (erythema, purulencia, erosio)', 'Pozitív hemokultúrák szisztémás tünetekkel rendelkező betegnél', 'Echocardiographiával (TEE) igazolt intracardiális vezeték-vegetáció', '18F-FDG PET/CT vagy WBC SPECT/CT által igazolt fokozott aktivitás a pocketben vagy a transvenosus vezetékek mentén'] }
              ],
              laboratory: [
                { test: 'Hemokultúra (HK)', finding: 'Pozitív (S. aureus, CoNS, Gram-negatívok)', interpretation: 'Minden feltételezett CIED fertőzöttnél MÁR A POCKET PUNKCIÓ ELŐTT minimum 2-3 szett HK kötelező!' },
                { test: 'Gyulladásos markerek (CRP, PCT)', finding: 'Emelkedett', interpretation: 'Szisztémás érintettség és terápiás válasz követése' }
              ],
              imaging: [
                { modality: 'Transthoracalis & Transesophagealis Echo (TTE + TEE)', finding: 'Vezeték-vegetációk, tricuspidalis billentyű érintettség, jobb pitvari/kamrai tályog', significance: 'EHRA 2024 Class I: TEE kötelező minden szisztémás tünetekkel bíró vagy HK-pozitív CIED betegnél!' },
                { modality: '18F-FDG PET/CT vagy WBC SPECT/CT', finding: 'Patológiás FDG-felvétel a generátor pocketben vagy a vezetékek mentén', significance: 'EHRA 2024 Class I: Kulcsfontosságú bizonytalan esetekben, zsebfájdalom vagy rejtett sepsis hátterének tisztázására.' },
                { modality: 'Mellkas CT / CTA', finding: 'Szeptikus tüdőembóliák, pulmonalis tályogok, vena cava superior trombózis', significance: 'Szeptikus szóródás igazolása' }
              ],
              microbiology: [
                { test: 'Eltávolított CIED generátor & Vezetékvég kultúra', finding: 'Kórokozó és rezisztenciaprofil', significance: 'Szonikálás (sonication) után végzett tenyésztés jelentősen növeli a diagnosztikus szenzitivitást' }
              ]
            },
            differential: [
              { disease: 'Asepticus postoperatív szövődmény / Haematoma', distinguishing: 'Nincs láz, hemokultúrák negatívak, PET-CT negatív, steril punctatum' },
              { disease: 'Superficialis sebfertőzés (Bőr/Lágyrész)', distinguishing: 'A fertőzés nem terjed a szubkután fascia és a generátortok alá (PET-CT-vel jól elkülöníthető)' }
            ],
            therapy: {
              guidelines: ['EHRA 2024 International Consensus Document on CIED Infection', 'ESC 2023 Guidelines for the management of endocarditis'],
              empirical: {
                title: 'Empirikus terápia szisztémás / gyanított CIED fertőzésben',
                drugs: [
                  { drug: 'Vancomycin OR Daptomycin (+ Ceftazidim/Cefepim ha Gram-negatív gyanú áll fenn)', dose: 'Vancomycin 30-60 mg/kg/nap IV OR Daptomycin 9-10 mg/kg/nap IV 1x', duration: 'Eszköz eltávolításig, majd tenyésztés alapján targeted', note: 'EHRA 2024 Class I ajánlás: Daptomycin magas dózisban (9-10 mg/kg/nap) kiemelten hatékony a staphylococcalis biofilm ellen.' }
                ]
              },
              targeted: 'EHRA 2024 & ESC 2023 ABSZOLÚT ALAPELV (Class I): Igazolt CIED fertőzés esetén A TELJES CIED RENDSZER (generátor ÉS MINDEN transvenosus/epicardialis vezeték) TELJES KÖRŰ ELTÁVOLÍTÁSA KÖTELEZŐ! Kizárólag gyógyszeres konzervatív kezelés ELFOGADHATATLAN és magas mortalitással jár.',
              supportive: [
                'Percutan transvenosus lead extraction (TLE) szakértői szívsebészeti/electrophysiologiai centrumban (EHRA 2024 Class I)',
                'Reimplantáció időzítése (EHRA 2024): Késleltetett új beültetés a kontralaterális oldalra! Izolált pocket fertőzés esetén min. 72 óra negatív HK után; szisztémás/endocardiális érintettség esetén min. 2 hét IV AB kezelés és negatív HK után!',
                'Indokoltság felülvizsgálata: A betegek 15-20%-ában az eltávolítás után az eszköz re-implantációja egyáltalán nem szükséges!'
              ],
              prevention: ['Asepticus műtéti technika', 'Preoperatív szisztémás antibiotikum profilaxis (Cefazolin 2g IV 30-60 perccel a metszés előtt)', 'Antibiotikum-elúciós háló (TYRX envelope) alkalmazása magas rizikójú generátorcseréknél (EHRA 2024 Class IIa)']
            },
            prognosis: {
              mortality: 'Megfelelő eszköz-eltávolítással 1 éves mortalitás ~10%; eszköz-eltávolítás nélkül a mortalitás >50%!',
              prognostic_scores: ['EHRA CIED Infection Risk Score'],
              factors: 'S. aureus kórokozó, halasztott eszköz-eltávolítás, szisztémás endocarditis, idős kor, veseelégtelenség'
            },
            references: [
              'EHRA international consensus document on prevention, diagnosis, and management of cardiac implantable electronic device infections. Europace. 2024;26(2):euae025.',
              '2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023;44(39):3948-4042.'
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pacemaker_implantation.jpg',
                caption: 'Pacemaker generátor és transvenosus vezetékek elhelyezkedése.',
                type: 'Képalkotás'
              }
            ]
          },
          {
            id: 'myocarditis',
            name: 'Myocarditis (Akut szívizomfehérje-gyulladás)',
            pathogen: { type: 'Vírus / Autoimmun / Toxikus', name: '<i>Parvovirus B19, Human Herpesvirus 6 (HHV-6), Coxsackie B vírus, Adenovirus, SARS-CoV-2, Influenza, Corynebacterium diphtheriae, Borrelia burgdorferi</i>', gram: 'RNS / DNS vírusok; baktériumok', shape: 'változó' },
            epidemiology: {
              incidence: '10-22/100 000 fő/év (fiatal felnőttek hirtelen szívhalálának 10-20%-áért felelős)',
              risk_groups: ['Fiatal férfiak (<40 év)', 'Légúti vagy gastrointestinalis vírusfertőzésen frissen átesettek', 'Autoimmun betegségben szenvedők (SLE, Sarcoidosis)', 'Immunszuppresszív / Immune Checkpoint Inhibitor (ICI) daganatellenes terápiában részesülők'],
              seasonality: 'Szezonális víruscsúcsok (Enterovírusok nyár-ősz, Influenza tél)',
              transmission: 'Cseppfertőzés, feko-orális, vektor közvetítette (Borrelia)'
            },
            pathomechanism: {
              steps: [
                '1. Fázis - Akut Virális Bejutás & Direkt Nekrózis: A vírus a specifikus receptorokhoz (pl. CAR - Coxsackie-Adenovirus Receptor) kötődve bejut a szívizomsejtekbe, ahol replikációja során közvetlen cytolysist és myocyta nekrózist okoz.',
                '2. Fázis - Immunmediált Gyulladás & Molekuláris Mimikri: A felszabaduló szívizom-antigének aktiválják a T-lymphocytákat és B-sejteket. Autoantitestek termelődnek a szívizom fehérjéi ellen (molekuláris mimikri), ami kiterjedt immunmediált gyulladást, interstitialis ödémát és mikrovaszkuláris dysfunkciót eredményez.',
                '3. Fázis - Remodeling & Dilatatív Cardiomyopathia (DCM): Ha a gyulladásos folyamat perzisztál, kiterjedt szövetszaporulat és kollagén-hegesedés (fibrózis) alakul ki, ami a kamrák tágulatához, LVEF-csökkenéshez és krónikus Dilatatív Cardiomyopathiához (DCM) vezet.'
              ],
              virulence_factors: ['Proteáz 2A (dystrophin hasítás a szívizomsejtekben)', 'Receptor-mediált endocytosis', 'Szuperantigének és immun-evázió']
            },
            clinical: {
              incubation: '1-2 héttel a megelőző virális prodroma után',
              onset: 'Változó: Aszimptomatikus lefolyástól az akut STEMI-szerű képen át a fulmináns kardiogén shockig',
              symptoms: [
                { name: 'Virális prodroma', description: 'Néhány nappal-héttel korábban zajlott lázas, felsőlégúti (köhögés, torokfájás) vagy gastrointestinalis (hasmenés, hányinger) epizód.', severity: 'mild' },
                { name: 'Mellkasi fájdalom (Myopericarditis)', description: 'Atípusos vagy acut STEMI-t utánzó szúró, nyomó jellegű mellkasi fájdalom, amely gyakran perikardiális komponenssel bír.', severity: 'moderate' },
                { name: 'Akut Szívelégtelenség tünetei', description: 'Fokozódó terhelési vagy nyugalmi dyspnoe, orthopnoe, fáradékonyság, lábszárödéma, súlyos esetben kardiogén shock.', severity: 'severe' },
                { name: 'Palpitáció & Ritmuszavarok', description: 'Szívdobogásérzés, szédülés, syncope (kamrai extrasystolék, kamrai tachycardia, AV-blokk, hirtelen szívhalál veszélye).', severity: 'severe' }
              ],
              physical_exam: [
                'Lázhoz képest aránytalan tachycardia (sinus tachycardia)',
                'S3 / S4 galoppritmus, halk szívhangok',
                'Szívelégtelenség jelei (tüdő feletti pangásos szörcenterjedés, tágult nyaki vénák, hepatomegaly, ödéma)',
                'Pericardialis dörzszörej (myopericarditis társulásakor)',
                'Perifériás hypoperfúzió jelei (hideg végtagok, oligo-anuria fulmináns formában)'
              ],
              complications: [
                'Fulmináns myocarditis és akut kardiogén shock',
                'Dilatatív Cardiomyopathia (DCM) kialakulása (az esetek 20-30%-ában)',
                'Malignus kamrai ritmuszavarok (VT / VF) és hirtelen szívhalál',
                'Súlyos ingervezetési zavarok (komplett AV-blokk - főleg óriássejtes myocarditisben és Borreliosisban)',
                'Intracardiális fali trombus képződés és szisztémás embolicus stroke'
              ]
            },
            diagnostics: {
              criteria: [
                { name: 'ESC 2023 Cardiomyopathy Guidelines Kritériumrendszer', items: ['Gyanított Myocarditis: ≥1 Klinikai prezentáció (mellkasi fájdalom, akut dyspnoe, aritmia/syncope) + ≥1 Diagnosztikus eltérés (EKG, emelkedett Troponin, Képalkotó fali mozgászavar / CMR pozitív)', 'Definitív Myocarditis: Endomyocardialis Biopsziával (EMB) igazolt szövettani gyulladás (Dallas kritériumok) vagy CMR Lake Louise kritériumok'] }
              ],
              laboratory: [
                { test: 'High-sensitivity Szív Troponin (hs-cTnI / hs-cTnT)', finding: 'Kifejezetten emelkedett (szívizom nekrózis)', interpretation: 'ESC 2023: Rendkívül érzékeny marker; hiánya szinte kizárja az akut szívizom-károsodást!' },
                { test: 'NT-proBNP / BNP', finding: 'Jelentősen emelkedett', interpretation: 'Kamrai fali feszülés és szívelégtelenség mértékének, prognózisának jelzője' },
                { test: 'Gyulladásos paraméterek (CRP, We, PCT)', finding: 'Emelkedett', interpretation: 'Szisztémás gyulladás jelenléte' }
              ],
              imaging: [
                { modality: 'EKG (12-elvezetéses)', finding: 'Sinus tachycardia, ST-T eltérések (ST-eleváció vagy depresszió), T-hullám inverziók, AV-blokk, QRS szélesedés, kamrai extrasystolék', significance: 'Prognosztikus: QRS szélesedés és AV-blokk súlyos lefolyást jelez' },
                { modality: 'Echocardiographia (TTE)', finding: 'Globális vagy regionális kamrai fali mozgászavar, LVEF csökkenés, fokozott fali vastagság (ödéma miatt), pericardialis folyadék', significance: 'ESC 2023 Class I: Elsővonalbeli vizsgálat az ACS és egyéb szívbetegségek kizárására' },
                { modality: 'Szív MRI (Cardiovascular Magnetic Resonance - CMR)', finding: 'Frissített Lake Louise Kritériumok (2018/2023): T2-mapping/T2-Weighted kép (myocardialis ödéma) + T1-mapping/ECV/LGE (Late Gadolinium Enhancement - myocyta nekrózis/fibrózis)', significance: 'ESC 2023 GOLD STANDARD NON-INVAZÍV DIAGNOSZTIKA! Szükséges az akut gyulladás és hegesedés elkülönítésére.' },
                { modality: 'Koronárográfia (Invasive Coronary Angiography)', finding: 'Ép, ép lumenű koronáriák (szűkület hiánya)', significance: 'KÖTELEZŐ Akut Koronária Szindróma (ACS / STEMI) kizárására magas rizikójú vagy idős betegeknél!' }
              ],
              microbiology: [
                { test: 'Endomyocardialis Biopszia (EMB) & Vírus PCR', finding: 'Hisztológia (lymphocytás, óriássejtes, eosinophil infiltrátum) + RNS/DNS vírus PCR', significance: 'ESC 2023 GOLD STANDARD DIAGNOSZTIKA! Kötelező indikációk: Fulmináns kardiogén shock, kezelésre nem reagáló progrediáló szívelégtelenség, AV-blokk/kamrai tachycardia, vagy felmerülő specifikus (óriássejtes, eosinophil, autoimmun, ICI) myocarditis gyanúja!' },
                { test: 'Rutin Vírus Szerológia', finding: 'Szerológia (IgG/IgM)', significance: 'ESC 2023 Class III: Rutinszerűen NEM JAVALLOTT az alacsony diagnosztikus érték miatt (kivéve Hepatitis C, HIV, Borrelia, Lyme szerológia)!' }
              ]
            },
            differential: [
              { disease: 'Akut Koronária Szindróma (ACS / STEMI / NSTEMI)', distinguishing: 'Koronárográfián coronaria occlusio/stenosis igazolható; CMR-en az LGE ischaemiás (subendocardialis/transmuralis) mintázatú' },
              { disease: 'Takotsubo Cardiomyopathia (Stressz-indukált)', distinguishing: 'Jellegzetes csúcsi (apicalis) akinesis / ballooning coronaria stenosis nélkül, CMR-en hiányzik a klasszikus LGE nekrózis' },
              { disease: 'Akut Pericarditis', distinguishing: 'Troponin normális vagy csak minimálisan emelkedett, nincs regionalis fali mozgászavar, CMR-en nincs szívizom-ödéma/LGE' }
            ],
            therapy: {
              guidelines: ['2023 ESC Guidelines for the management of cardiomyopathies', 'ESC Working Group on Myocardial and Pericardial Diseases Consensus Statement'],
              empirical: {
                outpatient: [
                  { drug: 'Szigorú Fizikai Kímélet & Sporttilalom', dose: 'Aktivitási korlátozás', duration: '3-6 hónap', note: 'ESC 2023 Class I AJÁNLÁS: A sportolás és a nehéz fizikai terhelés szigorúan TILTOTT az akut fázisban és a CMR/troponin normalizálódásáig, mert a fizikai terhelés fokozza a virális replikációt és a halálos ritmuszavarok kockázatát!' },
                  { drug: 'NSAID (pl. Ibuprofen)', dose: '200-400 mg PO szükség esetén', duration: 'Tüneti', note: 'Kizárólag myopericarditises mellkasi fájdalomra adható, amennyben az LVEF teljesen megtartott! Csökkent LVEF esetén NSAID KONTRAINDIKÁLT.' }
                ],
                inpatient: [
                  { drug: 'Szívelégtelenség Terápia (GDMT - Guideline Directed Medical Therapy)', dose: 'ACEi / ARB / ARNI + Béta-blokkoló + MRA (Spironolacton) + SGLT2-inhibitor (Dapagliflozin/Empagliflozin)', duration: 'Acut fázistól krónikusan', note: 'ESC 2023 Class I ajánlás csökkent LVEF esetén.' },
                  { drug: 'Antiarrhythmiás terápia', dose: 'Amiodaron', duration: 'Szükség szerint', note: 'Súlyos kamrai ritmuszavarok esetén választandó szer.' }
                ],
                icu: [
                  { drug: 'Mechanikus Keringéstámogatás (MCS)', dose: 'VA-ECMO (Veno-Arterial Extracorporeal Membrane Oxygenation) / Impella', duration: 'Kritikus fázisban', note: 'ESC 2023 Class I: Fulmináns myocarditis és kardiogén shock esetén korai híd a felépüléshez (bridge to recovery) vagy transzplantációhoz!' }
                ]
              },
              targeted: 'ESC 2023 ABSZOLÚT ALAPELV: Immunszuppresszív terápia (Nagy dózisú szteroid + Azathioprin / Cyclosporin) KIZÁRÓLAG EMB-vel igazolt, VIRUS-PCR NEGATÍV (aktív virális replikációtól mentes) autoimmun myocarditisben, Óriássejtes myocarditisben (Giant Cell Myocarditis), Eosinophil myocarditisben, Cardiac Sarcoidosisban és Immune Checkpoint Inhibitor (ICI) myocarditisben engedélyezett! Aktív virális replikáció esetén az immunszuppresszió szigorúan KONTRAINDIKÁLT!',
              supportive: [
                'Folyamatos EKG monitorozás a korai szakaszban a malignus kamrai ritmuszavarok és AV-blokk felismerésére',
                'ICD implantáció mérlegelése: Akut fázisban KONTRAINDIKÁLT (ideiglenes hordható mellény/Wearable Cardioverter Defibrillator adható); ICD beültetés csak a gyulladás teljes lezajlása után (>3-6 hónap) indokolt, ha az LVEF GDMT ellenére ≤35% marad (ESC 2023).'
              ],
              prevention: [
                'Védőoltások (Influenza, COVID-19, Pneumococcus, Kanyaró)',
                'Acut virális fertőzések alatt a fizikai terhelés kerülése'
              ]
            },
            prognosis: {
              mortality: 'Enyhe esetekben spontán gyógyulás (>50%). Fulmináns formában vagy Óriássejtes myocarditisben a korai mortalitás >40% MCS nélkül. A túlélők 20-30%-ánál krónikus DCM alakul ki.',
              prognostic_scores: ['CMR LGE extent score', 'New York Heart Association (NYHA) stádium'],
              factors: 'Kezdeti LVEF, QRS szélesség EKG-n, szövettani típus (Óriássejtes = legrosszabb), CMR LGE jelenléte és kiterjedése'
            },
            references: [
              '2023 ESC Guidelines for the management of cardiomyopathies. Eur Heart J. 2023;44(37):3503-3626.',
              'Current state of knowledge on aetiology, diagnosis, management, and therapy of myocarditis: a position statement of the ESC Working Group. Eur Heart J. 2013;34(33):2636-2648.'
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Histopathology_of_myocarditis_with_myocyte_necrosis.jpg',
                caption: 'Myocarditis szövettani képe limfocytás infiltrációval és myocyta nekrózissal.',
                type: 'Hisztológia'
              }
            ]
          },
          {
            id: 'pericarditis',
            name: 'Akut pericarditis (Szívburokgyulladás)',
            pathogen: { type: 'Vírus / Idiopathiás / Autoimmun', name: '<i>Coxsackie B, Echovirus, Adenovirus, EBV, CMV, Parvovirus B19, SARS-CoV-2, Mycobacterium tuberculosis</i>', gram: 'Vírusok; M. tuberculosis', shape: '-' },
            epidemiology: {
              incidence: 'A mellkasi fájdalommal sürgősségi osztályra érkező betegek 0.1-0.2%-a, kardiológiai osztályos felvételek 5%-a',
              risk_groups: ['Fiatal és középkorú férfiak (20-50 év)', 'Post-cardiotomia / Post-myocardialis infarktus szindróma (Dressler-szindróma)', 'Autoimmun és szisztémás gyulladásos betegségben szenvedők (SLE, RA, Vasculitis)', 'Urémiás és daganatos betegek'],
              seasonality: 'Szezonális virális halmozódás (tavasz/ősz)',
              transmission: 'Cseppfertőzés (virális etiologia esetén)'
            },
            pathomechanism: {
              steps: [
                'Pericardialis Gyulladás & Fibrinlerakódás: A szívburok parietalis és visceralis lemezének gyulladása következtében a lemezek hyperaemiássá válnak, és fibrinrich exsudatum válik ki (pericarditis sicca - száraz szívburokgyulladás).',
                'Dörzssörej & Fájdalom: A fali és fali szívburoklemezek egymáson való elmozdulása a jellegzetes systolo-diastolés pericardialis dörzszörejt és a nervus phrenicus irritációja miatt fellépő pozicionális mellkasi fájdalmat váltja ki.',
                'Pericardialis Effúzió (Folyadékgyülem): A gyulladásos exsudatio miatt folyadék halmozódhat fel a pericardialis térben. Ha a folyadék felhalmozódása gyors vagy meghaladja a pericardium compliance-kapacitását (>150-500 ml), az megnöveli az intrapericardialis nyomást.',
                'Pericardialis Tamponád: A magas intrapericardialis nyomás meggátolja a kamrák diastolés telődését (diastolés collapse), ami a perctérfogat drámai zuhanásához, Beck-triászhoz és kardiogén shockhoz vezet.'
              ],
              virulence_factors: ['Virális immun-mediált gyulladás', 'Bakteriális/Tuberculoticus suppuratio']
            },
            clinical: {
              incubation: 'Gyakran 1-2 héttel a virális prodroma után',
              onset: 'Hirtelen fellépő, éles mellkasi fájdalom',
              symptoms: [
                { name: 'Tipikus Mellkasi Fájdalom', description: 'Éles, szúró, retrosternalis/praecordialis fájdalom, amely belégzésre (pleuritikus), köhögésre és hanyatt fekvő helyzetben fokozódik, míg előre dőlve és ülve kifejezetten enyhül (pathognomicus!). A fájdalom a trapezius izom szélére sugározhat (n. phrenicus irritáció).', severity: 'severe' },
                { name: 'Kisérő általános tünetek', description: 'Alacsony láz, hidegrázás, rossz közérzet, myalgia, dyspnoe (a mély belégzési fájdalom miatti felületes légzés következtében).', severity: 'mild' }
              ],
              physical_exam: [
                'Pericardialis dörzszörej (Pathognomicus! Magas frekvenciájú, kaparó/recsegő hang a bal szegycsontszél mellett, ülő/előredőlt helyzetben, kilégzéskor hallható legjobban; 1-, 2- vagy 3-fázisú)',
                'Halk, tompa szívhangok (jelentős pericardialis effúzió esetén)',
                'Beck-triász (AKUT PERICARDIALIS TAMPONÁD ESETÉN): 1. Hypotonia (alacsony vérnyomás), 2. Halk szívhangok, 3. Tágult nyaki vénák (felemelt jugularis vénás nyomás)',
                'Pulsus paradoxus (a szisztolés vérnyomás >10 Hgmm-es esése belégzés alatt tamponádnál)'
              ],
              complications: [
                'Akut Pericardialis Tamponád (életveszélyes sürgősségi kórkép)',
                'Recidív (Visszatérő) Pericarditis (az esetek 15-30%-ában alakul ki Colchicin hiányában)',
                'Konstriktív Pericarditis (a szívburok heges, meszes páncéllá alakulása – purulens és TBC-s formákban a leggyakoribb)',
                'Myopericarditis (a szívizomzat egyidejű érintettsége troponin-emelkedéssel)'
              ]
            },
            diagnostics: {
              criteria: [
                { name: 'ESC Diagnosztikus Kritériumok (Legalább 2 jelenléte szükséges a 4-ből)', items: ['1. Pericarditicus mellkasi fájdalom (éles, pozicionális, előredőlve enyhülő)', '2. Pericardialis dörzszörej', '3. Új diffúz konkáv ST-eleváció vagy PR-depresszió az EKG-n', '4. Új vagy fokozódó pericardialis folyadékgyülem (effúzió) Echocardiographiával/CT-vel/CMR-rel igazolva', 'Kiegészítő támogató lelet: Emelkedett gyulladásos paraméterek (CRP, We, Leukocytosis)'] }
              ],
              laboratory: [
                { test: 'C-Reaktív Protein (CRP)', finding: 'Kifejezetten emelkedett (>90%-ban)', interpretation: 'ESC Class I: Kötelező a diagnózisban, a terápia hatékonyságának követésében és a leépítés időzítésében!' },
                { test: 'Szív Troponin (hs-cTn)', finding: 'Normális vagy enyhén emelkedett', interpretation: 'Ha kifejezetten emelkedett, Myopericarditis diagnózisa áll fenn (nem rontja a prognózist)' },
                { test: 'Vérkép & Vese/Májfunkció', finding: 'Leukocytosis, urémia kizárása', interpretation: 'Etiológia tisztázása' }
              ],
              imaging: [
                { modality: 'EKG (12-elvezetéses)', finding: 'Stádium I: Diffúz, konkáv (nyeregszerű) ST-eleváció szinte minden elvezetésben (kivéve aVR és V1) + PR-depresszió (aVR-ben PR-eleváció!); Stádium II: ST normalizálódik; Stádium III: Diffúz T-hullám inverziók; Stádium IV: EKG normalizálódása', significance: 'Diagnosztikus értékű' },
                { modality: 'Transthoracalis Echocardiographia (TTE)', finding: 'Pericardialis folyadékgyülem mérése, diastolés jobb kamrai/pitvari collapse (tamponád jele!), vena cava inferior tágulat', significance: 'ESC Class I: Elsővonalbeli kötelező vizsgálat a tamponád kizárására!' },
                { modality: 'Szív MRI (CMR)', finding: 'Pericardialis megvastagodás (>3mm), pericardialis hiperémia/ödéma T2-képeken és fali Late Gadolinium Enhancement (LGE)', significance: 'Arany standard atípusos vagy bizonytalan esetekben, valamint a gyulladás aktivitásának igazolására' }
              ],
              microbiology: [
                { test: 'Pericardiocentesis & Folyadék-analízis', finding: 'Tenyésztés, PCR, citológia', significance: 'Kizárólag pericardialis tamponád, gyanított purulens/bakteriális, tuberculoticus vagy malignus pericarditis esetén indikált!' }
              ]
            },
            differential: [
              { disease: 'Akut Myocardialis Infarktus (STEMI)', distinguishing: 'A STEMI-nél az ST-eleváció konvex (dóm-szerű), anatómiai érterülethez kötött (lokalizált), és reciprok ST-depresszió látható az ellenkező elvezetésekben' },
              { disease: 'Tüdőembólia (PTE)', distinguishing: 'Dyspnoe dominál, hiányzik az EKG nyeregszerű ST-elevációja, CT angiographia igazolja a thromburst' },
              { disease: 'Aorta Dissectio', distinguishing: 'Hirtelen fellépő, hátba sugárzó tépő fájdalom, aszimmetrikus pulzus/vérnyomás, nincsenek gyulladásos jelek' }
            ],
            therapy: {
              guidelines: ['ESC Guidelines for the diagnosis and management of pericardial diseases'],
              empirical: {
                outpatient: [
                  { drug: 'Aspirin OR Ibuprofen (Első vonalbeli Gyulladáscsökkentő)', dose: 'Aspirin 750-1000 mg PO 8 óránként (3x1g/nap) OR Ibuprofen 600 mg PO 8 óránként (3x600mg/nap)', duration: '1-2 hétig a tünetek és a CRP normalizálódásáig, majd heti leépítés (tapering)', note: 'ESC Class I ajánlás. Poszt-infarktusos pericarditisben kizárólag Aspirin választandó!' },
                  { drug: '+ Colchicin (Kötelező Kombinációs Terápia)', dose: '0.5 mg PO naponta 1x (<70 kg testsúly) OR 0.5 mg PO naponta 2x (≥70 kg testsúly)', duration: '3 HÓNAPIG Folyamatosan', note: 'ESC Class I AJÁNLÁS: A Colchicin hozzáadása az NSAID/Aspirin terápiához felére csökkenti a recidíva kockázatát és gyorsítja a remissziót!' },
                  { drug: 'Protonpumpa-gátló (PPI)', dose: 'Omeprazol 20 mg vagy Pantoprazol 40 mg PO naponta 1x', duration: 'Az NSAID terápia teljes ideje alatt', note: 'Gyomorvédelem' }
                ],
                inpatient: [
                  { drug: 'Kórházi Felvétel Indikációi (Magas Rizikójú Pericarditis)', dose: 'Monitorozás', duration: '-', note: 'Láz >38 °C, szubakut lefolyás, nagy folyadékgyülem (>20 mm), tamponád gyanúja, NSAID-ra nem reagáló állapot, oralis antikoagulálás, traumás háttér (ESC Class I).' }
                ],
                icu: [
                  { drug: 'Sürgősségi Pericardiocentesis', dose: 'UHR-vezérelt tű-drainage', duration: 'Azonnal', note: 'ESC Class I: Életmentő beavatkozás Akut Pericardialis Tamponád esetén!' }
                ]
              },
              targeted: 'ESC ABSZOLÚT ALAPELV: Szteroidok (Prednisolon 0.2-0.5 mg/kg/nap) KIZÁRÓLAG MÁSODVONALBELI TERÁPIÁKÉNT adhatók, ha az NSAID/Colchicin ellenjavallt, hatástalan, vagy speciális indikáció (autoimmun, urémiás) áll fenn! A korai szteroid-kezelés kifejezetten NÖVELI a recidíva és a krónikussá válás kockázatát. Szteroid alkalmazása esetén rendkívül lassú leépítés kötelező!',
              supportive: [
                'Fizikai kímélet: A sportolás és az intenzív fizikai terhelés TILTOTT a tünetek megszűnéséig és a CRP normalizálódásáig (amateur betegeknek min. 3 hónap sporttilalom) (ESC Class I).',
                'Recidív (Visszatérő) Pericarditis Terápiája: Anti-IL-1 terápia (Anakinra vagy Rilonacept) kiemelten ajánlott szteroid-dependens vagy multidrog-rezisztens visszatérő pericarditisben (ESC ajánlás).'
              ],
              prevention: [
                'Colchicin adása már a legelső akut pericarditis epizódnál a recidíva megelőzésére (ESC Class I)'
              ]
            },
            prognosis: {
              mortality: 'Idiopathiás/virális formában a mortalitás rendkívül alacsony (<1%); tamponád vagy purulens/malignus forma esetén magas.',
              prognostic_scores: ['ESC Pericarditis High-Risk Features Score'],
              factors: 'Láz >38 °C, szubakut kezdet, nagy folyadékgyülem, tamponád jelenléte, korai szteroid használat (növeli a recidívát)'
            },
            references: [
              '2015 ESC Guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015;36(42):2921-2964.',
              'RHAPSODY trial: Rilonacept in Recurrent Pericarditis. N Engl J Med. 2021;384(1):31-41.'
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acute_Pericarditis_ECG.jpg',
                caption: 'Akut pericarditis jellegzetes diffúz konkáv ST-elevációs EKG képe.',
                type: 'EKG'
              }
            ]
          },
          {
            id: 'vascular_graft_infection',
            name: 'Vaszkuláris graft és endovaszkuláris fertőzés (VGI / EVGI)',
            pathogen: { type: 'Baktérium / Gomba', name: '<i>Staphylococcus aureus, Coagulase-negatív Staphylococcusok (S. epidermidis), Pseudomonas aeruginosa, Enterobacterales (E. coli, Klebsiella), Candida spp.</i>', gram: 'Gram-pozitív / Gram-negatív', shape: 'coccus / pálca / gomba' },
            epidemiology: {
              incidence: '1-3% nyitott érműtéti graftoknál (aorto-bifemoralis, peripherias bypass), 0.5-1.5% endovaszkuláris stent-graftoknál (EVAR / TEVAR)',
              risk_groups: ['Nyitott aortás vagy perifériás érműtéten átesett betegek', 'EVAR / TEVAR stentgraft beültetésben részesültek', 'Lágyéki (groin) bemetszéssel rendelkező betegek (femorális rekonstrukciók)', 'Diabetes mellitus, elhízás, krónikus fókusz a bőrön, ismételt érműtétek'],
              seasonality: 'Nincs',
              transmission: 'Műtéti inokuláció (intraoperatív kontamináció), lágyéki sebszövődmény terjedése vagy hematogén felülfertőződés'
            },
            pathomechanism: {
              steps: [
                'Inokuláció & Biofilm: A szintetikus érgraft (PTFE, Dacron) vagy stentgraft felszínére bejutó baktériumok dús biofilmet képeznek, mely védi őket az immunválasztól és az antibiotikumoktól.',
                'Perigraft Gyulladás & Tályog: A műanyag graft körül gyulladásos exsudatio, perigraft tályog, gázgyülem és a szöveti integráció hiánya (non-incorporation) alakul ki.',
                'Anastomosis elégtelenség & Pseudoaneurysma: A fertőzés elpusztítja a damilöltéseket és a natív érfalat az anastomosisonál, ami vérzéshez, pseudoaneurysma-képződéshez vagy aorto-entericus / aorto-bronchialis fistulához vezet.',
                'Szeptikus Embolisatio: A graft lumenében képződő fertőzött thrombusok perifériás artériás szeptikus embóliát okoznak.'
              ],
              virulence_factors: ['Dacron/PTFE adhezines biofilmfelszín', 'Bakteriális proteázok és elastasok']
            },
            clinical: {
              incubation: 'Korai (<2 hónap postop - leggyakrabban S. aureus, Gram-negatívok) vagy Késői (>2 hónap postop - indolens S. epidermidis, Cutibacterium)',
              onset: 'Lappangó láztól az akut masszív életveszélyes vérzésig',
              symptoms: [
                { name: 'Lokális sebtünetek', description: 'Nem gyógyuló seb a lágyékban, szinusz-járat, purulens váladékozás, tapintható lüktető terülés (pseudoaneurysma) a graft lefutása felett.', severity: 'moderate' },
                { name: 'Szisztémás tünetek', description: 'Ismeretlen eredetű láz (FUO), hidegrázás, fogyás, szepszis, emelkedett gyulladásos markerek.', severity: 'severe' },
                { name: 'Életveszélyes Vérzés / Fistula', description: 'Aorto-entericus fistula esetén drámai gyanújel a kisfokú, önmagától szűnő gyomorbélrendszeri "herald bleeding" (előhírnök vérzés), amit kiterjedt masszív haematemesis / melaena és kardiogén shock követ!', severity: 'severe' }
              ],
              physical_exam: [
                'Lágyéki sebferőtés, fistula, bőr erythema a graft felett',
                'Lüktető terülés (pseudoaneurysma) az anastomosis helyén',
                'Láz, szepszis jelei',
                'Perifériás artériás szeptikus embólusok jelei (fájdalmas kék-ujj szindróma / blue toe)'
              ],
              complications: [
                'Masszív catastrofalis vérzés (aorto-enteric vagy aorto-bronchial fistula ruptura)',
                'Sepsis és szeptikus shock',
                'Graft-thrombosis és akut végtag-ischaemia',
                'Végtagamputáció'
              ]
            },
            diagnostics: {
              criteria: [
                { name: 'MAGIC (Management of Aortic Graft Infection Collaboration) Kritériumok', items: ['Definitív VGI: Major Műtéti/Hisztológiai/Mikrobiológiai Kritérium OR 1 Major Képalkotó + 1 Minor Kritérium', 'Major Képalkotó Kritérium: Gázgyülem a graft körül >7 nappal műtét után, perigraft folyadékgyülem/tályog CT-vel, aorto-enteric fistula, 18F-FDG PET/CT-n fokozott intenzív perigraft FDG-felvétel', 'Minor Kritériumok: Láz, CRP emelkedés, szinusz-járat, perigraft lágyrész megvastagodás'] }
              ],
              laboratory: [
                { test: 'Hemokultúra (HK)', finding: 'Pozitív (S. aureus, CoNS, Pseudomonas)', interpretation: 'Min. 2-3 szett HK vétel kötelező' },
                { test: 'CRP / PCT / We', finding: 'Kifejezetten emelkedett', interpretation: 'Aktivitás monitorozása' }
              ],
              imaging: [
                { modality: 'CT Angiographia (CTA)', finding: 'Perigraft gáz buborékok (>7-14 nappal műtét után), perigraft folyadék/tályog, fali pseudoaneurysma, perigraft lágyrész-köpeny, bélfal-kontinuitás megszakadás', significance: 'ESC / ESVS Class I: Elsővonalbeli kötelező képalkotó vizsgálat!' },
                { modality: '18F-FDG PET/CT', finding: 'Intenzív, fókuszált vagy diffúz patológiás FDG-felvétel a vaszkuláris graft mentén ("szendvics-jel")', significance: 'ESC / ESVS Class I GOLD STANDARD: A legmagasabb szenzitivitású és specificitású vizsgálat a graft fertőzés korai vagy bizonytalan igazolására!' }
              ],
              microbiology: [
                { test: 'Sebváladék / Intraoperatív graft-szonifikációs kultúra', finding: 'Kórokozó és rezisztenciaprofil', significance: 'Eltávolított graft szonikálása növeli a tenyésztési találatot' }
              ]
            },
            differential: [
              { disease: 'Asepticus perigraft fluidum / Seroma', distinguishing: 'PET-CT-n nincs fokozott FDG-felvétel, hemokultúra és punkció steril, nincsenek gyulladásos tünetek' },
              { disease: 'Post-implantációs szindróma (EVAR után)', distinguishing: 'Acut láz és leukocytosis EVAR után fertőzés nélkül; 3-5 nap alatt magától szűnik, PET-CT negatív' }
            ],
            therapy: {
              guidelines: ['ESVS 2020 Clinical Practice Guidelines on the Management of Vascular Graft and Endovascular Prosthetic Infections', 'ESC 2023 Endocarditis guidelines (endovascular component)'],
              empirical: {
                title: 'Empirikus antibiotikum terápia vaszkuláris graft fertőzésben',
                drugs: [
                  { drug: 'Vancomycin + Piperacillin-Tazobactam OR Cefepim / Meropenem', dose: 'Vancomycin 30-60 mg/kg/nap IV + Pip-Tazo 4x4.5 g/nap IV', duration: 'In situ műtéti debridementig, majd targeted', note: 'Széles spektrumú lefedettség MRSA, Pseudomonas és anaerobok ellen.' }
                ]
              },
              targeted: 'Kombinált Sebészi ÉS Antimikrobiális Terápia (ESVS Class I): A fertőzött graft teljes eltávolítása, kiterjedt lokalizált debridement, és revaszkularizáció autológ vénás oltvánnyal (v. saphena magna), cryopreserved homografttal vagy rifampicinrel/ezüsttel átitatott grafttal! Teljes graft-eltávolítás után 6-12 hetes IV/PO targeted antibiotikum terápia kötelező; ha a graft nem távolítható el (high-risk beteg), ÉLETHOSSZIG TARTÓ szuppresszív antibiotikum kezelés szükséges.',
              supportive: [
                'Sürgős szív- és érsebészeti konzílium aorto-entericus fistula gyanújánál (herald bleeding!)',
                'Asepticus sebkezelés, NPWT (Negatív Nyomású Sebkezelés) kiegészítő alkalmazása mérlegelhető'
              ],
              prevention: [
                'Szigorú műtéti asepsis vascularis rekonstrukciók során',
                'Perioperatív antibiotikum profilaxis (Cefazolin 2g IV) minden érműtétnél'
              ]
            },
            prognosis: {
              mortality: 'Aortás graft fertőzésben a mortalitás 25-50%, aorto-entericus fistula esetén kezeletlenül 100%! Végtagamputáció kockázata 10-25%.',
              prognostic_scores: ['MAGIC Prognosis Score'],
              factors: 'Aortás elhelyezkedés, Emergency műtét, P. aeruginosa / S. aureus kórokozó, aorto-enteric fistula'
            },
            references: [
              'Editor\'s Choice - European Society for Vascular Surgery (ESVS) 2020 Clinical Practice Guidelines on the Management of Vascular Graft and Endovascular Prosthetic Infections. Eur J Vasc Endovasc Surg. 2020;59(3):339-399.',
              'Management of Aortic Graft Infection Collaboration (MAGIC) criteria. J Vasc Surg. 2016;64(1):247-254.'
            ],
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/CT_scan_of_aortic_graft_infection.jpg',
                caption: 'Aortás graft fertőzés CT képe perigraft gázbuborékokkal és folyadékkal.',
                type: 'CT Képalkotás'
              }
            ]
          }
        ]
      },
      upper_respiratory: {
        name: 'Felsőlégúti fertőzések',
        icon: window.diseaseMetadata.upper_respiratory.icon,
        color: window.diseaseMetadata.upper_respiratory.color,
        diseases: [
          {
            id: 'upper_respiratory_infections',
            name: 'Felsőlégúti fertőzések (közönséges nátha)',
            pathogen: { type: 'Vírus', name: '<i>Human Rhinovirus</i> (>50%), <i>Human Coronavirus</i> (229E, NL63, OC43, HKU1), <i>Adenovirus, Parainfluenza, RSV, Enterovirus, Metapneumovirus</i>', gram: 'RNS/DNS vírusok', shape: 'változó' },
            epidemiology: {
              incidence: 'Leggyakoribb humán fertőzés; felnőttek 2-4x/év, gyermekek 6-8x/év',
              risk_groups: ['Gyermekek (bölcsőde/óvoda)', 'Idősek', 'Krónikus tüdőbetegek', 'Immunszupprimáltak'],
              seasonality: 'Egész évben, kifejezett őszi-téli és tavaszi csúcsok',
              transmission: 'Aeroszol/cseppfertőzés, direkt kéz-kontaktus, fomitok'
            },
            pathomechanism: {
              steps: [
                'A vírusok az orr- és garatnyálkahártya cilliatív hámsejtjeihez kötődnek (pl. ICAM-1 receptor rhinovirusoknál).',
                'A sejtbejutás után a replikáció gyulladásos mediátorok (bradykinin, IL-1, IL-6, IL-8, TNF-alfa) és hisztamin felszabadulását váltja ki.',
                'Vascularis hyperaemia, mucosa-ödéma, plazma exsudatio és fokozott mucin-termelés alakul ki (orrfolyás, orrdugulás, tüsszögés).'
              ],
              virulence_factors: ['Receptor-specifikus kötődés (ICAM-1, LDL-R)', 'Interferon válasz gátlása', 'Magas antigén variabilitás (>100 rhinovirus szerotípus)']
            },
            clinical: {
              incubation: '1-3 nap (átlag 24-48 óra)',
              onset: 'Hirtelen vagy fokozatos',
              symptoms: [
                { name: 'Garat- és orrtünetek', description: 'Kezdeti torokkaparás/torokfájás, melyet hamar bőséges savós orrfolyás (rhinorrhoea), orrdugulás és tüsszögés követ.', severity: 'mild' },
                { name: 'Köhögés és szisztémás tünetek', description: 'Száraz köhögés, enyhe hőemelkedés (gyermekekben láz lehet), fejfájás, rossz közérzet. A váladék 3-4. napon mucoid/purulenssé válhat baktérium hiányában is!', severity: 'mild' }
              ],
              physical_exam: [
                'Orrnyálkahártya vérbőség (hyperaemia) és ödéma',
                'Orrjáratokban vizes vagy nyákos váladék',
                'Garat hátsó falán enyhe hyperaemia',
                'Tapintható, mérsékelten érzékeny cervicalis nyirokcsomók',
                'Tiszta tüdőhallgatózási lelet'
              ],
              complications: ['Akut rhinosinusitis (ABRS)', 'Otitis media acuta (különösen gyermekeknél)', 'Asthma / COPD exacerbáció', 'Bakteriális felülfertőződés']
            },
            diagnostics: {
              laboratory: [
                { test: 'Rutin labor', finding: 'Nem szükséges', interpretation: 'Szigorúan klinikai diagnózis; normál CRP és fvs-szám' }
              ],
              imaging: [
                { test: 'Képalkotás', finding: 'Nem indokolt', interpretation: 'Komplikációmentes esetben ellenjavallt' }
              ],
              microbiology: [
                { test: 'Multiplex légúti PCR panel', finding: 'Vírus RNS/DNS kimutatás', significance: 'Kizárólag epidemiológiai, nosocomialis vagy immunszupprimált indikációval' }
              ]
            },
            differential: [
              { disease: 'Allergiás rhinitis', distinguishing: 'Kifejezett orr- és szemviszketés, tüsszögési rohamok, láz hiánya, eosinophilia' },
              { disease: 'Akut bakteriális rhinosinusitis (ABRS)', distinguishing: 'Tünetek >10 napig tartanak, vagy "double sickening" (kettős rosszabbodás), magas láz, arcnyomás' },
              { disease: 'Influenza / COVID-19', distinguishing: 'Hirtelen kezdet, magas láz (>38.5°C), kifejezett myalgia, prostratio, szaglászavar' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Szupportív kezelés', dose: '-', duration: '5-7 nap', note: 'Bőséges folyadék, pihenés. ANTIBIOTIKUM SZIGORÚAN KONTRAINDIKÁLT!' },
                  { drug: 'Lokális orrdekongesztáns', dose: 'Oxymetazolin / Xylometazolin orrspray', duration: 'MAX 3-5 NAP!', note: 'Rhinitis medicamentosa megelőzése miatt 5 napnál tovább nem adható' },
                  { drug: 'Intranasalis sóoldat', dose: 'Isotonias / Hypertonias tengervíz', duration: 'Szükség szerint', note: 'Mucociliaris clearance javítására' },
                  { drug: 'Analgetikum / Antipyretikum', dose: 'Paracetamol 500-1000mg PO / Ibuprofen 400mg PO', duration: 'Tüneti', note: 'Fájdalom és láz csökkentésére' }
                ],
                inpatient: [
                  { drug: 'Nincs szükség', dose: '-', duration: '-', note: 'Szigorúan ambuláns kórkép' }
                ],
                icu: [
                  { drug: 'Nincs szükség', dose: '-', duration: '-', note: '-' }
                ]
              },
              targeted: 'Nincs specifikus antivirális terápia standard náthára.',
              supportive: ['Folyadékpótlás', 'Párásítás', 'Orrmosás isotonias sóoldattal', 'Analgetikumok'],
              prevention: ['Rendszeres, alapos kézhigiéné (szappanos kézmosás / alkoholos kézfertőtlenítés)', 'Etiológiai szellőztetés', 'Maszkviselés szezonalitás idején', 'Megjegyzés: A több mint 100 rhinovirus szerotípus miatt specifikus védőoltás nem áll rendelkezésre.']
            },
            prognosis: {
              mortality: '<0.01% (kiváló)',
              prognostic_scores: ['Nincs'],
              factors: 'Mögöttes krónikus tüdőbetegség (COPD, asthma)'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Human_rhinovirus_14.jpg',
                caption: 'Humán rhinovírus elektronmikroszkópos felvételen.',
                type: 'Virológia'
              }
            ]
          },
          {
            id: 'laryngitis',
            name: 'Laryngitis és Croup (Laryngotracheobronchitis)',
            pathogen: { type: 'Vírus/Baktérium', name: '<i>Human Parainfluenza Virus</i> 1-3 (croup 75%-a), <i>Rhinovirus, Adenovirus, RSV, Influenza A/B, SARS-CoV-2</i>; ritkán bakteriális felülfertőződés: <i>Staphylococcus aureus, Streptococcus pyogenes, Streptococcus pneumoniae</i>', gram: 'Vírus/baktérium', shape: 'változó' },
            epidemiology: {
              incidence: 'Igen gyakori; gyermekeknél 6 hó - 3 év között a leggyakoribb felsőlégúti obstrukció',
              risk_groups: ['Kisgyermekek (6 hó - 3 év)', 'Énekesek, szónokok (vokális túlterhelés)', 'Dohányzók', 'Immunszupprimáltak'],
              seasonality: 'Ősz-tél (Parainfluenza csúcsok)',
              transmission: 'Cseppfertőzés, direkt kontaktus'
            },
            pathomechanism: {
              steps: [
                'A vírusok a nasopharynx hámját fertőzve leterjednek a gége és a trachea nyálkahártyájára.',
                'A subglotticus spatium szöveti ödémája, vérbősége és a mucinosus exsudatum a légutak beszűkülését eredményezi.',
                'A subglotticus átmérő 1 mm-es szűkülete kisgyermekben 50%-os keresztmetszet-csökkenést és 16-szoros légúti ellenállást okoz, ami belégzési stridorhoz és ugató köhögéshez vezet.'
              ],
              virulence_factors: ['Lokális mucosa invázió', 'Súlyos subglotticus spatium ödéma', 'Bakteriális szuperinfekció esetén exotoxinok']
            },
            clinical: {
              incubation: '1-4 nap',
              onset: 'Fokozatosan kezdődő prodromalis nátha, majd éjszaka hirtelen súlyosbodó stridor',
              symptoms: [
                { name: 'Ugató köhögés és rekedtség', description: 'Jellegzetes "fóka-ugatásszerű" (barking) köhögés, rekedtség vagy teljes aphonia.', severity: 'moderate' },
                { name: 'Belégzési stridor és dyspnoe', description: 'Belégzési (inspiratorikus) stridor, mely fizikai terhelésre/sírásra, majd súlyos esetben nyugalomban is megjelenik. Bordaközi és jugularis behúzódások (retractio).', severity: 'severe' }
              ],
              physical_exam: [
                'Rekedtséggel járó beszéd/sírás',
                'Inspiratorikus stridor',
                'Subcostalis, intercostalis és jugularis retractiók',
                'Tachypnoe, tachycardia',
                'Pharynx/epiglottis mérsékelten hyperaemiás (az epiglottis NEM duzzadt, ellenben az epiglottitisszel!)'
              ],
              complications: ['Bakteriális tracheitis', 'Teljes légúti obstrukció', 'Hypoxia és légzési kimerülés', 'Otitis media']
            },
            diagnostics: {
              laboratory: [
                { test: 'Laborvizsgálatok', finding: 'Rutinból nem szükségesek', interpretation: 'Stressz miatti sírás rontja a légúti szűkületet! Csak súlyos esetben' }
              ],
              imaging: [
                { modality: 'Anteroposterior nyaki Rtg', finding: 'A.p. felvételen "Templomtorony-jel" (Steeple sign)', significance: 'A subglotticus légút kúpszerű beszűkülése (nem rutin, klinikai diagnózis!)' }
              ],
              microbiology: [
                { test: 'Légúti PCR panel', finding: 'Parainfluenza / RSV / Influenza RNS', significance: 'Differenciáldiagnosztika súlyos lefolyás esetén' }
              ]
            },
            calculators: [
              {
                name: 'Westley Croup Score - Croup Súlyossági Skála',
                items: [
                  { label: 'Inspiratorikus Stridor: Nincs (0), Izgatottságra (1), Nyugalomban (2)', points: 1 },
                  { label: 'Behúzódás (Retractio): Nincs (0), Enyhe (1), Mérsékelt (2), Súlyos (3)', points: 1 },
                  { label: 'Belégzési Hang (Ventiláció): Normális (0), Csökkent (1), Súlyosan csökkent (2)', points: 1 },
                  { label: 'Cyanosis: Nincs (0), Izgatottságra (4), Nyugalomban (5)', points: 0 },
                  { label: 'Tudatállapot: Normális (0), Desorientált / Kimerült (5)', points: 0 }
                ],
                interpretation: [
                  { min: 0, max: 2, text: 'Enyhe Croup: Otthoni tüneti kezelés, egyszeri orális Dexamethason.' },
                  { min: 3, max: 5, text: 'Mérsékelt Croup: Dexamethason + Inhalációs Epinefrin megfontolandó, megfigyelés.' },
                  { min: 6, max: 17, text: 'Súlyos Croup / Imminens légzési elégtelenség: Dexamethason IV/PO + Inhalációs Epinefrin, Sürgősségi / ICU felvétel.' }
                ]
              }
            ],
            differential: [
              { disease: 'Akut Epiglottitis', distinguishing: 'Hirtelen magas láz, nyáladzás (drooling), tripod helyzet, NINCS ugató köhögés, toxikus küllem' },
              { disease: 'Bakteriális Tracheitis', distinguishing: 'Magas láz, purulens trachealis váladék, nem reagál nebulizált epinefrinre' },
              { disease: 'Idegentest aspiráció', distinguishing: 'Hirtelen fulladás, apnoés epizód játék/evés közben, asszimmetrikus tüdőlelet' },
              { disease: 'Anaphylaxis / Angioedema', distinguishing: 'Urticaria, az ajkak/nyelv duzzanata, allergiás trigger' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Dexamethason', dose: '0.15 - 0.6 mg/kg PO egyszeri dózis (max 16 mg)', duration: 'Egyszeri adag', note: 'Standard I. vonalbeli kezelés MINDEN croupos gyermeknek (AAP/NICE irányelvek)!' },
                  { drug: 'Prednisolon orális', dose: '1-2 mg/kg PO egyszeri adag', duration: 'Egyszeri adag', note: 'Alternatíva, ha a Dexamethason nem elérhető' }
                ],
                inpatient: [
                  { drug: 'Inhalációs Epinefrin (Adrenalin)', dose: '0.5 mL/kg (max 5 mL) 1:1000 epinefrin párásítva', duration: 'Szükség szerint ismételhető 20 percenként', note: 'Súlyos stridor / retrakció esetén. Legalább 2-4 órás klinikai megfigyelés szükséges az "ebbe-rebound" hatás miatt!' },
                  { drug: 'Dexamethason IV / IM', dose: '0.6 mg/kg IV/IM', duration: 'Egyszeri adag', note: 'Ha orálisan nem tolerálja hányás miatt' }
                ],
                icu: [
                  { drug: 'Heliox (Hélium-Oxigén) / Intubáció', dose: 'Párásított O2', duration: '-', note: 'Endotrachealis intubáció 0.5-1.0 számmal kisebb tubussal a subglotticus spatium szűkülete miatt' }
                ]
              },
              targeted: 'A rutin antibiotikum kezelés KONTRAINDIKÁLT virális laryngitisben! Csak igazolt bakteriális tracheitis esetén indokolt (Ceftriaxon + Vancomycin).',
              supportive: ['Párásított hideg levegő / oxigén', 'Lázcsillapítás (Paracetamol, Ibuprofen)', 'Csendes, nyugodt környezet (a gyermek megnyugtatása kulcsfontosságú)'],
              prevention: ['Kézhigiéné', 'Influenza és SARS-CoV-2 elleni védőoltás', 'Dohányzásmentes környezet biztosítása']
            },
            prognosis: {
              mortality: '<0.1% (időben alkalmazott steroid/epinefrin mellett kiváló)',
              prognostic_scores: ['Westley Croup Score'],
              factors: 'Életkor (<1 év magasabb rizikó), subglotticus stenosis anamnézise'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Larynx.jpg',
                caption: 'A gége és subglotticus spatium nyálkahártyájának gyulladása.',
                type: 'Anatómia'
              }
            ]
          },
          {
            id: 'epiglottitis',
            name: 'Akut Epiglottitis (Supraglottitis)',
            pathogen: { type: 'Baktérium', name: '<i>Haemophilus influenzae</i> b típus (Hib, korábban 90%, gyermekeknél a vakcináció óta drasztikusan csökkent). Oltatlanoknál/felnőtteknél: <i>Streptococcus pneumoniae, Streptococcus pyogenes (GAS), Staphylococcus aureus</i> (beleértve MRSA)', gram: 'Gram-negatív / Gram-pozitív', shape: 'coccapálca / coccus' },
            epidemiology: {
              incidence: 'Ritka, de fulmináns, ÉLETVESZÉLYES airway sürgősség!',
              risk_groups: ['Hib ellen NEM oltott gyermekek', 'Felnőttek (átlagéletkor 40-50 év)', 'Diabéteszesek', 'Immunszupprimáltak'],
              seasonality: 'Egész évben előfordulhat',
              transmission: 'Cseppfertőzés, nasopharyngealis kolonisáció'
            },
            pathomechanism: {
              steps: [
                'A baktériumok a supraglotticus képleteket (epiglottis, aryepiglotticus redők, arytenoid porcok) fertőzik.',
                'Gyorsan progrediáló, fulmináns gyulladásos ödéma és cellulitis alakul ki a laza submucosus kötőszövetben.',
                'Órák alatt a duzzadt epiglottis mechanikusan elzárja a rima glottidist, ami komplett légúti obstrukcióhoz, asphyxiához és leálláshoz vezet.'
              ],
              virulence_factors: ['Hib B-típusú antifagocita tok (PRP - polyribosylribitol phosphate)', 'Endotoxinok', 'Invazív szöveti destrukció']
            },
            clinical: {
              incubation: 'Néhány órától 1-2 napig',
              onset: 'Hirtelen, fulmináns progresszió (órák alatt drámai lefolyás!)',
              symptoms: [
                { name: 'Klasszikus 4 "D" tünet', description: '1. Dysphagia (súlyos nyelési nehézség), 2. Dysphonia (mormogó "forró krumpli" hang), 3. Drooling (folyó nyál a nyelési képtelenség miatt), 4. Distress (kifejezett légzési elégtelenség).', severity: 'severe' },
                { name: 'Testtartás és magas láz', description: 'Jellegzetes "Tripod" pozíció: a beteg előredőlve ülést preferál, fejét hátrahajtja, állát előretolja. Magas láz (>39°C), hiányzik az ugató köhögés!', severity: 'severe' }
              ],
              physical_exam: [
                'Tripod üléstartás, fokozott szorongás',
                'Drooling (nyálcsorgás)',
                'Inspiratorikus stridor (már a kimerülés jelét mutatja!)',
                'Toxikus, lázas küllem',
                'FIGYELMEZTETÉS: A garat spatulás vizsgálata SZIGORÚAN TILOS, mert reflexiós komplett laryngospasmt és azzonali légúti elzáródást vált ki!'
              ],
              complications: ['Komplett légúti obstrukció és asphyxia', 'Szepszis, szeptikus shock', 'Epiglottis tályog', 'Meningitis, pneumonia (Hib bacteraemia miatt)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Hemokultúra (2 szett)', finding: 'Pozitív Hib / S. pneumoniae / GAS', interpretation: 'A légút biztosítása UTÁN veendő levételre!' },
                { test: 'Vérkép / CRP / PCT', finding: 'Kifejezett leukocytosis balra toltággal, magas CRP', interpretation: 'Súlyos bakteriális fertőzés' }
              ],
              imaging: [
                { modality: 'Nyaki lateralis Rtg (csak ha stabil!)', finding: 'Lágyrész felvételen "Hüvelykujj-jel" (Thumbprint sign)', significance: 'Az epiglottis kifejezett gömbölyű duzzanata (csak intubációs készenlét mellett végezhető!)' }
              ],
              microbiology: [
                { test: 'Epiglottis/garat tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Kizárólag a légútbiztosítást követően a műtőben vehető le!' }
              ]
            },
            differential: [
              { disease: 'Croup (Laryngotracheobronchitis)', distinguishing: 'Lassabb kezdet, ugató köhögés jelen van, NINCS nyáladzás (drooling), nincs tripod pozíció' },
              { disease: 'Peritonsillaris / Retropharyngealis tályog', distinguishing: 'Uvula deviatio, trismus (szájzár), nyaki mozgáskorlátozottság, CT-vel elkülöníthető' },
              { disease: 'Idegentest aspiráció', distinguishing: 'Láz hiánya, hirtelen tünetkezdés evés/játék közben' }
            ],
            therapy: {
              empirical: {
                inpatient: [
                  { drug: 'SÜRGŐS LÉGÚTBIZTOSÍTÁS', dose: 'Műtői / ICU körülmények között', duration: 'Azonnal', note: 'A legfőbb prioritás! Döntően intubáció fül-orr-gégész és aneszteziológus jelenlétében, készenlétben cricothyroidotomiára/tracheostomiára!' },
                  { drug: 'Ceftriaxon IV', dose: '2g IV naponta egyszer (gyermek: 50-100 mg/kg/nap)', duration: '7-10 nap', note: 'III. generációs cefalosporin első választásként' },
                  { drug: 'Vancomycin / Clindamycin IV', dose: 'Vancomycin 15-20 mg/kg IV q8-12h', duration: '7-10 nap', note: 'MRSA / Gram-pozitív lefedettség kiegészítésére szepszis/súlyos állapot esetén' }
                ],
                icu: [
                  { drug: 'Cefotaxime IV', dose: '2g IV q6-8h', duration: '7-10 nap', note: 'Alternatív III. gen cefalosporin' }
                ]
              },
              targeted: 'A tenyésztés és antibiotikum érzékenység alapján módosítandó.',
              supportive: ['Sürgős műtői intubáció', 'Oxigénterápia', 'IV hidratáció', 'Szedáció intubáció alatt'],
              prevention: ['Hib elleni védőoltás (Haemophilus influenzae b konjugált vakcina) a kötelező csecsemőkori oltási rendben (DTaP-IPV-Hib-HepB hexavalens oltás 2, 3, 4 és 18 hónapos korban).', 'Közeli kontaktok kemoprofilaxisa: Rifampicin 1x600mg PO 4 napig (amennyiben a háztartásban 4 év alatti oltatlan gyermek él).']
            },
            prognosis: {
              mortality: '<1% korai szakszerű intubáció és IV antibiotikum mellett; >10-20% kezeletlen vagy későn intubált esetben!',
              prognostic_scores: ['Nincs specifikus'],
              factors: 'Légútbiztosítás gyorsasága, életkor, sokk jelenléte'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Epiglottis.jpg',
                caption: 'Az epiglottis és supraglotticus képletek fulmináns gyulladása.',
                type: 'Anatómia'
              }
            ]
          },
          {
            id: 'rsv_infection',
            name: 'RSV fertőzés (Respiratory Syncytial Virus)',
            pathogen: { type: 'Vírus', name: '<i>Human Respiratory Syncytial Virus</i> (HRSV A és B törzsek)', gram: 'RNS vírus, Pneumoviridae', shape: 'helikális / pleiomorph' },
            epidemiology: {
              incidence: 'Igen magas; a gyermekek >95%-a átesik 2 éves koráig. Felnőttekben ismétlődő fertőzések, idősekben tüdőgyulladást okoz.',
              risk_groups: ['Csecsemők (<6 hónap, különösen <2 hónap)', 'Koraszülöttek', 'Bronchopulmonalis dysplasiás (BPD) és congenitalis szívbeteg csecsemők', 'Idősek (≥60 év)', 'Krónikus tüdő- és szívbetegek', 'Immunszupprimáltak'],
              seasonality: 'Szezonális epidémiák: késő ősz - tél - kora tavasz',
              transmission: 'Cseppfertőzés, direkt kontaktus fertőzött váladékkal (fomitokon órákig életképes, rendkívül fertőző!)'
            },
            pathomechanism: {
              steps: [
                'A vírus a nasopharynx és az alsó légutak csillós hámsejtjeihez kötődik az elülső G glikoproteinnel.',
                'A fúziós (F) fehérje mediálja a vírus bejutását és a szomszédos sejtek összeolvadását, sokmagvú óriássejteket (syncytiumokat) képezve.',
                'Hámsejt necrosis, ciliaris dysfunctio, fokozott nyákelválasztás és peribronchialis lymphocytás infiltráció alakul ki.',
                'Csecsemők szűk bronchioluszaiban a nyálkadugók (plugging) és az ödéma szelepes obstrukciót, hyperinflációt és atelectasiát okoznak (akut bronchiolitis).'
              ],
              virulence_factors: ['Fúziós (F) fehérje (sejt-sejt fúzió)', 'G glikoprotein (adherencia)', 'SH protein (apoptosis gátlás)', 'NS1/NS2 (interferon válasz blokkolása)']
            },
            clinical: {
              incubation: '2-8 nap (átlag 4-6 nap)',
              onset: 'Fokozatos; felsőlégúti tünetekkel indul, majd a 3-5. napon terjedhet az alsó légutakra',
              symptoms: [
                { name: 'Kezdeti / Felsőlégúti tünetek', description: 'Orrfolyás, orrdugulás, tüsszögés, mérsékelt láz/hőemelkedés, torkfájás.', severity: 'mild' },
                { name: 'Akut Bronchiolitis (Csecsemőkben)', description: 'Tachypnoe, sípoló légzés (wheezing), elhúzódó expirium, kilégzési stridor, bordaközi/subcostalis behúzódások, orrszárnyi légzés. Csecsemőknél apnoe (légzéskimaradás) lehet az első tünet!', severity: 'severe' },
                { name: 'Alsólégúti fertőzés (Idősekben)', description: 'Súlyos kisköri nehézlégzés, száraz/produktív köhögés, COPD/szívelégtelenség akut exacerbációja.', severity: 'severe' }
              ],
              physical_exam: [
                'Tachypnoe, orrszárnyi légzés, intercostalis behúzódások',
                'Tüdő felett diffúz kilégzési sípolás-búgás (wheezing) és apróhólyagú szörnyfejcsek (crepitatio)',
                'Hypoxia (SpO2 csökkenés)',
                'Csecsemőkben ingerlékenység, kiszáradás jelei (elégtelen szopás miatti dehidratáció)'
              ],
              complications: ['Apnoe (csecsemőknél)', 'Akut légzési elégtelenség', 'Szekunder bakteriális pneumonia', 'Otitis media acuta (50%-ban kíséri)', 'Későbbi gyermekkori rekurrens wheezing / asthma']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép / CRP', finding: 'Általában normális fvs-szám és CRP', interpretation: 'Mérsékelten emelkedett; szuperinfekció kizárása' }
              ],
              imaging: [
                { modality: 'Mellkas röntgen', finding: 'Tüdő hyperinfláció (rekesz mélyen áll), szétszórt peribronchialis rajzolatfokozódás, foltos atelectasiák', significance: 'Bronchiolitis jellegzetessége' }
              ],
              microbiology: [
                { test: 'RSV Rapid Antigén Teszt / RT-PCR (nasopharyngeal aspirate)', finding: 'RSV RNS / F-fehérje kimutatás', significance: 'Gold standard a pontos etiológiai diagnózishoz' }
              ]
            },
            differential: [
              { disease: 'Egyéb virális bronchiolitis (Rhinovirus, Human Metapneumovirus, Bocavirus)', distinguishing: 'Klinikailag elkülöníthetetlen, légúti multiplex PCR panel alapján állapítható meg' },
              { disease: 'Asthma bronchiale / Csecsemőkori wheezing', distinguishing: 'Atopiás anamnézis, rekurrens rohamok, bronchodilatatorra adott válasz' },
              { disease: 'Pertussis (Szamárköhögés)', distinguishing: 'Húzó kilégzés/whoop, paroxysmalis köhögési rohamok, kifejezett lymphocytosis' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Szupportív terápia', dose: '-', duration: '7-10 nap', note: 'Adekvát hidratáció, rendszeres orrszívás, lázcsillapítás' },
                  { drug: 'Intranasalis sóoldat', dose: 'Isotonias / Hypertonias orrcsepp', duration: 'Szükség szerint', note: 'Orrjáratok átjárhatóságának biztosítására szoptatás/etetés előtt' }
                ],
                inpatient: [
                  { drug: 'Oxigénterápia / HFNC', dose: 'Párásított O2 (SpO2 >90-92% cél)', duration: 'Klinikai kép szerint', note: 'High-Flow Nasal Cannula (HFNC) csökkenti a légzési munkát' },
                  { drug: 'Parenteralis hidratáció', dose: 'IV infúzió / szonda táplálás', duration: 'Klinikai kép szerint', note: 'Aspiráció megelőzésére tachypnoés csecsemőben' }
                ],
                icu: [
                  { drug: 'CPAP / Invazív gépi lélegeztetés', dose: '-', duration: '-', note: 'Súlyos apnoe, hypercapnia vagy kimerülés esetén' },
                  { drug: 'Aeroszolizált Ribavirin', dose: 'Kizárólag immunszupprimáltaknál', duration: '3-7 nap', note: 'Súlyos tüdőtranszplantált / csontvelő-transzplantált betegekben megfontolandó' }
                ]
              },
              targeted: 'A rutin antibiotikumok, kortikoszteroidok és bronchodilatátorok KONTRAINDIKÁLTAK szövődménymentes RSV bronchiolitisben (AAP/ECDC irányelvek)!',
              supportive: ['Párásított oxigén (HFNC)', 'Systemás hidratálás', 'Orrváladék leszívása', 'Lázcsillapítás'],
              prevention: [
                '1. PASSZÍV IMMUNIZÁCIÓ CSECSEMŐKBEN (Legújabb áttörések - ECDC / CDC / EMA):',
                '- NIRSEVIMAB (Beyfortus): Hosszú hatású monoklonális antitest (IgG11). 1 single-dose injekció az EGÉSZ RSV SZEZONRA védelmet nyújt! Minden újszülöttnek és csecsemőnek javasolt az I. RSV szezonjában, valamint magas kockázatú gyermekeknek a II. szezonban.',
                '- CLESROVIMAB (Ensevis): Új (2024-2025) single-dose hosszú hatású monoklonális antitest újszülötteknek és csecsemőknek.',
                '- PALIVIZUMAB (Synagis): Havi adagolású monoklonális antitest koraszülötteknek és BPD/congenitalis szívbeteg csecsemőknek.',
                '2. ANYAI OLTÁS (Maternal RSV vaccine):',
                '- ABRYSVO (Pfizer bivalens rekombináns F-protein vakcina): A várandósok oltása a terhesség 32-36. hetében. Az átadott transplacentalis IgG antitestek élete első 6 hónapjában megvédik a csecsemőt a súlyos RSV fertőzéstől!',
                '3. FELNŐTT ÉS IDŐSKORI RSV VAKCINÁK (≥60 év és magas kockázatú 50-59 évesek):',
                '- AREXVY (GSK adjuvált rekombináns F-protein vakcina): Igen magas védőhatás időskorban.',
                '- ABRYSVO (Pfizer rekombináns F-protein vakcina): Időseknek engedélyezve.',
                '- mRESVIA (Moderna mRNS-1345 RSV vakcina): mRNS alapú vakcina felnőtteknek.'
              ]
            },
            prognosis: {
              mortality: '<0.5% kórházba került csecsemőknél fejlett országokban; magasabb elhúzódó apnoe, koraszülöttség vagy szívfejlődési rendellenesség esetén. Idősekben a mortalitás eléri az influenzáét (2-5%).',
              prognostic_scores: ['Nincs univerzális'],
              factors: 'Életkor (<8 hét), koraszülöttség (<35. hét), congenitalis vitium, immundeficit'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Respiratory_syncytial_virus_01.jpg',
                caption: 'Respiratory syncytial vírus (RSV) elektronmikroszkópos felvételen.',
                type: 'Virológia'
              }
            ]
          },
          {
            id: 'influenza',
            name: 'Influenza (Szezonális és Pandémiás)',
            pathogen: { type: 'Vírus', name: '<i>Influenza A vírus</i> (pl. H1N1, H3N2 szubtípusok) és <i>Influenza B vírus</i> (Victoria vonal; a Yamagata vonal mára kiveszett)', gram: 'RNS vírus, Orthomyxoviridae (szegmentált, 8 RNS szegmens)', shape: 'helikális / gömb' },
            epidemiology: {
              incidence: 'Szezonális epidémiák során a népesség 5-20%-a fertőződik évente. Pandémiák alatt >30-50%.',
              risk_groups: ['≥65 éves idősek', '5 év alatti gyermekek (<2 év különösen)', 'Várandósok', 'Krónikus betegek (szív-, tüdő-, vese-, máj-, metabolikus betegségek, elhízás BMI>40)', 'Immunszupprimáltak', 'Egészségügyi dolgozók'],
              seasonality: 'Északi féltekén novembertől áprilisig (téli csúcs)',
              transmission: 'Aeroszol és cseppfertőzés (1-2 méteren belül), direkt kontaktus és fomitok'
            },
            pathomechanism: {
              steps: [
                'A vírus a felszíni Hemagglutinin (HA) fehérjéjével a légúti csillós hámsejtek sziálsav receptoraihoz kötődik és endocytosissal bejut.',
                'A sejtben az RNS replikáció után az új virionok a Neuraminidáz (NA) enzim segítségével szabadulnak fel, elpusztítva a gazdasejtet.',
                'A légúti hám károsodása rontja a mucociliaris clearance-t, utat nyitva a szekunder bakteriális felülfertőződésnek.',
                'A heves gyulladásos citokin-válasz (IL-6, TNF-alfa, IFN-gamma "citokinvihar") felelős a súlyos szisztémás tünetekért (magas láz, myalgia, prostratio).'
              ],
              virulence_factors: ['Hemagglutinin (HA - sejtbejutás)', 'Neuraminidáz (NA - kiszabadulás)', 'Antigén Drift (pontmutációk -> epidémiák)', 'Antigén Shift (rekombináció -> pandémiák)', 'M2 protoncsatorna', 'NS1 protein (interferon antagonist)']
            },
            clinical: {
              incubation: '1-4 nap (átlag 2 nap)',
              onset: 'Azonnali, drámai, hirtelen kezdet ("mintha elütötte volna egy kamion")',
              symptoms: [
                { name: 'Szisztémás tünetek', description: 'Hirtelen felszökő magas láz (38.5 - 40°C), hidegrázás, kifejezett izom- és ízületi fájdalom (myalgia, főleg hát és végtagok), súlyos fejfájás és extremitásig terjedő gyengeség/prostratio.', severity: 'severe' },
                { name: 'Légúti tünetek', description: 'Száraz, kínzó, retrosternalis égő érzéssel járó köhögés, torokfájás, orrdugulás, orrfolyás.', severity: 'moderate' }
              ],
              physical_exam: [
                'Lázas, elesett, kimerült beteg',
                'Kipirult arc, conjunctivalis hyperaemia (szemvörösség)',
                'Garat nyálkahártya kifejezetten belövellt',
                'Tiszta tüdőhallgatózási lelet szövődménymentes esetben',
                'Tachycardia, mialgiás izomérzékenység'
              ],
              complications: [
                'Primer influenza pneumonia (akut ARDS-hez vezető virális tüdőgyulladás)',
                'Szekunder bakteriális pneumonia (leggyakrabban <i>Staphylococcus aureus</i> - beleértve MRSA - vagy <i>Streptococcus pneumoniae</i>; jellegzetes "kettős hullám" lefolyás!)',
                'Myocarditis / Pericarditis',
                'Encephalitis / Asepticus meningitis',
                'Myositis / Rhabdomyolysis',
                'Reye-szindróma (lázas gyermekek Aspirin kezelése esetén - KONTRAINDIKÁLT!)'
              ]
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukopenia lymphopeniával vagy normál fvs-szám', interpretation: 'A kifejezett leukocytosis balra toltággal szekunder bakteriális fertőzésre utal' },
                { test: 'Procalcitonin (PCT)', finding: 'Normális (<0.25 ug/L)', interpretation: 'Emelkedett PCT bakteriális szuperinfekciót jelez!' },
                { test: 'CRP', finding: 'Mérsékelten emelkedett (20-60 mg/L)', interpretation: 'Magas érték (>100 mg/L) szövődményre utal' }
              ],
              imaging: [
                { modality: 'Mellkas röntgen', finding: 'Szövődménymentesben normális; primer pneumoniánál bilaterális interstitialis/reticulonodularis rajzolat; szekunder pneumoniánál lobaris konszolidáció', significance: 'Pneumonia igazolására' }
              ],
              microbiology: [
                { test: 'RT-PCR (Nasopharyngeal swab)', finding: 'Influenza A / B RNS kimutatás és szubtipizálás', significance: 'Gold standard, legmagasabb szenzitivitás és specifitás' },
                { test: 'Gyors Antigén Teszt (RAT)', finding: 'Influenza A/B nucleoprotein', significance: 'Gyors (15 perc), de alacsonyabb szenzitivitás (50-70%) - a negatív eredmény nem zárja ki az influenzát!' }
              ]
            },
            differential: [
              { disease: 'COVID-19 (SARS-CoV-2)', distinguishing: 'Szaglás/ízlelés vesztés kifejezettebb, elhúzódóbb lefolyás; RT-PCR / antigén teszt különíti el' },
              { disease: 'RSV fertőzés', distinguishing: 'Idősekben és csecsemőkben súlyosabb kisköri bronchialis tünetek' },
              { disease: 'Akut Bakteriális Pneumonia', distinguishing: 'Produktív rozsdabarna/purulens köpet, lokalizált szörnyfejcsek, magas PCT és leukocytosis' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Oseltamivir (Tamiflu)', dose: '2x75 mg PO', duration: '5 nap', note: 'Leghatékonyabb, ha a tünetek kezdetétől 48 ÓRÁN BELÜL elindítják! Magas kockázatú betegeknél 48h-n túl is indítandó.' },
                  { drug: 'Baloxavir marboxil (Xofluza)', dose: '1x40 mg PO (40-80 kg) vagy 1x80 mg PO (>80 kg)', duration: 'EGYSZERI ADAG!', note: 'Cap-dependent endonukleáz gátló. Egyszeri orális dózis 48h-n belül! Rendkívül gyorsan csökkenti a vírusürítést.' }
                ],
                inpatient: [
                  { drug: 'Oseltamivir PO / szonda', dose: '2x75 mg PO (súlyos/ICU esetben 2x150 mg megfontolandó)', duration: '5-10 nap', note: 'Kórházi felvételt igénylő szövődményes betegnél a tünetek időtartamától függetlenül AZONNAL indítandó!' },
                  { drug: 'Peramivir IV', dose: '1x600 mg IV infúzió', duration: 'Egyszeri dózis (vagy naponta ismételve súlyos esetben)', note: 'IV neuraminidáz inhibitor, amennyiben az orális adagolás nem lehetséges' }
                ],
                icu: [
                  { drug: 'Oseltamivir + Empirikus AB', dose: 'Oseltamivir 2x75-150mg + Ceftriaxon + Vancomycin/Linezolid', duration: '7-10 nap', note: 'MRSA / Pneumococcus szekunder pneumonia fedezetére' }
                ]
              },
              targeted: 'Neuraminidáz inhibitorok (Oseltamivir, Zanamivir, Peramivir) vagy Cap-dependent Endonukleáz inhibitor (Baloxavir marboxil).',
              supportive: ['Szigorú ágynyugalom', 'Bőséges folyadékpótlás', 'Láz- és fájdalomcsillapítás (Paracetamol, Ibuprofen). ASPIRIN GYERMEKEKBEN KONTRAINDIKÁLT (Reye-szindróma!)', 'Oxigénterápia'],
              prevention: [
                '1. ÉVES SZEZONÁLIS INFLUENZA VÉDŐOLTÁSOK (Legújabb WHO / ECDC / CDC irányelvek):',
                '- TRIVALENS / QUADRIVALENS VAKCINÁK: Szezonálisan frissített törzsekkel.',
                '- MAGAS DÓZISÚ / ADJUVÁLT VAKCINÁK 65 ÉV FELETTIEKNEK:',
                '  * Fluzone High-Dose (4x-es antigénmennyiséget tartalmazó vakcina) vagy Fluad (MF59 adjuvánssal kiegészített oltóanyag): Lényegesen erőteljesebb immunválaszt és alacsonyabb szövődményarányt biztosítanak az időskori immunosenescentia ellen!',
                '- Rekombináns vakcina (Flublok - tojásfehérje mentes), Sejt-alapú vakcina (Flucelvax), Nazális élő gyengített vakcina (LAIV / FluMist 2-49 éveseknek).',
                '2. EXPOZÍCIÓ UTÁNI KEMOPROFILAXIS:',
                '- Oseltamivir 1x75 mg PO naponta 7-10 napig magas kockázatú oltatlan személyeknek fertőzöttel való szoros érintkezés után.'
              ]
            },
            prognosis: {
              mortality: 'Szezonális influenzában összességében ~0.1%; 65 év felettiekben és szövődményes virális/bakteriális pneumoniában elérheti az 1-5%-ot. Pandémiás törzseknél sokkal magasabb.',
              prognostic_scores: ['CURB-65 / PSI (pneumonia esetén)'],
              factors: 'Életkor (≥65 év), terhesség, krónikus tüdő/szívbetegség, elhízás, oltási státusz'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Influenza_A_virus_particle.jpg',
                caption: 'Influenza A vírus részecske elektronmikroszkópos felvételen.',
                type: 'Mikroszkópia'
              }
            ]
          },
          {
            id: 'covid19',
            name: 'COVID-19 (SARS-CoV-2 fertőzés)',
            pathogen: { type: 'Vírus', name: '<i>SARS-CoV-2</i> (Severe Acute Respiratory Syndrome Coronavirus 2; Omikron variánsok és sublineage-ei, pl. JN.1, KP.2, KP.3)', gram: 'RNS vírus, Coronaviridae (+SS-RNS)', shape: 'gömb, felszíni Spike (S) glikoproteinnel' },
            epidemiology: {
              incidence: '2020-as pandémia óta endémiás szezonalitású kórkép, időszakos hullámokkal',
              risk_groups: ['≥65 éves idősek', 'Súlyos elhízás (BMI ≥30-35)', 'Diabetes mellitus', 'Kardiovaszkuláris és cerebrovaszkuláris betegségek', 'Krónikus vesebetegség', 'Immunszupprimáltak (szervtranszplantáltak, daganatos betegek, biológiai terápián lévők)', 'Várandósok'],
              seasonality: 'Egész évben előfordul, kifejezettebb téli és kora őszi csúcsokkal',
              transmission: 'Légúti aeroszol (zárt térben lebegő mikrocseppek) és cseppfertőzés, direkt kontaktus'
            },
            pathomechanism: {
              steps: [
                'A vírus a felszíni Spike (S) fehérjéjével a gazdasejtek Angiotenzin Konvertáló Enzim 2 (ACE2) receptorához kötődik (TMPRSS2 ko-faktorral).',
                'ACE2 receptorok a tüdő Type II pneumocytáiban, az vascularis endothelsejtekben, szívizomban, vesében és bélben bőségesen kifejeződnek.',
                'I. Virális fázis (korai 1-5. nap): A vírus direkt cytopathiás károsodást okoz a légúti hámban.',
                'II. Hiperinflammációs fázis (2. hét): Súlyos esetben a szervezet túlzott, szisztematikus immunválasza ("citokinvihar": IL-6, IL-1beta, TNF-alfa) alakul ki.',
                'Szisztémás endothelitis, fokozott procoagulant állapot (mikrotrombózisok, immunthrombosis) és diffus alveolaris károsodás (ARDS) jön létre.'
              ],
              virulence_factors: ['Spike (S) protein (RBD tartomány)', 'ACE2 receptor affinitás', 'NSP1 (gazdasejt fehérjeszintézisének leállítása)', 'ORF8 (MHC-I lefedése)', 'N-protein']
            },
            clinical: {
              incubation: '2-14 nap (medián 3-5 nap; Omikron variánsoknál rövidebb, ~3 nap)',
              onset: 'Változó: enyhe felsőlégúti tünetektől a hirtelen progrediáló hypoxiáig',
              symptoms: [
                { name: 'Klasszikus és felsőlégúti tünetek', description: 'Láz/hőemelkedés, száraz köhögés, fáradékonyság, torokfájás, orrdugulás, fejfájás, myalgia.', severity: 'moderate' },
                { name: 'Specifikus és Gastrointestinalis jelek', description: 'A szaglás és ízlelés hirtelen elvesztése (anosmia, dysgeusia - Omikronnál ritkább). Hányinger, hasmenés.', severity: 'mild' },
                { name: 'Súlyos alsólégúti / Szisztémás tünetek', description: 'Progresszív nehézlégzés (dyspnoe), mellkasi nyomásérzés, súlyos hypoxaemia (gyakran tünetmentes "néma hypoxia" / silent hypoxia formájában!), ami ARDS-hez és szervi elégtelenséghez vezet.', severity: 'severe' }
              ],
              physical_exam: [
                'Tachypnoe, tachycardia, láz',
                'SpO2 csökkenés (pulzusoximéterrel kötelező mérni!)',
                'Tüdő felett bilaterálisan finom hólyagú szörnyfejcsek (crepitatio)',
                'Cianózis, zavartság (súlyos hypoxia jelei)',
                'Gyakran nincs jellegzetes hallgatózási eltérés a betegség korai szakában'
              ],
              complications: [
                'Akut Légzési Distressz Szindróma (ARDS)',
                'Thromboembolias szövődmények (Pulmonalis embólia, mélyvénás thrombosis, stroke, AMI)',
                'Szeptikus shock és Többszervi Elégtelenség (MODS)',
                'Akut Myocarditis és Arrhythmiák',
                'Gyermekkori Szisztémás Gyulladásos Szindróma (MIS-C / MIS-A)',
                'Long COVID / Post-COVID szindróma (fáradtság, agyköd, dyspnoe, dysautonomia >12 héten túl)'
              ]
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Kifejezett Lymphopenia, normál vagy csökkent thrombocytaszám', interpretation: 'A lymphopenia a betegség súlyosságának közvetlen indikátora' },
                { test: 'Gyulladásos es Thrombotikus markerek', finding: 'Emelkedett D-dimer, Ferritin, CRP, IL-6, LDH', interpretation: 'A magas D-dimer és Ferritin citokinvihart és magas thromboembolias rizikót jelez!' },
                { test: 'Kardiális markerek', finding: 'Troponin, NT-proBNP emelkedés', interpretation: 'Myocardialis károsodás / szívelégtelenség' }
              ],
              imaging: [
                { modality: 'Mellkas HRCT (Gold standard)', finding: 'Bilaterális, perifériás és basalis eloszlású "Tejüveghomály" (Ground-Glass Opacities - GGO), "Crazy-paving" minta és konszolidációk', significance: 'Pneumonia kiterjedésének megítélése' },
                { modality: 'Mellkas Röntgen', finding: 'Kétoldali multifokális interstitialis infiltrátumok', significance: 'Súlyos esetben' }
              ],
              microbiology: [
                { test: 'RT-PCR (Nasopharyngeal / Oropharyngeal swab)', finding: 'SARS-CoV-2 RNS kimutatás (Ct értékkel)', significance: 'Gold standard etiológiai diagnózis' },
                { test: 'Gyors Antigén Teszt (RAT)', finding: 'Nucleocapsid (N) protein kimutatás', significance: 'Gyors (15 perc), magas fertőzőképesség esetén megbízható pozitív' }
              ]
            },
            differential: [
              { disease: 'Influenza A/B', distinguishing: 'Hirtelen kezdet, kifejezettebb kezdeti myalgia; differenciálható multiplex PCR-rel' },
              { disease: 'Bakteriális Pneumonia', distinguishing: 'Unilaterális lobaris konszolidáció, magas Procalcitonin (>0.5 ug/L), purulens köpet' },
              { disease: 'Akut Pulmonalis Embólia (PE)', distinguishing: 'Hirtelen mellkasi fájdalom, dyspnoe, CT Pulmonalis Angiographiával (CTPA) igazolható' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'PAXLOVID (Nirmatrelvir / Ritonavir)', dose: '2x300 mg Nirmatrelvir + 100 mg Ritonavir PO', duration: '5 nap', note: 'I. vonalbeli antivirális terápia magas kockázatú enyhe-mérsékelt betegeknek! A tünetek kezdetétől 5 NAPON BELÜL elindítandó. FIGYELEM: Ritonavir miatti súlyos gyógyszer-interakciók (CYP3A4) ellenőrizendők!' },
                  { drug: 'Remdesivir (Veklury) ambuláns IV', dose: '200 mg IV D1, majd 100 mg IV D2-D3', duration: '3 napos kúra', note: 'Alternatíva magas kockázatú ambuláns betegnek, ha a Paxlovid kontraindikált' },
                  { drug: 'Molnupiravir', dose: '2x800 mg PO', duration: '5 nap', note: 'Másodvonalbeli orális alternatíva, ha a Paxlovid és Remdesivir sem alkalmazható' }
                ],
                inpatient: [
                  { drug: 'Remdesivir IV (Kórházi)', dose: '200 mg IV D1, majd 100 mg IV naponta', duration: '5 nap (max 10 nap)', note: 'Kórházi ápolást és oxigénterápiát igénylő betegekben' },
                  { drug: 'DEXAMETHASON IV / PO', dose: '6 mg IV / PO naponta egyszer', duration: 'Max 10 nap', note: 'Szigorúan CSAK OXIGÉNIGÉNYES / gépi lélegeztetett betegeknek! (A RECOVERY vizsgálat alapján nem-oxigénigényes esetben rontja a kimenetelt!)' },
                  { drug: 'LMWH (Kismolekulasúlyú Heparin)', dose: 'Profilaktikus / Terápiás dózis', duration: 'Kórházi tartózkodás alatt', note: 'Thromboembolias szövődmények megelőzésére minden kórházi COVID betegnek' }
                ],
                icu: [
                  { drug: 'Dexamethason + Tocilizumab / Baricitinib', dose: 'Tocilizumab 8 mg/kg IV egyszeri (max 800mg) VAGY Baricitinib 4 mg PO naponta', duration: 'Tocilizumab 1-2 dózis; Baricitinib 14 nap', note: 'Súlyos, hirtelen romló citokinviharban és gépi lélegeztetés / HFNC mellett' }
                ]
              },
              targeted: 'Korai virális fázisban antivirális szerek (Paxlovid, Remdesivir); kései hiperinflammációs fázisban immunmodulánsok (Dexamethason, Tocilizumab, Baricitinib).',
              supportive: ['Oxigénterápia (Prone/hasra fektetési pozíció javítja a V/Q arányt!)', 'High-Flow Nasal Cannula (HFNC)', 'NIV / CPAP', 'Invazív gépi lélegeztetés / ECMO', 'Adekvát hidratáció'],
              prevention: [
                '1. LEGÚJABB MÓDOSÍTOTT mRNS ÉS FEHÉRJE VÁLTOZAT-MATCHELT VAKCINÁK (2024-2026 SZEZON):',
                '- Évente frissített monovalens vakcinák az aktuálisan domináns variánsokra (pl. JN.1 / KP.2 / KP.3 variánsokra adaptált mRNS oltóanyagok):',
                '  * COMIRNATY (Pfizer-BioNTech mRNS vakcina)',
                '  * SPIKEVAX (Moderna mRNS vakcina)',
                '  * NUVAXOVID (Novavax rekombináns fehérje vakcina)',
                '- Kiemelten javasolt 65 év felettieknek, krónikus betegeknek, immunszupprimáltaknak, várandósoknak és egészségügyi dolgozóknak!',
                '2. ÁLTALÁNOS PREVENCIÓ: FFP2/KN95 maszkviselés zárt térben, kézhigiéné, beteg izolációja.'
              ]
            },
            prognosis: {
              mortality: 'Omikron érában és oltott népességben <0.5%; 80 év felett, immunszupprimáltakban vagy szellőztetett ICU betegekben 10-25%.',
              prognostic_scores: ['4C Mortality Score', 'NEWS2'],
              factors: 'Életkor (≥65 év), D-dimer és Ferritin szint, Lymphopenia, komorbiditások, oltási státusz'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/SARS-CoV-2_without_background.png',
                caption: 'SARS-CoV-2 vírus szerkezeti modellje Spike fehérjékkel.',
                type: 'Virológia'
              }
            ]
          },
          {
            id: 'tonsillitis',
            name: 'Tonsillitis acuta (Tüszős és catarrhalis mandulagyulladás)',
            pathogen: { type: 'Baktérium / Vírus', name: '<i>Streptococcus pyogenes</i> (Group A Streptococcus - GAS, 15-30% gyermekekben, 10% felnőttekben); ritkábban C és G csoportú Streptococcus, <i>Fusobacterium necrophorum</i>; Virális: EBV, Adenovirus, Enterovirus, HSV', gram: 'Gram-pozitív coccus', shape: 'lánc' },
            epidemiology: {
              incidence: 'Leggyakoribb gyermekkori és fiatal felnőttkori fertőzések egyike (csúcs 5-15 év között)',
              risk_groups: ['Iskolás korú gyermekek', 'Zárt közösségekben élők (iskolák, laktanyák)', 'Fiatal felnőttek (EBV / Fusobacterium rizikó)'],
              seasonality: 'Tél és kora tavasz (bakteriális); ősz/tavasz (virális)',
              transmission: 'Cseppfertőzés (köhögés, tüsszentés) és direkt kontaktus fertőzött nyállal'
            },
            pathomechanism: {
              steps: [
                'A kórokozó a Waldeyer-féle lymphaticus garatgyűrű (főleg a tonsilla palatina) nyálkahártyáján tapad meg.',
                'A baktérium felületi M-proteinei gátolják a phagocytosist, míg az exotoxinok (Streptolysin O és S) sejtkárosodást okoznak.',
                'Kifejezett neutrofil granulocytás infiltráció alakul ki, ami a tonsilla cryptáiban gennyes exsudatumot (tüszőket) képez.',
                'A pyrogén exotoxinok szisztémás lázat, míg a streptococcus szuperantigének skarlátos kiütést (Scarlatina) válthatnak ki.'
              ],
              virulence_factors: ['M-protein (antiphagocyter)', 'Streptolysin O és S (hemolizin, cytotoxin)', 'Streptokináz és Hyaluronidáz (szöveti terjedés)', 'Pyrogén Exotoxinok (SPE A, B, C - skarlát, STSS)']
            },
            clinical: {
              incubation: '2-5 nap (GAS esetén)',
              onset: 'Hirtelen, heves kezdet',
              symptoms: [
                { name: 'Tonsillaris és Lokalizált tünetek', description: 'Hirtelen fellépő, fülekbe sugárzó, heves torokfájás és súlyos nyelési fájdalom (odynophagia). A mandulák vörösek, duzzadtak, felszínükön sárgásfehér gennyes lepedék / tüszők (tonsillitis follicularis / lacunaris) láthatók.', severity: 'severe' },
                { name: 'Szisztémás és Nyirokcsomó tünetek', description: 'Magas láz (≥38.5°C), hidegrázás, fejfájás, rossz közérzet. Az elülső nyaki nyirokcsomók kifejezetten duzzadtak és nyomásérzékenyek (lymphadenitis angularis). KÖHÖGÉS HIÁNYZIK!', severity: 'severe' }
              ],
              physical_exam: [
                'Duzzadt, belövellt garatívek és palatinus tonsillák punctiform vagy konfluáló gennyes lepedékkel',
                'Érzékeny, megnagyobbodott elülső nyaki nyirokcsomók (cervicalis lymphadenopathia)',
                'Uvula oedema (mészáros-garat)',
                'Málnanyelv és scarlatiniform kiütés (Skarlát gyanúja esetén)',
                'Trismus (szájzár) vagy uvula deviáció jelenléte PERITONSILLARIS ABSCESSUS-ra utal!'
              ],
              complications: [
                'Peritonsillaris abscessus (PTA / Paratonsillaris tályog - sürgős fül-orr-gégészeti szikét igényel!)',
                'Retro- és Parapharyngealis tályog',
                'Lemierre-szindróma (<i>Fusobacterium necrophorum</i> okozta v. jugularis interna suppurativ thrombophlebitis és tüdőabscessusok fiatalokban!)',
                'Reumás láz (Febris rheumatica - szívbillentyű károsodás; a 10 napos Penicillinterápia fő célja ennek megelőzése!)',
                'Poststreptococcalis Glomerulonephritis (PSGN)',
                'Streptococcalis Toxikus Sokk Szindróma (STSS)'
              ]
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép / CRP / Süllyedés', finding: 'Kifejezett leukocytosis balra toltággal, magas CRP (>50-100 mg/L) és süllyedés', interpretation: 'Bakteriális etiológiát támogat' },
                { test: 'ASO / AST titer (Antistreptolysin-O)', finding: 'Emelkedett ASO titer', interpretation: 'Átvészelt fertőzést igazol (akut szakban még nem emelkedik, retrospaktív értékű)' }
              ],
              microbiology: [
                { test: 'Gyors A-csoportú Streptococcus Antigén Teszt (RADT)', finding: 'GAS antigén kimutatás toroktörlésből', significance: 'Gyors (5-10 perc), magas specifitású (>95%). Pozitív esetben azonnal indítható az antibiotikum!' },
                { test: 'Torokváladék tenyésztés', finding: '<i>Streptococcus pyogenes</i> (béta-hemolizáló) izolálás', significance: 'Gold standard, rezisztenciavizsgálat' }
              ]
            },
            calculators: [
              {
                name: 'McIsaac / Módosított Centor Score - GAS Pharyngitis Valószínűség',
                items: [
                  { label: 'Láz a kórelőzményben vagy jelenleg > 38°C', points: 1 },
                  { label: 'Köhögés HIÁNYA', points: 1 },
                  { label: 'Érzékeny elülső nyaki nyirokcsomó duzzanat', points: 1 },
                  { label: 'Tonsillaris duzzanat vagy gennyes exsudatum', points: 1 },
                  { label: 'Életkor 3-14 év', points: 1 },
                  { label: 'Életkor 15-44 év', points: 0 },
                  { label: 'Életkor ≥ 45 év', points: -1 }
                ],
                interpretation: [
                  { min: -1, max: 1, text: 'Igen alacsony kockázat (<10%). Nem szükséges sem gyorsteszt, sem antibiotikum. Tüneti terápia.' },
                  { min: 2, max: 3, text: 'Közepes kockázat (15-30%). RADT gyorsteszt vagy tenyésztés javasolt; antibiotikum csak pozitív teszt esetén.' },
                  { min: 4, max: 5, text: 'Magas kockázat (38-52%). Pozitív RADT után empirikus antibiotikum (Penicillin) javasolt.' }
                ]
              }
            ],
            differential: [
              { disease: 'Infectiosus Mononucleosis (EBV / CMV)', distinguishing: 'Kifejezett generalizált nyirokcsomó duzzanat, hepatosplenomegalia, atípusos lymphocytosis a vérképben; Amoxicillin adásakor maculopapulosus kiütés lép fel!' },
              { disease: 'Virális Pharyngitis (Adenovirus, Enterovirus, HSV)', distinguishing: 'Cough, coryza, rekedtség, stomatitis, kötőhártya-gyulladás kíséri; Centor score 0-1' },
              { disease: 'Diphtheria (Torokgyík - <i>Corynebacterium diphtheriae</i>)', distinguishing: 'Szürkésfehér, vérzően lefejthető álhártya (pseudomembran), "bikanyak" oedema; oltatlanokban' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'PENICILLIN V (Phenoxymethylpenicillin)', dose: 'Felnőtt: 2-3x1 millió IU PO; Gyermek: 50.000 IU/kg/nap 2-3 adagban', duration: 'SZIGORÚAN 10 NAP!', note: 'I. vonalbeli választandó szer! Nem létezik Penicillin-rezisztens GAS. A 10 napos időtartam kötelező a Reumás láz megelőzésére!' },
                  { drug: 'Amoxicillin PO', dose: 'Felnőtt: 2x1000 mg PO; Gyermek: 50 mg/kg/nap 2 adagban', duration: '10 nap', note: 'I. vonalbeli alternatíva (jobb ízű szirup gyermekeknél)' },
                  { drug: 'Cefalexin / Cefadroxil (I. gen. Cefalosporin)', dose: 'Felnőtt: 2x500-1000 mg PO', duration: '10 nap', note: 'Enyhe/nem-anafilaxiás Penicillin allergia esetén' },
                  { drug: 'Azithromycin / Clarithromycin', dose: 'Azithromycin: 1x500 mg PO 5 napig; Clarithromycin: 2x250-500 mg PO 10 napig', duration: '5-10 nap', note: 'Súlyos (Type I anafilaxiás) Penicillin allergia esetén! (Figyelem: makrolid rezisztencia előfordulhat)' }
                ],
                inpatient: [
                  { drug: 'Benzathine Penicillin G IM', dose: 'Egyetlen IM injekció: 1.2 millió IU (gyermek <27kg: 600.000 IU)', duration: '1 dózis', note: 'Gyenge beteg-együttműködés vagy terápiarezisztencia esetén tökéletes alternatíva' },
                  { drug: 'Penicillin G IV + Clindamycin IV', dose: 'Penicillin G 4x2-4 millió IU IV + Clindamycin 3x600mg IV', duration: '7-10 nap', note: 'Súlyos szövődményes / szeptikus / STSS állapotban' }
                ],
                icu: [
                  { drug: 'Sürgős Fül-orr-gégészeti Incisio / Drenázs', dose: '-', duration: '-', note: 'Peritonsillaris abscessus (PTA) esetén azonnali punctio/incisio és szisztémás antibiotikum' }
                ]
              },
              targeted: 'A <i>Streptococcus pyogenes</i> 100%-ban érzékeny Penicillinre. Béta-laktám allergia esetén Macrolid vagy Clindamycin.',
              supportive: ['Szisztémás fájdalom- és lázcsillapítás (Ibuprofen / Paracetamol)', 'Lokális torkfertőtlenítők és anesztetikumos szopogató tabletták (Benzydamin, Chlorhexidin)', 'Bőséges folyadékpótlás (hűvös/pürés ételek)'],
              prevention: [
                '1. VAKCINÁCIÓS HELYZET:',
                '- Jelenleg nincs törzskönyvezett vakcina <i>Streptococcus pyogenes</i> (GAS) ellen (fejlesztési fázisban vannak M-protein alapú oltóanyagok).',
                '- A differenciáldiagnosztikában és kevert fertőzések megelőzésében fontos a kötelező csecsemőkori Hib és Pneumococcus (PCV) oltások megléte.',
                '2. HIGIÉNIA ÉS IZO LÁCIÓ:',
                '- A beteg gyermek az antibiotikum elindítása után 24 órával válik cseppfertőzéssel nem fertőzővé, ekkor térhet vissza közösségbe.'
              ]
            },
            prognosis: {
              mortality: 'Megfelelő antibiotikum kezelés mellett kiváló (<0.01%). Kezeletlenül a Reumás láz és szuppuratív szövődmények kockázata magas.',
              prognostic_scores: ['Centor / McIsaac Score', 'FeverPAIN Score'],
              factors: 'Beteg-együttműködés (10 napos antibiotikum kúrák végigvitele!), gyors diagnózis'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tonsillitis.jpg',
                caption: 'Tonsillitis acuta follicularis (tüszős mandulagyulladás) lepedékkel.',
                type: 'Klinikai fotó'
              }
            ]
          },
          {
            id: 'sinusitis',
            name: 'Sinusitis acuta (Akut Rhinosinusitis - ARS / ABRS)',
            pathogen: { type: 'Vírus / Baktérium', name: 'Vírusok (90-98%-ban: Rhinovirus, Influenza, Parainfluenza, Adenovirus, RSV, Coronavirus); Akut Bakteriális Rhinosinusitisben (ABRS, 2-10%): <i>Streptococcus pneumoniae, Haemophilus influenzae</i> (non-typeable), <i>Moraxella catarrhalis</i>, <i>Staphylococcus aureus</i>', gram: 'Vegyes', shape: 'coccus / bacillus' },
            epidemiology: {
              incidence: 'Rendkívül gyakori; felnőttek átlagosan 2-4 virális rhinosinusitis epizódot élnek át évente',
              risk_groups: ['Allergiás rhinitisben szenvedők', 'Anatómiai orrsövény-ferdüléses betegek', 'Dohányosok és passzív dohányosok', 'Asthmás és Cisztás Fibrosisos betegek', 'Immunszupprimáltak'],
              seasonality: 'Őszi és téli hónapok',
              transmission: 'Felsőlégúti virális fertőzések szövődménye (endogén bakteriális felülfertőződés)'
            },
            pathomechanism: {
              steps: [
                'Virális felsőlégúti fertőzés következtében az orr- és paranasalis sinus nyálkahártyája belövellté válik és megduzzad.',
                'A nyálkahártya-ödéma elzárja a melléküregek természetes kivezető nyílásait (ostium meatus medius).',
                'A sinusokban csökken az oxigéntenzió, a csillószőrös hám очищение (mucociliaris clearance) leáll, és serosus/purulens váladék halmozódik fel.',
                'A pangó váladékban a nasopharynxból származó baktériumok elszaporodnak, Akut Bakteriális Rhinosinusitist (ABRS) és szöveti destruktív gyulladást idézve elő.'
              ],
              virulence_factors: ['Biofilm képződés a sinus nyálkahártyán', 'Béta-laktamáz termelés (<i>H. influenzae, M. catarrhalis</i>)', 'Pneumococcus kapszula']
            },
            clinical: {
              incubation: 'Virális náthát követően 5-10 nap múlva alakul ki a bakteriális szuperinfekció',
              onset: 'Fokozatos vagy "kettős rosszabbodás" (double sickening)',
              symptoms: [
                { name: 'Kardinális Akut Rhinosinusitis tünetek', description: 'Orrdugulás (nasal congestion), gátolt orrlégzés, purulens/sárgászöld orrfolyás (anterior/posterior rhinorrhoea) és faciobullaris nyomásérzés/arcfájdalom, amely előrehajlásra kifejezetten fokozódik. Szaglászavar (hyposmia/anosmia).', severity: 'moderate' },
                { name: 'Bakteriális felülfertőződés (ABRS) diagnosztikus jelei (EPOS 2020)', description: 'Legalább 3 jelenléte szükséges: 1) Kifejezett purulens orrváladék; 2) Súlyos helyi arcfájdalom (főleg egyoldali); 3) Magas láz (>38°C); 4) "Kettős rosszabbodás" (kezdeti javulás utáni hirtelen súlyosbodás); 5) Emelkedett CRP/süllyedés.', severity: 'severe' }
              ],
              physical_exam: [
                'Arcérzékenység a sinus maxillaris, frontalis vagy ethmoidalis felett nyomásra/kopogtatásra',
                'Elülső rhinoscopia: belövellt orrnyálkahártya, purulens váladék a középső orrkagyló alatt',
                'Hátsó garatfali purulens váladékcsorgás (post-nasal drip)',
                'Periorbitalis oedema vagy mocsaras duzzanat jelenléte szövődményre utal!'
              ],
              complications: [
                'Orbitalis szövődmények (Chandler stádiumok: Preseptalis cellulitis, Orbitalis cellulitis, Subperiostealis abscessus, Orbitalis abscessus - látásvesztést okozhat!)',
                'Intracranialis szövődmények (Epiduralis/Subduralis abscessus, Meningitis, Sinus cavernosus thrombosis)',
                'Osseus szövődmények (Pott\'s puffy tumor - a os frontale osteomyelitise és homloktájéki fluctuáló subperiostealis tályog)'
              ]
            },
            diagnostics: {
              laboratory: [
                { test: 'CRP és fvs-szám', finding: 'Virálisban normális/enyhe; ABRS-ben és szövődményben emelkedett CRP (>30-50 mg/L) és leukocytosis', interpretation: 'A bakteriális etiológia megerősítésére' }
              ],
              imaging: [
                { modality: 'Arcüreg CT (Arckoponya CT)', finding: 'Sinus maxillaris/frontalis/ethmoidalis komplett fedettsége, nívót képző folyadék, nyálkahártya-megvastagodás (>4mm) vagy csontos erózió', significance: 'Rutinszerűen NEM javasolt szövődménymentes esetben! KIZÁRÓLAG szövődmény gyanúja, terápiarezisztencia vagy mûtéti tervezés (FESS) esetén kötelező!' },
                { modality: 'Röntgen (Rieder/Waters felvétel)', finding: 'Folyadéknívó', significance: 'Korszerű irányelvekben (EPOS 2020) ALACSONY SENZITIVITÁSA MIATT MÁR NEM JAVASOLT!' }
              ]
            },
            differential: [
              { disease: 'Virális Rhinosinusitis (Közönséges Nátha)', description: 'Tünetek tartama <10 nap, lázmentes vagy alacsony hőemelkedés, serosus/vizes váladék' },
              { disease: 'Allergiás Rhinitis', distinguishing: 'Tüsszögés, szemviszketés, vizes orrfolyás, szezonális/perenniális lefolyás, eozinofília' },
              { disease: 'Odontogén Sinusitis Maxillaris', distinguishing: 'Felső őrlőfogak gyulladása/periapicalis abscessus okozza; kifejezetten bűzös (anaerob) egyoldali orrfolyás' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'INTRANASALIS KORTIKOSZTEROID (INCS - Mometason, Fluticason)', dose: '2x2 fújás orrnyílásként naponta', duration: '14-21 nap', note: 'AZ AKUT RHINOSINUSITIS EGÉSZSÉGÜGYI ALAPTERÁPIÁJA (EPOS 2020)! Erőteljesen csökkenti a nyálkahártya-ödémát és nyitja az ostiumokat.' },
                  { drug: 'Orrmosás isotonias/hypertonias sós oldattal', dose: 'Napi 2-3 alkalommal orrmosó kancsóval', duration: '10-14 nap', note: 'Eltávolítja a pangó nyákot és javítja a ciliaris clearance-t' },
                  { drug: 'Amoxicillin / Clavulanate (Augmentin / Amoksiklav)', dose: '2x875/125 mg PO (vagy nagy dózis: 2x1000 mg PO)', duration: '5-7 nap (felnőtt) / 10 nap (gyermek)', note: 'I. VONALBELI ANTIBIOTIKUM Kizárólag igazolt ABRS (bakteriális) diagnózis esetén! Rutin adása virális rhinosinusitisben HIBÁS.' },
                  { drug: 'Doxycyclin PO VAGY Cefuroxim axetil PO', dose: 'Doxycyclin: 1x200mg D1, majd 1x100mg PO; Cefuroxim: 2x500mg PO', duration: '5-7 nap', note: 'Penicillin allergia esetén választandó alternatívák felnőttben' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon IV + Metronidazol IV', dose: 'Ceftriaxon 1x2g IV + Metronidazol 3x500mg IV', duration: '10-14 nap', note: 'Súlyos, szövődményes (orbitalis/intracranialis) vagy szeptikus beteg ápolására' }
                ],
                icu: [
                  { drug: 'Sürgős FESS mûtét (Functional Endoscopic Sinus Surgery)', dose: '-', duration: '-', note: 'Orbitalis/intracranialis tályog, csontdestrukció vagy konzervatív terápiás kudarc esetén azonnali sinus drenázs' }
                ]
              },
              targeted: 'Bakteriális tenyésztés (középső orrjáratból vett váladék) alapján célzott antibiotikum terápia.',
              supportive: ['Lokális sympathomimeticus orrcseppek/spray-k (Xylometazolin, Oxymetazolin) max 5-7 napig (RHINITIS MEDICAMENTOSA veszély!)', 'Szisztémás NSAID / Paracetamol fájdalomcsillapításra', 'Bőséges folyadékpótlás'],
              prevention: [
                '1. LÉGÚTI VAKCINÁCIÓK A BAKTERIÁLIS SZUPERINFEKCIÓ MEGELŐZÉSÉRE:',
                '- PNEUMOCOCUS VAKCINÁK (PCV15, PCV20, PCV24): Kifejezetten csökkentik a <i>Streptococcus pneumoniae</i> okozta invazív és sinusitises megbetegedéseket.',
                '- HAEMOPHILUS INFLUENZAE B (Hib) oltás a gyermekkori oltási rendben.',
                '- ÉVES INFLUENZA OLTÁS: Megelőzi a poszt-influenzás súlyos bakteriális felülfertőződéseket.',
                '2. Allergiás rhinitis és orrsövény-ferdülés időben történő szakszerű kezelése.'
              ]
            },
            prognosis: {
              mortality: 'Szövődménymentes esetben 0%; orbitalis/intracranialis szövődménnyel (még ma is) 2-10% mortalitás vagy maradandó látásvesztés/neurológiai deficit.',
              prognostic_scores: ['EPOS 2020 stádiumbeosztás'],
              factors: 'Korai INCS és adekvát orröblítés, szövődmények időben történő felismerése (CT/FESS)'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sinusitis_01.jpg',
                caption: 'Sinusitis maxillaris (arcüreggyulladás) CT felvételen látható folyadéknívóval.',
                type: 'Képalkotás'
              }
            ]
          },
          {
            id: 'otitis_media',
            name: 'Otitis media acuta (Akut Gennyes Középfülgyulladás - AOM)',
            pathogen: { type: 'Baktérium / Vírus', name: 'Baktériumok (60-70%): <i>Streptococcus pneumoniae</i> (leggyakoribb és legsúlyosabb), <i>Haemophilus influenzae</i> (non-typeable NTHi), <i>Moraxella catarrhalis</i>, <i>Streptococcus pyogenes</i>; Virális ko-fertőzés (30-40%): RSV, Influenza, Rhinovirus, Adenovirus', gram: 'Vegyes', shape: 'coccus / bacillus' },
            epidemiology: {
              incidence: 'A kora gyermekkori életkor leggyakoribb bakteriális fertőzése; a gyermekek >80%-a átesik legalább egy AOM epizódon 3 éves koráig (csúcs 6-24 hónapos kor között)',
              risk_groups: ['Csecsemők és kisgyermekek (anatómiailag rövid, vízszintes Eustach-kürt!)', 'Bölcsődébe/óvodába járó gyermekek', 'Passzív dohányzásnak kitett gyermekek', 'Cumi használata, üvegből fekve táplálás', 'Acrofacialis rendellenesség / Csípőpadlás-hasadék'],
              seasonality: 'Téli és kora tavaszi hónapok',
              transmission: 'Virális felsőlégúti fertőzést követő endogén fülkürt-dysfunctio és bakteriális transslocatio'
            },
            pathomechanism: {
              steps: [
                'Virális felsőlégúti fertőzés következtében a nasopharynx és az Eustach-kürt (fülkürt) nyálkahártyája megduzzad.',
                'A fülkürt elzáródása miatt a cavum tympani-ban (dobüreg) negatív nyomás alakul ki, ami a nasopharyngealis váladék és baktériumok aspirációjához vezet.',
                'A dobüregben gyulladásos exsudatum és purulens exudátum halmozódik fel, ami a dobhártya fokozott nyomását, elődomborodását (bulging) és ischaemiás fájdalmát okozza.',
                'A kezeletlen nyomásemelkedés a dobhártya spontán perforációjához és otorrhoeához (fülfolyáshoz) vezethet.'
              ],
              virulence_factors: ['Pneumococcus pneumolysin és kapszula', 'NTHi adherenciás pili és biofilm képzés', 'Béta-laktamáz termelés (<i>M. catarrhalis</i> >90%, <i>H. influenzae</i> ~30-40%)']
            },
            clinical: {
              incubation: 'Virális náthás epizódot követő 2-7. napon lép fel',
              onset: 'Hirtelen, gyakran éjszaka fellépő éles fülfájdalom',
              symptoms: [
                { name: 'Klasszikus Gyermekkori Tünetek', description: 'Hirtelen kezdődő, lüktető, rendkívül heves fülfájás (otalgia), magas láz (≥38.5-39°C), halláscsökkenés (vezetési típusú hypacusis).', severity: 'severe' },
                { name: 'Csecsemőkori Nem-specifikus Tünetek', description: 'Vigasztalhatatlan sírás, ingerlékenység, éjszakai felriadás, a beteg fülhöz való kapkodás/dörzsölés, étvágytalanság, hányás, hasmenés.', severity: 'moderate' },
                { name: 'Otorrhoea (Fülfolyás)', description: 'A dobhártya spontán perforációját követően gennyes fülfolyás alakul ki, melyet a fülfájás és láz hirtelen enyhülése kísér.', severity: 'moderate' }
              ],
              physical_exam: [
                'Otoszkópia / Pneumatkus otoszkópia (Gold standard):',
                '  * Elődomborodó (bulging), sárgás/vörös, nem áttetsző, hyperaemiás dobhártya',
                '  * A dobhártya mobilitásának kifejezett csökkenése vagy hiánya',
                '  * A fényreflex és a kalapácsnyél kontúrjainak eltűnése',
                'Tragus-érzékenység és a csecsemő sírása a fül megnyomására',
                'Cimbalom/mastoid feletti erythema, oedema vagy a fülkagyló elálló helyzete MASTOIDITIS-re utal!'
              ],
              complications: [
                'Akut Mastoiditis (a cselédsejtek gennyes beolvadása és a retroauricularis régió fluctuating oedemája - SÜRGŐS FÜL-ORR-GÉGÉSZETI MŰTÉT / MASTOIDECTOMIA!)',
                'Facialis paresis (n. VII. gyulladásos kompressziója)',
                'Labyrinthitis és Sensorineuralis hallásvesztés',
                'Bezold-tályog (m. sternocleidomastoideus alatti tályog)',
                'Intracranialis szövődmények (Epiduralis tályog, Otogen Meningitis, Sinus sigmoideus thrombosis)'
              ]
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép és CRP', finding: 'Magas láz és súlyos tünetek esetén kifejezett leukocytosis és emelkedett CRP (>40-80 mg/L)', interpretation: 'Bakteriális AOM megerősítésére' }
              ],
              imaging: [
                { modality: 'Otoszkópia / Otomikroszkópia', finding: 'Elődomborodó, hyperaemiás dobhártya csökkent mobilitással', significance: 'AOM alapvető diagnosztikai eszköze' },
                { modality: 'Koponya / Temporalis CT', finding: 'Mastoid sejtek komplett fedettsége és csontos trabeculák destruktív beolvadása', significance: 'KIZÁRÓLAG Mastoiditis vagy intracranialis szövődmény gyanújakor!' }
              ]
            },
            differential: [
              { disease: 'Otitis media serosa (OME - Savós középfülgyulladás)', distinguishing: 'NINCS akut gyulladás, láz vagy fájdalom! A dobhártya mögött folyadéknívó/légbuborékok láthatók, áttetsző fénytelen dobhártyával.' },
              { disease: 'Otitis externa acuta (Hallójárat-gyulladás)', distinguishing: 'A tragus nyomására és a fülkagyló húzására szörnyű fájdalom váltódik ki; a dobhártya ép, a hallójárat szűk és oedemás.' },
              { disease: 'Kisgyermekkori fogzás / Pharyngitis miatti kisugárzó fájdalom', distinguishing: 'Otoszkóppal a dobhártya teljesen ép és mobilis.' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'SZIKSZTÉMÁS FÁJDALOMCSILLAPÍTÁS (Ibuprofen / Paracetamol)', dose: 'Ibuprofen 10 mg/kg q6h VAGY Paracetamol 15 mg/kg q6h PO/PR', duration: '3-5 nap', note: 'AZ AOM TERÁPIÁJÁNAK LEGFŐBB ELSŐ LÉPÉSE! A fájdalomcsillapítást AZONNAL el kell indítani.' },
                  { drug: '"WATCHFUL WAITING" (Várakozó álláspont - AAP / ECDC irányelvek)', dose: 'Szigorú fájdalomcsillapítás + 48-72 órás megfigyelés', duration: '48 óra', note: 'ALKALMAZHATÓ: ≥2 éves gyermeknél, enyhe tünetekkel, egyoldali AOM esetén, amennyiben a szoros kontroll biztosított. Az esetek >60-80%-a sponte gyógyul!' },
                  { drug: 'AMOXICILLIN (Nagy dózisú orális terápia)', dose: '80-90 mg/kg/nap PO 2-3 adagban (felnőtt: 3x1000 mg PO)', duration: '10 nap (<2 év) / 5-7 nap (>2 év)', note: 'I. VONALBELI ANTIBIOTIKUM! Kötelezően azonnal indítandó: 1) <6 hónapos csecsemőnél; 2) Kétoldali AOM-ben <2 évesnél; 3) Magas láz (≥39°C) és súlyos fájdalom esetén; 4) Perforált fülfolyás (otorrhoea) esetén!' },
                  { drug: 'Amoxicillin / Clavulanate (Nagy dózisú)', dose: '90 mg/kg/nap Amoxicillin komponensre méretezve (felnőtt: 2x1000 mg PO)', duration: '7-10 nap', note: 'Indikált: 30 napon belüli korábbi amoxicillin kezelés, egyidejű purulens conjunctivitis (H. influenzae gyanú) vagy Amoxicillin kudarc (48h után) esetén.' },
                  { drug: 'Cefdinir / Cefuroxim axetil / Azithromycin', dose: 'Cefuroxim: 30 mg/kg/nap PO; Azithromycin: 10 mg/kg D1, majd 5 mg/kg 2-5. nap', duration: '5-10 nap', note: 'Penicillin allergia esetén választandó alternatívák' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon IV / IM', dose: '50 mg/kg IV / IM naponta egyszer', duration: '1-3 nap', note: 'Hányó, gyógyszert bevenni képtelen gyermeknél vagy konzervatív terápia kudarca esetén' }
                ],
                icu: [
                  { drug: 'Sürgős Paracentesis (Dobhártya bemetszés) + Mastoidectomia', dose: '-', duration: '-', note: 'Akut Mastoiditis, szövődmény vagy elviselhetetlen fájdalom esetén fül-orr-gégészeti myringotomia és szellőztető tubus (Grommet) behelyezése' }
                ]
              },
              targeted: 'Fülfolyásból vagy paracentesisből származó váladék tenyésztése alapján célzott béta-laktám antibiotikum.',
              supportive: ['Azonnali orális NSAID / Paracetamol (A fülcseppek zárt dobhártyánál hatástalanok, perforáltnál KONTRAINDIKÁLTAK!)', 'Orrcsepp / Orrszívás a fülkürt szellőzésének javítására'],
              prevention: [
                '1. VAKCINÁCIÓK MEGHATÁROZÓ SZEREPA KÖZÉPFÜLGYULLADÁS MEGELŐZÉSÉBEN:',
                '- PNEUMOCOCCUS KONJUGÁLT VAKCINÁK (PCV13, PCV15, PCV20): A kötelező csecsemőkori PCV oltási rend bevezetése óta az invazív és súlyos Pneumococcus okozta AOM epizódok száma >60-80%-kal csökkent!',
                '- HAEMOPHILUS INFLUENZAE B (Hib) oltás (Hexavalens oltóanyag részeként 2, 3, 4 és 18 hónaposan).',
                '- ÉVES INFLUENZA VÁRKONJUGÁLT OLTÁS: 30-50%-kal csökkenti a szezonális poszt-influenzás AOM kialakulását kisgyermekekben.',
                '2. RIZIKÓTÉNYEZŐK CSÖKKENTÉSE: Szoptatás támogatása 6 hónapos korig, passzív dohányzás megszüntetése, cumi használatának korlátozása 6 hónapos kor után.'
              ]
            },
            prognosis: {
              mortality: 'Szövődménymentes esetben 0%; Akut Mastoiditis és intracranialis szövődmények esetén 1-3%.',
              prognostic_scores: ['AOM Severity Score'],
              factors: 'Csecsemőkor (<6 hónap), PCV oltási státusz, gyors adekvát fájdalomcsillapítás és adekvát amoxicillin dózis'
            },
            gallery: [
              {
                url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blausen_0871_TympanicMembrane_2.png',
                caption: 'Otitis media acuta (AOM) során látható elődomborodó, belövellt dobhártya.',
                type: 'Otoszkópia'
              }
            ]
          }
        ]
      }
});          
