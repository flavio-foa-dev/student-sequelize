

const express = require('express');
const usersRouter = require('./src/routes/usersRouter');
const app = express();
app.use(express.json());
app.use(usersRouter);
app.listen(3000, () => console.log('listening on port 3000'));
module.exports = app;
