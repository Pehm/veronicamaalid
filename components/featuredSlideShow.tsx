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
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % paintings.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [paintings.length]);

    return (
        <div className="featured-slideshow">
            <div className="slideshow-container">
                <img 
                    key={currentIndex}
                    src={paintings[currentIndex].image} 
                    alt={paintings[currentIndex].title[language] || ""} 
                    className="slideshow-image" 
                />
            </div>
        </div>
    );
}