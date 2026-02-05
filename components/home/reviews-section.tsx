import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        title: 'Обзор устаревших смартфонов',
        description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus risus viverra enim nunc.',
        image: '/images/abzor1.png',
        link: '#'
    },
    {
        id: 2,
        title: 'Обзор устаревших смартфонов',
        description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus risus viverra enim nunc.',
        image: '/images/abzor2.png',
        link: '#'
    },
    {
        id: 3,
        title: 'Обзор устаревших смартфонов',
        description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus risus viverra enim nunc.',
        image: '/images/abzor3.png',
        link: '#'
    },
    {
        id: 4,
        title: 'Обзор устаревших смартфонов',
        description: 'Lorem ipsum dolor sit amet consectetur. Rhoncus risus viverra enim nunc.',
        image: '/images/abzor4.png',
        link: '#'
    },
];

const ReviewsSection = () => {
    return (
        <section className="container mx-auto px-4 md:px-8 mt-16 mb-16">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Обзоры</h2>
                <Link href="#" className="flex items-center text-red-500 hover:text-red-600 transition-colors text-sm font-medium">
                    К обзорам <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative aspect-video w-full">
                            {/* Using a gray placeholder background to match design feel if image fails to load or is placeholder */}
                            <div className="absolute inset-0 bg-gray-200">
                                <Image
                                    src={review.image}
                                    alt={review.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-bold text-lg mb-2 text-gray-900 leading-tight">
                                {review.title}
                            </h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                {review.description}
                            </p>
                            <Link href={review.link} className="inline-flex items-center text-red-500 hover:text-red-600 text-sm font-medium">
                                Смотреть <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewsSection;
