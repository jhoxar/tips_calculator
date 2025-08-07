import type { MenuItem} from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item:MenuItem)=> void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
  onClick={() => addItem(item)}
  className="flex items-center justify-between w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300 cursor-pointer"
>
  <p className="text-gray-800 font-medium">{item.name}</p>
  <p className="font-bold text-indigo-600">${item.price}</p>
</button>

  )
}
