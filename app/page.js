"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import DynamicFooter from './Footer';
const DynamicGallerySection = dynamic(() => import('./GallerySection'), { ssr: false });


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

      {/* New Gallery Section 2 */}
      <DynamicGallerySection />

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
