
class ShoppingCart {
    private cart: string[];

    constructor() {
        this.cart = []
    }
    
    addBook(title: string) {
        this.cart.push(title)
    }

    total() {
        return this.cart.length * 8
    }
}

export default ShoppingCart