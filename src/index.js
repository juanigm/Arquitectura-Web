const express = require('express');
const app = express();



app.set('port', process.env.PORT || 3000);
//app.set('json spaces', 2);



const morgan = require('morgan');
app.use(morgan('dev'));
// For soport data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/endpoints'));
app.use(require('./routes/catalog'));

//Server
app.listen(3000, ()=>{
    console.log(`Server on port${app.get('port')}`); 
});
