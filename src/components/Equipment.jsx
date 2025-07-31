import { Gauge, Zap } from "lucide-react"
import H10000 from "../assets/H10000.webp"
import H15000 from "../assets/H15000.jpg"
import H20000 from "../assets/H20000.jpeg"
import pulmon from "../assets/pulmon.png"
import tablero from "../assets/tablero.webp"
import subestacion from "../assets/estacion.webp"



const Equipment = () => {
  const equipment = [
    {
      id: 1,
      title: "Equipo 20,000 PSI",
      pressure: "20,000 PSI",
      year: "2025",
      icon: <Gauge className="h-8 w-8 text-white" />,
      features: [
        "Operador de máquina",
        "3 metros de manguera de alta presión",
        "Lanza flexible con boquilla",
        "Pedal",
        "Tipo de combustible: Diesel",
      ],
      image: H20000,
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      title: "Equipo 15,000 PSI",
      pressure: "15,000 PSI",
      year: "2025",
      icon: <Gauge className="h-8 w-8 text-white" />,
      features: [
        "Operador de máquina",
        "3 metros de manguera de alta presión",
        "Lanza flexible con boquilla",
        "Pedal",
        "Tipo de combustible: Diesel",
      ],
      image: H15000,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Equipo 5,000 PSI",
      pressure: "5,000 PSI",
      year: "2025",
      icon: <Zap className="h-8 w-8 text-white" />,
      features: [
        "Operador de máquina",
        "3 metros de manguera de alta presión",
        "Lanza flexible con boquilla",
        "Conexión de electricidad 220v",
      ],
      image: H10000,
      color: "from-green-500 to-green-600",
    },
  ]

  const additionalEquipment = [
    {
      title: "Tablero de Distribución",
      description: "Sistema de control eléctrico industrial",
      image: tablero,
    },
    {
      title: "Sub Estación Eléctrica",
      description: "30KVA / 40KVA",
      image: subestacion,
    },
    {
      title: "Pulmones de Aire",
      description: "Sistema de almacenamiento de aire comprimido",
      image: pulmon,
    },
  ]

  return (
    <section id="equipos" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Equipos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con equipos de última tecnología para satisfacer todas sus necesidades de limpieza industrial
          </p>
        </div>

        {/* Main Equipment */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {equipment.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm opacity-90">Año {item.year}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{item.pressure}</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  {item.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Equipment */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Equipos Adicionales</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalEquipment.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg mx-auto"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Equipment
