import express from "express";
import path from "path"

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


