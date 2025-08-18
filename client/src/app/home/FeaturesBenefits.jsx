import Image from "next/image";

const features = [
  {
    icon: "/assets/home/Features1.png", 
    title: "Durability",
    desc: "Wear-resistant alloys, precise machining, and optional coatings improve lifespan."
  },
  {
    icon: "/assets/home/Features2.png",
    title: "Superior Fit & Adaptability",
    desc: "Material and groove/dimple patterns ensure a stable, precise fit— minimizing fatigue Scribd."
  },
  {
    icon: "/assets/home/Features3.png",
    title: "Material Variety",
    desc: "Alloy-steel versions for heavy-load applications; non-ferrous (bronze, aluminium) for corrosion resistance or lightweight uses SAP Parts."
  },
  {
    icon: "/assets/home/Features4.png",
    title: "Custom Configurations",
    desc: "Available individually or as kits, customizable per client needs Scribd."
  }
];

export default function FeaturesBenefits() {
  return (
    <section className="Section bg-white">
      <h2 className="Heading text-center">
        Features & Benefits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className=" flex items-center justify-center w-40 h-40 rounded-xl">
              <Image
                src={item.icon}
                alt={item.title}
                 width={933}
          height={512}
                className="w-40 h-40 object-contain rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#0E509E]">
              {item.title}
            </h3>
            <p className="mt-2 Paragraph">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
