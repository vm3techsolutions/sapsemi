"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [language, setLanguage] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const navLinks = [
    { name: "Overview", href: "#Overview" },
    { name: "Features", href: "#Features" },
    { name: "Applications", href: "#Applications" },
    { name: "Quality Assurance", href: "#Quality" },
    { name: "Downloads", href: "#Downloads" },
    { name: "Gallery", href: "#Gallery" },
    { name: "Related Products", href: "#Products" },
    { name: "Testimonials", href: "#Testimonials" },
    { name: "Enquiry", href: "#Enquiry" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between px-4 sm:px-10 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/home/HeaderLogo.png"
            alt="SAP Parts"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 text-[#0E509E] text-md font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-2 py-1 ${
                pathname === link.href ? "text-[#003d7a]" : ""
              } hover:text-[#FACC48] transition-colors`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="hidden md:block ml-2">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="bg-[#0E509E] text-white py-1.5 rounded text-sm focus:outline-none hover:bg-[#FACC48] hover:text-black"
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FiX className="text-[#0E509E] text-2xl" />
            ) : (
              <FiMenu className="text-[#0E509E] text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 text-[#0E509E] hover:text-[#FACC48]"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Selector Mobile */}
          <div className="mt-3">
            <select
              value={language}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full bg-[#0E509E] text-white py-2 rounded text-sm focus:outline-none hover:bg-[#FACC48] hover:text-black"
            >
              <option value="en">English</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
