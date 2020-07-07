const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

require('./startup/routes')(app);
require('./startup/db')();

const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
