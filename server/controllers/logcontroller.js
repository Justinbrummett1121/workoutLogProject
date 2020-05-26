const express = require('express');
const router = express.Router();
const Log = require('../db').import('../models/log');

//log create workout log POST
router.post('/', (req, res) => {
    const logFromUser = {
        description: req.body.description,
        definition: req.body.definition,
        result: req.body.result,
        ownerId: req.body.ownerId
    }
    Log.create(logFromUser)
        .then(log => res.status(200).json({
            log: log
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//log get logs for user GET
router.get('/', (req, res) => {
    Log.findAll()
        .then(logs => res.status(200).json({
            logs: logs
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//log/:id get logs by id GET
router.get('/:id', (req, res) => {
    Log.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(log => res.status(200).json({
            log: log
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//log/:id allows logs to be updated PUT
router.put('/:id', (req, res) => {
    Log.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json({
        log: log
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//log/:id individual logs to be deleted DELETE
router.delete('/:id', (req, res) => {
    Log.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json({
        log: log
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})


module.exports = router;