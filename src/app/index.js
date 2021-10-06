const express = require('express');
const app = express();



app.set('port', process.env.PORT || 3000);
//app.set('view engine', 'ejs');



const morgan = require('morgan');
app.use(morgan('dev'));

// For soport data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('../routes/products'));
app.use(require('../routes/catalog'));
app.use(require('../routes/login'));

//Server
app.listen(3000, ()=>{
    console.log(`Server on port${app.get('port')}`); 
});
