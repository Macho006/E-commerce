import React from 'react'
import Hero from '@/components/shared/hero'
import ReviewsSection from '@/components/home/reviews-section';
import Products from "@/components/product/NewArrivalsSection"
import Stats from '@/components/Stats';
import Hero2 from '@/components/Hero2';
import Category from '@/components/category/page';

export default function HomePage() {
    return (
        <div className="bg-[#f8f9fa] min-h-screen pb-12">
            <Hero />

            {/* Секция "Лучший выбор" (категории) */}
            <Category />

            <Stats />
            <Hero2 />
            <Products />
            <ReviewsSection />
        </div>
    )
}
