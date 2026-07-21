/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// @ts-expect-error - Vite handles JPG assets natively
import appIcon from './assets/images/app_icon_1784570653641.jpg';
import {
  Search, BookOpen, Heart, Brain, Activity, FileText, CheckCircle, AlertCircle,
  Thermometer, ChevronRight, ChevronDown, Trash2, Share2, Languages,
  PenTool, HelpCircle, Info, ExternalLink, Download, Upload, Bookmark,
  Calculator, RefreshCw, X, Check, FileDown, Eye, EyeOff, Key, Menu, ChevronLeft, Printer, Sparkles,
  Image, Play, Mail, MessageSquare, Copy, Table2
} from 'lucide-react';

import { diseasesByLang } from './data/diseases';
import { getCalculators } from './data/calculators';
import { mediaLibraryItems } from './data/media_library';
import { Disease, Category, Note } from './types';
import { trackPageView, trackEvent } from './utils/gtag';

const renderMessageText = (text: string) => {
  return text.split('\n').map((line, i) => {
    // Basic formatting for bullet points and bold text
    let formatted = line;
    // Replace **text** with bold
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
      return (
        <li key={i} className="ml-4 list-disc mt-1" dangerouslySetInnerHTML={{ __html: formatted.replace(/^[*-\s]+/, '') }} />
      );
    }
    return (
      <p key={i} className="min-h-[1rem] mt-1" dangerouslySetInnerHTML={{ __html: formatted }} />
    );
  });
};

const printTranslations = {
  hu: {
    title: 'PDF letöltési beállítások',
    subtitle: 'Válassza ki, hogyan szeretné letölteni a tananyagot PDF formátumban.',
    option_current: 'Aktuális képernyő mentése',
    option_current_desc: 'Csak a jelenleg megnyitott betegség vagy differenciáldiagnosztikai táblázat mentése.',
    option_selected: 'Kiválasztott kategóriák letöltése',
    option_selected_desc: 'Egyéni tanulmányi tankönyv összeállítása a kijelölt fejezetekből.',
    option_all: 'A teljes interaktív tankönyv letöltése',
    option_all_desc: 'A teljes infektológiai tananyag (összes kategória, táblázat és saját jegyzet) egybefűzve.',
    select_categories: 'Kijelölhető fejezetek:',
    download_btn: 'PDF generálása',
    cancel_btn: 'Mégse',
    help_text: 'A generált PDF dokumentum automatikusan tartalmazza a saját tanulmányi jegyzeteit is, és tökéletesen alkalmas nyomtatásra.',
  },
  en: {
    title: 'PDF Download Options',
    subtitle: 'Select how you would like to download the textbook content in PDF format.',
    option_current: 'Save Current View',
    option_current_desc: 'Only save the currently opened disease or comparative table.',
    option_selected: 'Download Selected Categories',
    option_selected_desc: 'Compile a custom study textbook from the checked chapters.',
    option_all: 'Download Entire Interactive Textbook',
    option_all_desc: 'The complete infectology syllabus (all categories, tables, and your notes) merged.',
    select_categories: 'Select chapters to include:',
    download_btn: 'Generate PDF',
    cancel_btn: 'Cancel',
    help_text: 'The generated PDF document automatically includes your personal study notes and is optimized for printing.',
  },
  de: {
    title: 'PDF-Downloadoptionen',
    subtitle: 'Wählen Sie aus, wie Sie das Lehrbuch im PDF-Format herunterladen möchten.',
    option_current: 'Aktuelle Ansicht speichern',
    option_current_desc: 'Nur die aktuell geöffnete Krankheit oder Vergleichstabelle speichern.',
    option_selected: 'Ausgewählte Kategorien herunterladen',
    option_selected_desc: 'Ein personalisiertes Lehrbuch aus den ausgewählten Kapiteln erstellen.',
    option_all: 'Vollständiges Lehrbuch herunterladen',
    option_all_desc: 'Das gesamte Infektiologie-Lehrmaterial (alle Kategorien, Tabellen und eigenen Notizen) zusammengefügt.',
    select_categories: 'Kapitel auswählen:',
    download_btn: 'PDF generieren',
    cancel_btn: 'Abbrechen',
    help_text: 'Das generierte PDF-Dokument enthält automatisch Ihre persönlichen Notizen und ist für den Druck optimiert.',
  }
};

