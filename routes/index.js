const express = require('express');
const router = express.Router();

router.get('/', (request, response)=>{
    const name = request.cookies.username;
    if(name){
        response.render('index', {name: name}); //or simply  {name}
    }else{
        response.redirect('hello');
    }

});

//read cookie
router.get('/hello', (request, response)=>{
    const name = request.cookies.username;
    if (name) {
        response.redirect('/');
    }else{
        response.render('hello');
    }
});
router.post('/hello', (request, response)=>{
    console.log(request.body);
    //send cookie to the browser after the form is submitted
    response.cookie('username', request.body.username);
    response.redirect('/');
});
router.post('/goodbye', (request, response)=>{
    response.clearCookie('username');
    response.redirect('/hello');
});

module.exports = router;
