"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import DynamicFooter from './Footer';
const DynamicGallerySection = dynamic(() => import('./GallerySection'), { ssr: false });
const DynamicContactSection = dynamic(() => import('./ContactSection'), { ssr: false });
const DynamicServiceSection = dynamic(() => import('./ServiceSection'), { ssr: false });


export default function Home() {
  // Remove all state, refs, handlers, and useKeenSlider block related to the old gallery
  // Only keep the code for the other sections and <GallerySection2 />

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Ranga ArcTech</h1>
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
            Ranga ArcTech
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
            <h2 className="text-4xl font-extrabold text-primary mb-4 uppercase">About <span className="text-[color:var(--color-accent)]">Ranga ArcTech</span></h2>
            <p className="text-xl text-gray-700 max-w-3xl">
              We are a professional welding and iron workshop dedicated to delivering high-quality metal fabrication services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image (founder) */}
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100 max-w-xl w-full">
                <img src="/founder01.jpg" alt="About Ranga ArcTech Founder" className="object-cover w-full h-[40rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem]" />
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
                  Founded with a passion for quality metalwork, Ranga ArcTech has been serving our community with professional welding and fabrication services for years.
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
      <DynamicServiceSection />
      
      {/* New Gallery Section 2 */}
      <DynamicGallerySection />

      {/* Contact Section */}
      <DynamicContactSection />

      {/* Footer */}
      <DynamicFooter />
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94703114427"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.012-2.184C12.99 27.606 14.477 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.37 0-2.71-.273-3.97-.81l-.283-.12-4.17 1.299 1.34-4.07-.184-.29C7.273 18.01 7 16.52 7 15c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9zm5.07-6.29c-.277-.139-1.64-.809-1.893-.902-.254-.093-.439-.139-.624.14-.184.277-.713.902-.873 1.088-.161.185-.323.208-.6.07-.277-.139-1.17-.431-2.23-1.375-.824-.735-1.38-1.642-1.543-1.92-.161-.277-.017-.426.122-.564.125-.124.278-.323.417-.485.139-.162.185-.278.298-.463.093-.185.047-.347-.023-.485-.07-.139-.624-1.342-.854-1.837-.225-.484-.453-.418-.624-.426-.162-.007-.347-.009-.532-.009-.185 0-.485.07-.738.347-.254.277-.972.927-.972 2.259 0 1.332.97 2.613 1.104 2.797.139.185 1.91 3.045 4.617 4.156.646.28 1.15.447 1.544.572.649.207 1.24.178 1.708.108.522-.078 1.61-.657 1.837-1.292.227-.634.227-1.178.158-1.292-.07-.113-.254-.185-.532-.324z"/>
        </svg>
      </a>
      {/* End WhatsApp Floating Button */}
    </div>
  );
}
