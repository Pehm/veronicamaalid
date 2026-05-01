"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import est from "@/language/et.json";
import ru from "@/language/ru.json";
import paintingsData from "@/paintings/paintinginfo.json";
import type { Painting } from "@/types/painting";

export default function FeaturedSlideShow() {
    let paintings = paintingsData as Painting[];
    paintings = paintings.filter(p => p.featured);
    const { language } = useLanguage();
    const translations = language === "en" ? en : language === "et" ? est : ru;

    return (
        <div className="featured-slideshow">
            <div className="slideshow-container">
                <img 
                    key={paintings[0].image}
                    src={paintings[0].image} 
                    alt={paintings[0].title[language] || ""} 
                    className="slideshow-image" 
                />
            </div>
        </div>
    );
}