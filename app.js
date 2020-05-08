const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//middleware to parse data from forms -???
app.use(bodyParser.urlencoded({ extended: false}));

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
    response.render('index');
});
app.get('/cards', (req, res)=>{
    res.render('card', {prompt: "Question ?", colors});
});
app.get('/hello', (request, response)=>{
    response.render('hello');
});
app.post('/hello', (request, response)=>{
    console.log(request.body);
    response.render('hello');
});
app.listen(3000, ()=> {
    console.log('The app is running on  localhost:3000');
});
