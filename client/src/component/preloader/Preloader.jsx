"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsLoading(false), 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 bg-white z-[9999] transition-transform duration-700 ease-in-out ${
          isAnimating ? "translate-y-[-100%]" : "translate-y-0"
        }`}
      >
        {/* Desktop Image */}
        <Image
          src="/assets/home/MainSlide.png"
          alt="Loading..."
          width={1920}
          height={1080}
          className="hidden md:block w-full h-full object-cover"
        />

        {/* Mobile Image */}
        <Image
          src="/assets/home/MainSlide.png" 
          alt="Loading..."
          width={500}
          height={800}
          className="block md:hidden w-full h-full object-cover"
        />
      </div>
    );
  }

  return <>{children}</>;
}
