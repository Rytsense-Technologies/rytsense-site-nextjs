import Image from 'next/image';

const BrandsSection = () => {
  const logos = [
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976113/Groww-removebg-preview_gso9ja.png", alt: "Virgin Plus" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976105/ippo-removebg-preview_paupx0.png", alt: "Ford" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976101/jupiter-removebg-preview_xbkqsz.png", alt: "Ikea" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728975891/finance-brand1_n6iqd0.svg", alt: "Hitachi" },
  
  ];

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-10">
        These Brands Have Found Success With Our Fintech App Development Services
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={60}
              className="object-contain"
              priority={index < 6} // Prioritize loading for the first few images
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
