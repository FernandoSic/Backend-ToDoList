var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const goalInit = mongoose.model('goals', {
    name: String,
    description: String,
    dueDate: String
},'goals');

const goals = [];


router.get('/getGoals', function(req, res, next) {
    goalInit.find().then((response) => 
            res.status(200).json(response)
        ).catch((error) => res.status(500).json(error));
});

router.post('/addGoal', function(req, res, next) {
    if (req.body && req.body.name && req.body.description && req.body.dueDate){
            goals.push(req.body);
            const goal = new goalInit(req.body);
            goal.save().then(() =>
                    res.status(201).json({
                message: 'Goal added successfully',
                task: req.body}
                )).catch((error) => res.status(500).json(error));
        }else {
            res.status(400).json({ error: 'Invalid goal data', task: req.body });
        }
});

router.delete('/removeGoal/:id', function(req, res, next) {
    if (req.params && req.params.id) {
            let id = req.params.id;
            goalInit.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
                .then((response) => {
                    if (response.deletedCount === 0) {
                        return res.status(400).json({ error: 'Goal not found' });
                    }
                    res.status(200).json({
                        message: 'Goal deleted successfully'
                    });
                })
                .catch((error) => res.status(500).json(error));
        } else {
            return res.status(400).json({ error: 'Goal not found' });
        }
});


module.exports = router;