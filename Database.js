module.exports = class Database{
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key]
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBookByName(bookName){
        return this.#storage.books.find(book => book.name === bookName)
    }

    saveBook(book){
        const bookExist = this.findBookByName(book.name)
        if(!bookExist){
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBookFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    //Posters

    findPosterByName(posterName){
        return this.#storage.posters.find(poster => poster.name === posterName)
    }

    savePoster(poster){
        const posterExist = this.findPosterByName(poster.name)
        if(!posterExist){
            this.#storage.posters.push(poster)
        }
    }

    addPosterToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removePosterFromStock(quantity)
    }
    
    //User

    saveUser(user){
        const userExist = this.#storage.users.find((userArgument) => user.email === userArgument.email);
        if(!userExist){
            this.#storage.users.push(user)
        }
    }

    //Order
    saveOrder(order){
        this.#storage.orders.push(order)
    }

    //Storage
    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.orders.map(order => order.data))
        console.table(this.#storage.posters)
        console.table(this.#storage.users)

    }
}