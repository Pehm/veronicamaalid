"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import et from "@/language/et.json";
import ru from "@/language/ru.json";
import FeaturedSlideShow from "@/components/featuredSlideShow";


export default function Home() {
  return (
    <main>
      <FeaturedSlideShow />
    </main>
  );
}
