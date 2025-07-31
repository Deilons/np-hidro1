import { Calculator, DollarSign, FileText } from "lucide-react"

const CostSimulator = () => {
  const costData = [
    { item: "EQUIPO DE 20.000 PSI", quantity: 1, unitCost: "$ 4.500.000,00", totalCost: "$ 4.500.000,00" },
    { item: "EQUIPO DE 15.000 PSI", quantity: 1, unitCost: "$ 2.500.000,00", totalCost: "$ 2.500.000,00" },
    {
      item: "EQUIPO DE LAVADO INTERNO Y EXTERNO",
      quantity: 1,
      unitCost: "$ 2.200.000,00",
      totalCost: "$ 2.200.000,00",
    },
    { item: "OPERADOR DE MAQUINA", quantity: 6, unitCost: "$ 180.000,00", totalCost: "$ 1.080.000,00" },
    { item: "LAVADORES", quantity: 12, unitCost: "$ 130.000,00", totalCost: "$ 1.560.000,00" },
    { item: "OBREROS", quantity: 8, unitCost: "$ 110.000,00", totalCost: "$ 880.000,00" },
    { item: "SUPERVISOR", quantity: 2, unitCost: "$ 300.000,00", totalCost: "$ 600.000,00" },
    { item: "HSE", quantity: 2, unitCost: "$ 280.000,00", totalCost: "$ 560.000,00" },
    { item: "LOGISTICO", quantity: 1, unitCost: "$ 180.000,00", totalCost: "$ 180.000,00" },
    { item: "TRANSPORTE DE EQUIPOS", quantity: 2, unitCost: "$ 2.000.000,00", totalCost: "$ 4.000.000,00" },
    { item: "COORDINADOR DE OPERACIONES", quantity: 1, unitCost: "$ 500.000,00", totalCost: "$ 500.000,00" },
  ]

  const totalCost = "$ 18.560.000,00"

  return (
    <section id="simulador" className="section-padding bg-gradient-industrial">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
            <Calculator className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Simulador de Costos</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Simulador de costo de un día de servicio de limpieza industrial
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h3 className="text-2xl font-bold text-white text-center">
              SIMULADOR DE COSTO DE UN DÍA DE SERVICIO DE LIMPIEZA INDUSTRIAL
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CANT</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">DESCRIPCIÓN</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">COSTO UNITARIO x DÍA</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">COSTO TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {costData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.quantity}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{row.item}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-mono">{row.unitCost}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right font-mono font-semibold">
                      {row.totalCost}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-blue-50">
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-lg font-bold text-gray-900 text-right">
                    COSTO APROXIMADO
                  </td>
                  <td className="px-6 py-4 text-lg font-bold text-blue-600 text-right font-mono">{totalCost}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="p-6 bg-gray-50 border-t">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Los precios pueden variar según las condiciones del proyecto</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas una cotización personalizada?</h3>
            <p className="text-blue-100 mb-6">
              Nuestros expertos pueden ayudarte a calcular el costo exacto para tu proyecto específico
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto">
              <DollarSign className="h-5 w-5 mr-2" />
              Solicitar Cotización Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CostSimulator
