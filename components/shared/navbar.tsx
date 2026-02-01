'use client';

import Link from 'next/link'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ChartNoAxesColumn, Heart, User } from 'lucide-react';

const items = [
  { label: "Select a fruit", value: null, link: '/category' },
  { label: "Apple", value: "apple", link: '/category' },
  { label: "Banana", value: "banana", link: '/category' },
  { label: "Blueberry", value: "blueberry", link: '/category' },
  { label: "Grapes", value: "grapes", link: '/category' },
  { label: "Pineapple", value: "pineapple", link: '/category' },
]

export default function navbar() {
  return (
    <nav className='container mx-auto md:px-8 sm:px-4 px-2 flex items-center gap-8 h-14'>
      <Link href='/'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.75 2.135v9.615h-9.5V3.492zm-11 1.982v7.633h-8.5V5.515zm-8.5 9.133h8.5v7.575l-8.5-.81zm10 0h9.5v8.617l-9.5-1.385z" /></svg>
      </Link>

      <div className='flex items-center gap-2 w-full'>
        <div className='flex items-center w-full'>
          <Select items={items}>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                {items.map((item) => (
                  <Link key={item.value} href={item.link}>
                    <SelectItem value={item.value}>
                      {item.label}
                    </SelectItem>
                  </Link>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input className='w-full' placeholder='Поиск товаров' />
        </div>

        <Button variant='secondary'>
          <Heart />
        </Button>
        <Button variant='secondary'>
          <ChartNoAxesColumn />
        </Button>
        <Button variant='secondary'>
          <User />
        </Button>
      </div>
    </nav>
  )
}
