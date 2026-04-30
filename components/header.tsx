"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import en from "@/language/en.json";
import est from "@/language/et.json";
import ru from "@/language/ru.json";
import LanguageButton from "@/components/languageButton";

export default function Header() {
  const { language } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);

  const translations = language === "en" ? en : language === "et" ? est : ru;

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        const delta = currentY - lastY;
        const threshold = 8;

        if (!isMobile || menuOpen || currentY < 64) {
          setHeaderHidden(false);
        } else if (delta > threshold) {
          setHeaderHidden(true); // scrolling down
        } else if (delta < -threshold) {
          setHeaderHidden(false); // scrolling up
        }

        lastY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [menuOpen]);

  const links = [
    { label: translations.nav.home, href: "/" },
    { label: translations.nav.gallery, href: "/gallery" },
    { label: translations.nav.about, href: "/about" },
    { label: translations.nav.contact, href: "/contact" },
  ];

  return (
    <header className={`site-header ${headerHidden ? "site-header--hidden" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          {translations.name}
        </Link>

        <button
          type="button"
          className="site-header__menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav-list"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Main navigation" className="site-header__nav">
          <ul
            id="main-nav-list"
            className={`site-header__nav-list ${menuOpen ? "is-open" : ""}`}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="site-header__nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}