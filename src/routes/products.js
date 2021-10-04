const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE product_id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});

router.post('/', (req, res) => {
    const { name, brand, description, quantity, id_cat} = req.body;
    mysqlConnection.query('INSERT INTO product (product_id, name, brand, description, quantity, id_cat) VALUES (?, ?, ?, ?, ?, ?)', ["", name, brand, description, quantity, id_cat], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Porduct saved'});
        }else{
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, brand, description, quantity, id_cat } = req.body;
    mysqlConnection.query('UPDATE product SET product_id = ?, name = ?, brand = ?, description = ?, quantity = ?, id_cat = ? WHERE product_id = ?', [id, name, brand, description, quantity, id_cat, id],(err, rows, fields) =>{
        if(!err){
            res.json({Status: 'Porduct updated'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM product WHERE product_id = ?', [id],(err, rows, fields) =>{
        if(!err){
            res.json({Status: 'Porduct deleted'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;