// components/ApplicationsIndustries.jsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const applications = [
  {
    title: "Construction (loaders, excavators)",
    desc: "Used in heavy-duty construction machinery for durability and performance."
  },
  {
    title: "Agriculture (harvesters, rotovators)",
    desc: "Supports efficient farming equipment with high wear resistance."
  },
  {
    title: "Industrial/Heavy Engineering (transmissions, feeder systems)",
    desc: "Designed for large-scale industrial applications requiring precision."
  },
  {
    title: "Mining (undercarriage, track link components)",
    desc: "Ideal for harsh mining environments with extreme load conditions."
  },
];

export default function ApplicationsIndustries() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="Section bg-white" id="Applications">
      {/* Title */}
      <h2 className="Heading text-center">
        Applications & Industries
      </h2>

      <div className="flex flex-col md:flex-row items-center sm:gap-20 gap-10 mt-8">
        {/* Left Image */}
        <div className="flex-1">
          <Image
            src="/assets/home/Applications.png"
            alt="Applications"
             width={933}
          height={512}
            className="rounded-lg shadow-md w-full h-[60vh] object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Right List */}
        <div className="flex-1 w-full space-y-6">
          {applications.map((item, idx) => (
            <div key={idx} className="bg-[#0E509E]/4 rounded-lg shadow-sm">
              {/* Header */}
              <button
                onClick={() => toggleItem(idx)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#0E509E]/10 transition-all duration-200 rounded-lg"
              >
                <span className="text-[#0E509E] font-medium">{item.title}</span>
                <FiChevronDown
                  className={`text-[#0E509E] text-xl transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              {openIndex === idx && (
                <div className="px-5 pb-4 text-gray-600 text-sm">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
