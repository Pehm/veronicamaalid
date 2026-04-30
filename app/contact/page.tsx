"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import et from "@/language/et.json";
import ru from "@/language/ru.json";
import ContactForm from "@/components/contactForm";

export default function ContactPage() {
    const { language } = useLanguage();
    const translations = language === "en" ? en : language === "et" ? et : ru;
    return (
        <main>
            <h1>{translations.contact.title}</h1>
            <p>{translations.contact.description}</p>
            <ContactForm translations={translations} />
        </main>
    );
}