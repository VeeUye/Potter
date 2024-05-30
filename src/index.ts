
class ShoppingCart {
    private cart: string[];

    constructor() {
        this.cart = []
    }
    
    addBooks(books: [{title: string, quantity: number}]) {
        books.forEach(book => {
            for (let i = 0; i < book.quantity; i++) {
                this.cart.push(book.title)
            }
        })
    }

    total() {
        return this.cart.length * 8
    }
}

export default ShoppingCart