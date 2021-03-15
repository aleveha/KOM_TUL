const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');
const cors = require('cors');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        info: "Node.js + Express.js + PostgresQL"
    });
})

app.get('/topNews', (req, res) => {
    db.getTopNews()
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

app.get('/allNews', (req, res) => {
    db.getAllNews()
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
});

app.post('/addNews', (req, res) => {
    db.addNews(req.body)
        .then(response => res.status(200).send(response))
        .catch(error => res.status(500).send(error));
})

app.listen(port, () => {
    console.log('Server is up on ' + port);
})