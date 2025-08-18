import Image from "next/image";


export default function MachineImage() {
  return (
    <div className="w-full bg-white Section ">
      <div className="">
        <Image
          src="/assets/home/CenterBanner.png" 
          alt="CNC Machining"
          width={933}
          height={512}
          className="object-cover sm:w-[215vh] sm:h-[80vh] transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
}
