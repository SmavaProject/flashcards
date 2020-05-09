const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
//middleware to parse data from forms -???
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
];

app.set('view engine', 'pug');

app.get('/', (request, response)=>{
    const name = request.cookies.username;
    if(name){
        response.render('index', {name: name}); //or simply  {name}
    }else{
        response.redirect('hello');
    }

});
app.get('/cards', (req, res)=>{
    res.render('card', {prompt: "Question ?", colors});
});
//read cookie
app.get('/hello', (request, response)=>{
    const name = request.cookies.username;
    if (name) {
        response.redirect('/');
    }else{
        response.render('hello');
    }
});
app.post('/hello', (request, response)=>{
    console.log(request.body);
    //send cookie to the browser after the form is submitted
    response.cookie('username', request.body.username);
    response.redirect('/');
});
app.post('/goodbye', (request, response)=>{
    response.clearCookie('username');
    response.redirect('/hello');
});
app.listen(3000, ()=> {
    console.log('The app is running on  localhost:3000');
});
