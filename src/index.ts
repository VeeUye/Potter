
class ShoppingCart {
    private cart: {title: string, quantity: number}[];

    constructor() {
        this.cart = []
    }
    
    addBooks(books: {title: string, quantity: number}[]) {
        books.forEach(book =>
                this.cart.push(book)
        )
    }

    totalDiscount() {
    const numberOfDifferentTitles = this.cart.length
        if(numberOfDifferentTitles !==2){
            return 1
        }
        return 0.95

}

    total() {
        return this.cart.reduce((acc, book) => acc + (book.quantity * 8), 0) * this.totalDiscount()
    }
}

export default ShoppingCart