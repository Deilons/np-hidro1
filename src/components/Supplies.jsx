import { Package, Wrench, Shield, Settings, Droplets } from "lucide-react"
import lanza from "../assets/Lanza.webp"
import boquilla from "../assets/Boquilla.jpg"
import manguera from "../assets/Manguera.webp"
import traje from "../assets/traje.jpg"
import sello from "../assets/sellos.jpeg"

const Supplies = () => {
  const supplies = [
    {
      id: 1,
      title: "Lanza Flexible",
      subtitle: "4/2, 5/2, 6/2",
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      image: lanza,
      description: "Lanzas flexibles de alta presión en diferentes medidas",
    },
    {
      id: 2,
      title: "Boquillas",
      subtitle: "P2, P6, P8, P12",
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      image: boquilla,
      description: "Boquillas especializadas para diferentes tipos de lavado",
    },
    {
      id: 3,
      title: "Manguera de Alta Presión",
      subtitle: "Diferentes longitudes",
      icon: <Package className="h-8 w-8 text-blue-600" />,
      image: manguera,
      description: "Mangueras resistentes para trabajos de alta presión",
    },
    {
      id: 4,
      title: "Traje de Lavado de Alta Presión",
      subtitle: "Protección completa",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      image: traje,
      description: "Equipos de protección personal especializados",
    },
    {
      id: 5,
      title: "Empaques y Sellos",
      subtitle: "Repuestos originales",
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      image: sello,
      description: "Repuestos y accesorios para mantenimiento",
    },
  ]

  return (
    <section id="suministros" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Venta de Suministros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de suministros y repuestos para equipos de hidrolavado industrial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supplies.map((supply) => (
            <div
              key={supply.id}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden card-hover border border-blue-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 mx-auto shadow-md">
                  {supply.icon}
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{supply.title}</h3>
                  <p className="text-blue-600 font-semibold">{supply.subtitle}</p>
                </div>

                <div className="mb-6">
                  <img
                    src={supply.image || "/placeholder.svg"}
                    alt={supply.title}
                    className="w-full h-40 object-cover rounded-lg mx-auto"
                  />
                </div>

                <p className="text-gray-600 text-center text-sm mb-6">{supply.description}</p>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-industrial rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas un suministro específico?</h3>
            <p className="text-blue-100 mb-6">
              Contamos con un amplio catálogo de productos. Contáctanos para encontrar exactamente lo que necesitas.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Ver Catálogo Completo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Supplies
