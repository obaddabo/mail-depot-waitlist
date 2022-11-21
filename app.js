
const express = require('express');
const mongoose = require('mongoose');
const Email = require('./model/email')
const app = express();
app.use(express.static('public'))
app.set("view engine", 'ejs' )
app.use(express.urlencoded({ extended : true}))

 const uri = 'mongodb+srv://engnrobad:bloggr@waitlist.6qgvbcc.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(uri, {UseNewURLParser : true, UseUnifiedTopology : true} )
.then((req,res)=>{
        console.log('Connected')
        
})
.catch((err)=>{
        console.log(err)
});


app.get('/', (req, res)=>{
        res.render('index', { title : "Home"});
}
);
app.get('/sent', (req, res)=>{
        res.render('sent' , {title : "Sent"})
    });
        

app.post('/', (req, res)=>{
  
        console.log(req.body);
        const emaillist = new Email(req.body);
        emaillist.save()
        .then((result)=>{
               res.render('sent');

                res.redirect('/sent')
        })
.catch((err)=>{
        console.log(err);
        
})
})



app.get('/privacy', (req,res)=>{
        res.render('privacy')
})

app.use((req, res)=>{
                res.render('404', {title: 'Forbidden'})
})

app.listen(3000, ()=>console.log('server started'))