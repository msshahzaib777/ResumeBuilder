const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 8080


app.use(bodyParser.json());
app.use(cors());

const routes = require('./routes/routes.js');

app.use(routes);

app.listen(port, () => {
  console.log(`Resume Builder Application is listening at http://localhost:${port}`);
});