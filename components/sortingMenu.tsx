"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import et from "@/language/et.json";
import ru from "@/language/ru.json";

export default function SortingMenu() {
    const { language } = useLanguage();
    const translations = language === "en" ? en : language === "et" ? et : ru;

    return (
        <div className="sorting-menu">
            <ul className="sorting-menu__options">
                <li>{translations.gallery.sortOptions.year}</li>
                <li>{translations.gallery.sortOptions.price}</li>
                <li>{translations.gallery.sortOptions.size}</li>
            </ul>
        </div>
    );
}