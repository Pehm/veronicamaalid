'use client';

import React, { useEffect } from "react";
import type { Painting } from "../types/painting";
type Language = "et" | "en" | "ru";

interface PaintingModalProps {
    painting: Painting;
    translations: any;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

export default function PaintingModal({
    painting,
    translations,
    onClose,
    onPrev,
    onNext
}: PaintingModalProps) {
    const title = painting.title[translations.lang as Language] || painting.title.en;

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onPrev();
            if (e.key === "ArrowRight") onNext();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose, onPrev, onNext]);

    return (
        <div
            className="painting-modal__overlay"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div className="painting-modal__content" onClick={(e) => e.stopPropagation()}>
                <button className="painting-modal__close" onClick={onClose} aria-label="Close">
                    &times;
                </button>

                <button className="painting-modal__nav painting-modal__nav--left" onClick={onPrev} aria-label="Previous image">
                    &#8249;
                </button>

                <img
                    src={painting.image}
                    alt={title}
                    className="painting-modal__image"
                />

                <button className="painting-modal__nav painting-modal__nav--right" onClick={onNext} aria-label="Next image">
                    &#8250;
                </button>
            </div>
        </div>
    );
}