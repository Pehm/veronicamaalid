'use client';

import React, { useState } from "react";
import type { Painting } from "../types/painting";
import PaintingModal from "./paintingmodal";
type Language = "et" | "en" | "ru";

interface PaintingBoxProps {
    painting: Painting;
    paintings: Painting[];
    initialIndex: number;
    translations: any;
}

export default function PaintingBox({ painting, paintings, initialIndex, translations }: PaintingBoxProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [modalIndex, setModalIndex] = useState<number | null>(null);

    const title = painting.title[translations.lang as Language] || painting.title.en;
    const description = painting.description[translations.lang as Language] || painting.description.en;
    const category = painting.category[translations.lang as Language] || painting.category.en;

    const modalPainting = modalIndex !== null ? paintings[modalIndex] : null;

    const openModal = (e: React.MouseEvent) => {
        if (!isExpanded) return;
        e.stopPropagation();
        setModalIndex(initialIndex);
    };

    const showPrev = () => {
        setModalIndex((prev) => {
            if (prev === null) return prev;
            return prev === 0 ? paintings.length - 1 : prev - 1;
        });
    };

    const showNext = () => {
        setModalIndex((prev) => {
            if (prev === null) return prev;
            return prev === paintings.length - 1 ? 0 : prev + 1;
        });
    };

    return (
        <>
            <article
                className={`painting-box ${isExpanded ? 'painting-box--expanded' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <img
                    src={painting.image}
                    alt={title}
                    className="painting-box__image"
                    onClick={openModal}
                />

                {isExpanded && (
                    <div className="painting-box__content">
                        <div className="painting-box__header">
                            <h3 className="painting-box__title">{title}</h3>
                            <span className="painting-box__year">{painting.year}</span>
                        </div>

                        <p className="painting-box__description">{description}</p>

                        <ul className="painting-box__details">
                            <li>
                                <strong>{translations.tags.size}:</strong> {painting.size}
                            </li>
                            <li>
                                <strong>{translations.tags.price}:</strong> {painting.sold ? translations.tags.private : `${painting.price} €`}
                            </li>
                            <li>
                                <strong>{translations.tags.category}:</strong> {category.join(", ")}
                            </li>
                        </ul>
                    </div>
                )}
            </article>

            {modalPainting && (
                <PaintingModal
                    painting={modalPainting}
                    translations={translations}
                    onClose={() => setModalIndex(null)}
                    onPrev={showPrev}
                    onNext={showNext}
                />
            )}
        </>
    );
}