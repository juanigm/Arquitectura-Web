const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');

router.get('/category', (req, res) => {
    mysqlConnection.query('SELECT * FROM category', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/category/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM category WHERE cat_id = ?',[id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/category/', (req, res) => {
    const { description} = req.body;
    mysqlConnection.query('INSERT INTO category (cat_id, description) VALUES (?, ?)', ["", description], (err, rows, fields) => {
        if(!err){
            res.status(201).json({
                Status: 'Category saved'
            });
        }else{
            res.status(400).json({
                Status: 'Bad request'
            });
        }
    });;
});

router.put('/category/:id', (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    mysqlConnection.query('UPDATE category SET description = ? WHERE cat_id = ?', [description, id],(err, rows, fields) =>{
        if(!err){
            res.status(201).json({
                Status: 'Category updated'
            });
        }else{
            res.status(404).json({
                Status: 'Not Found'
            });
        }
    });
});

router.delete('/category/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM category WHERE cat_id = ?', [id],(err, rows, fields) =>{
        console.log(id);
        console.log(err);   
        if(!err){
            res.status(200).json({
                Status: 'Category deleted'
            });
        }else{
            res.status(409).json({
                Status: 'Conflict',
                message: 'Cannot delete or update a parent row',
                code: '409'
            });
        }
    });
});



module.exports = router;
