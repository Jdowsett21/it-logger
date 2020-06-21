const express = require('express');
const app = express();
app.use(JSON);

require('./startup/routes')(app);
require('./startup/db')();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => `Listening on port ${port}`);

module.exports = server;
