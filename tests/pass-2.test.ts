// There are 5 different books in the Harry Potter series.
//     Each book costs 8 EUR.
//     Discounts are given based on the number of distinct titles:
//     2 different books: 5% discount
//     3 different books: 10% discount
//     4 different books: 20% discount
//     5 different books: 25% discount


import ShoppingCart from "../src/pass-2";

const stubbedQuantitiesOfTheSameBook = [
    [0, 0],
    [1, 8],
    [2, 16],
    [3, 24],
    [4, 32],
    [5, 40],
    [10, 80],
    [99, 792]
]

const addTitles = (array: string[], title: string, times: number) => array.push(...new Array(times).fill(title))

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

    it.each(stubbedQuantitiesOfTheSameBook)('it charges the correct amount for multiple copies of the same title', (number, expectedPrice) => {
        const cart = new ShoppingCart()
        
        const books: string[] = [];
        const title = 'First book'

        addTitles(books, title, number);

        cart.addBooks(books)

        expect(cart.total()).toEqual(expectedPrice)

    })
})