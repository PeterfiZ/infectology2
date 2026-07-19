// Google Analytics (gtag.js) Utility for Single Page Application tracking

// Declare gtag on the window object
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = (import.meta as any).env.VITE_GA_TRACKING_ID || '';

/**
 * Dynamically initializes Google Analytics if a valid tracking ID is provided.
 */
export function initGA() {
  if (!GA_TRACKING_ID || GA_TRACKING_ID === 'YOUR_GA_TRACKING_ID') {
    console.log('[Google Analytics] No tracking ID configured. Set VITE_GA_TRACKING_ID in your environment.');
    return;
  }

  try {
    // 1. Inject the Google Analytics script tag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // 2. Initialize the dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };

    // 3. Configure default tracking
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname + window.location.search,
      send_page_view: true // Let it auto-track the initial page view
    });

    console.log(`[Google Analytics] Initialized successfully with ID: ${GA_TRACKING_ID}`);
  } catch (error) {
    console.error('[Google Analytics] Failed to initialize:', error);
  }
}

/**
 * Tracks a virtual page view in the SPA.
 * @param path The URL path (e.g. '/category/bacterial_respiratory' or '/disease/bacterial_pneumonia')
 * @param title Optional title of the virtual page
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window.gtag === 'function' && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
      page_title: title || document.title
    });
    console.log(`[Google Analytics] Tracked Pageview: ${path} - ${title || ''}`);
  }
}

/**
 * Tracks a custom interaction or click event.
 * @param action The event action (e.g. 'search', 'click_ai_consult', 'download_notes')
 * @param category The event category (e.g. 'engagement', 'navigation')
 * @param label Optional description label
 * @param value Optional numeric value associated with the event
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
    console.log(`[Google Analytics] Tracked Event: ${action} [${category}] - ${label || ''}`);
  }
}
