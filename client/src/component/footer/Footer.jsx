"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#363636] text-white mt-5">
      {/* Main Footer Content */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 px-6 md:px-10 pt-6 pb-3">
        {/* Logo and Description */}
        <div className="md:pt-10">
          <Image
            src="/assets/home/FooterLogo.png"
            alt="SAP Parts"
            width={140}
            height={50}
            className="mb-4"
          />
          <p className="text-md text-gray-300">{t("Footer Description")}</p>
        </div>

        {/* Quick Links */}
        <div className="md:ml-10">
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">
            {t("Quick Links")}
          </h3>
          <ul className="space-y-4 text-md">
            <li><Link href="/strategy">{t("Strategy")}</Link></li>
            <li><Link href="/technology">{t("Technology")}</Link></li>
            <li><Link href="/resources">{t("Resources")}</Link></li>
            <li><Link href="/sustainability">{t("Sustainability")}</Link></li>
            <li><Link href="/about">{t("About Us")}</Link></li>
            <li><Link href="/career">{t("Career")}</Link></li>
            <li><Link href="/contact">{t("Contact Us")}</Link></li>
          </ul>
        </div>

        {/* Industries */}
        <div className="md:ml-5">
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">
            {t("Industries")}
          </h3>
          <ul className="space-y-4 text-md">
            <li><Link href="/industries/agriculture">{t("Agriculture")}</Link></li>
            <li><Link href="/industries/automotive">{t("Automotive")}</Link></li>
            <li><Link href="/industries/construction">{t("Construction")}</Link></li>
            <li><Link href="/industries/defence">{t("Defence")}</Link></li>
            <li><Link href="/industries/industrial">{t("Industrial")}</Link></li>
            <li><Link href="/industries/mining">{t("Mining")}</Link></li>
            <li><Link href="/industries/high-tech">{t("High-Tech")}</Link></li>
          </ul>
        </div>

        {/* Products */}
       <div>
  <h3 className="text-[#FACC48] font-semibold text-lg mb-3">
    {t("Products")}
  </h3>
  <ul className="space-y-4 text-md ">
    <li><Link href="/products/mechanical-face-seals">Mechanical Face Seals</Link></li>
    <li><Link href="/products/bushings">Bushings</Link></li>
    <li><Link href="/products/sintered-products">Sintered Products</Link></li>
    <li><Link href="/products/pump-valves-components">Pump & Valves Components</Link></li>
    <li><Link href="/products/sap-hub-bearings">SAP Hub Bearings</Link></li>
    <li><Link href="/products/precision-components">Precision Components</Link></li>
  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">{t("Get in Touch")}</h3>
          <p className="text-md text-gray-300 mb-2">{t("Address")}:</p>
          <p className="text-md text-gray-300 my-5">{t("Phone")}: +91 12345 12345</p>
          <p className="text-md text-gray-300 my-5">{t("Email")}: sales@sapparts.com</p>
          <div className="flex items-center gap-3 text-[#363636] text-2xl">
            <Link href="#"><FaFacebookF className="rounded-full bg-[#FACC48] p-1" /></Link>
            <Link href="#"><FaInstagram className="rounded-full bg-[#FACC48] p-1" /></Link>
            <Link href="#"><FaYoutube className="rounded-full bg-[#FACC48] p-1" /></Link>
            <Link href="#"><FaLinkedinIn className="rounded-full bg-[#FACC48] p-1" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0E509E] text-white text-center py-3 sm:text-md text-sm">
        {t("Designed By")}:{" "}
        <Link
          href="https://vm3techsolution.com/?v=212bd1cfe3fb"
          target="_blank"
          rel="noopener noreferrer"
        >
          VM3 Tech Solutions LLP
        </Link>
      </div>
    </footer>
  );
}
