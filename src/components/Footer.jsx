import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-industrial text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Droplets className="h-8 w-8 text-green-400 mr-3" />
              <span className="text-2xl font-bold">HIDROLAVADORA</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Especialistas en limpieza industrial con equipos de alta presión. Más de 10 años brindando servicios de
              calidad en todo el territorio nacional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3 text-blue-100">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors duration-300">
                  Limpieza Industrial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors duration-300">
                  Intercambiadores
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors duration-300">
                  Evaporadores
                </a>
              </li>
              <li>
                <a href="#equipos" className="hover:text-white transition-colors duration-300">
                  Alquiler de Equipos
                </a>
              </li>
              <li>
                <a href="#suministros" className="hover:text-white transition-colors duration-300">
                  Suministros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>3012411067</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>nphidrogmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p>Calle 60 40 46</p>
                  <p>Barrancabermeja, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">© {currentYear} HIDROLAVADORA. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
