
const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.use(express.static('public'))
app.set("view engine", 'ejs' )
app.use(express.urlencoded({ extended : true}))

app.get('/', (req, res)=>{
        res.render('index', { title : "Home"});
}
);

app.post('/', (req, res)=>{
        req.body.email;

        res.redirect('/sent')
});


app.get('/sent', (req, res)=>{
    res.render('sent')
});

app.get('/privacy', (req,res)=>{
        res.render('privacy')
})

app.listen(3000, ()=>console.log('server started'))