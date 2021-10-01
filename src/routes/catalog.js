const { Router } = require('express');
const router = Router();

const catalog = require("../../data/catalog.json");
//console.log(catalog);

router.get('/catalog', (req, res) => {
    //Here, i have to query the DB but now i use a simple json to simulate de DB
    //I will make the DB with mysql
    res.json(catalog);
});

router.post('/catalog', (req, res) => {
    //console.log(req.body);
    const {id, title} = req.body;
    //Just i validate from de req, just for test.
    if(id && title){
        res.json('saved');
    }
    else{
        res.send('Wrong request');
    }
});



module.exports = router;