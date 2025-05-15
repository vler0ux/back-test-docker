const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api', (req, res) => {
  res.json({ message: "Hello depuis le backend dockerisé !" });
});

app.listen(PORT, () => {
  console.log(`✅ Backend tournant sur http://localhost:${PORT}`);
});
