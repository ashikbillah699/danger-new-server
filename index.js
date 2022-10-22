const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
const categories = require('./data/categories.json')

app.use(cors())
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Helo World!')
})

app.get('/news-categories', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const seletedNews = news.find(n => n._id === id)
    res.send(seletedNews);
})

app.listen(port, () => {
    console.log('Example app lostening on port', port)
})