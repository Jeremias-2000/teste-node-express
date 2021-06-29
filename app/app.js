const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb:srv//admin'
const booksRouter = require('../app/routers/BookService')

const app = express()

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection
con.on('open',() => {
    console.log('connected ...')
})

app.use(express.json())
app.use('/books',booksRouter)

app.listen(9000,() =>{
    console.log("Server Started")
})