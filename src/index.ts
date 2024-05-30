
type title = 'First book' | 'Second book' | 'Third book' | 'Fourth book' | 'Fifth book'

export interface Book {
    title: title
    quantity: number
}

class ShoppingCart {
    private cart: Book[]

    constructor() {
        this.cart = []
    }
    
    addBooks(books:Book[]) {
        books.forEach(book =>
                this.cart.push(book)
        )
    }

    discountFactor() {
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
        return this.cart.reduce((acc, book) => acc + (book.quantity * 8), 0) * this.discountFactor()
    }
}

export default ShoppingCart