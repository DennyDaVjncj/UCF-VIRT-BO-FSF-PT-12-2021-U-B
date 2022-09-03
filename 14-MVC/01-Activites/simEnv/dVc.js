var express=require('express');
var xHB=requre('express-handlebars');
var path=require('path');
var hbs=xHB.create({});

const app=express();
const CHANNEL=process.env.CHANNEL||8768;
//express application configured

app.engine('handlebars',hbs.engine);
app.set('view engine','handlebars');
//handlebars set as default templating engine

app.use(express.static(path.join(__dirname,'public')));
app.use(require('./controllers/dis-routes'));

app.listen(PORT,()=>{
    console.log('Live connection on: http://localhost:'+CHANNEL);
});
//establish live connections