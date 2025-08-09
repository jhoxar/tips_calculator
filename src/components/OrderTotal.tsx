import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type orderTotalProps = {
  order: OrderItem[],
  tip: number
}


export default function OrderTotal({order, tip}: orderTotalProps) {

  const subtotalAmount = useMemo(()=> order.reduce((total, item) => total + (item.quantity * item.price) , 0), [order])
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
  const totalAmount = useMemo(()=> subtotalAmount + tipAmount, [order, tip])

  return (
    <>
  <div className="space-y-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
    <h2 className="font-black text-2xl text-gray-800">Totales y propina:</h2>

    <p className="text-gray-700">
      Subtotal a pagar:{' '}
      <span className="font-semibold text-indigo-600">
        {formatCurrency(subtotalAmount)}
      </span>
    </p>

    <p className="text-gray-700">
      Propina:{formatCurrency(tipAmount)}
      <span className="font-semibold text-indigo-600">
        
      </span>
    </p>

    <p className="text-gray-800 text-lg">
      Total a pagar:{formatCurrency(totalAmount)}
      <span className="font-bold text-green-600">
        
      </span>
    </p>
  </div>

  <button
    
    className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
  >
    Confirmar pedido
  </button>
</>

  )
}
