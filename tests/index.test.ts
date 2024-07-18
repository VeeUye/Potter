import ShoppingCart from "../src";

import { Book } from '../src/index'

// There are 5 different books in the Harry Potter series.
//     Each book costs 8 EUR.
//     Discounts are given based on the number of distinct titles:
//     2 different books: 5% discount
//     3 different books: 10% discount
//     4 different books: 20% discount
//     5 different books: 25% discount


const stubbedQuantitiesOfTheSameBook = [
    [0, 0],
    [1, 8],
    [2, 16],
    [3, 24],
    [4, 32],
    [5, 40],
    [10, 80]
]

const twoDifferentTitles: Book[] = [
    {title: 'First book', quantity: 1 },
    {title: 'Second book', quantity: 1 }
]

const multipleQuantitiesOfTwoDifferentTitles: Book[] = [
    {title: 'First book', quantity: 3 },
    {title: 'Second book', quantity: 1 }
]

const threeDifferentTitles: Book[] = [
    {title: 'First book', quantity: 1 },
    {title: 'Second book', quantity: 1 },
    {title: 'Third book', quantity: 1 }
]

const multipleQuantitiesOfThreeDifferentTitles: Book[] = [
    {title: 'First book', quantity: 3 },
    {title: 'Second book', quantity: 7 },
    {title: 'Third book', quantity: 1 }
]

const fourDifferentTitles: Book[] = [
    {title: 'First book', quantity: 1 },
    {title: 'Second book', quantity: 1 },
    {title: 'Third book', quantity: 1 },
    {title: 'Fourth book', quantity: 1 }
]

const multipleQuantitiesOfFourDifferentTitles: Book[] = [
    {title: 'First book', quantity: 2 },
    {title: 'Second book', quantity: 3 },
    {title: 'Third book', quantity: 1 },
    {title: 'Fourth book', quantity: 2 }
];

const fiveDifferentTitles: Book[] = [
    {title: 'First book', quantity: 1 },
    {title: 'Second book', quantity: 1 },
    {title: 'Third book', quantity: 1 },
    {title: 'Fourth book', quantity: 1 },
    {title: 'Fifth book', quantity: 1 }
]

const multipleQuantitiesOfFiveDifferentTitles: Book[] = [
    {title: 'First book', quantity: 1 },
    {title: 'Second book', quantity: 2 },
    {title: 'Third book', quantity: 1 },
    {title: 'Fourth book', quantity: 2 },
    {title: 'Fifth book', quantity: 1 }
];

const givenExamples: Book[] = [
    {title: 'First book', quantity: 2},
    {title: 'Second book', quantity: 2},
    {title: 'Third book', quantity: 2},
    {title: 'Fourth book', quantity: 1},
    {title: 'Fifth book', quantity: 1},

]



describe('PotterKata', () => {
    it('charges the correct amount for a single book', () => {
        const cart = new ShoppingCart();
        cart.addBooks([{title: `First book`, quantity: 1} ])
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

    it('charges the correct amount for 3 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(threeDifferentTitles)
        expect(cart.total()).toBe(21.6)
    })

    it('charges the correct amount for 4 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(fourDifferentTitles)
        expect(cart.total()).toBe(25.6)
    })

    it('charges the correct amount for 5 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(fiveDifferentTitles)
        expect(cart.total()).toBe(30)
    })


    it('charges the correct amount for multiple quantities of 2 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(multipleQuantitiesOfTwoDifferentTitles)
        expect(cart.total()).toBe(31.2)
    })

    it('charges the correct amount for multiple quantities of 3 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(multipleQuantitiesOfThreeDifferentTitles)
        expect(cart.total()).toBe(84)
    })

    it('charges the correct amount for multiple quantities of 4 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(multipleQuantitiesOfFourDifferentTitles)
        expect(cart.total()).toBe(55.2)
    })


    it('charges the correct amount for multiple quantities of 5 different books in the series', () => {
        const cart = new ShoppingCart()
        cart.addBooks(multipleQuantitiesOfFiveDifferentTitles)
        expect(cart.total()).toBe(45.2)
    })

    it('charges the correct amount for the test examples', () => {
        const cart = new ShoppingCart()
        cart.addBooks(givenExamples)
        expect(cart.total()).toBe(51.2)
    })

});