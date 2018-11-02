//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

//invoking dependencies 
const app = express();
app.use(bodyParser.json());
server_port = process.env.PARTY;


//connection to the database
massive(process.env.DATABASE)
.then( dbInstance => {app.set('db', dbInstance), console.log('DB Connected') } )
.catch( err => console.log(err.message) )

//Endpoints


app.get('/api/properties', controller.getAll)

app.post('/api/add',controller.addProperty)

app.delete(`/api/delete/:address`, controller.deleteProperty)




//App listener
app.listen(server_port|| 3002, console.log(`server is live on port: ${server_port}`))