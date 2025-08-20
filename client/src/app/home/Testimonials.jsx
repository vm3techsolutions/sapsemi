"use client";
import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  { name: "ABC", img: "/assets/home/Testimonials.png", text: "This handy tool helps you create dummy text for all your layout needs. We are gradually adding new..." },
  { name: "DEF", img: "/assets/home/Testimonials.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel." },
  { name: "GHI", img: "/assets/home/Testimonials.png", text: "Aliquam erat volutpat. Sed posuere consectetur est at lobortis." },
  { name: "JKL", img: "/assets/home/Testimonials.png", text: "Cras mattis consectetur purus sit amet fermentum." },
  { name: "MNO", img: "/assets/home/Testimonials.png", text: "Donec ullamcorper nulla non metus auctor fringilla." },
  { name: "PQR", img: "/assets/home/Testimonials.png", text: "Vestibulum id ligula porta felis euismod semper." }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const loopData = [...testimonials, ...testimonials]; // duplicate for looping

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  // Auto-slide every 3s
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  // Reset instantly when end reached
  useEffect(() => {
    if (index >= testimonials.length) {
      setTimeout(() => setIndex(0), 0);
    }
    if (index < 0) {
      setIndex(testimonials.length - 1);
    }
  }, [index]);

  return (
    <div className="bg-[#D9D9D9]/12 Section" id="Testimonials">
      <h2 className="text-center Heading">Testimonials</h2>
      <div className="relative max-w-6xl mx-auto overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / cardsToShow)}%)`,
            width: `${(loopData.length / cardsToShow) * 100}%`
          }}
        >
          {loopData.map((t, i) => (
            <div key={i} className="p-4" style={{ width: `${100 / cardsToShow}%` }}>
              <div className="bg-[#D9D9D9]/30 rounded-lg shadow p-6 flex flex-col justify-between h-full">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm mb-4">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image src={t.img} alt={t.name} width={40} height={40} className="rounded-full" />
                  <span className="text-blue-800 font-medium">{t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
