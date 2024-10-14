import Image from 'next/image';

export default function TrustedBrands() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-2xl text-gray-800">Choose The Top FinTech App Development Company,</h2>
        <h3 className="text-4xl font-bold text-gray-900 mb-8">Trusted By Leading Brands Worldwide</h3>

        {/* Logos Section */}
        <div className="flex justify-center items-center flex-wrap space-x-28">
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542565/772ec2d68ef087be3b045adb551202c7.fint_brand_img1_v896xy.webp" 
              alt="BharatPe" 
              width={100} 
              height={50} 
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542611/85ba15c6b7f8093ba255ab98095ce9fd.fint_brand_img2_nfp5zr.webp" 
              alt="Vodafone" 
              width={100} 
              height={50} 
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542621/96268d9366d227a2a2c206ed2714ceeb.fint_brand_img3_ukclif.webp" 
              alt="Grintafy" 
              width={100} 
              height={50} 
              objectFit="contain"
            />
          </div>
      
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542694/197b8c56785a577ec7ba43fd745572ba.fint_brand_img5_xcbsyp.webp" 
              alt="AWR Rostamani" 
              width={100} 
              height={50} 
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728542700/d41d8cd98f00b204e9800998ecf8427e.fint_brand_img6_pske3g.webp" 
              alt="Tinystep" 
              width={100} 
              height={50} 
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
