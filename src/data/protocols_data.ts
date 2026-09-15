import { ClinicalProtocol } from '../types';

export interface ProtocolCategory {
  id: string;
  name: {
    hu: string;
    en: string;
    de: string;
  };
}

export const protocolCategories: ProtocolCategory[] = [
  { id: 'all', name: { hu: 'Összes témakör', en: 'All Topics', de: 'Alle Themen' } },
  { id: 'sepsis', name: { hu: 'Szepszis & Intenzív', en: 'Sepsis & ICU', de: 'Sepsis & Intensiv' } },
  { id: 'respiratory', name: { hu: 'Légúti fertőzések (CAP / HAP)', en: 'Respiratory (CAP / HAP)', de: 'Respiratorisch (CAP / HAP)' } },
  { id: 'bone_joint', name: { hu: 'Csont- és ízület (PJI / Osteomyelitis)', en: 'Bone & Joint (PJI / Osteomyelitis)', de: 'Knochen & Gelenk (PJI / Osteomyelitis)' } },
  { id: 'cns', name: { hu: 'Központi idegrendszer (Meningitis)', en: 'Central Nervous System', de: 'Zentralnervensystem' } },
  { id: 'gi', name: { hu: 'Hasi & C. diff & FMT', en: 'Abdominal, CDI & FMT', de: 'Abdominal, CDI & FMT' } },
  { id: 'cardio', name: { hu: 'Endocarditis & Cardiovascularis', en: 'Infective Endocarditis', de: 'Infektiöse Endokarditis' } },
  { id: 'urinary', name: { hu: 'Húgyúti fertőzések (UTI)', en: 'Urinary Tract Infections', de: 'Harnwegsinfektionen' } },
  { id: 'ipc', name: { hu: 'Infekciókontroll & Prevenció', en: 'Infection Control & Prevention', de: 'Infektionskontrolle & Prävention' } },
  { id: 'hepatology_hiv', name: { hu: 'Hepatológia & HIV', en: 'Hepatology & HIV', de: 'Hepatologie & HIV' } },
  { id: 'sti', name: { hu: 'Nemi úton terjedő fertőzések (STI)', en: 'Sexually Transmitted Infections', de: 'Sexuell übertragbare Infektionen' } },
  { id: 'zoonosis', name: { hu: 'Zoonózis & Lyme-kór', en: 'Zoonoses & Lyme Disease', de: 'Zoonosen & Lyme-Borreliose' } },
  { id: 'fungal', name: { hu: 'Invazív gombafertőzések', en: 'Invasive Fungal Infections', de: 'Invasive Pilzinfektionen' } }
];

