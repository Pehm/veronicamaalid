"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

export type LanguageCode = "et" | "en" | "ru";

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: Dispatch<SetStateAction<LanguageCode>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
};
