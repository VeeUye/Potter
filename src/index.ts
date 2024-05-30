
class ShoppingCart {
    private cart: {title: string, quantity: number}[];

    constructor() {
        this.cart = []
    }
    
    // addBooks(books: {title: string, quantity: number}[]) {
    //     books.forEach(book => {
    //         for (let i = 0; i < book.quantity; i++) {
    //             this.cart.push(book.title)
    //         }
    //     })
    // }

    addBooks(books: {title: string, quantity: number}[]) {
        books.forEach(book =>
                this.cart.push(book)
        )
    }

    total() {
        return this.cart.reduce((acc, book) => acc + (book.quantity * 8), 0);
    }
}

export default ShoppingCart