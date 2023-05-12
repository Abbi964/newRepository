"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    let newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json('todo added');
});
router.post('/delete', (req, res, next) => {
    let id = req.body.id;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos.splice(i, 1);
            res.status(200).json({ msg: 'deletion sucessfull' });
        }
    }
    res.status(404).json('item not found');
});
router.post('/edit', (req, res, next) => {
    let id = req.body.id;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            todos[i].text = req.body.text;
            res.status(200).json('sucessfully edited');
        }
    }
    res.status(404).json('item not found');
});
exports.default = router;
