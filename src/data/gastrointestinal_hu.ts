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
        ['Campylobacter jejuni', 'Láz, görcsös hasi fájdalom (appendicitist utánozhat), vizes/véres széklet', 'Baromfi, pasztörizálatlan tej', 'Széklet tenyésztés, PCR', 'Szupportív; Súlyos/rizikó: Azithromycin 500mg 3 napig'],
        ['Salmonella enteritidis', 'Láz, hányinger, hányás, vizes hasmenés, ritkán véres', 'Tojás, baromfi, hüllők', 'Széklet tenyésztés', 'Szupportív; Súlyos/rizikó (>65 év, immunszuppr.): Ciprofloxacin vagy Ceftriaxon'],
        ['Shigella spp.', 'Magas láz, tenesmus, kis volumenű véres/nyákos széklet (dysenteria)', 'Feko-orális, emberről emberre (nagyon alacsony fertőző dózis)', 'Széklet tenyésztés, PCR', 'Ciprofloxacin vagy Azithromycin javasolt (terjedés csökkentése, lerövidíti a betegséget)'],
        ['EHEC (STEC)', 'Vizes, majd kifejezetten véres hasmenés, láz nélkül vagy enyhe lázzal. HUS rizikó!', 'Nyers marhahús, szennyezett zöldségek', 'Széklet Shiga-toxin ELISA/PCR', 'Szupportív. ANTIBIOTIKUM TILOS (fokozza a toxin felszabadulást és a HUS kockázatát!)'],
        ['Clostridioides difficile', 'Vizes, bűzös hasmenés, láz, leukocytosis. Pseudomembranosus colitis.', 'Antibiotikum kezelés után (clindamycin, kinolonok, PPI)', 'Széklet toxin A+B és GDH, PCR', 'Vancomycin 4x125mg PO vagy Fidaxomicin 2x200mg PO 10 napig'],
        ['Vibrio cholerae', 'Extrém volumenű, fájdalmatlan, "rizslé-szerű" vizes széklet, gyors dehidráció', 'Szennyezett víz, tenger gyümölcsei', 'Különleges tenyésztés (TCBS), PCR', 'Azonnali agresszív rehidráció (fő lépés!); Doxycyclin (csökkenti a tartamot)'],
        ['Yersinia enterocolitica', 'Láz, jobb alsó quadráns fájdalom (pseudoappendicitis), hasmenés', 'Sertéshús, kontaminált tej', 'Széklet tenyésztés (hideg dúsítás)', 'Szupportív; Súlyos: Ciprofloxacin vagy TMP/SMX'],
        ['Rotavírus', 'Hányás, láz, vizes hasmenés főleg kisgyermekekben', 'Feko-orális', 'Széklet antigén gyorsteszt, PCR', 'Szupportív (rehidráció). Vakcina elérhető!'],
        ['Norovírus', 'Hirtelen fellépő heves hányás, vizes hasmenés, enyhe láz. Járványok zárt közösségben.', 'Feko-orális, aerosol (hányáskor), kagylók', 'Széklet PCR', 'Szupportív (rehidráció). Nagyon fertőző!'],
        ['Giardia duodenalis', 'Krónikus, zsíros, bűzös hasmenés, fogyás, puffadás, felszívódási zavar', 'Kontaminált víz (hegyi patakok), feko-orális', 'Széklet mikroszkópia (ciszta/trophozoita), antigén gyorsteszt', 'Metronidazol 3x250-500mg 5-7 napig, vagy Tinidazol'],
        ['Cryptosporidium parvum', 'Vizes hasmenés, immunkompetensben önkorlátozó, HIV-ben krónikus/súlyos', 'Víz (uszodák - klórrezisztens ciszták)', 'Acid-fast festés (széklet), antigén gyorsteszt, PCR', 'Szupportív; Nitazoxanid; HIV-ben antiretrovirális terápia (ART) az immunrekonstrukcióhoz']
      ]
    }
  ],
  diseases: [
    {
      id: 'campylobacter',
      name: 'Campylobacteriosis',
      pathogen: { type: 'Baktérium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negatív', shape: 'hajlított pálca (szárny-alakú)' },
      epidemiology: {
        incidence: 'A leggyakoribb bakteriális gastroenteritis fejlett országokban',
        risk_groups: ['Kisgyermekek', 'Fiatal felnőttek', 'Immunszupprimáltak'],
        seasonality: 'Nyár és kora ősz',
        transmission: 'Zoonózis (alulsütött baromfi, pasztörizálatlan tej, kontaminált víz)'
      },
      pathomechanism: {
        steps: [
          'Adhézió és Invázió: A baktérium a bélhámsejtekhez tapad, majd inváziót hajt végre a csípőbél (ileum) és a vastagbél területén.',
          'Citotoxin termelés: Cytolethal distending toxin (CDT) termelődik, amely gátolja a sejtosztódást és sejtpusztulást okoz.',
          'Gyulladásos válasz: Heves gyulladás alakul ki a lamina propriában (fvs infiltráció), ami nyálkahártya fekélyekhez és véres hasmenéshez vezet.',
          'Autoimmunitás: A baktérium lipooligoszacharidja (LOS) molekuláris mimikrit mutat az emberi perifériás idegek gangliozidjaival (GM1), ami a fertőzés lezajlása után Guillain-Barré szindrómát válthat ki.'
        ],
        virulence_factors: ['Lobogó (motilitás)', 'Cytolethal distending toxin (CDT)', 'LOS (molekuláris mimikri)']
      },
      clinical: {
        incubation: '1-7 nap (átlag 2-5 nap)',
        onset: 'Hirtelen, gyakran influenzaszerű prodromával',
        symptoms: [
          { name: 'Prodroma', description: 'Láz, fejfájás, izomfájdalom előzi meg a hasi panaszokat (akár 12-24 órával).', severity: 'moderate' },
          { name: 'Hasi fájdalom', description: 'Erős, görcsös hasi fájdalom, amely gyakran a jobb alsó hasfélre lokalizálódik (pseudoappendicitis).', severity: 'severe' },
          { name: 'Hasmenés', description: 'Kezdetben vizes, majd laza, nyálkás és kifejezetten véres székletürítés (akár napi 10+ alkalom).', severity: 'severe' }
        ],
        physical_exam: [
          'Hasi diffúz érzékenység, néha jobb alsó quadráns dominanciával',
          'Láz (gyakran >38.5°C)',
          'Dehidráció jelei (száraz nyálkahártyák, bőrturgor csökkenése)'
        ],
        complications: ['Guillain-Barré szindróma (GBS - 1/1000 eset)', 'Reaktív arthritis (Reiter-szindróma)', 'IBS (fertőzés utáni irritable bowel syndrome)', 'Erythema nodosum']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Infiltratív gyulladás' },
          { test: 'Kreatinin', finding: 'Emelkedett lehet', interpretation: 'Dehidráció miatti prerenalis veseelégtelenség' }
        ],
        imaging: [
          { modality: 'Has/kismedence CT/UH', finding: 'Terminalis ileitis, colitis, lymphadenopathia', significance: 'Segít kizárni az appendicitist' }
        ],
        microbiology: [
          { test: 'Széklet tenyésztés', finding: 'Szelektív táptalajon (Campy-Agart), mikroaerofil környezetben, 42°C-on', significance: 'Hagyományos diagnosztika (lassú)' },
          { test: 'Széklet PCR', finding: 'Pozitív', significance: 'Gyors és rendkívül szenzitív (multiplex panelek része)' }
        ]
      },
      differential: [
        { disease: 'Akut appendicitis', distinguishing: 'Láz+fájdalom hasmenés nélkül, lokális hasi status, UH/CT' },
        { disease: 'Egyéb infiltratív bakteriális hasmenés (Salmonella, Shigella, EIEC)', distinguishing: 'Széklet tenyésztés vagy PCR' },
        { disease: 'Gyulladásos bélbetegség (IBD) első shubja', distinguishing: 'Anamnézis, endoszkópia, szövettan' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Szupportív', dose: '-', duration: '-', note: 'Folyadék és elektrolit pótlás (ORALIS REHIDRÁLÓ SÓ - ORS)' }
          ],
          inpatient: [
            { drug: 'Krisztalloid infúzió', dose: 'IV igény szerint', duration: '-', note: 'Súlyos dehidráció vagy per os intolerancia esetén' }
          ]
        },
        targeted: 'Kezelés indikált: magas láz, véres széklet, napi >8 széklet, terhesség, immunszuppresszió esetén. Elsőként választandó: Azithromycin 500 mg PO naponta 3 napig. Alternatíva: Ciprofloxacin 2x500 mg PO 3 napig (magas rezisztencia!).',
        supportive: ['Folyadékpótlás', 'Lázcsillapítás (paracetamol)', 'Loperamid használata KERÜLENDŐ invazív/véres hasmenésben!'],
        prevention: ['Alapos kézmosás', 'Szárnyashús megfelelő átsütése', 'Keresztszennyeződések kerülése a konyhában', 'Pasztörizálatlan tej kerülése']
      },
      prognosis: {
        mortality: 'Nagyon alacsony (<0.1%)',
        factors: 'Idős kor, súlyos társbetegségek, immunszuppresszió'
      }
    },
    {
      id: 'c_difficile',
      name: 'Clostridioides difficile fertőzés (CDI)',
      pathogen: { type: 'Baktérium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-pozitív', shape: 'pálca (spóraképző, anaerob)' },
      epidemiology: {
        incidence: 'A leggyakoribb nosocomialis hasmenéses kórkép',
        risk_groups: ['Idősek (>65 év)', 'Antibiotikumot szedők (clindamycin, fluorokinolonok, cephalosporinok)', 'Hosszú kórházi ápolás', 'PPI (protonpumpagátló) szedés'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális (spórák útján - rezisztensek az alkoholos kézfertőtlenítőre!)'
      },
      pathomechanism: {
        steps: [
          'Flóra diszbiózis: Az antibiotikum kezelés elpusztítja a normál bélflórát, lehetőséget adva a C. difficile megtelepedésének és túlszaporodásának.',
          'Spóra csírázás: A szájon át bejutott spórák az epesavak hatására kicsíráznak a vékonybélben.',
          'Toxin termelés: A vegetatív alakok a vastagbélben megtelepedve Toxin A-t (enterotoxin) és Toxin B-t (citotoxin) termelnek. Bizonyos törzsek (pl. BI/NAP1/027) bináris toxint (CDT) is termelnek.',
          'Hámkárosodás: A toxinok inaktiválják a Rho GTP-ázokat, megbontva a sejt vázszerkezetét, sejtpusztulást és gyulladást okozva.',
          'Pseudomembrán képződés: Az elhalt hámsejtekből, fibrinből és gyulladásos sejtekből sárgásfehér lepedékek (pseudomembránok) képződnek a vastagbél nyálkahártyáján.'
        ],
        virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB - 10-szer potensebb)', 'Spóraképzés', 'Bináris toxin (CDT)']
      },
      clinical: {
        incubation: 'Antibiotikum szedés alatt vagy után (akár 8 hétig is)',
        onset: 'Akut vagy szubakut',
        symptoms: [
          { name: 'Hasmenés', description: 'Vizes, bőséges, jellegzetesen bűzös (lóistálló szagú) hasmenés (napi 3-15+ alkalom).', severity: 'moderate' },
          { name: 'Hasi fájdalom', description: 'Görcsös alhasi fájdalom, diffúz érzékenység.', severity: 'moderate' },
          { name: 'Szisztémás jelek', description: 'Láz, kifejezett leukocytosis, dehidráció, étvágytalanság.', severity: 'severe' },
          { name: 'Szövődményes jelek', description: 'Toxikus megacolon esetén a hasmenés leállhat (paralyticus ileus miatt), ami perforációhoz és szepszishez vezethet.', severity: 'severe' }
        ],
        physical_exam: [
          'Hasi diffúz érzékenység',
          'Láz',
          'Toxikus megacolon esetén: kifejezett hasi feszülés, védekezés (defence), hypotonia, tachycardia'
        ],
        complications: ['Toxikus megacolon', 'Bélperforáció', 'Szepszis', 'Dehidráció, veseelégtelenség', 'Elektrolit zavarok (hypokalaemia)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett leukocytosis (fvs >15G/L súlyos fertőzést jelez)', interpretation: 'Szisztémás gyulladás' },
          { test: 'Albumin', finding: '<30 g/L (súlyos fertőzést jelez)', interpretation: 'Fehérjevesztő enteropathia' },
          { test: 'Kreatinin', finding: '>1.5x emelkedés az alapértékhez képest (súlyos fertőzést jelez)', interpretation: 'Veseérintettség' }
        ],
        imaging: [
          { modality: 'Has/kismedence CT', finding: 'Vastagbél fal megvastagodás ("szalagtünet" - target sign), ascites', significance: 'Segít a súlyosság megítélésében' },
          { modality: 'Hasi röntgen', finding: 'Tágult colon (>6 cm)', significance: 'Toxikus megacolon gyanú esetén kötelező' }
        ],
        microbiology: [
          { test: 'Kétlépcsős széklet vizsgálat', finding: '1. lépés: GDH (Glutamát-dehidrogenáz) antigén + Toxin A/B ELISA. 2. lépés: ha GDH+ de Toxin-, akkor PCR (toxingén jelenlét)', significance: 'EASL/IDSA ajánlás szerinti algoritmus' }
        ]
      },
      differential: [
        { disease: 'Egyéb antibiotikum-asszociált hasmenés (AAD)', distinguishing: 'Széklet CDI teszt negatív, enyhébb lefolyás' },
        { disease: 'Gyulladásos bélbetegség (IBD) fellángolása', distinguishing: 'CDI teszt negatív, biopszia (bár CDI társulhat IBD-hez!)' },
        { disease: 'Ischaemiás colitis', distinguishing: 'Idős kor, cardiovascularis rizikó, hirtelen fellépő bal oldali hasi fájdalom és véres széklet' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Kiváltó antibiotikum elhagyása', dose: '-', duration: '-', note: 'Minden esetben, ha klinikailag lehetséges' }
          ],
          inpatient: [
            { drug: 'Folyadék és elektrolit pótlás', dose: 'IV igény szerint', duration: '-', note: 'Fontos lépés' }
          ]
        },
        targeted: 'Kezelés (ESCmid 2021/IDSA): 1. Nem-súlyos/Súlyos CDI első epizód: Fidaxomicin 2x200 mg PO 10 napig (első választás) VAGY Vancomycin 4x125 mg PO 10 napig. (Metronidazol már csak alternatíva, ha a többi nem elérhető, enyhe esetben!). 2. Súlyos, fulmináns CDI (ileus/shock): Vancomycin 4x500 mg PO/szondán át + Metronidazol 3x500 mg IV + intracolonic Vancomycin. 3. Első recidíva: Fidaxomicin (ha először Vanco volt) vagy Vanco taper/pulsatile séma. 4. Többszörös recidíva: Széklet mikrobióta transzplantáció (FMT).',
        supportive: ['Probiotikumok (bizonyíték gyenge, Saccharomyces boulardii mérlegelhető)', 'Szigorú izoláció (kontakt!), szappanos kézmosás'],
        prevention: ['Racionális antibiotikum használat (antimicrobial stewardship)', 'Kontakt izoláció kórházban', 'Környezet tisztítása spóraölő szerekkel (pl. klórtartalmú készítmények)']
      },
      prognosis: {
        mortality: 'Nem szövődményes: <5%; Fulmináns/Toxikus megacolon: >30%',
        factors: 'Életkor, veseelégtelenség, leukocytosis mértéke, recidívák száma (minden recidíva után nő a következő esélye)'
      }
    }
  ]
};
