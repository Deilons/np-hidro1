import { Wrench, Droplets, Wind, CheckCircle } from "lucide-react"
import industrial from "../assets/limipieza-industrial.jpg"
import condesaor from "../assets/limpieza-de-condesador.png"
import evaporador from "../assets/limpieza-de-intercambiador.webp"
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Limpieza Industrial",
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      description: "Servicio completo de limpieza industrial para equipos críticos",
      features: [
        "Lavado interno y externo de intercambiadores",
        "Limpieza de tambores, condensadores y evaporadores",
        "Sistema PIG",
        "Operadores de equipo, lavadores, supervisores, HSE",
        "Máquinas y equipos de alta presión",
        "Protocolos de seguridad industrial",
        "Planeación detallada de servicio",
        "Informe técnico",
      ],
      image: industrial,
    },
    {
      id: 2,
      title: "Limpieza de Intercambiadores",
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      description: "Especialistas en mantenimiento de intercambiadores de calor",
      features: [
        "Inspección técnica inicial",
        "Limpieza mecánica externa e interna",
        "Lavado a presión",
        "Secado",
        "Sistema pig",
        "Informe técnico",
        "Recurso humano especializado",
      ],
      image: evaporador,
    },
    {
      id: 3,
      title: "Evaporadores y Condensadores",
      icon: <Wind className="h-12 w-12 text-blue-600" />,
      description: "Mantenimiento especializado para sistemas de refrigeración",
      features: [
        "Inspección técnica previa",
        "Limpieza mecánica",
        "Lavado con agua a alta presión controlada",
        "Boquillas especiales para el lavado",
        "Limpieza de bandejas de drenajes y líneas de desagüe",
        "Secado",
        "Informe técnico",
        "Recurso humano",
      ],
      image: condesaor,
    },
  ]

  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos servicios especializados de limpieza industrial con los más altos estándares de calidad y
            seguridad
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>

                <p className="text-gray-600 mb-6 text-center">{service.description}</p>

                <div className="mb-6">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
