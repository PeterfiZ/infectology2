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
  { id: 'gi', name: { hu: 'Hasi & C. difficile', en: 'Abdominal & C. difficile', de: 'Abdominal & C. difficile' } },
  { id: 'cardio', name: { hu: 'Endocarditis & Cardiovascularis', en: 'Infective Endocarditis', de: 'Infektiöse Endokarditis' } },
  { id: 'urinary', name: { hu: 'Húgyúti fertőzések (UTI)', en: 'Urinary Tract Infections', de: 'Harnwegsinfektionen' } },
  { id: 'ipc', name: { hu: 'Infekciókontroll & Prevenció', en: 'Infection Control & Prevention', de: 'Infektionskontrolle & Prävention' } },
  { id: 'hepatology_hiv', name: { hu: 'Hepatológia & HIV', en: 'Hepatology & HIV', de: 'Hepatologie & HIV' } },
  { id: 'sti', name: { hu: 'Nemi úton terjedő fertőzések (STI)', en: 'Sexually Transmitted Infections', de: 'Sexuell übertragbare Infektionen' } },
  { id: 'fungal', name: { hu: 'Invazív gombafertőzések', en: 'Invasive Fungal Infections', de: 'Invasive Pilzinfektionen' } }
];

export const clinicalProtocols: ClinicalProtocol[] = [
  // ==================== MAGYARORSZÁGI SZAKMAI IRÁNYELVEK ====================
  {
    id: 'hu-sepsis-2021',
    title: 'Egészségügyi szakmai irányelv a felnőttkori szepszis és szeptikus sokk ellátásáról',
    originalTitle: 'Szakmai irányelv: Felnőttkori szepszis és szeptikus sokk korai felismerése és komplex intenzív terápiája',
    organization: 'Egészségügyi Szakmai Kollégium (Infektológia, Aneszteziológia és Intenzív Terápia Tagozat)',
    scope: 'hungarian',
    category: 'sepsis',
    year: '2021 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    pdfUrl: 'https://egeszsegugyikozlony.hu/',
    description: 'A felnőttkori szepszis és szeptikus sokk korai ágymelletti felismerése (SOFA / qSOFA score), a sürgősségi 1 órás csomag (Hour-1 bundle), vérkultúrák vétele az antibiotikum előtt, 30 ml/kg krisztalloid reszuszcitáció és korai célzott széles spektrumú IV antimikrobiális terápia.',
    keyPoints: [
      'Azonnali 1 órás ellátási csomag (Hour-1 bundle) szeptikus sokkban',
      'Hemokultúrák vétele (2-3 pár) az első antibiotikum dózis beadása előtt',
      'Korai empirikus IV baktericid antibiotikum (1 órán belül sokk esetén)',
      'Szérum laktát mérése és ismétlése; MAP ≥ 65 Hgmm fenntartása noradrenalinnal'
    ],
    tags: ['szepszis', 'szeptikus sokk', 'intenzív terápia', 'hour-1 bundle', 'hemokultúra', 'noradrenalin']
  },
  {
    id: 'hu-cap-2022',
    title: 'Egészségügyi szakmai irányelv a területen szerzett pneumoniák (CAP) felnőttkori diagnosztikájáról és kezeléséről',
    originalTitle: 'A felnőttkori közösségben szerzett pneumoniák (CAP) ellátásának szakmai irányelve',
    organization: 'Egészségügyi Szakmai Kollégium (Tüdőgyógyászat és Infektológia Tagozat)',
    scope: 'hungarian',
    category: 'respiratory',
    year: '2022 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'A felnőttkori közösségben szerzett pneumonia kivizsgálási algoritmusa, rizikóstratifikáció (CURB-65 és PSI), mikrobiológiai diagnosztika (sputum, Legionella/Pneumococcus vizelet antigén) és empirikus antibiotikum-választás ambuláns és kórházi osztályos/intenzív szinten.',
    keyPoints: [
      'CURB-65 rizikóstratifikáció az ambuláns vs. fekvőbeteg kezelés eldöntésére',
      'Ambuláns terápia: Amoxicillin monoterápia vagy Doxycyclin / légúti makrolid',
      'Kórházi osztályos: IV Amoxicillin/Klavulánsav vagy Ceftriaxon + Makrolid',
      'Súlyos intenzíves CAP: Béta-laktám + Makrolid vagy Légúti fluorokinolon'
    ],
    tags: ['pneumonia', 'CAP', 'CURB-65', 'tüdőgyulladás', 'ceftriaxon', 'legionella']
  },
  {
    id: 'hu-cdi-2014',
    title: 'Clostridioides difficile fertőzések (CDI) diagnosztikája, terápiája és megelőzése (OEK módszertani levél)',
    originalTitle: 'Módszertani levél a Clostridium difficile által okozott fertőzések surveillance-áról, diagnosztikájáról, terápiájáról és megelőzéséről (OEK / Szakmai Kollégium)',
    organization: 'Országos Epidemiológiai Központ (OEK / NNGYK jogelőd) & Infektológia Tagozat',
    scope: 'hungarian',
    category: 'gi',
    year: '2014 (Hivatalosan nem frissült 2021-ben; a hazai klinikum az ESCMID és IDSA ajánlásokat követi)',
    url: 'https://www.nnk.gov.hu/',
    pdfUrl: 'https://www.nnk.gov.hu/',
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
    id: 'hu-meningitis-2020',
    title: 'Egészségügyi szakmai irányelv a felnőttkori heveny bakteriális meningitis kórismézéséről és kezeléséről',
    originalTitle: 'Akut felnőttkori purulens meningitis diagnosztikus és terápiás protokollja',
    organization: 'Egészségügyi Szakmai Kollégium (Infektológia és Neurológia Tagozat)',
    scope: 'hungarian',
    category: 'cns',
    year: '2020 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'Sürgősségi liquordiagnosztika (fehérvérsejt, fehérje, glükóz/szérum glükóz hányados, Gram-festés, latex agglutináció/PCR), azonnali parenterális dexamethason (10 mg IV) az első antibiotikum dózis előtt, empirikus Ceftriaxon 2x2g IV + Ampicillin 6x2g IV (>50 év vagy immunszuppresszió esetén Listeria monocytogenes ellen).',
    keyPoints: [
      'Azonnali LP elvégzése; ha koponya CT szükséges fókusz/tudatzavar miatt, előbb hemokultúra + azonnali dexamethason és antibiotikum!',
      'Dexamethason 10 mg IV közvetlenül az első antibiotikum dózis előtt vagy azzal egy időben adva (S. pneumoniae mortalitáscsökkentés)',
      'Empirikus terápia: Ceftriaxon 2x2g IV (+ Ampicillin 6x2g IV 50 év felett vagy immundependens betegnél)',
      'N. meningitidis gyanú esetén azonnali cseppfertőzés izoláció és kontaktusok kemoprofilaxisa (Rifampicin vagy Ciprofloxacin)'
    ],
    tags: ['meningitis', 'liquor', 'ceftriaxon', 'ampicillin', 'listeria', 'dexamethason', 'agyhártyagyulladás']
  },
  {
    id: 'hu-uti-2022',
    title: 'Egészségügyi szakmai irányelv a felnőttkori szövődménymentes és szövődményes húgyúti fertőzések ellátásáról',
    originalTitle: 'Húgyúti infekciók (cystitis, pyelonephritis, katéterhez társuló UTI) diagnosztikája és antimikrobiális terápiája',
    organization: 'Egészségügyi Szakmai Kollégium (Urológia és Infektológia Tagozat)',
    scope: 'hungarian',
    category: 'urinary',
    year: '2022 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'Szövődménymentes akut cystitisben első vonalbeli szerek (Nitrofurantoin, Fosfomycin trometamol, Pivmecillinam); fluorokinolonok (Ciprofloxacin) szigorú kerülése egyszerű cystitisben az EMA és hazai figyelmeztetések alapján; akut pyelonephritis és uroszepszis kórházi ellátása; aszimptomatikus bakteriuria (ASB) kezelésének tilalma nem terheseknél.',
    keyPoints: [
      'Egyszerű cystitisben Fluorokinolonok (Ciprofloxacin) adása KONTRAINDIKÁLT a mellékhatás-profil és rezisztencia miatt',
      'Első vonal: Nitrofurantoin 2x100 mg (5 nap) vagy Fosfomycin 1x3g PO',
      'Akut pyelonephritis: Ceftriaxon 1-2g IV vagy Ciprofloxacin (ha lokális rezisztencia <10%)',
      'Aszimptomatikus bakteriuria (ASB) kizárólag terhességben és invazív urológiai műtét előtt kezelendő!'
    ],
    tags: ['UTI', 'cystitis', 'pyelonephritis', 'fosfomycin', 'nitrofurantoin', 'uroszepszis']
  },
  {
    id: 'hu-bone-joint-2023',
    title: 'Protézis-ízületi fertőzések (PJI) és felnőttkori osteomyelitis diagnosztikai és sebészi-antimikrobiális protokollja',
    originalTitle: 'Csont- és ízületi implantátum fertőzések ellátási irányelve',
    organization: 'Egészségügyi Szakmai Kollégium (Ortopédia és Infektológia Tagozat)',
    scope: 'hungarian',
    category: 'bone_joint',
    year: '2023 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'A protézis-ízületi fertőzések időbeli felosztása: Akut korai (<4 hét, DAIR még megkísérelhető), Késleltetett posztoperatív (4 hét - 1 év, antibiotikummal NEM menthető meg, revízió és implantátumcsere kötelező!), Késői (>1 év, hematogén szórás). Szeptikus arthritisben sürgősségi ízületi drenázs és Cefazolin + Vancomycin S. aureus gyanú esetén.',
    keyPoints: [
      'Késleltetett posztoperatív PJI (4 hét - 1 év) ANTIBIOTIKUMMAL NEM MENTHETŐ MEG, egy- vagy kétfázisú revíziós műtét kötelező',
      'DAIR (debridement és implantátummegtartás) kizárólag akut posztop (<4 hét) vagy akut hematogén formában kísérelhető meg',
      'Szeptikus arthritis ortopédiai sürgősség: azonnali dekompresszió / lavage + IV antibiotikum',
      'Staphylococcus PJI esetén biofilm-aktív Rifampicin kombináció a seb teljes gyógyulása után'
    ],
    tags: ['PJI', 'protézis', 'osteomyelitis', 'septicus arthritis', 'DAIR', 'biofilm', 'rifampicin']
  },
  {
    id: 'hu-endocarditis-2023',
    title: 'A felnőttkori infectiv endocarditis diagnosztikája és terápiája (ESC Hazai Adaptáció)',
    originalTitle: 'Infectiv endocarditis irányelv: multimodális képalkotás, mikrobiológia és szívsebészeti indikációk',
    organization: 'Egészségügyi Szakmai Kollégium (Kardiológia és Infektológia Tagozat)',
    scope: 'hungarian',
    category: 'cardio',
    year: '2023 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'Módosított Duke-kritériumok, sürgősségi TTE és TEE echokardiográfia, 3 pár külön szúrásból vett hemokultúra antibiotikum előtt, szinergista baktericid IV terápia (Ampicillin, Ceftriaxon, Vancomycin, Gentamicin), szívsebészeti sürgősségi indikációk (akut szívelégtelenség, kontrollálatlan fertőzés, nagy mobilis vegetációk embolizáció megelőzésére).',
    keyPoints: [
      '3 független pár hemokultúra vétele 30-60 perces időközökkel a lázcsúcstól függetlenül az antibiotikum előtt',
      'Transoesophagealis echokardiográfia (TEE) kötelező natív billentyű pozitív TTE vagy protézisbillentyű esetén',
      'Korai sürgős műtét: refrakter tüdőödéma/sokk, periannularis tályog, vagy >10 mm vegetáció embolicust megelőzve',
      'Staphylococcus aureus natív billentyű: Cefazolin vagy Flucloxacillin (MSSA) vs. Vancomycin/Daptomycin (MRSA)'
    ],
    tags: ['endocarditis', 'TEE', 'Duke-kritériumok', 'vegetáció', 'billentyű', 'ampicillin', 'gentamicin']
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
    id: 'hu-hiv-2023',
    title: 'Felnőttkori HIV-fertőzöttek komplex gondozása és antiretrovirális kezelése (ART)',
    originalTitle: 'Országos HIV/AIDS Klinikai Protokoll: Test and Treat elv, PrEP, PEP és modern INSTI terápiák',
    organization: 'DPC Szent László Kórház Nemzeti Központ & Infektológia Szakmai Kollégium',
    scope: 'hungarian',
    category: 'hepatology_hiv',
    year: '2023 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'Azonnali kombinált antiretrovirális terápia (cART) indítása a CD4 sejtszámtól függetlenül (Test & Treat). INSTI-alapú első vonalbeli kombinációk (Bictegravir/TAF/FTC vagy Dolutegravir-bázisú rejim), expozíció előtti (PrEP) és utáni (PEP) profilaxis protokollja, U=U (Undetectable = Untransmittable) tudományos elv érvényesülése.',
    keyPoints: [
      'Test and Treat stratégia: azonnali ART indítás igazolt HIV fertőzéskor a CD4 sejtszámtól függetlenül',
      'U=U (Undetectable = Untransmittable): a szupprimált víruskópiájú beteg nem adja át a fertőzést szexuális úton',
      'Expozíció utáni profilaxis (PEP): legkésőbb 72 órán belül (optimálisan 2-4 órán belül) indítandó 28 napig',
      'Opportunista fertőzések (PJP, Toxoplasma, Cryptococcus) megelőzése és kezelése'
    ],
    tags: ['HIV', 'AIDS', 'ART', 'INSTI', 'dolutegravir', 'bictegravir', 'PrEP', 'PEP']
  },
  {
    id: 'hu-sap-2021',
    title: 'A sebészi antibiotikum profilaxis (SAP) szakmai protokollja',
    originalTitle: 'Irányelv a műtéti fertőzések megelőzésére alkalmazott profilaktikus antibiotikum-adásról',
    organization: 'Egészségügyi Szakmai Kollégium (Sebészet és Infektológia Tagozat)',
    scope: 'hungarian',
    category: 'ipc',
    year: '2021 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'A műtéti sebfertőzések (SSI) megelőzésének alapelvei: az antibiotikum beadása a metszés előtt 30-60 perccel (Vancomycin esetén 60-120 perccel); Cefazolin mint leggyakoribb szer; ismétlő dózis 4 óránál hosszabb műtéteknél; szigorú tilalom a műtét végét követő 24 órán túli profilaxisra.',
    keyPoints: [
      'Optimális időzítés: a sebészi metszés előtt 30-60 perccel legyen beadva az intravénás antibiotikum',
      'Elsőként választandó szer a tiszta-szennyezett és implantátumos műtétek többségében: Cefazolin 2g IV',
      'Ismétlő dózis intraoperatívan indokolt, ha a műtét eléri az antibiotikum 2 felezési idejét (>3-4 óra Cefazolinnál)',
      'A műtét befejezése után az antibiotikum folytatása NEM indokolt (tilos a posztoperatív "túlprofilaxis")'
    ],
    tags: ['profilaxis', 'SAP', 'sebészet', 'cefazolin', 'SSI', 'műtéti sebfertőzés']
  },
  {
    id: 'hu-nngyk-mdro-2023',
    title: 'Módszertani levél a multirezisztens kórokozók (MDRO: MRSA, VRE, ESBL, CRE) surveillance-áról és az infekciókontrollról',
    originalTitle: 'NNGYK Szakmai Útmutató az egészségügyi ellátással összefüggő fertőzések (HAI) és multirezisztens baktériumok megelőzésére',
    organization: 'Nemzeti Népegészségügyi és Gyógyszerészeti Központ (NNGYK)',
    scope: 'hungarian',
    category: 'ipc',
    year: '2023 / Hatályos',
    url: 'https://www.nnk.gov.hu/',
    description: 'A kórházi fertőzések (HAI) felügyelete, aktív mikrobiológiai szűrés rizikócsoportokban (MRSA orrkenet, CRE rektális szűrés), kontakt izoláció szabályai, kohorszálás, kézhigiénés indikátorok (WHO 5 Moment) és a környezeti felületfertőtlenítés protokolljai.',
    keyPoints: [
      'Kontakt izoláció kötelező igazolt MRSA, VRE, CRE és multirezisztens Acinetobacter/Pseudomonas hordozás esetén',
      'Kézfertőtlenítés alkoholos kézbedörzsölővel a WHO 5 Moment szerint minden betegérintkezés kulcspontjain',
      'C. difficile esetén a spórák miatt kötelező a szappanos kézmosás ÉS sporicid felületfertőtlenítés',
      'MRSA dekolonizáció elektív implantátumos műtétek előtt (Mupirocin orrkenőcs + klórhexidin)'
    ],
    tags: ['NNGYK', 'MRSA', 'VRE', 'CRE', 'izoláció', 'infekciókontroll', 'kézhigiéné', 'multirezisztens']
  },
  {
    id: 'hu-vaccination-2024',
    title: 'Országos Védőoltási Módszertani Levél (NNGYK 2024)',
    originalTitle: 'Az NNGYK módszertani levele a védőoltásokról és a fertőző betegségek elleni specifikus profilaxisról',
    organization: 'Nemzeti Népegészségügyi és Gyógyszerészeti Központ (NNGYK)',
    scope: 'hungarian',
    category: 'ipc',
    year: '2024 / Hatályos',
    url: 'https://www.nnk.gov.hu/',
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
    id: 'hu-sti-2022',
    title: 'A szexuális úton terjedő fertőzések (STI / STD) diagnosztikai és kezelési protokollja',
    originalTitle: 'Országos Bőr- és Nemikórtani Szakmai Irányelv a nemi úton terjedő fertőzésekről',
    organization: 'Egészségügyi Szakmai Kollégium (Bőr- és Nemibetegségek Tagozat)',
    scope: 'hungarian',
    category: 'sti',
    year: '2022 / Hatályos',
    url: 'https://kollegium.aeek.hu/',
    description: 'Szifilisz stádiumfüggő diagnosztikája és kezelése (Benzathine-penicillin G intramusculáris adása), gonorrhoea modern kezelése (Ceftriaxon emelt dózisban monoterápiaként, rezisztencia-surveillance), Chlamydia trachomatis urogenitalis fertőzés (Doxycyclin 2x100 mg 7 napig mint arany standard), valamint partnerkezelési kötelezettségek.',
    keyPoints: [
      'Szifilisz korai formáiban: Benzathine penicillin G 2.4 millió NE IM egyszeri adagban az arany standard',
      'Gonorrhoea: Ceftriaxon 1g IM egyszeri adás; az azithromycin kombináció rutinszerűen elhagyható a makrolid rezisztencia miatt',
      'Chlamydia trachomatis: Doxycyclin 2x100 mg PO 7 napig (magasabb eradikációs ráta, mint az 1g Azithromycin)',
      'Szexuális partnerek kötelező felkutatása, szűrése és szimultán kezelése az újrafertőződés megelőzésére'
    ],
    tags: ['STI', 'szifilisz', 'gonorrhoea', 'chlamydia', 'penicillin', 'ceftriaxon', 'doxycyclin']
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
    title: 'ESCMID Clinical Guideline: Treatment of Clostridioides difficile Infection in Adults',
    originalTitle: 'European Society of Clinical Microbiology and Infectious Diseases: 2021 update of the treatment guidance document for Clostridioides difficile infection in adults (Clin Microbiol Infect 2021)',
    organization: 'European Society of Clinical Microbiology and Infectious Diseases (ESCMID)',
    scope: 'international',
    category: 'gi',
    year: '2021 / Clin Microbiol Infect',
    url: 'https://www.clinicalmicrobiologyandinfection.com/article/S1198-743X(21)00344-0/fulltext',
    pdfUrl: 'https://www.clinicalmicrobiologyandinfection.com/action/showPdf?pii=S1198-743X%2821%2900344-0',
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
    url: 'https://www.idsociety.org/practice-guideline/clostridioides-difficile/',
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
    url: 'https://www.idsociety.org/practice-guideline/hospital-acquired-and-ventilator-associated-pneumonia-hapvap/',
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
    id: 'intl-ebjis-pji-2021',
    title: 'EBJIS / ICM Consensus on Prosthetic Joint Infection (PJI) & Diagnostic Criteria',
    originalTitle: 'The EBJIS Definition of Periprosthetic Joint Infection: A Practical Guide for Diagnosis and Surgical Treatment Strategies',
    organization: 'European Bone and Joint Infection Society (EBJIS) & International Consensus Meeting (ICM)',
    scope: 'international',
    category: 'bone_joint',
    year: '2021 / Bone & Joint Journal',
    url: 'https://ebjis.org/',
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
    url: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Infective-Endocarditis-Guidelines',
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
    url: 'https://www.clinicalmicrobiologyandinfection.com/article/S1198-743X(16)00020-5/fulltext',
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
    id: 'intl-eau-uti-2024',
    title: 'EAU Guidelines on Urological Infections 2024 (UTI, Pyelonephritis, Urosepsis)',
    originalTitle: 'EAU Guidelines on Urological Infections: Asymptomatic Bacteriuria, Uncomplicated and Complicated UTIs, Catheter-associated UTIs and Urosepsis',
    organization: 'European Association of Urology (EAU)',
    scope: 'international',
    category: 'urinary',
    year: '2024 / EAU Guidelines Office',
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
    url: 'https://www.easl.eu/guidelines/',
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
    id: 'intl-easl-hbv-2017',
    title: 'EASL Clinical Practice Guidelines on the Management of Hepatitis B Virus Infection',
    originalTitle: 'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection',
    organization: 'European Association for the Study of the Liver (EASL)',
    scope: 'international',
    category: 'hepatology_hiv',
    year: '2017 / Journal of Hepatology',
    url: 'https://www.easl.eu/guidelines/',
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
    id: 'intl-eacs-hiv-2023',
    title: 'EACS Guidelines for the Clinical Management and Treatment of HIV (Version 12.0)',
    originalTitle: 'European AIDS Clinical Society (EACS) Guidelines for the Clinical Management and Treatment of HIV-positive Adults in Europe',
    organization: 'European AIDS Clinical Society (EACS)',
    scope: 'international',
    category: 'hepatology_hiv',
    year: '2023 / EACS',
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
  }
];
