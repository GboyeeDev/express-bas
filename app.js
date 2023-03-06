const express = require('express')
const path = require('path')

const friendsRouter = require('./routes/friends')
const messagesRouter = require('./routes/messages')

const app = express()

// templating engines
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 5000

// middlewares
app.use((req, res, next) =>{
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`)
})

// this site middleware is to launch our static page from any root directory
app.use('/sites', express.static(path.join(__dirname, 'public')))
app.use(express.json())

// templating engine route
app.get('/', (req,res) => {
    res.render('index', {
        title: 'Gboyega work experience',
        caption: 'It will definitely workout'
    })
})



app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
