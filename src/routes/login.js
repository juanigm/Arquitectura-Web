const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');


//ASK HOW I CAN USE THE QUERY PARAMETERS FOR THE LOGIN. Use de query parameters, and make de query from query params.
router.post('/', (req, res) => {
    const { email, password }= req.body;
    mysqlConnection.query('SELECT * FROM client WHERE email = ? && password = ?',[email, password], (err, rows, fields) => {
        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
        if(resultArray.length != 0){
            res.status(200).json({
                status: 'Login success',
                code: '200'
            });
        }else{
            res.status(404).json({
                status: 'Not Found',
                code: '404'
            });
        }
    });
});

router.get('/', (req, res) => {
    const { email, password} = req.body;
    mysqlConnection.query('SELECT * FROM client', (err, rows, fields) => {
        if(!err){
            res.status(201).json(rows);
        }else{
            res.status(400).json({
                Status: 'Bad Ruest',
                code: '400'
            });
            console.log(err);
        }
    });
});


router.post('/', (req, res) => {
    const { email, password} = req.body;
    mysqlConnection.query('INSERT INTO client (client_id, email, password) VALUES (?, ?, ?)', ["", email, password], (err, rows, fields) => {
        if(!err){
            res.status(201).json({
                Status: 'Client saved',
                code: '201'
            });
        }else{
            res.status(400).json({
                Status: 'Not Found',
                code: '404'
            });
            console.log(err);
        }
    });
});



module.exports = router;