export const clinicalProtocols: ClinicalProtocol[] = [
  // ==================== MAGYARORSZÁGI SZAKMAI IRÁNYELVEK ====================
  {
    id: 'hu-cdi-2016',
    title: 'Clostridioides difficile fertőzések (CDI) diagnosztikája, terápiája és megelőzése (OEK módszertani levél)',
    originalTitle: 'Módszertani levél a Clostridium difficile által okozott fertőzések surveillance-áról, diagnosztikájáról, terápiájáról és megelőzéséről (OEK / Szakmai Kollégium)',
    organization: 'Országos Epidemiológiai Központ (OEK / NNGYK jogelőd) & Infektológia Tagozat',
    scope: 'hungarian',
    category: 'gi',
    year: '2016 (Hivatalosan nem frissült 2021-ben; a hazai klinikum az ESCMID és IDSA ajánlásokat követi)',
    url: 'https://www.nnk.gov.hu/',
    pdfUrl: 'https://nngyk.gov.hu/hu/modszertani-levelek/2016-modszertani-levelek.html',
    description: 'A hivatalos magyarországi módszertani levél 2014-ben jelent meg az OEK és az Infektológia Tagozat gondozásában, és 2021-ben hivatalosan nem frissült. Emiatt a hazai egyetemi klinikákon és kórházi osztályokon a terápia és diagnosztika közvetlenül a nemzetközi ESCMID (2021) és IDSA (2021) irányelveket követi (első vonalban a Fidaxomicin preferenciája a Vancomycinnel szemben, orális Metronidazol kerülése, kétlépcsős GDH + Toxin tesztelés, és a korai FMT indikációk).',
    keyPoints: [
      'Fontos megjegyzés: A hivatalos magyarországi módszertani levél 2014-es keltezésű és 2021-ben NEM frissült; a hazai szakorvosi gyakorlat az ESCMID 2021 és IDSA 2021 protokolljait tekinti érvényes arany standardnak',
      'Korszerű első vonal: Fidaxomicin 2x200 mg PO 10 napig (vagy pulzáló séma) a szignifikánsan alacsonyabb recidívaarány miatt; alternatíva: Vancomycin 4x125 mg PO',
      'Orális Metronidazol monoterápia a modern nemzetközi evidenciák szerint NEM javasolt első vonalban (magas kiújulási arány és terápiás kudarc)',
      'Súlyos-fulmináns CDI: Nagy dózisú orális Vancomycin (4x500 mg PO vagy NG szondán) + Metronidazol 3x500 mg IV + sürgős sebészeti konzílium',
      'Ismétlődő recidívák (≥2 relapszus): Székletmikrobióta-transzplantáció (FMT) adása erősen javasolt'
    ],
    tags: ['clostridioides difficile', 'CDI', 'OEK', 'ESCMID', 'fidaxomicin', 'vancomycin', 'FMT', 'hasmenés', 'nem frissült 2021-ben']
  },
  {
    id: 'hu-fmt-2025',
    title: 'A hagyományos intesztinális mikrobióta-transzplantáció (FMT) kivitelezése (pl. rekurráló C. difficile fertőzésben)',
    originalTitle: 'Egészségügyi szakmai irányelv a hagyományos intesztinális mikrobióta-transzplantáció (FMT) eljárásrendjéről és kivitelezéséről',
    organization: 'Egészségügyi Szakmai Kollégium – Gasztroenterológia és Hepatológia + Infektológia Tagozat',
    scope: 'hungarian',
    category: 'gi',
    year: 'EüK 2025/14. szám / Hivatalos',
    url: 'https://egeszsegugyikozlony.hu/',
    pdfUrl: 'https://kollegium.okfo.gov.hu/sites/eszk_portal/pfile/file?path=/tagozatok/27._Infektologia/dokumentumok/kulso-publikus/a-hagyomanyos-intesztinalis-mikrobiota-transzplantacios-eljaras-kivitelezeserol',
    description: 'Hivatalos egészségügyi szakmai irányelv az intesztinális mikrobióta-transzplantáció (FMT / széklet-transzplantáció) indikációiról és kivitelezéséről (megjelent: Egészségügyi Közlöny 2025/14. szám). Részletezi az alkalmazást többszörösen rekurráló vagy refrakter Clostridioides difficile fertőzésben (CDI), a szigorú donorkiválasztási és szűrési protokollt (anamnézis, vér- és székletvizsgálatok multirezisztens kórokozókra és enterális vírusokra), a szuszpenzió elkészítését, a beadási utakat (kolonoszkópos instilláció jobb colonfélbe/cecumhoz, szondás beadás, liofilizált kapszula), az antibiotikumok előzetes leállítását és a minőségbiztosítási regisztert.',
    keyPoints: [
      'Kiemelt indikáció: Többszörösen rekurráló (≥2 recidíva megfelelő antibiotikum-terápia után) vagy standard kezelésre refrakter súlyos Clostridioides difficile fertőzés (CDI)',
      'Szigorú donorkiválasztás és szűrés: Részletes anamnézis (metabolikus szindróma, IBD, malignoma, antibiotikum-használat kizárása); kötelező laboratóriumi szűrés MDRO baktériumokra (CRE, VRE, MRSA, ESBL), vírusokra és parazitára',
      'Beadási modalitások: Kolonoszkópiás instilláció a terminalis ileumba és a jobb colonfélbe a legmagasabb tartós eradikációs aránnyal (>90%); alternatívaként retenciós beöntés, nazoduodenális szonda vagy orális savrezisztens mikrobiom-kapszula',
      'Kezelés időzítése: A CDI-ellenes antibiotikumot (vancomycin vagy fidaxomicin) 24-48 órával az FMT beavatkozás előtt le kell állítani, hogy a donor mikrobióta megtelepedése biztosított legyen',
      'Minőségbiztosítás és követés: Kötelező intézményi és országos regisztráció a hosszú távú hatásosság, a recidívák és az infekciókontroll biztonságosság monitorozására'
    ],
    tags: ['FMT', 'széklet mikrobióta transzplantáció', 'clostridioides difficile', 'CDI', 'mikrobiom', 'Egészségügyi Közlöny', 'EüK 2025/14', 'gasztroenterológia']
  },
  {
    id: 'hu-biliary-2024',
    title: 'Epeút- és epehólyag-gyulladás: diagnosztikus kritériumok és terápia',
    originalTitle: 'Egészségügyi szakmai irányelv – Epeút- és epehólyag-gyulladás: diagnosztikus kritériumok és terápia',
    organization: 'Egészségügyi Szakmai Kollégium – Gasztroenterológia és hepatológia Tagozat',
    scope: 'hungarian',
    category: 'gi',
    year: 'Hatályos szakmai irányelv',
    url: 'https://kollegium.okfo.gov.hu/sites/eszk_portal/pfile/file?path=/tagozatok/16._Gasztroenterologia_es_hepatologia/dokumentumok/kulso-publikus/epeut--es-epeholyag-gyulladas-diagnosztikus-kriteriumok-es-terapia',
    pdfUrl: 'https://kollegium.okfo.gov.hu/sites/eszk_portal/pfile/file?path=/tagozatok/16._Gasztroenterologia_es_hepatologia/dokumentumok/kulso-publikus/epeut--es-epeholyag-gyulladas-diagnosztikus-kriteriumok-es-terapia',
    description: 'Hivatalos egészségügyi szakmai irányelv a felnőttkori acut cholecystitis és acut cholangitis diagnosztikájáról, súlyossági besorolásáról és komplex terápiájáról (TG18 / Tokyo Guidelines hazai adaptáció). Részletezi a klinikai és képalkotó kritériumokat, a sürgősségi epeúti dekompresszió (ERCP / EST, PTCD) indikációit és időzítését, a korai laparoszkópos műtétet, valamint az empirikus és célzott antibiotikum-választást.',
    keyPoints: [
      'Diagnosztikus kritériumok és súlyosság: A TG18 kritériumok alapján Grade I (enyhe), Grade II (középsúlyos) és Grade III (szervi elégtelenséggel járó súlyos) stádiumok elkülönítése',
      'Akut cholangitis sürgősségi ellátása: Súlyos (Grade III) vagy szeptikus állapotban azonnali/sürgős epeúti dekompresszió (ERCP/sphincterotomia vagy PTCD) kötelező forráskontrollként',
      'Akut cholecystitis sebészi időzítése: Korai laparoszkópos cholecystectomia javasolt a tünetek kezdetét követő 72 órán (legfeljebb 7 napon) belül',
      'Antimikrobiális terápia: Enyhe/közösségi formákban Ceftriaxon (+/- Metronidazol); súlyos, nozokomiális vagy korábban stentelt esetben Piperacillin-Tazobactam vagy Meropenem',
      'Kezelés időtartama: Hatékony forráskontroll esetén általában 4-7 nap; szövődménymentes cholecystectomiát követően a beavatkozást követő 24 órán belül leállítható'
    ],
    tags: ['epeút', 'epehólyag', 'cholecystitis', 'cholangitis', 'Tokyo Guidelines', 'TG18', 'ERCP', 'ceftriaxon', 'piperacillin-tazobactam', 'gasztroenterológia']
  },
  {
    id: 'hu-meningococcus-2026',
    title: '2026 - Módszertani levél az invazív meningococcus betegségről III., átdolgozott kiadás',
    originalTitle: 'Módszertani levél az invazív meningococcus betegségről III., átdolgozott kiadás (NNGYK 2026)',
    organization: 'Nemzeti Népegészségügyi és Gyógyszerészeti Központ (NNGYK)',
    scope: 'hungarian',
    category: 'cns',
    year: '2026 / Hatályos módszertani levél',
    url: 'https://nngyk.gov.hu/hu/modszertani-levelek/2026-modszertani-level-az-invaziv-meningococcus-betegsegrol-iii-atdolgozott-kiadas.html',
    pdfUrl: 'https://nngyk.gov.hu/hu/modszertani-levelek/2026-modszertani-level-az-invaziv-meningococcus-betegsegrol-iii-atdolgozott-kiadas.html',
    description: 'Az NNGYK 2026-os átdolgozott módszertani levele a Neisseria meningitidis által okozott invazív megbetegedések (meningitis purulenta, meningococcemia, fulmináns szeptikus sokk / Waterhouse-Friderichsen szindróma) korai felismeréséről, sürgősségi ellátásáról, a szoros kontaktusok kemoprofilaxisáról, a járványügyi felügyeletről és a védőoltásokról (MenB és MenACWY).',
    keyPoints: [
      'Sürgősségi ellátás: Típusos petechiák/purpurák és meningealis tünetek esetén azonnal Ceftriaxon 2g IV/IM adandó, a lumbálpunkció a terápia indítását soha nem késleltetheti',
      'Járványügyi intézkedések: Azonnali hatósági jelentés és szigorú cseppfertőzés elleni izoláció az adekvát antibiotikum-kezelés megkezdését követő 24 órán át',
      'Szoros kontaktusok sürgősségi kemoprofilaxisa (24 órán belül): Felnőtteknél Rifampicin 2x600 mg PO 2 napig, vagy Ciprofloxacin 1x500 mg PO, vagy Ceftriaxon 1x250 mg IM (pl. terheseknél)',
      'Megelőzés és védőoltások: MenB (rekombináns) és MenACWY (konjugált) vakcinák csecsemők, kisgyermekek, serdülők és magas kockázatú csoportok (pl. asplenia, komplement-hiány) számára'
    ],
    tags: ['meningococcus', 'invazív meningococcus', 'meningitis', 'NNGYK', '2026', 'rifampicin', 'ciprofloxacin', 'kemoprofilaxis', 'védőoltás', 'cns']
  },
  {
    id: 'hu-hepb-c-2022',
    title: 'A krónikus hepatitis B és C fertőzések korszerű diagnosztikája és antivirális kezelése',
    originalTitle: 'Magyar Hepatológiai Irányelv: Direkt ható antivirális szerek (DAA) alkalmazása hepatitis C-ben és nukleotid analógok HBV-ben',
    organization: 'Magyar Gasztroenterológiai Társaság (MGT) & Infektológiai Szakmai Kollégium',
    scope: 'hungarian',
    category: 'hepatology_hiv',
    year: '2022 / Hatályos',
    url: 'https://gastroent.hu/',
    description: 'Pángenotípusos direkt ható antivirális (DAA) szerek (Sofosbuvir/Velpatasvir, Glecaprevir/Pibrentasvir) 8-12 hetes kúrája krónikus hepatitis C-ben, 98% feletti tartós virológiai válasszal (SVR12). Krónikus hepatitis B-ben magas rezisztenciagátú nukleotid/nukleozid analógok (Entecavir, Tenofovir TAF/TDF) tartós szuppresszióra.',
    keyPoints: [
      'Hepatitis C pángenotípusos DAA terápia >95%-os virológiai gyógyulást (SVR) eredményez interferonmentesen',
      'Hepatitis B felnőttkori kezelése: Entecavir vagy TAF/TDF hosszú távon a cirrózis és HCC megelőzésére',
      'Fibrosis stádium meghatározása tranziens elasztográfiával (FibroScan) kötelező a HCC surveillance tervezéséhez'
    ],
    tags: ['hepatitis C', 'hepatitis B', 'DAA', 'sofosbuvir', 'entecavir', 'tenofovir', 'cirrózis']
  },
  {
    id: 'hu-hiv-care-2024',
    title: 'HIV-fertőzött felnőttek betegútja az egészségügyi rendszerben (felismerés, cART bevonás, gondozás)',
    originalTitle: 'Egészségügyi szakmai irányelv a HIV-fertőzött felnőttek betegútjáról az egészségügyi rendszerben (felismerés, cART bevonás, gondozás)',
    organization: 'Egészségügyi Szakmai Kollégium – Infektológia Tagozat (BM Egészségügyi Államtitkárság)',
    scope: 'hungarian',
    category: 'hepatology_hiv',
    year: '2024 / NEAK letöltés',
    url: 'https://kollegium.okfo.gov.hu/sites/eszk_portal/pfile/file?path=/tagozatok/27._Infektologia/dokumentumok/kulso-publikus/hiv-fertozott-felnottek-betegutja-az-egeszsegugyi-rendszerben-a-korkep-felismerese-az-antiretroviralis-kezelesbe-valo-bevonasa-es-a-betegek-gondozasban-tartasa',
    description: 'A felnőttkori HIV-fertőzöttek standardizált hazai betegútja és komplex gondozási iránya (2024): korai felismerés (indikátor-betegségek, opt-out szűrés), azonnali decortikált betegút a decentralizált regionális HIV központokba, cART azonnali indítása a CD4-számtól függetlenül (Test and Treat), U=U (Undetectable = Untransmittable) elv klinikai érvényesülése, adherencia támogatás és a pre- / post-expozíciós profilaxis (PrEP / PEP) protokolljai.',
    keyPoints: [
      'Betegút-szervezés: Reaktív szűrőteszt után kötelező laboratóriumi konfirmáció és azonnali bevonás a regionális HIV-gondozó centrumokba',
      'Test and Treat stratégia: Azonnali kombinált cART terápia indítása CD4-sejtszámtól függetlenül a diagnózis felállításakor',
      'Első vonalbeli rejim: Korszerű, magas rezisztenciagátú INSTI-alapú hármas vagy kettős kombinációk (Bictegravir/TAF/FTC vagy Dolutegravir-bázisú terápia)',
      'U=U elv (Undetectable = Untransmittable): Tartósan detektálhatatlan vírusszám (<50 kópia/ml) esetén a fertőzés szexuális úton nem adható át',
      'Expozíció utáni profilaxis (PEP): Legkésőbb 72 órán (optimálisan 2-4 órán) belül indítandó 28 napig; indikáció esetén PrEP programba vonás'
    ],
    tags: ['HIV', 'AIDS', 'betegút', 'cART', 'INSTI', 'Test and Treat', 'U=U', 'PrEP', 'PEP', 'NEAK', '2024']
  },
  {
    id: 'hu-lyme-2024',
    title: 'Lyme-borreliosis diagnózisa és kezelése',
    originalTitle: 'Egészségügyi szakmai irányelv a Lyme-borreliosis diagnózisáról és kezeléséről',
    organization: 'Egészségügyi Szakmai Kollégium – Infektológia Tagozat',
    scope: 'hungarian',
    category: 'zoonosis',
    year: '2024 / NEAK letöltés',
    url: 'https://kollegium.okfo.gov.hu/sites/eszk_portal/pfile/file?path=/tagozatok/27._Infektologia/dokumentumok/kulso-publikus/a-lyme-borreliosis-diagnozisa-es-kezelese',
    description: 'A kullancsok által terjesztett Borrelia burgdorferi sensu lato fertőzés 2024-es szakmai kollégiumi irányelve. Hangsúlyozza, hogy Erythema migrans (EM) esetén a diagnózis TISZTÁN KLINIKAI – rutinszerű laboratóriumi/szerológiai vizsgálat NEM indokolt és kerülendő (álnegativitás korán). Disszeminált és késői kórképekben (neuroborreliosis, Lyme arthritis, acrodermatitis) kötelező a szigorúan kétlépcsős szerológiai algoritmus (szenzitív ELISA/CLIA szűrés + Western blot / Line blot konfirmáció). Doxycyclin, Amoxicillin vagy Ceftriaxon alkalmazása; a hónapokig tartó felesleges kombinált antibiotikum-kezelés szigorúan ellenjavallt!',
    keyPoints: [
      'Erythema migrans (EM): Típusos terjedő ovális/gyűrűs bőrpír esetén a diagnózis TISZTÁN KLINIKAI – szerológiai tesztelés NEM szükséges és félrevezető',
      'Kétlépcsős szerológia disszeminált formákban: Szenzitív ELISA/CLIA szűrés, majd kötelező Western blot (Line blot) konfirmáció (önmagában izolált IgM késői panaszoknál nem értékelhető)',
      'Korai lokalizált fertőzés kezelése: Doxycyclin 2x100 mg PO 14 napig (gyermekeknél/terheseknél Amoxicillin 3x500-1000 mg vagy Cefuroxim-axetil 2x500 mg 14 napig)',
      'Neuroborreliosis (Bannwarth-szindróma, facialis paresis, meningitis): Ceftriaxon 1x2g IV 14-21 napig, vagy orális Doxycyclin emelt dózisban (2x200 mg)',
      'Post-Lyme szindróma: Hónapokig tartó perzisztáló aspecifikus panaszok esetén a hosszas antibiotikum-kúrák hatástalanok, nem javasoltak és kifejezetten veszélyesek'
    ],
    tags: ['Lyme', 'borrelia', 'erythema migrans', 'neuroborreliosis', 'doxycyclin', 'ceftriaxon', 'kullancs', 'NEAK', '2024']
  },
  {
    id: 'hu-vap-prevention-2019',
    title: 'Az országos tisztifőorvos módszertani levele a gépi lélegeztetéssel összefüggő pneumónia megelőzésére 2019',
    originalTitle: 'Az országos tisztifőorvos módszertani levele a gépi lélegeztetéssel összefüggő pneumónia megelőzésére',
    organization: 'Nemzeti Népegészségügyi Központ (Országos Tisztifőorvos / NNGYK)',
    scope: 'hungarian',
    category: 'ipc',
    year: '2019 / Hatályos',
    url: 'https://nngyk.gov.hu/hu/modszertani-levelek/2019-modszertani-levelek.html',
    pdfUrl: 'https://nngyk.gov.hu/hu/modszertani-levelek/2019-modszertani-levelek.html',
    description: 'Az Országos Tisztifőorvos módszertani levele a gépi lélegeztetéssel összefüggő tüdőgyulladás (VAP) megelőzéséről (2019). Tárgyalja az intenzív osztályos VAP prevenciós ellátási csomag (bundle) szigorú elemeit: az oropharyngealis kolonizáció és mikroaspirációk kivédését, az ágyfejvég-emelést, a szubglottikus szekrétum-elszívást és a mandzsettanyomás folyamatos felügyeletét.',
    keyPoints: [
      'Ágyfejvég emelése: Folyamatos 30-45 fokos pozicionálás az aspiráció és a gastro-oesophagealis reflux megelőzésére',
      'Endotrachealis tubus cuff-nyomás ellenőrzése: 20-30 vízcm közötti nyomás fenntartása a szivárgás és trachealis nyálkahártya-ischaemia megelőzésére',
      'Szubglottikus váladékleszívás: Speciális elvezetővel rendelkező tubus alkalmazása a mandzsetta felett megrekedt szekrétum aspirálására',
      'Szájhigiéné: Rendszeres fertőtlenítő (pl. klórhexidines) oropharyngealis toalett',
      'Napi szedáció-megszakítás és extubációs készség vizsgálata az intubációs napok számának minimalizálására'
    ],
    tags: ['nozokomiális pneumonia', 'VAP', 'HAP', 'lélegeztetés', 'dekontamináció', 'infekciókontroll', 'intenzív osztály', 'NNGYK', '2019']
  },
  {
    id: 'hu-invasive-nursing-ipc-2025',
    title: 'Magas kockázatú invazív beavatkozások ápolói feladatai (véna-/hólyagkatéterezés, punkció – infekciókontroll szempontból is releváns)',
    originalTitle: 'Egészségügyi szakmai irányelv a magas kockázatú invazív beavatkozások ápolási feladatairól és fertőzésmegelőzési előírásairól',
    organization: 'Egészségügyi Szakmai Kollégium',
    scope: 'hungarian',
    category: 'ipc',
    year: 'EüK 2025/12. szám',
    url: 'https://neak.gov.hu/',
    pdfUrl: 'https://www.neak.gov.hu/pfile/file?path=/letoltheto/EOSZEF_letoltheto_doku/002227-2025-magas-kockazatu-invaziv-beavatkozasok-apoloi-feladatairol&inline=true',
    description: 'A magas fertőzési kockázatú invazív eszközös beavatkozások ápolási és infekciókontroll irányelve (megjelent: Egészségügyi Közlöny 2025/12. szám, jogkodex.hu). Részletes eljárásrend a centrális és perifériás vénabiztosítás (CLABSI prevenció), a tartós húgyhólyag-katéterezés (CAUTI prevenció), valamint a diagnosztikus és terápiás punkciók (lumbálpunkció, mellkas-, ascites-punkció) aszeptikus kivitelezésére, kötéskezelésére és a napi indikáció-felülvizsgálatra.',
    keyPoints: [
      'Centrális vénás katéterek (CVC/PICC) – CLABSI megelőzés: Maximális steril izolálás (sapka, maszk, steril köpeny, nagy lepedő), 2% klórhexidin + 70% alkoholos bőrfertőtlenítés teljes száradási idővel, steril semipermeabilis kötések',
      'Hólyagkatéterezés – CAUTI megelőzés: Zárt vizeletelvezető rendszer, aszeptikus behelyezés, a vizeletgyűjtő zsák folyamatosan a hólyagszint alatt tartandó a reflux kivédésére',
      'Diagnosztikus és terápiás punkciók (LP, pleura-, ascites punkció): Szigorú aszepszis és antiszepszis, sebészi maszk és steril védőeszközök a nozokomiális beoltások kivédésére',
      'Infúziós szerelékek standard cseréje (krisztalloid 96 óránként, lipid/TPN 24 óránként, kötéscsere vérzés/átázás esetén azonnal)',
      'Napi indikáció-felülvizsgálat: Az invazív eszközök szükségességének napi orvosi és ápolói auditja; a feleslegessé vált katéterek azonnali eltávolítása'
    ],
    tags: ['invazív beavatkozások', 'ápolás', 'katéterezés', 'CLABSI', 'CAUTI', 'punkció', 'infekciókontroll', 'EüK 2025/12', 'jogkodex.hu']
  },
  {
    id: 'hu-nngyk-mdro-2016',
    title: 'Módszertani levél a multirezisztens kórokozók által okozott fertőzések megelőzéséről 2016',
    originalTitle: 'Módszertani levél a multirezisztens kórokozók által okozott fertőzések megelőzéséről',
    organization: 'Nemzeti Népegészségügyi és Gyógyszerészeti Központ (Országos Tisztifőorvos / NNGYK)',
    scope: 'hungarian',
    category: 'ipc',
    year: '2016 / Hatályos',
    url: 'https://nngyk.gov.hu/hu/modszertani-levelek/2016-modszertani-levelek.html',
    pdfUrl: 'https://nngyk.gov.hu/hu/modszertani-levelek/2016-modszertani-levelek.html',
    description: 'Az Országos Tisztifőorvos módszertani levele a multirezisztens kórokozók (MDRO: MRSA, VRE, ESBL, CRE / CRAB / CRPA) által okozott fertőzések megelőzéséről (2016). Meghatározza a mikrobiológiai surveillance-t, az aktív szűrés szabályait (MRSA orrkenet, CRE rektális szűrés), a kontakt izolációt, a kohorszálást, a WHO 5 Moment kézhigiénés indikátorokat és a környezeti felületfertőtlenítést.',
    keyPoints: [
      'Kontakt izoláció kötelező igazolt MRSA, VRE, CRE és multirezisztens Acinetobacter/Pseudomonas hordozás esetén',
      'Kézfertőtlenítés alkoholos kézbedörzsölővel a WHO 5 Moment szerint minden betegérintkezés kulcspontjain',
      'C. difficile esetén a spórák miatt kötelező a szappanos kézmosás ÉS sporicid felületfertőtlenítés',
      'MRSA dekolonizáció elektív implantátumos műtétek előtt (Mupirocin orrkenőcs + klórhexidin)'
    ],
    tags: ['NNGYK', 'MRSA', 'VRE', 'CRE', 'izoláció', 'infekciókontroll', 'kézhigiéné', 'multirezisztens', '2016']
  },
  {
    id: 'hu-vaccination-2026',
    title: 'Országos Védőoltási Módszertani Levél (NNGYK 2026)',
    originalTitle: 'Az NNGYK módszertani levele a védőoltásokról és a fertőző betegségek elleni specifikus profilaxisról',
    organization: 'Nemzeti Népegészségügyi és Gyógyszerészeti Központ (NNGYK)',
    scope: 'hungarian',
    category: 'ipc',
    year: '2026 / Hatályos',
    url: 'https://nngyk.gov.hu/hu/modszertani-levelek/2026-az-nngyk-modszertani-levele-a-2026-evi-vedooltasokrol.html',
    description: 'A hazai kötelező életkorhoz kötött védőoltási rend (BCG, DTPa-IPV-Hib, PCV13, MMR, Bárányhimlő, Hepatitis B, HPV), megbetegedési veszély elhárítására szolgáló oltások (Tetanus, Rabies, Hepatitis A/B, Kanyaró expozíció), és felnőttkori rizikócsoportok (Pneumococcus, Influenza, COVID-19, RSV, Herpes zoster, Kullancs-encephalitis) ajánlásai.',
    keyPoints: [
      'Életkorhoz kötött kötelező oltások 99% feletti átoltottsága biztosítja a hazai nyájimmunitást',
      'Splenectomizált és funkcionálisan aspleniás betegek kötelező védelme: Pneumococcus (PCV20 vagy PCV15+PPSV23), Meningococcus (MenACWY + MenB), Hib',
      'Várandósok kötelező ajánlott oltásai: dTap (szamárköhögés elleni transzplacentáris anyai antitest-transzfer a 27-36. héten) és Influenza',
      'Post-expozíciós profilaxis sérüléseknél: Tetanus toxoid + TIG sebészi ellátással mérlegelve'
    ],
    tags: ['védőoltás', 'NNGYK', 'vakcina', 'tetanus', 'pneumococcus', 'splenectomia', 'immunizáció']
  },
  {
    id: 'hu-sti-2024',
    title: 'Szexuális úton terjedő fertőzések (STI) diagnosztikája és kezelése',
    originalTitle: 'Egészségügyi szakmai irányelv a szexuális úton terjedő fertőzések (STI) diagnosztikájáról és kezeléséről',
    organization: 'Egészségügyi Szakmai Kollégium – Bőr- és nemibetegségek + Infektológia Tagozat, Magyar STD Társaság',
    scope: 'hungarian',
    category: 'sti',
    year: '2024 / stdtarsasag.hu PDF',
    url: 'https://www.stdtarsasag.hu',
    pdfUrl: 'https://www.stdtarsasag.hu/files/sti-szakmaiiranyelv-2024.pdf',
    description: 'A szexuális úton terjedő fertőzések (syphilis, gonorrhoea, Chlamydia trachomatis, Mycoplasma genitalium, trichomoniasis, HSV, HPV) 2024-es hivatalos szakmai kollégiumi és Magyar STD Társasági útmutatója. Tartalmazza a legújabb molekuláris diagnosztikai eljárásokat (NAAT/PCR), a makrolid-rezisztencia miatti korszerű kezelési sémákat (gonorrhoeában emelt dózisú Ceftriaxon 1g IM monoterápia azithromycin nélkül; chlamydia esetén Doxycyclin 2x100 mg 7 napig mint arany standard), a partnerkezelési kötelezettséget és az expozíció utáni/előtti profilaxis (Doxy-PEP és PrEP) ajánlásait.',
    keyPoints: [
      'Szifilisz (Lues): Benzathine penicillin G 2.4 millió NE IM egyszeri adag korai formákban (primer, szekunder, korai latens); 3x2.4 millió NE késői latens szifiliszben',
      'Gonorrhoea: Ceftriaxon 1g IM egyszeri adás monoterápiaként; a korábbi azithromycin kombináció rutinszerűen már nem ajánlott a kiterjedt makrolid-rezisztencia miatt',
      'Chlamydia trachomatis: Doxycyclin 2x100 mg PO 7 napig (arany standard első vonal, magasabb mikrobiológiai gyógyulás, mint az 1g azithromycin)',
      'Mycoplasma genitalium: Makrolid rezisztencia-vezérelt kezelés: Doxycyclin előkezelés után érzékeny törzsnél Azithromycin, rezisztens törzsnél Moxifloxacin 1x400 mg 7 napig',
      'Partnerek kötelező szimultán szűrése és kezelése; Doxy-PEP (expozíciót követő 72 órán belüli Doxycyclin 200 mg) mérlegelése magas rizikójú populációkban'
    ],
    tags: ['STI', 'STD', 'szifilisz', 'gonorrhoea', 'chlamydia', 'mycoplasma', 'ceftriaxon', 'doxycyclin', 'stdtarsasag.hu', '2024']
  },

  // ==================== NEMZETKÖZI GUIDELINE-OK ====================
  {
    id: 'intl-ssc-2021',
    title: 'Surviving Sepsis Campaign (SSC 2021): International Guidelines for Management of Sepsis and Septic Shock',
    originalTitle: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    organization: 'Society of Critical Care Medicine (SCCM) & European Society of Intensive Care Medicine (ESICM)',
    scope: 'international',
    category: 'sepsis',
    year: '2021 / Critical Care Medicine & Intensive Care Medicine',
    url: 'https://www.sccm.org/SurvivingSepsisCampaign/Guidelines/Adult-Patients',
    pdfUrl: 'https://journals.lww.com/ccmjournal/fulltext/2021/11000/surviving_sepsis_campaign__international.21.aspx',
    description: 'Globális arany standard a szepszis és szeptikus sokk intenzív ellátásában. Tartalmazza a szűrést, az azonnali vérkultúrák vételét, az 1 órán belüli széles spektrumú IV antibiotikumot szeptikus sokkban, a 30 ml/kg krisztalloid reszuszcitációt, a noradrenalint mint első választandó vazopresszort és a laktát-vezérelt keringésrendezést.',
    keyPoints: [
      'Szeptikus sokk vagy magas szepszis-valószínűség esetén IV antimikrobiális terápia 1 ÓRÁN BELÜL indítandó',
      'Kezdeti reszuszcitáció: legalább 30 ml/kg IV krisztalloid (kiegyensúlyozott sóoldat javasolt a 0.9% NaCl helyett)',
      'Noradrenalin az elsővonalbeli vazopresszor a MAP ≥ 65 Hgmm elérésére; második vonalban Vazopresszin hozzáadása',
      'Kortikoszteroid (IV hydrocortison 200 mg/nap) kizárólag perzisztáló, vazopresszor-refrakter sokkban javasolt'
    ],
    tags: ['sepsis', 'septic shock', 'surviving sepsis campaign', 'noradrenaline', 'resuscitation', 'lactate']
  },
  {
    id: 'intl-escmid-cdi-treatment-2021',
    title: 'European Society of Clinical Microbiology and Infectious Diseases: 2021 update on the treatment guidance document for Clostridioides difficile infection in adults',
    originalTitle: 'European Society of Clinical Microbiology and Infectious Diseases: 2021 update on the treatment guidance document for Clostridioides difficile infection in adults (Clin Microbiol Infect 2021)',
    organization: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID)',
    scope: 'international',
    category: 'gi',
    year: '2021 / Clin Microbiol Infect',
    url: 'https://www.clinicalmicrobiologyandinfection.org/article/S1198-743X(21)00568-1/fulltext',
    pdfUrl: 'https://www.clinicalmicrobiologyandinfection.org/action/showPdf?pii=S1198-743X%2821%2900568-1',
    description: 'Az ESCMID hivatalos európai kezelési guideline-ja (van Prehn J. et al., CMI 2021). A felnőttkori CDI kezelésében az első epizódban határozottan a Fidaxomicin (2x200 mg 10 napig vagy kiterjesztett-pulzáló séma) a preferált szer az orális Vancomycinnel (4x125 mg) szemben a tartós gyógyulás és az alacsonyabb recidívaarány miatt. A Metronidazol orális monoterápia már NEM ajánlott, ha Fidaxomicin vagy Vancomycin hozzáférhető. Első rekurrenciánál Fidaxomicin vagy Bezlotoxumab kiegészítés; többszöri recidívában (≥2 relapszus) FMT (székletmikrobióta-transzplantáció) adása erősen javasolt.',
    keyPoints: [
      'Első epizód (nem-súlyos és súlyos): Fidaxomicin 2x200 mg PO 10 napig (vagy kiterjesztett-pulzáló séma: 1-5. nap 2x200 mg, majd 7-25. nap minden 2. nap 1x200 mg) preferált a Vancomycinnel (4x125 mg) szemben',
      'Orális Metronidazol alkalmazása NEM ajánlott, amennyiben Fidaxomicin vagy Vancomycin rendelkezésre áll (alacsonyabb válasz, magas kiújulás)',
      'Első recidíva: Fidaxomicin (különösen ha az első epizódban vancomycint kapott), vagy pulzáló vancomycin, illetve Bezlotoxumab (10 mg/kg IV) kiegészítés vancomycin mellé',
      'Második és további recidíva (≥2): Székletmikrobióta-transzplantáció (FMT) alkalmazása erősen ajánlott antibiotikumos indukciót követően',
      'Fulmináns / refrakter lefolyás: Vancomycin 4x500 mg PO/NG szondán (± retenciós beöntés) + Metronidazol 3x500 mg IV + sürgős sebészeti konzílium'
    ],
    tags: ['ESCMID', 'clostridioides difficile', 'CDI', 'fidaxomicin', 'vancomycin', 'FMT', 'bezlotoxumab', 'hasmenés']
  },
  {
    id: 'intl-escmid-cdi-diagnostic',
    title: 'ESCMID Diagnostic Guidance: Clostridioides difficile Infection',
    originalTitle: 'European Society of Clinical Microbiology and Infectious Diseases: update of the diagnostic guidance document for Clostridioides difficile infection (Clin Microbiol Infect)',
    organization: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID)',
    scope: 'international',
    category: 'gi',
    year: 'Hatályos európai diagnosztikus guideline / Clin Microbiol Infect',
    url: 'https://www.clinicalmicrobiologyandinfection.com/article/S1198-743X(16)30177-3/fulltext',
    pdfUrl: 'https://www.clinicalmicrobiologyandinfection.com/action/showPdf?pii=S1198-743X%2816%2930177-3',
    description: 'Az ESCMID hivatalos európai diagnosztikus útmutatója a Clostridioides difficile fertőzés mikrobiológiai kórismézésére (Crobach MJT et al.). Szigorúan meghatározza az indikációt: kizárólag tünetes hasmenésben, formálatlan székletből (Bristol 5–7) végezhető teszt; formált széklet vizsgálata és tünetmentes szűrés tilos (kivéve paralyticus ileus). A gyógyulás ellenőrzése céljából végzett tesztelés ("test-of-cure") SZIGORÚAN TILOS. A standard diagnosztika egy validált kétlépcsős algoritmuson alapul: 1) Nagy szenzitivitású szűrőteszt (GDH EIA vagy NAAT/PCR), 2) Szűrőteszt-pozitivitás esetén reflex nagy specificitású szabad toxin vizsgálat (Toxin A/B EIA) az aktív betegség és a kolonizáció szétválasztására.',
    keyPoints: [
      'Mintavétel szabályai: Kizárólag hasmenéses, formálatlan székletből (Bristol 5–7) kérhető vizsgálat; formált széklet tesztelése szigorúan tilos (kivéve paralyticus ileus)',
      'A gyógyulás tesztelése ("Test of Cure") SZIGORÚAN TILOS a kezelés után, mivel a toxin- és antigén-ürítés hetekig perzisztálhat tünetmentesen!',
      'Kétlépcsős algoritmus 1. lépése: Nagy szenzitivitású szűrés GDH (glutamát-dehidrogenáz) antigén EIA-val vagy NAAT (PCR) nukleinsav-amplifikációval',
      'Kétlépcsős algoritmus 2. lépése: Pozitív GDH vagy PCR esetén reflex szabad Toxin A/B EIA vizsgálat a valódi aktív betegség igazolására',
      'Eredmények értékelése: GDH+ / Toxin+ = Aktív CDI igazolva; GDH- = CDI biztonsággal kizárva; GDH+ / Toxin- = Lehetséges hordozás vagy alacsony toxinszint (szoros klinikai korreláció kötelező!)'
    ],
    tags: ['ESCMID', 'clostridioides difficile', 'CDI', 'diagnosztika', 'GDH', 'toxin A/B', 'PCR', 'Bristol skála', 'test-of-cure tilalom']
  },
  {
    id: 'intl-idsa-cdi-2021',
    title: 'IDSA / SHEA Clinical Practice Guideline on Clostridioides difficile Infection (CDI) in Adults',
    originalTitle: 'Clinical Practice Guideline by the Infectious Diseases Society of America (IDSA) and Society for Healthcare Epidemiology of America (SHEA): 2021 Focused Update Guidelines on Management of Clostridioides difficile Infection in Adults',
    organization: 'Infectious Diseases Society of America (IDSA) & SHEA',
    scope: 'international',
    category: 'gi',
    year: '2021 / Clinical Infectious Diseases',
    url: 'https://www.idsociety.org/practice-guideline/clostridioides-difficile-2021-focused-update/',
    description: 'A 2021-es frissítésben a Fidaxomicin (2x200 mg 10 napig) határozottan megelőzte a Vancomycint mint elsőként választandó szer kezdeti és első recidív CDI-ben, szignifikánsan alacsonyabb későbbi kiújulási kockázat mellett. Szintén részletezi a Bezlotoxumab antitest és az FMT indikációit.',
    keyPoints: [
      'Fidaxomicin 2x200 mg PO 10 napig a preferált elsővonalbeli terápia a szignifikánsan alacsonyabb recidívaarány miatt',
      'Vancomycin 4x125 mg PO elfogadható alternatíva, amennyiben fidaxomicin nem érhető el',
      'Első recidívában fidaxomicin (ha korábban vancomycint kapott) vagy elnyújtott pulzáló vancomycin séma',
      'Második és további recidíva esetén Széklet-Mikrobióta Transzplantáció (FMT) adása erősen javasolt'
    ],
    tags: ['C. difficile', 'CDI', 'fidaxomicin', 'vancomycin', 'bezlotoxumab', 'FMT', 'IDSA']
  },
  {
    id: 'intl-idsa-cap-2019',
    title: 'IDSA / ATS Clinical Practice Guideline on Community-Acquired Pneumonia (CAP)',
    originalTitle: 'Diagnosis and Treatment of Adults with Community-Acquired Pneumonia. An Official Clinical Practice Guideline of the American Thoracic Society and Infectious Diseases Society of America',
    organization: 'Infectious Diseases Society of America (IDSA) & American Thoracic Society (ATS)',
    scope: 'international',
    category: 'respiratory',
    year: '2019 / Am J Respir Crit Care Med',
    url: 'https://www.idsociety.org/practice-guideline/community-acquired-pneumonia/',
    description: 'A felnőttkori CAP diagnosztikája és kezelése. A korábbi "HCAP" kategória megszüntetése; mikrobiológiai vizsgálatok indikációi; empirikus terápia ambuláns és fekvőbeteg ellátásban; MRSA és P. aeruginosa lefedés csak validált egyéni rizikófaktorok vagy korábbi izoláció esetén.',
    keyPoints: [
      'A "Healthcare-Associated Pneumonia" (HCAP) fogalmát a guideline törölte: rutinszerű MRSA/Pseudomonas lefedés nem indokolt enélkül',
      'Ambuláns terápia komorbiditás nélkül: Amoxicillin 3x1g vagy Doxycyclin 2x100 mg',
      'Kórházi nem-intenzíves CAP: Béta-laktám (Ceftriaxon, Ampicillin/Sulbactam) + Makrolid (Azithromycin) VAGY Légúti Fluorokinolon',
      'Kezelés időtartama: legalább 5 nap, amennyiben a beteg 48 órája láztalan és klinikai stabilitást ért el'
    ],
    tags: ['CAP', 'pneumonia', 'IDSA', 'ATS', 'amoxicillin', 'azithromycin', 'respiratory']
  },
  {
    id: 'intl-idsa-hap-vap',
    title: 'IDSA / ATS Management of Hospital-Acquired and Ventilator-Associated Pneumonia (HAP / VAP)',
    originalTitle: 'Management of Adults With Hospital-acquired and Ventilator-associated Pneumonia: 2016 Clinical Practice Guidelines by the IDSA and ATS',
    organization: 'Infectious Diseases Society of America (IDSA) & ATS',
    scope: 'international',
    category: 'respiratory',
    year: '2016 / Frissített irányelvek',
    url: 'https://www.idsociety.org/practice-guideline/hap_vap/',
    description: 'Kórházban szerzett (HAP) és lélegeztetőgéphez társuló (VAP) pneumonia kezelési útmutatója. Lokális osztályos antibiogram alapú empíria; kettős Gram-negatív lefedés magas mortalitású vagy rezisztencia-kockázatú betegeknél; 7 napos kezelési kurzus alkalmazása klinikai javuláskor.',
    keyPoints: [
      'Empirikus antibiotikum-választást az intézeti/intenzív osztályos mikrobiológiai antibiogram adatokra kell alapozni',
      'Antipseudomonas béta-laktám (Pip-Tazo, Cefepime, Meropenem) alapú empíria',
      'MRSA lefedés (Vancomycin vagy Linezolid) indokolt, ha a helyi MRSA arány >10-20% vagy magas a mortalitási rizikó',
      '7 napos antibiotikum kezelési időtartam elegendő a betegek túlnyomó többségében (korábbi 14-21 nap helyett)'
    ],
    tags: ['HAP', 'VAP', 'nosocomial', 'pneumonia', 'piperacillin-tazobactam', 'linezolid', 'IDSA']
  },
  {
    id: 'intl-ers-escmid-scap-2023',
    title: 'ERS/ESICM/ESCMID/ALAT guidelines for the management of severe community-acquired pneumonia',
    originalTitle: 'ERS/ESICM/ESCMID/ALAT guidelines for the management of severe community-acquired pneumonia (Eur Respir J / Intensive Care Med 2023)',
    organization: 'ERS, ESICM, ESCMID & ALAT',
    scope: 'international',
    category: 'respiratory',
    year: '2023 / Intensive Care Med & Eur Respir J',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37012484/',
    pdfUrl: 'https://pubmed.ncbi.nlm.nih.gov/37012484/',
    description: 'A négy nagy nemzetközi társaság (ERS, ESICM, ESCMID, ALAT) közös konszenzusos irányelve a súlyos, intenzív osztályos kezelést igénylő közösségben szerzett tüdőgyulladás (sCAP) korszerű ellátásáról. Tárgyalja az intenzív osztályos felvételi kritériumokat, a kiterjesztett mikrobiológiai diagnosztikát (alsó légúti minták, multiplex PCR panelek, vizelet antigén vizsgálatok), a korai empirikus kombinált terápiát (nem-antipseudomonas béta-laktám + makrolid vagy légúti fluorokinolon), a kortikoszteroid adását szeptikus sokkban és súlyos hipoxémiában, valamint az antivirális terápiát influenza gyanú/szezon esetén.',
    keyPoints: [
      'Empirikus kombinált antibiotikum: Nem-antipseudomonas béta-laktám (Ceftriaxon, Cefotaxim vagy Ampicillin/Sulbactam) + Makrolid (Azithromycin/Clarithromycin) preferált kombináció; alternatíva béta-laktám + légúti fluorokinolon',
      'Pseudomonas és MRSA lefedés: Rutinszerűen NEM indokolt; kizárólag igazolt egyéni rizikófaktorok (korábbi izoláció/kolonizáció, strukturális tüdőbetegség, nemrégiben széles spektrumú antibiotikum) esetén alkalmazandó',
      'Kortikoszteroid terápia: Szisztémás kortikoszteroid (pl. hydrocortison 200 mg/nap infúzióban) mérlegelendő perzisztáló vazopresszor-igényes szeptikus sokkban és refrakter súlyos hipoxémiában',
      'Kiterjesztett mikrobiológiai mintavétel: Hemokultúrák, köpet/tracheális aspirátum és vizelet antigén (Pneumococcus, Legionella) kötelező az antibiotikum előtt; gyors molekuláris multiplex PCR vizsgálat erősen javasolt',
      'Oseltamivir terápia: Influenza járványszezonban vagy gyanú esetén azonnali empirikus Oseltamivir (2x75 mg) indítandó a PCR eredmény megérkezéséig'
    ],
    tags: ['sCAP', 'severe pneumonia', 'ERS', 'ESICM', 'ESCMID', 'ALAT', 'intensive care', 'ceftriaxone', 'azithromycin', 'corticosteroid', 'macrolide']
  },
  {
    id: 'intl-ebjis-pji-2021',
    title: 'EBJIS / ICM Consensus on Prosthetic Joint Infection (PJI) & Diagnostic Criteria',
    originalTitle: 'The EBJIS Definition of Periprosthetic Joint Infection: A Practical Guide for Diagnosis and Surgical Treatment Strategies',
    organization: 'European Bone and Joint Infection Society (EBJIS) & International Consensus Meeting (ICM)',
    scope: 'international',
    category: 'bone_joint',
    year: '2021 / Bone & Joint Journal',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7954183/',
    description: 'A modern protézis-ízületi fertőzések definíciója és sebészi-antimikrobiális ellátási algoritmusa. Háromlépcsős diagnosztikai rendszer (fertőzés valószínűtlen, gyanított, igazolt); a DAIR, egyfázisú csere és kétfázisú csere szigorú indikációs kritériumai; a késleltetett posztop fertőzés implantátum-megtartási alkalmatlanságának szabálya.',
    keyPoints: [
      'Akut korai posztop (<4 hét) vagy akut hematogén: DAIR (mobilis betétek cseréjével) kísérelhető meg stabil protézisnél',
      'Késleltetett posztoperatív PJI (4 hét - 1 év): Kifejlett, masszív biofilm miatt ANTIBIOTIKUMMAL NEM MENTHETŐ MEG; protéziscsere KÖTELEZŐ',
      'Kétfázisú revízió (Two-stage): a gold standard rezisztens kórokozók, sipoly, csontvesztés vagy késleltetett/krónikus PJI esetén',
      'Diagnosztikai arany standard: Synovialis leukocytaszám, alfa-defenzin, legalább 3-5 intraoperatív szövetminta tenyésztése és sonikáció'
    ],
    tags: ['EBJIS', 'PJI', 'prosthetic joint infection', 'DAIR', 'two-stage revision', 'sonication', 'biofilm']
  },
  {
    id: 'intl-idsa-spondylodiscitis',
    title: 'IDSA Clinical Practice Guideline for the Management of Native Vertebral Osteomyelitis in Adults',
    originalTitle: '2015 Infectious Diseases Society of America (IDSA) Clinical Practice Guideline for the Diagnosis and Treatment of Native Vertebral Osteomyelitis in Adults',
    organization: 'Infectious Diseases Society of America (IDSA)',
    scope: 'international',
    category: 'bone_joint',
    year: '2015 / Clin Infect Dis',
    url: 'https://www.idsociety.org/practice-guideline/vertebral-osteomyelitis/',
    description: 'Csigolya-osteomyelitis és spondylodiscitis kivizsgálása és kezelése. Kontrasztanyagos gerinc MRI mint legérzékenyebb képalkotó; képalkotással vezérelt percutan csigolyabiopszia antibiotikum indítása előtt (hacsak nincs szepszis/sokk); 6 hetes célzott antimikrobiális terápia; korai orális váltás klinikai és CRP javulás esetén (OVIVA koncepció).',
    keyPoints: [
      'Kontrasztanyagos gerinc-MRI a diagnosztikai arany standard képalkotó vizsgálat',
      'Hemokultúra és képalkotó által vezérelt csigolya/porckorong biopszia szükséges az antibiotikum megkezdése előtt (kivéve szeptikus sokk)',
      'A terápia teljes időtartama 6 hét (komplikációmentes natív spondylodiscitisben)',
      'Sürgős műtéti indikáció: progresszív neurológiai kiesési tünet, gerincinstabilitás vagy epiduralis tályog kompresszióval'
    ],
    tags: ['spondylodiscitis', 'vertebral osteomyelitis', 'MRI', 'IDSA', 'spine', 'biopsy']
  },
  {
    id: 'intl-esc-endocarditis-2023',
    title: 'ESC 2023 Guidelines for the Management of Endocarditis',
    originalTitle: '2023 ESC Guidelines for the management of endocarditis: Developed by the task force on the management of endocarditis of the European Society of Cardiology (ESC) with EACTS and ESCMID',
    organization: 'European Society of Cardiology (ESC), EACTS & ESCMID',
    scope: 'international',
    category: 'cardio',
    year: '2023 / European Heart Journal',
    url: 'https://academic.oup.com/eurheartj/article/44/39/3948/7243107?login=false',
    description: 'A 2023-as új ESC endocarditis irányelv. Tartalmazza az Endocarditis Team kötelező szerepét, az új multimodális képalkotó kritériumokat (18F-FDG PET/CT és szív CT a protézisbillentyű fertőzés korai igazolására), a POET vizsgálat alapján a korai orális antibiotikumra váltás (POET protokoll) kritériumait stabil fekvőbetegeknél, és a szívsebészeti sürgősségi indikációkat.',
    keyPoints: [
      'Endocarditis Team multidiszciplináris gondozás minden centrumban kötelező',
      'Protézisbillentyű vagy eszközfertőzés gyanújában a 18F-FDG PET/CT és szív CT kiemelt diagnosztikai szerepe',
      'POET vizsgálat beépülése: stabil, láztalan, forráskontrollált endocarditises betegeknél 10-14 nap IV kezelés után orális kettős kombinációra lehet váltani',
      'Sürgős sebészi beavatkozás szívelégtelenség, nagy mobilitású vegetáció (>10 mm) vagy kontrollálatlan fertőzés esetén'
    ],
    tags: ['endocarditis', 'ESC', 'ESCMID', 'POET trial', 'PET-CT', 'valve', 'cardiology']
  },
  {
    id: 'intl-escmid-meningitis-2016',
    title: 'ESCMID Guideline: Diagnosis and Treatment of Acute Bacterial Meningitis',
    originalTitle: 'ESCMID guideline: diagnosis and treatment of acute bacterial meningitis in adults and children over 3 months of age',
    organization: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID)',
    scope: 'international',
    category: 'cns',
    year: '2016 / Clin Microbiol Infect',
    url: 'https://www.clinicalmicrobiologyandinfection.org/article/S1198-743X(16)00020-3/fulltext',
    description: 'Európai szakmai útmutató az akut bakteriális agyhártyagyulladás kezeléséhez. A liquordiagnosztika időzítése (LP 1 órán belül), CT indikációk, szisztémás Dexamethason alkalmazása (különösen Pneumococcus gyanúban), empirikus ceftriaxon/cefotaxim + ampicillin idősekben, és deeszkaláció a mikrobiológiai azonosítás után.',
    keyPoints: [
      'Lumbálpunkció elvégzése haladéktalanul, kivéve ha beékelődési kockázat (fokális neurológia, kóma, papillaoedema) CT-t indokol',
      'CT indikáció esetén is: VÉRKULTÚRA azonnal, majd Dexamethason + empirikus antibiotikum beadása még a CT előtt!',
      'Dexamethason (10 mg IV q6h 4 napig) S. pneumoniae esetén bizonyítottan csökkenti a mortalitást és a hallásvesztést',
      'Empirikus harmadik generációs cefalosporin (Ceftriaxon 2x2g) + Ampicillin (>50 év vagy celluláris immundefektus)'
    ],
    tags: ['meningitis', 'ESCMID', 'LP', 'lumbar puncture', 'ceftriaxon', 'dexamethason', 'pneumococcus']
  },
  {
    id: 'intl-eau-uti-2026',
    title: 'EAU Guidelines on Urological Infections 2026 (UTI, Pyelonephritis, Urosepsis)',
    originalTitle: 'EAU Guidelines on Urological Infections: Asymptomatic Bacteriuria, Uncomplicated and Complicated UTIs, Catheter-associated UTIs and Urosepsis',
    organization: 'European Association of Urology (EAU)',
    scope: 'international',
    category: 'urinary',
    year: '2026 / EAU Guidelines Office',
    url: 'https://uroweb.org/guidelines/urological-infections',
    description: 'A legfrissebb európai urológiai és infektológiai konszenzus. Aszimptomatikus bakteriuria (ASB) szigorú túldiagnosztizálásának és túlkezelésének megszüntetése; elsővonalbeli nem-fluorokinolon szerek (Fosfomycin, Pivmecillinam, Nitrofurantoin); katéter-asszociált fertőzések és uroszepszis forráskontrollja (obstrukció azonnali dekompressziója DJ katéterrel vagy nephrostomiával).',
    keyPoints: [
      'Aszimptomatikus bakteriuria szűrése és kezelése szigorúan tilos, kivéve terhes nőknél és invazív urológiai beavatkozások előtt',
      'Egyszerű cystitisben a fluorokinolonok használata kerülendő (rezisztencia és mellékhatások); első vonal: Fosfomycin, Pivmecillinam, Nitrofurantoin',
      'Akut pyelonephritisben Ciprofloxacin vagy Levofloxacin csak akkor adható empirikusan, ha a lokális rezisztencia <10%',
      'Obstruktív uroszepszis (kő, daganat) esetén az azonnali urológiai dekompresszió (DJ katéter / nephrostomia) életmentő'
    ],
    tags: ['EAU', 'UTI', 'urosepsis', 'pyelonephritis', 'cystitis', 'asymptomatic bacteriuria', 'fosfomycin']
  },
  {
    id: 'intl-easl-hcv-2020',
    title: 'EASL Recommendations on Treatment of Hepatitis C 2020',
    originalTitle: 'EASL recommendations on treatment of hepatitis C: Final update of the series',
    organization: 'European Association for the Study of the Liver (EASL)',
    scope: 'international',
    category: 'hepatology_hiv',
    year: '2020 / Journal of Hepatology',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32956768/',
    description: 'Európai májkutatási társaság útmutatója a hepatitis C vírusfertőzés gyógyításáról. Pángenotípusos direkt ható antivirális (DAA) kombinációk (Sofosbuvir/Velpatasvir 12 hétig vagy Glecaprevir/Pibrentasvir 8 hétig) alkalmazása minden krónikus HCV betegnél genotípus-meghatározás nélkül is; egyszerűsített ellátási modell és mikromegszüntetési célok.',
    keyPoints: [
      'Minden krónikus HCV fertőzött beteg kezelendő, a fibrosis stádiumától függetlenül',
      'Pángenotípusos DAA kombinációk alkalmazásával >97-99%-os tartós virológiai válasz (SVR) érhető el interferonmentesen',
      'Kezelés időtartama kompenzált, kezelés-naiv betegeknél mindössze 8 hét (Glecaprevir/Pibrentasvir) vagy 12 hét (Sofosbuvir/Velpatasvir)',
      'Előrehaladott fibrózis (F3) vagy cirrózis (F4) esetén a vírus kiirtása után is élethosszig tartó ultrahangos HCC szűrés szükséges!'
    ],
    tags: ['EASL', 'hepatitis C', 'HCV', 'DAA', 'sofosbuvir', 'velpatasvir', 'glecaprevir', 'pibrentasvir']
  },
  {
    id: 'intl-easl-hbv-2025',
    title: 'EASL Clinical Practice Guidelines on the Management of Hepatitis B Virus Infection',
    originalTitle: 'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection',
    organization: 'European Association for the Study of the Liver (EASL)',
    scope: 'international',
    category: 'hepatology_hiv',
    year: '2025 / Journal of Hepatology',
    url: 'https://www.journal-of-hepatology.eu/article/S0168-8278(25)00174-6/fulltext',
    description: 'Krónikus hepatitis B kezelése magas genetikai rezisztenciagáttal rendelkező nukleotid analógokkal (Entecavir, Tenofovir disoproxil TDF, Tenofovir alafenamide TAF). Kezelési indikációk HBV-DNS, ALAT és fibrózis alapján; cirrózis esetén azonnali élethosszig tartó terápia indokolt a dekompenzáció és májrák megelőzésére.',
    keyPoints: [
      'Első vonalbeli szerek: Entecavir, TDF vagy TAF mint nagy hatékonyságú, minimális rezisztenciájú orális antivirális szerek',
      'Cirrózisos betegek kezelendők a HBV-DNS és ALAT szintjétől függetlenül kimutatható víruskópia esetén',
      'HBsAg szerokonverzió ("funkcionális gyógyulás") ritka (<1%/év), így a terápia az esetek döntő többségében tartós/élethosszig tartó',
      'Immunszuppresszív vagy kemoterápia előtt kötelező a HBsAg és anti-HBc szűrés a reaktiváció megelőzésére profilaxissal'
    ],
    tags: ['EASL', 'hepatitis B', 'HBV', 'entecavir', 'tenofovir', 'TAF', 'cirrhosis']
  },
  {
    id: 'intl-eacs-hiv-2025',
    title: 'EACS Guidelines for the Clinical Management and Treatment of HIV (Version 13.0)',
    originalTitle: 'European AIDS Clinical Society (EACS) Guidelines for the Clinical Management and Treatment of HIV-positive Adults in Europe',
    organization: 'European AIDS Clinical Society (EACS)',
    scope: 'international',
    category: 'hepatology_hiv',
    year: '2025 / EACS',
    url: 'https://www.eacsociety.org/guidelines/eacs-guidelines/',
    description: 'A legfrissebb európai HIV irányelv. Első vonalbeli INSTI alapú hármas rejim (Bictegravir/TAF/FTC vagy Dolutegravir + 2 NRTI) és kétszeres terápia (Dolutegravir/Lamivudin) indikációi; hosszú hatású injektábilis kabotegravir + rilpivirin fenntartó opció stabil vírusmentes betegeknél; komorbiditások, kardiovaszkuláris és vese rizikó kezelése.',
    keyPoints: [
      'Elsővonalbeli kezelés: Második generációs INSTI-alapú hármas kombinációk vagy Dolutegravir + Lamivudin kettős terápia',
      'U=U (Undetectable = Untransmittable) tudományos bizonyíték megerősítése: 0 transzmissziós rizikó nem detektálható víruskópiánál',
      'Long-acting injektábilis terápia (Cabotegravir + Rilpivirine IM 2 havonta) elérhető stabil, virológiailag szupprimált felnőtteknek',
      'PrEP (TDF/FTC napi vagy eseményhez kötött) és PEP (expozíció utáni profilaxis 72 órán belül)'
    ],
    tags: ['EACS', 'HIV', 'ART', 'INSTI', 'dolutegravir', 'bictegravir', 'PrEP', 'PEP', 'U=U']
  },
  {
    id: 'intl-cdc-sti-2021',
    title: 'CDC Sexually Transmitted Infections Treatment Guidelines (2021-2024)',
    originalTitle: 'Sexually Transmitted Infections Treatment Guidelines, 2021 (MMWR Recommendations and Reports)',
    organization: 'Centers for Disease Control and Prevention (CDC)',
    scope: 'international',
    category: 'sti',
    year: '2021-2024 / MMWR',
    url: 'https://www.cdc.gov/std/treatment-guidelines/default.htm',
    description: 'A nemzetközi referencia-irányelv a szexuális úton terjedő fertőzések kezelésére. Neisseria gonorrhoeae esetén a kettős terápia helyett magasabb dózisú Ceftriaxon monoterápia (500 mg - 1g IM); Chlamydia trachomatis esetén Doxycyclin (2x100 mg 7 napig) preferálása az 1g Azithromycinnel szemben; Treponema pallidum stádiumfüggő benzathine penicillin G kezelése.',
    keyPoints: [
      'Gonorrhoea: Ceftriaxon 500 mg IM monoterápia (<150 kg testtömeg esetén), >150 kg esetén 1g IM',
      'Chlamydia trachomatis: Doxycyclin 2x100 mg PO 7 napig az elsővonalbeli ajánlás (azitromicin magasabb mikrobiológiai kudarc miatt második vonal)',
      'Szifilisz primer, szekunder vagy korai látens: Benzathine penicillin G 2.4 millió NE IM egyszeri dózis',
      'Mycoplasma genitalium: rezisztencia-vezérelt terápia (Doxycyclin követve Azithromycinnel vagy Moxifloxacinnal)'
    ],
    tags: ['CDC', 'STI', 'STD', 'gonorrhea', 'chlamydia', 'syphilis', 'ceftriaxone', 'doxycycline']
  },
  {
    id: 'intl-ecil-fungal-2021',
    title: 'ECIL & ESCMID Guidelines for the Management of Invasive Fungal Infections',
    originalTitle: 'European Conference on Infections in Leukaemia (ECIL) & ESCMID Guidelines on Invasive Candidiasis and Aspergillosis',
    organization: 'European Conference on Infections in Leukaemia (ECIL) & ESCMID',
    scope: 'international',
    category: 'fungal',
    year: '2021 / Lancet Infectious Diseases',
    url: 'https://www.ecil-leukaemia.com/',
    description: 'Invazív mikózisok (candidiasis, aspergillosis, mucormycosis) megelőzése és kezelése hematológiai és intenzív osztályos betegeknél. Invazív aspergillosisban Voriconazol vagy Isavuconazol elsővonalban; invazív candidiasisban / candidaemiában Echinocandinok (Caspofungin, Anidulafungin, Micafungin) mint abszolút első választás; szűrés galaktomannán és béta-D-glükán tesztekkel.',
    keyPoints: [
      'Invazív candidiasis / candidaemia: Echinocandin (Caspofungin, Anidulafungin vagy Micafungin) IV az elsőként választandó szer',
      'Candidaemia esetén KÖTELEZŐ a szemészeti vizsgálat (endophthalmitis kizárása) és a centrális vénás katéter eltávolítása',
      'Invazív aspergillosis: Voriconazol vagy Isavuconazol első vonalban; terápiás gyógyszerszint-monitorozás (TDM) szükséges voriconazolnál',
      'Mucormycosis: Sürgősségi radikális sebészi debridement + Liposzómális Amfotericin B (L-AmB 5-10 mg/kg/nap) IV'
    ],
    tags: ['fungal', 'mycosis', 'candidaemia', 'echinocandin', 'aspergillosis', 'voriconazole', 'ECIL', 'ESCMID']
  },
  {
    id: 'intl-who-ipc-2020',
    title: 'WHO Guidelines on Core Components of Infection Prevention and Control (IPC) Programmes',
    originalTitle: 'Guidelines on Core Components of Infection Prevention and Control Programmes at the National and Acute Health Care Facility Level',
    organization: 'World Health Organization (WHO)',
    scope: 'international',
    category: 'ipc',
    year: '2020 / World Health Organization',
    url: 'https://www.who.int/teams/integrated-health-services/infection-prevention-control',
    description: 'A WHO hivatalos szakmai ajánlása az egészségügyi intézmények fertőzésmegelőzési és infekciókontroll programjának 8 alapeleméről (core components): szakmai irányelvek, képzés, surveillance, multimodális stratégiák, audit és visszajelzés, munkaterhelés és ágysűrűség, valamint környezeti infrastruktúra és vízhálózat.',
    keyPoints: [
      '8 kulcselem: intézményi irányelvek, képzés, surveillance, multimodális intervenciók, audit, személyzeti létszám, környezet és eszközellátás',
      'WHO 5 Moment kézhigiénés audit rendszere: az egészségügyi dolgozók adherenciájának objektív követése',
      'Standard óvintézkedések + átviteli út szerinti (kontakt, cseppfertőzés, aeroszol) izoláció minden intézményben',
      'Tiszta ivóvíz, sterilizáció és hulladékkezelési minőségbiztosítás'
    ],
    tags: ['WHO', 'IPC', 'infection control', 'hand hygiene', 'surveillance', 'isolation']
  },
  {
    id: 'intl-idsa-asp-2023',
    title: 'IDSA / SHEA Implementing an Antibiotic Stewardship Program (ASP) Guidelines',
    originalTitle: 'Implementing an Antibiotic Stewardship Program: Guidelines by the Infectious Diseases Society of America and the Society for Healthcare Epidemiology of America',
    organization: 'Infectious Diseases Society of America (IDSA) & SHEA',
    scope: 'international',
    category: 'ipc',
    year: '2023 / Clinical Infectious Diseases',
    url: 'https://www.idsociety.org/practice-guideline/antimicrobial-stewardship/',
    description: 'Kórházi antibiotikum stewardship programok (ASP) létrehozása és működtetése. Prospektív audit és visszajelzés (PAF); szűkítés és deeszkaláció 48-72 óránál a mikrobiológiai eredmények alapján; korai IV-PO váltás; szükségtelenül elnyújtott kezelések lerövidítése; gyorsdiagnosztikai mikrobiológia (multiplex PCR, MALDI-TOF) integrációja.',
    keyPoints: [
      'Két alapvető stratégia: Prospektív audit és visszajelzés (PAF) vagy előzetes engedélyezés (pre-authorization)',
      'Automatikus 48-72 órás "antibiotikum-időzítő" és felülvizsgálat: deeszkaláció szűkebb spektrumra a tenyésztés alapján',
      'Korai IV-PO váltási protokoll stabil vitális paraméterek és működő gasztrointesztinális traktus mellett',
      'A kezelési időtartamok lerövidítése: a legtöbb infekcióban 5-7 napos terápia klinikailag ugyanolyan hatásos és csökkenti a rezisztenciát'
    ],
    tags: ['ASP', 'stewardship', 'IDSA', 'SHEA', 'de-escalation', 'antibiotic resistance', 'audit']
  },
  {
    id: 'intl-escmid-mdr-gnb-2022',
    title: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID) Guidelines for the Treatment of Infections Caused by Multidrug-Resistant Gram-Negative Bacilli (endorsed by ESICM – European Society of Intensive Care Medicine)',
    originalTitle: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID) guidelines for the treatment of infections caused by multidrug-resistant Gram-negative bacilli (endorsed by European Society of Intensive Care Medicine) (Clin Microbiol Infect 2022)',
    organization: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID) & ESICM',
    scope: 'international',
    category: 'ipc',
    year: '2022 / Clin Microbiol Infect',
    url: 'https://www.clinicalmicrobiologyandinfection.org/article/S1198-743X(21)00679-0/fulltext',
    pdfUrl: 'https://www.clinicalmicrobiologyandinfection.org/action/showPdf?pii=S1198-743X%2821%2900679-0',
    description: 'Az ESCMID és az ESICM hivatalos, bizonyítékokon alapuló európai irányelve a multirezisztens Gram-negatív baktériumok (MDR-GNB) által okozott súlyos infekciók kezelésére. Részletesen tárgyalja a harmadik generációs cefalosporin-rezisztens Enterobacterales (3GCephRE / ESBL), a karbapenem-rezisztens Enterobacterales (CRE: KPC, OXA-48, metallo-béta-laktamáz / MBL), a karbapenem-rezisztens Pseudomonas aeruginosa (CRPA) és a karbapenem-rezisztens Acinetobacter baumannii (CRAB) célzott kezelését modern béta-laktám kombinációkkal (Ceftazidim-Avibactam, Ceftolozan-Tazobactam, Meropenem-Vaborbactam, Cefiderocol) és kombinált sémákkal.',
    keyPoints: [
      'ESBL-termelő Enterobacterales (3GCephRE): Súlyos fertőzésekben és szepszisben Karbapenem (Meropenem vagy Imipenem) az elsőként választandó szer; alsó húgyúti fertőzésben Nitrofurantoin, Pivmecillinam vagy Fosfomycin használható',
      'KPC és OXA-48 karbapenemáz-termelő CRE: Új béta-laktám kombinációk az első vonalban: Ceftazidim-Avibactam (CZA) vagy Meropenem-Vaborbactam a régebbi, nefrotoxikus Colistin-alapú terápiák helyett!',
      'Metallo-béta-laktamáz (MBL: NDM, VIM, IMP) termelő törzsek: Ceftazidim-Avibactam + Aztreonam (CZA + ATM) kombináció, vagy Cefiderocol monoterápia',
      'Karbapenem-rezisztens Pseudomonas aeruginosa (CRPA): Ceftolozan-Tazobactam (C/T) vagy Ceftazidim-Avibactam a javasolt elsővonalbeli szer a polimixin/aminoglikozid kezelésekkel szemben',
      'Karbapenem-rezisztens Acinetobacter baumannii (CRAB): Nagy dózisú Ampicillin-Sulbactam (napi 9-12g sulbactam komponens) kombinációban (pl. Polymyxin B/Colistin vagy Tigecyclin); Cefiderocol körültekintéssel, alternatívaként javasolt'
    ],
    tags: ['ESCMID', 'ESICM', 'MDR', 'multidrug-resistant', 'Gram-negative', 'CRE', 'ESBL', 'CRPA', 'CRAB', 'ceftazidime-avibactam', 'ceftolozane-tazobactam', 'meropenem-vaborbactam', 'cefiderocol', 'colistin']
  }
];
