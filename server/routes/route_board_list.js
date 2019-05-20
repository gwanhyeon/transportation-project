const express = require('express');
const router = express.Router();
const passport = require('../jwt/passport');
const Board = require('../models/model_board');

// find board list
router.get('/board_list', function (req, res) {
    Board.find().then(user =>{
        if(user){
            res.send(user);
        }
    })
});


module.exports = router;