'use client';

import React, { useState } from "react";
import type { Painting } from "../types/painting";
type Language = "et" | "en" | "ru";


export default function PaintingBox({ painting, translations }: { painting: Painting; translations: any }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const title = painting.title[translations.lang as Language] || painting.title.en;
    const description = painting.description[translations.lang as Language] || painting.description.en;
    const category = painting.category[translations.lang as Language] || painting.category.en;
   

    return (
        <article 
            className={`painting-box ${isExpanded ? 'painting-box--expanded' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <img
                src={painting.image}
                alt={title}
                className="painting-box__image"
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
    );
}