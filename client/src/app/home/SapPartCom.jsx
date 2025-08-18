// components/SpecsSnapshot.jsx
export default function SpecsSnapshot() {
  return (
    <div className="Section bg-[#D9D9D9]/12">
      {/* Main Heading */}
      <p className="Heading text-center">
        SAP Parts manufactures precision bushings—specifically alloy steel and
        oil–grooved variants—optimized for demanding applications{" "}
        <span className="text-[#FACC48] font-bold">sapparts.com.</span>
      </p>

      {/* Sub Heading */}
      <h2 className="Heading text-center mt-6">
        Key Specs Snapshot
      </h2>

{/* Yellow Info Boxes */}
<div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-8 w-full">
  <div className="bg-[#FACC48] px-4 py-3 w-full md:w-[380px] h-18 flex items-center justify-center text-center">
    Material options (e.g., 100Cr6, SAE 4140, SAE 8620, C-45, etc.) sapparts.com
  </div>
  <div className="bg-[#FACC48] px-4 py-3 w-full md:w-[370px] h-18 flex items-center justify-center text-center">
    Size range: OD 30 mm to 200 mm sapparts.com
  </div>
</div>


    </div>
  );
}
