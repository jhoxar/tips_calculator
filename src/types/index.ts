export type MenuItem = {
    id: number,
    name: string,
    price: number
}

//Defino type de OrderItem, se aplica herencia desde MenuItem

export type OrderItem = MenuItem & {
    quantity: number 
}