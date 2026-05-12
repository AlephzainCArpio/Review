const express = require('express');
const app = express();

app.use(express.json());


let users = [];
let nextId = 1;


app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name } = req.body;

    const newUser = {
        id: nextId++,
        name
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name;

    res.json(user);
});

app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(index, 1);

    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});