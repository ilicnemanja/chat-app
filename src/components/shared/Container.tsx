"use client"

import React from 'react'

const Container = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <div className='container mx-auto px-4'>
        {children}
    </div>
  )
}

export default Container