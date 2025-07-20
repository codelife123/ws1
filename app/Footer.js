export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ranga ArcTech</h3>
            <p className="text-gray-300 mb-6">
              Professional welding and iron work services. Quality craftsmanship you can trust for all your metal fabrication needs.
            </p>
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
              <li>rangaironworkinfo@gmail.com</li>
              <li>315/2 Rajawella, Digana</li>
              <li>Kandy, Sri Lanka</li>
            </ul>
            {/* Social icons below address */}
            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a href="http://www.facebook.com/RangaArcTech" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-[#1877F3] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
                    <path d="M17.525 8.998h-2.243V7.64c0-.522.343-.645.584-.645h1.624V4.527L15.3 4.52c-2.617 0-3.217 1.96-3.217 3.217v1.261H9.001v2.62h3.082v6.855h3.199V11.62h2.147l.342-2.622z"/>
                  </svg>
                </div>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@RangaArcTech" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Ranga ArcTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 