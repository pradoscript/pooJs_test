const App = require('./App.js')

const app = new App()
app.createAuthor('Beltrano', 'Brasil', 'A good writer')
app.createAuthor('Ciclano', 'USA', 'Bad Author')

const authors = app.getAuthors()

app.createBook('Java', 'Ensinando Java', 'Educação', 137, authors[0], '...', 50, 100)
app.createBook('Ruby', 'Ensinando Ruby', 'Educação', 150, authors[1], '...', 30, 100)

const books = app.getBooks()

app.createUser('Fulano', 'fulano@gmail.com', '1234')
const users = app.getUsers()

const items = [
    {
        product: books[0],
        quantity: 2
    },

    {
        product: books[1],
        quantity: 1
    }
]

app.createOrder(items, users[0])

console.table(app.showDatabase())