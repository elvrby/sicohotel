import Image from "next/image";
const IndexComponent: React.FC = () => {
    return(
        <main className="w-full flex items-center justify-center">
            <div className="flex items-center justify-between w-full pl-40 pr-40">
                <div className="w-full flex mt-12">
                    <div className="w-full flex flex-col items-start">
                        <h1 className="w-96 text-4xl font-bold">Enjoy Your Vacation In Our Resort</h1>
                        <p className="w-96 text-sm mt-4">Accompanying us, you have a trip of experiences,
                        with Cheisfis, booking accommodation,
                        resort villas, hotels</p>
                        <button className="w-36 mt-6 bg-[#6E57FF] text-white text-sm p-2 rounded-full">Start Search</button>
                        <div className="w-full flex items-center text-xs mt-36">
                            <div className="flex items-center mr-4">
                                <div className="bg-black rounded-full w-1.5 h-1.5 mr-1"></div>
                                <span>Stays</span>
                            </div>
                            <span className="mr-4">Experience</span>
                            <span className="mr-4">Cars</span>
                            <span className="mr-4">Flights</span>
                        </div>
                    </div>

                    <div className="flex w-full space-x-4">
                        <div className="flex flex-col space-y-4">
                            <Image className="rounded-lg" src={"/res.jpg"} alt="res.jpg" width={300} height={300}></Image>
                            <Image className="rounded-lg" src={"/res2.jpg"} alt="res2.jpg" width={300} height={300}></Image>
                        </div>
                        <div>
                            <Image className="rounded-lg h-full object-cover mx-auto" src={"/res3.jpeg"} alt="res3.jpg" width={250} height={1000}></Image>
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}
export default IndexComponent;