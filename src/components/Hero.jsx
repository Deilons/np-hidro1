import { ArrowRight, Shield, Zap, Award } from "lucide-react"
import lavado from "../assets/lavadoIndu.webp"
const Hero = () => {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center relative overflow-hidden pt-16 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Expertos en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Limpieza Industrial
              </span>{" "}
              con Equipos de Alta Presión
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Servicios profesionales de hidrolavado para intercambiadores, evaporadores y condensadores con tecnología
              de punta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center justify-center">
                Ver Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary">Cotizar Proyecto</button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="font-semibold">Equipos Certificados</h3>
                  <p className="text-sm text-blue-200">Hasta 20,000 PSI</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="font-semibold">Servicio Rápido</h3>
                  <p className="text-sm text-blue-200">24/7 Disponible</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="font-semibold">Experiencia</h3>
                  <p className="text-sm text-blue-200">+10 años</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src={lavado}
                alt="Equipo de hidrolavado industrial"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
