const express = require('express')
const app = express();
require('./db/conn')
const port = process.env.PORT || 5000
const router = require('./router/auth')
var bodyParser = require('body-parser');




app.use(express.json())
app.use(router)
console.log('ak');

app.listen(port, () => { console.log('server'); })