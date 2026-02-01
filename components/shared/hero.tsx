'use client';

import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className='container mx-auto md:px-8 sm:px-4 px-2'>
      <div className='grid grid-cols-3'>
        <div className='col-span-2 flex flex-col items-start justify-start py-4 px-0'>
          <h2 className='font-forum text-6xl'>Rapidly build modern websites without ever leaving your HTML</h2>
          <p className='mt-4 text-gray-500'>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
          <Button className='mt-4 w-55 h-10'>More info</Button>
        </div>
        <div className='col-span-1 border'>
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-68.25"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className='h-68.25'>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem className='h-68.25' key={index}>
                  <Card className='h-68.25 p-0 flex items-center justify-center'>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  )
}
