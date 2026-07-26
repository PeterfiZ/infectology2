Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Szexuálisan terjedő fertőzések',
        icon: window.diseaseMetadata.sexually_transmitted.icon,
        color: window.diseaseMetadata.sexually_transmitted.color,
        diseases: [
          {
            id: 'syphilis',
            name: 'Szifilisz (Luesz)',
            pathogen: { type: 'Spirochaeta', name: '<i>Treponema pallidum</i>', gram: 'Gram-negatív (nem festődik, sötétlátótér/ezüstzés)', shape: 'spirális' },
            epidemiology: {
              incidence: 'Növekvő incidencia világszerte; MSM populációban és fiatal felnőttekben kiemelkedő',
              risk_groups: ['MSM (férfiakkal szexuáló férfiak)', 'HIV-pozitívak', 'Szexmunkások', 'Több szexuális partner', 'IV droghasználók'],
              seasonality: 'Nincs',
              transmission: 'Direkt kontaktus fertőző nyálkahártya-/bőrlézióval (szexuális), vertikális (congenitalis luesz), ritkán vértranszfúzió'
            },
            pathomechanism: {
              steps: [
                'Behatolás és Szóródás: A Treponema pallidum mikrosérüléseken keresztül hatol be a bőrbe vagy nyálkahártyába. Percek-órák alatt bejut a nyirokerekbe és a véráramba, így a fertőzés már a primer fekély megjelenése előtt szisztémássá válik.',
                'Immunelkerülés: A baktérium "lopakodó" (stealth pathogen) stratégiát alkalmaz: külső membránja rendkívül kevés antigént tartalmaz, elkerülve az antitestek kötődését és a komplement-aktivációt, ami tartós perzisztenciát tesz lehetővé.',
                'Szöveti károsodás: A patológia alapja az obliteratív endarteritis (kis erek gyulladása és elzáródása), amelyet perivaszkuláris plazmasejtes infiltráció kísér.',
                'Következmény: Az érelzáródás miatti ischaemia okozza a primer sánker fekélyesedését, a szekunder fázis disszeminált bőrtüneteit és a tercier stádium destruktív gummáit, aortitisét, valamint neuroszifiliszét.'
              ],
              virulence_factors: ['Fibronektin-kötő fehérjék', 'Hyaluronidáz', 'Antigén variáció', 'Outer membrane proteins (omps)']
            },
            clinical: {
              incubation: 'Primer: 9-90 nap (átlag 21 nap)',
              onset: 'Fázis-függő',
              symptoms: [
                { name: 'Primer: Chancre (Sánker)', description: 'Fájdalmatlan, kemény alapú, tiszta aljú fekély (ulcus durum) a behatolási kapunál (genitáliák, száj, anus). Jellegzetes a kísérő "indolens" (fájdalmatlan), porckemény nyirokcsomó-duzzanat.', severity: 'moderate' },
                { name: 'Szekunder: Disszemináció', description: '6-8 héttel a sánker után. Generalizált, nem viszkető, rézvörös makulák (tenyéren/talpon is!), nedvedző, lapos szemölcsök (condyloma lata), porcelánfehér nyálkahártya-foltok (plaque opalina) és "moly-rágta" alopecia.', severity: 'moderate' },
                { name: 'Szekunder: Szisztémás jelek', description: 'Láz, torokfájás, generalizált nyirokcsomó-duzzanat ("mikropolyadenopathia"), hepatitis vagy periostitis is előfordulhat.', severity: 'mild' },
                { name: 'Tercier: Destrukció', description: 'Évek múlva: Gumma (destruktív granulómák bőrben, csontban), aortitis (aneurysma), és Neuroszifilisz (tabes dorsalis - ataxia, villámcsapásszerű fájdalom; progresszív paralízis - demencia).', severity: 'severe' }
              ],
              physical_exam: [
                'Primer: fájdalmatlan genitalis/extragenitalis fekély + inguinalis lymphadenopathia',
                'Szekunder: generalizált nem viszkető kiütés (tenyér/talp!), mucous patches, alopecia',
                'Latens: tünetmentes',
                'Tercier: gumma (bőr, csont), szív- vagy idegrendszeri érintettség'
              ],
              complications: ['Neuroszifilisz', 'Kardiovaszkuláris szifilisz (aortitis)', 'Gumma', 'Congenitalis szifilisz', 'HIV koinfekció fokozott rizikó']
            },
            diagnostics: {
              laboratory: [
                { test: 'Non-treponema teszt (RPR/VDRL)', finding: 'Reaktív (titer)', interpretation: 'Szűrés, aktivitás követése, kezelés hatékonyság' },
                { test: 'Treponema-specifikus teszt (TPHA/FTA-ABS)', finding: 'Reaktív', interpretation: 'Megerősítés, életreszólóan pozitív marad' },
                { test: 'Reverz algoritmus', finding: 'EIA/CIA → RPR → TPHA', interpretation: 'Automatizált szűrés' }
              ],
              imaging: [
                { modality: 'MRI agy', finding: 'Neuroszifilisz: meningealis enhancement, infarktusok', significance: 'Neurológiai tünetek esetén' },
                { modality: 'Echo/CT mellkas', finding: 'Aorta dilatáció', significance: 'Kardiovaszkuláris szifilisz' }
              ],
              microbiology: [
                { test: 'Sötét látóteres mikroszkópia', finding: 'Élő spirochaeták primer léziókból', significance: 'Korai diagnózis, de ritkán elérhető' },
                { test: 'PCR', finding: 'T. pallidum DNS', significance: 'Érzékeny, de nem rutinszerű' },
                { test: 'Liquor analízis', finding: 'VDRL pozitív, pleocytosis, fehérje↑', significance: 'Neuroszifilisz diagnózis' }
              ]
            },
            differential: [
              { disease: 'Herpes genitalis', distinguishing: 'Fájdalmas, csoportos hólyagok' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Fájdalmas fekélyek, gennyező nyirokcsomók' },
              { disease: 'Lymphogranuloma venereum', distinguishing: 'Fájdalmas bubó, Chlamydia trachomatis L1-3' },
              { disease: 'Gyógyszerkiütés', distinguishing: 'Gyógyszeranamnézis, tenyér/talp érintettség ritka' },
              { disease: 'Pityriasis rosea', distinguishing: 'Herald patch, karácsonyfa mintázat' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Benzathin-Benzylpenicillin G (Bicillin LA)', dose: '2.4 millió NE IM egyszeri adag', duration: 'Stat', note: 'Korai szifilisz (primer, szekunder, korai latens <1 év)' },
                  { drug: 'Penicillin-allergia alternatíva: Doxycyclin', dose: '2x100mg PO', duration: '14 nap (korai) / 28 nap (késői)', note: 'Alternatíva nem terhes betegeknél (szoros szedési fegyelem szükséges!)' }
                ],
                inpatient: [
                  { drug: 'Benzathin-Benzylpenicillin G', dose: '2.4 millió NE IM heti 1x', duration: '3 héten át (össz. 7.2M NE)', note: 'Késői latens (>1 év), ismeretlen időtartamú latens szifilisz vagy tercier luesz' }
                ],
                icu: [
                  { drug: 'Kristályos Penicillin G', dose: '18-24 millió NE/nap IV (3-4M NE 4 óránként)', duration: '10-14 nap', note: 'Neuroszifilisz és Ocularis/Otosyphilis kezelése!' }
                ]
              },
              targeted: 'A Benzathin-penicillin az elsőként választandó szer minden stádiumban; T. pallidum penicillin-rezisztencia nem ismert.',
              supportive: [
                'Jarisch-Herxheimer reakció: Tájékoztatás a kezelés első 24 órájában fellépő lázas, kiütéses válaszról (lázcsillapítás, NSAID).',
                'Szerológiai követés: RPR/VDRL kvantitatív titer ellenőrzése 3, 6, 12 és 24 hónapnál (elvárt válasz: legalább 4-szeres titercsökkenés).',
                'Partnerértesítés és -kezelés: Az elmúlt 90 nap szexuális partnereit empirikusan kezelni kell Benzathin-penicillinnel még negatív szerológia esetén is!'
              ],
              prevention: [
                'Óvszerhasználat és rendszeres szűrés magas kockázatú populációkban (MSM, HIV-pozitívak).',
                'Doxy-PEP (Doxycycline Post-Exposure Prophylaxis): 200mg Doxycyclin PO a szexuális kontaktust követő 72 órán belül (MSM és transznemű nőknél szifilisz, chlamydia és gonorrhea megelőzésére).',
                'Kötelező prenatalis szűrés terheseknél.'
              ]
            },
            guidelines: {
              diagnosis: [
                'Szűrés: RPR/VDRL (nem-treponema) vagy reverz algoritmus (EIA/CIA).',
                'Megerősítés: TPHA/TPPA/FTA-ABS (treponema-specifikus) tesztekkel.',
                'Neuroszifilisz: Liquor VDRL (specifikus), pleocytosis, fehérje-emelkedés, LCR PCR.'
              ],
              treatment_indications: [
                'Minden igazolt szifiliszes esetet és direkt kontaktust kezelni kell a stádiumnak megfelelően.'
              ],
              first_line: [
                'Korai szifilisz (primer, szekunder, korai latens): Benzathin Penicillin G 2.4 millió NE IM egyszeri adag.',
                'Késői latens vagy tercier szifilisz: Benzathin Penicillin G 2.4 millió NE IM heti 1x, 3 héten át.',
                'Neuroszifilisz: Kristályos Penicillin G 18-24 millió NE/nap IV (3-4 millió NE 4 óránként) 10-14 napig.'
              ],
              special_populations: [
                'Penicillin allergia terhességben: KÖTELEZŐ a kórházi Penicillin deszenzitizálás és Benzathin Penicillin adása! (Doxycyclin terhességben kontraindikált!).',
                'Penicillin allergia nem terhesben: Doxycyclin 2x100mg PO 14 napig (korai) vagy 28 napig (késői) vagy Ceftriaxon 1-2g IV/IM 10-14 napig.',
                'Congenitalis szifilisz: Kristályos Penicillin G 100,000-150,000 NE/kg/nap IV 10 napig.'
              ],
              monitoring: [
                'A kezelés sikerességét a nem-treponema tesztek (RPR/VDRL) titerének csökkenésével követjük (legalább négyszeres csökkenés 6-12 hónapon belül).'
              ],
              references: [
                'CDC STI Treatment Guidelines 2021/2024 Update',
                'IUSTI: European guideline on the management of syphilis, 2020/2024'
              ]
            },
            prognosis: {
              mortality: 'Időben kezelt szifilisz: kiváló; Kezeletlen tercier/neuroszifilisz: maradványtünetek, stroke, elhalálozás',
              prognostic_scores: ['RPR/VDRL kvantitatív titer'],
              factors: 'Stádium, kezelés időzítése, HIV koinfekció, terápia-adherencia'
            }
          },
          {
            id: 'hiv_aids',
            name: 'HIV fertőzés és AIDS',
            pathogen: { type: 'Vírus', name: '<i>Humán Immundeficiencia Vírus</i> (HIV-1, HIV-2)', gram: 'RNS retrovírus', shape: 'gömb' },
            epidemiology: {
              incidence: 'Világszerte ~39 millió élő fertőzött (UNAIDS 2024)',
              risk_groups: ['MSM (férfiakkal szexuáló férfiak)', 'IV droghasználók (PWID)', 'Szexmunkások', 'Transzfúzióban részesültek (fejlődő országok)', 'Kockázatos szexuális partnerek'],
              seasonality: 'Nincs',
              transmission: 'Szexuális (vaginalis, analis, oralis), parenterális (vér, tűszúrás), vertikális (anya-gyermek: terhesség, szülés, szoptatás)'
            },
            pathomechanism: {
              steps: [
                'Bejutás és Kötődés: A vírus gp120 felszíni fehérjéje nagy affinitással kötődik a T-helper (CD4+) sejtek, makrofágok és rejtett fókuszok CD4 receptorához, valamint a CCR5 vagy CXCR4 koreceptorokhoz.',
                'Replikáció és Integráció: A sejtbe jutva a virális RNS a reverz transzkriptáz segítségével DNS-sé íródik át (ez a lépés hibás, magas mutációs rátát és rezisztenciát eredményezhet), majd az integráz enzim beépíti a gazdasejt DNS-ébe (provírus), ahol látens maradhat (rezervóriumok).',
                'Immunrendszer pusztulása: A fertőzött CD4+ T-sejtek elpusztulnak a vírusreplikáció (pirotózis), a citotoxikus T-sejtek támadása és a syncytium képződés miatt. A bél-asszociált limfoid szövet (GALT) korai károsodása krónikus szisztémás gyulladást és translokációt tart fenn.',
                'Következmény: A CD4+ T-sejtek számának kritikus csökkenése (<200/µL) az immunitás összeomlásához és opportunista fertőzések/daganatok (AIDS) megjelenéséhez vezet.'
              ],
              virulence_factors: ['gp120/gp41 (belépés és fúzió)', 'Reverz transzkriptáz (magas mutációs ráta)', 'Integráz (genomba épülés)', 'Nef, Tat, Rev, Vif (regulátorok, immunevázió)']
            },
            clinical: {
              incubation: '2-4 hét (akut retrovirális szindróma)',
              onset: 'Akut (ARS) vagy lappangó',
              symptoms: [
                { name: 'Akut retrovirális szindróma (ARS)', description: 'A fertőzés után 2-4 héttel jelentkező, mononukleózis-szerű tünetegyüttes: magas láz, torokfájás, nyirokcsomó-duzzanat, izom/ízületi fájdalom, fejfájás és makulopapulózus kiütés. Kifejezetten magas vírusszám és átmeneti CD4 csökkenés jellemzi.', severity: 'moderate' },
                { name: 'Klinikai latencia (Aszimptomatikus stádium)', description: 'Tünetmentes vagy tünetszegény időszak, amely kezelés nélkül átlagosan 8-10 évig tarthat. A vírus aktívan replikálódik a nyirokcsomókban. Perzisztáló generalizált lymphadenopathia (PGL) előfordulhat.', severity: 'mild' },
                { name: 'Súlyos előrehaladott HIV (Advanced HIV Disease - AHD) / AIDS', description: 'Amikor a CD4 szám 200/µL alá esik (vagy WHO III/IV stádium). Megjelennek az opportunista fertőzések (pl. Pneumocystis jirovecii pneumonia, nyelőcső candidiasis, Toxoplasma encephalitis, Cryptococcus meningitis, CMV retinitis, diszseminált TBC) és daganatok (Kaposi sarcoma, non-Hodgkin lymphoma, invazív méhnyakrák).', severity: 'severe' }
              ],
              physical_exam: [
                'Generalizált lymphadenopathia (PGL)',
                'Oralis candidiasis (szájpenész) vagy oropharyngealis leukoplakia',
                'Hajas fejbőr seborrhoeás dermatitise, makulopapulózus kiütések',
                'Kaposi sarcoma (lila/barna bőrelváltozások, csomók)',
                'Cachexia (HIV wasting syndrome)'
              ],
              complications: ['Pneumocystis jirovecii pneumonia (PCP)', 'Toxoplasma encephalitis', 'Cryptococcus meningitis', 'CMV retinitis / colitis', 'Diszseminált TBC / MAC', 'Kaposi sarcoma', 'Non-Hodgkin lymphoma', 'HIV encephalopathia / dementia']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4 szám', finding: 'Csökkenő (<200/µL = AHD / AIDS stádium)', interpretation: 'Immunstátusz és opportunista fertőzési kockázat becslése' },
                { test: 'Vérkép és szervfunkciók', finding: 'Lymphopenia, thrombocytopenia, anémia, emelkedett máj/vese értékek', interpretation: 'Szerdtet betegségek es szervkárosodások szűrése' }
              ],
              microbiology: [
                { test: 'Szűrőteszt (4. generációs Ag/Ab kombinált ELISA/ECLIA)', finding: 'p24 antigén és HIV-1/2 antitest pozitív', significance: 'Rövid ablakperiódus (2-3 hét). Ha pozitív, megerősítés szükséges!' },
                { test: 'Megerősítő teszt (HIV-1/HIV-2 differenciáló immunoassay / Western Blot)', finding: 'Pozitív', significance: 'Diagnózis véglegesítése' },
                { test: 'HIV RNS PCR (Viral Load / Vírusterhelés)', finding: 'Kópiaszám/mL', significance: 'Kezdés előtti alapérték, akut fertőzés igazolása és a kezelés hatékonyságának monitorozása' },
                { test: 'Genotípusos rezisztencia vizsgálat (GRT)', finding: 'Pre-treatment rezisztencia mutációk', significance: 'Minden új betegnél ajánlott ART indítása előtt' },
                { test: 'HLA-B*5701 genetikai teszt', finding: 'Pozitív vagy Negatív', significance: 'Kötelező Abacavir (ABC) rendelése előtt (súlyos túlérzékenységi reakció megelőzése!)' },
                { test: 'AHD Szűrés (CD4 <200/µL esetén)', finding: 'Szérum CrAg LFA (Cryptococcus antigén) + Vizelet TB-LAM', significance: 'Rejtett kriptokokkózis és TBC azonnali kimutatása' }
              ]
            },
            differential: [
              { disease: 'Mononukleózis (EBV / CMV)', distinguishing: 'Heterofil antitest pozitív, atípusos lymphocyták, HIV Ag/Ab negatív' },
              { disease: 'Influenza / COVID-19', distinguishing: 'Légúti tünetek dominálnak, PCR tesztek' },
              { disease: 'Másodlagos szifilisz', distinguishing: 'Szerológia (TPHA/RPR), tenyér/talp papulosus kiütések' }
            ],
            therapy: {
              guidelines: ['EACS Guidelines Version 12.1 (2024)', 'IAS-USA 2024', 'WHO Guidelines 2023/2024'],
              empirical: {
                drug_classes: {
                  title: 'Antiretrovirális gyógyszercsoportok (ART)',
                  drugs: [
                    { drug: 'INSTI (Integráz-transzfer inhibitorok)', dose: '-', duration: '-', note: 'Legmagasabb rezisztencia-gát, leggyorsabb vírusszám csökkenés (Bictegravir, Dolutegravir, Cabotegravir, Raltegravir)' },
                    { drug: 'NRTI (Nukleozid/Nukleotid RT inhibitorok)', dose: '-', duration: '-', note: 'Tenofovir-alafenamid (TAF), Tenofovir-disoproxil (TDF), Emtricitabin (FTC), Lamivudin (3TC), Abacavir (ABC)' },
                    { drug: 'NNRTI (Nem-nukleozid RT inhibitorok)', dose: '-', duration: '-', note: 'Doravirin (DOR), Rilpivirin (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Proteáz inhibitorok)', dose: '-', duration: '-', note: 'Darunavir (DRV), Atazanavir (ATV) - boosterrel (Ritonavir/Cobicistat)' },
                    { drug: 'Kapszid inhibitor (Új osztály)', dose: '-', duration: '-', note: 'Lenacapavir (LEN) - 6 havonta adható szubkután injekció MDR HIV esetén' }
                  ]
                },
                combinations: {
                  title: 'Első vonalbeli kezelési stratégiák',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI (3-gyógyszeres kombináció)', dose: '-', duration: '-', note: 'Standard arany standard (pl. BIC/TAF/FTC vagy DTG + TAF/FTC)' },
                    { drug: '1 NRTI + 1 INSTI (2-gyógyszeres kombináció)', dose: '-', duration: '-', note: 'Dolutegravir + Lamivudin (DTG/3TC) - első vonalban is, bizonyos kritériumok mellett!' },
                    { drug: 'Hosszú hatású injekciós ART (Long-Acting Injectable)', dose: '-', duration: '-', note: 'Cabotegravir + Rilpivirin (CAB/RPV) 2 havonta IM injekcióban (szuppresszált betegeknél váltásra)' }
                  ]
                },
                regimens: {
                  title: 'Preferált konkrét rezsimek (EACS 12.1)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofovir-alafenamid (TAF) / Emtricitabin (FTC)', dose: '1 tab (50/25/200mg) PO 1x/nap', duration: 'Élethosszig', note: 'Elsőként választandó STR (Single Tablet Regimen). Nem igényel HLA tesztet, magas rezisztenciagát.' },
                    { drug: 'Dolutegravir + Tenofovir (TDF vagy TAF) + Emtricitabin (FTC) / Lamivudin (3TC)', dose: '50mg DTG + 1 tab TAF/FTC PO 1x/nap', duration: 'Élethosszig', note: 'Preferált első vonal.' },
                    { drug: 'Dolutegravir / Lamivudin (3TC)', dose: '1 tab (50/300mg) PO 1x/nap', duration: 'Élethosszig', note: 'Preferált 2-gyógyszeres STR (FELTÉTEL: Vírusterhelés <500.000 kópia/mL, nincs HBsAg+ HBV koinfekció, nincs ismert NRTI/INSTI rezisztencia).' },
                    { drug: 'Dolutegravir / Abacavir / Lamivudin (DTG/ABC/3TC)', dose: '1 tab (50/600/300mg) PO 1x/nap', duration: 'Élethosszig', note: 'Kizárólag HLA-B*5701 NEGATÍV ÉS HBsAg NEGATÍV betegeknek!' },
                    { drug: 'Cabotegravir + Rilpivirin (CAB/RPV IM injekció)', dose: 'IM injekció 2 havonta (vagy havi 1x)', duration: 'Élethosszig', note: 'Váltó terápia stabilan szuppresszált (<50 kópia/mL) betegeknek, akinél nincs korábbi terápiahiba/rezisztencia.' }
                  ]
                }
              },
              targeted: 'Gyors ART indítás (Rapid / Same-day Initiation): Az ART-t a diagnózis napján vagy amilyen gyorsan csak lehet el kell indítani minden fertőzöttnél! Cél: Mérhetetlen vírusterhelés (Undetectable: <50 kópia/mL) elérése és fenntartása.',
              supportive: [
                'Opportunista fertőzések profilaxisa: PCP profilaxis (TMP/SMX 960mg/nap vagy 3x/hét) ha CD4 <200/µL. Toxoplasma profilaxis (TMP/SMX 960mg/nap) ha CD4 <100/µL és Toxoplasma IgG+.',
                'Primer MAC (Mycobacterium avium) profilaxis: Az új irányelvek alapján RUTINSZERŰEN MÁR NEM JAVALLOTT a gyors ART indítás érájában (még CD4 <50 esetén sem)!',
                'Védőoltások: Pneumococcus (PCV20/PCV15 + PPSV23), Influenza (évente), HBV, HAV, HPV, Meningococcus, VZV/Zoster (szubkután RZV oltás javasolt). Élő gyengített oltások (pl. MMR, VZV) KONTRAINDIKÁLTAK, ha CD4 <200/µL!'
              ],
              prevention: [
                'U=U (Undetectable = Untransmittable / Mérhetetlen = Fertőzhetetlen): A stabilan mérhetetlen vírusterhelésű (<50 kópia/mL legalább 6 hónapja) HIV-pozitív személy szexuális úton NEM adja át a vírust!',
                'PrEP (Pre-Exposure Prophylaxis / Expozíció előtti megelőzés): Orális TDF/FTC vagy TAF/FTC naponta 1x (vagy eseményvezérelt "2-1-1" TDF/FTC MSM-ben). Hosszú hatású injekciós PrEP: Cabotegravir LA (2 havonta IM) vagy Lenacapavir (6 havonta SC).',
                'PEP (Post-Exposure Prophylaxis / Expozíció utáni megelőzés): <72 órán belül (ideálisan <24h) indítandó 28 napig. Preferált: TDF/FTC (vagy TAF/FTC) + Dolutegravir (vagy Bictegravir vagy Raltegravir).',
                'PMTCT (Anya-gyermek átvitel megelőzése): Várandósok szűrése, azonnali ART (DTG-alapú), szülés alatti VL alapján hüvelyi szülés vs. császármetszés, újszülött post-exposure profilaxis.'
              ]
            },
            guidelines: {
              diagnosis: [
                'Szűrés: 4. generációs Ag/Ab kombinált teszt (p24 antigén + antitest).',
                'Megerősítés: HIV-1/2 differenciáló teszt / Western blot.',
                'Kezdés előtti baseline: CD4 szám, HIV RNS vírusterhelés, Genotípusos rezisztencia vizsgálat (GRT), HLA-B*5701 (Abacavir előtt), HBV és HCV szerológia, Luesz és egyéb STD szűrés.',
                'AHD diagnosztikus csomag (CD4 <200/µL): CrAg LFA (kriptokokkózis) és vizelet TB-LAM (TBC).'
              ],
              treatment_indications: [
                'Treat All / Same-Day ART: Minden HIV-fertőzött személynek javasolt az ART azonnali/mielőbbi indítása, függetlenül a CD4 számtól.',
                'Kivétel az azonnali indítás alól: Központi idegrendszeri TBC meningitis vagy Cryptococcus meningitis esetén az ART indítását 2-6 héttel el kell halasztani az életveszélyes Koponyaűri IRIS (Immune Reconstitution Inflammatory Syndrome) megelőzésére!'
              ],
              first_line: [
                '1. Bictegravir / TAF / FTC (BIC/TAF/FTC - STR)',
                '2. Dolutegravir + TAF/FTC vagy TDF/FTC',
                '3. Dolutegravir / Lamivudin (DTG/3TC - 2-gyógyszeres STR, ha VL <500k és HBV-negatív)',
                '4. Dolutegravir / ABC / 3TC (ha HLA-B*5701 negatív és HBV-negatív)'
              ],
              monitoring: [
                'Vírusterhelés (Viral Load): 1, 3 és 6 hónapnál az ART indítása/váltása után, majd stabil esetben 6 havonta. Cél: <50 kópia/mL.',
                'CD4 szám: Kezdetben 3-6 havonta, ha VL <50 és CD4 >350 legalább 1-2 éve, a rutin CD4 monitorozás elhagyható.'
              ],
              special_populations: [
                'Terhesség: DTG-alapú rezsimek preferáltak (a korábbi neuralis csőzáródási rendellenesség rizikó nem igazolódott clinically significantnek).',
                'TB koinfekció: TBC kezelés elindítása után az ART-t 2 héten belül kell indítani (ha CD4 <50) vagy 2-8 héten belül. Rifampicin mellett a Dolutegravir dózisát napi 2x50mg-ra kell emelni!'
              ]
            },
            prognosis: {
              mortality: 'Időben elkezdett és adherens ART mellett a várható élettartam megközelíti a nem fertőzött népességét; Kezeletlen AHD/AIDS: magas mortalitás',
              prognostic_scores: ['CD4 szám', 'HIV RNS vírusterhelés', 'AHD / Opportunista fertőzések jelenléte'],
              factors: 'Adherencia (gyógyszerszedési fegyelem), korai diagnózis, szuppresszió fenntartása'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhea (Kankó, Tripper)',
            pathogen: { type: 'Baktérium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negatív', shape: 'intracelluláris diplococcus' },
            epidemiology: {
              incidence: 'Világszerte a 2. leggyakoribb bakteriális STD; terjed az azithromycin- és cefalosporin-rezisztens törzsek aránya',
              risk_groups: ['Fiatal felnőttek (15-24 év)', 'MSM (férfiakkal szexuáló férfiak)', 'Több szexuális partner', 'Anogenitalis vagy pharyngealis kontaktus'],
              seasonality: 'Nincs',
              transmission: 'Szexuális kontaktus (vaginalist, analist, oralis), perinatális (szülés közben újszülöttre)'
            },
            pathomechanism: {
              steps: [
                'Adhézió és Gyarmatosítás: A baktérium a pili (IV-es típusú) és Opa (Opacitás) fehérjék segítségével tapad a nem-csillós hengerhámsejtekhez (urethra, cervix, rectum, pharynx, conjunctiva).',
                'Invázió és Transzcytózis: Behatol a hámsejtekbe és átjut a subepithelialis kötőszövetbe, ahol elszaporodik.',
                'Kifejezett Gyulladás: A LOS (lipooligoszacharid) endotoxin és az IgA1-proteáz szétrombolja az anatómiai gátat, és tömeges neutrofil granulocyta toborzást vált ki (sűrű gennyes váladékképződés).',
                'Disszemináció: Ritkán (1-3%) a komplement-rezisztens törzsek a véráramba jutva Disszeminált Gonococcus Infekciót (DGI) okoznak.'
              ],
              virulence_factors: ['Pili (IV-es típus)', 'Opa és Omp proteinek', 'IgA1-proteáz', 'LOS (lipooligoszacharid, endotoxin hatás)', 'PorB (porin fehérje)']
            },
            clinical: {
              incubation: '2-7 nap (akut, gyors lefolyású)',
              onset: 'Hirtelen fellépő panaszok (férfiakban kifejezettebb)',
              symptoms: [
                { name: 'Férfiak: Akut Urethritis', description: 'Hirtelen jelentkező, bőséges, sárgás-zöldes, krémszerű gennyes húgycsőfolyás ("bon-bon") és kínzó, égő vizelési fájdalom (dysuria). Feszítő epididymalist fájdalom is felléphet.', severity: 'moderate' },
                { name: 'Nők: Cervicitis', description: 'Gyakran tünetszegény vagy tünetmentes (50-70%). Mucopurulens hüvelyi folyás, dysuria, kontakt vérzés, fájdalmas Bartholin-mirigy tályog. Ascendálva kismedencei gyulladást (PID) okoz.', severity: 'moderate' },
                { name: 'Extragenitális Manifesztációk', description: 'Pharyngitis (legtöbbször tünetmentes hordozás), Proctitis (tenesmus, fájdalom, purulens rectalis váladék), Conjunctivitis purulenta (újszülöttekben ophtalmia neonatorum).', severity: 'moderate' },
                { name: 'Disszeminált Gonococcus Infekció (DGI)', description: 'Bakteriémia kíséretében: Aszimmetrikus polyarthralgia / purulens arthritis, tenosynovitis, valamint petechialis/pustulosus bőrléziók az akrákon.', severity: 'severe' }
              ],
              physical_exam: [
                'Bőséges purulens urethralis vagy cervicalis váladék',
                'Bartholin-mirigy gyulladás / tályog',
                'Anorectalis purulens váladék, pharyngealis erythema',
                'DGI esetén: láz, acralis pustulák, tenosynovitis, ízületi duzzanat'
              ],
              complications: ['Kismedencei gyulladás (PID)', 'Tubaris meddőség és méhen kívüli terhesség', 'Epididymitis és orchitis', 'Disszeminált Gonococcus Infekció (DGI: septic arthritis, endocarditis, meningitis)', 'Ophthalmia neonatorum (újszülöttkori vakság)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Gyulladásos paraméterek (CRP, FVS)', finding: 'Emelkedett DGI vagy PID esetén', interpretation: 'Szisztémás/szövődményes fertőzés jele' }
              ],
              microbiology: [
                { test: 'NAAT / PCR', finding: 'N. gonorrhoeae DNS/RNS pozitív', significance: 'Arany standard! Minták: első sugár vizelet (férfiak), hüvely/cervix törlet, pharyngealis és rectalis törlet' },
                { test: 'Mikroszkópia (Gram- / Methylene kék festés)', finding: 'Intracelluláris Gram-negatív diplococcusok PMN leukocytákban', significance: 'Férfi urethritisben azonnali diagnózis (szenzitivitás >95%), nőknél/pharynxban nem elégséges' },
                { test: 'Bakteriológiai Tenyésztés + Rezisztencia (AST)', finding: 'Minden pozitív/sikertelen esetben KÖTELEZŐ tenyésztést végezni az antibiotikum-rezisztencia monitorozására!', significance: 'Antibiotikum-rezisztencia tesztelés (eTEST/disk)' }
              ]
            },
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines 2021/2024', 'IUSTI European Gonorrhea Guideline 2020/2024'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxon', dose: '500mg IM egyszeri adag (1g IM ha súly ≥150kg)', duration: 'Stat', note: 'Monoterápia az első választás! Ha Chlamydia fertőzés nem zárható ki, Doxycyclin 2x100mg PO 7 napig hozzáadandó.' },
                  { drug: 'Alternatív kúra (Súlyos Béta-laktám allergia esetén)', dose: 'Gentamicin 240mg IM + Azithromycin 2g PO egyszeri adag', duration: 'Stat', note: 'IUSTI/CDC ajánlott alternatív kombináció' },
                  { drug: 'Oralis alternatíva (ha az injekció nem kivitelezhető)', dose: 'Cefixim 800mg PO egyszeri adag (+ Doxycyclin 2x100mg 7d ha Chlamydia nincs kizárva)', duration: 'Stat', note: 'Teszt-of-cure szükséges 14 nap múlva!' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxon', dose: '1g IV/IM 24 óránként', duration: '7 nap (vagy a klinikai javulás után 24-48h, majd oralis váltás)', note: 'Disszeminált Gonococcus Infekció (DGI) vagy súlyos PID esetén' }
                ]
              },
              targeted: 'A monoterápiás Ceftriaxon 500mg (vagy 1g) váltotta fel a korábbi Azithromycin-kettős terápiát. Terápia kudarca esetén kötelező a tenyésztés és rezisztenciavizsgálat!',
              supportive: [
                'Szexuális absztinencia a kezelés befejezése után 7 napig ÉS a tünetek teljes megszűnéséig.',
                'Partnerértesítés és -kezelés: Az elmúlt 60 nap szexuális partnereit ki kell vizsgálni és empirikusan kezelni kell.',
                'Teszt-of-Cure (TOC): Pharyngealis fertőzés vagy nem-ceftriaxon kezelés esetén NAAT vizsgálat javasolt 14 nap múlva.'
              ],
              prevention: [
                'Óvszerhasználat.',
                'Doxy-PEP (200mg Doxycyclin PO 72h-n belül): MSM/transznemű egyéneknél a gonorrhoea kockázatát is csökkenti.',
                'Újszülötteknél 1%-os Ezüst-nitrát vagy Erythromycin szemcsepp profilaxis.'
              ]
            },
            guidelines: {
              diagnosis: [
                'NAAT (PCR) az elsővonalbeli diagnosztikus eljárás minden anogenitalis és pharyngealis mintából.',
                'Gram-festés azonnali leletet ad férfiak purulens urethritisében.',
                'Bakteriológiai tenyésztés kötelező minden terápiahiba vagy rezisztenciagyanú esetén.'
              ],
              treatment_indications: [
                'Minden igazolt vagy megalapozottan gyanús gonorrhoeás esetet és kontaktot azonnal kezelni kell.'
              ],
              first_line: [
                'Uncomplicated Anogenital & Pharyngealis Gonorrhea: Ceftriaxon 500mg IM egyszeri adag (≥150kg esetén 1g IM).',
                'Kísérő Chlamydia nem zárható ki: Doxycyclin 2x100mg PO 7 napig hozzáadandó.'
              ],
              special_populations: [
                'Terhesség: Ceftriaxon 500mg IM egyszeri adag. (Doxycyclin terheseknek ellenjavallt; ha Chlamydia társul, Azithromycin 1g PO adandó).',
                'Severe Penicillin / Cephalosporin allergia: Gentamicin 240mg IM + Azithromycin 2g PO egyszeri adag.'
              ],
              monitoring: [
                'Test-of-Cure (TOC) 14 nappal a kezelés után javasolt garatgonorrhea, alternatív sémák alkalmazása vagy perzisztáló tünetek esetén.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024 Update',
                'IUSTI European guideline on the management of gonorrhea, 2020/2024'
              ]
            },
            prognosis: { mortality: 'Helyes kezelés mellett kiváló; Kezeletlen DGI/endocarditis esetén súlyos', prognostic_scores: [], factors: 'Ceftriaxon rezisztencia, terápia-adherencia, partnerkezelés' }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydia fertőzés és LGV',
            pathogen: { type: 'Baktérium', name: '<i>Chlamydia trachomatis</i> (D-K szerotípusok: urogenitalis; L1-L3 szerotípusok: LGV)', gram: 'Gram-negatív jellegű (intracelluláris)', shape: 'kokkoid (elemi test / retikuláris test)' },
            epidemiology: {
              incidence: 'A leggyakoribb bakteriális STD világszerte és Európában; a legtöbb eset nem diagnosztizált a tünetszegénység miatt',
              risk_groups: ['Fiatal, szexuálisan aktív felnőttek (<25 év)', 'MSM (főleg rectalis fertőzés és LGV kiújulás)', 'Új vagy több szexuális partner'],
              seasonality: 'Nincs',
              transmission: 'Szexuális kontaktus (vaginalis, anogenitalis, oralis), perinatális (szülés során)'
            },
            pathomechanism: {
              steps: [
                'Befogadás: A fertőző Elemi Testek (EB) receptor-mediált endocitózissal bejutnak a nem-csillós hengerhámsejtekbe (cervix, urethra, rectum, conjunctiva).',
                'Intracelluláris Ciklus: A fagoendoszómában átalakulnak metabolikusan aktív Retikuláris Testekké (RB), és belső zárványt (inclusion body) képezve szaporodnak.',
                'Sejtlízis és Szóródás: Az RB-k visszaalakulnak fertőző EB-kké, majd a gazdasejt lízisével kiszabadulnak és új sejteket fertőznek meg.',
                'Krónikus Gyulladás: A perzisztáló fertőzés idült citokin-választ és fibroblaszt-proliferációt vált ki, ami tubaris hegesedéshez, elzáródáshoz és meddőséghez vezet.'
              ],
              virulence_factors: ['Obligát intracelluláris életmód', 'T3SS (Type III Secretion System)', 'MOMP (Major Outer Membrane Protein)', 'HSP-60 (Heat Shock Protein 60 - hegesedés/autoimmunitás)']
            },
            clinical: {
              incubation: '1-3 hét (LGV esetén 1-4 hét)',
              onset: 'Lassú, tünetszegény vagy tünetmentes',
              symptoms: [
                { name: 'Tünetmentes ("Csendes fertőzés")', description: 'A fertőzött nők 70-80%-a és a férfiak 50%-a teljesen tünetmentes! Ennek ellenére fertőznek és szövődmények alakulnak ki.', severity: 'mild' },
                { name: 'Nők: Mucopurulens Cervicitis & Urethritis', description: 'Mucopurulens (nyákos-gennyes) méhnyakfolyás, postcoitalis vagy intermenstrualis kontakt vérzés, dysuria. Ascendálva PID-t, tünetmentes tubaris károsodást okoz.', severity: 'moderate' },
                { name: 'Férfiak: Non-Gonococcal Urethritis (NGU)', description: 'Enyhe vizelési csípés, viszketés, reggeli "üveges/vizes" áttetsző csepp a húgycsőnyílásban. Fájdalmas epididymitis kísérheti.', severity: 'moderate' },
                { name: 'Lymphogranuloma Venereum (LGV - L1-L3 szerotípusok)', description: 'Főleg MSM populációban: Fájdalmatlan átmeneti genitális fekély, majd súlyos, fájdalmas lágyéki nyirokcsomó-duzzanat (bubó) vagy súlyos hemorrhagic proctitis (tenesmus, véres-gennyes székletfolyás).', severity: 'severe' }
              ],
              physical_exam: [
                'Mucopurulens cervicalis váladék, fúvószerű erózió / friabilis cervix',
                'Enyhe áttetsző urethralis váladék férfiaknál',
                'Adnexalis érzékenység, Cervical Motion Tenderness (PID jele)',
                'LGV esetén: Suppurativ inguinalis lymphadenopathia vagy rectalis fekélyek'
              ],
              complications: ['Kismedencei gyulladás (PID)', 'Tubaris eredetű meddőség', 'Extrauterin (méhen kívüli) terhesség', 'Fitz-Hugh-Curtis szindróma (perihepatitis "hegedűhúr" adhaesiókkal)', 'Reaktív arthritis (Reiter-szindróma: urethritis, conjunctivitis, arthritis)', 'Újszülöttkori conjunctivitis és interstitialist pneumonia']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép / Süllyedés', finding: 'Rendszerint normális lokális fertőzésben; emelkedett PID/LGV esetén', interpretation: 'Gyulladásos válasz' }],
              microbiology: [
                { test: 'NAAT / PCR', finding: 'Chlamydia trachomatis DNS/RNS pozitív', significance: 'Arany standard (>98% szenzitivitás)! Minták: első sugár vizelet (férfiak), hüvely/cervix törlet (nők), rectalis/pharyngealis törlet' },
                { test: 'LGV Szerotipizálás (Genotípusos PCR)', finding: 'L1, L2 vagy L3 szerotípus azonosítás', significance: 'KÖTELEZŐ proctitis vagy gyanús bubó esetén a terápia időtartamának meghatározásához (21 nap Doxycyclin!)' }
              ]
            },
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines 2021/2024', 'IUSTI European Chlamydia Guideline 2022/2024'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycyclin', dose: '2x100mg PO', duration: '7 nap', note: 'ELSŐ VÁLASZTÁS! Újabb guideline-ok szerint az Azithromycin 1g-ot felváltotta a jobb rectalis/urethralis hatékonyság miatt.' },
                  { drug: 'Alternatíva (vagy Terhességben)', dose: 'Azithromycin 1g PO egyszeri adag', duration: 'Stat', note: 'IUSTI alternatíva (vagy terheseknek az első választandó szer!)' },
                  { drug: 'LGV (Lymphogranuloma Venereum) Kúra', dose: 'Doxycyclin 2x100mg PO', duration: '21 nap', note: 'LGV igazolt vagy gyanús eseteiben hosszas 3 hetes kúra kötelező!' }
                ]
              },
              targeted: 'Doxycyclin 7 napig standard nem-terhes felnőtteknél. Terhességben Azithromycin 1g PO (vagy Amoxicillin 3x500mg PO 7d). Partnerkezelés elengedhetetlen!',
              supportive: [
                'Szexuális absztinencia a 7 napos kúra befejezéséig ÉS a partner kezeléséig.',
                'Partnerértesítés: Az elmúlt 60 nap szexuális partnereit ki kell vizsgálni és empirikusan kezelni kell.',
                'Re-tesztelés: 3 hónap múlva újbóli NAAT szűrés javasolt az újrafertőződések magas aránya miatt.'
              ],
              prevention: [
                'Óvszerhasználat.',
                'Doxy-PEP (200mg Doxycyclin 72h-n belül): MSM/transznemű egyéneknél bizonyítottan 70-80%-kal csökkenti a chlamydia fertőzés rizikóját!',
                'Éves rutin NAAT szűrés minden szexuálisan aktív <25 éves nőnél.'
              ]
            },
            guidelines: {
              diagnosis: [
                'NAAT (PCR) az arany standard. Hüvelytörlet (önmintavétel is) preferált nőknél, első sugár vizelet férfiaknál.',
                'Proctitis esetén rectalis NAAT és LGV-szerotipizálás szükséges.'
              ],
              treatment_indications: [
                'Minden igazolt Chlamydia fertőzöttet és szexuális partnerét kezelni kell.'
              ],
              first_line: [
                'Uncomplicated Chlamydia (Urethralis, Cervicalis, Rectalis): Doxycyclin 2x100mg PO 7 napig.',
                'LGV (Lymphogranuloma Venereum): Doxycyclin 2x100mg PO 21 napig.'
              ],
              special_populations: [
                'Terhesség: Azithromycin 1g PO egyszeri adag VAGY Amoxicillin 3x500mg PO 7 napig. (Doxycyclin terheseknek kontraindikált!). Gyógyulási teszt (TOC) kötelező 4 hét múlva.',
                'Újszülöttkori conjunctivitis / pneumonia: Erythromycin vagy Azithromycin szirup 14 napig.'
              ],
              monitoring: [
                'Test-of-Cure (TOC) rutinszerűen NEM indokolt Doxycyclin terápia után, kivéve terhességben (4 hét múlva) vagy ha a terápia-adherencia kétséges.',
                'Re-tesztelés 3 hónap múlva javasolt az reinfekció kimutatására.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024 Update',
                'IUSTI European guideline on the management of Chlamydia trachomatis, 2022/2024'
              ]
            },
            prognosis: { mortality: 'Kiváló; A kezeletlen fertőzés azonban végleges tubaris meddőséget és krónikus kismedencei fájdalmat okoz', prognostic_scores: [], factors: 'Korai felismerés, Doxycyclin terápia adherenciája, partnerkezelés' }
          },
          {
            id: 'genital_herpes',
            name: 'Herpes genitalis (HSV-1 / HSV-2)',
            pathogen: { type: 'Vírus', name: '<i>Herpes Simplex Vírus 1 és 2</i> (HSV-2 típus-specifikus anogenitalis; HSV-1 orogenitalis)', gram: 'dsDNS (neurotrop alfa-herpesvirus)', shape: 'gömb alakú (icosahedralis kapszid, burok)' },
            epidemiology: {
              incidence: 'Világszerte több mint 500 millió ember él HSV-2 fertőzéssel; az első anogenitalis epizódok jelentős részét ma már a HSV-1 okozza',
              risk_groups: ['Szexuálisan aktív felnőttek', 'Több szexuális partner', 'HIV-pozitív egyének (súlyosabb lefolyás)'],
              seasonality: 'Nincs',
              transmission: 'Közvetlen nyálkahártya-/bőrkontaktus (szexuális); tünetmentes vírusürítés (asymptomatic shedding) során is átvihető!'
            },
            pathomechanism: {
              steps: [
                'Elsődleges Behatolás és Lítikus Ciklus: A vírus az anogenitalis nyálkahártya mikrosérülésein át belép az hámsejtekbe, szaporodik és sejtpusztulást (lítikus fertőzés, hólyagképződés) okoz.',
                'Retrográd Neutotrop Transzport: A víruspartikulák az érzőideg-végződésekből retrográd módon a szakrális (S2-S4) idegdúcokba (ganglionokba) vándorolnak.',
                'Latencia: A ganglionsejtek magjában a vírus DNS ciklikus formában perzisztál anélkül, hogy komplett vírust termelne (látens fertőzés).',
                'Reaktiváció és Anterográd Szóródás: Stressz, UV-fény, láz, trauma vagy immunszuppresszió hatására a vírus reaktiválódik, anterográd irányban visszavándorol a bőrre/nyálkahártyára és kiújulást vagy tünetmentes vírusürítést okoz.'
              ],
              virulence_factors: ['Neurotropizmus és latencia fenntartása (LAT RNS)', 'Glykoproteinek (gB, gD, gH/gL - sejtbejutás és fúzió)', 'Immunelkerülés (gE/gI Fc-receptor, komplement-gátlás)']
            },
            clinical: {
              incubation: '2-12 nap (primer fertőzésben)',
              onset: 'Akut (primer) vagy prodromális bizsergést követő (rekurrens)',
              symptoms: [
                { name: 'Primer (Első Episode) Genitalis Herpes', description: 'Súlyos klinikai kép: Erythemás alapon csoportosult, rendkívül fájdalmas hólyagcsák, amelyek kifakadva felületes, nedvedző fekélyeket hagynak maguk után. Szisztémás jelek: láz, fejfájás, myalgia, kínzó dysuria (akut vizeletretenció lehet!), fájdalmas lágyéki nyirokcsomó-duzzanat. Gyógyulás: 2-4 hét.', severity: 'severe' },
                { name: 'Rekurrens (Kiújuló) Genitalis Herpes', description: 'Enyhébb, lokalizált lefolyás. Prodromális égő, bizsergő, lokalizált fájdalom után 1-2 napon belül kiterjedésben kisebb hólyagcsoport jelenik meg. Szisztémás tünetek nincsenek. Gyógyulás: 5-10 nap.', severity: 'mild' },
                { name: 'Tünetmentes Vírusürítés (Asymptomatic Shedding)', description: 'Makroszkópos bőrelváltozás nélkül is aktív vírusürítés zajlik a genitális nyálkahártyán, ami a transzmisszió fő forrása.', severity: 'mild' }
              ],
              physical_exam: [
                'Csoportosult vezikulák, pörkelődő vagy nedvedző erosiók / fekélyek az anogenitalis régión',
                'Primer fertőzésben: kétoldali fájdalmas inguinalis lymphadenopathia, láz',
                'Cervicitis / Proctitis (fájdalmas rectalis váladékozás)'
              ],
              complications: ['Asepticus meningitis (HSV-2)', 'Radiculomyelopathy (Elsberg-szindróma vizeletretencióval és székrekedéssel)', 'Neonatalis herpes simplex (magas mortalitás újszülöttben!)', 'Fokozott HIV akvirálási és transzmissziós rizikó (2-3-szoros)']
            },
            diagnostics: {
              laboratory: [{ test: 'Vérkép', finding: 'Normális vagy enyhe lymphocytosis', interpretation: 'Nem specifikus' }],
              microbiology: [
                { test: 'HSV-1 / HSV-2 NAAT (PCR)', finding: 'HSV DNS pozitív (típusmeghatározással)', significance: 'Arany standard! >95% szenzitivitás, elkülöníti a HSV-1 és HSV-2-t' },
                { test: 'Vírustenyésztés', finding: 'CPE (citopatogén effektus)', significance: 'Alacsonyabb szenzitivitás, de rezisztenciavizsgálathoz (Acyclovir-rezisztens HSV) hasznos' },
                { test: 'Típus-specifikus HSV-1/HSV-2 IgG Szerológia', finding: 'gG1 / gG2 specifikus IgG antitestek', significance: 'Anamnesztikus státusz tisztázására, nem akut diagnózisra' }
              ]
            },
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines 2021/2024', 'IUSTI European Herpes Guideline 2021/2024'],
              empirical: {
                outpatient: [
                  { drug: 'Valacyclovir (Primer Episode)', dose: '2x500-1000mg PO', duration: '7-10 nap', note: 'Első választás jobb biohasznosulása miatt' },
                  { drug: 'Acyclovir (Primer Episode)', dose: '3x400mg PO (vagy 5x200mg)', duration: '7-10 nap', note: 'Klasszikus alternatíva' },
                  { drug: 'Valacyclovir (Rekurrens Episode)', dose: '2x500mg PO (3 napig) VAGY 1x1000mg PO (5 napig)', duration: '3-5 nap', note: 'KORAI kezdés szükséges (prodroma alatt vagy <24h a kiújulástól)' },
                  { drug: 'Acyclovir (Rekurrens Episode)', dose: '3x800mg PO (2 napig) VAGY 3x400mg PO (5 napig)', duration: '2-5 nap', note: 'Epizodikus rövid kúra' }
                ],
                inpatient: [
                  { drug: 'Acyclovir (Súlyos / Szövődményes fertőzés)', dose: '5-10 mg/ttkg IV 8 óránként', duration: '7-10 nap (vagy klinikai javulásig)', note: 'Asepticus meningitis, súlyos szisztémás szóródás vagy vizeletretenció esetén' }
                ]
              },
              targeted: 'Acyclovir / Valacyclovir / Famciclovir nukleozid analógok. Szuppresszív terápia javasolt gyakori kiújulások (≥6 epizód/év) esetén: Valacyclovir 1x500mg PO naponta.',
              supportive: [
                'Analgetikumok (NSAID, Paracetamol, helyi Lidocain gél).',
                'Sós ülőfürdő, a terület tisztán és szárazon tartása.',
                'Pszichoszociális támogatás és edukáció a tünetmentes vírusürítésről.'
              ],
              prevention: [
                'Szigorú szexuális absztinencia a prodromális tünetek és az aktív bőrléziók fennállása alatt.',
                'Óvszerhasználat (csökkenti, de nem szünteti meg teljesen a transzmissziót).',
                'Folyamatos szuppresszív valacyclovir terápia (közel 50%-kal csökkenti a partner megfertőzésének rizikóját).',
                'Terhességben: Napi szuppresszív Acyclovir/Valacyclovir a 36. terhességi héttől kezdve. Aktív genitalis lézió esetén szüléskor Császármetszés kötelező!'
              ]
            },
            guidelines: {
              diagnosis: [
                'NAAT (PCR) a preferált diagnosztikus módszer minden genitális fekélyből vagy hólyagból.',
                'A HSV-1 és HSV-2 típusmeghatározása kötelező a prognózis és rekurrencia-kockázat megítélésére.'
              ],
              treatment_indications: [
                'Minden primer/első szimptómás epizódot felnőttekben antivirálissal kell kezelni.',
                'Gyakori rekurrencia (≥6/év) esetén tartós napi szuppresszív terápia indokolt.'
              ],
              first_line: [
                'Primer fertőzés: Valacyclovir 2x500-1000mg PO 7-10 napig.',
                'Rekurrens fertőzés: Valacyclovir 2x500mg PO 3 napig.',
                'Szuppresszív profilaxis: Valacyclovir 1x500mg PO naponta (vagy Acyclovir 2x400mg PO).'
              ],
              special_populations: [
                'HIV-pozitív egyének: Hosszabb kezelési időtartam és magasabb dózisok szükségesek (pl. Valacyclovir 2x100mg 5-10d, szuppresszió: Valacyclovir 2x500mg).',
                'Terhesség: A 36. héttől szuppresszió. Aktív lézió a szülés megindulásakor → Császármetszés (Sectio caesarea) a neonatalis herpes megelőzésére.'
              ],
              monitoring: [
                'Rutinszerű laboratóriumi követés nem szükséges kivéve szuppresszív terápia éves felülvizsgálatát.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024 Update',
                'IUSTI European guideline on the management of genital herpes, 2021/2024'
              ]
            },
            prognosis: { mortality: 'Felnőtt kompetens szervezetben rendkívül alacsony; Újszülöttkori vagy encephalitises formában magas', prognostic_scores: [], factors: 'HSV típus (HSV-2 gyakrabban kiújul), immunstátusz, korai antivirális kezelés' }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoon', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'körte alakú, 4 elülső ostorral rendelkező mozgó protozoon' },
            epidemiology: {
              incidence: 'A leggyakoribb nem-virális szexuálisan terjedő fertőzés világszerte (~156 millió eset/év)',
              risk_groups: ['Szexuálisan aktív nők', 'Több szexuális partner', 'Bakteriális vaginosisban szenvedők'],
              seasonality: 'Nincs',
              transmission: 'Kizárólag szexuális úton (anogenitalis kontaktus)'
            },
            pathomechanism: {
              steps: [
                'Adhézió: A trophozoita az adhezin fehérjék (AP65, AP51) segítségével szorosan tapad a hüvely és a húgycső laphámsejtjeihez.',
                'Citotoxicitás: Cisztein-proteázokat bocsát ki, amik közvetlenül károsítják a gazdasejteket és hámleválást (desquamatio) okoznak.',
                'Gyulladás és pH megváltozás: Kifejezett polymorphonuclearis (PMN) leukocyta beszűrődést vált ki, fogyasztja a glikogént és megemeli a hüvelyi pH-t (>4.5).'
              ],
              virulence_factors: ['Ostorok és amőboid átalakulás', 'Adhezin proteinek', 'Cisztein-proteázok', 'TVV (Trichomonas vaginalis virus koinfekció)']
            },
            clinical: {
              incubation: '4-28 nap',
              onset: 'Fokozatosan súlyosbodó vagy tünetmentes',
              symptoms: [
                { name: 'Nők: Vaginitis & Vulvitis', description: 'Bőséges, habos, sárgászöld, kifejezetten kellemetlen szagú ("romlott hal") hüvelyfolyás. Intenzív vulvaris égő viszketés, dyspareunia, dysuria. Hüvelytükrözéskor "Eper-cervix" (strawberry cervix: punctatus colpitis / bevérzések a méhnyakon).', severity: 'moderate' },
                { name: 'Férfiak: Urethritis / Tünetmentes Hordozás', description: 'A férfiak 70-80%-a tünetmentes hordozó! Szimptómás esetben enyhe urethritis (reggeli híg váladékozás, égő érzés vizelés után) vagy prostatitis.', severity: 'mild' }
              ],
              physical_exam: [
                'Habos, sárgás-zöldes purulens hüvelyi váladék',
                'Vulvaris és vaginalis erythema, oedema',
                'Eper-cervix (punctatus petechialis bevérzések a cervixen - 2-5%-ban látható)',
                'Hüvelyi pH > 4.5'
              ],
              complications: ['Koraszülés és korai bukrepedés terhességben', 'Alacsony születési súly', 'Fokozott HIV akvirálási és transzmissziós rizikó (2-3-szoros)', 'Kismedencei gyulladás (PID) fokozott kockázata']
            },
            diagnostics: {
              laboratory: [{ test: 'Hüvelyi pH mérés', finding: 'pH > 4.5 (rendszerint 5.0-6.0)', interpretation: 'Trichomonas vagy Bakteriális Vaginosis jele' }],
              microbiology: [
                { test: 'NAAT / PCR', finding: 'Trichomonas vaginalis DNS pozitív', significance: 'Arany standard (>95-100% szenzitivitás)! Hüvelytörletből, vizeletből' },
                { test: 'Nedves Kenet Mikroszkópia (Wet Mount)', finding: 'Körte alakú, aktívan mozgó ostoros protozoonok és sok PMN fvs', significance: 'Azonnali rendelői vizsgálat, de alacsony/közepes szenzitivitású (50-60%)!' },
                { test: 'Gyorsteszt / Immunokromatográfia (OSOM TV)', finding: 'Pozitív antigén kimutatás', significance: 'Magas szenzitivitású rendelői gyorsteszt' }
              ]
            },
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines 2021/2024', 'IUSTI European Trichomoniasis Guideline 2021/2024'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazol (Nőknek - Frissített CDC ajánlás!)', dose: '2x500mg PO', duration: '7 nap', note: 'NŐKNÉL A 7 NAPOS KÚRA AZ ELSŐ VÁLASZTÁS! (A 2g-os egyszeri dózist felváltotta a lényegesen alacsonyabb terápiahiba-arány miatt).' },
                  { drug: 'Metronidazol (Férfiaknak)', dose: '2g PO egyszeri adag', duration: 'Stat', note: 'Férfiaknál az 1x2g-os adag továbbra is elfogadott elsővonalbeli szer' },
                  { drug: 'Tinidazol (Alternatíva)', dose: '2g PO egyszeri adag', duration: 'Stat', note: 'Alternatív nitroimidazol (jobban tolerálható)' }
                ]
              },
              targeted: 'Metronidazol vagy Tinidazol oralis terápia. Helyi (vaginalis) nitroimidazol kúrák NEM hatásosak és ellenjavalltak! Alkohol fogyasztása TILOS a kezelés alatt és 24-72h-val utána (Diszulfirám-szerű reakció!).',
              supportive: [
                'Szigorú szexuális absztinencia a kezelés befejezéséig ÉS a tünetek teljes megszűnéséig.',
                'KÖTELEZŐ a szexuális partnerek egyidejű kezelése a ping-pong reinfekció megelőzésére!'
              ],
              prevention: [
                'Óvszerhasználat.',
                'Szexuális partnerek szűrése és kezelése.',
                'Re-tesztelés 3 hónapon belül minden kezelt nőnél.'
              ]
            },
            guidelines: {
              diagnosis: [
                'NAAT (PCR) az arany standard diagnosztikus módszer.',
                'Nedves kenet mikroszkópia azonnali leletet ad, de negatív eredmény esetén NAAT szükséges.'
              ],
              treatment_indications: [
                'Minden szimptómás és aszimptómás Trichomonas-pozitív személyt és szexuális partnerét kezelni kell.'
              ],
              first_line: [
                'Nők: Metronidazol 2x500mg PO 7 napig.',
                'Férfiak: Metronidazol 2g PO egyszeri adag (vagy 2x500mg 7d).'
              ],
              special_populations: [
                'Terhesség: Metronidazol 2x500mg PO 7 napig (a Metronidazol biztonságos a terhesség minden trimeszterében a frissített CDC/IUSTI irányelvek szerint; a kezeletlen trichomoniasis koraszülési kockázata meghaladja a gyógyszer veszélyét!).',
                'HIV-pozitív nők: Metronidazol 2x500mg PO 7 napig.'
              ],
              monitoring: [
                'Re-tesztelés NAAT-tal 3 hónapon belül javasolt minden kezelt nőnél a reinfekció kimutatására.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024 Update',
                'IUSTI European guideline on the management of Trichomonas vaginalis, 2021/2024'
              ]
            },
            prognosis: { mortality: 'Nincs; megfelelő nitroimidazol kezeléssel teljes gyógyulás érhető el', prognostic_scores: [], factors: 'Partner egyidejű kezelése, nitroimidazol-rezisztencia (ritka)' }
          }
        ]
    } // End of sexually_transmitted
});