class ShoppingCart {
    private cart: string[]

    constructor() {
        this.cart = []
    }

    addBooks(books: string[]) {
        books.forEach(book => this.cart.push(book))
    }

    total() {
        return this.cart.length * 8
    }
}

export default ShoppingCart