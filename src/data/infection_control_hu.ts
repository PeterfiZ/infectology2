Object.assign(window.diseases, {
  infection_control: {
    name: 'Infekciókontroll',
    icon: window.diseaseMetadata.infection_control.icon,
    color: window.diseaseMetadata.infection_control.color,
    diseases: [
      {
        id: 'ic_basics',
        name: 'Infekciókontroll alapjai és a fertőzési lánc',
        didactics: {
          overview: 'Az infekciókontroll célja az egészségügyi ellátással összefüggő fertőzések (HAI / nosocomialis infekciók) és a multirezisztens kórokozók (MDRO) terjedésének megelőzése a fertőzési lánc (forrás, átviteli út, belépési kapu, fogékony gazdaszervezet) szisztematikus megszakításával.',
          sections: [
            {
              title: 'A fertőzési lánc elemei és intervenciós pontjai',
              icon: '🔗',
              badge: 'Kórházi epidemiológia',
              content: 'A nozokomiális fertőzések megelőzésének alapja az átviteli láncolat leggyengébb pontjainak célzott és folyamatos blokkolása.',
              items: [
                {
                  label: '1. Fertőző forrás (Reservoir)',
                  text: 'Fertőzött vagy tünetmentesen kolonizált betegek, egészségügyi dolgozók hordozása, valamint kontaminált élettelen környezet (ágyrácsok, orvosi műszerek, csaptelepek).'
                },
                {
                  label: '2. Kilépési kapu (Portal of Exit)',
                  text: 'Légúti váladékok (köhögés, tüsszentés), széklet, vizelet, sebváladék, vér és egyéb testnedvek.'
                },
                {
                  label: '3. Átviteli mód (Mode of Transmission)',
                  text: 'Leggyakrabban a személyzet közvetítő keze (kontakt átvitel), cseppfertőzés (közelről belélegezve), aeroszol (távoli lebegő részecskék) vagy kontaminált orvosi eszközök.'
                },
                {
                  label: '4. Belépési kapu (Portal of Entry)',
                  text: 'Megtört bőr- és nyálkahártya-integritás, műtéti sebek, invazív eszközök (centrális vénás katéter, perifériás kanül, húgyúti katéter, endotrachealis tubus).'
                },
                {
                  label: '5. Fogékony szervezet (Susceptible Host)',
                  text: 'Immunszupprimált, idős, politraumatizált, alultáplált, súlyos alapbetegségben (diabétesz, veseelégtelenség) szenvedő vagy intenzív osztályos ellátásra szoruló betegek.'
                }
              ]
            },
            {
              title: 'A 4 legfőbb egészségügyi ellátással összefüggő fertőzés (HAI)',
              icon: '🏥',
              badge: 'Megelőzési fókusz',
              content: 'A kórházi fertőzések több mint 80%-a négy meghatározott klinikai szindrómához és invazív eszközhöz köthető:',
              items: [
                {
                  label: 'CLABSI (Centrális vénás katéterhez kötött véráramfertőzés)',
                  text: 'Megelőzés: szigorú aszeptikus behelyezési csomag (szubklávia preferencia, kiterjesztett steril lefedés, 2% CHG alkoholos bőrfertőtlenítés, napi indikáció-felülvizsgálat).'
                },
                {
                  label: 'CAUTI (Katéter-asszociált húgyúti fertőzés)',
                  text: 'Megelőzés: zárt elvezető rendszer fenntartása, a vizeletgyűjtő zsák mindig a hólyag szintje alatt tartása, a katéter napi szükségességének felülvizsgálata és mielőbbi eltávolítása.'
                },
                {
                  label: 'VAP (Lélegeztetőgéphez társuló pneumonia)',
                  text: 'Megelőzés: 30-45 fokos emelt fejtámasz, subglotticus váladékleszívás, napi ébresztési/extubációs próba, CHG szájápolás.'
                },
                {
                  label: 'SSI (Műtéti sebfertőzés)',
                  text: 'Megelőzés: incízió előtti 30-60 percen belüli antibiotikum profilaxis, szőrtelenítés kizárólag nyíróval (clipperrel, tilos a borotválás!), normothermia és normoglykaemia biztosítása.'
                }
              ]
            }
          ],
          diagnostics: [
            'Rendszeres intézményi aktív surveillance és pontprevalencia-vizsgálatok (HAI ráta követése)',
            'Laboratóriumi riasztórendszer új MDRO izolátumok (MRSA, VRE, CPE, MRPA, C. difficile) észlelésekor',
            'Környezeti mikrobiológiai mintavétel járványos halmozódás (outbreak) kivizsgálása esetén'
          ],
          red_flags: [
            'Invazív eszközök indokolatlan, rutinszerű fenntartása (a katéter a fertőzés elsődleges kapuja)',
            'Az aszeptikus protokoll megsértése a behelyezés vagy a kötéscsere során',
            'Surveillance adatok és fertőzési ráták hiánya az osztályos minőségbiztosításban'
          ],
          teaching_tip: 'A leghatékonyabb beavatkozás az invazív eszközök napi szükségességének felülvizsgálata: ha a beteg állapota engedi, a katétert vagy kanült azonnal el kell távolítani!'
        }
      },
      {
        id: 'hand_hygiene',
        name: 'Kézhigiéné (Kézfertőtlenítés és kézmosás)',
        didactics: {
          overview: 'A kézhigiéné az egészségügyi ellátással összefüggő fertőzések (HAI) és multirezisztens kórokozók (MDRO) átvitelének megelőzésére szolgáló legfontosabb, leghatékonyabb és legköltségkímélőbb beavatkozás. A megfelelő kézhigiénés megfelelőség akár 30-50%-kal csökkenti a nozokomiális fertőzések incidenciáját.',
          sections: [
            {
              title: 'Indikációk: A WHO Kézhigiéné 5 Momentuma',
              icon: '🖐️',
              badge: 'Nemzetközi arany standard',
              content: 'A kézhigiénés tevékenységet pontosan meghatározott ellátási pontokon és időpillanatokban kötelező elvégezni:',
              items: [
                {
                  label: '1. Beteg érintése ELŐTT',
                  text: 'Megvédi a beteget a dolgozó kezén lévő kórokozóktól (pl. kézfogás, pulzusmérés, betegmozgatás előtt).'
                },
                {
                  label: '2. Tiszta / aszeptikus beavatkozás ELŐTT',
                  text: 'Megvédi a beteget a kórokozók bejutásától a steril terekbe (pl. injekciózás, katéterezés, sebkötözés, szemcseppentés előtt).'
                },
                {
                  label: '3. Váladékexpozíció kockázata UTÁN',
                  text: 'Megvédi a dolgozót és a környezetet a mikroorganizmusoktól (pl. vérvétel, vizeletürítés, kötéscsere, intubálás után, kesztyűlevétel után azonnal).'
                },
                {
                  label: '4. Beteg érintése UTÁN',
                  text: 'Megvédi a dolgozót és a következő betegeket a beteg flórájának átvitelétől (pl. vizsgálat, betegágy elhagyása után).'
                },
                {
                  label: '5. Beteg környezetének érintése UTÁN',
                  text: 'Megvédi a környezetet akkor is, ha magát a beteget nem értük el (pl. ágyrács, infúziós állvány, éjjeliszekrény érintése után).'
                }
              ]
            },
            {
              title: 'Módszertan: Alkoholos kézbedörzsölés vs. Szappanos kézmosás',
              icon: '🧴',
              badge: 'Klinikai döntési algoritmus',
              content: 'A kézhigiéné formáját a szennyeződés jellege és a feltételezett kórokozó határozza meg:',
              items: [
                {
                  label: 'Alkoholos kézbedörzsölés (Hand Rub) — GOLD STANDARD',
                  text: 'Alkalmazás: Minden rutinszerű betegellátási szituációban, ha a kéz láthatóan NEM szennyezett. Hatásmechanizmus: Gyors baktericid, virucid és fungicid hatás (denaturálja a fehérjéket). Időtartam: 20–30 másodperc (3–5 ml szer, a teljes felület nedvesen tartásával a száradásig). Előnyei: Hatékonyabb és gyorsabb a kézmosásnál, közvetlenül a betegágy mellett (Point of Care) elérhető, hidratáló anyagai miatt jobban kíméli a bőrt.'
                },
                {
                  label: 'Szappanos kézmosás (Hand Wash) — KÖTELEZŐ INDIKÁCIÓK',
                  text: 'Alkalmazás: 1) Ha a kéz láthatóan szennyezett (vér, széklet, testnedvek); 2) Spórás kórokozók (különösen Clostridioides difficile és Bacillus anthracis) gyanúja vagy igazolt esete után; 3) Burok nélküli vírusok (pl. Norovírus, Rotavírus járvány) expozíciója után; 4) Toalett-használat után. Időtartam: 40–60 másodperc folyó vízzel és szappannal, majd egyszer használatos papírtörölközővel történő alapos szárazra törléssel és a csap papírral való elzárásával.'
                }
              ]
            },
            {
              title: 'A helyes kézfertőtlenítés 6 lépéses technikája',
              icon: '🔄',
              badge: 'EN 1500 szabvány',
              content: 'A bedörzsölés során a kéz minden felületét egyenletesen be kell fedni az alábbi mozdulatsorral:',
              items: [
                '1. Tenyér a tenyérrel történő dörzsölése körkörös mozdulatokkal.',
                '2. Jobb tenyér a bal kézháton összefont ujjakkal, majd kézcsere.',
                '3. Tenyér a tenyéren összefont ujjakkal a distalis ujjközök átdörzsölésére.',
                '4. Ujjak külső felszíne a szemközti tenyérben, zárt ujjakkal összekulcsolva.',
                '5. Hüvelykujjak körkörös dörzsölése a zárt szemközti tenyérben (mindkét oldalon).',
                '6. Ujjbegyek és körmök körkörös dörzsölése a szemközti tenyérben (mindkét oldalon).'
              ]
            },
            {
              title: 'Sebészi bemosakodás és előkészület',
              icon: '🧤',
              badge: 'Műtéti aszepszis',
              content: 'Minden invazív műtéti beavatkozás előtt a tranziens flóra teljes elpusztítására és a rezidens flóra mély rétegekből való felszabadulásának gátlására:',
              items: [
                'Első lépés: A nap első műtétje előtt kéz- és alkar mosás szappannal, körömtisztítás körömreszelővel folyó víz alatt (kefe használata a bőr mikrosérülései miatt nem javasolt).',
                'Második lépés: Alkoholos sebészi kézbedörzsölés (1,5–3 percig) a kézfejtől a könyökig, folyamatosan nedvesen tartva a bőrt a gyártói előírás szerint, a teljes megszáradásig.',
                'Steril műtéti kesztyű és köpeny felvétele kizárólag a kéz teljes száradása után engedélyezett.'
              ]
            },
            {
              title: 'Alapfeltételek: A "Bare Below the Elbows" elv',
              icon: '👔',
              badge: 'Munkaruházati szabályzat',
              items: [
                'Tilos bármilyen kézi ékszer, gyűrű (karikagyűrű is!), karkötő vagy karóra viselése betegellátás közben.',
                'Tilos műkörmök, gél lakk, műszempillák vagy körömdíszek viselése (baktérium- és gombarezervoárként működnek).',
                'A természetes körmöket tisztán és rövidre vágva (<0,5 cm) kell tartani.',
                'Rövid ujjú munkaruha viselése kötelező az alkari fertőtlenítés akadálytalan elvégzéséhez.'
              ]
            },
            {
              title: 'Minőségbiztosítás és ellenőrzés (Auditálás)',
              icon: '📊',
              badge: 'Compliance monitoring',
              items: [
                'Direkt megfigyelés (Direct Observation): Képzett auditorok által végzett közvetlen megfelelőség-mérés a WHO 5 Momentum formanyomtatványai alapján.',
                'Fogyasztási adatok mérése: Az alkoholos kézbedörzsölő szer havi felhasználásának követése (liter / 1000 ápolási nap mutató).',
                'Fluoreszcens gél és UV-lámpás audit: Képzési célú vizsgálat a fedetlenül maradt bőrterületek azonnali vizuális kimutatására.'
              ]
            }
          ],
          diagnostics: [
            'Mikrobiológiai kézmintavétel (ujjbegy-lenyomati agar) járványok (outbreak) kontaktkutatásakor',
            'Rendszeres UV-fluoreszcens audit a helyes bedörzsölési technika oktatására és ellenőrzésére',
            'Bőrállapot-felmérés a dolgozói kontakt dermatitis korai azonosítására és kezelésére'
          ],
          red_flags: [
            'A kesztyűviselés NEM helyettesíti a kézhigiénét! Kesztyű levétele után a kézfertőtlenítés KÖTELEZŐ.',
            'Clostridioides difficile gyanújakor az alkoholos dörzsölés nem pusztítja el a spórákat — kizárólag a szappanos kézmosás hatékony a mechanikai eltávolítás révén!',
            'Nedves kézre kesztyűt húzni tilos (bőr maceratio és súlyos foglalkozási ekcéma forrása).',
            'Gyűrűk és órák alatti bőrterületeken a baktériumszám nagyságrendekkel magasabb.'
          ],
          teaching_tip: '„Tiszta kéz – biztonságos ellátás”: Az alkoholos bedörzsölésnél a leggyakrabban kihagyott területek a hüvelykujjak, az ujjbegyek és az ujjközök. Mindig ügyeljünk a teljes száradási idő kivárására!'
        }
      },
      {
        id: 'isolation_measures',
        name: 'Izolálás (Típusai, szabályai és feloldása)',
        didactics: {
          overview: 'Az izolációs óvintézkedések célja a fertőző források térbeli vagy fizikai elkülönítése, valamint a kórokozók transzmissziós útvonalainak megszakítása a többi beteg, az egészségügyi személyzet és a látogatók védelme érdekében.',
          sections: [
            {
              title: '1. Standard óvintézkedések (Standard Precautions)',
              icon: '🛡️',
              badge: 'Minden betegnél alapértelmezett',
              content: 'Minden betegellátási tevékenység során kötelezően alkalmazandó, függetlenül a beteg ismert vagy vélt fertőzési státuszától:',
              items: [
                'Kézhigiéné szigorú betartása a WHO 5 Momentuma szerint.',
                'Egyéni védőeszközök (PPE) helyzetfüggő alkalmazása a testnedvekkel való expozíció kockázatának megfelelően.',
                'Biztonságos tű- és éleseszköz-kezelés (visszakupakolás tilalma, sárga veszélyeshulladék-gyűjtő azonnali használata).',
                'Rendszeres környezeti tisztítás és felületfertőtlenítés.',
                'Megfelelő textília- és veszélyeshulladék-kezelés, valamint köhögési etikett betartatása.'
              ]
            },
            {
              title: '2. Kontakt izoláció (Contact Precautions)',
              icon: '🤝',
              badge: 'Érintéssel terjedő kórokozók',
              content: 'Indikációk: Multirezisztens kórokozók (MRSA, VRE, CRE/CPE, ESBL hordozás/fertőzés), Clostridioides difficile, Norovírus, Rotavírus, rühesség (Scabies), kiterjedt váladékozó sebek.',
              items: [
                {
                  label: 'Elhelyezés',
                  text: 'Egyágyas kórteremben (saját vizesblokkal) vagy azonos kórokozóval rendelkező betegek kohorszolásával.'
                },
                {
                  label: 'Egyéni védőeszközök (PPE)',
                  text: 'Tiszta, nem steril védőköpeny és kesztyű felvétele a kórterembe lépéskor kötelező, minden betegellátási vagy környezet-érintési tevékenységhez.'
                },
                {
                  label: 'Eszközhasználat',
                  text: 'Dedikált betegellátó eszközök (saját fonendoszkóp, vérnyomásmérő, lázmérő), amelyek a kórtermet nem hagyhatják el a zárófertőtlenítésig.'
                },
                {
                  label: 'Kórterem elhagyása',
                  text: 'A beteg kizárólag diagnosztikus vagy terápiás kényszerből hagyhatja el a kórtermet, tiszta köpenyben és tiszta lefedéssel.'
                }
              ]
            },
            {
              title: '3. Cseppfertőzés elleni izoláció (Droplet Precautions)',
              icon: '🗣️',
              badge: 'Nagy cseppekkel terjedő kórokozók (>5 µm)',
              content: 'Indikációk: Influenza, SARS-CoV-2 (alapesetben), Neisseria meningitidis invazív fertőzés, Bordetella pertussis, Mycoplasma pneumoniae, Mumpsz, Rubeola, Parvovírus B19.',
              items: [
                {
                  label: 'Elhelyezés',
                  text: 'Egyágyas kórterem vagy legalább 1,5–2 méteres ágytávolság a kohorszolt betegek között.'
                },
                {
                  label: 'Egyéni védőeszközök (PPE)',
                  text: 'Sebészi (orvosi) maszk felvétele kötelező a beteg 2 méteres körzetébe lépéskor (szemvédelem/szemüveg javasolt köhögő betegnél).'
                },
                {
                  label: 'Betegszállítás',
                  text: 'A betegnek sebészi maszkot kell viselnie a kórtermen kívüli tartózkodás és szállítás teljes ideje alatt.'
                }
              ]
            },
            {
              title: '4. Légúti / Aeroszol izoláció (Airborne Precautions)',
              icon: '💨',
              badge: 'Kis cseppmagvakkal terjedő kórokozók (≤5 µm)',
              content: 'Indikációk: Mycobacterium tuberculosis (nyitott tüdő-TBC), Kanyaró (Morbilli), Varicella zoster (bárányhimlő és disszeminált herpes zoster), valamint aeroszolképző beavatkozások (intubálás, bronchoszkópia, leszívás).',
              items: [
                {
                  label: 'Elhelyezés',
                  text: 'Negatív nyomású légizolációs kórterem (AIIR – Airborne Infection Isolation Room), óránként legalább 6–12 légcserével és HEPA-szűréssel vagy közvetlen kültéri kivezetéssel. Az ajtót folyamatosan ZÁRVA kell tartani.'
                },
                {
                  label: 'Egyéni védőeszközök (PPE)',
                  text: 'FFP2 / FFP3 / N95 részecskeszűrő légzésvédő maszk felvétele kötelező a zsilipben, a kórterembe lépés ELŐTT, illeszkedési próbával (fit check).'
                },
                {
                  label: 'Belépési korlátozás',
                  text: 'Kanyaró és varicella esetén nem immunis személyzet nem léphet be a kórterembe.'
                }
              ]
            },
            {
              title: '5. Protektív / Védő (Fordított) izoláció',
              icon: '🧬',
              badge: 'Súlyosan immunkompromittált betegek védelme',
              content: 'Indikációk: Súlyos neutropenia (abszolút neutrofilszám ANC < 500/µL), allogén őssejt-transzplantáció, súlyos égési sérülések.',
              items: [
                'Pozitív nyomású kórterem HEPA-szűrt befúvással a környezeti gombaspórák (Aspergillus) és baktériumok bejutásának megakadályozására.',
                'Cserepes virágok, nyers zöldségek, gyümölcsök és penészes sajtok bevitele szigorúan tilos.',
                'Látogatók és személyzet szigorú szűrése légúti tünetekre, sebészi maszk és tiszta köpeny viselése a belépéskor.'
              ]
            },
            {
              title: 'Az izoláció feloldásának és megszüntetésének kritériumai',
              icon: '🔓',
              badge: 'De-izolációs protokoll',
              items: [
                {
                  label: 'MRSA feloldása',
                  text: 'Dekolonizáció befejezése után legalább 48-72 órával vett, 3 egymást követő napon negatív kontroll szűrőminta-sorozat (orr, torok, sebek).'
                },
                {
                  label: 'VRE és CRE feloldása',
                  text: 'Általában 3 egymást követő negatív rektális szűrőminta (legalább 1 hét különbséggel levéve, antibiotikum-mentes időszakban); intézményi irányelvek szerint tartós hordozásként is kezelhető.'
                },
                {
                  label: 'Clostridioides difficile feloldása',
                  text: 'A hasmenés megszűnése (formált széklet) után legalább 48 órával, ellenőrző széklet PCR/toxin teszt NEM szükséges a feloldáshoz!'
                },
                {
                  label: 'TBC feloldása',
                  text: 'Legalább 2 hetes hatékony antituberkulotikus kezelés + klinikai javulás + 3 egymást követő napon negatív köpet Ziehl-Neelsen/auramin mikroszkópos vizsgálat.'
                }
              ]
            }
          ],
          diagnostics: [
            'Mikrobiológiai ellenőrző szűrővizsgálatok (screening) a hordozás megszűnésének igazolására',
            'Kórtermi légnyomás-különbség ellenőrzése (golyós/manométeres indikátor AIIR szobáknál naponta)',
            'Izolációs compliance és PPE felvételi/levételi auditok'
          ],
          red_flags: [
            'Légúti izolációs kórterem ajtajának nyitva hagyása (a negatív nyomás azonnal összeomlik).',
            'PPE viselése a kórtermen kívül a folyosón (súlyos környezetszennyezési hiba!).',
            'A védőeszközök levételének sorrendi hibája: a legfertőzöttebb a kesztyű és a köpeny külső felszíne — a levétel után AZONNAL kézfertőtlenítést kell végezni az arc/maszk érintése előtt!'
          ],
          teaching_tip: 'PPE sorrend: Felvétel = Köpeny ➔ Maszk ➔ Szemüveg ➔ Kesztyű. Levétel = Kesztyű ➔ Szemüveg ➔ Köpeny ➔ KÉZFERTŐTLENÍTÉS ➔ Maszk (a zsilipben) ➔ KÉZFERTŐTLENÍTÉS!'
        }
      },
      {
        id: 'mdro_screening',
        name: 'Szűrővizsgálatok (Aktív surveillance)',
        didactics: {
          overview: 'Az aktív mikrobiológiai szűrés (surveillance) célja a tünetmentes multirezisztens kórokozó (MDRO) hordozók korai azonosítása a felvételkor vagy az ápolás során, lehetővé téve az azonnali izolációt és a járványos transzmissziós láncok megszakítását.',
          sections: [
            {
              title: 'Szűrési indikációk és kockázati csoportok',
              icon: '🎯',
              badge: 'Kiket kell szűrni?',
              content: 'A felvételi szűrést az alábbi magas kockázatú betegcsoportoknál kötelező elvégezni:',
              items: [
                'Korábbi dokumentált MDRO hordozás vagy infekció a kórelőzményben.',
                'Más fekvőbeteg-ellátó intézményből vagy külföldi kórházból átvett betegek.',
                'Intenzív osztályos (ITO / PICU) felvételre kerülő minden beteg.',
                'Krónikus hemodialízisben részesülő vagy tartós ápolási otthonból (nursing home) érkező betegek.',
                'Nagy elektív műtétre (ortopédiai ízületi protézis, szívsebészet, idegsebészet) készülő betegek (MRSA szűrés).',
                'Kiterjedt krónikus sebekkel, fekélyekkel, decubitusokkal vagy égési sérüléssel felvett betegek.'
              ]
            },
            {
              title: 'Mintavételi helyek és technikák kórokozók szerint',
              icon: '🧪',
              badge: 'Mit és honnan?',
              content: 'A mintavétel helyét a kórokozó predilekciós kolonizációs fészke határozza meg:',
              items: [
                {
                  label: 'MRSA (Methicillin-rezisztens S. aureus)',
                  text: 'Mintavételi helyek: Mindkét oldali elülső orrnyílás (nares anterior – a mintavevő pálcát mindkét orrfélben körkörösen megforgatva), torokkenet, lágyékhajlat/perineum, valamint minden nyílt seb, drain- és katéter-kilépési hely.'
                },
                {
                  label: 'VRE (Vancomycin-rezisztens Enterococcus)',
                  text: 'Mintavételi helyek: Rektális kenet (a mintavevő dacron pálcának láthatóan széklettel színezettnek kell lennie, legalább 1-2 cm mélyen a sphincter fölé vezetve) vagy natív székletminta.'
                },
                {
                  label: 'ESBL-termelő Enterobacterales és CRE / CPE (Carbapenem-rezisztens törzsek)',
                  text: 'Mintavételi helyek: Rektális kenet vagy natív székletminta; járvány esetén torokkenet, vizeletminta (húgyúti katéterrel rendelkezőknél) és sebek kenete is.'
                },
                {
                  label: 'Multirezisztens Pseudomonas (MRPA) és Acinetobacter (MRAB)',
                  text: 'Mintavételi helyek: Garat-/torokkenet, perineális régió, lélegeztetett betegeknél trachealis aspirátum / endotrachealis váladék, valamint nyílt sebek.'
                }
              ]
            },
            {
              title: 'Laboratóriumi módszertan és átfutási idők',
              icon: '⏱️',
              badge: 'Diagnosztikai modalitások',
              items: [
                {
                  label: 'Klasszikus tenyésztés szelektív/kromogén táptalajon',
                  text: 'Időigény: 18–48 óra. Költséghatékony, specifikus színelváltozást ad a rezisztens telepeknél (pl. chromID MRSA, chromID VRE, chromID CARBA), lehetővé teszi a teljes fenotípusos antibiogram meghatározását.'
                },
                {
                  label: 'Gyors molekuláris PCR / NAAT vizsgálatok',
                  text: 'Időigény: 1–2 óra. Rezisztenciagének direkt kimutatása (pl. mecA/mecC MRSA-nál; vanA/vanB VRE-nél; blaKPC, blaNDM, blaOXA-48, blaVIM, blaIMP karbapenemázoknál). Elengedhetetlen sürgősségi műtétek előtt és járványkitöréskor az azonnali izolációs döntéshez.'
                }
              ]
            },
            {
              title: 'Pre-emptív izoláció és logisztika',
              icon: '🚦',
              badge: 'Intézkedési lánc',
              content: 'Magas kockázatú beteg felvételekor a szűrőminták levételével EGY IDŐBEN azonnal el kell indítani a pre-emptív kontakt izolációt. Az izolációt csak a negatív szűrési eredmény megérkezése után szabad feloldani!',
              items: [
                'A minta azonnali indítása a mikrobiológiai laboratóriumba megfelelő transzportközegben.',
                'Elektronikus jelölés a kórházi informatikai rendszerben (HIS) a korábbi MDRO hordozók automatikus riasztására.',
                'Laboratóriumi gyorsértesítési protokoll (kritikus lelet telefonos és elektronikus jelentése az infekciókontroll szakembernek).'
              ]
            }
          ],
          diagnostics: [
            'Felvételi szűrés (Admission Screening) a magas kockázatú betegeknél a felvételt követő 24 órán belül',
            'Heti surveillance szűrés intenzív osztályokon az osztályos transzmisszió detektálására',
            'Kontaktkutatás (Contact Tracing) igazolt új MDRO index-eset kórtermi szobatársainál'
          ],
          red_flags: [
            'Szűrőminta levétele helyi vagy szisztémás fertőtlenítő/antibiotikum kezelés ALATT (álnegatív eredményhez vezet).',
            'Tiszta, széklettel nem érintkezett rektális pálca beküldése a laborba (nem értékelhető minta).',
            'A pre-emptív izoláció elmulasztása a szűrési eredményekre várva (több napos rejtett terjesztés a kórteremben).'
          ],
          teaching_tip: 'A szűrővizsgálat nem öncélú adatgyűjtés: a negatív szűrés felszabadítja az értékes izolációs kapacitást, a pozitív szűrés pedig azonnali kontakt izolációt és MRSA esetén dekolonizációt indikál!'
        }
      },
      {
        id: 'decolonization_protocols',
        name: 'Dekolonizáció (Mikor, mivel és hogyan?)',
        didactics: {
          overview: 'A dekolonizáció a kórokozók (elsősorban Methicillin-rezisztens Staphylococcus aureus – MRSA) átmeneti vagy tartós eliminálása a beteg bőréről és nyálkahártyáiról helyi antiszeptikumok és antibiotikumok kombinációjával, megelőzve az endogén szisztémás infekciókat és a műtéti sebfertőzéseket.',
          sections: [
            {
              title: 'Indikációk és alkalmazási kör',
              icon: '🎯',
              badge: 'Bizonyítékokon alapuló indikációk',
              content: 'A dekolonizáció szigorú indikációhoz kötött eljárás:',
              items: [
                'Igazolt MRSA-hordozó betegek nagy elektív műtétek (szívsebészet, ortopédiai protézisek, vascularis graftok, idegsebészet) előtt.',
                'Intenzív osztályos (ICU) célzott vagy univerzális dekolonizáció a lélegeztetéshez társuló pneumonia (VAP) és katéterszepszis megelőzésére.',
                'Visszatérő staphylococcus bőr- és lágyrészfertőzések (furunculosis, tályogok) a betegnél vagy szoros családi kontaktusainál.',
                'FONTOS SZABÁLY: Jelenleg kizárólag MRSA esetén létezik nemzetközileg validált, hatékony dekolonizációs protokoll. VRE, ESBL és Carbapenem-rezisztens Gram-negatívok (CRE/CPE) esetén a rutinszerű dekolonizáció NEM javasolt a hatástalanság és a gyors rezisztenciaszelekció miatt!'
              ]
            },
            {
              title: 'A standard 5 napos MRSA dekolonizációs protokoll',
              icon: '📋',
              badge: 'Lépésről lépésre',
              content: 'A protokoll 5 egymást követő napon át tartó szimultán lokális kezelést jelent:',
              items: [
                {
                  label: '1. Nazális eradikáció (Orrkezelés)',
                  text: 'Készítmény: 2% Mupirocin orrkenőcs (vagy oktenidin-dihidroklorid tartalmú nazális gél). Adagolás: Naponta 2–3 alkalommal mindkét orrnyílásba gyufafejnyi mennyiséget felvinni fülpálcikával, majd az orrszárnyakat 1 percig összenyomva masszírozni a hatóanyag eloszlatásához.'
                },
                {
                  label: '2. Teljes test fürdetése (Bőrkezelés)',
                  text: 'Készítmény: 4% Klórhexidin-glükonát (CHG) tartalmú folyékony fertőtlenítő szappan vagy Oktenidin tartalmú mosakodó emulzió. Adagolás: Napi 1 alkalommal teljes testfürdetés/zuhanyzás. A habot 1–2 perc behatási ideig a bőrön kell hagyni leöblítés előtt, különös tekintettel a hajas fejbőrre, hónaljra, lágyékhajlatra és gáttájékra. Hajmosás az 1. és az 5. napon kötelező.'
                },
                {
                  label: '3. Szájüregi antiszeptikus öblítés',
                  text: 'Készítmény: 0,12%–0,2% Klórhexidin vagy Oktenidin szájvíz. Adagolás: Naponta 2 alkalommal 1 perces szájöblögetés és torokgargarizálás (intubált betegeknél gézlappal áttörölni a szájüreget és a fogakat).'
                }
              ]
            },
            {
              title: 'Kísérő intézkedések és környezeti higiéné',
              icon: '🛏️',
              badge: 'A visszakolonizáció megakadályozása',
              items: [
                'Napi ágynemű-, hálóruha- és törölközőcsere a dekolonizációs kúra minden napján a fürdetés után.',
                'A beteg személyes tárgyainak (fésű, szemüveg, mobiltelefon, protézis) fertőtlenítése a kúra alatt.',
                'Bőrápolás: Bőrhidratáló krémeket kizárólag a CHG fürdetés után legalább 2 órával szabad felvinni, mivel bizonyos kozmetikumok inaktiválják a klórhexidin reziduális antibakteriális hatását.'
              ]
            },
            {
              title: 'A sikeresség ellenőrzése (Kontroll szűrővizsgálat)',
              icon: '🔍',
              badge: 'Utókövetés',
              content: 'A dekolonizáció sikerességét mikrobiológiai kontrollal kell igazolni:',
              items: [
                'Időzítés: A kezelés befejezése után legalább 48–72 órát (optimálisan 5-7 napot) várni kell a kontroll mintavétellel az antiszeptikumok maradványhatása (álnegatív eredmény) miatti torzítás elkerülésére.',
                'Minták: Orrkenet, torokkenet és korábbi sebek kenete 3 egymást követő napon.',
                'Eredmény: 3 negatív kontroll minta esetén a dekolonizáció sikeresnek tekintendő, az izoláció feloldható.'
              ]
            }
          ],
          diagnostics: [
            'Pre-operatív MRSA szűrés elektív műtétek előtt 2-4 héttel a dekolonizáció időben történő elvégzéséhez',
            'Kontroll szűrés a kezelés után 48-72 órával a clearance dokumentálására',
            'Mupirocin-rezisztencia tesztelés (MIC meghatározás) sikertelen eradikációs kísérlet esetén'
          ],
          red_flags: [
            'A Mupirocin kenőcs 7 napnál hosszabb vagy folyamatos, profilaktikus alkalmazása szigorúan tilos (gyors, magas szintű mupirocin-rezisztencia szelekcióhoz vezet).',
            'Nem ép, kiterjedten gyulladt, ekcémás vagy égett bőrön a 4% CHG súlyos kémiai irritációt és felszívódást okozhat — ilyenkor Oktenidin alapú készítmény választandó.',
            'A szájüregi és nazális komponens elhagyása a dekolonizáció kudarcát okozza a belső rezervoárok fennmaradása miatt.'
          ],
          teaching_tip: 'A műtét előtti MRSA dekolonizáció a leghatékonyabb fertőzésmegelőző intervenciók egyike: elektív protézis beültetésnél a sebfertőzések kockázatát több mint 50%-kal mérsékli!'
        }
      },
      {
        id: 'sterilization_disinfection',
        name: 'Sterilizálás és fertőtlenítés',
        didactics: {
          overview: 'Az orvosi eszközök és a betegkörnyezet szakszerű reprocesszálása alapvető betegbiztonsági követelmény. A fertőtlenítés a kórokozók számának redukciója nem sporicid szinten, míg a sterilizálás az összes élő mikroorganizmus, beleértve a legellenállóbb baktériumspórákat is, teljes és végleges elpusztítását jelenti.',
          sections: [
            {
              title: 'A Spaulding-féle kockázati osztályozás',
              icon: '⚖️',
              badge: 'Nemzetközi döntési rendszer',
              content: 'Earle H. Spaulding rendszere az orvostechnikai eszközöket a beteggel való érintkezés mélysége és a fertőzési kockázat alapján három kategóriába sorolja:',
              items: [
                {
                  label: '1. Kritikus eszközök (Critical Items) ➔ STERILIZÁLÁS KÖTELEZŐ',
                  text: 'Minden olyan eszköz, amely steril szövetekbe, testüregekbe vagy az érrendszerbe hatol be (pl. sebészi műszerek, implantátumok, arthroszkópok, laparoszkópos eszközök, biopsziás fogók, érkatéterek). Követelmény: Teljes sterilitás (SAL 10⁻⁶ szint).'
                },
                {
                  label: '2. Szemi-kritikus eszközök (Semicritical Items) ➔ MAGAS SZINTŰ FERTŐTLENÍTÉS (HLD) VAGY STERILIZÁLÁS',
                  text: 'Olyan eszközök, amelyek ép nyálkahártyával vagy nem ép bőrfelülettel érintkeznek, de nem hatolnak be steril terekbe (pl. flexibilis gasztroszkópok, kolonoszkópok, laringoszkóp lapocok, endotrachealis tubusok, TEE vizsgálófejek). Követelmény: Magas szintű fertőtlenítés (High-Level Disinfection – HLD), amely elpusztítja a vegetatív baktériumokat, mikobaktériumokat, gombákat és vírusokat (spórákat nem feltétlenül teljes mértékben).'
                },
                {
                  label: '3. Nem-kritikus eszközök (Noncritical Items) ➔ KÖZEPES / ALACSONY SZINTŰ FERTŐTLENÍTÉS',
                  text: 'Olyan eszközök és felületek, amelyek kizárólag ép bőrrel érintkeznek (pl. fonendoszkóp, vérnyomásmérő mandzsetta, ágyrácsok, éjjeliszekrények, infúziós pumpák). Követelmény: Tisztítás és alacsony/közepes szintű felületfertőtlenítés.'
                }
              ]
            },
            {
              title: 'Sterilizálási módszerek és paraméterek',
              icon: '🌡️',
              badge: 'Fizikai és kémiai eljárások',
              items: [
                {
                  label: 'Túlnyomásos telített gőz (Autoklávozás) — GOLD STANDARD',
                  text: 'A legmegbízhatóbb, leggyorsabb és legolcsóbb eljárás hőtűrő anyagokhoz. Standard ciklusok: 121 °C (15–20 perc, 1,1 bar túlnyomás) vagy 134 °C (3,5–5 perc, 2,1 bar túlnyomás). Prion-ciklus (Creutzfeldt-Jakob gyanú esetén): 134 °C legalább 18 percig.'
                },
                {
                  label: 'Hőlégsterilizálás (Száraz hő)',
                  text: 'Kizárólag vízmentes, hőtűrő fém és üveg eszközökhöz. Paraméterek: 160 °C (120 perc), 170 °C (60 perc) vagy 180 °C (30 perc).'
                },
                {
                  label: 'Alacsony hőmérsékletű H₂O₂ Gázplazma sterilizálás (Sterrad)',
                  text: 'Hő- és nedvességérzékeny eszközökhöz (pl. optikák, kamerák, elektronikus műszerek). Paraméterek: 45–55 °C, 45–75 perc. Előnye: Gyors, nem toxikus (vízre és oxigénre bomlik), azonnal használható eszközök.'
                },
                {
                  label: 'Etilén-oxid gázsterilizálás (EO)',
                  text: 'Kiváló behatoló képesség műanyagokhoz és hosszú lumenű eszközökhöz alacsony hőmérsékleten (37–55 °C). Hátránya: Erősen toxikus, mutagén és karcinogén gáz, hosszú (12–24 órás) mechanikus kiszellőztetési időt igényel.'
                }
              ]
            },
            {
              title: 'Kémiai fertőtlenítőszerek hatásspektruma',
              icon: '🧪',
              badge: 'Hatóanyag-választás',
              items: [
                {
                  label: 'Alkoholok (70% Etanol, Izopropanol)',
                  text: 'Közepes szintű fertőtlenítő. Gyors baktericid, tuberkulocid, fungicid és burkos vírus elleni hatás. Nem hat spórákra és burok nélküli vírusokra. Felhasználás: Kézfertőtlenítés, kis felületek, sztetoszkópok.'
                },
                {
                  label: 'Klórvegyületek (Nátrium-hipoklorit / Hipó)',
                  text: 'Magas szintű / sporicid fertőtlenítő. Széles spektrum, gyors sporicid és virucid hatás. Kötelező Clostridioides difficile és vérszennyeződés esetén! Korrozív a fémekre és szövetekre.'
                },
                {
                  label: 'Kvaterner ammónium vegyületek (QUAT)',
                  text: 'Alacsony szintű fertőtlenítő és tisztítószer. Jó tisztítóhatás, nem korrozív. Nem tuberkulocid és nem sporicid. Felhasználás: Padlók, falak, nem-kritikus bútorzat.'
                },
                {
                  label: 'Peretetsav, Glutaraldehid, OPA (Orto-ftálaldehid)',
                  text: 'Magas szintű fertőtlenítő és kémiai sterilizáló szerek. Endoszkópok automatizált mosogató-fertőtlenítő berendezéseiben (RDG-E) alkalmazzák szigorú expozíciós idővel.'
                }
              ]
            },
            {
              title: 'Minőségellenőrzés és validálás',
              icon: '📋',
              badge: 'CSSD minőségbiztosítás',
              items: [
                {
                  label: 'Bowie-Dick teszt',
                  text: 'Napi egyszeri kötelező teszt az autokláv első ciklusa előtt: igazolja a vákuumképzés teljességét és a gőz egyenletes behatolását.'
                },
                {
                  label: 'Kémiai indikátorok (Class 1–6)',
                  text: 'Minden egyes sterilizálandó csomagon és a csomag belsejében színváltozással igazolják a fizikai paraméterek (hő, gőz, idő) elérését.'
                },
                {
                  label: 'Biológiai indikátorok (Spóra-teszt)',
                  text: 'A sterilizálás arany standard ellenőrzése hőrezisztens spórákkal: Geobacillus stearothermophilus (gőz és plazma esetén) vagy Bacillus atrophaeus (száraz hő és EO esetén). Rendszeres időközönként és minden implantátum-tételnél kötelező!'
                }
              ]
            }
          ],
          diagnostics: [
            'Bowie-Dick teszt az autoklávok napi vákuum- és gőzáthatolási ellenőrzésére',
            'Biológiai spóranyugtató tesztek a sterilizáló készülékek periodikus validálására',
            'Adenozin-trifoszfát (ATP) biolumineszcenciás felületi tisztaság-mérés a takarítás auditálására'
          ],
          red_flags: [
            '„Ami nem tiszta, az nem lehet steril!” — Az előzetes mechanikai és enzimatikus tisztítás elmaradása esetén a beszáradt fehérje és biofilm megvédi a baktériumokat a gőztől és gázoktól.',
            'Nedves csomagolás (Wet pack) kikerülése az autoklávból: a nedvesség kapilláris úton visszaszívja a környezeti kórokozókat, a csomag nem steril!',
            'Lejárt szavatosságú vagy mechanikailag sérült steril csomagolóanyag felhasználása tilos.'
          ],
          teaching_tip: 'A műszerek tisztítását és fertőtlenítését mindig közvetlenül a használat után meg kell kezdeni, hogy megakadályozzuk a vér és váladék rászáradását, valamint a biofilm kialakulását a lumenekben!'
        }
      },
      {
        id: 'antibiotic_stewardship',
        name: 'Antibiotikum stewardship (Racionális antibiotikum-használat)',
        didactics: {
          overview: 'Az Antibiotikum Stewardship Program (ASP) olyan rendszerszintű, multidiszciplináris stratégia, amely az antimikrobiális szerek felelősségteljes megválasztását, optimális dózisát, időtartamát és beadási útját biztosítja. Célja a maximális klinikai gyógyulási arány elérése a rezisztencia-szelekció, a gyógyszertoxicitás és a kezelési költségek minimalizálása mellett.',
          sections: [
            {
              title: 'A Stewardship 5 alappillére: The 5 "D"s',
              icon: '🏛️',
              badge: 'Alapelvek',
              content: 'Minden antibiotikum-felírás során az 5 kulcskérdést kell szisztematikusan megválaszolni:',
              items: [
                {
                  label: '1. Diagnosis (Valódi diagnózis)',
                  text: 'Valódi bakteriális fertőzés áll-e fenn, vagy csupán kolonizáció, virális fertőzés vagy nem-fertőzéses gyulladás (pl. aszimptomatikus bakteriuria, vírusos bronchitis kezelése kerülendő!).'
                },
                {
                  label: '2. Drug (Helyes szer)',
                  text: 'A feltételezett kórokozó spektrumának és a lokális rezisztencia-viszonyoknak (helyi antibiogram) leginkább megfelelő, legszűkebb spektrumú antibiotikum kiválasztása.'
                },
                {
                  label: '3. Dose (Optimális dózis és PK/PD)',
                  text: 'Farmakokinetikai és farmakodinámiás elvek alkalmazása a fertőzés helyétől (pl. liquor, tüdő, csont penetráció), a beteg testsúlyától és vese-/májfunkciójától függően (pl. elnyújtott béta-laktám infúziók a T>MIC idő maximalizálására).'
                },
                {
                  label: '4. Duration (Minimális hatásos időtartam)',
                  text: 'A legrövidebb, klinikailag még bizonyítottan hatásos kezelési időtartam alkalmazása („rövidebb ugyanolyan jó” elv: CAP 5 nap, HAP/VAP 7 nap, pyelonephritis 7 nap, intraabdominalis forráskontroll után 4 nap).'
                },
                {
                  label: '5. De-escalation (De-eszkaláció és célzott terápia)',
                  text: 'A mikrobiológiai tenyésztési és érzékenységi leletek megérkezésekor (48–72 órán belül) a széles spektrumú empirikus kezelés azonnali szűkítése célzott antibiotikumra.'
                }
              ]
            },
            {
              title: 'Kulcsfontosságú stewardship beavatkozások',
              icon: '🛠️',
              badge: 'Gyakorlati eszközök',
              items: [
                {
                  label: '48–72 órás felülvizsgálat (Antibiotic Time-Out)',
                  text: 'Minden megkezdett empirikus antibiotikum kötelező újraértékelése a 2-3. napon a klinikai válasz, a tenyésztési eredmények és a gyulladásos markerek alapján (leállítás, de-eszkaláció vagy orális váltás mérlegelése).'
                },
                {
                  label: 'Korai IV-to-PO konverzió (Orális váltás)',
                  text: 'Áttérés per os kezelésre amint a beteg láztalan legalább 24 órája, hemodinamikailag stabil, a gyulladásos markerek csökkennek és a tápcsatorna felszívása biztosított (különösen jó biohasznosulású szereknél: fluorokinolonok, trimethoprim-sulfamethoxazol, linezolid, metronidazol, doxiciklin).'
                },
                {
                  label: 'Sebészi profilaxis szigorú szabályozása',
                  text: 'A profilaxis egyetlen adagból áll az incízió előtt 30–60 perccel (pl. Cefazolin). A műtét befejezése után az antibiotikumot 24 órán belül (optimálisan azonnal) le kell állítani!'
                }
              ]
            },
            {
              title: 'A WHO AWaRe antibiotikum osztályozási rendszere',
              icon: '🌍',
              badge: 'Globális felírási stratégia',
              items: [
                {
                  label: 'ACCESS csoport (Széles körben hozzáférhető)',
                  text: 'Első vonalbeli, szűk spektrumú, kiváló hatékonyságú és alacsony rezisztencia-potenciálú szerek a leggyakoribb infekciókra (pl. Amoxicillin, Ampicillin, Cefazolin, Doxiciklin, Nitrofurantoin, Metronidazol).'
                },
                {
                  label: 'WATCH csoport (Fokozottan figyelendő)',
                  text: 'Széles spektrumú, magasabb rezisztencia-szelekciós kockázatú szerek, amelyek felírása szigorú indikációhoz kötött (pl. Fluorokinolonok, 3. generációs Cefalosporinok, Makrolidok, Karbapenemek, Piperacillin-tazobactam).'
                },
                {
                  label: 'RESERVE csoport (Tartalék / Védett szerek)',
                  text: '„Utolsó menedék” szerek kizárólag igazolt vagy erősen gyanított, életveszélyes multirezisztens (MDRO) kórokozók kezelésére, szigorú infektológusi engedélyhez kötve (pl. Ceftazidim-avibactam, Ceftolozan-tazobactam, Cefiderocol, Colistin, Linezolid, Meropenem-vaborbactam).'
                }
              ]
            },
            {
              title: 'Biomarkerek és terápiás gyógyszerszint-monitorozás (TDM)',
              icon: '📈',
              badge: 'Precíziós adagolás',
              items: [
                {
                  label: 'Prokalcitonin (PCT) vezérelt algoritmus',
                  text: 'A PCT gyors dinamikájú marker bakteriális infekciókban. Ha a PCT < 0,25 µg/L vagy a csúcsértékhez képest > 80%-kal csökken, az antibiotikum-kezelés biztonságosan befejezhető.'
                },
                {
                  label: 'Therapeutic Drug Monitoring (TDM)',
                  text: 'Kötelező szérumszint-mérés szűk terápiás szélességű szereknél (Vancomycin, Aminoglikozidok: Gentamicin, Amikacin) a nefrotoxicitás és ototoxicitás megelőzésére, valamint a hatékony AUC/MIC és Cmax/MIC célok elérésére.'
                }
              ]
            }
          ],
          diagnostics: [
            'Hemokultúrák (legalább 2 pár) és egyéb releváns minták kötelező levétele az első dózis antibiotikum beadása ELŐTT',
            'Gyors molekuláris PCR tesztek a pozitív hemokultúrából a rezisztenciagének és a de-eszkaláció órákon belüli meghatározására',
            'Helyi kumulatív antibiogram éves elemzése az osztályos empirikus protokollok frissítéséhez'
          ],
          red_flags: [
            'Aszimptomatikus bakteriuria (ASB) antibiotikumos kezelése (csak terhességben és urológiai nyálkahártya-sérüléssel járó beavatkozás előtt indokolt!).',
            'Sebészi antibiotikum-profilaxis folytatása a műtét után napokig.',
            'Fluorokinolonok indokolatlan felírása enyhe fertőzésekben (tendinitis, QT-megnyúlás, C. difficile és rezisztencia-kockázat miatt az EMA által korlátozva).',
            'Mintavétel elmaradása az antibiotikum elindítása előtt.'
          ],
          teaching_tip: '„Gondolkozz mielőtt felírod!”: Minden antibiotikum-kúra megkezdésekor határozzuk meg a tervezett időtartamot vagy a stop-dátumot, és a 48. órában kötelezően végezzünk Antibiotic Time-Outot a mikrobiológiai leletek alapján!'
        }
      }
    ]
  }
});
