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
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728975891/finance-brand1_n6iqd0.svg" 
              alt="BharatPe" 
              width={200} 
              height={20} 
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976101/jupiter-removebg-preview_xbkqsz.png" 
              alt="Vodafone" 
              width={200} 
              height={20} 
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976105/ippo-removebg-preview_paupx0.png" 
              alt="Grintafy" 
              width={200} 
              height={20} 
              objectFit="contain"
            />
          </div>
      
          <div className="flex justify-center items-center">
            <Image 
              src="https://res.cloudinary.com/dlg3i3ari/image/upload/v1728976113/Groww-removebg-preview_gso9ja.png" 
              alt="AWR Rostamani" 
              width={200} 
              height={20} 
              objectFit="contain"
            />
          </div>
         
        </div>
      </div>
    </section>
  );
}
