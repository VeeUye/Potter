
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

    total() {

        const bookPrice = 8;
        const discounts = [0, 0.05, 0.1, 0.2, 0.25];

        const titlesOf = (purchasedBooks: Book[]) => {
            let books: string[] = [];
            purchasedBooks.forEach(book => {
                for (let i = 0; i < book.quantity; i++) {
                    books.push(book.title);
                }
            });

            return books;
        }

        const createOptimumDiscountGroups = (books: Book[]) => {
            let titles = titlesOf(books);

            let groups = [];

            while (titles.length > 0) {
                let group = [];
                let distinctBooks = new Set(titles);
                distinctBooks.forEach(book => {
                    group.push(book);
                    const index = titles.indexOf(book);
                    titles.splice(index, 1);
                });
                groups.push(group.length);
            }

            while (groups.includes(5) && groups.includes(3)) {
                groups.splice(groups.indexOf(5), 1);
                groups.splice(groups.indexOf(3), 1);
                groups.push(4, 4);
            }

            return groups
        }
        const calculatePricesOfDiscountGroups = (books: Book[]) => {
            let total = 0;

            createOptimumDiscountGroups(books).forEach(groupSize => {
                total += groupSize * bookPrice * (1 - discounts[groupSize - 1]);
            });

            return total;
        }

        return calculatePricesOfDiscountGroups(this.cart);

    }

}

export default ShoppingCart