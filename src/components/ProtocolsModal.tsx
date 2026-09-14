import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, BookOpen, ExternalLink, Copy, Check, X, Globe,
  Building2, Calendar, BookmarkCheck, ArrowUpRight, Sparkles, Filter
} from 'lucide-react';
import { clinicalProtocols, protocolCategories } from '../data/protocols_data';
import { ClinicalProtocol } from '../types';

interface ProtocolsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'hu' | 'en' | 'de';
}

const modalTranslations = {
  hu: {
    modal_title: 'Klinikai Protokollok & Szakmai Irányelvek',
    modal_subtitle: 'Hivatalos magyarországi (Egészségügyi Szakmai Kollégium, NNGYK) és nemzetközi (IDSA, ESCMID, SSC, ESC, EAU, CDC, WHO) irányelvek tára',
    search_placeholder: 'Keresés irányelv, kórokozó, antibiotikum vagy szervezet szerint...',
    scope_all: 'Összes protokoll',
    scope_hu: 'Magyarországi irányelvek',
    scope_intl: 'Nemzetközi guideline-ok',
    all_topics: 'Összes témakör',
    filter_topic: 'Témakör:',
    key_points_title: 'Főbb klinikai és terápiás sarokpontok:',
    open_guideline: 'Hivatalos protokoll megnyitása',
    open_pdf: 'Közlöny / PDF',
    copy_link: 'Link másolása',
    copied: 'Másolva!',
    no_results: 'Nem található protokoll a megadott keresési feltételekkel.',
    clear_filters: 'Szűrők törlése',
    portal_shortcuts: 'Hivatalos irányelv-portálok gyorselérése:',
    count_label: 'találat',
    official_source: 'Kiadó szervezet'
  },
  en: {
    modal_title: 'Clinical Protocols & Practice Guidelines',
    modal_subtitle: 'Official Hungarian (Collegiate Guidelines, NPHC) and International (IDSA, ESCMID, SSC, ESC, EAU, CDC, WHO) practice guidelines',
    search_placeholder: 'Search by guideline title, pathogen, antibiotic or organization...',
    scope_all: 'All Protocols',
    scope_hu: 'Hungarian Guidelines',
    scope_intl: 'International Guidelines',
    all_topics: 'All Topics',
    filter_topic: 'Topic:',
    key_points_title: 'Key Clinical & Therapeutic Recommendations:',
    open_guideline: 'Open Official Guideline',
    open_pdf: 'Gazette / PDF',
    copy_link: 'Copy Link',
    copied: 'Copied!',
    no_results: 'No guidelines match your search criteria.',
    clear_filters: 'Clear Filters',
    portal_shortcuts: 'Official Guideline Repositories:',
    count_label: 'results',
    official_source: 'Issuing Body'
  },
  de: {
    modal_title: 'Klinische Protokolle & Leitlinien',
    modal_subtitle: 'Offizielle ungarische und internationale (IDSA, ESCMID, SSC, ESC, EAU, CDC, WHO) Leitlinien',
    search_placeholder: 'Suche nach Leitlinie, Erreger, Antibiotikum oder Fachgesellschaft...',
    scope_all: 'Alle Leitlinien',
    scope_hu: 'Ungarische Leitlinien',
    scope_intl: 'Internationale Leitlinien',
    all_topics: 'Alle Themen',
    filter_topic: 'Themenbereich:',
    key_points_title: 'Klinische Kernempfehlungen & Therapie:',
    open_guideline: 'Offizielle Leitlinie öffnen',
    open_pdf: 'Amtsblatt / PDF',
    copy_link: 'Link kopieren',
    copied: 'Kopiert!',
    no_results: 'Keine Leitlinien für Ihre Suchkriterien gefunden.',
    clear_filters: 'Filter zurücksetzen',
    portal_shortcuts: 'Offizielle Leitlinien-Portale:',
    count_label: 'Ergebnisse',
    official_source: 'Herausgeber'
  }
};

