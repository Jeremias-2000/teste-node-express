const express = require('express')
const router = express.Router()
const Book = require('../model/book')


router.get('/books',async(req,res) => {
    try{
            const books  = await Book.find()
            res.json(books)
    }catch(err){
        res.send('error' + err)
    }
})

router.get('/books/:id',async(req,res) =>{

    try{
        const findId = await Book.findById(req.params.id)
        res.json(findId)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/save',async(req, res) => {

    const book =  new Book({
        
        books_name: req.body.books_name,
        description: req.body.description,
        price:req.body.price,
        author:req.body.author,
        rating:req.body.rating,
        shipping_freight:req.body.shipping_freight
    })

    try{
      const save =  await Book.save()
      res.json(save)
    }catch(err){
        res.send('Error'+ err)
    }

})

module.exports = router