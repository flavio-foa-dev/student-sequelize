const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/teste',(req, res) => {
  res.status(200).send({message: 'teste ok certo'});
})

app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;