export const ProtocolsModal: React.FC<ProtocolsModalProps> = ({ isOpen, onClose, lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScope, setSelectedScope] = useState<'all' | 'hungarian' | 'international'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const t = modalTranslations[lang] || modalTranslations.hu;

  const handleCopyLink = (protocol: ClinicalProtocol) => {
    navigator.clipboard.writeText(protocol.url);
    setCopiedId(protocol.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredProtocols = useMemo(() => {
    return clinicalProtocols.filter((p) => {
      // Scope filter
      if (selectedScope !== 'all' && p.scope !== selectedScope) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesOriginal = p.originalTitle?.toLowerCase().includes(q) || false;
        const matchesOrg = p.organization.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q);
        const matchesTags = p.tags.some((tag) => tag.toLowerCase().includes(q));
        const matchesKeyPoints = p.keyPoints?.some((kp) => kp.toLowerCase().includes(q)) || false;

        return matchesTitle || matchesOriginal || matchesOrg || matchesDesc || matchesTags || matchesKeyPoints;
      }

      return true;
    });
  }, [searchQuery, selectedScope, selectedCategory]);

  const huCount = useMemo(() => clinicalProtocols.filter((p) => p.scope === 'hungarian').length, []);
  const intlCount = useMemo(() => clinicalProtocols.filter((p) => p.scope === 'international').length, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 print:hidden overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.2 }}
          className="bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800"
        >
          {/* Top Header */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-5 sm:p-6 shrink-0 relative">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-inner shrink-0 text-emerald-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-white">
                      {t.modal_title}
                    </h2>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                      <Sparkles className="w-3 h-3" />
                      Evidence-Based
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-3xl leading-relaxed">
                    {t.modal_subtitle}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-all cursor-pointer shrink-0"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Portal Shortcut Pills */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-white/70 font-medium shrink-0 flex items-center gap-1 text-[11px]">
                <Globe className="w-3.5 h-3.5 text-emerald-300" />
                {t.portal_shortcuts}
              </span>
              <a
                href="https://kollegium.aeek.hu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors text-[11px]"
              >
                <span>🇭🇺 Szakmai Kollégium</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
              <a
                href="https://www.nnk.gov.hu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors text-[11px]"
              >
                <span>🇭🇺 NNGYK</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
              <a
                href="https://www.idsociety.org/practice-guideline/practice-guidelines/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors text-[11px]"
              >
                <span>🌐 IDSA Guidelines</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
              <a
                href="https://www.escmid.org/guidelines-journals/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors text-[11px]"
              >
                <span>🌐 ESCMID</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
              <a
                href="https://www.sccm.org/SurvivingSepsisCampaign/Guidelines/Adult-Patients"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors text-[11px]"
              >
                <span>🌐 Surviving Sepsis</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-slate-50 border-b border-slate-200 p-3.5 sm:p-4 shrink-0 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full sm:flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder={t.search_placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-slate-300 hover:border-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 text-slate-800 text-xs sm:text-sm pl-9 pr-8 py-2 rounded-xl transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Scope Switcher Tabs */}
              <div className="flex items-center bg-slate-200/80 p-1 rounded-xl shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedScope('all')}
                  className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedScope === 'all'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.scope_all} ({clinicalProtocols.length})
                </button>
                <button
                  onClick={() => setSelectedScope('hungarian')}
                  className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedScope === 'hungarian'
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>🇭🇺 {t.scope_hu}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedScope === 'hungarian' ? 'bg-emerald-900/40 text-emerald-100' : 'bg-slate-300 text-slate-700'}`}>
                    {huCount}
                  </span>
                </button>
                <button
                  onClick={() => setSelectedScope('international')}
                  className={`flex-1 sm:flex-initial px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    selectedScope === 'international'
                      ? 'bg-indigo-700 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>🌐 {t.scope_intl}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${selectedScope === 'international' ? 'bg-indigo-900/40 text-indigo-100' : 'bg-slate-300 text-slate-700'}`}>
                    {intlCount}
                  </span>
                </button>
              </div>
            </div>

            {/* Category / Topic Badges */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              <span className="text-slate-500 font-medium shrink-0 flex items-center gap-1 text-[11px] mr-1">
                <Filter className="w-3 h-3 text-slate-400" />
                {t.filter_topic}
              </span>
              {protocolCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const label = cat.name[lang] || cat.name.hu;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-slate-800 text-white font-semibold shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main List Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-100/60">
            {/* Results count header */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                {filteredProtocols.length} {t.count_label}
              </span>
              {(searchQuery || selectedScope !== 'all' || selectedCategory !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedScope('all');
                    setSelectedCategory('all');
                  }}
                  className="text-emerald-700 hover:text-emerald-900 font-semibold cursor-pointer underline"
                >
                  {t.clear_filters}
                </button>
              )}
            </div>

            {filteredProtocols.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-xs max-w-lg mx-auto my-8">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">{t.no_results}</h3>
                <p className="text-xs text-slate-500 mt-1.5 mb-4">
                  Próbáljon más keresési kifejezést vagy válasszon az &quot;Összes protokoll&quot; nézetből.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedScope('all');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-semibold hover:bg-emerald-800 transition-colors shadow-xs"
                >
                  {t.clear_filters}
                </button>
              </div>
            ) : (
              filteredProtocols.map((protocol) => {
                const isHu = protocol.scope === 'hungarian';
                const isCopied = copiedId === protocol.id;

                return (
                  <div
                    key={protocol.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top meta badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${
                              isHu
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : 'bg-indigo-50 text-indigo-800 border-indigo-200'
                            }`}
                          >
                            {isHu ? '🇭🇺 Magyarországi szakmai irányelv' : '🌐 Nemzetközi guideline'}
                          </span>

                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            {protocol.year}
                          </span>
                        </div>

                        {/* Category tag */}
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200/70">
                          {protocol.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug font-serif">
                        {protocol.title}
                      </h3>

                      {protocol.originalTitle && protocol.originalTitle !== protocol.title && (
                        <p className="text-xs text-slate-500 italic mt-0.5 font-sans">
                          {protocol.originalTitle}
                        </p>
                      )}

                      {/* Issuing organization */}
                      <div className="flex items-center gap-1.5 text-xs text-emerald-950 font-medium mt-2 bg-emerald-50/70 p-1.5 px-2.5 rounded-lg border border-emerald-100">
                        <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span><strong>{t.official_source}:</strong> {protocol.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed">
                        {protocol.description}
                      </p>

                      {/* Key Recommendations / Clinical Takeaways */}
                      {protocol.keyPoints && protocol.keyPoints.length > 0 && (
                        <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
                            <BookmarkCheck className="w-3.5 h-3.5 text-emerald-600" />
                            {t.key_points_title}
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {protocol.keyPoints.map((kp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5"></span>
                                <span className="leading-relaxed">{kp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {protocol.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="px-2 py-0.5 rounded-md text-[10px] bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2">
                        <a
                          href={protocol.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold transition-all shadow-xs active:scale-95"
                        >
                          <span>{t.open_guideline}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {protocol.pdfUrl && (
                          <a
                            href={protocol.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                          >
                            <span>{t.open_pdf}</span>
                            <ArrowUpRight className="w-3 h-3 text-slate-500" />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => handleCopyLink(protocol)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                        }`}
                        title={t.copy_link}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{t.copied}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>{t.copy_link}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>
                {lang === 'hu'
                  ? `${clinicalProtocols.length} elérhető szakmai protokoll (${huCount} magyarországi + ${intlCount} nemzetközi guideline)`
                  : lang === 'de'
                  ? `${clinicalProtocols.length} verfügbare Leitlinien (${huCount} ungarische + ${intlCount} internationale Leitlinien)`
                  : `${clinicalProtocols.length} guidelines available (${huCount} Hungarian + ${intlCount} international guidelines)`}
              </span>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors shadow-xs cursor-pointer ml-auto"
            >
              {lang === 'hu' ? 'Bezárás' : lang === 'de' ? 'Schließen' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
