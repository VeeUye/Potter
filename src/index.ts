
class ShoppingCart {
    private cart: string[];

    constructor() {
        this.cart = []
    }
    
    addBook(title: string, quantity: number) {
        for (let i = 0; i < quantity; i++) {
            this.cart.push(title)
        }
    }

    total() {
        return this.cart.length * 8
    }
}

export default ShoppingCart