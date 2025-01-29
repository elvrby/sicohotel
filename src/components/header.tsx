"use client";

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import NavbarComponent from "./navbar";

const HeaderComponent: React.FC = () =>{
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleToggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  
    const handleCloseNavbar = () => {
      setIsNavbarOpen(false);
    };
  
    const [, setTheme] = useState<'light' | 'dark'>('light');
  
    useEffect(() => {
      const storedTheme = Cookies.get('theme');
      if (storedTheme === 'dark') {
        setTheme('dark');
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        setTheme('light');
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      }
    }, []);

    // Scroll Effect
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <header className="w-full h-14 flex items-center justify-center shadow-md z-50">
            {/* Desktop */}
            <div className={`fixed top-0 w-full lg:flex hidden h-16 items-center justify-between pl-40 pr-40 z-20 transition-colors duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
                <div className="flex items-center text-sm font-medium">
                    <div className="flex h-full items-center">
                        <Image className="mr-4" src={"/AkiZone.png"} alt="" width={50} height={50}></Image>
                        <div className="border-r-2 border h-6"></div>
                    </div>
                    <div className="ml-4">
                        <a className="mr-4" href="">Home</a>
                        <a className="mr-4" href="">Travels</a>
                        <a className="mr-4" href="">Destinations</a>
                        <a className="mr-4" href="">Contact</a>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button className="flex items-center">
                        {/* Globe SVG */}
                        <div className="mr-1">
                            <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 5.6461C9.33086 5.6461 7.16252 5.39628 5.05762 4.90297C4.84428 4.853 4.71183 4.64045 4.76179 4.42631C4.81176 4.21376 5.01955 4.08131 5.23924 4.13048C9.83369 5.20752 14.7168 5.0719 19.2597 3.73552C19.4739 3.67524 19.6912 3.79341 19.7522 4.00359C19.8141 4.21455 19.6943 4.43424 19.4842 4.4961C16.8899 5.25907 14.2037 5.6461 11.5 5.6461Z" fill="#707070"/>
                                <path d="M19.3716 19.2875C19.3343 19.2875 19.297 19.2819 19.2589 19.2708C14.2156 17.7869 8.78441 17.7869 3.74107 19.2708C3.52772 19.3303 3.30962 19.2129 3.24855 19.0028C3.18669 18.7918 3.30645 18.5721 3.51662 18.5102C8.70748 16.9827 14.2933 16.9827 19.4842 18.5102C19.6943 18.5721 19.8141 18.7918 19.7522 19.0028C19.7015 19.1764 19.5429 19.2875 19.3716 19.2875Z" fill="#707070"/>
                                <path d="M11.0154 22.6796C10.9377 22.6796 10.8608 22.6574 10.7918 22.6106C7.09035 20.0846 4.88076 15.9311 4.88076 11.5C4.88076 7.90962 6.29328 4.53021 8.85976 1.98435C9.016 1.8281 9.26741 1.83128 9.42048 1.98593C9.57514 2.14138 9.57355 2.39279 9.4189 2.54666C7.0039 4.94262 5.67386 8.12217 5.67386 11.5C5.67386 15.6686 7.75417 19.5778 11.2399 21.9555C11.4207 22.0784 11.4667 22.3259 11.3438 22.5067C11.266 22.6193 11.1415 22.6796 11.0154 22.6796Z" fill="#707070"/>
                                <path d="M12.0187 22.6796C11.8926 22.6796 11.7681 22.6193 11.6911 22.5067C11.5682 22.3251 11.6142 22.0784 11.795 21.9555C15.2807 19.5778 17.361 15.6686 17.361 11.5C17.361 7.33145 15.2807 3.42224 11.795 1.04452C11.6142 0.921586 11.5682 0.674138 11.6911 0.49331C11.8149 0.312483 12.0623 0.268069 12.2423 0.389414C15.9438 2.91545 18.1533 7.06893 18.1533 11.5C18.1533 15.9311 15.9438 20.0846 12.2423 22.6106C12.1741 22.6566 12.0964 22.6796 12.0187 22.6796Z" fill="#707070"/>
                                <path d="M11.5 22.5614C11.2811 22.5614 11.1034 22.3838 11.1034 22.1649V0.835138C11.1034 0.616241 11.2811 0.438586 11.5 0.438586C11.7189 0.438586 11.8966 0.616241 11.8966 0.835138V22.1649C11.8966 22.3846 11.7189 22.5614 11.5 22.5614Z" fill="#707070"/>
                                <path d="M22.5614 11.8966H2.02479C1.8059 11.8966 1.62824 11.7189 1.62824 11.5C1.62824 11.2811 1.8059 11.1034 2.02479 11.1034H22.5622C22.7811 11.1034 22.9588 11.2811 22.9588 11.5C22.9588 11.7189 22.7811 11.8966 22.5614 11.8966Z" fill="#707070"/>
                                <path d="M11.5 23C5.15914 23 0 17.8409 0 11.5C0 8.70748 1.01359 6.01252 2.85517 3.91397C2.99952 3.749 3.24934 3.73314 3.4151 3.87748C3.57928 4.02183 3.59514 4.27245 3.45159 4.43741C1.73769 6.39083 0.793104 8.89941 0.793104 11.5C0.793104 17.4039 5.59614 22.2069 11.5 22.2069C17.4039 22.2069 22.2069 17.4039 22.2069 11.5C22.2069 5.59614 17.4039 0.793103 11.5 0.793103C9.05883 0.793103 6.76041 1.59255 4.85459 3.105C4.68328 3.24141 4.43424 3.21365 4.29783 3.04076C4.16141 2.86945 4.18997 2.62041 4.36207 2.484C6.40907 0.858931 8.87721 0 11.5 0C17.8409 0 23 5.15914 23 11.5C23 17.8409 17.8409 23 11.5 23Z" fill="#707070"/>
                            </svg>
                        </div>
                        <h3 className="text-xl text-[#707070]">/</h3>
                        {/* ThemeMode SVG */}
                        <div className="ml-1">
                            <svg width="16" height="16" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.25 22.75C17.4632 22.75 22.5 17.7132 22.5 11.5C22.5 5.28679 17.4632 0.25 11.25 0.25C5.03679 0.25 0 5.28679 0 11.5C0 17.7132 5.03679 22.75 11.25 22.75ZM11.25 20.5V2.5C16.2206 2.5 20.25 6.52943 20.25 11.5C20.25 16.4706 16.2206 20.5 11.25 20.5Z" fill="#707070"/>
                            </svg>
                        </div>
                        {/* Dropdown SVG */}
                        <div className="ml-1">
                            <svg width="12" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L8 8L15 1" stroke="#707070"/>
                            </svg>
                        </div>
                    </button>

                    <button className="w-24 rounded-full text-sm border border-[#AAAAAA] hover:bg-[#6E57FF] hover:text-white p-4 pb-1 pt-1 ml-5">
                        Login
                    </button>
                </div>
            </div>


            {/* Mobile */}
            <div className="fixed bg-white w-full h-14 lg:hidden shadow-sm z-20">
                <div className="w-full flex items-center justify-between pl-4 pr-4 p-3 2xl:pl-80 2xl:pr-80">
                    <div className="w-full flex-1 text-center items-center justify-center flex font-semibold text-lg">
                        <h1>Sico Hotel</h1>
                    </div>
                    <button className="w-7 flex items-center justify-end" onClick={handleToggleNavbar}>
                    <svg width={25}viewBox="0 0 13 8"fill="none"xmlns="http://www.w3.org/2000/svg"className="ofill">
                        <path d="M12.5149 0.936037H0.485074C0.356425 0.936037 0.233044 0.886728 0.142075 0.798958C0.0511059 0.711187 0 0.592145 0 0.468019C0 0.343892 0.0511059 0.22485 0.142075 0.137079C0.233044 0.0493086 0.356425 0 0.485074 0H12.5149C12.6436 0 12.767 0.0493086 12.8579 0.137079C12.9489 0.22485 13 0.343892 13 0.468019C13 0.592145 12.9489 0.711187 12.8579 0.798958C12.767 0.886728 12.6436 0.936037 12.5149 0.936037Z"/>
                        <path d="M12.5149 4.46802H0.485075C0.356425 4.46802 0.233044 4.41871 0.142075 4.33094C0.051106 4.24317 6.46176e-08 4.12413 6.46176e-08 4C6.46176e-08 3.87587 0.051106 3.75683 0.142075 3.66906C0.233044 3.58129 0.356425 3.53198 0.485075 3.53198H12.5149C12.6436 3.53198 12.767 3.58129 12.8579 3.66906C12.9489 3.75683 13 3.87587 13 4C13 4.12413 12.9489 4.24317 12.8579 4.33094C12.767 4.41871 12.6436 4.46802 12.5149 4.46802Z"/>
                        <path d="M12.5149 8H0.485075C0.356425 8 0.233044 7.95069 0.142075 7.86292C0.051106 7.77515 6.46176e-08 7.65611 6.46176e-08 7.53198C6.46176e-08 7.40785 0.051106 7.28881 0.142075 7.20104C0.233044 7.11327 0.356425 7.06396 0.485075 7.06396H12.5149C12.6436 7.06396 12.767 7.11327 12.8579 7.20104C12.9489 7.28881 13 7.40785 13 7.53198C13 7.65611 12.9489 7.77515 12.8579 7.86292C12.767 7.95069 12.6436 8 12.5149 8Z"/>
                    </svg>
                    </button>
                </div>
                <NavbarComponent isOpen={isNavbarOpen} onClose={handleCloseNavbar} />
            </div>

        </header>
    )
}
export default HeaderComponent;