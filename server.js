const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.resolve('./dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(process.env.PORT || 8080);
console.log('served up on port 8080')

