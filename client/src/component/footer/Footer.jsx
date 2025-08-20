"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

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
    <footer className="bg-[#363636] text-white mt-5">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-10 pt-6 pb-3">
        
        {/* Logo */}
        <div>
          <Image
            src="/assets/home/FooterLogo.png"
            alt="SAP Parts"
            width={140}
            height={50}
            className="mb-4"
          />
        </div>

        {/* Description */}
        <div className="sm:-ml-20">
          <p className="text-md text-gray-300 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc feugiat, mauris non bibendum gravida, sapien purus 
            facilisis neque, et porttitor magna arcu ac justo.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sm:ml-10">
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3 ">
            {t("Quick Links")}
          </h3>
          <ul className="space-y-3 text-md">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-[#FACC48] font-semibold text-lg mb-3">{t("Get in Touch")}</h3>
          <p className="text-md text-gray-300 mb-2">{t("Address")}:</p>
          <p className="text-md text-gray-300 mb-3">{t("Phone")}: +91 12345 12345</p>
          <p className="text-md text-gray-300 mb-3">{t("Email")}: sales@sapparts.com</p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-[#363636] text-2xl mt-4">
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
