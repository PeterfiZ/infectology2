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
      pathogen: { type: 'Vírus', name: '<i>Hepatitis A vírus</i> (HAV)', gram: 'ssRNS, Picornaviridae', shape: 'ikozahidrális' },
      epidemiology: {
        incidence: 'Endémiás területeken magas, fejlett országokban sporadikus/járványos',
        risk_groups: ['Utazók', 'MSM', 'Intravénás droghasználók', 'Hajléktalanok'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális (szennyezett víz, élelmiszer), szexuális (orális-anális)'
      },
      pathomechanism: {
        steps: [
          'Orális bejutás: A vírus a bélrendszerből felszívódva a portális keringéssel jut a májba.',
          'Hepatocyta fertőzés: A vírus a HAVCR-1 receptoron keresztül jut be a májsejtekbe, ahol a citoplazmában replikálódik, de nem okoz direkt sejtpusztulást (nem citopatikus).',
          'Immunválasz: A májsejt-károsodást a szervezet saját celluláris immunválasza (CD8+ citotoxikus T-sejtek és NK sejtek) okozza, amelyek elpusztítják a fertőzött hepatocytákat.',
          'Ürítés: A vírus az epével a székletbe ürül, már a tünetek megjelenése előtt.'
        ],
        virulence_factors: ['Kapszid stabilitás (saválló)', 'Membránburok a vérben (eHAV) - immunelkerülés']
      },
      clinical: {
        incubation: '15-50 nap (átlag 28 nap)',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Prodroma', description: 'Influenzaszerű tünetek (láz, fejfájás, izomfájdalom) előzik meg a hasi panaszokat (akár 12-24 órával).', severity: 'moderate' },
          { name: 'Icterusos fázis', description: 'Sötét vizelet (bilirubinuria), világos széklet, majd sárgaság (bőr, sclera). A láz ekkorra gyakran megszűnik.', severity: 'moderate' },
          { name: 'Hasi panaszok', description: 'Jobb bordaív alatti tompa fájdalom, hepatomegalia, hányinger.', severity: 'mild' }
        ],
        physical_exam: [
          'Icterus (sclera, bőr)',
          'Hepatomegalia, érzékeny máj',
          'Splenomegalia (ritka)',
          'Exanthema (ritka)'
        ],
        complications: ['Fulmináns hepatitis (<1%, idősebbeknél gyakoribb)', 'Kolesztatikus hepatitis (elhúzódó)', 'Relapszus (3-20%)', 'NINCS krónikus hordozás']
      },
      diagnostics: {
        laboratory: [
          { test: 'Májenzimek', finding: 'ALT/AST >1000 U/L', interpretation: 'Akut hepatocelluláris nekrózis' },
          { test: 'Bilirubin', finding: 'Emelkedett (direkt és indirekt)', interpretation: 'Icterus' },
          { test: 'ALP/GGT', finding: 'Mérsékelten emelkedett', interpretation: 'Kolesztázis esetén magasabb' }
        ],
        imaging: [
          { modality: 'Has UH', finding: 'Hepatomegalia, epehólyag fal megvastagodás', significance: 'Nem specifikus' }
        ],
        microbiology: [
          { test: 'Anti-HAV IgM', finding: 'Pozitív', significance: 'Akut fertőzés diagnózisa (3-6 hónapig marad +)' },
          { test: 'Anti-HAV IgG', finding: 'Pozitív', significance: 'Védettség (oltás vagy átvészelés)' },
          { test: 'HAV RNS (PCR)', finding: 'Pozitív', significance: 'Viremia (ritkán szükséges)' }
        ],
        differential: [
          { disease: 'Egyéb vírushepatitisek (HBV, HCV, HEV)', distinguishing: 'Szerológia (HBsAg, Anti-HCV, Anti-HEV)' },
          { disease: 'Toxikus/Gyógyszer-indukált hepatitis', distinguishing: 'Anamnézis (paracetamol, gomba), toxikológia' },
          { disease: 'Epeúti elzáródás (Choledocholithiasis)', distinguishing: 'Hasi UH (tágult epeutak), ALP/GGT dominancia, colica' },
          { disease: 'EBV/CMV mononucleosis', distinguishing: 'Torokfájás, lymphadenopathia, monospot/szerológia' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA), IgG emelkedés' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Szupportív', dose: '-', duration: '-', note: 'Pihenés, megfelelő kalória, alkohol tilalom' }
          ],
          inpatient: [
            { drug: 'Szupportív', dose: '-', duration: '-', note: 'Súlyos hányás, dehidráció vagy koagulopátia esetén' }
          ],
          icu: [
            { drug: 'Májtranszplantáció', dose: 'Listázás', duration: '', note: 'Fulmináns májelégtelenség esetén' }
          ]
        },
        targeted: 'Nincs specifikus antivirális szer.',
        supportive: ['Folyadékpótlás', 'Antiemetikumok', 'Alkohol és hepatotoxikus szerek kerülése'],
        prevention: ['Vakcináció (inaktivált, 2 dózis)', 'Higiénia (kézmosás)', 'Post-expozíciós profilaxis (vakcina vagy IG 2 héten belül)'],
        guidelines: [
          'Diagnózis: Akut hepatitis gyanúja esetén májenzimek (ALT/AST), bilirubin, ALP/GGT, INR vizsgálat szükséges.',
          'Diagnózis: Az Anti-HAV IgM pozitív eredménye igazolja az akut HAV fertőzést.',
          'Kezelés: Alapvetően szupportív kezelés. Hospitalizáció javasolt súlyos dehidratáció, koagulopátia vagy fulmináns májkárosodás esetén.',
          'Post-expozíciós profilaxis: Expozíció után 2 héten belül vakcina adása (ha korábban nem oltott) vagy immunglobulin (IG) mérlegelendő.',
          'Prevenció: Oltás (2 dózis: 0 és 6–12 hónap), előzetes oltás utazás előtt 2 héttel optimális.'
        ],
        references: [
          'WHO. Hepatitis A fact sheet.',
          'CDC Yellow Book: Hepatitis A.'
        ]
      },
      prognosis: {
        mortality: 'Alacsony (<0.1%), de 50 év felett 1.8%',
        prognostic_scores: ['King\'s College kritériumok (fulmináns)'],
        factors: 'Életkor, alap májbetegség'
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
      pathogen: { type: 'Vírus', name: '<i>Hepatitis B vírus</i> (HBV)', gram: 'dsDNS (RT), Hepadnaviridae', shape: 'gömb (Dane-partikula)' },
      epidemiology: {
        incidence: 'Világszerte 290 millió krónikus hordozó',
        risk_groups: ['IV droghasználók', 'Szexuális partnerek', 'Eü. dolgozók', 'Dializáltak', 'Perinatális (anya-gyermek)'],
        seasonality: 'Nincs',
        transmission: 'Parenterális (vér), szexuális, perinatális'
      },
      pathomechanism: {
        steps: [
          'Bejutás és Replikáció: A vírus a véráramból az NTCP receptoron keresztül jut a májsejtekbe. A sejtmagban cccDNS-t (kovalensen zárt cirkuláris DNS) képez, ami a perzisztencia alapja.',
          'Immunpatogenezis: A vírus önmagában nem citopatikus. A májkárosodást a fertőzött sejtek ellen irányuló citotoxikus T-sejtes immunválasz okozza.',
          'Krónikussá válás: Ha az immunválasz nem elég erős (pl. újszülöttek), a vírus perzisztál. A vírus DNS integrálódhat a gazdasejt genomjába, növelve a hepatocelluláris carcinoma (HCC) kockázatát.'
        ],
        virulence_factors: ['HBsAg (decoy)', 'HBeAg (immuntolerancia)', 'X protein (transzaktivátor)']
      },
      clinical: {
        incubation: '45-160 nap (átlag 90 nap)',
        onset: 'Lassú',
        symptoms: [
          { name: 'Akut fázis', description: 'Gyakran tünetmentes. Ha van tünet: szérumbetegség-szerű prodroma (kiütés, ízületi fájdalom), majd sárgaság, fáradtság, jobb felhasi fájdalom.', severity: 'moderate' },
          { name: 'Krónikus fázis', description: 'Többnyire tünetmentes ("csendes gyilkos"). Késői stádiumban a májcirrhosis jelei (ascites, varixvérzés, encephalopathia) dominálnak.', severity: 'mild' },
          { name: 'Extrahepatikus tünetek', description: 'Polyarteritis nodosa, glomerulonephritis.', severity: 'moderate' }
        ],
        physical_exam: [
          'Hepatomegalia',
          'Splenomegalia',
          'Póknaevusok, palmaris erythema (krónikus/cirrhosis)',
          'Ascites, caput medusae (dekompenzált cirrhosis)'
        ],
        complications: ['Krónikus hepatitis (csecsemőknél 90%, felnőtteknél <5%)', 'Cirrhosis', 'Hepatocellularis carcinoma (HCC)', 'Polyarteritis nodosa', 'Glomerulonephritis']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT/AST', finding: 'Emelkedett', interpretation: 'Gyulladás aktivitása' }
        ],
        microbiology: [
          { test: 'HBsAg', finding: 'Pozitív', significance: 'Fertőzés jelenléte (akut vagy krónikus)' },
          { test: 'Anti-HBs', finding: 'Pozitív', significance: 'Védettség (oltás vagy gyógyulás)' },
          { test: 'Anti-HBc IgM', finding: 'Pozitív', significance: 'Akut fertőzés (ablakperiódusban fontos!)' },
          { test: 'Anti-HBc IgG', finding: 'Pozitív', significance: 'Átvészelt vagy krónikus fertőzés' },
          { test: 'HBeAg', finding: 'Pozitív', significance: 'Magas replikáció és fertőzőképesség' },
          { test: 'HBV DNS', finding: 'Pozitív', significance: 'Vírusreplikáció mértéke (terápia monitorozás)' }
        ],
        differential: [
          { disease: 'Egyéb vírushepatitisek (HAV, HCV, HDV)', distinguishing: 'Szerológia (Anti-HAV IgM, Anti-HCV, Anti-HDV)' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek (ANA, ASMA, LKM-1), hypergammaglobulinaemia' },
          { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST > ALT (2:1 arány), GGT emelkedés' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Gyógyszer anamnézis, javulás elhagyás után' },
          { disease: 'Wilson-kór', distinguishing: 'Fiatal kor, alacsony cöruloplazmin, Kayser-Fleischer gyűrű' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Entecavir', dose: '0.5 mg PO 1x/nap', duration: 'Hosszú távú', note: 'Nukleozid analóg. Lamivudin rezisztencia esetén 1 mg.' },
            { drug: 'Tenofovir disoproxil (TDF)', dose: '300 mg PO 1x/nap', duration: 'Hosszú távú', note: 'Nukleotid analóg. Vesefunkció és csontsűrűség monitorozása szükséges.' },
            { drug: 'Tenofovir alafenamide (TAF)', dose: '25 mg PO 1x/nap', duration: 'Hosszú távú', note: 'Preferált, ha csont/vese betegség kockázata áll fenn.' }
          ],
          inpatient: [
            { drug: 'Tenofovir (TDF/TAF) vagy Entecavir', dose: 'Standard', duration: '', note: 'Súlyos akut hepatitis vagy akut májelégtelenség esetén azonnal indítandó.' }
          ]
        },
        targeted: 'Krónikus HBV: Élethosszig tartó NA (Entecavir, TDF, TAF) a vírusreplikáció gátlására. Véges idejű kezelés: Peg-IFN alfa (48 hét) válogatott betegeknél.',
        supportive: ['HCC szűrés (UH félévente)', 'Vakcináció HAV ellen', 'Családtagok szűrése'],
        prevention: ['Vakcináció (rekombináns HBsAg, 0-1-6 hó)', 'Szűrés terhességben', 'HBIG + vakcina újszülötteknek (≤12 óra; oltási sorozat folytatása)'],
        guidelines: [
          'Definíciók: Akut HBV (HBsAg+ és Anti-HBc IgM+), Krónikus HBV (HBsAg+ >6 hó).',
          'Kezelési indikáció: Krónikus hepatitis (ALT emelkedett + HBV DNS >2000 IU/ml + fibrosis) VAGY Cirrhosis.',
          'Terhesség: TDF adása a 24-28. héttől, ha HBV DNS >200,000 IU/ml.',
          'Monitoring: NA kezelés alatt ALT és HBV DNS 3-6 havonta; HCC szűrés UH-val ± AFP minden 6 hónapban cirrhosis esetén.'
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398.',
          'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
        ]
      },
      prognosis: {
        mortality: 'Akut: <1%; Krónikus: cirrhosis/HCC miatt jelentős',
        prognostic_scores: ['PAGE-B (HCC rizikó)'],
        factors: 'HBeAg státusz, virális load, genotípus, koinfekciók'
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
      pathogen: { type: 'Vírus', name: '<i>Hepatitis C vírus</i> (HCV)', gram: 'ssRNS, Flaviviridae', shape: 'gömb, burokban' },
      epidemiology: {
        incidence: 'Világszerte 71 millió krónikus beteg',
        risk_groups: ['IV droghasználók', 'Transzfúzió (1992 előtt)', 'Tetoválás/piercing', 'Eü. dolgozók (tűszúrás)'],
        seasonality: 'Nincs',
        transmission: 'Parenterális (vér), szexuális (ritka, MSM magasabb), perinatális'
      },
      pathomechanism: {
        steps: [
          'Replikáció: A vírus a hepatocyták citoplazmájában replikálódik (nincs sejtmagi fázis, ezért gyógyítható).',
          'Immunelkerülés: A vírus RNS-polimeráza hibázik, így folyamatosan mutálódik (quasispecies), elkerülve az immunrendszer felismerését.',
          'Fibrózis: A krónikus gyulladás aktiválja a csillagsejteket (stellate cells), amelyek kollagént termelnek, ami májfibrózishoz, majd cirrhosisoz vezet.'
        ],
        virulence_factors: ['NS3/4A proteáz', 'NS5A/B polimeráz', 'Lipid metabolizmus moduláció']
      },
      clinical: {
        incubation: '14-180 nap',
        onset: 'Lassú/Tünetmentes',
        symptoms: [
          { name: 'Akut fázis', description: 'Ritkán diagnosztizálják (80% tünetmentes). Enyhe fáradtság, étvágytalanság előfordulhat.', severity: 'mild' },
          { name: 'Krónikus fázis', description: 'Évtizedekig tünetmentes lehet. A vezető tünet a krónikus fáradtság. Gyakran csak a cirrhosis szövődményei vagy a laborlelet hívja fel rá a figyelmet.', severity: 'moderate' },
          { name: 'Extrahepatikus tünetek', description: 'Krioglobulinémia (vasculitis), porphyria cutanea tarda, lichen planus, diabetes.', severity: 'moderate' }
        ],
        physical_exam: [
          'Gyakran negatív',
          'Cirrhosis jelei késői stádiumban'
        ],
        complications: ['Krónikus hepatitis (70-80%!)', 'Cirrhosis (20-30% 20 év alatt)', 'HCC', 'Extrahepatikus: Krioglobulinémia, Porphyria cutanea tarda, Lichen planus, Diabetes']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT', finding: 'Hullámzóan emelkedett', interpretation: 'Krónikus gyulladás' }
        ],
        microbiology: [
          { test: 'Anti-HCV', finding: 'Pozitív', significance: 'Expozíció (nem feltétlenül aktív fertőzés)' },
          { test: 'HCV RNS', finding: 'Pozitív', significance: 'Aktív fertőzés (konfirmálás szükséges!)' },
          { test: 'Genotipizálás', finding: '1-6', significance: 'Terápia választás (bár pangenotípusos szerek dominálnak)' }
        ],
        differential: [
          { disease: 'Hepatitis B', distinguishing: 'HBsAg pozitív' },
          { disease: 'Alkoholos májbetegség', distinguishing: 'Anamnézis, AST > ALT, makrocitózis' },
          { disease: 'Nem-alkoholos zsírmáj (NAFLD/NASH)', distinguishing: 'Metabolikus szindróma, UH (steatosis), biopszia' },
          { disease: 'Autoimmun hepatitis', distinguishing: 'Autoantitestek, szövettan (plazmasejtes infiltráció)' },
          { disease: 'Hemochromatosis', distinguishing: 'Magas ferritin, transzferrin szaturáció, HFE génmutáció' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tab (300/120mg) PO 1x', duration: '8 hét', note: 'Pangenotípusos. Cirrhosis nélkül és kompenzált cirrhosisban is 8 hét.' },
            { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tab (400/100mg) PO 1x', duration: '12 hét', note: 'Pangenotípusos. Decompensált cirrhosisban is adható (RBV-vel).' }
          ]
        },
        targeted: 'Pangenotípusos DAA kezelés minden betegnek (Simplified treatment). Genotipizálás nem feltétlenül szükséges a kezelés indításához (kivéve cirrhosis/korábbi sikertelen kezelés).',
        supportive: ['Gyágyszerinterakciók ellenőrzése (www.hep-druginteractions.org)', 'Alkohol tilalom'],
        prevention: ['Nincs vakcina', 'Vérkészítmények szűrése', 'Ártalomcsökkentés (tűcsere)', 'Biztonságos szex'],
        guidelines: [
          'Szűrés: Anti-HCV pozitív eredmény után kötelező a HCV RNS vizsgálat az aktív fertőzés igazolására.',
          'Kezelés: Minden krónikus HCV beteg kezelendő, kivéve terhesség vagy rövid élettartamú társbetegség.',
          'Első vonal: Glecaprevir/Pibrentasvir (8 hét) vagy Sofosbuvir/Velpatasvir (12 hét).',
          'SVR12: HCV RNS negatív 12 héttel a kezelés után = Tartós Virológiai Válasz (Gyógyulás).'
        ],
        references: [
          'EASL Recommendations on Treatment of Hepatitis C (2020 update).',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ]
      },
      prognosis: {
        mortality: 'Kezeléssel kiváló (SVR = gyógyulás), cirrhosis esetén rosszabb',
        factors: 'Fibrózis stádiuma, koinfekció (HIV/HBV), alkohol'
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
      pathogen: { type: 'Vírus', name: '<i>Hepatitis D vírus</i> (HDV)', gram: 'ssRNS (defektív)', shape: 'HBsAg burokban' },
      epidemiology: {
        incidence: 'HBV fertőzöttek 5%-a (kb. 15-20 millió)',
        seasonality: 'Nincs',
        risk_groups: ['HBV fertőzöttek', 'IV droghasználók', 'Szexuális partnerek', 'Eü. dolgozók'],
        transmission: 'Parenterális, szexuális (mint HBV). Csak HBV jelenlétében fertőz!'
      },
      pathomechanism: {
        steps: [
          'Defektív vírus: A replikációhoz és a fertőző részecskék képzéséhez a Hepatitis B vírus felszíni antigénjére (HBsAg) van szüksége.',
          'Koinfekció: HBV és HDV egyszerre fertőz. Általában súlyos akut hepatitist okoz, de a krónikussá válás ritka (<5%).',
          'Szuperinfekció: Krónikus HBV hordozó fertőződil HDV-vel. Ez a legsúlyosabb forma, gyakran fulmináns lefolyású vagy gyorsan progrediáló cirrhosisba torkollik.'
        ],
        virulence_factors: ['Delta-antigén (HDAg)']
      },
      clinical: {
        incubation: '30-60 nap',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Súlyosbodás', description: 'Ismert HBV beteg állapotának hirtelen romlása (akut fellángolás).', severity: 'severe' },
          { name: 'Dekompenzáció', description: 'Gyorsan kialakuló májelégtelenség, sárgaság, coagulopathia.', severity: 'severe' }
        ],
        complications: ['Fulmináns hepatitis', 'Gyors progresszió cirrhosisba (legagresszívebb vírushepatitis)']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT/AST', finding: 'emelkedett', interpretation: 'Akut fellángolás' }
        ],
        microbiology: [
          { test: 'Anti-HDV', finding: 'Pozitív', significance: 'Szűrés minden HBV betegnél' },
          { test: 'HDV RNS', finding: 'Pozitív', significance: 'Aktív replikáció' }
        ],
        differential: [
          { disease: 'HBV koinfekció', distinguishing: 'HDV RNS pozitív, Anti-HDV pozitív' },
          { disease: 'Akut HBV fellángolás', distinguishing: 'HDV RNS negatív, Anti-HDV negatív' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Bulevirtide', dose: '2 mg SC naponta', duration: 'Hosszú távú', note: 'Belépés gátló. Monoterápia vagy Peg-IFN kombináció.' },
            { drug: 'Peg-IFN alfa', dose: '180 mcg SC hetente', duration: '48 hét', note: 'Alternatíva, de alacsony tartós válaszarány.' }
          ]
        },
        targeted: 'Bulevirtide (hosszú távú fenntartó kezelés) vagy Peg-IFN (48 hét).',
        supportive: ['Nukleozid analógok folytatása (HBV elnyomására)'],
        prevention: ['HBV vakcináció (mivel a HDV terjedéséhez HBsAg szükséges)'],
        guidelines: [
          'Szűrés: Minden HBsAg pozitív beteget legalább egyszer szűrni kell anti-HDV-re.',
          'Kezelés: Bulevirtide 2mg SC naponta indítandó kompenzált májbetegség és aktív HDV replikáció esetén.',
          'Monitoring: HDV RNS, ALT, HBsAg követése javasolt.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on hepatitis delta virus (2023).',
          'WHO. Hepatitis D resources.'
        ]
      },
      prognosis: {
        mortality: 'Magas, gyors cirrhosis progresszió',
        factors: 'Szuperinfekció rosszabb prognózisú'
      }
    },
    {
      id: 'hev',
      name: 'Hepatitis E',
      pathogen: { type: 'Vírus', name: '<i>Hepatitis E vírus</i> (HEV)', gram: 'ssRNS, Hepeviridae', shape: 'ikozahidrális' },
      epidemiology: {
        incidence: 'Fejlődő országok (víz), Fejlett (sertés/vad)',
        risk_groups: ['Terhesek (súlyos lefolyás)', 'Immunszupprimáltak (krónikus)', 'Májbetegek', 'Sertésgondozók'],
        seasonality: 'Esős évszak (trópusokon)',
        transmission: 'Feko-orális (víz - Genotípus 1,2), Zoonózis (nyers sertés/vadhús - Genotípus 3,4)'
      },
      pathomechanism: {
        steps: [
          'Bejutás: Feko-orális (szennyezett víz - 1., 2. genotípus) vagy zoonózis (nyers hús - 3., 4. genotípus) útján.',
          'Terhesség: Terheseknél (főleg 3. trimeszter) a vírus fulmináns májelégtelenséget okozhat, valószínűleg hormonális és immunológiai változások miatt (20% mortalitás).',
          'Krónikussá válás: Immunszupprimált betegekben (pl. transzplantáltak) a vírus nem eliminálódik, krónikus hepatitist és fibrosist okozva.'
        ],
        virulence_factors: ['ORF3 protein (kiszabadulás)', 'Kapszid protein']
      },
      clinical: {
        incubation: '15-60 nap (átlag 40)',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Akut hepatitis', description: 'Hasonló a HAV-hoz (láz, sárgaság, hányás).', severity: 'moderate' },
          { name: 'Neurológiai tünetek', description: 'Gyakrabban társul neurológiai szövődményekkel (Guillain-Barré szindróma, neuralgiás amyotrophia).', severity: 'severe' },
          { name: 'Terhességben', description: 'Súlyos, életveszélyes májelégtelenség jelei.', severity: 'severe' }
        ],
        physical_exam: ['Icterus', 'Hepatomegalia'],
        complications: ['Fulmináns hepatitis terheseknél (20% mortalitás! - G1,2)', 'Krónikus hepatitis immunszupprimáltakban (G3)', 'Neurológiai tünetek (Guillain-Barré, Neuralgiás amyotrophia)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Májenzimek', finding: 'ALT/AST emelkedett', interpretation: 'Hepatitis' }
        ],
        imaging: [
          { modality: 'Has UH', finding: 'Hepatomegalia', significance: 'Nem specifikus' }
        ],
        microbiology: [
          { test: 'Anti-HEV IgM', finding: 'Pozitív', significance: 'Akut fertőzés' },
          { test: 'HEV RNS', finding: 'Pozitív', significance: 'Konfirmálás, krónikus eset' }
        ],
        differential: [
          { disease: 'Hepatitis A', distinguishing: 'Szerológia (Anti-HAV IgM)' },
          { disease: 'Gyógyszer-indukált májkárosodás (DILI)', distinguishing: 'Anamnézis (pl. antibiotikumok, NSAID)' },
          { disease: 'Ischaemiás hepatitis', distinguishing: 'Shock, hypotonia anamnézis, LDH extrém emelkedés' },
          { disease: 'Wilson-kór (fulmináns esetben)', distinguishing: 'Hemolízis, alacsony ALP, magas vizelet réz' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Szupportív', dose: '-', duration: '-', note: 'Inkompetens akut fertőzés esetén (önkorlátozó).' }
          ],
          inpatient: [
            { drug: 'Ribavirin', dose: '600-800 mg PO', duration: '12 hét', note: 'Krónikus HEV (immunszupprimáltak) vagy súlyos akut esetek.' }
          ]
        },
        targeted: 'Krónikus HEV (immunszupprimáltak): 1. Immunszuppresszió csökkentése (ha lehet). 2. Ribavirin 12 hétig.',
        supportive: ['Folyadékpótlás', 'Terheseknél szoros monitorozás (fulmináns veszély!)'],
        prevention: ['Élelmiszerbiztonság (sertéshús, vadhús alapos átsütése)'],
        guidelines: [
          'Diagnózis: Anti-HEV IgM/IgG és HEV RNS (vér/széklet) javasolt. Immunszupprimáltaknál a HEV RNS kötelező.',
          'Kezelés: Krónikus HEV esetén (>3 hónap HEV RNS+) az immunszuppresszió csökkentése és Ribavirin 12 hetes kúra javasolt.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on hepatitis E virus infection.',
          'WHO. Hepatitis E fact sheet.'
        ]
      },
      prognosis: {
        mortality: 'Általában alacsony; terheseknél (genotípus 1–2) mortalitás akár 20%',
        factors: 'Terhesség, immunszuppresszió'
      }
    }
  ]
};