export default function App() {
  // Lang State
  const [lang, setLang] = useState<'hu' | 'en' | 'de'>(() => {
    const saved = localStorage.getItem('infecto_lang');
    return (saved === 'hu' || saved === 'en' || saved === 'de') ? saved : 'hu';
  });

  // DB State (derived)
  const currentDb = diseasesByLang[lang];

  // UI States
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>(() => {
    return Object.keys(diseasesByLang['hu'])[0]; // Default to first category
  });
  const [activeDiseaseId, setActiveDiseaseId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [tableSearchQuery, setTableSearchQuery] = useState('');
  const [activeDetailTab, setActiveDetailTab] = useState<'info' | 'patho' | 'clinic' | 'diag' | 'therapy' | 'prog'>('info');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isDiseasesOpen, setIsDiseasesOpen] = useState(true);

  // Notes State
  const [notes, setNotes] = useState<{ [diseaseId: string]: string }>(() => {
    const saved = localStorage.getItem('infecto_notes');
    return saved ? JSON.parse(saved) : {};
  });
  const [currentNote, setCurrentNote] = useState('');
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  // PWA & Modals State
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [showIosInstallBanner, setShowIosInstallBanner] = useState(false);
  const [printOption, setPrintOption] = useState<'current' | 'selected' | 'all'>('current');
  const [selectedPrintCategories, setSelectedPrintCategories] = useState<string[]>([]);
  const [isCalcModalOpen, setIsScoreModalOpen] = useState(false);
  const [selectedCalcKey, setSelectedCalcKey] = useState<string>('curb65');
  const [calcInputs, setCalcInputs] = useState<{ [key: string]: any }>({});
  const [calcResult, setCalcResult] = useState<{ risk: string; action: string; color: string; bg: string; border: string } | null>(null);
  const [calcScore, setCalcScore] = useState<number>(0);

  // Learning Tools State
  const [isHighYieldMode, setIsHighYieldMode] = useState(false);
  const [isRecallModalOpen, setIsRecallModalOpen] = useState(false);
  const [recallCardIndex, setRecallCardIndex] = useState(0);
  const [isRecallCardFlipped, setIsRecallCardFlipped] = useState(false);
  const [recallScore, setRecallScore] = useState(0);

  // Media Library State
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [selectedMediaItem, setSelectedMediaItem] = useState<any>(null);
  const [activeMediaCategory, setActiveMediaCategory] = useState<string>('all');
  const [activeMediaType, setActiveMediaType] = useState<string>('all');
  const [mediaSearchQuery, setMediaSearchQuery] = useState<string>('');
  const [activeProcedureStep, setActiveProcedureStep] = useState<number>(0);

  // Feedback Modal State
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackType, setFeedbackType] = useState('suggestion');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState<'idle' | 'success'>('idle');
  const [isCopied, setIsCopied] = useState(false);

  // Font Size Regulation
  const [fontSizeScale, setFontSizeScale] = useState<number>(() => {
    const saved = localStorage.getItem('infecto_font_size');
    return saved ? parseFloat(saved) : 1.0;
  });

  // File import ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [customApiKey, setCustomApiKey] = useState<string>(() => {
    return localStorage.getItem('infecto_custom_api_key') || '';
  });
  const [isApiKeySettingsOpen, setIsApiKeySettingsOpen] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  const [pageViews, setPageViews] = useState<number>(() => {
    const saved = localStorage.getItem('infecto_page_views');
    if (saved) {
      const val = parseInt(saved, 10);
      return isNaN(val) ? 1420 : val;
    }
    const seed = Math.floor(Math.random() * 300) + 1200;
    localStorage.setItem('infecto_page_views', seed.toString());
    return seed;
  });

  const [aiMessages, setAiMessages] = useState<{ id: string; role: 'user' | 'assistant'; text: string }[]>(() => {
    const saved = localStorage.getItem('infecto_ai_messages');
    return saved ? JSON.parse(saved) : [];
  });

  // Save AI messages and custom API key to localStorage
  useEffect(() => {
    localStorage.setItem('infecto_ai_messages', JSON.stringify(aiMessages));
  }, [aiMessages]);

  useEffect(() => {
    localStorage.setItem('infecto_custom_api_key', customApiKey);
  }, [customApiKey]);

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(ua);
    const isSafari = ua.includes('safari') && !ua.includes('crios') && !ua.includes('fxios') && !ua.includes('opios');
    const isStandaloneDevice = ('standalone' in window.navigator) && (window.navigator as any).standalone;
    const hasDismissed = localStorage.getItem('infecto_ios_banner_dismissed') === 'true';

    if (isIosDevice && isSafari && !isStandaloneDevice && !hasDismissed) {
      setShowIosInstallBanner(true);
    }
  }, []);

  const handleDismissIosBanner = () => {
    setShowIosInstallBanner(false);
    localStorage.setItem('infecto_ios_banner_dismissed', 'true');
  };

  const handleSendAiMessage = async (customPrompt?: string) => {
    const promptToSend = customPrompt || aiInput;
    if (!promptToSend.trim()) return;

    if (!customPrompt) {
      setAiInput('');
    }

    const newUserMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      text: promptToSend
    };

    setAiMessages(prev => [...prev, newUserMessage]);
    setIsAiLoading(true);

    // Track AI Consult interaction event
    trackEvent('send_message', 'ai_consult', lang);

    try {
      const systemInstruction = 
        lang === 'hu'
          ? "Ön egy barátságos, magasan képzett infektológus orvosprofesszor. Segítsen az orvostanhallgatóknak és rezidenseknek megérteni a fertőző betegségeket, diagnosztikai teszteket és kezelési irányelveket. Válaszoljon pontosan, szakmailag megalapozottan, magyar nyelven. Ha a felhasználó a dekolonizációról kérdez VRE vagy Gram-negatív multirezisztens kórokozók (MRK) esetén, hangsúlyozza ki, hogy jelenleg nincs bizonyított, rutinszerű dekolonizációs protokoll ezekre (ellentétben az MRSA-val)."
          : lang === 'de'
          ? "Sie sind ein freundlicher, hochqualifizierter Professor für Infektiologie. Helfen Sie Medizinstudierenden und Assistenzärzten, Infektionskrankheiten, diagnostische Tests und Behandlungsrichtlinien zu verstehen. Antworten Sie präzise und wissenschaftlich fundiert auf Deutsch. Wenn der Benutzer nach einer Dekolonisierung bei VRE oder Gram-negativen multiresistenten Erregern (MDROs) fragt, betonen Sie, dass es im Gegensatz zu MRSA derzeit keine etablierte klinische Dekolonisierungsstrategie dafür gibt."
          : "You are a friendly, highly qualified infectology professor. Help medical students and residents understand infectious diseases, diagnostic tests, and treatment guidelines. Answer precisely and in an evidence-based manner in English. If the user asks about decolonization for VRE or Gram-negative multidrug-resistant organisms (MDROs), emphasize that currently, there is no established, routine decolonization strategy for them (unlike MRSA).";

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: promptToSend,
          systemInstruction,
          customApiKey: customApiKey.trim()
        })
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({ error: 'Unknown server error' }));
        throw new Error(errData.error || `HTTP error ${res.status}`);
      }

      const data = await res.json();
      const newAssistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        text: data.text || 'An empty response was received.'
      };
      setAiMessages(prev => [...prev, newAssistantMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        text: lang === 'hu' 
          ? `Hiba történt a konzultáció során: ${err.message || 'Ismeretlen hiba'}. Győződjön meg arról, hogy a GEMINI_API_KEY be van állítva a Settings > Secrets menüpontban.`
          : lang === 'de'
          ? `Fehler während der Konsultation: ${err.message || 'Unbekannter Fehler'}. Stellen Sie sicher, dass GEMINI_API_KEY unter Settings > Secrets konfiguriert ist.`
          : `Error during consultation: ${err.message || 'Unknown error'}. Please ensure GEMINI_API_KEY is configured in Settings > Secrets.`
      };
      setAiMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleClearAiChat = () => {
    setAiMessages([]);
    localStorage.removeItem('infecto_ai_messages');
  };

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem('infecto_notes', JSON.stringify(notes));
  }, [notes]);

  // Save font size to localStorage
  useEffect(() => {
    localStorage.setItem('infecto_font_size', fontSizeScale.toString());
  }, [fontSizeScale]);

  // Save lang to localStorage
  useEffect(() => {
    localStorage.setItem('infecto_lang', lang);
  }, [lang]);

  // Sync active note on disease change
  useEffect(() => {
    if (activeDiseaseId) {
      setCurrentNote(notes[activeDiseaseId] || '');
    } else {
      setCurrentNote('');
    }
  }, [activeDiseaseId, notes]);

  // Google Analytics Pageview Tracking & Local Visit Counter for Category Switches
  useEffect(() => {
    trackPageView(`/category/${activeCategoryKey}`, `Category: ${activeCategoryKey}`);
    setPageViews(prev => {
      const next = prev + 1;
      localStorage.setItem('infecto_page_views', next.toString());
      return next;
    });
  }, [activeCategoryKey]);

  // Google Analytics Pageview Tracking & Local Visit Counter for Disease Selection
  useEffect(() => {
    if (activeDiseaseId) {
      trackPageView(`/disease/${activeDiseaseId}`, `Disease: ${activeDiseaseId}`);
      setPageViews(prev => {
        const next = prev + 1;
        localStorage.setItem('infecto_page_views', next.toString());
        return next;
      });
    }
  }, [activeDiseaseId]);

  const getActiveRecallCards = (dis: Disease | undefined) => {
    if (!dis) return [];
    const list: { q: string; a: string }[] = [];
    
    // Card 1: Pathogen
    if (dis.pathogen) {
      list.push({
        q: lang === 'hu' 
          ? `Melyik a leggyakoribb kórokozó a(z) ${dis.name} esetén, és mi a Gram-tulajdonsága?` 
          : lang === 'de'
          ? `Was ist der häufigste Erreger bei ${dis.name} und seine Gram-Eigenschaft?`
          : `What is the most common pathogen in ${dis.name} and its Gram characteristic?`,
        a: `${dis.pathogen.name.replace(/<[^>]*>/g, '')} (${dis.pathogen.gram || ''}, ${dis.pathogen.type || ''})`
      });
    }
    
    // Card 2: Symptoms & Diagnostics
    if (dis.clinical?.symptoms || dis.diagnostics) {
      const firstFinding = dis.diagnostics?.laboratory?.[0]?.finding || dis.diagnostics?.laboratory?.[0]?.interpretation;
      const keySymp = dis.clinical?.symptoms?.[0]?.name;
      
      list.push({
        q: lang === 'hu'
          ? `Melyek a(z) ${dis.name} legjellemzőbb klinikai tünetei vagy diagnosztikai leletei?`
          : lang === 'de'
          ? `Was sind die typischen klinischen Symptome oder Labortestergebnisse bei ${dis.name}?`
          : `What are the typical clinical symptoms or laboratory findings in ${dis.name}?`,
        a: `${keySymp ? `${keySymp}` : ''}${firstFinding ? ` (Diagnózis: ${firstFinding})` : ''}`
      });
    }
    
    // Card 3: Therapy
    if (dis.therapy?.empirical) {
      const drugLines: string[] = [];
      Object.values(dis.therapy.empirical).forEach((v: any) => {
        if (Array.isArray(v)) {
          v.forEach(d => drugLines.push(`${d.drug} (${d.dose || ''})`));
        } else if (v && v.drugs) {
          v.drugs.forEach((d: any) => drugLines.push(`${d.drug} (${d.dose || ''})`));
        }
      });
      
      list.push({
        q: lang === 'hu'
          ? `Mi az ajánlott elsőként választandó empirikus terápia a(z) ${dis.name} esetén?`
          : lang === 'de'
          ? `Was ist die empfohlene empirische First-Line-Therapie bei ${dis.name}?`
          : `What is the recommended empirical first-line therapy for ${dis.name}?`,
        a: drugLines.slice(0, 3).join(', ') || (lang === 'hu' ? 'Irányelvek szerinti kezelés' : 'Guideline directed treatment')
      });
    }
    
    return list;
  };

  // Run score calculation whenever input or active calculator changes
  const calculators = getCalculators(lang);

  // Auto-align selectedCalcKey when calculators change
  useEffect(() => {
    if (calculators && Object.keys(calculators).length > 0) {
      if (!calculators[selectedCalcKey]) {
        const match = Object.keys(calculators).find(
          k => k.toLowerCase() === selectedCalcKey.toLowerCase()
        );
        if (match) {
          setSelectedCalcKey(match);
        } else {
          setSelectedCalcKey(Object.keys(calculators)[0]);
        }
      }
    }
  }, [lang, selectedCalcKey]);

  useEffect(() => {
    const calculator = calculators[selectedCalcKey];
    if (!calculator) return;

    let score = 0;
    calculator.items.forEach((item, index) => {
      const inputKey = `${selectedCalcKey}_${index}`;
      const value = calcInputs[inputKey];

      if (item.type === 'radio') {
        if (value === true) {
          score += item.points || 0;
        }
      } else if (item.type === 'checkbox') {
        if (value === true) {
          score += item.points || 0;
        }
      } else if (item.type === 'number') {
        const numVal = parseFloat(value) || 0;
        score += numVal * (item.points || 1);
      } else if (!item.type) {
        // Default checkboxes
        if (value === true) {
          score += item.points || 0;
        }
      }
    });

    setCalcScore(score);
    if (calculator.interpret) {
      setCalcResult(calculator.interpret(score));
    }
  }, [calcInputs, selectedCalcKey, lang]);

  // Handle note change
  const handleSaveNote = () => {
    if (!activeDiseaseId) return;
    setNotes(prev => ({
      ...prev,
      [activeDiseaseId]: currentNote
    }));
  };

  // Export Notes as JSON
  const handleExportNotes = () => {
    trackEvent('export_notes', 'notes_action', lang);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(notes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `infectologia_notes_${lang}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Send Feedback
  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackMessage.trim()) return;

    const typeLabel = 
      feedbackType === 'error' ? (lang === 'hu' ? 'Hiba a tananyagban' : lang === 'de' ? 'Inhaltlicher Fehler' : 'Content Error') :
      feedbackType === 'suggestion' ? (lang === 'hu' ? 'Fejlesztési javaslat' : lang === 'de' ? 'Vorschlag' : 'Suggestion') :
      (lang === 'hu' ? 'Egyéb kérdés' : lang === 'de' ? 'Sonstige Frage' : 'Other Question');

    const subject = `[Infektologia App] ${typeLabel} - ${feedbackName || 'Felhasznalo'}`;
    const body = `Név / Name: ${feedbackName || 'Nincs megadva / Not provided'}
E-mail / Email: ${feedbackEmail || 'Nincs megadva / Not provided'}
Típus / Type: ${typeLabel}

Üzenet / Message:
${feedbackMessage}

---
Küldve az Infektológia Interaktív Tankönyvből (App version: 4.0.0)
`;

    // Construct the mailto link
    const mailtoUrl = `mailto:peterfi.zoltan@pte.hu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open in user's default mail agent
    window.location.href = mailtoUrl;
    
    // Set status to success to display the confirmation dialog
    setFeedbackStatus('success');
  };

  const getFormattedFeedbackText = () => {
    const typeLabel = 
      feedbackType === 'error' ? (lang === 'hu' ? 'Hiba a tananyagban' : lang === 'de' ? 'Inhaltlicher Fehler' : 'Content Error') :
      feedbackType === 'suggestion' ? (lang === 'hu' ? 'Fejlesztési javaslat' : lang === 'de' ? 'Vorschlag' : 'Suggestion') :
      (lang === 'hu' ? 'Egyéb kérdés' : lang === 'de' ? 'Sonstige Frage' : 'Other Question');

    return `Címzett / To: peterfi.zoltan@pte.hu
Tárgy / Subject: [Infektologia App] ${typeLabel} - ${feedbackName || 'Felhasznalo'}

Név / Name: ${feedbackName || 'Nincs megadva / Not provided'}
E-mail / Email: ${feedbackEmail || 'Nincs megadva / Not provided'}
Típus / Type: ${typeLabel}

Üzenet / Message:
${feedbackMessage}

---
Küldve az Infektológia Interaktív Tankönyvből (App version: 4.0.0)`;
  };

  const handleCopyFeedbackText = () => {
    const text = getFormattedFeedbackText();
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy feedback: ', err);
      });
  };

  // Import Notes from JSON
  const handleImportNotes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        if (typeof imported === 'object' && imported !== null) {
          setNotes(prev => ({
            ...prev,
            ...imported
          }));
          alert(lang === 'hu' ? 'Jegyzetek sikeresen betöltve!' : lang === 'de' ? 'Notizen erfolgreich geladen!' : 'Notes successfully imported!');
        }
      } catch (err) {
        alert(lang === 'hu' ? 'Érvénytelen fájlformátum!' : lang === 'de' ? 'Ungültiges Dateiformat!' : 'Invalid file format!');
      }
    };
    reader.readAsText(file);
  };

  // Set calculator input
  const handleCalcInputChange = (index: number, val: any, type?: string, name?: string) => {
    const inputKey = `${selectedCalcKey}_${index}`;
    if (type === 'radio' && name) {
      // Uncheck all other radios with same name
      const updatedInputs = { ...calcInputs };
      const calc = calculators[selectedCalcKey];
      calc.items.forEach((item, idx) => {
        if (item.type === 'radio' && item.name === name) {
          updatedInputs[`${selectedCalcKey}_${idx}`] = false;
        }
      });
      updatedInputs[inputKey] = val;
      setCalcInputs(updatedInputs);
    } else {
      setCalcInputs(prev => ({
        ...prev,
        [inputKey]: val
      }));
    }
  };

  // Reset current calculator
  const handleResetCalc = () => {
    const updatedInputs = { ...calcInputs };
    const calc = calculators[selectedCalcKey];
    calc.items.forEach((item, idx) => {
      const inputKey = `${selectedCalcKey}_${idx}`;
      if (item.type === 'radio') {
        updatedInputs[inputKey] = item.checked || false;
      } else {
        updatedInputs[inputKey] = item.type === 'number' ? '' : false;
      }
    });
    setCalcInputs(updatedInputs);
  };

  // Helper utilities
  function getSeverityDotColor(severity?: 'mild' | 'moderate' | 'severe' | string) {
    if (severity === 'mild') return 'bg-[#88B04B]';
    if (severity === 'moderate') return 'bg-natural-accent';
    if (severity === 'severe') return 'bg-[#A85A42]';
    return 'bg-natural-muted';
  }

  function getTherapyColorClasses(color: string) {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-natural-bg',
          border: 'border-natural-border',
          drugBorder: 'border-natural-accent/30',
          text: 'text-natural-primary',
          drugText: 'text-natural-dark font-bold',
          durationBg: 'bg-natural-widget',
          durationText: 'text-natural-primary',
          noteText: 'text-natural-muted font-medium'
        };
      case 'blue':
        return {
          bg: 'bg-natural-surface/50',
          border: 'border-natural-border',
          drugBorder: 'border-natural-sand/50',
          text: 'text-natural-primary',
          drugText: 'text-natural-dark font-bold',
          durationBg: 'bg-natural-widget',
          durationText: 'text-natural-primary',
          noteText: 'text-natural-muted font-medium'
        };
      case 'red':
        return {
          bg: 'bg-[#FAF9F3]',
          border: 'border-[#EAE7DC]',
          drugBorder: 'border-natural-border/60',
          text: 'text-[#A85A42]',
          drugText: 'text-natural-dark font-bold',
          durationBg: 'bg-natural-surface',
          durationText: 'text-[#5D6D4F]',
          noteText: 'text-natural-muted font-medium'
        };
      case 'amber':
        return {
          bg: 'bg-natural-surface/30',
          border: 'border-natural-border',
          drugBorder: 'border-natural-accent/20',
          text: 'text-natural-primary',
          drugText: 'text-natural-dark font-bold',
          durationBg: 'bg-natural-widget',
          durationText: 'text-natural-primary',
          noteText: 'text-natural-muted font-medium'
        };
      case 'purple':
        return {
          bg: 'bg-natural-widget/30',
          border: 'border-natural-border',
          drugBorder: 'border-natural-border/60',
          text: 'text-natural-primary',
          drugText: 'text-natural-dark font-bold',
          durationBg: 'bg-natural-surface',
          durationText: 'text-natural-primary',
          noteText: 'text-natural-muted font-medium'
        };
      default:
        return {
          bg: 'bg-natural-surface',
          border: 'border-natural-border',
          drugBorder: 'border-natural-border',
          text: 'text-natural-primary',
          drugText: 'text-natural-dark font-bold',
          durationBg: 'bg-natural-widget',
          durationText: 'text-natural-primary',
          noteText: 'text-natural-muted font-medium'
        };
    }
  }

  // Translation helpers
  const t = {
    hu: {
      title: 'Infektológia Tankönyv',
      subtitle: 'Pécsi Tudományegyetem / Dr. Péterfi Zoltán',
      search: 'Keresés betegségek, kórokozók vagy tünetek között...',
      categories: 'Kategóriák',
      disease_count: 'betegség',
      welcome_title: 'Üdvözöljük az Infektológia Interaktív Tankönyvben!',
      welcome_text: 'Válasszon ki egy kategóriát a bal oldali menüből, majd egy betegséget az áttekintéshez.',
      notes_title: 'Hallgatói Jegyzetek',
      notes_placeholder: 'Írja ide a tanulmányi jegyzeteit ehhez a betegséghez. A mentés automatikus...',
      save_notes: 'Jegyzet mentése',
      export_notes: 'Jegyzetek exportálása',
      import_notes: 'Jegyzetek importálása',
      no_results: 'Nincs találat a keresésre.',
      calculators_btn: 'Klinikai Score-ok',
      media_library_btn: 'Média & Képtár',
      share_btn: 'Megosztás & Offline',
      didactics: 'Didaktikai Áttekintés',
      didactics_tip: 'Oktatói Tipp',
      pathogen: 'Kórokozó',
      pathogen_type: 'Típus',
      gram_stain: 'Gram festés',
      shape: 'Alak',
      epidemiology: 'Epidemiológia',
      incidence: 'Incidencia',
      seasonality: 'Szezonalitás',
      transmission: 'Terjedés',
      risk_groups: 'Veszélyeztetett csoportok',
      pathogenesis: 'Patomechanizmus',
      virulence: 'Virulencia faktorok',
      symptoms: 'Klinikai Tünetek',
      incubation: 'Inkubációs idő',
      onset: 'Betegség kezdete',
      physical: 'Fizikális Vizsgálat',
      complications: 'Szövődmények',
      diagnostics: 'Diagnosztika',
      section_diagnostic_criteria: 'Diagnosztikai Kritériumok',
      lab: 'Laboratóriumi vizsg.',
      imaging: 'Képalkotó eljárások',
      microbiology: 'Mikrobiológiai vizsg.',
      differential: 'Differenciáldiagnosztika',
      label_distinguishing: 'Megkülönböztető jegyek: ',
      therapy: 'Terápia',
      section_empirical_therapy: 'Empirikus Terápia',
      section_references: 'Irodalomjegyzék',
      section_prognosis: 'Prognózis',
      targeted: 'Célzott terápia',
      supportive: 'Szupportív kezelés',
      prevention: 'Megelőzés',
      guidelines: 'Klinikai irányelvek',
      prognosis: 'Prognózis',
      mortality: 'Halálozás',
      prognostic_factors: 'Prognosztikai tényezők',
      prognostic_scores: 'Kapcsolódó score-ok',
      gallery: 'Galéria',
      tab_info: 'Áttekintés',
      tab_patho: 'Kóroktan',
      tab_clinic: 'Tünettan',
      tab_diag: 'Diagnózis',
      tab_therapy: 'Kezelés',
      tab_prog: 'Prognózis',
      back_home: 'Vissza a kezdőlapra',
      select_disease: 'Válasszon ki egy betegséget a listából!',
      share_title: 'Hogyan oszd meg és használd az alkalmazást?',
      share_step1_title: '1. Offline elérés (PWA Telepítés)',
      share_step1_text: 'Ez az alkalmazás Progressive Web App (PWA). Okostelefonon vagy számítógépen a böngésző címsorában kattints a „Telepítés” vagy „Add to Home Screen” ikonra. Így internetkapcsolat nélkül is elérhető lesz a teljes tankönyv az egyetemen vagy a klinikán!',
      share_step2_title: '2. Jegyzetek megosztása a csoporttársaiddal',
      share_step2_text: 'Az általad készített egyedi jegyzeteket könnyen exportálhatod egy kis fájlba a „Jegyzetek exportálása” gombbal. Csoporttársaid ezt a fájlt be tudják tölteni a saját böngészőjükbe az „Importálás” funkcióval, így könnyen cserélhettek tanulási segédleteket.',
      share_step3_title: '3. Az alkalmazás közvetlen linkjének megosztása',
      share_step3_text: 'Küldd el ezt a linket a hallgatói csoportokba (Messenger, Viber, Teams):',
      share_close: 'Bezárás',
      calc_title: 'Interaktív Orvosi Kalkulátorok',
      calc_score: 'Pontszám',
      calc_result: 'Klinikai besorolás & Teendő',
      calc_reset: 'Alaphelyzet',
      note_saved: 'Mentve!',
      severity_mild: 'Enyhe',
      severity_moderate: 'Középsúlyos',
      severity_severe: 'Súlyos',
      table_col_test: 'Vizsgálat',
      table_col_finding: 'Kóros eltérés',
      table_col_interpretation: 'Klinikai jelentőség',
      export_pdf: 'PDF letöltése',
      high_yield_mode: 'Kiemelt tanulás',
      high_yield_tip: 'Kiemeli a legfontosabb vizsgakérdéseket és klinikai kulcspontokat.',
      active_recall_btn: 'Kártyás kikérdező',
      active_recall_title: 'Aktív felidézés kártyák',
      show_answer: 'Mutasd a választ',
      next_card: 'Következő kártya',
      prev_card: 'Előző kártya',
      got_it: 'Tudtam!',
      need_review: 'Ismétlés',
      study_stats_title: 'Kikérdezés eredménye',
      study_stats_text: 'Sikeresen átismételted a kártyákat!',
      therapy_titles: {
        cap_outpatient: 'Közösségben szerzett pneumonia - Ambuláns kezelés',
        cap_inpatient: 'Közösségben szerzett pneumonia - Kórházi kezelés',
        cap_icu: 'Közösségben szerzett pneumonia - Intenzív osztály',
        hap_early: 'Kórházi pneumonia - Korai kezdetű (≤ 4 nap)',
        hap_late_vap: 'Kórházi pneumonia - Késői kezdetű (≥ 5 nap) vagy VAP',
        outpatient: 'Ambuláns kezelés',
        inpatient: 'Kórházi (osztályos) kezelés',
        icu: 'Intenzív terápiás (ITO) kezelés',
        default: 'Standard empirikus terápia'
      },
      feedback_btn: 'Visszajelzés',
      feedback_title: 'Visszajelzés küldése',
      feedback_name: 'Név',
      feedback_email: 'E-mail cím',
      feedback_type: 'Típus',
      feedback_type_suggestion: 'Fejlesztési javaslat / Észrevétel',
      feedback_type_error: 'Hiba a tananyagban / Elírás',
      feedback_type_other: 'Egyéb kérdés / Kérés',
      feedback_message: 'Üzenet leírása',
      feedback_send: 'Küldés',
      feedback_success: 'Sikeres elküldés!',
      feedback_success_desc: 'Köszönjük! A levelezőprogramja megnyílt a levél elküldéséhez Dr. Péterfi Zoltán részére (peterfi.zoltan@pte.hu). Ha nem nyílt meg, kérjük, másolja ki az alábbi szöveget és küldje el manuálisan.',
      ai_consult_btn: 'Klinikai AI Asszisztens',
      ai_consult_title: 'Klinikai AI Konzultáció és Asszisztens',
      ai_consult_subtitle: 'Kérdezzen bátran az infektológiáról, kórokozókról, diagnosztikáról és dekolonizációs protokollokról. Az API kulcs biztonságosan el van rejtve a szerveren.',
      ai_consult_placeholder: 'Írja be a kérdését itt...',
      ai_consult_send: 'Küldés',
      ai_consult_empty: 'Nincs még üzenet. Kérdezzen a klinikai AI-tól!',
      ai_consult_suggested_questions: 'Ajánlott témák és kérdések:',
      ai_consult_suggested_1: 'Hogyan kell mintát venni VRE screeninghez?',
      ai_consult_suggested_2: 'Mi a dekolonizációs stratégia Gram-negatív MRK esetén?',
      ai_consult_suggested_3: 'Mi az empirikus terápia bakteriális meningitis esetén?',
      ai_consult_welcome: 'Üdvözlöm! Én egy Klinikai AI Asszisztens vagyok. Kérdezzen bátran az infektológia témaköréből (pl. antibiotikum terápia, screeningek, dekolonizációs protokollok, izolációs szabályok).'
    },
    en: {
      title: 'Infectious Diseases',
      subtitle: 'University of Pécs / Dr. Zoltán Péterfi',
      search: 'Search by disease, pathogen or symptoms...',
      categories: 'Categories',
      disease_count: 'diseases',
      welcome_title: 'Welcome to the Infectious Diseases Interactive Textbook!',
      welcome_text: 'Select a category from the left menu, then select a disease to view comprehensive clinical guidelines.',
      notes_title: 'Student Notes',
      notes_placeholder: 'Write your notes for this disease here. Saving is automatic...',
      save_notes: 'Save Notes',
      export_notes: 'Export Notes',
      import_notes: 'Import Notes',
      no_results: 'No search results found.',
      calculators_btn: 'Clinical Scores',
      media_library_btn: 'Media & Gallery',
      share_btn: 'Share & Offline',
      didactics: 'Didactic Overview',
      didactics_tip: 'Teaching Tip',
      pathogen: 'Pathogen',
      pathogen_type: 'Type',
      gram_stain: 'Gram stain',
      shape: 'Shape',
      epidemiology: 'Epidemiology',
      incidence: 'Incidence',
      seasonality: 'Seasonality',
      transmission: 'Transmission',
      risk_groups: 'Risk Groups',
      pathogenesis: 'Pathogenesis',
      virulence: 'Virulence Factors',
      symptoms: 'Clinical Features',
      incubation: 'Incubation period',
      onset: 'Onset',
      physical: 'Physical Exam',
      complications: 'Complications',
      diagnostics: 'Diagnostics',
      section_diagnostic_criteria: 'Diagnostic Criteria',
      lab: 'Laboratory Tests',
      imaging: 'Imaging Studies',
      microbiology: 'Microbiology',
      differential: 'Differential Diagnosis',
      label_distinguishing: 'Distinguishing features: ',
      therapy: 'Therapy',
      section_empirical_therapy: 'Empirical Therapy',
      section_references: 'References',
      section_prognosis: 'Prognosis',
      targeted: 'Targeted therapy',
      supportive: 'Supportive care',
      prevention: 'Prevention',
      guidelines: 'Clinical Guidelines',
      prognosis: 'Prognosis',
      mortality: 'Mortality',
      prognostic_factors: 'Prognostic Factors',
      prognostic_scores: 'Associated Scores',
      gallery: 'Gallery',
      tab_info: 'Overview',
      tab_patho: 'Pathology',
      tab_clinic: 'Clinical',
      tab_diag: 'Diagnostics',
      tab_therapy: 'Treatment',
      tab_prog: 'Prognosis',
      back_home: 'Back to Home',
      select_disease: 'Please select a disease from the list!',
      share_title: 'How to share and use this textbook?',
      share_step1_title: '1. Offline Access (PWA Installation)',
      share_step1_text: 'This app is a Progressive Web App (PWA). Click the "Install" or "Add to Home Screen" icon in your browser\'s address bar on your phone or PC. This allows full textbook access at the clinic even without any internet connection!',
      share_step2_title: '2. Share study notes with classmates',
      share_step2_text: 'You can easily export your personal notes using the "Export Notes" button. Your classmates can then import this JSON file into their browsers via the "Import Notes" option, facilitating joint study prep.',
      share_step3_title: '3. Direct Application Link',
      share_step3_text: 'Send this link to your student group chats (WhatsApp, Messenger, Teams):',
      share_close: 'Close',
      calc_title: 'Interactive Clinical Calculators',
      calc_score: 'Score',
      calc_result: 'Risk Assessment & Recommendation',
      calc_reset: 'Reset',
      note_saved: 'Saved!',
      severity_mild: 'Mild',
      severity_moderate: 'Moderate',
      severity_severe: 'Severe',
      table_col_test: 'Test / Modality',
      table_col_finding: 'Abnormal Finding',
      table_col_interpretation: 'Clinical Significance',
      export_pdf: 'Download PDF',
      high_yield_mode: 'High-Yield Mode',
      high_yield_tip: 'Highlights key exam questions and critical clinical pearls.',
      active_recall_btn: 'Recall Flashcards',
      active_recall_title: 'Active Recall Cards',
      show_answer: 'Show Answer',
      next_card: 'Next Card',
      prev_card: 'Previous Card',
      got_it: 'I Knew It!',
      need_review: 'Needs Review',
      study_stats_title: 'Quiz Result',
      study_stats_text: 'You have successfully reviewed the card deck!',
      therapy_titles: {
        cap_outpatient: 'Community-acquired pneumonia - Outpatient Care',
        cap_inpatient: 'Community-acquired pneumonia - Inpatient Ward',
        cap_icu: 'Community-acquired pneumonia - Intensive Care Unit',
        hap_early: 'Hospital-acquired pneumonia - Early onset (≤ 4 days)',
        hap_late_vap: 'Hospital-acquired pneumonia - Late onset (≥ 5 days) or VAP',
        outpatient: 'Outpatient Treatment',
        inpatient: 'Inpatient (Ward) Treatment',
        icu: 'Intensive Care Unit (ICU) Treatment',
        default: 'Standard Empirical Therapy'
      },
      feedback_btn: 'Feedback',
      feedback_title: 'Send Feedback',
      feedback_name: 'Name',
      feedback_email: 'Email',
      feedback_type: 'Type',
      feedback_type_suggestion: 'Suggestion / Improvement',
      feedback_type_error: 'Error in Content / Typo',
      feedback_type_other: 'Other Question / Request',
      feedback_message: 'Your Message',
      feedback_send: 'Send Feedback',
      feedback_success: 'Feedback Ready!',
      feedback_success_desc: 'Thank you! Your email client has been opened to send the message to Dr. Zoltán Péterfi (peterfi.zoltan@pte.hu). If it did not open, please copy the text below and send it manually.',
      ai_consult_btn: 'Clinical AI Assistant',
      ai_consult_title: 'Clinical AI Consultation & Assistant',
      ai_consult_subtitle: 'Ask anything about infectology, pathogens, diagnostics, and decolonization protocols. The API key is securely hidden on the server.',
      ai_consult_placeholder: 'Type your question here...',
      ai_consult_send: 'Send',
      ai_consult_empty: 'No messages yet. Ask the clinical AI a question!',
      ai_consult_suggested_questions: 'Suggested topics and questions:',
      ai_consult_suggested_1: 'How should samples be collected for VRE screening?',
      ai_consult_suggested_2: 'What is the decolonization strategy for Gram-negative MDROs?',
      ai_consult_suggested_3: 'What is the empirical therapy for bacterial meningitis?',
      ai_consult_welcome: 'Hello! I am your Clinical AI Assistant. Feel free to ask any question about infectology, empirical antibiotic therapies, screening protocols, or isolation/decolonization guidelines.'
    },
    de: {
      title: 'Lehrbuch der Infektiologie',
      subtitle: 'Universität Pécs / Dr. Zoltán Péterfi',
      search: 'Suche nach Krankheiten, Erregern oder Symptomen...',
      categories: 'Kategorien',
      disease_count: 'Krankheiten',
      welcome_title: 'Willkommen beim interaktiven Lehrbuch der Infektiologie!',
      welcome_text: 'Wählen Sie links eine Kategorie und eine Krankheit aus, um die umfassenden klinischen Richtlinien anzuzeigen.',
      notes_title: 'Studentische Notizen',
      notes_placeholder: 'Schreiben Sie hier Ihre Notizen zu dieser Krankheit. Die Speicherung erfolgt automatisch...',
      save_notes: 'Notizen speichern',
      export_notes: 'Notizen exportieren',
      import_notes: 'Notizen importieren',
      no_results: 'Keine Suchergebnisse gefunden.',
      calculators_btn: 'Klinische Scores',
      media_library_btn: 'Mediathek & Bilder',
      share_btn: 'Teilen & Offline',
      didactics: 'Didaktische Übersicht',
      didactics_tip: 'Lehrtipp',
      pathogen: 'Erreger',
      pathogen_type: 'Typ',
      gram_stain: 'Gramfärbung',
      shape: 'Morphologie',
      epidemiology: 'Epidemiologie',
      incidence: 'Inzidenz',
      seasonality: 'Saisonalität',
      transmission: 'Übertragungsweg',
      risk_groups: 'Risikogruppen',
      pathogenesis: 'Pathogenese',
      virulence: 'Virulenzfaktoren',
      symptoms: 'Klinik & Symptome',
      incubation: 'Inkubationszeit',
      onset: 'Beginn',
      physical: 'Körperlicher Befund',
      complications: 'Komplikationen',
      diagnostics: 'Diagnostik',
      section_diagnostic_criteria: 'Diagnosekriterien',
      lab: 'Laboruntersuchungen',
      imaging: 'Bildgebende Verfahren',
      microbiology: 'Mikrobiologie',
      differential: 'Differentialdiagnose',
      label_distinguishing: 'Unterscheidungsmerkmale: ',
      therapy: 'Therapie',
      section_empirical_therapy: 'Empirische Therapie',
      section_references: 'Literaturverzeichnis',
      section_prognosis: 'Prognose',
      targeted: 'Gezielte Therapie',
      supportive: 'Supportive Therapie',
      prevention: 'Prävention & Prophylaxe',
      guidelines: 'Klinische Leitlinien',
      prognosis: 'Prognose',
      mortality: 'Mortalität',
      prognostic_factors: 'Prognosefaktoren',
      prognostic_scores: 'Relevante Scores',
      gallery: 'Bildergalerie',
      tab_info: 'Übersicht',
      tab_patho: 'Pathologie',
      tab_clinic: 'Klinik',
      tab_diag: 'Diagnostik',
      tab_therapy: 'Behandlung',
      tab_prog: 'Prognose',
      back_home: 'Zurück zur Startseite',
      select_disease: 'Bitte wählen Sie eine Krankheit aus der Liste!',
      share_title: 'Wie wird diese App geteilt und verwendet?',
      share_step1_title: '1. Offline-Zugriff (PWA-Installation)',
      share_step1_text: 'Diese App ist eine Progressive Web App (PWA). Klicken Sie in der Adressleiste Ihres Browsers auf Ihrem Smartphone oder PC auf „Installieren“ oder „Zum Startbildschirm hinzufügen“. So ist das gesamte Lehrbuch auf der Station auch ganz ohne Internetverbindung verfügbar!',
      share_step2_title: '2. Studiennotizen mit Kommilitonen austauschen',
      share_step2_text: 'Über den Button „Notizen exportieren“ können Sie Ihre eigenen Zusammenfassungen sichern und per Messenger teilen. Kommilitonen können diese Datei mit „Notizen importieren“ einspielen.',
      share_step3_title: '3. Direktlink teilen',
      share_step3_text: 'Teilen Sie diesen Link in Ihren Studiengruppen (WhatsApp, Telegram, Teams):',
      share_close: 'Schließen',
      calc_title: 'Interaktiver Medizinischer Rechner',
      calc_score: 'Punktzahl',
      calc_result: 'Klinische Einteilung & Empfehlung',
      calc_reset: 'Zurücksetzen',
      note_saved: 'Gesichert!',
      severity_mild: 'Mild',
      severity_moderate: 'Mittelschwer',
      severity_severe: 'Schwer',
      table_col_test: 'Untersuchung',
      table_col_finding: 'Befund',
      table_col_interpretation: 'Klinische Bedeutung',
      export_pdf: 'PDF herunterladen',
      high_yield_mode: 'High-Yield Modus',
      high_yield_tip: 'Hebt wichtige Prüfungsfragen und klinische Kernpunkte hervor.',
      active_recall_btn: 'Karteikarten-Test',
      active_recall_title: 'Aktives Erinnern',
      show_answer: 'Antwort anzeigen',
      next_card: 'Nächste Karte',
      prev_card: 'Vorherige Karte',
      got_it: 'Gewusst!',
      need_review: 'Wiederholen',
      study_stats_title: 'Quiz-Ergebnis',
      study_stats_text: 'Sie haben den Karteikarten-Stapel erfolgreich wiederholt!',
      therapy_titles: {
        cap_outpatient: 'Ambulant erworbene Pneumonie - Ambulante Behandlung',
        cap_inpatient: 'Ambulant erworbene Pneumonie - Stationsbehandlung',
        cap_icu: 'Ambulant erworbene Pneumonie - Intensivstation',
        hap_early: 'Nosokomiale Pneumonie - Früher Beginn (≤ 4 Tage)',
        hap_late_vap: 'Nosokomiale Pneumonie - Später Beginn (≥ 5 Tage) oder VAP',
        outpatient: 'Ambulante Behandlung',
        inpatient: 'Stationäre Behandlung',
        icu: 'Intensivmedizinische Behandlung',
        default: 'Standardmäßige empirische Therapie'
      },
      feedback_btn: 'Feedback',
      feedback_title: 'Feedback senden',
      feedback_name: 'Name',
      feedback_email: 'E-Mail',
      feedback_type: 'Kategorie',
      feedback_type_suggestion: 'Vorschlag / Verbesserung',
      feedback_type_error: 'Inhaltlicher Fehler / Tippfehler',
      feedback_type_other: 'Sonstige Frage / Anliegen',
      feedback_message: 'Ihre Nachricht',
      feedback_send: 'Feedback senden',
      feedback_success: 'Senden vorbereitet!',
      feedback_success_desc: 'Vielen Dank! Ihr E-Mail-Programm wurde geöffnet, um das Feedback an Dr. Zoltán Péterfi (peterfi.zoltan@pte.hu) zu senden. Falls es sich nicht geöffnet hat, kopieren Sie bitte den untenstehenden Text und senden Sie ihn manuell.',
      ai_consult_btn: 'Klinischer KI-Assistent',
      ai_consult_title: 'Klinische KI-Konsultation & Assistent',
      ai_consult_subtitle: 'Fragen Sie nach Infektiologie, Erregern, Diagnostik und Dekolonisierungsprotokollen. Der API-Schlüssel ist serverseitig sicher verborgen.',
      ai_consult_placeholder: 'Geben Sie Ihre Frage hier ein...',
      ai_consult_send: 'Senden',
      ai_consult_empty: 'Noch keine Nachrichten. Fragen Sie den klinischen KI-Assistenten!',
      ai_consult_suggested_questions: 'Empfohlene Themen und Fragen:',
      ai_consult_suggested_1: 'Wie sollten Proben für das VRE-Screening entnommen werden?',
      ai_consult_suggested_2: 'Was ist die Dekolonisierungsstrategie bei Gram-negativen MDROs?',
      ai_consult_suggested_3: 'Was ist die empirische Therapie bei bakterieller Meningitis?',
      ai_consult_welcome: 'Hallo! Ich bin Ihr klinischer KI-Assistent. Sie können gerne Fragen zur Infektiologie stellen (z. B. empirische Antibiotikatherapie, Screening-Protokolle, Dekolonisierung oder Isolierungsmaßnahmen).'
    }
  };

  const currentTranslations = t[lang];

  // Full-text search logic
  const getFilteredDiseases = (categoryKey: string) => {
    const category = currentDb[categoryKey];
    if (!category || !category.diseases) return [];

    if (!searchQuery) return category.diseases;

    const query = searchQuery.toLowerCase();
    return category.diseases.filter(d => {
      // Search by name
      if (d.name.toLowerCase().includes(query)) return true;
      // Search by pathogen
      if (d.pathogen?.name.toLowerCase().includes(query)) return true;
      // Search by symptoms
      if (d.clinical?.symptoms?.some(s => s.name.toLowerCase().includes(query) || s.description.toLowerCase().includes(query))) return true;
      // Search by therapy
      if (d.therapy?.targeted?.toLowerCase().includes(query)) return true;
      return false;
    });
  };

  // Switch category
  const handleCategorySelect = (key: string) => {
    setActiveCategoryKey(key);
    const category = diseasesByLang[lang][key];
    if (category?.tables && category.tables.length > 0) {
      setActiveDiseaseId('category_tables');
    } else {
      setActiveDiseaseId(null);
    }
    setActiveDetailTab('info');
  };

  const disease = currentDb[activeCategoryKey]?.diseases.find(d => d.id === activeDiseaseId);

  return (
    <>
      <div className="h-screen w-full flex flex-col bg-natural-bg font-sans overflow-hidden text-natural-text print:hidden">
      
      {/* Top Banner / Header */}
      <header className="bg-natural-primary text-white px-6 py-3 flex-shrink-0 z-10 shadow-md">
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Toggle Button */}
            <button
              onClick={() => {
                const bothClosed = !isCategoriesOpen && !isDiseasesOpen;
                if (bothClosed) {
                  setIsCategoriesOpen(true);
                  setIsDiseasesOpen(true);
                } else {
                  setIsCategoriesOpen(false);
                  setIsDiseasesOpen(false);
                }
              }}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded transition-all active:scale-95 flex items-center justify-center cursor-pointer"
              title="Toggle Sidebars"
            >
              <Menu className="w-4 h-4" />
            </button>
            <div className="brand flex-shrink-0 flex items-center gap-3">
              <img
                src={appIcon}
                alt="Logo"
                className="w-9 h-9 rounded-lg border border-white/20 shadow-md object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h1 className="font-serif text-lg md:text-xl font-bold leading-tight select-none">
                  {lang === 'hu' ? 'Infektológia Tankönyv' : lang === 'de' ? 'Infektiologie Lehrbuch' : 'Infectious Diseases Textbook'}
                </h1>
                <p className="font-sans text-[10px] tracking-wider uppercase opacity-80 leading-tight mt-0.5 select-none">
                  {lang === 'hu' ? 'Pécsi Tudományegyetem / Dr. Péterfi Zoltán' : lang === 'de' ? 'Universität Pécs / Dr. Zoltán Péterfi' : 'University of Pécs / Dr. Zoltán Péterfi'}
                </p>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Live Search */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder={lang === 'hu' ? 'Keresés...' : lang === 'de' ? 'Suche...' : 'Search...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-48 bg-white/15 border border-white/10 hover:bg-white/20 text-white placeholder-white/50 text-[11px] px-3 py-1.5 pl-8 rounded focus:outline-none focus:bg-white focus:text-natural-dark focus:placeholder-natural-muted transition-all duration-200"
              />
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Feedback Button */}
            <button
              onClick={() => {
                setFeedbackName('');
                setFeedbackEmail('');
                setFeedbackType('suggestion');
                setFeedbackMessage('');
                setFeedbackStatus('idle');
                setIsFeedbackModalOpen(true);
              }}
              className="px-3 py-1.5 bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/30 text-white font-semibold text-[11px] rounded transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm"
              title={currentTranslations.feedback_title}
            >
              <MessageSquare className="w-3.5 h-3.5 opacity-90" />
              <span>{currentTranslations.feedback_btn}</span>
            </button>

            {/* Calculators Button */}
            <button
              onClick={() => setIsScoreModalOpen(true)}
              className="px-3 py-1.5 bg-white/15 hover:bg-white/25 border border-white/10 text-white font-semibold text-[11px] rounded transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5 opacity-80" />
              <span>{lang === 'hu' ? 'Klinikai Score-ok' : lang === 'de' ? 'Klinische Scores' : 'Clinical Scores'}</span>
            </button>

            {/* Clinical AI Assistant Button */}
            <button
              onClick={() => setIsAiModalOpen(true)}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 border border-indigo-500/30 text-white font-semibold text-[11px] rounded transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm"
              title={currentTranslations.ai_consult_title}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200 fill-indigo-300" />
              <span>{currentTranslations.ai_consult_btn}</span>
            </button>

            {/* Media & Gallery Button */}
            <button
              onClick={() => {
                setSelectedMediaItem(null);
                setIsMediaModalOpen(true);
              }}
              className="px-3 py-1.5 bg-[#ea580c] hover:bg-[#c2410c] border border-[#ea580c] text-white font-semibold text-[11px] rounded transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Image className="w-3.5 h-3.5 opacity-80" />
              <span>{lang === 'hu' ? 'Média & Képtár' : lang === 'de' ? 'Mediathek & Galerie' : 'Media & Gallery'}</span>
            </button>

            {/* Share & Offline button */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="px-3 py-1.5 bg-white/15 hover:bg-white/25 border border-white/10 text-white font-semibold text-[11px] rounded transition-all active:scale-95 cursor-pointer print:hidden flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5 opacity-80" />
              <span>{currentTranslations.share_btn}</span>
            </button>

            {/* PDF Export Button */}
            <button
              onClick={() => {
                trackEvent('print_document', 'document_action', activeCategoryKey);
                setSelectedPrintCategories([activeCategoryKey]);
                setPrintOption('current');
                setIsPrintModalOpen(true);
              }}
              className="px-3 py-1.5 bg-white text-natural-primary hover:bg-white/90 border border-white text-natural-primary font-bold text-[11px] rounded transition-all active:scale-95 cursor-pointer print:hidden flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'hu' ? 'PDF letöltése' : lang === 'de' ? 'PDF herunterladen' : 'Download PDF'}</span>
            </button>

            {/* Font Size Controller */}
            <div className="flex items-center gap-1 bg-white/10 p-1 rounded border border-white/10 select-none print:hidden">
              <button
                onClick={() => setFontSizeScale(prev => Math.max(0.8, Number((prev - 0.1).toFixed(1))))}
                disabled={fontSizeScale <= 0.8}
                className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded transition-all select-none cursor-pointer ${
                  fontSizeScale <= 0.8 ? 'opacity-40 cursor-not-allowed text-white/50' : 'text-white hover:bg-white/20 active:scale-95'
                }`}
                title={lang === 'hu' ? 'Kisebb betűméret (A-)' : lang === 'de' ? 'Verkleinern (A-)' : 'Decrease font size (A-)'}
              >
                A-
              </button>
              <span className="text-[10px] font-mono font-bold text-white/90 min-w-[32px] text-center">
                {Math.round(fontSizeScale * 100)}%
              </span>
              <button
                onClick={() => setFontSizeScale(prev => Math.min(1.4, Number((prev + 0.1).toFixed(1))))}
                disabled={fontSizeScale >= 1.4}
                className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded transition-all select-none cursor-pointer ${
                  fontSizeScale >= 1.4 ? 'opacity-40 cursor-not-allowed text-white/50' : 'text-white hover:bg-white/20 active:scale-95'
                }`}
                title={lang === 'hu' ? 'Nagyobb betűméret (A+)' : lang === 'de' ? 'Vergrößern (A+)' : 'Increase font size (A+)'}
              >
                A+
              </button>
            </div>

            {/* Lang Dropdown */}
            <div className="flex items-center gap-0.5 bg-white/10 p-0.5 rounded border border-white/10">
              {(['hu', 'en', 'de'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-0.5 text-[9px] font-bold rounded uppercase transition-all select-none cursor-pointer ${
                    lang === l ? 'bg-white text-natural-primary shadow-sm' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Split Screen */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column: Categories List */}
        <AnimatePresence initial={false}>
          {isCategoriesOpen && (
            <motion.nav
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-natural-surface border-r border-natural-border flex flex-col flex-shrink-0 overflow-hidden print:hidden"
            >
              <div className="p-3 px-4 border-b border-natural-border bg-white flex items-center justify-between flex-shrink-0 h-[49px]">
                <div className="text-[13px] font-bold text-natural-dark">
                  {currentTranslations.categories}
                </div>
                <button 
                  onClick={() => setIsCategoriesOpen(false)}
                  className="text-natural-muted hover:text-natural-primary p-0.5 rounded hover:bg-black/5 transition-colors"
                  title="Collapse Categories"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto scroll-area bg-natural-surface">
                {Object.entries(currentDb).map(([key, category]) => {
                  const isActive = activeCategoryKey === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleCategorySelect(key)}
                      className={`w-full flex items-center gap-2.5 px-4 py-2 text-xs transition-all border-b border-black/[0.03] text-left relative ${
                        isActive
                          ? 'bg-white text-natural-accent font-semibold border-l-3 border-l-natural-accent'
                          : 'text-natural-muted hover:bg-black/[0.02] hover:text-natural-dark'
                      }`}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: category.color || '#065f46' }}
                      />
                      <span className="text-base flex-shrink-0">
                        {category.icon}
                      </span>
                      <span className="truncate leading-none">
                        {category.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Copyright & Version Info */}
              <div className="p-3 px-4 border-t border-natural-border bg-natural-surface text-[9px] text-natural-muted font-mono flex flex-col gap-0.5 shrink-0 select-none mt-auto">
                <div className="font-sans text-[11px] font-semibold text-natural-dark tracking-wide">Copyright © 2026 Dr. Péterfi Zoltán</div>
                <div className="flex justify-between items-center text-[10px] text-natural-dark/80 mt-1.5">
                  <span className="font-medium">Rendszer verzió:</span>
                  <span className="font-bold text-natural-dark">v4.0.0</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-natural-dark/80 mt-0.5">
                  <span className="font-medium">
                    {lang === 'hu' ? 'Látogatottság:' : lang === 'de' ? 'Seitenaufrufe:' : 'Page views:'}
                  </span>
                  <span className="font-bold text-[#4338ca] dark:text-[#6366f1]">
                    {pageViews} {lang === 'hu' ? 'megtekintés' : lang === 'de' ? 'Aufrufe' : 'views'}
                  </span>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Middle Column: Diseases List */}
        <AnimatePresence initial={false}>
          {isDiseasesOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-natural-surface border-r border-natural-border flex flex-col flex-shrink-0 overflow-hidden"
            >
              <div className="p-3 px-4 border-b border-natural-border bg-white flex-shrink-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-natural-muted truncate">
                  {currentDb[activeCategoryKey]?.name || ''}
                </div>
                <div className="flex items-center justify-between mt-0.5">
                  <div className="text-[10px] font-normal text-natural-dark select-none">
                    {lang === 'hu' ? 'Betegségek' : lang === 'de' ? 'Krankheiten' : 'Diseases'} ({getFilteredDiseases(activeCategoryKey).length})
                  </div>
                  <button 
                    onClick={() => setIsDiseasesOpen(false)}
                    className="text-natural-muted hover:text-natural-primary p-0.5 rounded hover:bg-black/5 transition-colors flex-shrink-0"
                    title="Collapse Diseases"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto scroll-area bg-white">
                {currentDb[activeCategoryKey]?.tables && currentDb[activeCategoryKey].tables.length > 0 && (
                  <button
                    onClick={() => selectDisease('category_tables')}
                    className={`w-full text-left px-4 py-3 border-b border-natural-border transition-all flex items-center gap-2 relative ${
                      activeDiseaseId === 'category_tables'
                        ? 'bg-[#FAF9F3] border-l-3 border-l-amber-500 text-amber-950 font-bold'
                        : 'bg-white hover:bg-black/[0.01] text-natural-dark hover:text-natural-primary'
                    }`}
                  >
                    <Table2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-semibold truncate">
                        {activeCategoryKey === 'bacterial_respiratory'
                          ? (lang === 'hu' ? 'Típusos vs. Atípusos Pneumonia' : lang === 'de' ? 'Typische vs. Atypische Pneumonie' : 'Typical vs. Atypical Pneumonia')
                          : (lang === 'hu' ? 'Összehasonlító táblázat' : lang === 'de' ? 'Vergleichstabelle' : 'Comparison Table')}
                      </span>
                      <span className="text-[9px] text-natural-muted font-mono uppercase tracking-wider">
                        {lang === 'hu' ? 'Differenciáldiagnosztika' : lang === 'de' ? 'Differenzialdiagnostik' : 'Differential Diagnosis'}
                      </span>
                    </div>
                  </button>
                )}
                {getFilteredDiseases(activeCategoryKey).map((disease) => {
                  const isActive = activeDiseaseId === disease.id;
                  return (
                    <button
                      key={disease.id}
                      onClick={() => selectDisease(disease.id)}
                      className={`w-full text-left px-4 py-2.5 border-b border-natural-border transition-all flex flex-col ${
                        isActive
                          ? 'bg-natural-surface border-l-3 border-l-natural-accent'
                          : 'bg-white hover:bg-black/[0.01]'
                      }`}
                    >
                      <h3 className={`text-xs leading-normal ${isActive ? 'text-natural-primary font-bold' : 'text-natural-dark font-normal'}`}>
                        {disease.name}
                      </h3>
                      {disease.pathogen?.name && (
                        <p className="text-[10px] text-natural-muted italic mt-0.5 truncate">
                          {disease.pathogen.name.replace(/<\/?[^>]+(>|$)/g, "")}
                        </p>
                      )}
                    </button>
                  );
                })}
                {getFilteredDiseases(activeCategoryKey).length === 0 && (
                  <div className="text-center py-12 px-4">
                    <Info className="w-8 h-8 text-natural-sand mx-auto mb-2" />
                    <p className="text-xs text-natural-muted font-medium">{currentTranslations.no_results}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Column: Disease Detail View */}
        <main className="flex-1 bg-natural-bg flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            {!activeDiseaseId ? (
              <motion.div
                key="welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center p-10 text-center max-w-xl mx-auto"
              >
                <div className="w-24 h-24 mb-6 rounded-2xl overflow-hidden border border-natural-border shadow-xl">
                  <img
                    src={appIcon}
                    alt="Infektológia Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="font-serif text-3xl font-bold text-natural-dark mb-3 select-none">
                  {lang === 'hu' ? 'Interaktív Tankönyv' : lang === 'de' ? 'Interaktives Lehrbuch' : 'Interactive Textbook'}
                </h2>
                <p className="text-natural-muted text-sm max-w-sm leading-relaxed select-none">
                  {currentTranslations.welcome_text}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col overflow-hidden"
              >
                {/* Detail Header closure wrapper */}
                {(() => {
                  if (activeDiseaseId === 'category_tables') {
                    return renderCategoryTablesContent();
                  }
                  const disease = currentDb[activeCategoryKey]?.diseases.find(d => d.id === activeDiseaseId);
                  if (!disease) return null;

                  return (
                    <>
                      {/* Disease Detail Body & Notes Section */}
                      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                        
                        {/* Clinical Contents */}
                        <div
                          className="clinical-content-wrap flex-1 overflow-y-auto p-6 space-y-6 scroll-area print:overflow-visible print:p-0 print:space-y-8 print:bg-white"
                          style={{ '--content-font-size-adjust': fontSizeScale } as React.CSSProperties}
                        >
                          {/* Printable Academic Header */}
                          <div className="hidden print:block border-b-2 border-natural-dark pb-4 mb-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h1 className="font-serif text-2xl font-black text-natural-dark tracking-tight">
                                  {lang === 'hu' ? 'PÉCSI TUDOMÁNYEGYETEM' : lang === 'de' ? 'UNIVERSITÄT PÉCS' : 'UNIVERSITY OF PÉCS'}
                                </h1>
                                <p className="text-xs font-bold text-natural-muted uppercase tracking-widest mt-1">
                                  {lang === 'hu' ? 'Általános Orvostudományi Kar • Infektológiai Tanszék' : lang === 'de' ? 'Medizinische Fakultät • Klinik für Infektiologie' : 'Medical School • Department of Infectology'}
                                </p>
                              </div>
                              <span className="text-[10px] font-mono text-natural-muted uppercase bg-natural-surface border border-natural-border px-2.5 py-1 rounded">
                                {lang === 'hu' ? 'Hivatalos Tananyag' : lang === 'de' ? 'Offizielles Lehrmaterial' : 'Official Courseware'}
                              </span>
                            </div>
                            <div className="mt-4 flex justify-between text-[11px] text-natural-muted font-bold">
                              <span>{currentTranslations.categories}: {currentDb[activeCategoryKey]?.name}</span>
                              <span>{lang === 'hu' ? 'Dátum' : lang === 'de' ? 'Datum' : 'Date'}: {new Date().toLocaleDateString(lang === 'hu' ? 'hu-HU' : lang === 'de' ? 'de-DE' : 'en-US')}</span>
                            </div>
                          </div>

                          {/* Non-fixed Disease Title Header */}
                          <div className="pb-6 border-b border-natural-border">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <span
                                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white mb-2 inline-block shadow-sm"
                                  style={{ backgroundColor: currentDb[activeCategoryKey]?.color || '#5D6D4F' }}
                                >
                                  {currentDb[activeCategoryKey]?.name}
                                </span>
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-natural-dark leading-tight">
                                  {disease.name}
                                </h2>
                                {disease.pathogen && (
                                  <div className="flex flex-wrap items-center gap-2 mt-3">
                                    <span className="text-xs font-medium bg-white text-natural-text px-2.5 py-1 rounded-full border border-natural-border flex items-center gap-1 shadow-sm">
                                      <span className="w-1.5 h-1.5 rounded-full bg-natural-accent"></span>
                                      {currentTranslations.pathogen}: <strong className="italic ml-0.5" dangerouslySetInnerHTML={{ __html: disease.pathogen.name }}></strong>
                                    </span>
                                    {disease.pathogen.type && (
                                      <span className="text-xs font-semibold bg-natural-widget/50 text-natural-primary px-2.5 py-1 rounded-full border border-natural-border/50">
                                        {disease.pathogen.type}
                                      </span>
                                    )}
                                    {disease.pathogen.gram && (
                                      <span className="text-xs font-mono bg-white text-natural-muted px-2.5 py-1 rounded-full border border-natural-border shadow-sm">
                                        {disease.pathogen.gram}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-wrap items-center gap-2.5 print:hidden">
                                {/* High-Yield Mode Toggle */}
                                <button
                                  onClick={() => setIsHighYieldMode(!isHighYieldMode)}
                                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border font-bold text-xs transition-all shadow-sm active:scale-95 ${
                                    isHighYieldMode
                                      ? 'bg-amber-100 border-amber-400 text-amber-800 ring-1 ring-amber-300/30'
                                      : 'bg-white border-natural-border text-natural-primary hover:bg-natural-surface'
                                  }`}
                                  title={currentTranslations.high_yield_tip}
                                >
                                  <Sparkles className={`w-3.5 h-3.5 ${isHighYieldMode ? 'fill-amber-400 text-amber-500' : 'text-natural-primary/70'}`} />
                                  <span>{currentTranslations.high_yield_mode}</span>
                                </button>

                                {/* Active Recall Quiz Button */}
                                {!disease.table && (
                                  <button
                                    onClick={() => {
                                      setRecallCardIndex(0);
                                      setIsRecallCardFlipped(false);
                                      setRecallScore(0);
                                      setIsRecallModalOpen(true);
                                    }}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-natural-surface border border-natural-border text-natural-primary font-bold text-xs rounded-xl transition-all shadow-sm active:scale-95"
                                  >
                                    <Brain className="w-3.5 h-3.5 text-natural-primary/70" />
                                    <span>{currentTranslations.active_recall_btn}</span>
                                  </button>
                                )}

                                {/* Student Notes Toggle Button */}
                                <button
                                  onClick={() => setIsNotesOpen(!isNotesOpen)}
                                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border font-bold text-xs transition-all shadow-sm active:scale-95 ${
                                    isNotesOpen
                                      ? 'bg-natural-primary border-natural-primary text-white'
                                      : 'bg-white border-natural-border text-natural-primary hover:bg-natural-surface'
                                  }`}
                                  title={currentTranslations.notes_title}
                                >
                                  <PenTool className={`w-3.5 h-3.5 ${isNotesOpen ? 'text-white' : 'text-natural-primary/70'}`} />
                                  <span>{currentTranslations.notes_title}</span>
                                </button>
                              </div>
                            </div>
                          </div>

                          {disease.didactics && renderDidacticsView(disease)}
                          {disease.table && renderTableView(disease)}
                          {!disease.didactics && !disease.table && renderTabsView(disease)}

                          {/* Personal notes in printed form */}
                          {currentNote && (
                            <div className="hidden print:block mt-8 p-6 bg-white border border-dashed border-natural-primary/30 rounded-2xl">
                              <h4 className="font-serif font-black text-natural-primary text-sm uppercase tracking-wider mb-2 pb-1 border-b border-natural-border">
                                {currentTranslations.notes_title}
                              </h4>
                              <p className="text-sm text-natural-dark italic whitespace-pre-wrap leading-relaxed">
                                {currentNote}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Student Notes Panel (Collapsible/Docked) */}
                        <AnimatePresence>
                          {isNotesOpen && (
                            <motion.div
                              initial={{ width: 0, opacity: 0 }}
                              animate={{ width: 320, opacity: 1 }}
                              exit={{ width: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeInOut" }}
                              className="w-full md:w-80 border-t md:border-t-0 md:border-l border-natural-border bg-natural-surface p-5 flex flex-col flex-shrink-0 overflow-hidden"
                            >
                              <div className="flex items-center justify-between mb-3 flex-shrink-0">
                                <h3 className="font-bold text-natural-dark text-sm flex items-center gap-2">
                                  <PenTool className="w-4 h-4 text-natural-primary" />
                                  {currentTranslations.notes_title}
                                </h3>
                                <button
                                  onClick={() => setIsNotesOpen(false)}
                                  className="text-natural-muted hover:text-natural-primary p-0.5 rounded hover:bg-black/5 transition-colors flex-shrink-0"
                                  title="Close Notes"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                              <textarea
                                value={currentNote}
                                onChange={(e) => {
                                  setCurrentNote(e.target.value);
                                  // Auto save on keypress
                                  setNotes(prev => ({
                                    ...prev,
                                    [activeDiseaseId]: e.target.value
                                  }));
                                }}
                                placeholder={currentTranslations.notes_placeholder}
                                className="flex-1 w-full p-4 rounded-xl border border-natural-border bg-white text-sm text-natural-text placeholder-natural-muted focus:outline-none focus:ring-1 focus:ring-natural-accent focus:border-natural-accent resize-none shadow-sm transition-all italic"
                              />
                              <div className="mt-3.5 flex flex-wrap gap-2">
                                <button
                                  onClick={handleExportNotes}
                                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white hover:bg-natural-surface text-natural-text text-xs font-bold rounded-lg border border-natural-border transition-colors shadow-sm"
                                >
                                  <Download className="w-3.5 h-3.5 text-natural-muted" />
                                  {currentTranslations.export_notes}
                                </button>
                                <button
                                  onClick={() => fileInputRef.current?.click()}
                                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white hover:bg-natural-surface text-natural-text text-xs font-bold rounded-lg border border-natural-border transition-colors shadow-sm"
                                >
                                  <Upload className="w-3.5 h-3.5 text-natural-muted" />
                                  {currentTranslations.import_notes}
                                </button>
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  onChange={handleImportNotes}
                                  accept=".json"
                                  className="hidden"
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <AnimatePresence>
          {showIosInstallBanner && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 print:hidden"
            >
              <div className="bg-white rounded-2xl border border-natural-border shadow-2xl p-5 relative overflow-hidden">
                {/* Elegant header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-emerald-50 text-emerald-800 rounded-lg">
                      <Bookmark className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm text-natural-dark leading-tight">
                        {lang === 'hu' ? 'Telepítés iPhone/iPad-re' : lang === 'de' ? 'Auf iPhone/iPad installieren' : 'Install on iPhone/iPad'}
                      </h4>
                      <p className="text-[10px] text-natural-muted font-bold font-mono uppercase tracking-wider">
                        Safari Web App
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={handleDismissIosBanner}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Description */}
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {lang === 'hu' 
                    ? 'Szeretné elérni a teljes interaktív tankönyvet közvetlenül a kezdőképernyőről, akár offline is a klinikán?' 
                  : lang === 'de' 
                    ? 'Möchten Sie auch offline in der Klinik direkt von Ihrem Startbildschirm aus auf das vollständige Lehrbuch zugreifen?' 
                    : 'Would you like to access the complete interactive textbook directly from your home screen, even offline at the clinic?'}
                </p>
                
                {/* Custom visual instructions */}
                <div className="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100 text-xs text-emerald-950 space-y-2 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center bg-emerald-700 text-white rounded-full w-4 h-4 text-[9px] font-bold mt-0.5 shrink-0">1</span>
                    <div className="flex-1">
                      {lang === 'hu' ? (
                        <span>
                          Koppintson a Safari sávjában lévő <strong>Megosztás</strong> gombra:
                        </span>
                      ) : lang === 'de' ? (
                        <span>
                          Tippen Sie in Safari auf das <strong>Teilen</strong>-Symbol:
                        </span>
                      ) : (
                        <span>
                          Tap the Safari browser's <strong>Share</strong> button:
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-800 mx-1 shadow-xs shrink-0 select-none">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="flex items-center justify-center bg-emerald-700 text-white rounded-full w-4 h-4 text-[9px] font-bold mt-0.5 shrink-0">2</span>
                    <div className="flex-1">
                      {lang === 'hu' ? (
                        <span>
                          Görgessen le és válassza a <strong>Hozzáadás a kezdőképernyőhöz</strong> lehetőséget:
                        </span>
                      ) : lang === 'de' ? (
                        <span>
                          Scrollen Sie nach unten und wählen Sie <strong>Zum Home-Bildschirm</strong>:
                        </span>
                      ) : (
                        <span>
                          Scroll down and choose <strong>Add to Home Screen</strong>:
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 bg-white px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-800 mx-1 shadow-xs font-semibold select-none">
                        <span className="text-xs leading-none">+</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Custom Dismiss option */}
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    onClick={handleDismissIosBanner}
                    className="px-3 py-1.5 text-xs text-emerald-800 hover:bg-emerald-50 font-bold rounded-lg transition-colors"
                  >
                    {lang === 'hu' ? 'Később' : lang === 'de' ? 'Später' : 'Later'}
                  </button>
                  <button
                    onClick={handleDismissIosBanner}
                    className="px-3.5 py-1.5 text-xs bg-emerald-800 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors shadow-sm"
                  >
                    {lang === 'hu' ? 'Értem' : lang === 'de' ? 'Verstanden' : 'Got it'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Dynamic Print-Only Collection Book */}
      <div className="print-only-book hidden print:block bg-white text-black font-sans w-full max-w-4xl mx-auto print:p-0">
        
        {/* CASE 1: printOption === 'current' */}
        {printOption === 'current' && (() => {
          // If we are viewing a specific disease
          if (activeDiseaseId && activeDiseaseId !== 'category_tables') {
            const dis = currentDb[activeCategoryKey]?.diseases.find(d => d.id === activeDiseaseId);
            if (!dis) return null;
            return (
              <div className="p-8 space-y-8 print-page-break">
                {/* Academic Header for print */}
                <div className="border-b-2 border-emerald-900 pb-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-800 uppercase font-black tracking-widest">
                      {currentDb[activeCategoryKey]?.name}
                    </span>
                    <h2 className="font-serif text-2xl font-black text-emerald-950 leading-tight mt-1">
                      {dis.name}
                    </h2>
                  </div>
                  <span className="text-[9px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    PTE ÁOK • Infektológia
                  </span>
                </div>

                {/* Rendering the disease content */}
                <div className="space-y-6 text-xs text-natural-text leading-relaxed">
                  {dis.didactics && renderDidacticsView(dis)}
                  {dis.table && renderTableView(dis)}
                  {!dis.didactics && !dis.table && renderTabsView(dis)}

                  {/* Notes for this disease if any */}
                  {notes[dis.id] && (
                    <div className="mt-8 p-5 bg-amber-50/10 border border-dashed border-amber-300 rounded-xl">
                      <h4 className="font-serif font-bold text-amber-900 text-xs uppercase tracking-wider mb-2 pb-1 border-b border-amber-200">
                        {currentTranslations.notes_title} ({lang === 'hu' ? 'Saját jegyzet' : lang === 'de' ? 'Eigene Notizen' : 'My notes'})
                      </h4>
                      <p className="text-xs text-amber-950 italic whitespace-pre-wrap font-sans">
                        {notes[dis.id]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          }
          
          // If we are viewing the category comparative tables
          if (activeDiseaseId === 'category_tables') {
            const cat = currentDb[activeCategoryKey];
            if (!cat || !cat.tables) return null;
            return (
              <div className="p-8 space-y-8">
                <div className="border-b-2 border-emerald-900 pb-4">
                  <span className="text-[10px] font-mono text-emerald-800 uppercase font-black tracking-widest">{cat.name}</span>
                  <h2 className="font-serif text-2xl font-black text-emerald-950 leading-tight mt-1">
                    {lang === 'hu' ? 'Klinikai Összehasonlító Táblázatok' : lang === 'de' ? 'Klinische Vergleichstabellen' : 'Clinical Comparison Tables'}
                  </h2>
                </div>
                {cat.tables.map((t, tIdx) => (
                  <div key={tIdx} className="space-y-4 print-page-break">
                    <h3 className="font-serif text-lg font-bold text-natural-dark">{t.title}</h3>
                    <table className="w-full text-left border-collapse text-[10px] bg-white border border-natural-border">
                      <thead>
                        <tr className="bg-slate-50 border-b border-natural-border">
                          {t.headers.map((h, i) => (
                            <th key={i} className="p-2 font-bold text-slate-700 font-sans uppercase tracking-wider border border-natural-border">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {t.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="odd:bg-slate-50/10">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-2 border border-natural-border text-slate-800 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: cell }} />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            );
          }

          // Otherwise (viewing category overview / didactics landing)
          const cat = currentDb[activeCategoryKey];
          if (!cat) return null;
          return (
            <div className="p-8 space-y-8 print-page-break">
              <div className="border-b-2 border-emerald-900 pb-4">
                <span className="text-[10px] font-mono text-emerald-800 uppercase font-black tracking-widest">PTE ÁOK • Infektológia</span>
                <h2 className="font-serif text-2xl font-black text-emerald-950 leading-tight mt-1">{cat.name}</h2>
              </div>
              {cat.didactics?.overview && (
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-bold text-emerald-900">
                    {lang === 'hu' ? 'Áttekintés' : lang === 'de' ? 'Übersicht' : 'Overview'}
                  </h3>
                  <div className="text-sm text-natural-text leading-relaxed whitespace-pre-wrap font-serif italic">
                    {Array.isArray(cat.didactics.overview) ? cat.didactics.overview.join('\n\n') : cat.didactics.overview}
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* CASE 2: printOption === 'selected' || printOption === 'all' */}
        {printOption !== 'current' && (
          <>
            {/* Book Cover Page */}
            <div 
              className="print-page-cover flex flex-col justify-between p-12 border-4 border-double border-emerald-800 text-center select-none"
            >
              <div>
                <h1 className="font-serif text-3xl font-black text-emerald-900 tracking-tight uppercase">
                  {lang === 'hu' ? 'PÉCSI TUDOMÁNYEGYETEM' : lang === 'de' ? 'UNIVERSITÄT PÉCS' : 'UNIVERSITY OF PÉCS'}
                </h1>
                <p className="text-sm font-bold text-natural-muted uppercase tracking-widest mt-2">
                  {lang === 'hu' ? 'Általános Orvostudományi Kar • Infektológiai Tanszék' : lang === 'de' ? 'Medizinische Fakultät • Klinik für Infektiologie' : 'Medical School • Department of Infectology'}
                </p>
              </div>
              
              <div className="my-auto space-y-4">
                <img src={appIcon} alt="Logo" className="w-24 h-24 mx-auto rounded-3xl border border-emerald-800/20 shadow-md object-cover" />
                <h2 className="font-serif text-4xl font-extrabold text-emerald-950 mt-6 leading-tight">
                  {lang === 'hu' ? 'INFEKTOLÓGIA INTERAKTÍV TANKÖNYV' : lang === 'de' ? 'INFEKTIOLOGIE LEHRBUCH' : 'INFECTIOUS DISEASES TEXTBOOK'}
                </h2>
                <div className="h-1 w-20 bg-emerald-700 mx-auto my-6 rounded"></div>
                <p className="text-lg font-serif italic text-emerald-900">
                  {printOption === 'all' 
                    ? (lang === 'hu' ? 'Teljes Egyetemi Tananyag' : lang === 'de' ? 'Vollständiges Lehrmaterial' : 'Complete Courseware')
                    : (lang === 'hu' ? 'Személyre Szabott Kivonat' : lang === 'de' ? 'Spezifischer Auszug' : 'Customized Study Digest')}
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono text-emerald-900/80">
                <div>{lang === 'hu' ? 'Szerző:' : lang === 'de' ? 'Autor:' : 'Author:'} Dr. Péterfi Zoltán</div>
                <div>{lang === 'hu' ? 'Generálta:' : lang === 'de' ? 'Erstellt von:' : 'Generated for:'} peterfi.zoltan@gmail.com</div>
                <div>{lang === 'hu' ? 'Dátum:' : lang === 'de' ? 'Datum:' : 'Date:'} {new Date().toLocaleDateString(lang === 'hu' ? 'hu-HU' : lang === 'de' ? 'de-DE' : 'en-US')}</div>
                <div className="text-[10px] mt-2 opacity-60">Rendszer verzió: v4.0.0</div>
              </div>
            </div>

            {/* Table of Contents */}
            <div 
              className="p-12 space-y-8 print-page-break"
            >
              <h2 className="font-serif text-2xl font-extrabold border-b border-natural-border pb-3 text-emerald-900">
                {lang === 'hu' ? 'Tartalomjegyzék' : lang === 'de' ? 'Inhaltsverzeichnis' : 'Table of Contents'}
              </h2>
              <div className="space-y-4">
                {Object.entries(currentDb)
                  .filter(([key]) => printOption === 'all' || selectedPrintCategories.includes(key))
                  .map(([key, cat], idx) => (
                    <div key={key} className="flex justify-between items-baseline text-sm">
                      <span className="font-serif font-bold text-emerald-950">{idx + 1}. {cat.name}</span>
                      <span className="flex-1 border-b border-dashed border-natural-border mx-4"></span>
                      <span className="font-mono text-xs text-natural-muted">{cat.diseases.length} {lang === 'hu' ? 'betegség' : lang === 'de' ? 'Erkrankungen' : 'diseases'}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Loop over selected categories */}
            {Object.entries(currentDb)
              .filter(([key]) => printOption === 'all' || selectedPrintCategories.includes(key))
              .map(([key, cat]) => (
                <React.Fragment key={key}>
                  {/* Category Cover Section */}
                  <div 
                    className="p-12 flex flex-col justify-center text-center space-y-6 print-page-cover"
                  >
                    <span className="text-4xl">📚</span>
                    <h2 className="font-serif text-3xl font-black text-emerald-950 uppercase tracking-tight">
                      {cat.name}
                    </h2>
                    <div className="h-0.5 w-16 mx-auto" style={{ backgroundColor: cat.color || '#065f46' }}></div>
                    
                    {cat.didactics?.overview && (
                      <p className="text-sm text-natural-text leading-relaxed max-w-xl mx-auto italic font-serif">
                        {Array.isArray(cat.didactics.overview) ? cat.didactics.overview.join(' ') : cat.didactics.overview}
                      </p>
                    )}

                    {cat.tables && cat.tables.length > 0 && (
                      <p className="text-xs text-natural-muted">
                        {lang === 'hu' 
                          ? 'Kapcsolódó klinikai összehasonlító táblázatok a következő oldalakon találhatóak.'
                          : lang === 'de'
                          ? 'Zugehörige klinische Vergleichstabellen finden Sie auf den folgenden Seiten.'
                          : 'Associated clinical comparison tables are available on the following pages.'}
                      </p>
                    )}
                  </div>

                  {/* Category Tables if any */}
                  {cat.tables && cat.tables.map((t, tIdx) => (
                    <div 
                      key={tIdx} 
                      className="p-8 space-y-6 print-page-break"
                    >
                      <div className="border-b border-natural-border pb-4 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold">{cat.name} • Összehasonlító táblázat</span>
                        <h3 className="font-serif text-xl font-bold text-natural-dark mt-1">{t.title}</h3>
                      </div>

                      <table className="w-full text-left border-collapse text-[10px] bg-white border border-natural-border">
                        <thead>
                          <tr className="bg-slate-50 border-b border-natural-border">
                            {t.headers.map((h, i) => (
                              <th key={i} className="p-2 font-bold text-slate-700 font-sans uppercase tracking-wider border border-natural-border">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {t.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="odd:bg-slate-50/10">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-2 border border-natural-border text-slate-800 leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: cell }} />
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}

                  {/* Category Diseases */}
                  {cat.diseases.map((dis) => (
                    <div 
                      key={dis.id} 
                      className="p-8 space-y-8 print-page-break"
                    >
                      {/* Academic Header for print */}
                      <div className="border-b-2 border-emerald-900 pb-4 flex justify-between items-end">
                        <div>
                          <span className="text-[10px] font-mono text-emerald-800 uppercase font-black tracking-widest">{cat.name}</span>
                          <h2 className="font-serif text-2xl font-black text-emerald-950 leading-tight mt-1">
                            {dis.name}
                          </h2>
                        </div>
                        <span className="text-[9px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                          PTE ÁOK • Infektológia
                        </span>
                      </div>

                      {/* Rendering the disease content */}
                      <div className="space-y-6 text-xs text-natural-text leading-relaxed">
                        {dis.didactics && renderDidacticsView(dis)}
                        {dis.table && renderTableView(dis)}
                        {!dis.didactics && !dis.table && renderTabsView(dis)}

                        {/* Notes for this disease if any */}
                        {notes[dis.id] && (
                          <div className="mt-8 p-5 bg-amber-50/10 border border-dashed border-amber-300 rounded-xl">
                            <h4 className="font-serif font-bold text-amber-900 text-xs uppercase tracking-wider mb-2 pb-1 border-b border-amber-200">
                              {currentTranslations.notes_title} ({lang === 'hu' ? 'Saját jegyzet' : lang === 'de' ? 'Eigene Notizen' : 'My notes'})
                            </h4>
                            <p className="text-xs text-amber-950 italic whitespace-pre-wrap font-sans">
                              {notes[dis.id]}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
          </>
        )}
      </div>

      {/* PDF Export Options Modal */}
      <AnimatePresence>
        {isPrintModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Printer className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-lg">{printTranslations[lang].title}</h3>
                </div>
                <button
                  onClick={() => setIsPrintModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-[#EAE7DC] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-area">
                <p className="text-sm text-natural-muted font-sans leading-relaxed">
                  {printTranslations[lang].subtitle}
                </p>

                {/* Print Options */}
                <div className="space-y-3">
                  {/* Current View Option */}
                  <label className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${printOption === 'current' ? 'border-emerald-600 bg-emerald-50/10' : 'border-natural-border hover:bg-natural-surface'}`}>
                    <input
                      type="radio"
                      name="printOption"
                      checked={printOption === 'current'}
                      onChange={() => setPrintOption('current')}
                      className="mt-1 accent-emerald-700"
                    />
                    <div className="space-y-0.5">
                      <span className="font-serif font-bold text-sm text-natural-dark block">
                        {printTranslations[lang].option_current}
                      </span>
                      <span className="text-xs text-natural-muted font-sans block">
                        {printTranslations[lang].option_current_desc}
                      </span>
                    </div>
                  </label>

                  {/* Selected Categories Option */}
                  <label className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${printOption === 'selected' ? 'border-emerald-600 bg-emerald-50/10' : 'border-natural-border hover:bg-natural-surface'}`}>
                    <input
                      type="radio"
                      name="printOption"
                      checked={printOption === 'selected'}
                      onChange={() => setPrintOption('selected')}
                      className="mt-1 accent-emerald-700"
                    />
                    <div className="space-y-0.5 w-full">
                      <span className="font-serif font-bold text-sm text-natural-dark block">
                        {printTranslations[lang].option_selected}
                      </span>
                      <span className="text-xs text-natural-muted font-sans block">
                        {printTranslations[lang].option_selected_desc}
                      </span>

                      {/* Render category checkboxes if 'selected' option is chosen */}
                      {printOption === 'selected' && (
                        <div className="mt-4 pt-4 border-t border-natural-border space-y-2 max-h-48 overflow-y-auto pr-1 scroll-area">
                          <span className="text-xs font-serif font-bold text-emerald-950 block mb-1">
                            {printTranslations[lang].select_categories}
                          </span>
                          <div className="flex gap-2 mb-3" onClick={(e) => e.stopPropagation()}>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedPrintCategories(Object.keys(currentDb));
                              }}
                              className="text-[10px] text-emerald-700 hover:text-emerald-800 hover:underline font-bold cursor-pointer"
                            >
                              {lang === 'hu' ? 'Összes kijelölése' : lang === 'de' ? 'Alle auswählen' : 'Select All'}
                            </button>
                            <span className="text-[10px] text-natural-muted">|</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedPrintCategories([]);
                              }}
                              className="text-[10px] text-rose-700 hover:text-rose-800 hover:underline font-bold cursor-pointer"
                            >
                              {lang === 'hu' ? 'Kijelölés törlése' : lang === 'de' ? 'Auswahl aufheben' : 'Clear All'}
                            </button>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {Object.entries(currentDb).map(([key, cat]) => (
                              <label key={key} className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-natural-border hover:bg-natural-surface transition-colors cursor-pointer text-xs">
                                <input
                                  type="checkbox"
                                  checked={selectedPrintCategories.includes(key)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedPrintCategories(prev => [...prev, key]);
                                    } else {
                                      setSelectedPrintCategories(prev => prev.filter(k => k !== key));
                                    }
                                  }}
                                  className="accent-emerald-700 h-3.5 w-3.5"
                                />
                                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color || '#065f46' }} />
                                <span className="font-sans font-semibold text-natural-dark truncate">{cat.name}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* All Textbook Option */}
                  <label className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${printOption === 'all' ? 'border-emerald-600 bg-emerald-50/10' : 'border-natural-border hover:bg-natural-surface'}`}>
                    <input
                      type="radio"
                      name="printOption"
                      checked={printOption === 'all'}
                      onChange={() => setPrintOption('all')}
                      className="mt-1 accent-emerald-700"
                    />
                    <div className="space-y-0.5">
                      <span className="font-serif font-bold text-sm text-natural-dark block">
                        {printTranslations[lang].option_all}
                      </span>
                      <span className="text-xs text-natural-muted font-sans block">
                        {printTranslations[lang].option_all_desc}
                      </span>
                    </div>
                  </label>
                </div>

                <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200/50 flex gap-2.5 items-start text-xs text-amber-900 leading-relaxed italic">
                  <span className="text-base select-none">💡</span>
                  <p className="font-sans">{printTranslations[lang].help_text}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => setIsPrintModalOpen(false)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {printTranslations[lang].cancel_btn}
                </button>
                <button
                  onClick={() => {
                    // Trigger print immediately while print-only contents are fully rendered and modal is open
                    // This prevents re-render/animation races with Framer Motion closing transitions
                    window.print();
                    setIsPrintModalOpen(false);
                  }}
                  disabled={printOption === 'selected' && selectedPrintCategories.length === 0}
                  className={`px-5 py-2 text-white font-serif font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                    printOption === 'selected' && selectedPrintCategories.length === 0
                      ? 'bg-emerald-800/50 cursor-not-allowed opacity-60'
                      : 'bg-emerald-700 hover:bg-emerald-800'
                  }`}
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{printTranslations[lang].download_btn}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share / Offline Guidance Modal */}
      <AnimatePresence>
        {isShareModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-lg">{currentTranslations.share_title}</h3>
                </div>
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-[#EAE7DC] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 scroll-area text-natural-text">
                {/* Step 1: PWA */}
                <div className="bg-natural-surface p-4 rounded-xl border border-natural-border">
                  <h4 className="font-serif font-bold text-natural-dark text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-natural-widget text-natural-primary flex items-center justify-center text-xs font-bold">1</span>
                    {currentTranslations.share_step1_title}
                  </h4>
                  <p className="text-sm leading-relaxed text-natural-text pl-8">
                    {currentTranslations.share_step1_text}
                  </p>
                </div>

                {/* Step 2: Study Notes */}
                <div className="bg-natural-surface p-4 rounded-xl border border-natural-border">
                  <h4 className="font-serif font-bold text-natural-dark text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-natural-widget text-natural-primary flex items-center justify-center text-xs font-bold">2</span>
                    {currentTranslations.share_step2_title}
                  </h4>
                  <p className="text-sm leading-relaxed text-natural-text pl-8">
                    {currentTranslations.share_step2_text}
                  </p>
                </div>

                {/* Step 3: Link sharing */}
                <div className="bg-natural-surface p-4 rounded-xl border border-natural-border">
                  <h4 className="font-serif font-bold text-natural-dark text-base mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-natural-widget text-natural-primary flex items-center justify-center text-xs font-bold">3</span>
                    {currentTranslations.share_step3_title}
                  </h4>
                  <p className="text-sm leading-relaxed text-natural-text pl-8 mb-3">
                    {currentTranslations.share_step3_text}
                  </p>
                  <div className="pl-8">
                    <code className="block bg-white p-3 rounded-lg text-xs font-mono break-all text-natural-primary select-all border border-natural-border shadow-sm">
                      {window.location.href}
                    </code>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-natural-surface border-t border-natural-border flex justify-end">
                <button
                  onClick={() => setIsShareModalOpen(false)}
                  className="px-5 py-2.5 bg-natural-dark hover:bg-natural-primary text-white font-serif font-bold text-sm rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  {currentTranslations.share_close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clinical AI Assistant Modal */}
      <AnimatePresence>
        {isAiModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full flex flex-col overflow-hidden border border-natural-border h-[85vh] md:h-[650px]"
            >
              {/* Modal Header */}
              <div className="p-4 md:p-5 bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-900 text-white flex justify-between items-center border-b border-indigo-950">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base md:text-lg tracking-tight">
                      {currentTranslations.ai_consult_title}
                    </h3>
                    <p className="text-[10px] text-indigo-200/80 font-sans tracking-wide mt-0.5">
                      {lang === 'hu' ? 'Biztonságos kiszolgálóoldali API proxy (Gemini-3.5-flash)' : 'Secure Server-side API Proxy (Gemini-3.5-flash)'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {aiMessages.length > 0 && (
                    <button
                      onClick={handleClearAiChat}
                      className="px-2.5 py-1 text-[10px] uppercase font-bold text-indigo-200 hover:text-white bg-white/10 hover:bg-white/15 rounded border border-white/5 transition-all cursor-pointer"
                      title={lang === 'hu' ? 'Csevegés törlése' : 'Clear Chat'}
                    >
                      {lang === 'hu' ? 'Törlés' : 'Clear'}
                    </button>
                  )}
                  <button
                    onClick={() => setIsAiModalOpen(false)}
                    className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Info alert about secure key */}
              <div className="bg-indigo-50 border-b border-indigo-100 p-3 flex gap-2 text-indigo-950 text-xs font-sans leading-snug">
                <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'hu' ? 'API Kulcs Biztonság:' : 'API Key Security:'}</strong> {currentTranslations.ai_consult_subtitle}
                </span>
              </div>

              {/* Custom API Key Input & Help Section */}
              <div className="bg-slate-50 border-b border-slate-200">
                <button
                  onClick={() => setIsApiKeySettingsOpen(!isApiKeySettingsOpen)}
                  className="w-full px-4 py-2.5 flex items-center justify-between text-xs font-bold text-slate-700 hover:bg-slate-100/70 transition-colors font-sans cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Key className="w-3.5 h-3.5 text-indigo-600" />
                    <span>
                      {lang === 'hu' 
                        ? 'Saját Gemini API kulcs beállítása (Opcionális)' 
                        : lang === 'de' 
                        ? 'Eigener Gemini-API-Schlüssel einrichten (Optional)' 
                        : 'Set custom Gemini API key (Optional)'}
                    </span>
                    {customApiKey ? (
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                        {lang === 'hu' ? 'Aktív' : lang === 'de' ? 'Aktiv' : 'Active'}
                      </span>
                    ) : (
                      <span className="bg-slate-200 text-slate-600 text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                        {lang === 'hu' ? 'Alapértelmezett' : lang === 'de' ? 'Standard' : 'Default'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-400 font-normal">
                      {isApiKeySettingsOpen 
                        ? (lang === 'hu' ? 'Bezárás' : 'Close') 
                        : (lang === 'hu' ? 'Beállítások' : 'Settings')}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isApiKeySettingsOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isApiKeySettingsOpen && (
                  <div className="p-4 bg-white border-t border-slate-100 space-y-3.5">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-600 font-sans block">
                        {lang === 'hu' 
                          ? 'Gemini API Kulcs' 
                          : lang === 'de' 
                          ? 'Gemini-API-Schlüssel' 
                          : 'Gemini API Key'}
                      </label>
                      <div className="relative">
                        <input
                          type={showApiKey ? 'text' : 'password'}
                          value={customApiKey}
                          onChange={(e) => setCustomApiKey(e.target.value)}
                          placeholder="AIzaSy..."
                          className="w-full pl-3 pr-10 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                        />
                        <button
                          type="button"
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showApiKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {/* How to obtain key info */}
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-150 text-[11px] text-slate-600 font-sans leading-relaxed space-y-1.5">
                      <p className="font-bold text-slate-800">
                        {lang === 'hu' 
                          ? 'Hogyan szerezhet ingyenes API kulcsot?' 
                          : lang === 'de' 
                          ? 'Wie erhalten Sie einen kostenlosen API-Schlüssel?' 
                          : 'How to get a free API key?'}
                      </p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>
                          {lang === 'hu' ? (
                            <>Látogasson el a <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold inline-flex items-center gap-0.5">Google AI Studio <ExternalLink className="w-2.5 h-2.5" /></a> oldalára.</>
                          ) : lang === 'de' ? (
                            <>Besuchen Sie das <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold inline-flex items-center gap-0.5">Google AI Studio <ExternalLink className="w-2.5 h-2.5" /></a>.</>
                          ) : (
                            <>Visit <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold inline-flex items-center gap-0.5">Google AI Studio <ExternalLink className="w-2.5 h-2.5" /></a>.</>
                          )}
                        </li>
                        <li>
                          {lang === 'hu' 
                            ? 'Jelentkezzen be a Google-fiókjával.' 
                            : lang === 'de' 
                            ? 'Melden Sie sich mit Ihrem Google-Konto an.' 
                            : 'Sign in with your Google account.'}
                        </li>
                        <li>
                          {lang === 'hu' 
                            ? 'Kattintson a "Get API Key" (API kulcs létrehozása) gombra.' 
                            : lang === 'de' 
                            ? 'Klicken Sie auf die Schaltfläche "Get API Key".' 
                            : 'Click the "Get API Key" button.'}
                        </li>
                        <li>
                          {lang === 'hu' 
                            ? 'Másolja ki a generált kulcsot, majd illessze be a fenti mezőbe.' 
                            : lang === 'de' 
                            ? 'Kopieren Sie den generierten Schlüssel und fügen Sie ihn oben ein.' 
                            : 'Copy the generated key and paste it into the field above.'}
                        </li>
                      </ol>
                      <p className="text-[10px] text-slate-400 italic pt-1 border-t border-slate-200/60">
                        {lang === 'hu' 
                          ? 'Megjegyzés: A megadott kulcs kizárólag a böngészőjében (localStorage) tárolódik, nem kerül mentésre a szerverünkön.' 
                          : lang === 'de' 
                          ? 'Hinweis: Der angegebene Schlüssel wird nur lokal in Ihrem Browser (localStorage) gespeichert und niemals an unseren Server übertragen.' 
                          : 'Note: The key is stored locally in your browser (localStorage) and is never transmitted to or stored on our server.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat messages container */}
              <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-slate-50/50">
                {aiMessages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                    <div className="p-3 bg-indigo-50 rounded-full text-indigo-600">
                      <Brain className="w-8 h-8" />
                    </div>
                    <p className="font-sans font-medium text-sm text-slate-700 max-w-sm">
                      {currentTranslations.ai_consult_welcome}
                    </p>
                    <p className="text-xs text-slate-500">
                      {currentTranslations.ai_consult_empty}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Welcome message from local system if first time */}
                    <div className="flex gap-2.5 max-w-[85%]">
                      <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0 mt-0.5 border border-indigo-100">
                        AI
                      </div>
                      <div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-none text-slate-800 text-xs md:text-sm shadow-sm space-y-1 font-sans leading-relaxed">
                        {currentTranslations.ai_consult_welcome}
                      </div>
                    </div>

                    {aiMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex gap-2.5 max-w-[85%] ${
                          msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                            msg.role === 'user'
                              ? 'bg-slate-800 border-slate-700 text-white'
                              : 'bg-indigo-50 border-indigo-100 text-indigo-600'
                          }`}
                        >
                          {msg.role === 'user' ? 'U' : 'AI'}
                        </div>
                        <div
                          className={`p-3.5 rounded-2xl text-xs md:text-sm shadow-sm space-y-1 font-sans leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-indigo-600 text-white rounded-tr-none'
                              : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                          }`}
                        >
                          {msg.role === 'user' ? (
                            <p>{msg.text}</p>
                          ) : (
                            <div className="space-y-1.5">{renderMessageText(msg.text)}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* AI Loading indicator */}
                {isAiLoading && (
                  <div className="flex gap-2.5 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0 mt-0.5 border border-indigo-100">
                      AI
                    </div>
                    <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-slate-500 text-xs shadow-sm flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin text-indigo-500" />
                      <span>{lang === 'hu' ? 'AI válasz generálása...' : 'AI is thinking...'}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom suggested questions and Input area */}
              <div className="p-4 bg-white border-t border-natural-border space-y-3.5">
                {/* Suggestions Section */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block font-sans">
                    {currentTranslations.ai_consult_suggested_questions}
                  </span>
                  <div className="flex flex-col md:flex-row gap-2">
                    <button
                      onClick={() => handleSendAiMessage(currentTranslations.ai_consult_suggested_1)}
                      disabled={isAiLoading}
                      className="px-3 py-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-900 text-left text-[11px] rounded-lg transition-all cursor-pointer font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentTranslations.ai_consult_suggested_1}
                    </button>
                    <button
                      onClick={() => handleSendAiMessage(currentTranslations.ai_consult_suggested_2)}
                      disabled={isAiLoading}
                      className="px-3 py-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-900 text-left text-[11px] rounded-lg transition-all cursor-pointer font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentTranslations.ai_consult_suggested_2}
                    </button>
                    <button
                      onClick={() => handleSendAiMessage(currentTranslations.ai_consult_suggested_3)}
                      disabled={isAiLoading}
                      className="px-3 py-2 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 text-slate-700 hover:text-indigo-900 text-left text-[11px] rounded-lg transition-all cursor-pointer font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {currentTranslations.ai_consult_suggested_3}
                    </button>
                  </div>
                </div>

                {/* Input form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendAiMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    disabled={isAiLoading}
                    placeholder={currentTranslations.ai_consult_placeholder}
                    className="flex-1 bg-slate-50 hover:bg-slate-100/70 border border-slate-200 rounded-xl px-4 py-2.5 text-xs md:text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-sans text-slate-800 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isAiLoading || !aiInput.trim()}
                    className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>{currentTranslations.ai_consult_send}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Modal */}
      <AnimatePresence>
        {isFeedbackModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-5 bg-emerald-950 text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-lg">{currentTranslations.feedback_title}</h3>
                </div>
                <button
                  onClick={() => setIsFeedbackModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1 text-natural-text">
                {feedbackStatus === 'idle' ? (
                  <form onSubmit={handleSendFeedback} className="space-y-4">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-natural-dark mb-1 select-none">
                          {currentTranslations.feedback_name}
                        </label>
                        <input
                          type="text"
                          value={feedbackName}
                          onChange={(e) => setFeedbackName(e.target.value)}
                          placeholder="Dr. Kovács János"
                          className="w-full bg-natural-surface border border-natural-border rounded-lg text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-natural-dark"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-natural-dark mb-1 select-none">
                          {currentTranslations.feedback_email}
                        </label>
                        <input
                          type="email"
                          value={feedbackEmail}
                          onChange={(e) => setFeedbackEmail(e.target.value)}
                          placeholder="kovacs.janos@gmail.com"
                          className="w-full bg-natural-surface border border-natural-border rounded-lg text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-natural-dark"
                        />
                      </div>
                    </div>

                    {/* Feedback Type */}
                    <div>
                      <label className="block text-xs font-bold text-natural-dark mb-1 select-none">
                        {currentTranslations.feedback_type}
                      </label>
                      <select
                        value={feedbackType}
                        onChange={(e) => setFeedbackType(e.target.value)}
                        className="w-full bg-natural-surface border border-natural-border rounded-lg text-xs px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-natural-dark"
                      >
                        <option value="suggestion">{currentTranslations.feedback_type_suggestion}</option>
                        <option value="error">{currentTranslations.feedback_type_error}</option>
                        <option value="other">{currentTranslations.feedback_type_other}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-natural-dark mb-1 select-none">
                        {currentTranslations.feedback_message} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={feedbackMessage}
                        onChange={(e) => setFeedbackMessage(e.target.value)}
                        placeholder={lang === 'hu' ? 'Írja le észrevételeit vagy javaslatait részletesen...' : lang === 'de' ? 'Beschreiben Sie Ihr Feedback ausführlich...' : 'Describe your feedback in detail...'}
                        className="w-full bg-natural-surface border border-natural-border rounded-lg text-xs p-3 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 transition-all text-natural-dark resize-none"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsFeedbackModalOpen(false)}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                      >
                        {lang === 'hu' ? 'Mégsem' : lang === 'de' ? 'Abbrechen' : 'Cancel'}
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{currentTranslations.feedback_send}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4 py-2">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-3">
                        <CheckCircle className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-natural-dark text-base mb-1">
                        {currentTranslations.feedback_success}
                      </h4>
                      <p className="text-xs text-natural-muted leading-relaxed max-w-sm">
                        {currentTranslations.feedback_success_desc}
                      </p>
                    </div>

                    <div className="border border-natural-border rounded-xl overflow-hidden bg-slate-50">
                      <div className="bg-slate-100 px-4 py-2 border-b border-natural-border flex justify-between items-center">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {lang === 'hu' ? 'Levél tartalma' : 'Email Content'}
                        </span>
                        <button
                          onClick={handleCopyFeedbackText}
                          className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{lang === 'hu' ? 'Másolva!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>{lang === 'hu' ? 'Másolás' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-[11px] font-mono whitespace-pre-wrap text-slate-700 max-h-48 overflow-y-auto scroll-area">
                        {getFormattedFeedbackText()}
                      </pre>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        onClick={() => setIsFeedbackModalOpen(false)}
                        className="px-5 py-2.5 bg-natural-dark hover:bg-natural-primary text-white font-serif font-bold text-xs rounded-xl transition-colors shadow-sm cursor-pointer"
                      >
                        {currentTranslations.share_close}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Clinical Calculators Modal */}
      <AnimatePresence>
        {isCalcModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col h-[90vh]"
            >
              <div className="p-5 bg-slate-900 text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-bold text-lg">{currentTranslations.calc_title}</h3>
                </div>
                <button
                  onClick={() => setIsScoreModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex overflow-hidden">
                {/* Calculator Tabs List */}
                <div className="w-64 border-r border-slate-200 bg-slate-50 overflow-y-auto p-3.5 space-y-1.5 scroll-area">
                  {Object.entries(calculators).map(([key, calc]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSelectedCalcKey(key);
                      }}
                      className={`w-full text-left px-3.5 py-3 rounded-xl font-bold text-xs transition-all ${
                        selectedCalcKey === key
                          ? 'bg-emerald-700 text-white shadow-md'
                          : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-800'
                      }`}
                    >
                      {calc.title}
                    </button>
                  ))}
                </div>

                {/* Active Calculator Inputs & Interpretations */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-area">
                  {(() => {
                    const calc = calculators[selectedCalcKey];
                    if (!calc) return null;

                    return (
                      <div className="space-y-6 animate-fade-in-up">
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-1">{calc.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{calc.description}</p>
                        </div>

                        {/* Interactive Form Items */}
                        <div className="space-y-4 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                          {calc.items.map((item, idx) => {
                            const inputKey = `${selectedCalcKey}_${idx}`;
                            const isChecked = calcInputs[inputKey] === true;

                            if (item.type === 'header') {
                              return (
                                <h5 key={idx} className="font-bold text-xs uppercase tracking-wider text-slate-400 pt-4 border-b border-slate-200 pb-1.5 first:pt-0">
                                  {item.label}
                                </h5>
                              );
                            }

                            if (item.type === 'number') {
                              return (
                                <div key={idx} className="flex items-center justify-between gap-4 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                  <span className="text-slate-700 font-medium text-sm">{item.label}</span>
                                  <input
                                    type="number"
                                    min={item.min ?? 0}
                                    max={item.max ?? 999}
                                    value={calcInputs[inputKey] || ''}
                                    onChange={(e) => handleCalcInputChange(idx, e.target.value, 'number')}
                                    className="w-24 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 shadow-inner"
                                  />
                                </div>
                              );
                            }

                            if (item.type === 'radio') {
                              return (
                                <label
                                  key={idx}
                                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                                    isChecked
                                      ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                                      : 'border-slate-200 bg-white hover:bg-slate-50'
                                  }`}
                                >
                                  <input
                                    type="radio"
                                    name={item.name}
                                    checked={isChecked}
                                    onChange={() => handleCalcInputChange(idx, true, 'radio', item.name)}
                                    className="w-4 h-4 mt-0.5 text-emerald-600 focus:ring-emerald-500 border-slate-300"
                                  />
                                  <span className="text-slate-700 font-semibold text-sm leading-snug">{item.label}</span>
                                </label>
                              );
                            }

                            // Default checkbox / items
                            return (
                              <label
                                key={idx}
                                className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                                  isChecked
                                    ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                                    : 'border-slate-200 bg-white hover:bg-slate-50'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={(e) => handleCalcInputChange(idx, e.target.checked)}
                                  className="w-5 h-5 mt-0.5 text-emerald-600 rounded focus:ring-emerald-500 border-slate-300"
                                />
                                <span className="text-slate-700 font-semibold text-sm leading-snug">{item.label}</span>
                              </label>
                            );
                          })}
                        </div>

                        {/* Result Display Card */}
                        {calcResult && (
                          <div className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${calcResult.bg} ${calcResult.border}`}>
                            <div>
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                                {currentTranslations.calc_result}
                              </h5>
                              <p className={`text-xl font-extrabold ${calcResult.color}`}>
                                {calcResult.risk}
                              </p>
                              <p className="text-slate-700 text-sm font-semibold mt-1 leading-relaxed">
                                {calcResult.action}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{currentTranslations.calc_score}</span>
                              <p className="text-4xl font-black text-slate-800">{calcScore}</p>
                            </div>
                          </div>
                        )}

                        <div className="flex justify-end gap-3 pt-2">
                          <button
                            onClick={handleResetCalc}
                            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors flex items-center gap-1.5"
                          >
                            <RefreshCw className="w-4 h-4 text-slate-500" />
                            {currentTranslations.calc_reset}
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setIsScoreModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl transition-colors shadow-sm"
                >
                  {currentTranslations.share_close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Recall Modal */}
      <AnimatePresence>
        {isRecallModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FAF9F6] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-natural-border flex flex-col"
            >
              {/* Header */}
              <div className="p-5 bg-natural-primary text-white flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-amber-300 fill-amber-300/20" />
                  <div>
                    <h3 className="font-serif font-black text-sm uppercase tracking-wider">{lang === 'hu' ? 'Aktív Felidézés Kártyák' : lang === 'de' ? 'Aktives Abrufen Karteikarten' : 'Active Recall Cards'}</h3>
                    <p className="text-[10px] text-white/80 font-bold">{disease?.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsRecallModalOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col items-center justify-center min-h-[300px]">
                {(() => {
                  const cards = getActiveRecallCards(disease);
                  if (cards.length === 0) {
                    return (
                      <p className="text-sm text-natural-muted font-bold text-center">
                        {lang === 'hu' ? 'Nincs elég adat a kártyákhoz ehhez a betegséghez.' : 'Not enough data to generate recall cards.'}
                      </p>
                    );
                  }

                  const isFinished = recallCardIndex >= cards.length;
                  if (isFinished) {
                    const scorePercent = Math.round((recallScore / cards.length) * 100);
                    return (
                      <div className="text-center space-y-4 animate-fade-in-up py-4 w-full">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto border-2 border-amber-300 text-3xl">
                          🏆
                        </div>
                        <h4 className="font-serif font-black text-xl text-natural-dark">
                          {lang === 'hu' ? 'Szép munka, Kolléga!' : lang === 'de' ? 'Gute Arbeit, Kollege!' : 'Excellent Work, Colleague!'}
                        </h4>
                        <p className="text-sm text-natural-text max-w-sm mx-auto">
                          {lang === 'hu' 
                            ? `Sikeresen teljesítetted az aktív felidézési tesztet a(z) ${disease?.name} témakörben.` 
                            : `You completed the active recall review for ${disease?.name}.`}
                        </p>
                        
                        <div className="bg-white border border-natural-border/60 rounded-xl p-4 inline-block shadow-sm mx-auto">
                          <span className="text-xs text-natural-muted font-bold uppercase tracking-wider block mb-1">
                            {lang === 'hu' ? 'Elért Eredmény' : lang === 'de' ? 'Ergebnis' : 'Score'}
                          </span>
                          <span className="text-3xl font-serif font-black text-natural-primary">
                            {recallScore} / {cards.length} ({scorePercent}%)
                          </span>
                        </div>

                        <p className="text-xs text-natural-muted italic max-w-xs mx-auto">
                          {scorePercent >= 80 
                            ? (lang === 'hu' ? '„Semmelweis Ignác büszke lenne Önre!”' : 'Excellent retention!')
                            : (lang === 'hu' ? '„Ismétlés a tudás anyja – fusson át még egyszer a leleteken!”' : 'Keep practicing!')}
                        </p>

                        <div className="flex gap-2 justify-center pt-2">
                          <button
                            onClick={() => {
                              setRecallCardIndex(0);
                              setIsRecallCardFlipped(false);
                              setRecallScore(0);
                            }}
                            className="px-4 py-2 bg-white hover:bg-natural-surface border border-natural-border text-natural-text font-bold text-xs rounded-xl transition-all active:scale-95 cursor-pointer"
                          >
                            {lang === 'hu' ? 'Újra' : lang === 'de' ? 'Neustart' : 'Restart'}
                          </button>
                          <button
                            onClick={() => setIsRecallModalOpen(false)}
                            className="px-4 py-2 bg-natural-primary hover:bg-[#4E5C41] text-white font-bold text-xs rounded-xl transition-all active:scale-95 cursor-pointer"
                          >
                            {currentTranslations.share_close}
                          </button>
                        </div>
                      </div>
                    );
                  }

                  const activeCard = cards[recallCardIndex];
                  return (
                    <div className="w-full space-y-6 flex flex-col items-center">
                      {/* Progress meter */}
                      <div className="w-full flex justify-between items-center text-xs font-bold text-natural-muted">
                        <span>{lang === 'hu' ? `Kártya: ${recallCardIndex + 1} / ${cards.length}` : `Card ${recallCardIndex + 1} of ${cards.length}`}</span>
                        <span>{lang === 'hu' ? `Pontszám: ${recallScore}` : `Score: ${recallScore}`}</span>
                      </div>

                      {/* Card Stage */}
                      <div 
                        onClick={() => setIsRecallCardFlipped(!isRecallCardFlipped)}
                        className="w-full min-h-[180px] bg-white border border-natural-border rounded-2xl shadow-md p-6 flex flex-col justify-between items-center text-center cursor-pointer hover:border-natural-accent hover:shadow-lg transition-all relative select-none"
                      >
                        <span className="absolute top-3 right-3 text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {isRecallCardFlipped 
                            ? (lang === 'hu' ? 'Válasz' : 'Answer') 
                            : (lang === 'hu' ? 'Kérdés' : 'Question')}
                        </span>

                        <div className="my-auto">
                          {isRecallCardFlipped ? (
                            <p className="text-base font-serif font-bold text-natural-primary leading-relaxed">
                              {activeCard.a}
                            </p>
                          ) : (
                            <p className="text-base font-serif font-extrabold text-natural-dark leading-relaxed">
                              {activeCard.q}
                            </p>
                          )}
                        </div>

                        <span className="text-[10px] text-natural-muted font-bold flex items-center gap-1.5 mt-4">
                          <span>🔄</span>
                          {lang === 'hu' ? 'Kattintson a kártya megfordításához' : 'Click to flip card'}
                        </span>
                      </div>

                      {/* Button Stage */}
                      {isRecallCardFlipped ? (
                        <div className="flex gap-2.5 w-full">
                          <button
                            onClick={() => {
                              setRecallScore(prev => prev + 1);
                              setRecallCardIndex(prev => prev + 1);
                              setIsRecallCardFlipped(false);
                            }}
                            className="flex-1 py-3 bg-[#EEF2E6] hover:bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold text-xs rounded-xl transition-all active:scale-95 cursor-pointer"
                          >
                            {lang === 'hu' ? 'Tudtam! (✓)' : lang === 'de' ? 'Gewusst! (✓)' : 'I knew it! (✓)'}
                          </button>
                          <button
                            onClick={() => {
                              setRecallCardIndex(prev => prev + 1);
                              setIsRecallCardFlipped(false);
                            }}
                            className="flex-1 py-3 bg-[#FAF3F0] hover:bg-rose-100 border border-rose-200 text-rose-800 font-bold text-xs rounded-xl transition-all active:scale-95 cursor-pointer"
                          >
                            {lang === 'hu' ? 'Még gyakorolni kell (✗)' : lang === 'de' ? 'Noch lernen (✗)' : 'Need study (✗)'}
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setIsRecallCardFlipped(true)}
                          className="w-full py-3 bg-natural-dark hover:bg-natural-primary text-white font-bold text-xs rounded-xl transition-all active:scale-95 cursor-pointer"
                        >
                          {lang === 'hu' ? 'Mutasd a választ' : lang === 'de' ? 'Antwort anzeigen' : 'Show Answer'}
                        </button>
                      )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Media Library Modal */}
      <AnimatePresence>
        {isMediaModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 print:hidden"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-[#FAF9F6] rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden border border-natural-border flex flex-col h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-5 bg-amber-700 text-white flex justify-between items-center flex-shrink-0">
                <div className="flex items-center gap-2.5">
                  <Image className="w-5 h-5 text-amber-300 fill-amber-300/20" />
                  <div>
                    <h3 className="font-serif font-black text-sm uppercase tracking-wider">
                      {lang === 'hu' ? 'Média- és Képtár Reference' : lang === 'de' ? 'Mediathek & Bilder Referenz' : 'Media & Gallery Reference'}
                    </h3>
                    <p className="text-[10px] text-white/80 font-bold">
                      {lang === 'hu' ? 'Orvosi ábrák, mikroszkópos felvételek és eljárások szimulációja' : 'Medical figures, microscopic smears, and procedure simulations'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsMediaModalOpen(false);
                    setSelectedMediaItem(null);
                  }}
                  className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 flex overflow-hidden">
                {selectedMediaItem ? (
                  /* Detail View / Interactive Simulator Mode */
                  <div className="flex-1 flex flex-col lg:flex-row overflow-hidden bg-white">
                    {/* Left Column: Visual / Interactive Simulator */}
                    <div className="flex-1 bg-slate-950 p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
                      {selectedMediaItem.type === 'procedure' && selectedMediaItem.interactiveSteps ? (
                        /* Interactive Procedural Simulator */
                        <div className="w-full h-full flex flex-col justify-between items-center">
                          {/* Step Progress Line */}
                          <div className="w-full max-w-md flex items-center justify-between mb-4 relative">
                            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                            <div 
                              className="absolute left-0 top-1/2 h-0.5 bg-amber-500 -translate-y-1/2 z-0 transition-all duration-300"
                              style={{ width: `${(activeProcedureStep / (selectedMediaItem.interactiveSteps.length - 1)) * 100}%` }}
                            />
                            {selectedMediaItem.interactiveSteps.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setActiveProcedureStep(idx)}
                                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all cursor-pointer ${
                                  idx <= activeProcedureStep
                                    ? 'bg-amber-500 text-slate-950 scale-110 shadow-lg'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                                }`}
                              >
                                {idx + 1}
                              </button>
                            ))}
                          </div>

                          {/* Interactive Graphic Stage */}
                          <div className="flex-1 w-full max-w-lg flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 p-4 relative overflow-hidden shadow-inner">
                            {renderProcedureGraphic(selectedMediaItem.interactiveSteps[activeProcedureStep].graphic, activeProcedureStep)}
                          </div>

                          {/* Control Buttons */}
                          <div className="flex gap-3 mt-4 w-full max-w-md justify-between">
                            <button
                              onClick={() => setActiveProcedureStep(prev => Math.max(0, prev - 1))}
                              disabled={activeProcedureStep === 0}
                              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                            >
                              ← {lang === 'hu' ? 'Előző lépés' : lang === 'de' ? 'Vorheriger' : 'Previous Step'}
                            </button>
                            <button
                              onClick={() => setActiveProcedureStep(0)}
                              className="px-4 py-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                            >
                              🔄 {lang === 'hu' ? 'Újra' : lang === 'de' ? 'Neustart' : 'Restart'}
                            </button>
                            {activeProcedureStep < selectedMediaItem.interactiveSteps.length - 1 ? (
                              <button
                                onClick={() => setActiveProcedureStep(prev => Math.min(selectedMediaItem.interactiveSteps.length - 1, prev + 1))}
                                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl transition-all cursor-pointer"
                              >
                                {lang === 'hu' ? 'Következő lépés' : lang === 'de' ? 'Nächster' : 'Next Step'} →
                              </button>
                            ) : (
                              <span className="px-4 py-2 bg-emerald-600/30 border border-emerald-500/50 text-emerald-400 text-xs font-bold rounded-xl flex items-center gap-1.5 animate-pulse">
                                ✓ {lang === 'hu' ? 'Befejezve!' : lang === 'de' ? 'Abgeschlossen!' : 'Completed!'}
                              </span>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Image/SVG Lightbox View */
                        <div className="w-full h-full flex items-center justify-center p-2">
                          <img
                            src={selectedMediaItem.url}
                            alt={selectedMediaItem.title[lang]}
                            className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-lg border border-slate-800"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}
                    </div>

                    {/* Right Column: Metadata & Clinical Context */}
                    <div className="w-full lg:w-[420px] p-6 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between overflow-y-auto scroll-area">
                      <div className="space-y-5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-amber-800 border border-amber-200 shadow-xs">
                            {selectedMediaItem.type === 'microscopic' && '🔬 ' + (lang === 'hu' ? 'Mikroszkóp' : lang === 'de' ? 'Mikroskop' : 'Microscopy')}
                            {selectedMediaItem.type === 'imaging' && '📸 ' + (lang === 'hu' ? 'Képalkotás' : lang === 'de' ? 'Bildgebung' : 'Imaging')}
                            {selectedMediaItem.type === 'diagram' && '📊 ' + (lang === 'hu' ? 'Ábra' : lang === 'de' ? 'Diagramm' : 'Diagram')}
                            {selectedMediaItem.type === 'procedure' && '🎥 ' + (lang === 'hu' ? 'Eljárás' : lang === 'de' ? 'Verfahren' : 'Procedure')}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                            ID: {selectedMediaItem.id}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-serif font-black text-xl text-slate-900 leading-tight">
                            {selectedMediaItem.title[lang]}
                          </h4>
                          <p className="text-xs font-bold text-slate-500 mt-1 italic">
                            {selectedMediaItem.caption[lang]}
                          </p>
                        </div>

                        {selectedMediaItem.type === 'procedure' && selectedMediaItem.interactiveSteps && (
                          /* Current Step Details for Procedure */
                          <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-4 space-y-2 animate-fade-in-up">
                            <h5 className="font-serif font-bold text-slate-800 text-sm flex items-center gap-1.5">
                              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center">
                                {activeProcedureStep + 1}
                              </span>
                              {selectedMediaItem.interactiveSteps[activeProcedureStep].title[lang]}
                            </h5>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {selectedMediaItem.interactiveSteps[activeProcedureStep].description[lang]}
                            </p>
                          </div>
                        )}

                        <div className="space-y-2">
                          <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                            {lang === 'hu' ? 'Klinikai összefoglalás' : 'Clinical Summary'}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {selectedMediaItem.description[lang]}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 pt-6 border-t border-slate-100">
                        {/* Go to Disease link */}
                        {selectedMediaItem.diseaseId && (
                          <button
                            onClick={() => {
                              // Find disease in DB
                              const catKey = Object.keys(currentDb).find(k => 
                                currentDb[k]?.diseases.some(d => d.id === selectedMediaItem.diseaseId)
                              );
                              if (catKey) {
                                setActiveCategoryKey(catKey);
                                setActiveDiseaseId(selectedMediaItem.diseaseId);
                                setIsMediaModalOpen(false);
                                setSelectedMediaItem(null);
                                setActiveDetailTab('info');
                              }
                            }}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer animate-pulse"
                          >
                            <BookOpen className="w-4 h-4 text-slate-400" />
                            <span>{lang === 'hu' ? 'Ugrás a betegségre a tankönyvben ➔' : lang === 'de' ? 'Zur Krankheit im Lehrbuch ➔' : 'Go to Disease in Textbook ➔'}</span>
                          </button>
                        )}

                        <button
                          onClick={() => {
                            setSelectedMediaItem(null);
                            setActiveProcedureStep(0);
                          }}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors border border-slate-200 cursor-pointer"
                        >
                          {lang === 'hu' ? 'Vissza a képtárhoz' : lang === 'de' ? 'Zurück zur Mediathek' : 'Back to Gallery'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Grid view mode */
                  <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#FAF9F6]">
                    {/* Media Sidebar Filters */}
                    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 p-5 flex flex-col space-y-5 flex-shrink-0">
                      {/* Search Bar */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {lang === 'hu' ? 'Keresés a képtárban' : 'Search Gallery'}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder={lang === 'hu' ? 'Keresés...' : 'Search...'}
                            value={mediaSearchQuery}
                            onChange={(e) => setMediaSearchQuery(e.target.value)}
                            className="w-full px-3 py-2 pl-9 rounded-lg bg-white border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                          />
                          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {lang === 'hu' ? 'Témakör' : 'Category'}
                        </label>
                        <div className="flex flex-col gap-1">
                          {[
                            { key: 'all', label: lang === 'hu' ? 'Mindegyik' : 'All' },
                            { key: 'cns', label: lang === 'hu' ? '🧠 Idegrendszer' : '🧠 CNS' },
                            { key: 'hepatitis', label: lang === 'hu' ? '🧬 Vírushepatitis' : '🧬 Hepatitis' },
                            { key: 'gi', label: lang === 'hu' ? '🦠 Emésztőrendszer' : '🦠 GI Tract' },
                            { key: 'urinary', label: lang === 'hu' ? '🚽 Húgyutak' : '🚽 Urinary' },
                            { key: 'procedures', label: lang === 'hu' ? '🔬 Labor / Eljárások' : '🔬 Lab / Procedures' }
                          ].map((cat) => (
                            <button
                              key={cat.key}
                              onClick={() => setActiveMediaCategory(cat.key)}
                              className={`text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                activeMediaCategory === cat.key
                                  ? 'bg-amber-700 text-white shadow-xs'
                                  : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-800'
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {lang === 'hu' ? 'Média Típusa' : 'Media Type'}
                        </label>
                        <div className="flex flex-col gap-1">
                          {[
                            { key: 'all', label: lang === 'hu' ? 'Összes' : 'All' },
                            { key: 'microscopic', label: lang === 'hu' ? '🔬 Mikroszkóp / Kenet' : '🔬 Microscopy / Smear' },
                            { key: 'imaging', label: lang === 'hu' ? '📸 Képalkotás' : '📸 Imaging' },
                            { key: 'diagram', label: lang === 'hu' ? '📊 Ábra / Grafikon' : '📊 Diagram / Curve' },
                            { key: 'procedure', label: lang === 'hu' ? '🎥 Interaktív Eljárás' : '🎥 Interactive Procedure' }
                          ].map((tFilter) => (
                            <button
                              key={tFilter.key}
                              onClick={() => setActiveMediaType(tFilter.key)}
                              className={`text-left px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                activeMediaType === tFilter.key
                                  ? 'bg-amber-600/20 text-amber-800 border border-amber-500/20 shadow-xs'
                                  : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-800'
                              }`}
                            >
                              {tFilter.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Media Library Bento Grid */}
                    <div className="flex-1 p-6 overflow-y-auto scroll-area space-y-6">
                      {/* Grid Items */}
                      {(() => {
                        const filtered = mediaLibraryItems.filter(item => {
                          if (activeMediaCategory !== 'all' && item.category !== activeMediaCategory) return false;
                          if (activeMediaType !== 'all' && item.type !== activeMediaType) return false;
                          if (mediaSearchQuery) {
                            const q = mediaSearchQuery.toLowerCase();
                            const matchesTitle = item.title[lang].toLowerCase().includes(q);
                            const matchesDesc = item.description[lang].toLowerCase().includes(q);
                            const matchesCaption = item.caption[lang].toLowerCase().includes(q);
                            return matchesTitle || matchesDesc || matchesCaption;
                          }
                          return true;
                        });

                        if (filtered.length === 0) {
                          return (
                            <div className="h-64 flex flex-col items-center justify-center text-center p-8">
                              <span className="text-4xl mb-3">🔍</span>
                              <h4 className="font-serif font-bold text-slate-800 text-lg">
                                {lang === 'hu' ? 'Nincs találat a képtárban' : 'No media found'}
                              </h4>
                              <p className="text-slate-500 text-xs mt-1 max-w-xs">
                                {lang === 'hu' ? 'Módosítsa a szűrési feltételeket vagy a keresőszót!' : 'Try modifying your filters or search term.'}
                              </p>
                            </div>
                          );
                        }

                        return (
                          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((item) => (
                              <div
                                key={item.id}
                                onClick={() => {
                                  setSelectedMediaItem(item);
                                  setActiveProcedureStep(0);
                                }}
                                className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-500 transition-all cursor-pointer flex flex-col justify-between"
                              >
                                {/* Item Visual Area */}
                                <div className="h-44 bg-slate-950 flex items-center justify-center relative overflow-hidden">
                                  {item.type === 'procedure' ? (
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center text-center p-4">
                                      <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mb-3 text-amber-500 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                                        <Play className="w-5 h-5 fill-amber-500/20" />
                                      </div>
                                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{lang === 'hu' ? 'Interaktív labor' : 'Interactive Lab'}</span>
                                    </div>
                                  ) : (
                                    <img
                                      src={item.url}
                                      alt={item.title[lang]}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      referrerPolicy="no-referrer"
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <Eye className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                                  </div>

                                  {/* Type Tag Badge */}
                                  <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/75 text-white/90 backdrop-blur-xs">
                                    {item.type === 'microscopic' && '🔬 Smear'}
                                    {item.type === 'imaging' && '📸 Imaging'}
                                    {item.type === 'diagram' && '📊 Chart'}
                                    {item.type === 'procedure' && '🎥 Proc'}
                                  </span>
                                </div>

                                {/* Content Details */}
                                <div className="p-4 flex-1 flex flex-col justify-between space-y-3.5 bg-white border-t border-slate-100">
                                  <div>
                                    <h5 className="font-serif font-bold text-slate-800 text-sm group-hover:text-amber-700 transition-colors line-clamp-1">
                                      {item.title[lang]}
                                    </h5>
                                    <p className="text-[10px] text-slate-500 italic mt-0.5 line-clamp-1">
                                      {item.caption[lang]}
                                    </p>
                                    <p className="text-[11px] text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                                      {item.description[lang]}
                                    </p>
                                  </div>

                                  {/* Action indicator */}
                                  <div className="flex items-center justify-between pt-2.5 border-t border-slate-100/60 text-[10px] font-bold text-amber-600">
                                    <span>
                                      {item.type === 'procedure' ? (lang === 'hu' ? 'Szimulátor indítása' : 'Launch Simulator') : (lang === 'hu' ? 'Megtekintés nagyban' : 'Full Zoom')}
                                    </span>
                                    <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end flex-shrink-0">
                <button
                  onClick={() => {
                    setIsMediaModalOpen(false);
                    setSelectedMediaItem(null);
                  }}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  {currentTranslations.share_close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  </>
);

  // Procedure interactive vector graphics engine
  function renderProcedureGraphic(graphic: string, stepIndex: number) {
    // Switch on graphic key to show gorgeous animations
    switch (graphic) {
      // Gram stain step 1: Fixation
      case 'heat_fix':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Bunsen Burner body */}
            <rect x="180" y="160" width="40" height="60" rx="3" fill="#475569" />
            <path d="M170 220 H230" stroke="#475569" strokeWidth="6" strokeLinecap="round" />
            <rect x="195" y="120" width="10" height="40" fill="#94a3b8" />
            {/* Flame */}
            <path d="M200 60 C215 90 200 120 200 120 C200 120 185 90 200 60 Z" fill="#38bdf8" className="animate-pulse" opacity="0.85" />
            <path d="M200 80 C208 100 200 120 200 120 C200 120 192 100 200 80 Z" fill="#0284c7" className="animate-bounce" />
            {/* Glass Slide passing through flame */}
            <g className="animate-pulse" style={{ animationDuration: '3s' }}>
              <rect x="100" y="85" width="200" height="15" rx="2" fill="#cbd5e1" opacity="0.4" stroke="#94a3b8" strokeWidth="1.5" />
              {/* Bacteria smear spot */}
              <ellipse cx="200" cy="92.5" rx="15" ry="4" fill="#f43f5e" opacity="0.3" />
              {/* Tweezers holding slide */}
              <path d="M80 90 L120 90" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
            </g>
            <text x="200" y="30" fill="#94a3b8" fontSize="11" fontFamily="monospace" textAnchor="middle" className="animate-pulse">
              {lang === 'hu' ? 'A KENET RÖGZÍTÉSE LÁNG FELETT...' : 'HEAT FIXING THE SMEAR...'}
            </text>
          </svg>
        );

      // Gram stain step 2: Crystal Violet
      case 'crystal_violet':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Slide */}
            <rect x="100" y="110" width="200" height="20" rx="2" fill="#7c3aed" opacity="0.8" stroke="#5b21b6" strokeWidth="2" />
            {/* Liquid drop effect */}
            <circle cx="200" cy="70" r="6" fill="#8b5cf6" className="animate-bounce" />
            <path d="M197 75 L203 75 L200 110 Z" fill="#8b5cf6" opacity="0.6" />
            {/* Bottle */}
            <g transform="translate(170, 20)">
              <rect x="10" y="10" width="40" height="30" rx="4" fill="#1e1b4b" />
              <rect x="23" y="0" width="14" height="10" fill="#312e81" />
              <text x="30" y="30" fill="#8b5cf6" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">C.V.</text>
            </g>
            {/* Magnifying bubble */}
            <circle cx="80" cy="180" r="35" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="80" cy="180" r="32" fill="#0f172a" />
            {/* Bacteria turning purple */}
            <circle cx="70" cy="175" r="4" fill="#8b5cf6" />
            <circle cx="80" cy="190" r="4.5" fill="#8b5cf6" />
            <circle cx="92" cy="172" r="4" fill="#8b5cf6" />
            <rect x="65" y="185" width="12" height="4" rx="2" fill="#8b5cf6" />
            <rect x="85" y="178" width="14" height="4.5" rx="2.2" fill="#8b5cf6" />
            <text x="200" y="220" fill="#a78bfa" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Kristályibolya öntése (Minden baktérium lila lesz)' : 'Adding Crystal Violet (All cells turn purple)'}
            </text>
          </svg>
        );

      // Gram stain step 3: Iodine
      case 'iodine':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Slide */}
            <rect x="100" y="110" width="200" height="20" rx="2" fill="#4c1d95" opacity="0.9" stroke="#311042" strokeWidth="2" />
            {/* Iodine drops */}
            <circle cx="200" cy="70" r="5" fill="#d97706" className="animate-bounce" />
            {/* Dropper */}
            <g transform="translate(180, 15)">
              <rect x="12" y="10" width="16" height="35" fill="#1e293b" />
              <rect x="17" y="0" width="6" height="10" fill="#94a3b8" />
              <path d="M15 45 L20 52 L25 45 Z" fill="#d97706" />
            </g>
            {/* Molecules locking on bacteria */}
            <circle cx="80" cy="180" r="35" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
            <circle cx="80" cy="180" r="32" fill="#0f172a" />
            {/* Complexes */}
            <g stroke="#f59e0b" strokeWidth="1" fill="none">
              <circle cx="70" cy="175" r="4" fill="#4c1d95" />
              <path d="M66 175 H74 M70 171 V179" />
              <circle cx="80" cy="190" r="4.5" fill="#4c1d95" />
              <path d="M75 190 H85 M80 185 V195" />
              <rect x="75" y="170" width="12" height="4" rx="2" fill="#4c1d95" />
            </g>
            <text x="200" y="220" fill="#fbbf24" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Lugol pác adása (CV-I komplex képződés)' : 'Adding Iodine Mordant (CV-I complexes lock-in)'}
            </text>
          </svg>
        );

      // Gram stain step 4: Decolorization
      case 'decolor':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Slide (Tilted) */}
            <g transform="rotate(10 200 120)">
              <rect x="100" y="110" width="200" height="20" rx="2" fill="#1e293b" opacity="0.9" stroke="#0f172a" strokeWidth="2" />
              {/* Dripping alcohol washing away dye */}
              <path d="M280 120 L290 150" stroke="#a78bfa" strokeWidth="2.5" opacity="0.6" className="animate-pulse" />
            </g>
            {/* Alcohol spray bottle */}
            <g transform="translate(70, 30)">
              <rect x="10" y="20" width="30" height="50" rx="3" fill="#0891b2" />
              <path d="M20 20 L20 10 H35 L30 20 Z" fill="#64748b" />
              <path d="M35 12 Q45 15 55 18" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2,2" />
            </g>
            {/* Split magnifying bubble */}
            <circle cx="280" cy="170" r="45" fill="#1e293b" stroke="#94a3b8" strokeWidth="2.5" />
            <circle cx="280" cy="170" r="41" fill="#0f172a" />
            {/* Split line */}
            <line x1="280" y1="126" x2="280" y2="214" stroke="#475569" strokeWidth="1.5" strokeDasharray="3,3" />
            {/* Gram Positive (remains purple) */}
            <text x="252" y="145" fill="#818cf8" fontSize="8" fontWeight="bold">G+</text>
            <circle cx="255" cy="165" r="4" fill="#581c87" stroke="#8b5cf6" strokeWidth="1" />
            <circle cx="264" cy="175" r="4.5" fill="#581c87" stroke="#8b5cf6" strokeWidth="1" />
            {/* Gram Negative (decolorized/grey) */}
            <text x="295" y="145" fill="#94a3b8" fontSize="8" fontWeight="bold">G-</text>
            <rect x="292" y="160" width="13" height="4" rx="2" fill="#334155" opacity="0.6" stroke="#475569" strokeWidth="1" />
            <rect x="290" y="175" width="11" height="4" rx="2" fill="#334155" opacity="0.6" stroke="#475569" strokeWidth="1" />
            <text x="200" y="225" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Differenciálás alkohollal (Kritikus 3-5 másodperc!)' : 'Decolorization with Alcohol (Critical 3-5 seconds!)'}
            </text>
          </svg>
        );

      // Gram stain step 5: Safranin Counterstain
      case 'counterstain':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Slide */}
            <rect x="100" y="110" width="200" height="20" rx="2" fill="#1e293b" opacity="0.9" stroke="#0f172a" strokeWidth="2" />
            <rect x="140" y="113" width="110" height="14" rx="1" fill="#f43f5e" opacity="0.3" />
            {/* Safranin droppings */}
            <circle cx="200" cy="70" r="5" fill="#f43f5e" className="animate-bounce" />
            {/* Bottle */}
            <g transform="translate(175, 20)">
              <rect x="10" y="10" width="30" height="35" rx="3" fill="#991b1b" />
              <rect x="20" y="0" width="10" height="10" fill="#450a0a" />
              <text x="25" y="30" fill="#fca5a5" fontSize="7" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SAFR</text>
            </g>
            {/* Magnifying bubble */}
            <circle cx="80" cy="170" r="45" fill="#1e293b" stroke="#22c55e" strokeWidth="3" />
            <circle cx="80" cy="170" r="41" fill="#0f172a" />
            {/* Gram Positive: purple cocci */}
            <circle cx="55" cy="160" r="4" fill="#581c87" stroke="#a78bfa" strokeWidth="1.2" />
            <circle cx="65" cy="155" r="4" fill="#581c87" stroke="#a78bfa" strokeWidth="1.2" />
            <circle cx="58" cy="170" r="4.5" fill="#581c87" stroke="#a78bfa" strokeWidth="1.2" />
            {/* Gram Negative: pink rods */}
            <rect x="80" y="160" width="14" height="4.5" rx="2.2" fill="#991b1b" stroke="#f43f5e" strokeWidth="1.2" />
            <rect x="90" y="172" width="12" height="4" rx="2" fill="#991b1b" stroke="#f43f5e" strokeWidth="1.2" />
            <rect x="75" y="180" width="13" height="4.2" rx="2.1" fill="#991b1b" stroke="#f43f5e" strokeWidth="1.2" />
            <text x="200" y="225" fill="#f43f5e" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Szafranin ellenfestés (A Gram-negatívak rózsaszínűek!)' : 'Safranin Counterstain (Gram-negatives turn pink!)'}
            </text>
          </svg>
        );

      // Lumbar Puncture step 1: Patient Positioning
      case 'positioning':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Patient curved silhouette */}
            <path d="M120 180 C80 150 90 80 160 60 C240 40 280 100 260 170 C250 200 210 220 180 200" stroke="#e2e8f0" strokeWidth="15" strokeLinecap="round" opacity="0.3" />
            {/* Spine skeleton highlighted line */}
            <path d="M135 155 C110 130 115 90 165 75 C215 60 245 100 235 155" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" strokeDasharray="5,5" />
            {/* Needle insertion point circle glow */}
            <circle cx="215" cy="140" r="14" fill="#ef4444" opacity="0.2" className="animate-pulse" />
            <circle cx="215" cy="140" r="5" fill="#ef4444" />
            <path d="M215 140 L260 140" stroke="#f87171" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="285" y="144" fill="#fbbf24" fontSize="10" fontWeight="bold">L3-L4 / L4-L5</text>
            <text x="200" y="215" fill="#cbd5e1" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Beteg elhelyezése: Maximális lumbális kyphosis' : 'Patient Position: Maximal lumbar kyphosis ("fetal pose")'}
            </text>
          </svg>
        );

      // Lumbar Puncture step 2: Sterilization
      case 'sterilize':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Skin patch */}
            <path d="M100 120 C100 60 300 60 300 120 C300 180 100 180 100 120 Z" fill="#fda4af" opacity="0.2" stroke="#f43f5e" strokeWidth="1.5" />
            {/* Sterile wiping circles */}
            <circle cx="200" cy="120" r="50" fill="none" stroke="#d97706" strokeWidth="4" opacity="0.4" className="animate-pulse" />
            <circle cx="200" cy="120" r="30" fill="none" stroke="#d97706" strokeWidth="4" opacity="0.6" />
            {/* Swab tool */}
            <g transform="translate(140, 60)" className="animate-bounce">
              <rect x="5" y="0" width="8" height="60" fill="#e2e8f0" />
              <circle cx="9" cy="60" r="12" fill="#d97706" opacity="0.9" />
              <text x="15" y="-5" fill="#94a3b8" fontSize="8">SWAB</text>
            </g>
            {/* Anatomical reference line (Tuffier's) */}
            <line x1="120" y1="150" x2="280" y2="150" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,4" />
            <text x="285" y="153" fill="#fbbf24" fontSize="9" fontWeight="bold">{lang === 'hu' ? 'Tuffier-vonal (L4)' : 'Tuffier\'s line (L4)'}</text>
            <text x="200" y="215" fill="#d97706" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Bőrfertőtlenítés és anatómiai tájékozódási pontok tapintása' : 'Skin Sterilization & Palpation of Anatomical Landmarks'}
            </text>
          </svg>
        );

      // Lumbar Puncture step 3: Anesthesia
      case 'anesthesia':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Skin level */}
            <path d="M80 160 Q200 145 320 160" stroke="#f43f5e" strokeWidth="4" />
            {/* Syringe needle injecting */}
            <g transform="translate(170, 40)">
              <rect x="23" y="10" width="14" height="60" fill="#94a3b8" opacity="0.5" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="27" y="0" width="6" height="15" fill="#64748b" />
              {/* Plunger */}
              <line x1="30" y1="-10" x2="30" y2="25" stroke="#cbd5e1" strokeWidth="4" />
              <circle cx="30" cy="-12" r="6" fill="#cbd5e1" />
              {/* Metal needle */}
              <line x1="30" y1="70" x2="30" y2="115" stroke="#94a3b8" strokeWidth="2.5" />
            </g>
            {/* Local anesthetic expanding circle */}
            <circle cx="200" cy="155" r="22" fill="#06b6d4" opacity="0.35" className="animate-pulse" />
            <circle cx="200" cy="155" r="4" fill="#06b6d4" />
            <text x="200" y="215" fill="#22d3ee" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'Lidocain befecskendezése (Bőr és mély szövetek)' : 'Lidocaine Injection (Skin & deep tissues infiltration)'}
            </text>
          </svg>
        );

      // Lumbar Puncture step 4: Needle insertion & POP
      case 'needle_insert':
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Cross section vertebrae blocks */}
            <rect x="80" y="50" width="60" height="50" rx="4" fill="#475569" stroke="#334155" strokeWidth="2" />
            <text x="110" y="80" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">L3</text>
            <rect x="80" y="135" width="60" height="50" rx="4" fill="#475569" stroke="#334155" strokeWidth="2" />
            <text x="110" y="165" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">L4</text>
            {/* Spinal ligamentum flavum (yellow band) */}
            <rect x="180" y="40" width="10" height="155" fill="#eab308" opacity="0.9" />
            {/* Spinal Dural Sac with fluid */}
            <rect x="210" y="40" width="110" height="155" fill="#38bdf8" opacity="0.25" />
            <text x="265" y="120" fill="#0284c7" fontSize="10" fontWeight="bold" textAnchor="middle" className="animate-pulse">CSF / LIQUOR</text>
            {/* Spinal Needle entering */}
            <g className="animate-pulse" style={{ animationDuration: '4s' }}>
              <line x1="320" y1="115" x2="190" y2="115" stroke="#94a3b8" strokeWidth="3" />
              <polygon points="190,111 182,115 190,119" fill="#94a3b8" />
              <rect x="315" y="108" width="15" height="14" rx="2" fill="#ef4444" />
            </g>
            {/* Burst animation showing piercing Ligamentum Flavum */}
            <g transform="translate(185, 115)" className="animate-ping">
              <circle cx="0" cy="0" r="15" fill="none" stroke="#ef4444" strokeWidth="2" />
            </g>
            <text x="185" y="100" fill="#f87171" fontSize="11" fontWeight="black" textAnchor="middle" className="animate-bounce">POP!</text>
            <text x="200" y="215" fill="#cbd5e1" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {lang === 'hu' ? 'A sárga szalag és a dura átfúrásakor fellépő ellenállás-csökkenés (pukkanás)' : 'Tactile sensation of crossing the ligamentum flavum ("give" or "pop")'}
            </text>
          </svg>
        );

      // Lumbar Puncture step 5: CSF Dripping
      case 'csf_dripping':
        const isMeningitis = selectedMediaItem?.id?.includes('meningitis') || disease?.id === 'bacterial_meningitis';
        const fluidColor = isMeningitis ? '#fbbf24' : '#38bdf8'; // Purulent vs crystal clear
        return (
          <svg className="w-full h-48 md:h-64" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Spinal Needle Hub */}
            <rect x="80" y="90" width="80" height="15" fill="#94a3b8" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="80" cy="97.5" r="10" fill="#e2e8f0" />
            {/* Dripping drops */}
            <ellipse cx="60" cy="115" rx="3.5" ry="5.5" fill={fluidColor} className="animate-bounce" style={{ animationDuration: '1.2s' }} />
            {/* Test tube collecting fluid */}
            <g transform="translate(45, 135)">
              <rect x="0" y="0" width="30" height="60" rx="15" fill="#cbd5e1" opacity="0.3" stroke="#94a3b8" strokeWidth="2" />
              {/* Collected fluid inside tube */}
              <rect x="2" y="30" width="26" height="26" rx="13" fill={fluidColor} opacity="0.6" />
              <text x="15" y="-6" fill="#cbd5e1" fontSize="8" fontWeight="bold" textAnchor="middle">TUBE 1</text>
            </g>
            {/* Microscopic slide view bubble showing cells count */}
            <circle cx="280" cy="110" r="45" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2.5" />
            <circle cx="280" cy="110" r="41" fill="#0f172a" />
            {isMeningitis ? (
              // Purulent CSF: high WBCs and bacteria
              <g>
                <text x="280" y="82" fill="#fbbf24" fontSize="8" fontWeight="black" textAnchor="middle" className="animate-pulse">PURULENT</text>
                {/* Granulocytes (segmented nuclei) */}
                <ellipse cx="265" cy="110" rx="7" ry="5" fill="#94a3b8" opacity="0.4" stroke="#60a5fa" />
                <circle cx="263" cy="110" r="1.5" fill="#1d4ed8" />
                <circle cx="267" cy="111" r="1.5" fill="#1d4ed8" />
                <ellipse cx="295" cy="115" rx="7" ry="5" fill="#94a3b8" opacity="0.4" stroke="#60a5fa" />
                <circle cx="293" cy="115" r="1.5" fill="#1d4ed8" />
                {/* Small diplococci rods */}
                <circle cx="280" cy="125" r="2" fill="#ef4444" />
                <circle cx="283" cy="125" r="2" fill="#ef4444" />
                <circle cx="255" cy="125" r="1.8" fill="#ef4444" />
                <circle cx="257" cy="123" r="1.8" fill="#ef4444" />
              </g>
            ) : (
              // Normal CSF: Crystal clear, no cells
              <g>
                <text x="280" y="82" fill="#60a5fa" fontSize="8" fontWeight="black" textAnchor="middle">CLEAR (LIMPID)</text>
                <circle cx="280" cy="115" r="10" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="3,3" />
                <text x="280" y="118" fill="#475569" fontSize="8" textAnchor="middle">No WBC</text>
              </g>
            )}
            <text x="200" y="215" fill={fluidColor} fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
              {isMeningitis 
                ? (lang === 'hu' ? 'A liquor opálos/zavaros (gennyes) – Magas PMN és fehérje, alacsony cukor!' : 'Turbid/purulent CSF – High PMN and protein, low glucose!')
                : (lang === 'hu' ? 'A liquor tiszta, víztiszta („forrásvíz-szerű”)' : 'Cerebrospinal fluid is crystal clear ("like spring water")')}
            </text>
          </svg>
        );

      default:
        return (
          <div className="text-slate-400 text-xs font-mono">
            Graphic: {graphic}
          </div>
        );
    }
  }

  // Detail View sub-renders to prevent giant block issues
  function selectDisease(id: string) {
    setActiveDiseaseId(id);
    setActiveDetailTab('info');
  }

  function renderDidacticsView(disease: Disease) {
    const d = disease.didactics;
    if (!d) return null;
    return (
      <div className="space-y-6 animate-fade-in-up">
        {/* Overview */}
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-serif font-bold text-natural-dark mb-3 flex items-center gap-2">
            <span className="text-emerald-600">📖</span>
            {currentTranslations.didactics}
          </h3>
          <p className="text-natural-text leading-relaxed text-sm font-normal">
            {Array.isArray(d.overview) ? d.overview.join(' ') : d.overview}
          </p>
        </div>

        {/* Lower / Upper split */}
        {(d.lower || d.upper) && (
          <div className="grid gap-4 sm:grid-cols-2">
            {d.lower && (
              <div className="bg-natural-surface p-5 rounded-xl border border-natural-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif font-bold text-base text-natural-dark mb-2 flex items-center gap-2">
                  <span>⬇️</span>
                  {lang === 'hu' ? 'Alsó húgyúti fertőzés' : lang === 'de' ? 'Untere Harnwegsinfektion' : 'Lower Urinary Tract'}
                </h4>
                <p className="text-natural-text text-sm leading-relaxed font-normal">
                  {Array.isArray(d.lower) ? d.lower.join(' ') : d.lower}
                </p>
              </div>
            )}
            {d.upper && (
              <div className="bg-[#FAF9F3] p-5 rounded-xl border border-[#EAE7DC] shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif font-bold text-base text-natural-dark mb-2 flex items-center gap-2">
                  <span>⬆️</span>
                  {lang === 'hu' ? 'Felső húgyúti fertőzés' : lang === 'de' ? 'Obere Harnwegsinfektion' : 'Upper Urinary Tract'}
                </h4>
                <p className="text-natural-text text-sm leading-relaxed font-normal">
                  {Array.isArray(d.upper) ? d.upper.join(' ') : d.upper}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Diagnostics & Red flags */}
        {(d.diagnostics || d.red_flags) && (
          <div className="grid gap-4 sm:grid-cols-2">
            {d.diagnostics && (
              <div className="bg-white p-5 rounded-xl border border-natural-border/60 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif font-bold text-base text-natural-dark mb-3 flex items-center gap-2">
                  <span className="text-natural-accent">🔬</span>
                  {currentTranslations.diagnostics}
                </h4>
                <ul className="space-y-2 text-natural-text text-sm font-normal">
                  {d.diagnostics.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-natural-primary font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {d.red_flags && (
              <div className="bg-white p-5 rounded-xl border border-natural-border/60 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif font-bold text-base text-natural-dark mb-3 flex items-center gap-2">
                  <span className="text-[#A85A42]">⚠️</span>
                  {lang === 'hu' ? 'Vörös Zászlók' : lang === 'de' ? 'Rote Flaggen' : 'Red Flags'}
                </h4>
                <ul className="space-y-2 text-natural-text text-sm font-normal">
                  {d.red_flags.map((i, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-natural-accent font-bold">•</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Special populations */}
        {d.special_populations && (
          <div className="bg-natural-surface/50 p-5 rounded-xl border border-natural-border shadow-sm">
            <h4 className="font-serif font-bold text-base text-natural-dark mb-2 flex items-center gap-2">
              <span>👥</span>
              {currentTranslations.risk_groups}
            </h4>
            <p className="text-natural-text text-sm leading-relaxed font-normal">
              {d.special_populations}
            </p>
          </div>
        )}

        {/* Teaching tip */}
        {d.teaching_tip && (
          <div className="bg-natural-widget/30 p-5 rounded-xl border border-natural-border/60 shadow-sm italic">
            <h4 className="font-serif font-bold text-base text-[#5D6D4F] not-italic mb-2 flex items-center gap-2">
              <span>💡</span>
              {currentTranslations.didactics_tip}
            </h4>
            <p className="text-natural-text text-sm leading-relaxed font-normal">
              {Array.isArray(d.teaching_tip) ? d.teaching_tip.join(' ') : d.teaching_tip}
            </p>
          </div>
        )}
      </div>
    );
  }

  function renderCategoryTablesContent() {
    const category = currentDb[activeCategoryKey];
    if (!category || !category.tables || category.tables.length === 0) return null;

    return (
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scroll-area print:overflow-visible print:p-0 print:space-y-8 print:bg-white" style={{ '--content-font-size-adjust': fontSizeScale } as React.CSSProperties}>
        {/* Printable Academic Header */}
        <div className="hidden print:block border-b-2 border-natural-dark pb-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="font-serif text-2xl font-black text-natural-dark tracking-tight">
                {lang === 'hu' ? 'PÉCSI TUDOMÁNYEGYETEM' : lang === 'de' ? 'UNIVERSITÄT PÉCS' : 'UNIVERSITY OF PÉCS'}
              </h1>
              <p className="text-xs font-bold text-natural-muted uppercase tracking-widest mt-1">
                {lang === 'hu' ? 'Általános Orvostudományi Kar • Infektológiai Tanszék' : lang === 'de' ? 'Medizinische Fakultät • Klinik für Infektiologie' : 'Medical School • Department of Infectology'}
              </p>
            </div>
            <span className="text-[10px] font-mono text-natural-muted uppercase bg-natural-surface border border-natural-border px-2.5 py-1 rounded">
              {lang === 'hu' ? 'Hivatalos Tananyag' : lang === 'de' ? 'Offizielles Lehrmaterial' : 'Official Courseware'}
            </span>
          </div>
          <div className="mt-4 flex justify-between text-[11px] text-natural-muted font-bold">
            <span>{currentTranslations.categories}: {category.name}</span>
            <span>{lang === 'hu' ? 'Dátum' : lang === 'de' ? 'Datum' : 'Date'}: {new Date().toLocaleDateString(lang === 'hu' ? 'hu-HU' : lang === 'de' ? 'de-DE' : 'en-US')}</span>
          </div>
        </div>

        {/* Header section with Title and Interactive Filter */}
        <div className="pb-6 border-b border-natural-border flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white mb-2 inline-block shadow-sm"
              style={{ backgroundColor: category.color || '#dc2626' }}
            >
              {category.name}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-natural-dark leading-tight flex items-center gap-2">
              <Table2 className="w-6 h-6 text-amber-600" />
              {lang === 'hu' ? 'Klinikai Differenciáldiagnosztikai Táblázatok' : lang === 'de' ? 'Klinische Differenzialdiagnostische Tabellen' : 'Clinical Differential Diagnosis Tables'}
            </h2>
            <p className="text-xs text-natural-muted mt-1 font-sans">
              {lang === 'hu' 
                ? 'Tekintse át a kategóriába tartozó kórokozók összehasonlító diagnosztikai szempontjait.' 
                : lang === 'de' 
                ? 'Überprüfen Sie die vergleichenden diagnostischen Aspekte der Erreger in dieser Kategorie.' 
                : 'Review comparative diagnostic aspects of the pathogens in this category.'}
            </p>
          </div>

          {/* Table Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={tableSearchQuery}
              onChange={(e) => setTableSearchQuery(e.target.value)}
              placeholder={
                lang === 'hu'
                  ? 'Keresés a táblázatban...'
                  : lang === 'de'
                  ? 'In der Tabelle suchen...'
                  : 'Search in table...'
              }
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-natural-border rounded-xl focus:outline-none focus:ring-2 focus:ring-natural-accent/20 focus:border-natural-accent transition-all font-sans text-slate-800 shadow-sm"
            />
            {tableSearchQuery && (
              <button
                onClick={() => setTableSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Tables */}
        {category.tables.map((t, tIdx) => {
          // Filter rows based on search
          const filteredRows = t.rows.filter(row => {
            if (!tableSearchQuery) return true;
            const q = tableSearchQuery.toLowerCase();
            return row.some(cell => cell.toLowerCase().includes(q));
          });

          return (
            <div key={tIdx} className="space-y-4 animate-fade-in-up">
              <div className="flex justify-between items-center">
                <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark pb-1 border-b border-natural-border/60">
                  {t.title}
                </h3>
                {tableSearchQuery && (
                  <span className="text-xs font-mono bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-full shadow-sm print:hidden">
                    {lang === 'hu' ? `${filteredRows.length} találat` : lang === 'de' ? `${filteredRows.length} Treffer` : `${filteredRows.length} results`}
                  </span>
                )}
              </div>

              <div className="overflow-x-auto rounded-2xl border border-natural-border shadow-md bg-white">
                <table className="w-full text-left border-collapse text-sm bg-white">
                  <thead>
                    <tr className="bg-slate-50 border-b border-natural-border">
                      {t.headers.map((h, i) => (
                        <th 
                          key={i} 
                          className="p-3.5 font-bold text-slate-700 font-sans text-xs uppercase tracking-wider border-r border-natural-border/40 whitespace-nowrap"
                          style={{ borderBottom: `2px solid ${category.color || '#3b82f6'}` }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRows.length === 0 ? (
                      <tr>
                        <td colSpan={t.headers.length} className="p-8 text-center text-slate-400 italic">
                          {lang === 'hu' ? 'Nincs a keresési feltételnek megfelelő sor.' : lang === 'de' ? 'Keine Zeilen entsprechen den Suchkriterien.' : 'No rows match the search query.'}
                        </td>
                      </tr>
                    ) : (
                      filteredRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#FAF9F3] transition-colors odd:bg-slate-50/30">
                          {row.map((cell, cIdx) => (
                            <td 
                              key={cIdx} 
                              className="p-3.5 border-b border-r border-natural-border/40 text-slate-800 text-xs md:text-sm leading-relaxed font-sans"
                              dangerouslySetInnerHTML={{ __html: cell }}
                            />
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function renderTableView(disease: Disease) {
    const t = disease.table;
    if (!t) return null;
    return (
      <div className="space-y-4 overflow-x-auto rounded-xl border border-natural-border shadow-sm animate-fade-in-up bg-white">
        <table className="w-full text-left border-collapse text-sm bg-white">
          <thead>
            <tr className="bg-natural-surface border-b border-natural-border">
              {t.headers.map((h, i) => (
                <th key={i} className="p-3 font-semibold text-natural-muted font-sans text-xs uppercase tracking-wider border border-natural-border/50 whitespace-nowrap bg-natural-surface/80">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-[#FAF9F3] transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-3.5 border border-natural-border/50 text-natural-text text-sm leading-relaxed font-normal">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function renderTabsView(disease: Disease) {
    return (
      <div className="space-y-8 animate-fade-in-up pb-12">
        {/* Comparison Tables for Viral Hepatitis on Hepatitis A (hav) page */}
        {disease.id === 'hav' && (() => {
          const category = currentDb['viral_hepatitis'];
          if (!category || !category.tables || category.tables.length === 0) return null;
          return (
            <div className="space-y-6">
              {category.tables.map((table, tIdx) => (
                <div key={tIdx} className="space-y-4 bg-amber-50/15 border border-amber-200/50 p-5 rounded-2xl shadow-xs print:bg-white print:border-none print:p-0">
                  <div className="flex items-center gap-2 text-amber-950">
                    <Table2 className="w-5 h-5 text-amber-600 shrink-0 print:hidden" />
                    <h4 className="font-serif font-bold text-base md:text-lg">
                      {table.title}
                    </h4>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-natural-border bg-white shadow-2xs print:border-none print:shadow-none">
                    <table className="w-full text-left border-collapse text-xs bg-white print:text-[10px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-natural-border print:bg-transparent">
                          {table.headers.map((h, i) => (
                            <th 
                              key={i} 
                              className="p-2.5 font-bold text-slate-700 font-sans uppercase tracking-wider border-r border-natural-border/30 whitespace-nowrap print:p-1.5"
                              style={{ borderBottom: `2px solid ${category.color || '#eab308'}` }}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-[#FAF9F3] transition-colors odd:bg-slate-50/10 print:bg-transparent">
                            {row.map((cell, cIdx) => (
                              <td 
                                key={cIdx} 
                                className="p-2.5 border-b border-r border-natural-border/30 text-slate-800 leading-relaxed font-sans print:p-1.5" 
                                dangerouslySetInnerHTML={{ __html: cell }}
                              />
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}

        {/* Comparison Table for Bacterial Pneumonia */}
        {disease.id === 'bacterial_pneumonia' && (() => {
          const category = currentDb['bacterial_respiratory'];
          const table = category?.tables?.[0];
          if (!table) return null;
          return (
            <div className="space-y-4 bg-amber-50/15 border border-amber-200/50 p-5 rounded-2xl shadow-xs print:bg-white print:border-none print:p-0">
              <div className="flex items-center gap-2 text-amber-950">
                <Table2 className="w-5 h-5 text-amber-600 shrink-0 print:hidden" />
                <h4 className="font-serif font-bold text-base md:text-lg">
                  {table.title}
                </h4>
              </div>
              <p className="text-xs text-natural-muted leading-relaxed font-sans print:hidden">
                {lang === 'hu'
                  ? 'A típusos és atípusos tüdőgyulladás fő klinikai és diagnosztikai különbségeinek összefoglalása:'
                  : lang === 'de'
                  ? 'Zusammenfassung der wichtigsten klinischen und diagnostischen Unterschiede zwischen typischer und atypischer Pneumonie:'
                  : 'Summary of key clinical and diagnostic differences between typical and atypical pneumonia:'}
              </p>
              <div className="overflow-x-auto rounded-xl border border-natural-border bg-white shadow-2xs print:border-none print:shadow-none">
                <table className="w-full text-left border-collapse text-xs bg-white print:text-[10px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-natural-border print:bg-transparent">
                      {table.headers.map((h, i) => (
                        <th 
                          key={i} 
                          className="p-2.5 font-bold text-slate-700 font-sans uppercase tracking-wider border-r border-natural-border/30 whitespace-nowrap print:p-1.5"
                          style={{ borderBottom: `2px solid ${category.color || '#06b6d4'}` }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#FAF9F3] transition-colors odd:bg-slate-50/10 print:bg-transparent">
                        {row.map((cell, cIdx) => (
                          <td 
                            key={cIdx} 
                            className="p-2.5 border-b border-r border-natural-border/30 text-slate-800 leading-relaxed font-sans print:p-1.5" 
                            dangerouslySetInnerHTML={{ __html: cell }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}

        {/* 1. Pathogen & Epidemiology */}
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark flex items-center gap-2 border-b border-natural-border pb-2.5">
            <span className="text-2xl">🦠</span> {currentTranslations.pathogen} & {currentTranslations.epidemiology}
          </h3>
          
          {/* Pathogen Detail */}
          {disease.pathogen && (
            <div className="bg-natural-surface p-5 rounded-2xl border border-natural-border shadow-sm">
              <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3.5">
                {currentTranslations.pathogen}
              </h4>
              <div className="grid gap-4 sm:grid-cols-3 text-sm">
                {disease.pathogen.type && (
                  <div className={`bg-white p-3.5 rounded-xl border transition-all ${isHighYieldMode ? 'border-amber-400/60 shadow-xs' : 'border-natural-border/40'}`}>
                    <span className="text-natural-muted font-sans text-[11px] font-semibold uppercase tracking-wider block mb-1.5">{currentTranslations.pathogen_type}</span>
                    <strong className="text-natural-dark text-sm font-medium">{disease.pathogen.type}</strong>
                  </div>
                )}
                {disease.pathogen.gram && (
                  <div className={`bg-white p-3.5 rounded-xl border transition-all ${isHighYieldMode ? 'border-amber-400 ring-2 ring-amber-300/20 bg-amber-50/5' : 'border-natural-border/40'}`}>
                    <span className="text-natural-muted font-sans text-[11px] font-semibold uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                      {isHighYieldMode && <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />}
                      {currentTranslations.gram_stain}
                    </span>
                    <strong className="text-natural-dark text-sm font-medium">{disease.pathogen.gram}</strong>
                  </div>
                )}
                {disease.pathogen.shape && (
                  <div className="bg-white p-3.5 rounded-xl border border-natural-border/40">
                    <span className="text-natural-muted font-sans text-[11px] font-semibold uppercase tracking-wider block mb-1.5">{currentTranslations.shape}</span>
                    <strong className="text-natural-dark text-sm font-medium" dangerouslySetInnerHTML={{ __html: disease.pathogen.shape }}></strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Epidemiology */}
          {disease.epidemiology && (
            <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 text-sm leading-relaxed text-natural-text">
                {disease.epidemiology.incidence && (
                  <div>
                    <strong className="font-semibold text-natural-dark">{currentTranslations.incidence}:</strong> <span className="font-normal">{disease.epidemiology.incidence}</span>
                  </div>
                )}
                {disease.epidemiology.seasonality && (
                  <div>
                    <strong className="font-semibold text-natural-dark">{currentTranslations.seasonality}:</strong> <span className="font-normal">{disease.epidemiology.seasonality}</span>
                  </div>
                )}
                {disease.epidemiology.transmission && (
                  <div className="sm:col-span-2">
                    <strong className="font-semibold text-natural-dark">{currentTranslations.transmission}:</strong> <span className="font-normal">{disease.epidemiology.transmission}</span>
                  </div>
                )}
              </div>

              {disease.epidemiology.risk_groups && disease.epidemiology.risk_groups.length > 0 && (
                <div className="pt-4 border-t border-natural-border/40">
                  <strong className="text-sm font-serif font-bold text-natural-dark block mb-2.5">{currentTranslations.risk_groups}:</strong>
                  <div className="flex flex-wrap gap-2">
                    {disease.epidemiology.risk_groups.map((group, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#FAF9F3] text-natural-dark rounded-full text-xs border border-natural-border font-semibold">{group}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 2. Pathomechanism */}
        {(disease.pathomechanism?.steps || (disease.pathomechanism?.virulence_factors && disease.pathomechanism.virulence_factors.length > 0)) && (
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark flex items-center gap-2 border-b border-natural-border pb-2.5">
              <span className="text-2xl">⚙️</span> {currentTranslations.pathogenesis}
            </h3>
            
            {disease.pathomechanism?.steps && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <div className="relative pl-4 border-l-2 border-natural-border space-y-4 ml-2">
                  {disease.pathomechanism.steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[25px] top-0 w-6 h-6 rounded-full bg-natural-widget text-natural-primary flex items-center justify-center text-[11px] font-sans font-bold border-2 border-white ring-1 ring-natural-surface">{idx + 1}</span>
                      <p className="text-natural-text text-sm leading-relaxed pl-1.5 pt-0.5 font-normal">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {disease.pathomechanism?.virulence_factors && disease.pathomechanism.virulence_factors.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3">
                  <span className="text-xl">🧬</span> {currentTranslations.virulence}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {disease.pathomechanism.virulence_factors.map((factor, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-[#FAF9F3] text-[#A85A42] rounded-lg text-xs border border-[#EAE7DC] font-semibold">{factor}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. Clinical Presentation */}
        {(disease.clinical?.symptoms || (disease.clinical?.physical_exam && disease.clinical.physical_exam.length > 0) || (disease.clinical?.complications && disease.clinical.complications.length > 0)) && (
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark flex items-center gap-2 border-b border-natural-border pb-2.5">
              <span className="text-2xl">🩺</span> {currentTranslations.symptoms} & {currentTranslations.physical}
            </h3>

            {disease.clinical?.symptoms && (
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="bg-white border border-natural-border shadow-sm rounded-xl p-4 text-center">
                    <p className="text-[11px] text-natural-muted font-sans font-semibold uppercase tracking-wider mb-1.5">{currentTranslations.incubation}</p>
                    <p className="font-bold text-natural-dark text-base font-serif">{disease.clinical.incubation || 'N/A'}</p>
                  </div>
                  <div className="bg-white border border-natural-border shadow-sm rounded-xl p-4 text-center">
                    <p className="text-[11px] text-natural-muted font-sans font-semibold uppercase tracking-wider mb-1.5">{currentTranslations.onset}</p>
                    <p className="font-bold text-natural-dark text-base font-serif">{disease.clinical.onset || 'N/A'}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {disease.clinical.symptoms.map((s, idx) => {
                    const isSevere = s.severity === 'severe';
                    const highlightThis = isHighYieldMode && isSevere;
                    return (
                      <div key={idx} className={`bg-white p-5 rounded-xl border shadow-sm flex items-start gap-3 transition-all ${highlightThis ? 'border-red-400 ring-2 ring-red-200/40 bg-red-50/5' : 'border-natural-border'}`}>
                        <span className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${getSeverityDotColor(s.severity)}`} />
                        <div>
                          <h4 className="font-serif font-bold text-natural-dark text-sm flex flex-wrap items-center gap-1.5">
                            {s.name}
                            {highlightThis && (
                              <span className="text-[9px] font-black tracking-widest uppercase bg-red-100 text-red-600 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                <Sparkles className="w-2.5 h-2.5 text-red-500 fill-red-400" />
                                {lang === 'hu' ? 'HU-Vizsga' : lang === 'de' ? 'Examen' : 'Exam Pearl'}
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-natural-text mt-1.5 leading-relaxed font-normal" dangerouslySetInnerHTML={{ __html: s.description }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {disease.clinical?.physical_exam && disease.clinical.physical_exam.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3">
                  {currentTranslations.physical}
                </h4>
                <ul className="space-y-2.5 text-sm text-natural-text font-normal">
                  {disease.clinical.physical_exam.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#88B04B] font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {disease.clinical?.complications && disease.clinical.complications.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3">
                  {currentTranslations.complications}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {disease.clinical.complications.map((c, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-natural-surface text-[#A85A42] rounded-full text-xs border border-natural-border font-semibold">{c}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. Diagnostics */}
        {(disease.diagnostics?.criteria || disease.diagnostics?.laboratory || disease.diagnostics?.imaging || disease.diagnostics?.microbiology || disease.differential) && (
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark flex items-center gap-2 border-b border-natural-border pb-2.5">
              <span className="text-2xl">🔬</span> {currentTranslations.diagnostics}
            </h3>

            {disease.diagnostics?.criteria && disease.diagnostics.criteria.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3.5">
                  <span className="text-xl">📋</span> {currentTranslations.section_diagnostic_criteria}
                </h4>
                {disease.diagnostics.criteria.map((c, idx) => (
                  <div key={idx} className="mb-4 last:mb-0">
                    <h5 className="font-serif font-semibold text-natural-dark text-sm mb-1.5">{c.name}</h5>
                    <ul className="space-y-1.5 text-sm text-natural-text list-disc pl-5 font-normal">
                      {c.items.map((i, itemIdx) => (
                        <li key={itemIdx}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {disease.diagnostics?.laboratory && disease.diagnostics.laboratory.length > 0 && (
              <div className="bg-white rounded-2xl border border-natural-border shadow-sm overflow-hidden">
                <div className="p-5 border-b border-natural-border/30 bg-[#FAF9F6]">
                  <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2">
                    {currentTranslations.lab}
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-natural-surface border-b border-natural-border">
                        <th className="p-3.5 text-xs font-sans font-semibold text-natural-muted uppercase tracking-wider">{currentTranslations.table_col_test}</th>
                        <th className="p-3.5 text-xs font-sans font-semibold text-natural-muted uppercase tracking-wider">{currentTranslations.table_col_finding}</th>
                        <th className="p-3.5 text-xs font-sans font-semibold text-natural-muted uppercase tracking-wider">{currentTranslations.table_col_interpretation}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-natural-border/30 bg-white">
                      {disease.diagnostics.laboratory.map((lab, idx) => (
                        <tr key={idx} className="hover:bg-natural-surface/35 transition-colors">
                          <td className="p-3.5 font-medium text-natural-dark text-sm">{lab.test}</td>
                          <td className="p-3.5 text-natural-primary font-semibold text-sm">{lab.finding}</td>
                          <td className="p-3.5 text-natural-muted italic text-sm">{lab.interpretation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              {disease.diagnostics?.imaging && disease.diagnostics.imaging.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                  <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3.5">
                    {currentTranslations.imaging}
                  </h4>
                  <div className="space-y-4">
                    {disease.diagnostics.imaging.map((img, idx) => (
                      <div key={idx} className="border-b border-natural-border/30 last:border-0 last:pb-0 pb-3">
                        <h5 className="font-serif font-semibold text-sm text-natural-dark">{img.modality || img.test}</h5>
                        <p className="text-sm text-natural-text font-normal mt-1 leading-relaxed">{img.finding}</p>
                        {(img.significance || img.interpretation) && (
                          <p className="text-sm text-natural-accent mt-1.5 font-semibold italic">
                            → {img.significance || img.interpretation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {disease.diagnostics?.microbiology && disease.diagnostics.microbiology.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                  <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3.5">
                    {currentTranslations.microbiology}
                  </h4>
                  <div className="space-y-4">
                    {disease.diagnostics.microbiology.map((m, idx) => (
                      <div key={idx} className="border-b border-natural-border/30 last:border-0 last:pb-0 pb-3">
                        <h5 className="font-serif font-semibold text-sm text-natural-dark">{m.test}</h5>
                        {m.finding && <p className="text-sm text-natural-text font-normal mt-1 leading-relaxed">{m.finding}</p>}
                        {m.significance && (
                          <p className="text-sm text-natural-primary mt-1.5 font-semibold italic">
                            → {m.significance}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {disease.differential && disease.differential.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-3.5">
                  {currentTranslations.differential}
                </h4>
                <div className="space-y-3">
                  {disease.differential.map((diff, idx) => (
                    <div key={idx} className="bg-[#FAF9F3] p-3.5 rounded-xl border border-natural-border">
                      <h5 className="font-serif font-semibold text-sm text-natural-dark">{diff.disease}</h5>
                      <p className="text-sm text-natural-text mt-1.5 leading-relaxed font-normal">
                        <span className="font-bold text-natural-primary mr-1">{currentTranslations.label_distinguishing}</span>
                        {diff.distinguishing}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. Therapy */}
        {disease.therapy && (
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark flex items-center gap-2 border-b border-natural-border pb-2.5">
              <span className="text-2xl">💊</span> {currentTranslations.therapy}
            </h3>

            {disease.therapy.empirical && (
              <div className="space-y-4">
                <h4 className="font-serif font-semibold text-base text-slate-800 flex items-center gap-2">
                  {currentTranslations.section_empirical_therapy}
                </h4>
                {(() => {
                  const empirical = disease.therapy.empirical;
                  const therapyGroupDetails: { [key: string]: { title: string; icon: string; color: string } } = {
                    cap_outpatient: { title: currentTranslations.therapy_titles.cap_outpatient, icon: '🏠', color: 'green' },
                    cap_inpatient: { title: currentTranslations.therapy_titles.cap_inpatient, icon: '🏥', color: 'blue' },
                    cap_icu: { title: currentTranslations.therapy_titles.cap_icu, icon: '🚨', color: 'red' },
                    hap_early: { title: currentTranslations.therapy_titles.hap_early, icon: '🏢', color: 'amber' },
                    hap_late_vap: { title: currentTranslations.therapy_titles.hap_late_vap, icon: '🌬️', color: 'purple' },
                    outpatient: { title: currentTranslations.therapy_titles.outpatient, icon: '🏠', color: 'green' },
                    inpatient: { title: currentTranslations.therapy_titles.inpatient, icon: '🏥', color: 'blue' },
                    icu: { title: currentTranslations.therapy_titles.icu, icon: '🚨', color: 'red' }
                  };

                  const groupsToRender: any[] = [];
                  Object.entries(empirical).forEach(([key, value]) => {
                    if (Array.isArray(value) && value.length > 0) {
                      const details = therapyGroupDetails[key] || { icon: '💊', color: 'slate', title: currentTranslations.therapy_titles.default };
                      groupsToRender.push({
                        key: key,
                        title: details.title,
                        drugs: value,
                        icon: details.icon,
                        color: details.color
                      });
                    } else if (value && !Array.isArray(value) && value.drugs && value.drugs.length > 0) {
                      const details = therapyGroupDetails[key] || { icon: '💊', color: 'slate', title: currentTranslations.therapy_titles.default };
                      groupsToRender.push({
                        key: key,
                        title: value.title || details.title || currentTranslations.therapy_titles.default,
                        drugs: value.drugs,
                        icon: details.icon,
                        color: details.color
                      });
                    }
                  });

                  return groupsToRender.map(group => {
                    const colors = getTherapyColorClasses(group.color);
                    const isHighYieldGroup = isHighYieldMode && (group.color === 'green' || group.color === 'blue' || group.color === 'red');
                    return (
                      <div key={group.key} className={`rounded-2xl p-5 border shadow-sm transition-all ${colors.bg} ${colors.border} ${isHighYieldGroup ? 'ring-2 ring-amber-400 border-amber-300 shadow-md bg-amber-50/5' : ''}`}>
                        <h5 className={`font-extrabold text-sm flex items-center justify-between gap-2 mb-4 pb-2 border-b border-dashed ${colors.drugBorder} ${colors.text}`}>
                          <span className="flex items-center gap-2">
                            <span className="text-xl">{group.icon}</span> {group.title}
                          </span>
                          {isHighYieldGroup && (
                            <span className="text-[9px] font-black tracking-widest uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded flex items-center gap-0.5">
                              <Sparkles className="w-2.5 h-2.5 text-amber-500 fill-amber-400" />
                              {lang === 'hu' ? 'Kulcsfontosságú' : lang === 'de' ? 'Klinischer Kernpunkt' : 'High-Yield Regimen'}
                            </span>
                          )}
                        </h5>
                        <div className="space-y-4">
                          {group.drugs.map((drug: any, drugIdx: number) => (
                            <div key={drugIdx} className="last:mb-0">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                                <span className={`font-bold text-sm ${colors.drugText}`}>{drug.drug}</span>
                                <span className={`font-mono text-xs font-black px-2.5 py-0.5 rounded-full ${colors.durationBg} ${colors.durationText}`}>
                                  {drug.dose}
                                </span>
                              </div>
                              {drug.duration && (
                                <p className={`text-xs mt-1 font-semibold flex items-center gap-1 ${colors.noteText}`}>
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  {drug.duration}
                                </p>
                              )}
                              {drug.note && <p className={`text-xs mt-1.5 leading-relaxed italic ${colors.noteText}`}>{drug.note}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            )}

            {disease.therapy.targeted && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark mb-2.5">{currentTranslations.targeted}</h4>
                <p className="text-sm text-natural-text leading-relaxed font-normal">{disease.therapy.targeted}</p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              {disease.therapy.supportive && disease.therapy.supportive.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                  <h4 className="font-serif font-semibold text-base text-natural-dark mb-3 flex items-center gap-1.5">
                    <span className="text-natural-accent text-lg">▪</span> {currentTranslations.supportive}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-natural-text list-disc pl-5 font-normal leading-relaxed">
                    {disease.therapy.supportive.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {disease.therapy.prevention && disease.therapy.prevention.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                  <h4 className="font-serif font-semibold text-base text-natural-dark mb-3 flex items-center gap-1.5">
                    <span className="text-natural-primary text-lg">▪</span> {currentTranslations.prevention}
                  </h4>
                  <ul className="space-y-1.5 text-sm text-natural-text list-disc pl-5 font-normal leading-relaxed">
                    {disease.therapy.prevention.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {disease.therapy.guidelines && disease.therapy.guidelines.length > 0 && (
              <div className="bg--[#FAF9F3] p-5 rounded-2xl border border-natural-border">
                <h4 className="font-serif font-semibold text-base text-natural-dark mb-3 flex items-center gap-2">
                  <span className="text-xl">📜</span> {currentTranslations.guidelines}
                </h4>
                <ul className="space-y-1.5 text-sm text-natural-text list-disc pl-5 font-normal leading-relaxed">
                  {disease.therapy.guidelines.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {disease.therapy.references && disease.therapy.references.length > 0 && (
              <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                <h4 className="font-serif font-semibold text-base text-natural-dark mb-3 flex items-center gap-2">
                  <span className="text-xl">📚</span> {currentTranslations.section_references}
                </h4>
                <ul className="space-y-1.5 text-sm text-natural-text list-disc pl-5 font-normal leading-relaxed">
                  {disease.therapy.references.map((item: any, idx) => {
                    if (typeof item === 'string') return <li key={idx}>{item}</li>;
                    return (
                      <li key={idx}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-natural-primary hover:underline font-semibold inline-flex items-center gap-1">
                          {item.text} <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 6. Prognosis */}
        {disease.prognosis && (
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-lg md:text-xl text-natural-dark flex items-center gap-2 border-b border-natural-border pb-2.5">
              <span className="text-2xl">🔮</span> {currentTranslations.section_prognosis}
            </h3>

            <div className="bg-natural-dark rounded-2xl p-6 text-white shadow-md flex items-center justify-between border border-natural-border">
              <div>
                <h4 className="text-xs font-bold text-[#EAE7DC] uppercase tracking-wider mb-1">
                  {currentTranslations.mortality}
                </h4>
                <p className="text-2xl font-serif font-black text-[#FAF9F3]">{disease.prognosis.mortality || 'N/A'}</p>
              </div>
              <Activity className="w-10 h-10 text-natural-primary" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {disease.prognosis.prognostic_scores && disease.prognosis.prognostic_scores.length > 0 && (
                <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                  <h4 className="font-serif font-semibold text-base text-natural-dark mb-3">
                    {currentTranslations.prognostic_scores}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {disease.prognosis.prognostic_scores.map((score, idx) => {
                      const key = Object.keys(calculators).find(k => score.toLowerCase().includes(k) || k.toLowerCase().includes(score.toLowerCase()));
                      if (key) {
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedCalcKey(key);
                              setIsScoreModalOpen(true);
                            }}
                            className="px-3 py-1.5 bg-natural-surface hover:bg-natural-widget text-natural-primary rounded-lg text-xs border border-natural-border font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                          >
                            <Calculator className="w-3.5 h-3.5" />
                            {score}
                          </button>
                        );
                      }
                      return (
                        <span key={idx} className="px-3 py-1.5 bg-[#FAF9F3] text-natural-dark rounded-lg text-xs border border-natural-border font-bold">
                          {score}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {disease.prognosis.factors && (
                <div className="bg-white p-5 rounded-2xl border border-natural-border shadow-sm">
                  <h4 className="font-serif font-semibold text-base text-natural-dark mb-2.5">
                    {currentTranslations.prognostic_factors}
                  </h4>
                  <p className="text-sm text-natural-text leading-relaxed font-normal">
                    {disease.prognosis.factors}
                  </p>
                </div>
              )}
            </div>

            {/* Gallery Section */}
            {disease.gallery && disease.gallery.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-natural-border">
                <h4 className="font-serif font-semibold text-base text-natural-dark flex items-center gap-2 mb-2">
                  <Bookmark className="w-4 h-4 text-natural-primary" />
                  {currentTranslations.gallery}
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  {disease.gallery.map((image, idx) => (
                    <div key={idx} className="rounded-xl border border-natural-border overflow-hidden shadow-sm bg-natural-surface group">
                      <a href={image.url} target="_blank" rel="noopener noreferrer" className="block relative h-40 overflow-hidden">
                        <img src={image.url} alt={image.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors flex items-center justify-center">
                          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                        </div>
                      </a>
                      <div className="p-3 bg-white border-t border-natural-border">
                        <p className="text-xs font-semibold text-natural-text leading-snug">{image.caption}</p>
                        {image.type && <span className="text-[10px] font-bold text-natural-primary bg-natural-surface px-2 py-0.5 rounded-full mt-2 inline-block uppercase tracking-wider border border-natural-border">{image.type}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
