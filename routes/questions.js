const express= require('express');

const router = express.Router();

const Questions = require('../models/questions');

//READ all questions
router.get('/', (req, res) => {
    Questions.find()
        .then(feed => res.status(200).json(feed))
        .catch(err => res.status(404).json(err));
});

//CREATE a question
router.post('/', (req, res) => {
    const Question = new Questions({
        question : req.body.question,
        answers : req.body.answers,
        correct: req.body.correct,
        id: req.body.id
    });

    Question.save()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
});

//READ a specific question based on ObjectID(_id)
router.get('/:postId', (req, res) => {
    Questions.findById(req.params.postId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
});

router.get('/find/:postId', (req, res) => {
    Questions.find({ id: req.params.postId })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
});

//DELETE a question
router.delete('/:postId', (req, res) => {
    Questions.findByIdAndRemove(req.params.postId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
});

router.delete('/delete/:postId', (req, res) => {
    Questions.findOneAndRemove({ id: req.params.postId })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
});

//UPDATE a question
router.patch('/:postId', (req, res) => {
    Questions.findByIdAndUpdate(req.params.postId, {
        question: req.body.question,
        answers: req.body.answers,
        correct: req.body.correct,
        id: req.body.id
    })
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json(err));
});


module.exports = router;