const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err){
            res.json("Login");
        }else{
            console.log(err);
        }
    });
});



module.exports = router;