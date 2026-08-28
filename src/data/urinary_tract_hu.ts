import { Category } from '../types';

export const urinaryTractHu: Category = {
  name: 'Húgyúti fertőzések',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'A húgyúti fertőzések (UTI) klinikai osztályozásának alapvető standardja az EAU 2026 (European Association of Urology) irányelv, kiegészítve az észak-amerikai IDSA (Infectious Diseases Society of America) gyakorlati felosztásával (megjegyzéssel: az IDSA felosztás szerint). Az EAU 2026 a fertőzéseket anatómiai lokalizáció, súlyosság és az ORENUC rizikófaktor-rendszer szerint csoportosítja (nem komplikált cystitis, nem komplikált pyelonephritis, komplikált UTI / cUTI, urosepsis, urethritis, férfi nemi szervek fertőzései és aszimptomatikus bakteriuria). Az IDSA felosztás szerint a cUTI definíciója a szisztémás tünetekre, felső húgyúti érintettségre, obstrukcióra és a terápiarezisztenciát növelő gazdaszervezeti tényezőkre fókuszál.',
    lower: 'Alsó húgyúti fertőzés (Cystitis): Akut dysuria, pollakisuria, urgencia, suprapubicus nyomásérzékenység szisztémás tünetek (láz, deréktáji fájdalom) NÉLKÜL. Rutin vizelettenyésztést az EAU 2026 és IDSA szerint sporadikus, nem komplikált esetben nem igényel.',
    upper: 'Felső húgyúti fertőzés (Pyelonephritis): Láz (>38°C), hidegrázás, deréktáji/CVA fájdalom, Giordano-jel, hányinger/hányás. Vizelettenyésztés mindig kötelező; 48-72 órás terápiás perzisztencia esetén sürgős képalkotás (UH/CT) végzendő tályog vagy obstrukció kizárására.',
    diagnostics: [
      '1) Klinikai tünetek és rizikófaktorok felmérése (EAU ORENUC besorolás; láz, deréktáji fájdalom és szisztémás tünetek ellenőrzése)',
      '2) Vizelet tesztcsík és üledékvizsgálat (leukocyta esterase, nitrit, pyuria igazolása)',
      '3) Vizelettenyésztés és rezisztenciavizsgálat (kötelező pyelonephritis, cUTI, terhesség, férfiak fertőzése és 2-4 héten belüli recidíva esetén)',
      '4) Gyulladásos laboratóriumi paraméterek (vérkép, CRP, procalcitonin) és vesefunkció szisztémás/felső húgyúti tüneteknél',
      '5) Has/kismedencei ultrahang vagy kontrasztos CT obstrukció, kő, tályog vagy perzisztáló láz esetén'
    ],
    red_flags: [
      'Sepsis / Szeptikus sokk jelei (hypotonia, tachycardia, tachypnea, oliguria, emelkedett laktát)',
      'Akut húgyúti obstrukció és vizeletrekedés (kő, prosztata-megnagyobbodás, szűkület) lázzal kísérve – AZONNALI sürgősségi forráskontrollt igényel!',
      'Terhességben fellépő lázas pyelonephritis vagy tünetmentes bakteriuria',
      'Gátolt orális tolerancia (súlyos hányás, dehidráció)',
      'Nem reagáló láz vagy rosszabbodó klinikai állapot >48-72 óra adekvát antibiotikumkezelés után'
    ],
    special_populations: 'Idősek: gyakran atípusos klinikum (delírium, elesettség, étvágytalanság) – alapos kivizsgálás szükséges, de az aszimptomatikus bakteriuria (ASB) szigorúan nem kezelendő! Terhesek: az ASB és UTI kötelezően szűrendő és kezelendő a koraszülés és pyelonephritis megelőzésére. Férfiak: az EAU és IDSA szerint a húgyúti fertőzések potenciálisan komplikáltnak és prosztata-érintettségűnek tekintendők.',
    teaching_tip: 'Antibiotikum Stewardship Alapszabály: Fluorokinolonok (Ciprofloxacin, Levofloxacin) és 3. generációs orális cefalosporinok empirikus adása nem komplikált cystitisben az EAU 2026 és IDSA ajánlása szerint SZIGORÚAN KERÜLENDŐ a súlyos mellékhatások és a rezisztenciaszelekció miatt!'
  },
  tables: [
    {
      title: 'Húgyúti fertőzések irányelvi felosztása: EAU 2026 vs. IDSA Irányelvek',
      headers: ['Klinikai kategória', 'EAU 2026 felosztás és kritériumok (Alapvető)', 'IDSA felosztás és definíciók (Megjegyzéssel: az IDSA felosztás szerint)', 'Elsővonalbeli kezelési stratégia'],
      rows: [
        [
          '<strong>Nem komplikált cystitis<br/>(Uncomplicated Cystitis)</strong>',
          'Akut, sporadikus vagy recidiváló cystitis nem terhes, premenopauzális nőkben, ismert anatómiai/funkcionális eltérés vagy komorbiditás nélkül (ORENUC: O/R kategória).',
          'Akut hólyaggyulladás egészséges, nem terhes nőknél; a gyulladás a hólyagnyálkahártyára korlátozódik, szisztémás tünetek nélkül.',
          'Fosfomycin trometamol (1x3g PO), Nitrofurantoin (2x100mg PO 5 nap), vagy Pivmecillinam (3x400mg PO 3-5 nap). Kinolonok kerülendők!'
        ],
        [
          '<strong>Nem komplikált pyelonephritis<br/>(Uncomplicated Pyelonephritis)</strong>',
          'Vese parenchymális gyulladás ép urológiai traktusú, nem terhes nőkben. Tünetek: láz (>38°C), hidegrázás, deréktáji/CVA fájdalom.',
          'Vese parenchymális fertőzés szisztémás tünetekkel (láz, hidegrázás, CVA érzékenység) anatómiai obstrukció vagy súlyos társbetegség nélkül.',
          'Járóbeteg: Cefuroxim axetil vagy Cefpodoxim (ha rezisztencia <10%, Cipro/Levofloxacin megengedett). Kórházi: Ceftriaxon 1x1-2g IV vagy Cefotaxim.'
        ],
        [
          '<strong>Komplikált UTI (cUTI)<br/>(Complicated UTI)</strong>',
          'Minden olyan UTI, amely ORENUC rizikófaktorral társul: férfi nem, terhesség, urológiai rendellenesség (U), idegentest/katéter (C), nephrológiai (N) vagy extra-urogenitális (E) komorbiditás.',
          '<em>Megjegyzéssel: az IDSA felosztás szerint:</em> Olyan fertőzés, amely szisztémás tünetekkel (láz, hidegrázás, delírium, instabilitás), felső húgyúti érintettséggel vagy urosepsissel jár, ÉS/VAGY fennáll obstrukció, idegentest, férfi nem vagy immunszuppresszió.',
          'Azonnali forráskontroll (katétercsere, obstrukció elhárítása) + Célzott/széles spektrumú IV terápia (Ceftriaxon, Piperacillin/tazobactam, Cefepime, Meropenem).'
        ],
        [
          '<strong>Katéter-asszociált UTI<br/>(CAUTI)</strong>',
          'Indwelling hólyagkatéterrel, cystostomával vagy nephrostomával bíró betegek tünetes húgyúti fertőzése (EAU Catheter kategória). Biofilm képződés.',
          '<em>Megjegyzéssel: az IDSA felosztás szerint:</em> Tünetes fertőzés indwelling katéterrel rendelkező betegnél vagy a katéter eltávolítását követő 48 órán belül, szignifikáns bakteriuriával (≥10³ CFU/ml).',
          'A meglévő katéter azonnali eltávolítása vagy aszeptikus cseréje még az antibiotikum indítása előtt + tenyésztésen alapuló célzott antibiotikum.'
        ],
        [
          '<strong>Aszimptomatikus bakteriuria<br/>(ASB)</strong>',
          'Szignifikáns csíraszám (≥10⁵ CFU/ml) tünetek nélkül. Szigorúan TILOS antibiotikummal kezelni (kivéve terhesség és urológiai műtéti előkészítés).',
          '<em>Megjegyzéssel: az IDSA felosztás szerint:</em> ≥10⁵ CFU/ml izolálása tünetmentes egyénnél (nőknél 2 egymást követő, férfiaknál 1 minta). Rutin szűrés és kezelés kifejezetten káros és kerülendő!',
          'NEM KEZELENDŐ! Kivételek: 1) Terhesség (12-16. héten szűrendő és kezelendő), 2) Nyálkahártya-vérzéssel járó invazív urológiai beavatkozások előtt.'
        ],
        [
          '<strong>Férfi nemi szervek fertőzései<br/>(Prostatitis, Epididymitis)</strong>',
          'EAU kategóriák: NIH Type I (Akut bakteriális), NIH Type II (Krónikus bakteriális), NIH Type III (CPPS), NIH Type IV (Aszimptomatikus). Epididymo-orchitis.',
          '<em>Megjegyzéssel: az IDSA felosztás szerint:</em> A férfiakban jelentkező összes húgyúti fertőzést potenciálisan komplikáltnak tekinti prosztata-érintettség miatt.',
          'Prosztatát jól penetráló antibiotikumok: Fluorokinolonok (Ciprofloxacin, Levofloxacin) vagy Cotrimoxazol 2-4 hétig (akut) / 4-6 hétig (krónikus).'
        ]
      ]
    }
  ],
  diseases: [
    {
      id: 'uti_classification',
      name: 'Húgyúti fertőzések osztályozása és irányelvek (EAU 2026 & IDSA)',
      didactics: {
        overview: 'A húgyúti fertőzések (UTI) modern osztályozása a bizonyítékokon alapuló nemzetközi irányelvekre épül: az alapvető klinikai felosztást az EAU 2026 (European Association of Urology Guidelines on Urological Infections) biztosítja, melyet kiegészít az észak-amerikai IDSA (Infectious Diseases Society of America) gyakorlati irányelve. A helyes osztályozás elengedhetetlen a felesleges antibiotikum-használat elkerüléséhez (Stewardship), a célzott kivizsgáláshoz és a veszélyes szövődmények (urosepsis, pyonephros, vesetályog) korai felismeréséhez.',
        sections: [
          {
            title: '1. Alapvető felosztás az EAU 2026 irányelv szerint',
            icon: '🇪🇺',
            badge: 'EAU 2026 Alapstandard',
            content: 'Az EAU 2026 a húgyúti fertőzéseket az anatómiai lokalizáció, a klinikai súlyosság és a hajlamosító kockázati tényezők szerint 7 fő entitásra osztja:',
            items: [
              {
                label: '1) Nem komplikált cystitis (Uncomplicated Cystitis)',
                text: 'Akut, alsó húgyúti fertőzés nem terhes, premenopauzális nőkben, ismert urológiai rendellenesség vagy releváns komorbiditás nélkül. Vezető tünetek: dysuria, pollakisuria, urgencia, suprapubicus fájdalom láz NÉLKÜL. Rutin vizelettenyésztést nem igényel.'
              },
              {
                label: '2) Nem komplikált pyelonephritis (Uncomplicated Pyelonephritis)',
                text: 'Akut vese parenchymális gyulladás nem terhes nőkben, normális anatómiai és funkcionális húgyutak mellett. Vezető tünetek: láz (>38°C), hidegrázás, deréktáji/CVA fájdalom, Giordano-jel. Vizelettenyésztés mindig kötelező!'
              },
              {
                label: '3) Komplikált húgyúti fertőzés (Complicated UTI - cUTI)',
                text: 'Minden olyan fertőzés, amely megnöveli a szövődmények, a kezelési kudarc vagy a rezisztens kórokozók kockázatát: férfiak fertőzései, terhesek fertőzései, anatómiai/funkcionális rendellenességek (obstrukció, kő, szűkület, diverticulum, VUR), indwelling eszközök jelenléte vagy súlyos társbetegségek (diabetes, immunszuppresszió, CKD).'
              },
              {
                label: '4) Urosepsis',
                text: 'Életveszélyes szervi elégtelenség húgyúti fertőzés következtében (SOFA score emelkedés ≥2 pont, qSOFA, hypotonia, emelkedett laktát). Azonnali forráskontrollt és sürgősségi intenzív ellátást igényel.'
              },
              {
                label: '5) Urethritis (Húgycsőgyulladás)',
                text: 'Elsősorban szexuális úton terjedő (STI) patogének (N. gonorrhoeae, C. trachomatis, Mycoplasma genitalium, Trichomonas vaginalis) által okozott fertőzés.'
              },
              {
                label: '6) Férfi nemi szervek fertőzései (Male Genital Infections)',
                text: 'Bakteriális prostatitis: NIH Type I (Akut bakteriális), NIH Type II (Krónikus bakteriális), NIH Type III (Krónikus kismedencei fájdalom szindróma - CPPS), NIH Type IV (Aszimptomatikus gyulladásos). Továbbá akut epididymitis, orchitis és epididymo-orchitis.'
              },
              {
                label: '7) Aszimptomatikus bakteriuria (ASB)',
                text: 'Szignifikáns csíraszámú bakteriuria (≥10⁵ CFU/ml) húgyúti panaszok nélkül. Kezelése szigorúan KONTRAINDIKÁLT, kivéve terhességben és nyálkahártya-vérzéssel járó invazív urológiai beavatkozások előtt.'
              }
            ]
          },
          {
            title: '2. EAU ORENUC Kockázati Besorolási Rendszer',
            icon: '📊',
            badge: 'EAU Kockázati Stratifikáció',
            content: 'Az EAU ORENUC rendszere a hajlamosító kockázati tényezők és a gazdaszervezet állapota alapján strukturálja a húgyúti fertőzéseket:',
            items: [
              {
                label: 'O (No known risk factors)',
                text: 'Nincs ismert rizikófaktor – premenopauzális, nem terhes egészséges nők (nem komplikált fertőzések).'
              },
              {
                label: 'R (Recurrent UTI risk factors)',
                text: 'Recidív fertőzés kockázati tényezői: fokozott szexuális aktivitás, spermicid használat, posztmenopauzális ösztrogénhiány, korábbi rUTI anamnézis.'
              },
              {
                label: 'E (Extra-urogenital risk factors)',
                text: 'Extra-urogenitális szisztémás rizikó: rosszul kontrollált diabetes mellitus, immunszuppresszió, szisztémás autoimmun kórképek, terhesség.'
              },
              {
                label: 'N (Nephrological risk factors)',
                text: 'Nephrológiai kockázat: krónikus veseelégtelenség (CKD), polycystás vesebetegség, veseátültetés.'
              },
              {
                label: 'U (Urological risk factors)',
                text: 'Urológiai anatómiai vagy funkcionális tényezők: húgyúti obstrukció, urolithiasis, neurogén hólyagdiszfunkció, vesicoureteralis reflux (VUR), hólyagkimeneti szűkület.'
              },
              {
                label: 'C (Catheter & Foreign body)',
                text: 'Katéter vagy idegentest: tartós indwelling hólyagkatéter (CAUTI), ureter DJ-stent, nephrostoma, cystostoma.'
              }
            ]
          },
          {
            title: '3. IDSA felosztás és definíciók (Megjegyzéssel: az IDSA felosztás szerint)',
            icon: '🇺🇸',
            badge: 'Megjegyzéssel: az IDSA felosztás szerint',
            content: 'Az IDSA (Infectious Diseases Society of America) gyakorlati irányelve a húgyúti fertőzéseket az alábbi szempontok szerint határozza meg és különíti el:',
            items: [
              {
                label: 'IDSA cUTI Definíció',
                text: '<em>(Megjegyzéssel: az IDSA felosztás szerint)</em> A komplikált húgyúti fertőzés (cUTI) olyan fertőzés, amely a hólyagon túlmutató szisztémás tünetekkel (láz, hidegrázás, tachycardia, mentális státusz megváltozása/delírium, hypotonia), felső húgyúti érintettséggel (pyelonephritis) vagy urosepsissel jár, ÉS/VAGY fennáll olyan szerkezeti/funkcionális húgyúti eltérés vagy gazdaszervezeti tényező (obstrukció, idegentest, férfi nem, immunszuppresszió), amely fokozza a kezelési kudarc vagy a rezisztens kórokozók kockázatát.'
              },
              {
                label: 'IDSA cUTI szisztémás jelekkel obstrukció nélkül',
                text: '<em>(Megjegyzéssel: az IDSA felosztás szerint)</em> Szisztémás tünetekkel járó lázas fertőzések ép húgyutakkal vagy kísérő társbetegségekkel (pl. diabeteses pyelonephritis).'
              },
              {
                label: 'IDSA cUTI obstrukcióval vagy idegentesttel',
                text: '<em>(Megjegyzéssel: az IDSA felosztás szerint)</em> Kővel, daganattal, szűkülettel vagy stenttel társuló fertőzések, ahol a sürgős urológiai dekompresszió (forráskontroll) a gyógyulás feltétele.'
              },
              {
                label: 'IDSA CAUTI Irányelv',
                text: '<em>(Megjegyzéssel: az IDSA felosztás szerint)</em> Katéter-asszociált húgyúti fertőzés: tünetes fertőzés indwelling húgyhólyagkatéterrel rendelkező betegnél vagy a katéter eltávolítását követő 48 órán belül, szignifikáns csíraszámmal (≥10³ CFU/ml).'
              },
              {
                label: 'IDSA ASB Irányelv',
                text: '<em>(Megjegyzéssel: az IDSA felosztás szerint)</em> Aszimptomatikus bakteriuria szigorú definíciója: nőkben két egymást követő tiszta középsugár mintából, férfiakban/katéteresekben egy mintából izolált ≥10⁵ CFU/ml csíraszám. Az IDSA nyomatékos ajánlása: tilos szűrni és tilos kezelni, kivéve terheseket és urológiai nyálkahártya-vérzéssel járó beavatkozásokat!'
              },
              {
                label: 'Férfiak húgyúti fertőzései az IDSA szerint',
                text: '<em>(Megjegyzéssel: az IDSA felosztás szerint)</em> Az IDSA a férfiakban kialakuló összes húgyúti fertőzést alapvetően komplikáltnak minősíti az anatómiai adottságok és a magas prosztata-involváció miatt.'
              }
            ]
          },
          {
            title: '4. Diagnosztikai és mikrobiológiai határértékek',
            icon: '🔬',
            badge: 'Klinikai Mikrobiológia',
            content: 'Szignifikáns csíraszám határértékek a klinikai kórképekben az EAU 2026 és IDSA szerint:',
            items: [
              {
                label: 'Akut nem komplikált cystitis nőkben',
                text: '≥10³ CFU/ml uropathogén baktérium középsugár vizeletmintában.'
              },
              {
                label: 'Akut nem komplikált pyelonephritis nőkben',
                text: '≥10⁴ CFU/ml uropathogén baktérium középsugár vizeletmintában.'
              },
              {
                label: 'Komplikált UTI (cUTI) / Férfiak fertőzése',
                text: '≥10⁵ CFU/ml nőkben, ≥10⁴ CFU/ml férfiakban vagy katéteres középsugár vizeletmintában.'
              },
              {
                label: 'Katéteres vizeletminta (egyszeri katéterezés)',
                text: '≥10² CFU/ml már szignifikánsnak minősül.'
              },
              {
                label: 'Aszimptomatikus bakteriuria (ASB)',
                text: '≥10⁵ CFU/ml (nőknél 2 külön mintában, férfiaknál 1 mintában).'
              }
            ]
          }
        ],
        teaching_tip: [
          '<strong>EAU 2026 & IDSA Kiemelt Üzenet:</strong> A zavaros vagy bűzös vizelet, valamint az önmagában álló pyuria (fehérvérsejtek a vizeletben) klinikai tünetek nélkül NEM jelent fertőzést, és NEM képez antibiotikum-kezelési indikációt!',
          '<strong>Fluorokinolon Korlátozás:</strong> Nem komplikált cystitisben a kinolonok (Ciprofloxacin, Levofloxacin) adása mind az EAU 2026, mind az IDSA szerint szigorúan kerülendő!'
        ]
      },
      pathogen: {
        type: 'Irányelvi összefoglaló',
        name: 'EAU 2026 Guidelines on Urological Infections & IDSA cUTI/ASB Guidelines',
        gram: 'Szabvány',
        shape: 'Klinikai algoritmus'
      }
    },
    {
      id: 'cystitis',
      name: 'Akut nem komplikált cystitis (Hólyaghurut)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'Nők 50%-a élete során legalább egyszer, 20-30%-uknál recidív fertőzés',
        risk_groups: ['Szexuálisan aktív premenopauzális nők (EAU ORENUC: O/R)', 'Postmenopauzális nők (ösztrogénhiány)', 'Új szexuális partner vagy spermicidek használata'],
        seasonality: 'Nincs',
        transmission: 'Felszálló (ascendáló) fertőzés a perineális és periurethrális flórából'
      },
      pathomechanism: {
        steps: [
          'Kolonizáció: A bélflórából származó uropathogén baktériumok (UPEC) kolonizálják a periurethrális területet és a hüvelybemenetet.',
          'Feljutás: A baktériumok a női rövid urethrán keresztül feljutnak a húgyhólyagba.',
          'Adhézió és Invázió: A baktériumok I-es típusú és P-fimbriák segítségével kitapadnak a hólyag urothelium uroplakin molekuláihoz, megelőzve a kimosódást, majd intracelluláris bakteriális közösségeket (IBC) képeznek.',
          'Gyulladásos válasz: A baktériumok és endotoxinjaik heves nyálkahártya-gyulladást, hyperaemiát, ödémát és a hólyag receptorainak irritációját váltják ki.'
        ],
        virulence_factors: ['I-es típusú fimbria és P-fimbria (adherencia)', 'Hemolizin (hólyagfal károsítás)', 'Aerobactin (vasfelvétel)']
      },
      clinical: {
        incubation: '1-3 nap',
        onset: 'Akut, hirtelen kezdet',
        symptoms: [
          { name: 'Dysuria', description: 'Égő, csípő érzés vizelés közben és végén, az irritált urethra és hólyagnyak miatt.', severity: 'moderate' },
          { name: 'Pollakisuria', description: 'Gyakori, kis volumenű vizeletürítés a hólyagnyálkahártya fokozott ingerlékenysége és csökkent funkcionális kapacitása miatt.', severity: 'moderate' },
          { name: 'Urgencia', description: 'Hirtelen fellépő, parancsoló vizelési inger, melyet nehéz visszatartani (késztetéses inkontinencia léphet fel).', severity: 'moderate' },
          { name: 'Suprapubicus fájdalom', description: 'Szeméremcsont feletti nyomás, tompa fájdalom vagy görcsös diszkomfort érzés.', severity: 'mild' },
          { name: 'Terminális haematuria', description: 'Makroszkóposan véres vizelet a vizelés legvégén (az esetek ~30%-ában), a vérbő hólyagnyálkahártya nyomási károsodása miatt.', severity: 'mild' },
          { name: 'Láz hiánya', description: 'Szisztémás tünetek (láz, hidegrázás, deréktáji fájdalom) HIÁNYOZNAK. Ha láz van jelen, az felső húgyúti érintettségre (pyelonephritis) utal!', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubicus nyomásérzékenység az alhas áttapintásakor',
          'Láz ÉS deréktáji/CVA ütögetési érzékenység HIÁNYZIK (Giordano-jel negatív)',
          'Hüvelyi folyás és irritáció hiánya (segít elkülöníteni a vaginistől/cervicitistől)',
          'Normál vitális paraméterek (nincs tachycardia, nincs hypotonia)'
        ],
        complications: ['Ascendáló akut pyelonephritis', 'Recidiváló cystitis (rUTI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tesztcsík', finding: 'Leukocyta esterase+, Nitrit+ (Gram-negatív pálcák jelenlétében)', interpretation: 'Tipikus klinikai tünetekkel együtt magas pozitív prediktív érték (>90%)' },
          { test: 'Vizelet üledék', finding: 'Pyuria (>10 FVS/látótér), fvs-csoportok, fvs-cilinderek nélkül', interpretation: 'Alsó húgyúti gyulladást igazol' }
        ],
        imaging: [
          { test: 'Képalkotás nem indikált', finding: 'Rutin nem komplikált cystitisben nem végzendő', interpretation: 'Kizárólag szövődmény vagy atípusos lefolyás esetén' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés (EAU 2026 / IDSA)', finding: '≥10^3 CFU/ml uropathogén baktérium', significance: 'Rutin nem komplikált cystitisben NEM szükséges! Indikációi: gyanított pyelonephritis, 2-4 héten belüli recidíva, atípusos tünetek, terhesség.' }
        ]
      },
      differential: [
        { disease: 'Vaginitis / Vulvovaginitis', distinguishing: 'Hüvelyi folyás, viszketés, a dysuria inkább külső irritációs jellegű' },
        { disease: 'Urethritis (STD - Chlamydia, Gonorrhoea, Mycoplasma)', distinguishing: 'Lassúbb lefolyás, új szexuális partner, urethralis váladékozás, steril pyuria' },
        { disease: 'Interstitialis cystitis / Hólyagfájdalom szindróma', distinguishing: 'Krónikus (>6 hét) fájdalom teli hólyagnál, negatív vizelettenyésztés' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: '1x egyszeri dózis', note: 'EAU 2026 és IDSA elsőként választandó szer (First-line)' },
            { drug: 'Nitrofurantoin', dose: '2x100mg PO (makrokristály)', duration: '5 nap', note: 'EAU 2026 és IDSA elsőként választandó szer (First-line)' },
            { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 nap', note: 'EAU 2026 elsőként választandó szer (First-line)' },
            { drug: 'Nitroxolin', dose: '3x250mg PO', duration: '5 nap', note: 'EAU 2026 elfogadott alternatíva' }
          ],
          inpatient: [
            { drug: 'Nem igényel kórházi felvételt', dose: '-', duration: '-', note: 'Kivételt képez a súlyos társbetegség vagy szövődmény' }
          ]
        },
        targeted: 'Tenyésztési eredmény alapján igazítandó. EAU 2026 és IDSA figyelmeztetés: Fluorokinolonok (Ciprofloxacin, Levofloxacin) és oralis 3. gen Cephalosporinok EMPIRIKUSAN KERÜLENDŐK nem komplikált cystitisben a mellékhatások és rezisztencia miatt!',
        supportive: [
          'Nem gyógyszeres terápia: Bőséges napi folyadékfogyasztás (min. 2.0-2.5 liter vízfogyasztás a baktériumok mechanikus kimosására).',
          'Gyakori, rendszeres vizeletürítés, a vizelet halogatásának kerülése.',
          'Symptomaticus fájdalomcsillapítás: NSAID (pl. Ibuprofen 3x400mg PO 3-5 napig) enyhe/mérsékelt tüneteknél önmagában is mérlegelhető az antibiotikum-stewardship részeként.',
          'Alhas melegítése (melegvizes palack, meleg borogatás) a hólyagizomzat görcsének oldására.',
          'Fitoterápia: Medveszőlőlevél-kivonat (Uvae ursi folium) alkalmazása rövid távon enyhítheti a panaszokat.'
        ],
        prevention: [
          'Életmódi megelőzés: Bőséges napi folyadékbevitel (>2L/nap), postcoitalis (szexuális aktus utáni 15 percen belüli) vizeletürítés, spermicid krémet tartalmazó óvszerek és diaphragma kerülése, elölről hátrafelé törlés székelés után.',
          'EAU 2026 Nem-antibiotikus profilaxis (Kiemelten ajánlott rUTI esetén):',
          '1) Helyi / Topikális ösztrogénpótlás (Estriol hüvelykúp/krém): Postmenopauzális nőknél bizonyítottan helyreállítja a hüvelyi Lactobacillus flórát (Erős EAU ajánlás!).',
          '2) Immunprofilaxis / Oralis immunostimuláció (OM-89 / Uro-Vaxom®): 1 kapszula/nap orálisan 3 hónapig (Erős EAU ajánlás rUTI megelőzésére!).',
          '3) D-mannóz: 2g/nap orálisan gátolja az E. coli fimbriák kötődését a hólyagfalhoz.',
          '4) Hólyag-instillációs terápia (GAG-réteg pótlás): Hialuronsav + kondroitin-szulfát (HA/CS) instilláció refrakter visszatérő cystitisben.',
          '5) Methenamine hippurate: 2x1g/nap orálisan (ép anatómiai húgyutak esetén).',
          '6) Probiotikumok: Vaginalis Lactobacillus crispatus pótlás.',
          'Antibiotikum profilaxis (Kizárólag utolsó lépésként, ha a nem-antibiotikus intézkedések sikertelenek): Postcoitalis (Nitrofurantoin 50mg vagy Fosfomycin 3g aktus után) vagy kis dózisú folyamatos profilaxis 3-6 hónapig (Nitrofurantoin 50-100mg este vagy Fosfomycin 3g 10 naponta).'
        ]
      },
      prognosis: {
        mortality: 'Nincs mortalitás',
        factors: 'Recidíva hajlam (20-30%-ban alakul ki visszatérő fertőzés)'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Akut nem komplikált pyelonephritis (Vesemedence-gyulladás)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-80%)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: '10-12 eset / 10 000 nő / év; kezeletlen cystitis szövődménye is lehet',
        risk_groups: ['Fiatal szexuálisan aktív nők', 'EAU ORENUC: O/R csoportba tartozók', 'Korábbi pyelonephritis anamnézis'],
        seasonality: 'Nincs',
        transmission: 'Ascendáló fertőzés a hólyagból az uretereken át (95%), ritkán hematogén'
      },
      pathomechanism: {
        steps: [
          'Ascendálás: A kórokozók a hólyagból feljutnak az ureteren keresztül a vesemedencébe (vesico-ureteralis reflux elősegítheti).',
          'Vese parenchyma invázió: A baktériumok elárasztják a vese vesemedencéjét és parenchymáját (különösen a velőállományt).',
          'Akut gyulladásos válasz: Heves granulocytás infiltráció, interstitialis ödéma, mikrotályogok képződése és tubuláris necrosis alakul ki.',
          'Szisztémás transzlokáció: A gyulladásos mediátorok (IL-1, IL-6, TNF-alpha) és endotoxinok a keringésbe jutva magas lázat, hidegrázást és szisztémás gyulladást okoznak.'
        ],
        virulence_factors: ['P-fimbriae (pyelonephritis-associated pili, vesesejtekhez kötődés)', 'Lipopoliszacharid (LPS endotoxin)', 'Kapszula (K-antigén)']
      },
      clinical: {
        incubation: '1-3 nap cystitis után',
        onset: 'Hirtelen, heves kezdet',
        symptoms: [
          { name: 'Magas láz és hidegrázás', description: 'Hirtelen felszökő magas láz (>38.5°C), rázó hideg és profúz izzadás a vese parenchymális fertőzésének és bakterémiának a jele.', severity: 'severe' },
          { name: 'Deréktáji / CVA fájdalom', description: 'Unilateralis vagy bilateralis tompa, állandó deréktáji fájdalom a vese tokjának (capsula fibrosa) feszülése miatt.', severity: 'severe' },
          { name: 'Gastrointestinalis tünetek', description: 'Kifejezett hányinger, hányás, étvágytalanság, hasi diszkomfort a vese peritoneális és celiacus reflex-irritációja miatt.', severity: 'moderate' },
          { name: 'Alsó húgyúti tünetek', description: 'Dysuria, pollakisuria és urgencia jelen lehetnek, de az esetek 30-50%-ában hiányoznak!', severity: 'moderate' },
          { name: 'Atípusos megjelenés idősekben', description: 'Idős vagy immunszupprimált betegeknél a láz hiányozhat; helyette delírium, zavartság, elesettség és hypotonia lehet a vezető tünet.', severity: 'severe' }
        ],
        physical_exam: [
          'Giordano-jel pozitív: Costovertebralis szöglet (CVA) ütögetési érzékenysége az érintett oldalon',
          'Láz (>38.5°C), tachycardia, szisztémás rossz közérzet',
          'Hasi érzékenység lehet jelen az azonos oldali hypochondriumban, de izomvédekezés nélkül',
          'Dehidráció jelei (száraz nyálkahártyák, csökkent turgor)'
        ],
        complications: ['Vesetályog / Perinephriticus tályog', 'Urosepsis és szeptikus sokk', 'Emphysematosus pyelonephritis (cukorbetegekben)', 'Vesepapilla necrosis', 'Akut vesekárosodás (AKI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett leukocytosis balra tolt fvs-képpel, granulocytosissal', interpretation: 'Szisztémás bakteriális fertőzés' },
          { test: 'CRP és Procalcitonin (PCT)', finding: 'Jelentősen emelkedett (CRP >100 mg/L, PCT >0.5 ng/mL)', interpretation: 'Parenchymális gyulladást és szepszis rizikót jelez' },
          { test: 'Vesefunkció és elektrolitok', finding: 'Kreatinin, karbamid emelkedése, eGFR csökkenése', interpretation: 'Akut vesekárosodás vagy dehidráció' },
          { test: 'Vizelet üledék', finding: 'Kifejezett pyuria, fvs-cilinderek (leukocyta fuzió - felső húgyúti specifikus!)', interpretation: 'Vese parenchymális gyulladást igazol' }
        ],
        imaging: [
          { modality: 'CT has/kismedence (EAU 2026 / IDSA)', finding: 'Ék alakú hypodenzitás a parenchyma-fázisban, vese megnagyobbodás, perinephriticus zsíroddéma', significance: 'Gold standard képalkotás szövődmények (tályog, obstrukció) kizárására. Indikáció: 48-72 órás célszerű AB utáni lázas perzisztencia.' },
          { modality: 'Has/vese UH', finding: 'Obstrukció (üregrendszeri tágulat), vesekő, tályog', significance: 'Elsőként választandó sugármentes képalkotás' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés (EAU 2026 / IDSA)', finding: '≥10^4 CFU/ml uropathogén baktérium', significance: 'MINDIG KÖTELEZŐen levenendő az antibiotikum megkezdése előtt!' },
          { test: 'Hemokultúra', finding: 'Bakterémia jelenléte (~15-20%-ban pozitív)', significance: 'Kórházi felvételt igénylő vagy lázas, szeptikus betegeknél kötelező (2 szett)' }
        ]
      },
      differential: [
        { disease: 'Urolithiasis (Vesekő)', distinguishing: 'Görcsös, derékból gátba sugárzó fájdalom, láz hiánya (ha nincs lázas elzáródás), hematuria dominál' },
        { disease: 'Akut appendicitis / Cholecystitis', distinguishing: 'Hasi status, peritonealitás, UH vizsgálat, nincs pyuria' },
        { disease: 'Kismedencei gyulladás (PID) / Adnexitis', distinguishing: 'Nőgyógyászati vizsgálati érzékenység, hüvelyi váladékozás' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7 nap', note: 'EAU 2026 elsővonalbeli oralis opció' },
            { drug: 'Cefpodoxim proxetil', dose: '2x200mg PO', duration: '10 nap', note: 'Oralis 3. gen cephalosporin alternatíva' },
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7 nap', note: 'CSAK AKKOR adható empirikusan, ha a helyi E. coli rezisztencia <10%! (EAU 2026 / IDSA)' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 nap', note: 'CSAK AKKOR adható empirikusan, ha a helyi E. coli rezisztencia <10%! (EAU 2026 / IDSA)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'EAU 2026 / IDSA első választandó parenterális szer' },
            { drug: 'Cefotaxim', dose: '3x2g IV', duration: '10-14 nap', note: 'Parenterális alternatíva' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 nap', note: 'Pseudomonas vagy korábbi AB kezelés esetén' },
            { drug: 'Gentamicin / Amikacin', dose: 'Single daily dose IV', duration: '3-5 nap', note: 'Súlyos esetben kombinációs opció' }
          ]
        },
        targeted: 'Antibiogram alapján korrigálandó. Ha oralis béta-laktamot választunk járóbetegként, kezdő 1x IV Ceftriaxon (1g) vagy Aminoglikozid dózis adása javasolt a sürgősségi osztályon!',
        supportive: [
          'Nem gyógyszeres terápia: Rehidráció parenterális (IV kristályos infúzió) vagy orális bőséges folyadékkal a renalis perfúzió fenntartására.',
          'Szigorú ágynyugalom a lázas fázisban.',
          'Mérsékelt láz- és fájdalomcsillapítás: Paracetamol (3-4x500-1000mg PO/IV) vagy Metamizol (3-4x500-1000mg IV/PO). NSAID-ok óvatosan adhatók a vesefunkció szoros ellenőrzése mellett.',
          'Hányinger és hányás csillapítása (Metoclopramid 3x10mg IV/PO vagy Ondansetron 4-8mg IV) az orális folyadék- és gyógyszer-tolerancia biztosítására.',
          'Vitális paraméterek (vérnyomás, pulzus, diurézis, véroxigén) és vesefunkció szoros monitorozása.'
        ],
        prevention: [
          'Cystitis időben történő, szakszerű kezelése.',
          'EAU 2026 nem-antibiotikus megelőző intézkedések alkalmazása (bőséges folyadékbevitel, OM-89 immunprofilaxis, lokalizált ösztrogén postmenopauzában).',
          'Esetlegesen meglévő urológiai rendellenességek (vesekő, vesico-ureteralis reflux) korrekciója.'
        ]
      },
      prognosis: {
        mortality: 'Megfelelő antibiotikum mellett <1%, de urosepsis vagy emphysematosus szövődmény esetén 10-20%',
        factors: 'Idős kor, cukorbetegség, urológiai obstrukció, multidrog-rezisztens (MDR/ESBL) kórokozó'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Szisztémás / Komplikált húgyúti fertőzés (cUTI)',
      pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus faecalis, Pseudomonas aeruginosa, Klebsiella, Proteus, Enterobacter</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Gyakori nozokomiális környezetben, urológiai és katéterezett betegek körében',
        risk_groups: ['EAU ORENUC: E, N, U, C kategóriák', 'Katéterezett betegek (CAUTI)', 'Férfiak (IDSA szerint eleve komplikált)', 'Terhes nők', 'Anatómiai/funkcionális rendellenességek (neurogén hólyag, obstrukció)', 'Veseelégtelenség / Transplantáció', 'Immunszuppresszió / Diabetes'],
        seasonality: 'Nincs',
        transmission: 'Ascendáló, katéter-asszociált (biofilm), nozokomiális terjedés'
      },
      pathomechanism: {
        steps: [
          'Hajlamosító tényezők: Anatómiai (szűkület, kő, prostata hypertrophia) vagy funkcionális (neurogén hólyag) elzáródás, vagy idegentest (hólyagkatéter, stent) akadályozza a vizeletáramlást.',
          'Biofilmképződés: A baktériumok (főleg Proteus, Pseudomonas, Enterococcus) ellenálló biofilmet képeznek az eszközök felületén, gátolva az antibiotikumok és az immunsejtek bejutását.',
          'Parenchymális és szisztémás invázió: A vizeletstasis és a megnövekedett intraluminalis nyomás miatt a baktériumok könnyen a szövetekbe és a vénás keringésbe jutnak, urosepsist váltva ki.'
        ],
        virulence_factors: ['Biofilm képzés', 'Multidrog-rezisztencia (ESBL, AmpC, Carbapenemase)', 'Ureáz termelés (Proteus - infektív kövek)']
      },
      clinical: {
        incubation: 'Változó',
        onset: 'Változó (lehet tünetszegény vagy heves szisztémás)',
        symptoms: [
          { name: 'Szisztémás gyulladásos tünetek', description: 'Magas láz, hidegrázás, tachycardia, tachypnea, szisztémás intoxikáció jelei.', severity: 'severe' },
          { name: 'Urosepsis / Szeptikus sokk jelei', description: 'Hypotonia (RR <90 mmHg), oliguria (<0.5 ml/kg/óra), zavartság, emelkedett szérum laktát szint - AZONNALI beavatkozást igényel!', severity: 'severe' },
          { name: 'Flank / Suprapubicus fájdalom', description: 'Deréktáji vagy alhasi fájdalom jelen lehet, de katéteres vagy neurogén betegeknél gyakran hiányzik.', severity: 'moderate' },
          { name: 'Alsó húgyúti tünetek', description: 'Dysuria, pollakisuria, vagy katéteres betegeknél zavaros, bűzös vizelet, katéter-elzáródás.', severity: 'moderate' },
          { name: 'Oligosymptomatikus / Atípusos forma', description: 'Időseknél vagy immunszupprimáltaknál a láz hiányozhat, kizárólag a tudatállapot megváltozása (delírium) vagy vérnyomásesés jelzi a bajt.', severity: 'severe' }
        ],
        physical_exam: [
          'Szisztémás tünetek: Láz vagy hypothermia (<36°C), tachycardia, tachypnea',
          'Vesetáji érzékenység vagy suprapubicus nyomásérzékenység',
          'Indwelling hólyagkatéter, cystostoma vagy ureterstent jelenléte',
          'Sokk jelei: hűvös, márványozott végtagok, megnyúlt kapilláris újratelődési idő'
        ],
        complications: ['Urosepsis és szeptikus sokk (mortalitás 20-40%)', 'Akut vesekárosodás (AKI)', 'Vesetályog, perinephriticus tályog', 'Ureter elzáródás és pyonephros']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tenyésztés (EAU 2026 / IDSA)', finding: 'Nők: ≥10^5 CFU/ml, Férfiak / Katéteresek: ≥10^4 CFU/ml szignifikáns csíraszám', interpretation: 'KÖTELEZŐen elvégzendő az antibiotikum megkezdése előtt!' },
          { test: 'Hemokultúra', finding: 'Pozitív baktérium izolálás (2 szett)', interpretation: 'Minden szisztémás/lázas esetben kötelező' },
          { test: 'Gyulladásos marker & Vesefunkció', finding: 'Procalcitonin (PCT), CRP, vérkép, kreatinin, laktát, vérgáz', interpretation: 'Sepsis és organikus diszfunkció monitorozása' }
        ],
        imaging: [
          { modality: 'CT Urográfia / Has-kismedence CT (EAU 2026 / IDSA)', finding: 'Húgyúti obstrukció, psoas/vesetályog, infektív kő, emphysematosus elváltozás', significance: 'KÖTELEZŐ az anatómiai hajlamosító tényező és forrás tisztázására!' },
          { modality: 'Sürgősségi Vese UH', finding: 'Üregrendszeri tágulat (hydronephrosis), pyonephros', significance: 'AZONNAL elvégzendő elzáródás kizárására' }
        ],
        microbiology: [
          { test: 'Célzott tenyésztés + Antibiogram', finding: 'MDR kórokozók gyanúja', significance: 'Célzott terápia alapja' }
        ]
      },
      differential: [
        { disease: 'Nem komplikált pyelonephritis', distinguishing: 'Nincs anatómiai/funkcionális eltérés, nincsenek rizikófaktorok' },
        { disease: 'Akut prostatitis', distinguishing: 'RDV során kifejezetten érzékeny, duzzadt prosztata' },
        { disease: 'Egyéb szeptikus gócpontok (Intraabdominalis sepsis, Pneumonia)', distinguishing: 'Anamnézis, képalkotók, fizikális lelet' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7-14 nap', note: 'Kizárólag enyhe, szisztémás tünetektől mentes esetben' },
            { drug: 'Ciprofloxacin / Levofloxacin', dose: 'PO', duration: '7-14 nap', note: 'Csak ha az elmúlt 6 hónapban nem kapott kinolont és a helyi rezisztencia <10% (EAU 2026 / IDSA)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7-14 nap', note: 'Elsővonalbeli opció' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '7-14 nap', note: 'Pseudomonas gyanú vagy nozokomiális fertőzés' },
            { drug: 'Cefepime', dose: '2x2g IV', duration: '7-14 nap', note: 'Pseudomonas és Enterobacteriaceae lefedés' },
            { drug: 'Meropenem', dose: '3x1g IV', duration: '7-14 nap', note: 'ESBL rizikó vagy szeptikus sokk' },
            { drug: 'Ceftazidim/avibactam vagy Cefiderocol', dose: 'IV', duration: '7-14 nap', note: 'Multidrog-rezisztens (MDR) Gram-negatív törzsek esetén (EAU 2026 / IDSA cUTI)' }
          ]
        },
        targeted: 'FORRÁSKONTROLL (Source Control) AZONNAL: Az elzáródott húgyutak tehermentesítése (percutan nephrostomia vagy DJ stent behelyezése), az indwelling hólyagkatéter azonnali cseréje vagy eltávolítása elengedhetetlen mind az EAU 2026, mind az IDSA cUTI irányelvek szerint!',
        supportive: [
          'Nem gyógyszeres terápia / Intenzív forráskontroll: Asepticus urológiai szervizelés, a záró katéter haladéktalan cseréje (az elrévült biofilm megelőzésére).',
          'Sepsis protokoll szerinti szupportív terápia: Agresszív IV folyadékpótlás (kristályos oldatok 30 ml/kg az első 3 órában) a keringés stabilizálására.',
          'Vasopressor terápia (Noradrenalin) ha a szisztolés vérnyomás és MAP <65 mmHg marad infúzió ellenére.',
          'Urológiai invazív intervenció (tályog percutan drainage, kő eltávolítása).',
          'Oxigénterápia, szoros intenzív osztályos monitorozás (diurézis, laktát, vérgáz).'
        ],
        prevention: [
          'Hólyagkatéterezés indikációjának szigorú korlátozása (amint lehet, el kell távolítani!).',
          'Zárt katéterrendszer fenntartása, aszeptikus katéterápolás.',
          'Aszimptomatikus bakteriuria felesleges antibiotikum-kezelésének KERÜLÉSE (megelőzi a rezisztens törzsek szelekcióját).',
          'Anatómiai obstrukciók korai urológiai megoldása.'
        ]
      },
      prognosis: {
        mortality: 'Urosepsis és szeptikus sokk esetén 20-40%',
        factors: 'Idős kor, nem megfelelő forráskontroll, multidrog-rezisztens (MDR) kórokozó, súlyos alapbetegség'
      }
    },
    {
      id: 'prostatitis',
      name: 'Akut és krónikus bakteriális prostatitis',
      pathogen: { type: 'Baktérium', name: '<i>E. coli</i> (80%), <i>Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus faecalis</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Férfiak 10-15%-a tapasztal életében prosztatagyulladást; az urológiai vizitek 8%-a',
        risk_groups: ['Fiatal és középkorú férfiak', 'Prosztata biopszián átesettek', 'Hólyagkatéterezett betegek', 'BPH / kismedencei diszfunkció', 'HIV / Cukorbetegség'],
        seasonality: 'Nincs',
        transmission: 'Ascendáló fertőzés fertőzött vizeletből (intraprostaticus reflux), transrectalis biopszia utáni direkt inokuláció'
      },
      pathomechanism: {
        steps: [
          'Intraprostaticus reflux: A fertőzött vizelet a prosztatacsatornákba jut a vizelés alatti magas intraurethralis nyomás hatására.',
          'Akut gyulladás (NIH Type I - ABP): A mirigyállományban kifejezett stroma-ödéma, leukocytás infiltráció és mikroabscessusok keletkeznek, ami a prosztata fokozott feszüléséhez és duzzanatához vezet.',
          'Krónikussá válás (NIH Type II - CBP): A baktériumok áthatolhatatlan biofilmet képeznek a prosztatakövek (prostatolithiasis) vagy a mirigyek felületén, ami megakadályozza az antibiotikumok bejutását és relapszáló fertőzéseket okoz.'
        ],
        virulence_factors: ['Biofilm képzés', 'Szerkezeti barrier (a prosztata tok és a savas pH gátolja sok antibiotikum penetrációját)']
      },
      clinical: {
        incubation: '1-7 nap',
        onset: 'Akut (ABP) hirtelen; Krónikus (CBP) elhúzódó, perzisztáló (>3 hónap)',
        symptoms: [
          { name: 'Akut: Szisztémás lázas tünetek', description: 'Hirtelen felszökő magas láz, hidegrázás, izomfájdalmak, influenzaszerű rossz közérzet.', severity: 'severe' },
          { name: 'Pelvicus / Gáttáji fájdalom', description: 'Jellegzetes gáttáji (perinealis), rectalis, suprapubicus fájdalom, amely a péniszbe, herékbe vagy deréktájba sugárzik.', severity: 'severe' },
          { name: 'LUTS és vizelési nehézség', description: 'Kifejezett dysuria, pollakisuria, urgencia, gyenge vizeletsugár, szakaszos vizelés.', severity: 'moderate' },
          { name: 'Akut vizeletretenció', description: 'A duzzadt prosztata teljes elzáródást okozhat, mely heves alhasi fájdalommal és a hólyag túltágulásával jár.', severity: 'severe' },
          { name: 'Krónikus: Visszatérő panaszok', description: 'Elhúzódó kismedencei/gáttáji diszkomfort, fájdalmas ejakuláció, recidiváló hólyaghurutok ugyanazon kórokozóval.', severity: 'moderate' }
        ],
        physical_exam: [
          'Rectalis Digitális Vizsgálat (RDV):',
          'AKUT PROSTATITISNÉL: A prosztata duzzadt, forró, feszülő, EXTRÉMEN ÉRZÉKENY. A PROSZTATAMASSZÁZS AKUTBAN SZIGORÚAN TILOS (bakterémia és urosepsis kockázata!)',
          'KRÓNIKUS PROSTATITISNÉL: A prosztata lehet normál tapintatú, tömöttebb vagy enyhén érzékeny.',
          'Hólyag-distensio tapintható suprapubicus tompulattal vizeletretenció esetén.'
        ],
        complications: ['Prosztatatályog (főleg cukorbetegekben)', 'Urosepsis', 'Akut vizeletretenció', 'Epididymo-orchitis', 'Krónikus kismedencei fájdalom szindróma (CPPS) kialakulása']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet üledék és tesztcsík', finding: 'Kifejezett pyuria, bakteriuria', interpretation: 'Húgyúti fertőzést igazol' },
          { test: 'Gyulladásos panel', finding: 'Magas leukocytosis, jelentősen emelkedett CRP', interpretation: 'Akut szisztémás gyulladást jelez' },
          { test: 'Szérum PSA', finding: 'Kifejezetten emelkedett (akár >20-50 ng/mL)', interpretation: 'Akut gyulladás következménye! Akut fázisban daganatszűrésre NEM alkalmas, a gyulladás gyógyulása után 2-3 hónappal kontrollálandó.' }
        ],
        imaging: [
          { modality: 'Transrectalis UH (TRUS) vagy Kismedencei MRI', finding: 'Prosztatatályog (hipoechogén/folyadéknívót mutató terület)', significance: 'Indikált, ha 48-72 órás antibiotikum terápia ellenére a beteg lázas marad vagy kismedencei tályog gyanúja merül fel.' }
        ],
        microbiology: [
          { test: 'Akut: Középsugár vizelet tenyésztés (EAU 2026)', finding: '≥10^4 CFU/ml uropathogén', significance: 'Prosztatamasszázs nélkül vétel!' },
          { test: 'Krónikus: Meares-Stamey 4-pohár próba vagy 2-pohár próba (EAU 2026)', finding: 'Masszázs utáni vizeletben (VB3) vagy prosztataváladékban (EPS) 10-szeres baktériumszám a masszázs előtti vizelethez (VB2) képest', significance: 'Gold standard a krónikus bakteriális prostatitis diagnosztikájában!' }
        ]
      },
      differential: [
        { disease: 'BPH (Jóindulatú prosztata megnagyobbodás)', distinguishing: 'Lassú progresszió, nincsenek infekciós jelek, nincs láz' },
        { disease: 'Krónikus kismedencei fájdalom szindróma (CPPS / NIH Type III)', distinguishing: 'Hasonló fájdalmas tünetek, de a vizelet és prosztataváladék tenyésztése tartósan negatív' },
        { disease: 'Prosztata carcinoma', distinguishing: 'Tenyésztés negatív, kemény göb az RDV során, akut tünetek hiánya' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fluoroquinolones (Levofloxacin / Ciprofloxacin)', dose: 'Levofloxacin 1x500mg PO vagy Ciprofloxacin 2x500mg PO', duration: 'Akutban 2-4 hét, Krónikusban 4-6 hét!', note: 'EAU 2026 és IDSA első választandó szerek a kiváló prosztata-szöveti penetráció miatt' },
            { drug: 'Trimethoprim-sulfamethoxazole (Cotrimoxazol)', dose: '2x960mg PO', duration: '4-6 hét', note: 'Alternatív választás krónikus prostatitisben' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x2g IV', duration: 'A láztalanságig, majd orális váltás', note: 'Súlyos akut prostatitis esetén' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: 'A láztalanságig', note: 'Szeptikus vagy nozokomiális esetben' }
          ]
        },
        targeted: 'Antibiogram alapján igazítandó. EAU 2026: A gyógyszerelést a prosztatastroma jó lipid-oldékony penetrációja szerint kell kiválasztani (Fluorokinolonok, Cotrimoxazol, Doxycyclin).',
        supportive: [
          'Nem gyógyszeres terápia / Vizelet elvezetés: Akut vizeletretenció esetén SUPRAPUBICUS KATÉTER (Cystostoma) behelyezése kötelező! Transurethralis katéter behelyezése AKUT PROSTATITISBEN KERÜLENDŐ, mert súlyosbítja a gyulladást és bakterémiát okozhat.',
          'Alfa-1 adrenoreceptor blokkolók (pl. Tamsulosin 0.4mg PO qd vagy Silodosin 8mg PO qd) adása a prosztatanyak ellazítására, a vizeletáramlás megkönnyítésére és a fájdalom csökkentésére.',
          'Gyulladás- és fájdalomcsillapítás: NSAID (Ibuprofen 3x400mg PO vagy Celecoxib) 2-4 hétig.',
          'Meleg ülőfürdő (38-40°C), gáttáji terhelés csökkentése (speciális lyukas ülőpárna használata).',
          'Székrekedés megelőzése (székletlágyítók), bőséges folyadékbevitel.'
        ],
        prevention: [
          'Húgyúti fertőzések korai, teljes kezelése.',
          'EAU 2026 ajánlás prosztata biopszia előtt: Célzott rectalis törlet alapú profilaxis, vagy Ceftriaxon / Fosfomycin profilaxis (Fluorokinolon monoterápia kerülendő a magas rezisztencia miatt!).'
        ]
      },
      prognosis: {
        mortality: 'Akut esetben alacsony megfelelő terápia mellett, de urosepsis alakulhat ki; Krónikus esetben a mortalitás nulla, de az életminőséget jelentősen rontja',
        factors: 'Prosztata Tályog kialakulása, biofilm képződés, CPPS-be való átmenet'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Aszimptomatikus bakteriuria (ASB)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli, Enterococcus faecalis, Klebsiella, Proteus, Streptococcus agalactiae (GBS)</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Egészséges nők: 3-5%, Cukorbetegek: 9-27%, Idős otthoni lakók: 25-50%, Tartós katéteresek: 100%',
        risk_groups: ['Idősek', 'Cukorbetegek', 'Hólyagkatétert viselők', 'Terhes nők', 'Gerincvelő-sérültek'],
        seasonality: 'Nincs',
        transmission: 'Endogén uropathogén kolonizáció'
      },
      pathomechanism: {
        steps: [
          'Kommensalis kolonizáció: Alacsony virulenciájú baktériumtörzsek (melyekből hiányoznak a P-fimbriák és hemolizinek) kolonizálják a hólyagot anélkül, hogy szöveti inváziót vagy gyulladásos kaszkádot indítanának el.',
          'Immun-tolerancia: A gazdaszervezet immunrendszere és a baktériumok között stabil egyensúlyi állapot alakul ki.',
          'Protektív hatás: A kolonizáló avirulens törzsek jelenléte megelőzheti a virulensebb, agresszív felülfertőző kórokozók megtelepedését!'
        ],
        virulence_factors: ['Hiányzó vagy csökkent virulenciafaktorok (fimbria-hiány)']
      },
      clinical: {
        incubation: '-',
        onset: 'Tünetmentes',
        symptoms: [
          { name: 'Klinikai tünetek teljes HIÁNYA', description: 'A betegnek SEMMILYEN alsó vagy felső húgyúti panaszai (nincs dysuria, nincs pollakisuria, nincs láz, nincs deréktáji fájdalom) nincsenek. A bakteriuria kizárólag szűrővizsgálat vagy egyéb okból végzett vizeletvizsgálat melléklelete.', severity: 'mild' }
        ],
        physical_exam: [
          'Teljesen negatív fizikális lelet',
          'A zavaros vagy bűzös vizelet ÖNMAGÁBAN NEM tünet és NEM képez diagnosztikai vagy kezelési indikációt! (EAU 2026 / IDSA)',
          'Nincs suprapubicus vagy vesetáji nyomásérzékenység'
        ],
        complications: ['Indokolatlan antibiotikum használat -> Multidrog-rezisztencia és Clostridioides difficile colitis kialakulása!', 'Pyelonephritis és koraszülés kockázata TERHESSÉGBEN (ezért terhesekben kötelezően kezelendő!)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tenyésztés (EAU 2026 / IDSA)', finding: 'Nőkben: ≥10^5 CFU/ml ugyanazon baktériumfajjal 2 EGYMÁST KÖVETŐ tiszta középsugár vizeletmintában; Férfiakban: ≥10^5 CFU/ml 1 tiszta középsugár mintában', interpretation: 'Szigorú diagnosztikus kritérium aszimptomatikus esetben' },
          { test: 'Katéteres vizeletminta', finding: '≥10^5 CFU/ml 1 mintában', interpretation: 'Bakteriuria jelenléte' },
          { test: 'Vizelet üledék', finding: 'Pyuria gyakran jelen van', interpretation: 'A pyuria jelenléte önmagában NEM INDOKOLJA az antibiotikum adását tünetmentes betegnél! (EAU 2026 / IDSA)' }
        ],
        imaging: [
          { test: 'Képalkotás nem indikált', finding: 'Nincs javallat', interpretation: 'Kizárólag tünetmentes esetben nem végzendő' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés szűrés', finding: 'Kizárólag indokolt betegcsoportban szűrendő', significance: 'KIZÁRÓLAG Terhességben és nyálkahártya-sérüléssel járó urológiai műtétek előtt szűrendő!' }
        ]
      },
      differential: [
        { disease: 'Symptomaticus cystitis / pyelonephritis', distinguishing: 'Szubjektív panaszok (dysuria, urgencia) vagy szisztémás tünetek (láz) jelenléte' },
        { disease: 'Vizeletminta kontamináció', distinguishing: 'Alacsonyabb csíraszám (<10^5 CFU/ml), vegyes flóra' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NINCS ANTIBIOTIKUM KEZELÉS (DO NOT TREAT)', dose: '-', duration: '-', note: 'EAU 2026 és IDSA szigorú ajánlás: NEM KEZELENDŐ! (Kivételt képez a terhesség és az urológiai műtét)' }
          ],
          inpatient: [
            { drug: 'NINCS ANTIBIOTIKUM KEZELÉS (DO NOT TREAT)', dose: '-', duration: '-', note: 'Nincs kezelési indikáció idős, cukorbeteg, katéteres vagy transzplantált betegeknél sem' }
          ]
        },
        targeted: 'KIZÁRÓLAGOS KEZELÉSI INDIKÁCIÓK (EAU 2026 / IDSA ASB Guidelines):\n1) TERHES NŐK: Szűrendő a 12-16. héten. Kezelendő célzottan tenyésztés alapján (Fosfomycin 3g 1x, Nitrofurantoin 2x100mg 5 nap, Cefalexin vagy Amoxicillin-clavulanat 5-7 nap) a pyelonephritis és koraszülés megelőzésére.\n2) NYÁLKAHÁRTYA-SÉRÜLÉSSEL JÁRÓ UROLÓGIAI MŰTÉTEK ELŐTT (pl. TURP, ureteroscopia): A beavatkozás előtt célzott antibiotikum adandó.\nTILOS KEZELNI: Postmenopauzális nőkben, cukorbetegekben, tartós katéteresekben, időskorúakban, gerincvelő-sérültekben!',
        supportive: [
          'Nem gyógyszeres terápia / Edukáció: A beteg és a szakápolók tájékoztatása, hogy a vizelet szaga, színe vagy zavarossága önmagában nem fertőzés és nem igényel antibiotikumot.',
          'Bőséges folyadékfogyasztás, a hólyag rendszeres kiürítése.',
          'A felesleges vizelet-szűrőtesztek leállítása a nem indikált betegcsoportokban.'
        ],
        prevention: [
          'Az indokolatlan vizeletvizsgálatok és tenyésztések KERÜLÉSE.',
          'A hólyagkatéterek mielőbbi eltávolítása.',
          'Megfelelő higiéné és hidráció.'
        ]
      },
      prognosis: {
        mortality: 'Az aszimptomatikus bakteriuria nem növeli a mortalitást, kezelése kifejezetten káros a szövődmények és rezisztencia miatt',
        factors: 'Terhességben kezeletlenül pyelonephritishez és koraszüléshez vezethet'
      }
    }
  ]
};
