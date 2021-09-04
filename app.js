const express = require('express')
const app = express()
const port = 8080

const routes = require('./routes/routes.js');

app.use(routes);

app.listen(port, () => {
  console.log(`Resume Builder Application is listening at http://localhost:${port}`);
});