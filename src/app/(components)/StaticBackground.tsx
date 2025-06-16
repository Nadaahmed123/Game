// components/StaticBackground.tsx
'use client';

import Image from 'next/image';
import React from 'react';

const StaticBackground = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={imageUrl}
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover object-center"
        quality={60}
        priority
        loading="eager"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/default-background.jpg';
        }}
      />
      <div className="absolute inset-0 bg-black/40 md:bg-black/50" />
    </div>
  );
};

export default StaticBackground;