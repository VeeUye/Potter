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
    [10, 80]
]

const twoDifferentTitles = [
    {title: 'First book', quantity: 1},
    {title: 'Second book', quantity: 1}
]

const multipleQuantitiesOfTwoDifferentTitles = [
    {title: 'First book', quantity: 3},
    {title: 'Second book', quantity: 1}
]

const threeDifferentTitles = [
    {title: 'First book', quantity: 1},
    {title: 'Second book', quantity: 1},
    {title: 'Third book', quantity: 1}
]

const multipleQuantitiesOfThreeDifferentTitles = [
    {title: 'First book', quantity: 3},
    {title: 'Second book', quantity: 7},
    {title: 'Third book', quantity: 1}
]

const fourDifferentTitles = [
    {title: 'First book', quantity: 1},
    {title: 'Second book', quantity: 1},
    {title: 'Third book', quantity: 1},
    {title: 'Fourth book', quantity: 1}
]

const multipleQuantitiesOfFourDifferentTitles = [
    {title: 'First book', quantity: 2},
    {title: 'Second book', quantity: 3},
    {title: 'Third book', quantity: 1},
    {title: 'Fourth book', quantity: 2}
];

const fiveDifferentTitles = [
    {title: 'First book', quantity: 1},
    {title: 'Second book', quantity: 1},
    {title: 'Third book', quantity: 1},
    {title: 'Fourth book', quantity: 1},
    {title: 'Fifth book', quantity: 1}
]

const multipleQuantitiesOfFiveDifferentTitles = [
    {title: 'First book', quantity: 1},
    {title: 'Second book', quantity: 2},
    {title: 'Third book', quantity: 1},
    {title: 'Fourth book', quantity: 2},
    {title: 'Fifth book', quantity: 1}
];

const givenExamples = [
    {title: 'First book', quantity: 2},
    {title: 'Second book', quantity: 2},
    {title: 'Third book', quantity: 2},
    {title: 'Fourth book', quantity: 1},
    {title: 'Fifth book', quantity: 1},

]


describe('PotterKata', () => {
    it('charges the correct amount for a single book', () => {
        const cart = new ShoppingCart()

        cart.addBooks(['First book'])

        expect(cart.total()).toEqual(8)
    })
})