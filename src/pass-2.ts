class ShoppingCart {
    private cart: string[]

    constructor() {
        this.cart = []
    }

    addBooks(books: string[]) {
        books.forEach(book => this.cart.push(book))
    }

    total() {
        const baseBookPrice = 8;
        
        return this.cart.length * baseBookPrice
    }
}

export default ShoppingCart