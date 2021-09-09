const express = require('express');
const routes = express.Router();

let db = [
    { '1': { Name: 'Client 1', Age: '20' }},
    { '2': { Name: 'Client 2', Age: '30' }},
    { '3': { Name: 'Client 3', Age: '40' }}
];

// get - buscar dado 
routes.get('/', (req, res) => {
    return res.json(db);
});

// post - inserir dado
routes.post('/add', (req, res) => {
    const body = req.body;

    if (!body)
        return res.status(400).end()
    
        db.push(body);
        return res.json(body);
}); 

// delete - deletar dado
routes.delete('/:id', (req, res) => {
    const id = req.params.id;

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    });

    db = newDB;

    return res.send(newDB);
});


module.exports = routes