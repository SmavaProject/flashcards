const express = require('express');
const app = express();
app.get('/', (request, response)=>{
    response.send("<h1>this is the response</h1>");
});
app.get('/hello', (req, res)=>{
    res.send("<h1>Hello JS Developer!</h1>");
});
app.listen(3000, ()=> {
    console.log('The app is running on  localhost:3000');
});
