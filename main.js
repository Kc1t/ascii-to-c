// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/convert', (req, res) => {
  const asciiArt = req.body.asciiArt || '';
  const formattedArt = formatAsciiArt(asciiArt);
  const numberOfLines = asciiArt.split('\n').length;
  res.json({ formattedArt, numberOfLines });
});

function formatAsciiArt(asciiArt) {
  const lines = asciiArt.split('\n');
  const formattedLines = lines.map(line => `"${line}"`);
  return `const char *texto[] = {\n${formattedLines.join(',\n')}\n};`;
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
