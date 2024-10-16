import Image from 'next/image';

const BrandsSection = () => {
  const logos = [
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728975891/finance-brand1_n6iqd0.svg", alt: "BharatPe" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976101/jupiter-removebg-preview_xbkqsz.png", alt: "Vodafone" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976105/ippo-removebg-preview_paupx0.png", alt: "Fiji Eats" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976113/Groww-removebg-preview_gso9ja.png", alt: "Eglooz" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131449/virginpus_nsaulp.png", alt: "Virgin Plus" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131478/Ford_logo_flat.svg_p29mu0.png", alt: "Ford" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131491/ikea-logo.3ee105eef6b5939c1269_sic2jt.svg", alt: "Ikea" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131504/Hitachi_pqcry1.webp", alt: "Hitachi" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131514/Disney__logo.svg_ei0hl0.webp", alt: "Disney" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131537/Fidelity-Logo_k3vtga.png", alt: "Fidelity" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725131520/CEAT_xm9dsb.webp", alt: "CEAT" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1725426919/tcs1_wigk9e.webp", alt: "TCS" },
  
    // Add more logo paths here as needed
  ];
  

  return (
    <div className="py-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        These Brands Have Found Success With Our Fintech App Development Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 px-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
