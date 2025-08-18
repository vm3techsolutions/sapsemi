import Image from "next/image";
const products = [
  {
    img: "/assets/home/RelatedProducts1.png",
    title: "MECHANICAL FACE SEALS",
  },
  {
    img: "/assets/home/RelatedProducts2.png",
    title: "SINTERED",
  },
];

export default function RelatedProducts() {
  return (
    <div className="Section bg-white py-10">
      {/* Title */}
      <h2 className="Heading text-center mb-8">Related Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center"
          >
            {/* Image container with fixed height */}
            <div className="border border-[#000]25 rounded-lg shadow-sm hover:shadow-xl transition-all duration-200 flex items-center justify-center h-[60vh] w-full">
              <Image
                src={product.img}
                alt={product.title}
                 width={933}
          height={512}
                className="h-[55vh] max-w-full object-contain rounded-md transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Title below image */}
            <p className="text-[#0E509E] text-lg font-medium mt-4 text-center">
              {product.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
