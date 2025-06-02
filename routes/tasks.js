var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const taskInit = mongoose.model('tasks', {
    name: String,
    description: String,
    dueDate: String
},'tasks');

const tasks = [];


router.get('/getTasks', function(req, res, next) {
    taskInit.find().then((response) => 
        res.status(200).json(response)
    ).catch((error) => res.status(500).json(error));

});

router.post('/addTask', function(req, res, next) {
    if (req.body && req.body.name && req.body.description && req.body.dueDate){
        tasks.push(req.body);
        const task = new taskInit(req.body);
        task.save().then(() =>
                res.status(201).json({
            message: 'Task added successfully',
            task: req.body}
            )).catch((error) => res.status(500).json(error));
    }else {
        res.status(400).json({ error: 'Invalid task data', task: req.body });
    }
});

router.delete('/removeTask/:id', function(req, res, next) {
    if (req.params && req.params.id) {
        let id = req.params.id;
        taskInit.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
            .then((response) => {
                if (response.deletedCount === 0) {
                    return res.status(400).json({ error: 'Task not found' });
                }
                res.status(200).json({
                    message: 'Task deleted successfully'
                });
            })
            .catch((error) => res.status(500).json(error));
    } else {
        return res.status(400).json({ error: 'Task not found' });
    }
});

module.exports = router;