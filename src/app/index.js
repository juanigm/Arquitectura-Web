const express = require('express');
const app = express();
const cors = require('cors');



app.set('port', process.env.PORT || 4000);
//app.set('view engine', 'ejs');


//Middlewares
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());

//For soport data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('../routes/products'));
app.use(require('../routes/catalog'));
app.use(require('../routes/login'));

//Server
app.listen(4000, ()=>{
    console.log(`Server on port${app.get('port')}`); 
});
