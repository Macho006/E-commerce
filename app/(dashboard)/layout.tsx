import Link from 'next/link'
import React from 'react'
import Navbar from '@/components/shared/navbar'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      
      <main>
        {children}
      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}
