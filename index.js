const express = require('express');
const app = express();
const port = 3000;

const route = require('./routes')
const db = require('./config/db')

app.use(express.json());
app.use(express.static(__dirname + '/client'));

//Connect to DB
db.connect()

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})