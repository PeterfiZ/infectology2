import { Category } from '../types';

export const gastrointestinalHu: Category = {
  name: 'Gastrointestinalis fertőzések',
  icon: '🦠',
  color: '#dc2626',
  tables: [
    {
      title: 'Hasmenéssel járó kórképek differenciáldiagnosztikája',
      headers: ['Kórokozó', 'Klinikai kép', 'Terjedés / Rizikó', 'Diagnosztika', 'Kezelés'],
      rows: [
        ['Campylobacter jejuni', 'Láz, görcsös hasi fájdalom (pseudoappendicitis), vizes/véres széklet', 'Baromfi, pasztörizálatlan tej', 'Széklet tenyésztés (42°C), PCR', 'Szupportív; Súlyos/rizikó: Azithromycin 500mg 3 napig'],
        ['Salmonella enteritidis', 'Láz, hányinger, hányás, vizes hasmenés, ritkán véres', 'Tojás, baromfi, hüllők', 'Széklet tenyésztés', 'Nem-komplikált esetben AB TILOS! Súlyos/rizikó (>65 év, immunszuppr.): Ceftriaxon 1-2g IV vagy Azithromycin 500mg PO'],
        ['Shigella spp.', 'Magas láz, tenesmus, kis volumenű véres/nyákos széklet (dysenteria)', 'Feko-orális, emberről emberre (alacsony fertőző dózis)', 'Széklet tenyésztés, PCR, Shiga-toxin', 'Azithromycin 500mg 3 napig vagy Ceftriaxon 1-2g IV (terjedés csökkentése, tünetmentesítés)'],
        ['EHEC (STEC)', 'Vizes, majd kifejezetten véres hasmenés, LÁZ NÉLKÜL. HUS rizikó!', 'Nyers marhahús, szennyezett zöldségek/víz', 'Széklet Shiga-toxin ELISA/PCR, Sorbitol-MacConkey', 'Szupportív. ANTIBIOTIKUM TILOS (4-20x-osára növeli a HUS kockázatát!)'],
        ['Clostridioides difficile', 'Vizes, bűzös ("lószagú") hasmenés, láz, leukocytosis. Pseudomembranosus colitis.', 'Antibiotikum kezelés után (clindamycin, kinolonok, cephalosporinok), PPI', 'Széklet GDH + Toxin A/B ELISA, PCR (2-lépcsős algoritmus)', 'Fidaxomicin 2x200mg PO 10 napig (1. választás) vagy Vancomycin 4x125mg PO 10 napig'],
        ['Vibrio cholerae', 'Extrém volumenű, fájdalmatlan, "rizslé-szerű" vizes széklet, gyors dehidráció', 'Szennyezett víz, tenger gyümölcsei', 'Különleges tenyésztés (TCBS), PCR', 'Azonnali agresszív rehidráció (WHO ORS / Ringer-laktát IV!); Doxycyclin 300mg egyszeri dózis'],
        ['Yersinia enterocolitica', 'Láz, jobb alsó quadráns fájdalom (pseudoappendicitis), hasmenés, erythema nodosum', 'Sertéshús, kontaminált tej (psychrophil: 4°C-on szaporodik)', 'Széklet tenyésztés (CIN agar), PCR', 'Szupportív; Súlyos/sepsis: Ciprofloxacin 2x500mg vagy Doxycyclin 2x100mg'],
        ['Rotavírus', 'Hányás, láz, vizes ozmotikus hasmenés főleg kisgyermekekben', 'Feko-orális', 'Széklet antigén gyorsteszt, PCR', 'Szupportív (ORS, rehidráció). Vakcina elérhető (Rotarix, RotaTeq)!'],
        ['Norovírus', 'Hirtelen fellépő heves hányás ("téli hányás"), vizes hasmenés. Járványok zárt közösségben.', 'Feko-orális, aerosol (hányáskor), kagylók', 'Széklet PCR', 'Szupportív (ORS, Ondansetron). Alkoholos kézfertőtlenítőre rezisztensek spóraszerűen (szappanos kézmosás!)'],
        ['Giardia duodenalis', 'Krónikus, zsíros, bűzös hasmenés, fogyás, puffadás, kénes böfögés', 'Kontaminált víz (hegyi patakok), feko-orális', 'Széklet mikroszkópia (ciszta/trophozoita), antigén gyorsteszt', 'Metronidazol 3x250-500mg 5-7 napig, vagy Tinidazol 2g per os egyszeri. Terhességben: Paromomycin'],
        ['Cryptosporidium parvum', 'Vizes hasmenés, immunkompetensben önkorlátozó, HIV/AIDS-ben krónikus/életveszélyes', 'Víz (uszodák - klórrezisztens oociszták)', 'Acid-fast (Ziehl-Neelsen) festés, antigén gyorsteszt, PCR', 'Immundompetens: Nitazoxanid 2x500mg 3 napig; HIV-ben: Antiretrovirális terápia (ART) az immunrekonstrukcióhoz!'],
        ['Entamoeba histolytica', 'Véres-nyákos dysenteria ("lombik alakú" fekélyek), amőbás májtályog', 'Feko-orális (trópusi utazás)', 'Széklet PCR/antigén, szerológia, máj UH/CT', 'Kéblépcsős: 1. Metronidazol 3x750mg 7-10 napig (szöveti) + 2. Paromomycin 3x500mg 7 napig (luminális - KÖTELEZŐ!)']
      ]
    }
  ],
  diseases: [
    {
      id: 'cdiff',
      name: 'Clostridioides difficile fertőzés (CDI)',
      pathogen: { type: 'Baktérium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-pozitív', shape: 'spóraképző anaerob pálca' },
      epidemiology: {
        incidence: 'A leggyakoribb nosocomialis és antibiotikum-asszociált hasmenéses kórkép',
        risk_groups: ['Idősek (>65 év)', 'Antibiotikumot szedők (clindamycin, fluorokinolonok, 3. gen. cephalosporinok, carbapenemek)', 'Hosszú kórházi ápolás', 'PPI (protonpumpagátló) szedés', 'IBD', 'Immunszupprimáltak'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális (spórák útján - rezisztensek az alkoholos kézfertőtlenítőre! Szappanos kézmosás és spóraölő szerek szükségesek).'
      },
      pathomechanism: {
        steps: [
          'Flóra diszbiózis: Az antibiotikum kezelés elpusztítja a normál védő bélflórát, lehetőséget adva a C. difficile megtelepedésének és túlszaporodásának.',
          'Spóra csírázás: A szájon át bejutott spórák az epesavak (taurokólsav) hatására kicsíráznak a vékonybélben.',
          'Toxin termelés: A vegetatív alakok a vastagbélben megtelepedve Toxin A-t (enterotoxin, TcdA) és Toxin B-t (citotoxin, TcdB - 10-szer potensebb) termelnek. Hypervirulens törzsek (pl. BI/NAP1/027) bináris toxint (CDT) is termelnek.',
          'Hámkárosodás: A toxinok inaktiválják a Rho GTP-ázokat, megbontva a sejt cytoskeletális szerkezetét és a tight junction-öket, sejtpusztulást és gyulladást okozva.',
          'Pseudomembrán képződés: Az elhalt hámsejtekből, fibrinből, mucinból és neutrofil granulocytákból sárgásfehér lepedékek (pseudomembránok) képződnek a vastagbél nyálkahártyáján.'
        ],
        virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Bináris toxin (CDT)', 'Spóraképzés', 'Adherencia faktorok']
      },
      clinical: {
        incubation: 'Antibiotikum szedés alatt vagy után (akár 8-12 hét múlva is)',
        onset: 'Akut vagy szubakut',
        symptoms: [
          { name: 'Hasmenés', description: 'Vizes, bőséges, jellegzetesen bűzös ("lószagú") zöldes hasmenés (napi 3-15+ alkalom).', severity: 'moderate' },
          { name: 'Hasi fájdalom', description: 'Görcsös alhasi fájdalom, diffúz érzékenység.', severity: 'moderate' },
          { name: 'Szisztémás jelek', description: 'Láz, kifejezett leukocytosis (>15 G/L), hypoalbuminemia, dehidráció.', severity: 'severe' },
          { name: 'Fulmináns colitis / Toxikus megacolon', description: 'Gyakran leáll a hasmenés (paralyticus ileus miatt!), hirtelen feszülő, fájdalmas has, shock, bélperforáció és szepszis alakul ki.', severity: 'severe' }
        ],
        physical_exam: [
          'Hasi diffúz érzékenység, distensio',
          'Láz, tachycardia, hypotonia',
          'Toxikus megacolon esetén: kifejezett peritonealitás, defence, bélhangok hiánya'
        ],
        complications: ['Toxikus megacolon', 'Bélperforáció', 'Szepszis / Septikus shock', 'Dehidráció, akut veseelégtelenség', 'Rekurrencia (20-30%)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett leukocytosis (fvs >15 G/L súlyos, >30 G/L fulmináns fertőzést jelez)', interpretation: 'Szisztémás gyulladás' },
          { test: 'Albumin', finding: '<30 g/L', interpretation: 'Fehérjevesztő enteropathia, súlyossági jel' },
          { test: 'Kreatinin', finding: '>1.5x emelkedés az alapértékhez képest vagy >177 µmol/L', interpretation: 'Prerenalis veseelégtelenség (súlyossági kritérium)' },
          { test: 'Laktát', finding: '>2.2 mmol/L', interpretation: 'Súlyos szövődmény / bélischaemia jele' }
        ],
        imaging: [
          { modality: 'Has/kismedence CT', finding: 'Vastagbél fal megvastagodás ("accordion sign"), ascites', significance: 'Súlyosság és szövődmények felmérése' },
          { modality: 'Hasi röntgen', finding: 'Tágult colon (>6 cm)', significance: 'Toxikus megacolon gyanú esetén kötelező' }
        ],
        microbiology: [
          { test: 'Kétlépcsős széklet vizsgálat', finding: '1. lépés: GDH (Glutamát-dehidrogenáz) antigén + Toxin A/B ELISA. 2. lépés: ha GDH+ de Toxin-, akkor PCR (tcdB gentiplálás)', significance: 'IDSA/ESCMID ajánlás szerinti diagnosztikai algoritmus' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 nap', note: 'I. választandó szer (legalacsonyabb rekurrencia!)' },
            { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10 nap', note: 'Alternatíva, ha a fidaxomicin nem elérhető' }
          ],
          inpatient: [
            { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 nap', note: 'Preferált I. választandó szer' },
            { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10-14 nap', note: 'Alternatív orális terápia' }
          ],
          icu: [
            { drug: 'Vancomycin', dose: '4x500mg PO/szondán át + rektális beöntés (500mg/100mL)', duration: '10-14 nap', note: 'Fulmináns CDI esetén' },
            { drug: '+ Metronidazol', dose: '3x500mg IV', duration: '10-14 nap', note: 'Ileus esetén (szisztémás penetráció)' },
            { drug: 'Sebészeti konzílium', dose: 'Subtotalis colectomia / Loop ileostomia', duration: '-', note: 'Toxikus megacolon, perforáció, refrakter shock' }
          ]
        },
        targeted: 'ESCmid 2021/2024 & IDSA 2021/2023 irányelvek: 1. Első epizód (nem-súlyos és súlyos): Fidaxomicin 2x200 mg PO 10 napig (első választás) VAGY Vancomycin 4x125 mg PO 10 napig. (Metronidazol már NEM elsővonalbeli szer!). 2. Fulmináns CDI: Vancomycin 4x500 mg PO + Metronidazol 3x500 mg IV + rektális Vancomycin beöntés. 3. Első rekurrencia: Fidaxomicin (ha először Vancomycin volt) vagy Vancomycin taper/pulsed séma + Bezlotoxumab (10 mg/kg IV). 4. Többszörös (≥2) rekurrencia: Széklet mikrobióta transzplantáció (FMT) vagy oralis mikrobiom készítmények.',
        supportive: ['Kiváltó antibiotikum azonnali leállítása', 'Folyadék- és elektrolitpótlás', 'Antimotilitás szerek (Loperamid) strictly KONTRAINDIKÁLTAK!'],
        prevention: ['Antimicrobial stewardship', 'Szigorú kontakt izoláció, szappanos kézmosás (alkohol hatástalan spórákra!)', 'Spóraölő (klórtartalmú) felületfertőtlenítés']
      },
      guidelines: {
        diagnosis: [
          'Gyanú: újonnan jelentkező vizes/bűzös hasmenés (≥3 laza széklet/24h) antibiotikum-expozíció után vagy kórházban',
          'Mikrobiológia: Kétlépcsős algoritmus (GDH + Toxin EIA, majd disszonancia esetén PCR/NAAT); pozitív PCR önmagában kolonizációt is jelezhet!',
          'Klinikai súlyosság: Leukocytosis (>15 G/L) és szérum kreatinin (>1.5x baseline) alapján nem-súlyos vs súlyos besorolás'
        ],
        treatment_indications: [
          'Tünetes betegnél azonnali kezelés indítandó. Kiváltó antibiotikum elhagyása amennyiben lehetséges.'
        ],
        first_line: [
          'Nem-súlyos és Súlyos CDI első epizód: Fidaxomicin 2x200 mg PO 10 napig (preferált) vagy Vancomycin 4x125 mg PO 10 napig.',
          'Fulmináns CDI: Orális/szonda Vancomycin 4x500 mg + IV Metronidazol 3x500 mg + sz.e. rektális Vancomycin beöntés.'
        ],
        supportive: ['Folyadék- és elektrolit korrekció; antimotilitás szerek TILOSAK.'],
        monitoring: ['Leukocytosis, kreatinin, laktát és hasi status naponta súlyos esetben.'],
        prevention: ['Antibiotikum stewardship, szappanos kézmosás, izoláció, spóraölő fertőtlenítés, Bezlotoxumab / FMT rekurrens esetben.'],
        special_populations: ['Idősek, IBD-s betegek, immunszupprimáltak esetén magasabb a rekurrencia és a fulmináns lefolyás kockázata.'],
        dosing: {
          adult: {
            fidaxomicin: '200 mg PO BID (2x/nap) 10 napig',
            vancomycin: '125 mg PO QID (4x/nap) 10 napig (fulminánsban 500 mg PO QID + rektális beöntés)',
            metronidazole_iv: '500 mg IV TID (3x/nap) kiegészítésként fulmináns/ileus esetén',
            bezlotoxumab: '10 mg/kg IV egyszeri infúzió (rekurrencia megelőzésére)'
          },
          pediatric: 'Gyermekeknél Vancomycin 40 mg/kg/nap 4 adagra osztva (max 500 mg/nap) vagy Fidaxomicin testsúly alapú adagolása 6 hónapos kor felett.'
        },
        references: [
          'IDSA/SHEA 2021 Focused Update on C. difficile Guidelines in Adults: https://www.idsociety.org/',
          'ESCMID 2021 update of the treatment guidance document for C. difficile infection in adults'
        ]
      },
      prognosis: {
        mortality: 'Nem szövődményes: <5%; Fulmináns / Toxikus megacolon: 30-50%',
        prognostic_scores: ['ATLAS score'],
        factors: 'Életkor >80 év, leukocytosis >25 G/L, hypoalbuminemia <25 g/L, veseelégtelenség, hypervirulens törzs (NAP1/027)'
      },
      differential: [
        { disease: 'Egyéb AB-asszociált hasmenés (AAD)', distinguishing: 'CDI toxin és GDH teszt negatív, enyhébb lefolyás' },
        { disease: 'Gyulladásos bélbetegség (IBD) fellángolása', distinguishing: 'CDI teszt negatív, kórelőzmény, endoszkópia' },
        { disease: 'Ischaemiás colitis', distinguishing: 'Bal oldali hasi fájdalom, véres széklet, CT angiográfia' }
      ]
    },
    {
      id: 'salmonellosis',
      name: 'Salmonellosis (Nem-typhi Salmonella)',
      pathogen: { type: 'Baktérium', name: '<i>Salmonella enterica</i> (pl. <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'Gyakori ételmérgezés és enteritis (nyári csúcs)',
        risk_groups: ['Csecsemők (<3 hónap)', 'Idősek (>65 év)', 'Immunszupprimáltak (HIV, biológiai terápia, asplenia)', 'Sarlósejtes anémiás betegek', 'Érprothesissel rendelkező betegek'],
        seasonality: 'Nyár és kora ősz',
        transmission: 'Feko-orális: szennyezett élelmiszer (tojás, nyers baromfi, nem pasztőrözött tej), hüllők/terrárium érintése'
      },
      pathomechanism: {
        steps: [
          'A baktériumok lenyelése után túlélik a gyomorsavat és eljutnak a distalis ileumba és a colonba.',
          'A III-as típusú szekréciós rendszer (T3SS) segítségével behatolnak az M-sejtekbe és a bélhámsejtekbe.',
          'A lamina propriában heves neutrofil infiltrációt és gyulladásos szekréciót váltanak ki.',
          'Bakterémia esetén a baktériumok eljuthatnak az érfalakhoz (aneurysma), ízületekhez vagy csontokhoz (osteomyelitis sarlósejtes anémiában).'
        ],
        virulence_factors: ['T3SS-1 és T3SS-2', 'Endotoxin (LPS)', 'Enterotoxin']
      },
      clinical: {
        incubation: '6-72 óra (átlag 12-36 óra)',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Diarrhoe', description: 'Hirtelen kezdődő bőséges vizes, nyákos, néha véres hasmenés, kísérő hányingerrel és hányással.', severity: 'moderate' },
          { name: 'Láz', description: 'Magas láz (38-39°C), hidegrázás, fejfájás.', severity: 'moderate' },
          { name: 'Hasi görcsök', description: 'Diffúz vagy köldök körüli görcsös fájdalom.', severity: 'moderate' }
        ],
        physical_exam: ['Láz', 'Diffúz hasi érzékenység', 'Dehidráció jelei'],
        complications: ['Bakterémia / szepszis (5-10%, főleg idősekben)', 'Endovascularis fertőzés (mycoticus aneurysma)', 'Osteomyelitis / Szeptikus arthritis', 'Reaktív arthritis (Reiter)']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / CRP', finding: 'Leukocytosis, emelkedett CRP', interpretation: 'Bakteriális gyulladás' }],
        microbiology: [
          { test: 'Széklet tenyésztés', finding: 'Salmonella sp. azonosítás', significance: 'Diagnosztikus (Siderophil táptalaj)' },
          { test: 'Hemokultúra', finding: 'Pozitív', significance: 'Lázas, súlyos vagy immunszupprimált betegnél kötelező' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'EGÉSZSÉGES FELNŐTTNEK ANTIBIOTIKUM TILOS (meghosszabbítja az ürítést!)' }],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2g IV 1x/nap', duration: '7-14 nap', note: 'Súlyos / invazív esetben' },
            { drug: 'Azithromycin', dose: '500mg PO 1x/nap', duration: '5-7 nap', note: 'Orális alternatíva' }
          ]
        },
        targeted: 'IRÁNYELV: Egészséges felnőttek nem-komplikált gastroenteritisében ANTIBIOTIKUM KONTRAINDIKÁLT (nem rövidíti a tüneteket, de meghosszabbítja a székletürítést!). Célzott AB kizárólag rizikócsoportban (csecsemő <3 hó, idős >65 év, immunszupprimált, műbillentyű/érprotezis, sarlósejtes anémia, súlyos szepszis) adandó: Ceftriaxon 1-2g IV, Azithromycin 500mg PO, vagy Ciprofloxacin 2x500mg PO (ha érzékeny).',
        supportive: ['Orális rehidrációs só (ORS)', 'Folyadék- és elektrolitpótlás'],
        prevention: ['Élelmiszerhigiénia, tojás és szárnyashús alapos hőkezelése', 'Kézmosás hüllők érintése után']
      },
      guidelines: {
        diagnosis: ['Akut lázas gastroenteritis esetén széklet tenyésztés; láz/szepszis jeleinél hemokultúra.'],
        treatment_indications: ['Csak rizikócsoportokban és invazív fertőzésben indikált az antibiotikum!'],
        first_line: ['Ceftriaxon 1-2 g IV 1x/nap vagy Azithromycin 500 mg PO 1x/nap 5-7 napig.'],
        supportive: ['Folyadékpótlás ORS-sel.'],
        prevention: ['Alapos hőkezelés, konyhai higiénia.'],
        dosing: {
          adult: { ceftriaxone: '1-2 g IV 1x/nap 7-14 nap', azithromycin: '500 mg PO 1x/nap 5-7 nap', ciprofloxacin: '500 mg PO 2x/nap 7-10 nap (érzékenység esetén)' },
          pediatric: 'Ceftriaxon 50-80 mg/kg/nap IV; Azithromycin 10 mg/kg/nap PO.'
        },
        references: ['CDC Salmonella Guidelines: https://www.cdc.gov/salmonella/']
      },
      prognosis: { mortality: 'Alacsony (<0.5%), de szepszis/érduplikatúra fertőzés esetén magas', prognostic_scores: [], factors: 'Életkor, imundeficiencia, vascularis graft' },
      differential: [
        { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés, gyakran erősebb görcsös fájdalom' },
        { disease: 'Shigellosis', distinguishing: 'Kifejezetten véres-nyákos széklet, tenesmus' }
      ]
    },
    {
      id: 'shigellosis',
      name: 'Shigellosis (Vérhas)',
      pathogen: { type: 'Baktérium', name: '<i>Shigella (dysenteriae, flexneri, sonnei, boydii)</i>', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'Világszerte elterjedt, rendkívül fertőző',
        risk_groups: ['Kisgyermekek (bölcsőde, óvoda)', 'MSM', 'Utazók', 'Hajléktalanok'],
        seasonality: 'Nyár és ősz',
        transmission: 'Feko-orális (emberről emberre), extremitásba hajlóan alacsony fertőző dózis (10-100 baktérium!)'
      },
      pathomechanism: {
        steps: [
          'A baktériumok a colont kolonizálják, és M-sejteken át behatolnak a hámsejtekbe.',
          'Az aktin-filamentumok átrendezésével sejtről sejtre terjednek, elkerülve a szérum antitesteket.',
          'Sejtpusztulást, nyálkahártya fekélyesedést és kifejezett gyulladást váltanak ki.',
          'S. dysenteriae 1 Shiga-toxint (Stx) termel, ami vese endothel károsodáshoz és HUS-hoz vezethet.'
        ],
        virulence_factors: ['Shiga-toxin (Stx)', 'Ipa (Invasive plasmid antigen) fehérjék', 'T3SS']
      },
      clinical: {
        incubation: '1-4 nap',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Dysenteria', description: 'Kezdetben vizes, majd klasszikus dysenteria: nagyon gyakori, kis volumenű, véres-nyákos székletürítés.', severity: 'severe' },
          { name: 'Tenesmus', description: 'Kínzó, görcsös, fájdalmas és eredménytelen székelési inger.', severity: 'severe' },
          { name: 'Magas láz', description: 'Hidegrázás, toxikus állapot, gyermekekben lázgörcs.', severity: 'severe' }
        ],
        physical_exam: ['Magas láz', 'Kifejezett alhasi érzékenység', 'Dehidráció jelei'],
        complications: ['Hemolitikus Urémiás Szindróma (HUS - főleg S. dysenteriae 1)', 'Toxikus megacolon', 'Rectalis prolapsus', 'Reaktív arthritis']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis balra tolt fvs képpel', interpretation: 'Invazív gyulladás' }],
        microbiology: [
          { test: 'Széklet tenyésztés', finding: 'Shigella azonosítás', significance: 'Diagnosztikus' },
          { test: 'Széklet PCR panel', finding: 'ipaH gén', significance: 'Rendkívül szenzitív gyorsteszt' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin', dose: '500mg PO 1x/nap (vagy 1g 1x)', duration: '3 nap', note: 'I. választandó szer' },
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3 nap', note: 'Alternatíva (ha a törzs érzékeny)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2g IV 1x/nap', duration: '3-5 nap', note: 'Súlyos kórképnél' }
          ]
        },
        targeted: 'ANTIBIOTIKUM TERÁPIA MINDEN ESETBEN INDIKÁLT (lerövidíti a betegséget és leállítja a közösségi terjedést!). Elsőként választandó: Azithromycin 500 mg PO 1x naponta 3 napig, vagy Ceftriaxon 1-2g IV. (Ciprofloxacin csak érzékeny törzs esetén használható, az XDR Shigella törzsek terjedése miatt!). Antimotilitás szerek (Loperamid) strictly KONTRAINDIKÁLTAK!',
        supportive: ['Folyadékpótlás (ORS)', 'Lázcsillapítás'],
        prevention: ['Szigorú kézhigiéné, szappanos kézmosás', 'Beteg elkülönítése']
      },
      guidelines: {
        diagnosis: ['Véres-nyákos széklet és tenesmus esetén széklet tenyésztés / PCR panel.'],
        treatment_indications: ['Minden igazolt/valószínűsített esetben kötelező az antibiotikum terápia!'],
        first_line: ['Azithromycin 500 mg PO 1x/nap 3 napig, vagy Ceftriaxon 1-2 g IV 3-5 napig.'],
        supportive: ['Rehidráció. Antimotilitás szerek szigorúan TILOSAK!'],
        prevention: ['Kontakt izoláció, higiéniai rendszabályok.'],
        dosing: {
          adult: { azithromycin: '500 mg PO 1x/nap 3 napig (vagy 1 g PO single dose)', ceftriaxone: '1-2 g IV 1x/nap 3-5 nap', ciprofloxacin: '500 mg PO 2x/nap 3 nap (csak érzékenység esetén!)' },
          pediatric: 'Azithromycin 10-12 mg/kg/nap PO 3 napig.'
        },
        references: ['CDC Shigella guidance: https://www.cdc.gov/shigella/']
      },
      prognosis: { mortality: 'Megfelelő kezeléssel <1%, S. dysenteriae 1 járványokban kezeletlenül 10-20%', prognostic_scores: [], factors: 'Gyermekkor, tápláltsági állapot, HUS' },
      differential: [
        { disease: 'EIEC (Enteroinvasive E. coli)', distinguishing: 'Klinikailag megkülönböztethetetlen, tenyésztés/PCR dönt' },
        { disease: 'STEC/EHEC', distinguishing: 'Általában NINCS láz, széklet Shiga-toxin test' }
      ]
    },
    {
      id: 'campylobacter',
      name: 'Campylobacteriosis',
      pathogen: { type: 'Baktérium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negatív', shape: 'hajlított/spirális pálca ("sirályszárny")' },
      epidemiology: {
        incidence: 'A leggyakoribb bakteriális gastroenteritis a fejlett világban',
        risk_groups: ['Csecsemők és kisgyermekek', 'Fiatal felnőttek', 'Immunszupprimáltak'],
        seasonality: 'Nyár és kora ősz',
        transmission: 'Zoonózis: alulsütött baromfi, pasztörizálatlan tej, kontaminált ivóvíz'
      },
      pathomechanism: {
        steps: [
          'Adhézió és Invázió: A baktérium a bélhámsejtekhez tapad és invadálja az ileumot és a colont.',
          'Citotoxin termelés: Cytolethal distending toxin (CDT) gátolja a sejtosztódást és sejtpusztulást vált ki.',
          'Pseudoappendicitis: A mesenterialis nyirokcsomók gyulladása jobb alsó quadráns fájdalmat okoz.',
          'Autoimmunitás: A lipooligoszacharid (LOS) molekuláris mimikrit mutat a peripheralitás idegek GM1 gangliozidjával -> Guillain-Barré szindróma (GBS).'
        ],
        virulence_factors: ['Flagellum (motilitás)', 'Cytolethal distending toxin (CDT)', 'LOS molekuláris mimikri']
      },
      clinical: {
        incubation: '1-7 nap (átlag 2-5 nap)',
        onset: 'Hirtelen, influenzaszerű prodromával',
        symptoms: [
          { name: 'Prodroma', description: 'Láz, fejfájás, izomfájdalom előzi meg a bélpanaszokat 12-24 órával.', severity: 'moderate' },
          { name: 'Pseudoappendicitis', description: 'Kifejezett, görcsös jobb alsó alhasi fájdalom (appendicitist utánoz!).', severity: 'severe' },
          { name: 'Hasmenés', description: 'Kezdetben vizes, majd laza, nyákos és kifejezetten véres székletürítés (napi 10+ alkalom).', severity: 'severe' }
        ],
        physical_exam: ['Hasi diffúz vagy jobb alhasi nyomásérzékenység', 'Láz (>38.5°C)', 'Dehidráció jelei'],
        complications: ['Guillain-Barré szindróma (GBS - 1/1000 eset)', 'Reaktív arthritis (Reiter)', 'Erythema nodosum', 'Post-infectious IBS']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / CRP', finding: 'Leukocytosis, emelkedett CRP', interpretation: 'Infiltratív gyulladás' }],
        imaging: [{ modality: 'Has UH/CT', finding: 'Terminalis ileitis, colitis, mesenterialis lymphadenopathia', significance: 'Appendicitis kizárása' }],
        microbiology: [
          { test: 'Széklet tenyésztés', finding: 'Szelektív táptalajon (Campy-Agar), mikroaerofil környezetben, 42°C-on', significance: 'Diagnosztikus' },
          { test: 'Széklet PCR panel', finding: 'Pozitív', significance: 'Gyors gyorsteszt' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Enyhe esetben elegendő a folyadékpótlás' }],
          inpatient: [{ drug: 'Azithromycin', dose: '500mg PO 1x/nap', duration: '3 nap', note: 'I. választandó antibiotikum' }]
        },
        targeted: 'Kezelés INDIKÁLT: magas láz, kifejezetten véres széklet, napi >8 széklet, elhúzódó panaszok (>1 hét), terhesség, immunszuppresszió esetén. Elsőként választandó: Azithromycin 500 mg PO 1x/nap 3 napig (vagy 1g single dose). (Fluorokinolonok KERÜLENDŐK empirikusan a magas >60% ciprofloxacin rezisztencia miatt!). Loperamid használata KERÜLENDŐ!',
        supportive: ['Folyadék- és elektrolitpótlás (ORS)', 'Lázcsillapítás'],
        prevention: ['Baromfihús alapos átsütése', 'Konyhai keresztszennyeződés elkerülése (külön vágódeszka)']
      },
      guidelines: {
        diagnosis: ['Akut véres hasmenés / pseudoappendicitis esetén széklet tenyésztés 42°C-on vagy PCR.'],
        treatment_indications: ['Célzott AB csak súlyos, lázas, véres vagy immunszupprimált betegnél!'],
        first_line: ['Azithromycin 500 mg PO 1x/nap 3 napig.'],
        supportive: ['ORS, pihenés. Loperamid kerülendő.'],
        prevention: ['Élelmiszerhigiénia.'],
        dosing: { adult: { azithromycin: '500 mg PO 1x/nap 3 napig (vagy 1 g single dose)' }, pediatric: 'Azithromycin 10 mg/kg/nap PO 3 napig.' },
        references: ['CDC Campylobacter guidance: https://www.cdc.gov/campylobacter/']
      },
      prognosis: { mortality: 'Nagyon alacsony (<0.1%)', prognostic_scores: [], factors: 'GBS szövődmény súlyossága' },
      differential: [
        { disease: 'Akut appendicitis', distinguishing: 'Hasmenés hiánya, sebészeti status, UH/CT' },
        { disease: 'Salmonellosis / Shigellosis', distinguishing: 'Széklet tenyésztés' }
      ]
    },
    {
      id: 'ecoli_enteritis',
      name: 'Pathogén E. coli enterititsek (STEC/EHEC, ETEC, EPEC, EIEC)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (diarrheagenic törzsek)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'ETEC: utazók hasmenésének fő oka; STEC/EHEC: élelmiszer eredetű súlyos járványok',
        risk_groups: ['Gyermekek és idősek (STEC/EHEC - HUS rizikó!)', 'Nemzetközi utazók (ETEC)', 'Csecsemők (EPEC)'],
        seasonality: 'Nyár',
        transmission: 'Feko-orális: szennyezett marhahús, zöldség, pasztőrizálatlan tej, víz, uszoda'
      },
      pathomechanism: {
        steps: [
          'STEC/EHEC (pl. O157:H7, O104:H4): Shiga-toxint (Stx1, Stx2) termel. A toxin a vastagbélben haemorrhagiás colitist okoz. Szisztémásan felszívódva a vese glomerulus endotheljéhez kötődik (Gb3 receptor) -> HUS!',
          'ETEC: Hőlabilis (LT) és Hőstabil (ST) enterotoxinok -> hypersecretion (cAMP/cGMP emelés) -> bőséges vizes hasmenés.',
          'EPEC: Attaching and effacing (A/E) lézió intimin révén -> microvillus pusztulás -> ozmotikus/malabsorptiv hasmenés.',
          'EIEC: Hámsejt invázió -> Shigella-szerű dysenteria.'
        ],
        virulence_factors: ['Shiga-toxinok (Stx1, Stx2)', 'LT és ST enterotoxinok', 'Intimin (eae)', 'Invazinok']
      },
      clinical: {
        incubation: 'STEC: 3-4 nap; ETEC: 1-3 nap',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'STEC/EHEC: Véres colitis', description: 'Hirtelen kezdődő vizes, majd kifejezetten bőséges VÉRES HASMENÉS, LÁZ NÉLKÜL vagy enyhe hőemelkedéssel, görcsös alhasi fájdalommal.', severity: 'severe' },
          { name: 'ETEC: Utazók hasmenése', description: 'Bőséges vizes széklet, puffadás, láz nélkül.', severity: 'moderate' },
          { name: 'EIEC: Dysenteria', description: 'Láz, véres-nyákos széklet, tenesmus.', severity: 'severe' }
        ],
        physical_exam: ['STEC: Kifejezett hasi érzékenység, LÁZ HIÁNYA', 'Dehidráció jelei'],
        complications: ['Hemolitikus Urémiás Szindróma (HUS) - STEC után 5-15%-ban (thrombocytopenia, microangiopathias haemolyticus anémia, akut veseelégtelenség)', 'TTP felnőttekben']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / Kreatinin', finding: 'Thrombocytopenia, anémia, kreatinin emelkedés', interpretation: 'HUS KORAI JELE!' }],
        microbiology: [
          { test: 'Széklet Shiga-toxin teszt', finding: 'ELISA / PCR (Stx1/Stx2)', significance: 'STEC/EHEC diagnózis gold standardja' },
          { test: 'Sorbitol-MacConkey agar', finding: 'Sorbitol negatív telepek (O157:H7)', significance: 'Kultúra szűrés' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'STEC/EHEC: ANTIBIOTIKUM STRICTLY TILOS!', dose: '-', duration: '-', note: '4-20x-osára NÖVELI a HUS kockázatát (bakteriolízis & toxin release)!' },
            { drug: 'ETEC: Rifaximin', dose: '3x200mg PO', duration: '3 nap', note: 'Nem-invazív utazók hasmenése' },
            { drug: 'EIEC: Azithromycin', dose: '500mg PO', duration: '3 nap', note: 'Invazív formánál' }
          ]
        },
        targeted: 'CRITICAL GUIDELINE: STEC/EHEC FERTŐZÉSBEN AZ ANTIBIOTIKUM TERÁPIA STRICTLY KONTRAINDIKÁLT, MIVEL DRASZTIKUSAN FOKOZZA A HUS KIALAKULÁSÁNAK KOCKÁZATÁT! Loperamid használata szintén TILOS! Kezelés: Kizárólag szupportív (agresszív IV rehidráció, HUS esetén hemodialízis / eculizumab). ETEC/EIEC esetén sz.e. Rifaximin vagy Azithromycin.',
        supportive: ['Agresszív folyadékpótlás', 'Vesefunkció és vérkép szoros monitorozása'],
        prevention: ['Marhahús alapos átsütése (min. 71°C)', 'Nyers tej és szennyezett zöldségek kerülése']
      },
      guidelines: {
        diagnosis: ['Véres hasmenés láz nélkül → STEC/EHEC gyanú! Shiga-toxin vizsgálat/PCR.'],
        treatment_indications: ['STEC/EHEC esetén ANTIBIOTIKUM TILOS! ETEC/EIEC-nél sz.e. antibiotikum.'],
        first_line: ['STEC: Kizárólag szupportív rehidráció! ETEC: Rifaximin 3x200 mg vagy Azithromycin 1g single dose.'],
        supportive: ['Agresszív rehidráció. Loperamid TILOS!'],
        prevention: ['Alapos sütés-főzés, élelmiszerhigiénia.'],
        dosing: { adult: { rifaximin: '200 mg PO 3x/nap 3 nap', azithromycin: '500 mg PO 1x/nap 3 nap (vagy 1g single dose)' }, pediatric: 'STEC esetén AB szigorúan kerülendő!' },
        references: ['CDC STEC guidance: https://www.cdc.gov/ecoli/']
      },
      prognosis: { mortality: 'ETEC: minimalis; STEC/EHEC: HUS esetén 3-5% halálozás', prognostic_scores: [], factors: 'Gyermekkor/időskor, HUS szövődmény, korai antibiotikum adás (rontja!)' },
      differential: [
        { disease: 'Shigellosis', distinguishing: 'Magas láz van jelen, míg STEC-nél hiányzik' },
        { disease: 'Ischaemiás colitis', distinguishing: 'Idős kor, vascularis rizikó' }
      ]
    },
    {
      id: 'yersiniosis',
      name: 'Yersiniosis',
      pathogen: { type: 'Baktérium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negatív', shape: 'coccobacillus (psychrophil)' },
      epidemiology: {
        incidence: 'Mérsékelt övben téli hónapokban gyakoribb',
        risk_groups: ['Gyermekek', 'Vasterheléses betegek (hemochromatosis, thalassemia, desferrioxamine kezelés)'],
        seasonality: 'Tél',
        transmission: 'Szennyezett nyers sertéshús, pasztörizálatlan tej, kontaminált víz (hűtőszekrényben 4°C-on is szaporodik!)'
      },
      pathomechanism: {
        steps: [
          'A baktériumok a terminalis ileum M-sejtjein keresztül kijutnak a Peyer-plakkokba.',
          'A mesenterialis nyirokcsomókba vándorolva mesenterialis lymphadenitist és terminalis ileitist okoznak (pseudoappendicitis).',
          'Vasterheléses betegekben a siderophor hiánya ellenére a sziderofilt tulajdonság miatt viharos szepszis alakulhat ki.',
          'Késői szövődményként HLA-B27 reaktív arthritis és erythema nodosum lép fel.'
        ],
        virulence_factors: ['Yops (Yersinia outer proteins)', 'T3SS', 'Yersiniabactin (siderophor)']
      },
      clinical: {
        incubation: '4-7 nap',
        onset: 'Fokozatos',
        symptoms: [
          { name: 'Enterocolitis', description: 'Láz, vizes vagy véres hasmenés, hányás.', severity: 'moderate' },
          { name: 'Pseudoappendicitis', description: 'Kifejezett jobb alsó quadráns fájdalom és nyomásérzékenység (vakbélgyulladást utánoz).', severity: 'severe' },
          { name: 'Erythema nodosum / Arthritis', description: 'Fájdalmas piros csomók a lábszáron, kísérő ízületi gyulladás hetekkel a fertőzés után.', severity: 'moderate' }
        ],
        physical_exam: ['Jobb alhasi nyomásérzékenység', 'Láz', 'Erythema nodosum laesiók'],
        complications: ['Reaktív arthritis (HLA-B27 asszociált)', 'Erythema nodosum', 'Sepszis (vasterheléses állapotokban)']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / CRP', finding: 'Leukocytosis, emelkedett CRP', interpretation: 'Bakteriális gyulladás' }],
        imaging: [{ modality: 'Has UH', finding: 'Terminalis ileum falmegvastagodás, megnagyobbodott mesenterialis nyirokcsomók, ép appendix', significance: 'Appendicitis kizárása' }],
        microbiology: [{ test: 'Széklet tenyésztés', finding: 'CIN agar (labornak jelezni kell a hűtött dúsítást!)', significance: 'Diagnosztikus' }]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Nem-komplikált esetben önkorlátozó' }],
          inpatient: [
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 nap', note: 'Súlyos esetben' },
            { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '7-10 nap', note: 'Alternatíva' }
          ]
        },
        targeted: 'Enyhe enterocolitisben csak szupportív kezelés. Súlyos, invazív, pseudoappendicitises vagy vasterheléses betegnél: Ciprofloxacin 2x500mg PO, Doxycyclin 2x100mg PO, vagy Ceftriaxon 1-2g IV.',
        supportive: ['Folyadékpótlás', 'Fájdalomcsillapítás'],
        prevention: ['Nyers sertéshús kerülése', 'Pasztőrözött tej fogyasztása']
      },
      guidelines: {
        diagnosis: ['Jobb alhasi fájdalom + láz + hasmenés → Has UH és széklet tenyésztés CIN agaron.'],
        treatment_indications: ['Kizárólag súlyos, invazív vagy vasterheléses beteg esetén szükséges antibiotikum.'],
        first_line: ['Ciprofloxacin 2x500 mg PO vagy Doxycyclin 2x100 mg PO 7-10 napig.'],
        supportive: ['Folyadékpótlás.'],
        prevention: ['Húsok alapos sütése.'],
        dosing: { adult: { ciprofloxacin: '500 mg PO 2x/nap 7-10 nap', doxycycline: '100 mg PO 2x/nap 7-10 nap' }, pediatric: 'Súlyos esetben TMP-SMX vagy Ceftriaxon.' },
        references: ['CDC Yersinia guidance: https://www.cdc.gov/yersinia/']
      },
      prognosis: { mortality: 'Alacsony (<0.1%), szepszis esetén magas (30-50%)', prognostic_scores: [], factors: 'Vasterheléses állapot, immunszuppresszió' },
      differential: [
        { disease: 'Akut appendicitis', distinguishing: 'UH/CT lelet, sebészeti státusz' },
        { disease: 'Crohn-betegség', distinguishing: 'Krónikus lefolyás, endoszkópia' }
      ]
    },
    {
      id: 'giardiasis',
      name: 'Giardiasis',
      pathogen: { type: 'Protozoon', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'körte alakú (trophozoita) / ovális (ciszta)' },
      epidemiology: {
        incidence: 'A leggyakoribb parazitás bélfertőzés világszerte',
        risk_groups: ['Kisgyermekek (bölcsőde, óvoda)', 'Kempingezők / túrázók (patakvíz fogyasztás)', 'Szelektív IgA-hiányban szenvedők'],
        seasonality: 'Nyár és ősz',
        transmission: 'Feko-orális (ciszták útján - a klórozásnak ellenállnak!), szennyezett ivóvíz, étel'
      },
      pathomechanism: {
        steps: [
          'A lenyelt cisztákból a duodenumban kiszabadulnak a trophozoiták.',
          'A paraziták a ventralis tapadókorongjukkal a vékonybél bolyhainak hámsejtjeihez rögzülnek (nem hatolnak be a szövetekbe).',
          'A bélbolyhok boholyatrophiáját és a diszacharidáz (laktáz) enzimek hiányát váltják ki.',
          'A felszívódási zavar zsíros, bűzös ozmotikus hasmenéshez és malabsorptióhoz vezet.'
        ],
        virulence_factors: ['Ventralis tapadókorong', 'VSP (Variable Surface Proteins)']
      },
      clinical: {
        incubation: '1-3 hét',
        onset: 'Fokozatos',
        symptoms: [
          { name: 'Zsíros hasmenés', description: 'Elhúzódó, krónikus, bűzös, világos, zsíros fényű (steatorrhoea) székletürítés (vér nélkül!).', severity: 'moderate' },
          { name: 'Puffadás és kénes böfögés', description: 'Kifejezett gázképződés, meteorizmus, jellegzetes záptojás szagú böfögés.', severity: 'moderate' },
          { name: 'Fogyás', description: 'A tápanyag- és vitaminmalabsorptio miatt jelentős súlyvesztés.', severity: 'moderate' }
        ],
        physical_exam: ['Has feszülése, meteorizmus', 'Diffúz érzékenység', 'LÁZ HIÁNYZIK'],
        complications: ['Krónikus malabsorptio', 'Szekundér laktóz intolerancia', 'Súlyvesztés / Fejlődésbeli elmaradás gyermekekben']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép', finding: 'Normál fvs, EOSINOPHILIA NINCS (mivel nem invazív szövődmény!)', interpretation: 'Nem-invazív protozoon' }],
        microbiology: [
          { test: 'Széklet parazita vizsgálat', finding: 'Ciszták vagy trophozoiták', significance: '3 külön napi minta szükséges a szakaszos ürítés miatt!' },
          { test: 'Széklet antigén EIA / PCR', finding: 'Giardia specifikus antigén', significance: 'Rendkívül szenzitív gyorsteszt' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Metronidazol', dose: '3x250mg per os (vagy 3x500mg)', duration: '5-7 nap', note: 'Első vonalbeli szer' },
            { drug: 'Tinidazol', dose: '2g per os', duration: 'Egyszeri dózis', note: 'Magas hatékonyság, kényelmes' }
          ]
        },
        targeted: 'Nitroimidazolok: Metronidazol 3x250-500mg PO 5-7 napig, vagy Tinidazol 2g PO egyszeri dózis. Terhességben (főleg I. trimeszterben): Paromomycin 3x500mg PO 7 napig (nem szívódik fel, teljesen biztonságos magzati szempontból!).',
        supportive: ['Laktózmentes diéta szekundér laktáz hiány miatt', 'Folyadékpótlás'],
        prevention: ['Patakvíz/felszíni víz forralása (min. 1 perc) vagy ultraszűrése (<1 mikron)']
      },
      guidelines: {
        diagnosis: ['Elhúzódó zsíros hasmenés + puffadás esetén 3 székletminta parazitológiára vagy antigén EIA.'],
        treatment_indications: ['Minden tünetes beteg kezelendő.'],
        first_line: ['Metronidazol 3x250-500 mg PO 5-7 napig vagy Tinidazol 2 g PO single dose.'],
        supportive: ['Laktózmentes diéta.'],
        prevention: ['Ivóvíz forralása/szűrése.'],
        dosing: {
          adult: { metronidazole: '250-500 mg PO 3x/nap 5-7 nap', tinidazole: '2 g PO single dose' },
          pregnancy: 'Paromomycin 500 mg PO 3x/nap 7 napig (szöveti felszívódás nélkül).',
          pediatric: 'Metronidazol 15-30 mg/kg/nap 3 adagban 5-7 napig.'
        },
        references: ['CDC Giardia guidance: https://www.cdc.gov/parasites/giardia/']
      },
      prognosis: { mortality: 'Kiváló (>99% gyógyulás)', prognostic_scores: [], factors: 'IgA hiány fennállása' },
      differential: [
        { disease: 'Laktóz intolerancia', distinguishing: 'H2 kilégzéses teszt, diéta' },
        { disease: 'Cryptosporidiosis', distinguishing: 'Saválló festés, vizesebb széklet' }
      ]
    },
    {
      id: 'amoebiasis',
      name: 'Amoebiasis (Amőbás dysenteria és májtályog)',
      pathogen: { type: 'Protozoon', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'amőboid (trophozoita vörösvértestekkel) / 4-magvú ciszta' },
      epidemiology: {
        incidence: 'Trópusi és szubtrópusi területeken endémiás',
        risk_groups: ['Trópusi utazók / bevándorlók', 'MSM', 'Intézetben élők'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális: szennyezett ivóvíz és nyers élelmiszer (ciszták)'
      },
      pathomechanism: {
        steps: [
          'A lenyelt 4-magvú cisztákból a vastagbélben megszabadulnak a trophozoiták.',
          'A trophozoiták lectin segítségével a hámsejtekhez tapadnak, és emetikus fehérjebontó enzimekkel (cysteine proteinase) elpusztítják azokat.',
          'Jellegzetes "lombik alakú" (amphora / flask-shaped) mély nyálkahártya fekélyeket hoznak létre.',
          'A vena portae keringéssel a májba jutva lizálják a hepatocytákat -> "szardellapaszta-szerű" (anchovy paste) csokoládébarna tartalmú amőbás májtályogot képeznek.'
        ],
        virulence_factors: ['Gal/GalNAc lectin', 'Cysteine proteinasok', 'Amoebapora']
      },
      clinical: {
        incubation: '2-4 hét (májtályog esetén hónapok-évek is lehetnek)',
        onset: 'Fokozatos',
        symptoms: [
          { name: 'Amőbás dysenteria', description: 'Fokozatosan súlyosbodó véres-nyákos hasmenés, görcsös hasi fájdalommal, kismértékű lázzal.', severity: 'severe' },
          { name: 'Amőbás májtályog', description: 'Jobb bordaív alatti fájdalom, magas láz, izzadás, hepatomegalia, fogyás (akár bélpanaszok nélkül is!).', severity: 'severe' }
        ],
        physical_exam: ['Jobb bordaív alatti nyomás- és ütögetési érzékenység (tályog)', 'Hasi érzékenység a colon lefutása mentén'],
        complications: ['Májtályog ruptúra (pleura, pericardium, peritoneum felé)', 'Bélperforáció', 'Amoeboma (daganatot utánozó granuloma)', 'Agytályog']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / Májenzimek', finding: 'Leukocytosis, emelkedett ALP/GGT, fvs emelkedés', interpretation: 'Máj érintettség' }],
        imaging: [{ modality: 'Has UH / CT', finding: 'Szoliter, kerek, hypoechoic tályog a máj jobb lebenyében', significance: 'Májtályog kimutatása' }],
        microbiology: [
          { test: 'Széklet PCR / Antigén ELISA', finding: 'E. histolytica specifikus', significance: 'Gold standard (elkülöníti az E. dispar-tól!)' },
          { test: 'Szerológia (IgG)', finding: 'Pozitív', significance: 'Invazív fertőzésnél és májtályognál >90%-ban pozitív' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: '1. Metronidazol', dose: '3x750mg PO', duration: '7-10 nap', note: 'Szöveti amőbölő szer (invazív alakra)' },
            { drug: '2. Paromomycin', dose: '3x500mg PO', duration: '7 nap', note: 'Luminális amőbölő szer (KÖTELEZŐ KIEGÉSZÍTÉS!)' }
          ]
        },
        targeted: 'KÉTLÉPCSŐS MANDATORY KEZELÉS: 1. Szöveti amőbölő szer: Metronidazol 3x750 mg PO 7-10 napig (vagy Tinidazol 2g PO 3 napig) AZ INVAZÍV ALAKOKRA. 2. KÖTELEZŐEN KÖVETI Luminális amőbölő szer: Paromomycin 3x500 mg PO 7 napig A BÉLÜREGI CISZTÁK KIIRTÁSÁRA ÉS A RELAPSZUS MEGELŐZÉSÉRE! Májtályog esetén az orális Metronidazol ugyancsak hatékony; drenázs csak ruptúra veszélye vagy bizonytalan diagnózis esetén kell.',
        supportive: ['Folyadékpótlás', 'Fájdalomcsillapítás'],
        prevention: ['Ivóvíz forralása/szűrése trópusokon']
      },
      guidelines: {
        diagnosis: ['Véres széklet vagy májtályog esetén széklet PCR/antigén + szerológia + máj UH.'],
        treatment_indications: ['Minden E. histolytica fertőzés kezelendő!'],
        first_line: ['Metronidazol 3x750 mg PO 7-10 napig, MAJD Paromomycin 3x500 mg PO 7 napig.'],
        supportive: ['Szupportív rehidráció.'],
        prevention: ['Víz- és élelmiszerhigiénia.'],
        dosing: {
          adult: { metronidazole: '750 mg PO 3x/nap 7-10 nap', tinidazole: '2 g PO 1x/nap 3 nap', paromomycin: '500 mg PO 3x/nap 7 nap (luminális kiegészítés!)' },
          pediatric: 'Metronidazol 35-50 mg/kg/nap 3 adagban 7-10 napig.'
        },
        references: ['CDC Amebiasis guidance: https://www.cdc.gov/parasites/amebiasis/']
      },
      prognosis: { mortality: 'Megfelelő kezeléssel <1%, tályog ruptúra esetén 10-20%', prognostic_scores: [], factors: 'Májtályog mérete, korai paromomycin kiegészítés' },
      differential: [
        { disease: 'Bakteriális pyogen májtályog', distinguishing: 'Szeptikusabb, bakteriális tenyésztés, többnyire polymicrobialis' },
        { disease: 'Shigellosis / EIEC', distinguishing: 'Széklet tenyésztés / PCR' }
      ]
    },
    {
      id: 'cryptosporidiosis',
      name: 'Cryptosporidiosis',
      pathogen: { type: 'Protozoon', name: '<i>Cryptosporidium hominis / parvum</i>', gram: 'Módosított Ziehl-Neelsen saválló festés', shape: '4-8 µm kerek oociszta' },
      epidemiology: {
        incidence: 'Gyakori víz eredetű járványok oka (uszodák, vízhálózat)',
        risk_groups: ['HIV/AIDS betegek (CD4 < 100/µL - életveszélyes opportunista!)', 'Kisgyermekek', 'Állatgondozók'],
        seasonality: 'Nyár és ősz',
        transmission: 'Feko-orális: uszodavíz, ivóvíz (a klór-fertőtlenítésnek teljesen ellenáll!), állati kontaktus'
      },
      pathomechanism: {
        steps: [
          'Az oociszták lenyelése után a sporozoiták kiszabadulnak a vékonybélben.',
          'A hámsejtek apikális felszínéhez rögzülnek (intracelluláris, de extracytoplasmatikus elhelyezkedés).',
          'A bélbolyhok atrófiáját és kripta hiperpláziáját okozzák, súlyos szekréciós és ozmotikus hasmenést kiváltva.',
          'Súlyos immunhiányban (CD4 < 100) az epeutakba és pancreassorba is kiterjedhet (sclerotizáló cholangitis).'
        ],
        virulence_factors: ['Klórrezisztens spórafal', 'Szekréciós proteázok']
      },
      clinical: {
        incubation: '7-10 nap',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Vizes hasmenés', description: 'Bőséges, híg vizes hasmenés, görcsös hasi fájdalommal, lázzal.', severity: 'moderate' },
          { name: 'AIDS-asszociált krónikus diarrhea', description: 'CD4 < 100/µL esetén naponta több liternyi, szűnni nem akaró vizes hasmenés, extrém kiszáradás és cachexia.', severity: 'severe' }
        ],
        physical_exam: ['Súlyos dehidráció jelei', 'Súlyos cachexia, malnutritio'],
        complications: ['Súlyos kiszáradás és elektrolit zavar', 'Acalculous cholecystitis / Sclerotizáló cholangitis (AIDS-ben)', 'Halálos kimenetel kezeletlen HIV-ben']
      },
      diagnostics: {
        laboratory: [{ test: 'CD4 szám', finding: '<100/µL', interpretation: 'Súlyos lefolyás rizikója HIV fertőzöttben' }],
        microbiology: [
          { test: 'Széklet festés', finding: 'Saválló oociszták (módosított Ziehl-Neelsen vagy Kinyoun festés)', significance: 'Klasszikus diagnosztika' },
          { test: 'Széklet antigén EIA / PCR', finding: 'Pozitív', significance: 'Legérzékenyebb diagnosztikus módszer' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nitazoxanid', dose: '2x500mg PO', duration: '3 nap', note: 'Immunkompetens betegeknek' },
            { drug: 'ART (Antiretrovirális terápia)', dose: '-', duration: '-', note: 'HIV BETEGEKNÉL AZ IMMUNREKONSTRUKCIÓ A KULCS!' }
          ]
        },
        targeted: 'Immunkompetens betegben: Szupportív rehidráció; sz.e. Nitazoxanid 2x500 mg PO 3 napig. HIV/AIDS betegnél: A TERÁPIA ALAPJA AZ ANTIRETROVIRÁLIS TERÁPIA (ART) MEGKEZDÉSE / OPTIMALIZÁLÁSA a CD4 szám >200/µL fölé emelésére (csak az immunrekonstrukció tudja gyógyítani a fertőzést!). Kiegészítésként Nitazoxanid adható.',
        supportive: ['Agresszív orális/IV folyadék- és elektrolitpótlás', 'Enterális/parenterális táplálásterápia'],
        prevention: ['Ivóvíz forralása / ultraszűrése (<1 mikron)', 'Uszodakerülés hasmenéses epizódot követően 2 hétig']
      },
      guidelines: {
        diagnosis: ['Vizes perzisztáló hasmenés esetén módosított Ziehl-Neelsen festés vagy széklet PCR.'],
        treatment_indications: ['HIV-ben azonnali ART start! Immunkompetensben sz.e. Nitazoxanid.'],
        first_line: ['HIV-ben: ART optimalizálás. Immunkompetensben: Nitazoxanid 2x500 mg PO 3 napig.'],
        supportive: ['Elektrolitpótlás, táplálásterápia.'],
        prevention: ['Víz ultraszűrése.'],
        dosing: { adult: { nitazoxanide: '500 mg PO 2x/nap 3 napig (immunkompetens)' }, pediatric: '1-3 év: 2x100mg; 4-11 év: 2x200mg PO 3 napig.' },
        references: ['CDC Cryptosporidium guidance: https://www.cdc.gov/parasites/crypto/']
      },
      prognosis: { mortality: 'Immunkompetensben jó; AIDS-ben (CD4 <50) ART nélkül magas mortalitás', prognostic_scores: [], factors: 'CD4+ T-sejt szám emelkedése ART hatására' },
      differential: [
        { disease: 'Giardiasis', distinguishing: 'Zsírosabb széklet, kénes böfögés' },
        { disease: 'Isosporiasis / Microsporidiosis', distinguishing: 'Különböző spóraméret és speciális festések' }
      ]
    },
    {
      id: 'viral_gastroenteritis',
      name: 'Vírusos gastroenteritis (Norovírus, Rotavírus, Adenovírus)',
      pathogen: { type: 'Vírus', name: '<i>Norovírus, Rotavírus, Enterális Adenovírus (40/41), Astrovírus</i>', gram: 'RNS / DNS', shape: 'Ikozahidrális burok nélküli vírusok' },
      epidemiology: {
        incidence: 'Norovírus: a leggyakoribb járványos gastroenteritis minden életkorban. Rotavírus: csecsemőkori súlyos dehidráció fő oka.',
        risk_groups: ['Csecsemők és kisgyermekek (Rotavírus)', 'Idősek, otthonokban élők, kórházi betegek (Norovírus)', 'Hajókon / zárt közösségben élők'],
        seasonality: 'Tél és kora tavasz ("winter vomiting disease")',
        transmission: 'Feko-orális, aeroszol (hányáskor!), fomitok. A Norovírus rendkívül ellenálló az alkoholos kézfertőtlenítővel szemben!'
      },
      pathomechanism: {
        steps: [
          'A vírusok a vékonybél villusainak enterocytáit fertőzik meg és elpusztítják azokat.',
          'Boholyatrófia alakul ki, csökken a brush border emésztőenzim (laktáz) aktivitása.',
          'Felszívódási zavar és ozmotikus/szekréciós folyadékkiáramlás jön létre (Rotavírus NSP4 enterotoxinja direkt szekréciót vált ki).',
          'A gyomor ürülése lelassul -> csillapíthatatlan hányás.'
        ],
        virulence_factors: ['Stabil, saválló kapszid', 'NSP4 enterotoxin (Rotavírus)', 'Aeroszol képződés']
      },
      clinical: {
        incubation: '12-48 óra (Norovírus); 1-3 nap (Rotavírus)',
        onset: 'Villámgyors, akut',
        symptoms: [
          { name: 'Sugárhányás', description: 'Hirtelen fellépő, rohamszerű, csillapíthatatlan hányás (különösen Norovírusnál).', severity: 'severe' },
          { name: 'Vizes hasmenés', description: 'Bőséges, vizes székletürítés, hasi görcsökkel és lázzal.', severity: 'moderate' },
          { name: 'Dehidráció', description: 'Gyorsan kialakuló kiszáradás csecsemőkben és idősekben.', severity: 'severe' }
        ],
        physical_exam: ['Dehidráció jelei (száraz nyelv, csecsemőknél besüppedt kútfej, csökkent turgor)', 'Diffúz érzékenység'],
        complications: ['Súlyos hypovolaemiás dehidráció', 'Elektrolit zavarok (hypokalaemia, hyponatraemia)', 'Prerenalis azotemia']
      },
      diagnostics: {
        laboratory: [{ test: 'Elektrolitok / Vese', finding: 'Hypokalaemia, emelkedett karbamid/kreatinin', interpretation: 'Dehidráció mértéke' }],
        microbiology: [
          { test: 'Széklet antigén gyorsteszt', finding: 'Rotavírus / Adenovírus pozitív', significance: 'Gyors laboratóriumi diagnózis' },
          { test: 'Széklet RT-PCR', finding: 'Norovírus genogroup I/II', significance: 'Járványügyi azonosítás' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'ANTIBIOTIKUM TELJESEN HATÁSTALAN ÉS TILOS!' }]
        },
        targeted: 'Nincs specifikus antivirális szer. A KELÉSEK ALAPJA A REHIDRÁCIÓ: Orális rehidráló só (ORS) kis kortyokban. Csillapíthatatlan hányás esetén Ondansetron (0.15 mg/kg PO/IV) adható a hányás leállítására és az IV infúzió elkerülésére. Probiotikumok (Lactobacillus rhamnosus GG, Saccharomyces boulardii) rövidíthetik a lefolyást.',
        supportive: ['ORS adagolás', 'Lázcsillapítás (Paracetamol)', 'Loperamid használata kerülendő!'],
        prevention: ['Rotavírus elleni orális vakcináció csecsemőkorban (Rotarix, RotaTeq)', 'Szappanos kézmosás (az alkoholos kézfertőtlenítők a Norovírust NEM pusztítják el!)', 'Környezet fertőtlenítése klóros szerekkel']
      },
      guidelines: {
        diagnosis: ['Akut hányás és vizes hasmenés esetén klinikai diagnózis; csecsemőknél Rota antigén teszt.'],
        treatment_indications: ['Kizárólag rehidrációs és tüneti terápia!'],
        first_line: ['ORS orálisan; hányásnál Ondansetron adható.'],
        supportive: ['Folyadék- és elektrolitpótlás.'],
        prevention: ['Rotavírus vakcina; szappanos kézmosás Norovírus esetén.'],
        dosing: { adult: { ondansetron: '4-8 mg PO/IV sz.e. hányáscsillapításra' }, pediatric: 'Ondansetron 0.15 mg/kg PO/IV egyszeri dózis.' },
        references: ['CDC Norovirus guidance: https://www.cdc.gov/norovirus/']
      },
      prognosis: { mortality: 'Fejlett országokban nagyon alacsony (<0.01%), dehidráció korrekciója mellett', prognostic_scores: [], factors: 'Életkor (csecsemő/idős), korai rehidráció' },
      differential: [
        { disease: 'Bakteriális enteritis', distinguishing: 'Magas láz, véres széklet, széklet tenyésztés' },
        { disease: 'Ételmérgezés (S. aureus, B. cereus toxin)', distinguishing: 'Hirtelen hányás étkezést követő 1-6 órában' }
      ]
    },
    {
      id: 'cholera',
      name: 'Cholera',
      pathogen: { type: 'Baktérium', name: '<i>Vibrio cholerae</i> (O1, O139 szerotípusok)', gram: 'Gram-negatív', shape: 'hajlított pálca (vibrio)' },
      epidemiology: {
        incidence: 'Endémiás Ázsiában, Afrikában, Haitin; katasztrófasújtotta övezetekben tömeges járványok',
        risk_groups: ['Mélyszegénységben élők', 'Katasztrófa / háború áldozatai', '0-s vércsoportú egyének (súlyosabb lefolyás)'],
        seasonality: 'Esős évszak',
        transmission: 'Feko-orális: szennyezett ivóvíz és tenger gyümölcsei'
      },
      pathomechanism: {
        steps: [
          'A baktériumok a vékonybélben megtapadnak a TCP pilusok segítségével, és Koleratoxint (CT - AB5 toxin) termelnek.',
          'A toxin A alegysége irreverzibilisen ADP-ribozilálja a Gs alfa fehérjét, állandóan aktiválva az adenilát-cikláz enzimet.',
          'Az emelkedett cAMP hatására a CFTR csatornákon át hatalmas mennyiségű kloridion és víz áramlik a bélüregbe (akár 1 liter/óra!).',
          'Villámgyors, életveszélyes hypovolaemiás shock és izotóniás dehidráció alakul ki.'
        ],
        virulence_factors: ['Koleratoxin (CT)', 'Toxin-coregulated pilus (TCP)']
      },
      clinical: {
        incubation: 'Néhány óra - 5 nap',
        onset: 'Villámgyors, drámai',
        symptoms: [
          { name: 'Rizslé-szerű hasmenés', description: 'Fájdalmatlan, óriási volumenű, szagtalan, halványfehér nyákos-vizes széklet ürítése ("rizslé széklet").', severity: 'severe' },
          { name: 'Villámgyors dehidráció', description: 'Órákon belül kialakuló súlyos kiszáradás, kifejezett izomgörcsök (K+ és HCO3- vesztés miatt), anuria, shock.', severity: 'severe' }
        ],
        physical_exam: [
          'Súlyos hypovolaemiás shock (hypotonia, filiformis pulzus)',
          'Washerwoman\'s hands (ráncos bőr, csökkent turgor)',
          'Besüppedt szemgolyók, száraz nyálkahártyák',
          'LÁZ ÁLTALÁBAN HIÁNYZIK'
        ],
        complications: ['Hypovolaemiás shock és halál (kezeletlenül órákon belül!)', 'Akut veseelégtelenség (ATN)', 'Súlyos hypokalaemia és metabolikus acidózis']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / Elektrolitok', finding: 'Hemokoncentráció, súlyos hypokalaemia, metabolikus acidózis', interpretation: 'Maszív volumenvesztés' }],
        microbiology: [
          { test: 'Széklet tenyésztés', finding: 'TCBS (Thiosulfate-Citrate-Bile salts-Sucrose) agaron sárga telepek', significance: 'Diagnosztikus gold standard' },
          { test: 'Gyorsteszt / Sötétlátótér', finding: 'Shooting star (hullócsillag) mozgású vibriók', significance: 'Gyors terepi azonosítás' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'WHO ORS', dose: 'Nagy volumenben', duration: '-', note: 'Enyhe/középsúlyos esetben azzonnal' }],
          inpatient: [
            { drug: 'IV Ringer-laktát', dose: 'Azonnal 100 mL/kg 3 óra alatt', duration: '-', note: 'Súlyos shockban ÉLETMENTŐ!' },
            { drug: 'Doxycyclin', dose: '300mg PO', duration: 'Egyszeri dózis', note: 'Antibiotikum kiegészítés (felnőttek)' },
            { drug: 'Azithromycin', dose: '1g PO', duration: 'Egyszeri dózis', note: 'Terheseknek és gyermekeknek' }
          ]
        },
        targeted: 'AZONNALI AGRESSZÍV REHIDRÁCIÓ AZ ÉLETMENTÉS KULCSA (WHO ORS per os vagy IV Ringer-laktát). Az antibiotikum terápia másodlagos, de csökkenti a folyadékvesztést és a baktériumürítést: Doxycyclin 300 mg PO single dose (felnőtt) vagy Azithromycin 1 g PO single dose (terhes/gyermek).',
        supportive: ['Elektrolit- és kloridpótlás', 'Kálium és bikarbonát korrekció'],
        prevention: ['Tiszta ivóvíz biztosítása', 'Orális kolera vakcina (Dukoral, Shanchol)']
      },
      guidelines: {
        diagnosis: ['Rizslé széklet és shock esetén azonnali kolera gyanú! TCBS tenyésztés.'],
        treatment_indications: ['AZONNALI agresszív infúziós rehidráció! Súlyos esetben antibiotikum kiegészítés.'],
        first_line: ['Ringer-laktát IV + ORS. Doxycyclin 300 mg per os single dose.'],
        supportive: ['Folyamatos volumenmonitorozás.'],
        prevention: ['Ivóvíz-higiénia, orális kolera oltás.'],
        dosing: { adult: { doxycycline: '300 mg PO single dose', azithromycin: '1 g PO single dose' }, pediatric: 'Azithromycin 20 mg/kg PO single dose.' },
        references: ['WHO Cholera guidelines: https://www.who.int/news-room/fact-sheets/detail/cholera']
      },
      prognosis: { mortality: 'Azonnali rehidrációval <1%, kezeletlenül 50% fölötti halálozás!', prognostic_scores: [], factors: 'Azonnali folyadékpótlás megkezdése' },
      differential: [
        { disease: 'ETEC (Enterotoxigenic E. coli)', distinguishing: 'Kevésbé extrém volumenvesztés, utazási anamnézis' },
        { disease: 'Vírusos gastroenteritis', distinguishing: 'Hányás dominál' }
      ]
    },
    {
      id: 'travelers_diarrhea',
      name: 'Utazók hasmenése (Traveler\'s Diarrhea)',
      pathogen: { type: 'Szindróma', name: '<i>ETEC (leggyakoribb), Campylobacter, Salmonella, Shigella, Norovírus, Giardia</i>', gram: 'Változó', shape: '-' },
      epidemiology: {
        incidence: 'A fejlődő országokba utazók 20-50%-át érinti',
        risk_groups: ['Fiatal utazók', 'Immunszupprimáltak', 'PPI-t szedők (csökkent gyomorsav barrier)'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális: szennyezett ivóvíz, jégkocka, nyers zöldség/gyümölcs, utcai étel'
      },
      pathomechanism: {
        steps: [
          'Az utazó szokatlan baktériumtörzsekkel (főleg ETEC) találkozik, amelyek ellen nincs helyi immunitása.',
          'Enterotoxinok vagy hámsejt invázió révén akut gyulladás vagy szekréció alakul ki.'
        ]
      },
      clinical: {
        incubation: 'Utazás alatt vagy a hazaérkezést követő 1-2 héten belül',
        onset: 'Akut',
        symptoms: [
          { name: 'Vizes hasmenés', description: 'Napi 3-8 laza/vizes széklet, görcsös hasi fájdalommal, puffadással.', severity: 'moderate' },
          { name: 'Láz és véres széklet (invazív)', description: 'Invazív kórokozó (Campylobacter, Shigella) jelenlétére utal.', severity: 'severe' }
        ],
        physical_exam: ['Enyhe diffúz hasi érzékenység', 'Dehidráció jelei'],
        complications: ['Dehidráció', 'Post-infectious IBS (az utazók 5-10%-ánál fennmarad)', 'Reaktív arthritis']
      },
      diagnostics: {
        laboratory: [{ test: 'Általános labor', finding: 'Normál', interpretation: 'Enyhe esetben nem szükséges' }],
        microbiology: [{ test: 'Széklet multiplex PCR / tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Kizárólag súlyos, lázas, véres vagy perzisztáló esetben szükséges!' }]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Rifaximin', dose: '3x200mg PO', duration: '3 nap', note: 'Nem-invazív (lázmentes, nem véres) esetben' },
            { drug: 'Azithromycin', dose: '1g PO single dose (vagy 500mg 3 nap)', duration: '1-3 nap', note: 'Súlyos, lázas, véres vagy Délkelet-Ázsiába tett utazás esetén (Campy rezisztencia!)' }
          ]
        },
        targeted: 'IRÁNYELVEK: 1. Enyhe eset: Rehidráció (ORS) + sz.e. Loperamid. 2. Középsúlyos nem-invazív eset: Rifaximin 3x200 mg PO 3 napig. 3. Súlyos, lázas, dysenteriás eset VAGY Délkelet-Ázsiába tett utazás (ahol a Campylobacter fluoroquinolon rezisztenciája >80%): Azithromycin 1000 mg PO single dose vagy 500 mg PO 3 napig.',
        supportive: ['ORS adagolás', 'Loperamid (kizárólag láz- és vérmentes széklet esetén!)'],
        prevention: ['"Boil it, cook it, peel it, or forget it!"', 'Palackozott víz fogyasztása', 'Rifaximin profilaxis csak extrém magas rizikójú immunszupprimáltaknál']
      },
      guidelines: {
        diagnosis: ['Súlyos/lázas utazási hasmenés esetén széklet PCR.'],
        treatment_indications: ['Súlyos, lázas vagy képtelenséget okozó esetben antibiotikum.'],
        first_line: ['Délkelet-Ázsia / dysenteria: Azithromycin 1g single dose. Nem-invazív: Rifaximin 3x200mg 3 nap.'],
        supportive: ['ORS. Loperamid csak ha nincs láz/vér.'],
        prevention: ['Élelmiszer- és vízbiztonság.'],
        dosing: { adult: { azithromycin: '1 g PO single dose (vagy 500 mg PO 1x/nap 3 nap)', rifaximin: '200 mg PO 3x/nap 3 nap' }, pediatric: 'Azithromycin 10 mg/kg PO.' },
        references: ['CDC Traveler\'s Diarrhea Yellow Book: https://wwwnc.cdc.gov/travel/']
      },
      prognosis: { mortality: 'Nagyon alacsony (<0.01%)', prognostic_scores: [], factors: 'Post-infectious IBS kialakulás' },
      differential: [
        { disease: 'Giardiasis', distinguishing: 'Elhúzódó (>2 hét), zsíros széklet, puffadás' },
        { disease: 'Amoebiasis', distinguishing: 'Véres széklet, trópusi utazás' }
      ]
    },
    {
      id: 'dysentery_syndrome',
      name: 'Dysenteria szindróma (Vérhas szindróma)',
      pathogen: { type: 'Szindróma', name: '<i>Shigella, EIEC, STEC/EHEC, Campylobacter, Entamoeba histolytica, Salmonella</i>', gram: 'Változó', shape: '-' },
      epidemiology: {
        incidence: 'Infektológiai sürgősségi állapot',
        risk_groups: ['Gyermekek', 'Idősek', 'Immunszupprimáltak', 'Trópusi utazók'],
        seasonality: 'Nyár és ősz',
        transmission: 'Feko-orális (szennyezett étel, víz, kontaktus)'
      },
      pathomechanism: {
        steps: [
          'A kórokozók (Shigella, EIEC, STEC, Campylobacter, Entamoeba) invadálják a vastagbél hámrétegét.',
          'Súlyos fekélyes gyulladás, nyálkahártya nekrózis és vérzés alakul ki.',
          'Shiga-toxin termelés esetén microvascularis endothel károsodás és HUS jöhet létre.'
        ]
      },
      clinical: {
        incubation: 'Kórokozótól függően 1-7 nap',
        onset: 'Akut',
        symptoms: [
          { name: 'Véres-nyákos széklet', description: 'Gyakori, kis volumenű, kifejezetten véres és nyákos széklet ürítése.', severity: 'severe' },
          { name: 'Tenesmus', description: 'Kínzó, fájdalmas és eredménytelen székelési inger.', severity: 'severe' },
          { name: 'Magas láz', description: 'Toxikus állapottal és hidegrázással (STEC kivételével!).', severity: 'severe' }
        ],
        physical_exam: ['Alhasi kifejezett érzékenység', 'Láz', 'Dehidráció és toxicitás jelei'],
        complications: ['Hemolitikus Urémiás Szindróma (HUS - STEC/Shigella)', 'Toxikus megacolon', 'Bélperforáció', 'Septikus shock']
      },
      diagnostics: {
        laboratory: [{ test: 'Vérkép / Kreatinin', finding: 'Leukocytosis, thrombocytopenia/anémia (HUS gyanú!)', interpretation: 'Súlyosság és HUS szűrés' }],
        microbiology: [
          { test: 'Széklet tenyésztés', finding: 'Bakteriális kórokozók', significance: 'Kötelező' },
          { test: 'Széklet Shiga-toxin teszt / PCR', finding: 'Stx1/Stx2, ipaH', significance: 'STEC és Shigella elkülönítésére KÖTELEZŐ!' },
          { test: 'Széklet parazitológia', finding: 'E. histolytica', significance: 'Amőbás dysenteria gyanújánál' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin', dose: '500mg PO 1x/nap (vagy 1g single)', duration: '3 nap', note: 'I. választandó empirikus szer (Shigella/Campy)' },
            { drug: 'Ceftriaxon', dose: '1-2g IV 1x/nap', duration: '3-5 nap', note: 'Kórházi/súlyos betegnél' }
          ]
        },
        targeted: 'IRÁNYELV: 1. Ha a Shiga-toxin pozitív (STEC/EHEC), az ANTIBIOTIKUM STRICTLY TILOS! 2. Ha Shigella/Campylobacter/EIEC valószínű: Azithromycin 500 mg PO 3 napig vagy Ceftriaxon 1-2g IV. 3. Ha Entamoeba histolytica igazolt: Metronidazol 3x750 mg PO 7-10 napig, MAJD Paromomycin 3x500 mg PO 7 napig. Antimotilitás szerek (Loperamid) strictly KONTRAINDIKÁLTAK!',
        supportive: ['ORS és IV Ringer-laktát rehidráció', 'Szigorú monitorozás HUS irányában'],
        prevention: ['Kontakt izoláció', 'Szigorú kézhigiéné']
      },
      guidelines: {
        diagnosis: ['Véres-nyákos széklet + tenesmus esetén KÖTELEZŐ: Széklet tenyésztés + Shiga-toxin teszt/PCR + Parazitológia.'],
        treatment_indications: ['STEC kizárása után empirikus Azithromycin indítandó.'],
        first_line: ['Azithromycin 500 mg PO 3 napig vagy Ceftriaxon 1-2 g IV.'],
        supportive: ['Agresszív rehidráció. Loperamid TILOS!'],
        prevention: ['Izoláció.'],
        dosing: { adult: { azithromycin: '500 mg PO 1x/nap 3 nap', ceftriaxone: '1-2 g IV 1x/nap 3-5 nap' }, pediatric: 'Azithromycin 10 mg/kg/nap PO 3 napig.' },
        references: ['IDSA Infectious Diarrhea Guidelines: https://www.idsociety.org/']
      },
      prognosis: { mortality: 'Kórokozótól és HUS szövődménytől függően 1-15%', prognostic_scores: [], factors: 'STEC etiologia, HUS, késői paromomycin amőbiázisban' },
      differential: [
        { disease: 'STEC/EHEC', distinguishing: 'Nincs láz, antibiotikum adása rontja!' },
        { disease: 'IBD akut shub', distinguishing: 'CDI és fertőző okok kizárása, endoszkópia' }
      ]
    }
  ]
};
