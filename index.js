// req
const express = require('express');

var cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); //middle ware

app.get('/', (req, res) => {
    res.send('Hello my own node World ,My smarty node Js Express!')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '0178888888' },
    { id: 3, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '0178888888' },
    { id: 4, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '0178888888' },
    { id: 5, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '0178888888' },
    { id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '0178888888' },
    { id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '0178888888' },
]

// filter by search query parameter
app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    // const user = users[id];
    // const user = users.find(u => u.id == id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) =>{
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazle', (req, res) =>{
    res.send('sour sour fazle flavor');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`, port)
})