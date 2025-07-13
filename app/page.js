import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Ranga Iron Work</h1>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Ranga Iron Work
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
      <section id="about" className="section-padding bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Ranga Iron Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a professional welding and iron workshop dedicated to delivering high-quality metal fabrication services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h4>
                    <p className="text-gray-600">Years of experience in metal fabrication and welding techniques.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Timely Delivery</h4>
                    <p className="text-gray-600">We complete projects on schedule without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
                    <p className="text-gray-600">We prioritize customer satisfaction and build long-term relationships.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded with a passion for quality metalwork, Ranga Iron Work has been serving our community 
                with professional welding and fabrication services for years.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in structural welding, custom metal fabrication, and industrial solutions, 
                ensuring every project meets the highest standards of quality and safety.
              </p>
              <div className="grid grid-cols-2 gap-4">
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
      <section id="services" className="section-padding relative" style={{ background: 'linear-gradient(rgba(48,56,73,0.98),rgba(48,56,73,0.98)), url(/welding-bg.jpg) center/cover, #303849' }}>
        <div className="max-w-7xl mx-auto">
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
      <section id="gallery" className="section-padding bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our portfolio of completed projects showcasing our expertise and craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery items - placeholder images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500">Project {item}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Welding Project {item}</h3>
                  <p className="text-gray-600">Professional welding and fabrication work completed with precision and quality.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with us for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-light p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Select a service</option>
                    <option>Structural Welding</option>
                    <option>Custom Fabrication</option>
                    <option>Repair & Maintenance</option>
                    <option>Gates & Fencing</option>
                    <option>Industrial Solutions</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@rangaironwork.com</p>
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">123 Industrial Way<br />Workshop District<br />City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
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
              <h3 className="text-2xl font-bold mb-4">Ranga Iron Work</h3>
              <p className="text-gray-300 mb-6">
                Professional welding and iron work services. Quality craftsmanship you can trust for all your metal fabrication needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                <li>+1 (555) 123-4567</li>
                <li>info@rangaironwork.com</li>
                <li>123 Industrial Way</li>
                <li>Workshop District</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Ranga Iron Work. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
