import { MapPin, Phone, Mail, Building } from "lucide-react"

const Branches = () => {
  const branches = [
    {
      id: 1,
      name: "Sucursal Principal",
      city: "Barrancabermeja",
      address: "Calle 60 40 46",
      phone: "3012411067",
      email: "nphidrogmail.com",
      isPrincipal: true,
    },
    {
      id: 2,
      name: "Sucursal 2",
      city: "Cartagena",
      address: "Dirección disponible por teléfono",
      phone: "3239686664",
      email: "nphidrogmail.com",
      isPrincipal: false,
    },
    {
      id: 3,
      name: "Sucursal 3",
      city: "Soledad",
      address: "Calle 18 1 321 Barrio Libertador",
      phone: "3137844747",
      email: "nphidrogmail.com",
      isPrincipal: false,
    },
  ]

  return (
    <section id="sucursales" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestras Sucursales</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos presentes en las principales ciudades para brindarle el mejor servicio
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 ${
                branch.isPrincipal ? "border-green-400" : "border-gray-100"
              }`}
            >
              <div
                className={`p-6 ${
                  branch.isPrincipal
                    ? "bg-gradient-to-r from-green-500 to-green-600"
                    : "bg-gradient-to-r from-blue-600 to-purple-600"
                } text-white`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Building className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">{branch.name}</h3>
                      {branch.isPrincipal && (
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">Principal</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{branch.city}</p>
                    <p className="text-gray-600 text-sm">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Correo</p>
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Contactar Sucursal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cobertura Nacional</h3>
            <p className="text-gray-600 mb-6">
              Nuestras sucursales estratégicamente ubicadas nos permiten brindar servicio en todo el territorio nacional
              con tiempos de respuesta óptimos.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <p className="text-gray-600">Sucursales</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Disponibilidad</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">+10</div>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Branches
