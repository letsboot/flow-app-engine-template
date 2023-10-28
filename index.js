const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello Flow Swiss App Engine!');
  res.send('Container redeployed.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
