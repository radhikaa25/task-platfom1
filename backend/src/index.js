const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Connect to MongoDB (replace with your connection string)
mongoose.connect('your-mongo-db-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
