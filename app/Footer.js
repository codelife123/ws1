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
              <a href="https://wa.me/94721859308" className="text-gray-300 hover:text-white transition-colors" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
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
              <li>+1 (555) 123-4567</li>
              <li>info@rangaironwork.com</li>
              <li>123 Industrial Way</li>
              <li>Workshop District</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Ranga ArcTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 