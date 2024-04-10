import ShoppingCart from "../src";

// There are 5 different books in the Harry Potter series.
//     Each book costs 8 EUR.
//     Discounts are given based on the number of distinct titles:
//     2 different books: 5% discount
//     3 different books: 10% discount
//     4 different books: 20% discount
//     5 different books: 25% discount


const stubbedData = [
    [1, 8],
    [2, 16],
    [3, 24],
    [4, 32],
    [5, 40],
    [10, 80]
]

describe('PotterKata', () => {
    it('charges the correct amount for a single book', () => {
        const cart = new ShoppingCart();
        cart.addBook(`First Book`, 1)
        expect(cart.total()).toBe(8)
    })


    it.each(stubbedData)('charges the correct amount for multiple amounts of the same book', (quantity, expectedTotal) => {
        const cart = new ShoppingCart();
        cart.addBook('First Book', quantity)
        expect(cart.total()).toBe(expectedTotal)
    });


});