"use client";

import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import et from "@/language/et.json";
import ru from "@/language/ru.json";

export default function Footer() {
    const { language } = useLanguage();
    const translations = language === "en" ? en : language === "et" ? et : ru;
    const year = new Date().getFullYear();
    const text = `© ${year} ${translations.footer.text}`;

    return (
        <footer>
            {text}
        </footer>
    );
}