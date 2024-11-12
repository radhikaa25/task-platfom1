// Import packages
const express = require('express');
const cors = require('cors');

// Initialize
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

