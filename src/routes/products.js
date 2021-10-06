const { Router, query } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');

router.get('/products', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE product_id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});

router.get('/products/price/:price', (req, res) => {
    const { price } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE price = ?', [price], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});


router.post('/products', (req, res) => {
    const { name, brand, description, quantity, id_cat} = req.body;
    mysqlConnection.query('INSERT INTO product (product_id, name, brand, description, quantity, id_cat) VALUES (?, ?, ?, ?, ?, ?)', ["", name, brand, description, quantity, id_cat], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Porduct saved'});
        }else{
            console.log(err);
        }
    });
});

router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, brand, description, quantity, price, id_cat } = req.body;
    mysqlConnection.query('UPDATE product SET product_id = ?, name = ?, brand = ?, description = ?, price = ?,quantity = ?, id_cat = ? WHERE product_id = ?', [id, name, brand, description, price, quantity, id_cat, id],(err, rows, fields) =>{
        if(!err){
            res.json({Status: 'Porduct updated'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/products/:id', (req, res) => {
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
