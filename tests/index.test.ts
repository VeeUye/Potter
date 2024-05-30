import ShoppingCart from "../src";

// There are 5 different books in the Harry Potter series.
//     Each book costs 8 EUR.
//     Discounts are given based on the number of distinct titles:
//     2 different books: 5% discount
//     3 different books: 10% discount
//     4 different books: 20% discount
//     5 different books: 25% discount


const stubbedQuantitiesOfTheSameBook = [
    [1, 8],
    [2, 16],
    [3, 24],
    [4, 32],
    [5, 40],
    [10, 80]
]

const twoDifferentTitles = [
    {title: 'First book', quantity: 1 },
    {title: 'First book', quantity: 1 }

]


describe('PotterKata', () => {
    it('charges the correct amount for a single book', () => {
        const cart = new ShoppingCart();
        cart.addBooks([{title: `First Book`, quantity: 1} ])
        expect(cart.total()).toBe(8)
    })


    it.each(stubbedQuantitiesOfTheSameBook)('charges the correct amount for multiple amounts of the same book', (quantity, expectedTotal) => {
        const cart = new ShoppingCart();
        cart.addBooks([{title: 'First book', quantity: quantity}])

        expect(cart.total()).toBe(expectedTotal)
    });

   it('charges the correct amount for 2 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(twoDifferentTitles)
        expect(cart.total()).toBe(15.2)
    })


});