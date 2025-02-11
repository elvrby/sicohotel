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

          {/* Tentang Trip atau Hotel */}
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

             {/* Our Facilities Section */}
            <div className=" w-full p-6 md:p-10 mt-10">
              <div className="flex">
                <svg width="30" height="35" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.58457 42.7227C1.75986 42.7227 0.275219 41.2261 0.275219 39.3868V16.7896H43.7249V39.3868C43.7249 41.2261 42.2402 42.7227 40.4155 42.7227H3.58457Z" fill="#494949"/>
                  <path d="M43.4492 17.067V39.3874C43.4492 41.0736 42.0883 42.4459 40.415 42.4459H3.58457C1.91173 42.4459 0.550356 41.0741 0.550356 39.3874V17.067H43.4492ZM43.9994 16.5123H8.23917e-05V39.3868C8.23917e-05 41.382 1.60468 43 3.58457 43H40.4155C42.3948 43 44 41.3825 44 39.3868V16.5123H43.9994Z" fill="#191919"/>
                  <path d="M2.20173 17.6111C2.02014 17.6111 1.86001 17.4874 1.81213 17.311L0.307135 11.7626C0.248256 11.5457 0.375919 11.3216 0.591076 11.2622L40.3374 0.309512C40.3726 0.299528 40.4084 0.29509 40.4441 0.29509C40.6257 0.29509 40.7858 0.418784 40.8337 0.595727L42.3387 6.1442C42.3976 6.36108 42.2705 6.58573 42.0553 6.64453L2.30903 17.5973C2.27326 17.6061 2.2375 17.6111 2.20173 17.6111Z" fill="#EFEFEF"/>
                  <path d="M40.4441 0.572431C40.4914 0.572431 40.5503 0.602384 40.5685 0.668391L42.0735 6.21687C42.085 6.25958 42.0729 6.29452 42.0608 6.3156C42.0487 6.33723 42.0256 6.36497 41.9827 6.37662L2.2364 17.3294C2.22484 17.3327 2.21328 17.3343 2.20173 17.3343C2.15441 17.3343 2.09553 17.3044 2.07737 17.2384L0.572368 11.6899C0.560812 11.6472 0.572918 11.6123 0.585024 11.5912C0.59713 11.5695 0.620241 11.5418 0.663163 11.5302L40.4095 0.577423C40.421 0.57354 40.4326 0.572431 40.4441 0.572431ZM40.4441 0.0177496C40.3847 0.0177496 40.3247 0.0255149 40.2647 0.0421554L0.51789 10.9943C0.15581 11.0942 -0.0571463 11.4708 0.041903 11.8358L1.5469 17.3843C1.62944 17.6888 1.90293 17.8885 2.20173 17.8885C2.26116 17.8885 2.32114 17.8807 2.38112 17.8641L42.128 6.91188C42.49 6.81204 42.703 6.43541 42.6039 6.07043L41.0989 0.521955C41.0164 0.217435 40.7429 0.0177496 40.4441 0.0177496Z" fill="#191919"/>
                  <path d="M43.7249 16.7896H0.275219L0.275769 21.7507H43.7249L43.7249 16.7896Z" fill="#EFEFEF"/>
                  <path d="M43.4492 17.067L43.4492 21.4734H0.550906L0.550356 17.067H43.4492ZM43.9994 16.5123H8.23917e-05L0.000632363 22.0281H44L43.9994 16.5123Z" fill="#191919"/>
                  <path d="M0.275769 21.7507L0.275219 16.7896H11.8684L5.41258 21.7507H0.275769Z" fill="#191919"/>
                  <path d="M11.054 17.067L5.32013 21.4728L0.550906 21.4734L0.550356 17.067H11.054ZM12.6833 16.5123H8.23917e-05L0.000632363 22.0281L5.54354 22.0275L5.52428 22.0131L12.6833 16.5123Z" fill="#191919"/>
                  <path d="M15.7544 21.7507L22.2108 16.7896H30.1215L23.6652 21.7507H15.7544Z" fill="#191919"/>
                  <path d="M29.3066 17.067L23.5727 21.4728H16.5694L22.3032 17.067H29.3066ZM30.9365 16.5123H22.1178L14.94 22.0281H23.7967L23.7774 22.0136L30.9365 16.5123Z" fill="#191919"/>
                  <path d="M34.0076 21.7507L40.4634 16.7896H43.7249L43.7249 21.7507H34.0076Z" fill="#191919"/>
                  <path d="M43.4492 17.067L43.4492 21.4734L34.8225 21.4728L40.5564 17.067H43.4492ZM43.9994 16.5123H40.3704L33.1926 22.0275H43.9994L43.9994 16.5123Z" fill="#191919"/>
                  <path d="M13.9358 7.58471L21.2197 5.57732L27.741 10.5889L20.4571 12.5957L13.9358 7.58471Z" fill="#191919"/>
                  <path d="M21.1609 5.88128L27.1313 10.4691L20.5159 12.2923L14.5455 7.70452L21.1609 5.88128ZM21.2781 5.27391L13.3261 7.4649L20.3982 12.8991L28.3502 10.7081L21.2781 5.27391Z" fill="#191919"/>
                  <path d="M2.14835 17.6289C2.00088 17.6289 1.87101 17.5285 1.83194 17.3848L0.287325 11.6888C0.239451 11.513 0.342903 11.3305 0.51734 11.2822L6.32328 9.68196L12.8446 14.6935L2.2353 17.6172C2.20723 17.625 2.17807 17.6289 2.14835 17.6289Z" fill="#191919"/>
                  <path d="M6.26495 9.98593L12.2354 14.5737L2.14835 17.3515C2.1346 17.3515 2.10598 17.3432 2.09718 17.3116L0.552558 11.6156C0.545954 11.5912 0.565764 11.5562 0.589976 11.5496L6.26495 9.98593ZM6.38216 9.37855L0.444704 11.0149C0.123344 11.1036 -0.0665008 11.4381 0.021543 11.762L1.56616 17.458C1.63935 17.7287 1.88257 17.9062 2.1478 17.9062C2.20063 17.9062 2.254 17.899 2.30738 17.8846L13.4537 14.8133L6.38216 9.37855Z" fill="#191919"/>
                  <path d="M28.8317 3.48007L40.4106 0.289543C40.4392 0.281778 40.4683 0.277895 40.4975 0.277895C40.645 0.277895 40.7748 0.378293 40.8139 0.521955L42.3585 6.21798C42.3816 6.3034 42.3706 6.3927 42.3272 6.46925C42.2837 6.54635 42.2133 6.60126 42.1285 6.62456L35.3535 8.49162L28.8317 3.48007Z" fill="#191919"/>
                  <path d="M40.4975 0.554681C40.5113 0.554681 40.5399 0.563001 40.5487 0.594618L42.0933 6.29064C42.0999 6.31505 42.0801 6.34999 42.0559 6.35665L35.4119 8.18765L29.4414 3.59988L40.4826 0.557455C40.4876 0.555236 40.4925 0.554681 40.4975 0.554681ZM40.4975 0C40.4447 0 40.3913 0.00721061 40.3379 0.0216323L28.2225 3.36026L35.2947 8.79447L42.2006 6.89136C42.522 6.80261 42.7118 6.46814 42.6238 6.1442L41.0791 0.448182C41.006 0.178052 40.7627 0 40.4975 0Z" fill="#191919"/>
                  <path d="M0.221292 11.1685L7.14319 16.4879C7.21527 16.5434 7.21527 16.6532 7.14319 16.7087L0.221292 22.0281C0.130497 22.0979 8.23917e-05 22.0325 8.23917e-05 21.9177V11.2789C0.000632666 11.1641 0.131047 11.0986 0.221292 11.1685Z" fill="#303030"/>
                  <path d="M5.41863 29.0631H38.5077C38.8329 29.0631 39.0965 28.7974 39.0965 28.4696C39.0965 28.1418 38.8329 27.8761 38.5077 27.8761H5.41863C5.09342 27.8761 4.82984 28.1418 4.82984 28.4696C4.82984 28.7974 5.09342 29.0631 5.41863 29.0631Z" fill="#D6D6D6"/>
                  <path d="M5.40047 34.2261H38.4896C38.8148 34.2261 39.0783 33.9604 39.0783 33.6325C39.0783 33.3047 38.8148 33.039 38.4896 33.039H5.40047C5.07526 33.039 4.81168 33.3047 4.81168 33.6325C4.81168 33.9604 5.07526 34.2261 5.40047 34.2261Z" fill="#D6D6D6"/>
                  <path d="M38.5259 38.2026H5.43734C5.11213 38.2026 4.84855 38.4683 4.84855 38.7961C4.84855 39.1239 5.11213 39.3896 5.43734 39.3896H38.5264C38.8516 39.3896 39.1152 39.1239 39.1152 38.7961C39.1147 38.4683 38.8511 38.2026 38.5259 38.2026Z" fill="#D6D6D6"/>
                </svg>

                <div className="ml-4">
                  <h1 className="text-3xl font-bold flex items-center">Our Facilities</h1>
                  <p className="text-gray-500">80+ Hotels Available</p>
                </div>
                
              </div>
              
              <div className="flex flex-col md:flex-row items-center md:mt-6 p-6 rounded-xl">
                <div className="hidden md:flex w-96 item right-64 rounded-3xl h-3/5 absolute bannerboxfacility">
                  
                </div>
                {/* Main Video */}
                <div className="w-full md:w-3/4 md:p-4">
                  <div className="relative w-full h-64 md:h-96  rounded-xl flex items-center justify-center">
                    <Image 
                      className="w-full h-full" 
                      src="/Gym-1.png" 
                      alt="Main Facility Image" 
                      width={800} 
                      height={450} 
                    />
                    <span className="absolute text-white p-4 rounded-full text-2xl">
                        <svg width="80" height="80" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="90" cy="90" r="65" fill="white"/>
                          <circle cx="90" cy="90" r="77.5" stroke="white" stroke-opacity="0.58" stroke-width="25"/>
                          <path d="M109 86.5359C111.667 88.0755 111.667 91.9245 109 93.4641L83.5 108.187C80.8333 109.726 77.5 107.802 77.5 104.722L77.5 75.2776C77.5 72.1984 80.8333 70.2739 83.5 71.8135L109 86.5359Z" fill="#6E57FF"/>
                        </svg>
                    </span>
                  </div>
                </div>
                {/* Thumbnail List */}
                <div className="w-full md:w-1/4 flex flex-col gap-4 mt-4 md:mt-0">
                  {["/placeholder.png", "/placeholder-2.png", "/placeholder-3.png"].map((imageSrc, index) => (
                    <div key={index} className="relative w-full h-40 md:h-28 bg-gray-300 rounded-xl flex items-center justify-center">
                      <Image 
                        className="w-full h-full object-cover rounded-xl" 
                        src={imageSrc} 
                        alt={`Thumbnail ${index + 1}`} 
                        width={200} 
                        height={300} 
                      />
                      <span className="absolute text-white p-2 rounded-full">
                        <svg width="60" height="60" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="90" r="65" fill="white"/>
                        <circle cx="90" cy="90" r="77.5" stroke="white" stroke-opacity="0.58" stroke-width="25"/>
                        <path d="M109 86.5359C111.667 88.0755 111.667 91.9245 109 93.4641L83.5 108.187C80.8333 109.726 77.5 107.802 77.5 104.722L77.5 75.2776C77.5 72.1984 80.8333 70.2739 83.5 71.8135L109 86.5359Z" fill="#6E57FF"/>
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


        </div>

         
      </div>
    </main>
  );
};

export default IndexComponent;