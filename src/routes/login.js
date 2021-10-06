const { Router } = require('express');
const router = Router();

const mysqlConnection = require('../../data/database');

router.post('/', (req, res) => {
    const { email, password }= req.body;
    console.log(email);
    console.log(password);
    mysqlConnection.query('SELECT * FROM client WHERE email = ? && password = ?',[email, password], (err, rows, fields) => {
        let resultArray = Object.values(JSON.parse(JSON.stringify(rows)))
        if(resultArray.length != 0){
            res.json({Status: 'Login success'});
        }else{
            res.json({Status: 'Login error'});
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const { email, password} = req.body;
    mysqlConnection.query('INSERT INTO client (client_id, email, password) VALUES (?, ?, ?)', ["", email, password], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Client saved'});
        }else{
            console.log(err);
        }
    });
});



module.exports = router;