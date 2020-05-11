const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json'); //ES16 standard for const data = require('..').data
const { cards } = data;
/*** we can remove /cards because these route will always start with /cards since
 * we have declared const cardRoutes = require('./routes/cards');
 ***/
router.get('/:id', (req, res) => {
    res.render('card', {
        prompt: cards[req.params.id].question,
        hint: cards[req.params.id].hint
    });
});

module.exports = router;
