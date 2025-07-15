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
                  <p className="text-gray-200">+1 (555) 123-4567</p>
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
                  <p className="text-gray-200">123 Industrial Way<br />Workshop District<br />City, State 12345</p>
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
  );
} 