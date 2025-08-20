import Link from "next/link";
const downloads = [
  { title: "PRODUCT DATA-SHEET", link: "#" },
  { title: "DIMENSION TABLES", link: "#" },
  { title: "COATING/MATERIAL OPTIONS", link: "#" },
  { title: "MAINTENANCE OR INSTALLATION GUIDE", link: "#" },
];

export default function TechnicalDownloads() {
  return (
    <div className="Section bg-white" id="Downloads">
      {/* Title */}
      <h2 className="Heading text-center ">
        Technical Downloads & Resources
      </h2>

      {/* List */}
      <div className="space-y-4 mt-4 sm:px-10">
        {downloads.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="bg-[#FACC48] transition-all duration-200 flex items-center justify-between px-12 py-3 rounded-md shadow-sm"
          >
            <span className="text-[#0E509E] sm:text-xl text-md font-semibold">{item.title}</span>
            <span className="text-[#0E509E] text-lg font-bold transition-transform group-hover:translate-x-1">{`>>`}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
