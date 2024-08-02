// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

const user = {
  full_name: "john_doe",
  dob: "17091999",
  email: "john@xyz.com",
  roll_number: "ABCD123"
};

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
  const data = req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, error: "Invalid input format" });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

  const highestAlphabet = alphabets.length > 0 
    ? [alphabets.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? -1 : 1)[0]] 
    : [];

  const response = {
    is_success: true,
    user_id: `${user.full_name}_${user.dob}`,
    email: user.email,
    roll_number: user.roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet
  };

  res.status(200).json(response);
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});