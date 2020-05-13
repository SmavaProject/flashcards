const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json'); //ES16 standard for const data = require('..').data
const { cards } = data;

router.get('/', (req, res) =>{

});
/*** we can remove /cards because these route will always start with /cards since
 * we have declared const cardRoutes = require('./routes/cards');
 ***/
router.get('/:id', (req, res) => {
    let { side } = req.query; // check whether a query parameter is in the request
    const { id } = req.params;

    if ( !side ) {
        return res.redirect(`/cards/${id}?side=question`);
    }
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id, text };

    if (side === 'question'){
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    }else if (side === 'answer'){
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }
    res.render('card', templateData);
});

module.exports = router;
