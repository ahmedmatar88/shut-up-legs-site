export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export class CookieConsentManager {
  private static readonly CONSENT_KEY = 'cookie-consent';
  
  static getConsent(): CookieConsent | null {
    try {
      const consent = localStorage.getItem(this.CONSENT_KEY);
      return consent ? JSON.parse(consent) : null;
    } catch {
      return null;
    }
  }
  
  static setConsent(consent: Omit<CookieConsent, 'timestamp'>): void {
    const consentWithTimestamp: CookieConsent = {
      ...consent,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(this.CONSENT_KEY, JSON.stringify(consentWithTimestamp));
    this.loadConsentBasedScripts(consentWithTimestamp);
  }
  
  static hasConsent(): boolean {
    return this.getConsent() !== null;
  }
  
  static clearConsent(): void {
    localStorage.removeItem(this.CONSENT_KEY);
  }
  
  private static loadConsentBasedScripts(consent: CookieConsent): void {
    if (consent.analytics) {
      this.loadGoogleAnalytics();
    }
    
    if (consent.marketing) {
      console.log('Loading marketing scripts');
    }
  }
  
  private static loadGoogleAnalytics(): void {
    // Replace with your actual GA4 measurement ID
    const GA_MEASUREMENT_ID = 'G-0ZL2SPJ6L1';
    
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    function gtag(...args: any[]) { window.dataLayer.push(args); }
    // @ts-ignore
    gtag('js', new Date());
    // @ts-ignore
    gtag('config', GA_MEASUREMENT_ID);
  }
}