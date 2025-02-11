"use client";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar: React.FC = () =>{
    const [isGuestPopupOpen, setIsGuestPopupOpen] = useState(false);
    const [destination, setDestination] = useState(""); // State untuk menyimpan destinasi yang dipilih
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
    const guestRef = useRef<HTMLDivElement>(null);
  
    const guestText =
      adults + children > 0
        ? `${adults + children} Guest${adults + children > 1 ? "s" : ""}`
        : "Add Guests";
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
          setIsGuestPopupOpen(false);
        }
      };
  
      const handleResize = () => {
        setIsGuestPopupOpen(false);
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", handleResize);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return(
        <main className="mt-4">
            {/* Search Bar */}
            <div className="relative lg:absolute lg:top-2/3 w-full max-w-2xl px-4 z-10 lg:max-w-5xl">
            <div className="bgr rounded-lg lg:rounded-full md:rounded-full shadow-xl p-4 flex flex-col sm:flex-row gap-3">
            {/* Dropdown Destination */}
            <div className="flex-1">
                <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 rounded-full border-none btnclm focus:ring-2 focus:ring-[#6E57FF]"
                >
                <option value="" disabled>
                    Select Destination
                </option>
                <option value="Bali">Bali</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Lombok">Lombok</option>
                <option value="Bandung">Bandung</option>
                <option value="Yogyakarta">Yogyakarta</option>
                </select>
            </div>

            {/* Date Picker */}
            <div className="flex-1 flex gap-3">
                <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                selectsStart
                startDate={checkInDate || undefined}
                endDate={checkOutDate || undefined}
                minDate={new Date()} // Tidak bisa memilih sebelum hari ini
                placeholderText="Check-in"
                className="w-full px-4 py-3 rounded-full border-none bg-gray-100 focus:ring-2 focus:ring-[#6E57FF]"
                />
                <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                selectsEnd
                startDate={checkInDate || undefined}
                endDate={checkOutDate || undefined}
                minDate={checkInDate || new Date()} // Tidak bisa sebelum check-in
                placeholderText="Check-out"
                className="w-full px-4 py-3 rounded-full border-none bg-gray-100 focus:ring-2 focus:ring-[#6E57FF]"
                />
            </div>

            {/* Guest Picker */}
            <div className="relative flex-1" ref={guestRef}>
                <input
                type="text"
                readOnly
                placeholder="Guests"
                onClick={() => setIsGuestPopupOpen(!isGuestPopupOpen)}
                value={guestText}
                className="w-full px-4 py-3 rounded-full border-none bg-gray-100 focus:ring-2 focus:ring-[#6E57FF] cursor-pointer"
                />
                {isGuestPopupOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 space-y-4 z-20">
                    <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-semibold">Adults</h4>
                        <p className="text-sm text-gray-500">Ages 13 or above</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                        onClick={() => setAdults(Math.max(0, adults - 1))}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                        -
                        </button>
                        <span>{adults}</span>
                        <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                        +
                        </button>
                    </div>
                    </div>
                    <div className="flex items-center justify-between">
                    <div>
                        <h4 className="font-semibold">Children</h4>
                        <p className="text-sm text-gray-500">Ages 2 - 12</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                        -
                        </button>
                        <span>{children}</span>
                        <button
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                        +
                        </button>
                    </div>
                    </div>
                </div>
                )}
            </div>

            <button className="bg-[#6E57FF] text-white px-6 py-3 rounded-full hover:bg-[#5845CC] transition-colors whitespace-nowrap">
                Search
            </button>
            </div>
            </div>
        </main>
    )
};
export default SearchBar;