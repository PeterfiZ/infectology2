import { DiseaseDatabase } from '../types';

const window: any = {
  diseaseMetadata: {
    gastrointestinal: { icon: '🦠', color: '#dc2626' },
    viral_hepatitis: { icon: '🧬', color: '#eab308' },
    urinary_tract: { icon: '🚽', color: '#3b82f6' },
    intraabdominal: { icon: '🩺', color: '#16a34a' }
  },
  diseases: {}
};

window._abdomen_hu = window._abdomen_hu || {
  gastrointestinal: {
    name: 'Gastrointestinális fertőzések',
    icon: window.diseaseMetadata.gastrointestinal.icon,
    color: window.diseaseMetadata.gastrointestinal.color,
    tables: [
      {
        title: 'Gastrointestinális fertőzések differenciáldiagnosztikája',
        headers: ['Betegség', 'Kórokozó', 'Érintett szakasz', 'Mechanizmus', 'Széklet mennyisége', 'Széklet jellege', 'Láz', 'Főbb jellemzők / Komplikációk'],
        rows: [
          ['C. difficile', 'C. difficile', 'Vastagbél', 'Toxin A/B (gyulladás)', 'Közepes/Nagy', 'Vizes, zöldes, bűzös', '+', 'AB-asszociált, pseudomembrán, toxikus megacolon'],
          ['Salmonella', 'Salmonella', 'Vékony- és Vastagbél', 'Invázió + Enterotoxin', 'Közepes', 'Vizes (ritkán véres)', '++', 'Ételmérgezés, hüllő kontakt, extraintesztinális szövődmények'],
          ['Shigella', 'Shigella', 'Vastagbél', 'Invázió + Shiga toxin', 'Kicsi', 'Véres-nyákos (dysenteria)', '++', 'Tenesmus, alacsony fertőző dózis, HUS'],
          ['Campylobacter', 'Campylobacter', 'Vékony- és Vastagbél', 'Invázió + Toxin', 'Közepes', 'Vizes/Véres', '+', 'Pseudoappendicitis, GBS, baromfi'],
          ['E. coli (EHEC)', 'E. coli (STEC)', 'Vastagbél', 'Shiga toxin', 'Közepes', 'Véres', '-', 'Láz hiánya, HUS, marhahús'],
          ['E. coli (ETEC)', 'E. coli (ETEC)', 'Vékonybél', 'Enterotoxin (szekréciós)', 'Nagy', 'Vizes', '-', 'Utazók hasmenése'],
          ['E. coli (EPEC)', 'E. coli (EPEC)', 'Vékonybél', 'Malabszorpció', 'Nagy', 'Vizes/Nyákos', '+/-', 'Csecsemőkori hasmenés'],
          ['E. coli (EIEC)', 'E. coli (EIEC)', 'Vastagbél', 'Invázió', 'Kicsi', 'Véres-nyákos', '++', 'Dysenteria-szerű, láz'],
          ['Yersinia', 'Yersinia', 'Vékony- és Vastagbél', 'Invázió', 'Közepes', 'Vizes/Véres', '+', 'Pseudoappendicitis, reaktív arthritis, sertéshús'],
          ['Giardia', 'Giardia', 'Vékonybél', 'Malabszorpció', 'Nagy/Közepes', 'Zsíros, bűzös', '-', 'Puffadás, malabszorpció, krónikus'],
          ['Amoeba', 'E. histolytica', 'Vastagbél', 'Invázió/Cytotoxin', 'Kicsi', 'Véres-nyákos', '+/-', 'Májtályog, utazás'],
          ['Cryptosporidium', 'Cryptosporidium', 'Vékonybél', 'Szekréciós/Malabszorpció', 'Nagy', 'Vizes', '-', 'Immunszupprimáltakban perzisztáló, uszoda'],
          ['Vírusos GE', 'Rota/Noro', 'Vékonybél', 'Malabszorpció/Osmotikus', 'Nagy', 'Vizes', '-/+', 'Hányás dominál (Noro), téli szezon'],
          ['Cholera', 'Vibrio cholerae', 'Vékonybél', 'Enterotoxin (szekréciós)', 'Igen nagy', 'Rizslé szerű', '-', 'Masszív folyadékvesztés, dehidráció']
        ]
      }
    ],
    diseases: [
      {
        id: 'cdiff',
        name: 'Clostridioides difficile fertőzés',
        pathogen: { type: 'Baktérium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-pozitív', shape: 'spóraképző anaerob pálca' },
        epidemiology: {
          incidence: 'Leggyakoribb nozokomiális hasmenés oka, 500,000 eset/év USA',
          risk_groups: ['65 év felettiek', 'Hospitalizált betegek', 'Antibiotikum expozíció', 'PPI használat', 'Gyulladásos bélbetegség', 'Immunszupprimáltak'],
          seasonality: 'Nincs',
          transmission: 'Feko-orális (spórák), nozokomiális terjedés, kéz higiéné!'
        },
        pathomechanism: {
          steps: [
            'Az antibiotikum-kezelés megzavarja a normál bélflóra egyensúlyát, ami lehetővé teszi a C. difficile spórák kicsírázását és elszaporodását.',
            'A baktérium toxinokat termel: a Toxin A (enterotoxin) folyadékszekréciót és gyulladást okoz, a Toxin B (citotoxin) pedig közvetlenül károsítja a bélhámsejteket.',
            'A súlyos gyulladás és sejtpusztulás következtében a vastagbél nyálkahártyáján jellegzetes álhártyák (pseudomembránok) képződnek.'
          ],
          virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binaris toxin (CDT)', 'Spóraképzés', 'Adherencia faktorok']
        },
        clinical: {
          incubation: 'AB után 2-10 nap, akár 8 hét múlva',
          onset: 'Akut',
          symptoms: [
            { name: 'Vizes hasmenés', description: 'Kezdetben vizes, majd jellegzetesen zöldes, bűzös ("lószagú") hasmenés (3-15x/nap). Pseudomembranosus colitis esetén súlyos alhasi görcsök és leukocytosis. Komplikáció: toxicus megacolon (feszülő has, bélhangok hiánya).', severity: 'severe' },
            { name: 'Hasi fájdalom', description: 'Diffúz, görcsös hasi fájdalom és érzékenység.', severity: 'moderate' },
            { name: 'Láz', description: 'Gyakran kíséri láz és leukocytosis.', severity: 'moderate' }
          ],
          physical_exam: [
            'Diffúz hasi érzékenység',
            'Distenzió',
            'Láz, tachycardia',
            'Dehidráció jelei',
            'Súlyos: ileus, toxikus megacolon jelei'
          ],
          complications: ['Fulminans colitis', 'Toxikus megacolon', 'Bélperforáció', 'Szepszis', 'Hypovolaemiás shock', 'Halál', 'Rekurrencia (20-30%)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Leukocytosis (akár >30 G/L)', interpretation: 'Súlyosság markere' },
            { test: 'Kreatinin', finding: 'Emelkedett', interpretation: 'Súlyos CDI kritérium (>1.5x baseline)' },
            { test: 'Albumin', finding: 'Csökkent (<2.5 g/dL)', interpretation: 'Malnutríció, súlyosság' },
            { test: 'Lactát', finding: 'Emelkedett', interpretation: 'Fulminans colitis' }
          ],
          imaging: [
            { modality: 'Hasi röntgen', finding: 'Megacolon (>6cm)', significance: 'Toxikus megacolon' },
            { modality: 'CT has', finding: 'Vastagbél fal megvastagodás, accordion jel, ascites', significance: 'Súlyosság felmérése' }
          ],
          microbiology: [
            { test: 'Széklet toxin (GDH + toxin A/B EIA)', finding: 'Pozitív', significance: 'Kétlépcsős algoritmus' },
            { test: 'Széklet PCR (NAAT)', finding: 'tcdB gén', significance: 'Legérzékenyebb, de kolonizációt is kimutat' },
            { test: 'Tenyésztés', finding: 'C. difficile izolálás', significance: 'Tipizálás, epidemiológia' },
            { test: 'Sigmoidoscopia', finding: 'Pseudomembránok', significance: 'Nem rutinszerű, diagnosztikus' }
          ]
        },
        calculators: [
          {
            name: 'ATLAS Score - C. difficile kimenetel',
            items: [
              { label: 'Életkor 60-79 év', points: 1 },
              { label: 'Életkor ≥ 80 év', points: 2 },
              { label: 'Szisztémás antibiotikum kezelés a CDI terápia alatt', points: 2 },
              { label: 'Fehérvérsejt 16-25 G/L', points: 1 },
              { label: 'Fehérvérsejt > 25 G/L', points: 2 },
              { label: 'Albumin 26-35 g/L', points: 1 },
              { label: 'Albumin ≤ 25 g/L', points: 2 },
              { label: 'Kreatinin 121-179 µmol/L', points: 1 },
              { label: 'Kreatinin ≥ 180 µmol/L', points: 2 }
            ],
            interpretation: [
              { min: 0, max: 2, text: '0-2 pont: Alacsony rizikó. 30 napos halálozás 0-5%.' },
              { min: 3, max: 5, text: '3-5 pont: Közepes rizikó. 30 napos halálozás 10-20%.' },
              { min: 6, max: 10, text: '6-10 pont: Magas rizikó. 30 napos halálozás >30%.' }
            ]
          }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 nap', note: 'Első választás (kevesebb rekurrencia)' },
              { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10 nap', note: 'Alternatíva' }
            ],
            inpatient: [
              { drug: 'Vancomycin', dose: '4x125mg PO', duration: '10-14 nap', note: 'Ha fidaxomicin nem elérhető' },
              { drug: 'Fidaxomicin', dose: '2x200mg PO', duration: '10 nap', note: 'Preferált' }
            ],
            icu: [
              { drug: 'Vancomycin', dose: '4x500mg PO + rektális', duration: '10-14 nap', note: 'Fulminans: magasabb dózis' },
              { drug: '+ Metronidazol', dose: '3x500mg IV', duration: '10-14 nap', note: 'Ileus esetén (IV penetráció)' },
              { drug: 'Sebészet', dose: 'Colectomia', duration: '', note: 'Toxikus megacolon, perforáció' }
            ]
          },
          targeted: 'Nem súlyos: Vancomycin vagy Fidaxomicin; Súlyos: Vancomycin; Fulminans: Vancomycin+Metronidazol±sebészet',
          supportive: ['AB leállítása (ha lehet)', 'Folyadékpótlás', 'Elektrolit korrekció', 'NE antimotilitás szerek!', 'Kontakt izoláció'],
          prevention: ['Antibiotikum stewardship', 'Kézmosás (alkohol nem öli meg a spórákat!)', 'Kontakt izoláció', 'Bezlotoxumab (rekurrencia megelőzés)', 'FMT rekurrens esetben']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: újonnan jelentkező hasmenés antibiotikum-expozíció után vagy nozokomiális környezetben',
            'Labor: leukocytosis, emelkedett kreatinin/ALP/albumin csökkenés súlyosság jelei',
            'Micro: kétlépcsős algoritmus (GDH + toxin EIA) és/vagy NAAT; pozitív PCR önmagában kolonizációt is jelezhet',
            'Endoszkópia csak kivételes esetben (pseudomembránok)'
          ],
          treatment_indications: [
            'Akut tünetek, különösen súlyos felszámolás (leukocytosis >15 G/L, láz, kreatinin emelkedés, sárgaság, ileus vagy toxikus megacolon)',
            'Rekurrens beteg esetén korai intervenció (bezlotoxumab, FMT mérlegelése)'
          ],
          first_line: [
            'Nem súlyos/súlyos: Fidaxomicin 200 mg kétszer naponta 10 nap vagy Vancomycin 125 mg 4x naponta 10 nap',
            'Fulmináns eset: Orális/rektális Vancomycin nagyobb dózis + IV Metronidazol (ileus esetén)',
          ],
          supportive: [
            'Az antibakteriális szer leállítása ha lehetséges, folyadék- és elektrolitpótlás, táplálás',
            'Kerülendő: antimotilitás szerek súlyos betegeknél'
          ],
          monitoring: [
            'Klinikai állapot, leukocytosis és vesefunkció monitorozása naponta súlyos esetben',
            'Rekurrencia esetén újabb gyógyszeres kezelés (pl. fidaxomicin) vagy FMT mérlegelése'
          ],
          prevention: [
            'Antibiotikum stewardship, kézhigiéné, kontakt izoláció, környezeti fertőtlenítés (sporocid anyagok)'
          ],
          special_populations: [
            'Idősek, immunszupprimáltak és hospitalizált betegek nagyobb kockázatúak; ezeknél alacsonyabb küszöb a korai kezelésre'
          ]
          ,
          dosing: {
            adult: {
              fidaxomicin: '200 mg PO két naponta (BID) 10 nap',
              vancomycin: '125 mg PO 4x/nap 10 nap (nem súlyos); fulmináns esetben 500 mg PO 4x/nap + rektális adagolás mérlegelése',
              metronidazol_iv: '500 mg IV 3x/nap (kiegészítő fulmináns/ileus esetén)'
            },
            pediatric: 'Gyermekdózisok a helyi protokoll szerint; vancomycin súlyalapú adagolása szükséges',
          },
          references: [
            'IDSA/SHEA 2021 C. difficile guideline: https://www.idsociety.org/practice-guideline/clostridioides-difficile/',
            'CDC C. difficile information: https://www.cdc.gov/cdiff/index.html'
          ]
        },
        prognosis: {
          mortality: 'Összesen 5-10%, Fulminans 30-50%',
          prognostic_scores: ['ATLAS score'],
          factors: 'Életkor, leukocytosis, albumin, kreatinin, hypervirulens törzs, késői kezelés'
        },
        differential: [
          { disease: 'Egyéb AB-asszociált hasmenés', distinguishing: 'Toxin negatív, enyhébb' },
          { disease: 'Gyulladásos bélbetegség fellángolása', distinguishing: 'Anamnézis, endoscopia' },
          { disease: 'Ischaemiás colitis', distinguishing: 'Rizikófaktorok, CT angiográfia' },
          { disease: 'Egyéb infektív enterocolitis', distinguishing: 'Széklet tenyésztés, epidemiológia' }
        ]
      },
      {
        id: 'salmonellosis',
        name: 'Salmonellosis (Nem-typhi)',
        pathogen: { type: 'Baktérium', name: '<i>Salmonella enterica</i> (pl. <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negatív', shape: 'pálca' },
        epidemiology: {
          incidence: 'Gyakori ételmérgezés (nyáron gyakoribb)',
          risk_groups: ['Csecsemők', 'Idősek', 'Gyomorsavhiányosok (PPI)', 'Immunszupprimáltak'],
          seasonality: 'Nyár-ősz',
          transmission: 'Feko-orális: szennyezett élelmiszer (tojás, baromfi, hús), hüllők érintése'
        },
        pathomechanism: {
          steps: [
            'A baktériumok lenyelése után (magas csíraszám szükséges) a kórokozók túlélik a gyomorsavat és eljutnak a vékonybélbe.',
            'A vékonybélben az M-sejteken keresztül bejutnak a Peyer-plakkokba és a bélfal mélyebb rétegeibe.',
            'A baktériumok szaporodása heves gyulladásos választ vált ki, ami neutrofil infiltrációhoz és folyadékszekrécióhoz vezet.'
          ],
          virulence_factors: ['III-as típusú szekréciós rendszer (T3SS)', 'Enterotoxin']
        },
        clinical: {
          incubation: '6-72 óra (átlag 12-36 óra)',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Diarrhoe', description: 'Hirtelen kezdődő, bőséges, vizes, néha nyákos vagy véres hasmenés. Jellemző a kísérő hányinger, hányás és a diffúz hasi fájdalom.', severity: 'moderate' },
            { name: 'Láz', description: 'Magas láz, hidegrázás, fejfájás és izomfájdalom kísérheti.', severity: 'moderate' },
            { name: 'Hasi görcsök', description: 'Köldök körüli vagy diffúz hasi görcsök.', severity: 'moderate' }
          ],
          physical_exam: ['Láz', 'Hasi érzékenység', 'Dehidráció jelei'],
          complications: ['Bakterémia (5%, főleg idősek/immunszupprimáltak)', 'Szeptikus arthritis', 'Osteomyelitis (sarlósejtes anémia)', 'Endovascularis fertőzés (aneurysma)']
        },
        diagnostics: {
          laboratory: [{ test: 'Gyulladásos paraméterek', finding: 'CRP emelkedett', interpretation: 'Bakteriális eredet' }],
          microbiology: [{ test: 'Széklet tenyésztés', finding: 'Salmonella sp.', significance: 'Diagnosztikus' }]
        },
        differential: [
          { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés, hasonló klinikum' },
          { disease: 'Shigellosis', distinguishing: 'Véres-nyákos széklet gyakoribb' },
          { disease: 'Vírusos gastroenteritis', distinguishing: 'Hányás dominál, vizes hasmenés' },
          { disease: 'IBD (Crohn/Colitis)', distinguishing: 'Krónikus, nem fertőző, endoszkópia' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Egészséges felnőttnek NEM kell antibiotikum (elhúzódó hordozást okoz!)' }],
            inpatient: [{ drug: 'Ceftriaxon', dose: '1-2g IV', duration: '7-14 nap', note: 'Súlyos/invazív esetben' }, { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 nap', note: 'Alternatíva (ha érzékeny)' }]
          },
          targeted: 'Csak rizikócsoportban (csecsemő, idős, immunszupprimált) vagy súlyos esetben: Fluorokinolon vagy Ceftriaxon.',
          supportive: ['Folyadékpótlás (ORS)', 'Probiotikum'],
          prevention: ['Élelmiszerhigiénia', 'Tojás/hús alapos hőkezelése']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: akut hasmenés lázzal; csecsemők/idősek/immunszupprimáltakban nagyobb kockázat súlyos szövődményre',
            'Mikrobiológia: széklet tenyésztés Salmonella azonosítására; vérkultúra súlyos vagy szepszis gyanú esetén'
          ],
          treatment_indications: [
            'Egészséges felnőttekben, nem invazív fertőzés: általában nincs antibiotikum',
            'Antibiotikum javasolt: csecsemők, idősek, immunszupprimáltak, szepszis, extrabélrendszeri fertőzés, terhesség esetén egyes helyzetekben'
          ],
          first_line: [
            'Súlyos/invazív eset: Ceftriaxon IV vagy Fluorokinolon (érzékenység függvényében)'
          ],
          supportive: ['Folyadékpótlás, elektrolitpótlás, táplálás'],
          prevention: ['Élelmiszerbiztonság, tojás és baromfi alapos hőkezelése']
          ,
          dosing: {
            adult: {
              ceftriaxone: '1–2 g IV egyszer naponta (szokásos kúra 5–14 nap, klinikai státusztól függően)',
              ciprofloxacin: '500 mg PO 2x/nap (7–10 nap) – csak érzékeny törzsek esetén; helyi rezisztencia figyelembevétele szükséges'
            },
            pediatric: 'Ceftriaxon és fluorokinolonok gyermekdózisai korcsoport- és súlyfüggőek; kérje a helyi gyermekgyógyászati protokollt'
          },
          references: [
            'CDC – Salmonella: https://www.cdc.gov/salmonella/index.html',
            'WHO – Non-typhoidal Salmonella overview: https://www.who.int/news-room/fact-sheets/detail/salmonella-(non-typhoidal)'
          ]
        },
        prognosis: { mortality: 'Alacsony (<1%), szepszis esetén magasabb', prognostic_scores: [], factors: 'Életkor, komorbiditás' }
      },
      {
        id: 'shigellosis',
        name: 'Shigellosis (Vérhas)',
        pathogen: { type: 'Baktérium', name: '<i>Shigella (dysenteriae, flexneri, sonnei)</i>', gram: 'Gram-negatív', shape: 'pálca' },
        epidemiology: {
          incidence: 'Világszerte gyakori, fejlődő országokban endémiás',
          seasonality: 'Nyár',
          risk_groups: ['Gyermekek (bölcsőde, óvoda)', 'Utazók', 'MSM'],
          transmission: 'Feko-orális (emberről emberre), nagyon alacsony fertőző dózis (10-100 baktérium)!'
        },
        pathomechanism: {
          steps: [
            'A baktériumok behatolnak a vastagbél hámsejtjeibe, és sejtről sejtre terjednek, elkerülve az immunrendszert.',
            'A baktériumok szaporodása és a termelt toxinok (pl. Shiga-toxin) a nyálkahártya elhalását, fekélyképződést és vérzést okoznak.',
            'A Shiga-toxin a véráramba jutva károsíthatja a vese endothel sejtjeit, hemolitikus urémiás szindrómát (HUS) okozva.'
          ],
          virulence_factors: ['Shiga toxin (Stx)', 'Inváziós plazmid antigének']
        },
        clinical: {
          incubation: '1-3 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Dysenteria', description: 'Kezdetben vizes hasmenés, majd klasszikus dysenteria: gyakori, kis mennyiségű, véres-nyákos ("köpet-szerű") székletürítés.', severity: 'severe' },
            { name: 'Tenesmus', description: 'Kínzó, fájdalmas, eredménytelen székelési inger (erőlködés). Kifejezett toxikus állapot.', severity: 'severe' },
            { name: 'Láz', description: 'Magas láz és toxikus állapot jellemzi.', severity: 'moderate' }
          ],
          complications: ['Hemolitikus urémiás szindróma (HUS - S. dysenteriae)', 'Toxikus megacolon', 'Rektális prolapsus', 'Reaktív arthritis']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Invazív fertőzés' }],
          microbiology: [{ test: 'Széklet tenyésztés', finding: 'Shigella sp.', significance: 'Diagnosztikus' }]
        },
        differential: [
          { disease: 'EIEC (E. coli)', distinguishing: 'Klinikailag azonos, mikrobiológia dönt' },
          { disease: 'Amoebiasis', distinguishing: 'E. histolytica kimutatás, kevésbé lázas' },
          { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés' },
          { disease: 'C. difficile', distinguishing: 'Antibiotikum anamnézis, toxin teszt' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 nap', note: 'Első választás' }, { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3 nap', note: 'Alternatíva (rezisztencia növekszik)' }]
          },
          targeted: 'Antibiotikum javasolt a betegség lerövidítésére és a fertőzőképesség csökkentésére. Azithromycin, Ceftriaxon, Ciprofloxacin.',
          supportive: ['Folyadékpótlás', 'Antimotilitás szerek (Loperamid) TILOSAK!'],
          prevention: ['Szigorú kézhigiéné', 'Beteg elkülönítése']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: véres, nyákos széklet és tenesmus; alacsony fertőző dózis miatt járványra utalhat',
            'Mikrobiológia: széklet tenyésztés; S. dysenteriae esetén Shiga-toxin vizsgálat'
          ],
          treatment_indications: [
            'Antibiotikum javasolt a betegség lerövidítésére és a terjedés csökkentésére (különösen járványban, súlyos tüneteknél vagy rizikócsoportokban)'
          ],
          first_line: [
            'Azithromycin (1 g egyszeri dózis vagy 500 mg 3 nap), alternatíva: Ceftriaxon IV súlyos esetben'
          ],
          supportive: ['Folyadékpótlás, tüneti kezelés'],
          prevention: ['Szabályos kézhigiéné, kontakt izoláció, járványügyi intézkedések']
          ,
          dosing: {
            adult: {
              azithromycin: "1 g PO egyszeri dózis vagy 500 mg PO naponta 1x 3 nap (helyi protokoll szerint)",
              ciprofloxacin: '500 mg PO 2x/nap 3 nap (alternatíva; rezisztencia növekszik)',
              ceftriaxone: '1 g IV egyszer naponta súlyos esetben'
            },
            pediatric: 'Azithromycin és ceftriaxon gyermekdózisok kor- és testsúlyfüggőek; kérje a gyermekgyógyászati protokollt'
          },
          references: [
            'CDC – Shigella: https://www.cdc.gov/shigella/index.html',
            'WHO – Shigellosis factsheet: https://www.who.int/news-room/fact-sheets/detail/shigellosis'
          ]
        },
        prognosis: { mortality: 'Kezeléssel alacsony, S. dysenteriae 1 járványokban 20% lehet', prognostic_scores: [], factors: 'Életkor, komorbiditás, tápanyaghiány' }
      },
      {
        id: 'campylobacter',
        name: 'Campylobacteriosis',
        pathogen: { type: 'Baktérium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negatív', shape: 'spirális/sirályszárny' },
        epidemiology: {
          incidence: 'Leggyakoribb bakteriális gastroenteritis a fejlett világban',
          risk_groups: ['Csecsemők', 'Fiatal felnőttek', 'Idősek'],
          seasonality: 'Nyár',
          transmission: 'Szennyezett baromfi (nem kellően átsütve), nyers tej, víz'
        },
        pathomechanism: {
          steps: [
            'A baktériumok a vékonybél és a vastagbél nyálkahártyáját kolonizálják és invadálják.',
            'Toxinokat termelnek (pl. CDT), amelyek gátolják a sejtosztódást és gyulladást váltanak ki.',
            'A fertőzés autoimmun mechanizmuson keresztül Guillain-Barré szindrómát válthat ki.'
          ],
          virulence_factors: ['Flagellum (motilitás)', 'Adhezinek', 'Cytolethal distending toxin (CDT)']
        },
        clinical: {
          incubation: '2-5 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Diarrhoe', description: 'Vizes, gyakran bűzös és véres hasmenés.', severity: 'moderate' },
            { name: 'Hasi fájdalom', description: 'Heves, görcsös hasi fájdalom, amely utánozhatja a vakbélgyulladást (pseudoappendicitis - jobb alhasi fájdalom). Szövődmény: Guillain-Barré szindróma (petyhüdt bénulás).', severity: 'severe' },
            { name: 'Láz', description: 'A hasmenést gyakran láz, fejfájás és izomfájdalom előzi meg.', severity: 'moderate' }
          ],
          physical_exam: ['Diffúz hasi érzékenység', 'Láz', 'Dehidráció jelei'],
          complications: ['Guillain-Barré szindróma (GBS) - 1/1000 eset', 'Reaktív arthritis', 'Erythema nodosum']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' }, { test: 'Széklet', finding: 'Leukocyták, vvt-k', interpretation: 'Invazív' }, { test: 'CRP', finding: 'Emelkedett', interpretation: 'Bakteriális eredet' }],
          microbiology: [{ test: 'Széklet tenyésztés', finding: 'Campylobacter (speciális táptalaj, 42°C)', significance: 'Diagnosztikus' }]
        },
        differential: [
          { disease: 'Salmonellosis', distinguishing: 'Tenyésztés, epidemiológia' },
          { disease: 'Shigellosis', distinguishing: 'Súlyosabb dysenteria, tenyésztés' },
          { disease: 'Appendicitis', distinguishing: 'UH/CT, sebészi konzílium' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 nap', note: 'Súlyos esetben első választás' }]
          },
          targeted: 'Enyhe esetben csak folyadékpótlás. Súlyos esetben makrolidok (Azithromycin). Fluorokinolon rezisztencia magas!',
          supportive: ['Folyadékpótlás'],
          prevention: ['Baromfi megfelelő hőkezelése', 'Keresztszennyeződés kerülése konyhában']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: akut hasi fájdalom, véres hasmenés; pseudoappendicitis tünetek lehetnek',
            'Mikrobiológia: széklet tenyésztés speciális körülmények között (42°C); antigén/PCR elérhető helyeken'
          ],
          treatment_indications: [
            'Enyhe, nem szisztémás eset: csak szupportív kezelés',
            'Súlyos vagy perzisztáló tünetek, immunszupprimáltak: makrolid terápia javasolt'
          ],
          first_line: ['Azithromycin 500 mg egyszeri vagy 500 mg naponta 3 napig (súlyosabb esetekben)'],
          supportive: ['Folyadékpótlás, elektrolitpótlás'],
          prevention: ['Baromfi alapos hőkezelése, konyhai higiénia']
          ,
          dosing: {
            adult: {
              azithromycin: '500 mg PO egyszeri dózis vagy 500 mg PO naponta 1x, 3 nap (alternatív séma: 500 mg nap 1, majd 250 mg naponta 2–3) ',
              ciprofloxacin: '500 mg PO 2x/nap 3 nap (ha érzékeny és súlyos eset)'
            },
            pediatric: 'Makrolidok gyermekdózisai kor- és súlyfüggőek; kérje a helyi protokollt'
          },
          references: [
            'CDC – Campylobacter: https://www.cdc.gov/campylobacter/index.html',
            'ESCMID guidance on Campylobacter: https://www.escmid.org/'
          ]
        },
        prognosis: { mortality: 'Nagyon alacsony (<0.1%)', prognostic_scores: [], factors: 'GBS szövődmény súlyos lehet, reaktív arthritis elhúzódó' }
      },
      {
        id: 'ecoli_enteritis',
        name: 'E. coli enteritisek (ETEC, EHEC, EPEC, EIEC)',
        pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (pathogen törzsek)', gram: 'Gram-negatív', shape: 'pálca' },
        epidemiology: {
          incidence: 'ETEC: utazók hasmenése; EHEC: élelmiszer eredetű járványok; EPEC: csecsemőkori hasmenés; EIEC: dysenteria-szerű',
          risk_groups: ['Utazók (ETEC)', 'Gyermekek, idősek (EHEC)', 'Csecsemők (EPEC)'],
          seasonality: 'Nyár',
          transmission: 'Feko-orális, szennyezett víz/étel (marhahús, zöldség)'
        },
        pathomechanism: {
          steps: [
            'ETEC: A baktériumok a vékonybélben megtapadva enterotoxinokat termelnek, amelyek masszív folyadékszekréciót okoznak.',
            'EHEC: A vastagbélben Shiga-toxint termelnek, ami véres hasmenést és szisztémásan felszívódva veseelégtelenséget (HUS) okozhat.',
            'EPEC/EIEC: A bélhámsejtekhez tapadva vagy azokba behatolva károsítják a nyálkahártyát és gyulladást okoznak.'
          ],
          virulence_factors: ['Enterotoxinok', 'Shiga-toxin (Stx1, Stx2)', 'Adhezinek (EPEC)', 'Invazinok (EIEC)']
        },
        clinical: {
          incubation: 'ETEC/EPEC: 1-3 nap; EHEC/EIEC: 3-4 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Vizes hasmenés (ETEC/EPEC)', description: 'Hirtelen kezdődő, bőséges vizes hasmenés, láz nélkül (utazók hasmenése).', severity: 'moderate' },
            { name: 'Véres hasmenés (EHEC/EIEC)', description: 'EHEC esetén hirtelen kezdődő vizes, majd masszívan véres hasmenés (haemorrhagiás colitis) láz NÉLKÜL. Kifejezett hasi görcsök. Szövődmény: HUS.', severity: 'severe' }
          ],
          physical_exam: ['Dehidráció', 'Hasi érzékenység (EHEC/EIEC: kifejezett)', 'Láz (EIEC-nél gyakori, EHEC-nél ritka)'],
          complications: ['Hemolitikus urémiás szindróma (HUS) - EHEC fertőzés után 5-10% (főleg gyerekek)', 'TTP (felnőttek)', 'Malnutríció (EPEC)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Thrombocytopenia, anémia', interpretation: 'HUS gyanú (EHEC)!' }, { test: 'Vese', finding: 'Kreatinin emelkedés', interpretation: 'HUS' }],
          microbiology: [
            { test: 'Széklet tenyésztés', finding: 'Sorbitol-MacConkey (EHEC)', significance: 'EHEC szűrés' },
            { test: 'Shiga-toxin kimutatás', finding: 'PCR vagy EIA', significance: 'EHEC diagnózis' },
            { test: 'PCR panel', finding: 'Virulencia gének', significance: 'EPEC/EIEC/ETEC elkülönítése' }
          ]
        },
        differential: [
          { disease: 'Shigellosis', distinguishing: 'EIEC/EHEC esetén hasonló, tenyésztés' },
          { disease: 'Cholera', distinguishing: 'ETEC esetén (rizslé széklet), utazás' },
          { disease: 'Vírusos gastroenteritis', distinguishing: 'Nincs vér, hányás dominálhat' },
          { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'ETEC: Rifaximin', dose: '2x200mg PO', duration: '3 nap', note: 'Utazók hasmenése' },
              { drug: 'EHEC: ANTIBIOTIKUM KONTRAINDIKÁLT!', dose: '-', duration: '-', note: 'Növeli a HUS kockázatát!' },
              { drug: 'EIEC: Ciprofloxacin/Azithromycin', dose: 'Szokásos dózis', duration: '3 nap', note: 'Súlyos esetben (mint Shigella)' }
            ]
          },
          targeted: 'ETEC/EIEC: Ciprofloxacin vagy Azithromycin (súlyos esetben). EHEC: CSAK szupportív! EPEC: Szupportív.',
          supportive: ['Folyadékpótlás', 'HUS esetén dialízis, transzfúzió'],
          prevention: ['Élelmiszerhigiénia', 'Marhahús átsütése', 'Utazóknak: palackozott víz']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: véres hasmenés (EHEC/EIEC) vagy vizes hasmenés (ETEC/EPEC); HUS kizárása fontos',
            'Mikrobiológia: EHEC szűrés, PCR panel a patotípusok elkülönítésére'
          ],
          treatment_indications: [
            'EHEC fertőzés esetén antibiotikum általában kontraindikált (növeli a HUS kockázatát)',
            'ETEC/EIEC esetén súlyos tüneteknél antibiotikum adható'
          ],
          supportive: ['Folyadékpótlás, szoros megfigyelés; HUS esetén nefrológiai ellátás'],
          prevention: ['Élelmiszerhigiénia, jól átsütött marhahús, utazóknak óvintézkedések'],
          dosing: {
            adult: {
              rifaximin: '200 mg PO 3x/nap 3 nap (ETEC, nem invazív utazók hasmenése)',
              azithromycin: '1 g PO egyszeri dózis vagy 500 mg PO 1x naponta 1–3 nap (súlyos ETEC/EIEC)'
            },
            pediatric: 'Rifaximin gyermek-dózisok korlátozottak; EHEC esetén kerülni kell antibiotikumot gyermekeknél'
          },
          references: [
            'CDC – E. coli (STEC): https://www.cdc.gov/ecoli/index.html',
            'CDC – Traveler\'s Diarrhea & Rifaximin: https://www.cdc.gov/antibiotic-use/community/for-hcp/common-conditions/travelers-diarrhea.html'
          ]
        },
        prognosis: { mortality: 'ETEC/EPEC: alacsony; EHEC: HUS esetén 3-5% halálozás', prognostic_scores: [], factors: 'Életkor (gyerek/idős), HUS kialakulása, antibiotikum használat (EHEC-nél rontja!)' }
      },
      {
        id: 'yersiniosis',
        name: 'Yersiniosis',
        pathogen: { type: 'Baktérium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negatív', shape: 'coccobacillus' },
        epidemiology: {
          incidence: 'Mérsékelt övben gyakoribb, télen',
          risk_groups: ['Gyermekek', 'Vasterheléses betegek (hemochromatosis)'],
          seasonality: 'Tél',
          transmission: 'Nyers sertéshús, tej, kontaminált víz. Psychrophil (hűtőben szaporodik!)'
        },
        pathomechanism: {
          steps: [
            'A baktériumok az ileum M-sejtjein keresztül bejutnak a Peyer-plakkokba és a mesenterialis nyirokcsomókba.',
            'A nyirokcsomókban gyulladást és mikrotályogokat okoznak (mesenterialis lymphadenitis).',
            'A fertőzés immunológiai úton reaktív arthritist válthat ki.'
          ],
          virulence_factors: ['Yersinia outer proteins (Yops)', 'T3SS', 'Invazin']
        },
        clinical: {
          incubation: '4-7 nap',
          onset: 'Fokozatos',
          symptoms: [
            { name: 'Enterocolitis', description: 'Láz, hasmenés (esetleg véres), hányás.', severity: 'moderate' },
            { name: 'Pseudoappendicitis', description: 'Jobb alhasi fájdalom és érzékenység, amely vakbélgyulladást utánoz.', severity: 'moderate' }
          ],
          physical_exam: ['Jobb alhasi nyomásérzékenység', 'Láz', 'Erythema nodosum (késői)'],
          complications: ['Reaktív arthritis (HLA-B27)', 'Erythema nodosum', 'Sepszis (vasterheléses betegekben)']
        },
        diagnostics: {
          laboratory: [{ test: 'Gyulladásos paraméterek', finding: 'Emelkedett', interpretation: 'Bakteriális' }],
          imaging: [{ modality: 'Has UH', finding: 'Mesenterialis lymphadenopathia, terminalis ileitis', significance: 'Appendicitis kizárása' }],
          microbiology: [{ test: 'Széklet tenyésztés', finding: 'CIN agar (hideg dúsítás)', significance: 'Jelezni kell a labornak' }]
        },
        differential: [
          { disease: 'Appendicitis', distinguishing: 'UH/CT, sebészi konzílium' },
          { disease: 'Crohn-betegség', distinguishing: 'Krónikus, endoszkópia, biopszia' },
          { disease: 'Egyéb bakteriális enteritis', distinguishing: 'Tenyésztés' }
        ],
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Általában önkorlátozó' }],
            inpatient: [{ drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7-10 nap', note: 'Súlyos esetben' }, { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '7-10 nap', note: 'Alternatíva' }]
          },
          targeted: 'Fluorokinolonok, Doxycyclin, TMP-SMX. Sepszis: Ceftriaxon.',
          prevention: ['Nyers sertéshús kerülése', 'Tej pasztőrözése']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: jobb alhasi fájdalom, láz, esetenként véres hasmenés; pseudoappendicitis kép előfordulhat',
            'Mikrobiológia: széklet tenyésztés CIN agarral, labornak jelezni hideg dúsítás szükségességét'
          ],
          treatment_indications: [
            'Általában önkorlátozó, antibiotikum csak súlyos rendszeres tüneteknél, szisztémás terjedésnél vagy vasterheléses betegeknél'
          ],
          first_line: ['Súlyos eset: Ciprofloxacin vagy Doxycyclin (helyi rezisztencia figyelembevételével)'],
          supportive: ['Folyadékpótlás, lázcsillapítás'],
          prevention: ['Rávezetés: nyers sertéshús kerülése, pasztőrözött tej fogyasztása'],
          dosing: {
            adult: {
              ciprofloxacin: '500 mg PO 2x/nap 7–10 nap',
              doxycycline: '100 mg PO 2x/nap 7–10 nap'
            },
            pediatric: 'Gyermekekben általában tüneti kezelés; antibiotikumot csak súlyos, szisztémás fertőzés esetén adunk (gyermekgyógyászati konzultáció)'
          },
          references: [
            'CDC – Yersinia enterocolitica: https://www.cdc.gov/yersinia/index.html'
          ]
        },
        prognosis: { mortality: 'Alacsony, szepszis esetén magas (50%)', prognostic_scores: [], factors: 'Vasterhelés, immunszuppresszió, késői diagnózis' }
      },
      {
        id: 'giardiasis',
        name: 'Giardiasis',
        pathogen: { type: 'Protozoon', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'körte alakú (trophozoita)' },
        epidemiology: {
          incidence: 'Világszerte elterjedt, leggyakoribb parazitás bélfertőzés',
          risk_groups: ['Gyermekek', 'Kempingezők (patakvíz)', 'IgA hiányosok'],
          seasonality: 'Nyár-ősz',
          transmission: 'Feko-orális (ciszták), víz (klór-rezisztens!), étel'
        },
        pathomechanism: {
          steps: [
            'A lenyelt cisztákból a duodenumban kiszabadulnak a trophozoiták.',
            'A paraziták a tapadókorongjukkal a vékonybél bolyhaihoz rögzülnek, de nem hatolnak be a szövetekbe.',
            'A bélbolyhok károsodása és a diszacharidáz enzimek hiánya felszívódási zavart és ozmotikus hasmenést okoz.'
          ]
        },
        clinical: {
          incubation: '1-3 hét',
          onset: 'Fokozatos',
          symptoms: [
            { name: 'Hasmenés', description: 'Elhúzódó, bűzös, zsíros fényű, nem véres hasmenés.', severity: 'moderate' },
            { name: 'Puffadás', description: 'Kifejezett gázképződés, haspuffadás, kénes böfögés.', severity: 'moderate' },
            { name: 'Fogyás', description: 'A felszívódási zavar miatt jelentős súlyvesztés alakulhat ki.', severity: 'moderate' }
          ],
          physical_exam: ['Meteorizmus', 'Diffúz hasi érzékenység', 'Nincs láz'],
          complications: ['Krónikus hasmenés', 'Malabszorpció (vitaminhiány)', 'Fejlődésbeli elmaradás (gyerekek)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Normál, eosinophilia NINCS', interpretation: 'Nem invazív parazita' }],
          differential: [
            { disease: 'Laktóz intolerancia', distinguishing: 'Kilégzéses teszt, diéta hatása' },
            { disease: 'IBS', distinguishing: 'Krónikus, negatív parazita vizsgálat' },
            { disease: 'Cryptosporidiosis', distinguishing: 'Saválló festés, immunszuppresszió' }
          ],
          microbiology: [
            { test: 'Széklet parazita', finding: 'Ciszták vagy trophozoiták', significance: '3 minta szükséges (szakaszos ürítés)' },
            { test: 'Széklet antigén (EIA)', finding: 'Pozitív', significance: 'Érzékenyebb mint a mikroszkópia' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Metronidazol', dose: '3x250mg PO', duration: '5-7 nap', note: 'Első választás' },
              { drug: 'Tinidazol', dose: '2g PO', duration: 'Egyszeri dózis', note: 'Kényelmesebb' }
            ]
          },
          targeted: 'Nitroimidazolok (Metronidazol, Tinidazol). Terhességben: Paromomycin.',
          prevention: ['Víz forralása/szűrése (klór nem elég!)', 'Kézmosás']
        },
        guidelines: {
          diagnosis: [
            'Krónikus/akut laza széklet kivizsgálása: 3 székletminta parazita vizsgálatra vagy antigén teszt (EIA) gyorsabb eredményért',
            'Eosinophilia általában nincs, kilégzéses tesztek differenciáldiagnózishoz'
          ],
          treatment_indications: [
            'Minden tünetes eset kezelendő; tünetmentes hordozás csak speciális járványügyi indikáció esetén kezelendő'
          ],
          first_line: ['Metronidazol 250–750 mg 3x naponta 5–7 nap vagy Tinidazol 2 g egyszeri dózis (helyi protokoll szerint)'],
          supportive: ['Folyadékpótlás, diéta (zsíros ételek kerülése)'],
          prevention: ['Ivóvíz forralása/szűrése, kézhigiéné; gyermekközösségekben higiéniai intézkedések']
          ,
          dosing: {
            adult: {
              metronidazole: '250–500 mg PO 3x/nap 5–7 nap (sok protokoll 500 mg 2–3x/nap)',
              tinidazole: '2 g PO egyszeri dózis (egy dózis hatékony alternatíva)'
            },
            pregnancy: 'Terhességben: Paromomycin 500 mg PO 3x/nap 7 nap preferált (metronidazol/tinidazol kerülése az első trimeszterben)',
            pediatric: 'Gyermekdózisok kor- és testsúlyfüggőek; tinidazol/metronidazol gyermek-adagolás a helyi protokoll szerint'
          },
          references: [
            'CDC – Giardiasis: https://www.cdc.gov/parasites/giardia/index.html'
          ]
        },
        prognosis: { mortality: 'Jó prognózis: alacsony mortalitás, de krónikussá válhat kezelés nélkül', prognostic_scores: [], factors: 'IgA hiány, reinfekció' }
      },
      {
        id: 'amoebiasis',
        name: 'Amoebiasis',
        pathogen: { type: 'Protozoon', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'amőboid' },
        epidemiology: {
          incidence: 'Trópusi/szubtrópusi területeken endémiás',
          risk_groups: ['Utazók', 'Bevándorlók', 'Intézeti gondozottak', 'MSM'],
          seasonality: 'Nincs',
          transmission: 'Feko-orális (ciszták)'
        },
        pathomechanism: {
          steps: [
            'A lenyelt cisztákból a vastagbélben trophozoiták alakulnak ki, amelyek behatolnak a nyálkahártyába.',
            'A paraziták szövetoldó enzimeket termelnek, ami jellegzetes, lombik (amphora) alakú fekélyeket hoz létre.',
            'A véráramba jutva a paraziták eljuthatnak a májba, ahol tályogot képezhetnek.'
          ]
        },
        clinical: {
          incubation: '2-4 hét',
          onset: 'Fokozatos',
          symptoms: [
            { name: 'Amőbás dysenteria', description: 'Véres, nyákos hasmenés, hasi fájdalommal.', severity: 'severe' },
            { name: 'Amőbás májtályog', description: 'Jobb bordaív alatti fájdalom, láz, fogyás, akár hasmenés nélkül is.', severity: 'severe' }
          ],
          physical_exam: ['Hasi érzékenység (coecum/colon)', 'Hepatomegalia, máj ütögetési érzékenység (tályog)'],
          complications: ['Bélperforáció', 'Toxikus megacolon', 'Tályog ruptúra (pleura, peritoneum, pericardium)', 'Agytályog']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis (tályognál)', interpretation: 'Gyulladás' }, { test: 'Májenzimek', finding: 'ALP emelkedett', interpretation: 'Tályog' }],
          microbiology: [
            { test: 'Széklet parazita', finding: 'Trophozoiták (vörösvértesttel a plazmában!)', significance: 'E. dispar-tól el kell különíteni' },
            { test: 'Széklet antigén/PCR', finding: 'E. histolytica specifikus', significance: 'Gold standard' },
            { test: 'Szerológia', finding: 'Pozitív', significance: 'Invazív betegségnél (májtályog) hasznos' }
          ],
          imaging: [{ modality: 'Has UH/CT', finding: 'Szoliter májtályog (jobb lebeny)', significance: 'Májtályog diagnózis' }]
        },
        differential: [
          { disease: 'Bakteriális dysenteria', distinguishing: 'Tenyésztés, láz gyakoribb' },
          { disease: 'Pyogen májtályog', distinguishing: 'Bakteriális tenyésztés, szeptikusabb' },
          { disease: 'Echinococcus cysta', distinguishing: 'Szerológia, képalkotó (leányhólyagok)' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Metronidazol', dose: '3x750mg PO', duration: '7-10 nap', note: 'Szöveti szer (invazív)' },
              { drug: '+ Paromomycin', dose: '3x500mg PO', duration: '7 nap', note: 'Luminális szer (cisztaürítés ellen) - KÖTELEZŐ kiegészítés!' }
            ]
          },
          targeted: 'Metronidazol (szöveti) + Paromomycin/Diloxanid (luminális). Májtályog: Metronidazol + szükség esetén drenázs.',
          prevention: ['Víz és élelmiszer higiénia']
        },
        guidelines: {
          diagnosis: [
            'Dysenteria gyanúja esetén széklet parazita vizsgálat, antigén/PCR a gyors és specifikus diagnózisért',
            'Májtályog esetén képalkotás (UH/CT) és szerológia segít a diagnózisban'
          ],
          treatment_indications: [
            'Invazív amőbás dysenteria vagy májtályog: Metronidazol vagy Tinidazol (szöveti kezelés) kötelező, majd lumen tisztító szer (Paromomycin/Diloxanid) a ciszták kiirtására',
            'Enyhe luminalis fertőzés: Paromomycin/diloxanid önmagában'
          ],
          first_line: ['Metronidazol 750 mg 3x naponta 7–10 nap + Paromomycin 500 mg 3x naponta 7 nap (luminális kiegészítés)'],
          supportive: ['Folyadékpótlás, fájdalomcsillapítás, táplálás; májtályog esetén drenázs indikációját mérlegelni'],
          prevention: ['Víz- és élelmiszerhigiénia, kézmosás, utazók számára óvintézkedések']
          ,
          dosing: {
            adult: {
              metronidazole: '750 mg PO 3x/nap 7–10 nap (invazív/tályog)',
              tinidazole: '2 g PO naponta egyszer 3 nap (alternatív szöveti kezelés helyi protokoll szerint)',
              paromomycin: '500 mg PO 3x/nap 7 nap (luminális kiegészítés)'
            },
            pregnancy: 'Terhességben tinidazole/metronidazole kerülése az első trimeszterben; paromomycin preferált lumen kezelésre',
            pediatric: 'Gyermekdózis a helyi protokoll szerint; gyermekgyógyászati konzultáció javasolt'
          },
          references: [
            'CDC – Amebiasis: https://www.cdc.gov/parasites/amebiasis/index.html',
            'WHO – Amebiasis: https://www.who.int/health-topics/amebiasis'
          ]
        },
        prognosis: { mortality: 'Kezeléssel jó (<1%), szövődményes tályog/perforáció esetén magasabb', prognostic_scores: [], factors: 'Késői diagnózis, tályog ruptúra' }
      },
      {
        id: 'cryptosporidiosis',
        name: 'Cryptosporidiosis',
        pathogen: { type: 'Protozoon', name: '<i>Cryptosporidium hominis/parvum</i>', gram: 'Saválló festés', shape: 'oociszta' },
        epidemiology: {
          incidence: 'Gyakori víz eredetű járványok (uszodák)',
          risk_groups: ['AIDS betegek (meghatározó opportunista)', 'Gyermekek', 'Állatorvosok'],
          seasonality: 'Nyár-ősz',
          transmission: 'Feko-orális, víz (klór-rezisztens oociszták!)'
        },
        pathomechanism: {
          steps: [
            'Az oociszták lenyelése után a sporozoiták a vékonybél hámsejtjeinek felszínéhez tapadnak (intracelluláris, de extracytoplasmatikus).',
            'A fertőzés a bélbolyhok sorvadását és a kripták hiperpláziáját okozza.',
            'Ez súlyos felszívódási zavarhoz és szekréciós hasmenéshez vezet.'
          ],
          virulence_factors: ['Adhezinek', 'Proteázok']
        },
        clinical: {
          incubation: '7-10 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Vizes hasmenés', description: 'Bőséges, vizes hasmenés, hasi görcsökkel.', severity: 'moderate' },
            { name: 'Perzisztáló hasmenés', description: 'Immunszupprimált betegekben (pl. AIDS) a hasmenés krónikussá válhat, és súlyos folyadékvesztést okozhat.', severity: 'severe' }
          ],
          physical_exam: ['Dehidráció jelei', 'Cachexia (krónikus esetben)'],
          complications: ['Súlyos dehidráció', 'Malnutríció', 'Epeúti érintettség (AIDS)']
        },
        diagnostics: {
          laboratory: [{ test: 'CD4 szám', finding: '<100/µL', interpretation: 'Súlyos lefolyás rizikó (HIV)' }],
          microbiology: [
            { test: 'Széklet festés', finding: 'Saválló oociszták (módosított Z-N)', significance: 'Specifikus kérésre' },
            { test: 'Széklet antigén/PCR', finding: 'Pozitív', significance: 'Érzékenyebb' }
          ]
        },
        differential: [
          { disease: 'Giardiasis', distinguishing: 'Széklet vizsgálat, puffadás dominál' },
          { disease: 'Isosporiasis', distinguishing: 'Nagyobb oociszták, TMP-SMX hatékony' },
          { disease: 'Microsporidiosis', distinguishing: 'Kisebb spórák, speciális festés' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Nitazoxanide', dose: '2x500mg PO', duration: '3 nap', note: 'Immundompetenseknek' },
              { drug: 'ART (Antiretrovirális terápia)', dose: '-', duration: '-', note: 'HIV betegeknél az immunrendszer helyreállítása a kulcs!' }
            ]
          },
          targeted: 'Immundompetens: Nitazoxanide. Immunszupprimált: ART optimalizálás, szupportív, Nitazoxanide (kevésbé hatékony).',
          supportive: ['Folyadékpótlás', 'Antimotilitás szerek (óvatosan)'],
          prevention: ['Vízszűrés (<1 mikron), uszoda kerülés hasmenéskor']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: perzisztáló vizes hasmenés immunszupprimált betegnél (CD4<100), víz eredetű járványokban',
            'Diagnózis: széklet antigén vagy PCR; saválló festés speciális kéréssel'
          ],
          treatment_indications: [
            'Immunkompetens: gyakran spontán gyógyul',
            'Immunhiányos: antivirális/terápiás beavatkozás szükséges; ART optimalizálás prioritás'
          ],
          first_line: ['Nitazoxanide immundompetens betegeknek; immunszupprimáltaknál elsősorban az immunkompetencia visszaállítása (ART)'],
          supportive: ['Folyadék- és táplálékpótlás, elektrolit monitorozás'],
          prevention: ['Ivóvíz szűrése/forralása, személyes higiénia, uszoda kerülése hasmenés esetén']
          ,
          dosing: {
            adult: {
              nitazoxanide_immunocompetent: '500 mg PO 2x/nap 3 nap',
              nitazoxanide_immunocompromised: 'Hosszabb kúra mérlegelése (helyi protokoll); ART optimalizálás elsődleges'
            },
            pediatric: 'Nitazoxanide gyermekdózis kor és testsúly szerint; kérje a helyi protokollt'
          },
          references: [
            'CDC – Cryptosporidium: https://www.cdc.gov/parasites/crypto/index.html',
            'WHO – Cryptosporidiosis: https://www.who.int/news-room/fact-sheets/detail/cryptosporidiosis'
          ]
        },
        prognosis: { mortality: 'Immundompetens: jó; AIDS: CD4<100 esetén magas mortalitás', prognostic_scores: [], factors: 'Immunstátusz rendezése (ART)' }
      },
      {
        id: 'viral_gastroenteritis',
        name: 'Vírusos gastroenteritis',
        pathogen: { type: 'Vírus', name: '<i>Rotavírus, Norovírus, Adenovírus, Astrovírus</i>', gram: 'RNS/DNS', shape: 'változó' },
        epidemiology: {
          incidence: 'Norovírus: leggyakoribb járványos GE (minden korosztály); Rotavírus: csecsemők (oltás előtt)',
          risk_groups: ['Csecsemők (Rota)', 'Idősek (Noro)', 'Zárt közösségek (hajó, laktanya)'],
          seasonality: 'Tél (Rota, Noro)',
          transmission: 'Feko-orális, aeroszol (hányás - Noro), fomitok'
        },
        pathomechanism: {
          steps: [
            'A vírusok a vékonybél bolyhainak hámsejtjeiben szaporodnak, és elpusztítják azokat.',
            'A bélbolyhok megrövidülése miatt csökken a felszívó felület és az emésztőenzimek mennyisége.',
            'A fel nem szívódott tápanyagok vizet vonnak a bélüregbe (ozmotikus hasmenés).'
          ],
          virulence_factors: ['Kapszid stabilitás', 'NSP4 (Rota)']
        },
        clinical: {
          incubation: '12-48 óra (Noro), 1-3 nap (Rota)',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Hányás', description: 'Hirtelen kezdődő, ismétlődő hányás (különösen Norovírusnál).', severity: 'severe' },
            { name: 'Vizes hasmenés', description: 'Nagy mennyiségű, vizes széklet, láz és izomfájdalom kíséretében.', severity: 'moderate' }
          ],
          physical_exam: ['Dehidráció jelei (száraz nyelv, turgor csökkent)', 'Diffúz hasi érzékenység'],
          complications: ['Súlyos dehidráció (csecsemők, idősek)', 'Elektrolit zavarok']
        },
        diagnostics: {
          laboratory: [{ test: 'Elektrolitok', finding: 'Zavarok', interpretation: 'Dehidráció' }, { test: 'Vérkép', finding: 'Normál', interpretation: 'Nem bakteriális' }],
          microbiology: [
            { test: 'Széklet antigén (Rota/Adeno)', finding: 'Pozitív', significance: 'Gyors teszt gyermekeknél' },
            { test: 'PCR', finding: 'Norovírus', significance: 'Járványügyi célból' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Nincs', dose: '-', duration: '-', note: 'Antibiotikum hatástalan!' }]
          },
          targeted: 'Nincs specifikus antivirális szer.',
          supportive: ['Orális rehidrálás (ORS) - kulcsfontosságú!', 'Antiemetikumok (Ondansetron)', 'Probiotikumok (Lactobacillus GG, S. boulardii)'],
          prevention: ['Rotavírus vakcina (csecsemők)', 'Kézmosás (alkoholos gél Norovírus ellen kevésbé hatékony!)', 'Izoláció']
        },
        differential: [
          { disease: 'Bakteriális gastroenteritis', distinguishing: 'Láz, véres széklet, tenyésztés' },
          { disease: 'Ételmérgezés (toxin)', distinguishing: 'Közös étkezés, rövidebb inkubáció' },
          { disease: 'Gyógyszer mellékhatás', distinguishing: 'Anamnézis' }
        ],
        guidelines: {
          diagnosis: [
            'Gyanú: hányással és/vagy vizes hasmenéssel járó tünetegyüttes, gyakori járványok zárt közösségekben',
            'Labor: elsősorban folyadék- és elektrolit státusz felmérése; vírus igazolás PCR/antigén teszttel járványügyi célból'
          ],
          treatment_indications: [
            'Többnyire csak szupportív kezelés szükséges; hospitalizáció dehidráció, súlyos hányás vagy csecsemők/öregek esetén'
          ],
          first_line: ['Orális rehidrálás ORS, súlyos hányás esetén antiemetikum (ondansetron gyermekekben is alkalmazható helyi protokoll szerint)'],
          supportive: ['Folyadékpótlás, elektrolit korrekció, táplálás'],
          prevention: ['Rotavírus vakcináció csecsemőknek, kézhigiéné, izoláció járványokban; Norovírusnál fomitok fertőtlenítése']
          ,
          dosing: {
            vaccination: {
              rotavirus: 'Rotavírus vakcina: helyi oltási rend szerint (például Rotarix 2 dózis, RotaTeq 3 dózis – lásd oltási protokoll)'
            }
          },
          references: [
            'CDC – Norovirus: https://www.cdc.gov/norovirus/index.html',
            'CDC – Rotavirus: https://www.cdc.gov/rotavirus/index.html'
          ]
        },
        prognosis: { mortality: 'Fejlett országokban nagyon alacsony, dehidráció a fő veszély', prognostic_scores: [], factors: 'Életkor (csecsemő/idős), komorbiditás' }
      },
      {
        id: 'cholera',
        name: 'Cholera',
        pathogen: { type: 'Baktérium', name: '<i>Vibrio cholerae</i> (O1, O139)', gram: 'Gram-negatív', shape: 'hajlított pálca (vibrio)' },
        epidemiology: {
          incidence: 'Endémiás (Ázsia, Afrika, Haiti), járványos',
          risk_groups: ['Mélyszegénységben élők', 'Természeti katasztrófák áldozatai', 'Utazók (ritka)'],
          seasonality: 'Esős évszak',
          transmission: 'Feko-orális (szennyezett víz/étel)'
        },
        pathomechanism: {
          steps: [
            'A baktériumok a vékonybélben megtapadva koleratoxint termelnek.',
            'A toxin aktiválja az adenilát-cikláz enzimet, ami a cAMP szint növekedéséhez vezet.',
            'Ez a kloridionok és a víz masszív kiáramlását okozza a bélüregbe, ami súlyos, életveszélyes hasmenéshez vezet.'
          ],
          virulence_factors: ['Cholera toxin (AB5 toxin)', 'Toxin-coregulated pilus (TCP)']
        },
        clinical: {
          incubation: 'Néhány óra - 5 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Rizslé szerű hasmenés', description: 'Fájdalmatlan, nagy mennyiségű, rizslére emlékeztető hasmenés.', severity: 'severe' },
            { name: 'Dehidráció', description: 'Gyorsan kialakuló súlyos kiszáradás, izomgörcsök, sokk.', severity: 'severe' }
          ],
          physical_exam: [
            'Súlyos dehidráció (hypovolaemiás shock)',
            'Száraz nyálkahártyák, csökkent turgor',
            'Washerwoman\'s hands (ráncos bőr)',
            'Hypotonia, tachycardia',
            'Láz általában NINCS'
          ],
          complications: ['Hypovolaemiás shock', 'Akut veseelégtelenség (ATN)', 'Súlyos hypokalaemia', 'Metabolikus acidózis', 'Halál (kezeletlenül 50%!)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Hemokoncentráció', interpretation: 'Dehidráció' },
            { test: 'Elektrolitok', finding: 'Hypokalaemia, acidózis', interpretation: 'Vesztés' },
            { test: 'Vesefunkció', finding: 'Prerenalis veseelégtelenség', interpretation: 'Volumenhiány' }
          ],
          microbiology: [
            { test: 'Széklet tenyésztés', finding: 'TCBS agar (sárga telepek)', significance: 'Gold standard' },
            { test: 'Gyorsteszt (RDT)', finding: 'Crystal VC', significance: 'Járványban' },
            { test: 'Sötétlátóteres mikroszkópia', finding: 'Shooting star mozgás', significance: 'Gyors' }
          ]
        },
        differential: [
          { disease: 'ETEC', distinguishing: 'Utazás, kevésbé súlyos' },
          { disease: 'Vírusos gastroenteritis', distinguishing: 'Hányás dominálhat, kevésbé súlyos dehidráció' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycyclin', dose: '300mg PO', duration: 'Egyszeri dózis', note: 'Felnőtteknek' },
              { drug: 'Azithromycin', dose: '1g PO', duration: 'Egyszeri dózis', note: 'Terhesek, gyerekek' }
            ]
          },
          targeted: 'Folyadékpótlás a legfontosabb! Antibiotikum csak kiegészítő (rövidíti a betegséget).',
          supportive: ['ORS (Orális Rehidráló Folyadék) - WHO formula', 'IV Ringer-laktát (súlyos dehidráció)'],
          prevention: ['Tiszta víz, higiénia', 'Orális kolera vakcina (Dukoral, Shanchol)']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: nagy volumenű, fájdalmatlan „rizslé” szerű hasmenés; epidémiás kontextusban nagy a valószínűsége',
            'Labor: folyadék- és elektrolit státusz kiemelten fontos; tenyésztés TCBS agaron járványügyi azonosításhoz'
          ],
          treatment_indications: [
            'Minden súlyos vagy nagy volumenű diasztrófiás hasmenés esetén azonnali rehidrálás; antibiotikum a betegség rövidítésére súlyos esetekben'
          ],
          first_line: [
            'Általános: ORS és intravénás volumenpótlás súlyos dehidráció esetén',
            'Antibiotikum: Doxycyclin egyszeri 300 mg felnőtteknek, vagy Azithromycin 1 g terheseknek/gyermekeknek (helyi irányelvek szerint)'
          ],
          supportive: ['Elektrolitpótlás, monitoring (vese, kálium), oxigén és keringéstámogatás szükség esetén'],
          prevention: ['Ivóvíz és élelmiszer-higiénia, tömeges megelőzés vakcinával járványokban']
          ,
          dosing: {
            adult: {
              doxycycline: '300 mg PO egyszeri dózis (felnőttek) a legtöbb protokoll szerint',
              azithromycin: '1 g PO egyszeri dózis (alternatíva terheseknél/gyermekeknél helyi protokoll szerint)'
            },
            pediatric: 'Gyermekdózisok súlyfüggők; azithromycin gyermekdózis a helyi útmutató szerint'
          },
          references: [
            'WHO – Cholera and acute diarrhoeal disease guidance: https://www.who.int/health-topics/diarrhoeal-diseases',
            'CDC – Cholera: https://www.cdc.gov/cholera/index.html'
          ]
        },
        prognosis: { mortality: 'Kezeléssel <1%, kezeletlenül 50%', prognostic_scores: [], factors: 'Életkor, komorbiditás' }
      },
      {
        id: 'travelers_diarrhea',
        name: 'Utazók hasmenése (Traveler\'s Diarrhea)',
        pathogen: { type: 'Szindróma', name: '<i>ETEC</i> (leggyakoribb), <i>Campylobacter, Salmonella, Shigella</i>, Vírusok', gram: 'Változó', shape: '-' },
        epidemiology: {
          incidence: 'Utazók 20-60%-a (fejlődő országokba)',
          risk_groups: ['Fiatal felnőttek', 'Immunszupprimáltak', 'PPI szedők'],
          seasonality: 'Nincs',
          transmission: 'Feko-orális (étel, víz)'
        },
        pathomechanism: {
          steps: [
            'A fertőzést leggyakrabban enterotoxin-termelő E. coli (ETEC) vagy invazív baktériumok (Campylobacter, Shigella) okozzák.',
            'A kórokozók a helyi higiénés viszonyoktól eltérő mikrobiommal találkozó utazóknál gyulladást vagy folyadékszekréciót váltanak ki.'
          ],
          virulence_factors: ['Változó']
        },
        clinical: {
          incubation: 'Utazás alatt vagy hazaérkezés után',
          onset: 'Akut',
          symptoms: [
            { name: 'Hasmenés', description: 'Utazás alatt vagy után jelentkező vizes hasmenés, hasi görcsökkel.', severity: 'moderate' },
            { name: 'Láz', description: 'Láz és véres széklet invazív kórokozóra utal.', severity: 'moderate' }
          ],
          physical_exam: ['Enyhe hasi érzékenység', 'Dehidráció jelei'],
          complications: ['Dehidráció', 'Post-infectious IBS', 'Reaktív arthritis']
        },
        diagnostics: {
          laboratory: [{ test: '-', finding: '-', interpretation: 'Általában nem szükséges' }],
          microbiology: [{ test: 'Széklet tenyésztés/PCR', finding: 'Multiplex panel', significance: 'Csak perzisztáló/súlyos esetben vagy immunszupprimáltaknál' }]
        },
        differential: [
          { disease: 'IBD fellángolás', distinguishing: 'Anamnézis, endoszkópia' },
          { disease: 'Giardiasis', distinguishing: 'Elhúzódó, zsíros széklet' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '1000mg PO egyszer vagy 500mg 3 napig', duration: '', note: 'Délkelet-Ázsia (Campy rezisztencia) vagy dysenteria esetén' },
              { drug: 'Rifaximin', dose: '2x200mg PO', duration: '3 nap', note: 'Nem invazív (lázmentes) esetben' },
              { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '1-3 nap', note: 'Egyéb régiók (de rezisztencia nő)' }
            ]
          },
          targeted: '-',
          supportive: ['Folyadékpótlás', 'Loperamid (csak ha nincs láz/véres széklet!)'],
          prevention: ['"Boil it, cook it, peel it or forget it"', 'Kézmosás', 'Rifaximin profilaxis (csak magas rizikó esetén)']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: akut diarrhoea utazás után vagy utazás közben; legtöbbször nem szükséges mikrobiológiai vizsgálat enyhe esetben',
            'Súlyos, perzisztáló vagy lázas esetben széklet tenyésztés/PCR multiplex panel javasolt'
          ],
          treatment_indications: [
            'Enyhe eset: csak rehidrálás és tüneti kezelés',
            'Súlyos, lázas, dysenteriával járó vagy immunszupprimált beteg: antibiotikus kezelés javasolt'
          ],
          first_line: [
            'Nem-invazív (lázzal nem járó) esetekben Rifaximin 2x200 mg 3 nap',
            'Dysenteriával vagy Délkelet-Ázsiában: Azithromycin 1 g egyszeri vagy 500 mg 3 nap'
          ],
          supportive: ['ORS, loperamid csak ha nincs láz/véres széklet, elektrolitpótlás'],
          prevention: ['Élelmiszer- és vízbiztonság utazás alatt; profilaxis csak kivételes esetben']
          ,
          dosing: {
            adult: {
              rifaximin: '200 mg PO 3x/nap 3 nap (nem-invazív utazók hasmenése)',
              azithromycin: '1 g PO egyszeri dózis (alternatíva) vagy 500 mg PO naponta 3 nap'
            },
            pediatric: 'Gyermekdózisok súly- és életkorfüggőek; kérje a helyi gyermekgyógyászati protokollt'
          },
          references: [
            'CDC – Traveler\'s Health: Traveler\'s Diarrhea: https://wwwnc.cdc.gov/travel/yellowbook/2024/infectious-diseases-related-to-travel/traveler-s-diarrhea',
            'WHO – Management of diarrhoea: https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease'
          ]
        },
        prognosis: { mortality: 'Nagyon alacsony', prognostic_scores: [], factors: 'Életkor, immunstátusz' }
      },
      {
        id: 'dysentery_syndrome',
        name: 'Dysenteria szindróma (Vérhas)',
        pathogen: { type: 'Szindróma', name: '<i>Shigella, EIEC, EHEC, Campylobacter, Entamoeba, Salmonella</i>', gram: 'Változó', shape: '-' },
        epidemiology: {
          incidence: 'Változó',
          risk_groups: ['Gyermekek', 'Idősek', 'Immunszupprimáltak'],
          transmission: 'Feko-orális'
        },
        pathomechanism: {
          steps: [
            'A kórokozók (Shigella, EIEC, EHEC, Campylobacter, Entamoeba) behatolnak a vastagbél nyálkahártyájába.',
            'A szöveti invázió súlyos gyulladást, fekélyképződést, vérzést és nyáktermelést okoz.'
          ],
          virulence_factors: ['Invazinok', 'Citotoxinok']
        },
        clinical: {
          incubation: 'Változó',
          onset: 'Akut',
          symptoms: [
            { name: 'Véres-nyákos hasmenés', description: 'Gyakori, kis mennyiségű, véres-nyákos székletürítés.', severity: 'severe' },
            { name: 'Tenesmus', description: 'Fájdalmas, eredménytelen székelési inger.', severity: 'severe' }
          ],
          physical_exam: ['Alhasi érzékenység', 'Láz', 'Toxikus állapot'],
          complications: ['HUS (EHEC/Shigella)', 'Toxikus megacolon', 'Perforáció', 'Sepszis', 'Rectalis prolapsus']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' }],
          microbiology: [
            { test: 'Széklet tenyésztés', finding: 'Kórokozó keresés', significance: 'Kötelező!' },
            { test: 'Parazita vizsgálat', finding: 'E. histolytica', significance: 'Ha tenyésztés negatív' },
            { test: 'Shiga toxin', finding: 'Pozitív', significance: 'EHEC/Shigella' }
          ]
        },
        differential: [
          { disease: 'Shigellosis', distinguishing: 'EIEC klinikailag azonos, tenyésztés dönt' },
          { disease: 'Campylobacteriosis', distinguishing: 'Tenyésztés, GBS rizikó' },
          { disease: 'TTP', distinguishing: 'Felnőttek, neurológiai tünetek, ADAMTS13' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '1x500mg PO', duration: '3 nap', note: 'Első választás' },
              { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '3-5 nap', note: 'Alternatíva (rezisztencia?)' }
            ]
          },
          targeted: 'Tenyésztés alapján. EHEC esetén AB kontraindikált! Amoeba: Metronidazol.',
          supportive: ['Folyadékpótlás', 'Antimotilitás szerek (Loperamid) KONTRAINDIKÁLTAK!'],
          prevention: ['Higiénia', 'Izoláció']
        },
        guidelines: {
          diagnosis: [
            'Gyanú: véres-nyákos hasmenés, tenesmus; differenciálni kell EHEC, Shigella, Entamoeba, Campylobacter között',
            'Kötelező: széklet tenyésztés, Shiga-toxin teszt és parazita vizsgálat járvány- illetve klinikai indikáció alapján'
          ],
          treatment_indications: [
            'Antibiotikum javasolt súlyos invazív fertőzésben, járványügyi kontroll és rizikócsoportok (csecsemő, idős, immunszupprimált)',
            'EHEC vagy confirmed Shiga-toxin pozitív esetben AB általában kontraindikált (HUS kockázat növelése)'
          ],
          first_line: [
            'Shigella: Azithromycin vagy Ceftriaxon; Campylobacter: Azithromycin; Salmonella invazív esetben Ceftriaxon vagy ciprofloxacin (rezisztencia figyelembevéve)'
          ],
          supportive: ['ORS, folyamatos monitorozás súlyos esetben; kerülendő antimotilitás szerek dysenteria esetén'],
          prevention: ['Kézhigiéné, élelmiszerhigiénia; járványban kontakt izoláció és közegészségügyi intézkedések']
        },
        prognosis: { mortality: 'Változó, EHEC/S. dysenteriae 1 esetén súlyosabb', prognostic_scores: [], factors: 'Életkor, kórokozó típus' }
      }
    ]
  },
  viral_hepatitis: {
    name: 'Vírusos hepatitisek',
    icon: window.diseaseMetadata.viral_hepatitis.icon,
    color: window.diseaseMetadata.viral_hepatitis.color,
    tables: [
      {
        title: 'Vírushepatitisek differenciáldiagnosztikája',
        headers: ['Vírus', 'Terjedés', 'Inkubáció', 'Krónikussá válás', 'Kulcs szerológia', 'Főbb jellemzők'],
        rows: [
          ['HAV', 'Feko-orális', '2-6 hét', 'Nem', 'Anti-HAV IgM', 'Akut, járványos, utazáshoz köthető'],
          ['HBV', 'Parenterális, szexuális', '2-6 hónap', 'Igen (főleg perinatális)', 'HBsAg, Anti-HBc IgM', 'Krónikus májbetegség, HCC rizikó'],
          ['HCV', 'Parenterális', '2-26 hét', 'Igen (>70%)', 'Anti-HCV, HCV RNS', 'Krónikus, gyógyítható (DAA), extrahepatikus manif.'],
          ['HDV', 'Parenterális (HBV-vel)', 'Változó', 'Igen (szuperinfekció)', 'Anti-HDV (HBsAg+ betegben)', 'Súlyosbítja a HBV-t, gyors cirrhosis progresszió'],
          ['HEV', 'Feko-orális (G1,2), Zoonózis (G3,4)', '2-10 hét', 'Igen (immunszuppr.)', 'Anti-HEV IgM, HEV RNS', 'Terhesekben fulmináns, sertéshúshoz köthető']
        ]
      },
      {
        title: 'Hepatitis B szerológiai mintázatok értelmezése',
        headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Total)', 'Anti-HBc IgM', 'Értelmezés'],
        rows: [
          ['-', '-', '-', '-', 'Fogékony (nem fertőzött, nem védett)'],
          ['-', '+', '-', '-', 'Védett (oltás miatt)'],
          ['-', '+', '+', '-', 'Gyógyult fertőzés (természetes immunitás)'],
          ['+', '-', '+', '+', 'Akut fertőzés'],
          ['+', '-', '+', '-', 'Krónikus fertőzés'],
          ['-', '-', '+', '-', 'Lehetséges: 1. Gyógyult fertőzés (alacsony Anti-HBs); 2. Álpozitív; 3. Okkult HBV; 4. Ablakperiódus']
        ]
      },
      {
        title: 'Hepatitis szerológiai markerek jelentése',
        headers: ['Marker', 'Vírus', 'Jelentés'],
        rows: [
          ['Anti-HAV IgM', 'HAV', 'Akut fertőzés'],
          ['Anti-HAV IgG', 'HAV', 'Védettség (oltás vagy átvészelés)'],
          ['HBsAg', 'HBV', 'Fertőzés jelenléte (akut vagy krónikus)'],
          ['Anti-HBs', 'HBV', 'Immunitás (oltás vagy gyógyulás)'],
          ['Anti-HBc IgM', 'HBV', 'Akut fertőzés (ablakperiódusban is)'],
          ['Anti-HBc (Total)', 'HBV', 'Korábbi vagy jelenlegi fertőzés'],
          ['HBeAg', 'HBV', 'Magas replikáció, fertőzőképesség'],
          ['Anti-HBe', 'HBV', 'Alacsonyabb replikáció (szerokonverzió)'],
          ['HBV DNS', 'HBV', 'Vírusreplikáció mértéke'],
          ['Anti-HCV', 'HCV', 'Expozíció (nem feltétlenül aktív)'],
          ['HCV RNS', 'HCV', 'Aktív fertőzés'],
          ['Anti-HDV', 'HDV', 'HDV fertőzés (csak HBV mellett)'],
          ['Anti-HEV IgM', 'HEV', 'Akut fertőzés']
        ]
      }
    ],
    diseases: [
      {
        id: 'hav',
        name: 'Hepatitis A',
        pathogen: { type: 'Vírus', name: '<i>Hepatitis A vírus</i> (HAV)', gram: 'ssRNS (+), Picornaviridae (Hepatovirus nemzetség)', shape: 'ikozahidrális, burok nélküli (székletben) / kvázi-burokkal rendelkező (eHAV, vérben)' },
        epidemiology: {
          incidence: 'Alacsony jövedelmű országokban magas endémia (gyermekkori átfertőzöttség); fejlett országokban alacsony, de sporadikus kitörések (MSM, élelmiszer, utazók).',
          risk_groups: ['Endémiás területekre utazók', 'Férfiakkal szexuáló férfiak (MSM)', 'Intravénás droghasználók', 'Hajléktalanok', 'Krónikus májbetegek (HBV, HCV, MASLD, cirrhosis)', 'Szennyvízkezelő és laboratóriumi dolgozók'],
          seasonality: 'Nincs',
          transmission: 'Feko-orális (szennyezett ivóvíz, élelmiszer, tenger gyümölcsei), szexuális (orális-anális kontaktus), ritkán parenterális (viraemiás vér/tűmegosztás).'
        },
        pathomechanism: {
          steps: [
            'Orális bejutás: A szájon át bejutott HAV a bélhámsejteken átjutva a portális keringéssel jut a májba.',
            'Hepatocyta fertőzés: A HAVCR-1 (TIM-1) receptoron keresztül jut be a májsejtekbe, ahol a citoplazmában replikálódik, de nem citopatikus (nem okoz közvetlen sejt-nekrózist).',
            'Immunmediált sejtpusztulás: A májsejt-károsodást a gazdaszervezet CD8+ citotoxikus T-lymphocytái és NK-sejtjei által indított immunválasz okozza, amelyek elpusztítják a fertőzött hepatocytákat.',
            'Ürítés és kvázi-burok (eHAV): A vírus az epével a székletbe ürül (a tünetek előtt 1–2 héttel a legmagasabb a széklet vírustitere). A vérben lipidekkel körülvett kvázi-burokkal (eHAV) kering, megvédve a semlegesítő antitestektől.'
          ],
          virulence_factors: ['Saválló kapszid (túléli a gyomorsavat)', 'eHAV kvázi-burok (vérbeli immunelkerülés)', 'Magas környezeti stabilitás']
        },
        clinical: {
          incubation: '15–50 nap (átlagosan 28 nap)',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Prodromalis fázis', description: 'Influenzaszerű tünetek (láz, gyengeség, fejfájás), hányinger, jobb bordaív alatti fájdalom, étvágytalanság, undor a dohányfüsttől/zsíros ételektől (1–2 hétig tart).', severity: 'moderate' },
            { name: 'Icterusos fázis', description: 'Sötét vizelet (bilirubinuria), acholiás (világos) széklet, sárgaság (sclera, bőr). A láz ekkorra megszűnik.', severity: 'moderate' },
            { name: 'Atipikus formák (kolesztatikus / relapszáló)', description: 'Elhúzódó kolesztázis (pruritus, magas ALP/GGT >12 hétig) vagy relapszus (4–20%-ban, 4–15 héttel a primer javulás után).', severity: 'moderate' }
          ],
          physical_exam: [
            'Icterus (sclera, bőr)',
            'Hepatomegalia, érzékeny májszél',
            'Splenomegalia (10–20%-ban)',
            'Ritkán póknaevus vagy átmeneti exanthema'
          ],
          complications: [
            'Fulmináns hepatitis / Akut májelégtelenség (ALF): <0.5–1%, de idős korban (>50 év) vagy meglévő krónikus májbetegségben (HBV, HCV, cirrhosis) sokkal magasabb (koagulopátia, encephalopathia).',
            'Kolesztatikus hepatitis (elhúzódó kolesztázis, kifejezett viszketés, maradványtünet nélkül gyógyul).',
            'Relapszáló HAV (újabb májenzim- és tünetkiugrás hetekkel a látszólagos gyógyulás után, krónikussá válás nélkül).',
            'Extrahepatikus manifesztációk: Acut interstitialis nephritis, aplasztikus anémia, leukocytoclasticus vasculitis, Guillain-Barré szindróma.',
            'NINCS krónikus hordozás vagy krónikus hepatitis!'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Májenzimek (ALT, AST)', finding: 'Extrém emelkedett (>1000 U/L, gyakran >2000–5000 U/L; ALT > AST)', interpretation: 'Akut gravior hepatocelluláris nekrózis' },
            { test: 'Bilirubin (direkt és totál)', finding: 'Szignifikánsan emelkedett (>50–200 µmol/L)', interpretation: 'Kevert/hepatocelluláris és kolesztatikus icterus' },
            { test: 'ALP / GGT', finding: 'Mérsékelten emelkedett (kolesztatikus formánál extrém magas)', interpretation: 'Kolesztázis jele' },
            { test: 'Prothrombin idő / INR', finding: 'INR monitorozása kötelező!', interpretation: 'INR >1.5 acute liver failure (ALF) és fulmináns lefolyás gyanúját kelti' }
          ],
          imaging: [
            { modality: 'Hasi ultrahang', finding: 'Hepatomegalia, epehólyag-fal reactiv megvastagodása, minimális perihepatikus folyadék', significance: 'Kizárja az epeúti obstrukciót és egyéb szerkezeti eltéréseket' }
          ],
          microbiology: [
            { test: 'Anti-HAV IgM (ELISA)', finding: 'Pozitív', significance: 'Akut Hepatitis A fertőzés diagnózisának aranystandardja (3–6 hónapig perzisztál)' },
            { test: 'Anti-HAV IgG / Total Anti-HAV', finding: 'Pozitív', significance: 'Átvészelt fertőzést vagy vakcinációs immunitást igazol (élethosszig megmarad)' },
            { test: 'HAV RNS (RT-PCR)', finding: 'Pozitív', significance: 'Atipikus szerológiai ablak, relapszus vagy epidemiológiai vizsgálatok esetén' }
          ],
          differential: [
            { disease: 'Egyéb akut vírushepatitisek (HBV, HCV, HEV, EBV, CMV)', distinguishing: 'Azonos tünettan; szerológiai panel (HBsAg, Anti-HBV, Anti-HCV, Anti-HEV IgM) alapján különíthető el' },
            { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Anamnézis (paracetamol, gomba, antibiotikumok), toxikológiai szűrés' },
            { disease: 'Choledocholithiasis / Acut cholangitis', distinguishing: 'Hasi UH/MRCP (tágult epeutak, kövek), Charcot-triád, ALP/GGT dominancia' },
            { disease: 'Autoimmun hepatitis (akut kezdet)', distinguishing: 'Autoantitestek (ANA, ASMA), szérum IgG emelkedés, májbiopszia' },
            { disease: 'Ischaemiás hepatitis / Sokkmáj', distinguishing: 'Anamnézisben keringési összeomlás, LDH extrém gyors kiugrása' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Szupportív terápia', dose: '-', duration: '-', note: 'Ágynyugalom, szimptomatikus kezelés, kiegyensúlyozott étrend, alkohol és hepatotoxikus gyógyszerek szigorú tilalma' }
            ],
            inpatient: [
              { drug: 'IV Folyadékpótlás & Antiemetikum', dose: 'Egyéni', duration: 'Akut fázis', note: 'Súlyos dehidráció, terhesség, idős kor vagy koagulopátia esetén' }
            ],
            icu: [
              { drug: 'Sürgősségi májtranszplantáció', dose: 'Transzplantációs lista', duration: 'Azonnali', note: 'King\'s College kritériumoknak megfelelő fulmináns májelégtelenségben' }
            ]
          },
          targeted: 'Nincs specifikus engedélyezott antivirális terápia.',
          supportive: ['Adekvát hidratáció', 'Szénhidrátdús étrend', 'Kolesztázis esetén cholestyramin/ursodeoxikolsav', 'Szigorú alkoholtilalom legalább 6 hónapig'],
          prevention: [
            'Pre-expozíciós vakcináció (inaktivált HAV oltás 2 dózisban: 0 és 6–12 hónap)',
            'Post-expozíciós profilaxis (PEP): expozíció után 14 napon belül. 1–40 éves egészségeseknek 1 dózis HAV vakcina; >40 év felettieknek, immunszupprimáltaknak vagy krónikus májbetegeknek HAV vakcina + Immunglobulin (HNIG) adandó.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Akut HAV fertőzés igazolására szérum Anti-HAV IgM elengedhetetlen; az INR szoros követése kötelező az akut májelégtelenség (ALF) szűrésére.',
            'Ha korai ablakperiódus gyanúja áll fenn, szerológia ismétlése vagy HAV RNS (PCR) javasolt.'
          ],
          treatment_indications: [
            'Kizárólag szupportív. Kórházi felvétel javasolt INR > 1.5, encephalopathy, súlyos dehidráció vagy veszélyeztetett betegcsoport (idős, krónikus májbeteg) esetén.',
            'Májtranszplantáció vizsgálata King\'s College kritériumok alapján fulmináns esetben.'
          ],
          post_exposure: [
            'Post-expozíciós profilaxis (PEP): Expozíciót követő 14 napon belül 1 dózis HAV vakcina (1–40 év) vagy vakcina + HNIG (>40 év, immunszuppresszió, cirrhosis).'
          ],
          prevention: [
            'Pre-expozíciós prevenció: Inaktivált vakcina 2 dózisban (0 és 6–12 hó). Kiemelt javallat: utazók endémiás területre, MSM, krónikus májbetegek, IV droghasználók.'
          ],
          special_populations: [
            'Terhesség: A HAV terhesség alatt általában nem okoz fulmináns lefolyást, de post-expozíciós igénynél vakcina és/vagy HNIG adandó.',
            'Immunhiányos és krónikus májbetegek: Oltás korán indokolt; szerológiai válasz ellenőrzendő.'
          ]
        },
        prognosis: {
          mortality: 'Fiataloknál alacsony (<0.1%), de 50 év felett és krónikus májbetegségben 1.8–5%',
          prognostic_scores: ['King\'s College kritériumok (akut májelégtelenség)'],
          factors: 'Életkor, meglévő krónikus májbetegség (HBV, HCV, cirrhosis), koagulopátia fokozódása (INR)'
        },
        references: [
          'EASL Clinical Practice Guidelines & Public Health Recommendations on Hepatitis A.',
          'WHO. Hepatitis A fact sheet & CDC Yellow Book.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>1 hó</text><text x='350' y='370' class='txt'>3 hó</text><text x='500' y='370' class='txt'>6 hó</text><text x='650' y='370' class='txt'>1 év</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q150,50 250,50 Q350,50 450,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='40' class='txt' fill='purple'>Anti-HAV IgM</text><path d='M150,350 Q250,100 350,100 L750,100' fill='none' stroke='green' stroke-width='3' /><text x='600' y='90' class='txt' fill='green'>Anti-HAV IgG</text><path d='M50,350 Q100,200 150,200 Q200,200 220,350' fill='none' stroke='red' stroke-width='3' stroke-dasharray='5,5' /><text x='80' y='190' class='txt' fill='red'>Vírus (széklet)</text><path d='M100,350 Q180,150 220,150 Q260,150 300,350' fill='none' stroke='orange' stroke-width='2' /><text x='180' y='140' class='txt' fill='orange'>ALT (Tünetek)</text></svg>",
            caption: 'Hepatitis A szerológiai lefolyása',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hbv',
        name: 'Hepatitis B',
        pathogen: { type: 'Vírus', name: '<i>Hepatitis B vírus</i> (HBV)', gram: 'dsDNS (reverz transzkriptázzal), Hepadnaviridae', shape: 'gömb (42 nm-es Dane-partikula, burokkal)' },
        epidemiology: {
          incidence: 'Világszerte 250–290 millió krónikus HBsAg-hordozó; évente ~820 000 haláleset cirrhosis és HCC miatt.',
          risk_groups: ['Intravénás droghasználók', 'Több szexuális partner, MSM', 'Egészségügyi dolgozók (tűszúrásos baleset)', 'Hemodializált és transzfundált betegek', 'Endémiás területről származók és újszülötteik (perinatális átvitel)'],
          seasonality: 'Nincs',
          transmission: 'Parenterális (vér, testnedvek), szexuális, vertikális (perinatális/anya-gyermek), perkután.'
        },
        pathomechanism: {
          steps: [
            'Hepatocyta belépés & Receptor: A HBV a májsejtek felszínén lévő NTCP (nátrium-taurokolát kotraszportáló polipeptid) receptorhoz kötődve jut a citoplazmába.',
            'cccDNS képződés: A sejtmagba jutva a parciálisan kettős szálú DNS kovalensen zárt cirkuláris DNS-sé (cccDNS) alakul át. A cccDNS rendkívül stabil episzomális reservoirt képez, ami a vírusperzisztencia alapja és a jelenlegi nukleos(t)id analógokkal nem eradikálható.',
            'DNS Integráció & Karcinogenezis: A HBV DNS egy része integrálódik a gazdasejt genomjába. Ez cccDNS-független HBsAg és HBx fehérje termelést okoz, valamint genomikus instabilitást és hepatocelluláris carcinomát (HCC) vált ki – akár cirrhosis hiányában is!',
            'Immunpatogenezis: A HBV nem közvetlenül citopatikus. A májsejt-károsodást és a gyulladást a fertőzött hepatocyták ellen irányuló CD8+ citotoxikus T-sejtes immunválasz váltja ki.',
            'EASL Természetes Lefolyási Fázisok: 1. HBeAg+ krónikus fertőzés ("immuntoleráns": magas HBV DNS, normál ALT); 2. HBeAg+ krónikus hepatitis (magas DNS, emelkedett ALT, fibroszis); 3. HBeAg- krónikus fertőzés ("inaktív hordozó": alacsony DNS <2000 IU/ml, normál ALT); 4. HBeAg- krónikus hepatitis (fluctuáló DNS >2000 IU/ml, ALT emelkedés, progrediáló fibroszis); 5. HBsAg-negatív fázis (Okkult HBV / resolved: HBsAg-, cccDNS perzisztál a májban, immunszuppresszióban reaktiválódhat).'
          ],
          virulence_factors: ['cccDNS (tartós reservoir)', 'HBx fehérje (transzaktivátor, karcinogén)', 'HBsAg túltermelés (immun-decoy)', 'HBeAg (immuntolerancia indukció)']
        },
        clinical: {
          incubation: '45–160 nap (átlagosan 90 nap)',
          onset: 'Lappangó / Lassú',
          symptoms: [
            { name: 'Akut fázis', description: '70%-ban anicterusos/subclinicus. Szimptómás esetben szérumbetegség-szerű prodroma (arthralgia, urticaria, láz - Gianotti-Crosti szindróma gyermekeknél), majd sárgaság, sötét vizelet, jobb felhasi tompa fájdalom.', severity: 'moderate' },
            { name: 'Krónikus fázis', description: 'Évtizedekig aszimptomatikus ("csendes gyilkos"). Késői stádiumban a májcirrhosis dekompenzációs jelei (ascites, varixvérzés, hepaticus encephalopathia, icterus, splenomegalia) dominálnak.', severity: 'severe' },
            { name: 'Extrahepatikus manifesztációk (EASL kiemelt)', description: 'Polyarteritis nodosa (PAN), Membranous / Membranoproliferativ glomerulonephritis, cryoglobulinemia, Gianotti-Crosti szindróma.', severity: 'severe' }
          ],
          physical_exam: [
            'Hepatomegalia (érzékeny májszél)',
            'Icterus (sclera, bőr)',
            'Splenomegalia és póknaevusok, palmaris erythema (krónikus/cirrhosis)',
            'Ascites, caput medusae, flapping tremor / asterixis (dekompenzált cirrhosis)'
          ],
          complications: [
            'Krónikus Hepatitis B (csecsemőkori fertőzésnél 90%, felnőttkorban <5%)',
            'Májcirrhosis és dekompenzáció',
            'Hepatocellularis carcinoma (HCC - akár cirrhosis hiányában is!)',
            'Polyarteritis nodosa (PAN) és Glomerulonephritis',
            'HBV reaktiváció immunszuppresszió / biológiai terápia / rituximab hatására'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Májenzimek (ALT, AST)', finding: 'Akut esetben >1000 U/L; krónikusban fluktuáló emelkedés', interpretation: 'Májsejt-károsodás és gyulladásos aktivitás' },
            { test: 'Bilirubin & Albumin & INR', finding: 'Direkt bilirubin emelkedett, hypoalbuminaemia, INR megnyúlás', interpretation: 'Máj szintetizáló funkciójának csökkenése, dekompenzáció' },
            { test: 'Thrombocyta szám', finding: 'Thrombocytopenia (<150 G/L)', interpretation: 'Portalis hypertensio és hypersplenia jele' }
          ],
          microbiology: [
            { test: 'HBsAg', finding: 'Pozitív', significance: 'Fertőzés jelenléte (>6 hónap fennállás = krónikus HBV)' },
            { test: 'Anti-HBs', finding: 'Pozitív (≥10 IU/L)', significance: 'Immunitás és védettség (sikeres oltás vagy átvészelt fertőzés)' },
            { test: 'Anti-HBc IgM', finding: 'Pozitív', significance: 'Akut HBV fertőzés igazolása (az ablakperiódusban is pozitív!) vagy akut flare' },
            { test: 'Anti-HBc Total (IgG+IgM)', finding: 'Pozitív', significance: 'Átvészelt vagy jelenleg fennálló HBV fertőzés (minden HBsAg+ személynél pozitív)' },
            { test: 'HBeAg / Anti-HBe', finding: 'HBeAg+ vagy Anti-HBe+', significance: 'HBeAg+ = magas virális replikáció; HBeAg- = szerokonverzió vagy precore mutáns' },
            { test: 'HBV DNS (Kvantitatív RT-PCR)', finding: 'Pozitív (IU/mL)', significance: 'Virális replikáció pontos mérése; a kezelési indikáció és a terápia követésének alapja' }
          ]
        },
        differential: [
          { disease: 'Egyéb vírushepatitisek (HAV, HCV, HDV, HEV)', distinguishing: 'Szerológiai és PCR tesztek (Anti-HAV IgM, Anti-HCV, Anti-HDV, Anti-HEV IgM)' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA, LKM-1), emelkedett szérum IgG, májbiopszia' },
          { disease: 'Alkoholos vagy Metabolikus májbetegség (MASLD/MASH)', distinguishing: 'Anamnézis, AST/ALT >2, metabolikus szindróma, ultrahang steatosis' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Anamnézisben hepatotoxikus szer, szoros időbeli összefüggés' },
          { disease: 'Wilson-kór', distinguishing: 'Fiatal beteg, alacsony cöruloplazmin, magas 24h vizelet réz, Kayser-Fleischer gyűrű' }
        ],
        therapy: {
          guidelines: ['EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection'],
          empirical: {
            outpatient: [
              { drug: 'Entecavir (ETV)', dose: '0.5 mg PO 1x/nap (1.0 mg lamivudin-rezisztens vagy dekompenzált esetben)', duration: 'Hosszú távú / élethosszig', note: 'Első vonalbeli nukleozid analóg, magas rezisztenciagáttal.' },
              { drug: 'Tenofovir disoproxil fumarát (TDF)', dose: '300 mg PO 1x/nap', duration: 'Hosszú távú / élethosszig', note: 'Első vonalbeli nukleotid analóg, nulla rezisztencia. Vesefunkció és csontsűrűség monitorozása szükséges.' },
              { drug: 'Tenofovir alafenamid (TAF)', dose: '25 mg PO 1x/nap', duration: 'Hosszú távú / élethosszig', note: 'Preferált első vonal >60 év felett, meglévő csontbetegség/osteoporosis vagy veseelégtelenség (eGFR <60) esetén.' }
            ],
            inpatient: [
              { drug: 'Tenofovir (TDF/TAF) vagy Entecavir', dose: 'Standard adagolás', duration: 'Azonnali indítás', note: 'Súlyos akut hepatitis B, fulmináns májelégtelenség vagy akut dekompenzáció esetén azonnal indítandó!' }
            ]
          },
          targeted: 'EASL Irányelv: Hosszú távú / élethosszig tartó nukleos(t)id analóg (NA: Entecavir, TDF, TAF) kezelés a HBV DNS tartós elnyomására. Véges (48 hetes) Peg-IFN alfa-2a terápia válogatott, kompenzált, jó májfunkciójú betegeknél mérlegelhető.',
          supportive: ['Rendszeres HCC szűrés (hasi UH 6 havonta)', 'HAV oltás adása', 'Családtagok és szexuális partnerek szűrése és oltása', 'Szigorú alkoholtilalom'],
          prevention: ['Rekombináns HBV vakcináció (0-1-6 hónapos oltási sorrend)', 'Terhesek univerzális HBsAg szűrése az 1. trimeszterben', 'Post-expozíciós profilaxis (HBIG + 1. vakcina dózis 12 órán belül) újszülötteknek és tűszúrásos expozíciónak']
        },
        guidelines: {
          definitions: [
            'Akut HBV: HBsAg+ és Anti-HBc IgM+.',
            'Krónikus HBV: HBsAg+ >6 hónapja.',
            'Gyógyult (Resolved/Past infection): HBsAg-, Anti-HBc+, Anti-HBs+ (vagy Anti-HBs-).',
            'Oltott (Vaccinated): Csak Anti-HBs+ (≥10 IU/L), minden más marker negatív.',
            'EASL Fázis 1 (HBeAg+ krónikus fertőzés / Immuntoleráns): HBsAg+, HBeAg+, magas HBV DNS (>10^7 IU/ml), normál ALT, nincs/minimális fibroszis.',
            'EASL Fázis 2 (HBeAg+ krónikus hepatitis): HBsAg+, HBeAg+, magas HBV DNS, emelkedett ALT, fibroszis.',
            'EASL Fázis 3 (HBeAg- krónikus fertőzés / Inaktív hordozó): HBsAg+, HBeAg-, Anti-HBe+, alacsony HBV DNS (<2000 IU/ml), normál ALT.',
            'EASL Fázis 4 (HBeAg- krónikus hepatitis): HBsAg+, HBeAg-, Anti-HBe+, fluktuáló HBV DNS (>2000 IU/ml), ALT emelkedés, fibroszis.',
            'EASL Fázis 5 (HBsAg-negatív / Okkult HBV): HBsAg-, Anti-HBc+, perzisztáló cccDNS a májban (immunszuppresszióban reaktiválódhat!).'
          ],
          diagnosis: [
            'Kezdeti szűrés és diagnózis: HBsAg, Anti-HBs, Anti-HBc Total/IgM, HBeAg/Anti-HBe, kvantitatív HBV DNS RT-PCR',
            'Máj-fibrosis és steatosis értékelés: Transient Elastography (FibroScan) vagy szérum FIB-4 / APRI index'
          ],
          treatment_indications: [
            'MINDEN cirrhosisos beteg (kompenzált vagy dekompenzált), ha a HBV DNS kimutatható (szinttől függetlenül!)',
            'Krónikus hepatitis B: HBV DNS >2000 IU/ml ÉS ALT > ULN ÉS legalább mérsékelt fibroszis (≥F2)',
            'HBV DNS >20 000 IU/ml ÉS ALT >2x ULN (fibroszistól függetlenül)',
            'Immunszuppresszív / biológiai / kemoterápiás kezelés (pl. Rituximab) előtt álló HBsAg+ vagy Anti-HBc+ betegek profilaxisa'
          ],
          first_line: [
            'Entecavir (0.5 mg/nap), Tenofovir disoproxil (TDF 300 mg/nap), Tenofovir alafenamid (TAF 25 mg/nap)',
            'Peg-IFN alfa-2a (48 hét) - válogatott kompenzált betegeknél'
          ],
          special_populations: [
            'Terhesség: TDF (Tenofovir disoproxil) indítandó a 24–28. terhességi héttől, ha az anyai HBV DNS >200 000 IU/ml. Újszülöttnek HBIG + vakcina 12 órán belül.',
            'Veseelégtelenség / eGFR <60 ml/perc vagy osteoporosis: TAF vagy Entecavir preferált a TDF-el szemben.',
            'HDV koinfekció: Peg-IFN vagy Bulevirtide 2mg SC naponta.'
          ],
          monitoring: [
            'NA kezelés alatt: ALT, HBV DNS és renalis funkció / szérum foszfát 3–6 havonta',
            'HCC szűrés: Hasi ultrahang ± AFP 6 havonta kötelező minden cirrhosisos, magas PAGE-B score-ú vagy családi HCC-vel rendelkező betegnél'
          ]
        },
        prognosis: {
          mortality: 'Akut: <1% (fulmináns lefolyás kivételével); Krónikus: kezeletlenül 5-éves cirrhosis kockázat 8-20%, HCC kockázat 2-5%/év',
          prognostic_scores: ['PAGE-B score (HCC kockázat becslése NA terápia alatt)', 'MELD / Child-Pugh score (cirrhosisban)'],
          factors: 'Virális load (HBV DNS), HBeAg szerokonverzió, fibroszis stádiuma, HDV/HCV/HIV koinfekció, alkohol'
        },
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>4 hét</text><text x='350' y='370' class='txt'>8 hét</text><text x='500' y='370' class='txt'>6 hó</text><text x='650' y='370' class='txt'>12 hó</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q100,50 150,50 Q200,50 250,350' fill='none' stroke='red' stroke-width='3' /><text x='120' y='40' class='txt' fill='red'>HBsAg</text><path d='M60,350 Q100,100 140,100 Q180,100 220,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='140' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q150,80 200,80 Q300,80 350,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q150,120 200,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M280,350 Q350,150 400,150 L750,150' fill='none' stroke='green' stroke-width='3' /><text x='600' y='140' class='txt' fill='green'>Anti-HBs</text><path d='M240,350 Q300,200 350,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe</text><text x='265' y='300' class='txt' font-size='12' fill='gray'>Ablak periódus</text></svg>",
            caption: 'Akut HBV fertőzés szerológiai lefolyása (Gyógyulás)',
            type: 'Diagram'
          },
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>6 hó</text><text x='350' y='370' class='txt'>1 év</text><text x='500' y='370' class='txt'>Évek...</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HBsAg (Perzisztál)</text><path d='M60,350 Q90,100 150,100 L400,100 Q450,100 500,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='200' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q120,80 180,80 Q250,80 300,350' fill='none' stroke='purple' stroke-width='3' /><text x='150' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q120,120 180,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M450,350 Q500,200 550,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe (Késői)</text><text x='400' y='300' class='txt' font-size='12' fill='gray'>Nincs Anti-HBs!</text></svg>",
            caption: 'Krónikus HBV fertőzés szerológiai lefolyása',
            type: 'Diagram'
          }
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398. doi:10.1016/j.jhep.2017.03.021',
          'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
        ]
      },
      {
        id: 'hcv',
        name: 'Hepatitis C',
        pathogen: { type: 'Vírus', name: '<i>Hepatitis C vírus</i> (HCV)', gram: 'ssRNS (+), Flaviviridae (Hepacivirus nemzetség)', shape: 'gömb alakú, burokkal rendelkező vírus (50 nm)' },
        epidemiology: {
          incidence: 'Világszerte ~58–71 millió krónikus fertőzött; évente ~290 000 haláleset cirrhosis és HCC miatt.',
          risk_groups: ['Intravénás droghasználók (tűmegosztás)', 'Transzfúziót kapottak (1992 előtti vérkészítmények)', 'Egészségügyi dolgozók (tűszúrásos sérülés)', 'Tetoválást/piercinget vagy nem steril orvosi beavatkozást elszenvedők', 'Férfiakkal szexuáló férfiak (MSM, főleg HIV-koinfekcióban)'],
          seasonality: 'Nincs',
          transmission: 'Parenterális (vér útján – domináns), szexuális (ritkább, kivéve MSM/HIV), vertikális (anya-magzat ~5%).'
        },
        pathomechanism: {
          steps: [
            'Replikáció a citoplazmában: A HCV kizárólag a hepatocyták citoplazmájában replikálódik. Nem képez sejtmagi dDNS-t vagy cccDNS-t – ezért a fertőzés közvetlenül támadható és DAA-kkal biológiailag TELJESEN ERADIKÁLHATÓ (gyógyítható!).',
            'Quasispecies & Immunelkerülés: A virális NS5B RNS-függő RNS-polimeráz nem rendelkezik hibajavító (proofreading) aktivitással, ami folyamatos mutációkhoz (quasispecies) és az immunválasz elkerüléséhez vezet.',
            'Magas chronicitás & Fibrogenezis: Az fertőzöttek 75–85%-ában krónikus hepatitis alakul ki. A tartós parenchymás gyulladás aktiválja a hepaticus stellate sejteket, ami konfluáló fibrózishoz, májcirrhosisoz (20–30 év alatt 20–30%-ban) és HCC-hez vezet.'
          ],
          virulence_factors: ['NS3/4A proteáz', 'NS5A komplex fehérje', 'NS5B RNS-polimeráz', 'Nagy fokú quasispecies variabilitás']
        },
        clinical: {
          incubation: '14–180 nap (átlagosan 6–8 hét)',
          onset: 'Lappangó / Tünetszegény',
          symptoms: [
            { name: 'Akut fázis', description: '80%-ban aszimptomatikus ("csendes gyilkos"). Enyhe fáradtság, étvágytalanság, anicterusos lefolyás. A spontán clearance csak 15–25%-ban következik be.', severity: 'mild' },
            { name: 'Krónikus fázis', description: 'Évtizedekig tünetmentes lehet. A leggyakoribb vezető tünet a krónikus fáradtság, kognitív zavarok ("brain fog"). Késői stádiumban a cirrhosis szövődményei jelennek meg.', severity: 'moderate' },
            { name: 'Extrahepatikus manifesztációk (EASL kiemelt)', description: 'Kevert II/III típusú cryoglobulinemiás vasculitis (purpura, arthralgia, glomerulonephritis), B-sejtes non-Hodgkin lymphoma, Porphyria cutanea tarda (PCT), Lichen planus, inzulinrezisztencia és Type 2 Diabetes.', severity: 'severe' }
          ],
          physical_exam: [
            'Korai/középső stádiumban teljesen negatív fizikai lelet',
            'Cirrhosis jelei (palmaris erythema, póknaevus, splenomegalia, ascites, icterus) késői stádiumban',
            'Alsó végtagi purpura vagy ulcers cryoglobulinemia esetén'
          ],
          complications: [
            'Krónikus Hepatitis C (75–85%-ban kialakul!)',
            'Májcirrhosis (20–30% 20–30 év alatt)',
            'Hepatocellularis carcinoma (HCC - évi 1–4% kockázat cirrhosisban)',
            'Extrahepatikus szövődmények: Cryoglobulinemiás vasculitis, B-sejtes lymphoma, glomerulonephritis, T2DM'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'ALT / AST', finding: 'Hullámzóan emelkedett vagy akár normális', interpretation: 'Májgyulladás jelenléte; normál ALT sem zárja ki a súlyos fibroszist!' },
            { test: 'Thrombocyta & APRI / FIB-4 index', finding: 'Thrombocytopenia, magas FIB-4 (>3.25)', interpretation: 'Előrehaladott fibroszis / cirrhosis gyanúja' }
          ],
          microbiology: [
            { test: 'Anti-HCV (ELISA)', finding: 'Pozitív', significance: 'Expozíció igazolása (önmagában nem különíti el az aktív fertőzést a gyógyulttól)' },
            { test: 'HCV RNS (Kvantitatív RT-PCR)', finding: 'Pozitív (IU/mL)', significance: 'AKTÍV fertőzés igazolása (minden Anti-HCV+ betegnél elengedhetetlen kiterjesztett teszt!)' },
            { test: 'Genotipizálás (1–6)', finding: 'Genotípus meghatározás', significance: 'Történeti jelentőségű; pangenotípusos DAA érában már nem feltétlenül kötelező az egyszerűsített kezeléshez' },
            { test: 'Fibroszis stádium meghatározás (EASL)', finding: 'FibroScan (Transient Elastography) / FIB-4', significance: 'Elengedhetetlen a cirrhosis (F4) azonosítására a poszt-SVR HCC szűrési kötelezettség miatt' }
          ]
        },
        differential: [
          { disease: 'Hepatitis B és D vírusfertőzés', distinguishing: 'Szerológia (HBsAg, Anti-HBc, Anti-HDV, HBV DNS)' },
          { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST/ALT >2, GGT és MCV kiugró emelkedése' },
          { disease: 'Metabolikus diszfunkcióhoz társuló zsírmáj (MASLD / MASH)', distinguishing: 'Metabolikus szindróma, ultrahangos steatosis, szövettan' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA), emelkedett szérum IgG' },
          { disease: 'Hemochromatosis', distinguishing: 'Magas szérum vas, ferritin és transzferrin szaturáció (>45%), HFE génmutáció' }
        ],
        therapy: {
          guidelines: ['EASL Recommendations on Treatment of Hepatitis C 2020 update'],
          empirical: {
            outpatient: [
              { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tabletta (300 mg / 120 mg) PO 1x/nap étkezéssel', duration: '8 hét', note: 'Pangenotípusos DAA. Kezelés-naív betegeknek cirrhosis nélkül ÉS kompenzált cirrhosisban (Child-Pugh A) is CSUPÁN 8 HÉT!' },
              { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tabletta (400 mg / 100 mg) PO 1x/nap', duration: '12 hét', note: 'Pangenotípusos DAA. Non-cirrhoticus és kompenzált cirrhoticus betegekben egyaránt adható.' }
            ]
          },
          targeted: 'EASL Irányelv: Pangenotípusos DAA (Direct-Acting Antiviral) kezelés MINDEN viraemiás (HCV RNS+) betegnek. Cél a Tartós Virológiai Válasz (SVR12 = nem kimutatható HCV RNS 12 héttel a kezelés után), ami végleges biológiai GYÓGYULÁST jelent (>95-99% sikerráta!).',
          supportive: ['Gyógyszerinterakciók ellenőrizendők az indítás előtt (www.hep-druginteractions.org)', 'Szigorú alkoholtilalom', 'Májprotektív életmód'],
          prevention: ['Nincs védőoltás (magas virális variabilitás miatt)', 'Vérkészítmények és szervdonorok kötelező PCR szűrése', 'Ártalomcsökkentési programok (steril tűcsere IV droghasználóknak)', 'Biztonságos szexuális élet']
        },
        guidelines: {
          diagnosis: [
            'Szűrés: Anti-HCV szerológia (ELISA) minden kockázati csoportban és véradásnál',
            'HCV RNS pozitív = Aktív fertőzés -> Azonnali DAA kezelés javallott'
          ],
          treatment_indications: [
            'MINDEN krónikus HCV fertőzött beteg kezelendő, függetlenül a fibroszis stádiumától.',
            'Kivételek: terhesség (DAA nem engedélyezett) vagy nagyon rövid várható élettartam nem-máj eredetű okból.'
          ],
          first_line: [
            'Glecaprevir / Pibrentasvir (8 hét)',
            'Sofosbuvir / Velpatasvir (12 hét)'
          ],
          monitoring: [
            'SVR12 (Sustained Virologic Response): HCV RNS negatív 12 héttel a kezelés után = Biológiai gyógyulás (>95-99%)',
            'F3 / F4 (cirrhosis) stádium esetén az SVR után is ÉLETHOSSZIG TARTÓ HCC szűrés (hasi UH 6 havonta) kötelező!'
          ],
          special_populations: [
            'Dekompenzált cirrhosis (Child-Pugh B/C): Proteáz inhibitorok (Glecaprevir, Grazoprevir, Voxilaprevir) ABSZOLÚT KONTRAINDIKÁLTAK! Sofosbuvir/Velpatasvir + Ribavirin adható.'
          ]
        },
        prognosis: {
          mortality: 'Kiváló (>95–99% SVR12 = gyógyulás DAA-val); dekompenzált cirrhosisban vagy előrehaladott HCC-ben rosszabb',
          prognostic_scores: ['FIB-4 / APRI index', 'Child-Pugh és MELD score (cirrhosisban)'],
          factors: 'Fibroszis stádiuma a kezelés előtt, dekompenzáció megléte, HIV/HBV koinfekció, alkohol'
        },
        references: [
          'EASL Recommendations on Treatment of Hepatitis C (2020 update). J Hepatol. 2020;73(5):1170-1218.',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='150' y='370' class='txt'>2 hó</text><text x='250' y='370' class='txt'>6 hó</text><text x='450' y='370' class='txt'>1 év</text><text x='650' y='370' class='txt'>Évek...</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HCV RNS</text><path d='M100,350 Q200,100 300,100 L750,100' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='90' class='txt' fill='blue'>Anti-HCV</text><path d='M100,350 Q150,150 200,250 T300,200 T400,250 T500,200 T600,250 T700,200' fill='none' stroke='orange' stroke-width='2' /><text x='600' y='190' class='txt' fill='orange'>ALT (Hullámzó)</text></svg>",
            caption: 'Krónikus Hepatitis C szerológiai lefolyása',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hdv',
        name: 'Hepatitis D',
        pathogen: { type: 'Vírus', name: '<i>Hepatitis D vírus</i> (HDV / Deltavirus nemzetség)', gram: 'ssRNS (-), defektív satellit vírus', shape: 'gömb alakú (36 nm), HBsAg burokba zárt cirkuláris RNS' },
        epidemiology: {
          incidence: 'Világszerte a HBsAg-pozitív betegek kb. 5%-a (12–20 millió ember) fertőzött HDV-vel.',
          risk_groups: ['Krónikus HBV fertőzöttek (HBsAg hordozók)', 'Intravénás droghasználók', 'Magas kockázatú szexuális magatartás / MSM', 'Endémiás területekről (Mediterráneum, Kelet-Európa, Amazonasz) származók'],
          seasonality: 'Nincs',
          transmission: 'Parenterális (vér), szexuális, perkután. KIZÁRÓLAG Hepatitis B vírus (HBsAg) jelenlétében képes fertőzni és terjedni!'
        },
        pathomechanism: {
          steps: [
            'Defektív satellit vírus: A HDV nem tud saját burokfehérjét szintetizálni. A hepatocytákba való bejutáshoz, az összeépüléshez és a vírusrészecskék kiszabadulásához a Hepatitis B vírus által termelt HBsAg-t használja fel (NTCP receptoron keresztül).',
            'Koinfekció (HBV + HDV egyidejű akut fertőzés): Általában súlyos akut hepatitist okoz magas fulmináns lefolyási kockázattal, de a krónikussá válás ritka (<5%).',
            'Szuperinfekció (Krónikus HBV hordozó fertőződik HDV-vel): >80–90%-ban krónikussá válik. Ez a human vírushepatitisek LEGAGRESSZÍVEBB és LEGGYORSABBAN PROGREDIÁLÓ formája! 5–10 év alatt 70–80%-ban májcirrhosis alakul ki, kiemelkedően magas HCC és dekompenzációs kockázattal.'
          ],
          virulence_factors: ['HDAg (Small és Large Hepatitis Delta Antigén)', 'HBsAg köpeny kihasználása', 'Közvetlen citopatikus és immunmediált hepatocytotoxicitás']
        },
        clinical: {
          incubation: '30–60 nap (szuperinfekció esetén rövidebb)',
          onset: 'Hirtelen / Akut fellángolás',
          symptoms: [
            { name: 'Szuperinfekció / Akut fellángolás', description: 'Ismert krónikus HBV-s beteg állapotának hirtelen, drámai romlása: kifejezett sárgaság, súlyos fáradékonyság, hányinger, jobb felhasi fájdalom.', severity: 'severe' },
            { name: 'Gyorsan progrediáló cirrhosis', description: 'Portalis hypertensio jelei (ascites, varixvérzés, splenomegalia) meglepően korán, fiatal felnőttkorban megjelenhetnek.', severity: 'severe' }
          ],
          physical_exam: [
            'Icterus (sclera és bőr kifejezett sárgasága)',
            'Fájdalmas hepatomegalia',
            'Splenomegalia, póknaevusok, ascites, asterixis (korai cirrhosis és dekompenzáció jelei)'
          ],
          complications: [
            'Fulmináns májelégtelenség (ALF) akut szuperinfekcióban',
            'Rendkívül gyors progresszió májcirrhosisba (5–10 év alatt)',
            'Hepatocellularis carcinoma (HCC - 3x magasabb kockázat, mint HBV monoferfertőzésben)',
            'Korai májdekompenzáció és elhalálozás'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'ALT / AST', finding: 'Kifejezetten emelkedett vagy fluktuáló kiugrásokat mutat', interpretation: 'Súlyos nekroinflammatórikus aktivitás' },
            { test: 'Bilirubin & INR', finding: 'Progresszíven emelkedő bilirubin, INR >1.5', interpretation: 'Májfunkció gyors romlása, akut májelégtelenség veszélye' }
          ],
          microbiology: [
            { test: 'Anti-HDV Total (IgG/IgM ELISA)', finding: 'Pozitív', significance: 'EASL Követelmény: MINDEN HBsAg-pozitív beteget ALÁBBAN EGYSZER szűrni kell Anti-HDV-re!' },
            { test: 'HDV RNS (Kvantitatív RT-PCR)', finding: 'Pozitív (IU/mL)', significance: 'Aktív HDV replikáció igazolása; a diagnózis és a kezelés monitorozásának alappillére' },
            { test: 'HBsAg & Anti-HBc IgM', finding: 'HBsAg+; Anti-HBc IgM+ (koinfekció) vagy Anti-HBc IgM- (szuperinfekció)', significance: 'Különbségtétel a koinfekció és szuperinfekció között' }
          ]
        },
        differential: [
          { disease: 'Akut HBV reaktiváció / flare (HDV nélkül)', distinguishing: 'HDV RNS negatív, Anti-HDV negatív; HBV DNS hirtelen kiugrása' },
          { disease: 'Egyéb akut felülfertőződések (HAV, HEV, HCV)', distinguishing: 'Anti-HAV IgM, Anti-HEV IgM, HCV RNS tesztelés' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI) HBV hordozóban', distinguishing: 'Anamnézisben hepatotoxikus szer, HDV RNS negatív' }
        ],
        therapy: {
          guidelines: ['EASL Clinical Practice Guidelines on Hepatitis Delta Virus 2023'],
          empirical: {
            outpatient: [
              { drug: 'Bulevirtide (Hepcludex)', dose: '2 mg SC 1x/nap (öninjekciózás)', duration: 'Hosszú távú fenntartó terápia (évekig)', note: 'EASL Első Vonalbeli Szer: Belépésgátló lipopeptid (NTCP receptor gátló). Kompenzált májbetegségben és HDV RNS pozitivitás esetén indítandó.' },
              { drug: 'Peg-IFN alfa-2a', dose: '180 mcg SC 1x/hét', duration: '48 hét', note: 'Off-label alternatíva (ha Bulevirtide nem elérhető); alacsony tartós válaszarány (~20-30%).' }
            ]
          },
          targeted: 'EASL 2023 Irányelv: Bulevirtide 2 mg SC naponta monoterápiában vagy nukleos(t)id analóggal (NA) kombinálva. Mivel a Bulevirtide nem hat közvetlenül a HBV cccDNS-re, az alapvető HBV elleni NA (Tenofovir/Entecavir) kezelést folytatni kell!',
          supportive: ['Szigorú alkoholtilalom', 'Rendszeres HCC szűrés (hasi UH + AFP 6 havonta)', 'Májtranszplantációs konzílium korai lefolyásban'],
          prevention: ['Hepatitis B elleni védőoltás (mivel a HDV terjedéséhez HBsAg szükséges)', 'Biztonságos tűhasználat és vérszűrés']
        },
        guidelines: {
          screening: ['Minden HBsAg-pozitív beteget legalább egyszer szűrni kell Anti-HDV-re!'],
          treatment: [
            'Bulevirtide 2mg SC naponta: Kompenzált májbetegség és aktív HDV RNS pozitivitás esetén indítandó. Kezelés addig, amíg klinikai és virológiai haszon észlelhető (éveken át).',
            'Peg-IFN alfa-2a (48 hét): Alternatíva, ha a Bulevirtide nem elérhető.'
          ],
          monitoring: ['HDV RNS, ALT, HBsAg, epe-sav szintek követése']
        },
        prognosis: {
          mortality: 'A legmagasabb mortalitású vírushepatitis; kezeletlenül 10-éves cirrhosis kockázat >70%, magas májeredetű halálozás',
          prognostic_scores: ['BEHIND score', 'Child-Pugh és MELD score'],
          factors: 'Szuperinfekció vs koinfekció, HDV RNS perzisztencia, fibroszis stádiuma, Bulevirtide kezelési válasz'
        },
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis Delta Virus. J Hepatol. 2023;79(2):433-460.',
          'European Medicines Agency (EMA). Hepcludex (bulevirtide) summary of product characteristics.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>Krónikus HBV</text><text x='300' y='370' class='txt'>HDV Fertőzés</text><text x='600' y='370' class='txt'>Idő</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,100 L750,100' fill='none' stroke='red' stroke-width='3' /><text x='100' y='90' class='txt' fill='red'>HBsAg (Jelen van)</text><path d='M250,350 Q300,50 400,50 L750,50' fill='none' stroke='purple' stroke-width='3' /><text x='450' y='40' class='txt' fill='purple'>HDV RNS / Anti-HDV IgM</text><path d='M300,350 Q400,120 500,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HDV Total</text><path d='M50,300 L250,300 Q300,150 350,250 T450,200 T550,250 T650,200' fill='none' stroke='orange' stroke-width='2' /><text x='500' y='190' class='txt' fill='orange'>ALT (Fellángolás)</text></svg>",
            caption: 'Hepatitis D szuperinfekció szerológiája',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hev',
        name: 'Hepatitis E',
        pathogen: { type: 'Vírus', name: '<i>Hepatitis E vírus</i> (HEV / Orthohepevirus A)', gram: 'ssRNS (+), Hepeviridae (Orthohepevirus A)', shape: 'ikozahidrális, burok nélküli (székletben) / kvázi-burokkal rendelkező (eHEV, vérben)' },
        epidemiology: {
          incidence: 'A világ leggyakoribb akut vírushepatitis oka. Fejlődő országokban vízi járványok (Genotípus 1, 2); Európában és Észak-Amerikában zoonózis (Genotípus 3, 4).',
          risk_groups: ['Nyers/félig nyers sertés- vagy vadhúst (kolbász, máj) fogyasztók', 'Szervtranszplantáltak (SOT)', 'HIV-fertőzöttek (CD4 <200/µL)', 'Kemoterápiás és biológiai terápiát (anti-TNF, rituximab) kapó betegek', 'Terhesek (Genotípus 1/2 esetén fulmináns kockázat)', 'Meglévő krónikus májbetegségben / cirrhosisban szenvedők'],
          seasonality: 'Trópusokon esős évszak (vízszennyezés); mérsékelt égövön nincs szezonalitás',
          transmission: 'Zoonózis (nem megfelelően átsütött sertés-, vaddisznó- és szarvashús - G3, G4), feko-orális (szennyezett ivóvíz - G1, G2), vértranszfúzió, szervátültetés, vertikális (anya-magzat).'
        },
        pathomechanism: {
          steps: [
            'Transzmisszió és szisztémás bejutás: Feko-orális (szennyezett víz - Genotípus 1, 2) vagy zoonotikus (alulművelt sertés/vadhús - Genotípus 3, 4) úton.',
            'Májsejt-károsodás: A hepatocyták fertőzését követően az immunmediált T-sejtes válasz okoz nekrózist és lobáris gyulladást.',
            'Terhességi fulmináns lefolyás (Genotípus 1, 2): A 3. trimeszterben a magas progeszteron/ösztrogén szintek, az alterált Th2 immunválasz és a placenta-máj tengely károsodása miatt fulmináns májelégtelenség alakulhat ki (20–25% mortalitás).',
            'Krónikussá válás (EASL definíció): Immunszupprimáltakban (SOT transzplantáltak, HIV, kemoterápia, anti-TNF/rituximab) a Genotípus 3 fertőzés nem eliminálódik. >3 hónapos HEV RNS perzisztencia esetén KRÓNIKUS HEV fertőzésről beszélünk, amely 2–5 év alatt krónikus hepatitishez és cirrhosisba progrediál.'
          ],
          virulence_factors: ['ORF3 fehérje (kiszabadulás és immunelkerülés)', 'ORF2 kapszid fehérje', 'eHEV kvázi-burok a szérumban']
        },
        clinical: {
          incubation: '15–60 nap (átlagosan 40 nap)',
          onset: 'Hirtelen vagy lappangó',
          symptoms: [
            { name: 'Akut icterusos hepatitis', description: 'Láz, étvágytalanság, hányinger, jobb bordaív alatti fájdalom, sárgaság, sötét vizelet.', severity: 'moderate' },
            { name: 'Neurológiai extrahepatikus tünetek (EASL kiemelt)', description: 'Guillain-Barré szindróma, Neuralgiás amyotrophia (Parsonage-Turner szindróma), encephalitis, myelitis.', severity: 'severe' },
            { name: 'Terhességi szövődmények (G1, G2)', description: 'Fulmináns májelégtelenség, koraszülés, fötális elhalás.', severity: 'severe' },
            { name: 'Krónikus HEV fertőzés (G3 immunszupprimáltakban)', description: 'Gyakran aszimptomatikus vagy enyhe fáradékonyság, perzisztens májenzim-emelkedés, gyorsan progrediáló cirrhosis.', severity: 'severe' }
          ],
          physical_exam: [
            'Icterus (sclera, bőr)',
            'Hepatomegalia (fájdalmas májszél)',
            'Neurológiai manifesztációk esetén perifériás paresis, izomgyengeség, reflexkiesés'
          ],
          complications: [
            'Fulmináns májelégtelenség (ALF): Terheseknél G1/G2 fertőzésben akár 20–25% mortalitás.',
            'Akut-on-krónikus májelégtelenség (ACLF): Meglévő cirrhosisban szenvedőknél súlyos dekompenzáció.',
            'Krónikus Hepatitis E (EASL: >3 hónap HEV RNS jelenlét): Szervtranszplantáltakban, HIV-fertőzöttekben és kemoterápiás betegekben gyors cirrhosishez vezet.',
            'Neurológiai manifesztációk: Guillain-Barré szindróma, Neuralgiás amyotrophia (Parsonage-Turner).',
            'Renális szövődmények: Membranoproliferatív glomerulonephritis (MPGN), membranous nephropathia.'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Májenzimek (ALT, AST)', finding: 'Kifejezetten emelkedett akut fázisban; krónikus esetben mérsékelt fluktuáló emelkedés', interpretation: 'Májsejt-károsodás' },
            { test: 'Bilirubin & ALP/GGT', finding: 'Emelkedett icterusos fázisban', interpretation: 'Kolesztázis' }
          ],
          imaging: [
            { modality: 'Hasi ultrahang', finding: 'Hepatomegalia, krónikus esetben cirrhosis jelei (májfelszíni egyenetlenség, splenomegalia, ascites)', significance: 'Szerkezeti és vascularis eltérések értékelése' }
          ],
          microbiology: [
            { test: 'Anti-HEV IgM & IgG (ELISA)', finding: 'Anti-HEV IgM pozitív immunkompetenseknél', significance: 'Akut HEV fertőzés szerológiai igazolása' },
            { test: 'HEV RNS (RT-PCR vérből/székletből)', finding: 'Kvantitatív PCR pozitív', significance: 'KÖTELEZŐ immunszupprimáltaknál (hol a szerológia álnegatív lehet!) és a krónikus HEV (>3 hónap) diagnózisához!' }
          ]
        },
        differential: [
          { disease: 'Egyéb akut vírushepatitisek (HAV, HBV, HCV, CMV, EBV)', distinguishing: 'Azonos tünettan; specifikus szerológia és PCR tesztek alapján különíthető el' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Gyakori mimetikum; HEV RNS és Anti-HEV IgM tesztelés minden feltételezett DILI esetén javasolt az EASL szerint!' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA), szérum IgG, májbiopszia' },
          { disease: 'Ischaemiás/Toxikus hepatitis', distinguishing: 'Keringési anamnézis, gomba- vagy paracetamol toxicity' }
        ],
        therapy: {
          guidelines: ['EASL Clinical Practice Guidelines on hepatitis E virus infection'],
          empirical: {
            outpatient: [
              { drug: 'Szupportív kezelés', dose: '-', duration: '-', note: 'Immunkompetens akut fertőzésben önkorlátozó, specifikus antivirális szer általában nem szükséges' }
            ],
            inpatient: [
              { drug: 'Ribavirin (off-label)', dose: '600–1000 mg/nap PO', duration: '21–30 nap', note: 'Súlyos akut HEV vagy Akut-on-krónikus májelégtelenség (ACLF) megelőzésére' }
            ],
            icu: [
              { drug: 'Ribavirin monoterápia', dose: '600–1000 mg/nap (eGFR adaptált)', duration: '12 hét (3 hónap)', note: 'Krónikus HEV fertőzés elsővonalbeli kezelése immunszupprimáltakban (EASL CPG)' }
            ]
          },
          targeted: 'EASL Krónikus HEV Algoritmus: 1. Immunszuppresszió csökkentése (ha lehet, ~30% tisztulás). 2. Ribavirin monoterápia (600–1000 mg/nap) 12 hétig. 3. Ha a 12. héten HEV RNS+, Ribavirin folytatása összesen 24 hétig (6 hónap). 4. Peg-Interferon-alfa kizárólag májtranszplantáltakban mérlegelhető (vese/szív transzplantációban kontraindikált!).',
          supportive: ['Folyadék- és elektrolit-háztartás rendezése', 'Terhesek és cirrhoticus betegek szoros obszervációja', 'Neurológiai szövődmények specifikus ellátása'],
          prevention: ['Sertéshús, máj és vadhús alapos hőkezelése (>70°C)', 'Vérkészítmények HEV RNS szűrése magas kockázatú populációnak', 'HEV 239 vakcina (Hecolin) jelenleg csak Kínában engedélyezett']
        },
        guidelines: {
          diagnosis: [
            'Immunszuppresszióban a szerológia megbízhatatlan (álnegatív); HEV RNS (RT-PCR) vizsgálat kötelező.',
            'Minden feltételezett gyógyszer-indukált májkárosodás (DILI) esetén kötelező az HEV szűrés (Anti-HEV IgM és HEV RNS).'
          ],
          treatment_indications: [
            'Krónikus HEV definíció (EASL): Szervtranszplantált vagy immunszupprimált betegekben a HEV RNS perzisztenciája >3 hónapig.',
            'Krónikus HEV kezelése: 1. Immunszuppresszió csökkentése. 2. Ribavirin monoterápia 12 hétig (szükség esetén 24 hétre kiterjesztve).',
            'Súlyos akut HEV / ACLF: Ribavirin (600–1000 mg/nap) 21–30 napos adása megfontolandó a májelégtelenség kivédésére.'
          ]
        },
        prognosis: {
          mortality: 'Általában alacsony (<1%); terheseknél (G1/G2) akár 20–25%, krónikus HEV esetén cirrhosis progresszió',
          prognostic_scores: ['Nincs'],
          factors: 'Terhesség (G1/G2), immunszuppresszió mértéke, meglévő krónikus májbetegség/cirrhosis'
        },
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis E Virus Infection (Journal of Hepatology).',
          'WHO. Hepatitis E fact sheet.'
        ],
        gallery: [
          {
            url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>1 hó</text><text x='350' y='370' class='txt'>3 hó</text><text x='500' y='370' class='txt'>6 hó</text><text x='650' y='370' class='txt'>1 év</text><text x='350' y='390' class='txt' text-anchor='middle'>Idő a fertőzés után</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q150,50 250,50 Q350,50 450,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='40' class='txt' fill='purple'>Anti-HEV IgM</text><path d='M150,350 Q250,100 350,100 L750,100' fill='none' stroke='green' stroke-width='3' /><text x='600' y='90' class='txt' fill='green'>Anti-HEV IgG</text><path d='M50,350 Q100,200 150,200 Q200,200 220,350' fill='none' stroke='red' stroke-width='3' stroke-dasharray='5,5' /><text x='80' y='190' class='txt' fill='red'>HEV RNS (széklet)</text><path d='M100,350 Q180,150 220,150 Q260,150 300,350' fill='none' stroke='orange' stroke-width='2' /><text x='180' y='140' class='txt' fill='orange'>ALT</text></svg>",
            caption: 'Hepatitis E szerológiai lefolyása',
            type: 'Diagram'
          }
        ]
      },
      {
        id: 'hgv',
        name: 'Hepatitis G vírus / Human Pegivirus 1 (HPgV-1 / GBV-C)',
        pathogen: { type: 'Vírus', name: '<i>Human Pegivirus 1</i> (HPgV-1, korábban GBV-C / HGV)', gram: 'ssRNS (+), Flaviviridae (Pegivirus nemzetség)', shape: 'gömb alakú, burokkal rendelkező' },
        epidemiology: {
          incidence: 'Világszerte elterjedt; az egészséges véradók 1–5%-a perzisztensen viraemiás. A népesség 20–50%-a rendelkezik korábbi fertőzésre utaló Anti-E2 antitesttel.',
          risk_groups: ['Intravénás droghasználók', 'Hemodializált betegek', 'Többszörös vérkészítmény-recepiensek', 'HIV- és HCV-fertőzöttek', 'Fokozott szexuális kockázatú személyek'],
          seasonality: 'Nincs',
          transmission: 'Parenterális (vér, tűszúrás, vérkészítmények), szexuális úton, vertikális (anya-gyermek)'
        },
        pathomechanism: {
          steps: [
            'Lymphotrop vírus: T- és B-lymphocytákban, valamint perifériás mononukleáris sejtekben (PBMC) replikálódik. NEM hepatotrop vírus!',
            'A májsejteket (hepatocytákat) nem károsítja, nem okoz citopatikus hatást vagy szövettani gyulladást a májban.',
            'HIV-1 koinfekcióban kedvező immunmoduláló hatást fejt ki: csökkenti a HIV koreceptorok (CD4, CXCR4, CCR5) expresszióját és növeli a gátló chemokinek (SDF-1, RANTES, MIP-1α/β) szintjét.',
            'Mérsékli a T-sejtek túlzott immunaktivációját és az apoptózist, ezáltal lassítja a CD4+ sejtszám csökkenését és a HIV/AIDS progresszióját.'
          ],
          virulence_factors: ['E2 burokglikoproteid (sejtbejutás, immunmoduláció)', 'NS5A nem-strukturális fehérje']
        },
        clinical: {
          incubation: '14–60 nap (ha mérik), klinikailag irreleváns',
          onset: 'Tünetmentes',
          symptoms: [
            { name: 'Asymptomatikus hordozás', description: 'Önállóan sem akut, sem krónikus hepatitist, sem májcirrhosist vagy májelégtelenséget NEM okoz. A "Hepatitis G" elnevezés történelmi tévedés.', severity: 'mild' }
          ],
          physical_exam: ['Fizikális lelet teljesen negatív (nincs sárgaság, nincs hepatomegalia)'],
          complications: ['Májkomplikációja NINCS.', 'HIV-1 koinfekció esetén perzisztáló viraemiája lassítja az AIDS progresszióját és javítja a túlélést (protektív hatás).']
        },
        diagnostics: {
          laboratory: [{ test: 'Májenzimek (ALT, AST), Bilirubin, ALP, GGT', finding: 'Teljesen normális tartományban', interpretation: 'Nincs hepatozelluláris károsodás' }],
          imaging: [{ modality: 'Abdominális ultrahang', finding: 'Normális máj- és epeút-struktúra', significance: 'Kizárja az egyéb patológiákat' }],
          microbiology: [
            { test: 'HPgV-1 RT-PCR', finding: 'RNS kimutatása', significance: 'Kutatási/speciális célból; aktív viraemiát igazol' },
            { test: 'Anti-E2 antitest', finding: 'Positivitás', significance: 'A viraemia tisztázódását és korábbi fertőzést jelez' }
          ]
        },
        differential: [
          { disease: 'Valódi hepatotrop vírushepatitisek (HBV, HCV, HAV, HEV, HDV)', distinguishing: 'Szerológia és PCR vizsgálatok (HBsAg, Anti-HCV, HCV-RNA stb.)' },
          { disease: 'Nem fertőző májbetegségek (DILI, NAFLD/NASH, Autoimmun hepatitis)', distinguishing: 'Kizárásos diagnózis, autoantitestek, toxikológia' }
        ],
        therapy: {
          empirical: {},
          targeted: 'Specifikus antivirális kezelést NEM igényel. A fertőzésnek sincs hepatológiai indikációja a kezelésre.',
          supportive: ['Nem szükséges klinikai beavatkozás.'],
          prevention: ['Vérkészítmények rutinszerű HPgV-1 szűrése nem indokolt. Standard infekciókontroll.']
        },
        prognosis: {
          mortality: 'Májbetegség szempontjából nem patogén (nulla mortalitás).',
          prognostic_scores: [],
          factors: 'HIV koinfekció esetén kedvező prognosztikai tényező a HPgV-1 perzisztencia.'
        },
        references: [
          'Stapleton JT, et al. HPgV-1 (GBV-C) infection and pathogenesis. Nat Rev Microbiol.',
          'EASL & CDC Clinical Guidelines on Viral Hepatitis misnomers and Anelloviridae/Pegivirus.'
        ]
      },
      {
        id: 'ttv',
        name: 'Torque teno vírus (TTV)',
        pathogen: { type: 'Vírus', name: '<i>Torque teno virus</i> (TTV)', gram: 'ssDNS (-/+), Anelloviridae (Alphatorquevirus nemzetség)', shape: 'kicsi (28-32 nm), burok nélküli, ikozaéderes' },
        epidemiology: {
          incidence: 'Ubikviter: a népesség >70–90%-ában jelen van perzisztens viraemia formájában. Az emberi kommensális virom alapvető tagja.',
          risk_groups: ['Általános populáció', 'Szervtranszplantáltak (máj, vese, szív, tüdő)', 'Immunszupprimált betegek'],
          seasonality: 'Nincs',
          transmission: 'Cseppfertőzés, fékál-orális, parenterális (vér), szexuális, vertikális és anyatej útján'
        },
        pathomechanism: {
          steps: [
            'Szisztémás replikáció: Csontvelőben, PBMC sejtekben, T- és B-lymphocytákban, májban és tüdőszövetben egyaránt jelen van.',
            'NEM citopatikus: Nem okoz májsejt-nekrózist, szövettani gyulladást vagy májfunkciós zavart.',
            'Immunrendszeri egyensúly: A TTV DNS plazmakopiaszáma inverz módon arányos a gazdaszervezet sejtes immunitásának mértékével (T-sejt funkció).',
            'Biomarker szervtranszplantációban: Magas TTV-szint túlzott immunszuppresszióra és opportunista fertőzésekre (CMV, BK-vírus, gombák) hajlamosít; alacsony TTV-szint elégtelen immunszuppressziót és graft-kilökődési (rejection) kockázatot jelez.'
          ],
          virulence_factors: ['ORF1 kapszidfehérje (széles genetikai variabilitás, immunevasion)']
        },
        clinical: {
          incubation: 'Klinikailag nem értelmezhető (élethosszig tartó kommenzális perzisztencia)',
          onset: 'Tünetmentes',
          symptoms: [
            { name: 'Kommenzális állapot', description: 'Nem okoz akut vagy krónikus hepatitist, sem szisztémás megbetegedést.', severity: 'mild' }
          ],
          physical_exam: ['Fizikális vizsgálat teljesen negatív.'],
          complications: ['Nem patogén a májra. Újabb klinikai evidenciák alapján a TTV plazma-DNS szintje megbízható biomarkerként szolgál a szervtranszplantált betegek immunszuppresszív terhelésének személyre szabott beállításához.']
        },
        diagnostics: {
          laboratory: [{ test: 'Májfunkciós panel (ALT, AST, Bilirubin)', finding: 'Normális', interpretation: 'Nincs májkárosodás' }],
          imaging: [{ modality: 'Ultrahang', finding: 'Normális', significance: 'Nincs elváltozás' }],
          microbiology: [
            { test: 'Kvantitatív Real-Time PCR (TTV DNS kopiaszám)', finding: 'DNS kimutatása (kopia/mL)', significance: 'Klinikai szurokmarker transzplantációs immunszuppresszió monitorozására' }
          ]
        },
        differential: [
          { disease: 'Klinikai hepatitisz szindrómák (HAV-HEV, EBV, CMV)', distinguishing: 'Szerológia, kiterjedt PCR panel' }
        ],
        therapy: {
          empirical: {},
          targeted: 'Antivirális kezelést NEM igényel.',
          supportive: ['Szervtranszplantáltaknál a TTV DNS szintje alapján az immunszuppresszív dózisok finomhangolása (kutatási/klinikai protokollok szerint).'],
          prevention: ['Universal jelenlét miatt megelőzése nem lehetséges és nem is szükséges.']
        },
        prognosis: {
          mortality: 'Fiziológiás virome elem (nulla mortalitás).',
          prognostic_scores: [],
          factors: 'TTV DNS kopiaszám transzplantáltaknál korrelál az opportunista fertőzések és a kilökődés kockázatával.'
        }
      },
      {
        id: 'senv',
        name: 'SEN vírus (SENV-D / SENV-H)',
        pathogen: { type: 'Vírus', name: '<i>SEN virus</i> (SENV-D és SENV-H genotípusok)', gram: 'ssDNS (-/+), Anelloviridae család', shape: 'kicsi, burok nélküli körkörös DNS-vírus' },
        epidemiology: {
          incidence: 'Egészséges véradók 10–20%-ában, transzfundált betegek, hemodializáltak és IV droghasználók 40–60%-ában van jelen.',
          risk_groups: ['Transzfúzióban részesültek', 'Hemodializáltak', 'IV droghasználók', 'Általános populáció'],
          seasonality: 'Nincs',
          transmission: 'Parenterális (transzfúzió, vér, tűszúrás), nem-parenterális (fékál-orális, vertikális)'
        },
        pathomechanism: {
          steps: [
            'Vér útján terjed és perzisztens viraemiát hoz létre.',
            'Májsejtekben és perifériás sejtekben is kimutatható a DNS-e, de NEM okoz citopatológiát vagy nekroinflammációt.',
            'Rigorózus prospektív és retrospektív klinikai vizsgálatok igazolták, hogy a SENV jelenléte NEM növeli a posttranszfúziós hepatitis, a kriptogén hepatitis, a májcirrhosis vagy az alacsony májfunkció kockázatát.',
            'Az emberi kommensális anellovirom opportunista eleme.'
          ],
          virulence_factors: ['Nincs igazolt virulenciafaktor.']
        },
        clinical: {
          incubation: 'Nem értelmezhető',
          onset: 'Tünetmentes',
          symptoms: [
            { name: 'Tünetmentes hordozás', description: 'Nem okoz sem akut, sem krónikus májbetegséget. Korábban transzfúzió utáni hepatitishez társították, de az ok-okozati összefüggést a tudományos kutatások cáfolták.', severity: 'mild' }
          ],
          physical_exam: ['Fizikális vizsgálattal kóros eltérés nem található.'],
          complications: ['Nincs igazolt máj- vagy szisztémás szövődménye.']
        },
        diagnostics: {
          laboratory: [{ test: 'ALT / AST', finding: 'Normális tartományban', interpretation: 'Nincs szignifikáns hepatocytolysis' }],
          imaging: [{ modality: 'Ultrahang', finding: 'Normális', significance: '-' }],
          microbiology: [
            { test: 'SENV-D / SENV-H PCR', finding: 'DNS kimutatása', significance: 'Kutatólaboratóriumi vizsgálat; rutinszerűen nem javallott' }
          ]
        },
        differential: [
          { disease: 'Posttranszfúziós hepatitis (HCV, HBV, CMV, EBV)', distinguishing: 'Szerológia és specifikus PCR tesztek' }
        ],
        therapy: {
          empirical: {},
          targeted: 'Kezelést nem igényel.',
          supportive: [],
          prevention: ['Vérkészítmények SENV-szűrése nem indokolt és nem javasolt.']
        },
        prognosis: {
          mortality: 'Kiváló (nem patogén virus).',
          prognostic_scores: [],
          factors: '-'
        }
      }
    ]
  },
  urinary_tract: {
    name: 'Húgyúti fertőzések',
    icon: window.diseaseMetadata.urinary_tract.icon,
    color: window.diseaseMetadata.urinary_tract.color,
    diseases: [
      {
        id: 'cystitis',
        name: 'Szisztémás tünetekkel nem járó cystitis, korábbi nevén nem komplikált cystitis (Hólyaghurut)',
        pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negatív', shape: 'pálca' },
        epidemiology: {
          incidence: 'Nők 50%-a élete során legalább egyszer',
          risk_groups: ['Szexuálisan aktív nők', 'Postmenopauza', 'Terhesség', 'Diabetes', 'Katéter viselés'],
          seasonality: 'Nincs',
          transmission: 'Felszálló fertőzés (perinealis flóra)'
        },
        pathomechanism: {
          steps: [
            'Kolonizáció: A bélbaktériumok (főleg E. coli) kolonizálják a periurethralis területet és a hüvelybemenetet.',
            'Feljutás: A baktériumok az urethrán keresztül feljutnak a húgyhólyagba (nőknél rövidebb urethra hajlamosít).',
            'Adhézió és Invázió: A baktériumok a P-fimbriák segítségével kitapadnak a hólyag urotheliumához, elkerülve a vizelettel való kimosódást, majd behatolnak a sejtekbe.',
            'Gyulladás: A baktériumok szaporodása és toxinjai (pl. hemolizin) gyulladásos választ váltanak ki, ami a nyálkahártya vérbőségét, ödémáját és a tüneteket okozza.'
          ],
          virulence_factors: ['P-fimbriae (adherencia)', 'Hemolizin', 'Aerobactin (vasfelvétel)']
        },
        clinical: {
          incubation: 'Változó',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Dysuria', description: 'Vizeléskor jelentkező égető, csípő érzés, amely a gyulladt urethra és hólyagnyak irritációja miatt alakul ki.', severity: 'moderate' },
            { name: 'Pollakisuria', description: 'Gyakori, kis mennyiségű vizeletürítés a hólyagfal irritációja és csökkent kapacitása miatt.', severity: 'moderate' },
            { name: 'Urgencia', description: 'Hirtelen jelentkező, parancsoló vizelési inger, amelyet nehéz visszatartani (késztetéses inkontinencia veszélye).', severity: 'moderate' },
            { name: 'Suprapubicus fájdalom', description: 'Az alhasban, a szeméremcsont felett érzett nyomás vagy fájdalom.', severity: 'mild' },
            { name: 'Haematuria', description: 'Makroszkóposan véres vizelet (kb. 30%-ban), gyakran a vizelés végén (terminális haematuria), a vérbő nyálkahártya vérzése miatt.', severity: 'mild' }
          ],
          physical_exam: [
            'Suprapubicus nyomásérzékenység',
            'Láz általában NINCS (ha van, pyelonephritis gyanú!)',
            'Vesetájék nem érzékeny',
            'Hüvelyi folyás hiánya növeli a cystitis valószínűségét',
            'A tünetek jellemzően az alsó húgyutakra korlátozódnak, nincs általános rossz közérzet'
          ],
          complications: ['Ascendáló pyelonephritis', 'Recidív cystitis']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vizelet tesztcsík', finding: 'Leukocyta esterase+, Nitrit+', interpretation: 'Pozitív prediktív érték magas' },
            { test: 'Vizelet üledék', finding: 'Pyuria (>10 fvs/látótér)', interpretation: 'Gyakori, de nem specifikus' }
          ],
          imaging: [
            { modality: 'Nincs', finding: 'Nem szükséges', significance: 'Kivéve atípusos tünetek vagy perzisztencia' }
          ],
          microbiology: [
            { test: 'Vizelet tenyésztés', finding: '≥10^3 CFU/ml', significance: 'Csak komplikált, recidív vagy atípusos esetben javasolt (EAU 2025)' }
          ]
        },
        differential: [
          { disease: 'Vaginitis', distinguishing: 'Folyás, viszketés, dysuria külső jellegű' },
          { disease: 'Urethritis (STD)', distinguishing: 'Új partner, fokozatos kezdet, pyuria steril tenyésztéssel' },
          { disease: 'Interstitialis cystitis', distinguishing: 'Krónikus, tenyésztés negatív' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Egyszeri dózis', note: 'Első választás (EAU 2025)' },
              { drug: 'Nitrofurantoin', dose: '2x100mg PO', duration: '5 nap', note: 'Első választás (EAU 2025)' },
              { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 nap', note: 'Első választás (EAU 2025)' }
            ],
            inpatient: [
              { drug: 'Nem igényel kórházi kezelést', dose: '-', duration: '-', note: 'Kivéve komplikáció' }
            ],
            icu: [
              { drug: '-', dose: '-', duration: '-', note: '-' }
            ]
          },
          targeted: 'Tenyésztés alapján. Fluorokinolonok (Ciprofloxacin, Levofloxacin) NEM ajánlottak empirikusan nem komplikált cystitisben!',
          supportive: ['Bőséges folyadékfogyasztás', 'Gyakori vizeletürítés', 'NSAID fájdalomcsillapítás'],
          prevention: ['Viselkedési: Bőséges folyadékbevitel, postcoitalis vizeletürítés', 'Nem-antibiotikus (EAU 2025): Lokális ösztrogén (postmenopauza), OM-89 immunstimuláció, D-mannóz, Hólyag instilláció', 'Antibiotikum profilaxis (utolsó lépés): Nitrofurantoin 50-100mg este vagy Fosfomycin 3g 10 naponta']
        },
        prognosis: {
          mortality: 'Nulla',
          prognostic_scores: ['Nincs'],
          factors: 'Recidíva hajlam'
        }
      },
      {
        id: 'pyelonephritis',
        name: 'Szisztémás tünetekkel nem járó (nem komplikált) pyelonephritis',
        pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negatív', shape: 'pálca' },
        epidemiology: {
          incidence: 'Gyakori szövődménye a kezeletlen cystitisnek',
          risk_groups: ['Nők', 'Terhesség', 'Obstrukció (kő, prostata)', 'Vesefejlődési rendellenesség', 'Diabetes'],
          seasonality: 'Nincs',
          transmission: 'Felszálló fertőzés (95%), ritkán hematogén'
        },
        pathomechanism: {
          steps: [
            'Ascendáló fertőzés: A baktériumok a hólyagból az ureteren keresztül (gyakran vesico-ureteralis reflux segítségével) feljutnak a vesemedencébe.',
            'Parenchyma invázió: A kórokozók behatolnak a vese parenchymájába, elsősorban a velőállományba.',
            'Gyulladásos válasz: A baktériumok ellen heves akut gyulladásos reakció indul (neutrophil infiltráció), ami szöveti ödémát, mikrotályogokat és tubulus károsodást okoz.',
            'Szisztémás hatás: A gyulladásos mediátorok a keringésbe jutva lázat és szisztémás tüneteket váltanak ki.'
          ],
          virulence_factors: ['P-fimbriae', 'Endotoxin', 'Kapszula']
        },
        clinical: {
          incubation: 'Cystitis után napokkal',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Láz és hidegrázás', description: 'Magas láz (>38°C) és hidegrázás a felső húgyúti gyulladás jellemző jelei; a vese parenchyma érintettségét és a szisztémás gyulladást jelzik.', severity: 'severe' },
            { name: 'Deréktáji fájdalom', description: 'Tompa, folyamatos, egy- vagy kétoldali fájdalom a vesetájékon, a vese tokjának megfeszülése miatt; pontszerű érzékenység a costovertebralis szögletben.', severity: 'severe' },
            { name: 'Gastrointestinális tünetek', description: 'Hányinger, hányás, étvágytalanság gyakori kísérője, mivel a vese gyulladása reflexes hasi panaszokat is okozhat.', severity: 'moderate' },
            { name: 'Alsó húgyúti tünetek', description: 'Dysuria és pollakisuria gyakran jelen vannak, de a felső húgyúti fertőzés nem zárható ki a húgyúti tünetek hiánya esetén sem.', severity: 'moderate' },
            { name: 'Atypia', description: 'Idősekben, immunszupprimáltaknál vagy cukorbetegeknél a klasszikus tünetek enyhébbek lehetnek; helyettük zavartság, gyengeség vagy általános rossz közérzet dominálhat.', severity: 'moderate' }
          ],
          physical_exam: [
            'Costovertebralis szöglet érzékenysége (Giordano-jel)',
            'Láz és tachycardia',
            'Szubrapubikus nyomásérzékenység csak alkalomszerűen',
            'Hasi érzékenység jelen lehet, de a vizsgálat gyakran enyhe',
            'Gyenge, idős betegekben a szisztémás tünetek lehetnek az elsődleges jelek'
          ],
          complications: ['Vese tályog', 'Perinephricus tályog', 'Urosepsis', 'Papilla necrosis', 'Krónikus veseelégtelenség (recidív)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Szisztémás gyulladás' },
            { test: 'CRP/PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális infekció' },
            { test: 'Vizelet', finding: 'Leukocyturia, bakteriuria, fehérvérsejt cilinderek', interpretation: 'Felső húgyúti eredet' },
            { test: 'Vesefunkció', finding: 'Kreatinin emelkedhet', interpretation: 'Akut vesekárosodás' }
          ],
          imaging: [
            { modality: 'CT has/kismedence', finding: 'Vese megnagyobbodás, perinephricus folyadék, ék alakú hypodenzitás', significance: 'Gold standard a komplikációk kizárására (EAU 2025)' },
            { modality: 'Vese UH', finding: 'Obstrukció, tályog', significance: 'Sugárterhelés mentes alternatíva' }
          ],
          microbiology: [
            { test: 'Vizelet tenyésztés', finding: '≥10^4 CFU/ml', significance: 'Mindig levenni! (EAU 2025)' },
            { test: 'Hemokultúra', finding: 'Pozitív', significance: 'Kórházi felvételkor javasolt' }
          ]
        },
        differential: [
          { disease: 'Vesekő', distinguishing: 'Görcsös fájdalom, nincs láz (ha nincs fertőzés), hematuria dominál' },
          { disease: 'Akut hasi kórképek', distinguishing: 'Appendicitis, cholecystitis (hasi status, UH)' },
          { disease: 'Kismedencei gyulladás (PID)', distinguishing: 'Nőgyógyászati vizsgálat, folyás' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7 nap', note: 'nincs Enterococcus elleni hatása' },
              { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 nap', note: 'Csa alternatíva, ha E. coli rezisztencia <10% (EAU 2025)' },
              { drug: 'Ceftibuten/Cefixim', dose: 'PO', duration: '10 nap', note: 'Ha kinolon nem adható (kevésbé hatékony)' }
            ],
            inpatient: [
              { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Első választás' },
              { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '10-14 nap', note: 'Alternatíva, ha az E. coli rezisztencia <10% (EAU 2025)' },
              { drug: 'Gentamicin + Ampicillin', dose: 'IV', duration: '', note: 'Súlyos esetben' }
            ],
            icu: [
              { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: '', note: 'Urosepsis, obstrukció' },
              { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'ESBL gyanú' }
            ]
          },
          targeted: 'Antibiogram alapján. ESBL gyakori!',
          supportive: ['Folyadékpótlás', 'Lázcsillapítás', 'Obstrukció megoldása (katéter, stent)'],
          prevention: ['Cystitis megfelelő kezelése', 'Anatómiai rendellenességek korrekciója']
        },
        prognosis: {
          mortality: 'Alacsony (<1%), de urosepsis esetén 10-20%',
          prognostic_scores: ['qSOFA'],
          factors: 'Idős kor, obstrukció, rezisztens kórokozó'
        }
      },
      {
        id: 'complicated_uti',
        name: 'Szisztémás tünetekkel járó húgyúti fertőzés',
        pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Gyakori kórházi környezetben és urológiai betegeknél',
          risk_groups: ['Katéter viselők', 'Férfiak', 'Terhesek', 'Anatómiai/funkcionális rendellenesség', 'Veseelégtelenség', 'Immunszuppresszió'],
          seasonality: 'Nincs',
          transmission: 'Felszálló, katéter-asszociált, hematogén'
        },
        pathomechanism: {
          steps: [
            'Hajlamosító tényező: Anatómiai (pl. szűkület, kő) vagy funkcionális (pl. neurogén hólyag) rendellenesség, vagy idegentest (katéter) jelenléte gátolja a vizeletáramlást és a baktériumok kimosódását.',
            'Biofilm képzés: A baktériumok (pl. Proteus, Pseudomonas) biofilm réteget képeznek a katéteren vagy kövön, ami védi őket az antibiotikumoktól és az immunrendszertől.',
            'Perzisztencia: A fertőzés nehezen eradikálható, gyakori a rezisztens törzsek szelekciója és a visszatérő fertőzés.'
          ],
          virulence_factors: ['Biofilm', 'Multidrog rezisztencia', 'Ureáz (Proteus)']
        },
        clinical: {
          incubation: 'Változó',
          onset: 'Változó (lehet tünetszegény is)',
          symptoms: [
            { name: 'Alsó húgyúti tünetek', description: 'Dysuria, gyakori vizelés és sürgető inger előfordulhatnak, de elmaradhatnak is; a fertőzés lokalizációja változó.', severity: 'moderate' },
            { name: 'Felső húgyúti/jelentős lokális fájdalom', description: 'Suprapubicus vagy deréktáji fájdalom előfordulhat, különösen obstrukció vagy vesét érintő gyulladás esetén.', severity: 'moderate' },
            { name: 'Szisztémás gyulladás', description: 'Láz, hidegrázás és tachycardia a nagyobb kórokozó-terhelésre és a szervezet általános válaszára utalnak.', severity: 'severe' },
            { name: 'Sepsis jelek', description: 'Hypotonia, tachypnea, zavartság vagy oliguria súlyos urosepsisben fordulhat elő, ezért azonnali forráskontroll szükséges.', severity: 'severe' },
            { name: 'Oligosymptomatikus', description: 'Katéteres, neurogén hólyaggal vagy immunszupprimált betegeknél a klasszikus tünetek gyakran hiányoznak, de a labor- és vitális jeleket figyelni kell.', severity: 'mild' }
          ],
          physical_exam: [
            'Gyakran szegényes lelet, különösen katéteres betegeknél',
            'Suprapubicus vagy vesetáji nyomásérzékenység',
            'Katéter vagy más húgyúti eszköz jelenléte',
            'Láz vagy hypothermia',
            'Hypotonia, tachypnea vagy zavartság súlyos esetben'
          ],
          complications: ['Urosepsis', 'Vese tályog', 'Veseelégtelenség', 'Recidíva', 'Katéter elzáródás']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vizelet tenyésztés', finding: 'Nők: ≥10^5 CFU/ml, Férfiak: ≥10^4 CFU/ml', interpretation: 'Diagnosztikus küszöbértékek (EAU 2025)' },
            { test: 'Katéteres vizelet', finding: '≥10^4 CFU/ml', interpretation: 'Szignifikáns bakteriuria' },
            { test: 'Vesefunkció', finding: 'Kreatinin ellenőrzés', interpretation: 'Obstrukció/károsodás' }
          ],
          imaging: [
            { modality: 'CT urográfia', finding: 'Anatómiai/funkcionális rendellenesség', significance: 'KÖTELEZŐ a hajlamosító tényező tisztázására' }
          ],
          microbiology: [
            { test: 'Tenyésztés + Rezisztencia', finding: 'Esszenciális', significance: 'Célzott kezelés alapja' }
          ]
        },
        differential: [
          { disease: 'Nem komplikált UTI', distinguishing: 'Nincs rizikófaktor/anatómiai hiba' },
          { disease: 'Prostatitis', distinguishing: 'Rectalis vizsgálat' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7-14 nap', note: 'nincs Enterococcus elleni hatása' },
              { drug: 'Ciprofloxacin', dose: '2x500-750mg PO', duration: '7-14 nap', note: 'Csak ha nincs fluorokinolon kezelés az elmúlt 6 hónapban és az E. coli rezisztencia <10% (EAU 2025)' },
              { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-14 nap', note: 'Alternatíva, ha E. coli rezisztencia <10% (EAU 2025)' },
              { drug: 'Ceftibuten/Cefixim', dose: 'PO', duration: '10-14 nap', note: 'Ha kinolon nem adható' }
            ],
            inpatient: [
              { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Súlyos esetben' },
              { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 nap', note: 'Pseudomonas gyanú/korábbi AB kezelés' },
              { drug: 'Carbapenem (Meropenem)', dose: '3x1g IV', duration: '10-14 nap', note: 'ESBL rizikó vagy szeptikus shock' },
              { drug: 'Amikacin/Gentamicin', dose: 'IV', duration: 'Kiegészítésként', note: 'Szinergizmus' }
            ],
            icu: [
              { drug: 'Széles spektrum (Carbapenem + Amikacin)', dose: 'IV', duration: '', note: 'Urosepsis' }
            ]
          },
          targeted: 'Tenyésztés alapján korrekció. Obstrukció megoldása (katéter csere, stent, nefrosztóma) elengedhetetlen!',
          supportive: ['Folyadékpótlás', 'Lázcsillapítás'],
          prevention: ['Katéter care (zárt rendszer, mielőbbi eltávolítás)', 'Obstrukció megszüntetése', 'Aszimptomatikus bakteriuria kezelésének kerülése']
        },
        prognosis: {
          mortality: 'Urosepsis esetén 10-30%',
          prognostic_scores: ['qSOFA', 'SOFA'],
          factors: 'Alapbetegség, rezisztencia, forrás kontroll'
        }
      },
      {
        id: 'prostatitis',
        name: 'Bakteriális prostatitis',
        pathogen: { type: 'Baktérium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Férfiak 50%-a tapasztal tüneteket élete során',
          risk_groups: ['Fiatal/középkorú férfiak', 'Katéterezés', 'Húgyúti beavatkozás (biopszia)', 'HIV', 'Diabetes'],
          seasonality: 'Nincs',
          transmission: 'Felszálló (reflux), hematogén, lymphogen, direkt (biopszia)'
        },
        pathomechanism: {
          steps: [
            'Fertőzés útja: Leggyakrabban a fertőzött vizelet intraprostaticus refluxa révén jutnak be a baktériumok a prosztata mirigyeibe.',
            'Gyulladás: Akut esetben a mirigyekben ödéma és mikroabscessusok alakulnak ki, ami a prosztata duzzanatát és feszülését okozza.',
            'Krónikussá válás: A baktériumok biofilmet képezhetnek a prosztataköveken vagy a mirigycsatornákban, ami fenntartja a visszatérő fertőzéseket.'
          ],
          virulence_factors: ['Biofilm', 'Anatómiai elhelyezkedés (rossz AB penetráció)']
        },
        clinical: {
          incubation: 'Változó',
          onset: 'Akut (ABP) vagy Krónikus (CBP)',
          symptoms: [
            { name: 'Akut: Szisztémás tünetek', description: 'Hirtelen kezdődő magas láz, hidegrázás, izomfájdalom, rossz közérzet (influenzaszerű kezdet).', severity: 'severe' },
            { name: 'Fájdalom', description: 'Jellegzetes gáttájéki (perinealis), végbél körüli, alhasi fájdalom, amely sugározhat a herékbe és a péniszbe.', severity: 'moderate' },
            { name: 'LUTS (Alsó húgyúti tünetek)', description: 'Kifejezett dysuria, pollakisuria, sürgető vizelési inger.', severity: 'moderate' },
            { name: 'Obstrukció', description: 'A duzzadt prosztata összenyomja a húgycsövet, ami nehezített vizelést, vékony sugarat vagy teljes vizeletretenciót okozhat.', severity: 'severe' },
            { name: 'Húgyúti retenció', description: 'Az elzáródás súlyos szakaszában a hólyag megtelhet, ami akut vizeletvisszatartáshoz és suprapubicus diszkomforthoz vezethet.', severity: 'severe' },
            { name: 'Krónikus tünetek', description: 'Enyhébb, visszatérő panaszok: kismedencei diszkomfort, visszatérő húgyúti fertőzések, fájdalmas ejakuláció.', severity: 'mild' }
          ],
          physical_exam: [
            'Rectalis digitális vizsgálat (RDV):',
            'Akut: Duzzadt, meleg, EXTRÉM érzékeny prosztata (Masszázs TILOS - bacteremia veszély!)',
            'Krónikus: Lehet normál vagy enyhén érzékeny, nem duzzadt',
            'Teltség a húgyhólyagban visszatartás esetén'
          ],
          complications: ['Prosztata tályog', 'Urosepsis', 'Krónikussá válás', 'Epididymitis', 'Vizeletretenció', 'Szexuális diszfunkció']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vizelet', finding: 'Pyuria, bakteriuria', interpretation: 'Pozitív' },
            { test: 'Vérkép/CRP', finding: 'Emelkedett (Akut)', interpretation: 'Szisztémás gyulladás' },
            { test: 'PSA', finding: 'Emelkedett', interpretation: 'Gyulladás miatt (akut fázisban nem rák diagnosztika!)' }
          ],
          imaging: [
            { modality: 'Transrectalis UH (TRUS)', finding: 'Tályog (hipoechogén terület)', significance: 'Csak ha nem javul a kezelésre vagy tályog gyanú' }
          ],
          microbiology: [
            { test: 'Akut: Vizelet tenyésztés', finding: 'Középsugár vizelet', significance: 'Prosztata masszázs TILOS!' },
            { test: 'Krónikus: Meares-Stamey teszt', finding: '4 pohár próba vagy 2 pohár próba (masszázs előtt/után)', significance: 'Gold standard (EAU 2025)' }
          ]
        },
        differential: [
          { disease: 'Cystitis', distinguishing: 'Nincs láz, nincs prosztata érzékenység' },
          { disease: 'BPH', distinguishing: 'Nincs infekciós jel, lassú progresszió' },
          { disease: 'Krónikus kismedencei fájdalom szindróma (CPPS)', distinguishing: 'Negatív tenyésztés, krónikus fájdalom' },
          { disease: 'Prosztatarák', distinguishing: 'PSA, RDV (göbös), biopszia' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Levofloxacin', dose: '1x500-750mg PO', duration: '2-4 hét (Akut), 4-6 hét (Krónikus)', note: 'EAU 2025: Első választás (jó penetráció)' },
              { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '2-4 hét (Akut), 4-6 hét (Krónikus)', note: 'EAU 2025: Első választás' },
              { drug: 'Cotrimoxazol', dose: '2x960mg PO', duration: '4-6 hét', note: 'Alternatíva' }
            ],
            inpatient: [
              { drug: 'Ceftriaxon', dose: '1-2g IV', duration: '14 nap', note: 'Súlyos akut esetben (majd PO váltás)' },
              { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '', note: 'Urosepsis/Pseudomonas gyanú' },
              { drug: 'Gentamicin', dose: '5-7mg/kg IV', duration: '', note: 'Kiegészítésként (szinergizmus)' }
            ],
            icu: [
              { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Szeptikus shock/ESBL' }
            ]
          },
          targeted: 'Fluorokinolonok (első választás krónikusban). Makrolidok (Chlamydia gyanú). Fosfomycin (MDR - vitatott penetráció).',
          supportive: ['NSAID fájdalomcsillapítás', 'Alfa-blokkoló (Tamsulosin) a tünetek enyhítésére', 'Suprapubicus katéter (retenció esetén, urethralis kerülendő akut gyulladásban!)'],
          prevention: ['Húgyúti fertőzések korai kezelése', 'Prosztata biopszia profilaxis: Célzottan (rectalis törlet alapján) vagy Fosfomycin/Ceftriaxon (Fluorokinolon kerülendő!)']
        },
        prognosis: {
          mortality: 'Akut: alacsony (de sepsis veszély); Krónikus: életminőséget rontja, nehezen gyógyul (recidíva gyakori)',
          prognostic_scores: ['Nincs'],
          factors: 'Biofilm, rezisztencia, anatómia, CPPS átmenet'
        }
      },
      {
        id: 'asymptomatic_bacteriuria',
        name: 'Aszimptomatikus bakteriuria',
        pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus, GBS</i>, stb.', gram: 'Változó', shape: 'Változó' },
        epidemiology: {
          incidence: 'Gyakori (nők 3-5%, idősek 10-50%, katéteresek 100%)',
          risk_groups: ['Idősek', 'Diabetes', 'Katéter viselés', 'Terhesség'],
          seasonality: 'Nincs',
          transmission: 'Endogén kolonizáció'
        },
        pathomechanism: {
          steps: [
            'Kolonizáció: A baktériumok megtelepednek a húgyutakban, de hiányoznak belőlük azok a virulenciafaktorok (pl. specifikus fimbriák), amelyek szöveti inváziót vagy gyulladást váltanának ki.',
            'Kommensalizmus: A baktériumok és a gazdaszervezet között egyfajta egyensúlyi állapot alakul ki, tünetek nélkül.',
            'Védő hatás: A kolonizáló törzsek versenghetnek a virulensebb kórokozókkal, így akár védő hatásuk is lehet.'
          ],
          virulence_factors: ['Csökkent virulencia']
        },
        clinical: {
          incubation: '-',
          onset: 'Tünetmentes',
          symptoms: [
            { name: 'Tünetmentes', description: 'A betegnek nincsenek húgyúti panaszai (nincs dysuria, nincs láz, nincs fájdalom). A bakteriuria véletlenszerű lelet.', severity: 'mild' }
          ],
          physical_exam: [
            'Negatív',
            'Zavaros/bűzös vizelet önmagában nem diagnosztikus és nem igényel kezelést!',
            'Nincs suprapubicus vagy vesetáji nyomásérzékenység'
          ],
          complications: ['Felesleges antibiotikum kezelés -> rezisztencia', 'Pyelonephritis (csak terhességben/beavatkozásnál rizikó)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vizelet tenyésztés', finding: '≥10^5 CFU/ml (ugyanaz a törzs)', interpretation: 'Nők: 2 konzekutív minta, Férfiak: 1 minta (EAU 2025)' },
            { test: 'Katéteres minta', finding: '≥10^5 CFU/ml', interpretation: 'Egy minta elegendő' },
            { test: 'Vizelet üledék', finding: 'Pyuria gyakran jelen van', interpretation: 'NEM indikál kezelést tünetek nélkül!' }
          ],
          imaging: [
            { modality: 'Nincs', finding: '-', significance: '-' }
          ],
          microbiology: [
            { test: 'Tenyésztés', finding: 'Pozitív', significance: 'Csak szűrési indikáció esetén (pl. terhesség, urológiai beavatkozás)' }
          ]
        },
        differential: [
          { disease: 'Cystitis', distinguishing: 'Tünetek jelenléte (dysuria, urgencia)' },
          { disease: 'Kontamináció', distinguishing: 'Alacsony csíraszám, vegyes flóra' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'NINCS kezelés', dose: '-', duration: '-', note: 'Főszabály (idősek, cukorbetegek, katéteresek esetén sem!)' }
            ],
            inpatient: [
              { drug: 'NINCS kezelés', dose: '-', duration: '-', note: 'Kivéve indikációk' }
            ]
          },
          targeted: 'Csak indikáció esetén (Terhesség, Urológiai beavatkozás nyálkahártya sérüléssel). Terhességben: Fosfomycin, Nitrofurantoin, Cephalosporin.',
          supportive: ['Felvilágosítás (vizelet szaga/színe nem indokol AB-t)'],
          prevention: ['Felesleges szűrés és kezelés kerülése', 'Katéter care']
        },
        prognosis: {
          mortality: 'Nem növeli a mortalitást kezeletlenül sem',
          prognostic_scores: ['Nincs'],
          factors: '-'
        }
      }
    ]
  },
  intraabdominal: {
    name: 'Intraabdominalis infekciók',
    icon: window.diseaseMetadata?.intraabdominal?.icon || '🩺',
    color: window.diseaseMetadata?.intraabdominal?.color || '#16a34a',
    tables: [],
    diseases: [
      {
        id: 'primary_bacterial_peritonitis',
        name: 'Primer / Spontán bakteriális peritonitis (SBP)',
        pathogen: { type: 'Baktérium', name: '<i>E. coli (leggyakoribb), Klebsiella pneumoniae, Streptococcus pneumoniae, Enterococcus spp.</i> (tipikusan monobakteriális)', gram: 'Változó', shape: 'Változó' },
        epidemiology: {
          incidence: 'Gyakori dekompenzált cirrhosis hepatis és ascites esetén (10-30% kórházi felvételkor)',
          risk_groups: ['Cirrhosis hepatis ascites-szel (alacsony ascitikus fehérje < 15 g/L)', 'Gyomor-bélrendszeri vérzés cirrhosisban', 'Korábbi SBP epizód', 'Nephrosis szindróma'],
          seasonality: 'Nincs',
          transmission: 'Endogén bélflóra transzlokációja'
        },
        pathomechanism: {
          steps: [
            'Bakteriális transzlokáció: a bélflóra baktériumai átjutnak a bélfalon a mesenterialis nyirokcsomókba.',
            'Portalis hypertonia és immunológiai károsodás miatt átmeneti bacteraemia jön létre.',
            'A csökkent opsonisatiós kapacitású ascites folyadékban a baktériumok elszaporodnak (monobakteriális fertőzés).'
          ]
        },
        clinical: {
          incubation: 'Akut',
          onset: 'Fokozatos vagy hirtelen',
          symptoms: [
            { name: 'Hasi fájdalom', description: 'Diffúz, tompa vagy enyhe-közepes hasi fájdalom, érzékenység (ritkán heves peritonealitás).', severity: 'moderate' },
            { name: 'Láz', description: 'Hőemelkedés vagy láz, hidegrázás.', severity: 'moderate' },
            { name: 'Encephalopathia', description: 'Hepaticus encephalopathia hirtelen megjelenése vagy súlyosbodása.', severity: 'severe' },
            { name: 'Tünetszegény lefolyás', description: 'Az esetek 10-20%-ában alig van hasi panasz, csak a máj- vagy vesefunkció romlása jelzi.', severity: 'mild' }
          ],
          physical_exam: ['Diffúz hasi érzékenység', 'Ascites jelei', 'Hepaticus encephalopathia (flapping tremor, zavartság)', 'Tachycardia, hypotonia'],
          complications: ['Hepatorenalis szindróma (HRS-AKI)', 'Szeptikus shock', 'Májfunkció akut dekompenzációja (ACLF)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Ascites punctio (Paracentesis)', finding: 'PMN (polymorphonuclearis) fvs-szám > 250/mm3 (0,25 x 10^9/L)', interpretation: 'DIAGNOSZTIKUS SBP-RE! Azonnali empirikus antibiotikum indítandó.' },
            { test: 'SAAG (Serum-Ascites Albumin Gradiens)', finding: '≥ 1,1 g/dL', interpretation: 'Portalis hypertonia igazolása' },
            { test: 'Vérkép és vesefunkció', finding: 'Leukocytosis, emelkedett szérum kreatinin és karbamid', interpretation: 'Gyulladás és vesefunkció-romlás (HRS kockázat)' }
          ],
          imaging: [
            { modality: 'Has UH', finding: 'Ascites kimutatása, szerkezete, diagnosticus punctio vezérlése', significance: 'Elsőként választandó' }
          ],
          microbiology: [
            { test: 'Ascites tenyésztés', finding: 'Ágy melletti beoltás hemokultúra palackba (aerob + anaerob)', significance: 'Monobakteriális tenyésztés (50-80% pozitív)' },
            { test: 'Hemokultúra', finding: 'Pozitív 30-50%-ban', significance: 'Mindig le kell venni' }
          ],
          differential: [
            { disease: 'Szekunder peritonitis', distinguishing: 'Polimikrobiális tenyésztés, ascitikus fehérje > 10 g/L, LDH emelkedett, szabad levegő a CT-n' },
            { disease: 'Iatrogén / Citoszis asciticus peritonitis', distinguishing: 'PMN < 250/mm3, negatív tenyésztés' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '5-7 nap', note: 'Standard első vonal (EASL guideline)' },
              { drug: 'Cefotaxim', dose: '3x2g IV', duration: '5-7 nap', note: 'Alternatív 3. generációs cephalosporin' },
              { drug: 'Piperacillin-Tazobactam', dose: '3-4x4.5g IV', duration: '5-7 nap', note: 'Nosocomialis SBP vagy súlyos szepszis esetén' },
              { drug: 'Meropenem', dose: '3x1g IV', duration: '5-7 nap', note: 'Kórházi/nosocomialis fertőzés, ESBL gyanú' }
            ]
          },
          targeted: 'Tenyésztés és érzékenység alapján, de 3. generációs cephalosporin általában hatásos.',
          supportive: [
            'IV ALBUMIN INFÚZIÓ (EASL guideline): 1,5 g/ttkg az 1. napon ÉS 1,0 g/ttkg a 3. napon. Igazoltan csökkenti a hepatorenalis szindróma (HRS) kialakulását és a mortalitást!',
            'Nephrotoxikus szerek (NSAID, aminoglycosid) és diuretikumok szüneteltetése.'
          ],
          prevention: [
            'Szekunder profilaxis SBP epizód után: Norfloxacin 400 mg/nap PO VAGY Ciprofloxacin 500 mg/nap PO VAGY TMP-SMX 800/160 mg/nap PO tartósan.',
            'Primer profilaxis GI vérzés cirrhosisban (Ceftriaxon 1g IV 7 napig).'
          ]
        },
        guidelines: {
          diagnosis: [
            'Diagnosztikus paracentesis elvégzendő minden hospitalizált cirrhosisos betegnél felvételkor, vagy hasi panaszok, láz, hepaticus encephalopathia, vesefunkció-romlás esetén.',
            'Diagnózis: asciticus PMN fvs-szám > 250/mm3.'
          ],
          treatment_indications: [
            'Empirikus antibiotikum (Ceftriaxon) azonnal indítandó, amint a PMN > 250/mm3 igazolódik.',
            'IV Albumin adása (1,5 g/ttkg 1. nap, 1,0 g/ttkg 3. nap) KÖTELEZŐ a HRS és a mortalitás csökkentésére (EASL Guideline)!'
          ],
          first_line: ['Ceftriaxon 1x2g IV (5-7 nap) + IV Albumin infúzió.'],
          supportive: ['Albumin pótlás, diuretikumok szüneteltetése, vesefunkció szoros monitorozása.'],
          prevention: ['Norfloxacin vagy Ciprofloxacin profilaxis SBP után vagy alacsony ascitikus fehérje (<15 g/L) esetén.']
        },
        prognosis: {
          mortality: '10-30% a kórházi epizód alatt',
          prognostic_scores: ['MELD score', 'Child-Pugh score'],
          factors: 'Hepatorenalis szindróma (HRS) es a korai albumin hiánya jelentősen rontja a túlélést.'
        }
      },
      {
        id: 'secondary_peritonitis',
        name: 'Szekunder peritonitis',
        pathogen: { type: 'Kevert (Baktérium)', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus spp., Bacteroides fragilis, Peptostreptococcus</i> (polimikrobiális aerob + anaerob)', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Gyakori sebészeti sürgősségi állapot (GI traktus perforációja)',
          risk_groups: ['Peptikus fekély perforáció', 'Akut appendicitis / diverticulitis perforációja', 'Postoperatív anasztomózis elégtelenség', 'Ischaemiás bélnecrosis', 'Hasüregi trauma'],
          seasonality: 'Nincs',
          transmission: 'A gastrointestinalis traktus perforációja vagy necrozisa'
        },
        pathomechanism: {
          steps: [
            'A gyomor-bél traktus falának folytonossága megszakad (perforáció, necrosis, iatrogén sérülés).',
            'A bél élettani, endogén kevert flórája a steril peritonealis üregbe jut.',
            'Intenzív fibrinos-purulens gyulladás alakul ki, ami generalizált peritonitishez, szeptikus shockhoz és MODS-hoz vezethet.'
          ]
        },
        clinical: {
          incubation: 'Akut',
          onset: 'Hirtelen, heves',
          symptoms: [
            { name: 'Hasi fájdalom', description: 'Hirtelen kezdődő, igen heves, éles, diffúz hasi fájdalom, amely mozgásra, köhögésre elviselhetetlenné válik.', severity: 'severe' },
            { name: 'Láz', description: 'Magas láz, hidegrázás (idősekben hypothermia is lehet).', severity: 'moderate' },
            { name: 'Gastrointestinalis tünetek', description: 'Hányinger, hányás, paralyticus ileus (széklet- és szélakadás).', severity: 'severe' }
          ],
          physical_exam: ['Deszkakemény has (izomvédekezés / defense musculature)', 'Blumberg-jel (felengedési fájdalom)', 'Bélhangok hiánya (néma has)', 'Tachycardia, hypotonia, szepszis jelei'],
          complications: ['Szeptikus shock', 'Többszervi elégtelenség (MODS)', 'Intraabdominalis tályogok (subphrenicus, Douglas-ür)', 'Anasztomózis elégtelenség']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép', finding: 'Kifejezett leukocytosis balra tolt vérképpel (vagy leukopenia súlyos szepszisben)', interpretation: 'Súlyos szisztémás gyulladás' },
            { test: 'Laktát és Sepsis markerek', finding: 'Emelkedett laktát, CRP, Procalcitonin', interpretation: 'Szöveti hypoperfusio, szepszis' }
          ],
          imaging: [
            { modality: 'Hasi/kismedencei kontrasztos CT', finding: 'Pneumoperitoneum (szabad levegő), extraluminalis folyadék, tályog, perforáció pontos helye', significance: 'GOLD STANDARD a forráskontroll megtervezéséhez' },
            { modality: 'Mellkas/has rtg (álló/bal oldalfekvő)', finding: 'Subdiaphragmaticus szabad levegő (sarló alakú gázárnyék)', significance: 'Gyors tájékozódás perforáció gyanújakor' }
          ],
          microbiology: [
            { test: 'Intraoperatív mintavétel', finding: 'Polimikrobiális tenyésztés (aerob + anaerob)', significance: 'A célzott posztoperatív antibiotikum terápiához' },
            { test: 'Hemokultúra', finding: 'Műtét előtt levendő (aerob + anaerob)', significance: 'Sepsis igazolása' }
          ],
          differential: [
            { disease: 'Primer bakteriális peritonitis (SBP)', distinguishing: 'Ascites, monobakteriális, nincs szabad levegő a CT-n, nincs műtéti forrás' },
            { disease: 'Akut pancreatitis', distinguishing: 'Lipáz/Amiláz kifejezett emelkedése, nincs szabad levegő' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon + Metronidazol', dose: '1x2g IV + 3x500mg IV', duration: 'Forráskontroll után 4 nap (WSES/SIS guideline)', note: 'Enyhe/Közepes közösségben szerzett peritonitis' },
              { drug: 'Piperacillin-Tazobactam', dose: '3-4x4.5g IV', duration: 'Forráskontroll után 4 nap', note: 'Súlyos közösségi / Szeptikus shock / Nosocomialis' },
              { drug: 'Meropenem', dose: '3x1g IV', duration: 'Forráskontroll után 4 nap', note: 'Nosocomialis, szeptikus shock, ESBL gyanú' }
            ]
          },
          targeted: 'Intraoperatív tenyésztés alapján, de az anaerob lefedettség fenntartandó.',
          supportive: ['Korai célvezérelt folyadékresuscitáció, vazopresszorok (Noradrenalin), intensiv osztályos ellátás.'],
          prevention: ['Perioperatív antibiotikum profilaxis, fekélybetegség megfelelő kezelése.']
        },
        guidelines: {
          diagnosis: [
            'Sürgős kontrasztos CT vizsgálat a perforáció helyének és a peritonitis kiterjedésének igazolására.',
            'Sepsis szűrés (Laktát, Procalcitonin) és fókusz keresés azonnal.'
          ],
          treatment_indications: [
            'SEBÉSZI FORRÁSKONTROLL (SOURCE CONTROL) 6-12 órán belül elengedhetetlen (perforáció zárása/resectio, lavázs, drainage)!',
            'WSES 2024 / SIS GUIDELINES (STOP-IT TRIAL): Sikeres, adekvát forráskontroll után 4 napos (96 órás) antibiotikum kezelés teljes mértékben elegendő és egyenértékű a hosszabb kúrákkal!'
          ],
          first_line: ['Sürgős műtéti forráskontroll + Széles spektrumú IV antibiotikum (Ceftriaxon+Metronidazol vagy Pip/Tazo).'],
          supportive: ['Azonnali hemodinamikai stabilizáció, hemodinamikai monitorozás.'],
          prevention: ['Megfelelő sebészeti technika, korai diagnózis.']
        },
        prognosis: {
          mortality: '10-40% (szeptikus shock és időskori komorbiditás esetén jóval magasabb)',
          prognostic_scores: ['APACHE II score', 'Mannheim Peritonitis Index (MPI)'],
          factors: 'A forráskontroll gyorsasága (időablak) és sikeressége a legfontosabb prognosztikai tényező.'
        }
      },
      {
        id: 'cholangitis',
        name: 'Akut (Ascendáló) cholangitis',
        pathogen: { type: 'Kevert (Baktérium)', name: '<i>E. coli (25-50%), Klebsiella pneumoniae (15-20%), Enterococcus spp., Enterobacter, Pseudomonas aeruginosa, Bacteroides fragilis</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Epeúti obstructio talaján kialakuló életveszélyes fertőzés',
          risk_groups: ['Choledocholithiasis (epeúti kő)', 'Benignus vagy malignus epeúti szűkület (pancreas/cholangiocarcinom)', 'Epeúti stent elzáródás', 'ERCP vagy biliaris beavatkozás után'],
          seasonality: 'Nincs',
          transmission: 'Duodenum felől aszcendáló bélbaktériumok epeúti elzáródás mellett'
        },
        pathomechanism: {
          steps: [
            'Epeúti elzáródás (kő, tumor, stent) következtében az epeáramlás leáll, az intraductalis nyomás megemelkedik (>20 cmH2O).',
            'A nyálkahártya gát sérül, a bélből aszcendáló baktériumok elszaporodnak a pangó epében.',
            'A magas nyomás miatt a baktériumok és endotoxinok a hepaticus venákon és nyirokutakon át a szisztémás keringésbe jutnak (cholangio-venosus reflux), súlyos szepszist okozva.'
          ]
        },
        clinical: {
          incubation: 'Akut',
          onset: 'Hirtelen, heves',
          symptoms: [
            { name: 'Charcot-triász', description: 'Láz/hidegrázás + Jobb bordaív alatti fájdalom + Icterus (~50-70%-ban jelen van mindhárom).', severity: 'severe' },
            { name: 'Reynolds-pentád', description: 'Charcot-triász + Hypotonia (szeptikus shock) + Tudatzavar (Grade III / súlyos cholangitis jele!).', severity: 'severe' }
          ],
          physical_exam: ['Icterus (sárgaság)', 'Jobb bordaív alatti nyomásérzékenység', 'Láz / hidegrázás', 'Hypotonia, zavartság (súlyos esetben)'],
          complications: ['Szeptikus shock', 'Pyogen májtályogok', 'Akut veseelégtelenség (AKI)', 'DIC']
        },
        diagnostics: {
          laboratory: [
            { test: 'Májenzimek es Bilirubin', finding: 'Kifejezetten emelkedett szérum bilirubin (konjugált), ALP, GGT (cholestasis pattern)', interpretation: 'Epeúti obstructio' },
            { test: 'Gyulladásos markerek', finding: 'Leukocytosis balra tolt vérképpel, emelkedett CRP, Procalcitonin', interpretation: 'Szisztémás gyulladás / Szepszis' }
          ],
          imaging: [
            { modality: 'Hasi UH', finding: 'Tágult intra- es extrahepaticus epeutak, choledocholithiasis, stent', significance: 'Elsőként választandó vizsgálat' },
            { modality: 'MRCP / Hasi CT', finding: 'Epeúti kövek, szűkületek, tumorok pontos ábrázolása', significance: 'Ha az UH nem diagnosztikus vagy szövődmény gyanúja áll fenn' }
          ],
          microbiology: [
            { test: 'Hemokultúra', finding: 'Pozitív 20-50%-ban (aerob + anaerob)', significance: 'Kötelező levenni az antibiotikum előtt' },
            { test: 'Epe tenyésztés', finding: 'Polimikrobiális tenyésztés', significance: 'ERCP vagy biliaris drainage során vett minta' }
          ],
          differential: [
            { disease: 'Akut cholecystitis', distinguishing: 'Icterus ritka, epeutak nem tágak (csak az epehólyag fal vastag)', severity: 'moderate' },
            { disease: 'Pyogen májtályog', distinguishing: 'CT/UH képen körülírt folyadékgyülem, icterus kevésbé domináns' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon + Metronidazol', dose: '1x2g IV + 3x500mg IV', duration: 'Dekompresszió után 4-7 nap', note: 'TG18 Grade I-II közösségben szerzett' },
              { drug: 'Piperacillin-Tazobactam', dose: '3-4x4.5g IV', duration: 'Dekompresszió után 4-7 nap', note: 'TG18 Grade III súlyos / Stentelt / Nosocomialis' },
              { drug: 'Meropenem', dose: '3x1g IV', duration: 'Dekompresszió után 4-7 nap', note: 'Szeptikus shock, ESBL gyanú' }
            ]
          },
          targeted: 'Epe és hemokultúra tenyésztés alapján, de az epeúti dekompresszió elengedhetetlen!',
          supportive: ['Azonnali folyadékresuscitáció, vasopressorok (Noradrenalin), intenzív osztályos megfigyelés.'],
          prevention: ['Epekövesség korai sebészi megoldása, epeúti stentek rendszeres cseréje.']
        },
        guidelines: {
          diagnosis: [
            'TOKYO GUIDELINES (TG18/TG24) DIAGNOSZTIKUS KRITÉRIUMOK:',
            'A. Szisztémás gyulladás: Láz (>38°C) és/vagy hidegrázás, vagy laboratóriumi gyulladás (WBC <4.0 vagy >10.0 x10^9/L, CRP ≥1 mg/dL).',
            'B. Cholestasis: Icterus (Totál bilirubin ≥2.0 mg/dL) vagy emelkedett májenzimek (ALP, GGT, AST, ALT >1,5x ULN).',
            'C. Képalkotó: Epeúti tágulat vagy az ok (kő, szűkület, stent) jelenléte.',
            'Gyanú: 1 elem A-ból + 1 elem B-ből vagy C-ből. Biztos diagnózis: 1 elem A-ból + 1 elem B-ből + 1 elem C-ből.'
          ],
          treatment_indications: [
            'TOKYO GUIDELINES (TG18/TG24) SÚLYOSSÁGI OSZTÁLYOZÁS ÉS KEZELÉS:',
            'Grade III (Súlyos): Bármely szervrendszeri diszfunkció (keringési: vasopressor igény; neurológiai: tudatzavar; légzési: PaO2/FiO2 <300; vese: Kreatinin >2.0 mg/dL; máj: INR >1.5; hematológiai: Fvs <100.000/µL) -> AZONNALI EPEÚTI DEKOMPRESSZIÓ (ERCP / PTC) + Intenzív terápia + IV antibiotikum.',
            'Grade II (Közepes): fvs >12.000 vagy <4.000, Láz ≥39°C, Életkor ≥75 év, Bilirubin ≥5 mg/dL, Hypoalbuminemia -> KORAI EPEÚTI DEKOMPRESSZIÓ (24-48 órán belül) + IV antibiotikum.',
            'Grade I (Enyhe): Nem teljesíti a Grade II/III kritériumait -> Antimikrobiális kezelés; ha 24 órán belül nincs javulás, korai epeúti dekompresszió.'
          ],
          first_line: [
            'Epeúti dekompresszió (ERCP + papillotomia / kőextrakció / stentelés VAGY PTC) ÉS Széles spektrumú IV antibiotikum (Enyhe/Közepes: Ceftriaxon+Metronidazol; Súlyos/Stented: Piperacillin-Tazobactam vagy Meropenem).'
          ],
          supportive: ['Sepsis kezelése, folyadékpótlás, intenzív osztályos monitorozás.'],
          prevention: ['Elektív cholecystectomia az akut epizód után, stentek időben történő cseréje.']
        },
        prognosis: {
          mortality: '5-10% (korai dekompresszió mellett, dekompresszió nélkül közel 100%)',
          prognostic_scores: ['Tokyo Guidelines TG18/TG24 Severity Score'],
          factors: 'A sikeres és időben elvégzett epeúti dekompresszió a túlélés legfőbb záloga.'
        }
      },
      {
        id: 'acute_cholecystitis',
        name: 'Akut cholecystitis',
        pathogen: { type: 'Kevert (Baktérium)', name: '<i>E. coli, Klebsiella pneumoniae, Enterococcus spp., Enterobacter, Pseudomonas, Anaerobok</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Az egyik leggyakoribb akut sebészeti kórkép',
          risk_groups: ['Epekövesség (Nők, >40 év, Elhízás, Termékeny kor)', 'Acalculous cholecystitis: Intenzív osztályos, kritikus állapotú, égési sérült, szepszises betegek'],
          seasonality: 'Nincs',
          transmission: 'Ductus cysticus elzáródása epekő által, majd szekunder bakteriális fertőződés'
        },
        pathomechanism: {
          steps: [
            'A ductus cysticus tartós elzáródása (epekő beékelődés).',
            'Az epehólyag intraluminalis nyomása megemelkedik, fali ischaemia és kémiai gyulladás jön létre (lysolecithin hatása).',
            'Másodlagos bakteriális felülfertőződés alakul ki a pangó epében.',
            'Acalculous formában epepangás és splanchnicus ischaemia okoz fali necrosist epekő nélkül.'
          ]
        },
        clinical: {
          incubation: 'Akut',
          onset: 'Fokozatosan erősödő, majd állandósuló',
          symptoms: [
            { name: 'Jobb bordaív alatti / Epigastrialis fájdalom', description: 'Görcsösből állandósuló, heves fájdalom, amely a jobb lapockába / vállba sugározhat.', severity: 'severe' },
            { name: 'Hányinger, hányás', description: 'Gyakori kísérőtünet.', severity: 'moderate' },
            { name: 'Láz', description: 'Hőemelkedés vagy láz, hidegrázás.', severity: 'moderate' }
          ],
          physical_exam: ['Murphy-jel: Pozitív (mély belégzéskor a jobb bordaív alatti palpatio hirtelen belégzési elakadást vált ki a fájdalom miatt)', 'Jobb bordaív alatti nyomásérzékenység, izomvédekezés', 'Tapintható, érzékeny epehólyag (hidropsz/empyema)', 'Icterus általában hiányzik (ha van, choledocholithiasis vagy Mirizzi-szindróma gyanúja)'],
          complications: ['Gangraenás cholecystitis', 'Empyema vesicae felleae', 'Epehólyag perforáció és biliaris peritonitis', 'Pericholecystas tályog', 'Cholecysto-entericus fistula (epeköves ileus)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép és CRP', finding: 'Leukocytosis balra tolt vérképpel, emelkedett CRP', interpretation: 'Akut gyulladás' },
            { test: 'Májenzimek és Bilirubin', finding: 'Általában normálisak vagy enyhén emelkedettek', interpretation: 'Ha ALP/Bilirubin kifejezett, choledocholithiasis vagy Mirizzi-szindróma valószínű' }
          ],
          imaging: [
            { modality: 'Hasi UH', finding: 'Epehólyag fali megvastagodás (>3-4 mm), pericholecystas folyadék, epekő/beékelt kő, sonographiás Murphy-jel', significance: 'GOLD STANDARD (szenzitivitás >90%)' },
            { modality: 'CT / HIDA scan', finding: 'Fali dúsulás, pericholecystas gyulladás, gázképződés', significance: 'Szövődmények (perforáció, emphysematous cholecystitis) gyanújakor' }
          ],
          microbiology: [
            { test: 'Hemokultúra', finding: 'Súlyos esetben / láz esetén levendő', significance: 'Sepsis igazolása' },
            { test: 'Epe tenyésztés', finding: 'Műtéti minta tenyésztése', significance: 'Szövődményes vagy nosocomialis esetben' }
          ],
          differential: [
            { disease: 'Akut cholangitis', distinguishing: 'Icterus, tág epeutak, Reynolds-pentád' },
            { disease: 'Akut pancreatitis', distinguishing: 'Lipáz emelkedés >3x ULN, CT kép' },
            { disease: 'Peptikus fekélybetegség', distinguishing: 'Gastroscopia lelete' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon + Metronidazol', dose: '1x2g IV + 3x500mg IV', duration: 'Lázmentességig / Műtétig', note: 'TG18 Grade I-II enyhe/közepes' },
              { drug: 'Amoxicillin-Clavulansav', dose: '3x1.2g IV', duration: 'Lázmentességig / Műtétig', note: 'Alternatív első vonal' },
              { drug: 'Piperacillin-Tazobactam', dose: '3-4x4.5g IV', duration: 'Lázmentességig / Műtétig', note: 'TG18 Grade III súlyos / Acalculous / Nosocomialis' }
            ]
          },
          targeted: 'Tenyésztés alapján (ritkán szükséges, a sebészi eltávolítás a végleges megoldás).',
          supportive: ['Folyadékpótlás, görcsoldás, fájdalomcsillapítás (NSAID / OPIOID).'],
          prevention: ['Tünetes epekövesség elektív műtéti megoldása']
        },
        guidelines: {
          diagnosis: [
            'TOKYO GUIDELINES (TG18/TG24) DIAGNOSZTIKUS KRITÉRIUMOK:',
            'A. Lokális gyulladásos jelek: Murphy-jel, jobb bordaív alatti fájdalom / nyomásérzékenység / rezisztencia.',
            'B. Szisztémás gyulladásos jelek: Láz, emelkedett CRP, emelkedett WBC.',
            'C. Képalkotó jelek: Akut cholecystitisre jellegzetes UH/CT lelet.',
            'Gyanú: 1 elem A-ból + 1 elem B-ből. Biztos diagnózis: 1 elem A-ból + 1 elem B-ből + 1 elem C-ből.'
          ],
          treatment_indications: [
            'TOKYO GUIDELINES (TG18/TG24) SÚLYOSSÁGI STÁDIUMOK ÉS SEBÉSZI STRATÉGIA:',
            'Grade I (Enyhe): Szervdiszfunkció nélkül, enyhe gyulladás -> KORAI LAPAROSZKÓPOS CHOLECYSTECTOMIA (Lap-C) az elsőként választandó terápia!',
            'Grade II (Közepes): WBC >18.000/µL, tapintható érzékeny képlet, tünetek tartama >72h, vagy kifejezett lokális gyulladás (gangraena, pericholecystas tályog, emphysematous cholecystitis) -> KORAI LAPAROSZKÓPOS CHOLECYSTECTOMIA (Lap-C) tapasztalt sebész által; ha a műtéti kockázat magas, Percutan Transhepaticus Gallbladder Drainage (PTGBD).',
            'Grade III (Súlyos): Bármely szervrendszeri diszfunkció (keringési, neurológiai, légzési, vese, máj, hematológiai) -> PERCUTAN TRANSHEPATICUS CHOLECYSTOSTOMIA (PTGBD - epehólyag dekompresszió) + IV antibiotikum + Intenzív terápia (vagy sürgős Lap-C szigorúan válogatott betegekben).'
          ],
          first_line: [
            'Korai Laparoszkópos Cholecystectomia (Lap-C) 72-96 órán belül + IV Antibiotikum (Grade I/II: Ceftriaxon+Metronidazol vagy Amoxicillin-Clavulansav; Grade III: Piperacillin-Tazobactam vagy Meropenem).'
          ],
          supportive: ['Folyadékpótlás, fájdalomcsillapítás, PTGBD drainage magas műtéti rizikójú betegben.'],
          prevention: ['Elektív cholecystectomia tünetes epekövesség esetén.']
        },
        prognosis: {
          mortality: '1-3% (idősekben, acalculous formában es perforáció esetén magasabb)',
          prognostic_scores: ['Tokyo Guidelines TG18/TG24 Severity Score'],
          factors: 'Korai laparoszkópos műtét (72 órán belül) jelentősen csökkenti a szövődményeket és a kórházi tartózkodást.'
        }
      },
      {
        id: 'acute_diverticulitis',
        name: 'Akut diverticulitis',
        pathogen: { type: 'Kevert (Baktérium)', name: '<i>E. coli, Bacteroides fragilis, Enterococcus spp., Klebsiella, Peptostreptococcus</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'Nagyon gyakori kórkép (a 60 év feletti lakosság 50%-ának van diverticulosisa, 10-25%-ukban alakul ki diverticulitis)',
          risk_groups: ['Idős kor (>50-60 év)', 'Rostszegény, feldolgozott étrend', 'Elhízás, mozgásszegény életmód', 'NSAID, szteroid szedése'],
          seasonality: 'Nincs',
          transmission: 'A vastagbél (leggyakrabban sigma) diverticulumainak elzáródása és gyulladása (microperforatio)'
        },
        pathomechanism: {
          steps: [
            'A colon falának gyenge pontjain (a vasa recta behatolási helyein) kitüremkedések (diverticulumok) képződnek (leggyakrabban a sigmában).',
            'Székletrög (faecolith) zárja el a diverticulum nyakát, microperforatiót, fali ischaemiát és peridiverticularis gyulladást okozva.',
            'Súlyos esetben makroperforatio, tályogképződés vagy generalizált peritonitis alakul ki.'
          ]
        },
        clinical: {
          incubation: 'Akut',
          onset: 'Fokozatosan erősödő',
          symptoms: [
            { name: 'Bal alhasi fájdalom', description: 'Folyamatos, tompa vagy görcsös fájdalom ("bal oldali appendicitis").', severity: 'moderate' },
            { name: 'Láz', description: 'Hőemelkedés, magas láz hidegrázással (szövődményes esetben).', severity: 'moderate' },
            { name: 'Széklethabitus változása', description: 'Székrekedés, hasmenés, puffadás, tenesmus.', severity: 'mild' }
          ],
          physical_exam: ['Bal alhasi nyomásérzékenység, izomvédekezés', 'Tapintható érzékeny rezisztencia (phlegmone vagy tályog)', 'A peritonealis izgalom jelei perforáció esetén'],
          complications: ['Pericolicus vagy kismedencei tályog', 'Perforáció és purulens/faeculens peritonitis', 'Fistula képződés (colovesicalis: pneumaturia, fecaluria; colovaginalis)', 'Bélelzáródás (strictura)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép és CRP', finding: 'Leukocytosis balra tolt vérképpel, emelkedett CRP', interpretation: 'Gyulladás fokmérője' },
            { test: 'Vizeletvizsgálat', finding: 'Steril pyuria lehetséges', interpretation: 'A gyulladt bél irritálja a hólyagot' }
          ],
          imaging: [
            { modality: 'Hasi/kismedencei kontrasztos CT', finding: 'Vastagbélfali megvastagodás (>4 mm), pericolicus zsírbeszűrődés, tályog, szabad levegő jelenléte', significance: 'GOLD STANDARD (Hinchey / WSES stádiumbeosztás)' },
            { modality: 'Colonoscopia', finding: 'AKUT SZAKBAN STRICTLY KONTRAINDIKÁLT', significance: 'Perforáció veszélye miatt! 6 héttel a gyógyulás után javasolt a colorectalis carcinoma kizárására.' }
          ],
          microbiology: [
            { test: 'Tenyésztés', finding: 'Tályog aspirátum vagy műtéti minta', significance: 'Kevert flóra' }
          ],
          differential: [
            { disease: 'Colorectalis carcinoma', distinguishing: 'CT lelet, majd halasztott colonoscopia' },
            { disease: 'IBD (Crohn-betegség)', distinguishing: 'Anamnézis, endoszkópia' },
            { disease: 'Nőgyógyászati kórképek', distinguishing: 'Ovarialis cysta ruptura, adnexitis (UH)' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Amoxicillin-Clavulansav', dose: '2x1g PO', duration: '5-7 nap', note: 'Enyhe, szövődménymentes esetben (ha antibiotikum indokolt)' },
              { drug: 'Ciprofloxacin + Metronidazol', dose: '2x500mg PO + 3x500mg PO', duration: '5-7 nap', note: 'Penicillin allergia esetén' }
            ],
            inpatient: [
              { drug: 'Ceftriaxon + Metronidazol', dose: '1x2g IV + 3x500mg IV', duration: '5-7 nap', note: 'Közepes/Súlyos (WSES 1a-2a)' },
              { drug: 'Piperacillin-Tazobactam', dose: '3-4x4.5g IV', duration: '5-7 nap', note: 'Perforáció, peritonitis (WSES 3-4)' }
            ]
          },
          targeted: 'Tályog drainage tenyésztése alapján.',
          supportive: ['Szupportív kezelés (fájdalomcsillapítás, folyadék, koplalás/folyékony diéta).', 'CT-vezérelt perkután drainage >4 cm-es tályog esetén.'],
          prevention: ['Rostdús étrend, bő folyadékfogyasztás, elhízás kerülése']
        },
        guidelines: {
          diagnosis: [
            'Hasi kontrasztos CT a diagnózis megerősítésére és a szövődményes formák elkülönítésére.',
            'WSES 2020 OSZTÁLYOZÁS:',
            'Uncomplicated (WSES 0): Peridiverticularis gyulladás tályog vagy perforáció nélkül.',
            'Complicated (WSES 1a-4): 1a (pericolicus phlegmone), 1b (pericolicus tályog <4 cm), 2a (távoli/kismedencei tályog >4 cm), 2b (távoli szabad gáz), 3 (generalizált purulens peritonitis), 4 (generalizált faeculens peritonitis).'
          ],
          treatment_indications: [
            'SZÖVŐDMÉNYMENTES DIVERTICULITIS (AVERT & DIABOLO vizsgálatok, WSES 2020 Guideline):',
            'Immunkompetens, jó általános állapotú, láztalan betegeknél az ANTIBIOTIKUM ELHAGYHATÓ! Ambuláns szupportív kezelés (fájdalomcsillapítás, folyadék) elegendő szoros kontroll mellett.',
            'ANTIBIOTIKUM INDIKÁCIÓI: Immunszupprimált állapot, magas láz, CRP >140 mg/L, szepszis jelei, komorbiditások, vagy szövődményes stádium (WSES 1a-4).',
            'SZÖVŐDMÉNYES STÁDIUMOK KEZELÉSE:',
            'Tályog >4 cm (WSES 2a): CT-vezérelt Perkután Drainage + IV antibiotikum.',
            'Peritonitis (WSES 3-4): Sürgős sebészeti beavatkozás (Laparoszkópos lavázs/drainage VAGY Hartmann-műtét VAGY Resectio + primér anasztomózis + terelő ileostoma).'
          ],
          first_line: [
            'Enyhe szövődménymentes: Szupportív / ha indokolt: Amoxicillin-Clavulansav 2x1g PO 5-7 napig.',
            'Súlyos / Szövődményes: Ceftriaxon 1x2g IV + Metronidazol 3x500mg IV VAGY Piperacillin-Tazobactam 3-4x4.5g IV.'
          ],
          supportive: ['CT-guided drainage tályog esetén, szoros sebészeti kontroll.'],
          prevention: ['Gyógyulás után 6 héttel colonoscopia elvégzése kötelező a malignitás kizárására.']
        },
        prognosis: {
          mortality: 'Szövődménymentes esetben <1%, faeculens peritonitis esetén magas (akár 20%)',
          prognostic_scores: ['Hinchey classification', 'WSES classification'],
          factors: 'A Hinchey/WSES stádium és az életkor/komorbiditás határozza meg a prognózist.'
        }
      },
      {
        id: 'pyogenic_liver_abscess',
        name: 'Pyogen májtályog',
        pathogen: { type: 'Kevert (Baktérium)', name: '<i>E. coli, Klebsiella pneumoniae (hypermucoviscous K1/K2 törzsek), Streptococcus anginosus group, Enterococcus spp., Bacteroides fragilis</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'A leggyakoribb visceralis tályog',
          risk_groups: ['Epeúti betegség (cholangitis, choledocholithiasis)', 'Diabetes mellitus (különösen K. pneumoniae tályog)', 'Hasüregi gyulladás (appendicitis, diverticulitis, IBD)', 'Malignitás, chemoembolisatio'],
          seasonality: 'Nincs',
          transmission: 'Biliaris ascendálás, pylephlebitis (portal szóródás), vagy haematogen szóródás'
        },
        pathomechanism: {
          steps: [
            'Biliaris aszcendálás (leggyakoribb): epeúti infekcióból aszcendáló fertőzés.',
            'Portalis szóródás (pylephlebitis): appendicitisből, diverticulitisből vagy IBD-ből a vena portae ágain át.',
            'Haematogen szóródás: szisztémás bacteraemia / endocarditis során az arteria hepatica útján.',
            'Klebsiella pneumoniae (hypermucoviscous ST23/K1/K2): primer cryptogen tályogot okozhat, amely metastatiskusan szóródhat (endophthalmitis, meningitis, spondylodiscitis!).'
          ]
        },
        clinical: {
          incubation: 'Változó',
          onset: 'Gyakran alattomos, subakut vagy akut',
          symptoms: [
            { name: 'Láz, hidegrázás', description: 'A vezető tünet az esetek >90%-ában, gyakran pikozo láz formájában.', severity: 'moderate' },
            { name: 'Jobb bordaív alatti fájdalom', description: 'Tompa, állandó fájdalom, amely a jobb vállba / hátba sugározhat.', severity: 'moderate' },
            { name: 'Étvágytalanság, fogyás', description: 'Subakut lefolyás esetén kifejezett testsúlyvesztés, rossz közérzet.', severity: 'mild' }
          ],
          physical_exam: ['Jobb bordaív alatti nyomásérzékenység, vesetájéki/máj ütögetési érzékenység', 'Hepatomegalia', 'Icterus (20-30%-ban, főleg epeúti eredetnél)'],
          complications: ['Tályog ruptura (biliaris peritonitis, pleurális empyema, pericarditis)', 'Szeptikus shock', 'Metastaticus fertőzés (K. pneumoniae endophthalmitis - látásvesztés!)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép es CRP', finding: 'Kifejezett leukocytosis, emelkedett CRP', interpretation: 'Gyulladás' },
            { test: 'Májenzimek', finding: 'Emelkedett ALP, GGT (máj enzim pattern), hyperbilirubinemia', interpretation: 'Intrahepaticus cholestasis / térfoglalás' }
          ],
          imaging: [
            { modality: 'Hasi UH', finding: 'Hypoechogén, folyadékot/gázt tartalmazó képlet', significance: 'Elsőként választandó szűrővizsgálat' },
            { modality: 'Hasi kontrasztos CT', finding: 'Kontrasztanyagot halmozó falú, hypodens lézió, halo-jel, többkamrás szerkezet', significance: 'GOLD STANDARD (lokalizáció, drainage megtervezése)' }
          ],
          microbiology: [
            { test: 'Tályog aspirátum tenyésztése', finding: 'UH/CT-vezérelt aspiráció tenyésztésre', significance: 'DIAGNOSZTIKUS ÉS TERÁPIÁS (célzott antibiotikum)' },
            { test: 'Hemokultúra', finding: 'Pozitív 50%-ban', significance: 'Mindig le kell venni' }
          ],
          differential: [
            { disease: 'Amőbás májtályog (Entamoeba histolytica)', distinguishing: 'Endémiás utazási anamnézis, szerológia pozitív, csokoládébarna aspirátum' },
            { disease: 'Echinococcus cysta', distinguishing: 'Szerológia, UH képen leányhólyagok. PUNKCIÓ ANAPHYLAXIA ES SZÓRÓDÁS VESZÉLYE MIATT KONTRAINDIKÁLT!' },
            { disease: 'Hepatocellularis carcinoma / Metastasis', distinguishing: 'Tumormarkerek (AFP), CT dúsulási dinamika' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Ceftriaxon + Metronidazol', dose: '1x2g IV + 3x500mg IV', duration: '2-4 hét IV, majd PO step-down total 4-6 hét', note: 'Standard közösségben szerzett' },
              { drug: 'Piperacillin-Tazobactam', dose: '3-4x4.5g IV', duration: '2-4 hét IV, majd PO step-down total 4-6 hét', note: 'Súlyos / Epeúti eredet / Nosocomialis' }
            ]
          },
          targeted: 'Tályog aspirátum tenyésztése alapján. Orális step-down (pl. Amoxicillin-Clavulansav, Ciprofloxacin + Metronidazol) a teljes 4-6 hetes kúra befejezéséig.',
          supportive: ['Percutan drainage / aspiráció, szoros képalkotó kontroll.'],
          prevention: ['Epeúti és intraabdominalis infekciók korai kezelése']
        },
        guidelines: {
          diagnosis: [
            'UH/CT-vezérelt diagnosztikus es terápiás aspiráció/drainage elengedhetetlen a mikrobiológiai mintavételhez.',
            'Amőbás es Echinococcus eredet kizárása szerológiával es képalkotóval!'
          ],
          treatment_indications: [
            'FORRÁSKONTROLL ÉS ANTIBIOTIKUM:',
            'Kisebb tályogok (<3-4 cm): Percutan tű-aspiráció (repeated aspiration) + IV antibiotikum.',
            'Nagyobb tályogok (>4-5 cm vagy multilocularis): PERCUTAN KATÉTERES DRAINAGE (PCD) a választandó eljárás!',
            'Sebészi drainage: Sikertelen PCD, multilocularis vastag falú tályog, vagy ruptura esetén.'
          ],
          first_line: [
            'Percutan katéteres drainage (PCD) + IV Antibiotikum (Ceftriaxon+Metronidazol vagy Pip/Tazo) 2-4 hétig IV, majd orális váltással total 4-6 hétig.'
          ],
          supportive: ['Szemészeti konzílium K. pneumoniae tályog esetén (endophthalmitis szűrés!).'],
          prevention: ['Epeúti betegségek és intraabdominalis gyulladások korai kezelése.']
        },
        prognosis: {
          mortality: '5-10% (megfelelő drainage mellett)',
          prognostic_scores: ['Nincs specifikus'],
          factors: 'K. pneumoniae áttétes endophthalmitis látásvesztést okozhat; szövődményes epeúti elzáródás rontja a túlélést.'
        }
      },
      {
        id: 'acute_appendicitis',
        name: 'Akut appendicitis',
        pathogen: { type: 'Kevert (Baktérium)', name: '<i>E. coli, Bacteroides fragilis, Pseudomonas aeruginosa, Enterococcus spp.</i>', gram: 'Vegyes', shape: 'Vegyes' },
        epidemiology: {
          incidence: 'A leggyakoribb akut sebészeti hasi kórkép (élettartam kockázat 7-8%)',
          risk_groups: ['10-30 éves korosztály (bár bármely életkorban előfordulhat)', 'Férfiaknál enyhén gyakoribb'],
          seasonality: 'Nincs',
          transmission: 'A féregnyúlvány lumenének elzáródása, majd szekunder bakteriális invázió'
        },
        pathomechanism: {
          steps: [
            'A féregnyúlvány lumenének elzáródása (faecolith/székletrög, lymphoid hyperplasia, idegentest).',
            'A folyamatos nyálkahártya-szekréció miatt a luminalis nyomás megemelkedik, a vénás és nyirokkeringés leáll.',
            'Ischaemia, fali necrosis és bakteriális invázió alakul ki.',
            'Kezelés nélkül 24-72 órán belül perforáció, periappendicularis tályog vagy diffúz peritonitis jön létre.'
          ]
        },
        clinical: {
          incubation: 'Akut',
          onset: 'Fokozatosan alakul ki 12-24 óra alatt',
          symptoms: [
            { name: 'Átvándorló hasi fájdalom', description: 'Epigastrialis / periumbilicalis tompa fájdalom, amely 4-12 óra alatt a jobb alhasra (McBurney-pont) lokalizálódik.', severity: 'severe' },
            { name: 'Anorekszia es Hányinger', description: 'Étvágytalanság (szinte univerzális!), hányinger, 1-2 alkalommal hányás.', severity: 'moderate' },
            { name: 'Láz', description: 'Hőemelkedés, alacsony fokú láz (perforáció esetén magas láz hidegrázással).', severity: 'moderate' }
          ],
          physical_exam: [
            'McBurney- és Lanz-pont nyomásérzékenység',
            'Blumberg-jel (indirekt felengedési fájdalom)',
            'Rovsing-jel (bal alhasi nyomásra a jobb alhasban jelentkező fájdalom)',
            'Psoas-jel (jobb csípő hyperextensiójára fájdalom - retrocaecalis appendicitis)',
            'Obturator-jel (jobb csípő flexiója és belső rotációja fájdalmas)'
          ],
          complications: ['Appendicularis infiltrátum / tályog', 'Perforáció és diffúz peritonitis', 'Pylephlebitis (vena portae thrombophlebitis)', 'Sepsis']
        },
        diagnostics: {
          laboratory: [
            { test: 'Vérkép es CRP', finding: 'Leukocytosis balra tolt vérképpel, emelkedett CRP', interpretation: 'Kombinált normál WBC + CRP esetén az appendicitis valószínűsége nagyon alacsony!' },
            { test: 'Vizeletvizsgálat', finding: 'Pyuria/haematuria nélkül (vagy minimális)', interpretation: 'UTI kizárása (irritáció miatt fvs előfordulhat)' }
          ],
          imaging: [
            { modality: 'Hasi UH', finding: 'Vak tasakban végződő, nem komprimálható féregnyúlvány, külső átmérő >6 mm, fali hyperaemia, faecolith', significance: 'ELSŐKÉNT VÁLASZTANDÓ fiatalokban, gyermekekben, terhesekben' },
            { modality: 'Hasi kontrasztos CT', finding: 'Megvastagodott féregnyúlvány, periappendicularis zsírbeszűrődés, appendicolith', significance: 'GOLD STANDARD felnőttekben bizonytalan diagnózis esetén' }
          ],
          microbiology: [
            { test: 'Tenyésztés', finding: 'Perforált esetben intraoperatív genny minta', significance: 'Célzott postoperatív antibiotikum kezeléshez' }
          ],
          differential: [
            { disease: 'Mesenterialis lymphadenopathy / Yersiniosis', distinguishing: 'UH képen tágult nyirokcsomók, vékony féregnyúlvány, viralis/diarrhoeas előzmény' },
            { disease: 'Meckel-diverticulitis', distinguishing: 'Műtéti incidentális lelet' },
            { disease: 'Gy nőgyógyászati kórképek (EU terhesség, Ovulációs fájdalom, Adnexitis)', distinguishing: 'Nőgyógyászati UH, b-hCG teszt' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [],
            inpatient: [
              { drug: 'Ceftriaxon + Metronidazol', dose: '1x2g IV + 3x500mg IV', duration: 'Preoperatív profilaxis / szövődményes esetben 3-5 nap', note: 'Standard perioperatív regimen' },
              { drug: 'Amoxicillin-Clavulansav', dose: '3x1.2g IV', duration: 'Preoperatív profilaxis / szövődményes esetben 3-5 nap', note: 'Alternatív perioperatív regimen' }
            ]
          },
          targeted: 'Tenyésztés alapján perforált esetben.',
          supportive: ['Koplalás, IV folyadék, fájdalomcsillapítás.'],
          prevention: ['Nincs specifikus megelőzés.']
        },
        guidelines: {
          diagnosis: [
            'WSES JERUSALEM GUIDELINES 2020:',
            'Klinikai pontrendszerek (Alvarado / AIR score) használata a alacsony rizikójú betegek kiszűrésére (Score <5: appendicitis valószínűtlen).',
            'UH az elsőként választandó képalkotó fiatalokban és terhesekben, CT felnőtteknél bizonytalan esetben.'
          ],
          treatment_indications: [
            'MŰTÉTI KEZELÉS:',
            'Laparoszkópos Appendectomia (Lap-Appy) a GOLD STANDARD terápia mind szövődménymentes, mind szövődményes appendicitisben.',
            'KONZERVATÍV (NEM-OPERATÍV) KEZELÉS (CODA & APPAC vizsgálatok):',
            'Kiválasztott, szövődménymentes appendicitisben (faecolith/appendicolith NÉLKÜL) az IV antibiotikum kezelés elfogadható alternatíva lehet a beteggel való megbeszélés alapján, de 1-5 éven belül 25-30%-os kiújulási kockázattal kell számolni.',
            'ANTIBIOTIKUM PROFILAXIS ÉS TERÁPIA:',
            'Egyszeri adag preoperatív antibiotikum profilaxis (pl. Cefazolin + Metronidazol vagy Ceftriaxon + Metronidazol) mindenkinek javasolt.',
            'Szövődménymentes műtét után postoperatív antibiotikum NEM SZÜKSÉGES! Szövődményes (perforált/gangraenás) esetben 3-5 nap IV antibiotikum javasolt.'
          ],
          first_line: [
            'Laparoszkópos Appendectomia + Preoperatív profilaxis (Ceftriaxon 2g IV + Metronidazol 500mg IV).'
          ],
          supportive: ['Fájdalomcsillapítás, folyadékpótlás.'],
          prevention: ['Nincs']
        },
        prognosis: {
          mortality: '<0.5% szövődménymentes esetben, perforáció es idős kor esetén 2-5%',
          prognostic_scores: ['Alvarado Score', 'AIR (Appendicitis Inflammatory Response) Score'],
          factors: 'Készültségi idő es korai műtét megelőzi a perforációt és a szeptikus szövődményeket.'
        }
      }
    ]
  }
};

