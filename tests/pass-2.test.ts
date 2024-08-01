// There are 5 different books in the Harry Potter series.
//     Each book costs 8 EUR.
//     Discounts are given based on the number of distinct titles:
//     2 different books: 5% discount
//     3 different books: 10% discount
//     4 different books: 20% discount
//     5 different books: 25% discount


import ShoppingCart from "../src/pass-2";

describe('PotterKata', () => {
    it('charges the correct amount for a single book', () => {
        const cart = new ShoppingCart()

        cart.addBooks(['First book'])

        expect(cart.total()).toEqual(8)
    })

    it('charges the correct amount for two books of the same title', () => {
        const cart = new ShoppingCart()

        cart.addBooks(['First book', 'First book'])

        expect(cart.total()).toEqual(16)
    })

    it('charges the correct amount for three books of the same title', () => {
        const cart = new ShoppingCart()

        cart.addBooks(['First book', 'First book', 'First book'])

        expect(cart.total()).toEqual(24)
    })

    it('charges the correct amount for 8 books of the same title', () => {
        const cart = new ShoppingCart()

        cart.addBooks(['First book', 'First book', 'First book', 'First book', 'First book', 'First book', "First book", "First book"])

        expect(cart.total()).toEqual(64)
    })
})