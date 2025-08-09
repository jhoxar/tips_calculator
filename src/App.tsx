import MenuItem from './components/MenuItem';
import OrderContent from './components/OrderContent';
import {menuItems} from './data/data'
import  useOrder from './hooks/useOrder'
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TipPercentageForm';

function App() {
  console.log(menuItems);

  const {order, tip, setTip, addItem, removeItem} = useOrder()

  return (

    <>
        <header className="py-6 bg-indigo-100 border-b border-indigo-200 shadow-sm">
          <h1 className=" text-center font-black text-4xl text-gray-800 tracking-tight">
            Calculadora de Propinas y Consumo
          </h1>
        </header>

        <main className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-5">
          {/* Menú */}
          <section className="space-y-6">
            <h2 className="font-black text-3xl text-gray-800 border-b border-gray-200 pb-2 w-fit">
              Menú
            </h2>

            <div className="space-y-4">
              {menuItems.map((item) => (
                <MenuItem key={item.id} item={item} addItem={addItem} />
              ))}
            </div>
          </section>

          {/* Resumen de la orden */}
          <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-10">
            <OrderContent order={order} removeItem={removeItem} />
            <TipPercentageForm 
            setTip = {setTip}
            />
            <OrderTotal 
            order={order}
            tip = {tip} />
          </section>
        </main>
</>

    
  )
}

export default App
