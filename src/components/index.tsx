import Image from "next/image";
import SearchBar from "@/src/components/addons/searchbar";

const IndexComponent: React.FC = () => {
  
  return (
    <main className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-32">
        <div className="w-full flex flex-col-reverse lg:flex-row mt-8 lg:mt-12 gap-8">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start px-4 sm:px-0">
            <h1 className="w-full text-3xl sm:text-4xl font-bold mt-4 sm:mt-5 leading-tight">
              Enjoy Your Vacation In Our Resort
            </h1>
            <p className="w-full max-w-md text-sm sm:text-base mt-3 sm:mt-4 text-gray-600">
              Accompanying us, you have a trip of experiences, with Cheisfis,
              booking accommodation, resort villas, hotels
            </p>
            <button className="mt-6 w-full sm:w-36 bg-[#6E57FF] text-white text-sm sm:text-base py-2 px-4 rounded-full hover:bg-[#5845CC] transition-colors">
              Start Search
            </button>
            
            {/* Navigation */}
            <div className="w-full flex flex-wrap items-center gap-4 text-xs sm:text-sm mt-8 lg:mt-24">
              {['Stays', 'Experience', 'Cars', 'Flights'].map((item, index) => (
                <div 
                  key={item}
                  className="flex items-center cursor-pointer hover:text-[#6E57FF] transition-colors"
                >
                  {index === 0 && (
                    <div className="bg-black rounded-full w-1.5 h-1.5 mr-1" />
                  )}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex gap-4 overflow-hidden">
            <div className="flex flex-col gap-4 w-1/2">
              <div className="relative aspect-square">
                <Image
                  src="/res.jpg"
                  alt="Resort 1"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative aspect-square">
                <Image
                  src="/res2.jpg"
                  alt="Resort 2"
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="w-1/2 relative">
              <Image
                src="/res3.jpeg"
                alt="Resort 3"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          </div>
        
          <div>
                <SearchBar></SearchBar>
          </div>

          <div className="mt-10">
            <div>
              <h1 className="text-2xl font-bold">Suggestion For Discovery</h1>
              <span className="text-sm">Popular place we are recommend for you</span>
            </div>
            <div className="w-full p-2 grid grid-cols-2 gap-4 md:grid-cols-5">
            {[
              { src: "/jakarta-1.png", alt: "jakarta", name: "Jakarta" },
              { src: "/bandung-1.png", alt: "bandung", name: "Bandung" },
              { src: "/borobudur-1.png", alt: "yogyakarta", name: "Yogyakarta" },
              { src: "/bali-1.png", alt: "bali", name: "Bali" },
              { src: "/lombok-1.png", alt: "lombok", name: "Lombok" },
            ].map((destination, index) => (
              <div
                key={index}
                className="p-2 hover:shadow-lg hover:rounded-lg flex flex-col justify-center"
              >
                {/* Untuk menjaga gambar tetap di tengah */}
                <Image
                  src={destination.src}
                  alt={destination.alt}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                {/* Teks di bawah gambar rata kiri */}
                <h1 className="text-xl font-semibold mt-2 text-left">
                  {destination.name}
                </h1>
                <span className="text-sm text-left">80+ Hotels Available</span>
              </div>
            ))}
          </div>

          <div className="hover:rounded-lg hover:shadow-lg w-full items-center p-10 mt-5 md:flex">
              {/* Bagian Gambar */}
              <div className="w-full md:w-1/2">
                <Image 
                  className="w-full h-auto" 
                  src="/hero-image1.png" 
                  alt="Hero Image" 
                  width={1200} 
                  height={1200} 
                />
              </div>
              
              {/* Bagian Konten */}
              <div className="w-full md:w-1/2 px-4 md:px-10 mt-6 md:mt-0 text-left md:text-left">
                <h2 className="text-sm font-medium text-gray-500">BENEFITS</h2>
                <h1 className="text-4xl font-bold text-black mt-2">Enjoyable Trip</h1>

                <div className="mt-6">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-md">Living Cost</span>
                  <h3 className="text-lg font-bold mt-2">Affordable Price</h3>
                  <p className="text-gray-600">Travel anywhere on an affordable budget with us to make traveling enjoyable.</p>
                </div>

                <div className="mt-6">
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-md">Services</span>
                  <h3 className="text-lg font-bold mt-2">Many Services</h3>
                  <p className="text-gray-600">there are many services that you can enjoy just for you
                  Gym, Spa, SwimmingPool etc</p>
                </div>

                <div className="mt-6">
                  <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-md">Secure</span>
                  <h3 className="text-lg font-bold mt-2">Good Security</h3>
                  <p className="text-gray-600">Provide the best security service for you and your privacy by vacationing with us.</p>
                </div>
              </div>
            </div>


        </div>

         
      </div>
    </main>
  );
};

export default IndexComponent;