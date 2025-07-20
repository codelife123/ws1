"use client";
import GallerySectionClient from './GallerySectionClient';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Gallery - Ranga ArcTech</h1>
        <GallerySectionClient slidesPerView={6} grid={true} />
      </div>
    </main>
  );
} 