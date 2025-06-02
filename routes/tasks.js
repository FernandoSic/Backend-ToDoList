var express = require('express');
var router = express.Router();

let tasks = [
    {
        id: 1,
        name: 'Task 1',
        description: 'Description for Task 1',
        dueDate: '02-10-2023'
    },
    {
        id: 2,
        name: 'Task 2',
        description: 'Description for Task 2',
        dueDate: '03-10-2023'
    },
    {
        id: 3,
        name: 'Task 3',
        description: 'Description for Task 3',
        dueDate: '04-10-2023'

    }
];

router.get('/getTasks', function(req, res, next) {
    res.json(tasks);
});

router.post('/addTask', function(req, res, next) {
    let timestamp = Date.now() + Math.floor(Math.random() * 1000);
    if (req.body && req.body.name && req.body.description && req.body.dueDate){
        req.body.id = timestamp;
        tasks.push(req.body);
        res.json({
            message: 'Task added successfully',
            task: req.body
        });
    }
});

router.delete('/removeTask/:id', function(req, res, next) {
    if (req.params && req.params.id) {
        let id = req.params.id;
        tasks = tasks.filter(task => task.id != id);
        res.json({
            message: 'Task deleted successfully'});
    } else{
        res.json([{ }]);
    }
})


module.exports = router;