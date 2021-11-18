const { Router, query } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');

router.get('/products', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err){
            res.status(200).json(rows);
        }else{
            res.status(400).json({
                status: 'Bad Request',
                code: '400'
            })
            console.log(err);
        }
    });
});

//This endpoit is for filter products 
router.get('/products/filters', (req, res) => {
    const queryParams = req.query;
    mysqlConnection.query('SELECT * FROM product WHERE id_cat = ? && price < ?', [queryParams.cat, queryParams.price], (err, rows, fields) => {
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
            res.status(200).json(rows);
        }else{
            res.status(404).json({
                status: 'Not Found'
            });
        }
    });

});

router.get('/products/:price', (req, res) => {
    const { price } = req.params;
    mysqlConnection.query('SELECT * FROM product WHERE price > ?', [price], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });

});

//For list products of some category and more expensive of some price;
/*router.get('/products/a', (req, res) => {
    const queryParameter = req.query;
    mysqlConnection.query('SELECT * FROM product WHERE cat_id = ? && price > ?',[queryParameter.cat, queryParameter.price], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});*/


router.post('/products', (req, res) => {
    const { name, brand, price, description, quantity, id_cat} = req.body;
    mysqlConnection.query('INSERT INTO product (product_id, name, brand, price, description, quantity, id_cat) VALUES (?, ?, ?, ?, ?, ?, ?)', ["", name, brand, price, description, quantity, id_cat], (err, rows, fields) => {
        if(!err){
            console.log(name, brand, price, description, quantity, id_cat)
            res.status(201).json({
                Status: 'Porduct saved'
            });
        }else{
            res.status(400).json({
                Status: 'Bad request'
            });
        }
    });
});

router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, brand, description, quantity, price, id_cat } = req.body;
    console.log(name, brand, price, description, quantity, id_cat)
    mysqlConnection.query('UPDATE product SET product_id = ?, name = ?, brand = ?, description = ?, price = ?,quantity = ?, id_cat = ? WHERE product_id = ?', [id, name, brand, description, price, quantity, id_cat, id],(err, rows, fields) =>{
        if(!err){
            console.log(name, brand, price, description, quantity, id_cat)
            res.status(201).json({
                Status: 'Porduct updated'
            });
        }else{
            res.status(404).json({
                Status: 'Not Found'
            });
        }
    });
});

router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM product WHERE product_id = ?', [id],(err, rows, fields) =>{
        if(!err){
            res.status(200).json({
                Status: 'Porduct deleted'
            });
        }else{
            res.status(404).json({
                Status: 'Not Found'
            });
        }
    });
});

router.patch('/products/:id', (req, res) => {
    const { id } = req.params;
    const { value } = req.body;
    mysqlConnection.query('UPDATE product SET product_id = ?, name = ?, brand = ?, description = ?, price = ?,quantity = ?, id_cat = ? WHERE product_id = ?', [value],(err, rows, fields) =>{
        if(!err){
            res.status(201).json({
                Status: 'Porduct updated'
            });
        }else{
            res.status(404).json({
                Status: 'Not Found'
            });
        }
    });
});

module.exports = router;
