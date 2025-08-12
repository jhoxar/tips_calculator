const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip: number
  
}

export default function TipPercentageForm({setTip, tip}: TipPercentageFormProps) {
  return (

    <div className="mt-8">
        <h3 className="font-black text-3xl text-center tracking-tight text-gray-800 border-b border-gray-200 pb-3 w-fit mx-auto">
            Propina
        </h3>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {tipOptions.map((tipOption) => (
                <label
                    key={tipOption.id}
                    htmlFor={tipOption.id}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer"
                >
                    <input
                    id={tipOption.id}
                    type="radio"
                    name="tip"
                    value={tipOption.value}
                    className="accent-indigo-500 w-5 h-5 transition duration-200"
                    onChange={e => setTip(+e.target.value)}
                    checked ={tipOption.value === tip}
                    />
                    <span className="text-gray-800 font-medium select-none">{tipOption.label}</span>
                </label>
                ))}
            </form>
</div>



  )
}
