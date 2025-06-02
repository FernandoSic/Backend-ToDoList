var express = require('express');
var router = express.Router();

let goals = [
    {
        id: 1,
        name: 'Goal 1',
        description: 'Description for Goal 1',
        dueDate: '02-10-2023'
    },
    {
        id: 2,
        name: 'Goal 2',
        description: 'Description for Goal 2',
        dueDate: '03-10-2023'
    },
    {
        id: 3,
        name: 'Goal 3',
        description: 'Description for Goal 3',
        dueDate: '04-10-2023'

    }
];

router.get('/getGoals', function(req, res, next) {
    res.status(200).json(goals);
});

router.post('/addGoal', function(req, res, next) {
    let timestamp = Date.now() + Math.floor(Math.random() * 1000);
    if (req.body && req.body.name && req.body.description && req.body.dueDate){
        req.body.id = timestamp;
        goals.push(req.body);
        res.status(201).json({
            message: 'Goal added successfully',
            goal: req.body
        });
    } else {
        res.status(400).json({ error: 'Invalid goal data' });
    }
});
router.delete('/removeGoal/:id', function(req, res, next) {
    let id = req.params.id;
    const goal = goals.find(goal => goal.id == id);
    if (!goal) {
        return res.status(400).json({ error: 'Goal not found' });
    }
    else {
        goals = goals.filter(goal => goal.id != id);
        res.status(200).json({
            message: 'Goal deleted successfully',
            goal: goal
        });
    }
});


module.exports = router;