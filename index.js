const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('hello from node rfgdfagdfsgdfgdaf uhfjee ehfjkasdh eefasdkf wow i am excited')
});
const users = [
    { id: 1, name: 'shabana', email: 'shabana@gmail.com', phone: '01715454156' },
    { id: 2, name: 'shakana', email: 'shakana@gmail.com', phone: '01715454156' },
    { id: 3, name: 'shamana', email: 'shamana@gmail.com', phone: '01715454156' },
    { id: 4, name: 'shalana', email: 'shalana@gmail.com', phone: '01715454156' },
    { id: 5, name: 'shapana', email: 'shapana@gmail.com', phone: '01715454156' },
    { id: 6, name: 'shanana', email: 'shanana@gmail.com', phone: '01715454156' }]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)

    }
    else {
        res.send(users)
    }
    res.send(users)
});
//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('heating the post', req.body)
    res.json(newUser)
    console.log(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
