
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
        const discountMap: {[key: number]: number} = {
            2: 0.95,
            3: 0.90,
            4: 0.80,
            5: 0.75
        }


    const numberOfDifferentTitles = this.cart.length

        return discountMap[numberOfDifferentTitles] || 1

}

    total() {
        return this.cart.reduce((acc, book) => acc + (book.quantity * 8), 0) * this.totalDiscount()
    }
}

export default ShoppingCart