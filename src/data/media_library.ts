export interface LocalizedString {
  hu: string;
  en: string;
  de: string;
}

export interface InteractiveStep {
  title: LocalizedString;
  description: LocalizedString;
  graphic: string; // SVG or custom visual state description
}

export interface MediaItem {
  id: string;
  category: 'cns' | 'hepatitis' | 'gi' | 'urinary' | 'procedures';
  type: 'microscopic' | 'imaging' | 'diagram' | 'procedure';
  title: LocalizedString;
  caption: LocalizedString;
  description: LocalizedString;
  diseaseId?: string; // Links to textbook disease
  url: string; // Fallback image/SVG URL
  interactiveSteps?: InteractiveStep[]; // For procedures
}

export const mediaLibraryItems: MediaItem[] = [
  {
    id: 'meningitidis_gram',
    category: 'cns',
    type: 'microscopic',
    title: {
      hu: 'Neisseria meningitidis Gram-festése',
      en: 'Neisseria meningitidis Gram Stain',
      de: 'Gram-Färbung von Neisseria meningitidis'
    },
    caption: {
      hu: 'Gram-negatív diplococcusok fvs-ben',
      en: 'Gram-negative diplococci in WBCs',
      de: 'Gramnegative Diplokokken in Leukozyten'
    },
    description: {
      hu: 'Gram-negatív, kávészem vagy vese alakú diplococcusok, amelyek részben intracellulárisan helyezkednek el polymorphonuclearis (PMN) fehérvérsejtek belsejében. Ez a kép kulcsfontosságú a gennyes meningitis gyors mikrobiológiai diagnosztikájában.',
      en: 'Gram-negative, kidney-shaped diplococci located partially intracellularly within polymorphonuclear (PMN) leukocytes. This finding is critical for rapid microbiological diagnosis of purulent meningitis.',
      de: 'Gramnegative, kaffeebohnenförmige Diplokokken, die sich teilweise intrazellulär in polymorphkernigen (PMN) Leukozyten befinden. Dies ist ein entscheidender Befund für die mikrobiologische Schnelldiagnostik der eitrigen Meningitis.'
    },
    diseaseId: 'bacterial_meningitis',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%230a0f1d'><defs><radialGradient id='lens' cx='50%' cy='50%' r='50%'><stop offset='85%' stop-color='%2312192c'/><stop offset='100%' stop-color='%2302040a'/></radialGradient><filter id='glow'><feGaussianBlur stdDeviation='3' result='coloredBlur'/><feMerge><feMergeNode in='coloredBlur'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><circle cx='250' cy='250' r='230' fill='url(%23lens)' stroke='%23334155' stroke-width='8'/><circle cx='250' cy='250' r='220' fill='none' stroke='%231e293b' stroke-width='2'/><g opacity='0.3'><circle cx='120' cy='150' r='50' fill='%23e07a5f' filter='blur(20px)'/><circle cx='380' cy='300' r='70' fill='%233d5a80' filter='blur(30px)'/><circle cx='200' cy='340' r='60' fill='%23ffb5a7' filter='blur(25px)'/></g><g filter='url(%23glow)' fill='none'><path d='M110,210 Q140,200 170,230 T200,200' stroke='%23fcb9b2' stroke-width='1.5' stroke-dasharray='3,5'/><path d='M300,140 Q320,180 340,150 T380,190' stroke='%23b5e2fa' stroke-width='1' stroke-dasharray='2,4'/></g><g transform='translate(180, 220)'><path d='M -40,-45 C -10,-60, 30,-50, 45,-20 C 55,10, 35,45, 0,50 C -30,52, -50,30, -55,0 Z' fill='%23b5e2fa' opacity='0.35' stroke='%2390e0ef' stroke-width='2'/><path d='M -20,-10 C -15,-20, -5,-25, 5,-20 C 15,-15, 10,0, -5,5 Z M -5,15 C 5,20, 15,10, 20,0 C 25,-10, 15,-20, 5,-15 Z' fill='%2348cae4' opacity='0.7'/><circle cx='-10' cy='-12' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='-5' cy='-7' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='10' cy='5' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='15' cy='10' r='4' fill='%23ef476f' filter='url(%23glow)'/></g><g transform='translate(310, 160)'><path d='M -30,-30 C -5,-45, 35,-35, 40,-10 C 45,15, 20,35, -10,35 C -35,35, -45,10, -40,-15 Z' fill='%23b5e2fa' opacity='0.3' stroke='%2390e0ef' stroke-width='1.5'/><path d='M -15,-5 C -10,-15, 0,-15, 5,-5 C 10,5, -5,15, -10,5 Z' fill='%2348cae4' opacity='0.6'/><circle cx='15' cy='15' r='4.5' fill='%23ef476f' filter='url(%23glow)'/><circle cx='19' cy='9' r='4.5' fill='%23ef476f' filter='url(%23glow)'/></g><g transform='translate(220, 330)'><path d='M -40,-40 C -15,-55, 30,-45, 35,-20 C 40,5, 15,40, -15,40 C -40,40, -50,15, -45,-15 Z' fill='%23b5e2fa' opacity='0.4' stroke='%2390e0ef' stroke-width='2'/><path d='M -10,-20 Q 5,-15 -5,-5 T -15,-10 Z' fill='%2348cae4' opacity='0.8'/><circle cx='10' cy='15' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='15' cy='20' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='-25' cy='10' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='-20' cy='15' r='4' fill='%23ef476f' filter='url(%23glow)'/></g><g><circle cx='80' cy='280' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='85' cy='285' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='390' cy='120' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='395' cy='125' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='150' cy='90' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='156' cy='92' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='340' cy='360' r='4' fill='%23ef476f' filter='url(%23glow)'/><circle cx='344' cy='354' r='4' fill='%23ef476f' filter='url(%23glow)'/></g><text x='250' y='460' font-family='monospace' font-size='12' fill='%2364748b' text-anchor='middle'>1000x Oil Immersion (Gram Stain)</text></svg>"
  },
  {
    id: 'pneumoniae_gram',
    category: 'cns',
    type: 'microscopic',
    title: {
      hu: 'Streptococcus pneumoniae Gram-festése',
      en: 'Streptococcus pneumoniae Gram Stain',
      de: 'Gram-Färbung von Streptococcus pneumoniae'
    },
    caption: {
      hu: 'Gram-pozitív láncolt diplococcusok tokkal',
      en: 'Gram-positive capped diplococci in chains',
      de: 'Grampositive Diplokokken mit Kapsel'
    },
    description: {
      hu: 'Gram-pozitív, lándzsa alakú (lancet-shaped) diplococcusok vagy rövid láncok. A sejtek körül jól látható egy festetlen, világos udvar (halo), amely a vaskos poliszacharid tokot jelzi. A háttérben gyulladásos sejtek (neutrofil granulocyták) töredékei láthatóak.',
      en: 'Gram-positive, lancet-shaped diplococci or short chains. A prominent unstained halo around the cells represents the thick polysaccharide capsule. Cellular debris and neutrophils are seen in the background.',
      de: 'Grampositive, lanzettförmige Diplokokken oder kurze Ketten. Ein deutlicher ungefärbter Hof (Halo) um die Zellen stellt die dicke Polysaccharidkapsel dar. Im Hintergrund sind Zelltrümmer und neutrophile Granulozyten zu sehen.'
    },
    diseaseId: 'bacterial_meningitis',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%230d0915'><defs><radialGradient id='lens' cx='50%' cy='50%' r='50%'><stop offset='85%' stop-color='%231c1328'/><stop offset='100%' stop-color='%23030107'/></radialGradient><filter id='glow'><feGaussianBlur stdDeviation='2.5' result='coloredBlur'/><feMerge><feMergeNode in='coloredBlur'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><circle cx='250' cy='250' r='230' fill='url(%23lens)' stroke='%23473160' stroke-width='8'/><g opacity='0.3'><circle cx='150' cy='150' r='60' fill='%237209b7' filter='blur(25px)'/><circle cx='350' cy='320' r='80' fill='%23f72585' filter='blur(30px)'/></g><g transform='translate(150,180) rotate(-20)' filter='url(%23glow)'><circle cx='0' cy='0' r='18' fill='%23ffffff' opacity='0.15'/><path d='M-10,0 C-10,-12 0,-15 0,-15 C0,-15 10,-12 10,0 C10,12 0,15 0,15 C0,15 -10,12 -10,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/><path d='M0,0 C0,-12 10,-15 10,-15 C10,-15 20,-12 20,0 C20,12 10,15 10,15 C10,15 0,12 0,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/><ellipse cx='0' cy='0' r='16' fill='none' stroke='%23d90429' stroke-width='1.5' stroke-dasharray='1,3' opacity='0.6'/><ellipse cx='10' cy='0' r='16' fill='none' stroke='%23d90429' stroke-width='1.5' stroke-dasharray='1,3' opacity='0.6'/></g><g transform='translate(260,250) rotate(35)' filter='url(%23glow)'><circle cx='0' cy='0' r='18' fill='%23ffffff' opacity='0.15'/><path d='M-10,0 C-10,-12 0,-15 0,-15 C0,-15 10,-12 10,0 C10,12 0,15 0,15 C0,15 -10,12 -10,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/><path d='M0,0 C0,-12 10,-15 10,-15 C10,-15 20,-12 20,0 C20,12 10,15 10,15 C10,15 0,12 0,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/><circle cx='0' cy='0' r='16' fill='none' stroke='%23ffffff' opacity='0.25' stroke-width='2'/><circle cx='10' cy='0' r='16' fill='none' stroke='%23ffffff' opacity='0.25' stroke-width='2'/></g><g transform='translate(320,140) rotate(70)' filter='url(%23glow)'><circle cx='0' cy='0' r='18' fill='%23ffffff' opacity='0.15'/><path d='M-10,0 C-10,-12 0,-15 0,-15 C0,-15 10,-12 10,0 C10,12 0,15 0,15 C0,15 -10,12 -10,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/><path d='M0,0 C0,-12 10,-15 10,-15 C10,-15 20,-12 20,0 C20,12 10,15 10,15 C10,15 0,12 0,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/></g><g transform='translate(180,340) rotate(-45)' filter='url(%23glow)'><circle cx='0' cy='0' r='18' fill='%23ffffff' opacity='0.15'/><path d='M-10,0 C-10,-12 0,-15 0,-15 C0,-15 10,-12 10,0 C10,12 0,15 0,15 C0,15 -10,12 -10,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/><path d='M0,0 C0,-12 10,-15 10,-15 C10,-15 20,-12 20,0 C20,12 10,15 10,15 C10,15 0,12 0,0 Z' fill='%234d194d' stroke='%237209b7' stroke-width='3'/></g><g transform='translate(350, 300)' opacity='0.4'><path d='M-30,-20 C-10,-35 25,-25 30,-5 C35,15 15,30 -10,30 C-30,30 -40,10 -35,-15 Z' fill='%23f72585' opacity='0.25' stroke='%23f72585' stroke-width='1.5'/><circle cx='5' cy='5' r='3.5' fill='%23ffffff'/><circle cx='-10' cy='-5' r='4' fill='%23ffffff'/></g><text x='250' y='460' font-family='monospace' font-size='12' fill='%238a817c' text-anchor='middle'>Streptococcus pneumoniae (Gram-positive)</text></svg>"
  },
  {
    id: 'meningitis_ct',
    category: 'cns',
    type: 'imaging',
    title: {
      hu: 'Koponya CT vizsgálat gennyes meningitisben',
      en: 'Brain CT in Acute Purulent Meningitis',
      de: 'Schädel-CT bei akuter eitriger Meningitis'
    },
    caption: {
      hu: 'Meningeális halmozás kontrasztos CT felvételen',
      en: 'Meningeal enhancement on contrast-enhanced CT',
      de: 'Meningeales Enhancement im Kontrast-CT'
    },
    description: {
      hu: 'Kontrasztanyaggal végzett axiális koponya CT felvétel. Jól látható a leptomeningealis burkok kifejezett, vonalas jelhalmozása a sulcusokban és az agyfelszínen (főleg a frontotemporalis területeken), valamint a sulcusok elmosódása az enyhe diffúz agyödéma következtében.',
      en: 'Contrast-enhanced axial head CT demonstrating diffuse linear leptomeningeal enhancement within the cerebral sulci and basal cisterns, accompanied by narrowing of sulci indicating diffuse brain edema.',
      de: 'Kontrastmittelverstärktes axiales Schädel-CT mit diffusem, linearem meningealem Enhancement in den Sulci und basalen Zisternen, begleitet von einer Verengung der Sulci als Zeichen eines diffusen Hirnödems.'
    },
    diseaseId: 'bacterial_meningitis',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%23050505'><defs><radialGradient id='brainGrad' cx='50%' cy='50%' r='50%'><stop offset='0%' stop-color='%233a3a3a'/><stop offset='70%' stop-color='%23242424'/><stop offset='100%' stop-color='%23121212'/></radialGradient><filter id='enhance'><feGaussianBlur stdDeviation='2' result='blur'/><feMerge><feMergeNode in='blur'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><path d='M250,50 C120,50 80,110 80,240 C80,350 130,430 250,450 C370,430 420,350 420,240 C420,110 380,50 250,50 Z' fill='url(%23brainGrad)'/><path d='M250,42 C110,42 70,102 70,240 C70,360 120,442 250,462 C380,442 430,360 430,240 C430,102 390,42 250,42 Z' fill='none' stroke='%23e0e0e0' stroke-width='10'/><path d='M250,22 C100,22 60,90 60,240 C60,370 110,452 250,472 C390,452 440,370 440,240 C440,90 400,22 250,22 Z' fill='none' stroke='%23888' stroke-width='2'/><g stroke='%231a1a1a' stroke-width='8' fill='none' stroke-linecap='round'><path d='M245,100 C210,120 200,150 210,180 T240,240'/><path d='M255,100 C290,120 300,150 290,180 T260,240'/><path d='M140,150 Q180,180 150,220'/><path d='M360,150 Q320,180 350,220'/><path d='M120,260 Q160,280 140,330'/><path d='M380,260 Q340,280 360,330'/><path d='M200,350 Q250,380 210,410'/><path d='M300,350 Q250,380 290,410'/></g><g stroke='%235aff15' stroke-width='3' fill='none' stroke-linecap='round' opacity='0.35' filter='url(%23enhance)'><path d='M250,48 C122,48 82,108 82,238 C82,348 132,428 250,448 Z'/><path d='M250,48 C378,48 418,108 418,238 C418,348 368,428 250,448 Z'/></g><g stroke='%2300f5ff' stroke-width='3.5' fill='none' stroke-linecap='round' filter='url(%23enhance)'><path d='M145,145 Q175,175 155,215'/><path d='M355,145 Q325,175 345,215'/><path d='M125,255 Q155,275 145,325'/><path d='M375,255 Q345,275 355,325'/><path d='M242,95 C208,115 198,145 208,175 T238,235'/><path d='M258,95 C292,115 302,145 292,175 T262,235'/><path d='M205,345 Q245,375 215,405'/><path d='M295,345 Q255,375 285,405'/></g><g fill='%23111' stroke='%23222' stroke-width='2'><path d='M235,190 Q250,170 240,150 C240,150 250,140 250,135 T250,150 Q260,170 265,190 Z'/><path d='M235,260 Q250,280 240,300 C240,300 250,310 250,315 T250,300 Q260,280 265,260 Z'/></g><text x='250' y='488' font-family='sans-serif' font-size='11' fill='%23666' text-anchor='middle'>Axial Contrast CT: Linear Leptomeningeal Enhancement</text></svg>"
  },
  {
    id: 'brain_abscess_mri',
    category: 'cns',
    type: 'imaging',
    title: {
      hu: 'Agytályog kontrasztos koponya MRI felvételen',
      en: 'Brain Abscess on Contrast-Enhanced MRI',
      de: 'Hirnabszess im Kontrastmittel-MRT'
    },
    caption: {
      hu: 'Gyűrűszerűen halmozó elváltozás és kiterjedt ödéma',
      en: 'Ring-enhancing lesion with vasogenic edema',
      de: 'Ringförmiges Enhancement mit vasogenem Ödem'
    },
    description: {
      hu: 'Kontrasztanyagos T1-súlyozott koponya MRI felvétel. A jobb oldali frontális lebenyben egy szabályos, kerekded, vékony falú gyűrűszerű halmozást mutató képlet látható (tályogtok), amelynek belseje nem halmoz (elfolyósodott gennyes necrosis). Az elváltozás körül hatalmas, sötét, ujjujjszerű perifocalis vasogén ödéma észlelhető, amely térfoglaló hatást fejt ki.',
      en: 'Contrast-enhanced T1-weighted axial brain MRI. A well-defined, round, thin-walled, ring-enhancing lesion (abscess wall) is visible in the right frontal lobe. The center is non-enhancing (liquefactive purulent necrosis). The lesion is surrounded by extensive dark, finger-like vasogenic edema causing mass effect.',
      de: 'Kontrastmittelverstärktes T1-gewichtetes axiales Schädel-MRT. Ein gut definierter, runder, dünnwandiger, ringförmig kontrastierender Herd (Abszesskapsel) ist im rechten Frontallappen sichtbar. Das Zentrum kontrastiert nicht (verflüssigte eitrige Nekrose). Die Läsion ist von einem ausgedehnten, fingerförmigen vasogenen Ödem umgeben, das einen raumfordernden Effekt hat.'
    },
    diseaseId: 'bacterial_meningitis',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%23040404'><defs><radialGradient id='mriBrain' cx='50%' cy='50%' r='50%'><stop offset='0%' stop-color='%23404040'/><stop offset='80%' stop-color='%231e1e1e'/><stop offset='100%' stop-color='%230a0a0a'/></radialGradient><filter id='neon'><feGaussianBlur stdDeviation='3' result='blur'/><feMerge><feMergeNode in='blur'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><path d='M250,60 C130,60 90,120 90,240 C90,340 130,420 250,440 C370,420 410,340 410,240 C410,120 370,60 250,60 Z' fill='url(%23mriBrain)'/><path d='M250,56 C126,56 86,116 86,236 C86,336 126,416 250,436 C374,416 414,336 414,236 C414,116 374,56 250,56 Z' fill='none' stroke='%23333' stroke-width='6'/><g fill='none' stroke='%23121212' stroke-width='4' stroke-linecap='round'><path d='M245,110 C210,130 200,160 210,190 T240,250'/><path d='M255,110 C290,130 300,160 290,190 T260,250'/><path d='M150,160 Q180,190 160,230'/><path d='M350,160 Q320,190 340,230'/></g><path d='M275,160 Q260,130 200,120 Q165,150 160,190 Q150,240 180,260 Q210,240 240,260 Q270,220 275,160 Z' fill='%23111111' filter='blur(15px)' opacity='0.75'/><g transform='translate(195,175)'><circle cx='0' cy='0' r='38' fill='none' stroke='%23050505' stroke-width='8' filter='blur(8px)' opacity='0.9'/><circle cx='0' cy='0' r='30' fill='%231c1510'/><circle cx='0' cy='0' r='30' fill='none' stroke='%23fffaed' stroke-width='4' filter='url(%23neon)'/><ellipse cx='-3' cy='-2' rx='10' ry='7' fill='%232c2520' opacity='0.4'/></g><g stroke='%23222' stroke-width='3' fill='none' stroke-linecap='round'><path d='M130,270 Q170,290 150,340'/><path d='M370,270 Q330,290 350,340'/><path d='M200,360 Q250,390 210,420'/><path d='M300,360 Q250,390 290,420'/></g><g fill='%23080808' stroke='%23181818' stroke-width='2'><path d='M235,210 Q250,190 240,170 T250,155 T250,170 Q260,190 265,210 Z'/><path d='M235,270 Q250,290 240,310 T250,325 T250,310 Q260,290 265,270 Z'/></g><text x='250' y='475' font-family='sans-serif' font-size='11' fill='%23555' text-anchor='middle'>T1-weighted Contrast MRI: Right Frontal Ring-Enhancing Abscess</text></svg>"
  },
  {
    id: 'giardia_smear',
    category: 'gi',
    type: 'microscopic',
    title: {
      hu: 'Giardia lamblia trofozoit székletkenetben',
      en: 'Giardia lamblia Trophozoite in Stool Smear',
      de: 'Giardia-lamblia-Trophozoit im Stuhlausstrich'
    },
    caption: {
      hu: 'Körte alakú trofozoit szimmetrikus magvakkal',
      en: 'Pear-shaped trophozoite with symmetrical nuclei',
      de: 'Birnenförmiger Trophozoit mit zwei Kernen'
    },
    description: {
      hu: 'Jóddal megfestett székletkenet fénymikroszkópos képe. Jól látható az elülső részén kiszélesedő, hátrafelé elkeskenyedő, körte alakú Giardia lamblia trofozoit. Két szimmetrikus sejtmagja és a mediális testek egy jellegzetes „mopszfej” vagy „clown-face” pofit rajzolnak ki. Láthatóak még az ostorok maradványai is.',
      en: 'Microscopic view of an iodine-stained wet mount from a stool sample. The classic pear-shaped Giardia lamblia trophozoite is visible, showing two symmetrical nuclei positioned in the broad anterior end, resembling eyes (giving it a characteristic "clown-face" or "old man with glasses" look) and a central axostyle.',
      de: 'Mikroskopische Ansicht eines jodgefärbten Stuhlausstrichs. Sichtbar ist der klassische birnenförmige Trophozoit von Giardia lamblia mit zwei symmetrischen Zellkernen im breiten Vorderende, die wie Augen wirken (was ihm ein charakteristisches Gesichtsaussehen verleiht), und einem zentralen Axostyl.'
    },
    diseaseId: 'giardiasis',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%23111a0d'><defs><radialGradient id='field' cx='50%' cy='50%' r='50%'><stop offset='85%' stop-color='%2322361a'/><stop offset='100%' stop-color='%23081005'/></radialGradient><filter id='soft'><feGaussianBlur stdDeviation='1.5' result='blur'/><feMerge><feMergeNode in='blur'/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs><circle cx='250' cy='250' r='230' fill='url(%23field)' stroke='%23385e25' stroke-width='8'/><g opacity='0.25' filter='url(%23soft)'><circle cx='180' cy='180' r='50' fill='%23ddb892'/><circle cx='320' cy='290' r='60' fill='%2374c69d'/><circle cx='290' cy='140' r='40' fill='%23b7e4c7'/></g><g transform='translate(250,220) rotate(15)' filter='url(%23soft)'><path d='M-15,100 C-15,120 0,150 0,150 C0,150 15,120 15,100 C25,80 50,40 50,-10 C50,-50 25,-75 0,-75 C-25,-75 -50,-50 -50,-10 C-50,40 -25,80 -15,100 Z' fill='%23ccff33' opacity='0.55' stroke='%239ef01a' stroke-width='2.5'/><ellipse cx='0' cy='20' rx='45' ry='35' fill='%2370e000' opacity='0.25'/><ellipse cx='-18' cy='-25' rx='10' ry='14' fill='%23e2f1af' stroke='%2370e000' stroke-width='2'/><ellipse cx='18' cy='-25' rx='10' ry='14' fill='%23e2f1af' stroke='%2370e000' stroke-width='2'/><circle cx='-18' cy='-25' r='4.5' fill='%233a5a40'/><circle cx='18' cy='-25' r='4.5' fill='%233a5a40'/><path d='M-18,-11 C-15,-15 -21,-15 -18,-11 Z M18,-11 C21,-15 15,-15 18,-11 Z' fill='%233a5a40'/><path d='M0,-70 L0,140' stroke='%2352b788' stroke-width='3' stroke-linecap='round'/><path d='M-15,-20 Q0,-5 15,-20' fill='none' stroke='%233a5a40' stroke-width='2.5' stroke-linecap='round'/><path d='M-45,-10 Q-60,0 -50,20 M45,-10 Q60,0 50,20' fill='none' stroke='%2370e000' stroke-width='1.5' opacity='0.7'/><path d='M0,145 Q-15,180 -10,210 M0,145 Q15,180 10,210' fill='none' stroke='%2370e000' stroke-width='1.8'/></g><g opacity='0.3' stroke='%2374c69d' stroke-width='1' fill='none'><circle cx='100' cy='120' r='10'/><path d='M95,120 L105,120 M100,115 L100,125'/><circle cx='380' cy='350' r='12'/><path d='M373,350 L387,350 M380,343 L380,357'/></g><text x='250' y='460' font-family='monospace' font-size='12' fill='%2374c69d' text-anchor='middle'>Giardia lamblia trophozoite (Iodine wet mount)</text></svg>"
  },
  {
    id: 'pseudomembranous_colitis',
    category: 'gi',
    type: 'imaging',
    title: {
      hu: 'Pseudomembranosus colitis endoszkópos képe',
      en: 'Pseudomembranous Colitis on Endoscopy',
      de: 'Pseudomembranöse Kolitis in der Endoskopie'
    },
    caption: {
      hu: 'Sárgásfehér gyulladásos álhártyák a vastagbélben',
      en: 'Yellowish-white inflammatory pseudomembranes in colon',
      de: 'Gelblich-weiße pseudomembranöse Plaques im Kolon'
    },
    description: {
      hu: 'Sigmoidoszkópos felvétel Clostridioides difficile fertőzésben (CDI). A vastagbél nyálkahártyáját kiterjedt, sárgás-fehéres, néhány milliméteres, egymással összefolyó megemelkedett gyulladásos plakkok (álhártyák) borítják. A háttérben látható nyálkahártya kifejezetten belövellt, vérbő és duzzadt.',
      en: 'Colonoscoic/sigmoidoscopic view of Clostridioides difficile infection (CDI). Multiple, raised, yellowish-white, adherent plaques (pseudomembranes) ranging from 2 to 10 mm are scattered across the colonic mucosa, which appears intensely erythematous, edematous, and friable.',
      de: 'Koloskopisches Bild einer Clostridioides-difficile-Infektion (CDI). Multiple, erhabene, gelblich-weiße, adhärente Plaques (Pseudomembranen) von 2 bis 10 mm Größe sind auf der Kolonschleimhaut verstreut, die stark erythematös, ödematös und vulnerabel erscheint.'
    },
    diseaseId: 'c_difficile',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%23000'><defs><radialGradient id='lumen' cx='50%' cy='50%' r='50%'><stop offset='40%' stop-color='%231a0505'/><stop offset='85%' stop-color='%23d94040'/><stop offset='100%' stop-color='%237a1a1a'/></radialGradient><filter id='blur-heavy'><feGaussianBlur stdDeviation='5'/></filter><filter id='shadow'><feDropShadow dx='1' dy='3' stdDeviation='2' flood-color='%23000' flood-opacity='0.6'/></filter></defs><circle cx='250' cy='250' r='235' fill='url(%23lumen)' stroke='%233a1010' stroke-width='10'/><g filter='url(%23blur-heavy)' opacity='0.4'><circle cx='250' cy='250' r='120' fill='%23000'/><path d='M110,110 Q250,50 390,110 T390,390 T110,390 Z' fill='none' stroke='%23a82222' stroke-width='40'/></g><g stroke='%235c0c0c' stroke-width='15' fill='none' opacity='0.7' stroke-linecap='round'><path d='M100,180 Q170,160 220,180 T300,160 T400,180'/><path d='M80,280 Q180,260 250,290 T420,270'/><path d='M120,380 Q220,340 320,380'/></g><g filter='url(%23shadow)' stroke-linecap='round'><path d='M150,140 Q160,135 170,140 T180,145' fill='%23fffae6' stroke='%23e6b800' stroke-width='3' stroke-linejoin='round'/><path d='M230,120 Q245,110 260,125 T280,115' fill='%23fffbeb' stroke='%23e6b800' stroke-width='4'/><path d='M310,180 Q330,175 340,190 T360,180 Q370,200 350,210 Z' fill='%23fffbeb' stroke='%23e6b800' stroke-width='2'/><path d='M120,220 Q140,215 150,230 T160,240' fill='%23fff9db' stroke='%23e6b800' stroke-width='3'/><path d='M180,250 Q205,245 220,260 T230,275 Q210,290 190,270 Z' fill='%23fffbeb' stroke='%23e6b800' stroke-width='4.5'/><path d='M290,240 Q310,230 330,250 T310,270 Z' fill='%23fffae6' stroke='%23e6b800' stroke-width='3'/><path d='M340,300 Q350,295 365,305 T380,310' fill='%23fff9db' stroke='%23e6b800' stroke-width='3.5'/><path d='M130,320 Q150,315 170,335 T150,350 Z' fill='%23fffbeb' stroke='%23e6b800' stroke-width='4'/><path d='M210,330 Q225,320 240,340 T220,360 Z' fill='%23fffbeb' stroke='%23e6b800' stroke-width='3'/><path d='M270,350 Q285,345 300,360 T285,380 Z' fill='%23fff9db' stroke='%23e6b800' stroke-width='2'/></g><circle cx='250' cy='250' r='234' fill='none' stroke='%23222' stroke-width='3'/><text x='250' y='465' font-family='sans-serif' font-size='12' fill='%23fca5a5' text-anchor='middle' font-weight='bold'>Endoscopic View: Yellowish-White Pseudomembranes</text></svg>"
  },
  {
    id: 'pyelonephritis_us',
    category: 'urinary',
    type: 'imaging',
    title: {
      hu: 'Akut pyelonephritis ultrahangképe',
      en: 'Acute Pyelonephritis on Renal Ultrasound',
      de: 'Akute Pyelonephritis im Nierenultraschall'
    },
    caption: {
      hu: 'Megnagyobbodott vese elmosódott vese-velő határral',
      en: 'Enlarged kidney with loss of corticomedullary junction',
      de: 'Vergrößerte Niere mit verwaschener Rinden-Mark-Grenze'
    },
    description: {
      hu: 'Vese ultrahangvizsgálat akut pyelonephritisben. A vese hossztengelye megnagyobbodott (ödéma), a veseállomány (parenchyma) kiszélesedett és foltosan csökkent echogenitást mutat a lokális ödéma és beszűrődés miatt. A normál vese-velő (corticomedulláris) határvonal elmosódottá és nehezen kivehetővé vált.',
      en: 'Renal ultrasound scan in acute pyelonephritis. Features include kidney enlargement, localized hypoechoic areas within the renal parenchyma representing interstitial edema or early microabscesses, and indistinctness of the normal corticomedullary differentiation.',
      de: 'Nierenultraschall bei akuter Pyelonephritis. Zu den Merkmalen gehören eine Vergrößerung der Niere, lokalisierte echoarme Bereiche im Nierenparenchym, die ein interstitielles Ödem oder frühe Mikroabszesse darstellen, und eine verwaschene Rinden-Mark-Grenze.'
    },
    diseaseId: 'pyelonephritis',
    url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' style='background:%230d0d0d'><defs><radialGradient id='scan' cx='50%' cy='50%' r='50%'><stop offset='75%' stop-color='%231c1c1c'/><stop offset='100%' stop-color='%23050505'/></radialGradient><filter id='scan-blur'><feGaussianBlur stdDeviation='3'/></filter></defs><path d='M250,50 L420,400 A 200,200 0 0,1 80,400 Z' fill='url(%23scan)' stroke='%23333' stroke-width='4'/><g filter='url(%23scan-blur)' opacity='0.75'><ellipse cx='250' cy='230' rx='130' ry='75' fill='%23222' stroke='%23555' stroke-width='10' transform='rotate(-15 250 230)'/><path d='M170,180 Q250,210 330,170 T240,280 Z' fill='%23111' stroke='%23444' stroke-width='6'/><circle cx='200' cy='200' r='30' fill='%232a2a2a'/><circle cx='300' cy='220' r='35' fill='%232a2a2a'/><circle cx='260' cy='270' r='25' fill='%232a2a2a'/><circle cx='180' cy='210' r='12' fill='%233a3a3a'/><circle cx='320' cy='230' r='15' fill='%233a3a3a'/><ellipse cx='250' cy='230' rx='110' ry='60' fill='none' stroke='%23666' stroke-width='4' stroke-dasharray='5,8' transform='rotate(-15 250 230)'/></g><g stroke='%23fff' opacity='0.25' stroke-width='1'><line x1='120' y1='80' x2='380' y2='380'/><line x1='380' y1='80' x2='120' y2='380'/><circle cx='250' cy='230' r='50' fill='none'/><circle cx='250' cy='230' r='100' fill='none'/><circle cx='250' cy='230' r='150' fill='none'/></g><path d='M100,50 L400,50 M250,40 L250,60' stroke='%23555' stroke-width='2'/><text x='250' y='450' font-family='sans-serif' font-size='12' fill='%23888' text-anchor='middle'>Renal US: Nephromegaly and Loss of Corticomedullary Border</text></svg>"
  },
  {
    id: 'gram_stain_procedure',
    category: 'procedures',
    type: 'procedure',
    title: {
      hu: 'Gram-festési laboratóriumi eljárás',
      en: 'Gram Staining Laboratory Procedure',
      de: 'Gram-Färbung Laborverfahren'
    },
    caption: {
      hu: 'Interaktív mikrobiológiai festési útmutató',
      en: 'Interactive microbiological staining guide',
      de: 'Interaktive mikrobiologische Färbeanleitung'
    },
    description: {
      hu: 'A baktériumok osztályozására szolgáló legfontosabb alapvető festési technika. Megkülönbözteti a Gram-pozitív (sötétlila, vastag peptidoglikán réteg) és Gram-negatív (rózsaszín, vékony peptidoglikán + külső lipidmembrán) baktériumokat. Kövesse a lépéseket az interaktív laboratóriumi szimulátorban!',
      en: 'The most fundamental differential staining technique used in bacteriology. It divides bacteria into Gram-positive (retains crystal violet due to thick peptidoglycan) and Gram-negative (decolorized, counterstained pink due to thin peptidoglycan and outer membrane). Follow the steps in the simulator!',
      de: 'Die wichtigste differenzierende Färbetechnik in der Bakteriologie. Sie teilt Bakterien in grampositive (behalten Kristallviolett aufgrund dickem Peptidoglykan) und gramnegative (entfärbt, rosa gegengefärbt aufgrund dünnem Peptidoglykan und Außenmembran) ein. Folgen Sie den Schritten im Simulator!'
    },
    url: 'gram_stain_proc',
    interactiveSteps: [
      {
        title: {
          hu: '1. Kenet készítése és fixálás',
          en: '1. Smear Preparation and Heat Fixation',
          de: '1. Ausstrichpräparation und Hitzefixierung'
        },
        description: {
          hu: 'A mintát vékony rétegben felvisszük a tárgylemezre, hagyjuk megszáradni, majd 3-szor gyorsan áthúzzuk a Bunsen-égő lángja felett. Ez elöli a baktériumokat és a lemezhez rögzíti (fixálja) őket, hogy ne mosódjanak le a későbbi mosások során.',
          en: 'Apply a thin bacterial suspension to the slide, let it air dry completely, then pass the slide 3 times quickly through a Bunsen burner flame. This kills the bacteria and coagulates proteins to affix (fix) them to the glass surface.',
          de: 'Tragen Sie eine dünne Bakteriensuspension auf den Objektträger auf, lassen Sie sie an der Luft trocknen und führen Sie den Träger dreimal schnell durch eine Bunsenbrennerflamme. Dies tötet die Bakterien ab und fixiert sie auf dem Glas.'
        },
        graphic: 'heat_fix'
      },
      {
        title: {
          hu: '2. Kristályibolya primer festés',
          en: '2. Crystal Violet Primary Stain',
          de: '2. Primärfärbung mit Kristallviolett'
        },
        description: {
          hu: 'Öntse le a kenetet kristályibolya oldattal, és hagyja hatni 1 percig. Minden sejt (mind a Gram-pozitív, mind a Gram-negatív baktériumok) magába szívja a festéket és sötétlila/kék színűre színeződik. Ezután öblítse le óvatosan csapvízzel.',
          en: 'Flood the fixed smear with crystal violet solution and let it stand for 1 minute. The basic dye penetrates the cell wall of all bacteria (both Gram-positive and Gram-negative), coloring them dark purple-blue. Gently rinse with water.',
          de: 'Übergießen Sie den fixierten Ausstrich mit Kristallviolettlösung und lassen Sie sie 1 Minute einwirken. Der basische Farbstoff dringt in alle Bakterien ein und färbt sie dunkelviolett-blau. Vorsichtig mit Wasser abspülen.'
        },
        graphic: 'crystal_violet'
      },
      {
        title: {
          hu: '3. Lugol-oldatos (Iód) pác',
          en: '3. Iodine Mordant (Lugol Solution)',
          de: '3. Beizen mit Lugol-Lösung (Iod)'
        },
        description: {
          hu: 'Öntse le a lemezt Lugol-oldattal (kálium-jodidos jódoldat), és hagyja hatni 1 percig. A jód bejut a sejtbe és nagyméretű kristályibolya-jód (CV-I) komplexeket képez. Ezek a komplexek túl nagyok ahhoz, hogy könnyen kijussanak a sejtfalon át.',
          en: 'Flood the smear with Gram\'s iodine solution and let stand for 1 minute. Iodine acts as a mordant, forming large, water-insoluble crystal violet-iodine (CV-I) complexes inside the cell wall. Gently rinse with water.',
          de: 'Übergießen Sie den Ausstrich mit Grams Iodlösung und lassen Sie sie 1 Minute einwirken. Iod wirkt als Beize und bildet große Kristallviolett-Iod-Komplexe (CV-I) in der Zellwand. Vorsichtig mit Wasser abspülen.'
        },
        graphic: 'iodine'
      },
      {
        title: {
          hu: '4. Differenciálás alkohollal (Kritikus lépés)',
          en: '4. Decolorization with Alcohol (Critical Step)',
          de: '4. Entfärbung mit Alkohol (Kritischer Schritt)'
        },
        description: {
          hu: 'Csepegtessen 95%-os alkoholt vagy aceton-alkoholt a megdöntött tárgylemezre 3-5 másodpercig (amíg a lefolyó folyadék tiszta nem lesz), majd azonnal öblítse le vízzel. A Gram-negatívok külső lipidmembránja kioldódik, a vékony peptidoglikán fal áteresztővé válik, így elveszítik a lila színt (színtelenné válnak). A Gram-pozitívok vastag peptidoglikánja viszont dehidratálódik, összezsugorodik, bezárva a lila CV-I komplexeket.',
          en: 'Drip 95% ethyl alcohol or acetone-alcohol on the tilted slide for 3-5 seconds (until no more purple runs off), then immediately rinse with water. Alcohol dissolves the outer lipid membrane of Gram-negative bacteria, washing out the CV-I complex (making them colorless). Gram-positive thick walls dehydrate and shrink, trapping the purple dye.',
          de: 'Träufeln Sie 95%igen Alkohol oder Aceton-Alkohol für 3-5 Sekunden auf den geneigten Objektträger (bis keine Farbe mehr abläuft) und spülen Sie sofort mit Wasser. Alkohol löst die Lipidmembran der Gramnegativen auf und wäscht das CV-I aus (sie werden farblos). Grampositive dicke Wände schrumpfen und schließen die violette Farbe ein.'
        },
        graphic: 'decolor'
      },
      {
        title: {
          hu: '5. Szafranin ellenfestés',
          en: '5. Safranin Counterstain',
          de: '5. Gegenfärbung mit Safranin'
        },
        description: {
          hu: 'Öntse le a lemezt szafranin oldattal 45 másodpercig, majd mossa le vízzel és itassa fel a nedvességet. A szafranin megfesti a színtelenné vált Gram-negatív sejteket (rózsaszín/piros színűre). A lila Gram-pozitív sejtek színe nem változik, mivel a sötétlila elnyomja a halvány rózsaszínt. A kenet elkészült a mikroszkópos vizsgálatra!',
          en: 'Flood the smear with safranin solution for 45 seconds, rinse with water, and blot dry. Safranin acts as a counterstain, coloring the decolorized, colorless Gram-negative cells pink/red. The purple Gram-positive cells remain purple as the dark dye masks the light pink. Ready for microscopy!',
          de: 'Übergießen Sie den Ausstrich 45 Sekunden mit Safraninlösung, spülen Sie mit Wasser und tupfen Sie ihn trocken. Safranin färbt die entfärbten gramnegativen Zellen rosa/rot. Die violetten grampositiven Zellen bleiben violett, da der dunkle Farbstoff das helle Rosa überdeckt. Fertig für das Mikroskop!'
        },
        graphic: 'counterstain'
      }
    ]
  },
  {
    id: 'lumbar_puncture_procedure',
    category: 'procedures',
    type: 'procedure',
    title: {
      hu: 'Lumbálpunkció klinikai eljárása',
      en: 'Lumbar Puncture Clinical Procedure',
      de: 'Lumbalpunktion klinisches Verfahren'
    },
    caption: {
      hu: 'Interaktív útmutató a liquorvétel lépéseihez',
      en: 'Interactive cerebrospinal fluid collection guide',
      de: 'Interaktive Anleitung zur Liquorpunktion'
    },
    description: {
      hu: 'A központi idegrendszeri fertőzések (meningitis, encephalitis) diagnosztizálásához elengedhetetlen mintavételi és nyomásmérési eljárás. Magában foglalja a beteg megfelelő elhelyezését, az anatómiai tájékozódást (L3-L4 vagy L4-L5 intervertebrális rés keresése), a sterilizálást, a helyi érzéstelenítést, a tű bevezetését a subarachnoideális térbe, majd a liquor gyűjtését.',
      en: 'A vital diagnostic procedure performed to collect cerebrospinal fluid (CSF) and measure opening pressure to diagnose central nervous system infections (meningitis, encephalitis). Includes positioning, sterile prep, landmark palpation, local anesthesia, spinal needle insertion, and fluid collection.',
      de: 'Ein lebenswichtiges diagnostisches Verfahren zur Entnahme von Liquor cerebrospinalis (Gehirn-Rückenmark-Flüssigkeit) und zur Messung des Eröffnungsdrucks zur Diagnose von ZNS-Infektionen (Meningitis, Enzephalitis). Umfasst Lagerung, sterile Vorbereitung, Lokalanästhesie, Nadelführung und Liquorgewinnung.'
    },
    url: 'lumbar_puncture_proc',
    interactiveSteps: [
      {
        title: {
          hu: '1. Beteg elhelyezése (Pozicionálás)',
          en: '1. Patient Positioning',
          de: '1. Lagerung des Patienten'
        },
        description: {
          hu: 'A beteget oldalra fektetjük (lateral decubitus) felhúzott térdekkel és előrehajtott fejjel („magzatpóz”), vagy ülő helyzetben előredőlve kérjük elhelyezkedni. Ez a testhelyzet maximálisan megnyitja az ágyéki csigolyák közötti réseket, megkönnyítve a tű bevezetését.',
          en: 'Place the patient in the lateral recumbent (decubitus) position, with knees flexed toward the chest and chin tucked to the chest ("fetal position"), or in a seated position leaning forward. This position maximizes the intervertebral spaces, opening the path for the needle.',
          de: 'Lagerung des Patienten in stabiler Seitenlage mit maximal zum Kinn gezogenen Knien ("Embryonalstellung") oder sitzend mit nach vorne gebeugtem Oberkörper. Diese Position öffnet die Dornfortsätze der Lendenwirbel maximal.'
        },
        graphic: 'positioning'
      },
      {
        title: {
          hu: '2. Fertőtlenítés és tájékozódási pontok',
          en: '2. Sterilization and Landmarks',
          de: '2. Desinfektion und Orientierungspunkte'
        },
        description: {
          hu: 'Széles körben fertőtlenítjük az ágyéki bőrfelületet jódos vagy alkoholos oldattal, majd steril kendővel izolálunk. Tapintással megkeressük a két csípőlapát tetejét összekötő vonalat (Tuffier-vonal), amely az L4-es csigolya tövisnyúlványát keresztezi. A punkció biztonságosan az L3-L4 vagy L4-L5 közötti résben végezhető el.',
          en: 'Thoroughly sterilize the lumbar skin with chlorhexidine or iodine, and apply sterile drapes. Palpate the bilateral superior iliac crests to identify Tuffier\'s line, which crosses the L4 spinous process. The puncture can be safely made in the L3-L4 or L4-L5 interspinous space.',
          de: 'Breitbandige Desinfektion der lumbalen Haut mit Jod- oder Alkohollösung und steriles Abdecken. Durch Tasten werden die oberen Ränder der Beckenkämme ermittelt (Tuffier-Linie), die den Dornfortsatz von L4 kreuzt. Die Punktion erfolgt sicher im L3/L4- oder L4/L5-Intervertebralraum.'
        },
        graphic: 'sterilize'
      },
      {
        title: {
          hu: '3. Helyi érzéstelenítés (Anesthesia)',
          en: '3. Local Anesthesia',
          de: '3. Lokalanästhesie'
        },
        description: {
          hu: 'A tervezett behatolási ponton a bőrbe és a mélyebb szövetekbe (ligamentum supraspinale területére) 1-2%-os Lidocain oldatot fecskendezünk be. Ezzel minimálisra csökkentjük a beavatkozás során jelentkező fájdalmat.',
          en: 'Inject 1-2% Lidocaine locally into the skin (forming a wheal) and then deeper into the subcutaneous tissues and supraspinous ligament along the planned needle path to minimize patient discomfort.',
          de: 'Infiltrieren Sie die Haut am geplanten Punktionsort (Quaddelbildung) und anschließend die tieferen Gewebeschichten (Ligamentum supraspinale) mit 1-2%iger Lidocainlösung, um Schmerzen zu minimieren.'
        },
        graphic: 'anesthesia'
      },
      {
        title: {
          hu: '4. Tű bevezetése és a „Pukkanás”',
          en: '4. Needle Insertion and the "Pop"',
          de: '4. Nadelführung und der "Widerstandsverlust"'
        },
        description: {
          hu: 'A mandrinos lumbális tűt lassan toljuk előre a köldök irányába célozva. Áthalad a bőrön, a subcutison, a ligamentum supraspinalén, interspinalén, majd a sárga szalagon (ligamentum flavum). Utóbbi átfúrásakor egy jellegzetes ellenállás-csökkenés, „pukkanás” érezhető, ami jelzi, hogy beléptünk a subarachnoideális térbe.',
          en: 'Slowly insert the spinal needle with stylet in place, aiming slightly cephalad toward the patient\'s umbilicus. The needle passes through the skin, subcutaneous tissue, supraspinous and interspinous ligaments, and then pierces the tough ligamentum flavum and dura mater, producing a characteristic distinct "give" or "pop".',
          de: 'Führen Sie die Spinalnadel mit Mandrin langsam in Richtung des Bauchnabels des Patienten ein. Die Nadel durchdringt Haut, Unterhaut, Ligamentum supraspinale, interspinale und das zähe Ligamentum flavum. Beim Durchdringen des gelben Bandes ist ein deutlicher Widerstandsverlust ("Klicken/Ploppen") zu spüren.'
        },
        graphic: 'needle_insert'
      },
      {
        title: {
          hu: '5. Liquor gyűjtése és nyomásmérés',
          en: '5. CSF Collection and Pressure Measurement',
          de: '5. Liquorgewinnung und Druckmessung'
        },
        description: {
          hu: 'A mandrint kihúzva a tűből lassan megjelennek az első víztiszta (vagy bakteriális meningitisben zavaros/gennyes, agyvérzésben véres) liquorcseppek. Manométerrel megmérjük a liquor nyomását (normálisan 60-180 H2O mm), majd 3 steril kémcsőbe gyűjtjük a mintákat biokémiai, mikroszkópos és tenyésztési vizsgálatokhoz.',
          en: 'Withdraw the stylet to let cerebrospinal fluid drip. In healthy patients, CSF is crystal clear; in bacterial meningitis, it is cloudy/purulent. Measure the opening pressure using a manometer (normal is 60-180 mmH2O), then collect CSF into 3 sterile tubes for chemistry, cell count, and microbiology.',
          de: 'Ziehen Sie den Mandrin heraus, um Liquor abtropfen zu lassen. Gesunder Liquor ist kristallklar; bei eitriger Meningitis ist er trüb/eitrig. Messen Sie den Eröffnungsdruck mit einem Steigrohr (normal 60-180 mmH2O) und fangen Sie den Liquor in 3 sterile Röhrchen für Chemie, Zellzahl und Mikrobiologie auf.'
        },
        graphic: 'csf_dripping'
      }
    ]
  }
];
