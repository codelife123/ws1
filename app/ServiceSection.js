export default function ServiceSection() {
  return (
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
  );
} 