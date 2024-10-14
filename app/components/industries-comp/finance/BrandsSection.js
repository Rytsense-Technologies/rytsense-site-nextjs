import Image from 'next/image';

const BrandsSection = () => {
  const logos = [
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542565/772ec2d68ef087be3b045adb551202c7.fint_brand_img1_v896xy.webp", alt: "BharatPe" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542611/85ba15c6b7f8093ba255ab98095ce9fd.fint_brand_img2_nfp5zr.webp", alt: "Vodafone" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542621/96268d9366d227a2a2c206ed2714ceeb.fint_brand_img3_ukclif.webp", alt: "Fiji Eats" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542684/b98303ecb9476588eb0653bc35131e89.fint_brand_img4_ow7evd.webp", alt: "Eglooz" },
    { src: "https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542700/d41d8cd98f00b204e9800998ecf8427e.fint_brand_img6_pske3g.webp", alt: "ZipEats" },
    // Add more logo paths here
  ];

  return (
    <div className="py-12 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        These Brands Have Found Success With Our Fintech App Development Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
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
