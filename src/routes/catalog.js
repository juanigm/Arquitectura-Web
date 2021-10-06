const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');

router.get('/catalog', (req, res) => {
    mysqlConnection.query('SELECT * FROM category', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/catalog/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM category WHERE cat_id = ?',[id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});



module.exports = router;
