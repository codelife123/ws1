export default function ContactSection() {
  return (
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
                  <p className="text-gray-200">rangaironworkinfo@gmail.com</p>
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
                  <p className="text-gray-200">315/2 Rajawella, Digana<br />Kandy, Sri Lanka</p>
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
              {/* Social icons row */}
              <div className="flex space-x-4 mt-8">
                {/* Facebook */}
                <a href="https://facebook.com/rangaironwork" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-[#1877F3] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                      <path d="M17.525 8.998h-2.243V7.64c0-.522.343-.645.584-.645h1.624V4.527L15.3 4.52c-2.617 0-3.217 1.96-3.217 3.217v1.261H9.001v2.62h3.082v6.855h3.199V11.62h2.147l.342-2.622z"/>
                    </svg>
                  </div>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com/@RangaIronworks" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.24 3.5 12 3.5 12 3.5s-7.24 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.338 0 12 0 12s0 3.662.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.76 20.5 12 20.5 12 20.5s7.24 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.662 24 12 24 12s0-3.662-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/94703114427" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="white" viewBox="0 0 32 32">
                      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.012-2.184C12.99 27.606 14.477 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.37 0-2.71-.273-3.97-.81l-.283-.12-4.17 1.299 1.34-4.07-.184-.29C7.273 18.01 7 16.52 7 15c0-4.963 4.037-9 9-9s9 4.037 9 9-4.037 9-9 9zm5.07-6.29c-.277-.139-1.64-.809-1.893-.902-.254-.093-.439-.139-.624.14-.184.277-.713.902-.873 1.088-.161.185-.323.208-.6.07-.277-.139-1.17-.431-2.23-1.375-.824-.735-1.38-1.642-1.543-1.92-.161-.277-.017-.426.122-.564.125-.124.278-.323.417-.485.139-.162.185-.278.298-.463.093-.185.047-.347-.023-.485-.07-.139-.624-1.342-.854-1.837-.225-.484-.453-.418-.624-.426-.162-.007-.347-.009-.532-.009-.185 0-.485.07-.738.347-.254.277-.972.927-.972 2.259 0 1.332.97 2.613 1.104 2.797.139.185 1.91 3.045 4.617 4.156.646.28 1.15.447 1.544.572.649.207 1.24.178 1.708.108.522-.078 1.61-.657 1.837-1.292.227-.634.227-1.178.158-1.292-.07-.113-.254-.185-.532-.324z"/>
                    </svg>
                  </div>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@rangaarctech" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-[#010101] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                      <path d="M12.875 0h3.084a6.1 6.1 0 0 0 6.091 6.091v3.084a9.18 9.18 0 0 1-3.084-.537v7.366A7.638 7.638 0 1 1 8.337 8.337h3.083a4.555 4.555 0 1 0 4.455 4.455V0z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 