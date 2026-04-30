"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import est from "@/language/et.json";
import ru from "@/language/ru.json";

export default function About() {
  const { language } = useLanguage();
  const translations = language === "en" ? en : language === "et" ? est : ru;
  const aboutText = translations.about.description.split("\n").map((paragraph, index) => (
    <p key={index} className="about-Text">{paragraph}</p>
  ));
  return (
    <main>
      <h1>{translations.about.title}</h1>
      {aboutText}
    </main>
  );
}