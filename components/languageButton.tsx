import React from "react";
import { useLanguage } from "@/contexts/LanguageProvider";



export default function LanguageButton() {
    const { language, setLanguage } = useLanguage();
    const languages = [
        { code: "et", label: "Estonian", icon: "🇪🇪" },
        { code: "en", label: "English", icon: "🇬🇧" },
        { code: "ru", label: "Russian", icon: "🇷🇺" },
    ];


    const switchLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const selectedLang = event.currentTarget.getAttribute("aria-label")?.replace("Switch to ", "");
        if (selectedLang) {
            const langCode = languages.find(lang => lang.label === selectedLang)?.code;
            if (langCode) {
                setLanguage(langCode as "et" | "en" | "ru");
            }
        }
    }

    return (
        <div className="site-header__language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={(event) => switchLanguage(event)}
                    className="site-header__language-button"
                    aria-label={`Switch to ${lang.label}`}
                >
                    {lang.icon}
                </button>
            ))}
        </div>
    );
}