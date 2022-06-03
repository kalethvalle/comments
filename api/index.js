const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const { mongoose } = require('./config/database');

const app = express();

// middlewares
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

// routes
const routesConfig = require('./config/routes-configurations')
const listRoutes = Object.entries(routesConfig.routesConfigurations())
listRoutes.map(routes => {
    app.use(routes[0], require(`${routes[1]}`))
})

// statics files
app.use(express.static(path.join(__dirname, 'public')));

// strating server
app.set('PORT', process.env.PORT || 8000);
app.listen(app.get('PORT'), () => {
    console.log(`Server on port  ${app.get('PORT')}`);
});