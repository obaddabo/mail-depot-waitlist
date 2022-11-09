
const express = require('express');
const mongoose = require('mongoose');
const Email = require('./model/email')
const app = express();
app.use(express.static('public'))
app.set("view engine", 'ejs' )
app.use(express.urlencoded({ extended : true}))



mongoose.connect('mongodb+srv://engnrobad:engnrobad@bloggr.6qgvbcc.mongodb.net/?retryWrites=true&w=majority', (req, res)=>{
        console.log('Db Conected');
     
})
.then((req,res)=>{
        console.log('Connected')
        
})
.catch((err)=>{
        console,log(err)
});


app.get('/', (req, res)=>{
        res.render('index', { title : "Home"});
}
);


app.post('/', (req, res)=>{
  
        console.log(req.body);
        const emaillist = new Email(req.body);
        emaillist.save()
        .then((result)=>{
                res.send(result);

                
        app.get('/sent', (req, res)=>{
        res.render('sent')
    });
        })
        .catch((err)=>{
                console.log(err);
                
        })

        res.redirect('/sent')
        
});



app.get('/privacy', (req,res)=>{
        res.render('privacy')
})

app.use((req, res)=>{
                res.render('404', {title: 'Forbidden'})
})

app.listen(3000, ()=>console.log('server started'))