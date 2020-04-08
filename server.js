require('dotenv/config');

const express = require('express');
const ContactController = require('./controller/ContactController');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const nunjucks = require('nunjucks');
nunjucks.configure("./", {
    express: app,
    noCache: true
})

app.get('/', (req, res) => {
    return res.render('index.html');
});
app.post("/contact", ContactController.store);

app.listen(3333, () => console.log("Servidor ON http://localhost:3333"));