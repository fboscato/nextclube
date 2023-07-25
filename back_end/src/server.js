const express = require('express');
const cors = require('cors')
const routes = require('./router');
require('./database/index')

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)