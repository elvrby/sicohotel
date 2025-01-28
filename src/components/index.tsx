import Image from "next/image";

const IndexComponent: React.FC = () => {
  return (
    <main className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-40">
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
      </div>
    </main>
  );
};

export default IndexComponent;