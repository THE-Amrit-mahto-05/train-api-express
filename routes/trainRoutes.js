const express = require('express');
const router = express.Router();
const { getTrains, addTrain, deleteTrain } = require('../controllers/trainController');

router.get('/', getTrains);        
router.post('/', addTrain);        
router.delete('/:id', deleteTrain);

module.exports = router;
