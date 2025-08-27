const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const trains = [
  { from: 'Delhi', to: 'Mumbai', price: 4500, train_number: '102531' },
  { from: 'Delhi', to: 'Goa', price: 5500, train_number: '226633' },
  { from: 'Mumbai', to: 'Bangalore', price: 5000, train_number: '036920' },
  { from: 'Delhi', to: 'Bangalore', price: 5000, train_number: '229260' },
  { from: 'Kolkata', to: 'Chennai', price: 5500, train_number: '026654' }
];

app.get('/', (req, res) => {
  res.json(trains);  
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
