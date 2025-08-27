const Train = require('../models/Train');
const getTrains = async (req, res) => {
  try {
    const { from, to } = req.query;
    let filter = {};
    if (from) filter.from = new RegExp(`^${from}$`, 'i');
    if (to) filter.to = new RegExp(`^${to}$`, 'i');

    const trains = await Train.find(filter);
    res.json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addTrain = async (req, res) => {
  try {
    const train = new Train(req.body);
    const savedTrain = await train.save();
    res.status(201).json(savedTrain);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteTrain = async (req, res) => {
  try {
    const { id } = req.params;
    await Train.findByIdAndDelete(id);
    res.json({ message: 'Train deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getTrains, addTrain, deleteTrain };
