const express = require('express');
const app = express();

app.get('/users/:username', (req, res) => {
    const username = req.params.username;

    res.json({
        username: username
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});