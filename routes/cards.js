const express = require('express');
const router = express.Router();
/*** we can remove /cards because these route will always start with /cards since
 * we have declared const cardRoutes = require('./routes/cards');
 ***/
router.get('/cards', (req, res)=>{
    res.render('card', {prompt: "Question ?", colors});
});

module.exports = router;