/* removed const  */

Object.entries(window._abdomen_hu).forEach(([k, v]) => {
  window.diseases[k] = Object.assign(window.diseases[k] || {}, v);
});

(function ensureAbdomenDiseaseGalleries() {
  const categoryIds = ['gastrointestinal', 'viral_hepatitis', 'urinary_tract', 'intraabdominal'];

  function createInlineGalleryImage(diseaseName, categoryName) {
    const safeDiseaseName = String(diseaseName || 'Disease');
    const safeCategoryName = String(categoryName || 'Abdomen');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#fef3c7"/>
          <stop offset="100%" stop-color="#fde68a"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1030" cy="140" r="140" fill="#f59e0b" opacity="0.12"/>
      <circle cx="180" cy="520" r="180" fill="#f97316" opacity="0.1"/>
      <text x="80" y="150" font-size="62" font-family="Arial, sans-serif" font-weight="700" fill="#7c2d12">${safeDiseaseName}</text>
      <text x="80" y="230" font-size="36" font-family="Arial, sans-serif" fill="#9a3412">Kategoria: ${safeCategoryName}</text>
      <text x="80" y="340" font-size="30" font-family="Arial, sans-serif" fill="#431407">Abdominalis fertozes - oktatasi abrazolo kep</text>
      <rect x="80" y="390" width="1040" height="8" fill="#ea580c" opacity="0.4"/>
      <text x="80" y="470" font-size="28" font-family="Arial, sans-serif" fill="#7c2d12">Infectologia</text>
    </svg>`;

    return {
      url: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      caption: `${safeDiseaseName} - szemlelteto abra`,
      type: 'Illusztracio'
    };
  }

  const gastrointestinalDefaultMaps = [
    {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diarrheal_disease_death_rates,_World,_2020.svg',
      caption: 'Vilagtérkép: diarrhoeas betegsegek halalozasi rátaja (2020)',
      type: 'Epidemiologiai terkep'
    },
    {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diarrheal_disease_prevalence_rates,_World,_2020.svg',
      caption: 'Vilagtérkép: diarrhoeas betegsegek prevalenciaja (2020)',
      type: 'Epidemiologiai terkep'
    }
  ];

  const epidemiologyMapGalleryByDiseaseId = {
    cholera: [
      {
        url: 'https://cdn.who.int/media/images/default-source/cover-images/who-documents/thumbnail_cholera_34.tmb-479v.png?sfvrsn=fae3cc58_2',
        caption: 'WHO kolera helyzetkep (2026. február 21.) - globalis erintett orszagok',
        type: 'WHO epidemiologiai terkep'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Distribution_of_the_cholera.PNG',
        caption: 'Kolera földrajzi elterjedese (endemias/epidemias teruletek)',
        type: 'Epidemiologiai terkep'
      }
    ],
    salmonellosis: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/CDC_salmonellosis_map.png',
        caption: 'Salmonellosis epidemiologiai terkepe (CDC)',
        type: 'Epidemiologiai terkep'
      },
      ...gastrointestinalDefaultMaps
    ]
  };

  categoryIds.forEach((categoryId) => {
    const category = window.diseases[categoryId];
    if (!category || !Array.isArray(category.diseases)) return;

    category.diseases.forEach((disease) => {
      if (!disease || (Array.isArray(disease.gallery) && disease.gallery.length > 0)) return;
      if (epidemiologyMapGalleryByDiseaseId[disease.id]) {
        disease.gallery = epidemiologyMapGalleryByDiseaseId[disease.id].map((image) => ({ ...image }));
        return;
      }
      if (categoryId === 'gastrointestinal') {
        disease.gallery = gastrointestinalDefaultMaps.map((image) => ({ ...image }));
        return;
      }
      disease.gallery = [createInlineGalleryImage(disease.name, category.name)];
    });
  });
})();

// Ensure urinary_tract didactics are present (HU)
window.diseases['urinary_tract'] = window.diseases['urinary_tract'] || {};
Object.assign(window.diseases['urinary_tract'], {
  didactics: {
    overview: 'Egyszerű felosztás: alsó húgyúti infekciók (cystitis) jellemzően rendszerszintű tünetek nélkül; felső húgyúti infekciók (pyelonephritis) lázzal, hidegrázással és deréktáji fájdalommal járnak. Alsó UTI legtöbbször ambuláns ellátást igényel; felső UTI esetén szélesebb kivizsgálás és esetenként kórházi ellátás szükséges.',
    lower: 'Tünetek: dysuria (égő vizelés), gyakori vizelés (pollakisuria), sürgető vizelési inger (urgencia), suprapubicus fájdalom, alkalmi haematuria. Általában nincs láz vagy általános rossz közérzet.',
    upper: 'Szisztémás jelek: magas láz (>38°C), hidegrázás, általános rossz közérzet; lokálisan: deréktáji/CVA fájdalom, hányinger/hányás. Labor: leukocytosis, CRP emelkedés; mindig vizelet- és szükség szerint vérkultúra vegyenek.',
    diagnostics: ['1) Célzott anamnézis és vitális paraméterek', '2) Vizelet tesztcsík és mikroszkópia (pyuria, nitrit)', '3) Vizelet tenyésztés komplikált, recidiváló vagy szisztémás esetben', '4) Vérképek, CRP, kreatinin; hemokultúra lázas betegeknél', '5) Képalkotás (UH/CT) obstrukció, tályog vagy perzisztencia esetén'],
    red_flags: ['Szepszis jelei (hypotonia, zavartság)', 'Gyorsan emelkedő kreatinin vagy obstrukció jele', 'Terhességben fellépő láz', 'Per os terápia nem kivitelezhető (súlyos hányás miatt)', 'Immunszupprimált állapot'],
    special_populations: 'Idősek: gyakran atipikus tünetek (zavartság, gyengeség) — alacsony küszöb a kivizsgálásra. Gyermekek: láz lehet az egyetlen jel. Terhesek: alacsony küszöb a kezelésre és követésre.',
    teaching_tip: 'Urinális tünetek láz nélkül → cystitis valószínű. Ha láz és deréktáji fájdalom is van → pyelonephritis és emelt kivizsgálási, kezelési szint.'
  }
});

export const abdomenHu: DiseaseDatabase = window.diseases;

