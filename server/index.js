const express = require('express');
const app = express();
const morgan = require('morgan')
const { mongoose } = require('./database')

// settings
app.set('port', process.env.PORT || 3000)


//middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employee.routes'))

//staring server
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`)
})