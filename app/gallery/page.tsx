"use client";

import { useState } from "react";

import PaintingBox from "@/components/paintingbox";
import paintingsData from "@/paintings/paintinginfo.json";
import type { Painting } from "@/types/painting";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import est from "@/language/et.json";
import ru from "@/language/ru.json";

export default function GalleryPage() {
    const paintings = paintingsData as Painting[];
    const { language } = useLanguage();
    const translations = language === "en" ? en : language === "et" ? est : ru;
    const [availableOnly, setAvailableOnly] = useState(false);

    const visiblePaintings = availableOnly
        ? paintings.filter((painting) => painting.sold === false)
        : paintings;

    return (
        <main>
            <div className="gallery-toolbar">
                <h1>{translations.gallery.title}</h1>

                <label className="gallery-filter" htmlFor="availableOnlyToggle">
                    <span>
                        {availableOnly
                            ? translations.gallery.availableOnly
                            : translations.gallery.showAll}
                    </span>
                    <input
                        id="availableOnlyToggle"
                        type="checkbox"
                        checked={availableOnly}
                        onChange={(e) => setAvailableOnly(e.target.checked)}
                    />
                    
                </label>
            </div>

            <div className="gallery-grid">
                {visiblePaintings.map((painting, index) => (
                    <PaintingBox
                        key={painting.image}
                        painting={painting}
                        paintings={visiblePaintings}
                        initialIndex={index}
                        translations={translations}
                    />
                ))}
            </div>
        </main>
    );
}