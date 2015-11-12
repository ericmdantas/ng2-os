const express = require('express');
const fs = require('fs');
const PORT = 1234;
const app = express();

app.use(express.static(__dirname + '/'));

const _sendIndex = (req, res) => {
  res.type('.html');

  fs.createReadStream(__dirname + '/index.html')
    .pipe(res);
}

app.get('/', _sendIndex);
app.get('/*', _sendIndex);

app.listen(PORT);

console.log(`on in ${PORT}`);
