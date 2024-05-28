"use client"

import React from 'react'

const ContentCentered = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full min-h-screen'>
      {children}
    </div>
  )
}

export default ContentCentered