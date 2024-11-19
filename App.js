const Database = require("./Database.js")
const Author = require("./entities/Author.js")
const Book = require("./entities/Book.js")
const Order = require("./entities/Order.js")
const User = require("./entities/User.js")

module.exports = class App {
    static #dataBase = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#dataBase.saveUser(user)
    }

    getUsers(){
        return App.#dataBase.find('users')
    }

    createAuthor(name, nationality, biography){
        const author = new Author(name, nationality, biography)
        App.#dataBase.saveAuthor(author)
    }

    getAuthors(){
        return App.#dataBase.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock = 0){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#dataBase.saveBook(book)
    }

    addBook(bookName, quantity){
        App.#dataBase.addBookToStock(bookName, quantity)
    }

    getBooks(){
        return App.#dataBase.find('books')
    }

    createPoster(name, description, height, width, price, inStock = 0){
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#dataBase.savePoster(poster)
    }

    addPoster(posterName, quantity){
        App.#dataBase.addPosterToStock(posterName, quantity)
    }

    createOrder(items, user){
        const order = new Order(items, user)
        App.#dataBase.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if(product instanceof Book){
                App.#dataBase.removeBookFromStock(product.name, quantity)
            } else if (product instanceof Poster){
                App.#dataBase.removePosterFromStock(product.name, quantity)
            }
        })
    }

    getOrders(){
        return App.#dataBase.find('orders')
    }

    showDatabase(){
        return App.#dataBase.showStorage()
    }
}