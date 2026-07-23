import { Category } from '../types';

export const viralHepatitisHu: Category = {
  name: 'Vírusos hepatitisek',
  icon: '🧬',
  color: '#eab308',
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
        ],
        guidelines: [
          'Diagnózis: Akut HAV fertőzés igazolására szérum Anti-HAV IgM elengedhetetlen. Az INR szoros követése kötelező az akut májelégtelenség (ALF) korai szűrésére.',
          'Kezelés: Kizárólag szupportív. Kórházi felvétel javasolt INR > 1.5, encephalopathy, súlyos dehidráció vagy veszélyeztetett betegcsoport (idős, krónikus májbeteg) esetén.',
          'Májtranszplantáció: Akut májelégtelenség kialakulása esetén azonnali transzplantációs centrumba utalás és King\'s College kritériumok értékelése szükséges.',
          'Post-expozíciós profilaxis (PEP): Expozíciót követő 14 napon belül 1 dózis HAV vakcina (1–40 év) vagy vakcina + HNIG (>40 év, immunszuppresszió, cirrhosis).',
          'Pre-expozíciós prevenció: Inaktivált vakcina 2 dózisban (0 és 6–12 hó). Kiemelt javallat: utazók endémiás területre, MSM, krónikus májbetegek, IV droghasználók.'
        ],
        references: [
          'EASL Clinical Practice Guidelines & Public Health Recommendations on Hepatitis A.',
          'WHO. Hepatitis A fact sheet & CDC Yellow Book.'
        ]
      },
      prognosis: {
        mortality: 'Fiataloknál alacsony (<0.1%), de 50 év felett és krónikus májbetegségben 1.8–5%',
        prognostic_scores: ['King\'s College kritériumok (akut májelégtelenség)'],
        factors: 'Életkor, meglévő krónikus májbetegség (HBV, HCV, cirrhosis), koagulopátia fokozódása (INR)'
      },
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
        ],
        differential: [
          { disease: 'Egyéb vírushepatitisek (HAV, HCV, HDV, HEV)', distinguishing: 'Szerológiai és PCR tesztek (Anti-HAV IgM, Anti-HCV, Anti-HDV, Anti-HEV IgM)' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA, LKM-1), emelkedett szérum IgG, májbiopszia' },
          { disease: 'Alkoholos vagy Metabolikus májbetegség (MASLD/MASH)', distinguishing: 'Anamnézis, AST/ALT >2, metabolikus szindróma, ultrahang steatosis' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Anamnézisben hepatotoxikus szer, szoros időbeli összefüggés' },
          { disease: 'Wilson-kór', distinguishing: 'Fiatal beteg, alacsony cöruloplazmin, magas 24h vizelet réz, Kayser-Fleischer gyűrű' }
        ]
      },
      therapy: {
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
        prevention: ['Rekombináns HBV vakcináció (0-1-6 hónapos oltási sorrend)', 'Terhesek univerzális HBsAg szűrése az 1. trimeszterben', 'Post-expozíciós profilaxis (HBIG + 1. vakcina dózis 12 órán belül) újszülötteknek és tűszúrásos expozíciónak'],
        guidelines: [
          'Kezelési Indikációk (EASL 2017): 1. MINDEN májcirrhosisos beteg (kompenzált vagy dekompenzált) kezelendő, ha a HBV DNS kimutathatónak bizonyul! 2. Krónikus hepatitis B: HBV DNS >2000 IU/mL ÉS ALT > ULN ÉS legalább mérsékelt fibroszis (≥F2). 3. HBV DNS >20 000 IU/mL ÉS ALT >2x ULN (fibroszistól függetlenül). 4. Családi HCC anamnézis vagy extrahepatikus jelek.',
          'Terhesség & Anyai-magzati átvitel (MTCT): TDF (Tenofovir disoproxil) adása a 24–28. terhességi héttől a szülés utáni 4–12. hétig, ha az anyai HBV DNS >200 000 IU/mL (>10^5 IU/mL). Újszülöttnek HBIG + vakcina 12 órán belül.',
          'Immunszuppresszív / Biológiai terápia profilaxis: HBsAg+ és Anti-HBc+ betegeknek NA profilaxis indítandó (pl. Rituximab, szteroid, kemoterápia) a HBV reaktiváció megelőzésére.',
          'Monitoring: NA kezelés alatt ALT, HBV DNS, renalis paraméterek 3–6 havonta. HCC szűrés (hasi UH ± AFP 6 havonta) kötelező minden cirrhosisos és magas kockázatú (PAGE-B score) betegnél!'
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398.',
          'WHO Guidelines for the prevention, care and treatment of persons with chronic hepatitis B infection (2024 update).'
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
        }
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
        ],
        differential: [
          { disease: 'Hepatitis B és D vírusfertőzés', distinguishing: 'Szerológia (HBsAg, Anti-HBc, Anti-HDV, HBV DNS)' },
          { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST/ALT >2, GGT és MCV kiugró emelkedése' },
          { disease: 'Metabolikus diszfunkcióhoz társuló zsírmáj (MASLD / MASH)', distinguishing: 'Metabolikus szindróma, ultrahangos steatosis, szövettan' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA), emelkedett szérum IgG' },
          { disease: 'Hemochromatosis', distinguishing: 'Magas szérum vas, ferritin és transzferrin szaturáció (>45%), HFE génmutáció' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tabletta (300 mg / 120 mg) PO 1x/nap étkezéssel', duration: '8 hét', note: 'Pangenotípusos DAA. Kezelés-naív betegeknek cirrhosis nélkül ÉS kompenzált cirrhosisban (Child-Pugh A) is CSUPÁN 8 HÉT!' },
            { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tabletta (400 mg / 100 mg) PO 1x/nap', duration: '12 hét', note: 'Pangenotípusos DAA. Non-cirrhoticus és kompenzált cirrhoticus betegekben egyaránt adható.' }
          ]
        },
        targeted: 'EASL Irányelv: Pangenotípusos DAA (Direct-Acting Antiviral) kezelés MINDEN viraemiás (HCV RNS+) betegnek. Cél a Tartós Virológiai Válasz (SVR12 = nem kimutatható HCV RNS 12 héttel a kezelés után), ami végleges biológiai GYÓGYULÁST jelent (>95-99% sikerráta!).',
        supportive: ['Gyógyszerinterakciók ellenőrizendők az indítás előtt (www.hep-druginteractions.org)', 'Szigorú alkoholtilalom', 'Májprotektív életmód'],
        prevention: ['Nincs védőoltás (magas virális variabilitás miatt)', 'Vérkészítmények és szervdonorok kötelező PCR szűrése', 'Ártalomcsökkentési programok (steril tűcsere IV droghasználóknak)', 'Biztonságos szexuális élet'],
        guidelines: [
          'Kezelési Indikáció (EASL 2020/2023): MINDEN krónikus HCV fertőzött beteg kezelendő, függetlenül a fibroszis stádiumától. Kivételek: terhesség (DAA terhességben nem engedélyezett) vagy nagyon rövid várható élettartam nem-máj eredetű okból.',
          'Pangenotípusos regimének (Egyszerűsített kezelés): Glecaprevir/Pibrentasvir (8 hét) vagy Sofosbuvir/Velpatasvir (12 hét).',
          'Szigorú Kontraindikáció Dekompenzált Cirrhosisban (Child-Pugh B/C): Proteáz inhibitor tartalmú szerek (Glecaprevir, Grazoprevir, Voxilaprevir) ABSZOLÚT KONTRAINDIKÁLTAK a súlyos hepatotoxicitás miatt! Dekompenzált esetben: Sofosbuvir/Velpatasvir + Ribavirin (RBV) 12 hétig.',
          'Poszt-SVR HCC Szűrési Kötelezettség: Ha a betegnél a kezelés előtt F3 (advanced fibrosis) vagy F4 (cirrhosis) állt fenn, az SVR (gyógyulás) elérése után is ÉLETHOSSZIG TARTÓ HCC szűrés (hasi UH 6 havonta) kötelező!'
        ],
        references: [
          'EASL Recommendations on Treatment of Hepatitis C 2020 update. J Hepatol. 2020;73(5):1170-1218.',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ]
      },
      prognosis: {
        mortality: 'Kiváló (>95–99% SVR12 = gyógyulás DAA-val); dekompenzált cirrhosisban vagy előrehaladott HCC-ben rosszabb',
        prognostic_scores: ['FIB-4 / APRI index', 'Child-Pugh és MELD score (cirrhosisban)'],
        factors: 'Fibroszis stádiuma a kezelés előtt, dekompenzáció megléte, HIV/HBV koinfekció, alkohol'
      },
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
        ],
        differential: [
          { disease: 'Akut HBV reaktiváció / flare (HDV nélkül)', distinguishing: 'HDV RNS negatív, Anti-HDV negatív; HBV DNS hirtelen kiugrása' },
          { disease: 'Egyéb akut felülfertőződések (HAV, HEV, HCV)', distinguishing: 'Anti-HAV IgM, Anti-HEV IgM, HCV RNS tesztelés' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI) HBV hordozóban', distinguishing: 'Anamnézisben hepatotoxikus szer, HDV RNS negatív' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Bulevirtide (Hepcludex)', dose: '2 mg SC 1x/nap (öninjekciózás)', duration: 'Hosszú távú fenntartó terápia (évekig)', note: 'EASL Első Vonalbeli Szer: Belépésgátló lipopeptid (NTCP receptor gátló). Kompenzált májbetegségben és HDV RNS pozitivitás esetén indítandó.' },
            { drug: 'Peg-IFN alfa-2a', dose: '180 mcg SC 1x/hét', duration: '48 hét', note: 'Off-label alternatíva (ha Bulevirtide nem elérhető); alacsony tartós válaszarány (~20-30%).' }
          ]
        },
        targeted: 'EASL 2023 Irányelv: Bulevirtide 2 mg SC naponta monoterápiában vagy nukleos(t)id analóggal (NA) kombinálva. Mivel a Bulevirtide nem hat közvetlenül a HBV cccDNS-re, az alapvető HBV elleni NA (Tenofovir/Entecavir) kezelést folytatni kell!',
        supportive: ['Szigorú alkoholtilalom', 'Rendszeres HCC szűrés (hasi UH + AFP 6 havonta)', 'Májtranszplantációs konzílium korai lefolyásban'],
        prevention: ['Hepatitis B elleni védőoltás (mivel a HDV terjedéséhez HBsAg szükséges)', 'Biztonságos tűhasználat és vérszűrés'],
        guidelines: [
          'Univerzális Szűrés (EASL 2023): Minden HBsAg-pozitív beteget legalább egyszer szűrni kell Anti-HDV antitestre!',
          'Kezelési Indikáció (Bulevirtide): Krónikus HDV RNS-pozitív felnőtt betegek kompenzált májbetegséggel (akár cirrhosisban is).',
          'Adagolás és Időtartam: Bulevirtide 2 mg S.C. naponta. A kezelést mindaddig folytatni kell, amíg klinikai és virológiai haszon észlelhető (éveken át).',
          'Monitoring: HDV RNS, ALT, HBsAg, epe-sav szintek (a Bulevirtide az NTCP gátlása miatt emeli a szérum epe-savakat, ez ismert és bénult élettani hatás).'
        ],
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis Delta Virus. J Hepatol. 2023;79(2):433-460.',
          'European Medicines Agency (EMA). Hepcludex (bulevirtide) summary of product characteristics.'
        ]
      },
      prognosis: {
        mortality: 'A legmagasabb mortalitású vírushepatitis; kezeletlenül 10-éves cirrhosis kockázat >70%, magas májeredetű halálozás',
        prognostic_scores: ['BEHIND score', 'Child-Pugh és MELD score'],
        factors: 'Szuperinfekció vs koinfekció, HDV RNS perzisztencia, fibroszis stádiuma, Bulevirtide kezelési válasz'
      }
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
        ],
        differential: [
          { disease: 'Egyéb akut vírushepatitisek (HAV, HBV, HCV, CMV, EBV)', distinguishing: 'Azonos tünettan; specifikus szerológia és PCR tesztek alapján különíthető el' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Gyakori mimetikum; HEV RNS és Anti-HEV IgM tesztelés minden feltételezett DILI esetén javasolt az EASL szerint!' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA), szérum IgG, májbiopszia' },
          { disease: 'Ischaemiás/Toxikus hepatitis', distinguishing: 'Keringési anamnézis, gomba- vagy paracetamol toxicity' }
        ]
      },
      therapy: {
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
        prevention: ['Sertéshús, máj és vadhús alapos hőkezelése (>70°C)', 'Vérkészítmények HEV RNS szűrése magas kockázatú populációnak', 'HEV 239 vakcina (Hecolin) jelenleg csak Kínában engedélyezett'],
        guidelines: [
          'Diagnózis immunszuppresszióban: A szerológia megbízhatatlan (álnegatív); HEV RNS (RT-PCR) vizsgálat kötelező.',
          'DILI kizárása: Minden feltételezett gyógyszer-indukált májkárosodás (DILI) esetén kötelező az HEV szűrés (Anti-HEV IgM és HEV RNS).',
          'Krónikus HEV definíció (EASL): Szervtranszplantált vagy immunszupprimált betegekben a HEV RNS perzisztenciája >3 hónapig.',
          'Krónikus HEV kezelése: 1. Immunszuppresszió csökkentése. 2. Ribavirin monoterápia 12 hétig (szükség esetén 24 hétre kiterjesztve).',
          'Súlyos akut HEV / ACLF: Ribavirin (600–1000 mg/nap) 21–30 napos adása megfontolandó a májelégtelenség kivédésére.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis E Virus Infection (Journal of Hepatology).',
          'WHO. Hepatitis E fact sheet.'
        ]
      },
      prognosis: {
        mortality: 'Általában alacsony (<1%); terheseknél (G1/G2) akár 20–25%, krónikus HEV esetén cirrhosis progresszió',
        factors: 'Terhesség (G1/G2), immunszuppresszió mértéke, meglévő krónikus májbetegség/cirrhosis'
      }
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
        prevention: ['Vérkészítmények rutinszerű HPgV-1 szűrése nem indokolt. Standard infekciókontroll.'],
        references: [
          'Stapleton JT, et al. HPgV-1 (GBV-C) infection and pathogenesis. Nat Rev Microbiol.',
          'EASL & CDC Clinical Guidelines on Viral Hepatitis misnomers and Anelloviridae/Pegivirus.'
        ]
      },
      prognosis: {
        mortality: 'Májbetegség szempontjából nem patogén (nulla mortalitás).',
        prognostic_scores: [],
        factors: 'HIV koinfekció esetén kedvező prognosztikai tényező a HPgV-1 perzisztencia.'
      }
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
};
