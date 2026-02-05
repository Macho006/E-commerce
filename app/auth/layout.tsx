import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      login layout
      <div>
        {children}
      </div>
    </div>
  )
}
