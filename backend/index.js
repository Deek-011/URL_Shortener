const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
require('./Models/db'); // Ensure this connects to MongoDB properly
const authRouter = require('./Routes/authRouter');
const productRouter = require('./Routes/productRouter');
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors()); // Handle cross-origin requests

// Routes
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.get('/ping', (req, res) => {
  res.send('Hey You!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
