const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_arq_web_2'
})

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
    }else{
        console.log("The database is connected");
    }
});

module.exports = mysqlConnection;