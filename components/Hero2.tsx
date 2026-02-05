import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Hero2 = () => {
    return (
        <section className="bg-[#F6F7FA] rounded-3xl mx-4 my-8 p-8 md:p-12 lg:p-16 overflow-hidden relative">
            {/* Topographic Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,500 C150,550 300,500 400,400 C500,300 550,200 700,250 C850,300 950,200 1000,150 L1000,600 L0,600 Z" fill="none" stroke="#000" strokeWidth="2" />
                    <path d="M0,400 C100,450 250,450 350,350 C450,250 500,150 650,200 C800,250 900,150 1000,100" fill="none" stroke="#FF5959" strokeWidth="2" />
                    <path d="M0,300 C150,350 300,300 400,200 C500,100 600,50 750,100 C900,150 900,0 1000,50" fill="none" stroke="#000" strokeWidth="2" />
                    {/* More fluid contour lines */}
                    <path d="M-50,600 Q200,500 400,550 T900,450 T1100,300" fill="none" stroke="#FF5959" strokeWidth="1.5" />
                    <path d="M-50,550 Q150,450 350,500 T850,400 T1050,250" fill="none" stroke="#000" strokeWidth="1" />
                    <path d="M-50,500 Q150,400 300,450 T800,350 T1050,200" fill="none" stroke="#FF5959" strokeWidth="1" />
                    <path d="M-50,450 Q150,350 250,400 T750,300 T1050,150" fill="none" stroke="#000" strokeWidth="1" />
                    <path d="M-50,400 Q150,300 200,350 T700,250 T1050,100" fill="none" stroke="#FF5959" strokeWidth="1" />

                    <circle cx="800" cy="100" r="300" stroke="#FF5959" strokeWidth="0.5" fill="none" opacity="0.5" />
                    <circle cx="850" cy="150" r="250" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.5" />
                    <circle cx="200" cy="500" r="400" stroke="#FF5959" strokeWidth="0.5" fill="none" opacity="0.5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="z-10 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-12 font-bold text-[#0F1113] mb-8 leading-tight">
                        <span className="text-[#FF5959]">Экономьте</span> свое время <br />
                        и получайте <span className="text-[#FF5959]">максимум</span> <br />
                        от ежедневных покупок
                    </h1>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <Link href="#" className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:opacity-90 transition">
                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M3.84 2.15C3.34 2.39 3 2.91 3 3.5V20.5C3 21.09 3.34 21.6 3.84 21.85L13.69 12 3.84 2.15Z" fill="#2196F3" />
                                <path d="M16.81 15.12L14.54 12.85 13.69 12 3.84 21.85L16.81 15.12Z" fill="#EA4335" />
                                <path d="M16.81 8.88L3.84 2.15 13.69 12 14.54 11.15 16.81 8.88Z" fill="#34A853" />
                                <path d="M20.16 10.81L16.81 8.88 14.54 11.15 14.54 12.85 16.81 15.12 20.16 13.19C20.53 12.92 20.75 12.5 20.75 12C20.75 11.5 20.5 11.08 20.16 10.81Z" fill="#FBBC04" />
                            </svg>
                            <div className="text-left">
                                <div className="text-[10px] uppercase tracking-wider">Доступно в</div>
                                <div className="text-sm font-bold">Google Play</div>
                            </div>
                        </Link>
                        <Link href="#" className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:opacity-90 transition">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.43,15.65 20.08,16.66 20.09,16.69C20.06,16.79 19.68,18.12 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                            </svg>
                            <div className="text-left">
                                <div className="text-[10px] uppercase tracking-wider">Загрузите в</div>
                                <div className="text-sm font-bold">App Store</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
                    <div className="relative w-full max-w-[300px] h-[600px] flex items-center justify-center">
                        {/* Back Phone (Smaller & Lower) */}
                        <Image
                            src="/hero.png"
                            alt="App Screenshot Back"
                            width={300}
                            height={600}
                            className="absolute top-12 -right-8 w-full max-w-[260px] h-auto opacity-70 z-0 rounded-[40px] shadow-lg rotate-6 filter brightness-90"
                        />
                        {/* Front Phone (Higher & Front) */}
                        <Image
                            src="/hero.png"
                            alt="App Screenshot Front"
                            width={300}
                            height={600}
                            className="relative top-0 w-full max-w-[280px] h-auto z-10 rounded-[40px] shadow-2xl border-4 border-white/20"
                        />
                    </div>
                </div>
            </div>

            {/* Gradient Blobs (kept for softness) */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-[#FFEAEA] rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFEAEA] rounded-full blur-[80px] opacity-40"></div>
            </div>
        </section>
    );
};

export default Hero2;
