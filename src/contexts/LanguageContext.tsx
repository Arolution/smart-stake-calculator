import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    'landing.title': 'Einstellungen wählen',
    'landing.theme': 'Design',
    'landing.language': 'Sprache',
    'landing.day': 'Tag',
    'landing.night': 'Nacht',
    'landing.continue': 'Weiter',
    'welcome.title': 'Willkommen beim Smart Stake Calculator',
    'welcome.description': 'Entdecke die Macht des Zinseszins-Effekts und simuliere Dein Investment mit unserem fortschrittlichen Rechner.',
    'welcome.continue': 'Weiter',
    'disclaimer.title': 'Haftungsausschluss',
    'disclaimer.text1': 'Dieser Rechner dient ausschließlich zu Informations- und Simulationszwecken.',
    'disclaimer.text2': 'Die dargestellten Berechnungen basieren auf theoretischen Modellen und vergangenen Durchschnittswerten.',
    'disclaimer.text3': 'Vergangene Ergebnisse garantieren keine zukünftigen Renditen.',
    'disclaimer.text4': 'Investitionen sind mit Risiken verbunden. Du könntest Dein gesamtes eingesetztes Kapital verlieren.',
    'disclaimer.checkbox': 'Ich habe den Haftungsausschluss gelesen und verstanden',
    'disclaimer.accept': 'Akzeptieren und Calculator starten',
    'calculator.title': 'Smart Stake Calculator',
    'calculator.stake': 'Startkapital',
    'calculator.calculate': 'Berechnen',
  },
  en: {
    'landing.title': 'Choose Settings',
    'landing.theme': 'Theme',
    'landing.language': 'Language',
    'landing.day': 'Day',
    'landing.night': 'Night',
    'landing.continue': 'Continue',
    'welcome.title': 'Welcome to the Smart Stake Calculator',
    'welcome.description': 'Discover the power of compound interest and simulate your investment with our advanced calculator.',
    'welcome.continue': 'Continue',
    'disclaimer.title': 'Disclaimer',
    'disclaimer.text1': 'This calculator is for informational and simulation purposes only.',
    'disclaimer.text2': 'The calculations shown are based on theoretical models and past averages.',
    'disclaimer.text3': 'Past results do not guarantee future returns.',
    'disclaimer.text4': 'Investments carry risks. You could lose your entire invested capital.',
    'disclaimer.checkbox': 'I have read and understood the disclaimer',
    'disclaimer.accept': 'Accept and Start Calculator',
    'calculator.title': 'Smart Stake Calculator',
    'calculator.stake': 'Initial Stake',
    'calculator.calculate': 'Calculate',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'de';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
