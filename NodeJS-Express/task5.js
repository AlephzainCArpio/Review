const express = require('express');
const app = express();

app.use(express.json());


app.post('/users', (req, res) => {
    const { name, age } = req.body;

    res.status(201).json({
        name,
        age
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});