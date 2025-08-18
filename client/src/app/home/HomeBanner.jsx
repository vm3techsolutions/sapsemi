"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";



export default function BannerImage() {
 


  return (
    <div className="w-full bg-white flex justify-center items-center sm:px-4">
      <div>
        <Image
          src="/assets/home/HomeBanner.png"
          alt="Banner"
          width={933}
          height={512}
          className="object-cover sm:w-[215vh] sm:h-[80vh]"
        />
      </div>
    </div>
  );
}
