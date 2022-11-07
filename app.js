
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.static('public'))
app.set("view engine", 'ejs' )
app.use(express.urlencoded({ extended : true}))



mongoose.connect('mongodb+srv://engnrobad:engnrobad@bloggr.6qgvbcc.mongodb.net/?retryWrites=true&w=majority', (req, res)=>{
        console.log('Db Conected');
     
})

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

app.use((req, res)=>{
                res.render('404', {title: 'Forbidden'})
})

app.listen(3000, ()=>console.log('server started'))