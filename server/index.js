const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json());

app.post('/api/cupcakes', (req, res) => {
  console.log(req.body);
  res.end();
})

app.post('/api/cookies/:flavor', (req, res) => {
  console.log(req.params);
  res.end();
})

app.post('/api/icecream/', (req, res) => {
  console.log(req.query);
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});