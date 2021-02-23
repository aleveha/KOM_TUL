const path = require('path');
const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../build');
const port = process.env.PORT || 80;
const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on https://localhost:${port}`);
});