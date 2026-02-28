'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto md:px-8 sm:px-4 px-2 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* ─── Left card ─── */}
        <div className="md:col-span-2 bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[220px] shadow-sm border border-gray-100">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              <span className="text-[#f04d3c]">1.8 млн</span> товаров в{' '}
              <span className="text-[#f04d3c]">2272</span> магазинах
              <br />
              найди, сравни, выбирай!
            </h1>
          </div>
          <div className="mt-6">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 bg-[#f04d3c] hover:bg-[#d9392a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Перейти к категориям
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ─── Right card ─── */}
        <div className="md:col-span-1 bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[220px] shadow-sm border border-gray-100 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold leading-snug text-gray-900">
              <span className="text-[#f04d3c]">Топ-10</span> смартфонов
              <br />
              2023 года
            </h2>
            <Link
              href="/top-smartphones"
              className="inline-flex items-center gap-2 mt-4 bg-[#f04d3c] hover:bg-[#d9392a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Смотреть
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Phone image – positioned bottom-right */}
          <div className="absolute bottom-0 right-0 h-[180px] w-[120px] pointer-events-none select-none">
            <Image
              src="/iphone-17-pro-sil.png"
              alt="Смартфон"
              fill
              className="object-contain object-bottom"
              onError={(e) => {
                // fallback – hide if image missing
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
