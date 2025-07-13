"use client";

import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useKeenSlider } from "keen-slider/react";
import Video from "yet-another-react-lightbox/plugins/video";

const galleryImages = [
  { src: "/project-work/image9.jpg" },
  { src: "/project-work/video1.mp4", type: "video" },
  { src: "/project-work/image2.jpg" },
  { src: "/project-work/image3.jpg" },
  { src: "/project-work/image4.jpg" },
  { src: "/project-work/image5.jpg" },
  { src: "/project-work/image6.jpg" },
  { src: "/project-work/image8.jpg" },
  { src: "/project-work/image1.jpg" },
];

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState(new Set());
  const videoRefs = useRef({});

  const handleVideoPlay = (videoIndex) => {
    // Stop all other videos
    const newPlayingVideos = new Set([videoIndex]);
    setPlayingVideos(newPlayingVideos);
    
    // Pause carousel autoplay
    if (instanceRef.current) {
      instanceRef.current.container.dispatchEvent(new Event('mouseover'));
    }
  };

  const handleVideoPause = (videoIndex) => {
    // Remove this video from playing set
    const newPlayingVideos = new Set(playingVideos);
    newPlayingVideos.delete(videoIndex);
    setPlayingVideos(newPlayingVideos);
    
    // Resume carousel autoplay if no videos are playing
    if (newPlayingVideos.size === 0 && instanceRef.current) {
      instanceRef.current.container.dispatchEvent(new Event('mouseout'));
    }
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 24 },
    mode: "snap",
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 2, spacing: 16 } },
      "(max-width: 640px)": { slides: { perView: 1, spacing: 8 } },
    },
    slideChanged(slider) {
      setLightboxIndex(slider.track.details.rel);
    },
    created(slider) {
      // Autoplay
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 3500);
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  });

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Ranga Iron Works</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-anton">
            Ranga Iron Works
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Professional Welding & Iron Workshop
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Quality metal fabrication and welding services for industrial, commercial, and residential projects. 
            Trust our expertise for all your iron work needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get Free Quote
            </a>
            <a href="#services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white" style={{ minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <h2 className="text-4xl font-extrabold text-primary mb-4 uppercase">About <span className="text-[color:var(--color-accent)]">Ranga Iron Works</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              We are a professional welding and iron workshop dedicated to delivering high-quality metal fabrication services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image (founder) */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100 max-w-xl w-full">
                <img src="/founder01.jpg" alt="About Ranga Iron Works Founder" className="object-cover w-full h-[40rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem]" />
              </div>
            </div>
            {/* Right: Content */}
            <div>
              <h3 className="text-2xl font-extrabold text-primary mb-6 uppercase">Why <span className="text-[color:var(--color-accent)]">Choose Us</span></h3>
              <ul className="space-y-5 mb-8">
                <li className="flex items-start">
                  <span className="inline-block mt-1 mr-3 text-[color:var(--color-accent)]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M7 11l3 3 6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                  </span>
                  <span className="text-gray-700 text-lg">Superior precise quality welds</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mt-1 mr-3 text-[color:var(--color-accent)]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M7 11l3 3 6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                  </span>
                  <span className="text-gray-700 text-lg">Welds can be made with little or no filler</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block mt-1 mr-3 text-[color:var(--color-accent)]">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M7 11l3 3 6-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
                  </span>
                  <span className="text-gray-700 text-lg">Precise control of welding variables</span>
                </li>
              </ul>
              <div className="text-gray-600 text-base leading-relaxed">
                <p className="mb-4">
                  Founded with a passion for quality metalwork, Ranga Iron Works has been serving our community with professional welding and fabrication services for years.
                </p>
                <p>
                  We specialize in structural welding, custom metal fabrication, and industrial solutions, ensuring every project meets the highest standards of quality and safety.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="section-padding relative"
        style={{
          background: 'url(/service-bg.jpg) center/cover no-repeat',
          backgroundAttachment: 'fixed',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#23222d',
            opacity: 0.6,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide">
              OUR <span className="text-[color:var(--color-accent)]">SERVICES</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-[color:var(--color-accent)] mb-4 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto tracking-wide">
              Comprehensive welding and iron work services for all your metal fabrication needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center card-hover shadow-xl">
              <div className="w-14 h-14 bg-[color:var(--color-accent)] rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2"><span className="text-[color:var(--color-accent)]">STRUCTURAL</span> WELDING</h3>
              <p className="text-gray-200 mb-4 text-base">
                Professional structural welding for buildings, bridges, and industrial structures. Certified welders ensure safety and durability.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Steel frame construction</li>
                <li>• Bridge and infrastructure</li>
                <li>• Industrial equipment</li>
              </ul>
            </div>
            {/* Service 2 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center card-hover shadow-xl">
              <div className="w-14 h-14 bg-[color:var(--color-accent)] rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" />
                  <rect x="7" y="7" width="4" height="4" rx="1" strokeWidth="2" />
                  <rect x="13" y="7" width="4" height="4" rx="1" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2"><span className="text-[color:var(--color-accent)]">CUSTOM</span> FABRICATION</h3>
              <p className="text-gray-200 mb-4 text-base">
                Custom metal fabrication to your exact specifications. From concept to completion, we bring your ideas to life.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Custom metal furniture</li>
                <li>• Architectural elements</li>
                <li>• Industrial components</li>
              </ul>
            </div>
            {/* Service 3 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center card-hover shadow-xl">
              <div className="w-14 h-14 bg-[color:var(--color-accent)] rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2 2 2m-2-2v6m8-6a8 8 0 11-16 0 8 8 0 0116 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2"><span className="text-[color:var(--color-accent)]">REPAIR</span> & MAINTENANCE</h3>
              <p className="text-gray-200 mb-4 text-base">
                Expert repair and maintenance services for existing metal structures and equipment. Quick response and reliable solutions.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Equipment repair</li>
                <li>• Structural maintenance</li>
                <li>• Emergency repairs</li>
              </ul>
            </div>
            {/* Service 4 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center card-hover shadow-xl">
              <div className="w-14 h-14 bg-[color:var(--color-accent)] rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2"><span className="text-[color:var(--color-accent)]">GATES</span> & FENCING</h3>
              <p className="text-gray-200 mb-4 text-base">
                Custom iron gates and fencing solutions for residential and commercial properties. Security and aesthetics combined.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Security gates</li>
                <li>• Decorative fencing</li>
                <li>• Automatic systems</li>
              </ul>
            </div>
            {/* Service 5 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center card-hover shadow-xl">
              <div className="w-14 h-14 bg-[color:var(--color-accent)] rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2"><span className="text-[color:var(--color-accent)]">INDUSTRIAL</span> SOLUTIONS</h3>
              <p className="text-gray-200 mb-4 text-base">
                Comprehensive industrial welding and fabrication services for manufacturing and production facilities.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Machinery fabrication</li>
                <li>• Production equipment</li>
                <li>• Custom tooling</li>
              </ul>
            </div>
            {/* Service 6 */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center card-hover shadow-xl">
              <div className="w-14 h-14 bg-[color:var(--color-accent)] rounded-lg flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[color:var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2"><span className="text-[color:var(--color-accent)]">SAFETY</span> CERTIFIED</h3>
              <p className="text-gray-200 mb-4 text-base">
                All our work meets industry safety standards and certifications. Quality assurance and compliance guaranteed.
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Safety certified</li>
                <li>• Quality assurance</li>
                <li>• Compliance guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-white flex flex-col justify-center" style={{ minHeight: 'calc(100vh - 64px)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-2 tracking-wide font-anton">
              OUR <span className="text-[color:var(--color-accent)]">GALLERY</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-[color:var(--color-accent)] mb-4 rounded-full"></div>
          </div>
          <div ref={sliderRef} className="keen-slider">
            {galleryImages.map((img, idx) => (
              <div
                key={img.src}
                className="keen-slider__slide flex items-center justify-center cursor-pointer"
                style={{ minHeight: 320 }}
                onClick={() => {
                  if (img.type !== "video") {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }
                }}
              >
                {img.type === "video" ? (
                  <div className="relative w-full h-80 max-h-[22rem] max-w-full flex items-center justify-center bg-black rounded-xl">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[idx] = el;
                      }}
                      src={img.src}
                      className="object-cover w-full h-80 max-h-[22rem] rounded-xl"
                      style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                      preload="metadata"
                      muted
                      playsInline
                      controls={playingVideos.has(idx)}
                      onPlay={() => handleVideoPlay(idx)}
                      onPause={() => handleVideoPause(idx)}
                      onEnded={() => handleVideoPause(idx)}
                    />
                    {!playingVideos.has(idx) && (
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (videoRefs.current[idx]) {
                            videoRefs.current[idx].play();
                          }
                        }}
                      >
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="drop-shadow-lg">
                          <circle cx="32" cy="32" r="32" fill="rgba(48,56,73,0.7)" />
                          <polygon points="26,20 48,32 26,44" fill="#f2c014" />
                        </svg>
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    src={img.src}
                    alt={`Gallery image ${idx + 1}`}
                    className="rounded-xl shadow-lg object-cover w-full h-80 max-h-[22rem] max-w-full"
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                  />
                )}
              </div>
            ))}
          </div>
          {/* Carousel Arrows */}
          <div className="flex justify-center gap-6 mt-6">
            <button
              className="rounded-full bg-[color:var(--color-primary)] text-white w-10 h-10 flex items-center justify-center hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-primary)] transition"
              onClick={() => instanceRef.current?.prev()}
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              className="rounded-full bg-[color:var(--color-primary)] text-white w-10 h-10 flex items-center justify-center hover:bg-[color:var(--color-accent)] hover:text-[color:var(--color-primary)] transition"
              onClick={() => instanceRef.current?.next()}
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-[color:var(--color-accent)] ${lightboxIndex === idx ? 'bg-[color:var(--color-accent)]' : 'bg-white'}`}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={galleryImages.map((img) => img.type === "video" ? { type: "video", src: img.src } : { src: img.src })}
            index={lightboxIndex}
            on={{ view: ({ index }) => setLightboxIndex(index) }}
            plugins={[Video]}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="section-padding relative"
        style={{
          background: 'url(/contact-bg.jpg) center/cover no-repeat',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(35,34,45,0.8)',
            zIndex: 1,
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with us for a free consultation and quote.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#303849]/90 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="First Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Last Name" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Phone" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option className="text-gray-700 bg-white">Select a service</option>
                    <option className="text-gray-900 bg-white">Structural Welding</option>
                    <option className="text-gray-900 bg-white">Custom Fabrication</option>
                    <option className="text-gray-900 bg-white">Repair & Maintenance</option>
                    <option className="text-gray-900 bg-white">Gates & Fencing</option>
                    <option className="text-gray-900 bg-white">Industrial Solutions</option>
                    <option className="text-gray-900 bg-white">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Project Details</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-500 rounded-lg bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Project Details"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="bg-[#303849]/80 p-8 rounded-lg shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <p className="text-gray-200 mb-8">
                  We're here to help with all your welding and iron work needs. 
                  Contact us today for a free consultation and quote.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-200">+94 70 311 4427</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-200">info@rangaironwork.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                    <p className="text-gray-200">315/2,<br />Rajawella<br />Digana, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-200">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Ranga Iron Works</h3>
              <p className="text-gray-300 mb-6">
                Professional welding and iron work services. Quality craftsmanship you can trust for all your metal fabrication needs.
              </p>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a href="https://facebook.com/rangaironwork" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com/@RangaIronworks" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.513C0 5.156 5.148 0 11.495 0c3.062 0 5.945 1.191 8.104 3.353A11.42 11.42 0 0 1 24 11.513c-.003 6.339-5.151 11.486-11.504 11.486m6.807-17.293A9.093 9.093 0 0 0 11.495 2.13c-5.053 0-9.162 4.106-9.165 9.155 0 1.809.482 3.568 1.397 5.104l.221.373-.593 2.168 2.228-.587.362.215a9.1 9.1 0 0 0 4.55 1.221h.004c5.052 0 9.162-4.106 9.165-9.155a9.13 9.13 0 0 0-2.687-6.53"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Structural Welding</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Custom Fabrication</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Repair & Maintenance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Gates & Fencing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+94 70 311 4427</li>
                <li>info@rangaironwork.com</li>
                <li>315/2, Rajawella</li>
                <li>Digana, Sri Lanka</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Ranga Iron Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
