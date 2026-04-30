"use client";

import PaintingBox from "@/components/paintingbox";
import SortingMenu from "@/components/sortingMenu";
import paintingsData from "@/paintings/paintinginfo.json";
import type { Painting } from "@/types/painting";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import est from "@/language/et.json";
import ru from "@/language/ru.json";
import { useState } from "react";


export default function GalleryPage() {
    const paintings = paintingsData as Painting[];
    const { language } = useLanguage();
    const translations = language === "en" ? en : language === "et" ? est : ru;
    const [sortIsOpen, setSortIsOpen] = useState(false);

    return (
        <main>
            <h1>{translations.gallery.title}</h1>
            {sortIsOpen && <SortingMenu />}
            <div className="gallery-grid">
                {paintings.map((painting) => (
                    <PaintingBox
                        key={painting.image}
                        painting={painting}
                        translations={translations}
                    />
                ))}
            </div>
        </main>
    );
}