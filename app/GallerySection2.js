'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'yet-another-react-lightbox/styles.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const slides = [
  { src: "/project-work/image9.jpg" },
  {
    src: "/project-work/video1.mp4",
    type: "video",
    poster: "/fallback.jpg",
    sources: [
      { src: "/project-work/video1.mp4", type: "video/mp4" }
    ]
  },
  { src: "/project-work/image2.jpg" },
  { src: "/project-work/image3.jpg" },
  { src: "/project-work/image4.jpg" },
  { src: "/project-work/image5.jpg" },
  { src: "/project-work/image6.jpg" },
  { src: "/project-work/image8.jpg" },
  { src: "/project-work/image1.jpg" },
  { src: "/project-work/image10.jpg" },
];

export default function GallerySection2() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="gallery2" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-2 tracking-wide font-anton">
            OUR <span className="text-[color:var(--color-accent)]">GALLERY</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-[color:var(--color-accent)] mb-4 rounded-full"></div>
        </div>

        {/* Swiper Carousel for Gallery Grid */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="my-8"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full aspect-[4/3] cursor-pointer overflow-hidden rounded-xl"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                {slide.type === 'video' ? (
                  <div className="relative w-full h-full">
                    <video
                      src={slide.src}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      style={{ pointerEvents: 'none' }}
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
                        <polygon points="26,20 48,32 26,44" fill="#f2c014" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <img
                    src={slide.src}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Video, Slideshow]}
          slideshow={{ autoplay: true, delay: 3000 }}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      </div>
    </section>
  );
} 