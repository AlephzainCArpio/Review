const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log(`LOG: ${req.method} ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});