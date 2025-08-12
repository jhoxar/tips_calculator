import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[], 
    removeItem: (id: MenuItem['id'])=> void
}

export default function OrderContent({order , removeItem}: OrderContentProps) {
  return (

    <div>
  <h2 className="font-black text-4xl text-gray-800">Consumo</h2>

  <div className="space-y-4 mt-6">
    {
      order.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-5 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {item.name} — {formatCurrency(item.price)}
            </p>
            <p className="text-sm text-gray-600 font-medium mt-1">
              Cantidad: {item.quantity} • Total: {formatCurrency(item.price * item.quantity)}
            </p>
          </div>

          <button
            className="bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-sm transition-colors duration-200"
            onClick={() => removeItem(item.id)}
            aria-label="Eliminar"
          >
            ×
          </button>
        </div>
      ))
    }
  </div>
</div>

    
  )
}
